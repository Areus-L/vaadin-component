import { Injectable } from '@angular/core';

export interface Subservice {
  title: string;
  price: string;
  type: string;
  active: boolean;
}

export interface UserService {
  category: string,
  title: string,
  description: string,
  subServices?: Subservice[],
  active: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  subServiceList: Subservice[] = [
    {title: 'Sed ut perspiciatis unde', price: '20.000', type: 'autó', active: true},
    {title: 'Sed ut perspiciatis unde', price: '20.000', type: 'autó', active: false},
    {title: 'Sed ut perspiciatis unde omnis iste natus error', price: '20.000', type: 'autó', active: true},
  ]

  userServices: UserService[] = [
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    {category: 'Autó karbantartás', title: 'szuper autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
  ]
  constructor() { }
}
