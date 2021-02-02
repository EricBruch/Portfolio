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
  linkedInImgSrc: string = 'assets/pictures/icons/linkedin.png';
  linkedInUrlEric: string = 'https://www.linkedin.com/in/eric-bruch';
  githubUrlEric: string = 'https://github.com/EricBruch';
  githubImgSrc: string = 'assets/pictures/icons/github.png';

  ngOnInit(): void {}
}
