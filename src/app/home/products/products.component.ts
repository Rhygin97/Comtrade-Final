import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsForm: FormGroup;
  name;
  description;
  price;
  stock;

  constructor(
    private router: Router,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.createProductsForm();
  }

  createProductsForm() {
    this.productsForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'description': new FormControl(this.description, [Validators.required]),
      'price': new FormControl(this.price, [Validators.required]),
      'stock': new FormControl(this.stock, [Validators.required]),
    });
  }

  onSubmit() {
    this.productService.createProduct(this.productsForm.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  goToProduct(id) {
    this.router.navigate([`/home/product/${id}`])
  }

}
