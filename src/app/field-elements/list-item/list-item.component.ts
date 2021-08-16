import { Component, OnInit, Input } from '@angular/core';
import { Subservice } from '../../service/config.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: Subservice;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeitemActivity(active: boolean) {
    this.item.active = active;
  }
}
