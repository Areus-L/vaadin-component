import { Component, OnInit, Input } from '@angular/core';
import { polymerHost } from '@codebakery/origami/templates';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {

  value: string = '';
  textLength: number = 0;
  @Input() maxLength: number;
  @Input() height: string;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(arg: any) {
    console.log(arg.target.value);
    this.textLength = arg.target.value.length;
    console.log(this.textLength);
  }
}
