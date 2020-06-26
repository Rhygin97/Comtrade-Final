import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    {
      "id": "0",
      "name": "Ime Proizvoda 112312312",
      "description": "Opis Proizvoda 1",
      "price": "Cena proizvoda 1",
      "stock": "10",
      "img": "url_slike_neki"		
    },
    {
      "name": "Ime Proizvoda 2",
      "description": "Opis Proizvoda 2",
      "price": "Cena proizvoda 2",
      "stock": "20",
      "img": "url_slike_neki"		
    },
    {
      "name": "Ime Proizvoda 3",
      "description": "Opis Proizvoda 3",
      "price": "Cena proizvoda 3",
      "stock": "30",
      "img": "url_slike_neki"		
    },
    {
      "name": "Ime Proizvoda 4",
      "description": "Opis Proizvoda 4",
      "price": "Cena proizvoda 4",
      "stock": "40",
      "img": "url_slike_neki"		
    },
    {
      "name": "Ime Proizvoda 5",
      "description": "Opis Proizvoda 5",
      "price": "Cena proizvoda 5",
      "stock": "50",
      "img": "url_slike_neki"		
    },
    {
      "name": "Ime Proizvoda 5",
      "description": "Opis Proizvoda 5",
      "price": "Cena proizvoda 5",
      "stock": "60",
      "img": "url_slike_neki"		
    },
    {
      "name": "Ime Proizvoda 7",
      "description": "Opis Proizvoda 7",
      "price": "Cena proizvoda 7",
      "stock": "70",
      "img": "url_slike_neki"		
    }
  ]

  id;

  constructor( private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => {
        this.id = params.id;
      },
      error => {
        console.log(error);
      }
    )}

}
