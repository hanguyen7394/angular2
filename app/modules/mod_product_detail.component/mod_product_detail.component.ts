import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';
import 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'mod_product_detail',
	templateUrl: 'mod_product_detail.component.html'
})

export class ModProductDetailComponent implements OnInit {
	
	public product: Product;

	constructor (private service_product: ProductService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.service_product.getProductByIdApi(+params['id']))
			.subscribe(
				data => {
					this.product = data.shift()
					this.service_product.setData(this.product);
				}, // put the data returned from the server in our variable
				error => console.log("Lỗi xảy ra ở HTTP service")
			);
	}
}
