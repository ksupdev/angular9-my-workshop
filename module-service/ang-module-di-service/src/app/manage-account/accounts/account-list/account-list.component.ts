import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  @Input() account: {name: string, status: string};
  @Input() id: number;

  ngOnInit(): void {
  }

  public onSetTo(status: string){
    // this.accountsService.accounts[''+this.id].status = status;
    this.accountsService.updateStatus(this.id,status);
  }

}
