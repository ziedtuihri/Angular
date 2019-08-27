import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';


const routes: Routes = [
  {
      path: 'app',
      component: AppareilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
