import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../sharedComponents/shared-components.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [PortfolioComponent, ProjectsComponent],
  imports: [CommonModule, PortfolioRoutingModule, MatTabsModule, SharedModule],
})
export class PortfolioModule {}
