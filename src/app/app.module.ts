import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NextStepDirective } from './directives/stepper/next-prev/next-step.directive';
import { PrevStepDirective } from './directives/stepper/next-prev/prev-step.directive';
import { StepDirective } from './directives/stepper/step/step.directive';
import { StepperDirective } from './directives/stepper/stepper.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StepperDirective,
    StepDirective,
    PrevStepDirective,
    NextStepDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
