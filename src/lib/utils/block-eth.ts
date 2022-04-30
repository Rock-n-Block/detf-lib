import Web3 from "web3";

export async function getBlock(web3: Web3, block: number | string = "latest") {
  return await web3.eth.getBlock(block);
}
