import { Component, OnInit } from '@angular/core';
import { intersection } from 'src/app/utils/types/intersection.type';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ericImgUrl: string = 'assets/pictures/eric_bruch.jpg';
  heading_0: string = 'about';
  heading_1: string = 'portfolio';

  ericContVisible: boolean = true;

  ngOnInit(): void {}

  onIntersection({ target, visible }: intersection): void {
    if (!this.ericContVisible && visible) {
      this.ericContVisible = !this.ericContVisible;
    }
  }
}
