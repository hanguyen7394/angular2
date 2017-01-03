import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'mod_banner',
    templateUrl: 'mod_banner.component.html'
})
export class ModBannerComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        $(function () {
            // Slideshow 4
            $("#slider4").responsiveSlides({
                auto: true,
                pager: true,
                nav: false,
                speed: 500,
                namespace: "callbacks",
                before: function () {
                    $('.events').append("<li>before event fired.</li>");
                },
                after: function () {
                    $('.events').append("<li>after event fired.</li>");
                }
            });

        });
    }
}