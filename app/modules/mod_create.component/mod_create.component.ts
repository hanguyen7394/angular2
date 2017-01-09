import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../model/user/user';

import { UserService } from '../../services/service_user/service_user';

@Component({
	moduleId: module.id,
	selector: 'mod_create',
	templateUrl: 'mod_create.component.html'
})
export class ModCreateComponent implements OnInit {

	public model = new User(1,'', '', '', '', '','','',1,0,0,0,0);
	public list_user: Array<User>;

	constructor(private service_user: UserService) { }

	ngOnInit() {
		this.service_user.getListUserApi().subscribe(
			data => this.list_user = data,
			error => console.log("Error from http service")
		)
	}

	register(form: NgForm) {
		var utc = +new Date(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
		console.log(form.value);
		
		this.model = new User (
			this.list_user.length,
			form.value.first_name,
			form.value.last_name,
			form.value.username,
			form.value.password,
			form.value.password,
			form.value.email,
			'',
			1,
			0,
			utc,
			utc,
			1
		);

		console.log(this.model);

	}
}
