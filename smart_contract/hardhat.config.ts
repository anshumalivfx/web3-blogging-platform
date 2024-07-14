import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    rinkeby: {
      url: '',
      accounts: [process.env.PRIVATE_KEY as string]
    }
  }
};

export default config;
