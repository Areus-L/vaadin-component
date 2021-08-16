import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/config.service';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.scss']
})
export class UserServiceComponent implements OnInit {

  @Input() service: UserService;

  constructor() { }

  ngOnInit(): void {
  }

}
