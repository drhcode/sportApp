import { Component } from '@angular/core';
import Players from 'src/assets/players.json';

interface Players {
  player_id: Number;
  firstName: String;
  lastName: String;
  teamID: String;
  position: String;
  goals: Number;
  logo: String;
  age: Number;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
  playerData = Players;
}
