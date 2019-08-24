import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `

  <h2>this is you {{ k }} </h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <button class="btn btn-success" (click)="add()">click</button>
  <app-my-voter *ngFor="let voter of voters"
  [name]=voter
  (onVoted)="onVoted($event)"
  >
  </app-my-voter>

  `
})
export class VoteTakerComponent {
agreed=0;
disagreed=0;
k=0;
voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
onVoted(agreed : boolean) {
agreed ? this.agreed++ : this.disagreed++;
}
add(){
  this.k++;
}
}
