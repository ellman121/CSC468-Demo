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
          element.xpos
          if(!this.rows[element.ypos]) {
            this.rows[element.ypos] = []
          }
          this.rows[element.ypos][element.xpos] = element.number
        });
        this.elements = elements
      },
      (reason) => {
        this.errors = reason
      }
    )
  }

}
