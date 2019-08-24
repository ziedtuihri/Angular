import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
selector: 'app-pager',
template: `
<div id="pager-wrapper">
<span *ngFor="#page of pageCount" (click)="pageClicked(page)">{{page}}</span>
</div>
`
})
export class PagerComponent {
@Input() pageCount: number;
@Output() pageNumberClicked = new EventEmitter();
constructor() { }
pageClicked(pageNum){
this.pageNumberClicked.emit(pageNum); //Send clicked page number as output
}
}
