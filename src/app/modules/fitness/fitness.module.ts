import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeartrateComponent } from './components/heartrate/heartrate.component';
import { FitnessRoutingModule } from './fitness.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, HeartrateComponent],
  imports: [CommonModule, FitnessRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class FitnessModule {}
