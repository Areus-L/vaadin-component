import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { ConfigService, ServiceCategory } from '../../service/config.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  // @ViewChild('category', {static: true}) selectContent: ElementRef;
  // @ViewChild('f', {static: true}) form: NgForm;

  @Output() categoryChosen = new EventEmitter<{title: string, icon: string}>();
  @Output() closeWindow = new EventEmitter<boolean>();

  serviceCategories: ServiceCategory[] = this.config.serviceCategories;
  selectedValue = {title: "autó", icon: "icon"};

  constructor( private config: ConfigService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.categoryChosen.emit({
      title: this.selectedValue.title,
      icon: this.selectedValue.icon,
    })
    this.closeWindow.emit(false);
  }
}
