import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ericImgUrl: string = 'assets/pictures/eric_bruch.jpg';
  heading_0: string = 'about';
  heading_1: string = 'portfolio'

  ngOnInit(): void {}
}
