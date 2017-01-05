import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'mod_products',
    templateUrl: 'mod_products.component.html'
})
export class ModProductsComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService, private router: Router,
        private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service_product.getListProductByCateApi(id).subscribe(
            data => this.list_product_display = data, // put the data returned from the server in our variable
            error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
            () => console.log(this.list_product_display)//run this code in all cases
            );
        });

         $(".simpleCart_shelfItem").click(function() {
            document.body.scrollTop = 0;
        });
    }

    gotoDetail(product: Product): void {
        let link = ['/single', product.id];
        this.router.navigate(link);
    }
}