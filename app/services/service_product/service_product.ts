import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
	url_api = "/angular2/service_api/api_product.php";
	data_shared: Array<any>=[];
	constructor(private http: Http) { }

	getListProductApi() {
		return this.http.get(this.url_api).map(res => res.json());
	}

	getListProductByCateApi(id: number)
	{
		let body = JSON.stringify({ "product_cate_id": id });
		let option = new RequestOptions({ method: "post" });
		return this.http.post(this.url_api, body, option).map(res => res.json());
	}

	getProductByIdApi(id: number)
	{
		let body = JSON.stringify({ "id": id });
		let option = new RequestOptions({ method: "post" });
		return this.http.post(this.url_api, body, option).map(res => res.json());
	}

	setData(data: any) {
		this.data_shared.length = 0;
		this.data_shared.push(data);
	}

	getData() {
		return this.data_shared;
	}
}
