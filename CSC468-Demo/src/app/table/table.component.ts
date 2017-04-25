import { Component, OnInit } from '@angular/core';
import { ElementService } from 'app/element.service';
import { Element } from 'element'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ElementService]
})
export class TableComponent implements OnInit {

  constructor(private es: ElementService) { }

  rows: number[][] = []
  elements: {[key: string]: any}[] = []
  errors: string

  ngOnInit() {
    this.es.getElements().then(
      (elements) => {
        console.log(elements)
        this.rows = []
        elements.forEach(element => {
          if(!this.rows[element.ypos-1]) {
            this.rows[element.ypos-1] = []
          }
          this.rows[element.ypos-1][element.xpos-1] = element.number
        });
        this.elements = elements
      },
      (reason) => {
        this.errors = reason
      }
    )
  }

}
