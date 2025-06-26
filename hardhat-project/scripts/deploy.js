const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");

  const contract = await CrowdFunding.deploy();
  await contract.waitForDeployment(); // ✅ Use this instead of deployed()

  console.log("CrowdFunding deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
