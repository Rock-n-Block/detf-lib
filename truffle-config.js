const HDWalletProvider = require("@truffle/hdwallet-provider");
const { INFURA_KEY, PRIVATE_KEY, ETHERSCAN_KEY, MIGRATION_DIRECTORY, GAS_PRICE } = require("config");

const gasPrice = GAS_PRICE * 10 ** 9;

module.exports = {
  migrations_directory: MIGRATION_DIRECTORY,
  compilers: {
    solc: {
      version: "0.8.4",
    },
  },
  plugins: ["solidity-coverage", "truffle-plugin-verify"],
  api_keys: { etherscan: ETHERSCAN_KEY },
  mocha: { reporter: 'eth-gas-reporter', reporterOptions: { currency: "USD" } },
};
