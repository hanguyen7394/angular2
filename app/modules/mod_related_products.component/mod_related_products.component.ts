import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';

@Component({
	moduleId: module.id,
	selector: 'mod_related_products',
	templateUrl: 'mod_related_products.component.html'
})

export class ModRelatedProductsComponent implements OnInit {

	public list_related_product: Array<Product>;
	public data_shared: Array<Product>=[];

	constructor(private service_product: ProductService, private router: Router) {
		this.data_shared = this.service_product.getData();
		
	}

	ngOnInit() {
		this.service_product.getListProductApi()
			.subscribe(
				data => this.list_related_product = data.filter((item: any) => 
					item.product_cate_id == this.data_shared[0].product_cate_id && item.id != this.data_shared[0].id),
				error => console.log("Error HTTP sevice.")
			);
	}

	gotoDetail(product: Product): void {
		let link = ['/single', product.id];
		this.router.navigate(link);
	}
}
