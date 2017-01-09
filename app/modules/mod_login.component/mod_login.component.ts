import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user/user';

@Component({
	moduleId: module.id,
	selector: 'mod_login',
	templateUrl: 'mod_login.component.html'
})
export class ModLoginComponent implements OnInit {

	public model = new User(1,'', '', '', '', '','','',1,0,0,0,0);

	constructor() { }

	ngOnInit() { }
}
