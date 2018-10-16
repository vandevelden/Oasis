const artifacts = require('./build/contracts/OasisToken.json')
const contract = require('truffle-contract')
const MyContract = contract(artifacts);
const account_one = "0x43e69feea3cad08c5bd72725815f95976cbed2f8"; 
MyContract.setProvider(web3.currentProvider);
OasisToken.deployed().then(function (instance) {
  
    return instance.balanceOf.call(account_one, {from: account_one});
}).then(function(balance) {
  // If this callback is called, the call was successfully executed.
  // Note that this returns immediately without any waiting.
  // Let's print the return value.
  console.log(balance.toNumber());


})
.catch(function(error) {
  console.error(error)
})
