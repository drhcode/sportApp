import { Component } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  location: any;
  isAdvancedRoute(): boolean {
    return this.location.path().indexOf('/advanced') > -1;
  }
}
