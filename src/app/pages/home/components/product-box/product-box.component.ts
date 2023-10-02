import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html', 
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onAddtoCart(): void{

  }
}
