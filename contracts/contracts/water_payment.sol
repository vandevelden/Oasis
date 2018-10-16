pragma solidity ^0.4.17;

contract water_payment {
    
    address transferFrom;
    address transferTo;
    uint paymentAmount;
    
    constructor() public {
        transferFrom = msg.sender;
    }
    
    event TransferFund(address _transferTo, address _transferFrom, uint amount);
    function transferFund(address _transferTo) public payable returns (bool){
        transferTo = _transferTo;
        transferTo.transfer(msg.value);
        emit TransferFund(transferTo, transferFrom, msg.value);
    }
    
    function getBalanceOfCurrentAccount() public payable returns (uint) {
        return transferFrom.balance;
    }
}