import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html', 
})
export class ProductBoxComponent{

  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();

  constructor() { }
  onAddtoCart(): void{
    this.addToCart.emit(this.product);
  }
}
