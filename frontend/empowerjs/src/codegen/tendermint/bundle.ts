import * as _197 from "./abci/types";
import * as _198 from "./crypto/keys";
import * as _199 from "./crypto/proof";
import * as _200 from "./libs/bits/types";
import * as _201 from "./p2p/types";
import * as _202 from "./types/block";
import * as _203 from "./types/evidence";
import * as _204 from "./types/params";
import * as _205 from "./types/types";
import * as _206 from "./types/validator";
import * as _207 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._197
  };
  export const crypto = {
    ..._198,
    ..._199
  };
  export namespace libs {
    export const bits = {
      ..._200
    };
  }
  export const p2p = {
    ..._201
  };
  export const types = {
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._206
  };
  export const version = {
    ..._207
  };
}