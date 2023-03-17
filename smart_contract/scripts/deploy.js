const main = async () => {
  // const Transactions = await hre.ethers.getContractFactory("Transactions");
  // const transactions = await Transactions.deploy();

  // await transactions.deployed();

  const VisualVault = await hre.ethers.getContractFactory("VisualVault");
  const myVisualVault = await VisualVault.deploy();

  await myVisualVault.deployed();

  console.log("VisualVault deploy to: ", myVisualVault.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
