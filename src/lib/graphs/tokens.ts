import { gql, request } from "graphql-request";
import { DEFAULT_SIZE_GQL } from "..";
import { THEGRAPH_ENDPOINT } from "../constants";
import { ITokensSwap, ISortParams } from "../interfaces/index";

export const tokensSwap = gql`
  query getSwappedTokens(
    $first: Int!
    $skip: Int!
    $orderBy: BigInt
    $orderDirection: String
  ) {
    tokens(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      name
      symbol
      decimals
      totalSupply
      timestampAdding
      initialPrice
      totalValueSwapUsdc
    }
  }
`;

export const getSwappedTokens = async (
  sortParams?: ISortParams
): Promise<ITokensSwap[]> => {
  let tokens: ITokensSwap[] = [];
  let pageSize = sortParams?.size || DEFAULT_SIZE_GQL;
  let pageNumber = sortParams?.page || 0;
  const first = pageSize;

  while (true) {
    const data = await request(THEGRAPH_ENDPOINT, tokensSwap, {
      first,
      skip: pageNumber * pageSize,
      orderBy: "timestampAdding",
      orderDirection: sortParams?.orderDirection || "desc",
    });

    if (data) tokens = data.tokens.concat(tokens);
    if (!data || data.tokens.length < pageSize || sortParams?.fixedCount) break;
    pageNumber++;
  }

  const filterTokens = tokens.filter(
    (token) => token.name?.length > 0 && Number(token.decimals) > 0
  );

  return filterTokens;
};
