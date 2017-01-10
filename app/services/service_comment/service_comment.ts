import { Injectable } from '@angular/core';
import { Comment } from '../../model/comment/comment';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CommentService {
    url_api = "/angular2/service_api/api_comment.php";

    constructor(private http: Http) { }

    getListCommentApi(product_id_comment: number)
	{
		let body = JSON.stringify({ "product_id_comment": product_id_comment });
		let option = new RequestOptions({ method: "post" });
		return this.http.post(this.url_api, body, option).map(res => res.json());
	}
}