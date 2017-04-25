import { Component, OnInit } from '@angular/core';
import { ElementService } from 'app/element.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ElementService]
})
export class TableComponent implements OnInit {

  constructor(private es: ElementService) { }

  elements: {[key: string]: any}[] = []
  errors: string

  ngOnInit() {
    this.es.getElements().then(
      (elements) => {
        console.log(elements)
        this.elements = elements
      },
      (reason) => {
        this.errors = reason
      }
    )
  }

}
