import { Component, OnInit } from '@angular/core';
import { intersection } from 'src/app/utils/types/intersection.type';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  skillTime: number = 0;
  skillsAnimated: boolean = false;
  skillsShown: number = 0;

  skillLevel: string = '80%';
  label: string = 'JavaScript';

  skills = [
    {
      label: 'HTML',
      skillLevel: '80%',
    },
    {
      label: 'CSS',
      skillLevel: '80%',
    },
    {
      label: 'JavaScript',
      skillLevel: '80%',
    },
    {
      label: 'Angular',
      skillLevel: '60%',
    },
    {
      label: 'Postgres',
      skillLevel: '65%',
    },
    {
      label: 'Scrum',
      skillLevel: '70%',
    },
    {
      label: 'Test Automation',
      skillLevel: '70%',
    },
    {
      label: 'Flask',
      skillLevel: '50%',
    },
  ];

  ngOnInit(): void {}

  onIntersection({ target, visible }: intersection, i: number) {
    setTimeout(() => {
      target.classList.add('animate__animated');
      target.classList.add('animate__fadeInRight');
    }, this.skillTime);
    this.skillTime += 200;
    this.skillsShown++;
  }
}
