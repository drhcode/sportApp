import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayermodalComponent } from './playermodal/playermodal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sportApp';

  constructor(private dialogRef: MatDialog) {}
}
