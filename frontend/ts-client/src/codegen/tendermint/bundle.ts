import * as _129 from "./abci/types";
import * as _130 from "./crypto/keys";
import * as _131 from "./crypto/proof";
import * as _132 from "./libs/bits/types";
import * as _133 from "./p2p/types";
import * as _134 from "./types/block";
import * as _135 from "./types/evidence";
import * as _136 from "./types/params";
import * as _137 from "./types/types";
import * as _138 from "./types/validator";
import * as _139 from "./version/types";
export namespace tendermint {
  export const abci = { ..._129
  };
  export const crypto = { ..._130,
    ..._131
  };
  export namespace libs {
    export const bits = { ..._132
    };
  }
  export const p2p = { ..._133
  };
  export const types = { ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138
  };
  export const version = { ..._139
  };
}