import { Component } from '@angular/core';
import homeTeamsData from 'src/assets/teams.json';
import BestPlayers from 'src/assets/players.json';

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
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homePhoto: string = 'assets/img/home.jpg';

  findBestPlayer(Players: any[]): any[] {
    return Players.filter((p) => p.goals > 30);
  }
  bestPlayer(Players: any[]): any[] {
    return Players.filter((p) => p.goals > 50);
  }

  homeTeams = homeTeamsData;
  Players = BestPlayers;
}
