import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from './first-comp/first-comp.component';



@NgModule({
  declarations: [FirstCompComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FirstCompComponent
  ]
})
export class SubModule1Module { }
