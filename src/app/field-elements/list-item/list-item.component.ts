import { Component, OnInit, Input, forwardRef, HostBinding, Output, EventEmitter } from '@angular/core';
import { Subservice } from '../../service/config.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListItemComponent),
      multi: true
    }
  ]
})
export class ListItemComponent implements OnInit, ControlValueAccessor {

  @Input() item: Subservice;
  @Output() subserviceModified = new EventEmitter<Subservice>();

  newService: Subservice = {id: 0, title: '', price: '', type: '', active: true}

  constructor() { }

  ngOnInit(): void {
    this.newService = {...this.item};
    this.newService.id = uuidv4();
  }

  onChangeItemActivity(active: boolean) {
    this.newService.active = active;
  }

  updateSubservice() {
    console.log(this.newService);
    this.subserviceModified.emit(this.newService);
  }

  changeTitle(value: any) {
    this.newService.title = value.target.value;
  }

  // changePrice(value: string) {
  //   this.newService.price = value;
  //   console.log(this.newService)
  // }

  // changeTitle(value: string) {
  //   this.newService.title = value;
  // }

// Control Value Accessor

  onChange: any = () => {}
  onTouch: any = () => {}
  val= "" // this is the updated value that the class accesses
  set value(val){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }

  // this method sets the value programmatically
  writeValue(value: any){
    this.value = value
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any){
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}
