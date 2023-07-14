const {utils} = require('ethers');
const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20FixedSupply_deploy = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20FixedSupply_deploy');

async function getAllocations(hre) {
  const namedAccounts = await hre.getNamedAccounts();

  const mainnetAllocations = [
    {name: 'Swap_REVV_Foundation', address: namedAccounts.Swap_REVV_Foundation, amount: '222222222'},
    {name: 'Public_Sale', address: namedAccounts.Public_Sale, amount: '35555556'},
    {name: 'Advisor', address: namedAccounts.Advisor, amount: '26666667'},
    {name: 'Team', address: namedAccounts.Team, amount: '71111111'},
    {name: 'LPs', address: namedAccounts.LPs, amount: '35555556'},
    {name: 'Marketing', address: namedAccounts.Marketing, amount: '44444443'},
    {name: 'Treasury', address: namedAccounts.Treasury, amount: '453333333'},
  ];

  const allocations = mainnetAllocations;
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
