import { ChevronRight } from 'lucide-react';
import type { Player, Team } from '../types';
import { getPlayerQuality } from '../utils/playerQuality';

interface TeamCardProps {
  team: Team;
  teamIdx: number;
  isVisible: boolean;
  onPlayerSelect: (player: Player) => void;
}

export function TeamCard({ team, teamIdx, isVisible, onPlayerSelect }: TeamCardProps) {
  const players = team.draftedPlayers || team.players || [];

  return (
    <div
      className="relative flex-shrink-0 w-full sm:w-96 md:w-full lg:w-96 rounded-lg border border-slate-800 bg-slate-950/40 backdrop-blur-xl overflow-hidden snap-center group h-full max-h-[calc(100vh-200px)] flex flex-col"
      style={{
        animation: isVisible ? `slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${teamIdx * 0.12}s both` : 'none',
      }}
    >
      {/* Team Header */}
      <div className="relative px-6 py-6 border-b border-slate-800/50 flex-shrink-0" style={{ backgroundColor: 'rgb(5, 17, 39)', backgroundImage: 'none' }}>
        <div
          onClick={() => {
            const captain = players.find(p => p.name.toLowerCase() === team.leaderName.toLowerCase());
            if (captain) {
              onPlayerSelect(captain);
            }
          }}
          className="w-full flex items-center gap-4 cursor-pointer group/captain transition-all duration-300"
        >
          <div className="relative group/avatar">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500" />
            <img
              src={team.leaderImageUrl}
              alt={team.leaderName}
              className="w-12 h-12 rounded-lg object-cover border border-slate-700 relative group-hover/captain:border-cyan-400 group-hover/captain:brightness-110 transition-all duration-300"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-white text-sm tracking-tight uppercase">
              {team.name}
            </h3>
            <p className="text-xs text-slate-500 font-light mt-1 group-hover/captain:text-cyan-300 transition-colors duration-300">{team.leaderName}</p>
            <p className="text-xs text-slate-600 font-light mt-0.5">
              {players.length} {players.length === 1 ? 'member' : 'members'}
            </p>
          </div>
        </div>
      </div>

      {/* Team Players */}
      <div className="flex-1 px-6 py-6 space-y-3 overflow-y-auto">
        {players.map((player, playerIdx) => {
          return (
            <button
              key={player.id}
              onClick={() => onPlayerSelect(player)}
              className="w-full group/player rounded-lg bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 text-left backdrop-blur-sm overflow-hidden flex flex-row items-center gap-2 p-2 relative hover:shadow-lg hover:shadow-cyan-500/10"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${0.4 + teamIdx * 0.12 + playerIdx * 0.06}s both` : 'none',
              }}
            >
              <div className="shimmer-effect opacity-0 group-hover/player:opacity-100 transition-opacity duration-500" />

              <img
                src={player.imageUrl}
                alt={player.name}
                className="w-16 h-16 object-cover rounded-lg border border-slate-700 flex-shrink-0 group-hover/player:brightness-110 transition-all duration-500"
              />

              <div className="flex-1 flex flex-col min-w-0">
                <p className="text-white font-bold text-xs truncate leading-tight group-hover/player:text-cyan-300 transition-colors duration-300">
                  {player.name}
                </p>
                <p className="text-xs text-slate-500 font-light mt-0.5 truncate">
                  {player.division}
                </p>

                <div className="mt-1 px-1.5 py-0.5 rounded border border-slate-500 text-center group-hover/player:scale-105 transition-transform duration-300 w-fit">
                  <p className="text-xs font-black text-slate-300">
                    {(Object.values(player.sportScores).reduce((a, b) => a + b, 0) / Object.values(player.sportScores).length).toFixed(1)}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
