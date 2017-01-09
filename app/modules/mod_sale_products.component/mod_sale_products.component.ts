import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'mod_sale_products',
    templateUrl: 'mod_sale_products.component.html'
})
export class ModSaleProductsComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService, private router: Router) { }
    ngOnInit(): void {
        this.service_product.getListProductApi().subscribe(
            data => this.list_product_display = data.filter((item: any) => item.price_sale != 0)
                .sort((item1: any, item2: any) => item2.price_sale - item1.price_sale).slice(0, 9), // put the data returned from the server in our variable
            error => console.log("Lỗi xảy ra ở HTTP service") // in case of failure show this message
        );
        function carouselSale() {
            $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 2000
            });
            $(".simpleCart_shelfItem").click(function () {
                document.body.scrollTop = 0;
            });
        }
        setTimeout(carouselSale, 500);
    }
    gotoDetail(product: Product): void {
        let link = ['/single', product.id];
        this.router.navigate(link);
    }
}
