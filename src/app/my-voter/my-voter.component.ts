import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-voter',
  template: `
<h4>{{ name }} </h4>
<button class="btn btn-success" (click)="vote(true)" [disabled]="voted">Agree</button>
<button class="btn btn-success" (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class MyVoterComponent  {
@Input() name : string;
@Output() onVoted = new EventEmitter<boolean>();
voted = false;
vote(agreed : boolean){
  this.onVoted.emit(agreed);
  this.voted=true;
  setTimeout(
    () => {
      this.voted = false;
    }, 2000
  );
}
}
