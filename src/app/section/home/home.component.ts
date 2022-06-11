import { Component } from '@angular/core';
import homeTeamsData from 'src/assets/teams.json';
import BestPlayers from 'src/assets/players.json';
import matchesData from 'src/assets/matches.json';
import { FormGroup, Validators } from '@angular/forms';
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
  formBuilder: any;

  constructor(private matchService: MatchService) {}

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
    console.log(this.filters);
    return this.matchService.latest(this.filters);
  }

  // this filter matches only for lisbon
  filterLocation(Matches: any[]): any[] {
    return Matches.filter((e) => e.location === 'London');
  }

  // this will create new game in homepage
  private createGame(): FormGroup {
    return this.formBuilder.group({
      team1: ['', Validators.required],
      team2: ['', Validators.required],
      time: ['', Validators.required],
      dateofgame: ['', Validators.required],
    });
  }

  gameForm: any = FormGroup;
  homeTeams = homeTeamsData;
  Players = BestPlayers;
  Matches = matchesData;
}
