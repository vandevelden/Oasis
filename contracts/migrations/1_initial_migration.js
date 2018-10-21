var Migrations = artifacts.require("./Migrations.sol");
const OasisToken = artifacts.require("./OasisPolicy.sol");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(OasisToken, "OasisToken", "OST");
};
