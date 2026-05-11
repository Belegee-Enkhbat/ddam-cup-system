import { useEffect, useState } from 'react';
import type { Team } from '../types';

interface UseTeamsDataResult {
  teams: Team[];
  loading: boolean;
  error: string | null;
  isVisible: boolean;
}

export function useTeamsData(): UseTeamsDataResult {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load teams data');
        return res.json();
      })
      .then((data) => {
        setTeams(data.teams);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      });
  }, []);

  return { teams, loading, error, isVisible };
}
