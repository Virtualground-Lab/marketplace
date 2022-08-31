const hre = require("hardhat");

async function main() {
  const RoyaltiesManager = await hre.ethers.getContractFactory(
    "RoyaltiesManager"
  );
  const royaltiesManager = await RoyaltiesManager.deploy();

  await royaltiesManager.deployed();

  console.log("Royalties Manager:", royaltiesManager.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
