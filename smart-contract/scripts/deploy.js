const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with:", deployer.address);

  const Contract = await hre.ethers.getContractFactory("Transactions");
  const contract = await Contract.deploy();

  await contract.waitForDeployment(); // ✅ instead of contract.deployed()

  const address = await contract.getAddress(); // ✅ for Ethers v6
  console.log("Contract deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
