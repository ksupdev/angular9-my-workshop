import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubModule1Module } from './sub-module-1/sub-module-1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubModule1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
