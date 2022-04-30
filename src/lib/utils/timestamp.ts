import Web3 from "web3";

export async function getUnixTimestamp(web3: Web3): Promise<number> {
  return Number((await web3.eth.getBlock('latest')).timestamp);
}