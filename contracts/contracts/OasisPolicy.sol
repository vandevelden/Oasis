pragma solidity ^0.4.17;


import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";


// pragma solidity ^0.4.17;

// import "http://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
// import "http://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract OasisPolicy is ERC20, ERC20Mintable {
    
    struct UserStruct{
        string uName;
        uint uAllocation;
        string sector;
        uint index;
        
    }

    string public name;
    string public symbol;
    uint8 public constant decimals = 18;
    
    address owner_address; 

    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

    mapping(address => UserStruct) private userStructs;
    address[] public addressIndices;

    event LogNewUser   (address indexed userAddress, uint index, string aname, uint userAllocation);
    event LogUpdateUser(address indexed userAddress, uint index, string aname, uint userAllocation);
    event LogDeleteUser(address indexed userAddress, uint index);
  

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
    
    constructor(string _name, string _symbol) public payable 
      {
      name = _name;
      symbol = _symbol;
      owner_address = msg.sender;
    }

   
    function getUserAtIndex(uint index)
    public constant
    returns(string aname, uint userAllocation, string userSector, address userAddress)
    {
        require(index >=0 && index < addressIndices.length);
        address tmpAddr = addressIndices[index];
        
        return (userStructs[tmpAddr].uName,
                userStructs[tmpAddr].uAllocation,
                userStructs[tmpAddr].sector,
                tmpAddr);
    }

    function mintInitialAmount() public {
       mint(owner_address, INITIAL_SUPPLY);
    }


  function isUser(address userAddress)
    public 
    constant
    returns(bool isIndeed) 
  {
    require(addressIndices.length > 0) ;
    return (addressIndices[userStructs[userAddress].index] == userAddress);
  }

  function insertUser(
    address userAddress, 
    string aname, 
    uint    userAllocation,
    string sector) 
    public
    returns(uint index)
  {
    require(!isUser(userAddress)) ;
    
    
    userStructs[userAddress].uName = aname;
    userStructs[userAddress].uAllocation   = userAllocation;
    userStructs[userAddress].sector = sector;
    userStructs[userAddress].index     = addressIndices.push(userAddress)-1;

    return addressIndices.length-1;
  }

  function deleteUser(address userAddress) 
    public
    returns(uint index)
  {
    require(isUser(userAddress)); 
    uint rowToDelete = userStructs[userAddress].index;
    address keyToMove = addressIndices[addressIndices.length-1];
    addressIndices[rowToDelete] = keyToMove;
    userStructs[keyToMove].index = rowToDelete; 
    addressIndices.length--;
    emit LogDeleteUser(
        userAddress, 
        rowToDelete);
    emit LogUpdateUser(
        keyToMove, 
        rowToDelete, 
        userStructs[keyToMove].uName, 
        userStructs[keyToMove].uAllocation);
    return rowToDelete;
  }
  
  function getUser(address userAddress)
    public 
    constant
    returns(string aname, uint userAllocation, uint index)
  {
    require(isUser(userAddress)); 
    return(
      userStructs[userAddress].uName, 
      userStructs[userAddress].uAllocation, 
      userStructs[userAddress].index);
  } 
  
  function updateUserName(address userAddress, string aname) 
    public
    returns(bool success) 
  {
    require(isUser(userAddress)); 
    userStructs[userAddress].uName = aname;
    emit LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      aname, 
      userStructs[userAddress].uAllocation);
    return true;
  }
  
  function updateuserAllocation(address userAddress, uint userAllocation) 
    public
    returns(bool success) 
  {
    require(isUser(userAddress)); 
    userStructs[userAddress].uAllocation = userAllocation;
    emit LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userStructs[userAddress].uName, 
      userAllocation);
    return true;
  }

  function getUserCount() 
    public
    constant
    returns(uint count)
  {
    return addressIndices.length;
  }

 
}

