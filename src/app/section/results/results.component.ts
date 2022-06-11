import { Component } from '@angular/core';
import matchesData from 'src/assets/matches.json';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  matches = matchesData;
  pageTitle = ' Results';
}
