import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      name: 'OtisPM',
      imageUrl: 'http://www.pollex.com.tw/dist/assets/images/web-homepage-otis-01B.jpg'
    },
    {
      name: 'OtisAM',
      imageUrl: 'http://www.pollex.com.tw/dist/assets/images/web-homepage-service-01B.png'
    },
    {
      name: 'OtisBM',
      imageUrl: 'http://www.pollex.com.tw/dist/assets/images/web-homepage-blog-01B.png'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
