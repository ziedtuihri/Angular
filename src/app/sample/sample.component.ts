import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-sample',
template: `
<input type="text" name="heroName" />
<app-required name="Hero Name"></app-required>
`
})
export class SampleComponent {

  @Input()
  public name: String = '';

}
