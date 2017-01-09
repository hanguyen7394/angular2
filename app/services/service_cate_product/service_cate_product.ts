import { Injectable } from '@angular/core';
import { CateProduct } from '../../model/cate_product/cate_product';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CateProductService {
    url_api = "/angular2/service_api/api_cate_product.php";

    constructor(private http: Http) { }

    getListCateProductApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}
