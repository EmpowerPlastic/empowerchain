"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _2 = _interopRequireWildcard(require("./app/runtime/v1alpha1/module"));
var _3 = _interopRequireWildcard(require("./app/v1alpha1/config"));
var _4 = _interopRequireWildcard(require("./app/v1alpha1/module"));
var _5 = _interopRequireWildcard(require("./app/v1alpha1/query"));
var _6 = _interopRequireWildcard(require("./auth/v1beta1/auth"));
var _7 = _interopRequireWildcard(require("./auth/v1beta1/genesis"));
var _8 = _interopRequireWildcard(require("./auth/v1beta1/query"));
var _9 = _interopRequireWildcard(require("./auth/v1beta1/tx"));
var _10 = _interopRequireWildcard(require("./authz/v1beta1/authz"));
var _11 = _interopRequireWildcard(require("./authz/v1beta1/event"));
var _12 = _interopRequireWildcard(require("./authz/v1beta1/genesis"));
var _13 = _interopRequireWildcard(require("./authz/v1beta1/query"));
var _14 = _interopRequireWildcard(require("./authz/v1beta1/tx"));
var _15 = _interopRequireWildcard(require("./autocli/v1/options"));
var _16 = _interopRequireWildcard(require("./autocli/v1/query"));
var _17 = _interopRequireWildcard(require("./bank/v1beta1/authz"));
var _18 = _interopRequireWildcard(require("./bank/v1beta1/bank"));
var _19 = _interopRequireWildcard(require("./bank/v1beta1/genesis"));
var _20 = _interopRequireWildcard(require("./bank/v1beta1/query"));
var _21 = _interopRequireWildcard(require("./bank/v1beta1/tx"));
var _22 = _interopRequireWildcard(require("./base/abci/v1beta1/abci"));
var _23 = _interopRequireWildcard(require("./base/kv/v1beta1/kv"));
var _24 = _interopRequireWildcard(require("./base/node/v1beta1/query"));
var _25 = _interopRequireWildcard(require("./base/query/v1beta1/pagination"));
var _26 = _interopRequireWildcard(require("./base/reflection/v1beta1/reflection"));
var _27 = _interopRequireWildcard(require("./base/reflection/v2alpha1/reflection"));
var _28 = _interopRequireWildcard(require("./base/snapshots/v1beta1/snapshot"));
var _29 = _interopRequireWildcard(require("./base/store/v1beta1/commit_info"));
var _30 = _interopRequireWildcard(require("./base/store/v1beta1/listening"));
var _31 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query"));
var _32 = _interopRequireWildcard(require("./base/tendermint/v1beta1/types"));
var _33 = _interopRequireWildcard(require("./base/v1beta1/coin"));
var _34 = _interopRequireWildcard(require("./capability/v1beta1/capability"));
var _35 = _interopRequireWildcard(require("./capability/v1beta1/genesis"));
var _36 = _interopRequireWildcard(require("./consensus/v1/query"));
var _37 = _interopRequireWildcard(require("./consensus/v1/tx"));
var _38 = _interopRequireWildcard(require("./crisis/v1beta1/genesis"));
var _39 = _interopRequireWildcard(require("./crisis/v1beta1/tx"));
var _40 = _interopRequireWildcard(require("./crypto/ed25519/keys"));
var _41 = _interopRequireWildcard(require("./crypto/hd/v1/hd"));
var _42 = _interopRequireWildcard(require("./crypto/keyring/v1/record"));
var _43 = _interopRequireWildcard(require("./crypto/multisig/keys"));
var _44 = _interopRequireWildcard(require("./crypto/secp256k1/keys"));
var _45 = _interopRequireWildcard(require("./crypto/secp256r1/keys"));
var _46 = _interopRequireWildcard(require("./distribution/v1beta1/distribution"));
var _47 = _interopRequireWildcard(require("./distribution/v1beta1/genesis"));
var _48 = _interopRequireWildcard(require("./distribution/v1beta1/query"));
var _49 = _interopRequireWildcard(require("./distribution/v1beta1/tx"));
var _50 = _interopRequireWildcard(require("./evidence/v1beta1/evidence"));
var _51 = _interopRequireWildcard(require("./evidence/v1beta1/genesis"));
var _52 = _interopRequireWildcard(require("./evidence/v1beta1/query"));
var _53 = _interopRequireWildcard(require("./evidence/v1beta1/tx"));
var _54 = _interopRequireWildcard(require("./feegrant/v1beta1/feegrant"));
var _55 = _interopRequireWildcard(require("./feegrant/v1beta1/genesis"));
var _56 = _interopRequireWildcard(require("./feegrant/v1beta1/query"));
var _57 = _interopRequireWildcard(require("./feegrant/v1beta1/tx"));
var _58 = _interopRequireWildcard(require("./genutil/v1beta1/genesis"));
var _59 = _interopRequireWildcard(require("./gov/v1/genesis"));
var _60 = _interopRequireWildcard(require("./gov/v1/gov"));
var _61 = _interopRequireWildcard(require("./gov/v1/query"));
var _62 = _interopRequireWildcard(require("./gov/v1/tx"));
var _63 = _interopRequireWildcard(require("./gov/v1beta1/genesis"));
var _64 = _interopRequireWildcard(require("./gov/v1beta1/gov"));
var _65 = _interopRequireWildcard(require("./gov/v1beta1/query"));
var _66 = _interopRequireWildcard(require("./gov/v1beta1/tx"));
var _67 = _interopRequireWildcard(require("./group/v1/events"));
var _68 = _interopRequireWildcard(require("./group/v1/genesis"));
var _69 = _interopRequireWildcard(require("./group/v1/query"));
var _70 = _interopRequireWildcard(require("./group/v1/tx"));
var _71 = _interopRequireWildcard(require("./group/v1/types"));
var _72 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _73 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _74 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _75 = _interopRequireWildcard(require("./mint/v1beta1/tx"));
var _76 = _interopRequireWildcard(require("./msg/v1/msg"));
var _77 = _interopRequireWildcard(require("./nft/v1beta1/event"));
var _78 = _interopRequireWildcard(require("./nft/v1beta1/genesis"));
var _79 = _interopRequireWildcard(require("./nft/v1beta1/nft"));
var _80 = _interopRequireWildcard(require("./nft/v1beta1/query"));
var _81 = _interopRequireWildcard(require("./nft/v1beta1/tx"));
var _82 = _interopRequireWildcard(require("./orm/query/v1alpha1/query"));
var _83 = _interopRequireWildcard(require("./orm/v1/orm"));
var _84 = _interopRequireWildcard(require("./orm/v1alpha1/schema"));
var _85 = _interopRequireWildcard(require("./params/v1beta1/params"));
var _86 = _interopRequireWildcard(require("./params/v1beta1/query"));
var _87 = _interopRequireWildcard(require("./query/v1/query"));
var _88 = _interopRequireWildcard(require("./reflection/v1/reflection"));
var _89 = _interopRequireWildcard(require("./slashing/v1beta1/genesis"));
var _90 = _interopRequireWildcard(require("./slashing/v1beta1/query"));
var _91 = _interopRequireWildcard(require("./slashing/v1beta1/slashing"));
var _92 = _interopRequireWildcard(require("./slashing/v1beta1/tx"));
var _93 = _interopRequireWildcard(require("./staking/v1beta1/authz"));
var _94 = _interopRequireWildcard(require("./staking/v1beta1/genesis"));
var _95 = _interopRequireWildcard(require("./staking/v1beta1/query"));
var _96 = _interopRequireWildcard(require("./staking/v1beta1/staking"));
var _97 = _interopRequireWildcard(require("./staking/v1beta1/tx"));
var _98 = _interopRequireWildcard(require("./tx/config/v1/config"));
var _99 = _interopRequireWildcard(require("./tx/signing/v1beta1/signing"));
var _100 = _interopRequireWildcard(require("./tx/v1beta1/service"));
var _101 = _interopRequireWildcard(require("./tx/v1beta1/tx"));
var _102 = _interopRequireWildcard(require("./upgrade/v1beta1/query"));
var _103 = _interopRequireWildcard(require("./upgrade/v1beta1/tx"));
var _104 = _interopRequireWildcard(require("./upgrade/v1beta1/upgrade"));
var _105 = _interopRequireWildcard(require("./vesting/v1beta1/tx"));
var _106 = _interopRequireWildcard(require("./vesting/v1beta1/vesting"));
var _140 = _interopRequireWildcard(require("./auth/v1beta1/tx.amino"));
var _141 = _interopRequireWildcard(require("./authz/v1beta1/tx.amino"));
var _142 = _interopRequireWildcard(require("./bank/v1beta1/tx.amino"));
var _143 = _interopRequireWildcard(require("./consensus/v1/tx.amino"));
var _144 = _interopRequireWildcard(require("./crisis/v1beta1/tx.amino"));
var _145 = _interopRequireWildcard(require("./distribution/v1beta1/tx.amino"));
var _146 = _interopRequireWildcard(require("./evidence/v1beta1/tx.amino"));
var _147 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.amino"));
var _148 = _interopRequireWildcard(require("./gov/v1/tx.amino"));
var _149 = _interopRequireWildcard(require("./gov/v1beta1/tx.amino"));
var _150 = _interopRequireWildcard(require("./group/v1/tx.amino"));
var _151 = _interopRequireWildcard(require("./mint/v1beta1/tx.amino"));
var _152 = _interopRequireWildcard(require("./nft/v1beta1/tx.amino"));
var _153 = _interopRequireWildcard(require("./slashing/v1beta1/tx.amino"));
var _154 = _interopRequireWildcard(require("./staking/v1beta1/tx.amino"));
var _155 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.amino"));
var _156 = _interopRequireWildcard(require("./vesting/v1beta1/tx.amino"));
var _157 = _interopRequireWildcard(require("./auth/v1beta1/tx.registry"));
var _158 = _interopRequireWildcard(require("./authz/v1beta1/tx.registry"));
var _159 = _interopRequireWildcard(require("./bank/v1beta1/tx.registry"));
var _160 = _interopRequireWildcard(require("./consensus/v1/tx.registry"));
var _161 = _interopRequireWildcard(require("./crisis/v1beta1/tx.registry"));
var _162 = _interopRequireWildcard(require("./distribution/v1beta1/tx.registry"));
var _163 = _interopRequireWildcard(require("./evidence/v1beta1/tx.registry"));
var _164 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.registry"));
var _165 = _interopRequireWildcard(require("./gov/v1/tx.registry"));
var _166 = _interopRequireWildcard(require("./gov/v1beta1/tx.registry"));
var _167 = _interopRequireWildcard(require("./group/v1/tx.registry"));
var _168 = _interopRequireWildcard(require("./mint/v1beta1/tx.registry"));
var _169 = _interopRequireWildcard(require("./nft/v1beta1/tx.registry"));
var _170 = _interopRequireWildcard(require("./slashing/v1beta1/tx.registry"));
var _171 = _interopRequireWildcard(require("./staking/v1beta1/tx.registry"));
var _172 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.registry"));
var _173 = _interopRequireWildcard(require("./vesting/v1beta1/tx.registry"));
var _174 = _interopRequireWildcard(require("./auth/v1beta1/query.lcd"));
var _175 = _interopRequireWildcard(require("./authz/v1beta1/query.lcd"));
var _176 = _interopRequireWildcard(require("./bank/v1beta1/query.lcd"));
var _177 = _interopRequireWildcard(require("./base/node/v1beta1/query.lcd"));
var _178 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.lcd"));
var _179 = _interopRequireWildcard(require("./consensus/v1/query.lcd"));
var _180 = _interopRequireWildcard(require("./distribution/v1beta1/query.lcd"));
var _181 = _interopRequireWildcard(require("./evidence/v1beta1/query.lcd"));
var _182 = _interopRequireWildcard(require("./feegrant/v1beta1/query.lcd"));
var _183 = _interopRequireWildcard(require("./gov/v1/query.lcd"));
var _184 = _interopRequireWildcard(require("./gov/v1beta1/query.lcd"));
var _185 = _interopRequireWildcard(require("./group/v1/query.lcd"));
var _186 = _interopRequireWildcard(require("./mint/v1beta1/query.lcd"));
var _187 = _interopRequireWildcard(require("./nft/v1beta1/query.lcd"));
var _188 = _interopRequireWildcard(require("./params/v1beta1/query.lcd"));
var _189 = _interopRequireWildcard(require("./slashing/v1beta1/query.lcd"));
var _190 = _interopRequireWildcard(require("./staking/v1beta1/query.lcd"));
var _191 = _interopRequireWildcard(require("./tx/v1beta1/service.lcd"));
var _192 = _interopRequireWildcard(require("./upgrade/v1beta1/query.lcd"));
var _193 = _interopRequireWildcard(require("./app/v1alpha1/query.rpc.Query"));
var _194 = _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
var _195 = _interopRequireWildcard(require("./authz/v1beta1/query.rpc.Query"));
var _196 = _interopRequireWildcard(require("./autocli/v1/query.rpc.Query"));
var _197 = _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
var _198 = _interopRequireWildcard(require("./base/node/v1beta1/query.rpc.Service"));
var _199 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _200 = _interopRequireWildcard(require("./consensus/v1/query.rpc.Query"));
var _201 = _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
var _202 = _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
var _203 = _interopRequireWildcard(require("./feegrant/v1beta1/query.rpc.Query"));
var _204 = _interopRequireWildcard(require("./gov/v1/query.rpc.Query"));
var _205 = _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
var _206 = _interopRequireWildcard(require("./group/v1/query.rpc.Query"));
var _207 = _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
var _208 = _interopRequireWildcard(require("./nft/v1beta1/query.rpc.Query"));
var _209 = _interopRequireWildcard(require("./orm/query/v1alpha1/query.rpc.Query"));
var _210 = _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
var _211 = _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
var _212 = _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
var _213 = _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
var _214 = _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
var _215 = _interopRequireWildcard(require("./auth/v1beta1/tx.rpc.msg"));
var _216 = _interopRequireWildcard(require("./authz/v1beta1/tx.rpc.msg"));
var _217 = _interopRequireWildcard(require("./bank/v1beta1/tx.rpc.msg"));
var _218 = _interopRequireWildcard(require("./consensus/v1/tx.rpc.msg"));
var _219 = _interopRequireWildcard(require("./crisis/v1beta1/tx.rpc.msg"));
var _220 = _interopRequireWildcard(require("./distribution/v1beta1/tx.rpc.msg"));
var _221 = _interopRequireWildcard(require("./evidence/v1beta1/tx.rpc.msg"));
var _222 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.rpc.msg"));
var _223 = _interopRequireWildcard(require("./gov/v1/tx.rpc.msg"));
var _224 = _interopRequireWildcard(require("./gov/v1beta1/tx.rpc.msg"));
var _225 = _interopRequireWildcard(require("./group/v1/tx.rpc.msg"));
var _226 = _interopRequireWildcard(require("./mint/v1beta1/tx.rpc.msg"));
var _227 = _interopRequireWildcard(require("./nft/v1beta1/tx.rpc.msg"));
var _228 = _interopRequireWildcard(require("./slashing/v1beta1/tx.rpc.msg"));
var _229 = _interopRequireWildcard(require("./staking/v1beta1/tx.rpc.msg"));
var _230 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.rpc.msg"));
var _231 = _interopRequireWildcard(require("./vesting/v1beta1/tx.rpc.msg"));
var _242 = _interopRequireWildcard(require("./lcd"));
var _243 = _interopRequireWildcard(require("./rpc.query"));
var _244 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cosmos;
exports.cosmos = cosmos;
(function (_cosmos) {
  var app;
  (function (_app) {
    var runtime;
    (function (_runtime) {
      var v1alpha1 = _runtime.v1alpha1 = _objectSpread({}, _2);
    })(runtime || (runtime = _app.runtime || (_app.runtime = {})));
    var v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _3), _4), _5), _193);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  var auth;
  (function (_auth) {
    var v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _6), _7), _8), _9), _140), _157), _174), _194), _215);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  var authz;
  (function (_authz) {
    var v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _10), _11), _12), _13), _14), _141), _158), _175), _195), _216);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  var autocli;
  (function (_autocli) {
    var v1 = _autocli.v1 = _objectSpread(_objectSpread(_objectSpread({}, _15), _16), _196);
  })(autocli || (autocli = _cosmos.autocli || (_cosmos.autocli = {})));
  var bank;
  (function (_bank) {
    var v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _17), _18), _19), _20), _21), _142), _159), _176), _197), _217);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  var base;
  (function (_base) {
    var abci;
    (function (_abci) {
      var v1beta1 = _abci.v1beta1 = _objectSpread({}, _22);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    var kv;
    (function (_kv) {
      var v1beta1 = _kv.v1beta1 = _objectSpread({}, _23);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    var node;
    (function (_node) {
      var v1beta1 = _node.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _24), _177), _198);
    })(node || (node = _base.node || (_base.node = {})));
    var query;
    (function (_query) {
      var v1beta1 = _query.v1beta1 = _objectSpread({}, _25);
    })(query || (query = _base.query || (_base.query = {})));
    var reflection;
    (function (_reflection) {
      var v1beta1 = _reflection.v1beta1 = _objectSpread({}, _26);
      var v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _27);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    var snapshots;
    (function (_snapshots) {
      var v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _28);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    var store;
    (function (_store) {
      var v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _29), _30);
    })(store || (store = _base.store || (_base.store = {})));
    var tendermint;
    (function (_tendermint) {
      var v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _31), _32), _178), _199);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    var v1beta1 = _base.v1beta1 = _objectSpread({}, _33);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  var capability;
  (function (_capability) {
    var v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _34), _35);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  var consensus;
  (function (_consensus) {
    var v1 = _consensus.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _36), _37), _143), _160), _179), _200), _218);
  })(consensus || (consensus = _cosmos.consensus || (_cosmos.consensus = {})));
  var crisis;
  (function (_crisis) {
    var v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _38), _39), _144), _161), _219);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  var crypto;
  (function (_crypto) {
    var ed25519 = _crypto.ed25519 = _objectSpread({}, _40);
    var hd;
    (function (_hd) {
      var v1 = _hd.v1 = _objectSpread({}, _41);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    var keyring;
    (function (_keyring) {
      var v1 = _keyring.v1 = _objectSpread({}, _42);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    var multisig = _crypto.multisig = _objectSpread({}, _43);
    var secp256k1 = _crypto.secp256k1 = _objectSpread({}, _44);
    var secp256r1 = _crypto.secp256r1 = _objectSpread({}, _45);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  var distribution;
  (function (_distribution) {
    var v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _46), _47), _48), _49), _145), _162), _180), _201), _220);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  var evidence;
  (function (_evidence) {
    var v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _50), _51), _52), _53), _146), _163), _181), _202), _221);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  var feegrant;
  (function (_feegrant) {
    var v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _54), _55), _56), _57), _147), _164), _182), _203), _222);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  var genutil;
  (function (_genutil) {
    var v1beta1 = _genutil.v1beta1 = _objectSpread({}, _58);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  var gov;
  (function (_gov) {
    var v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _59), _60), _61), _62), _148), _165), _183), _204), _223);
    var v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _63), _64), _65), _66), _149), _166), _184), _205), _224);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  var group;
  (function (_group) {
    var v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _67), _68), _69), _70), _71), _150), _167), _185), _206), _225);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _72), _73), _74), _75), _151), _168), _186), _207), _226);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  var msg;
  (function (_msg) {
    var v1 = _msg.v1 = _objectSpread({}, _76);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  var nft;
  (function (_nft) {
    var v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _77), _78), _79), _80), _81), _152), _169), _187), _208), _227);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  var orm;
  (function (_orm) {
    var query;
    (function (_query2) {
      var v1alpha1 = _query2.v1alpha1 = _objectSpread(_objectSpread({}, _82), _209);
    })(query || (query = _orm.query || (_orm.query = {})));
    var v1 = _orm.v1 = _objectSpread({}, _83);
    var v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _84);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  var params;
  (function (_params) {
    var v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _85), _86), _188), _210);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  var query;
  (function (_query3) {
    var v1 = _query3.v1 = _objectSpread({}, _87);
  })(query || (query = _cosmos.query || (_cosmos.query = {})));
  var reflection;
  (function (_reflection2) {
    var v1 = _reflection2.v1 = _objectSpread({}, _88);
  })(reflection || (reflection = _cosmos.reflection || (_cosmos.reflection = {})));
  var slashing;
  (function (_slashing) {
    var v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _89), _90), _91), _92), _153), _170), _189), _211), _228);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  var staking;
  (function (_staking) {
    var v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _93), _94), _95), _96), _97), _154), _171), _190), _212), _229);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  var tx;
  (function (_tx) {
    var config;
    (function (_config) {
      var v1 = _config.v1 = _objectSpread({}, _98);
    })(config || (config = _tx.config || (_tx.config = {})));
    var signing;
    (function (_signing) {
      var v1beta1 = _signing.v1beta1 = _objectSpread({}, _99);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    var v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _100), _101), _191), _213);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  var upgrade;
  (function (_upgrade) {
    var v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _102), _103), _104), _155), _172), _192), _214), _230);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  var vesting;
  (function (_vesting) {
    var v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _105), _106), _156), _173), _231);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  var ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _242), _243), _244);
})(cosmos || (exports.cosmos = cosmos = {}));