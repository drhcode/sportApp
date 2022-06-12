import { Component } from '@angular/core';
import teamsData from 'src/assets/teams.json';
import players from 'src/assets/players.json';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  teams = teamsData;
  playersInfo = players;
}
