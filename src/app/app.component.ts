import { Component } from '@angular/core';
import * as jquery from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'Angular';
  global='globaaaaaaaaaaal';

  ngOnInit()
  {
     jquery('.select22').select2(); //initialize select2 to particular input
  }
}
