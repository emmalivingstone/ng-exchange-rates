import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeartrateComponent } from './components/heartrate/heartrate.component';
import { WaterComponent } from './components/water/water.component';
import { FitnessRoutingModule } from './fitness.routing';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';

@NgModule({
  declarations: [HeartrateComponent, WaterComponent, DashboardPageComponent],
  imports: [CommonModule, FitnessRoutingModule],
  exports: [],
  providers: [],
})
export class FitnessModule {}
