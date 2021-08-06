import { OnInit, Component, ViewChild, ElementRef, Input } from '@angular/core';
import { polymerHost } from '@codebakery/origami/templates';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-icons/iconset';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
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
  @ViewChild('dialog', {static: true}) dialog = ElementRef;
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
    this.obs$.subscribe(
      data => {
        this.printbutton = data;
      }
    )
  }

  print() {
    this.obs$.subscribe(
      data => console.log(data)
    )
    console.log('print')
  }

  onOpenDialog() {
    console.log(this.dialog);
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
