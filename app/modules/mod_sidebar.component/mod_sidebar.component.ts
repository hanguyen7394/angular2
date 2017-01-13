import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'mod_sidebar',
    templateUrl: 'mod_sidebar.component.html'
})
export class ModSidebarComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    
    gotoListProducts(): void {
        let link = ['/products', { page: 1 } ];
        this.router.navigate(link);
    }
}