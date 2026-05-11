import { useEffect, useState } from 'react';

export function useSportRouting(): [string | null, (sport: string | null) => void] {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  // Initialize selected sport from URL path
  useEffect(() => {
    const path = window.location.pathname.replace(/^\/$/, '').replace(/^\//, '');
    setSelectedSport(path || null);
  }, []);

  // Listen for URL changes
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/$/, '').replace(/^\//, '');
      setSelectedSport(path || null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setSport = (sport: string | null) => {
    if (sport === null) {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${sport}`);
    }
    setSelectedSport(sport);
  };

  return [selectedSport, setSport];
}
