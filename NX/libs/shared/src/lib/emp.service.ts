/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttproutingService } from './httprouting.service';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttproutingService) { }

  postEmployee(data: any) {
    return this.http.postMethod("testPostEmployees", data);
  }
  getEmployee(){
    return this.http.getMethod('testGetEmployees')
  }
}
