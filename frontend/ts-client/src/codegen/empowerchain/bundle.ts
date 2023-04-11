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
import * as _252 from "./plasticcredit/tx.amino";
import * as _253 from "./proofofexistence/tx.amino";
import * as _254 from "./plasticcredit/tx.registry";
import * as _255 from "./proofofexistence/tx.registry";
import * as _256 from "./plasticcredit/query.lcd";
import * as _257 from "./proofofexistence/query.lcd";
import * as _258 from "./plasticcredit/query.rpc.Query";
import * as _259 from "./proofofexistence/query.rpc.Query";
import * as _260 from "./plasticcredit/tx.rpc.msg";
import * as _261 from "./proofofexistence/tx.rpc.msg";
import * as _265 from "./lcd";
import * as _266 from "./rpc.query";
import * as _267 from "./rpc.tx";
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
    ..._252,
    ..._254,
    ..._256,
    ..._258,
    ..._260
  };
  export const proofofexistence = { ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._253,
    ..._255,
    ..._257,
    ..._259,
    ..._261
  };
  export const ClientFactory = { ..._265,
    ..._266,
    ..._267
  };
}