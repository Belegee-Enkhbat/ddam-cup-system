export interface Player {
  id: string;
  name: string;
  division: string;
  imageUrl: string;
  gender: 'male' | 'female' | null;
  sportScores: Record<string, number>;
}

export interface Team {
  id: string;
  name: string;
  leaderName: string;
  leaderImageUrl: string;
  color: string;
  draftedPlayers?: Player[];
  players?: Player[];
}

export interface TeamsData {
  teams: Team[];
}
