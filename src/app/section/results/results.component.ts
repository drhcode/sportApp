import { Component } from '@angular/core';
import matchesData from 'src/assets/matches.json';

interface Matches {
  time: String;
  // name: String;
  score: number;
  logo: String;
  location: String;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  matches = matchesData;
}
