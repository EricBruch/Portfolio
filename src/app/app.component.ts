import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      this.hightlightCurrentRoute(event);
    });
  }

  isAbout: boolean = false;
  isPortfolio: boolean = false;
  isContact: boolean = false;

  hightlightCurrentRoute(event: Event) {
    if (event instanceof NavigationEnd) {
      console.log('navigationEnd');
      console.log(event.urlAfterRedirects);
      this.isAbout = event.urlAfterRedirects === '/about';
      this.isPortfolio = event.urlAfterRedirects === '/portfolio';
    }
  }
}
