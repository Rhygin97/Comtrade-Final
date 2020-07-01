import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products;
  modalProduct;

  constructor(
    private router: Router,
    private productService: ProductService,
    private storageService: StorageService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  baseUrl = 'http://87.250.59.231:3000';

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  getProductById(id) {
    return this.products.find(product => {
      return product.id === id;
    });  
  }

  setModalProduct(product) {
    this.modalProduct = product;
  }

  public getMoney() {
    let money = this.storageService.getMoney();
    if(!money) {
      money = "0";
    }
    return money;
  }

  sellProduct() {
    let value = this.storageService.getMoney();
    if(this.modalProduct.stock > 0) {
      if(value >= this.modalProduct.price) {
        this.storageService.removeMoney(this.modalProduct.price);
        this.toastr.success('Uspešno ste kupili proizvod!');
          document.getElementById('closeModal').click();
      }
      else {
        this.toastr.error('Nemate dovoljno sredstava na racunu!');
      }
    } 
  } 
}


