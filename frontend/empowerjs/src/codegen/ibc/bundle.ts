import * as _159 from "./applications/fee/v1/ack";
import * as _160 from "./applications/fee/v1/fee";
import * as _161 from "./applications/fee/v1/genesis";
import * as _162 from "./applications/fee/v1/metadata";
import * as _163 from "./applications/fee/v1/query";
import * as _164 from "./applications/fee/v1/tx";
import * as _165 from "./applications/interchain_accounts/controller/v1/controller";
import * as _166 from "./applications/interchain_accounts/controller/v1/query";
import * as _167 from "./applications/interchain_accounts/controller/v1/tx";
import * as _168 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _169 from "./applications/interchain_accounts/host/v1/host";
import * as _170 from "./applications/interchain_accounts/host/v1/query";
import * as _171 from "./applications/interchain_accounts/v1/account";
import * as _172 from "./applications/interchain_accounts/v1/metadata";
import * as _173 from "./applications/interchain_accounts/v1/packet";
import * as _174 from "./applications/transfer/v1/authz";
import * as _175 from "./applications/transfer/v1/genesis";
import * as _176 from "./applications/transfer/v1/query";
import * as _177 from "./applications/transfer/v1/transfer";
import * as _178 from "./applications/transfer/v1/tx";
import * as _179 from "./applications/transfer/v2/packet";
import * as _180 from "./core/channel/v1/channel";
import * as _181 from "./core/channel/v1/genesis";
import * as _182 from "./core/channel/v1/query";
import * as _183 from "./core/channel/v1/tx";
import * as _184 from "./core/client/v1/client";
import * as _185 from "./core/client/v1/genesis";
import * as _186 from "./core/client/v1/query";
import * as _187 from "./core/client/v1/tx";
import * as _188 from "./core/commitment/v1/commitment";
import * as _189 from "./core/connection/v1/connection";
import * as _190 from "./core/connection/v1/genesis";
import * as _191 from "./core/connection/v1/query";
import * as _192 from "./core/connection/v1/tx";
import * as _193 from "./core/types/v1/genesis";
import * as _194 from "./lightclients/solomachine/v2/solomachine";
import * as _195 from "./lightclients/solomachine/v3/solomachine";
import * as _196 from "./lightclients/tendermint/v1/tendermint";
import * as _297 from "./applications/fee/v1/tx.amino";
import * as _298 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _299 from "./applications/transfer/v1/tx.amino";
import * as _300 from "./core/channel/v1/tx.amino";
import * as _301 from "./core/client/v1/tx.amino";
import * as _302 from "./core/connection/v1/tx.amino";
import * as _303 from "./applications/fee/v1/tx.registry";
import * as _304 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _305 from "./applications/transfer/v1/tx.registry";
import * as _306 from "./core/channel/v1/tx.registry";
import * as _307 from "./core/client/v1/tx.registry";
import * as _308 from "./core/connection/v1/tx.registry";
import * as _309 from "./applications/fee/v1/query.rpc.Query";
import * as _310 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _311 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _312 from "./applications/transfer/v1/query.rpc.Query";
import * as _313 from "./core/channel/v1/query.rpc.Query";
import * as _314 from "./core/client/v1/query.rpc.Query";
import * as _315 from "./core/connection/v1/query.rpc.Query";
import * as _316 from "./applications/fee/v1/tx.rpc.msg";
import * as _317 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _318 from "./applications/transfer/v1/tx.rpc.msg";
import * as _319 from "./core/channel/v1/tx.rpc.msg";
import * as _320 from "./core/client/v1/tx.rpc.msg";
import * as _321 from "./core/connection/v1/tx.rpc.msg";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._297,
        ..._303,
        ..._309,
        ..._316
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._165,
          ..._166,
          ..._167,
          ..._298,
          ..._304,
          ..._310,
          ..._317
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._168
        };
      }
      export namespace host {
        export const v1 = {
          ..._169,
          ..._170,
          ..._311
        };
      }
      export const v1 = {
        ..._171,
        ..._172,
        ..._173
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._299,
        ..._305,
        ..._312,
        ..._318
      };
      export const v2 = {
        ..._179
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._300,
        ..._306,
        ..._313,
        ..._319
      };
    }
    export namespace client {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._301,
        ..._307,
        ..._314,
        ..._320
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._188
      };
    }
    export namespace connection {
      export const v1 = {
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._302,
        ..._308,
        ..._315,
        ..._321
      };
    }
    export namespace types {
      export const v1 = {
        ..._193
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._194
      };
      export const v3 = {
        ..._195
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._196
      };
    }
  }
  export const ClientFactory = {
    ..._328,
    ..._329
  };
}