"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSigningCosmosClientOptions = exports.getSigningCosmosClient = exports.cosmosProtoRegistry = exports.cosmosAminoConverters = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _protoSigning = require("@cosmjs/proto-signing");
var _stargate = require("@cosmjs/stargate");
var cosmosAuthV1beta1TxRegistry = _interopRequireWildcard(require("./auth/v1beta1/tx.registry"));
var cosmosAuthzV1beta1TxRegistry = _interopRequireWildcard(require("./authz/v1beta1/tx.registry"));
var cosmosBankV1beta1TxRegistry = _interopRequireWildcard(require("./bank/v1beta1/tx.registry"));
var cosmosConsensusV1TxRegistry = _interopRequireWildcard(require("./consensus/v1/tx.registry"));
var cosmosCrisisV1beta1TxRegistry = _interopRequireWildcard(require("./crisis/v1beta1/tx.registry"));
var cosmosDistributionV1beta1TxRegistry = _interopRequireWildcard(require("./distribution/v1beta1/tx.registry"));
var cosmosEvidenceV1beta1TxRegistry = _interopRequireWildcard(require("./evidence/v1beta1/tx.registry"));
var cosmosFeegrantV1beta1TxRegistry = _interopRequireWildcard(require("./feegrant/v1beta1/tx.registry"));
var cosmosGovV1TxRegistry = _interopRequireWildcard(require("./gov/v1/tx.registry"));
var cosmosGovV1beta1TxRegistry = _interopRequireWildcard(require("./gov/v1beta1/tx.registry"));
var cosmosGroupV1TxRegistry = _interopRequireWildcard(require("./group/v1/tx.registry"));
var cosmosMintV1beta1TxRegistry = _interopRequireWildcard(require("./mint/v1beta1/tx.registry"));
var cosmosNftV1beta1TxRegistry = _interopRequireWildcard(require("./nft/v1beta1/tx.registry"));
var cosmosSlashingV1beta1TxRegistry = _interopRequireWildcard(require("./slashing/v1beta1/tx.registry"));
var cosmosStakingV1beta1TxRegistry = _interopRequireWildcard(require("./staking/v1beta1/tx.registry"));
var cosmosUpgradeV1beta1TxRegistry = _interopRequireWildcard(require("./upgrade/v1beta1/tx.registry"));
var cosmosVestingV1beta1TxRegistry = _interopRequireWildcard(require("./vesting/v1beta1/tx.registry"));
var cosmosAuthV1beta1TxAmino = _interopRequireWildcard(require("./auth/v1beta1/tx.amino"));
var cosmosAuthzV1beta1TxAmino = _interopRequireWildcard(require("./authz/v1beta1/tx.amino"));
var cosmosBankV1beta1TxAmino = _interopRequireWildcard(require("./bank/v1beta1/tx.amino"));
var cosmosConsensusV1TxAmino = _interopRequireWildcard(require("./consensus/v1/tx.amino"));
var cosmosCrisisV1beta1TxAmino = _interopRequireWildcard(require("./crisis/v1beta1/tx.amino"));
var cosmosDistributionV1beta1TxAmino = _interopRequireWildcard(require("./distribution/v1beta1/tx.amino"));
var cosmosEvidenceV1beta1TxAmino = _interopRequireWildcard(require("./evidence/v1beta1/tx.amino"));
var cosmosFeegrantV1beta1TxAmino = _interopRequireWildcard(require("./feegrant/v1beta1/tx.amino"));
var cosmosGovV1TxAmino = _interopRequireWildcard(require("./gov/v1/tx.amino"));
var cosmosGovV1beta1TxAmino = _interopRequireWildcard(require("./gov/v1beta1/tx.amino"));
var cosmosGroupV1TxAmino = _interopRequireWildcard(require("./group/v1/tx.amino"));
var cosmosMintV1beta1TxAmino = _interopRequireWildcard(require("./mint/v1beta1/tx.amino"));
var cosmosNftV1beta1TxAmino = _interopRequireWildcard(require("./nft/v1beta1/tx.amino"));
var cosmosSlashingV1beta1TxAmino = _interopRequireWildcard(require("./slashing/v1beta1/tx.amino"));
var cosmosStakingV1beta1TxAmino = _interopRequireWildcard(require("./staking/v1beta1/tx.amino"));
var cosmosUpgradeV1beta1TxAmino = _interopRequireWildcard(require("./upgrade/v1beta1/tx.amino"));
var cosmosVestingV1beta1TxAmino = _interopRequireWildcard(require("./vesting/v1beta1/tx.amino"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cosmosAminoConverters = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, cosmosAuthV1beta1TxAmino.AminoConverter), cosmosAuthzV1beta1TxAmino.AminoConverter), cosmosBankV1beta1TxAmino.AminoConverter), cosmosConsensusV1TxAmino.AminoConverter), cosmosCrisisV1beta1TxAmino.AminoConverter), cosmosDistributionV1beta1TxAmino.AminoConverter), cosmosEvidenceV1beta1TxAmino.AminoConverter), cosmosFeegrantV1beta1TxAmino.AminoConverter), cosmosGovV1TxAmino.AminoConverter), cosmosGovV1beta1TxAmino.AminoConverter), cosmosGroupV1TxAmino.AminoConverter), cosmosMintV1beta1TxAmino.AminoConverter), cosmosNftV1beta1TxAmino.AminoConverter), cosmosSlashingV1beta1TxAmino.AminoConverter), cosmosStakingV1beta1TxAmino.AminoConverter), cosmosUpgradeV1beta1TxAmino.AminoConverter), cosmosVestingV1beta1TxAmino.AminoConverter);
exports.cosmosAminoConverters = cosmosAminoConverters;
var cosmosProtoRegistry = [].concat((0, _toConsumableArray2["default"])(cosmosAuthV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosAuthzV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosBankV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosConsensusV1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosCrisisV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosDistributionV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosEvidenceV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosFeegrantV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosGovV1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosGovV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosGroupV1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosMintV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosNftV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosSlashingV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosStakingV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosUpgradeV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(cosmosVestingV1beta1TxRegistry.registry));
exports.cosmosProtoRegistry = cosmosProtoRegistry;
var getSigningCosmosClientOptions = function getSigningCosmosClientOptions() {
  var registry = new _protoSigning.Registry((0, _toConsumableArray2["default"])(cosmosProtoRegistry));
  var aminoTypes = new _stargate.AminoTypes(_objectSpread({}, cosmosAminoConverters));
  return {
    registry: registry,
    aminoTypes: aminoTypes
  };
};
exports.getSigningCosmosClientOptions = getSigningCosmosClientOptions;
var getSigningCosmosClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var rpcEndpoint, signer, _getSigningCosmosClie, registry, aminoTypes, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpcEndpoint = _ref.rpcEndpoint, signer = _ref.signer;
          _getSigningCosmosClie = getSigningCosmosClientOptions(), registry = _getSigningCosmosClie.registry, aminoTypes = _getSigningCosmosClie.aminoTypes;
          _context.next = 4;
          return _stargate.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
            registry: registry,
            aminoTypes: aminoTypes
          });
        case 4:
          client = _context.sent;
          return _context.abrupt("return", client);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSigningCosmosClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getSigningCosmosClient = getSigningCosmosClient;