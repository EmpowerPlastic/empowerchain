import type { HttpEndpoint } from "@cosmjs/tendermint-rpc";

const CHAIN_ID = import.meta.env.VITE_CHAIN_ID;
const RPC_URL: string | HttpEndpoint = import.meta.env.VITE_RPC_URL;
const REST_URL = import.meta.env.VITE_REST_URL;
const REVISION_ID = import.meta.env.VITE_REVISION_ID;
const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
const ROLLBAR_ACCESS_TOKEN = import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN;
export {
  CHAIN_ID,
  RPC_URL,
  REST_URL,
  REVISION_ID,
  ENVIRONMENT,
  ROLLBAR_ACCESS_TOKEN,
};
