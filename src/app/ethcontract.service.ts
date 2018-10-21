import { Injectable } from '@angular/core';

import * as Web3 from 'web3';
declare let require: any;
declare let window: any;
import data from './allocations.json';
import { Meta } from '../../node_modules/@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

// export class EthcontractService {

//   constructor() { }
// }
export class EthcontractService {

  private contracts: {};
  private web3Provider: null;

  private allocations: {};
  private accounts: {};
  constructor() {

    if ( typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
      } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      }
    window.web3 = new Web3(this.web3Provider);
    this.allocations = data;
  }

  // the following function queries contract account of OasisToken contract address
  setAllocations(data: any){
    this.allocations = data;
  }

  getAllocations()
  {
    return this.allocations;
  }

  getAllAccounts()
  {
    const artifacts = require('../../contracts/build/contracts/OasisPolicy.json');
    const contract = require('truffle-contract');
    const contract_address = '0x39b38a5a4502dc3881a4c805fdfcf12c1e3a0713';
    const MyContract = contract(artifacts, contract_address);
    MyContract.setProvider(this.web3Provider);

    return new Promise((resolve, reject) => {

      console.log('getting all registered users from smart contract');
      MyContract.deployed().then(function(instance) {
        const meta = instance;
        return meta.getUserCount();
      })
      .then(function(count, meta) {
        
        for (var i=0; i< count; i++){
          return meta.getUserAtIndex.call(i);
          
          //this.accounts.push(meta.getUserAtIndex(i));
        }  

      })
      .catch(function(error) {
        return reject('error!');
      });

    MyContract.deployed().then(function(instance) {
      const meta = instance;
      return meta.balanceOf.call(coinbase_address, {from: coinbase_address});
    }).then(function(balance) {
      console.log('getbalance called');
      console.log(balance.c[0]);
      coinbase_token_balance = balance.c[0];
      console.log(total_supply);
      resolve({total: total_supply, coinbase_address: coinbase_address, coinbase_balance: coinbase_token_balance});

    }).catch(function(e) {
      return reject('error!');
    });
  });
  }
  getContractAccount() {
    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    let account0 = null;
    let total0 = 0;

    const artifacts = require('../../../contracts/build/contracts/OasisToken.json');
    const contract = require('truffle-contract');
    const MyContract = contract(artifacts);
    MyContract.setProvider(web3.currentProvider);

    return new Promise((resolve, reject) => {
      console.log(web3.eth.accounts);
      web3.eth.getCoinbase(function(err, account) {
        console.log('getting coinbase account');
        console.log(account);
        account0 = account;
        //this.allocations.Oasis-System.address = account0;
      });

      MyContract.deployed()
      .then(function(instance) {
        console.log("contarct address ");

        account0 = instance.address; 
        console.log(account0);


        return instance.totalSupply();
      }).then(function(balance) {
        total0 = balance.c[0];
        console.log(total0);
          resolve({tokenAccount: account0, tokenBalance: total0});
      })
    .catch(function(error) {
      console.error(error);
    });
    });
  }

  tokensBalance_old(){
    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    
    let total_supply = 100;

    let coinbase_address = '0x0';
    
    let coinbase_token_balance = 17;
    
    let market_address = ' ';

    let market_token_balance = 0;

    const artifacts = require('../../contracts/build/contracts/OasisPolicy.json');
    const contract = require('truffle-contract');
    const MyContract = contract(artifacts);
    MyContract.setProvider(web3.currentProvider);


    return new Promise((resolve, reject) => {

      console.log(web3.eth.accounts);
      web3.eth.getCoinbase(function(err, account) {
        console.log('getting coinbase account');
        console.log(account);
        coinbase_address = account;
      });

      MyContract.deployed().then(function(instance) {
        const meta = instance;
        return meta.totalSupply();
      })
      .then(function(total) {
        total_supply = total.c[0];
        // console.log(total_supply);
        //   resolve({tokenAccount: account0, tokenBalance: total0});
      })
      .catch(function(error) {
        return reject(error);
      });

    MyContract.deployed().then(function(instance) {
      const meta = instance;
      return meta.balanceOf.call(coinbase_address, {from: coinbase_address});
    }).then(function(balance) {
      console.log('getbalance called');
      console.log(balance.c[0]);
      coinbase_token_balance = balance.c[0];
      console.log(total_supply);
      resolve({total: total_supply, coinbase_address: coinbase_address, coinbase_balance: coinbase_token_balance});

    }).catch(function(e) {
      return reject('error!');
    });
  });

  }

  tokensBalance(){
    
    let total_supply = 100;

    let coinbase_address = '0x0';
    
    let coinbase_token_balance = 17;
    
    let market_address = ' ';

    let market_token_balance = 0;

    const artifacts = require('../../contracts/build/contracts/OasisPolicy.json');
    const contract = require('truffle-contract');
    const contract_address = '0xfa5af931a399b220d0d95ef122a33096e0a6857f';
    const MyContract = contract(artifacts, contract_address);
    MyContract.setProvider(this.web3Provider);


    return new Promise((resolve, reject) => {

      console.log(window.web3.eth.accounts);
      window.web3.eth.getCoinbase(function(err, account) {
        console.log('getting coinbase account');
        console.log(account);
        coinbase_address = account;
      });

      MyContract.deployed().then(function(instance) {
        const meta = instance;
        return meta.totalSupply();
      })
      .then(function(total) {
        total_supply = total.c[0];
        // console.log(total_supply);
        //   resolve({tokenAccount: account0, tokenBalance: total0});
      })
      .catch(function(error) {
        return reject('error!');
      });

    MyContract.deployed().then(function(instance) {
      const meta = instance;
      return meta.balanceOf.call(coinbase_address, {from: coinbase_address});
    }).then(function(balance) {
      console.log('getbalance called');
      console.log(balance.c[0]);
      coinbase_token_balance = balance.c[0];
      console.log(total_supply);
      resolve({total: total_supply, coinbase_address: coinbase_address, coinbase_balance: coinbase_token_balance});

    }).catch(function(e) {
      return reject('error!');
    });
  });

  }
  // the following function queries Oasis system account address onchain
  getCoinBaseAccount() {
    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    return new Promise((resolve, reject) => {
      web3.eth.getCoinbase(function(err, account) {
        console.log("coinbase");
        console.log(account);
        if ( err === null ) {
          web3.eth.getBalance(account, function( err, b) {
            if ( err === null) {
                console.log('balance');
                console.log( b.c[0]);
                const currentBalance = b.c[0];
                return resolve({fromAccount: account, balance: currentBalance });
            } else {
              return reject('error!');
            }
          });
        }
        });
      });
  }

}
  
