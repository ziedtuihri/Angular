import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `
  <h3>{{name2}}</h3>
  `
})
export class NameChildComponent {
private _name2 : string ='';
@Input()
set name2(name :string){
  this._name2=(name && name.trim()) || '<no name set>';
}
get name2(): string {return this._name2+" : =>";}
}
