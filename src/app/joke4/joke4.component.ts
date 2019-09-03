import { Component} from '@angular/core';

@Component({
  selector: 'app-joke4',
  template: `
<app-joke3 *ngFor="let j of jokes" [joke]="j"></app-joke3>
  `
})
export class Joke4Component  {
jokes : Joke[];
  constructor() {
    this.jokes=[
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
   }

}

class Joke{

  setup : string;
  punchline : string;
  hide : boolean;

  constructor(setup : string , punchline : string){
    this.setup=setup;
    this.punchline=punchline;
    this.hide=true;
  }
toggle(){
  this.hide=!this.hide;
}

}
