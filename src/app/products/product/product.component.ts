import { Product } from './../../shared/models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  imgTitle = '圖片標題';

  constructor() { }

  ngOnInit(): void {
  }

}
