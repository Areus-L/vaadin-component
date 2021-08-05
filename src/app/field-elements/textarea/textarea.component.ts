import { Component, OnInit, Input } from '@angular/core';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  printValue(){
    console.log(this.value);
  }
}
