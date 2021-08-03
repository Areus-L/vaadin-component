import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './page/home/home.component';
import { AddServiceComponent } from './page/add-service/add-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { TemplateModule } from '@codebakery/origami/templates';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    //TemplateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PortalModule]
})
export class AppModule { }
