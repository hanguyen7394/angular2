import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';
import { CartService } from '../../services/service_cart/service_cart';

declare var $: any;

export interface Filter {
    currentPage: number;
    perPage: number;
}

@Component({
	moduleId: module.id,
	selector: 'mod_products',
	templateUrl: 'mod_products.component.html'
})
export class ModProductsComponent implements OnInit {
	list_product_display: Product[];
	cate: number;
	totalPage: number;

	filter: Filter = {
        currentPage: 1,
        perPage: 6,
    };
	fromNr: number = 0;
    toNr: number = 5;

	constructor(private service_product: ProductService, private router: Router,
		private route: ActivatedRoute, private location: Location, private service_cart: CartService) { }

	ngOnInit() {
		this.route.params.forEach(
			(params: Params) => {
				this.cate = parseInt(params['cate']);
				if (this.cate) {
					this.service_product.getListProductByCateApi(this.cate)
						.subscribe(
						data => this.list_product_display
							= data,
						(error: any) => console.log("Lỗi xảy ra ở HTTP service"));

					setTimeout(() => {
						if (this.list_product_display) {
							console.log(this.list_product_display.length);
							let totalProduct: number = this.list_product_display.length;
							this.totalPage = Math.ceil(totalProduct / this.filter.perPage);
						}
					}, 100);
				}

			}
		);

		this.route.params.forEach(
            (params: Params) => {
                let pageNr = parseInt(params['page']);

                if (pageNr) {
                    this.filter.currentPage = pageNr;
                }
				else {
					this.filter.currentPage = 1;
				}

				this.fromNr = (this.filter.currentPage - 1) * this.filter.perPage;
				this.toNr = this.fromNr + this.filter.perPage - 1;
            }
        );

		$(".simpleCart_shelfItem").click(function () {
			document.body.scrollTop = 0;
		});
	}

	gotoDetail(product: Product): void {
		let link = ['/single', product.id];
		this.router.navigate(link);
	}

	clickPrev() {
		this.filter.currentPage -= 1;
		if (this.cate) {
			let link = ['/products', { cate: this.cate, page: this.filter.currentPage }];
			this.router.navigate(link);
		}
	}

	clickNext() {
		this.filter.currentPage += 1;
		if (this.cate) {
			let link = ['/products', { cate: this.cate, page: this.filter.currentPage }];
			this.router.navigate(link);
		}
	}

	addItem(item: any) {
		this.service_cart.addItem(item);
	}
}
