import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  template: `
  <h1>{{setup}}</h1>
  <p>{{punchline}}</p>

  <div class="card card-block"
     *ngFor="let j of jokes">
  <span style="padding:5px;"><h4 class="card-title">{{j.name}}</h4></span>
  <span style="padding:5px;"><p class="card-text">{{j.desc}}</p></span>
  <a class="btn btn-primary"
   (click)="j.hide = !j.hide">Tell Me
</a>
</div>

  `
})
export class JokeComponent implements OnInit {

setup : string ='fdsfsdfdsd';
punchline : string = 'fdsfsdf';
name : string ='';
jokes : Object[];

  constructor() {
        this.setup = "What did the cheese say when it looked in the mirror?";
        this.punchline = "Halloumi (Hello Me)";
        this.jokes=[
          {
            name:'zied ',
            desc:'i m working in the dark',
            hide:'true'
          },
          {
            name:'aymen',
            desc:'i m working in firema',
            hide:'false'
          }

        ];

  }
  ngOnInit() {
  }

}
// creat a object of an constructor
let joke = new JokeComponent();
console.log(joke.setup);
console.log(joke.punchline);
