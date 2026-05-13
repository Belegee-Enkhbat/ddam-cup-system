import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Player, Team } from '../types';
import { TeamCard } from './TeamCard';

interface TeamsListProps {
  teams: Team[];
  isVisible: boolean;
  onPlayerSelect: (player: Player) => void;
}

export function TeamsList({ teams, isVisible, onPlayerSelect }: TeamsListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentTeamIdx, setCurrentTeamIdx] = useState(0);

  const goToPreviousTeam = () => {
    const newIdx = Math.max(0, currentTeamIdx - 1);
    setCurrentTeamIdx(newIdx);
    scrollToTeam(newIdx);
  };

  const goToNextTeam = () => {
    const newIdx = Math.min(teams.length - 1, currentTeamIdx + 1);
    setCurrentTeamIdx(newIdx);
    scrollToTeam(newIdx);
  };

  const scrollToTeam = (idx: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const teamElements = container.querySelectorAll('[data-team-card]');
      if (teamElements[idx]) {
        teamElements[idx].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  return (
    <div className="flex-1 relative flex items-center px-2 py-6">
      <button
        onClick={goToPreviousTeam}
        disabled={currentTeamIdx === 0}
        className="absolute left-2 z-50 p-2 rounded bg-slate-900/90 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700 hover:border-slate-600 transition-all duration-300"
        aria-label="Previous team"
      >
        <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2} />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex-1 flex items-center gap-6 overflow-x-auto snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {teams.map((team, teamIdx) => (
          <div key={team.id} data-team-card>
            <TeamCard
              team={team}
              teamIdx={teamIdx}
              isVisible={isVisible}
              onPlayerSelect={onPlayerSelect}
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToNextTeam}
        disabled={currentTeamIdx === teams.length - 1}
        className="absolute right-2 z-50 p-2 rounded bg-slate-900/90 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700 hover:border-slate-600 transition-all duration-300"
        aria-label="Next team"
      >
        <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
      </button>
    </div>
  );
}
