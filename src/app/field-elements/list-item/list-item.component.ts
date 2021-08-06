import { Component, OnInit, Input } from '@angular/core';
import { PriceList } from '../../service/config.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: PriceList;
  inactiveItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleServiceItem(){
    this.inactiveItem = !this.inactiveItem;
  }

}
