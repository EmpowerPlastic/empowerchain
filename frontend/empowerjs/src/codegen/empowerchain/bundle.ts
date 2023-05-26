import * as _127 from "./accesscontrol/events";
import * as _128 from "./accesscontrol/genesis";
import * as _129 from "./accesscontrol/permission";
import * as _130 from "./certificates/events";
import * as _131 from "./certificates/genesis";
import * as _132 from "./certificates/query";
import * as _133 from "./certificates/tx";
import * as _134 from "./certificates/types";
import * as _135 from "./plasticcredit/authz";
import * as _136 from "./plasticcredit/events";
import * as _137 from "./plasticcredit/genesis";
import * as _138 from "./plasticcredit/query";
import * as _139 from "./plasticcredit/tx";
import * as _140 from "./plasticcredit/types";
import * as _141 from "./proofofexistence/events";
import * as _142 from "./proofofexistence/genesis";
import * as _143 from "./proofofexistence/query";
import * as _144 from "./proofofexistence/tx";
import * as _145 from "./proofofexistence/types";
import * as _238 from "./certificates/tx.amino";
import * as _239 from "./plasticcredit/tx.amino";
import * as _240 from "./proofofexistence/tx.amino";
import * as _241 from "./certificates/tx.registry";
import * as _242 from "./plasticcredit/tx.registry";
import * as _243 from "./proofofexistence/tx.registry";
import * as _244 from "./certificates/query.rpc.Query";
import * as _245 from "./plasticcredit/query.rpc.Query";
import * as _246 from "./proofofexistence/query.rpc.Query";
import * as _247 from "./certificates/tx.rpc.msg";
import * as _248 from "./plasticcredit/tx.rpc.msg";
import * as _249 from "./proofofexistence/tx.rpc.msg";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace empowerchain {
  export const accesscontrol = {
    ..._127,
    ..._128,
    ..._129
  };
  export const certificates = {
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._238,
    ..._241,
    ..._244,
    ..._247
  };
  export const plasticcredit = {
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._239,
    ..._242,
    ..._245,
    ..._248
  };
  export const proofofexistence = {
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._240,
    ..._243,
    ..._246,
    ..._249
  };
  export const ClientFactory = {
    ..._252,
    ..._253
  };
}