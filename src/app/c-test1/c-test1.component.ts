import { Component, Input } from '@angular/core';
import{ Hero } from '../../../hero';
 @Component({
  selector: 'app-c-test1',
  template: `
  <h3> i m {{ hero.name }} for testing {{masterName}} </h3>
  <h2>good by {{ hero.name }} </h2>
  `
})
export class CTest1Component {
@Input()
private hero : Hero;

@Input('master') masterName : string;
}
