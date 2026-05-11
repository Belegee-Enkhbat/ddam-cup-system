import { getSportDefinition } from '../../sports';

const SPORT_KEY = 'chess';

export function ChessPage() {
  const sport = getSportDefinition(SPORT_KEY);

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 overflow-y-auto">
      <div className="w-full max-w-2xl px-8 py-12">
        <div className="text-center mb-12">
          <div className={`p-6 rounded-lg ${sport.badgeClass} w-fit mx-auto mb-6`}>
            <sport.icon className="w-16 h-16" strokeWidth={1.5} />
          </div>
          <h2 className={`text-4xl font-black ${sport.accentClass} mb-2`}>
            {sport.label}
          </h2>
          <p className="text-lg font-bold text-white mb-4">
            {sport.tournamentFormat}
          </p>
          <p className="text-sm text-slate-400">
            {sport.description}
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40">
            <h3 className="text-sm font-black text-white tracking-widest uppercase mb-4">
              Format Details
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>• Round-robin style tournament format</p>
              <p>• Players paired by current strength rating</p>
              <p>• Each player faces opponents of similar ability</p>
              <p>• Provides balanced competition throughout tournament</p>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40">
            <h3 className="text-sm font-black text-white tracking-widest uppercase mb-4">
              Current Matchups
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="text-slate-500">Matchup details to be updated with tournament progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
