import { Component , OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-pager',
  template: `
  <div><select (change)="Selected($event)"><option *ngFor="let group of groups" [value]="group.name">{{group.name}}</option></select></div>
  <input type="button" value="submit"/>
  <h4 [hidden]="hide">the name selected : {{ selected }} </h4>

  <div><select (change)="Selected2($event)"><option *ngFor="let l of Lists" [value]="l.name">{{l.name}}</option></select></div>
  <input type="button" value="submit"/>
  <h4 [hidden]="hide2">the name selected : {{ selected2 }} </h4>
  <br><br>
  <select class="select22" name="state" style="width: 250px;">
  <option>select</option>
  <option>Wyoming</option>
  <option>Zaraga</option>
  <option>Korasan</option>
  </select>
  `
})

//Pager Component
export class PagerComponent implements OnInit
{
  selected: string = '';
  hide: boolean = true;
  selected2: string = '';
  hide2: boolean = true;
  Lists: List[];

  ngOnInit(){
    window.alert('The product has been shared!');
  }

  //method for event when selected the name
  Selected(event: any)
  {
    //update the ui
    this.selected = event.target.value;
    this.hide=false;
  }

  Selected2(event2: any)
  {
    //update the ui
    this.selected2 = event2.target.value;
    this.hide2=false;
  }

  constructor()
  {
    this.Lists=[
      new List("select your choice"," "),
      new List("pencils","red pencil"),
      new List("rubbers","big rubber"),
      new List("rubbers1","big rubber1")
    ];
  }

  groups=[
    {
      "name": "select your choice",
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

// another class for encapsulation with OOP

class List
{
 private  name: string;
 private  items: string;

  constructor(name: string , items: string)
  {
    this.name=name;
    this.items=items;
  }
}
