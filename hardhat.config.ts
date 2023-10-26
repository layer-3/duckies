import 'dotenv/config';

import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@openzeppelin/hardhat-upgrades';
import type { HardhatUserConfig } from 'hardhat/config';
import 'solidity-docgen';

import './src/tasks/accounts';
import './src/tasks/forceImport';
import './src/tasks/sendBatchTransfer';
import './src/tasks/duckyGame';

let accounts;

if (process.env.MNEMONIC) {
  accounts = {
    mnemonic: process.env.MNEMONIC,
    initialIndex: 0,
    count: 10,
  };
} else if (process.env.PRIVATE_KEY) {
  accounts = [process.env.PRIVATE_KEY];
}

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY ?? '';
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY ?? '';
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY ?? '';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.18',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v5',
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'bring tumble anger wild frame you famous usage ramp federal captain company',
        count: 100,
      },
    },
    localdev: {
      url: process.env.LOCALDEV_URL ?? 'http://localhost:8545',
      accounts: {
        mnemonic: process.env.MNEMONIC ?? '',
        count: 10,
      },
    },
    kayenuat: {
      url: process.env.KAYENUAT_URL ?? '',
      accounts: {
        mnemonic: process.env.MNEMONIC ?? '',
        count: 10,
      },
    },
    ethereum: {
      url: process.env.ETHEREUM_URL ?? '',
      accounts,
    },
    goerli: {
      url: process.env.GOERLI_URL ?? '',
      accounts,
    },
    matic: {
      url: process.env.POLYGON_URL ?? '',
      gasPrice: 2e11,
      accounts,
    },
    mumbai: {
      url: process.env.MUMBAI_URL ?? '',
      accounts,
    },
    bsc: {
      url: process.env.BSC_URL ?? '',
      accounts,
    },
    'bsc-testnet': {
      url: process.env.BSC_TESTNET_URL ?? '',
      accounts,
    },
  },
  docgen: {
    output: 'docs',
    pages: 'files',
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      goerli: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
      bsc: BSCSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY,
    },
    customChains: [
      {
        network: 'kayenuat',
        chainId: 828_282,
        urls: {
          apiURL: 'https://ethnodescan.v4.uat.opendax.app/api/',
          browserURL: 'https://ethnodescan.v4.uat.opendax.app/',
        },
      },
    ],
  },
};

export default config;
