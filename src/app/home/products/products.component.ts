import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      "id": "0",
      "name": "Ime Proizvoda 1",
      "description": "Opis Proizvoda 1",
      "price": "1000,00",
      "stock": "Trenutno na stanju: 10",
      "img": "url_slike_neki"		
    },
    {
      "id": "1",
      "name": "Ime Proizvoda 2",
      "description": "Opis Proizvoda 2",
      "price": "2000,00",
      "stock": "Trenutno na stanju: 20",
      "img": "url_slike_neki"		
    },
    {
      "id": "2",
      "name": "Ime Proizvoda 3",
      "description": "Opis Proizvoda 3",
      "price": "3000,00",
      "stock": "Trenutno na stanju: 30",
      "img": "url_slike_neki"		
    },
    {
      "id": "3",
      "name": "Ime Proizvoda 4",
      "description": "Opis Proizvoda 4",
      "price": "4000,00",
      "stock": "Trenutno na stanju: 40",
      "img": "url_slike_neki"		
    },
    {
      "id": "4",
      "name": "Ime Proizvoda 5",
      "description": "Opis Proizvoda 5",
      "price": "5000,00",
      "stock": "Trenutno na stanju: 50",
      "img": "url_slike_neki"		
    },
    {
      "id": "5",
      "name": "Ime Proizvoda 5",
      "description": "Opis Proizvoda 5",
      "price": "6000,00",
      "stock": "Trenutno na stanju: 60",
      "img": "url_slike_neki"		
    },
    {
      "id": "6",
      "name": "Ime Proizvoda 7",
      "description": "Opis Proizvoda 7",
      "price": "7000,00",
      "stock": "Trenutno na stanju: 70",
      "img": "url_slike_neki"		
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProduct(id) {
    this.router.navigate([`/home/product/${id}`])
  }

}
