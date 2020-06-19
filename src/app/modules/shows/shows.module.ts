import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowComponent } from './components/show/show.component';
import { CollectionPageComponent } from './pages/collection/collection.page';
import { ShowsRoutingModule } from './shows.routing';

@NgModule({
  declarations: [CollectionPageComponent, ShowComponent],
  imports: [CommonModule, ShowsRoutingModule],
  exports: [],
  providers: [],
})
export class ShowsModule {}
