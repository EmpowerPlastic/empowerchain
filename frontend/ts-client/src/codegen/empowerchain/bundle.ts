import * as _107 from "./accesscontrol/events";
import * as _108 from "./accesscontrol/genesis";
import * as _109 from "./accesscontrol/permission";
import * as _110 from "./plasticcredit/authz";
import * as _111 from "./plasticcredit/events";
import * as _112 from "./plasticcredit/genesis";
import * as _113 from "./plasticcredit/query";
import * as _114 from "./plasticcredit/tx";
import * as _115 from "./plasticcredit/types";
import * as _116 from "./proofofexistence/events";
import * as _117 from "./proofofexistence/genesis";
import * as _118 from "./proofofexistence/query";
import * as _119 from "./proofofexistence/tx";
import * as _120 from "./proofofexistence/types";
import * as _232 from "./plasticcredit/tx.amino";
import * as _233 from "./proofofexistence/tx.amino";
import * as _234 from "./plasticcredit/tx.registry";
import * as _235 from "./proofofexistence/tx.registry";
import * as _236 from "./plasticcredit/query.lcd";
import * as _237 from "./proofofexistence/query.lcd";
import * as _238 from "./plasticcredit/query.rpc.Query";
import * as _239 from "./proofofexistence/query.rpc.Query";
import * as _240 from "./plasticcredit/tx.rpc.msg";
import * as _241 from "./proofofexistence/tx.rpc.msg";
import * as _245 from "./lcd";
import * as _246 from "./rpc.query";
import * as _247 from "./rpc.tx";
export namespace empowerchain {
  export const accesscontrol = { ..._107,
    ..._108,
    ..._109
  };
  export const plasticcredit = { ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._232,
    ..._234,
    ..._236,
    ..._238,
    ..._240
  };
  export const proofofexistence = { ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._233,
    ..._235,
    ..._237,
    ..._239,
    ..._241
  };
  export const ClientFactory = { ..._245,
    ..._246,
    ..._247
  };
}