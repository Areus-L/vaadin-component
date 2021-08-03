import { OnInit, Component, ComponentFactoryResolver, Injector, ApplicationRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import { ComponentPortal, DomPortalOutlet, Portal, TemplatePortal } from '@angular/cdk/portal';
import { polymerHost } from '@codebakery/origami/templates';
import '@polymer/iron-list/iron-list';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [polymerHost(HomeComponent)]
})
export class HomeComponent implements OnInit {

  @ViewChild('testTemplate') testTemplatePortal: TemplatePortal<any>;

  title = 'hello-angular';
  // private componentFactoryResolver: ComponentFactoryResolver
  // private injector: Injector
  // private applicationRef: ApplicationRef

  // private overlayHost = document.createElement('div');

  // renderer = (root: HTMLElement) => root.appendChild(this.overlayHost);

  ngOnInit() {
  //   new DomPortalOutlet(
  //     this.overlayHost,
  //     this.componentFactoryResolver,
  //     this.applicationRef,
  //     this.injector
  //   ).attach(this.testTemplatePortal);
  }
}


