import { Injectable } from '@angular/core';

export interface PriceList {
  title: string;
  price: number;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  serviceList: PriceList[] = [
    {title: 'Sed ut perspiciatis unde', price: 20000, type: 'autó'},
    {title: 'Sed ut perspiciatis unde', price: 20000, type: 'autó'},
    {title: 'Sed ut perspiciatis unde omnis iste natus error', price: 20000, type: 'autó'},
  ]
  constructor() { }
}
