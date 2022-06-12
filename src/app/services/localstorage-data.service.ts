import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageDataService {
  key: string = '';

  constructor() {}

  all() {
    return JSON.parse(localStorage.getItem(this.key) || '{}');
  }

  create(item: any) {
    let items = this.all();
    items.push(item);
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  delete(item: any) {
    let items = this.all();
    items.pop(item);
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
