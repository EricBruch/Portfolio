import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [SectionHeadingComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [SectionHeadingComponent, MatButtonModule, MatRippleModule],
})
export class SharedModule {}
