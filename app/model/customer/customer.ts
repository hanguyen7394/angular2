export class Customer{
    id: number;
    username:string;
    password: string;
    password_salt: string;
    email:string;
    address: string;
    phone: string;
    first_name: string;
    last_name:string;
    sex: number;
    img:string;
    last_login:number;
    created: number;
    updated: number;
    status: number;
    constructor(id: number, first_name: string, last_name: string, sex: number, username: string,
     password: string, password_salt: string, email: string, address: string, phone: string, img: string,
      last_login: number, created: number, updated: number, status: number) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.sex = sex;
        this.username = username;
        this.password = password;
        this.password_salt = password_salt;
        this.img = img;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.last_login = last_login;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}