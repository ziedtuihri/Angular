import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-joke3',
  template: `
  <h3> htis is joke4 </h3>
  <div class="card card-block">
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text"
       [hidden]="data.hide">{{data.punchline}}</p>
    <a (click)="data.toggle()"
       class="btn btn-warning">Tell Me
    </a>
  </div>
  `
})
export class Joke3Component  {

  constructor() { }

@Input('joke') data : Joke;
}

class Joke{

}
