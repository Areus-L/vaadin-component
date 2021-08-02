import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './page/home/home.component';
import { AddServiceComponent } from './page/add-service/add-service.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "add-service", component: AddServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
