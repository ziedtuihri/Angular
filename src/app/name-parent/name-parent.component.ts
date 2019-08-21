import { Component} from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
  <h2> Master controls {{names.length}} names </h2>
  <app-name-child *ngFor="let name of names" [name2]="name"></app-name-child>
  `
})
export class NameParentComponent  {

names=['Mr IQ','  ','Bombasto'];

}
