import { Component } from '@angular/core';
import homeTeamsData from 'src/assets/teams.json';
import AllPlayers from 'src/assets/players.json';
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
  players = AllPlayers;
  filterData: any = [];

  ngOnInit() {
    this.filterData = [...this.matches, ...this.teams];
  }
}
