import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';
import { CartService } from '../../services/service_cart/service_cart';

import 'rxjs/Rx';

declare var $: any;

export interface Filter {
	currentPage: number;
	perPage: number;
	totalPage: number;
}

@Component({
	moduleId: module.id,
	selector: 'mod_products',
	templateUrl: 'mod_products.component.html'
})
export class ModProductsComponent implements OnInit {
	public list_product_display: Product[];
	public cate_id: number;

	filter: Filter = {
		currentPage: 1,
		perPage: 6,
		totalPage: 2
	};
	fromNr: number = 0;
	toNr: number = 5;

	constructor(private service_product: ProductService, private router: Router,
		private route: ActivatedRoute, private location: Location, private service_cart: CartService) { }

	ngOnInit() {
		this.route.params
			.switchMap(
				(params: Params) => {
					let cate = +params['cate'];
					let pageNr = +params['page'];

					this.cate_id = cate;
					this.filter.currentPage = pageNr;
					this.fromNr = (this.filter.currentPage - 1) * this.filter.perPage;
					this.toNr = this.fromNr + this.filter.perPage - 1;

					return this.service_product.getListProductByCateApi(cate);

				})
			.subscribe(
				data => this.list_product_display = data,
				(error: any) => console.log("Lỗi xảy ra ở HTTP service")
			);
		
		$(".simpleCart_shelfItem").click(function () {
			document.body.scrollTop = 0;
		});
	}

	gotoDetail(product: Product): void {
		let link = ['/single', product.id];
		this.router.navigate(link);
	}
	
	
	addItem(item: any) {
		this.service_cart.addItem(item);
	}
}
