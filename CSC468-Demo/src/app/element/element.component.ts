import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Element } from 'element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() element: Element
  //@Output() click = new EventEmitter<number>()

  onClick() {
    //this.click.emit(this.element.number)
  }

}
