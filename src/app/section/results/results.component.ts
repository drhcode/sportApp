import { Component } from '@angular/core';
import matchesData from 'src/assets/matches.json';

interface matchData {
  team1: String;
  logo: String;
  team2: String;
  team1goals: Number;
  team2goals: Number;
  team2logo: String;
  team1logo: String;
  stokecitygolas: Number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  matches = matchesData;
  pageTitle = ' Results';
}
