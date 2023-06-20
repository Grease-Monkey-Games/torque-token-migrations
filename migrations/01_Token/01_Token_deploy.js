const {utils} = require('ethers');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20FixedSupply_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20FixedSupply_deploy');

async function getAllocations(hre) {
  const namedAccounts = await hre.getNamedAccounts();

  const mainnetAllocations = [
    {name: 'Swap_REVV_Foundation', address: namedAccounts.Token_poolA, amount: '222222222'},
    {name: 'Public_Sale', address: namedAccounts.Token_poolB, amount: '35555556'},
    {name: 'Advisor', address: namedAccounts.Token_poolC, amount: '26666667'},
    {name: 'Team', address: namedAccounts.Token_poolC, amount: '71111111'},
    {name: 'LPs', address: namedAccounts.Token_poolC, amount: '35555556'},
    {name: 'Marketing', address: namedAccounts.Token_poolC, amount: '44444444'},
    {name: 'Treasury', address: namedAccounts.Token_poolC, amount: '453333333'},
  ];

  const testnetAllocations = [
    {name: 'Deployer', address: namedAccounts.deployer, amount: '1000000000'},
    ...[...hre.namedGroups.QATeam].map((wallet) => {
      return {name: 'QAWallet', address: wallet, amount: '50000000'};
    }),
  ];

  const allocations = hre.network.tags.production ? mainnetAllocations : testnetAllocations;
  return allocations;
}

module.exports = ERC20FixedSupply_deploy(
  'TorqueToken',
  'Torque Token',
  'TORQUE',
  18,
  async (hre) => (await getAllocations(hre)).map((allocation) => allocation.address),
  async (hre) => (await getAllocations(hre)).map((allocation) => utils.parseEther(allocation.amount))
);

module.exports.skip = skipChainTypesExceptFor('ethereum');
