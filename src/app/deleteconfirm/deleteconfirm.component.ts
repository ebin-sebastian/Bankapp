import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

  @Input()item:string | undefined

  @Output() onCancel=new EventEmitter()

  cancel(){
    this.onCancel.emit()
  }

}
