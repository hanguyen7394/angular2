import { Injectable } from '@angular/core';
import { User } from '../../model/user/user';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    url_api = "/angular2/service_api/api_user.php";

    constructor(private http: Http) { }

    getListUserApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}