import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = null;
  id;

  constructor( private activeRoute: ActivatedRoute,
      private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => {
        this.id = params.id;
        this.getProduct();
      },
      error => {
        console.log(error);
      }
    )}
    
    baseUrl = 'http://87.250.59.231:3000';

    getProduct() {
      this.productService.getProduct(this.id).subscribe(
        response => {
          this.product = response;
        },
        error => {
          console.log(error);
        }
      )
    }
}
