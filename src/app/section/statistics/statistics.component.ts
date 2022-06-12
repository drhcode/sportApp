import { Component } from '@angular/core';
import matchesData from 'src/assets/matches.json';
import Players from 'src/assets/players.json';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  matches = matchesData;
  playersData = Players;

  bestMatch(Matches: any[]): any[] {
    return Matches.filter((e) => e.team1goals + e.team2goals >= 5);
  }
  bestPlayers(Players: any[]): any[] {
    return Players.filter((e) => e.goals > 35);
  }
}
