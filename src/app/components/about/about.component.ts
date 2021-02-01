import { Component, OnInit } from '@angular/core';
import { ERIC_IMG_SRC } from 'src/app/utils/constants/ERIC_IMG_SRC';
import { intersection } from 'src/app/utils/types/intersection.type';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ericImgUrl: string = ERIC_IMG_SRC;
  heading_0: string = 'about';

  ericContVisible: boolean = true;

  ngOnInit(): void {}

  onIntersection({ target, visible }: intersection): void {
    if (!this.ericContVisible && visible) {
      this.ericContVisible = !this.ericContVisible;
    }
  }
}
