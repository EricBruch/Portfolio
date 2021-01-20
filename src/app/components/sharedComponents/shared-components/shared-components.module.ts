import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@NgModule({
  declarations: [SectionHeadingComponent],
  imports: [CommonModule],
  exports: [SectionHeadingComponent],
})
export class SharedComponentsModule {}
