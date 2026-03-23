const hre = require("hardhat");

async function main() {
  const FileIntegrity = await hre.ethers.getContractFactory("FileIntegrity");
  const fileIntegrity = await FileIntegrity.deploy();

  await fileIntegrity.waitForDeployment();

  console.log("FileIntegrity deployed to:", await fileIntegrity.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
