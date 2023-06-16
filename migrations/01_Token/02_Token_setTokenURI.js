const {skipChainTypesExceptFor} = require('@animoca/ethereum-migrations/src/helpers/common');
const ERC20_setTokenURI = require('@animoca/ethereum-migrations/src/templates/token/ERC20/ERC20_setTokenURI');

const tokenURI = '';

module.exports = ERC20_setTokenURI('TorqueToken', tokenURI);
module.exports.skip = skipChainTypesExceptFor('ethereum');
