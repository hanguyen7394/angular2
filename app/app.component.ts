import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}
