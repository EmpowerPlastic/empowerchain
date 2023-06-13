import * as _158 from "./abci/types";
import * as _159 from "./crypto/keys";
import * as _160 from "./crypto/proof";
import * as _161 from "./libs/bits/types";
import * as _162 from "./p2p/types";
import * as _163 from "./types/block";
import * as _164 from "./types/evidence";
import * as _165 from "./types/params";
import * as _166 from "./types/types";
import * as _167 from "./types/validator";
import * as _168 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._158
  };
  export const crypto = {
    ..._159,
    ..._160
  };
  export namespace libs {
    export const bits = {
      ..._161
    };
  }
  export const p2p = {
    ..._162
  };
  export const types = {
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167
  };
  export const version = {
    ..._168
  };
}