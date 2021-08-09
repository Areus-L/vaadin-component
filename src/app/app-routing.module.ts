import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SearchFieldComponent } from './field-elements/search-field/search-field.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "search", component: SearchFieldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
