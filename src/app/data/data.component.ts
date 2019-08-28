import { Component , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListService } from '../data-list.service';
import { PagerComponent } from '../pager/pager.component';


@Component({
  selector: 'app-data',
  template: `
  <table>
  <tr *ngFor="let person of personsData">
  <td>{{person.name}}</td>
  <td>{{person.surname}}</td>
  </tr>
  </table>
  <pager [pageCount]="pageCount" (pageNumberClicked)="pageChanged($event)"></pager>
  `
})
export class DataComponent  {
  private personsData = null;
  private pageCount: number;
  constructor(private dataListService: DataListService) {
  var response = this.dataListService.getData(1); //Request first page from the service
  this.personsData = response.persons;
  this.pageCount = response.totalCount / 10;//We will show 10 records per page.
}
pageChanged(pageNumber: number){
var response = this.dataListService.getData(pageNumber); //Request data from the service with new page number

this.personsData = response.persons;

}
}
@NgModule({
imports: [CommonModule],
exports: [],
declarations: [DataListComponent, PagerComponent],
providers: [DataListService],
})
export class DataListModule { }
