import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [CardComponent, ProgressComponent],
  imports: [CommonModule],
  exports: [CardComponent, ProgressComponent],
  providers: [],
})
export class SharedModule {}
