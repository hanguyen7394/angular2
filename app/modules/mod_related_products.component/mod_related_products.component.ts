import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	moduleId: module.id,
	selector: 'mod_related_products',
	templateUrl: 'mod_related_products.component.html'
})
export class ModRelatedProductsComponent implements OnInit {
	list_product_display: Product[];
	constructor(private service_product: ProductService, private router: Router, private route: ActivatedRoute) {
		//cate_id = cate_id của sản phẩm tại trang single
		// this.service_product.getListProductPromise().then(list => this.list_product_display
		//     = list.filter(item => item.product_cate_id == 1).slice(0, 3));
	}
	ngOnInit(): void {
		 this.route.params.forEach((params: Params) => {
			let product_id = +params['id'];
			this.service_product.getRelatedProductByIdApi(product_id).subscribe(
				data => this.list_product_display = data.slice(0, 3), // put the data returned from the server in our variable
				error => console.log("Lỗi xảy ra ở HTTP service"))
			
		});
	}
	gotoDetail(product: Product): void {
		let link = ['/single', product.id];
		this.router.navigate(link);
	}
}
