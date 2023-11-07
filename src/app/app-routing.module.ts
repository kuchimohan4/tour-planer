import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { TripsComponent } from './components/trips/trips.component';

const routes: Routes = [
  {path:'',component:MapComponent},
  {path:'trips',component:TripsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
