module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("VisualVault", {
    from: deployer,
    log: true,
  });
};

module.exports.tags = ["Greeter", "Storage", "SupportToken"];
