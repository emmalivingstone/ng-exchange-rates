import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionPageComponent } from './pages/collection/collection.page';
import { ShowsRoutingModule } from './shows.routing';

@NgModule({
  declarations: [CollectionPageComponent],
  imports: [CommonModule, ShowsRoutingModule],
  exports: [],
  providers: [],
})
export class ShowsModule {}
