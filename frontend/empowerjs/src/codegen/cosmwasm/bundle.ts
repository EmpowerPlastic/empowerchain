import * as _128 from "./wasm/v1/authz";
import * as _129 from "./wasm/v1/genesis";
import * as _130 from "./wasm/v1/ibc";
import * as _131 from "./wasm/v1/proposal";
import * as _132 from "./wasm/v1/query";
import * as _133 from "./wasm/v1/tx";
import * as _134 from "./wasm/v1/types";
import * as _281 from "./wasm/v1/tx.amino";
import * as _282 from "./wasm/v1/tx.registry";
import * as _283 from "./wasm/v1/query.rpc.Query";
import * as _284 from "./wasm/v1/tx.rpc.msg";
import * as _324 from "./rpc.query";
import * as _325 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._281,
      ..._282,
      ..._283,
      ..._284
    };
  }
  export const ClientFactory = {
    ..._324,
    ..._325
  };
}