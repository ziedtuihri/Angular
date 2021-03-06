import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { Component1Component } from './component1/component1.component';
import { RequiredComponent } from './required/required.component';
import { SampleComponent } from './sample/sample.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { MyVoterComponent } from './my-voter/my-voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { PagerComponent } from './pager/pager.component';
import { DataComponent } from './data/data.component';
import { MissionComponent } from './mission/mission.component';
import { ChildmissionComponent } from './childmission/childmission.component';
import { MyAstronautComponent } from './my-astronaut/my-astronaut.component';
import { JokeComponent } from './joke/joke.component';
import { Joke2Component } from './joke2/joke2.component';
import { Joke3Component } from './joke3/joke3.component';
import { Joke4Component } from './joke4/joke4.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { Select2Module } from 'ng2-select2';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Joke5Component } from './joke5/joke5.component';
import { Joke6Component } from './joke6/joke6.component';
import { Joke7Component } from './joke7/joke7.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    Component1Component,
    RequiredComponent,
    SampleComponent,
    NameChildComponent,
    NameParentComponent,
    MyVoterComponent,
    VoteTakerComponent,
    PagerComponent,
    DataComponent,
    MissionComponent,
    ChildmissionComponent,
    MyAstronautComponent,
    JokeComponent,
    Joke2Component,
    Joke3Component,
    Joke4Component,
    AutoCompleteComponent,
    ProductDetailsComponent,
    Joke5Component,
    Joke6Component,
    Joke7Component,

  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
