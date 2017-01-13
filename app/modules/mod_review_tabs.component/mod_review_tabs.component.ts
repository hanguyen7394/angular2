import { Component, OnInit } from '@angular/core';
import { Comment } from '../../model/comment/comment';
import { CommentService } from '../../services/service_comment/service_comment';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
declare var fakewaffle: any;

@Component({
    moduleId: module.id,
    selector: 'mod_review_tabs',
    templateUrl: 'mod_review_tabs.component.html'
})
export class ModReviewTabsComponent implements OnInit {
    list_comment_display: Comment[];
    constructor(private service_comment: CommentService, private route: ActivatedRoute) {  }
  
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let product_id_comment = +params['id'];
            this.service_comment.getListCommentApi(product_id_comment).subscribe(
                data => this.list_comment_display = data, // put the data returned from the server in our variable
                error => console.log("Lỗi xảy ra ở HTTP service") // in case of failure show this message
            );
            
        });
        
        
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
      } )( jQuery );
    }
}