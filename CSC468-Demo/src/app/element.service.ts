import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {  Operator, Observable } from 'rxjs';

@Injectable()
export class ElementService {

  constructor(private http: Http) { }

  getElements(): Promise<{[key: string]: any}[]> {
    return this.http.get("/api/elements/").toPromise().then(
      (val) => val.json(),
      (reason) => {
        console.log("http failure", reason);
        return "Server Connection failed"
      }
    )
  }
}
