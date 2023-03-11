/* eslint-disable no-undef */
const MetaNFT = artifacts.require('MetaNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(MetaNFT, 'Meta NFTs', 'TNT', 10, accounts[1])
}