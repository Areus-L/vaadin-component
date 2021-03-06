import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { PortalModule } from '@angular/cdk/portal';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './page/home/home.component';
import { SlideToggleComponent } from './field-elements/slide-toggle/slide-toggle.component';
import { TextareaComponent } from './field-elements/textarea/textarea.component';
import { ListItemComponent } from './field-elements/list-item/list-item.component';
import { SearchFieldComponent } from './field-elements/search-field/search-field.component';
import { ModalComponent } from './field-elements/modal/modal.component';
import { SubcategoryComponent } from './form/subcategory/subcategory.component';
import { UserServiceComponent } from './user-service/user-service.component';
import { ActiveFilterPipe } from './pipe/active-filter.pipe';
import { CategoryComponent } from './form/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideToggleComponent,
    TextareaComponent,
    ListItemComponent,
    SearchFieldComponent,
    ModalComponent,
    SubcategoryComponent,
    UserServiceComponent,
    ActiveFilterPipe,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PortalModule]
})
export class AppModule { }
