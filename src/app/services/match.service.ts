import { Injectable } from '@angular/core';
import { MatchKey } from '../shared/models/match';
import { LocalStorageDataService } from './localstorage-data.service';
import matchesData from 'src/assets/matches.json';

@Injectable({
  providedIn: 'root',
})
export class MatchService extends LocalStorageDataService {
  // key: string = MatchKey;

  constructor() {
    super();
    this.key = MatchKey;
    // localStorage.setItem('matches', JSON.stringify(matchesData));
  }

  latest(filters: any) {
    return this.all().filter((m: any) => {
      return (
        (filters.year == '' ||
          new Date(m.dateOfMatch).getFullYear() == filters.year) &&
        (filters.location == '' || m.location == filters.location)
      );
    });
  }
}
