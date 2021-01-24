import { Component, Input, OnInit } from '@angular/core';
import { project } from 'src/app/utils/types/project.type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  @Input() projects: project[] = [];

  ngOnInit(): void {
    // console.log(this.projects);
  }
}
