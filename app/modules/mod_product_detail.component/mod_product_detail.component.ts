import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'mod_product_detail',
    templateUrl: 'mod_product_detail.component.html'
})
export class ModProductDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    }
}