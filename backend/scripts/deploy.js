async function main() {
  const HelloWorld = await ethers.getContractFactory("BlockReview");
  const helloWorld = await HelloWorld.deploy();
  await helloWorld.deployed();

  console.log("HelloWorld deployed to:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
