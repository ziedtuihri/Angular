import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke2',
  template : `
  <h3> this is joke 2 : </h3>
  <div class="card card-block"
       *ngFor="let joke of jokes">
    <h4 class="card-title">{{joke.setup}}</h4>
    <p class="card-text"
       [hidden]="joke.hide">{{joke.punchline}}</p>
    <a class="btn btn-warning" (click)="joke.toggle()">Tell Me</a>
  </div>
  `
})


export class Joke2Component {
  jokes: Joke[];

    constructor() {
      this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
      ];
    }



}

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
