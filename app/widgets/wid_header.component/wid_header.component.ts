import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/service_cart/service_cart';

@Component({
	moduleId: module.id,
	selector: 'wid_header',
	templateUrl: 'wid_header.component.html'
})
export class WidHeaderComponent implements OnInit {

	public total_Item: number;
	public total_Price: number;

	constructor(private service_cart: CartService) {}

	ngOnInit() {
		this.total_Item = this.service_cart.countItem();
		this.total_Price = this.service_cart.countPrice();
	}

	emptyCart() {
		this.service_cart.emptyCart();
	}

}
