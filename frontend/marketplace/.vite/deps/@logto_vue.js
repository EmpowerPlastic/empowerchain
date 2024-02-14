import {
  computed,
  inject,
  reactive,
  readonly,
  toRefs,
  watchEffect
} from "./chunk-6KIS374E.js";
import {
  __commonJS,
  __export,
  __privateAdd,
  __privateMethod,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/map-obj/index.js
var require_map_obj = __commonJS({
  "node_modules/map-obj/index.js"(exports, module) {
    "use strict";
    var isObject3 = (value) => typeof value === "object" && value !== null;
    var mapObjectSkip = Symbol("skip");
    var isObjectCustom = (value) => isObject3(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
    var mapObject = (object, mapper, options, isSeen = /* @__PURE__ */ new WeakMap()) => {
      options = {
        deep: false,
        target: {},
        ...options
      };
      if (isSeen.has(object)) {
        return isSeen.get(object);
      }
      isSeen.set(object, options.target);
      const { target } = options;
      delete options.target;
      const mapArray = (array) => array.map((element) => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
      if (Array.isArray(object)) {
        return mapArray(object);
      }
      for (const [key, value] of Object.entries(object)) {
        const mapResult = mapper(key, value, object);
        if (mapResult === mapObjectSkip) {
          continue;
        }
        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
        if (newKey === "__proto__") {
          continue;
        }
        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
          newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
        }
        target[newKey] = newValue;
      }
      return target;
    };
    module.exports = (object, mapper, options) => {
      if (!isObject3(object)) {
        throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
      }
      return mapObject(object, mapper, options);
    };
    module.exports.mapObjectSkip = mapObjectSkip;
  }
});

// node_modules/camelcase/index.js
var require_camelcase = __commonJS({
  "node_modules/camelcase/index.js"(exports, module) {
    "use strict";
    var UPPERCASE = /[\p{Lu}]/u;
    var LOWERCASE = /[\p{Ll}]/u;
    var LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
    var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
    var SEPARATORS = /[_.\- ]+/;
    var LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
    var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
    var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
    var preserveCamelCase = (string, toLowerCase, toUpperCase) => {
      let isLastCharLower = false;
      let isLastCharUpper = false;
      let isLastLastCharUpper = false;
      for (let i = 0; i < string.length; i++) {
        const character = string[i];
        if (isLastCharLower && UPPERCASE.test(character)) {
          string = string.slice(0, i) + "-" + string.slice(i);
          isLastCharLower = false;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = true;
          i++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
          string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = false;
          isLastCharLower = true;
        } else {
          isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
      }
      return string;
    };
    var preserveConsecutiveUppercase = (input, toLowerCase) => {
      LEADING_CAPITAL.lastIndex = 0;
      return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
    };
    var postProcess = (input, toUpperCase) => {
      SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
      NUMBERS_AND_IDENTIFIER.lastIndex = 0;
      return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
    };
    var camelCase = (input, options) => {
      if (!(typeof input === "string" || Array.isArray(input))) {
        throw new TypeError("Expected the input to be `string | string[]`");
      }
      options = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...options
      };
      if (Array.isArray(input)) {
        input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
      } else {
        input = input.trim();
      }
      if (input.length === 0) {
        return "";
      }
      const toLowerCase = options.locale === false ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale);
      const toUpperCase = options.locale === false ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
      if (input.length === 1) {
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
      }
      const hasUpperCase = input !== toLowerCase(input);
      if (hasUpperCase) {
        input = preserveCamelCase(input, toLowerCase, toUpperCase);
      }
      input = input.replace(LEADING_SEPARATORS, "");
      if (options.preserveConsecutiveUppercase) {
        input = preserveConsecutiveUppercase(input, toLowerCase);
      } else {
        input = toLowerCase(input);
      }
      if (options.pascalCase) {
        input = toUpperCase(input.charAt(0)) + input.slice(1);
      }
      return postProcess(input, toUpperCase);
    };
    module.exports = camelCase;
    module.exports.default = camelCase;
  }
});

// node_modules/quick-lru/index.js
var require_quick_lru = __commonJS({
  "node_modules/quick-lru/index.js"(exports, module) {
    "use strict";
    var QuickLRU = class {
      constructor(options = {}) {
        if (!(options.maxSize && options.maxSize > 0)) {
          throw new TypeError("`maxSize` must be a number greater than 0");
        }
        this.maxSize = options.maxSize;
        this.onEviction = options.onEviction;
        this.cache = /* @__PURE__ */ new Map();
        this.oldCache = /* @__PURE__ */ new Map();
        this._size = 0;
      }
      _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
          this._size = 0;
          if (typeof this.onEviction === "function") {
            for (const [key2, value2] of this.oldCache.entries()) {
              this.onEviction(key2, value2);
            }
          }
          this.oldCache = this.cache;
          this.cache = /* @__PURE__ */ new Map();
        }
      }
      get(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          const value = this.oldCache.get(key);
          this.oldCache.delete(key);
          this._set(key, value);
          return value;
        }
      }
      set(key, value) {
        if (this.cache.has(key)) {
          this.cache.set(key, value);
        } else {
          this._set(key, value);
        }
        return this;
      }
      has(key) {
        return this.cache.has(key) || this.oldCache.has(key);
      }
      peek(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        if (this.oldCache.has(key)) {
          return this.oldCache.get(key);
        }
      }
      delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
          this._size--;
        }
        return this.oldCache.delete(key) || deleted;
      }
      clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
      }
      *keys() {
        for (const [key] of this) {
          yield key;
        }
      }
      *values() {
        for (const [, value] of this) {
          yield value;
        }
      }
      *[Symbol.iterator]() {
        for (const item of this.cache) {
          yield item;
        }
        for (const item of this.oldCache) {
          const [key] = item;
          if (!this.cache.has(key)) {
            yield item;
          }
        }
      }
      get size() {
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()) {
          if (!this.cache.has(key)) {
            oldCacheSize++;
          }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
      }
    };
    module.exports = QuickLRU;
  }
});

// node_modules/camelcase-keys/index.js
var require_camelcase_keys = __commonJS({
  "node_modules/camelcase-keys/index.js"(exports, module) {
    "use strict";
    var mapObj = require_map_obj();
    var camelCase = require_camelcase();
    var QuickLru = require_quick_lru();
    var has2 = (array, key) => array.some((x) => {
      if (typeof x === "string") {
        return x === key;
      }
      x.lastIndex = 0;
      return x.test(key);
    });
    var cache = new QuickLru({ maxSize: 1e5 });
    var isObject3 = (value) => typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
    var camelCaseConvert = (input, options) => {
      if (!isObject3(input)) {
        return input;
      }
      options = {
        deep: false,
        pascalCase: false,
        ...options
      };
      const { exclude, pascalCase, stopPaths, deep } = options;
      const stopPathsSet = new Set(stopPaths);
      const makeMapper = (parentPath) => (key, value) => {
        if (deep && isObject3(value)) {
          const path = parentPath === void 0 ? key : `${parentPath}.${key}`;
          if (!stopPathsSet.has(path)) {
            value = mapObj(value, makeMapper(path));
          }
        }
        if (!(exclude && has2(exclude, key))) {
          const cacheKey = pascalCase ? `${key}_` : key;
          if (cache.has(cacheKey)) {
            key = cache.get(cacheKey);
          } else {
            const returnValue = camelCase(key, { pascalCase, locale: false });
            if (key.length < 100) {
              cache.set(cacheKey, returnValue);
            }
            key = returnValue;
          }
        }
        return [key, value];
      };
      return mapObj(input, makeMapper(void 0));
    };
    module.exports = (input, options) => {
      if (Array.isArray(input)) {
        return Object.keys(input).map((key) => camelCaseConvert(input[key], options));
      }
      return camelCaseConvert(input, options);
    };
  }
});

// node_modules/@logto/js/lib/core/fetch-token.js
var import_camelcase_keys = __toESM(require_camelcase_keys(), 1);

// node_modules/@logto/js/lib/consts/openid.js
var ReservedScope;
(function(ReservedScope2) {
  ReservedScope2["OpenId"] = "openid";
  ReservedScope2["OfflineAccess"] = "offline_access";
})(ReservedScope || (ReservedScope = {}));
var ReservedResource;
(function(ReservedResource2) {
  ReservedResource2["Organization"] = "urn:logto:resource:organizations";
})(ReservedResource || (ReservedResource = {}));
var UserScope;
(function(UserScope2) {
  UserScope2["Profile"] = "profile";
  UserScope2["Email"] = "email";
  UserScope2["Phone"] = "phone";
  UserScope2["CustomData"] = "custom_data";
  UserScope2["Identities"] = "identities";
  UserScope2["Roles"] = "roles";
  UserScope2["Organizations"] = "urn:logto:scope:organizations";
  UserScope2["OrganizationRoles"] = "urn:logto:scope:organization_roles";
})(UserScope || (UserScope = {}));
var idTokenClaims = Object.freeze({
  [UserScope.Profile]: ["name", "picture", "username"],
  [UserScope.Email]: ["email", "email_verified"],
  [UserScope.Phone]: ["phone_number", "phone_number_verified"],
  [UserScope.Roles]: ["roles"],
  [UserScope.Organizations]: ["organizations"],
  [UserScope.OrganizationRoles]: ["organization_roles"],
  [UserScope.CustomData]: [],
  [UserScope.Identities]: []
});
var userinfoClaims = Object.freeze({
  [UserScope.Profile]: [],
  [UserScope.Email]: [],
  [UserScope.Phone]: [],
  [UserScope.Roles]: [],
  [UserScope.Organizations]: [],
  [UserScope.OrganizationRoles]: [],
  [UserScope.CustomData]: ["custom_data"],
  [UserScope.Identities]: ["identities"]
});
var userClaims = Object.freeze(
  // Hard to infer type directly, use `as` for a workaround.
  // eslint-disable-next-line no-restricted-syntax
  Object.fromEntries(Object.values(UserScope).map((current) => [
    current,
    [...idTokenClaims[current], ...userinfoClaims[current]]
  ]))
);
var organizationUrnPrefix = "urn:logto:organization:";
var buildOrganizationUrn = (organizationId) => `${organizationUrnPrefix}${organizationId}`;
var getOrganizationIdFromUrn = (urn) => {
  if (!urn.startsWith(organizationUrnPrefix)) {
    throw new TypeError("Invalid organization URN.");
  }
  return urn.slice(organizationUrnPrefix.length);
};

// node_modules/@logto/js/lib/consts/index.js
var ContentType = {
  formUrlEncoded: { "Content-Type": "application/x-www-form-urlencoded" }
};
var TokenGrantType;
(function(TokenGrantType2) {
  TokenGrantType2["AuthorizationCode"] = "authorization_code";
  TokenGrantType2["RefreshToken"] = "refresh_token";
})(TokenGrantType || (TokenGrantType = {}));
var QueryKey;
(function(QueryKey2) {
  QueryKey2["ClientId"] = "client_id";
  QueryKey2["Code"] = "code";
  QueryKey2["CodeChallenge"] = "code_challenge";
  QueryKey2["CodeChallengeMethod"] = "code_challenge_method";
  QueryKey2["CodeVerifier"] = "code_verifier";
  QueryKey2["Error"] = "error";
  QueryKey2["ErrorDescription"] = "error_description";
  QueryKey2["GrantType"] = "grant_type";
  QueryKey2["IdToken"] = "id_token";
  QueryKey2["IdTokenHint"] = "id_token_hint";
  QueryKey2["PostLogoutRedirectUri"] = "post_logout_redirect_uri";
  QueryKey2["Prompt"] = "prompt";
  QueryKey2["RedirectUri"] = "redirect_uri";
  QueryKey2["RefreshToken"] = "refresh_token";
  QueryKey2["Resource"] = "resource";
  QueryKey2["ResponseType"] = "response_type";
  QueryKey2["Scope"] = "scope";
  QueryKey2["State"] = "state";
  QueryKey2["Token"] = "token";
  QueryKey2["InteractionMode"] = "interaction_mode";
  QueryKey2["OrganizationId"] = "organization_id";
})(QueryKey || (QueryKey = {}));
var Prompt;
(function(Prompt2) {
  Prompt2["Consent"] = "consent";
  Prompt2["Login"] = "login";
})(Prompt || (Prompt = {}));

// node_modules/@logto/js/lib/core/fetch-token.js
var fetchTokenByAuthorizationCode = async ({ clientId, tokenEndpoint, redirectUri, codeVerifier, code, resource }, requester) => {
  const parameters = new URLSearchParams();
  parameters.append(QueryKey.ClientId, clientId);
  parameters.append(QueryKey.Code, code);
  parameters.append(QueryKey.CodeVerifier, codeVerifier);
  parameters.append(QueryKey.RedirectUri, redirectUri);
  parameters.append(QueryKey.GrantType, TokenGrantType.AuthorizationCode);
  if (resource) {
    parameters.append(QueryKey.Resource, resource);
  }
  const snakeCaseCodeTokenResponse = await requester(tokenEndpoint, {
    method: "POST",
    headers: ContentType.formUrlEncoded,
    body: parameters
  });
  return (0, import_camelcase_keys.default)(snakeCaseCodeTokenResponse);
};
var fetchTokenByRefreshToken = async (params, requester) => {
  const { clientId, tokenEndpoint, refreshToken, resource, organizationId, scopes } = params;
  const parameters = new URLSearchParams();
  parameters.append(QueryKey.ClientId, clientId);
  parameters.append(QueryKey.RefreshToken, refreshToken);
  parameters.append(QueryKey.GrantType, TokenGrantType.RefreshToken);
  if (resource) {
    parameters.append(QueryKey.Resource, resource);
  }
  if (organizationId) {
    parameters.append(QueryKey.OrganizationId, organizationId);
  }
  if (scopes == null ? void 0 : scopes.length) {
    parameters.append(QueryKey.Scope, scopes.join(" "));
  }
  const snakeCaseRefreshTokenTokenResponse = await requester(tokenEndpoint, {
    method: "POST",
    headers: ContentType.formUrlEncoded,
    body: parameters
  });
  return (0, import_camelcase_keys.default)(snakeCaseRefreshTokenTokenResponse);
};

// node_modules/@logto/js/lib/core/oidc-config.js
var import_camelcase_keys2 = __toESM(require_camelcase_keys(), 1);
var discoveryPath = "/oidc/.well-known/openid-configuration";
var fetchOidcConfig = async (endpoint, requester) => (0, import_camelcase_keys2.default)(await requester(endpoint));

// node_modules/@logto/js/lib/core/revoke.js
var revoke = async (revocationEndpoint, clientId, token, requester) => requester(revocationEndpoint, {
  method: "POST",
  headers: ContentType.formUrlEncoded,
  body: new URLSearchParams({
    [QueryKey.ClientId]: clientId,
    [QueryKey.Token]: token
  })
});

// node_modules/@silverhand/essentials/lib/utilities/array.js
var deduplicate = (array) => [...new Set(array)];

// node_modules/@silverhand/essentials/lib/utilities/assertions.js
var notFalsy = (value) => Boolean(value);

// node_modules/@silverhand/essentials/lib/utilities/conditional.js
var conditional = (exp) => notFalsy(exp) ? exp : void 0;
var conditionalString = (exp) => notFalsy(exp) ? String(exp) : "";

// node_modules/@silverhand/essentials/lib/utilities/function.js
var isPromise = (value) => value !== null && (typeof value === "object" || typeof value === "function") && "then" in value && typeof value.then === "function";
var trySafe = (exec, onError) => {
  try {
    const unwrapped = typeof exec === "function" ? exec() : exec;
    return isPromise(unwrapped) ? (
      // eslint-disable-next-line promise/prefer-await-to-then
      unwrapped.catch((error) => {
        onError == null ? void 0 : onError(error);
      })
    ) : unwrapped;
  } catch (error) {
    onError == null ? void 0 : onError(error);
  }
};

// node_modules/@silverhand/essentials/lib/utilities/string.js
var replaceNonUrlSafeCharacters = (base64String) => base64String.replaceAll("+", "-").replaceAll("/", "_").replaceAll(/=+$/g, "");
var restoreNonUrlSafeCharacters = (base64String) => base64String.replaceAll("-", "+").replaceAll("_", "/");
var urlSafeBase64 = {
  isSafe: (input) => /^[\w-]*$/.test(input),
  encode: (rawString) => {
    const encodedString = btoa(unescape(encodeURIComponent(rawString)));
    return replaceNonUrlSafeCharacters(encodedString);
  },
  decode: (encodedString) => {
    const nonUrlSafeEncodedString = restoreNonUrlSafeCharacters(encodedString);
    return decodeURIComponent(escape(atob(nonUrlSafeEncodedString)));
  },
  replaceNonUrlSafeCharacters,
  restoreNonUrlSafeCharacters
};

// node_modules/@silverhand/essentials/lib/utilities/object.js
var isObject = (object) => object !== null && typeof object === "object";

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default = crypto;
var isCryptoKey = (key) => key instanceof CryptoKey;

// node_modules/jose/dist/browser/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  buffers.forEach((buffer) => {
    buf.set(buffer, i);
    i += buffer.length;
  });
  return buf;
}

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64 = (input) => {
  let unencoded = input;
  if (typeof unencoded === "string") {
    unencoded = encoder.encode(unencoded);
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
};
var encode = (input) => {
  return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
var decodeBase64 = (encoded) => {
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
};
var decode = (input) => {
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
};

// node_modules/jose/dist/browser/util/errors.js
var errors_exports = {};
__export(errors_exports, {
  JOSEAlgNotAllowed: () => JOSEAlgNotAllowed,
  JOSEError: () => JOSEError,
  JOSENotSupported: () => JOSENotSupported,
  JWEDecryptionFailed: () => JWEDecryptionFailed,
  JWEInvalid: () => JWEInvalid,
  JWKInvalid: () => JWKInvalid,
  JWKSInvalid: () => JWKSInvalid,
  JWKSMultipleMatchingKeys: () => JWKSMultipleMatchingKeys,
  JWKSNoMatchingKey: () => JWKSNoMatchingKey,
  JWKSTimeout: () => JWKSTimeout,
  JWSInvalid: () => JWSInvalid,
  JWSSignatureVerificationFailed: () => JWSSignatureVerificationFailed,
  JWTClaimValidationFailed: () => JWTClaimValidationFailed,
  JWTExpired: () => JWTExpired,
  JWTInvalid: () => JWTInvalid
});
var JOSEError = class extends Error {
  static get code() {
    return "ERR_JOSE_GENERIC";
  }
  constructor(message2) {
    var _a2;
    super(message2);
    this.code = "ERR_JOSE_GENERIC";
    this.name = this.constructor.name;
    (_a2 = Error.captureStackTrace) == null ? void 0 : _a2.call(Error, this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static get code() {
    return "ERR_JWT_CLAIM_VALIDATION_FAILED";
  }
  constructor(message2, claim = "unspecified", reason = "unspecified") {
    super(message2);
    this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    this.claim = claim;
    this.reason = reason;
  }
};
var JWTExpired = class extends JOSEError {
  static get code() {
    return "ERR_JWT_EXPIRED";
  }
  constructor(message2, claim = "unspecified", reason = "unspecified") {
    super(message2);
    this.code = "ERR_JWT_EXPIRED";
    this.claim = claim;
    this.reason = reason;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
  }
  static get code() {
    return "ERR_JOSE_ALG_NOT_ALLOWED";
  }
};
var JOSENotSupported = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_NOT_SUPPORTED";
  }
  static get code() {
    return "ERR_JOSE_NOT_SUPPORTED";
  }
};
var JWEDecryptionFailed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWE_DECRYPTION_FAILED";
    this.message = "decryption operation failed";
  }
  static get code() {
    return "ERR_JWE_DECRYPTION_FAILED";
  }
};
var JWEInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWE_INVALID";
  }
  static get code() {
    return "ERR_JWE_INVALID";
  }
};
var JWSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_INVALID";
  }
  static get code() {
    return "ERR_JWS_INVALID";
  }
};
var JWTInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWT_INVALID";
  }
  static get code() {
    return "ERR_JWT_INVALID";
  }
};
var JWKInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWK_INVALID";
  }
  static get code() {
    return "ERR_JWK_INVALID";
  }
};
var JWKSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_INVALID";
  }
  static get code() {
    return "ERR_JWKS_INVALID";
  }
};
var JWKSNoMatchingKey = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_NO_MATCHING_KEY";
    this.message = "no applicable key found in the JSON Web Key Set";
  }
  static get code() {
    return "ERR_JWKS_NO_MATCHING_KEY";
  }
};
var JWKSMultipleMatchingKeys = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    this.message = "multiple matching keys found in the JSON Web Key Set";
  }
  static get code() {
    return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  }
};
var JWKSTimeout = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_TIMEOUT";
    this.message = "request timed out";
  }
  static get code() {
    return "ERR_JWKS_TIMEOUT";
  }
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    this.message = "signature verification failed";
  }
  static get code() {
    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
};

// node_modules/jose/dist/browser/runtime/random.js
var random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usages) {
  if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkSigCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "EdDSA": {
      if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
        throw unusable("Ed25519 or Ed448");
      }
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor && actual.constructor.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalid_key_input_default = (actual, ...types2) => {
  return message("Key must be ", actual, ...types2);
};
function withAlg(alg, actual, ...types2) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
}

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default = (key) => {
  return isCryptoKey(key);
};
var types = ["CryptoKey"];

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};
var is_disjoint_default = isDisjoint;

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject2(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};

// node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse = async (jwk) => {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const rest = [
    algorithm,
    jwk.ext ?? false,
    jwk.key_ops ?? keyUsages
  ];
  const keyData = { ...jwk };
  delete keyData.alg;
  delete keyData.use;
  return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
};
var jwk_to_key_default = parse;

// node_modules/jose/dist/browser/key/import.js
async function importJWK(jwk, alg) {
  if (!isObject2(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg || (alg = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode(jwk.k);
    case "RSA":
      if (jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}

// node_modules/jose/dist/browser/lib/check_key_type.js
var symmetricTypeCheck = (alg, key) => {
  if (key instanceof Uint8Array)
    return;
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, ...types));
  }
  if (key.type === "secret") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (usage === "sign" && key.type === "public") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
  }
  if (usage === "decrypt" && key.type === "public") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
  }
  if (key.algorithm && usage === "verify" && key.type === "private") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
  }
  if (key.algorithm && usage === "encrypt" && key.type === "private") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
  }
};
var checkKeyType = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key);
  } else {
    asymmetricTypeCheck(alg, key, usage);
  }
};
var check_key_type_default = checkKeyType;

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default = validateCrit;

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms = (option, algorithms) => {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return void 0;
  }
  return new Set(algorithms);
};
var validate_algorithms_default = validateAlgorithms;

// node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var unprotected = Symbol();

// node_modules/jose/dist/browser/runtime/subtle_dsa.js
function subtleDsa(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "EdDSA":
      return { name: algorithm.name };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}

// node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
function getCryptoKey(alg, key, usage) {
  if (isCryptoKey(key)) {
    checkSigCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, ...types));
    }
    return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}

// node_modules/jose/dist/browser/runtime/verify.js
var verify = async (alg, key, signature, data) => {
  const cryptoKey = await getCryptoKey(alg, key, "verify");
  check_key_length_default(alg, cryptoKey);
  const algorithm = subtleDsa(alg, cryptoKey.algorithm);
  try {
    return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
};
var verify_default = verify;

// node_modules/jose/dist/browser/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!isObject2(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !isObject2(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options == null ? void 0 : options.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const verified = await verify_default(alg, key, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}

// node_modules/jose/dist/browser/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default = (date) => Math.floor(date.getTime() / 1e3);

// node_modules/jose/dist/browser/lib/secs.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default = (str) => {
  const matched = REGEX.exec(str);
  if (!matched || matched[4] && matched[1]) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      numericDate = Math.round(value);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      numericDate = Math.round(value * minute);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      numericDate = Math.round(value * hour);
      break;
    case "day":
    case "days":
    case "d":
      numericDate = Math.round(value * day);
      break;
    case "week":
    case "weeks":
    case "w":
      numericDate = Math.round(value * week);
      break;
    default:
      numericDate = Math.round(value * year);
      break;
  }
  if (matched[1] === "-" || matched[4] === "ago") {
    return -numericDate;
  }
  return numericDate;
};

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
var jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
  }
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch {
  }
  if (!isObject2(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== void 0)
    presenceCheck.push("iat");
  if (audience !== void 0)
    presenceCheck.push("aud");
  if (subject !== void 0)
    presenceCheck.push("sub");
  if (issuer !== void 0)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
  if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
  }
  if (payload.nbf !== void 0) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
    }
  }
  if (payload.exp !== void 0) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
    }
  }
  return payload;
};

// node_modules/jose/dist/browser/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  var _a2;
  const verified = await compactVerify(jwt, key, options);
  if (((_a2 = verified.protectedHeader.crit) == null ? void 0 : _a2.includes("b64")) && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/browser/jwks/local.js
function getKtyFromAlg(alg) {
  switch (typeof alg === "string" && alg.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function isJWKSLike(jwks) {
  return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
  return isObject2(key);
}
function clone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}
var LocalJWKSet = class {
  constructor(jwks) {
    this._cached = /* @__PURE__ */ new WeakMap();
    if (!isJWKSLike(jwks)) {
      throw new JWKSInvalid("JSON Web Key Set malformed");
    }
    this._jwks = clone(jwks);
  }
  async getKey(protectedHeader, token) {
    const { alg, kid } = { ...protectedHeader, ...token == null ? void 0 : token.header };
    const kty = getKtyFromAlg(alg);
    const candidates = this._jwks.keys.filter((jwk2) => {
      let candidate = kty === jwk2.kty;
      if (candidate && typeof kid === "string") {
        candidate = kid === jwk2.kid;
      }
      if (candidate && typeof jwk2.alg === "string") {
        candidate = alg === jwk2.alg;
      }
      if (candidate && typeof jwk2.use === "string") {
        candidate = jwk2.use === "sig";
      }
      if (candidate && Array.isArray(jwk2.key_ops)) {
        candidate = jwk2.key_ops.includes("verify");
      }
      if (candidate && alg === "EdDSA") {
        candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
      }
      if (candidate) {
        switch (alg) {
          case "ES256":
            candidate = jwk2.crv === "P-256";
            break;
          case "ES256K":
            candidate = jwk2.crv === "secp256k1";
            break;
          case "ES384":
            candidate = jwk2.crv === "P-384";
            break;
          case "ES512":
            candidate = jwk2.crv === "P-521";
            break;
        }
      }
      return candidate;
    });
    const { 0: jwk, length } = candidates;
    if (length === 0) {
      throw new JWKSNoMatchingKey();
    } else if (length !== 1) {
      const error = new JWKSMultipleMatchingKeys();
      const { _cached } = this;
      error[Symbol.asyncIterator] = async function* () {
        for (const jwk2 of candidates) {
          try {
            yield await importWithAlgCache(_cached, jwk2, alg);
          } catch {
            continue;
          }
        }
      };
      throw error;
    }
    return importWithAlgCache(this._cached, jwk, alg);
  }
};
async function importWithAlgCache(cache, jwk, alg) {
  const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
  if (cached[alg] === void 0) {
    const key = await importJWK({ ...jwk, ext: true }, alg);
    if (key instanceof Uint8Array || key.type !== "public") {
      throw new JWKSInvalid("JSON Web Key Set members must be public keys");
    }
    cached[alg] = key;
  }
  return cached[alg];
}
function createLocalJWKSet(jwks) {
  const set = new LocalJWKSet(jwks);
  return async function(protectedHeader, token) {
    return set.getKey(protectedHeader, token);
  };
}

// node_modules/jose/dist/browser/runtime/fetch_jwks.js
var fetchJwks = async (url, timeout, options) => {
  let controller;
  let id;
  let timedOut = false;
  if (typeof AbortController === "function") {
    controller = new AbortController();
    id = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeout);
  }
  const response = await fetch(url.href, {
    signal: controller ? controller.signal : void 0,
    redirect: "manual",
    headers: options.headers
  }).catch((err) => {
    if (timedOut)
      throw new JWKSTimeout();
    throw err;
  });
  if (id !== void 0)
    clearTimeout(id);
  if (response.status !== 200) {
    throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
  }
  try {
    return await response.json();
  } catch {
    throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
  }
};
var fetch_jwks_default = fetchJwks;

// node_modules/jose/dist/browser/jwks/remote.js
function isCloudflareWorkers() {
  return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
var USER_AGENT;
var _a, _b;
if (typeof navigator === "undefined" || !((_b = (_a = navigator.userAgent) == null ? void 0 : _a.startsWith) == null ? void 0 : _b.call(_a, "Mozilla/5.0 "))) {
  const NAME = "jose";
  const VERSION = "v5.2.0";
  USER_AGENT = `${NAME}/${VERSION}`;
}
var RemoteJWKSet = class extends LocalJWKSet {
  constructor(url, options) {
    super({ keys: [] });
    this._jwks = void 0;
    if (!(url instanceof URL)) {
      throw new TypeError("url must be an instance of URL");
    }
    this._url = new URL(url.href);
    this._options = { agent: options == null ? void 0 : options.agent, headers: options == null ? void 0 : options.headers };
    this._timeoutDuration = typeof (options == null ? void 0 : options.timeoutDuration) === "number" ? options == null ? void 0 : options.timeoutDuration : 5e3;
    this._cooldownDuration = typeof (options == null ? void 0 : options.cooldownDuration) === "number" ? options == null ? void 0 : options.cooldownDuration : 3e4;
    this._cacheMaxAge = typeof (options == null ? void 0 : options.cacheMaxAge) === "number" ? options == null ? void 0 : options.cacheMaxAge : 6e5;
  }
  coolingDown() {
    return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
  }
  fresh() {
    return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
  }
  async getKey(protectedHeader, token) {
    if (!this._jwks || !this.fresh()) {
      await this.reload();
    }
    try {
      return await super.getKey(protectedHeader, token);
    } catch (err) {
      if (err instanceof JWKSNoMatchingKey) {
        if (this.coolingDown() === false) {
          await this.reload();
          return super.getKey(protectedHeader, token);
        }
      }
      throw err;
    }
  }
  async reload() {
    if (this._pendingFetch && isCloudflareWorkers()) {
      this._pendingFetch = void 0;
    }
    const headers = new Headers(this._options.headers);
    if (USER_AGENT && !headers.has("User-Agent")) {
      headers.set("User-Agent", USER_AGENT);
      this._options.headers = Object.fromEntries(headers.entries());
    }
    this._pendingFetch || (this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json) => {
      if (!isJWKSLike(json)) {
        throw new JWKSInvalid("JSON Web Key Set malformed");
      }
      this._jwks = { keys: json.keys };
      this._jwksTimestamp = Date.now();
      this._pendingFetch = void 0;
    }).catch((err) => {
      this._pendingFetch = void 0;
      throw err;
    }));
    await this._pendingFetch;
  }
};
function createRemoteJWKSet(url, options) {
  const set = new RemoteJWKSet(url, options);
  return async function(protectedHeader, token) {
    return set.getKey(protectedHeader, token);
  };
}

// node_modules/jose/dist/browser/util/base64url.js
var base64url_exports2 = {};
__export(base64url_exports2, {
  decode: () => decode2,
  encode: () => encode2
});
var encode2 = encode;
var decode2 = decode;

// node_modules/@logto/js/lib/utils/scopes.js
var withDefaultScopes = (originalScopes) => {
  const reservedScopes = Object.values(ReservedScope);
  const uniqueScopes = /* @__PURE__ */ new Set([...reservedScopes, UserScope.Profile, ...originalScopes ?? []]);
  return Array.from(uniqueScopes).join(" ");
};

// node_modules/@logto/js/lib/core/sign-in.js
var codeChallengeMethod = "S256";
var responseType = "code";
var generateSignInUri = ({ authorizationEndpoint, clientId, redirectUri, codeChallenge, state, scopes, resources, prompt, interactionMode }) => {
  const urlSearchParameters = new URLSearchParams({
    [QueryKey.ClientId]: clientId,
    [QueryKey.RedirectUri]: redirectUri,
    [QueryKey.CodeChallenge]: codeChallenge,
    [QueryKey.CodeChallengeMethod]: codeChallengeMethod,
    [QueryKey.State]: state,
    [QueryKey.ResponseType]: responseType,
    [QueryKey.Prompt]: prompt ?? Prompt.Consent,
    [QueryKey.Scope]: withDefaultScopes(scopes)
  });
  for (const resource of resources ?? []) {
    urlSearchParameters.append(QueryKey.Resource, resource);
  }
  if (interactionMode) {
    urlSearchParameters.append(QueryKey.InteractionMode, interactionMode);
  }
  return `${authorizationEndpoint}?${urlSearchParameters.toString()}`;
};

// node_modules/@logto/js/lib/core/sign-out.js
var generateSignOutUri = ({ endSessionEndpoint, clientId, postLogoutRedirectUri }) => {
  const urlSearchParameters = new URLSearchParams({ [QueryKey.ClientId]: clientId });
  if (postLogoutRedirectUri) {
    urlSearchParameters.append(QueryKey.PostLogoutRedirectUri, postLogoutRedirectUri);
  }
  return `${endSessionEndpoint}?${urlSearchParameters.toString()}`;
};

// node_modules/@logto/js/lib/core/user-info.js
var fetchUserInfo = async (userInfoEndpoint, accessToken, requester) => requester(userInfoEndpoint, {
  headers: { Authorization: `Bearer ${accessToken}` }
});

// node_modules/@logto/js/lib/utils/arbitrary-object.js
var isArbitraryObject = (data) => typeof data === "object" && data !== null;

// node_modules/@logto/js/lib/utils/errors.js
var logtoErrorCodes = Object.freeze({
  "id_token.invalid_iat": "Invalid issued at time in the ID token",
  "id_token.invalid_token": "Invalid ID token",
  "callback_uri_verification.redirect_uri_mismatched": "The callback URI mismatches the redirect URI.",
  "callback_uri_verification.error_found": "Error found in the callback URI",
  "callback_uri_verification.missing_state": "Missing state in the callback URI",
  "callback_uri_verification.state_mismatched": "State mismatched in the callback URI",
  "callback_uri_verification.missing_code": "Missing code in the callback URI",
  crypto_subtle_unavailable: "Crypto.subtle is unavailable in insecure contexts (non-HTTPS).",
  unexpected_response_error: "Unexpected response error from the server."
});
var LogtoError = class extends Error {
  constructor(code, data) {
    super(logtoErrorCodes[code]);
    this.code = code;
    this.data = data;
  }
};
var isLogtoRequestError = (data) => {
  if (!isArbitraryObject(data)) {
    return false;
  }
  return typeof data.code === "string" && typeof data.message === "string";
};
var LogtoRequestError = class extends Error {
  constructor(code, message2) {
    super(message2);
    this.code = code;
  }
};
var OidcError = class {
  constructor(error, errorDescription) {
    this.error = error;
    this.errorDescription = errorDescription;
  }
};

// node_modules/@logto/js/lib/utils/callback-uri.js
var parseUriParameters = (uri) => {
  const [, queryString = ""] = uri.split("?");
  return new URLSearchParams(queryString);
};
var verifyAndParseCodeFromCallbackUri = (callbackUri, redirectUri, state) => {
  if (!callbackUri.startsWith(redirectUri)) {
    throw new LogtoError("callback_uri_verification.redirect_uri_mismatched");
  }
  const uriParameters = parseUriParameters(callbackUri);
  const error = conditional(uriParameters.get(QueryKey.Error));
  const errorDescription = conditional(uriParameters.get(QueryKey.ErrorDescription));
  if (error) {
    throw new LogtoError("callback_uri_verification.error_found", new OidcError(error, errorDescription));
  }
  const stateFromCallbackUri = uriParameters.get(QueryKey.State);
  if (!stateFromCallbackUri) {
    throw new LogtoError("callback_uri_verification.missing_state");
  }
  if (stateFromCallbackUri !== state) {
    throw new LogtoError("callback_uri_verification.state_mismatched");
  }
  const code = uriParameters.get(QueryKey.Code);
  if (!code) {
    throw new LogtoError("callback_uri_verification.missing_code");
  }
  return code;
};

// node_modules/@logto/js/lib/utils/id-token.js
var issuedAtTimeTolerance = 300;
function assertIdTokenClaims(data) {
  if (!isArbitraryObject(data)) {
    throw new TypeError("IdToken is expected to be an object");
  }
  for (const key of ["iss", "sub", "aud"]) {
    if (typeof data[key] !== "string") {
      throw new TypeError(`At path: IdToken.${key}: expected a string`);
    }
  }
  for (const key of ["exp", "iat"]) {
    if (typeof data[key] !== "number") {
      throw new TypeError(`At path: IdToken.${key}: expected a number`);
    }
  }
  for (const key of ["at_hash", "name", "username", "picture", "email", "phone_number"]) {
    if (data[key] === void 0) {
      continue;
    }
    if (typeof data[key] !== "string" && data[key] !== null) {
      throw new TypeError(`At path: IdToken.${key}: expected null or a string`);
    }
  }
  for (const key of ["email_verified", "phone_number_verified"]) {
    if (data[key] === void 0) {
      continue;
    }
    if (typeof data[key] !== "boolean") {
      throw new TypeError(`At path: IdToken.${key}: expected a boolean`);
    }
  }
}
var verifyIdToken = async (idToken, clientId, issuer, jwks) => {
  const result = await jwtVerify(idToken, jwks, { audience: clientId, issuer });
  if (Math.abs((result.payload.iat ?? 0) - Date.now() / 1e3) > issuedAtTimeTolerance) {
    throw new LogtoError("id_token.invalid_iat");
  }
};
var decodeIdToken = (token) => {
  const { 1: encodedPayload } = token.split(".");
  if (!encodedPayload) {
    throw new LogtoError("id_token.invalid_token");
  }
  const json = urlSafeBase64.decode(encodedPayload);
  const idTokenClaims2 = JSON.parse(json);
  assertIdTokenClaims(idTokenClaims2);
  return idTokenClaims2;
};

// node_modules/@logto/js/lib/utils/access-token.js
function assertAccessTokenClaims(data) {
  if (!isArbitraryObject(data)) {
    throw new TypeError("AccessToken is expected to be an object");
  }
  for (const key of ["jti", "iss", "sub", "aud", "client_id", "scope"]) {
    if (data[key] === void 0) {
      continue;
    }
    if (typeof data[key] !== "string" && data[key] !== null) {
      throw new TypeError(`At path: AccessToken.${key}: expected null or a string`);
    }
  }
  for (const key of ["exp", "iat"]) {
    if (data[key] === void 0) {
      continue;
    }
    if (typeof data[key] !== "number" && data[key] !== null) {
      throw new TypeError(`At path: AccessToken.${key}: expected null or a number`);
    }
  }
}
var decodeAccessToken = (accessToken) => {
  const { 1: encodedPayload } = accessToken.split(".");
  if (!encodedPayload) {
    return {};
  }
  const json = urlSafeBase64.decode(encodedPayload);
  const accessTokenClaims = JSON.parse(json);
  assertAccessTokenClaims(accessTokenClaims);
  return accessTokenClaims;
};

// node_modules/@logto/client/lib/adapter/types.js
var PersistKey;
(function(PersistKey2) {
  PersistKey2["IdToken"] = "idToken";
  PersistKey2["RefreshToken"] = "refreshToken";
  PersistKey2["AccessToken"] = "accessToken";
  PersistKey2["SignInSession"] = "signInSession";
})(PersistKey || (PersistKey = {}));
var CacheKey;
(function(CacheKey2) {
  CacheKey2["OpenidConfig"] = "openidConfiguration";
  CacheKey2["Jwks"] = "jwks";
})(CacheKey || (CacheKey = {}));

// node_modules/@logto/client/lib/adapter/index.js
var ClientAdapterInstance = class {
  /* END OF IMPLEMENTATION */
  constructor(adapter) {
    Object.assign(this, adapter);
  }
  async setStorageItem(key, value) {
    if (!value) {
      await this.storage.removeItem(key);
      return;
    }
    await this.storage.setItem(key, value);
  }
  /**
   * Try to get the string value from the cache and parse as JSON.
   * Return the parsed value if it is an object, return `undefined` otherwise.
   *
   * @param key The cache key to get value from.
   */
  async getCachedObject(key) {
    const cached = await trySafe(async () => {
      var _a2;
      const data = await ((_a2 = this.unstable_cache) == null ? void 0 : _a2.getItem(key));
      return conditional(data && JSON.parse(data));
    });
    if (cached && typeof cached === "object") {
      return cached;
    }
  }
  /**
   * Try to get the value from the cache first, if it doesn't exist in cache,
   * run the getter function and store the result into cache.
   *
   * @param key The cache key to get value from.
   */
  async getWithCache(key, getter) {
    var _a2;
    const cached = await this.getCachedObject(key);
    if (cached) {
      return cached;
    }
    const result = await getter();
    await ((_a2 = this.unstable_cache) == null ? void 0 : _a2.setItem(key, JSON.stringify(result)));
    return result;
  }
};

// node_modules/@logto/client/lib/errors.js
var logtoClientErrorCodes = Object.freeze({
  "sign_in_session.invalid": "Invalid sign-in session.",
  "sign_in_session.not_found": "Sign-in session not found.",
  not_authenticated: "Not authenticated.",
  fetch_user_info_failed: "Unable to fetch user info. The access token may be invalid.",
  user_cancelled: "The user cancelled the action.",
  missing_scope_organizations: `The \`${UserScope.Organizations}\` scope is required`
});
var LogtoClientError = class extends Error {
  constructor(code, data) {
    super(logtoClientErrorCodes[code]);
    this.name = "LogtoClientError";
    this.code = code;
    this.data = data;
  }
};

// node_modules/@logto/client/lib/remote-jwk-set.js
function isJwkSetLike(jwkSet) {
  return Boolean(jwkSet && typeof jwkSet === "object" && "keys" in jwkSet && Array.isArray(jwkSet.keys) && jwkSet.keys.every((element) => isObject(element)));
}
var _load, load_fn, _getLocalKey, getLocalKey_fn;
var CachedRemoteJwkSet = class {
  constructor(url, adapter) {
    __privateAdd(this, _load);
    __privateAdd(this, _getLocalKey);
    this.url = url;
    this.adapter = adapter;
    if (!adapter.unstable_cache) {
      throw new Error("No cache found in the client adapter. Use `createRemoteJWKSet()` from 'jose' instead.");
    }
  }
  async getKey(...args) {
    if (!this.jwkSet) {
      this.jwkSet = await __privateMethod(this, _load, load_fn).call(this);
    }
    try {
      return await __privateMethod(this, _getLocalKey, getLocalKey_fn).call(this, ...args);
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "ERR_JWKS_NO_MATCHING_KEY") {
        this.jwkSet = await __privateMethod(this, _load, load_fn).call(this);
        return __privateMethod(this, _getLocalKey, getLocalKey_fn).call(this, ...args);
      }
      throw error;
    }
  }
};
_load = new WeakSet();
load_fn = async function() {
  return this.adapter.getWithCache(CacheKey.Jwks, async () => {
    const controller = new AbortController();
    const response = await fetch(this.url, { signal: controller.signal, redirect: "manual" });
    if (!response.ok) {
      throw new Error("Expected OK from the JSON Web Key Set HTTP response");
    }
    const json = await response.json();
    if (!isJwkSetLike(json)) {
      throw new Error("JSON Web Key Set malformed");
    }
    return json;
  });
};
_getLocalKey = new WeakSet();
getLocalKey_fn = async function(...args) {
  if (!this.jwkSet) {
    throw new Error("No local JWK Set found.");
  }
  return createLocalJWKSet(this.jwkSet)(...args);
};

// node_modules/@logto/client/lib/types/index.js
var normalizeLogtoConfig = (config) => {
  const { prompt = Prompt.Consent, scopes = [], resources, ...rest } = config;
  return {
    ...rest,
    prompt,
    scopes: withDefaultScopes(scopes).split(" "),
    resources: scopes.includes(UserScope.Organizations) ? deduplicate([...resources ?? [], ReservedResource.Organization]) : resources
  };
};
var isLogtoSignInSessionItem = (data) => {
  if (!isArbitraryObject(data)) {
    return false;
  }
  return ["redirectUri", "codeVerifier", "state"].every((key) => typeof data[key] === "string");
};
var isLogtoAccessTokenMap = (data) => {
  if (!isArbitraryObject(data)) {
    return false;
  }
  return Object.values(data).every((value) => {
    if (!isArbitraryObject(value)) {
      return false;
    }
    return typeof value.token === "string" && typeof value.scope === "string" && typeof value.expiresAt === "number";
  });
};

// node_modules/@logto/client/lib/utils/index.js
var buildAccessTokenKey = (resource = "", organizationId, scopes = []) => `${scopes.slice().sort().join(" ")}@${resource}${conditionalString(organizationId && `#${organizationId}`)}`;
var getDiscoveryEndpoint = (endpoint) => new URL(discoveryPath, endpoint).toString();

// node_modules/@logto/client/lib/utils/memoize.js
function memoize(run) {
  const promiseCache = /* @__PURE__ */ new Map();
  const memoized = async function(...args) {
    const promiseKey = args[0];
    const cachedPromise = promiseCache.get(promiseKey);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = (async () => {
      try {
        return await run.apply(this, args);
      } finally {
        promiseCache.delete(promiseKey);
      }
    })();
    promiseCache.set(promiseKey, promise);
    return promise;
  };
  return memoized;
}

// node_modules/@logto/client/lib/utils/once.js
function once2(function_) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = function_.apply(this, args);
    }
    return result;
  };
}

// node_modules/@logto/client/lib/utils/requester.js
var createRequester = (fetchFunction) => {
  return async (...args) => {
    const response = await fetchFunction(...args);
    if (!response.ok) {
      const responseJson = await response.json();
      if (!isLogtoRequestError(responseJson)) {
        throw new LogtoError("unexpected_response_error", responseJson);
      }
      const { code, message: message2 } = responseJson;
      throw new LogtoRequestError(code, message2);
    }
    return response.json();
  };
};

// node_modules/@logto/client/lib/index.js
var _getOidcConfig, getOidcConfig_fn, _getJwtVerifyGetKey, getJwtVerifyGetKey_fn, _getAccessToken, getAccessToken_fn, _getOrganizationToken, getOrganizationToken_fn, _handleSignInCallback, handleSignInCallback_fn;
var LogtoClient = class {
  constructor(logtoConfig, adapter) {
    __privateAdd(this, _getOidcConfig);
    __privateAdd(this, _getJwtVerifyGetKey);
    __privateAdd(this, _getAccessToken);
    __privateAdd(this, _getOrganizationToken);
    __privateAdd(this, _handleSignInCallback);
    this.getOidcConfig = once2(__privateMethod(this, _getOidcConfig, getOidcConfig_fn));
    this.getAccessToken = memoize(__privateMethod(this, _getAccessToken, getAccessToken_fn));
    this.getOrganizationToken = memoize(__privateMethod(this, _getOrganizationToken, getOrganizationToken_fn));
    this.handleSignInCallback = memoize(__privateMethod(this, _handleSignInCallback, handleSignInCallback_fn));
    this.getJwtVerifyGetKey = once2(__privateMethod(this, _getJwtVerifyGetKey, getJwtVerifyGetKey_fn));
    this.accessTokenMap = /* @__PURE__ */ new Map();
    this.logtoConfig = normalizeLogtoConfig(logtoConfig);
    this.adapter = new ClientAdapterInstance(adapter);
    void this.loadAccessTokenMap();
  }
  /**
   * Check if the user is authenticated by checking if the ID token exists.
   */
  async isAuthenticated() {
    return Boolean(await this.getIdToken());
  }
  /**
   * Get the Refresh Token from the storage.
   */
  async getRefreshToken() {
    return this.adapter.storage.getItem("refreshToken");
  }
  /**
   * Get the ID Token from the storage. If you want to get the ID Token claims,
   * use {@link getIdTokenClaims} instead.
   */
  async getIdToken() {
    return this.adapter.storage.getItem("idToken");
  }
  /**
   * Get the ID Token claims.
   */
  async getIdTokenClaims() {
    const idToken = await this.getIdToken();
    if (!idToken) {
      throw new LogtoClientError("not_authenticated");
    }
    return decodeIdToken(idToken);
  }
  /**
   * Get the access token claims for the specified resource.
   *
   * @param resource The resource that the access token is granted for. If not
   * specified, the access token will be used for OpenID Connect or the default
   * resource, as specified in the Logto Console.
   */
  async getAccessTokenClaims(resource) {
    const accessToken = await this.getAccessToken(resource);
    return decodeAccessToken(accessToken);
  }
  /**
   * Get the organization token claims for the specified organization.
   *
   * @param organizationId The ID of the organization that the access token is granted for.
   */
  async getOrganizationTokenClaims(organizationId) {
    const accessToken = await this.getOrganizationToken(organizationId);
    return decodeAccessToken(accessToken);
  }
  /**
   * Get the user information from the Userinfo Endpoint.
   *
   * Note the Userinfo Endpoint will return more claims than the ID Token. See
   * {@link https://docs.logto.io/docs/recipes/integrate-logto/vanilla-js/#fetch-user-information | Fetch user information}
   * for more information.
   *
   * @returns The user information.
   * @throws LogtoClientError if the user is not authenticated.
   */
  async fetchUserInfo() {
    const { userinfoEndpoint } = await this.getOidcConfig();
    const accessToken = await this.getAccessToken();
    if (!accessToken) {
      throw new LogtoClientError("fetch_user_info_failed");
    }
    return fetchUserInfo(userinfoEndpoint, accessToken, this.adapter.requester);
  }
  /**
   * Start the sign-in flow with the specified redirect URI. The URI must be
   * registered in the Logto Console.
   *
   * The user will be redirected to that URI after the sign-in flow is completed,
   * and the client will be able to get the authorization code from the URI.
   * To fetch the tokens from the authorization code, use {@link handleSignInCallback}
   * after the user is redirected in the callback URI.
   *
   * @param redirectUri The redirect URI that the user will be redirected to after the sign-in flow is completed.
   * @param interactionMode The interaction mode to be used for the authorization request. Note it's not
   * a part of the OIDC standard, but a Logto-specific extension. Defaults to `signIn`.
   *
   * @see {@link https://docs.logto.io/docs/recipes/integrate-logto/vanilla-js/#sign-in | Sign in} for more information.
   * @see {@link InteractionMode}
   */
  async signIn(redirectUri, interactionMode) {
    const { appId: clientId, prompt, resources, scopes } = this.logtoConfig;
    const { authorizationEndpoint } = await this.getOidcConfig();
    const codeVerifier = this.adapter.generateCodeVerifier();
    const codeChallenge = await this.adapter.generateCodeChallenge(codeVerifier);
    const state = this.adapter.generateState();
    const signInUri = generateSignInUri({
      authorizationEndpoint,
      clientId,
      redirectUri,
      codeChallenge,
      state,
      scopes,
      resources,
      prompt,
      interactionMode
    });
    await Promise.all([
      this.setSignInSession({ redirectUri, codeVerifier, state }),
      this.setRefreshToken(null),
      this.setIdToken(null)
    ]);
    await this.adapter.navigate(signInUri);
  }
  /**
   * Check if the user is redirected from the sign-in page by checking if the
   * current URL matches the redirect URI in the sign-in session.
   *
   * If there's no sign-in session, it will return `false`.
   *
   * @param url The current URL.
   */
  async isSignInRedirected(url) {
    const signInSession = await this.getSignInSession();
    if (!signInSession) {
      return false;
    }
    const { redirectUri } = signInSession;
    const { origin, pathname } = new URL(url);
    return `${origin}${pathname}` === redirectUri;
  }
  /**
   * Start the sign-out flow with the specified redirect URI. The URI must be
   * registered in the Logto Console.
   *
   * It will also revoke all the tokens and clean up the storage.
   *
   * The user will be redirected that URI after the sign-out flow is completed.
   * If the `postLogoutRedirectUri` is not specified, the user will be redirected
   * to a default page.
   */
  async signOut(postLogoutRedirectUri) {
    const { appId: clientId } = this.logtoConfig;
    const { endSessionEndpoint, revocationEndpoint } = await this.getOidcConfig();
    const refreshToken = await this.getRefreshToken();
    if (refreshToken) {
      try {
        await revoke(revocationEndpoint, clientId, refreshToken, this.adapter.requester);
      } catch {
      }
    }
    const url = generateSignOutUri({
      endSessionEndpoint,
      postLogoutRedirectUri,
      clientId
    });
    this.accessTokenMap.clear();
    await Promise.all([
      this.setRefreshToken(null),
      this.setIdToken(null),
      this.adapter.storage.removeItem("accessToken")
    ]);
    await this.adapter.navigate(url);
  }
  async getSignInSession() {
    const jsonItem = await this.adapter.storage.getItem("signInSession");
    if (!jsonItem) {
      return null;
    }
    const item = JSON.parse(jsonItem);
    if (!isLogtoSignInSessionItem(item)) {
      throw new LogtoClientError("sign_in_session.invalid");
    }
    return item;
  }
  async setSignInSession(value) {
    return this.adapter.setStorageItem(PersistKey.SignInSession, value && JSON.stringify(value));
  }
  async setIdToken(value) {
    return this.adapter.setStorageItem(PersistKey.IdToken, value);
  }
  async setRefreshToken(value) {
    return this.adapter.setStorageItem(PersistKey.RefreshToken, value);
  }
  async getAccessTokenByRefreshToken(resource, organizationId) {
    const currentRefreshToken = await this.getRefreshToken();
    if (!currentRefreshToken) {
      throw new LogtoClientError("not_authenticated");
    }
    const accessTokenKey = buildAccessTokenKey(resource, organizationId);
    const { appId: clientId } = this.logtoConfig;
    const { tokenEndpoint } = await this.getOidcConfig();
    const requestedAt = Math.round(Date.now() / 1e3);
    const { accessToken, refreshToken, idToken, scope, expiresIn } = await fetchTokenByRefreshToken({
      clientId,
      tokenEndpoint,
      refreshToken: currentRefreshToken,
      resource,
      organizationId
    }, this.adapter.requester);
    this.accessTokenMap.set(accessTokenKey, {
      token: accessToken,
      scope,
      /** The `expiresAt` variable provides an approximate estimation of the actual `exp` property
       * in the token claims. It is utilized by the client to determine if the cached access token
       * has expired and when a new access token should be requested.
       */
      expiresAt: requestedAt + expiresIn
    });
    await this.saveAccessTokenMap();
    if (refreshToken) {
      await this.setRefreshToken(refreshToken);
    }
    if (idToken) {
      await this.verifyIdToken(idToken);
      await this.setIdToken(idToken);
    }
    return accessToken;
  }
  async verifyIdToken(idToken) {
    const { appId } = this.logtoConfig;
    const { issuer } = await this.getOidcConfig();
    const jwtVerifyGetKey = await this.getJwtVerifyGetKey();
    await verifyIdToken(idToken, appId, issuer, jwtVerifyGetKey);
  }
  async saveAccessTokenMap() {
    const data = {};
    for (const [key, accessToken] of this.accessTokenMap.entries()) {
      data[key] = accessToken;
    }
    await this.adapter.storage.setItem("accessToken", JSON.stringify(data));
  }
  async loadAccessTokenMap() {
    const raw = await this.adapter.storage.getItem("accessToken");
    if (!raw) {
      return;
    }
    try {
      const json = JSON.parse(raw);
      if (!isLogtoAccessTokenMap(json)) {
        return;
      }
      this.accessTokenMap.clear();
      for (const [key, accessToken] of Object.entries(json)) {
        this.accessTokenMap.set(key, accessToken);
      }
    } catch (error) {
      console.warn(error);
    }
  }
};
_getOidcConfig = new WeakSet();
getOidcConfig_fn = async function() {
  return this.adapter.getWithCache(CacheKey.OpenidConfig, async () => {
    return fetchOidcConfig(getDiscoveryEndpoint(this.logtoConfig.endpoint), this.adapter.requester);
  });
};
_getJwtVerifyGetKey = new WeakSet();
getJwtVerifyGetKey_fn = async function() {
  const { jwksUri } = await this.getOidcConfig();
  if (!this.adapter.unstable_cache) {
    return createRemoteJWKSet(new URL(jwksUri));
  }
  const cachedJwkSet = new CachedRemoteJwkSet(new URL(jwksUri), this.adapter);
  return async (...args) => cachedJwkSet.getKey(...args);
};
_getAccessToken = new WeakSet();
getAccessToken_fn = async function(resource, organizationId) {
  if (!await this.isAuthenticated()) {
    throw new LogtoClientError("not_authenticated");
  }
  const accessTokenKey = buildAccessTokenKey(resource, organizationId);
  const accessToken = this.accessTokenMap.get(accessTokenKey);
  if (accessToken && accessToken.expiresAt > Date.now() / 1e3) {
    return accessToken.token;
  }
  if (accessToken) {
    this.accessTokenMap.delete(accessTokenKey);
  }
  return this.getAccessTokenByRefreshToken(resource, organizationId);
};
_getOrganizationToken = new WeakSet();
getOrganizationToken_fn = async function(organizationId) {
  var _a2;
  if (!((_a2 = this.logtoConfig.scopes) == null ? void 0 : _a2.includes(UserScope.Organizations))) {
    throw new LogtoClientError("missing_scope_organizations");
  }
  return this.getAccessToken(void 0, organizationId);
};
_handleSignInCallback = new WeakSet();
handleSignInCallback_fn = async function(callbackUri) {
  const { requester } = this.adapter;
  const signInSession = await this.getSignInSession();
  if (!signInSession) {
    throw new LogtoClientError("sign_in_session.not_found");
  }
  const { redirectUri, state, codeVerifier } = signInSession;
  const code = verifyAndParseCodeFromCallbackUri(callbackUri, redirectUri, state);
  const accessTokenKey = buildAccessTokenKey();
  const { appId: clientId } = this.logtoConfig;
  const { tokenEndpoint } = await this.getOidcConfig();
  const requestedAt = Math.round(Date.now() / 1e3);
  const { idToken, refreshToken, accessToken, scope, expiresIn } = await fetchTokenByAuthorizationCode({
    clientId,
    tokenEndpoint,
    redirectUri,
    codeVerifier,
    code
  }, requester);
  await this.verifyIdToken(idToken);
  await this.setRefreshToken(refreshToken ?? null);
  await this.setIdToken(idToken);
  this.accessTokenMap.set(accessTokenKey, {
    token: accessToken,
    scope,
    /** The `expiresAt` variable provides an approximate estimation of the actual `exp` property
     * in the token claims. It is utilized by the client to determine if the cached access token
     * has expired and when a new access token should be requested.
     */
    expiresAt: requestedAt + expiresIn
  });
  await this.saveAccessTokenMap();
  await this.setSignInSession(null);
};

// node_modules/@logto/browser/lib/cache.js
var keyPrefix = `logto_cache`;
var CacheStorage = class {
  constructor(appId) {
    this.appId = appId;
  }
  getKey(item) {
    if (item === void 0) {
      return `${keyPrefix}:${this.appId}`;
    }
    return `${keyPrefix}:${this.appId}:${item}`;
  }
  async getItem(key) {
    return sessionStorage.getItem(this.getKey(key));
  }
  async setItem(key, value) {
    sessionStorage.setItem(this.getKey(key), value);
  }
  async removeItem(key) {
    sessionStorage.removeItem(`${this.getKey(key)}`);
  }
};

// node_modules/@logto/browser/lib/storage.js
var keyPrefix2 = `logto`;
var BrowserStorage = class {
  constructor(appId) {
    this.appId = appId;
  }
  getKey(item) {
    if (item === void 0) {
      return `${keyPrefix2}:${this.appId}`;
    }
    return `${keyPrefix2}:${this.appId}:${item}`;
  }
  async getItem(key) {
    if (key === "signInSession") {
      return sessionStorage.getItem(this.getKey(key)) ?? sessionStorage.getItem(this.getKey());
    }
    return localStorage.getItem(this.getKey(key));
  }
  async setItem(key, value) {
    if (key === "signInSession") {
      sessionStorage.setItem(this.getKey(key), value);
      return;
    }
    localStorage.setItem(this.getKey(key), value);
  }
  async removeItem(key) {
    if (key === "signInSession") {
      sessionStorage.removeItem(this.getKey(key));
      return;
    }
    localStorage.removeItem(this.getKey(key));
  }
};

// node_modules/js-base64/base64.mjs
var _hasbtoa = typeof btoa === "function";
var _hasBuffer = typeof Buffer === "function";
var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var b64chs = Array.prototype.slice.call(b64ch);
var b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => tab[c] = i);
  return tab;
})(b64chs);
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var btoaPolyfill = (bin) => {
  let u32, c0, c1, c2, asc = "";
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
      throw new TypeError("invalid character found");
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
  const maxargs = 4096;
  let strs = [];
  for (let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(""));
};
var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);

// node_modules/@logto/browser/lib/utils/generators.js
var generateRandomString = (length = 64) => fromUint8Array(crypto.getRandomValues(new Uint8Array(length)), true);
var generateState = () => generateRandomString();
var generateCodeVerifier = () => generateRandomString();
var generateCodeChallenge = async (codeVerifier) => {
  if (crypto.subtle === void 0) {
    throw new LogtoError("crypto_subtle_unavailable");
  }
  const encodedCodeVerifier = new TextEncoder().encode(codeVerifier);
  const codeChallenge = new Uint8Array(await crypto.subtle.digest("SHA-256", encodedCodeVerifier));
  return fromUint8Array(codeChallenge, true);
};

// node_modules/@logto/browser/lib/index.js
var navigate = (url) => {
  window.location.assign(url);
};
var LogtoClient2 = class extends LogtoClient {
  /**
   * @param config The configuration object for the client.
   * @param [unstable_enableCache=false] Whether to enable cache for well-known data.
   * Use sessionStorage by default.
   */
  constructor(config, unstable_enableCache = false) {
    const requester = createRequester(fetch);
    super(config, {
      requester,
      navigate,
      storage: new BrowserStorage(config.appId),
      unstable_cache: conditional(unstable_enableCache && new CacheStorage(config.appId)),
      generateCodeChallenge,
      generateCodeVerifier,
      generateState
    });
  }
};

// node_modules/@logto/vue/lib/consts.js
var logtoInjectionKey = "@logto/vue";
var contextInjectionKey = "@logto/vue:context";

// node_modules/@logto/vue/lib/context.js
var createContext = (client) => {
  const context = toRefs(reactive({
    logtoClient: client,
    isAuthenticated: false,
    loadingCount: 1,
    error: void 0
  }));
  const { isAuthenticated, loadingCount, error } = context;
  const isLoading = computed(() => loadingCount.value > 0);
  const setError = (_error, fallbackErrorMessage) => {
    if (_error instanceof Error) {
      error.value = _error;
    } else if (fallbackErrorMessage) {
      error.value = new Error(fallbackErrorMessage);
    }
    console.error(error);
  };
  const setLoading = (isLoading2) => {
    if (isLoading2) {
      loadingCount.value += 1;
    } else {
      loadingCount.value = Math.max(0, loadingCount.value - 1);
    }
  };
  const setIsAuthenticated = (_isAuthenticated) => {
    isAuthenticated.value = _isAuthenticated;
  };
  (async () => {
    const isAuthenticated2 = await client.isAuthenticated();
    setIsAuthenticated(isAuthenticated2);
    setLoading(false);
  })();
  return { ...context, isLoading, setError, setLoading, setIsAuthenticated };
};
var throwContextError = () => {
  throw new Error("Must install Logto plugin first.");
};

// node_modules/@logto/vue/lib/plugin.js
var createPluginMethods = (context) => {
  const { logtoClient, setLoading, setError, setIsAuthenticated } = context;
  const client = logtoClient.value ?? throwContextError();
  const proxy = (run, resetLoadingState = true) => {
    return async (...args) => {
      try {
        setLoading(true);
        return await run(...args);
      } catch (error) {
        setError(error, `Unexpected error occurred while calling ${run.name}.`);
      } finally {
        if (resetLoadingState) {
          setLoading(false);
        }
      }
    };
  };
  const methods = {
    getRefreshToken: proxy(client.getRefreshToken.bind(client)),
    getAccessToken: proxy(client.getAccessToken.bind(client)),
    getAccessTokenClaims: proxy(client.getAccessTokenClaims.bind(client)),
    getOrganizationToken: proxy(client.getOrganizationToken.bind(client)),
    getOrganizationTokenClaims: proxy(client.getOrganizationTokenClaims.bind(client)),
    getIdToken: proxy(client.getIdToken.bind(client)),
    getIdTokenClaims: proxy(client.getIdTokenClaims.bind(client)),
    signIn: proxy(client.signIn.bind(client), false),
    // We deliberately do NOT set isAuthenticated to false in the function below, because the app state
    // may change immediately even before navigating to the oidc end session endpoint, which might cause
    // rendering problems.
    // Moreover, since the location will be redirected, the isAuthenticated state will not matter any more.
    signOut: proxy(client.signOut.bind(client)),
    fetchUserInfo: proxy(client.fetchUserInfo.bind(client))
  };
  const handleSignInCallback = async (callbackUri, callbackFunction) => {
    if (!logtoClient.value) {
      return throwContextError();
    }
    try {
      setLoading(true);
      await logtoClient.value.handleSignInCallback(callbackUri);
      setIsAuthenticated(true);
      callbackFunction == null ? void 0 : callbackFunction();
    } catch (error) {
      setError(error, "Unexpected error occurred while handling sign in callback.");
    } finally {
      setLoading(false);
    }
  };
  return {
    ...methods,
    handleSignInCallback
  };
};

// node_modules/@logto/vue/lib/index.js
var createLogto = {
  install(app, config) {
    const client = new LogtoClient2(config);
    const context = createContext(client);
    const pluginMethods = createPluginMethods(context);
    const { isAuthenticated, isLoading, error } = context;
    app.provide(contextInjectionKey, context);
    app.provide(logtoInjectionKey, {
      isAuthenticated: readonly(isAuthenticated),
      isLoading: readonly(isLoading),
      error: readonly(error),
      ...pluginMethods
    });
  }
};
var useLogto = () => {
  const logto = inject(logtoInjectionKey);
  if (!logto) {
    return throwContextError();
  }
  return logto;
};
var useHandleSignInCallback = (callback) => {
  const context = inject(contextInjectionKey);
  if (!context) {
    return throwContextError();
  }
  const { isAuthenticated, isLoading, logtoClient, error } = context;
  const { handleSignInCallback } = createPluginMethods(context);
  watchEffect(async () => {
    if (!logtoClient.value) {
      return;
    }
    const currentPageUrl = window.location.href;
    const isAuthenticated2 = await logtoClient.value.isAuthenticated();
    const isRedirected = await logtoClient.value.isSignInRedirected(currentPageUrl);
    if (!isAuthenticated2 && isRedirected) {
      void handleSignInCallback(currentPageUrl, callback);
    }
  });
  return {
    isLoading: readonly(isLoading),
    isAuthenticated: readonly(isAuthenticated),
    error: readonly(error)
  };
};
export {
  LogtoClientError,
  LogtoError,
  LogtoRequestError,
  OidcError,
  PersistKey,
  Prompt,
  ReservedScope,
  UserScope,
  buildOrganizationUrn,
  createLogto,
  getOrganizationIdFromUrn,
  organizationUrnPrefix,
  useHandleSignInCallback,
  useLogto
};
/*! Bundled license information:

@silverhand/essentials/lib/utilities/assertions.js:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=@logto_vue.js.map
