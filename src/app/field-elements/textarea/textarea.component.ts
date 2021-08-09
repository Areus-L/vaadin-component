import { Component, OnInit, Input, forwardRef, ViewChild} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { polymerHost } from '@codebakery/origami/templates';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  //value = '';
  textLength: number = 0;
  @Input() maxLength: number;
  @Input() height: string;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(arg: any) {
    console.log(arg);
    this.textLength = arg.target.value.length;
    console.log(this.textLength);
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  val= ""

  getKeys(O:any){
    return Object.keys(O);
  }

  set value(val){
    if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    }

  }

  writeValue(value: any){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}
