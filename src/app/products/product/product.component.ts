import { Product } from './../../shared/models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  @Output()
  onAddToCart = new EventEmitter<number>();

  imgTitle = '圖片標題';

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(productName: string): void {
    alert(`I want to buy ${productName}`);
  }

  selectProduct(): void {
    this.onAddToCart.emit(this.product.id);
  }

}
