import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  @ViewChild('form', {static: true}) priceItemForm: NgForm;

  @Output() newPriceItemAdd = new EventEmitter<{ id: any, title: string, price: string, type: string, active: boolean }>();
  @Output() closeWindow = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.priceItemForm.value.name)
    this.newPriceItemAdd.emit({
      id: uuidv4(),
      title: this.priceItemForm.value.name,
      price: this.priceItemForm.value.price,
      type: this.priceItemForm.value.type,
      active: false
    })
    this.closeWindow.emit(false);
  }

}
