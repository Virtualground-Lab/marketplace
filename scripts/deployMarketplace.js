const hre = require("hardhat");

const FEES_COLLECTOR_CUT_PER_MILLION = 0;
const ROYALTIES_CUT_PER_MILLION = 25000;

// Deployed Royalty Manager on Mumbai
const ROYALTIES_MANAGER = "0xA0537adB79849cF0FB4641568AAdAE21E6249EFc";

async function main() {
  const owner = process.env.OWNER;
  const feeCollector = process.env.FEE_COLLECTOR;

  // Polygon Mumbai VGR token address
  let acceptedToken = "0xDa766BA4eD4Eb98da527ec90D30fdBF1576D0BBc";

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(
    owner,
    feeCollector,
    acceptedToken,
    ROYALTIES_MANAGER,
    FEES_COLLECTOR_CUT_PER_MILLION,
    ROYALTIES_CUT_PER_MILLION
  );

  console.log("Marketplace:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
