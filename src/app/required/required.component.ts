import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-required',
  template: `{{name}} is required. RQ : you can read this component in component app and other component in the app. `
})
export class RequiredComponent  {

  @Input()
  public name: String = '';

}
