import { Injectable } from '@angular/core';
import { SlideBanner } from '../../model/slide_banner/slide_banner';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class SlideBannerService {
url_api = "/angular2/service_api/api_slide_banner.php";

    constructor(private http: Http) { }

    getListSlideBannerApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}