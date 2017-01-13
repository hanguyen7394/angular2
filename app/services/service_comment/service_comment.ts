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

    getListCommentApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}