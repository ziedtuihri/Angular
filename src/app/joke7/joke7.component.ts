import { Component } from '@angular/core';
import { Joke } from '../joke5/joke5.component';

@Component({
  selector: 'app-joke7',
  template: `
  <app-joke5 (jokeCreated)="addJoke($event)"></app-joke5>
  <app-joke6 *ngFor="let j of jokes" [joke]="j"></app-joke6>
  `
})

export class Joke7Component
{
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke(
        "What did the cheese say when it looked in the mirror?",
        "Hello-me (Halloumi)"
      ),
      new Joke(
        "What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)"
      ),
      new Joke(
        "A kid threw a lump of cheddar at me",
        "I thought ‘That’s not very mature’"
      )
    ];
  }

  addJoke(joke: any) {
    this.jokes.unshift(joke);
  }

}
