import { Injectable } from '@angular/core';

export interface PriceList {
  title: string;
  price: string;
  type: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  serviceList: PriceList[] = [
    {title: 'Sed ut perspiciatis unde', price: '20.000', type: 'autó', active: true},
    {title: 'Sed ut perspiciatis unde', price: '20.000', type: 'autó', active: false},
    {title: 'Sed ut perspiciatis unde omnis iste natus error', price: '20.000', type: 'autó', active: true},
  ]

  
  constructor() { }
}
