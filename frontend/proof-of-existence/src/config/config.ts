import type { HttpEndpoint } from "@cosmjs/tendermint-rpc";

const CHAIN_ID = import.meta.env.VITE_CHAIN_ID;
const RPC_URL: string | HttpEndpoint = import.meta.env.VITE_RPC_URL;
const REST_URL = import.meta.env.VITE_REST_URL;
export { CHAIN_ID, RPC_URL, REST_URL };
