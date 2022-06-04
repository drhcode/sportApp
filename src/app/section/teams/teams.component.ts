import { Component } from '@angular/core';
import teamsData from 'src/assets/teams.json';

interface Teams {
  team_id: String;
  name: String;
  country: String;
  description: String;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  teams: Teams[] = teamsData;
}
