import { Product } from './../shared/models/product.model';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  buyProducts: number[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(productId: number): void {
    console.log('first', this.buyProducts);
    // this.buyProducts.push(productId);
    // 解構賦值 (概念是 不可變物件)
    this.buyProducts = [...this.buyProducts, productId];
    console.log('first', this.buyProducts);

  }

}
