import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() modalVisibility = new EventEmitter<string>();
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalVisibility.emit('close');
  }

}
