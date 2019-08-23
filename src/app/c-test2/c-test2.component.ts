import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../../hero';
@Component({
  selector: 'app-c-test2',
  template: `
<app-c-test1 *ngFor="let hero of heroes"
 [hero]=hero
  [master]=master>
   </app-c-test1>
  `
})
export class CTest2Component {

heroes = HEROES;
master= 'Master';
}
