import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://87.250.59.231:3000';
  productsURL = this.baseUrl + '/products';
  productURL = this.baseUrl + '/products' + 'id';

  constructor(private http: HttpClient) { }

createProduct(data) {
  return this.http.post(this.productsURL, data);
}

getProducts() {
  return this.http.get(this.productsURL);
}

getProduct() {
  return this.http.get(this.productURL);
}

}
