/*import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `
  <h3>{{name2}}</h3>
  `
})
export class NameChildComponent {
private _name2 : string ='';
@Input()
set name2(name :string){
  this._name2=(name && name.trim()) || '<no name set>';
}
get name2(): string {return this._name2+" : =>";}
}*/
import { Component , Input , OnDestroy , OnInit } from '@angular/core';
import { MissionService }                from '../mission.service';
import { Subscription }                  from 'rxjs/Subscription';

@Component({
  selector: 'app-name-child',
  template : `
  <p>
  {{ astronaut }}: <strong>{{ mission }}</strong>
  <button
  (click)="confirm()"
  [disabled]="!announced || confirmed">
  Confirm
  </button>
  </p>
  `
})
export class NameChildComponent implements OnDestroy {

  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
this.subscription = missionService.missionAnnounced$.subscribe(
mission => {
this.mission = mission;
this.announced = true;
this.confirmed = false;
});
}

  confirm() {
  this.confirmed = true;
  this.missionService.confirmMission(this.astronaut);
  }
  ngOnDestroy() {
  // prevent memory leak when component destroyed
  this.subscription.unsubscribe();
  }
}
