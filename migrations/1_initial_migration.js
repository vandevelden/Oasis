var Migrations = artifacts.require("./Migrations.sol");
var water = artifacts.require("./water_payment.sol");
const OasisToken = artifacts.require("./OasisToken.sol");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(water);
  deployer.deploy(OasisToken, "Oasis", "OST");
};
