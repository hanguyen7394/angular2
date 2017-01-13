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
    constructor(private service_product: ProductService, private router: Router, private route: ActivatedRoute) {  }
    ngOnInit(): void {
         this.route.params.forEach((params: Params) => {
            let product_id = +params['id'];
            this.service_product.getRelatedProductByIdApi(product_id).subscribe(
                data => this.list_product_display = data.sort((item1: any, item2: any) => item2.updated - item1.updated).slice(0, 3), // put the data returned from the server in our variable
                error => console.log("Lỗi xảy ra ở HTTP service") // in case of failure show this message
            );
            
        });
    }
    gotoDetail(product: Product): void {
        let link = ['/single', product.id];
        this.router.navigate(link);
    }
}