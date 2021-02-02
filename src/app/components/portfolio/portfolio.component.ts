import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { projectType } from 'src/app/utils/enums/projectType.enum';
import { project } from 'src/app/utils/types/project.type';
import { projects } from 'src/app/utils/types/projects.type';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  heading: string = 'portfolio';

  projects: projects = {
    angular: [],
    javascript: [],
    htmlCss: [],
    all: [],
  };

  ngOnInit(): void {
    this.createProjects();
  }

  createProjects() {
    this.createSadey();
    this.createElPolloLoco();
    this.createJoin();
    this.createWinterWonderLand();
    this.createAngularFirst();
    this.createSakuraRamen();
  }

  createJoin() {
    let join: project = {
      name: 'Join',
      type: projectType.javascript,
      typeWritten: 'JavaScript',
      headline: 'task management application',
      description: `Join is a task-management application based on the Eisenhower urgent / importance principle.
        The frontend of the application is created in vanilla JS/HTML/CSS. The backend is created
        with Firebase from Google.`,
      imgSrc: 'assets/pictures/join.jpg',
      url: 'http://eric-bruch.developerakademie.com/join/index.html',
    };
    this.addToProjects(join, projectType.javascript);
  }

  createSadey() {
    let sadey: project = {
      name: 'Sadey',
      type: projectType.angular,
      typeWritten: 'Angular',
      headline: `MVP of a platform to book locations for events`,
      description: `Sadey is a MVP product of a event booking location. 
      It offers the possibility for location providers to showcase locations 
      to eventler. Eventler, can inspect locations and choose to book locations
      for one or several specific timeslots. Sadey was created with Angular & TypeScript, and
      AngularMaterial. It is responsive for desktop, tablet and smartphone. 
      For backend Firebase from Google was used.`,
      imgSrc: 'assets/pictures/sadey.jpg',
      url: 'https://sadey-demo.web.app/',
    };
    this.addToProjects(sadey, projectType.angular);
  }

  createElPolloLoco() {
    let elPolloLocco: project = {
      name: 'El Pollo Locco',
      type: projectType.angular,
      typeWritten: 'Angular',
      headline: `2-D Mexican Jump 'n Run`,
      description: `El Pollo Locco is a 2-D Jump 'n Run game designed in mexican style. 
        The hero has to jump over chickens and reach the end Boss in order to defeat 
        the "locco" chicken with tabasco bottles. El Pollo Locco was created with Angular &
        and a focus on Object-Oriented TypeScript.`,
      imgSrc: 'assets/pictures/elPolloLoco.jpg',
      url: 'http://eric-bruch.developerakademie.com/el-pollo-loco/',
    };
    this.addToProjects(elPolloLocco, projectType.angular);
  }

  createSakuraRamen() {
    let join: project = {
      name: 'Sakura Ramen',
      type: projectType.htmlCss,
      typeWritten: 'HTML & CSS',
      headline: 'Japanese Ramen Restaurant',
      description: `Sakura Ramen is a fictional japanese ramen restaurant. It was created to train proficient 
      skills in HTML & CSS. Additionally, the webside was created to be responsive for desktop, tablet and smartphone.`,
      imgSrc: 'assets/pictures/sakuraRamen.jpg',
      url: 'http://eric-bruch.developerakademie.com/Sakura_Ramen/',
    };
    this.addToProjects(join, projectType.htmlCss);
  }

  createWinterWonderLand() {
    let winterWonderland: project = {
      name: 'WinterWonderland',
      type: projectType.javascript,
      typeWritten: 'JavaScript',
      headline: 'Custom created JS Features',
      description: `Winter Wonderland is a fictional webside of a city focused on winter toursim.
      The goal of the task was to build proficiency in vanilla JavaScript by creating custom JavaScript Features.
      Implemented Features are: a professional Image-slider, a picture gallery and list of activities to choose from.`,
      imgSrc: 'assets/pictures/winterWonderland.jpg',
      url: 'http://eric-bruch.developerakademie.com/Winter-Wonderland/',
    };
    this.addToProjects(winterWonderland, projectType.javascript);
  }

  createAngularFirst() {
    let angularFirst: project = {
      name: 'AngularFirst',
      type: projectType.angular,
      typeWritten: 'Angular',
      headline: `Simple Angular Webside`,
      description: `AngularFirst is a fictional simple webside that was created to get familiar with basic Angular concepts`,
      imgSrc: 'assets/pictures/angularFirst.jpg',
      url: 'http://eric-bruch.developerakademie.com/angularFirstApp/',
    };
    this.addToProjects(angularFirst, projectType.angular);
  }

  addToProjects(p: project, type: projectType) {
    if (type === projectType.javascript) {
      this.projects.javascript.push(p);
      this.projects.all.push(p);
      return;
    }
    if (type === projectType.angular) {
      this.projects.angular.push(p);
      this.projects.all.push(p);
      return;
    }
    if (type === projectType.htmlCss) {
      this.projects.htmlCss.push(p);
      this.projects.all.push(p);
      return;
    }
    console.error('Error while trying to add project');
  }
}
