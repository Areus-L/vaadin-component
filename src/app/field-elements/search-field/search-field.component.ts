import { Component, OnInit } from '@angular/core';
import '@vaadin/vaadin-combo-box/vaadin-combo-box';


@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fruits: string[] = [
    "Apple",
    "Apricot",
    "Apricot lassi",
    "Banana",
    "Banana parcels",
    "Banana toastie",
    "Blueberry",
    "Cherry",
    "Custard apple or cherimoya",
    "Durian",
    "Feijoa",
    "Fig",
    "Fruity ice treats - Strawberry and kiwi & Tropical ice treats",
    "Grape",
    "Grapefruit",
    "Grilled pineapple with star fruit",
    "Guava",
    "Honeydew",
    "Kiwifruit",
    "Lemon",
    "Lime",
    "Longan or dragon eyes",
    "Lychee",
    "Mandarin",
    "Mango",
    "Mangosteen",
    "Melon platter",
    "Nashi",
    "Nectarine",
    "Nectarine and berry salad",
    "Orange",
    "Passionfruit"]
}
