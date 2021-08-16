import { OnInit, Component, ViewChild, ElementRef, Input } from '@angular/core';
import { polymerHost } from '@codebakery/origami/templates';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-icons/iconset';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { Subservice, ConfigService, UserService } from '../../service/config.service';
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

  isModalVisible: boolean = false;
  isPriceModalVisible: boolean = false;

  constructor(
    private config: ConfigService
    ) { }

  ngOnInit() {
  }

  openModal() {
    if (this.isModalVisible) {
      this.isPriceModalVisible = true;
    }
    this.isModalVisible = true;
  }


  closeModal(visible: boolean) {
    if (this.isPriceModalVisible == true){
      this.isPriceModalVisible = visible;
    } else {
      this.isModalVisible = visible;
    }
  }

  addItem(item: { title: string, price: string, type: string, active: boolean }){
    this.subServices.push(item);
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
