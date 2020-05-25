import { Injectable } from '@angular/core';
import {ManageAccountModule} from './manage-account.module';
import { LoggingService } from '../shares/logging.service';

@Injectable()
export class AccountsService {

  accounts =[
    {
      name: 'Master Account',
      status: 'active'
    }
  ];

  constructor(private loggingService: LoggingService){

  }

  public addAccount(name: string, status: string){
    this.accounts.push({name: name,status: status});
    console.log('Accounts size : '+this.accounts.length);
  }

  public updateStatus(id: number,status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }




}
