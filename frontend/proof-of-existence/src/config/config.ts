import type { HttpEndpoint } from "@cosmjs/tendermint-rpc";

const CHAIN_ID = "emp-devnet-1";
const RPC_URL: string | HttpEndpoint = "https://devnet.empowerchain.io:26657";
const REST_URL = "https://devnet.empowerchain.io:1317";
export { CHAIN_ID, RPC_URL, REST_URL };
