//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionComponent } from './example/institution/institution.component';
import { SearchCauseComponent } from './example/search/search.cause.component';
import { SearchCityComponent } from './example/search/search.city.component';
import { SearchInstitutionComponent } from './example/search/search.institution.component';
import { StateComponent } from './example/state/state.component';
import { SearchPlantComponent } from './example/search/search.plant.component';
import { InstitutionComponent2 } from './example/institution2/institution.component2';

const routes: Routes = [
  { path: '', component: SearchPlantComponent },
  { path: 'example/search-city', component: SearchCityComponent },
  { path: 'example/search-cause', component: SearchCauseComponent },
  { path: 'example/search-inst', component: SearchInstitutionComponent },
  { path: 'example/inst', component: InstitutionComponent },
  { path: 'example/inst2', component: InstitutionComponent2 },
  { path: 'example/search-plant', component: SearchPlantComponent },
  { path: 'example/state', component: StateComponent },
  { path: '**', component: SearchPlantComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
