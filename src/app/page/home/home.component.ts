import { OnInit, Component, ViewChild } from '@angular/core';
import { polymerHost } from '@codebakery/origami/templates';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-icons/iconset';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

// registerStyles('vaadin-button', css`
//   :host {
//     background-color:pink;
//     color: white;
//     border-radius: 100;
//   }
// `);

// registerStyles('vaadin-dialog', css`
// :host {
//   box-shadow: inset 0 0 0 1px;
//   background-color:pink;
//   color: white;
//   border-radius: 100;
// }
// `);

// registerStyles('vaadin-text-area', css`
//     :host {
//       background-color:white;
//       color: black;
//       border-radius: 50%;
//       width: 400px;
//       height: 150px;
//       margin-left: 30px;
//       margin-right: 30px;
//     }
//   `);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [polymerHost(HomeComponent)]
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }
}


