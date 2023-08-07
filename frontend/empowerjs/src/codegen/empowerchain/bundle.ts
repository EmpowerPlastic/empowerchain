import * as _135 from "./certificates/events";
import * as _136 from "./certificates/genesis";
import * as _137 from "./certificates/query";
import * as _138 from "./certificates/tx";
import * as _139 from "./certificates/types";
import * as _140 from "./plasticcredit/authz";
import * as _141 from "./plasticcredit/events";
import * as _142 from "./plasticcredit/genesis";
import * as _143 from "./plasticcredit/query";
import * as _144 from "./plasticcredit/tx";
import * as _145 from "./plasticcredit/types";
import * as _146 from "./proofofexistence/events";
import * as _147 from "./proofofexistence/genesis";
import * as _148 from "./proofofexistence/query";
import * as _149 from "./proofofexistence/tx";
import * as _150 from "./proofofexistence/types";
import * as _285 from "./certificates/tx.amino";
import * as _286 from "./plasticcredit/tx.amino";
import * as _287 from "./proofofexistence/tx.amino";
import * as _288 from "./certificates/tx.registry";
import * as _289 from "./plasticcredit/tx.registry";
import * as _290 from "./proofofexistence/tx.registry";
import * as _291 from "./certificates/query.rpc.Query";
import * as _292 from "./plasticcredit/query.rpc.Query";
import * as _293 from "./proofofexistence/query.rpc.Query";
import * as _294 from "./certificates/tx.rpc.msg";
import * as _295 from "./plasticcredit/tx.rpc.msg";
import * as _296 from "./proofofexistence/tx.rpc.msg";
import * as _326 from "./rpc.query";
import * as _327 from "./rpc.tx";
export namespace empowerchain {
  export const certificates = {
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._285,
    ..._288,
    ..._291,
    ..._294
  };
  export const plasticcredit = {
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._286,
    ..._289,
    ..._292,
    ..._295
  };
  export const proofofexistence = {
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._287,
    ..._290,
    ..._293,
    ..._296
  };
  export const ClientFactory = {
    ..._326,
    ..._327
  };
}