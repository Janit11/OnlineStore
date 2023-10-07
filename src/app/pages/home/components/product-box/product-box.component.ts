import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html', 
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  product: Product | undefined ={
    id: 1,
    title: 'hoodies',
    price: 150,
    category: 'clothes',
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  };

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddtoCart(): void{
    this.addToCart.emit(this.product);
  }
}
