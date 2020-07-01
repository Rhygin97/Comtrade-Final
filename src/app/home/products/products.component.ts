import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ImageService } from 'src/app/services/image.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';

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
  products = null;
  image;
  imagePreview;
  photo;

  constructor(
    private router: Router,
    private productService: ProductService,
    private imageService: ImageService,
    private toastr: ToastrService,
    private storageService: StorageService,
    ) { }

  ngOnInit(): void {
    this.createProductsForm();
    this.getProducts();
  }

  baseUrl = 'http://87.250.59.231:3000';

  createProductsForm() {
    this.productsForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'photo_id': new FormControl(),
      'description': new FormControl(this.description, [Validators.required]),
      'price': new FormControl(this.price, [Validators.required]),
      'stock': new FormControl(this.stock, [Validators.required]),
    });
  }

  onSubmit() {
    this.productService.createProduct(this.productsForm.value).subscribe(
      response => {
        this.toastr.success('Uspešno dodat proizvod!');
        console.log(response);
        this.getProducts();
      },
      error => {
        this.toastr.error('Nešto nije u redu', error.message);
        console.log(error);
      }
    )
  }

  goToProduct(id) {
    this.router.navigate([`/home/product/${id}`])
  }

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
  imageUpload() {
    document.getElementById('inputImageUpload').click();
  }

  fileChangeEvent(event: any) {
    this.image = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {

      this.imagePreview = reader.result;
      const x = new Image();
      x.src = reader.result as string;
      x.onload = () => {
        console.log(x.width + ' ' + x.height);
      }
    }
    if (this.image)
    reader.readAsDataURL(this.image);

    this.imageService.createImage(this.image).subscribe(
      response => {
      this.photo = response;
      this.productsForm.controls['photo_id'].setValue(this.photo.id);
    },
      error => {
        console.log(error);
      }
    );
  }

}

