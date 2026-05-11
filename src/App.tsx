import { useRef } from 'react';
import type { Player } from './types';
import { useTeamsData } from './hooks/useTeamsData';
import { useSportRouting } from './hooks/useSportRouting';
import { useVantaBackground } from './hooks/useVantaBackground';
import { GlobalStyles } from './components/GlobalStyles';
import { LoadingScreen } from './components/LoadingScreen';
import { ErrorScreen } from './components/ErrorScreen';
import { Header } from './components/Header';
import { BackgroundIcons } from './components/BackgroundIcons';
import { SportPageRouter } from './pages/SportPageRouter';
import { TeamsList } from './components/TeamsList';
import { PlayerModal } from './components/PlayerModal';
import { useState } from 'react';

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { teams, loading, error, isVisible } = useTeamsData();
  const [selectedSport, setSport] = useSportRouting();
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  useVantaBackground(mainRef);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'rgb(2, 6, 23)' }}>
      <GlobalStyles />

      <Header isVisible={isVisible} selectedSport={selectedSport} onSportChange={setSport} />

      <main className="flex-1 px-8 py-12 overflow-hidden flex flex-col relative z-0" ref={mainRef}>
        <BackgroundIcons />

        {selectedSport ? (
          <SportPageRouter selectedSport={selectedSport} />
        ) : (
          <TeamsList teams={teams} isVisible={isVisible} onPlayerSelect={setSelectedPlayer} />
        )}
      </main>

      {selectedPlayer && (
        <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      )}

      <footer
        className="border-t border-slate-800 flex-shrink-0"
        style={{
          animation: isVisible ? 'slideInUp 0.8s ease-out 0.6s both' : 'none',
        }}
      >
        <div className="max-w-full mx-auto px-8 py-8 text-center hover:bg-slate-950/20 transition-colors duration-500">
          <p className="text-xs text-slate-500 font-light tracking-widest uppercase">
            Team Players Dashboard
          </p>
        </div>
      </footer>
    </div>
  );
}
