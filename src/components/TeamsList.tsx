import type { Player, Team } from '../types';
import { TeamCard } from './TeamCard';

interface TeamsListProps {
  teams: Team[];
  isVisible: boolean;
  onPlayerSelect: (player: Player) => void;
}

export function TeamsList({ teams, isVisible, onPlayerSelect }: TeamsListProps) {
  return (
    <div className="flex-1 flex items-center relative z-10">
      <div className="w-full flex items-center gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
        {teams.map((team, teamIdx) => (
          <TeamCard
            key={team.id}
            team={team}
            teamIdx={teamIdx}
            isVisible={isVisible}
            onPlayerSelect={onPlayerSelect}
          />
        ))}
      </div>
    </div>
  );
}
