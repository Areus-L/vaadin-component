import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  active = true;

  toggle() {
    this.active = !this.active;
    console.log(this.active);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
