import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {

  constructor() { }

  @Input()
  heading: string = ''

  ngOnInit(): void {
  }

}
