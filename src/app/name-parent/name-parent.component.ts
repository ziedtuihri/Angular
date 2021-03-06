/*import { Component} from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
  <h2> Master controls {{names.length}} names </h2>
  <app-name-child *ngFor="let name of names" [name2]="name"></app-name-child>
  `
})
export class NameParentComponent  {

names=['Mr IQ','  ','Bombasto'];

}*/
import { Component } from '@angular/core';
import { MissionService }    from '../mission.service';


@Component({
  selector: 'app-name-parent',
  template : `
  <h2>Mission Control : </h2>
  <button class="btn btn-outline-warning" (click)="announce()" >Announce mission </button>
  <app-name-child *ngFor="let astronauts of astronaut" [astronaut]="astronaut"></app-name-child>

  <h3>History</h3>
  <ul>
  <li *ngFor="let event of history">{{ event }}</li>
  </ul>

  `,
  providers : [MissionService]
})
export class NameParentComponent  {

  astronauts=['Lovell' , 'Swigert' , 'Haise'];
  constructor(private missionService: MissionService) {
missionService.missionConfirmed$.subscribe(
astronaut => {
this.history.push(`${astronaut} confirmed the mission`);
});
}


   announce() {
let mission = this.missions[this.nextMission++];
this.missionService.announceMission(mission);
this.history.push(`Mission "${mission}" announced `+this.nextMission);
if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
}

  history : string[] =[];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'
             ];
 nextMission = 0;

}
