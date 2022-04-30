import Web3 from "web3";

export function encodeParameters(web3: Web3, types: string[], values: string[]) {
  const abi = web3.eth.abi.encodeParameters(types, values);
  return abi;
}
