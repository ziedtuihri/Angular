import { Component, Input } from '@angular/core';
import{ hero } from '../../../hero'
 @Component({
  selector: 'app-c-test1',
  template: `
  <h3> i m {{name}} for testing {{masterName}} </h3>
  `
})
export class CTest1Component {
@Input()
hero : Hero;
@Input('master') masterName : string;
}
