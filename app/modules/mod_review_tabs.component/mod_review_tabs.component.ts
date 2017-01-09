import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var fakewaffle: any;

@Component({
    moduleId: module.id,
    selector: 'mod_review_tabs',
    templateUrl: 'mod_review_tabs.component.html'
})
export class ModReviewTabsComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        $( '#myTab a' ).click( function ( e: any) {
        e.preventDefault();
        $( this ).tab( 'show' );
      } );

      $( '#moreTabs a' ).click( function ( e: any ) {
        e.preventDefault();
        $( this ).tab( 'show' );
      } );

      ( function( $ ) {
          // Test for making sure event are maintained
          $( '.js-alert-test' ).click( function () {
            alert( 'Button Clicked: Event was maintained' );
          } );
          fakewaffle.responsiveTabs( [ 'xs', 'sm' ] );
      } );
    }
}