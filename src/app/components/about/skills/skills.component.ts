import { Component, OnInit } from '@angular/core';
import { intersection } from 'src/app/utils/types/intersection.type';
import { skill } from 'src/app/utils/types/skill.type';

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

  skills: skill[] = [
    {
      label: 'HTML',
      skillLevel: '90%',
      info: false,
      infoTxt: '',
    },
    {
      label: 'CSS',
      skillLevel: '90%',
      info: false,
      infoTxt: '',
    },
    {
      label: 'JavaScript',
      skillLevel: '80%',
      info: false,
      infoTxt: '',
    },
    {
      label: 'Angular',
      skillLevel: '70%',
      info: false,
      infoTxt: '',
    },
    {
      label: 'Database',
      skillLevel: '65%',
      info: true,
      infoTxt: 'Focus on Postgres',
    },
    {
      label: 'Agile',
      skillLevel: '70%',
      info: true,
      infoTxt:
        'Working as Agile Tester / Testautomation engineer and as a Scrum Master',
    },
    {
      label: 'Test Automation',
      skillLevel: '70%',
      info: true,
      infoTxt: 'Tosca (Expert), Selenium (Foundation), Protractor (Foundation)',
    },
    {
      label: 'Flask',
      skillLevel: '50%',
      info: false,
      infoTxt: '',
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
