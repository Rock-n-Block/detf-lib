import BN from "bignumber.js";

export function applyDecimals(value: BN.Value, decimals: BN.Value): BN {
  const multiplier = new BN(10).pow(decimals);
  return new BN(value).times(multiplier);
}
export function removeDecimals(value: BN.Value, decimals: BN.Value): BN {
  const multiplier = new BN(10).pow(decimals);
  return new BN(value).div(multiplier);
}