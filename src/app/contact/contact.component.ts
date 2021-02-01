import { Component, OnInit } from '@angular/core';
import { ERIC_IMG_SRC } from '../utils/constants/ERIC_IMG_SRC';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  heading: string = 'Contact';
  ericImgUrl: string = ERIC_IMG_SRC;
  linkedInSrc: string = 'assets/pictures/linkedin.png';
  linkedInEricUrl: string = 'http://www.linkedin.com/in/eric-bruch';
  gitHubEricUrl: string = 'https://github.com/EricBruch';

  ngOnInit(): void {}
}
