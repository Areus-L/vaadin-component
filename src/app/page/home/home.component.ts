import { OnInit, Component, ViewChild, ElementRef, Input } from '@angular/core';
import { polymerHost } from '@codebakery/origami/templates';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-icons/iconset';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { NgForm } from '@angular/forms';
import { PriceList, ConfigService } from '../../service/config.service';
import { MatSlider } from '@angular/material/slider';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [polymerHost(HomeComponent), {provide: MatSlider, useExisting: MatSlider}]
})
export class HomeComponent implements OnInit {

  subServices: PriceList[] = this.config.serviceList;

  isModalVisible: boolean = false;

  // @ViewChild('f') signupForm: NgForm;
  // @ViewChild('dialog', {static: true}) dialog = ElementRef;
  @Input('maxlength') maxLength: number;
  nameFieldChars: number = 0;
  printbutton = false;

  obs$ = new Observable<any>(observer => {
    observer.next(!this.printbutton);
  })

  constructor(
    private config: ConfigService
    ) { }

  ngOnInit() {
  }

  openModal() {
    console.log('visible')
    this.isModalVisible = true;
  }

  closeModal(visible: string) {
    if (visible === 'close') {
      this.isModalVisible = false;
    }
  }

  print() {
    this.obs$.subscribe(
      data => {this.printbutton = data;}
    )
    console.log('print')
  }

  onOpenDialog() {
    console.log('this.dialog');
  }

  onSubmit() {
    console.log('it is working')
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
