export interface Match {
  id: number;
  team1Name: string;
  team2Name: string;
  timeOfMatch: number;
  dateOfMatch: string;
  location: string;
}

export const MatchKey = 'matches';
