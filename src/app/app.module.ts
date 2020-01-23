import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NextStepDirective } from './directives/stepper/next/next-step.directive';
import { PrevStepDirective } from './directives/stepper/prev/prev-step.directive';
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
    NextStepDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
