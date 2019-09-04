import { Component , OnInit } from '@angular/core';
@Component({
selector: 'app-pager',
template: `
<div><select (change)="Selected($event)"><option *ngFor="let group of groups" [value]="group.name">{{group.name}}</option></select></div>
<input type="button" (click)="getVal()" value="submit"/>
<h4 [hidden]="hide">the name selected : {{ selected }} or for click button : {{ button }} </h4>
<br><br>

`
})
export class PagerComponent {

selected : string = '';
button : string = '';

hide : boolean = true;
  Selected(event: any){
    //update the ui
    this.selected = event.target.value;
    this.hide=false;
  }
// or you can use the button :
getVal(){
this.button=this.selected;
}
groups=[
  {
    "name": "select your chois",
    "items": ""
  },
     {
       "name": "pencils",
       "items": "red pencil"
     },
     {
       "name": "rubbers",
       "items": "big rubber"
     },
     {
       "name": "rubbers1",
       "items": "big rubber1"
     }
  ];

}
