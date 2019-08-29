import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-childmission',
  template : `
  <p>{{mission}}</p>
  `
})
export class ChildmissionComponent {

  constructor() { }
  @Input()
  name : string ='';

}
