import { Component, OnInit, Input, forwardRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  @Output() textAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(arg: any) {
    this.textLength = arg.target.value.length;
  }

  updateDescription() {
    this.textAdded.emit(this.value);
  }
}
