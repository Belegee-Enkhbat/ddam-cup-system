import { X } from 'lucide-react';
import type { Player } from '../types';
import { SPORTS } from '../sports';

interface PlayerModalProps {
  player: Player;
  onClose: () => void;
}

export function PlayerModal({ player, onClose }: PlayerModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div
        className="rounded-lg border border-slate-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{
          backgroundColor: 'rgb(2, 6, 23)',
          animation: 'fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-8 border-b border-slate-800 sticky top-0 bg-slate-950/60 backdrop-blur-xl">
          <div className="flex-1">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">
              {player.name}
            </h2>
            <p className="text-xs text-slate-500 font-light tracking-widest uppercase mt-2">
              {player.division}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-400 hover:bg-slate-900/50 p-3 rounded-lg transition-all flex-shrink-0 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-6">
          {/* Player Image */}
          <div className="flex justify-center">
            <div className="relative group/modal-img">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover/modal-img:opacity-100 transition-opacity duration-500" />
              <img
                src={player.imageUrl}
                alt={player.name}
                className="w-48 h-48 rounded-lg object-cover border border-slate-800 relative group-hover/modal-img:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Player Info */}
          <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-500">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-slate-500 font-light tracking-widest uppercase mb-2">
                  Division
                </p>
                <p className="text-sm font-medium text-white">{player.division}</p>
              </div>
              {player.gender && (
                <div>
                  <p className="text-xs text-slate-500 font-light tracking-widest uppercase mb-2">
                    Gender
                  </p>
                  <p className="text-sm font-medium text-white capitalize">{player.gender}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sport Scores */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-black text-white tracking-widest uppercase mb-6">
                Performance Scores
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {SPORTS.map((sport) => {
                  const score = player.sportScores[sport.key];
                  if (score === undefined) return null;

                  const percentage = (score / 10) * 100;

                  return (
                    <div
                      key={sport.key}
                      className="relative p-5 rounded-lg border border-slate-800/60 bg-gradient-to-br from-slate-900/60 to-slate-950/40 hover:from-slate-900/80 hover:to-slate-950/60 hover:border-slate-700 transition-all duration-500 group/score overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover/score:opacity-20 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-3 flex-1">
                            <div className={`p-2 rounded-lg ${sport.badgeClass} flex-shrink-0 group-hover/score:scale-110 transition-transform duration-300`}>
                              <sport.icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-slate-400 font-light tracking-widest uppercase">
                                {sport.label}
                              </p>
                              <p className="text-lg font-black text-white mt-0.5">
                                {score.toFixed(1)}
                              </p>
                            </div>
                          </div>
                          <span className={`text-xs font-black px-2 py-1 rounded border ${sport.badgeClass} flex-shrink-0`}>
                            {percentage.toFixed(0)}%
                          </span>
                        </div>

                        <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50 group-hover/score:border-slate-600 transition-all duration-300">
                          <div
                            className="h-full transition-all duration-700"
                            style={{
                              width: `${percentage}%`,
                              background: `linear-gradient(90deg, var(--color-from), var(--color-to))`,
                              '--color-from': sport.accentClass.includes('cyan') ? '#06b6d4' : sport.accentClass.includes('orange') ? '#fb923c' : sport.accentClass.includes('sky') ? '#0ea5e9' : sport.accentClass.includes('lime') ? '#84cc16' : sport.accentClass.includes('teal') ? '#14b8a6' : sport.accentClass.includes('emerald') ? '#10b981' : sport.accentClass.includes('amber') ? '#f59e0b' : sport.accentClass.includes('rose') ? '#f43f5e' : '#8b5cf6',
                              '--color-to': 'rgba(255,255,255,0.1)',
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40 text-center hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-500">
            <p className="text-xs font-light text-slate-500 tracking-widest uppercase">
              Collective Strength Through Diversity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
