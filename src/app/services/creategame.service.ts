import { Injectable } from '@angular/core';
import matchesData from 'src/assets/matches.json';
import { Observable, of } from 'rxjs';
import { Match } from 'src/app/shared/models/match';

@Injectable({
  providedIn: 'root',
})
export class CreateGameService {}
