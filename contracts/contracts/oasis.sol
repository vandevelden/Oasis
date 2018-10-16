pragma solidity ^0.4.17;

import "../../openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../../openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract OasisToken is ERC20, ERC20Mintable {
    

    string public name;
    string public symbol;
    uint8 public constant decimals = 18;
    address owner_address; 

    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
   constructor(string _name, string _symbol)
      public
    {
      name = _name;
      symbol = _symbol;
      owner_address = msg.sender;

    //   this.totalSupply_ = INITIAL_SUPPLY;
    //   this.balances[_owner] = INITIAL_SUPPLY;
    //   Transfer(0x0, _owner, INITIAL_SUPPLY);
   }

   function mintInitialAmount() public {
       mint(owner_address, INITIAL_SUPPLY);
    }

  
    // address transferFrom;
    // address transferTo;
    // uint paymentAmount;

    // constructor(
    //     string _name,
    //     string _symbol,
    //     uint8 _decimals,
    //     uint256 _amount)
    //     ERC20(_name, _symbol, _decimals)
    
    // public
    // {
    //     transferFrom = msg.sender;

    //     _allowed = msg.sender;

    //     require(_amount > 0, "amount has to be greater than 0");
    //     _totalSupply = _amount.mul(10 ** uint256(_decimals));
    //     _balances[msg.sender] = _totalSupply;
    //     emit Transfer(address(0), msg.sender, _totalSupply);


    // }

    
    // event TransferFund(address _transferTo, address _transferFrom, uint amount);
    // function transferFund(address _transferTo) public payable returns (bool){
    //     transferTo = _transferTo;
    //     transferTo.transfer(msg.value);
    //     emit TransferFund(transferTo, transferFrom, msg.value);
    // }
    
    // function getBalanceOfCurrentAccount() public payable returns (uint) {
    //     return transferFrom.balance;
    // }
}

