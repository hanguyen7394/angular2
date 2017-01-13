import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'mod_latest_products',
	templateUrl: 'mod_latest_products.component.html'
})

export class ModLatestProductsComponent implements OnInit {

	list_product_display: Product[];

	constructor(private service_product: ProductService, private router: Router) {}

	ngOnInit(): void {

		this.service_product.getListProductApi().subscribe(
			data => this.list_product_display = data.sort((item1: any, item2: any) => item2.updated - item1.updated).slice(0, 9), // put the data returned from the server in our variable
			error => console.log("Lỗi xảy ra ở HTTP service")
		);

	}

	gotoDetail(product: Product): void {
		let link = ['/single', product.id];
		this.router.navigate(link);
	}
}
