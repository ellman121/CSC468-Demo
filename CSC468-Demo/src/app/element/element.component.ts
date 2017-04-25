import { Component, OnInit, Input } from '@angular/core';
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

}
