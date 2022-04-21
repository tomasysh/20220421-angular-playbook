import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  imgTitle = '圖片標題';

  constructor() { }

  ngOnInit(): void {
  }

}
