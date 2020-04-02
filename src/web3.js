// import Web3 from "web3";
// const HDWalletProvider = require('truffle-hdwallet-provider');
// const provider = new HDWalletProvider(
//   'rude vocal door adapt mesh layer artefact toss idea pony mountain empty',
//   'https://rinkeby.infura.io/v3/df1048662a034cc5ac03dbddd74de3c1'
// );
// const web3 = new Web3(provider);


// export default web3;
import Web3 from "web3";

const provider = window.ethereum;
provider.enable();
const web3 = new Web3(provider);

export default web3;