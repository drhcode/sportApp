import { Component } from '@angular/core';
import homeTeamsData from 'src/assets/teams.json';
import BestPlayers from 'src/assets/players.json';
import matchesData from 'src/assets/matches.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userName: string = 'Dori';
  search: any;
  matches = matchesData;
  teams = homeTeamsData;
  filterData: any = [];

  ngOnInit() {
    this.filterData = [...this.matches, ...this.teams];
  }

  onChange() {
    this.filterData = this.matches.filter(
      (datum) =>
        datum.team1.indexOf(this.search) > -1 ||
        datum.team2.indexOf(this.search) > -1
    );
    console.log(this.filterData);
  }
}
