import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayermodalComponent } from './playermodal/playermodal.component';

import homeTeamsData from 'src/assets/teams.json';
import BestPlayers from 'src/assets/players.json';
import matchesData from 'src/assets/matches.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sportApp';
  constructor() {
    this.initializeDummyData();
  }

  initializeDummyData() {
    if (localStorage.getItem('dummyDataLoaded') != '1') {
      localStorage.setItem('matches', JSON.stringify(matchesData));
      localStorage.setItem('players', JSON.stringify(BestPlayers));
      localStorage.setItem('teams', JSON.stringify(homeTeamsData));

      localStorage.setItem('dummyDataLoaded', '1');
    }
  }
}
