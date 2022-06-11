import { Injectable } from '@angular/core';
import matchesData from 'src/assets/matches.json';
import { Observable, of } from 'rxjs';
import { Match } from 'src/app/shared/models/match';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  // get(): Observable<Match[]> {
  //   return of(<Match[]>matchesData);
  // }
  // add(match: Match): Observable<number> {
  //   const index: number = matchesData.findIndex((data) => data.id === match.id);
  //   if (index == -1) {
  //     matchesData.push(Match);
  //   }
  //   return of(matchesData.length);
  // }
}
