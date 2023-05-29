import * as _127 from "./certificates/events";
import * as _128 from "./certificates/genesis";
import * as _129 from "./certificates/query";
import * as _130 from "./certificates/tx";
import * as _131 from "./certificates/types";
import * as _132 from "./plasticcredit/authz";
import * as _133 from "./plasticcredit/events";
import * as _134 from "./plasticcredit/genesis";
import * as _135 from "./plasticcredit/query";
import * as _136 from "./plasticcredit/tx";
import * as _137 from "./plasticcredit/types";
import * as _138 from "./proofofexistence/events";
import * as _139 from "./proofofexistence/genesis";
import * as _140 from "./proofofexistence/query";
import * as _141 from "./proofofexistence/tx";
import * as _142 from "./proofofexistence/types";
import * as _235 from "./certificates/tx.amino";
import * as _236 from "./plasticcredit/tx.amino";
import * as _237 from "./proofofexistence/tx.amino";
import * as _238 from "./certificates/tx.registry";
import * as _239 from "./plasticcredit/tx.registry";
import * as _240 from "./proofofexistence/tx.registry";
import * as _241 from "./certificates/query.rpc.Query";
import * as _242 from "./plasticcredit/query.rpc.Query";
import * as _243 from "./proofofexistence/query.rpc.Query";
import * as _244 from "./certificates/tx.rpc.msg";
import * as _245 from "./plasticcredit/tx.rpc.msg";
import * as _246 from "./proofofexistence/tx.rpc.msg";
import * as _249 from "./rpc.query";
import * as _250 from "./rpc.tx";
export namespace empowerchain {
  export const certificates = {
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._235,
    ..._238,
    ..._241,
    ..._244
  };
  export const plasticcredit = {
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._236,
    ..._239,
    ..._242,
    ..._245
  };
  export const proofofexistence = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._237,
    ..._240,
    ..._243,
    ..._246
  };
  export const ClientFactory = {
    ..._249,
    ..._250
  };
}