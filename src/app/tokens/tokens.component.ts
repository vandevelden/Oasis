import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';
import { TextAttribute } from '../../../node_modules/@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-tokens',
  //templateUrl: './token_overview.html',
  templateUrl: './tokens.component.html',
  styleUrls:['../../assets/css/styles.css',
  '../../assets/css/bootstrap.min.css',
  '../../assets/css/default-css.css',
  '../../assets/css/font-awesome.min.css',
  '../../assets/css/metisMenu.css',
  //'../../assets/css/owl.carousel.min.css',
  '../../assets/css/responsive.css',
  '../../assets/css/slicknav.min.css',
  '../../assets/css/styles.css',
  '../../assets/css/themify-icons.css',
  '../../assets/css/typography.css' ]
})
export class TokensComponent implements OnInit {

  total_supply = 100;

  coinbase_address = '0x0';
  
  coinbase_token_balance = 17;
  
  allocated = 10; 
  
  market_address = ' ';

  market_token_balance = 0;

  constructor( private ethcontractService: EthcontractService ) {
    //this.initContractAccount();
    this.getTokensBalance();
  }

  // initContractAccount = () => {
  //   let that = this;
  //   this.ethcontractService.getContractAccount().then(function (result: any) {
  //     // console.log('debugging displaying contract account ');
  //     // console.log(result);
  //     if (result.tokenBalance !== null) {
  //       if (result.tokenBalance.c !== null) {
  //         that.basecoin_address = result.tokenAccount;
  //         that.balance = result.tokenBalance;
  //       }
  //     }
      
  //   }).catch(function(error) {
  //     console.log(that);
  //     console.log(error);
  //   });

  //   this.ethcontractService.testBalances();

  // }
  
  getTokensBalance = () => {

    let that = this;
    this.ethcontractService.tokensBalance().then(function (result: any) {

      console.log('debugging displaying contract account ');
      console.log(result);
      that.coinbase_address = result.coinbase_address;
      that.total_supply = result.total;
      that.coinbase_token_balance = result.coinbase_balance;
      if (that.total_supply >= that.coinbase_token_balance){
        that.allocated  = that.total_supply - that.coinbase_token_balance;

      }
      console.log(that.allocated);
    }).catch(function(error) {
    console.log(that);
    console.log(error);
  });
}


  ngOnInit() {
  }

}
