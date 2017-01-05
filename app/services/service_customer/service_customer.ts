import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer/customer';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {
    url_api = "/banhangA2/service_api/api_customer.php";

    constructor(private http: Http) { }

    getListCustomerApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}