import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeartrateComponent } from './components/heartrate/heartrate.component';
import { StepsComponent } from './components/steps/steps.component';
import { WaterComponent } from './components/water/water.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { FitnessRoutingModule } from './fitness.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, HeartrateComponent, WaterComponent, StepsComponent, WorkoutsComponent],
  imports: [CommonModule, FitnessRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class FitnessModule {}
