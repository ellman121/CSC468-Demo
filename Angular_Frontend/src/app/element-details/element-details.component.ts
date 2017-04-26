import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material'
import { ElementService } from 'app/element.service';
import { ElementDetails } from 'element'

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css'],
  providers: [ElementService]
})
export class ElementDetailsComponent implements OnInit {

  constructor(private dialogRef: MdDialogRef<ElementDetailsComponent>, private es: ElementService) { }

  @Input() id: number
  private lastId: number
  errors: string
  details: ElementDetails
  awaiting = true

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('details id', this.id)
    if (this.id != this.lastId && !!this.id) {
      this.awaiting = true
      this.lastId = this.id
      this.es.getElementDetails(this.id).then(
        (details) => {
          this.awaiting = false
          this.details = details
        },
        (reason) => {
          this.awaiting = false
          this.errors = reason
        }
      )
    }
  }

}
