import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-childmission',
  template : `
  <p>mission :: {{m}}</p>
  `
})
export class ChildmissionComponent {

  constructor() { }
  @Input()
  m : string ='';

}
