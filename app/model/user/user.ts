export class User{
	id: number;
	username:string;
	password: string;
	password_salt: string;
	email:string;
	first_name: string;
	last_name:string;
	img:string;
	level: number;
	last_login:number;
	created: number;
	updated: number;
	status: number;
	constructor(id: number, first_name: string, last_name: string, username: string, password: string,
	 password_salt: string, email: string, img: string, level: number, last_login: number,
	  created: number, updated: number, status: number) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.password = password;
		this.password_salt = password_salt;
		this.img = img;
		this.email = email;
		this.level = level;
		this.last_login = last_login;
		this.created = created;
		this.updated = updated;
		this.status = status;
	}
}
