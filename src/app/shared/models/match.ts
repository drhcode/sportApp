export interface Match {
  id: number;
  team1logo: string;
  team1Name: string;
  team2Name: string;
  team2logo: string;
  timeOfMatch: number;
  dateOfMatch: string;
  location: string;
}

export const MatchKey = 'matches';
