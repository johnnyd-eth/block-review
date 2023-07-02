const BlockReview = artifacts.require("BlockReview");

module.exports = function(deployer) {
  deployer.deploy(BlockReview);
};
