import { Users } from 'lucide-react';
import { SPORTS } from '../sports';

interface HeaderProps {
  isVisible: boolean;
  selectedSport: string | null;
  onSportChange: (sport: string | null) => void;
}

export function Header({ isVisible, selectedSport, onSportChange }: HeaderProps) {
  const handleSportSelect = (sport: string | null) => {
    onSportChange(sport);
  };

  return (
    <header
      className="border-b border-slate-800 sticky top-0 z-50 backdrop-blur-xl bg-slate-950/40 flex-shrink-0"
      style={{
        animation: isVisible ? 'slideInUp 0.8s ease-out' : 'none',
      }}
    >
      <div className="max-w-full mx-auto px-8 py-8 relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-black text-white tracking-tight uppercase relative">
              {selectedSport ? SPORTS.find(s => s.key === selectedSport)?.label : 'Team Players'}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-full transition-all duration-500" />
            </h1>
            <p className="text-xs text-slate-500 font-light tracking-widest uppercase mt-2">
              {selectedSport ? SPORTS.find(s => s.key === selectedSport)?.tournamentFormat : 'Collective Strength Network'}
            </p>
          </div>
          <button
            onClick={() => handleSportSelect(null)}
            className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-800 transition-all duration-300"
          >
            <img src="/ddam-logo-text2.png" alt="DDAM Logo" className="w-36 h-auto" />
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-8 px-8">
          <button
            onClick={() => handleSportSelect(null)}
            className={`hidden sm:flex flex-shrink-0 px-4 py-1.5 rounded-lg border text-xs font-bold tracking-widest uppercase transition-all duration-300 items-center gap-2 whitespace-nowrap ${
              selectedSport === null
                ? 'border-cyan-400/50 bg-cyan-500/12 text-cyan-50'
                : 'border-slate-700 bg-slate-900/40 hover:border-slate-600 text-slate-400 hover:text-slate-300'
            }`}
          >
            Team Players
          </button>

          <button
            onClick={() => handleSportSelect(null)}
            className={`sm:hidden flex-shrink-0 p-1.5 rounded-lg border transition-all duration-300 ${
              selectedSport === null
                ? 'border-cyan-400/50 bg-cyan-500/12'
                : 'border-slate-700 bg-slate-900/40 hover:border-slate-600'
            }`}
            title="Team Players"
          >
            <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>

          {SPORTS.map((sport) => (
            <button
              key={sport.key}
              onClick={() => handleSportSelect(sport.key)}
              className={`flex-shrink-0 transition-all duration-300 ${
                selectedSport === sport.key
                  ? `${sport.badgeClass} border border-current`
                  : 'border border-slate-700 bg-slate-900/40 hover:border-slate-600'
              } hidden sm:flex px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest uppercase items-center gap-2 whitespace-nowrap`}
            >
              <sport.icon className="w-4 h-4 text-white" strokeWidth={1.5} />
              <span className="text-white">{sport.label}</span>
            </button>
          ))}

          {SPORTS.map((sport) => (
            <button
              key={`mobile-${sport.key}`}
              onClick={() => handleSportSelect(sport.key)}
              className={`sm:hidden flex-shrink-0 p-1.5 rounded-lg transition-all duration-300 ${
                selectedSport === sport.key
                  ? `${sport.badgeClass} border border-current`
                  : 'border border-slate-700 bg-slate-900/40 hover:border-slate-600'
              }`}
              title={sport.label}
            >
              <sport.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
