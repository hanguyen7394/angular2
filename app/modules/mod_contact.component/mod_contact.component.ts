import { Component, OnInit } from '@angular/core'; 

@Component({
	moduleId: module.id,
	selector: 'mod_contact',
	templateUrl: 'mod_contact.component.html'
})
export class ModContactComponent implements OnInit {
	user: any = {
		name:'',
		email:'',
		password:''
	}
	constructor() { }

	ngOnInit() { }


}
