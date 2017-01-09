
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/service_product/service_product';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'mod_product_detail',
	templateUrl: 'mod_product_detail.component.html'
})

export class ModProductDetailComponent implements OnInit {

    constructor(
        private service_product: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input() product: Product;
    
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service_product.getProductByIdApi(id).subscribe(
                data => this.product = data.shift(), // put the data returned from the server in our variable
                error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
                () => console.log(this.product)//run this code in all cases
            );
        });
        
        function flexslider() {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        }
        setTimeout(flexslider, 500);
    }
}
