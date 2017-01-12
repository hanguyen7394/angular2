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
    totalPage: number;
}

@Component({
	moduleId: module.id,
	selector: 'mod_products',
	templateUrl: 'mod_products.component.html'
})
export class ModProductsComponent implements OnInit {
	public list_product_display: Product[];

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
		this.route.params.forEach(
			(params: Params) => {
				let cate = params['cate'];
				this.service_product.getListProductByCateApi(cate)
					.subscribe(
					data => this.list_product_display = data),
					error => console.log("Lỗi xảy ra ở HTTP service")
			}
		);
		this.route.params.subscribe(
            (param: any) => {
                let pageNr = param['page'];
                if (pageNr) {
                    this.filter.currentPage = pageNr;
                    this.fromNr = (this.filter.currentPage - 1) * this.filter.perPage;
                    this.toNr = this.fromNr + this.filter.perPage - 1;
                }
                console.log(this.filter.currentPage);
            }
        );
		$(".simpleCart_shelfItem").click(function () {
			document.body.scrollTop = 0;
		});
	}

	ngAfterViewInit(): void {

        //logic page
        if (this.list_product_display) {
            let totalProduct: number = this.list_product_display.length;
            this.filter.totalPage = Math.ceil(totalProduct / this.filter.perPage);

            //page1 -> 0,1
            //page2 -> 2,3
            this.fromNr = (this.filter.currentPage - 1) * this.filter.perPage;
            this.toNr = this.filter.perPage - 1;
            console.log(this.fromNr);
            console.log(this.toNr);

            //logic (continue)
            //sexybongs -> sexybongs'
        }
    }

	gotoDetail(product: Product): void {
		let link = ['/single', product.id];
		this.router.navigate(link);
	}
	
	gotoPage(page: number) {
		this.route.params.forEach(
			(params: Params) => { 
				let cate = params['cate'];
				let link = ['/products', { cate: cate, page: page } ];
        		this.router.navigate(link);
			}
		);
		
	}
	
	addItem(item: any) {
		this.service_cart.addItem(item);
	}
}
