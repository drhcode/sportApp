import { Component, OnInit } from '@angular/core';
import homeTeamsData from 'src/assets/teams.json';
import BestPlayers from 'src/assets/players.json';
import matchesData from 'src/assets/matches.json';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  filters = {
    year: '',
    location: '',
  };

  createGameForm = new FormGroup({
    team1Name: new FormControl(''),
    team2Name: new FormControl(''),
    dateOfMatch: new FormControl(''),
    timeOfMatch: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private matchService: MatchService) {}
  gameForm: any = FormGroup;
  homeTeams = homeTeamsData;
  Players = BestPlayers;
  Matches = matchesData;

  // Filter best players
  findBestPlayer(Players: any[]): any[] {
    return Players.filter((p) => p.goals > 30);
  }

  // Check for the best players
  bestPlayer(Players: any[]): any[] {
    return Players.filter((p) => p.goals > 50);
  }
  // Sort latest matches in homepage
  latestMatches(Matches: any[]): any[] {
    return this.matchService.latest(this.filters);
  }
  onSubmit() {
    console.log(this.createGameForm.value);
    return this.matchService.create(this.createGameForm.value);
  }

  deleteGame() {
    return this.matchService.delete(this.createGameForm.value);
  }
}
