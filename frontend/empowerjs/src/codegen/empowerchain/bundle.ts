import * as _134 from "./certificates/events";
import * as _135 from "./certificates/genesis";
import * as _136 from "./certificates/query";
import * as _137 from "./certificates/tx";
import * as _138 from "./certificates/types";
import * as _139 from "./plasticcredit/authz";
import * as _140 from "./plasticcredit/events";
import * as _141 from "./plasticcredit/genesis";
import * as _142 from "./plasticcredit/query";
import * as _143 from "./plasticcredit/tx";
import * as _144 from "./plasticcredit/types";
import * as _145 from "./proofofexistence/events";
import * as _146 from "./proofofexistence/genesis";
import * as _147 from "./proofofexistence/query";
import * as _148 from "./proofofexistence/tx";
import * as _149 from "./proofofexistence/types";
import * as _246 from "./certificates/tx.amino";
import * as _247 from "./plasticcredit/tx.amino";
import * as _248 from "./proofofexistence/tx.amino";
import * as _249 from "./certificates/tx.registry";
import * as _250 from "./plasticcredit/tx.registry";
import * as _251 from "./proofofexistence/tx.registry";
import * as _252 from "./certificates/query.rpc.Query";
import * as _253 from "./plasticcredit/query.rpc.Query";
import * as _254 from "./proofofexistence/query.rpc.Query";
import * as _255 from "./certificates/tx.rpc.msg";
import * as _256 from "./plasticcredit/tx.rpc.msg";
import * as _257 from "./proofofexistence/tx.rpc.msg";
import * as _262 from "./rpc.query";
import * as _263 from "./rpc.tx";
export namespace empowerchain {
  export const certificates = {
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._246,
    ..._249,
    ..._252,
    ..._255
  };
  export const plasticcredit = {
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._247,
    ..._250,
    ..._253,
    ..._256
  };
  export const proofofexistence = {
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._248,
    ..._251,
    ..._254,
    ..._257
  };
  export const ClientFactory = {
    ..._262,
    ..._263
  };
}