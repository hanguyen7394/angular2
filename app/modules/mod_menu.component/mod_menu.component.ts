import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { CateProductService } from '../../services/service_cate_product/service_cate_product';
import { CateProduct } from '../../model/cate_product/cate_product';

@Component({
	moduleId: module.id,
	selector: 'mod_menu',
	templateUrl: 'mod_menu.component.html'
})
export class ModMenuComponent implements OnInit {
	public list_cate_product: Array<CateProduct>;

	constructor(private service_cate_product: CateProductService) {}

	ngOnInit() {
		this.service_cate_product.getListCateProductApi()
			.subscribe(
				data => this.list_cate_product = data,
				error => console.log("Error http service!!")
			)
	}
}
