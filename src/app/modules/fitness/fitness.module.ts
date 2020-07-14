import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeartrateComponent } from './components/heartrate/heartrate.component';
import { WaterComponent } from './components/water/water.component';
import { FitnessRoutingModule } from './fitness.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, HeartrateComponent, WaterComponent],
  imports: [CommonModule, FitnessRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class FitnessModule {}
