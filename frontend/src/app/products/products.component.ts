import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ ProductsService ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  // products = [
  //   {
  //     name: 'Striped skirt',
  //     image: 'https://images.pexels.com/photos/1100790/pexels-photo-1100790.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     sold_out: false
  //   },
  //   {
  //     name: 'Pink tie',
  //     image: 'https://images.pexels.com/photos/404171/pexels-photo-404171.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     sold_out: false
  //   },
  //   {
  //     name: 'Linen blazer',
  //     image: 'https://images.pexels.com/photos/1143793/pexels-photo-1143793.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     sold_out: false
  //   }
  // ];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }
}
