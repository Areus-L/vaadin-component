import { Injectable } from '@angular/core';

export interface Subservice {
  id: any,
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

export interface ServiceCategory {
  title: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  subServiceList: Subservice[] = [
    {id: 1, title: 'Szolgáltatás1', price: '20.000', type: 'autó', active: true},
    {id: 2, title: 'Szolgáltatás2', price: '20.000', type: 'autó', active: false},
    {id: 3, title: 'Szolgáltatás3', price: '20.000', type: 'autó', active: true},
  ]

  userServices: UserService[] = [
    {category: 'Autó karbantartás', title: 'autó szervíz', description: "a legjobb autószervíz a városban",subServices: this.subServiceList, active: true},
    
  ]

  serviceCategories: ServiceCategory[] = [
    {title: 'Autófényezés, karosszériajavítás', icon: 'vaadin:car'},
    {title: 'Házimunka, takarítás', icon: 'vaadin:bed'},
    {title: 'Bevásárlás, ügyintézés', icon: 'vaadin:cart'},
    {title: 'Babysitting', icon: 'vaadin:family'},
    {title: 'Költöztetés, szállítmányozás', icon: 'vaadin:truck'},
  ]

  constructor() { }
}
