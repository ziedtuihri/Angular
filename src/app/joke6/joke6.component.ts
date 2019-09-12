import { Component, OnInit , Input } from '@angular/core';
import { Joke } from '../joke5/joke5.component';


@Component({
  selector: 'app-joke6',
  template: `
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
export class Joke6Component implements OnInit {

  @Input("joke") data: Joke;

  constructor() { }

  ngOnInit() {
  }

}
