import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
                
        // Instantiate the Bootstrap carousel
        $('.multi-item-carousel .carousel-inner').carousel({
            interval: false
        });

        // for every slide in carousel, copy the next slide's item in the slide.
        // Do the same for the next, next item.
        $('.multi-item-carousel .item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            var firstChild = next.children(':first');
            var link = firstChild.find('> a');

            console.log('link', link);

            var cloneElm  = firstChild.clone();
            var cloneAElm = cloneElm.find('> a');

            cloneAElm.attr('ng-reflect-router-link', link.attr('routerlink'));
            cloneAElm.attr('ng-reflect-href', link.attr('routerlink'));
            cloneAElm.attr('href', link.attr('routerlink'));

            cloneElm.appendTo($(this));

            if (next.next().length > 0) {
                next.next().children(':first-child').clone().appendTo($(this));
            } else {
                $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            }
        });
    }
}