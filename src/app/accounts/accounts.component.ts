import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, Input, OnInit } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';
interface Account {
  id: number;
  type: string;
  ticker: string;
  quantity: number;
  price_purchase: number;
  time_purchase: string;
  price_current: number;
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})


export class AccountsComponent implements OnInit {

  constructor(private mrktService: MrktService) { }


  accType: string = "";
  accounts: Account[] = [];

  ngOnInit(): void {
  }

  selectAccountCall(){
    console.log("clicked")
    this.mrktService.getAccData(this.accType)
      .subscribe( (data:any)=>{
        // var price = String(data.price_current)
        // var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',});
        // data.price_current = formatter.format(data.price_current)
        // console.log(data)
        this.accounts = data
        console.log(this.accounts)
      }) 
    }
}
