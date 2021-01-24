import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { intersection } from 'src/app/utils/types/intersection.type';

@Component({
  selector: 'app-pictograms',
  templateUrl: './pictograms.component.html',
  styleUrls: ['./pictograms.component.scss'],
})
export class PictogramsComponent implements OnInit {
  constructor() {}

  @ViewChild('pictogram1', { static: false, read: ElementRef })
  private readonly pictogram1!: ElementRef;

  pictogram1Hidden: boolean = true;
  pictogram1Visible: boolean = false;

  pictogram2Hidden: boolean = true;
  pictogram2Visible: boolean = false;

  pictogram3Hidden: boolean = true;
  pictogram3Visible: boolean = false;

  pictogram4Hidden: boolean = true;
  pictogram4Visible: boolean = false;

  ngOnInit(): void {}

  onIntersectionPicto1({ target, visible }: intersection) {
    if (!this.pictogram1Visible && visible) {
      this.pictogram1Visible = !this.pictogram1Visible;
      this.pictogram1Hidden = !this.pictogram1Hidden;
    }
  }

  onIntersectionPicto2({ target, visible }: intersection) {
    if (!this.pictogram2Visible && visible) {
      this.pictogram2Visible = !this.pictogram2Visible;
      this.pictogram2Hidden = !this.pictogram2Hidden;
    }
  }

  onIntersectionPicto3({ target, visible }: intersection) {
    if (!this.pictogram3Visible && visible) {
      this.pictogram3Visible = !this.pictogram3Visible;
      this.pictogram2Hidden = !this.pictogram2Hidden;
    }
  }

  onIntersectionPicto4({ target, visible }: intersection) {
    if (!this.pictogram4Visible && visible) {
      this.pictogram4Visible = !this.pictogram4Visible;
      this.pictogram4Hidden = !this.pictogram4Hidden;
    }
  }
}
