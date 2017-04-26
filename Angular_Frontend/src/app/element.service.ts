import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {  Operator, Observable } from 'rxjs';
import { Element, ElementDetails } from 'element'

@Injectable()
export class ElementService {

  constructor(private http: Http) { }

  getElements(): Promise<Element[]> {
    return this.http.get("/api/elements/").toPromise().then(
      (val) => Promise.resolve(val.json() as Element[]),
      (reason) => {
        console.log("http failure", reason);
        return Promise.reject("Server Connection failed")
      }
    )
  }

  getElementDetails(id: number): Promise<ElementDetails> {
    return this.http.get("/api/elements/"+id.toString()).toPromise().then(
      (val) => Promise.resolve(val.json() as ElementDetails),
      (reason) => {
        console.log("http failure", reason);
        return Promise.reject("Server Connection failed")
      }
    )
  }
}
