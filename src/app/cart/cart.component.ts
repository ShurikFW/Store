import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ShippingComponent } from '../shipping/shipping.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  items: any[] = [ShippingComponent];
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems(); 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
