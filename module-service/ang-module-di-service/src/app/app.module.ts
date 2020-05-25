import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubModule1Module } from './sub-module-1/sub-module-1.module';
import { ManageAccountModule } from './manage-account/manage-account.module';
import { LoggingService } from './shares/logging.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubModule1Module,
    ManageAccountModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
