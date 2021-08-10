import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  @Input() active: boolean;
  @Output() changeActivity = new EventEmitter<boolean>();

  toggle() {
    this.changeActivity.emit(!this.active);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
