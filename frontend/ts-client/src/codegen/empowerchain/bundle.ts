import * as _127 from "./accesscontrol/events";
import * as _128 from "./accesscontrol/genesis";
import * as _129 from "./accesscontrol/permission";
import * as _130 from "./plasticcredit/authz";
import * as _131 from "./plasticcredit/events";
import * as _132 from "./plasticcredit/genesis";
import * as _133 from "./plasticcredit/query";
import * as _134 from "./plasticcredit/tx";
import * as _135 from "./plasticcredit/types";
import * as _136 from "./proofofexistence/events";
import * as _137 from "./proofofexistence/genesis";
import * as _138 from "./proofofexistence/query";
import * as _139 from "./proofofexistence/tx";
import * as _140 from "./proofofexistence/types";
import * as _233 from "./plasticcredit/tx.amino";
import * as _234 from "./proofofexistence/tx.amino";
import * as _235 from "./plasticcredit/tx.registry";
import * as _236 from "./proofofexistence/tx.registry";
import * as _237 from "./plasticcredit/query.rpc.Query";
import * as _238 from "./proofofexistence/query.rpc.Query";
import * as _239 from "./plasticcredit/tx.rpc.msg";
import * as _240 from "./proofofexistence/tx.rpc.msg";
import * as _243 from "./rpc.query";
import * as _244 from "./rpc.tx";
export namespace empowerchain {
  export const accesscontrol = { ..._127,
    ..._128,
    ..._129
  };
  export const plasticcredit = { ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._233,
    ..._235,
    ..._237,
    ..._239
  };
  export const proofofexistence = { ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._234,
    ..._236,
    ..._238,
    ..._240
  };
  export const ClientFactory = { ..._243,
    ..._244
  };
}