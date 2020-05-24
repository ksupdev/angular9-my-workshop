import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountNewComponent } from './accounts/account-new/account-new.component';



@NgModule({
  declarations: [AccountsComponent, AccountListComponent, AccountNewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AccountsComponent
  ]

})
export class ManageAccountModule { }
