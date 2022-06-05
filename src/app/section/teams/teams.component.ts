import { Component } from '@angular/core';
import teamsData from 'src/assets/teams.json';

export interface Teams {
  team_id: String;
  name: String;
  country: String;
  description: String;
  logo: String;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  teams = teamsData;
}
