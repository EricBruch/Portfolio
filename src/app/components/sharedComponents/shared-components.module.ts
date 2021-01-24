import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  declarations: [SectionHeadingComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    InViewportModule,
  ],
  exports: [
    SectionHeadingComponent,
    MatButtonModule,
    MatRippleModule,
    InViewportModule,
  ],
})
export class SharedModule {}
