import { Component } from '@angular/core';
import Players from 'src/assets/players.json';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
  playerData = Players;
}
