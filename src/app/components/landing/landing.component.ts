import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CanvasForm, CanvasSpace, Circle, Const, Create, Group } from 'pts';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  /*
    A circle moves in a field of line segments. Check intersections on both line paths and line segments, 
    and highlight the intersection points and paths.
  */
  constructor() {}

  space!: CanvasSpace;
  form!: CanvasForm;
  lines: Group[] = [];
  loaded: boolean = false;

  /* 
  ################# Colors #################
  */
  bg_color: string = '#02043c'; //#d3d3d3    #00172D
  // Color of Lines NOT touching the circle around the mouse directly OR in distance
  visibleLineOutside: string = '#c00'; //    #4CBB17
  // Color of Lines touching the circle around the mouse
  invisibleLineWithinCircle: string = 'rgba(255,255,255,.15)';
  // Color of the lines that are crossed by circle in distance
  visibleLineOutsideIntersect: string = '#06ac0c'; //rgb(235, 252, 5)  #FFFFFF
  // Points that cross the area of the circle around the mouse
  pointCircleIntersectNonVisibleLine: string = 'rgb(255, 255, 255)';
  // Color for lines where the visible part is touching the border of the circle
  visibleLineIntersectCircle: string = '#FFFFFF'; //rgb(242, 19, 49)
  // Points for visible lines that touch the circle around the mouse
  pointCircleIntersectVisibleLine: string = '#FFFFFF';   // rgb(242, 19, 49)

  ngOnInit(): void {
    this.setupSpace();
    this.setupForm();
    this.addSpaces();
    this.start();
  }

  setupSpace() {
    this.space = new CanvasSpace('ptsAnimation');
    this.space.setup({ bgcolor: this.bg_color, resize: true });
  }

  setupForm() {
    this.form = this.space.getForm();
  }

  addSpaces() {
    this.space.add({
      start: () => {
        this.createLines();
      },
      resize: () => {
        this.createLines();
      },
      animate: () => {
        // define a range from the pointer
        let range = Circle.fromCenter(this.space.pointer, 100);
        this.form.stroke(this.visibleLineOutside).lines(this.lines);

        for (let i = 0, len = this.lines.length; i < len; i++) {
          // check rays and lines intersection with pointer's range
          let inPath = Circle.intersectRay2D(range, this.lines[i]);
          let inLine = Circle.intersectLine2D(range, this.lines[i]);

          if (inPath.length > 1) {
            this.form
              .stroke(this.invisibleLineWithinCircle)
              .line(this.lines[i].concat(inPath[0], inPath[1]));
            this.form
              .stroke(this.visibleLineOutsideIntersect)
              .line(this.lines[i]);
            this.form
              .fillOnly(this.pointCircleIntersectNonVisibleLine)
              .points(inPath, 1, 'circle');
          }

          if (inLine.length > 0) {
            this.form
              .stroke(this.visibleLineIntersectCircle)
              .line(this.lines[i]);
            this.form
              .fillOnly(this.pointCircleIntersectVisibleLine)
              .points(inLine, 3, 'circle'); //this.form.fillOnly('#f03').points(inLine, 3, 'circle');
          }
        }
      },
    });
  }

  createLines() {
    this.lines = [];
    let ps = Create.distributeRandom(this.space.innerBound, 50);
    for (let i = 0, len = ps.length; i < len; i++) {
      this.lines.push(
        new Group(
          ps[i],
          ps[i]
            .clone()
            .toAngle(
              Math.random() * Const.pi,
              (Math.random() * this.space.size.y) / 2 + 20,
              true
            )
        )
      );
    }
  }

  start() {
    this.loaded = true;
    this.space.play().bindMouse();
  }
}
