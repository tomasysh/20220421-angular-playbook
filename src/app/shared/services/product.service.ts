import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 0,
      name: 'OtisPM',
      imageUrl: 'http://www.pollex.com.tw/dist/assets/images/web-homepage-otis-01B.jpg'
    },
    {
      id: 1,
      name: 'OtisAM',
      imageUrl: 'http://www.pollex.com.tw/dist/assets/images/web-homepage-service-01B.png'
    },
    {
      id: 2,
      name: 'OtisBM',
      imageUrl: 'http://www.pollex.com.tw/dist/assets/images/web-homepage-blog-01B.png'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
