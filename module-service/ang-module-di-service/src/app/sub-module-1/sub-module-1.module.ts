import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { FirstCompL2Component } from './first-comp/first-comp-l2/first-comp-l2.component';



@NgModule({
  declarations: [FirstCompComponent, FirstCompL2Component],
  imports: [
    CommonModule
  ],
  exports:[
    FirstCompComponent,
    FirstCompL2Component
  ]
})
export class SubModule1Module { }
