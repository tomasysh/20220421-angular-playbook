import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      name: 'OtisPM'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
