// const BlockReview = artifacts.require("BlockReview");

// module.exports = function(deployer) {
//   deployer.deploy(BlockReview);
// };

const HelloWorld = artifacts.require('HelloWorld');

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
