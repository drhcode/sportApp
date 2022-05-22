import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homePhoto: string = 'assets/img/home.jpg';
  constructor() {}

  ngOnInit(): void {}
}
