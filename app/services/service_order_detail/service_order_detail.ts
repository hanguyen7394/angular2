import { Injectable } from '@angular/core';
import { OrderDetail } from '../../model/order_detail/order_detail';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class OrderDetailService {
    url_api = "/angular2/service_api/api_order_detail.php";

    constructor(private http: Http) { }

    getListOrderApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}