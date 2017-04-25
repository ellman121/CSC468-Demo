import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {  Operator, Observable } from 'rxjs';

@Injectable()
export class ElementService {

  constructor(private http: Http) { }

  getElements(): Promise<{[key: string]: any}[]> {
    return this.http.get("/api/elements/").toPromise().then(
      (val) => Promise.resolve(val.json() as {[key: string]: any}[]),
      (reason) => {
        console.log("http failure", reason);
        return Promise.reject("Server Connection failed")
      }
    )
  }
}
