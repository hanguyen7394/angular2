import { Injectable } from '@angular/core';
import { Partner } from '../../model/partner/partner';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class PartnerService {
    url_api = "/angular2/service_api/api_partner.php";

    constructor(private http: Http) { }

    getListPartnerApi() {
        return this.http.get(this.url_api).map(res => res.json());
    }
}