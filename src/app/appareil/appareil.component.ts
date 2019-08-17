import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

title='hello i m zied tuihri';
appareilName: string = 'Machine à laver';
appareilStatus: string = 'éteint';
isAuth = false;
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
  }
status(){
  return this.appareilStatus;
}
onAllumer(){
  console.log('allumer tout ');

}
}
