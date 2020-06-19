import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shows', loadChildren: () => import('./modules/shows/shows.module').then((mod) => mod.ShowsModule) },
  { path: 'fitness', loadChildren: () => import('./modules/fitness/fitness.module').then((mod) => mod.FitnessModule) },
  { path: '', redirectTo: '/fitness', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
