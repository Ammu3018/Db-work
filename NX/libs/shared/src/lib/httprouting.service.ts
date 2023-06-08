/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttproutingService {

  url = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getMethod(data: any) {
    return this.http.get(this.url + 'v1/' + data);
  }

  postMethod(Lurl: any, data: any) {
    console.log("post method url: ",this.url + 'v1/' + Lurl, data);
    return this.http.post(this.url + 'v1/' + Lurl, data);
  }
}
