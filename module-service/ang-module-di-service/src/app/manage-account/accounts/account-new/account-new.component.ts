import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string,accountStatus: string){
    this.accountsService.addAccount(accountName ,accountStatus);
  }



}
