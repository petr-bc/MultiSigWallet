const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic = process.env.MNEMONIC
const token = process.env.INFURA_TOKEN
const package = require('./package')

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4000000,
      gasPrice: 10000000000, // 10 gwei
    },
    polygon: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://rpc-mainnet.maticvigil.com')
      },
      network_id: '137',
      gasPrice: 1000000000, // 1 Gwei
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/' + token)
      },
      network_id: '1',
      gasPrice: 25000000000, // 25 Gwei
    }
  },
  compilers: {
    solc: {
      version: package.dependencies.solc,
      settings: {
        optimizer: {
          enabled: false
        },
        evmVersion: "petersburg"
      }
    }
  }
};
