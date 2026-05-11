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
    <div className="flex-1 flex items-center relative z-10 gap-4">
      <button
        onClick={goToPreviousTeam}
        disabled={currentTeamIdx === 0}
        className="md:hidden flex-shrink-0 p-1 rounded bg-slate-900/60 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-800 hover:border-slate-700 transition-all duration-300"
        aria-label="Previous team"
      >
        <ChevronLeft className="w-4 h-4 text-white" strokeWidth={2} />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex-1 flex items-center gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
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
        className="md:hidden flex-shrink-0 p-1 rounded bg-slate-900/60 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-800 hover:border-slate-700 transition-all duration-300"
        aria-label="Next team"
      >
        <ChevronRight className="w-4 h-4 text-white" strokeWidth={2} />
      </button>
    </div>
  );
}
