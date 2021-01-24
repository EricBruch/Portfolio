import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
})
export class SectionHeadingComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  @Input()
  heading: string = '';

  @ViewChild('headlineContainer', { static: false, read: ElementRef })
  private readonly headlineContainer!: ElementRef;

  public headlineContainerVisible: boolean = false;

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log(this.headlineContainerVisible);
    // }, 500);
  }

  onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (!this.headlineContainerVisible && visible) {
      this.headlineContainerVisible = true;
      console.log('fg');
      
      // this.renderer.removeClass(target, 'invisible');
      // target.
      this.renderer.addClass(target, 'moveIn');
    }
  }
}
