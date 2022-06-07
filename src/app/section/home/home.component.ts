import { Component } from '@angular/core';
import homeTeamsData from 'src/assets/teams.json';
import BestPlayers from 'src/assets/players.json';
import matchesData from 'src/assets/matches.json';

interface homeTeams {
  team_id: String;
  name: String;
  country: String;
  description: String;
  logo: String;
}

interface Players {
  player_id: Number;
  firstName: String;
  lastName: String;
  teamID: String;
  position: String;
  goals: Number;
  logo: String;
}

interface matchData {
  team1: String;
  logo: String;
  team2: String;
  team1goals: Number;
  team2goals: Number;
  team2logo: String;
  team1logo: String;
  stokecitygolas: Number;
  date: String;
  location: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePhoto: string = 'assets/img/home.jpg';

  // Filter best players
  findBestPlayer(Players: any[]): any[] {
    return Players.filter((p) => p.goals > 30);
  }

  // Check for the best players
  bestPlayer(Players: any[]): any[] {
    return Players.filter((p) => p.goals > 50);
  }
  // Sort latest matches in homepage
  latestMatches(Matches: any[]): any[] {
    return Matches.filter((e) => e.location === 'Lisbon');
  }

  filterMatches(Matches: any[]): any[] {
    return Matches.filter(
      (e) => e.location === 'London' && e.location === 'Lisbon'
    );
  }

  filterLocation(Matches: any[]): any[] {
    return Matches.filter((e) => e.location === 'Lisbon');
  }

  homeTeams = homeTeamsData;
  Players = BestPlayers;
  Matches = matchesData;
}
