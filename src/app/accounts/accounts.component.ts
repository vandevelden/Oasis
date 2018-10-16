import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';

@Component({
  selector: 'app-accounts',
  // templateUrl: './accounts.component.html',
  templateUrl: './account.details.html',
  styleUrls: ['../../assets/css/styles.css',
  '../../assets/css/bootstrap.min.css',
  '../../assets/css/default-css.css',
  '../../assets/css/font-awesome.min.css',
  '../../assets/css/metisMenu.css',
  // '../../assets/css/owl.carousel.min.css',
  '../../assets/css/responsive.css',
  '../../assets/css/slicknav.min.css',
  '../../assets/css/styles.css',
  '../../assets/css/themify-icons.css',
  '../../assets/css/typography.css' ]
})
export class AccountsComponent implements OnInit {

  items = {};
  watname = null;

  constructor( private ethcontractService: EthcontractService ) {

    this.items = this.ethcontractService.getAllocations();
    // this.items = 
    // [{name: "jean", surname: "kruger"}, 
    // {name: "bobby", surname: "marais"}];



  }
  ngOnInit() {
    
  }

}