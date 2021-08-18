import { OnInit, Component, ViewChild, ElementRef, Input } from '@angular/core';
import { polymerHost } from '@codebakery/origami/templates';
import { NgForm } from '@angular/forms';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-icons/iconset';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { Subservice, ConfigService, UserService, ServiceCategory } from '../../service/config.service';
import { MatSlider } from '@angular/material/slider';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [polymerHost(HomeComponent), {provide: MatSlider, useExisting: MatSlider}]
})
export class HomeComponent implements OnInit {

  userServices: UserService[] = this.config.userServices;
  subServices: Subservice[] = this.config.subServiceList;
  newService: UserService = {
    category: 'Autófényezés, karosszéria javítás',
    title: '',
    description: '',
    active: true,
    subServices: []
  }

  @ViewChild('serviceForm', {static: true}) serviceForm = NgForm;
  serviceCategory: ServiceCategory = this.config.serviceCategories[0];

  isServiceModalVisible: boolean = false;
  isPriceModalVisible: boolean = false;
  isCategoryModalVisible: boolean = false;

  constructor(
    private config: ConfigService
    ) { }

  ngOnInit() {
  }

  openModal(modalId: number) {
    switch (modalId) {
      case 1: {
        this.isPriceModalVisible = true;
        break;
      }
      case 2: {
        this.isCategoryModalVisible = true;
        break;
      }
      case 3: {
        this.isServiceModalVisible = true;
        break;
      }
    }
  }


  closeModal(visible: boolean, modalId: number) {
    switch (modalId) {
      case 1: {
        this.isPriceModalVisible = visible;
        break;
      }
      case 2: {
        this.isCategoryModalVisible = visible;
        break;
      }
      case 3: {
        this.isServiceModalVisible = visible;
        break;
      }
    }
  }

  addItem(item: {id: any, title: string, price: string, type: string, active: boolean }){
    this.subServices.push(item);
  }

  setCategory(category: {title: string, icon: string}) {
    this.serviceCategory.title = category.title;
    this.serviceCategory.icon = category.icon;
    this.newService.category = category.title;
  }

  saveService() {
    console.log(this.serviceForm);
  }

  modifyPriceList(priceItem: Subservice) {
    this.newService.subServices.push(priceItem);
  }

  createNewService(){
    this.userServices.push(this.newService);
    console.log(this.userServices);
    this.closeModal(false, 3);
    this.newService = {
      category: 'Autófényezés, karosszéria javítás',
      title: '',
      description: '',
      active: true,
      subServices: []
    }
  }

  modifyText(text: string, field: string){
    if(field === "title") {
      this.newService.title = text;
    } else {
      this.newService.description = text;
    }
  }
}


// an other way to modify vaadin elements

// registerStyles('vaadin-button', css`
//   :host {
//     background-color:pink;
//     color: white;
//     border-radius: 100;
//   }
// `);
