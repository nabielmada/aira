(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/_76cb491b._.js", {

"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/regex.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/validate.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$regex$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/regex.js [middleware-edge] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$regex$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/stringify.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "unsafeStringify": (()=>unsafeStringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/validate.js [middleware-edge] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    var uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/stringify.js [middleware-edge] (ecmascript) <export default as stringify>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "stringify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/stringify.js [middleware-edge] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/rng.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
__turbopack_context__.s({
    "default": (()=>rng)
});
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
    }
    return getRandomValues(rnds8);
}
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/v7.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/rng.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/stringify.js [middleware-edge] (ecmascript)");
;
;
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */ var _seqLow = null;
var _seqHigh = null;
var _msecs = 0;
function v7(options, buf, offset) {
    options = options || {};
    // initialize buffer and pointer
    var i = buf && offset || 0;
    var b = buf || new Uint8Array(16);
    // rnds is Uint8Array(16) filled with random bytes
    var rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])();
    // milliseconds since unix epoch, 1970-01-01 00:00
    var msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // seq is user provided 31 bit counter
    var seq = options.seq !== undefined ? options.seq : null;
    // initialize local seq high/low parts
    var seqHigh = _seqHigh;
    var seqLow = _seqLow;
    // check if clock has advanced and user has not provided msecs
    if (msecs > _msecs && options.msecs === undefined) {
        _msecs = msecs;
        // unless user provided seq, reset seq parts
        if (seq !== null) {
            seqHigh = null;
            seqLow = null;
        }
    }
    // if we have a user provided seq
    if (seq !== null) {
        // trim provided seq to 31 bits of value, avoiding overflow
        if (seq > 0x7fffffff) {
            seq = 0x7fffffff;
        }
        // split provided seq into high/low parts
        seqHigh = seq >>> 19 & 0xfff;
        seqLow = seq & 0x7ffff;
    }
    // randomly initialize seq
    if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 0x7f;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 0x3f; // pad for var
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
    }
    // increment seq if within msecs window
    if (msecs + 10000 > _msecs && seq === null) {
        if (++seqLow > 0x7ffff) {
            seqLow = 0;
            if (++seqHigh > 0xfff) {
                seqHigh = 0;
                // increment internal _msecs. this allows us to continue incrementing
                // while staying monotonic. Note, once we hit 10k milliseconds beyond system
                // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
                _msecs++;
            }
        }
    } else {
        // resetting; we have advanced more than
        // 10k milliseconds beyond system clock
        _msecs = msecs;
    }
    _seqHigh = seqHigh;
    _seqLow = seqLow;
    // [bytes 0-5] 48 bits of local timestamp
    b[i++] = _msecs / 0x10000000000 & 0xff;
    b[i++] = _msecs / 0x100000000 & 0xff;
    b[i++] = _msecs / 0x1000000 & 0xff;
    b[i++] = _msecs / 0x10000 & 0xff;
    b[i++] = _msecs / 0x100 & 0xff;
    b[i++] = _msecs & 0xff;
    // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
    b[i++] = seqHigh >>> 4 & 0x0f | 0x70;
    // [byte 7] remaining 8 bits of seq_hi
    b[i++] = seqHigh & 0xff;
    // [byte 8] - variant (2 bits), first 6 bits seq_low
    b[i++] = seqLow >>> 13 & 0x3f | 0x80;
    // [byte 9] 8 bits seq_low
    b[i++] = seqLow >>> 5 & 0xff;
    // [byte 10] remaining 5 bits seq_low, 3 bits random
    b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;
    // [bytes 11-15] always random
    b[i++] = rnds[11];
    b[i++] = rnds[12];
    b[i++] = rnds[13];
    b[i++] = rnds[14];
    b[i++] = rnds[15];
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v7;
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/v7.js [middleware-edge] (ecmascript) <export default as v7>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "v7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v7$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v7$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/v7.js [middleware-edge] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/typeid-js/dist/index.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/typeid.ts
__turbopack_context__.s({
    "TypeID": (()=>TypeID),
    "fromString": (()=>fromString),
    "fromUUID": (()=>fromUUID),
    "fromUUIDBytes": (()=>fromUUIDBytes),
    "getSuffix": (()=>getSuffix),
    "getType": (()=>getType),
    "parseTypeId": (()=>parseTypeId),
    "toUUID": (()=>toUUID),
    "toUUIDBytes": (()=>toUUIDBytes),
    "typeid": (()=>typeid),
    "typeidUnboxed": (()=>typeidUnboxed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/stringify.js [middleware-edge] (ecmascript) <export default as stringify>");
// src/unboxed/typeid.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v7$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__v7$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/typeid-js/node_modules/uuid/dist/esm-browser/v7.js [middleware-edge] (ecmascript) <export default as v7>");
;
// src/parse_uuid.ts
function parseUUID(uuid) {
    let v;
    const arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
}
// src/base32.ts
var alphabet = "0123456789abcdefghjkmnpqrstvwxyz";
var dec = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    255,
    18,
    19,
    255,
    20,
    21,
    255,
    22,
    23,
    24,
    25,
    26,
    255,
    27,
    28,
    29,
    30,
    31,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255
]);
function encode(src) {
    const dst = new Array(26).fill("");
    if (src.length !== 16) {
        throw new Error(`Invalid length. Expected 16 bytes, got ${src.length}. Input: ${src}`);
    }
    dst[0] = alphabet[(src[0] & 224) >> 5];
    dst[1] = alphabet[src[0] & 31];
    dst[2] = alphabet[(src[1] & 248) >> 3];
    dst[3] = alphabet[(src[1] & 7) << 2 | (src[2] & 192) >> 6];
    dst[4] = alphabet[(src[2] & 62) >> 1];
    dst[5] = alphabet[(src[2] & 1) << 4 | (src[3] & 240) >> 4];
    dst[6] = alphabet[(src[3] & 15) << 1 | (src[4] & 128) >> 7];
    dst[7] = alphabet[(src[4] & 124) >> 2];
    dst[8] = alphabet[(src[4] & 3) << 3 | (src[5] & 224) >> 5];
    dst[9] = alphabet[src[5] & 31];
    dst[10] = alphabet[(src[6] & 248) >> 3];
    dst[11] = alphabet[(src[6] & 7) << 2 | (src[7] & 192) >> 6];
    dst[12] = alphabet[(src[7] & 62) >> 1];
    dst[13] = alphabet[(src[7] & 1) << 4 | (src[8] & 240) >> 4];
    dst[14] = alphabet[(src[8] & 15) << 1 | (src[9] & 128) >> 7];
    dst[15] = alphabet[(src[9] & 124) >> 2];
    dst[16] = alphabet[(src[9] & 3) << 3 | (src[10] & 224) >> 5];
    dst[17] = alphabet[src[10] & 31];
    dst[18] = alphabet[(src[11] & 248) >> 3];
    dst[19] = alphabet[(src[11] & 7) << 2 | (src[12] & 192) >> 6];
    dst[20] = alphabet[(src[12] & 62) >> 1];
    dst[21] = alphabet[(src[12] & 1) << 4 | (src[13] & 240) >> 4];
    dst[22] = alphabet[(src[13] & 15) << 1 | (src[14] & 128) >> 7];
    dst[23] = alphabet[(src[14] & 124) >> 2];
    dst[24] = alphabet[(src[14] & 3) << 3 | (src[15] & 224) >> 5];
    dst[25] = alphabet[src[15] & 31];
    return dst.join("");
}
function decode(s) {
    if (s.length !== 26) {
        throw new Error(`Invalid length. Expected 26 bytes, got ${s.length}. Input: ${s}`);
    }
    const encoder = new TextEncoder();
    const v = encoder.encode(s);
    if (dec[v[0]] === 255 || dec[v[1]] === 255 || dec[v[2]] === 255 || dec[v[3]] === 255 || dec[v[4]] === 255 || dec[v[5]] === 255 || dec[v[6]] === 255 || dec[v[7]] === 255 || dec[v[8]] === 255 || dec[v[9]] === 255 || dec[v[10]] === 255 || dec[v[11]] === 255 || dec[v[12]] === 255 || dec[v[13]] === 255 || dec[v[14]] === 255 || dec[v[15]] === 255 || dec[v[16]] === 255 || dec[v[17]] === 255 || dec[v[18]] === 255 || dec[v[19]] === 255 || dec[v[20]] === 255 || dec[v[21]] === 255 || dec[v[22]] === 255 || dec[v[23]] === 255 || dec[v[24]] === 255 || dec[v[25]] === 255) {
        throw new Error("Invalid base32 character");
    }
    const id = new Uint8Array(16);
    id[0] = dec[v[0]] << 5 | dec[v[1]];
    id[1] = dec[v[2]] << 3 | dec[v[3]] >> 2;
    id[2] = (dec[v[3]] & 3) << 6 | dec[v[4]] << 1 | dec[v[5]] >> 4;
    id[3] = (dec[v[5]] & 15) << 4 | dec[v[6]] >> 1;
    id[4] = (dec[v[6]] & 1) << 7 | dec[v[7]] << 2 | dec[v[8]] >> 3;
    id[5] = (dec[v[8]] & 7) << 5 | dec[v[9]];
    id[6] = dec[v[10]] << 3 | dec[v[11]] >> 2;
    id[7] = (dec[v[11]] & 3) << 6 | dec[v[12]] << 1 | dec[v[13]] >> 4;
    id[8] = (dec[v[13]] & 15) << 4 | dec[v[14]] >> 1;
    id[9] = (dec[v[14]] & 1) << 7 | dec[v[15]] << 2 | dec[v[16]] >> 3;
    id[10] = (dec[v[16]] & 7) << 5 | dec[v[17]];
    id[11] = dec[v[18]] << 3 | dec[v[19]] >> 2;
    id[12] = (dec[v[19]] & 3) << 6 | dec[v[20]] << 1 | dec[v[21]] >> 4;
    id[13] = (dec[v[21]] & 15) << 4 | dec[v[22]] >> 1;
    id[14] = (dec[v[22]] & 1) << 7 | dec[v[23]] << 2 | dec[v[24]] >> 3;
    id[15] = (dec[v[24]] & 7) << 5 | dec[v[25]];
    return id;
}
;
// src/prefix.ts
function isValidPrefix(str) {
    if (str.length > 63) {
        return false;
    }
    let code;
    let i;
    let len;
    for(i = 0, len = str.length; i < len; i += 1){
        code = str.charCodeAt(i);
        const isLowerAtoZ = code > 96 && code < 123;
        const isUnderscore = code === 95;
        if ((i === 0 || i === len - 1) && !isLowerAtoZ) {
            return false;
        }
        if (!(isLowerAtoZ || isUnderscore)) {
            return false;
        }
    }
    return true;
}
// src/unboxed/error.ts
var InvalidPrefixError = class extends Error {
    constructor(prefix){
        super(`Invalid prefix "${prefix}". Must be at most 63 ASCII letters [a-z_]`);
        this.name = "InvalidPrefixError";
    }
};
var PrefixMismatchError = class extends Error {
    constructor(expected, actual){
        super(`Invalid TypeId. Prefix mismatch. Expected ${expected}, got ${actual}`);
        this.name = "PrefixMismatchError";
    }
};
var EmptyPrefixError = class extends Error {
    constructor(typeId){
        super(`Invalid TypeId. Prefix cannot be empty when there's a separator: ${typeId}`);
        this.name = "EmptyPrefixError";
    }
};
var InvalidSuffixLengthError = class extends Error {
    constructor(length){
        super(`Invalid length. Suffix should have 26 characters, got ${length}`);
        this.name = "InvalidSuffixLengthError";
    }
};
var InvalidSuffixCharacterError = class extends Error {
    constructor(firstChar){
        super(`Invalid suffix. First character "${firstChar}" must be in the range [0-7]`);
        this.name = "InvalidSuffixCharacterError";
    }
};
var TypeIDConversionError = class extends Error {
    constructor(actualPrefix, expectedPrefix){
        super(`Cannot convert TypeID of type ${actualPrefix} to type ${expectedPrefix}`);
        this.name = "TypeIDConversionError";
    }
};
// src/unboxed/typeid.ts
function typeidUnboxed(prefix = "", suffix = "") {
    if (!isValidPrefix(prefix)) {
        throw new InvalidPrefixError(prefix);
    }
    let finalSuffix;
    if (suffix) {
        finalSuffix = suffix;
    } else {
        const buffer = new Uint8Array(16);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v7$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__v7$3e$__["v7"])(void 0, buffer);
        finalSuffix = encode(buffer);
    }
    if (finalSuffix.length !== 26) {
        throw new InvalidSuffixLengthError(finalSuffix.length);
    }
    if (finalSuffix[0] > "7") {
        throw new InvalidSuffixCharacterError(finalSuffix[0]);
    }
    decode(finalSuffix);
    if (prefix === "") {
        return finalSuffix;
    } else {
        return `${prefix}_${finalSuffix}`;
    }
}
function fromString(typeId, prefix) {
    let p;
    let s;
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        p = "";
        s = typeId;
    } else {
        p = typeId.substring(0, underscoreIndex);
        s = typeId.substring(underscoreIndex + 1);
        if (!p) {
            throw new EmptyPrefixError(typeId);
        }
    }
    if (!s) {
        throw new InvalidSuffixLengthError(0);
    }
    if (prefix && p !== prefix) {
        throw new PrefixMismatchError(prefix, p);
    }
    return typeidUnboxed(p, s);
}
function parseTypeId(typeId) {
    return {
        prefix: getType(typeId),
        suffix: getSuffix(typeId)
    };
}
function getType(typeId) {
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        return "";
    }
    return typeId.substring(0, underscoreIndex);
}
function getSuffix(typeId) {
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        return typeId;
    }
    return typeId.substring(underscoreIndex + 1);
}
function toUUIDBytes(typeId) {
    return decode(getSuffix(typeId));
}
function toUUID(typeId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__["stringify"])(toUUIDBytes(typeId));
}
function fromUUIDBytes(prefix, bytes) {
    const suffix = encode(bytes);
    return prefix ? `${prefix}_${suffix}` : suffix;
}
function fromUUID(uuid, prefix) {
    const suffix = encode(parseUUID(uuid));
    return prefix ? `${prefix}_${suffix}` : suffix;
}
// src/typeid.ts
var TypeID = class {
    constructor(prefix, suffix = ""){
        this.prefix = prefix;
        this.suffix = suffix;
        const typeIdRaw = typeidUnboxed(prefix, suffix);
        this.prefix = getType(typeIdRaw);
        this.suffix = getSuffix(typeIdRaw);
    }
    getType() {
        return this.prefix;
    }
    getSuffix() {
        return this.suffix;
    }
    asType(prefix) {
        const self = this;
        if (self.prefix !== prefix) {
            throw new TypeIDConversionError(self.prefix, prefix);
        }
        return self;
    }
    toUUIDBytes() {
        return decode(this.suffix);
    }
    toUUID() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__["stringify"])(this.toUUIDBytes());
    }
    toString() {
        if (this.prefix === "") {
            return this.suffix;
        }
        return `${this.prefix}_${this.suffix}`;
    }
    static fromString(str, prefix) {
        const typeIdRaw = fromString(str, prefix);
        return new TypeID(getType(typeIdRaw), getSuffix(typeIdRaw));
    }
    static fromUUIDBytes(prefix, bytes) {
        const suffix = encode(bytes);
        return new TypeID(prefix, suffix);
    }
    static fromUUID(prefix, uuid) {
        const suffix = encode(parseUUID(uuid));
        return new TypeID(prefix, suffix);
    }
};
function typeid(prefix = "", suffix = "") {
    return new TypeID(prefix, suffix);
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "instantiate": (()=>instantiate)
});
function instantiate(getCoreModule, imports, instantiateCore = WebAssembly.instantiate) {
    class ComponentError extends Error {
        constructor(value){
            const enumerable = typeof value !== 'string';
            super(enumerable ? `${String(value)} (see error.payload)` : value);
            Object.defineProperty(this, 'payload', {
                value,
                enumerable
            });
        }
    }
    let dv = new DataView(new ArrayBuffer());
    const dataView = (mem)=>dv.buffer === mem.buffer ? dv : dv = new DataView(mem.buffer);
    function throwInvalidBool() {
        throw new TypeError('invalid variant discriminant for bool');
    }
    function toUint32(val) {
        return val >>> 0;
    }
    const utf8Decoder = new TextDecoder();
    const utf8Encoder = new TextEncoder();
    let utf8EncodedLen = 0;
    function utf8Encode(s, realloc, memory) {
        if (typeof s !== 'string') throw new TypeError('expected a string');
        if (s.length === 0) {
            utf8EncodedLen = 0;
            return 1;
        }
        let buf = utf8Encoder.encode(s);
        let ptr = realloc(0, 0, 1, buf.length);
        new Uint8Array(memory.buffer).set(buf, ptr);
        utf8EncodedLen = buf.length;
        return ptr;
    }
    const module0 = getCoreModule('arcjet_analyze_js_req.component.core.wasm');
    const module1 = getCoreModule('arcjet_analyze_js_req.component.core2.wasm');
    const module2 = getCoreModule('arcjet_analyze_js_req.component.core3.wasm');
    const { detect } = imports['arcjet:js-req/bot-identifier'];
    const { hasGravatar, hasMxRecords, isDisposableEmail, isFreeEmail } = imports['arcjet:js-req/email-validator-overrides'];
    const { detect: detect$1 } = imports['arcjet:js-req/sensitive-information-identifier'];
    const { verify } = imports['arcjet:js-req/verify-bot'];
    let gen = function* init() {
        let exports0;
        let exports1;
        let memory0;
        let realloc0;
        function trampoline0(arg0, arg1, arg2) {
            var ptr0 = arg0;
            var len0 = arg1;
            var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
            const ret = detect(result0);
            var vec2 = ret;
            var len2 = vec2.length;
            var result2 = realloc0(0, 0, 4, len2 * 8);
            for(let i = 0; i < vec2.length; i++){
                const e = vec2[i];
                const base = result2 + i * 8;
                var ptr1 = utf8Encode(e, realloc0, memory0);
                var len1 = utf8EncodedLen;
                dataView(memory0).setInt32(base + 4, len1, true);
                dataView(memory0).setInt32(base + 0, ptr1, true);
            }
            dataView(memory0).setInt32(arg2 + 4, len2, true);
            dataView(memory0).setInt32(arg2 + 0, result2, true);
        }
        function trampoline1(arg0, arg1, arg2, arg3) {
            var ptr0 = arg0;
            var len0 = arg1;
            var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
            var ptr1 = arg2;
            var len1 = arg3;
            var result1 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr1, len1));
            const ret = verify(result0, result1);
            var val2 = ret;
            let enum2;
            switch(val2){
                case 'verified':
                    {
                        enum2 = 0;
                        break;
                    }
                case 'spoofed':
                    {
                        enum2 = 1;
                        break;
                    }
                case 'unverifiable':
                    {
                        enum2 = 2;
                        break;
                    }
                default:
                    {
                        if (ret instanceof Error) {
                            console.error(ret);
                        }
                        throw new TypeError(`"${val2}" is not one of the cases of validator-response`);
                    }
            }
            return enum2;
        }
        function trampoline2(arg0, arg1) {
            var ptr0 = arg0;
            var len0 = arg1;
            var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
            const ret = isFreeEmail(result0);
            var val1 = ret;
            let enum1;
            switch(val1){
                case 'yes':
                    {
                        enum1 = 0;
                        break;
                    }
                case 'no':
                    {
                        enum1 = 1;
                        break;
                    }
                case 'unknown':
                    {
                        enum1 = 2;
                        break;
                    }
                default:
                    {
                        if (ret instanceof Error) {
                            console.error(ret);
                        }
                        throw new TypeError(`"${val1}" is not one of the cases of validator-response`);
                    }
            }
            return enum1;
        }
        function trampoline3(arg0, arg1) {
            var ptr0 = arg0;
            var len0 = arg1;
            var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
            const ret = isDisposableEmail(result0);
            var val1 = ret;
            let enum1;
            switch(val1){
                case 'yes':
                    {
                        enum1 = 0;
                        break;
                    }
                case 'no':
                    {
                        enum1 = 1;
                        break;
                    }
                case 'unknown':
                    {
                        enum1 = 2;
                        break;
                    }
                default:
                    {
                        if (ret instanceof Error) {
                            console.error(ret);
                        }
                        throw new TypeError(`"${val1}" is not one of the cases of validator-response`);
                    }
            }
            return enum1;
        }
        function trampoline4(arg0, arg1) {
            var ptr0 = arg0;
            var len0 = arg1;
            var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
            const ret = hasMxRecords(result0);
            var val1 = ret;
            let enum1;
            switch(val1){
                case 'yes':
                    {
                        enum1 = 0;
                        break;
                    }
                case 'no':
                    {
                        enum1 = 1;
                        break;
                    }
                case 'unknown':
                    {
                        enum1 = 2;
                        break;
                    }
                default:
                    {
                        if (ret instanceof Error) {
                            console.error(ret);
                        }
                        throw new TypeError(`"${val1}" is not one of the cases of validator-response`);
                    }
            }
            return enum1;
        }
        function trampoline5(arg0, arg1) {
            var ptr0 = arg0;
            var len0 = arg1;
            var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
            const ret = hasGravatar(result0);
            var val1 = ret;
            let enum1;
            switch(val1){
                case 'yes':
                    {
                        enum1 = 0;
                        break;
                    }
                case 'no':
                    {
                        enum1 = 1;
                        break;
                    }
                case 'unknown':
                    {
                        enum1 = 2;
                        break;
                    }
                default:
                    {
                        if (ret instanceof Error) {
                            console.error(ret);
                        }
                        throw new TypeError(`"${val1}" is not one of the cases of validator-response`);
                    }
            }
            return enum1;
        }
        function trampoline6(arg0, arg1, arg2) {
            var len1 = arg1;
            var base1 = arg0;
            var result1 = [];
            for(let i = 0; i < len1; i++){
                const base = base1 + i * 8;
                var ptr0 = dataView(memory0).getInt32(base + 0, true);
                var len0 = dataView(memory0).getInt32(base + 4, true);
                var result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
                result1.push(result0);
            }
            const ret = detect$1(result1);
            var vec5 = ret;
            var len5 = vec5.length;
            var result5 = realloc0(0, 0, 4, len5 * 16);
            for(let i = 0; i < vec5.length; i++){
                const e = vec5[i];
                const base = result5 + i * 16;
                var variant4 = e;
                if (variant4 === null || variant4 === undefined) {
                    dataView(memory0).setInt8(base + 0, 0, true);
                } else {
                    const e = variant4;
                    dataView(memory0).setInt8(base + 0, 1, true);
                    var variant3 = e;
                    switch(variant3.tag){
                        case 'email':
                            {
                                dataView(memory0).setInt8(base + 4, 0, true);
                                break;
                            }
                        case 'phone-number':
                            {
                                dataView(memory0).setInt8(base + 4, 1, true);
                                break;
                            }
                        case 'ip-address':
                            {
                                dataView(memory0).setInt8(base + 4, 2, true);
                                break;
                            }
                        case 'credit-card-number':
                            {
                                dataView(memory0).setInt8(base + 4, 3, true);
                                break;
                            }
                        case 'custom':
                            {
                                const e = variant3.val;
                                dataView(memory0).setInt8(base + 4, 4, true);
                                var ptr2 = utf8Encode(e, realloc0, memory0);
                                var len2 = utf8EncodedLen;
                                dataView(memory0).setInt32(base + 12, len2, true);
                                dataView(memory0).setInt32(base + 8, ptr2, true);
                                break;
                            }
                        default:
                            {
                                throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant3.tag)}\` (received \`${variant3}\`) specified for \`SensitiveInfoEntity\``);
                            }
                    }
                }
            }
            dataView(memory0).setInt32(arg2 + 4, len5, true);
            dataView(memory0).setInt32(arg2 + 0, result5, true);
        }
        let exports2;
        let postReturn0;
        let postReturn1;
        let postReturn2;
        let postReturn3;
        let postReturn4;
        Promise.all([
            module0,
            module1,
            module2
        ]).catch(()=>{});
        ({ exports: exports0 } = yield instantiateCore((yield module1)));
        ({ exports: exports1 } = yield instantiateCore((yield module0), {
            'arcjet:js-req/bot-identifier': {
                detect: exports0['0']
            },
            'arcjet:js-req/email-validator-overrides': {
                'has-gravatar': exports0['5'],
                'has-mx-records': exports0['4'],
                'is-disposable-email': exports0['3'],
                'is-free-email': exports0['2']
            },
            'arcjet:js-req/sensitive-information-identifier': {
                detect: exports0['6']
            },
            'arcjet:js-req/verify-bot': {
                verify: exports0['1']
            }
        }));
        memory0 = exports1.memory;
        realloc0 = exports1.cabi_realloc;
        ({ exports: exports2 } = yield instantiateCore((yield module2), {
            '': {
                $imports: exports0.$imports,
                '0': trampoline0,
                '1': trampoline1,
                '2': trampoline2,
                '3': trampoline3,
                '4': trampoline4,
                '5': trampoline5,
                '6': trampoline6
            }
        }));
        postReturn0 = exports1['cabi_post_detect-bot'];
        postReturn1 = exports1['cabi_post_generate-fingerprint'];
        postReturn2 = exports1['cabi_post_validate-characteristics'];
        postReturn3 = exports1['cabi_post_is-valid-email'];
        postReturn4 = exports1['cabi_post_detect-sensitive-info'];
        function detectBot(arg0, arg1) {
            var ptr0 = utf8Encode(arg0, realloc0, memory0);
            var len0 = utf8EncodedLen;
            var variant7 = arg1;
            let variant7_0;
            let variant7_1;
            let variant7_2;
            let variant7_3;
            switch(variant7.tag){
                case 'allowed-bot-config':
                    {
                        const e = variant7.val;
                        var { entities: v1_0, skipCustomDetect: v1_1 } = e;
                        var vec3 = v1_0;
                        var len3 = vec3.length;
                        var result3 = realloc0(0, 0, 4, len3 * 8);
                        for(let i = 0; i < vec3.length; i++){
                            const e = vec3[i];
                            const base = result3 + i * 8;
                            var ptr2 = utf8Encode(e, realloc0, memory0);
                            var len2 = utf8EncodedLen;
                            dataView(memory0).setInt32(base + 4, len2, true);
                            dataView(memory0).setInt32(base + 0, ptr2, true);
                        }
                        variant7_0 = 0;
                        variant7_1 = result3;
                        variant7_2 = len3;
                        variant7_3 = v1_1 ? 1 : 0;
                        break;
                    }
                case 'denied-bot-config':
                    {
                        const e = variant7.val;
                        var { entities: v4_0, skipCustomDetect: v4_1 } = e;
                        var vec6 = v4_0;
                        var len6 = vec6.length;
                        var result6 = realloc0(0, 0, 4, len6 * 8);
                        for(let i = 0; i < vec6.length; i++){
                            const e = vec6[i];
                            const base = result6 + i * 8;
                            var ptr5 = utf8Encode(e, realloc0, memory0);
                            var len5 = utf8EncodedLen;
                            dataView(memory0).setInt32(base + 4, len5, true);
                            dataView(memory0).setInt32(base + 0, ptr5, true);
                        }
                        variant7_0 = 1;
                        variant7_1 = result6;
                        variant7_2 = len6;
                        variant7_3 = v4_1 ? 1 : 0;
                        break;
                    }
                default:
                    {
                        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant7.tag)}\` (received \`${variant7}\`) specified for \`BotConfig\``);
                    }
            }
            const ret = exports1['detect-bot'](ptr0, len0, variant7_0, variant7_1, variant7_2, variant7_3);
            let variant15;
            switch(dataView(memory0).getUint8(ret + 0, true)){
                case 0:
                    {
                        var len9 = dataView(memory0).getInt32(ret + 8, true);
                        var base9 = dataView(memory0).getInt32(ret + 4, true);
                        var result9 = [];
                        for(let i = 0; i < len9; i++){
                            const base = base9 + i * 8;
                            var ptr8 = dataView(memory0).getInt32(base + 0, true);
                            var len8 = dataView(memory0).getInt32(base + 4, true);
                            var result8 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr8, len8));
                            result9.push(result8);
                        }
                        var len11 = dataView(memory0).getInt32(ret + 16, true);
                        var base11 = dataView(memory0).getInt32(ret + 12, true);
                        var result11 = [];
                        for(let i = 0; i < len11; i++){
                            const base = base11 + i * 8;
                            var ptr10 = dataView(memory0).getInt32(base + 0, true);
                            var len10 = dataView(memory0).getInt32(base + 4, true);
                            var result10 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr10, len10));
                            result11.push(result10);
                        }
                        var bool12 = dataView(memory0).getUint8(ret + 20, true);
                        var bool13 = dataView(memory0).getUint8(ret + 21, true);
                        variant15 = {
                            tag: 'ok',
                            val: {
                                allowed: result9,
                                denied: result11,
                                verified: bool12 == 0 ? false : bool12 == 1 ? true : throwInvalidBool(),
                                spoofed: bool13 == 0 ? false : bool13 == 1 ? true : throwInvalidBool()
                            }
                        };
                        break;
                    }
                case 1:
                    {
                        var ptr14 = dataView(memory0).getInt32(ret + 4, true);
                        var len14 = dataView(memory0).getInt32(ret + 8, true);
                        var result14 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr14, len14));
                        variant15 = {
                            tag: 'err',
                            val: result14
                        };
                        break;
                    }
                default:
                    {
                        throw new TypeError('invalid variant discriminant for expected');
                    }
            }
            const retVal = variant15;
            postReturn0(ret);
            if (typeof retVal === 'object' && retVal.tag === 'err') {
                throw new ComponentError(retVal.val);
            }
            return retVal.val;
        }
        function generateFingerprint(arg0, arg1) {
            var ptr0 = utf8Encode(arg0, realloc0, memory0);
            var len0 = utf8EncodedLen;
            var vec2 = arg1;
            var len2 = vec2.length;
            var result2 = realloc0(0, 0, 4, len2 * 8);
            for(let i = 0; i < vec2.length; i++){
                const e = vec2[i];
                const base = result2 + i * 8;
                var ptr1 = utf8Encode(e, realloc0, memory0);
                var len1 = utf8EncodedLen;
                dataView(memory0).setInt32(base + 4, len1, true);
                dataView(memory0).setInt32(base + 0, ptr1, true);
            }
            const ret = exports1['generate-fingerprint'](ptr0, len0, result2, len2);
            let variant5;
            switch(dataView(memory0).getUint8(ret + 0, true)){
                case 0:
                    {
                        var ptr3 = dataView(memory0).getInt32(ret + 4, true);
                        var len3 = dataView(memory0).getInt32(ret + 8, true);
                        var result3 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr3, len3));
                        variant5 = {
                            tag: 'ok',
                            val: result3
                        };
                        break;
                    }
                case 1:
                    {
                        var ptr4 = dataView(memory0).getInt32(ret + 4, true);
                        var len4 = dataView(memory0).getInt32(ret + 8, true);
                        var result4 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr4, len4));
                        variant5 = {
                            tag: 'err',
                            val: result4
                        };
                        break;
                    }
                default:
                    {
                        throw new TypeError('invalid variant discriminant for expected');
                    }
            }
            const retVal = variant5;
            postReturn1(ret);
            if (typeof retVal === 'object' && retVal.tag === 'err') {
                throw new ComponentError(retVal.val);
            }
            return retVal.val;
        }
        function validateCharacteristics(arg0, arg1) {
            var ptr0 = utf8Encode(arg0, realloc0, memory0);
            var len0 = utf8EncodedLen;
            var vec2 = arg1;
            var len2 = vec2.length;
            var result2 = realloc0(0, 0, 4, len2 * 8);
            for(let i = 0; i < vec2.length; i++){
                const e = vec2[i];
                const base = result2 + i * 8;
                var ptr1 = utf8Encode(e, realloc0, memory0);
                var len1 = utf8EncodedLen;
                dataView(memory0).setInt32(base + 4, len1, true);
                dataView(memory0).setInt32(base + 0, ptr1, true);
            }
            const ret = exports1['validate-characteristics'](ptr0, len0, result2, len2);
            let variant4;
            switch(dataView(memory0).getUint8(ret + 0, true)){
                case 0:
                    {
                        variant4 = {
                            tag: 'ok',
                            val: undefined
                        };
                        break;
                    }
                case 1:
                    {
                        var ptr3 = dataView(memory0).getInt32(ret + 4, true);
                        var len3 = dataView(memory0).getInt32(ret + 8, true);
                        var result3 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr3, len3));
                        variant4 = {
                            tag: 'err',
                            val: result3
                        };
                        break;
                    }
                default:
                    {
                        throw new TypeError('invalid variant discriminant for expected');
                    }
            }
            const retVal = variant4;
            postReturn2(ret);
            if (typeof retVal === 'object' && retVal.tag === 'err') {
                throw new ComponentError(retVal.val);
            }
            return retVal.val;
        }
        function isValidEmail(arg0, arg1) {
            var ptr0 = utf8Encode(arg0, realloc0, memory0);
            var len0 = utf8EncodedLen;
            var variant7 = arg1;
            let variant7_0;
            let variant7_1;
            let variant7_2;
            let variant7_3;
            let variant7_4;
            switch(variant7.tag){
                case 'allow-email-validation-config':
                    {
                        const e = variant7.val;
                        var { requireTopLevelDomain: v1_0, allowDomainLiteral: v1_1, allow: v1_2 } = e;
                        var vec3 = v1_2;
                        var len3 = vec3.length;
                        var result3 = realloc0(0, 0, 4, len3 * 8);
                        for(let i = 0; i < vec3.length; i++){
                            const e = vec3[i];
                            const base = result3 + i * 8;
                            var ptr2 = utf8Encode(e, realloc0, memory0);
                            var len2 = utf8EncodedLen;
                            dataView(memory0).setInt32(base + 4, len2, true);
                            dataView(memory0).setInt32(base + 0, ptr2, true);
                        }
                        variant7_0 = 0;
                        variant7_1 = v1_0 ? 1 : 0;
                        variant7_2 = v1_1 ? 1 : 0;
                        variant7_3 = result3;
                        variant7_4 = len3;
                        break;
                    }
                case 'deny-email-validation-config':
                    {
                        const e = variant7.val;
                        var { requireTopLevelDomain: v4_0, allowDomainLiteral: v4_1, deny: v4_2 } = e;
                        var vec6 = v4_2;
                        var len6 = vec6.length;
                        var result6 = realloc0(0, 0, 4, len6 * 8);
                        for(let i = 0; i < vec6.length; i++){
                            const e = vec6[i];
                            const base = result6 + i * 8;
                            var ptr5 = utf8Encode(e, realloc0, memory0);
                            var len5 = utf8EncodedLen;
                            dataView(memory0).setInt32(base + 4, len5, true);
                            dataView(memory0).setInt32(base + 0, ptr5, true);
                        }
                        variant7_0 = 1;
                        variant7_1 = v4_0 ? 1 : 0;
                        variant7_2 = v4_1 ? 1 : 0;
                        variant7_3 = result6;
                        variant7_4 = len6;
                        break;
                    }
                default:
                    {
                        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant7.tag)}\` (received \`${variant7}\`) specified for \`EmailValidationConfig\``);
                    }
            }
            const ret = exports1['is-valid-email'](ptr0, len0, variant7_0, variant7_1, variant7_2, variant7_3, variant7_4);
            let variant12;
            switch(dataView(memory0).getUint8(ret + 0, true)){
                case 0:
                    {
                        let enum8;
                        switch(dataView(memory0).getUint8(ret + 4, true)){
                            case 0:
                                {
                                    enum8 = 'valid';
                                    break;
                                }
                            case 1:
                                {
                                    enum8 = 'invalid';
                                    break;
                                }
                            default:
                                {
                                    throw new TypeError('invalid discriminant specified for EmailValidity');
                                }
                        }
                        var len10 = dataView(memory0).getInt32(ret + 12, true);
                        var base10 = dataView(memory0).getInt32(ret + 8, true);
                        var result10 = [];
                        for(let i = 0; i < len10; i++){
                            const base = base10 + i * 8;
                            var ptr9 = dataView(memory0).getInt32(base + 0, true);
                            var len9 = dataView(memory0).getInt32(base + 4, true);
                            var result9 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr9, len9));
                            result10.push(result9);
                        }
                        variant12 = {
                            tag: 'ok',
                            val: {
                                validity: enum8,
                                blocked: result10
                            }
                        };
                        break;
                    }
                case 1:
                    {
                        var ptr11 = dataView(memory0).getInt32(ret + 4, true);
                        var len11 = dataView(memory0).getInt32(ret + 8, true);
                        var result11 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr11, len11));
                        variant12 = {
                            tag: 'err',
                            val: result11
                        };
                        break;
                    }
                default:
                    {
                        throw new TypeError('invalid variant discriminant for expected');
                    }
            }
            const retVal = variant12;
            postReturn3(ret);
            if (typeof retVal === 'object' && retVal.tag === 'err') {
                throw new ComponentError(retVal.val);
            }
            return retVal.val;
        }
        function detectSensitiveInfo(arg0, arg1) {
            var ptr0 = utf8Encode(arg0, realloc0, memory0);
            var len0 = utf8EncodedLen;
            var { entities: v1_0, contextWindowSize: v1_1, skipCustomDetect: v1_2 } = arg1;
            var variant8 = v1_0;
            let variant8_0;
            let variant8_1;
            let variant8_2;
            switch(variant8.tag){
                case 'allow':
                    {
                        const e = variant8.val;
                        var vec4 = e;
                        var len4 = vec4.length;
                        var result4 = realloc0(0, 0, 4, len4 * 12);
                        for(let i = 0; i < vec4.length; i++){
                            const e = vec4[i];
                            const base = result4 + i * 12;
                            var variant3 = e;
                            switch(variant3.tag){
                                case 'email':
                                    {
                                        dataView(memory0).setInt8(base + 0, 0, true);
                                        break;
                                    }
                                case 'phone-number':
                                    {
                                        dataView(memory0).setInt8(base + 0, 1, true);
                                        break;
                                    }
                                case 'ip-address':
                                    {
                                        dataView(memory0).setInt8(base + 0, 2, true);
                                        break;
                                    }
                                case 'credit-card-number':
                                    {
                                        dataView(memory0).setInt8(base + 0, 3, true);
                                        break;
                                    }
                                case 'custom':
                                    {
                                        const e = variant3.val;
                                        dataView(memory0).setInt8(base + 0, 4, true);
                                        var ptr2 = utf8Encode(e, realloc0, memory0);
                                        var len2 = utf8EncodedLen;
                                        dataView(memory0).setInt32(base + 8, len2, true);
                                        dataView(memory0).setInt32(base + 4, ptr2, true);
                                        break;
                                    }
                                default:
                                    {
                                        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant3.tag)}\` (received \`${variant3}\`) specified for \`SensitiveInfoEntity\``);
                                    }
                            }
                        }
                        variant8_0 = 0;
                        variant8_1 = result4;
                        variant8_2 = len4;
                        break;
                    }
                case 'deny':
                    {
                        const e = variant8.val;
                        var vec7 = e;
                        var len7 = vec7.length;
                        var result7 = realloc0(0, 0, 4, len7 * 12);
                        for(let i = 0; i < vec7.length; i++){
                            const e = vec7[i];
                            const base = result7 + i * 12;
                            var variant6 = e;
                            switch(variant6.tag){
                                case 'email':
                                    {
                                        dataView(memory0).setInt8(base + 0, 0, true);
                                        break;
                                    }
                                case 'phone-number':
                                    {
                                        dataView(memory0).setInt8(base + 0, 1, true);
                                        break;
                                    }
                                case 'ip-address':
                                    {
                                        dataView(memory0).setInt8(base + 0, 2, true);
                                        break;
                                    }
                                case 'credit-card-number':
                                    {
                                        dataView(memory0).setInt8(base + 0, 3, true);
                                        break;
                                    }
                                case 'custom':
                                    {
                                        const e = variant6.val;
                                        dataView(memory0).setInt8(base + 0, 4, true);
                                        var ptr5 = utf8Encode(e, realloc0, memory0);
                                        var len5 = utf8EncodedLen;
                                        dataView(memory0).setInt32(base + 8, len5, true);
                                        dataView(memory0).setInt32(base + 4, ptr5, true);
                                        break;
                                    }
                                default:
                                    {
                                        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant6.tag)}\` (received \`${variant6}\`) specified for \`SensitiveInfoEntity\``);
                                    }
                            }
                        }
                        variant8_0 = 1;
                        variant8_1 = result7;
                        variant8_2 = len7;
                        break;
                    }
                default:
                    {
                        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant8.tag)}\` (received \`${variant8}\`) specified for \`SensitiveInfoEntities\``);
                    }
            }
            var variant9 = v1_1;
            let variant9_0;
            let variant9_1;
            if (variant9 === null || variant9 === undefined) {
                variant9_0 = 0;
                variant9_1 = 0;
            } else {
                const e = variant9;
                variant9_0 = 1;
                variant9_1 = toUint32(e);
            }
            const ret = exports1['detect-sensitive-info'](ptr0, len0, variant8_0, variant8_1, variant8_2, variant9_0, variant9_1, v1_2 ? 1 : 0);
            var len12 = dataView(memory0).getInt32(ret + 4, true);
            var base12 = dataView(memory0).getInt32(ret + 0, true);
            var result12 = [];
            for(let i = 0; i < len12; i++){
                const base = base12 + i * 20;
                let variant11;
                switch(dataView(memory0).getUint8(base + 8, true)){
                    case 0:
                        {
                            variant11 = {
                                tag: 'email'
                            };
                            break;
                        }
                    case 1:
                        {
                            variant11 = {
                                tag: 'phone-number'
                            };
                            break;
                        }
                    case 2:
                        {
                            variant11 = {
                                tag: 'ip-address'
                            };
                            break;
                        }
                    case 3:
                        {
                            variant11 = {
                                tag: 'credit-card-number'
                            };
                            break;
                        }
                    case 4:
                        {
                            var ptr10 = dataView(memory0).getInt32(base + 12, true);
                            var len10 = dataView(memory0).getInt32(base + 16, true);
                            var result10 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr10, len10));
                            variant11 = {
                                tag: 'custom',
                                val: result10
                            };
                            break;
                        }
                    default:
                        {
                            throw new TypeError('invalid variant discriminant for SensitiveInfoEntity');
                        }
                }
                result12.push({
                    start: dataView(memory0).getInt32(base + 0, true) >>> 0,
                    end: dataView(memory0).getInt32(base + 4, true) >>> 0,
                    identifiedType: variant11
                });
            }
            var len15 = dataView(memory0).getInt32(ret + 12, true);
            var base15 = dataView(memory0).getInt32(ret + 8, true);
            var result15 = [];
            for(let i = 0; i < len15; i++){
                const base = base15 + i * 20;
                let variant14;
                switch(dataView(memory0).getUint8(base + 8, true)){
                    case 0:
                        {
                            variant14 = {
                                tag: 'email'
                            };
                            break;
                        }
                    case 1:
                        {
                            variant14 = {
                                tag: 'phone-number'
                            };
                            break;
                        }
                    case 2:
                        {
                            variant14 = {
                                tag: 'ip-address'
                            };
                            break;
                        }
                    case 3:
                        {
                            variant14 = {
                                tag: 'credit-card-number'
                            };
                            break;
                        }
                    case 4:
                        {
                            var ptr13 = dataView(memory0).getInt32(base + 12, true);
                            var len13 = dataView(memory0).getInt32(base + 16, true);
                            var result13 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr13, len13));
                            variant14 = {
                                tag: 'custom',
                                val: result13
                            };
                            break;
                        }
                    default:
                        {
                            throw new TypeError('invalid variant discriminant for SensitiveInfoEntity');
                        }
                }
                result15.push({
                    start: dataView(memory0).getInt32(base + 0, true) >>> 0,
                    end: dataView(memory0).getInt32(base + 4, true) >>> 0,
                    identifiedType: variant14
                });
            }
            const retVal = {
                allowed: result12,
                denied: result15
            };
            postReturn4(ret);
            return retVal;
        }
        return {
            detectBot,
            detectSensitiveInfo,
            generateFingerprint,
            isValidEmail,
            validateCharacteristics
        };
    }();
    let promise, resolve, reject;
    function runNext(value) {
        try {
            let done;
            do {
                ({ value, done } = gen.next(value));
            }while (!(value instanceof Promise) && !done)
            if (done) {
                if (resolve) resolve(value);
                else return value;
            }
            if (!promise) promise = new Promise((_resolve, _reject)=>(resolve = _resolve, reject = _reject));
            value.then((nextVal)=>done ? resolve() : runNext(nextVal), reject);
        } catch (e) {
            if (reject) reject(e);
            else throw e;
        }
    }
    const maybeSyncReturn = runNext(null);
    return promise || maybeSyncReturn;
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core.wasm?module [middleware-edge] (wasm raw)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("chunks/79789_@arcjet_analyze-wasm_wasm_arcjet_analyze_js_req_component_core_325b988e.wasm");}}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core.wasm?module [middleware-edge] (wasm module)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, w: __turbopack_wasm__, u: __turbopack_wasm_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__raw$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core.wasm?module [middleware-edge] (wasm raw)");
;
const mod = await __turbopack_wasm_module__(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__raw$29$__["default"]);
const __TURBOPACK__default__export__ = mod;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core2.wasm?module [middleware-edge] (wasm raw)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("chunks/79789_@arcjet_analyze-wasm_wasm_arcjet_analyze_js_req_component_core2_325b988e.wasm");}}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core2.wasm?module [middleware-edge] (wasm module)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, w: __turbopack_wasm__, u: __turbopack_wasm_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core2$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__raw$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core2.wasm?module [middleware-edge] (wasm raw)");
;
const mod = await __turbopack_wasm_module__(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core2$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__raw$29$__["default"]);
const __TURBOPACK__default__export__ = mod;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core3.wasm?module [middleware-edge] (wasm raw)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("chunks/79789_@arcjet_analyze-wasm_wasm_arcjet_analyze_js_req_component_core3_325b988e.wasm");}}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core3.wasm?module [middleware-edge] (wasm module)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, w: __turbopack_wasm__, u: __turbopack_wasm_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core3$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__raw$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core3.wasm?module [middleware-edge] (wasm raw)");
;
const mod = await __turbopack_wasm_module__(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core3$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__raw$29$__["default"]);
const __TURBOPACK__default__export__ = mod;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/edge-light.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "initializeWasm": (()=>initializeWasm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core.wasm?module [middleware-edge] (wasm module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core2$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core2.wasm?module [middleware-edge] (wasm module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core3$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/wasm/arcjet_analyze_js_req.component.core3.wasm?module [middleware-edge] (wasm module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core2$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core3$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core2$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core3$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
async function moduleFromPath(path) {
    if (path === "arcjet_analyze_js_req.component.core.wasm") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__["default"];
    }
    if (path === "arcjet_analyze_js_req.component.core2.wasm") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core2$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__["default"];
    }
    if (path === "arcjet_analyze_js_req.component.core3.wasm") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$core3$2e$wasm$3f$module__$5b$middleware$2d$edge$5d$__$28$wasm__module$29$__["default"];
    }
    throw new Error(`Unknown path: ${path}`);
}
async function initializeWasm(coreImports) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$wasm$2f$arcjet_analyze_js_req$2e$component$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["instantiate"])(moduleFromPath, coreImports);
    } catch  {
        return undefined;
    }
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/chat-ui/node_modules/@arcjet/analyze/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "detectBot": (()=>detectBot),
    "detectSensitiveInfo": (()=>detectSensitiveInfo),
    "generateFingerprint": (()=>generateFingerprint),
    "isValidEmail": (()=>isValidEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze-wasm/edge-light.js [middleware-edge] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
const FREE_EMAIL_PROVIDERS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "hotmail.co.uk"
];
function noOpSensitiveInfoDetect() {
    return [];
}
function noOpBotsDetect() {
    return [];
}
function createCoreImports(detect) {
    if (typeof detect !== "function") {
        detect = noOpSensitiveInfoDetect;
    }
    return {
        "arcjet:js-req/bot-identifier": {
            detect: noOpBotsDetect
        },
        "arcjet:js-req/email-validator-overrides": {
            isFreeEmail (domain) {
                if (FREE_EMAIL_PROVIDERS.includes(domain)) {
                    return "yes";
                }
                return "unknown";
            },
            isDisposableEmail () {
                return "unknown";
            },
            hasMxRecords () {
                return "unknown";
            },
            hasGravatar () {
                return "unknown";
            }
        },
        "arcjet:js-req/sensitive-information-identifier": {
            detect
        },
        "arcjet:js-req/verify-bot": {
            verify () {
                return "unverifiable";
            }
        }
    };
}
/**
 * Generate a fingerprint for the client. This is used to identify the client
 * across multiple requests.
 * @param context - The Arcjet Analyze context.
 * @param request - The request to fingerprint.
 * @returns A SHA-256 string fingerprint.
 */ async function generateFingerprint(context, request) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.generateFingerprint(JSON.stringify(request), context.characteristics);
    } else {
        log.debug("WebAssembly is not supported in this runtime");
    }
    return "";
}
async function isValidEmail(context, candidate, options) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.isValidEmail(candidate, options);
    } else {
        log.debug("WebAssembly is not supported in this runtime");
        // Skip the local evaluation of the rule if WASM is not available
        return {
            validity: "valid",
            blocked: []
        };
    }
}
async function detectBot(context, request, options) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.detectBot(JSON.stringify(request), options);
    } else {
        log.debug("WebAssembly is not supported in this runtime");
        // Skip the local evaluation of the rule if Wasm is not available
        return {
            allowed: [],
            denied: [],
            spoofed: false,
            verified: false
        };
    }
}
async function detectSensitiveInfo(context, candidate, entities, contextWindowSize, detect) {
    const { log } = context;
    const coreImports = createCoreImports(detect);
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        const skipCustomDetect = typeof detect !== "function";
        return analyze.detectSensitiveInfo(candidate, {
            entities,
            contextWindowSize,
            skipCustomDetect
        });
    } else {
        log.debug("WebAssembly is not supported in this runtime");
        throw new Error("SENSITIVE_INFO rule failed to run because Wasm is not supported in this environment.");
    }
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/chat-ui/node_modules/@arcjet/duration/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This Parser is a TypeScript implementation of similar code in the Go stdlib
// with deviations made to support usage in the Arcjet SDK.
//
// Parser source:
// https://github.com/golang/go/blob/c18ddc84e1ec6406b26f7e9d0e1ee3d1908d7c27/src/time/format.go#L1589-L1686
//
// Licensed: BSD 3-Clause "New" or "Revised" License
// Copyright (c) 2009 The Go Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
__turbopack_context__.s({
    "parse": (()=>parse)
});
const second = 1;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const maxUint32 = 4294967295;
const units = new Map([
    [
        "s",
        second
    ],
    [
        "m",
        minute
    ],
    [
        "h",
        hour
    ],
    [
        "d",
        day
    ]
]);
const integers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
// leadingInt consumes the leading [0-9]* from s.
function leadingInt(s) {
    let i = 0;
    let x = 0;
    for(; i < s.length; i++){
        const c = s[i];
        if (!integers.includes(c)) {
            break;
        }
        x = x * 10 + parseInt(c, 10);
        if (x > maxUint32) {
            // overflow
            throw new Error("bad [0-9]*"); // never printed
        }
    }
    return [
        x,
        s.slice(i)
    ];
}
/**
 * Parses a duration into a number representing seconds while ensuring the value
 * fits within an unsigned 32-bit integer.
 *
 * If a JavaScript number is provided to the function, it is validated and
 * returned verbatim.
 *
 * If a string is provided to the function, it must be in the form of digits
 * followed by a unit. Supported units are `s` (seconds), `m` (minutes), `h`
 * (hours), and `d` (days).
 *
 * @param s The value to parse into seconds.
 * @returns A number representing seconds parsed from the provided duration.
 *
 * @example
 * parse("1s") === 1
 * parse("1m") === 60
 * parse("1h") === 3600
 * parse("1d") === 86400
 */ function parse(s) {
    const original = s;
    if (typeof s === "number") {
        if (s > maxUint32) {
            throw new Error(`invalid duration: ${original}`);
        }
        if (s < 0) {
            throw new Error(`invalid duration: ${original}`);
        }
        if (!Number.isInteger(s)) {
            throw new Error(`invalid duration: ${original}`);
        }
        return s;
    }
    if (typeof s !== "string") {
        throw new Error("can only parse a duration string");
    }
    let d = 0;
    // Special case: if all that is left is "0", this is zero.
    if (s === "0") {
        return 0;
    }
    if (s === "") {
        throw new Error(`invalid duration: ${original}`);
    }
    while(s !== ""){
        let v = 0;
        // The next character must be [0-9]
        if (!integers.includes(s[0])) {
            throw new Error(`invalid duration: ${original}`);
        }
        // Consume [0-9]*
        [v, s] = leadingInt(s);
        // Error on decimal (\.[0-9]*)?
        if (s !== "" && s[0] == ".") {
            // TODO: We could support decimals that turn into non-decimal seconds—e.g.
            // 1.5hours becomes 5400 seconds
            throw new Error(`unsupported decimal duration: ${original}`);
        }
        // Consume unit.
        let i = 0;
        for(; i < s.length; i++){
            const c = s[i];
            if (integers.includes(c)) {
                break;
            }
        }
        if (i == 0) {
            throw new Error(`missing unit in duration: ${original}`);
        }
        const u = s.slice(0, i);
        s = s.slice(i);
        const unit = units.get(u);
        if (typeof unit === "undefined") {
            throw new Error(`unknown unit "${u}" in duration ${original}`);
        }
        if (v > maxUint32 / unit) {
            // overflow
            throw new Error(`invalid duration ${original}`);
        }
        v *= unit;
        d += v;
        if (d > maxUint32) {
            throw new Error(`invalid duration ${original}`);
        }
    }
    return d;
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/headers/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArcjetHeaders)
});
function isIterable(val) {
    return typeof val?.[Symbol.iterator] === "function";
}
/**
 * This Fetch API interface allows you to perform various actions on HTTP
 * request and response headers. These actions include retrieving, setting,
 * adding to, and removing. A Headers object has an associated header list,
 * which is initially empty and consists of zero or more name and value pairs.
 *
 * You can add to this using methods like `append()`.
 *
 * In all methods of this interface, header names are matched by
 * case-insensitive byte sequence.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers)
 */ class ArcjetHeaders extends Headers {
    constructor(init){
        super();
        if (typeof init !== "undefined" && typeof init !== "string" && init !== null) {
            if (isIterable(init)) {
                for (const [key, value] of init){
                    this.append(key, value);
                }
            } else {
                for (const [key, value] of Object.entries(init)){
                    if (typeof value === "undefined") {
                        continue;
                    }
                    if (Array.isArray(value)) {
                        for (const singleValue of value){
                            this.append(key, singleValue);
                        }
                    } else {
                        this.append(key, value);
                    }
                }
            }
        }
    }
    /**
     * Append a key and value to the headers, while filtering any key named
     * `cookie`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append)
     *
     * @param key The key to append in the headers
     * @param value The value to append for the key in the headers
     */ append(key, value) {
        if (typeof key !== "string" || typeof value !== "string") {
            return;
        }
        if (key.toLowerCase() !== "cookie") {
            super.append(key, value);
        }
    }
    /**
     * Set a key and value in the headers, but filtering any key named `cookie`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set)
     *
     * @param key The key to set in the headers
     * @param value The value to set for the key in the headers
     */ set(key, value) {
        if (typeof key !== "string" || typeof value !== "string") {
            return;
        }
        if (key.toLowerCase() !== "cookie") {
            super.set(key, value);
        }
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/runtime/edge-light.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
  This file is mostly a duplication of `index.ts` with the `process` lookup
  removed. We do this because Next.js uses an error-prone method for showing
  a warning when compiling for the edge runtime.
*/ // This code was improved by detection mechanisms in
// https://github.com/unjs/std-env/blob/b4ef16832baf4594ece7796a2c1805712fde70a3/src/runtimes.ts
//
// MIT License
//
// Copyright (c) Pooya Parsa <pooya@pi0.io>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
__turbopack_context__.s({
    "runtime": (()=>runtime)
});
function runtime() {
    // The detection order matters in this function because some platforms will
    // implement compatibility layers, but we want to detect them accurately.
    // https://developers.cloudflare.com/workers/configuration/compatibility-dates/#global-navigator
    if (typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") {
        return "workerd";
    }
    if (typeof Deno !== "undefined") {
        return "deno";
    }
    if (typeof Bun !== "undefined") {
        return "bun";
    }
    if (typeof ("TURBOPACK compile-time value", "edge-runtime") !== "undefined") {
        return "edge-light";
    }
    // Unknown or unsupported runtime
    return "";
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/hasher.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bool": (()=>bool),
    "makeHasher": (()=>makeHasher),
    "string": (()=>string),
    "stringSliceOrdered": (()=>stringSliceOrdered),
    "uint32": (()=>uint32)
});
class Sha256 {
    encoder;
    subtle;
    buf;
    constructor(subtle){
        this.subtle = subtle;
        this.encoder = new TextEncoder();
        this.buf = "";
    }
    writeString(data) {
        this.buf += data;
    }
    async digest() {
        const buf = this.encoder.encode(this.buf);
        const digest = await this.subtle.digest("SHA-256", buf);
        return new Uint8Array(digest);
    }
}
// After this, it needs to wrap to 0
const maxUint32 = 4294967295;
const fieldSeparator = ":";
const itemSeparator = ",";
function bool(key, value) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        if (value) {
            data.writeString("true");
        } else {
            data.writeString("false");
        }
    };
}
function uint32(key, value) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        if (value > maxUint32) {
            data.writeString("0");
        } else {
            data.writeString(value.toFixed(0));
        }
    };
}
function string(key, value) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        data.writeString(`"`);
        data.writeString(value.replaceAll(`"`, `\\"`));
        data.writeString(`"`);
    };
}
function stringSliceOrdered(key, values) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        data.writeString("[");
        for (const value of Array.from(values).sort()){
            data.writeString(`"`);
            data.writeString(value.replaceAll(`"`, `\\"`));
            data.writeString(`"`);
            data.writeString(itemSeparator);
        }
        data.writeString("]");
    };
}
function makeHasher(subtle) {
    return async function hash(...hashers) {
        const h = new Sha256(subtle);
        for (const hasher of hashers){
            hasher(h);
            h.writeString(itemSeparator);
        }
        const digest = await h.digest();
        return hex(digest);
    };
}
// Hex encoding logic from https://github.com/feross/buffer but adjusted for
// our use.
//
// Licensed: The MIT License (MIT)
//
// Copyright (c) Feross Aboukhadijeh, and other contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// https://github.com/feross/buffer/blob/5857e295f4d37e3ad02c3abcbf7e8e5ef51f3be6/index.js#L2096-L2106
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j){
            table[i16 + j] = alphabet[i] + alphabet[j];
        }
    }
    return table;
}();
// https://github.com/feross/buffer/blob/5857e295f4d37e3ad02c3abcbf7e8e5ef51f3be6/index.js#L1085-L1096
function hex(buf) {
    const len = buf.length;
    const start = 0;
    const end = len;
    let out = "";
    for(let i = start; i < end; ++i){
        out += hexSliceLookupTable[buf[i]];
    }
    return out;
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/edge-light.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hash": (()=>hash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/hasher.js [middleware-edge] (ecmascript)");
;
;
const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["makeHasher"])(crypto.subtle);
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/edge-light.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/hasher.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/edge-light.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/cache/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MemoryCache": (()=>MemoryCache)
});
function nowInSeconds() {
    return Math.floor(Date.now() / 1000);
}
class Bucket {
    expires;
    data;
    constructor(){
        this.expires = new Map();
        this.data = new Map();
    }
    get(key) {
        const now = nowInSeconds();
        const expiresAt = this.expires.get(key) ?? now;
        const ttl = expiresAt - now;
        if (ttl > 0) {
            return [
                this.data.get(key),
                ttl
            ];
        } else {
            // Cleanup if expired
            this.expires.delete(key);
            this.data.delete(key);
            return [
                undefined,
                0
            ];
        }
    }
    set(key, value, ttl) {
        const expiresAt = nowInSeconds() + ttl;
        this.expires.set(key, expiresAt);
        this.data.set(key, value);
    }
}
class MemoryCache {
    namespaces;
    constructor(){
        this.namespaces = new Map();
    }
    async get(namespace, key) {
        if (typeof namespace !== "string") {
            throw new Error("`namespace` must be a string");
        }
        if (typeof key !== "string") {
            throw new Error("`key` must be a string");
        }
        const namespaceCache = this.namespaces.get(namespace);
        if (typeof namespaceCache === "undefined") {
            return [
                undefined,
                0
            ];
        }
        return namespaceCache.get(key);
    }
    set(namespace, key, value, ttl) {
        if (typeof namespace !== "string") {
            throw new Error("`namespace` must be a string");
        }
        if (typeof key !== "string") {
            throw new Error("`key` must be a string");
        }
        const namespaceCache = this.namespaces.get(namespace) ?? new Bucket();
        namespaceCache.set(key, value, ttl);
        this.namespaces.set(namespace, namespaceCache);
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/arcjet/index.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>arcjet),
    "detectBot": (()=>detectBot),
    "fixedWindow": (()=>fixedWindow),
    "protectSignup": (()=>protectSignup),
    "sensitiveInfo": (()=>sensitiveInfo),
    "shield": (()=>shield),
    "slidingWindow": (()=>slidingWindow),
    "tokenBucket": (()=>tokenBucket),
    "validateEmail": (()=>validateEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/protocol/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/protocol/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/duration/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/headers/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$runtime$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/runtime/edge-light.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/edge-light.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/edge-light.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/hasher.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$cache$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/cache/index.js [middleware-edge] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
function errorMessage(err) {
    if (err) {
        if (typeof err === "string") {
            return err;
        }
        if (typeof err === "object" && "message" in err && typeof err.message === "string") {
            return err.message;
        }
    }
    return "Unknown problem";
}
const knownFields = [
    "ip",
    "method",
    "protocol",
    "host",
    "path",
    "headers",
    "body",
    "email",
    "cookies",
    "query"
];
function isUnknownRequestProperty(key) {
    return !knownFields.includes(key);
}
function isEmailType(type) {
    return type === "FREE" || type === "DISPOSABLE" || type === "NO_MX_RECORDS" || type === "NO_GRAVATAR" || type === "INVALID";
}
class Performance {
    log;
    constructor(logger){
        this.log = logger;
    }
    // TODO(#2020): We should no-op this if loglevel is not `debug` to do less work
    measure(label) {
        const start = performance.now();
        return ()=>{
            const end = performance.now();
            const diff = end - start;
            this.log.debug("LATENCY %s: %sms", label, diff.toFixed(3));
        };
    }
}
function toString(value) {
    if (typeof value === "string") {
        return value;
    }
    if (typeof value === "number") {
        return `${value}`;
    }
    if (typeof value === "boolean") {
        return value ? "true" : "false";
    }
    return "<unsupported value>";
}
// This is the Symbol that Vercel defines in their infrastructure to access the
// Context (where available). The Context can contain the `waitUntil` function.
// https://github.com/vercel/vercel/blob/930d7fb892dc26f240f2b950d963931c45e1e661/packages/functions/src/get-context.ts#L6
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function lookupWaitUntil() {
    const fromSymbol = globalThis;
    if (typeof fromSymbol[SYMBOL_FOR_REQ_CONTEXT] === "object" && fromSymbol[SYMBOL_FOR_REQ_CONTEXT] !== null && "get" in fromSymbol[SYMBOL_FOR_REQ_CONTEXT] && typeof fromSymbol[SYMBOL_FOR_REQ_CONTEXT].get === "function") {
        const vercelCtx = fromSymbol[SYMBOL_FOR_REQ_CONTEXT].get();
        if (typeof vercelCtx === "object" && vercelCtx !== null && "waitUntil" in vercelCtx && typeof vercelCtx.waitUntil === "function") {
            return vercelCtx.waitUntil;
        }
    }
}
function toAnalyzeRequest(request) {
    const headers = {};
    if (typeof request.headers !== "undefined") {
        for (const [key, value] of request.headers.entries()){
            headers[key] = value;
        }
    }
    return {
        ...request,
        headers
    };
}
function extraProps(details) {
    const extra = new Map();
    for (const [key, value] of Object.entries(details)){
        if (isUnknownRequestProperty(key)) {
            extra.set(key, toString(value));
        }
    }
    return Object.fromEntries(extra.entries());
}
function createTypeValidator(...types) {
    return (key, value)=>{
        const typeOfValue = typeof value;
        if (!types.includes(typeOfValue)) {
            if (types.length === 1) {
                throw new Error(`invalid type for \`${key}\` - expected ${types[0]}`);
            } else {
                throw new Error(`invalid type for \`${key}\` - expected one of ${types.join(", ")}`);
            }
        } else {
            return false;
        }
    };
}
function createValueValidator(// This uses types to ensure we have at least 2 values
...values) {
    return (key, value)=>{
        // We cast the values to unknown because the optionValue isn't known but
        // we only want to use `values` on string enumerations
        if (!values.includes(value)) {
            throw new Error(`invalid value for \`${key}\` - expected one of ${values.map((value)=>`'${value}'`).join(", ")}`);
        }
    };
}
function createArrayValidator(validate) {
    return (key, value)=>{
        if (Array.isArray(value)) {
            for (const [idx, item] of value.entries()){
                validate(`${key}[${idx}]`, item);
            }
        } else {
            throw new Error(`invalid type for \`${key}\` - expected an array`);
        }
    };
}
function createValidator({ rule, validations }) {
    return (options)=>{
        for (const { key, validate, required } of validations){
            if (required && !Object.hasOwn(options, key)) {
                throw new Error(`\`${rule}\` options error: \`${key}\` is required`);
            }
            const value = options[key];
            // The `required` flag is checked above, so these should only be validated
            // if the value is not undefined.
            if (typeof value !== "undefined") {
                try {
                    validate(key, value);
                } catch (err) {
                    throw new Error(`\`${rule}\` options error: ${errorMessage(err)}`);
                }
            }
        }
    };
}
const validateString = createTypeValidator("string");
const validateNumber = createTypeValidator("number");
const validateBoolean = createTypeValidator("boolean");
const validateFunction = createTypeValidator("function");
const validateStringOrNumber = createTypeValidator("string", "number");
const validateStringArray = createArrayValidator(validateString);
const validateMode = createValueValidator("LIVE", "DRY_RUN");
const validateEmailTypes = createArrayValidator(createValueValidator("DISPOSABLE", "FREE", "NO_MX_RECORDS", "NO_GRAVATAR", "INVALID"));
const validateTokenBucketOptions = createValidator({
    rule: "tokenBucket",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "refillRate",
            required: true,
            validate: validateNumber
        },
        {
            key: "interval",
            required: true,
            validate: validateStringOrNumber
        },
        {
            key: "capacity",
            required: true,
            validate: validateNumber
        }
    ]
});
const validateFixedWindowOptions = createValidator({
    rule: "fixedWindow",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "max",
            required: true,
            validate: validateNumber
        },
        {
            key: "window",
            required: true,
            validate: validateStringOrNumber
        }
    ]
});
const validateSlidingWindowOptions = createValidator({
    rule: "slidingWindow",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "max",
            required: true,
            validate: validateNumber
        },
        {
            key: "interval",
            required: true,
            validate: validateStringOrNumber
        }
    ]
});
const validateSensitiveInfoOptions = createValidator({
    rule: "sensitiveInfo",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        },
        {
            key: "contextWindowSize",
            required: false,
            validate: validateNumber
        },
        {
            key: "detect",
            required: false,
            validate: validateFunction
        }
    ]
});
const validateEmailOptions = createValidator({
    rule: "validateEmail",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "block",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "allow",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "deny",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "requireTopLevelDomain",
            required: false,
            validate: validateBoolean
        },
        {
            key: "allowDomainLiteral",
            required: false,
            validate: validateBoolean
        }
    ]
});
const validateBotOptions = createValidator({
    rule: "detectBot",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        }
    ]
});
const validateShieldOptions = createValidator({
    rule: "shield",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        }
    ]
});
const Priority = {
    SensitiveInfo: 1,
    Shield: 2,
    RateLimit: 3,
    BotDetection: 4,
    EmailValidation: 5
};
function isRateLimitRule(rule) {
    return rule.type === "RATE_LIMIT";
}
/**
 * Arcjet token bucket rate limiting rule. Applying this rule sets a token
 * bucket rate limit.
 *
 * This algorithm is based on a bucket filled with a specific number of tokens.
 * Each request withdraws some amount of tokens from the bucket and the bucket
 * is refilled at a fixed rate. Once the bucket is empty, the client is blocked
 * until the bucket refills.
 *
 * This algorithm is useful when you want to allow clients to make a burst of
 * requests and then still be able to make requests at a slower rate.
 *
 * @param {TokenBucketRateLimitOptions} options - The options for the token
 * bucket rate limiting rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate limit is
 * exceeded, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {number} options.refillRate - The number of tokens to add to the
 * bucket at each interval. For example, if you set the interval to 60 and the
 * refill rate to 10, the bucket will refill 10 tokens every 60 seconds.
 * @param {string | number} options.interval - The time interval for the refill
 * rate. This can be a string like `"60s"` for 60 seconds, `"1h45m"` for 1 hour
 * and 45 minutes, or a number like `60` for 60 seconds. Valid string time units
 * are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.capacity - The maximum number of tokens the bucket
 * can hold. The bucket starts at full capacity and will refill until it hits
 * the capacity.
 * @returns {Primitive} The token bucket rule to provide to the SDK in the
 * `rules` option.
 *
 * @example
 * ```ts
 * tokenBucket({ mode: "LIVE", refillRate: 10, interval: "60s", capacity: 100 });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     tokenBucket({
 *       mode: "LIVE",
 *       refillRate: 10,
 *       interval: "60s",
 *       capacity: 100,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/rate-limiting/concepts
 * @link https://docs.arcjet.com/rate-limiting/algorithms#token-bucket
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function tokenBucket(options) {
    validateTokenBucketOptions(options);
    const type = "RATE_LIMIT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const refillRate = options.refillRate;
    const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(options.interval);
    const capacity = options.capacity;
    const rule = {
        type,
        version,
        priority: Priority.RateLimit,
        mode,
        characteristics,
        algorithm: "TOKEN_BUCKET",
        refillRate,
        interval,
        capacity,
        validate () {},
        async protect (context, details) {
            const localCharacteristics = characteristics ?? context.characteristics;
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("algorithm", "TOKEN_BUCKET"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("characteristics", localCharacteristics), // Match is deprecated so it is always an empty string in the newest SDKs
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("match", ""), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("refillRate", refillRate), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("interval", interval), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("capacity", capacity));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateFingerprint"])(analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached && cached.reason.isRateLimit()) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    // We rebuild the `ArcjetRateLimitReason` because we need to adjust
                    // the `reset` based on the current time-to-live
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                        max: cached.reason.max,
                        remaining: cached.reason.remaining,
                        reset: ttl,
                        window: cached.reason.window,
                        resetTime: cached.reason.resetTime
                    })
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                    max: 0,
                    remaining: 0,
                    reset: 0,
                    window: 0,
                    resetTime: new Date()
                })
            });
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet fixed window rate limiting rule. Applying this rule sets a fixed
 * window rate limit which tracks the number of requests made by a client over a
 * fixed time window.
 *
 * This is the simplest algorithm. It tracks the number of requests made by a
 * client over a fixed time window e.g. 60 seconds. If the client exceeds the
 * limit, they are blocked until the window expires.
 *
 * This algorithm is useful when you want to apply a simple fixed limit in a
 * fixed time window. For example, a simple limit on the total number of
 * requests a client can make. However, it can be susceptible to the stampede
 * problem where a client makes a burst of requests at the start of a window and
 * then is blocked for the rest of the window. The sliding window algorithm can
 * be used to avoid this.
 *
 * @param {FixedWindowRateLimitOptions} options - The options for the fixed
 * window rate limiting rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate limit is
 * exceeded, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {string | number} options.window - The fixed time window. This can be
 * a string like `"60s"` for 60 seconds, `"1h45m"` for 1 hour and 45 minutes, or
 * a number like `60` for 60 seconds. Valid string time units are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.max - The maximum number of requests allowed in the
 * fixed time window.
 * @returns {Primitive} The fixed window rule to provide to the SDK in the
 * `rules` option.
 *
 * @example
 * ```ts
 * fixedWindow({ mode: "LIVE", window: "60s", max: 100 });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *    key: process.env.ARCJET_KEY,
 *   rules: [
 *     fixedWindow({
 *       mode: "LIVE",
 *       window: "60s",
 *       max: 100,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/rate-limiting/concepts
 * @link https://docs.arcjet.com/rate-limiting/algorithms#fixed-window
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function fixedWindow(options) {
    validateFixedWindowOptions(options);
    const type = "RATE_LIMIT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const max = options.max;
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(options.window);
    const rule = {
        type,
        version,
        priority: Priority.RateLimit,
        mode,
        characteristics,
        algorithm: "FIXED_WINDOW",
        max,
        window,
        validate () {},
        async protect (context, details) {
            const localCharacteristics = characteristics ?? context.characteristics;
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("algorithm", "FIXED_WINDOW"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("characteristics", localCharacteristics), // Match is deprecated so it is always an empty string in the newest SDKs
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("match", ""), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("max", max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("window", window));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateFingerprint"])(analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached && cached.reason.isRateLimit()) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    // We rebuild the `ArcjetRateLimitReason` because we need to adjust
                    // the `reset` based on the current time-to-live
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                        max: cached.reason.max,
                        remaining: cached.reason.remaining,
                        reset: ttl,
                        window: cached.reason.window,
                        resetTime: cached.reason.resetTime
                    })
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                    max: 0,
                    remaining: 0,
                    reset: 0,
                    window: 0
                })
            });
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet sliding window rate limiting rule. Applying this rule sets a sliding
 * window rate limit which tracks the number of requests made by a client over a
 * sliding window so that the window moves with time.
 *
 * This algorithm is useful to avoid the stampede problem of the fixed window.
 * It provides smoother rate limiting over time and can prevent a client from
 * making a burst of requests at the start of a window and then being blocked
 * for the rest of the window.
 *
 * @param {SlidingWindowRateLimitOptions} options - The options for the sliding
 * window rate limiting rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate limit is
 * exceeded, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {string | number} options.interval - The time interval for the rate
 * limit. This can be a string like `"60s"` for 60 seconds, `"1h45m"` for 1 hour
 * and 45 minutes, or a number like `60` for 60 seconds. Valid string time units
 * are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.max - The maximum number of requests allowed in the
 * sliding time window.
 * @returns {Primitive} The sliding window rule to provide to the SDK in the
 * `rules` option.
 *
 * @example
 * ```ts
 * slidingWindow({ mode: "LIVE", interval: "60s", max: 100 });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     slidingWindow({
 *       mode: "LIVE",
 *       interval: "60s",
 *       max: 100,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/rate-limiting/concepts
 * @link https://docs.arcjet.com/rate-limiting/algorithms#sliding-window
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function slidingWindow(options) {
    validateSlidingWindowOptions(options);
    const type = "RATE_LIMIT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const max = options.max;
    const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(options.interval);
    const rule = {
        type,
        version,
        priority: Priority.RateLimit,
        mode,
        characteristics,
        algorithm: "SLIDING_WINDOW",
        max,
        interval,
        validate () {},
        async protect (context, details) {
            const localCharacteristics = characteristics ?? context.characteristics;
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("algorithm", "SLIDING_WINDOW"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("characteristics", localCharacteristics), // Match is deprecated so it is always an empty string in the newest SDKs
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("match", ""), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("max", max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("interval", interval));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateFingerprint"])(analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached && cached.reason.isRateLimit()) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    // We rebuild the `ArcjetRateLimitReason` because we need to adjust
                    // the `reset` based on the current time-to-live
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                        max: cached.reason.max,
                        remaining: cached.reason.remaining,
                        reset: ttl,
                        window: cached.reason.window,
                        resetTime: cached.reason.resetTime
                    })
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                    max: 0,
                    remaining: 0,
                    reset: 0,
                    window: 0
                })
            });
        }
    };
    return [
        rule
    ];
}
function protocolSensitiveInfoEntitiesToAnalyze(entity) {
    if (typeof entity !== "string") {
        throw new Error("invalid entity type");
    }
    if (entity === "EMAIL") {
        return {
            tag: "email"
        };
    }
    if (entity === "PHONE_NUMBER") {
        return {
            tag: "phone-number"
        };
    }
    if (entity === "IP_ADDRESS") {
        return {
            tag: "ip-address"
        };
    }
    if (entity === "CREDIT_CARD_NUMBER") {
        return {
            tag: "credit-card-number"
        };
    }
    return {
        tag: "custom",
        val: entity
    };
}
function analyzeSensitiveInfoEntitiesToString(entity) {
    if (entity.tag === "email") {
        return "EMAIL";
    }
    if (entity.tag === "ip-address") {
        return "IP_ADDRESS";
    }
    if (entity.tag === "credit-card-number") {
        return "CREDIT_CARD_NUMBER";
    }
    if (entity.tag === "phone-number") {
        return "PHONE_NUMBER";
    }
    return entity.val;
}
function convertAnalyzeDetectedSensitiveInfoEntity(detectedEntities) {
    return detectedEntities.map((detectedEntity)=>{
        return {
            ...detectedEntity,
            identifiedType: analyzeSensitiveInfoEntitiesToString(detectedEntity.identifiedType)
        };
    });
}
/**
 * Arcjet sensitive information detection rule. Applying this rule protects
 * against clients sending you sensitive information such as personally
 * identifiable information (PII) that you do not wish to handle. The rule runs
 * entirely locally so no data ever leaves your environment.
 *
 * This rule includes built-in detections for email addresses, credit/debit card
 * numbers, IP addresses, and phone numbers. You can also provide a custom
 * detection function to identify additional sensitive information.
 *
 * @param {SensitiveInfoOptions} options - The options for the sensitive
 * information detection rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when any of the
 * configured sensitive information types are detected, and `"DRY_RUN"` will
 * allow all requests while still providing access to the rule results. Defaults
 * to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetSensitiveInfoType>} options.deny - The list of sensitive
 * information types to deny. If provided, the sensitive information types in
 * this list will be denied. You may only provide either `allow` or `deny`, not
 * both. Specify one or more of the following:
 *
 * - `"EMAIL"`
 * - `"PHONE_NUMBER"`
 * - `"IP_ADDRESS"`
 * - `"CREDIT_CARD_NUMBER"`
 * @param {Array<ArcjetSensitiveInfoType>} options.allow - The list of sensitive
 * information types to allow. If provided, types in this list will be allowed
 * and all others will be denied. You may only provide either `allow` or `deny`,
 * not both. The same options apply as for `deny`.
 * @param {DetectSensitiveInfoEntities} options.detect - A custom detection
 * function. The function will take a list of tokens and must return a list of
 * either `undefined`, if the corresponding token in the input list is not
 * sensitive, or the name of the entity if it does match. The number of tokens
 * that are provided to the function is controlled by the `contextWindowSize`
 * option, which defaults to `1`. If you need additional context to perform
 * detections then you can increase this value.
 * @param {number} options.contextWindowSize - The number of tokens to provide
 * to the custom detection function. This defaults to 1 if not specified.
 * @returns {Primitive} The sensitive information rule to provide to the SDK in
 * the `rules` option.
 *
 * @example
 * ```ts
 * sensitiveInfo({ mode: "LIVE", deny: ["EMAIL"] });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     sensitiveInfo({
 *       mode: "LIVE",
 *       deny: ["EMAIL"],
 *     })
 *   ],
 * });
 * ```
 * @example
 * Custom detection function:
 * ```ts
 * function detectDash(tokens: string[]): Array<"CONTAINS_DASH" | undefined> {
 *   return tokens.map((token) => {
 *     if (token.includes("-")) {
 *       return "CONTAINS_DASH";
 *     }
 *   });
 * }
 *
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     sensitiveInfo({
 *       mode: "LIVE",
 *       deny: ["EMAIL", "CONTAINS_DASH"],
 *       detect: detectDash,
 *       contextWindowSize: 2,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/sensitive-info/concepts
 * @link https://docs.arcjet.com/sensitive-info/reference
 */ function sensitiveInfo(options) {
    validateSensitiveInfoOptions(options);
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`sensitiveInfo` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`sensitiveInfo` options error: either `allow` or `deny` must be specified");
    }
    const type = "SENSITIVE_INFO";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow || [];
    const deny = options.deny || [];
    const rule = {
        version,
        priority: Priority.SensitiveInfo,
        type,
        mode,
        allow,
        deny,
        validate (context, details) {},
        async protect (context, details) {
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("allow", allow), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("deny", deny));
            const { fingerprint } = context;
            // No cache is implemented here because the fingerprint can be the same
            // while the request body changes. This is also why the `sensitiveInfo`
            // rule results always have a `ttl` of 0.
            const body = await context.getBody();
            if (typeof body === "undefined") {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state: "NOT_RUN",
                    conclusion: "ERROR",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("Couldn't read the body of the request to perform sensitive info identification.")
                });
            }
            let convertedDetect = undefined;
            if (typeof options.detect !== "undefined") {
                const detect = options.detect;
                convertedDetect = (tokens)=>{
                    return detect(tokens).filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
                };
            }
            let entitiesTag = "allow";
            let entitiesVal = [];
            if (Array.isArray(options.allow)) {
                entitiesTag = "allow";
                entitiesVal = options.allow.filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
            }
            if (Array.isArray(options.deny)) {
                entitiesTag = "deny";
                entitiesVal = options.deny.filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
            }
            const entities = {
                tag: entitiesTag,
                val: entitiesVal
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["detectSensitiveInfo"])(context, body, entities, options.contextWindowSize || 1, convertedDetect);
            const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
            const reason = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetSensitiveInfoReason"]({
                denied: convertAnalyzeDetectedSensitiveInfoEntity(result.denied),
                allowed: convertAnalyzeDetectedSensitiveInfoEntity(result.allowed)
            });
            if (result.denied.length === 0) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "ALLOW",
                    reason
                });
            } else {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "DENY",
                    reason
                });
            }
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet email validation rule. Applying this rule allows you to validate &
 * verify an email address.
 *
 * The first step of the analysis is to validate the email address syntax. This
 * runs locally within the SDK and validates the email address is in the correct
 * format. If the email syntax is valid, the SDK will pass the email address to
 * the Arcjet cloud API to verify the email address. This performs several
 * checks, depending on the rule configuration.
 *
 * @param {EmailOptions} options - The options for the email validation rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block email addresses based on the
 * configuration, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetEmailType>} options.deny - The list of email types to
 * deny. If provided, the email types in this list will be denied. You may only
 * provide either `allow` or `deny`, not both. Specify one or more of the
 * following:
 *
 * - `"DISPOSABLE"` - Disposable email addresses.
 * - `"FREE"` - Free email addresses.
 * - `"NO_MX_RECORDS"` - Email addresses with no MX records.
 * - `"NO_GRAVATAR"` - Email addresses with no Gravatar.
 * - `"INVALID"` - Invalid email addresses.
 *
 * @param {Array<ArcjetEmailType>} options.allow - The list of email types to
 * allow. If provided, email addresses in this list will be allowed and all
 * others will be denied. You may only provide either `allow` or `deny`, not
 * both. The same options apply as for `deny`.
 * @returns {Primitive} The email rule to provide to the SDK in the `rules`
 * option.
 *
 * @example
 * ```ts
 * validateEmail({ mode: "LIVE", deny: ["DISPOSABLE", "INVALID"] });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     validateEmail({
 *       mode: "LIVE",
 *       deny: ["DISPOSABLE", "INVALID"]
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/email-validation/concepts
 * @link https://docs.arcjet.com/email-validation/reference
 */ function validateEmail(options) {
    validateEmailOptions(options);
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`validateEmail` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow !== "undefined" && typeof options.block !== "undefined") {
        throw new Error("`validateEmail` options error: `allow` and `block` cannot be provided together");
    }
    if (typeof options.deny !== "undefined" && typeof options.block !== "undefined") {
        throw new Error("`validateEmail` options error: `deny` and `block` cannot be provided together, `block` is now deprecated so `deny` should be preferred.");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined" && typeof options.block === "undefined") {
        throw new Error("`validateEmail` options error: either `allow` or `deny` must be specified");
    }
    const type = "EMAIL";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow ?? [];
    const deny = options.deny ?? options.block ?? [];
    const requireTopLevelDomain = options.requireTopLevelDomain ?? true;
    const allowDomainLiteral = options.allowDomainLiteral ?? false;
    let config = {
        tag: "deny-email-validation-config",
        val: {
            requireTopLevelDomain,
            allowDomainLiteral,
            deny: []
        }
    };
    if (typeof options.allow !== "undefined") {
        config = {
            tag: "allow-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                allow: options.allow
            }
        };
    }
    if (typeof options.deny !== "undefined") {
        config = {
            tag: "deny-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                deny: options.deny
            }
        };
    }
    if (typeof options.block !== "undefined") {
        config = {
            tag: "deny-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                deny: options.block
            }
        };
    }
    const rule = {
        version,
        priority: Priority.EmailValidation,
        type,
        mode,
        allow,
        deny,
        requireTopLevelDomain,
        allowDomainLiteral,
        validate (context, details) {
            assert(typeof details.email !== "undefined", "ValidateEmail requires `email` to be set.");
        },
        async protect (context, { email }) {
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("allow", allow), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("deny", deny), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["bool"])("requireTopLevelDomain", requireTopLevelDomain), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["bool"])("allowDomainLiteral", allowDomainLiteral));
            const { fingerprint } = context;
            // No cache is implemented here because the fingerprint can be the same
            // while the email changes. This is also why the `email` rule results
            // always have a `ttl` of 0.
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidEmail"])(context, email, config);
            const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
            if (result.validity === "valid") {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "ALLOW",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetEmailReason"]({
                        emailTypes: []
                    })
                });
            } else {
                const typedEmailTypes = result.blocked.filter(isEmailType);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "DENY",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetEmailReason"]({
                        emailTypes: typedEmailTypes
                    })
                });
            }
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet bot detection rule. Applying this rule allows you to manage traffic by
 * automated clients and bots.
 *
 * Bots can be good (such as search engine crawlers or monitoring agents) or bad
 * (such as scrapers or automated scripts). Arcjet allows you to configure which
 * bots you want to allow or deny by specific bot names e.g. curl, as well as by
 * category e.g. search engine bots.
 *
 * Bots are detected based on various signals such as the user agent, IP
 * address, DNS records, and more.
 *
 * @param {BotOptions} options - The options for the bot rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block detected bots, and `"DRY_RUN"`
 * will allow all requests while still providing access to the rule results.
 * Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.allow - The
 * list of bots to allow. If provided, only the bots in this list will be
 * allowed and any other detected bot will be denied. If empty, all bots will be
 * denied. You may only provide either `allow` or `deny`, not both. You can use
 * specific bots e.g. `"CURL"` will allow the default user-agent of the `curl`
 * tool. You can also use categories e.g. `"CATEGORY:SEARCH_ENGINE"` will allow
 * all search engine bots. See
 * https://docs.arcjet.com/bot-protection/identifying-bots for the full list of
 * bots and categories.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.deny - The
 * list of bots to deny. If provided, the bots in this list will be denied and
 * all other detected bots will be allowed. You may only provide either `allow`
 * or `deny`, not both. The same options apply as for `allow`.
 * @returns {Primitive} The bot rule to provide to the SDK in the `rules`
 * option.
 *
 * @example
 * Allows search engine bots and curl, denies all other bots
 *
 * ```ts
 * detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE", "CURL"] });
 * ```
 * @example
 * Allows search engine bots and curl, denies all other bots
 *
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     detectBot({
 *       mode: "LIVE",
 *       allow: ["CATEGORY:SEARCH_ENGINE", "CURL"]
 *     })
 *   ],
 * });
 * ```
 * @example
 * Denies AI crawlers, allows all other bots
 *
 * ```ts
 * detectBot({ mode: "LIVE", deny: ["CATEGORY:AI"] });
 * ```
 * @example
 * Denies AI crawlers, allows all other bots
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     detectBot({
 *       mode: "LIVE",
 *       deny: ["CATEGORY:AI"]
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/bot-protection/concepts
 * @link https://docs.arcjet.com/bot-protection/identifying-bots
 * @link https://docs.arcjet.com/bot-protection/reference
 */ function detectBot(options) {
    validateBotOptions(options);
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`detectBot` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`detectBot` options error: either `allow` or `deny` must be specified");
    }
    const type = "BOT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow ?? [];
    const deny = options.deny ?? [];
    let config = {
        tag: "allowed-bot-config",
        val: {
            entities: [],
            skipCustomDetect: true
        }
    };
    if (typeof options.allow !== "undefined") {
        config = {
            tag: "allowed-bot-config",
            val: {
                entities: options.allow,
                skipCustomDetect: true
            }
        };
    }
    if (typeof options.deny !== "undefined") {
        config = {
            tag: "denied-bot-config",
            val: {
                entities: options.deny,
                skipCustomDetect: true
            }
        };
    }
    const rule = {
        version,
        priority: Priority.BotDetection,
        type,
        mode,
        allow,
        deny,
        validate (context, details) {
            if (typeof details.headers === "undefined") {
                throw new Error("bot detection requires `headers` to be set");
            }
            if (typeof details.headers.has !== "function") {
                throw new Error("bot detection requires `headers` to extend `Headers`");
            }
            if (!details.headers.has("user-agent")) {
                throw new Error("bot detection requires user-agent header");
            }
        },
        /**
         * Attempts to call the bot detection on the headers.
         */ async protect (context, request) {
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("allow", allow), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("deny", deny));
            const { fingerprint } = context;
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    reason: cached.reason
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["detectBot"])(context, toAnalyzeRequest(request), config);
            const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
            // If this is a bot and of a type that we want to block, then block!
            if (result.denied.length > 0) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 60,
                    state,
                    conclusion: "DENY",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetBotReason"]({
                        allowed: result.allowed,
                        denied: result.denied,
                        verified: result.verified,
                        spoofed: result.spoofed
                    })
                });
            } else {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "ALLOW",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetBotReason"]({
                        allowed: result.allowed,
                        denied: result.denied,
                        verified: result.verified,
                        spoofed: result.spoofed
                    })
                });
            }
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet Shield WAF rule. Applying this rule protects your application against
 * common attacks, including the OWASP Top 10.
 *
 * The Arcjet Shield WAF analyzes every request to your application to detect
 * suspicious activity. Once a certain suspicion threshold is reached,
 * subsequent requests from that client are blocked for a period of time.
 *
 * @param {ShieldOptions} options - The options for the Shield rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block suspicious requests, and
 * `"DRY_RUN"` will allow all requests while still providing access to the rule
 * results. Defaults to `"DRY_RUN"` if not specified.
 * @returns {Primitive} The Shield rule to provide to the SDK in the `rules`
 * option.
 *
 * @example
 * ```ts
 * shield({ mode: "LIVE" });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [shield({ mode: "LIVE" })],
 * });
 * ```
 * @link https://docs.arcjet.com/shield/concepts
 * @link https://docs.arcjet.com/shield/reference
 */ function shield(options) {
    validateShieldOptions(options);
    const type = "SHIELD";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const rule = {
        type,
        version,
        priority: Priority.Shield,
        mode,
        validate () {},
        async protect (context, details) {
            // TODO(#1989): Prefer characteristics defined on rule once available
            const localCharacteristics = context.characteristics;
            const ruleId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("type", type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["uint32"])("version", version), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["string"])("mode", mode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["stringSliceOrdered"])("characteristics", localCharacteristics));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateFingerprint"])(analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    reason: cached.reason
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetShieldReason"]({
                    shieldTriggered: false
                })
            });
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet signup form protection rule. Applying this rule combines rate
 * limiting, bot protection, and email validation to protect your signup forms
 * from abuse. Using this rule will configure the following:
 *
 * - Rate limiting - signup forms are a common target for bots. Arcjet’s rate
 *   limiting helps to prevent bots and other automated or malicious clients
 *   from submitting your signup form too many times in a short period of time.
 * - Bot protection - signup forms are usually exclusively used by humans, which
 *   means that any automated submissions to the form are likely to be
 *   fraudulent.
 * - Email validation - email addresses should be validated to ensure the signup
 *   is coming from a legitimate user with a real email address that can
 *   actually receive messages.
 *
 * @param {ProtectSignupOptions} options - The options for the signup form
 * protection rule.
 * @param {ArcjetMode} options.email.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block email addresses based on the
 * configuration, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetEmailType>} options.email.deny - The list of email types
 * to deny. If provided, the email types in this list will be denied. You may
 * only provide either `allow` or `deny`, not both. Specify one or more of the
 * following:
 *
 * - `"DISPOSABLE"` - Disposable email addresses.
 * - `"FREE"` - Free email addresses.
 * - `"NO_MX_RECORDS"` - Email addresses with no MX records.
 * - `"NO_GRAVATAR"` - Email addresses with no Gravatar.
 * - `"INVALID"` - Invalid email addresses.
 *
 * @param {Array<ArcjetEmailType>} options.email.allow - The list of email types
 * to allow. If provided, email addresses in this list will be allowed and all
 * others will be denied. You may only provide either `allow` or `deny`, not
 * both. The same options apply as for `deny`.
 * @param {ArcjetMode} options.bots.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block detected bots, and `"DRY_RUN"`
 * will allow all requests while still providing access to the rule results.
 * Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.bots.allow -
 * The list of bots to allow. If provided, only the bots in this list will be
 * allowed and any other detected bot will be denied. If empty, all bots will be
 * denied. You may only provide either `allow` or `deny`, not both. You can use
 * specific bots e.g. `"CURL"` will allow the default user-agent of the `curl`
 * tool. You can also use categories e.g. `"CATEGORY:SEARCH_ENGINE"` will allow
 * all search engine bots. See
 * https://docs.arcjet.com/bot-protection/identifying-bots for the full list of
 * bots and categories.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.bots.deny -
 * The list of bots to deny. If provided, the bots in this list will be denied
 * and all other detected bots will be allowed. You may only provide either
 * `allow` or `deny`, not both. The same options apply as for `allow`.
 * @param {SlidingWindowRateLimitOptions} options.rateLimit - The options for
 * the sliding window rate limiting rule.
 * @param {ArcjetMode} options.rateLimit.mode - The block mode of the rule,
 * either `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate
 * limit is exceeded, and `"DRY_RUN"` will allow all requests while still
 * providing access to the rule results. Defaults to `"DRY_RUN"` if not
 * specified.
 * @param {string | number} options.rateLimit.interval - The time interval for
 * the rate limit. This can be a string like `"60s"` for 60 seconds, `"1h45m"`
 * for 1 hour and 45 minutes, or a number like `60` for 60 seconds. Valid string
 * time units are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.rateLimit.max - The maximum number of requests
 * allowed in the sliding time window.
 * @returns {Primitive} The signup form protection rule to provide to the SDK in
 * the `rules` option.
 *
 * @example
 * Our recommended configuration for most signup forms is:
 *
 * - Block emails with invalid syntax, that are from disposable email providers,
 *   or do not have valid MX records configured.
 * - Block all bots.
 * - Apply a rate limit of 5 submissions per 10 minutes from a single IP
 *   address.
 *
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *    protectSignup({
 *      email: {
 *        mode: "LIVE",
 *        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
 *      },
 *      bots: {
 *        mode: "LIVE",
 *        allow: [], // block all detected bots
 *      },
 *      rateLimit: {
 *        mode: "LIVE",
 *        interval: "10m",
 *        max: 5,
 *      },
 *    }),
 *  ],
 * });
 * ```
 * @link https://docs.arcjet.com/signup-protection/concepts
 * @link https://docs.arcjet.com/signup-protection/reference
 */ function protectSignup(options) {
    return [
        ...slidingWindow(options.rateLimit),
        ...detectBot(options.bots),
        ...validateEmail(options.email)
    ];
}
/**
 * Create a new Arcjet client with the specified {@link ArcjetOptions}.
 *
 * @param options {ArcjetOptions} Arcjet configuration options.
 */ function arcjet(options) {
    // We destructure here to make the function signature neat when viewed by consumers
    const { key, rules } = options;
    const rt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$runtime$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["runtime"])();
    // TODO: Separate the ArcjetOptions from the SDK Options
    // It is currently optional in the options so users can override it via an SDK
    if (typeof options.log === "undefined") {
        throw new Error("Log is required");
    }
    const log = options.log;
    const perf = new Performance(log);
    // TODO(#207): Remove this when we can default the transport so client is not required
    // It is currently optional in the options so the Next SDK can override it for the user
    if (typeof options.client === "undefined") {
        throw new Error("Client is required");
    }
    const client = options.client;
    // A local cache of block decisions. Might be emphemeral per request,
    // depending on the way the runtime works, but it's worth a try.
    // TODO(#132): Support configurable caching
    const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$cache$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MemoryCache"]();
    const rootRules = rules.flat(1).sort((a, b)=>a.priority - b.priority);
    async function protect(rules, ctx, request) {
        // This goes against the type definition above, but users might call
        // `protect()` with no value and we don't want to crash
        if (typeof request === "undefined") {
            request = {};
        }
        const details = Object.freeze({
            ip: request.ip,
            method: request.method,
            protocol: request.protocol,
            host: request.host,
            path: request.path,
            headers: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](request.headers),
            cookies: request.cookies,
            query: request.query,
            // TODO(#208): Re-add body
            // body: request.body,
            extra: extraProps(request),
            email: typeof request.email === "string" ? request.email : undefined
        });
        const characteristics = options.characteristics ? [
            ...options.characteristics
        ] : [];
        const waitUntil = lookupWaitUntil();
        const baseContext = {
            key,
            log,
            characteristics,
            waitUntil,
            ...ctx
        };
        let fingerprint = "";
        const logFingerprintPerf = perf.measure("fingerprint");
        try {
            fingerprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateFingerprint"])(baseContext, toAnalyzeRequest(details));
            log.debug("fingerprint (%s): %s", rt, fingerprint);
        } catch (error) {
            log.error({
                error
            }, "Failed to build fingerprint. Please verify your Characteristics.");
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](`Failed to build fingerprint - ${errorMessage(error)}`),
                // No results because we couldn't create a fingerprint
                results: []
            });
            // TODO: Consider sending this to Report when we have an infallible fingerprint
            return decision;
        } finally{
            logFingerprintPerf();
        }
        const context = Object.freeze({
            ...baseContext,
            cache,
            fingerprint,
            runtime: rt
        });
        if (rules.length < 1) {
            log.warn("Calling `protect()` with no rules is deprecated. Did you mean to configure the Shield rule?");
        }
        if (rules.length > 10) {
            log.error("Failure running rules. Only 10 rules may be specified.");
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("Only 10 rules may be specified"),
                // No results because the sorted rules were too long and we don't want
                // to instantiate a ton of NOT_RUN results
                results: []
            });
            client.report(context, details, decision, // No rules because we've determined they were too long and we don't
            // want to try to send them to the server
            []);
            return decision;
        }
        const results = [];
        for(let idx = 0; idx < rules.length; idx++){
            // Default all rules to NOT_RUN/ALLOW before doing anything
            results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                // TODO(#4030): Figure out if we can get each Rule ID before they are run
                ruleId: "",
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetReason"]()
            });
            // Add top-level characteristics to all Rate Limit rules that don't already have
            // their own set of characteristics.
            const candidate_rule = rules[idx];
            if (isRateLimitRule(candidate_rule)) {
                if (typeof candidate_rule.characteristics === "undefined") {
                    candidate_rule.characteristics = characteristics;
                    rules[idx] = candidate_rule;
                }
            }
        }
        const logLocalPerf = perf.measure("local");
        try {
            for (const [idx, rule] of rules.entries()){
                // This re-assignment is a workaround to a TypeScript error with
                // assertions where the name was introduced via a destructure
                const localRule = rule;
                const logRulePerf = perf.measure(rule.type);
                try {
                    if (typeof localRule.validate !== "function") {
                        throw new Error("rule must have a `validate` function");
                    }
                    localRule.validate(context, details);
                    if (typeof localRule.protect !== "function") {
                        throw new Error("rule must have a `protect` function");
                    }
                    results[idx] = await localRule.protect(context, details);
                    // If a rule didn't return a rule result, we need to stub it to avoid
                    // crashing. This should only happen if a user writes a custom local
                    // rule incorrectly.
                    if (typeof results[idx] === "undefined") {
                        results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                            // TODO(#4030): If we can get the Rule ID before running rules,
                            // this can use it
                            ruleId: "",
                            fingerprint,
                            ttl: 0,
                            state: "RUN",
                            conclusion: "ERROR",
                            reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("rule result missing")
                        });
                    }
                    log.debug({
                        id: results[idx].ruleId,
                        rule: rule.type,
                        fingerprint,
                        path: details.path,
                        runtime: rt,
                        ttl: results[idx].ttl,
                        conclusion: results[idx].conclusion,
                        reason: results[idx].reason
                    }, "Local rule result:");
                } catch (err) {
                    log.error("Failure running rule: %s due to %s", rule.type, errorMessage(err));
                    results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        // TODO(#4030): Figure out if we can get a Rule ID in this error case
                        ruleId: "",
                        fingerprint,
                        ttl: 0,
                        state: "RUN",
                        conclusion: "ERROR",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](err)
                    });
                } finally{
                    logRulePerf();
                }
                const result = results[idx];
                if (result.isDenied()) {
                    // If the rule is not a DRY_RUN, we want to cache non-zero TTL results
                    // and return a DENY decision.
                    if (result.state !== "DRY_RUN") {
                        const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetDenyDecision"]({
                            ttl: result.ttl,
                            reason: result.reason,
                            results
                        });
                        // Only a DENY decision is reported to avoid creating 2 entries for
                        // a request. Upon ALLOW, the `decide` call will create an entry for
                        // the request.
                        client.report(context, details, decision, rules);
                        if (result.ttl > 0) {
                            log.debug({
                                fingerprint: result.fingerprint,
                                conclusion: result.conclusion,
                                reason: result.reason
                            }, "Caching decision for %d seconds", decision.ttl);
                            cache.set(result.ruleId, result.fingerprint, {
                                conclusion: result.conclusion,
                                reason: result.reason
                            }, result.ttl);
                        }
                        return decision;
                    }
                    log.warn(`Dry run mode is enabled for "%s" rule. Overriding decision. Decision was: DENY`, rule.type);
                }
            }
        } finally{
            logLocalPerf();
        }
        // With no cached values, we take a decision remotely. We use a timeout to
        // fail open.
        const logRemotePerf = perf.measure("remote");
        try {
            const logDediceApiPerf = perf.measure("decideApi");
            const decision = await client.decide(context, details, rules).finally(()=>{
                logDediceApiPerf();
            });
            // If the decision is to block and we have a non-zero TTL, we cache the
            // block locally
            if (decision.isDenied() && decision.ttl > 0) {
                log.debug("decide: Caching block locally for %d seconds", decision.ttl);
                for (const result of decision.results){
                    // Cache all DENY results for local cache lookups
                    if (result.conclusion === "DENY") {
                        cache.set(result.ruleId, result.fingerprint, {
                            conclusion: result.conclusion,
                            reason: result.reason
                        }, result.ttl);
                    }
                }
            }
            return decision;
        } catch (err) {
            log.error("Encountered problem getting remote decision: %s", errorMessage(err));
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](err),
                results
            });
            client.report(context, details, decision, rules);
            return decision;
        } finally{
            logRemotePerf();
        }
    }
    // This is a separate function so it can be called recursively
    function withRule(baseRules, rule) {
        const rules = [
            ...baseRules,
            ...rule
        ].sort((a, b)=>a.priority - b.priority);
        return Object.freeze({
            withRule (rule) {
                return withRule(rules, rule);
            },
            async protect (ctx, request) {
                return protect(rules, ctx, request);
            }
        });
    }
    return Object.freeze({
        withRule (rule) {
            return withRule(rootRules, rule);
        },
        async protect (ctx, request) {
            return protect(rootRules, ctx, request);
        }
    });
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/chat-ui/node_modules/arcjet/index.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/protocol/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/analyze/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/duration/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/headers/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$runtime$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/runtime/edge-light.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/stable-hash/edge-light.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$cache$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/cache/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/arcjet/index.js [middleware-edge] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/chat-ui/node_modules/@arcjet/ip/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>findIP),
    "parseProxy": (()=>parseProxy)
});
function parseXForwardedFor(value) {
    if (typeof value !== "string") {
        return [];
    }
    const forwardedIps = [];
    // As per MDN X-Forwarded-For Headers documentation at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // The `x-forwarded-for` header may return one or more IP addresses as
    // "client IP, proxy 1 IP, proxy 2 IP", so we want to split by the comma and
    // trim each item.
    for (const item of value.split(",")){
        forwardedIps.push(item.trim());
    }
    return forwardedIps;
}
function isIPv4Cidr(cidr) {
    return typeof cidr === "object" && cidr !== null && "type" in cidr && typeof cidr.type === "string" && cidr.type === "v4" && "contains" in cidr && typeof cidr.contains === "function";
}
function isIPv6Cidr(cidr) {
    return typeof cidr === "object" && cidr !== null && "type" in cidr && typeof cidr.type === "string" && cidr.type === "v6" && "contains" in cidr && typeof cidr.contains === "function";
}
function isTrustedProxy(ip, segments, proxies) {
    if (Array.isArray(proxies) && proxies.length > 0) {
        return proxies.some((proxy)=>{
            if (typeof proxy === "string") {
                return proxy === ip;
            }
            if (isIPv4Tuple(segments) && isIPv4Cidr(proxy)) {
                return proxy.contains(segments);
            }
            if (isIPv6Tuple(segments) && isIPv6Cidr(proxy)) {
                return proxy.contains(segments);
            }
            return false;
        });
    }
    return false;
}
class CIDR {
    // Based on CIDR matching implementation in `ipaddr.js`
    // Source code:
    // https://github.com/whitequark/ipaddr.js/blob/08c2cd41e2cb3400683cbd503f60421bfdf66921/lib/ipaddr.js#L107-L130
    //
    // Licensed: The MIT License (MIT)
    // Copyright (C) 2011-2017 whitequark <whitequark@whitequark.org>
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the "Software"), to deal
    // in the Software without restriction, including without limitation the rights
    // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    // copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:
    // The above copyright notice and this permission notice shall be included in
    // all copies or substantial portions of the Software.
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    // THE SOFTWARE.
    contains(ip) {
        let part = 0;
        let shift;
        let cidrBits = this.bits;
        while(cidrBits > 0){
            shift = this.partSize - cidrBits;
            if (shift < 0) {
                shift = 0;
            }
            if (ip[part] >> shift !== this.parts[part] >> shift) {
                return false;
            }
            cidrBits -= this.partSize;
            part += 1;
        }
        return true;
    }
}
class IPv4CIDR extends CIDR {
    type = "v4";
    partSize = 8;
    parts;
    bits;
    constructor(parts, bits){
        super();
        this.bits = bits;
        this.parts = parts;
        Object.freeze(this);
    }
    contains(ip) {
        return super.contains(ip);
    }
}
class IPv6CIDR extends CIDR {
    type = "v6";
    partSize = 16;
    parts;
    bits;
    constructor(parts, bits){
        super();
        this.bits = bits;
        this.parts = parts;
        Object.freeze(this);
    }
    contains(ip) {
        return super.contains(ip);
    }
}
function parseCIDR(cidr) {
    // Pre-condition: `cidr` has be verified to have at least one `/`
    const cidrParts = cidr.split("/");
    if (cidrParts.length !== 2) {
        throw new Error("invalid CIDR address: must be exactly 2 parts");
    }
    const parser = new Parser(cidrParts[0]);
    const maybeIPv4 = parser.readIPv4Address();
    if (isIPv4Tuple(maybeIPv4)) {
        const bits = parseInt(cidrParts[1], 10);
        if (isNaN(bits) || bits < 0 || bits > 32) {
            throw new Error("invalid CIDR address: incorrect amount of bits");
        }
        return new IPv4CIDR(maybeIPv4, bits);
    }
    const maybeIPv6 = parser.readIPv6Address();
    if (isIPv6Tuple(maybeIPv6)) {
        const bits = parseInt(cidrParts[1], 10);
        if (isNaN(bits) || bits < 0 || bits > 128) {
            throw new Error("invalid CIDR address: incorrect amount of bits");
        }
        return new IPv6CIDR(maybeIPv6, bits);
    }
    throw new Error("invalid CIDR address: could not parse IP address");
}
function isCIDR(address) {
    return address.includes("/");
}
// Converts a string that looks like a CIDR address into the corresponding class
// while ignoring non-CIDR IP addresses.
function parseProxy(proxy) {
    if (isCIDR(proxy)) {
        return parseCIDR(proxy);
    } else {
        return proxy;
    }
}
function isIPv4Tuple(segements) {
    if (typeof segements === "undefined") {
        return false;
    }
    return segements.length === 4;
}
function isIPv6Tuple(segements) {
    if (typeof segements === "undefined") {
        return false;
    }
    return segements.length === 8;
}
function u16FromBytes(bytes) {
    const u8 = new Uint8Array(bytes);
    return new Uint16Array(u8.buffer)[0];
}
function u32FromBytes(bytes) {
    const u8 = new Uint8Array(bytes);
    return new Uint32Array(u8.buffer)[0];
}
// This Parser and "is global" comparisons are a TypeScript implementation of
// similar code in the Rust stdlib with only slight deviations as noted.
//
// We want to mirror Rust's logic as close as possible, because we'll be relying
// on its implementation when we add a Wasm library to determine IPs and only
// falling back to JavaScript in non-Wasm environments.
//
// Parser source:
// https://github.com/rust-lang/rust/blob/07921b50ba6dcb5b2984a1dba039a38d85bffba2/library/core/src/net/parser.rs#L34
// Comparison source:
// https://github.com/rust-lang/rust/blob/87e1447aadaa2899ff6ccabe1fa669eb50fb60a1/library/core/src/net/ip_addr.rs#L749
// https://github.com/rust-lang/rust/blob/87e1447aadaa2899ff6ccabe1fa669eb50fb60a1/library/core/src/net/ip_addr.rs#L1453
//
// Licensed: The MIT License (MIT)
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
class Parser {
    state;
    constructor(input){
        this.state = input;
    }
    readAtomically(inner) {
        const state = this.state;
        const result = inner(this);
        if (typeof result === "undefined") {
            this.state = state;
        }
        return result;
    }
    peakChar() {
        return this.state[0];
    }
    readChar() {
        const b = this.state[0];
        this.state = this.state.slice(1);
        return b;
    }
    readGivenChar(target) {
        return this.readAtomically((p)=>{
            const c = p.readChar();
            if (c === target) {
                return c;
            }
        });
    }
    readSeparator(sep, index, inner) {
        return this.readAtomically((p)=>{
            if (index > 0) {
                const c = p.readGivenChar(sep);
                if (typeof c === "undefined") {
                    return;
                }
            }
            return inner(p);
        });
    }
    readNumber(radix, maxDigits, allowZeroPrefix = false) {
        return this.readAtomically((p)=>{
            let result = 0;
            let digitCount = 0;
            const hasLeadingZero = p.peakChar() === "0";
            function nextCharAsDigit() {
                return p.readAtomically((p)=>{
                    const c = p.readChar();
                    if (c) {
                        const n = parseInt(c, radix);
                        if (!isNaN(n)) {
                            return n;
                        }
                    }
                });
            }
            for(let digit = nextCharAsDigit(); digit !== undefined; digit = nextCharAsDigit()){
                result = result * radix;
                result = result + digit;
                digitCount += 1;
                if (typeof maxDigits !== "undefined") {
                    if (digitCount > maxDigits) {
                        return;
                    }
                }
            }
            if (digitCount === 0) {
                return;
            } else if (!allowZeroPrefix && hasLeadingZero && digitCount > 1) {
                return;
            } else {
                return result;
            }
        });
    }
    readIPv4Address() {
        return this.readAtomically((p)=>{
            const groups = [];
            for(let idx = 0; idx < 4; idx++){
                const result = p.readSeparator(".", idx, (p)=>{
                    // Disallow octal number in IP string
                    // https://tools.ietf.org/html/rfc6943#section-3.1.1
                    return p.readNumber(10, 3, false);
                });
                if (result === undefined) {
                    return;
                } else {
                    groups.push(result);
                }
            }
            return groups;
        });
    }
    readIPv6Address() {
        // Read a chunk of an IPv6 address into `groups`. Returns the number of
        // groups read, along with a bool indicating if an embedded trailing IPv4
        // address was read. Specifically, read a series of colon-separated IPv6
        // groups (0x0000 - 0xFFFF), with an optional trailing embedded IPv4 address
        const readGroups = (p, groups)=>{
            const limit = groups.length;
            for (const i of groups.keys()){
                // Try to read a trailing embedded IPv4 address. There must be at least
                // two groups left
                if (i < limit - 1) {
                    const ipv4 = p.readSeparator(":", i, (p)=>p.readIPv4Address());
                    if (isIPv4Tuple(ipv4)) {
                        const [one, two, three, four] = ipv4;
                        groups[i + 0] = u16FromBytes([
                            one,
                            two
                        ]);
                        groups[i + 1] = u16FromBytes([
                            three,
                            four
                        ]);
                        return [
                            i + 2,
                            true
                        ];
                    }
                }
                const group = p.readSeparator(":", i, (p)=>p.readNumber(16, 4, true));
                if (typeof group !== "undefined") {
                    groups[i] = group;
                } else {
                    return [
                        i,
                        false
                    ];
                }
            }
            return [
                groups.length,
                false
            ];
        };
        return this.readAtomically((p)=>{
            // Read the front part of the address; either the whole thing, or up
            // to the first ::
            const head = new Uint16Array(8);
            const [headSize, headIPv4] = readGroups(p, head);
            if (headSize === 8) {
                return head;
            }
            // IPv4 part is not allowed before `::`
            if (headIPv4) {
                return;
            }
            // Read `::` if previous code parsed less than 8 groups.
            // `::` indicates one or more groups of 16 bits of zeros.
            if (typeof p.readGivenChar(":") === "undefined") {
                return;
            }
            if (typeof p.readGivenChar(":") === "undefined") {
                return;
            }
            // Read the back part of the address. The :: must contain at least one
            // set of zeroes, so our max length is 7.
            const tail = new Uint16Array(7);
            const limit = 8 - (headSize + 1);
            const [tailSize, _] = readGroups(p, tail.subarray(0, limit));
            head.set(tail.slice(0, tailSize), 8 - tailSize);
            return head;
        });
    }
    readPort() {
        return this.readAtomically((p)=>{
            if (typeof p.readGivenChar(":") !== "undefined") {
                return p.readNumber(10, undefined, true);
            }
        });
    }
    readScopeId() {
        return this.readAtomically((p)=>{
            if (typeof p.readGivenChar("%") !== "undefined") {
                return p.readNumber(10, undefined, true);
            }
        });
    }
}
const IPV4_BROADCAST = u32FromBytes([
    255,
    255,
    255,
    255
]);
function isGlobalIPv4(s, proxies) {
    if (typeof s !== "string") {
        return false;
    }
    const parser = new Parser(s);
    const octets = parser.readIPv4Address();
    if (!isIPv4Tuple(octets)) {
        return false;
    }
    if (isTrustedProxy(s, octets, proxies)) {
        return false;
    }
    // Rust doesn't check the remaining state when parsing an IPv4. However, we
    // want to ensure we have exactly an IP (with optionally a port), so we parse
    // it and then check remaining parser state.
    parser.readPort();
    if (parser.state.length !== 0) {
        return false;
    }
    // "This network"
    if (octets[0] === 0) {
        return false;
    }
    // Private IPv4 address ranges
    if (octets[0] === 10) {
        return false;
    }
    if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) {
        return false;
    }
    if (octets[0] === 192 && octets[1] === 168) {
        return false;
    }
    // Loopback address
    if (octets[0] === 127) {
        return false;
    }
    // Shared range
    if (octets[0] === 100 && (octets[1] & 0b1100_0000) === 0b0100_0000) {
        return false;
    }
    // Link-local range
    if (octets[0] === 169 && octets[1] === 254) {
        return false;
    }
    // addresses reserved for future protocols (`192.0.0.0/24`)
    if (octets[0] === 192 && octets[1] === 0 && octets[2] === 0) {
        return false;
    }
    // Documentation ranges
    if (octets[0] === 192 && octets[1] === 0 && octets[2] === 2) {
        return false;
    }
    if (octets[0] === 198 && octets[1] === 51 && octets[2] === 100) {
        return false;
    }
    if (octets[0] === 203 && octets[1] === 0 && octets[2] === 113) {
        return false;
    }
    // Benchmarking range
    if (octets[0] === 198 && (octets[1] & 0xfe) === 18) {
        return false;
    }
    const isBroadcast = u32FromBytes(octets) === IPV4_BROADCAST;
    // Reserved range
    if ((octets[0] & 240) === 240 && !isBroadcast) {
        return false;
    }
    // Broadcast address
    if (isBroadcast) {
        return false;
    }
    for (const octet of octets){
        if (octet < 0 || octet > 255) {
            return false;
        }
    }
    return true;
}
function isGlobalIPv6(s, proxies) {
    if (typeof s !== "string") {
        return false;
    }
    const parser = new Parser(s);
    const segments = parser.readIPv6Address();
    if (!isIPv6Tuple(segments)) {
        return false;
    }
    if (isTrustedProxy(s, segments, proxies)) {
        return false;
    }
    // Rust doesn't check the remaining state when parsing an IPv6. However, we
    // want to ensure we have exactly an IP (with optionally a scope id), so we
    // parse it and then check remaining parser state.
    // TODO: We don't support an IPv6 address with a port because that seems to
    // require wrapping the address and scope in `[]`, e.g. `[:ffff%1]:8080`
    parser.readScopeId();
    if (parser.state.length !== 0) {
        return false;
    }
    // Unspecified address
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 0) {
        return false;
    }
    // Loopback address
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 0x1) {
        return false;
    }
    // IPv4-mapped Address (`::ffff:0:0/96`)
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0xffff) {
        return false;
    }
    // IPv4-IPv6 Translat. (`64:ff9b:1::/48`)
    if (segments[0] === 0x64 && segments[1] === 0xff9b && segments[2] === 1) {
        return false;
    }
    // Discard-Only Address Block (`100::/64`)
    if (segments[0] === 0x100 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0) {
        return false;
    }
    // IETF Protocol Assignments (`2001::/23`)
    if (segments[0] === 0x2001 && segments[1] < 0x200) {
        // Port Control Protocol Anycast (`2001:1::1`)
        if (segments[0] === 0x2001 && segments[1] === 1 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 1) {
            return true;
        }
        // Traversal Using Relays around NAT Anycast (`2001:1::2`)
        if (segments[0] === 0x2001 && segments[1] === 1 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 2) {
            return true;
        }
        // AMT (`2001:3::/32`)
        if (segments[0] === 0x2001 && segments[1] === 3) {
            return true;
        }
        // AS112-v6 (`2001:4:112::/48`)
        if (segments[0] === 0x2001 && segments[1] === 4 && segments[2] === 0x112) {
            return true;
        }
        // ORCHIDv2 (`2001:20::/28`)
        if (segments[0] === 0x2001 && segments[1] >= 0x20 && segments[1] <= 0x2f) {
            return true;
        }
        // Benchmarking range (and others)
        return false;
    }
    // Documentation range
    if (segments[0] === 0x2001 && segments[1] === 0xdb8) {
        return false;
    }
    // Unique local range
    if ((segments[0] & 0xfe00) === 0xfc00) {
        return false;
    }
    // Unicast link local range
    if ((segments[0] & 0xffc0) === 0xfe80) {
        return false;
    }
    return true;
}
function isGlobalIP(s, proxies) {
    if (isGlobalIPv4(s, proxies)) {
        return true;
    }
    if (isGlobalIPv6(s, proxies)) {
        return true;
    }
    return false;
}
function isHeaders(val) {
    return typeof val.get === "function";
}
function getHeader(headers, headerKey) {
    if (isHeaders(headers)) {
        return headers.get(headerKey);
    } else {
        const headerValue = headers[headerKey];
        if (Array.isArray(headerValue)) {
            return headerValue.join(",");
        } else {
            return headerValue;
        }
    }
}
// Heavily based on https://github.com/pbojinov/request-ip
//
// Licensed: The MIT License (MIT) Copyright (c) 2022 Petar Bojinov -
// petarbojinov+github@gmail.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function findIP(request, options = {}) {
    const { platform, proxies } = options;
    // Prefer anything available via the platform over headers since headers can
    // be set by users. Only if we don't have an IP available in `request` do we
    // search the `headers`.
    if (isGlobalIP(request.ip, proxies)) {
        return request.ip;
    }
    const socketRemoteAddress = request.socket?.remoteAddress;
    if (isGlobalIP(socketRemoteAddress, proxies)) {
        return socketRemoteAddress;
    }
    const infoRemoteAddress = request.info?.remoteAddress;
    if (isGlobalIP(infoRemoteAddress, proxies)) {
        return infoRemoteAddress;
    }
    // AWS Api Gateway + Lambda
    const requestContextIdentitySourceIP = request.requestContext?.identity?.sourceIp;
    if (isGlobalIP(requestContextIdentitySourceIP, proxies)) {
        return requestContextIdentitySourceIP;
    }
    // Validate we have some object for `request.headers`
    if (typeof request.headers !== "object" || request.headers === null) {
        return "";
    }
    // Platform-specific headers should only be accepted when we can determine
    // that we are running on that platform. For example, the `CF-Connecting-IP`
    // header should only be accepted when running on Cloudflare; otherwise, it
    // can be spoofed.
    if (platform === "cloudflare") {
        // CF-Connecting-IPv6: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-connecting-ipv6
        const cfConnectingIPv6 = getHeader(request.headers, "cf-connecting-ipv6");
        if (isGlobalIPv6(cfConnectingIPv6, proxies)) {
            return cfConnectingIPv6;
        }
        // CF-Connecting-IP: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-connecting-ip
        const cfConnectingIP = getHeader(request.headers, "cf-connecting-ip");
        if (isGlobalIP(cfConnectingIP, proxies)) {
            return cfConnectingIP;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Fly.io: https://fly.io/docs/machines/runtime-environment/#fly_app_name
    if (platform === "fly-io") {
        // Fly-Client-IP: https://fly.io/docs/networking/request-headers/#fly-client-ip
        const flyClientIP = getHeader(request.headers, "fly-client-ip");
        if (isGlobalIP(flyClientIP, proxies)) {
            return flyClientIP;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    if (platform === "vercel") {
        // https://vercel.com/docs/edge-network/headers/request-headers#x-real-ip
        // Also used by `@vercel/functions`, see:
        // https://github.com/vercel/vercel/blob/d7536d52c87712b1b3f83e4b0fd535a1fb7e384c/packages/functions/src/headers.ts#L12
        const xRealIP = getHeader(request.headers, "x-real-ip");
        if (isGlobalIP(xRealIP, proxies)) {
            return xRealIP;
        }
        // https://vercel.com/docs/edge-network/headers/request-headers#x-vercel-forwarded-for
        // By default, it seems this will be 1 address, but they discuss trusted
        // proxy forwarding so we try to parse it like normal. See
        // https://vercel.com/docs/edge-network/headers/request-headers#custom-x-forwarded-for-ip
        const xVercelForwardedFor = getHeader(request.headers, "x-vercel-forwarded-for");
        const xVercelForwardedForItems = parseXForwardedFor(xVercelForwardedFor);
        // As per MDN X-Forwarded-For Headers documentation at
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
        // We may find more than one IP in the `x-forwarded-for` header. Since the
        // first IP will be closest to the user (and the most likely to be spoofed),
        // we want to iterate tail-to-head so we reverse the list.
        for (const item of xVercelForwardedForItems.reverse()){
            if (isGlobalIP(item, proxies)) {
                return item;
            }
        }
        // https://vercel.com/docs/edge-network/headers/request-headers#x-forwarded-for
        // By default, it seems this will be 1 address, but they discuss trusted
        // proxy forwarding so we try to parse it like normal. See
        // https://vercel.com/docs/edge-network/headers/request-headers#custom-x-forwarded-for-ip
        const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
        const xForwardedForItems = parseXForwardedFor(xForwardedFor);
        // As per MDN X-Forwarded-For Headers documentation at
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
        // We may find more than one IP in the `x-forwarded-for` header. Since the
        // first IP will be closest to the user (and the most likely to be spoofed),
        // we want to iterate tail-to-head so we reverse the list.
        for (const item of xForwardedForItems.reverse()){
            if (isGlobalIP(item, proxies)) {
                return item;
            }
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    if (platform === "render") {
        // True-Client-IP: https://community.render.com/t/what-number-of-proxies-sit-in-front-of-an-express-app-deployed-on-render/35981/2
        const trueClientIP = getHeader(request.headers, "true-client-ip");
        if (isGlobalIP(trueClientIP, proxies)) {
            return trueClientIP;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Standard headers used by Amazon EC2, Heroku, and others.
    const xClientIP = getHeader(request.headers, "x-client-ip");
    if (isGlobalIP(xClientIP, proxies)) {
        return xClientIP;
    }
    // Load-balancers (AWS ELB) or proxies.
    const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
    const xForwardedForItems = parseXForwardedFor(xForwardedFor);
    // As per MDN X-Forwarded-For Headers documentation at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // We may find more than one IP in the `x-forwarded-for` header. Since the
    // first IP will be closest to the user (and the most likely to be spoofed),
    // we want to iterate tail-to-head so we reverse the list.
    for (const item of xForwardedForItems.reverse()){
        if (isGlobalIP(item, proxies)) {
            return item;
        }
    }
    // DigitalOcean.
    // DO-Connecting-IP: https://www.digitalocean.com/community/questions/app-platform-client-ip
    const doConnectingIP = getHeader(request.headers, "do-connecting-ip");
    if (isGlobalIP(doConnectingIP, proxies)) {
        return doConnectingIP;
    }
    // Fastly and Firebase hosting header (When forwared to cloud function)
    // Fastly-Client-IP
    const fastlyClientIP = getHeader(request.headers, "fastly-client-ip");
    if (isGlobalIP(fastlyClientIP, proxies)) {
        return fastlyClientIP;
    }
    // Akamai
    // True-Client-IP
    const trueClientIP = getHeader(request.headers, "true-client-ip");
    if (isGlobalIP(trueClientIP, proxies)) {
        return trueClientIP;
    }
    // Default nginx proxy/fcgi; alternative to x-forwarded-for, used by some proxies
    // X-Real-IP
    const xRealIP = getHeader(request.headers, "x-real-ip");
    if (isGlobalIP(xRealIP, proxies)) {
        return xRealIP;
    }
    // Rackspace LB and Riverbed's Stingray?
    const xClusterClientIP = getHeader(request.headers, "x-cluster-client-ip");
    if (isGlobalIP(xClusterClientIP, proxies)) {
        return xClusterClientIP;
    }
    const xForwarded = getHeader(request.headers, "x-forwarded");
    if (isGlobalIP(xForwarded, proxies)) {
        return xForwarded;
    }
    const forwardedFor = getHeader(request.headers, "forwarded-for");
    if (isGlobalIP(forwardedFor, proxies)) {
        return forwardedFor;
    }
    const forwarded = getHeader(request.headers, "forwarded");
    if (isGlobalIP(forwarded, proxies)) {
        return forwarded;
    }
    // Google Cloud App Engine
    // X-Appengine-User-IP: https://cloud.google.com/appengine/docs/standard/reference/request-headers?tab=node.js
    const xAppEngineUserIP = getHeader(request.headers, "x-appengine-user-ip");
    if (isGlobalIP(xAppEngineUserIP, proxies)) {
        return xAppEngineUserIP;
    }
    return "";
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/env/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiKey": (()=>apiKey),
    "baseUrl": (()=>baseUrl),
    "isDevelopment": (()=>isDevelopment),
    "logLevel": (()=>logLevel),
    "platform": (()=>platform)
});
function platform(env) {
    if (typeof env["FLY_APP_NAME"] === "string" && env["FLY_APP_NAME"] !== "") {
        return "fly-io";
    }
    if (typeof env["VERCEL"] === "string" && env["VERCEL"] === "1") {
        return "vercel";
    }
    // https://render.com/docs/environment-variables
    if (typeof env["RENDER"] === "string" && env["RENDER"] === "true") {
        return "render";
    }
}
function isDevelopment(env) {
    return env.NODE_ENV === "development" || env.MODE === "development" || env.ARCJET_ENV === "development";
}
function logLevel(env) {
    const level = env["ARCJET_LOG_LEVEL"];
    switch(level){
        case "debug":
        case "info":
        case "warn":
        case "error":
            return level;
        default:
            // Default to warn if not set
            return "warn";
    }
}
const baseUrlAllowed = [
    "https://decide.arcjet.com",
    "https://decide.arcjettest.com",
    "https://fly.decide.arcjet.com",
    "https://fly.decide.arcjettest.com",
    "https://decide.arcjet.orb.local:4082"
];
function baseUrl(env) {
    // TODO(#90): Remove this conditional before 1.0.0
    if (isDevelopment(env)) {
        if (env["ARCJET_BASE_URL"]) {
            return env["ARCJET_BASE_URL"];
        }
        // If we're running on fly.io, use the Arcjet Decide Service hosted on fly
        // Ref: https://fly.io/docs/machines/runtime-environment/#environment-variables
        if (platform(env) === "fly-io") {
            return "https://fly.decide.arcjet.com";
        }
        return "https://decide.arcjet.com";
    } else {
        // Use ARCJET_BASE_URL if it is set and belongs to our allowlist; otherwise
        // use the hardcoded default.
        if (typeof env["ARCJET_BASE_URL"] === "string" && baseUrlAllowed.includes(env["ARCJET_BASE_URL"])) {
            return env["ARCJET_BASE_URL"];
        }
        // If we're running on fly.io, use the Arcjet Decide Service hosted on fly
        // Ref: https://fly.io/docs/machines/runtime-environment/#environment-variables
        if (platform(env) === "fly-io") {
            return "https://fly.decide.arcjet.com";
        }
        return "https://decide.arcjet.com";
    }
}
function apiKey(env) {
    const key = env["ARCJET_KEY"];
    if (typeof key === "string" && key.startsWith("ajkey_")) {
        return key;
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/sprintf/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>sprintf)
});
function bigintReplacer(key, value) {
    if (typeof value === "bigint") {
        return "[BigInt]";
    }
    return value;
}
// TODO: Deduplicate this and logger implementation
function tryStringify(o) {
    try {
        return JSON.stringify(o, bigintReplacer);
    } catch  {
        return `"[Circular]"`;
    }
}
const PERCENT_CODE = 37; /* % */ 
const LOWERCASE_D_CODE = 100; /* d */ 
const LOWERCASE_F_CODE = 102; /* f */ 
const LOWERCASE_I_CODE = 105; /* i */ 
const UPPERCASE_O_CODE = 79; /* O */ 
const LOWERCASE_O_CODE = 111; /* o */ 
const LOWERCASE_J_CODE = 106; /* j */ 
const LOWERCASE_S_CODE = 115; /* s */ 
// Heavily based on https://github.com/pinojs/quick-format-unescaped
//
// The MIT License (MIT)
//
// Copyright (c) 2016-2019 David Mark Clements
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function sprintf(str, ...args) {
    if (typeof str !== "string") {
        throw new TypeError("First argument must be a string");
    }
    const argsLength = args.length;
    if (argsLength === 0) {
        return str;
    }
    let output = "";
    let argIdx = 0;
    let lastPosition = -1;
    const strLength = str.length;
    for(let i = 0; i < strLength;){
        if (str.charCodeAt(i) === PERCENT_CODE && i + 1 < strLength) {
            lastPosition = lastPosition > -1 ? lastPosition : 0;
            switch(str.charCodeAt(i + 1)){
                case LOWERCASE_D_CODE:
                case LOWERCASE_F_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (typeof arg !== "number") {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += arg;
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case LOWERCASE_I_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (typeof arg !== "number") {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += Math.floor(arg);
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case UPPERCASE_O_CODE:
                case LOWERCASE_O_CODE:
                case LOWERCASE_J_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (arg === undefined) {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        if (typeof arg === "string") {
                            output += `'${arg}'`;
                            lastPosition = i + 2;
                            i++;
                            break;
                        }
                        if (typeof arg === "bigint") {
                            output += `"[BigInt]"`;
                            lastPosition = i + 2;
                            i++;
                            break;
                        }
                        if (typeof arg === "function") {
                            output += arg.name || "<anonymous>";
                            lastPosition = i + 2;
                            i++;
                            break;
                        }
                        output += tryStringify(arg);
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case LOWERCASE_S_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (typeof arg !== "string") {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += arg;
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case PERCENT_CODE:
                    {
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += "%";
                        lastPosition = i + 2;
                        i++;
                        argIdx--;
                        break;
                    }
            }
            ++argIdx;
        }
        ++i;
    }
    if (lastPosition === -1) {
        return str;
    }
    if (lastPosition < strLength) {
        output += str.slice(lastPosition);
    }
    return output;
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/logger/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logger": (()=>Logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/sprintf/index.js [middleware-edge] (ecmascript)");
;
function bigintReplacer(key, value) {
    if (typeof value === "bigint") {
        return "[BigInt]";
    }
    return value;
}
// TODO: Deduplicate this and sprintf implementation
function tryStringify(o) {
    try {
        return JSON.stringify(o, bigintReplacer);
    } catch  {
        return "[Circular]";
    }
}
const PREFIX = "✦Aj";
function getMessage(obj, msg, args) {
    // The first argument was the message so juggle the args
    if (typeof obj === "string") {
        args = [
            msg,
            ...args
        ];
        msg = obj;
    }
    // Prefer a string message over `obj.msg`, as per Pino:
    // https://github.com/pinojs/pino/blob/8db130eba0439e61c802448d31eb1998cebfbc98/docs/api.md#message-string
    if (typeof msg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(msg, ...args);
    }
    if (typeof obj === "object" && obj !== null && "msg" in obj && typeof obj.msg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(obj.msg, [
            msg,
            ...args
        ]);
    }
}
function getOutput(obj, msg, args) {
    let output = getMessage(obj, msg, args);
    if (typeof output !== "string") {
        return;
    }
    if (typeof obj === "object" && obj !== null) {
        for (const [key, value] of Object.entries(obj)){
            output += `\n      ${key}: ${tryStringify(value)}`;
        }
    }
    return output;
}
class Logger {
    #logLevel;
    constructor(opts){
        if (typeof opts.level !== "string") {
            throw new Error(`Invalid log level`);
        }
        switch(opts.level){
            case "debug":
                this.#logLevel = 0;
                break;
            case "info":
                this.#logLevel = 1;
                break;
            case "warn":
                this.#logLevel = 2;
                break;
            case "error":
                this.#logLevel = 3;
                break;
            default:
                {
                    throw new Error(`Unknown log level: ${opts.level}`);
                }
        }
    }
    debug(obj, msg, ...args) {
        if (this.#logLevel <= 0) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.debug(`${PREFIX} DEBUG ${output}`);
            }
        }
    }
    info(obj, msg, ...args) {
        if (this.#logLevel <= 1) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.info(`${PREFIX} INFO ${output}`);
            }
        }
    }
    warn(obj, msg, ...args) {
        if (this.#logLevel <= 2) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.warn(`${PREFIX} WARN ${output}`);
            }
        }
    }
    error(obj, msg, ...args) {
        if (this.#logLevel <= 3) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.error(`${PREFIX} ERROR ${output}`);
            }
        }
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect-web/dist/esm/assert-fetch-api.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Asserts that the fetch API is available.
 */ __turbopack_context__.s({
    "assertFetchApi": (()=>assertFetchApi)
});
function assertFetchApi() {
    try {
        new Headers();
    } catch (_) {
        throw new Error("connect-web requires the fetch API. Are you running on an old version of Node.js? Node.js is not supported in Connect for Web - please stay tuned for Connect for Node.");
    }
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect-web/dist/esm/connect-transport.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "createConnectTransport": (()=>createConnectTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/service-type.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$http$2d$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/http-headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$context$2d$values$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/context-values.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$serialization$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/serialization.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/envelope.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$create$2d$method$2d$url$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/create-method-url.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$run$2d$call$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/run-call.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/compression.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$end$2d$stream$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/end-stream.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$error$2d$json$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/error-json.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$request$2d$header$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/request-header.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$trailer$2d$mux$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/trailer-mux.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$get$2d$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/get-request.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$validate$2d$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/validate-response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2d$web$2f$dist$2f$esm$2f$assert$2d$fetch$2d$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect-web/dist/esm/assert-fetch-api.js [middleware-edge] (ecmascript)");
var __await = this && this.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
;
;
;
;
;
function createConnectTransport(options) {
    var _a;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2d$web$2f$dist$2f$esm$2f$assert$2d$fetch$2d$api$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["assertFetchApi"])();
    const useBinaryFormat = (_a = options.useBinaryFormat) !== null && _a !== void 0 ? _a : false;
    return {
        async unary (service, method, signal, timeoutMs, header, message, contextValues) {
            var _a;
            const { serialize, parse } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$serialization$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createClientMethodSerializers"])(method, useBinaryFormat, options.jsonOptions, options.binaryOptions);
            timeoutMs = timeoutMs === undefined ? options.defaultTimeoutMs : timeoutMs <= 0 ? undefined : timeoutMs;
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$run$2d$call$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["runUnaryCall"])({
                interceptors: options.interceptors,
                signal,
                timeoutMs,
                req: {
                    stream: false,
                    service,
                    method,
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$create$2d$method$2d$url$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createMethodUrl"])(options.baseUrl, service, method),
                    init: {
                        method: "POST",
                        credentials: (_a = options.credentials) !== null && _a !== void 0 ? _a : "same-origin",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$request$2d$header$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["requestHeader"])(method.kind, useBinaryFormat, timeoutMs, header, false),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$context$2d$values$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createContextValues"])(),
                    message
                },
                next: async (req)=>{
                    var _a;
                    const useGet = options.useHttpGet === true && method.idempotency === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodIdempotency"].NoSideEffects;
                    let body = null;
                    if (useGet) {
                        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$get$2d$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["transformConnectPostToGetRequest"])(req, serialize(req.message), useBinaryFormat);
                    } else {
                        body = serialize(req.message);
                    }
                    const fetch = (_a = options.fetch) !== null && _a !== void 0 ? _a : globalThis.fetch;
                    const response = await fetch(req.url, Object.assign(Object.assign({}, req.init), {
                        headers: req.header,
                        signal: req.signal,
                        body
                    }));
                    const { isUnaryError, unaryError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$validate$2d$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateResponse"])(method.kind, useBinaryFormat, response.status, response.headers);
                    if (isUnaryError) {
                        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$error$2d$json$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["errorFromJson"])(await response.json(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$http$2d$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["appendHeaders"])(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$trailer$2d$mux$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["trailerDemux"])(response.headers)), unaryError);
                    }
                    const [demuxedHeader, demuxedTrailer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$trailer$2d$mux$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["trailerDemux"])(response.headers);
                    return {
                        stream: false,
                        service,
                        method,
                        header: demuxedHeader,
                        message: useBinaryFormat ? parse(new Uint8Array(await response.arrayBuffer())) : method.O.fromJson(await response.json(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$serialization$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getJsonOptions"])(options.jsonOptions)),
                        trailer: demuxedTrailer
                    };
                }
            });
        },
        async stream (service, method, signal, timeoutMs, header, input, contextValues) {
            var _a;
            const { serialize, parse } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$serialization$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createClientMethodSerializers"])(method, useBinaryFormat, options.jsonOptions, options.binaryOptions);
            function parseResponseBody(body, trailerTarget, header, signal) {
                return __asyncGenerator(this, arguments, function* parseResponseBody_1() {
                    const reader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createEnvelopeReadableStream"])(body).getReader();
                    let endStreamReceived = false;
                    for(;;){
                        const result = yield __await(reader.read());
                        if (result.done) {
                            break;
                        }
                        const { flags, data } = result.value;
                        if ((flags & __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"]) === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"]) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`protocol error: received unsupported compressed output`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
                        }
                        if ((flags & __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$end$2d$stream$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["endStreamFlag"]) === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$end$2d$stream$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["endStreamFlag"]) {
                            endStreamReceived = true;
                            const endStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$end$2d$stream$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["endStreamFromJson"])(data);
                            if (endStream.error) {
                                const error = endStream.error;
                                header.forEach((value, key)=>{
                                    error.metadata.append(key, value);
                                });
                                throw error;
                            }
                            endStream.metadata.forEach((value, key)=>trailerTarget.set(key, value));
                            continue;
                        }
                        yield yield __await(parse(data));
                    }
                    // Node wil not throw an AbortError on `read` if the
                    // signal is aborted before `getReader` is called.
                    // As a work around we check at the end and throw.
                    //
                    // Ref: https://github.com/nodejs/undici/issues/1940
                    if ("throwIfAborted" in signal) {
                        // We assume that implementations without `throwIfAborted` (old
                        // browsers) do honor aborted signals on `read`.
                        signal.throwIfAborted();
                    }
                    if (!endStreamReceived) {
                        throw "missing EndStreamResponse";
                    }
                });
            }
            async function createRequestBody(input) {
                if (method.kind != __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].ServerStreaming) {
                    throw "The fetch API does not support streaming request bodies";
                }
                const r = await input[Symbol.asyncIterator]().next();
                if (r.done == true) {
                    throw "missing request message";
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeEnvelope"])(0, serialize(r.value));
            }
            timeoutMs = timeoutMs === undefined ? options.defaultTimeoutMs : timeoutMs <= 0 ? undefined : timeoutMs;
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$run$2d$call$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["runStreamingCall"])({
                interceptors: options.interceptors,
                timeoutMs,
                signal,
                req: {
                    stream: true,
                    service,
                    method,
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$create$2d$method$2d$url$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createMethodUrl"])(options.baseUrl, service, method),
                    init: {
                        method: "POST",
                        credentials: (_a = options.credentials) !== null && _a !== void 0 ? _a : "same-origin",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$request$2d$header$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["requestHeader"])(method.kind, useBinaryFormat, timeoutMs, header, false),
                    contextValues: contextValues !== null && contextValues !== void 0 ? contextValues : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$context$2d$values$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createContextValues"])(),
                    message: input
                },
                next: async (req)=>{
                    var _a;
                    const fetch = (_a = options.fetch) !== null && _a !== void 0 ? _a : globalThis.fetch;
                    const fRes = await fetch(req.url, Object.assign(Object.assign({}, req.init), {
                        headers: req.header,
                        signal: req.signal,
                        body: await createRequestBody(req.message)
                    }));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$validate$2d$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateResponse"])(method.kind, useBinaryFormat, fRes.status, fRes.headers);
                    if (fRes.body === null) {
                        throw "missing response body";
                    }
                    const trailer = new Headers();
                    const res = Object.assign(Object.assign({}, req), {
                        header: fRes.headers,
                        trailer,
                        message: parseResponseBody(fRes.body, trailer, fRes.headers, req.signal)
                    });
                    return res;
                }
            });
        }
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/transport/edge-light.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTransport": (()=>createTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2d$web$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect-web/dist/esm/connect-transport.js [middleware-edge] (ecmascript)");
;
function createTransport(baseUrl) {
    // The Connect Node client doesn't work on edge runtimes: https://github.com/bufbuild/connect-es/pull/589
    // so set the transport using connect-web. The interceptor is required for it work in the edge runtime.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2d$web$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createConnectTransport"])({
        baseUrl,
        interceptors: [
            /**
             * Ensures redirects are followed to properly support the Next.js/Vercel Edge
             * Runtime.
             * @see
             * https://github.com/connectrpc/connect-es/issues/749#issuecomment-1693507516
             */ (next)=>(req)=>{
                    req.init.redirect = "follow";
                    return next(req);
                }
        ],
        fetch
    });
}
;
}}),
"[project]/apps/chat-ui/node_modules/@arcjet/next/index.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "createMiddleware": (()=>createMiddleware),
    "createRemoteClient": (()=>createRemoteClient),
    "default": (()=>arcjet),
    "request": (()=>request),
    "withArcjet": (()=>withArcjet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/server.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/arcjet/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/arcjet/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/ip/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/headers/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/env/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/logger/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/protocol/client.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$transport$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/transport/edge-light.js [middleware-edge] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
async function request() {
    const hdrs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headers"])();
    const cook = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieEntries = cook.getAll().map((cookie)=>[
            cookie.name,
            cookie.value
        ]);
    return {
        headers: hdrs,
        cookies: Object.fromEntries(cookieEntries)
    };
}
// TODO: Deduplicate with other packages
function errorMessage(err) {
    if (err) {
        if (typeof err === "string") {
            return err;
        }
        if (typeof err === "object" && "message" in err && typeof err.message === "string") {
            return err.message;
        }
    }
    return "Unknown problem";
}
function createRemoteClient(options) {
    // The base URL for the Arcjet API. Will default to the standard production
    // API unless environment variable `ARCJET_BASE_URL` is set.
    const url = options?.baseUrl ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["baseUrl"])(process.env);
    // The timeout for the Arcjet API in milliseconds. This is set to a low value
    // in production so calls fail open.
    const timeout = options?.timeout ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env) ? 1000 : 500);
    // Transport is the HTTP client that the client uses to make requests.
    const transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$transport$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createTransport"])(url);
    const sdkStack = "NEXTJS";
    const sdkVersion = "1.0.0-beta.8";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createClient"])({
        transport,
        baseUrl: url,
        timeout,
        sdkStack,
        sdkVersion
    });
}
function isIterable(val) {
    return typeof val?.[Symbol.iterator] === "function";
}
function cookiesToArray(cookies) {
    if (typeof cookies === "undefined") {
        return [];
    }
    if (isIterable(cookies)) {
        return Array.from(cookies).map(([_, cookie])=>cookie);
    } else {
        return Object.entries(cookies).map(([name, value])=>({
                name,
                value: value ?? ""
            }));
    }
}
function cookiesToString(cookies) {
    // This is essentially the implementation of `RequestCookies#toString` in
    // Next.js but normalized for NextApiRequest cookies object
    return cookiesToArray(cookies).map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
}
/**
 * Create a new {@link ArcjetNext} client. Always build your initial client
 * outside of a request handler so it persists across requests. If you need to
 * augment a client inside a handler, call the `withRule()` function on the base
 * client.
 *
 * @param options - Arcjet configuration options to apply to all requests.
 */ function arcjet(options) {
    const client = options.client ?? createRemoteClient();
    const log = options.log ? options.log : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Logger"]({
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["logLevel"])(process.env)
    });
    const proxies = Array.isArray(options.proxies) ? options.proxies.map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseProxy"]) : undefined;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env)) {
        log.warn("Arcjet will use 127.0.0.1 when missing public IP address in development mode");
    }
    function toArcjetRequest(request, props) {
        // We construct an ArcjetHeaders to normalize over Headers
        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](request.headers);
        let ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            ip: request.ip,
            socket: request.socket,
            info: request.info,
            requestContext: request.requestContext,
            headers
        }, {
            platform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["platform"])(process.env),
            proxies
        });
        if (ip === "") {
            // If the `ip` is empty but we're in development mode, we default the IP
            // so the request doesn't fail.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env)) {
                ip = "127.0.0.1";
            } else {
                log.warn(`Client IP address is missing. If this is a dev environment set the ARCJET_ENV env var to "development"`);
            }
        }
        const method = request.method ?? "";
        const host = headers.get("host") ?? "";
        let path = "";
        let query = "";
        let protocol = "";
        // TODO(#36): nextUrl has formatting logic when you `toString` but
        // we don't account for that here
        if (typeof request.nextUrl !== "undefined") {
            path = request.nextUrl.pathname ?? "";
            if (typeof request.nextUrl.search !== "undefined") {
                query = request.nextUrl.search;
            }
            if (typeof request.nextUrl.protocol !== "undefined") {
                protocol = request.nextUrl.protocol;
            }
        } else {
            if (typeof request.socket?.encrypted !== "undefined") {
                protocol = request.socket.encrypted ? "https:" : "http:";
            } else {
                protocol = "http:";
            }
            // Do some very simple validation, but also try/catch around URL parsing
            if (typeof request.url !== "undefined" && request.url !== "" && host !== "") {
                try {
                    const url = new URL(request.url, `${protocol}//${host}`);
                    path = url.pathname;
                    query = url.search;
                    protocol = url.protocol;
                } catch  {
                    // If the parsing above fails, just set the path as whatever url we
                    // received.
                    path = request.url ?? "";
                    log.warn('Unable to parse URL. Using "%s" as `path`.', path);
                }
            } else {
                path = request.url ?? "";
            }
        }
        const cookies = cookiesToString(request.cookies);
        const extra = {};
        // If we're running on Vercel, we can add some extra information
        if (process.env["VERCEL"]) {
            // Vercel ID https://vercel.com/docs/concepts/edge-network/headers
            extra["vercel-id"] = headers.get("x-vercel-id") ?? "";
            // Vercel deployment URL
            // https://vercel.com/docs/concepts/edge-network/headers
            extra["vercel-deployment-url"] = headers.get("x-vercel-deployment-url") ?? "";
            // Vercel git commit SHA
            // https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables
            extra["vercel-git-commit-sha"] = process.env["VERCEL_GIT_COMMIT_SHA"] ?? "";
            extra["vercel-git-commit-sha"] = process.env["VERCEL_GIT_COMMIT_SHA"] ?? "";
        }
        return {
            ...props,
            ...extra,
            ip,
            method,
            protocol,
            host,
            path,
            headers,
            cookies,
            query
        };
    }
    function withClient(aj) {
        return Object.freeze({
            withRule (rule) {
                const client = aj.withRule(rule);
                return withClient(client);
            },
            async protect (request, ...[props]) {
                // TODO(#220): The generic manipulations get really mad here, so we cast
                // Further investigation makes it seem like it has something to do with
                // the definition of `props` in the signature but it's hard to track down
                const req = toArcjetRequest(request, props ?? {});
                const getBody = async ()=>{
                    try {
                        if (typeof request.clone === "function") {
                            const cloned = request.clone();
                            // Awaited to throw if it rejects and we'll just return undefined
                            const body = await cloned.text();
                            return body;
                        } else if (typeof request.body === "string") {
                            return request.body;
                        } else if (typeof request.body !== "undefined" && // BigInt cannot be serialized with JSON.stringify
                        typeof request.body !== "bigint" && // The body will be null if there was no body with the request.
                        // Reference:
                        // https://nextjs.org/docs/pages/building-your-application/routing/api-routes#request-helpers
                        request.body !== null) {
                            return JSON.stringify(request.body);
                        } else {
                            log.warn("no body available");
                            return;
                        }
                    } catch (e) {
                        log.error("failed to get request body: %s", errorMessage(e));
                        return;
                    }
                };
                return aj.protect({
                    getBody
                }, req);
            }
        });
    }
    const aj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
        ...options,
        client,
        log
    });
    return withClient(aj);
}
/**
 * Protects your Next.js application using Arcjet middleware.
 *
 * @param arcjet An instantiated Arcjet SDK
 * @param middleware Any existing middleware you'd like to be called after
 * Arcjet decides a request is allowed.
 * @returns If the request is allowed, the next middleware or handler will be
 * called. If the request is denied, a `Response` will be returned immediately
 * and the no further middleware or handlers will be called.
 */ function createMiddleware(arcjet, existingMiddleware) {
    return async function middleware(request, event) {
        const decision = await arcjet.protect(request);
        if (decision.isDenied()) {
            // TODO(#222): Content type negotiation using `Accept` header
            if (decision.reason.isRateLimit()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    code: 429,
                    message: "Too Many Requests"
                }, {
                    status: 429
                });
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    code: 403,
                    message: "Forbidden"
                }, {
                    status: 403
                });
            }
        } else {
            if (typeof existingMiddleware === "function") {
                return existingMiddleware(request, event);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
            }
        }
    };
}
function isNextApiResponse(val) {
    if (val === null) {
        return false;
    }
    if (typeof val !== "object") {
        return false;
    }
    if (!("status" in val)) {
        return false;
    }
    if (!("json" in val)) {
        return false;
    }
    if (typeof val.status !== "function" || typeof val.json !== "function") {
        return false;
    }
    return true;
}
/**
 * Wraps a Next.js page route, edge middleware, or an API route running on the
 * Edge Runtime.
 *
 * @param arcjet An instantiated Arcjet SDK
 * @param handler The request handler to wrap
 * @returns If the request is allowed, the wrapped `handler` will be called. If
 * the request is denied, a `Response` will be returned based immediately and
 * the wrapped `handler` will never be called.
 */ function withArcjet(arcjet, handler) {
    return async (...args)=>{
        const request = args[0];
        const response = args[1];
        const decision = await arcjet.protect(request);
        if (decision.isDenied()) {
            if (isNextApiResponse(response)) {
                // TODO(#222): Content type negotiation using `Accept` header
                if (decision.reason.isRateLimit()) {
                    return response.status(429).json({
                        code: 429,
                        message: "Too Many Requests"
                    });
                } else {
                    return response.status(403).json({
                        code: 403,
                        message: "Forbidden"
                    });
                }
            } else {
                // TODO(#222): Content type negotiation using `Accept` header
                if (decision.reason.isRateLimit()) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        code: 429,
                        message: "Too Many Requests"
                    }, {
                        status: 429
                    });
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        code: 403,
                        message: "Forbidden"
                    }, {
                        status: 403
                    });
                }
            }
        } else {
            return handler(...args);
        }
    };
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/chat-ui/node_modules/@arcjet/next/index.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/server.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/arcjet/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/ip/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/headers/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/env/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/logger/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/protocol/client.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$transport$2f$edge$2d$light$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/transport/edge-light.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@arcjet/next/index.js [middleware-edge] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/chat-ui/node_modules/map-obj/index.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const isObject = (value)=>typeof value === 'object' && value !== null;
const mapObjectSkip = Symbol('skip');
// Customized for this use-case
const isObjectCustom = (value)=>isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
const mapObject = (object, mapper, options, isSeen = new WeakMap())=>{
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
    const mapArray = (array)=>array.map((element)=>isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
    if (Array.isArray(object)) {
        return mapArray(object);
    }
    for (const [key, value] of Object.entries(object)){
        const mapResult = mapper(key, value, object);
        if (mapResult === mapObjectSkip) {
            continue;
        }
        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
        // Drop `__proto__` keys.
        if (newKey === '__proto__') {
            continue;
        }
        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
            newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
        }
        target[newKey] = newValue;
    }
    return target;
};
module.exports = (object, mapper, options)=>{
    if (!isObject(object)) {
        throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
    }
    return mapObject(object, mapper, options);
};
module.exports.mapObjectSkip = mapObjectSkip;
}}),
"[project]/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s({
    "__addDisposableResource": (()=>__addDisposableResource),
    "__assign": (()=>__assign),
    "__asyncDelegator": (()=>__asyncDelegator),
    "__asyncGenerator": (()=>__asyncGenerator),
    "__asyncValues": (()=>__asyncValues),
    "__await": (()=>__await),
    "__awaiter": (()=>__awaiter),
    "__classPrivateFieldGet": (()=>__classPrivateFieldGet),
    "__classPrivateFieldIn": (()=>__classPrivateFieldIn),
    "__classPrivateFieldSet": (()=>__classPrivateFieldSet),
    "__createBinding": (()=>__createBinding),
    "__decorate": (()=>__decorate),
    "__disposeResources": (()=>__disposeResources),
    "__esDecorate": (()=>__esDecorate),
    "__exportStar": (()=>__exportStar),
    "__extends": (()=>__extends),
    "__generator": (()=>__generator),
    "__importDefault": (()=>__importDefault),
    "__importStar": (()=>__importStar),
    "__makeTemplateObject": (()=>__makeTemplateObject),
    "__metadata": (()=>__metadata),
    "__param": (()=>__param),
    "__propKey": (()=>__propKey),
    "__read": (()=>__read),
    "__rest": (()=>__rest),
    "__rewriteRelativeImportExtension": (()=>__rewriteRelativeImportExtension),
    "__runInitializers": (()=>__runInitializers),
    "__setFunctionName": (()=>__setFunctionName),
    "__spread": (()=>__spread),
    "__spreadArray": (()=>__spreadArray),
    "__spreadArrays": (()=>__spreadArrays),
    "__values": (()=>__values),
    "default": (()=>__TURBOPACK__default__export__)
});
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    "TURBOPACK unreachable";
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}}),
"[project]/apps/chat-ui/node_modules/lower-case/dist.es2015/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */ __turbopack_context__.s({
    "localeLowerCase": (()=>localeLowerCase),
    "lowerCase": (()=>lowerCase)
});
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {
        return lang.map[m];
    }));
    return lowerCase(str);
}
function lowerCase(str) {
    return str.toLowerCase();
} //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/no-case/dist.es2015/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "noCase": (()=>noCase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$lower$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/lower-case/dist.es2015/index.js [middleware-edge] (ecmascript)");
;
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [
    /([a-z0-9])([A-Z])/g,
    /([A-Z])([A-Z][a-z])/g
];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$lower$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["lowerCase"] : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while(result.charAt(start) === "\0")start++;
    while(result.charAt(end - 1) === "\0")end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */ function replace(input, re, value) {
    if (re instanceof RegExp) return input.replace(re, value);
    return re.reduce(function(input, re) {
        return input.replace(re, value);
    }, input);
} //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/dot-case/dist.es2015/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dotCase": (()=>dotCase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$no$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/no-case/dist.es2015/index.js [middleware-edge] (ecmascript)");
;
;
function dotCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$no$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["noCase"])(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({
        delimiter: "."
    }, options));
} //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/snake-case/dist.es2015/index.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "snakeCase": (()=>snakeCase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dot$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/dot-case/dist.es2015/index.js [middleware-edge] (ecmascript)");
;
;
function snakeCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dot$2d$case$2f$dist$2e$es2015$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["dotCase"])(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({
        delimiter: "_"
    }, options));
} //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/snakecase-keys/index.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const map = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/map-obj/index.js [middleware-edge] (ecmascript)");
const { snakeCase } = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/snake-case/dist.es2015/index.js [middleware-edge] (ecmascript)");
const PlainObjectConstructor = {}.constructor;
module.exports = function(obj, options) {
    if (Array.isArray(obj)) {
        if (obj.some((item)=>item.constructor !== PlainObjectConstructor)) {
            throw new Error('obj must be array of plain objects');
        }
    } else {
        if (obj.constructor !== PlainObjectConstructor) {
            throw new Error('obj must be an plain object');
        }
    }
    options = Object.assign({
        deep: true,
        exclude: [],
        parsingOptions: {}
    }, options);
    return map(obj, function(key, val) {
        return [
            matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),
            val,
            mapperOptions(key, val, options)
        ];
    }, options);
};
function matches(patterns, value) {
    return patterns.some(function(pattern) {
        return typeof pattern === 'string' ? pattern === value : pattern.test(value);
    });
}
function mapperOptions(key, val, options) {
    return options.shouldRecurse ? {
        shouldRecurse: options.shouldRecurse(key, val)
    } : undefined;
}
}}),
"[project]/apps/chat-ui/node_modules/cookie/dist/index.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.serialize = serialize;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break; // No more cookie pairs.
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (obj[key] === undefined) {
            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            let valEndIdx = endIndex(str, endIdx, valStartIdx);
            const value = dec(str.slice(valStartIdx, valEndIdx));
            obj[key] = value;
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
function startIndex(str, index, max) {
    do {
        const code = str.charCodeAt(index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index;
    }while (++index < max)
    return max;
}
function endIndex(str, index, min) {
    while(index > min){
        const code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */ function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options) return str;
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
            throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
    }
    if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
            throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
    }
    if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
        str += "; HttpOnly";
    }
    if (options.secure) {
        str += "; Secure";
    }
    if (options.partitioned) {
        str += "; Partitioned";
    }
    if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
    }
    if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/routing/config.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "receiveRoutingConfig": (()=>receiveRoutingConfig)
});
function receiveRoutingConfig(input) {
    return {
        ...input,
        localePrefix: receiveLocalePrefixConfig(input.localePrefix),
        localeCookie: receiveLocaleCookie(input.localeCookie),
        localeDetection: input.localeDetection ?? true,
        alternateLinks: input.alternateLinks ?? true
    };
}
function receiveLocaleCookie(localeCookie) {
    return localeCookie ?? true ? {
        name: 'NEXT_LOCALE',
        sameSite: 'lax',
        ...typeof localeCookie === 'object' && localeCookie
    } : false;
}
function receiveLocalePrefixConfig(localePrefix) {
    return typeof localePrefix === 'object' ? localePrefix : {
        mode: localePrefix || 'always'
    };
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/constants.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Used to read the locale from the middleware
__turbopack_context__.s({
    "HEADER_LOCALE_NAME": (()=>HEADER_LOCALE_NAME)
});
const HEADER_LOCALE_NAME = 'X-NEXT-INTL-LOCALE';
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/utils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLocaleAsPrefix": (()=>getLocaleAsPrefix),
    "getLocalePrefix": (()=>getLocalePrefix),
    "getLocalizedTemplate": (()=>getLocalizedTemplate),
    "getSortedPathnames": (()=>getSortedPathnames),
    "hasPathnamePrefixed": (()=>hasPathnamePrefixed),
    "isLocalizableHref": (()=>isLocalizableHref),
    "isPromise": (()=>isPromise),
    "matchesPathname": (()=>matchesPathname),
    "normalizeTrailingSlash": (()=>normalizeTrailingSlash),
    "prefixPathname": (()=>prefixPathname),
    "templateToRegex": (()=>templateToRegex),
    "unprefixPathname": (()=>unprefixPathname)
});
function isRelativeHref(href) {
    const pathname = typeof href === 'object' ? href.pathname : href;
    return pathname != null && !pathname.startsWith('/');
}
function isLocalHref(href) {
    if (typeof href === 'object') {
        return href.host == null && href.hostname == null;
    } else {
        const hasProtocol = /^[a-z]+:/i.test(href);
        return !hasProtocol;
    }
}
function isLocalizableHref(href) {
    return isLocalHref(href) && !isRelativeHref(href);
}
function unprefixPathname(pathname, prefix) {
    return pathname.replace(new RegExp(`^${prefix}`), '') || '/';
}
function prefixPathname(prefix, pathname) {
    let localizedHref = prefix;
    // Avoid trailing slashes
    if (/^\/(\?.*)?$/.test(pathname)) {
        pathname = pathname.slice(1);
    }
    localizedHref += pathname;
    return localizedHref;
}
function hasPathnamePrefixed(prefix, pathname) {
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
}
function hasTrailingSlash() {
    try {
        // Provided via `env` setting in `next.config.js` via the plugin
        return process.env._next_intl_trailing_slash === 'true';
    } catch  {
        return false;
    }
}
function getLocalizedTemplate(pathnameConfig, locale, internalTemplate) {
    return typeof pathnameConfig === 'string' ? pathnameConfig : pathnameConfig[locale] || internalTemplate;
}
function normalizeTrailingSlash(pathname) {
    const trailingSlash = hasTrailingSlash();
    if (pathname !== '/') {
        const pathnameEndsWithSlash = pathname.endsWith('/');
        if (trailingSlash && !pathnameEndsWithSlash) {
            pathname += '/';
        } else if (!trailingSlash && pathnameEndsWithSlash) {
            pathname = pathname.slice(0, -1);
        }
    }
    return pathname;
}
function matchesPathname(/** E.g. `/users/[userId]-[userName]` */ template, /** E.g. `/users/23-jane` */ pathname) {
    const normalizedTemplate = normalizeTrailingSlash(template);
    const normalizedPathname = normalizeTrailingSlash(pathname);
    const regex = templateToRegex(normalizedTemplate);
    return regex.test(normalizedPathname);
}
function getLocalePrefix(locale, localePrefix) {
    return localePrefix.mode !== 'never' && localePrefix.prefixes?.[locale] || // We return a prefix even if `mode: 'never'`. It's up to the consumer
    // to decide to use it or not.
    getLocaleAsPrefix(locale);
}
function getLocaleAsPrefix(locale) {
    return '/' + locale;
}
function templateToRegex(template) {
    const regexPattern = template// Replace optional catchall ('[[...slug]]')
    .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, '?(.*)')// Replace catchall ('[...slug]')
    .replace(/\[(\.\.\.[^\]]+)\]/g, '(.+)')// Replace regular parameter ('[slug]')
    .replace(/\[([^\]]+)\]/g, '([^/]+)');
    return new RegExp(`^${regexPattern}$`);
}
function isOptionalCatchAllSegment(pathname) {
    return pathname.includes('[[...');
}
function isCatchAllSegment(pathname) {
    return pathname.includes('[...');
}
function isDynamicSegment(pathname) {
    return pathname.includes('[');
}
function comparePathnamePairs(a, b) {
    const pathA = a.split('/');
    const pathB = b.split('/');
    const maxLength = Math.max(pathA.length, pathB.length);
    for(let i = 0; i < maxLength; i++){
        const segmentA = pathA[i];
        const segmentB = pathB[i];
        // If one of the paths ends, prioritize the shorter path
        if (!segmentA && segmentB) return -1;
        if (segmentA && !segmentB) return 1;
        if (!segmentA && !segmentB) continue;
        // Prioritize static segments over dynamic segments
        if (!isDynamicSegment(segmentA) && isDynamicSegment(segmentB)) return -1;
        if (isDynamicSegment(segmentA) && !isDynamicSegment(segmentB)) return 1;
        // Prioritize non-catch-all segments over catch-all segments
        if (!isCatchAllSegment(segmentA) && isCatchAllSegment(segmentB)) return -1;
        if (isCatchAllSegment(segmentA) && !isCatchAllSegment(segmentB)) return 1;
        // Prioritize non-optional catch-all segments over optional catch-all segments
        if (!isOptionalCatchAllSegment(segmentA) && isOptionalCatchAllSegment(segmentB)) {
            return -1;
        }
        if (isOptionalCatchAllSegment(segmentA) && !isOptionalCatchAllSegment(segmentB)) {
            return 1;
        }
        if (segmentA === segmentB) continue;
    }
    // Both pathnames are completely static
    return 0;
}
function getSortedPathnames(pathnames) {
    return pathnames.sort(comparePathnamePairs);
}
function isPromise(value) {
    // https://github.com/amannn/next-intl/issues/1711
    return typeof value.then === 'function';
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/utils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyBasePath": (()=>applyBasePath),
    "formatPathname": (()=>formatPathname),
    "formatPathnameTemplate": (()=>formatPathnameTemplate),
    "formatTemplatePathname": (()=>formatTemplatePathname),
    "getBestMatchingDomain": (()=>getBestMatchingDomain),
    "getHost": (()=>getHost),
    "getInternalTemplate": (()=>getInternalTemplate),
    "getLocaleAsPrefix": (()=>getLocaleAsPrefix),
    "getLocalePrefixes": (()=>getLocalePrefixes),
    "getNormalizedPathname": (()=>getNormalizedPathname),
    "getPathnameMatch": (()=>getPathnameMatch),
    "getRouteParams": (()=>getRouteParams),
    "isLocaleSupportedOnDomain": (()=>isLocaleSupportedOnDomain),
    "sanitizePathname": (()=>sanitizePathname)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/utils.js [middleware-edge] (ecmascript)");
;
function getInternalTemplate(pathnames, pathname, locale) {
    const sortedPathnames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSortedPathnames"])(Object.keys(pathnames));
    // Try to find a localized pathname that matches
    for (const internalPathname of sortedPathnames){
        const localizedPathnamesOrPathname = pathnames[internalPathname];
        if (typeof localizedPathnamesOrPathname === 'string') {
            const localizedPathname = localizedPathnamesOrPathname;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["matchesPathname"])(localizedPathname, pathname)) {
                return [
                    undefined,
                    internalPathname
                ];
            }
        } else {
            // Prefer the entry with the current locale in case multiple
            // localized pathnames match the current pathname
            const sortedEntries = Object.entries(localizedPathnamesOrPathname);
            const curLocaleIndex = sortedEntries.findIndex(([entryLocale])=>entryLocale === locale);
            if (curLocaleIndex > 0) {
                sortedEntries.unshift(sortedEntries.splice(curLocaleIndex, 1)[0]);
            }
            for (const [entryLocale] of sortedEntries){
                const localizedTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalizedTemplate"])(pathnames[internalPathname], entryLocale, internalPathname);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["matchesPathname"])(localizedTemplate, pathname)) {
                    return [
                        entryLocale,
                        internalPathname
                    ];
                }
            }
        }
    }
    // Try to find an internal pathname that matches (this can be the case
    // if all localized pathnames are different from the internal pathnames)
    for (const internalPathname of Object.keys(pathnames)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["matchesPathname"])(internalPathname, pathname)) {
            return [
                undefined,
                internalPathname
            ];
        }
    }
    // No match
    return [
        undefined,
        undefined
    ];
}
function formatTemplatePathname(sourcePathname, sourceTemplate, targetTemplate, prefix) {
    const params = getRouteParams(sourceTemplate, sourcePathname);
    let targetPathname = '';
    targetPathname += formatPathnameTemplate(targetTemplate, params);
    // A pathname with an optional catchall like `/categories/[[...slug]]`
    // should be normalized to `/categories` if the catchall is not present
    // and no trailing slash is configured
    targetPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(targetPathname);
    return targetPathname;
}
/**
 * Removes potential prefixes from the pathname.
 */ function getNormalizedPathname(pathname, locales, localePrefix) {
    // Add trailing slash for consistent handling
    // both for the root as well as nested paths
    if (!pathname.endsWith('/')) {
        pathname += '/';
    }
    const localePrefixes = getLocalePrefixes(locales, localePrefix);
    const regex = new RegExp(`^(${localePrefixes.map(([, prefix])=>prefix.replaceAll('/', '\\/')).join('|')})/(.*)`, 'i');
    const match = pathname.match(regex);
    let result = match ? '/' + match[2] : pathname;
    if (result !== '/') {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(result);
    }
    return result;
}
function getLocalePrefixes(locales, localePrefix, sort = true) {
    const prefixes = locales.map((locale)=>[
            locale,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalePrefix"])(locale, localePrefix)
        ]);
    if (sort) {
        // More specific ones first
        prefixes.sort((a, b)=>b[1].length - a[1].length);
    }
    return prefixes;
}
function getPathnameMatch(pathname, locales, localePrefix, domain) {
    const localePrefixes = getLocalePrefixes(locales, localePrefix);
    // Sort to prioritize domain locales
    if (domain) {
        localePrefixes.sort(([localeA], [localeB])=>{
            if (localeA === domain.defaultLocale) return -1;
            if (localeB === domain.defaultLocale) return 1;
            const isLocaleAInDomain = domain.locales.includes(localeA);
            const isLocaleBInDomain = domain.locales.includes(localeB);
            if (isLocaleAInDomain && !isLocaleBInDomain) return -1;
            if (!isLocaleAInDomain && isLocaleBInDomain) return 1;
            return 0;
        });
    }
    for (const [locale, prefix] of localePrefixes){
        let exact, matches;
        if (pathname === prefix || pathname.startsWith(prefix + '/')) {
            exact = matches = true;
        } else {
            const normalizedPathname = pathname.toLowerCase();
            const normalizedPrefix = prefix.toLowerCase();
            if (normalizedPathname === normalizedPrefix || normalizedPathname.startsWith(normalizedPrefix + '/')) {
                exact = false;
                matches = true;
            }
        }
        if (matches) {
            return {
                locale,
                prefix,
                matchedPrefix: pathname.slice(0, prefix.length),
                exact
            };
        }
    }
}
function getRouteParams(template, pathname) {
    const normalizedPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(pathname);
    const normalizedTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(template);
    const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["templateToRegex"])(normalizedTemplate);
    const match = regex.exec(normalizedPathname);
    if (!match) return undefined;
    const params = {};
    for(let i = 1; i < match.length; i++){
        const key = normalizedTemplate.match(/\[([^\]]+)\]/g)?.[i - 1].replace(/[[\]]/g, '');
        if (key) params[key] = match[i];
    }
    return params;
}
function formatPathnameTemplate(template, params) {
    if (!params) return template;
    // Simplify syntax for optional catchall ('[[...slug]]') so
    // we can replace the value with simple interpolation
    template = template.replace(/\[\[/g, '[').replace(/\]\]/g, ']');
    let result = template;
    Object.entries(params).forEach(([key, value])=>{
        result = result.replace(`[${key}]`, value);
    });
    return result;
}
function formatPathname(pathname, prefix, search) {
    let result = pathname;
    if (prefix) {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["prefixPathname"])(prefix, result);
    }
    if (search) {
        result += search;
    }
    return result;
}
function getHost(requestHeaders) {
    return requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? undefined;
}
function isLocaleSupportedOnDomain(locale, domain) {
    return domain.defaultLocale === locale || domain.locales.includes(locale);
}
function getBestMatchingDomain(curHostDomain, locale, domainsConfig) {
    let domainConfig;
    // Prio 1: Stay on current domain
    if (curHostDomain && isLocaleSupportedOnDomain(locale, curHostDomain)) {
        domainConfig = curHostDomain;
    }
    // Prio 2: Use alternative domain with matching default locale
    if (!domainConfig) {
        domainConfig = domainsConfig.find((cur)=>cur.defaultLocale === locale);
    }
    // Prio 3: Use alternative domain that supports the locale
    if (!domainConfig) {
        domainConfig = domainsConfig.find((cur)=>cur.locales.includes(locale));
    }
    return domainConfig;
}
function applyBasePath(pathname, basePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(basePath + pathname);
}
function getLocaleAsPrefix(locale) {
    return `/${locale}`;
}
function sanitizePathname(pathname) {
    // Sanitize malicious URIs, e.g.:
    // '/en/\\example.org → /en/%5C%5Cexample.org'
    // '/en////example.org → /en/example.org'
    return pathname.replace(/\\/g, '%5C').replace(/\/+/g, '/');
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/getAlternateLinksHeaderValue.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>getAlternateLinksHeaderValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/utils.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/utils.js [middleware-edge] (ecmascript)");
;
;
/**
 * See https://developers.google.com/search/docs/specialty/international/localized-versions
 */ function getAlternateLinksHeaderValue({ internalTemplateName, localizedPathnames, request, resolvedLocale, routing }) {
    const normalizedUrl = request.nextUrl.clone();
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHost"])(request.headers);
    if (host) {
        normalizedUrl.port = '';
        normalizedUrl.host = host;
    }
    normalizedUrl.protocol = request.headers.get('x-forwarded-proto') ?? normalizedUrl.protocol;
    normalizedUrl.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getNormalizedPathname"])(normalizedUrl.pathname, routing.locales, routing.localePrefix);
    function getAlternateEntry(url, locale) {
        url.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(url.pathname);
        if (request.nextUrl.basePath) {
            url = new URL(url);
            url.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["applyBasePath"])(url.pathname, request.nextUrl.basePath);
        }
        return `<${url.toString()}>; rel="alternate"; hreflang="${locale}"`;
    }
    function getLocalizedPathname(pathname, locale) {
        if (localizedPathnames && typeof localizedPathnames === 'object') {
            const sourceTemplate = localizedPathnames[resolvedLocale];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatTemplatePathname"])(pathname, sourceTemplate ?? internalTemplateName, localizedPathnames[locale] ?? internalTemplateName);
        } else {
            return pathname;
        }
    }
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalePrefixes"])(routing.locales, routing.localePrefix, false).flatMap(([locale, prefix])=>{
        function prefixPathname(pathname) {
            if (pathname === '/') {
                return prefix;
            } else {
                return prefix + pathname;
            }
        }
        let url;
        if (routing.domains) {
            const domainConfigs = routing.domains.filter((cur)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isLocaleSupportedOnDomain"])(locale, cur));
            return domainConfigs.map((domainConfig)=>{
                url = new URL(normalizedUrl);
                url.port = '';
                url.host = domainConfig.domain;
                // Important: Use `normalizedUrl` here, as `url` potentially uses
                // a `basePath` that automatically gets applied to the pathname
                url.pathname = getLocalizedPathname(normalizedUrl.pathname, locale);
                if (locale !== domainConfig.defaultLocale || routing.localePrefix.mode === 'always') {
                    url.pathname = prefixPathname(url.pathname);
                }
                return getAlternateEntry(url, locale);
            });
        } else {
            let pathname;
            if (localizedPathnames && typeof localizedPathnames === 'object') {
                pathname = getLocalizedPathname(normalizedUrl.pathname, locale);
            } else {
                pathname = normalizedUrl.pathname;
            }
            if (locale !== routing.defaultLocale || routing.localePrefix.mode === 'always') {
                pathname = prefixPathname(pathname);
            }
            url = new URL(pathname, normalizedUrl);
        }
        return getAlternateEntry(url, locale);
    });
    // Add x-default entry
    const shouldAddXDefault = // For domain-based routing there is no reasonable x-default
    !routing.domains || routing.domains.length === 0;
    if (shouldAddXDefault) {
        const localizedPathname = getLocalizedPathname(normalizedUrl.pathname, routing.defaultLocale);
        if (localizedPathname) {
            const url = new URL(localizedPathname, normalizedUrl);
            links.push(getAlternateEntry(url, 'x-default'));
        }
    }
    return links.join(', ');
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/resolveLocale.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>resolveLocale),
    "getAcceptLanguageLocale": (()=>getAcceptLanguageLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$negotiator$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/negotiator/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/utils.js [middleware-edge] (ecmascript)");
;
;
;
function findDomainFromHost(requestHeaders, domains) {
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHost"])(requestHeaders);
    if (host) {
        return domains.find((cur)=>cur.domain === host);
    }
    return undefined;
}
function orderLocales(locales) {
    // Workaround for https://github.com/formatjs/formatjs/issues/4469
    return locales.slice().sort((a, b)=>b.length - a.length);
}
function getAcceptLanguageLocale(requestHeaders, locales, defaultLocale) {
    let locale;
    const languages = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$negotiator$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]({
        headers: {
            'accept-language': requestHeaders.get('accept-language') || undefined
        }
    }).languages();
    try {
        const orderedLocales = orderLocales(locales);
        locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["match"])(languages, orderedLocales, defaultLocale);
    } catch  {
    // Invalid language
    }
    return locale;
}
function getLocaleFromCookie(routing, requestCookies) {
    if (routing.localeCookie && requestCookies.has(routing.localeCookie.name)) {
        const value = requestCookies.get(routing.localeCookie.name)?.value;
        if (value && routing.locales.includes(value)) {
            return value;
        }
    }
}
function resolveLocaleFromPrefix(routing, requestHeaders, requestCookies, pathname) {
    let locale;
    // Prio 1: Use route prefix
    if (pathname) {
        locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getPathnameMatch"])(pathname, routing.locales, routing.localePrefix)?.locale;
    }
    // Prio 2: Use existing cookie
    if (!locale && routing.localeDetection) {
        locale = getLocaleFromCookie(routing, requestCookies);
    }
    // Prio 3: Use the `accept-language` header
    if (!locale && routing.localeDetection) {
        locale = getAcceptLanguageLocale(requestHeaders, routing.locales, routing.defaultLocale);
    }
    // Prio 4: Use default locale
    if (!locale) {
        locale = routing.defaultLocale;
    }
    return locale;
}
function resolveLocaleFromDomain(routing, requestHeaders, requestCookies, pathname) {
    const domains = routing.domains;
    const domain = findDomainFromHost(requestHeaders, domains);
    if (!domain) {
        return {
            locale: resolveLocaleFromPrefix(routing, requestHeaders, requestCookies, pathname)
        };
    }
    let locale;
    // Prio 1: Use route prefix
    if (pathname) {
        const prefixLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getPathnameMatch"])(pathname, routing.locales, routing.localePrefix, domain)?.locale;
        if (prefixLocale) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isLocaleSupportedOnDomain"])(prefixLocale, domain)) {
                locale = prefixLocale;
            } else {
                // Causes a redirect to a domain that supports the locale
                return {
                    locale: prefixLocale,
                    domain
                };
            }
        }
    }
    // Prio 2: Use existing cookie
    if (!locale && routing.localeDetection) {
        const cookieLocale = getLocaleFromCookie(routing, requestCookies);
        if (cookieLocale) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isLocaleSupportedOnDomain"])(cookieLocale, domain)) {
                locale = cookieLocale;
            }
        }
    }
    // Prio 3: Use the `accept-language` header
    if (!locale && routing.localeDetection) {
        const headerLocale = getAcceptLanguageLocale(requestHeaders, domain.locales, domain.defaultLocale);
        if (headerLocale) {
            locale = headerLocale;
        }
    }
    // Prio 4: Use default locale
    if (!locale) {
        locale = domain.defaultLocale;
    }
    return {
        locale,
        domain
    };
}
function resolveLocale(routing, requestHeaders, requestCookies, pathname) {
    if (routing.domains) {
        return resolveLocaleFromDomain(routing, requestHeaders, requestCookies, pathname);
    } else {
        return {
            locale: resolveLocaleFromPrefix(routing, requestHeaders, requestCookies, pathname)
        };
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/syncCookie.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>syncCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$resolveLocale$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/resolveLocale.js [middleware-edge] (ecmascript)");
;
function syncCookie(request, response, locale, routing, domain) {
    if (!routing.localeCookie) return;
    const { name, ...rest } = routing.localeCookie;
    const acceptLanguageLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$resolveLocale$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAcceptLanguageLocale"])(request.headers, domain?.locales || routing.locales, routing.defaultLocale);
    const hasLocaleCookie = request.cookies.has(name);
    const hasOutdatedCookie = hasLocaleCookie && request.cookies.get(name)?.value !== locale;
    if (hasLocaleCookie ? hasOutdatedCookie : acceptLanguageLocale !== locale) {
        response.cookies.set(name, locale, {
            path: request.nextUrl.basePath || undefined,
            ...rest
        });
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>createMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/routing/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/utils.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$getAlternateLinksHeaderValue$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/getAlternateLinksHeaderValue.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$resolveLocale$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/resolveLocale.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$syncCookie$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/syncCookie.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/middleware/utils.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
function createMiddleware(routing) {
    const resolvedRouting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["receiveRoutingConfig"])(routing);
    return function middleware(request) {
        let unsafeExternalPathname;
        try {
            // Resolve potential foreign symbols (e.g. /ja/%E7%B4%84 → /ja/約))
            unsafeExternalPathname = decodeURI(request.nextUrl.pathname);
        } catch  {
            // In case an invalid pathname is encountered, forward
            // it to Next.js which in turn responds with a 400
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        // Sanitize malicious URIs to prevent open redirect attacks due to
        // decodeURI doesn't escape encoded backslashes ('%5C' & '%5c')
        const externalPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sanitizePathname"])(unsafeExternalPathname);
        const { domain, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$resolveLocale$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(resolvedRouting, request.headers, request.cookies, externalPathname);
        const hasMatchedDefaultLocale = domain ? domain.defaultLocale === locale : locale === resolvedRouting.defaultLocale;
        const domainsConfig = resolvedRouting.domains?.filter((curDomain)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isLocaleSupportedOnDomain"])(locale, curDomain)) || [];
        const hasUnknownHost = resolvedRouting.domains != null && !domain;
        function rewrite(url) {
            const urlObj = new URL(url, request.url);
            if (request.nextUrl.basePath) {
                urlObj.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["applyBasePath"])(urlObj.pathname, request.nextUrl.basePath);
            }
            const headers = new Headers(request.headers);
            headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["HEADER_LOCALE_NAME"], locale);
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(urlObj, {
                request: {
                    headers
                }
            });
        }
        function redirect(url, redirectDomain) {
            const urlObj = new URL(url, request.url);
            urlObj.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeTrailingSlash"])(urlObj.pathname);
            if (domainsConfig.length > 0 && !redirectDomain && domain) {
                const bestMatchingDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getBestMatchingDomain"])(domain, locale, domainsConfig);
                if (bestMatchingDomain) {
                    redirectDomain = bestMatchingDomain.domain;
                    if (bestMatchingDomain.defaultLocale === locale && resolvedRouting.localePrefix.mode === 'as-needed') {
                        urlObj.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getNormalizedPathname"])(urlObj.pathname, resolvedRouting.locales, resolvedRouting.localePrefix);
                    }
                }
            }
            if (redirectDomain) {
                urlObj.host = redirectDomain;
                if (request.headers.get('x-forwarded-host')) {
                    urlObj.protocol = request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol;
                    const redirectDomainPort = redirectDomain.split(':')[1];
                    urlObj.port = redirectDomainPort ?? request.headers.get('x-forwarded-port') ?? '';
                }
            }
            if (request.nextUrl.basePath) {
                urlObj.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["applyBasePath"])(urlObj.pathname, request.nextUrl.basePath);
            }
            hasRedirected = true;
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(urlObj.toString());
        }
        const unprefixedExternalPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getNormalizedPathname"])(externalPathname, resolvedRouting.locales, resolvedRouting.localePrefix);
        const pathnameMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getPathnameMatch"])(externalPathname, resolvedRouting.locales, resolvedRouting.localePrefix, domain);
        const hasLocalePrefix = pathnameMatch != null;
        const isUnprefixedRouting = resolvedRouting.localePrefix.mode === 'never' || hasMatchedDefaultLocale && resolvedRouting.localePrefix.mode === 'as-needed';
        let response;
        let internalTemplateName;
        let hasRedirected;
        let unprefixedInternalPathname = unprefixedExternalPathname;
        const pathnames = resolvedRouting.pathnames;
        if (pathnames) {
            let resolvedTemplateLocale;
            [resolvedTemplateLocale, internalTemplateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getInternalTemplate"])(pathnames, unprefixedExternalPathname, locale);
            if (internalTemplateName) {
                const pathnameConfig = pathnames[internalTemplateName];
                const localeTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalizedTemplate"])(pathnameConfig, locale, internalTemplateName);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["matchesPathname"])(localeTemplate, unprefixedExternalPathname)) {
                    unprefixedInternalPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatTemplatePathname"])(unprefixedExternalPathname, localeTemplate, internalTemplateName);
                } else {
                    let sourceTemplate;
                    if (resolvedTemplateLocale) {
                        // A localized pathname from another locale has matched
                        sourceTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalizedTemplate"])(pathnameConfig, resolvedTemplateLocale, internalTemplateName);
                    } else {
                        // An internal pathname has matched that
                        // doesn't have a localized pathname
                        sourceTemplate = internalTemplateName;
                    }
                    const localePrefix = isUnprefixedRouting ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalePrefix"])(locale, resolvedRouting.localePrefix);
                    const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatTemplatePathname"])(unprefixedExternalPathname, sourceTemplate, localeTemplate);
                    response = redirect((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(template, localePrefix, request.nextUrl.search));
                }
            }
        }
        if (!response) {
            if (unprefixedInternalPathname === '/' && !hasLocalePrefix) {
                if (isUnprefixedRouting) {
                    response = rewrite((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedInternalPathname, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocaleAsPrefix"])(locale), request.nextUrl.search));
                } else {
                    response = redirect((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedExternalPathname, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalePrefix"])(locale, resolvedRouting.localePrefix), request.nextUrl.search));
                }
            } else {
                const internalHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedInternalPathname, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocaleAsPrefix"])(locale), request.nextUrl.search);
                if (hasLocalePrefix) {
                    const externalHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedExternalPathname, pathnameMatch.prefix, request.nextUrl.search);
                    if (resolvedRouting.localePrefix.mode === 'never') {
                        response = redirect((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedExternalPathname, undefined, request.nextUrl.search));
                    } else if (pathnameMatch.exact) {
                        if (hasMatchedDefaultLocale && isUnprefixedRouting) {
                            response = redirect((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedExternalPathname, undefined, request.nextUrl.search));
                        } else {
                            if (resolvedRouting.domains) {
                                const pathDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getBestMatchingDomain"])(domain, pathnameMatch.locale, domainsConfig);
                                if (domain?.domain !== pathDomain?.domain && !hasUnknownHost) {
                                    response = redirect(externalHref, pathDomain?.domain);
                                } else {
                                    response = rewrite(internalHref);
                                }
                            } else {
                                response = rewrite(internalHref);
                            }
                        }
                    } else {
                        response = redirect(externalHref);
                    }
                } else {
                    if (isUnprefixedRouting) {
                        response = rewrite(internalHref);
                    } else {
                        response = redirect((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatPathname"])(unprefixedExternalPathname, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLocalePrefix"])(locale, resolvedRouting.localePrefix), request.nextUrl.search));
                    }
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$syncCookie$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(request, response, locale, resolvedRouting, domain);
        if (!hasRedirected && resolvedRouting.localePrefix.mode !== 'never' && resolvedRouting.alternateLinks && resolvedRouting.locales.length > 1) {
            response.headers.set('Link', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$getAlternateLinksHeaderValue$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
                routing: resolvedRouting,
                internalTemplateName,
                localizedPathnames: internalTemplateName != null && pathnames ? pathnames[internalTemplateName] : undefined,
                request,
                resolvedLocale: locale
            }));
        }
        return response;
    };
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>defineRouting)
});
function defineRouting(config) {
    if (config.domains) {
        validateUniqueLocalesPerDomain(config.domains);
    }
    return config;
}
function validateUniqueLocalesPerDomain(domains) {
    const domainsByLocale = new Map();
    for (const { domain, locales } of domains){
        for (const locale of locales){
            const localeDomains = domainsByLocale.get(locale) || new Set();
            localeDomains.add(domain);
            domainsByLocale.set(locale, localeDomains);
        }
    }
    const duplicateLocaleMessages = Array.from(domainsByLocale.entries()).filter(([, localeDomains])=>localeDomains.size > 1).map(([locale, localeDomains])=>`- "${locale}" is used by: ${Array.from(localeDomains).join(', ')}`);
    if (duplicateLocaleMessages.length > 0) {
        console.warn('Locales are expected to be unique per domain, but found overlap:\n' + duplicateLocaleMessages.join('\n') + '\nPlease see https://next-intl.dev/docs/routing#domains');
    }
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defineRouting": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/negotiator/lib/charset.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = preferredCharsets;
module.exports.preferredCharsets = preferredCharsets;
/**
 * Module variables.
 * @private
 */ var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Charset header.
 * @private
 */ function parseAcceptCharset(accept) {
    var accepts = accept.split(',');
    for(var i = 0, j = 0; i < accepts.length; i++){
        var charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
            accepts[j++] = charset;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a charset from the Accept-Charset header.
 * @private
 */ function parseCharset(str, i) {
    var match = simpleCharsetRegExp.exec(str);
    if (!match) return null;
    var charset = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(';');
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split('=');
            if (p[0] === 'q') {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        charset: charset,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a charset.
 * @private
 */ function getCharsetPriority(charset, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(charset, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the charset.
 * @private
 */ function specify(charset, spec, index) {
    var s = 0;
    if (spec.charset.toLowerCase() === charset.toLowerCase()) {
        s |= 1;
    } else if (spec.charset !== '*') {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred charsets from an Accept-Charset header.
 * @public
 */ function preferredCharsets(accept, provided) {
    // RFC 2616 sec 14.2: no header = *
    var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');
    if (!provided) {
        // sorted list of all charsets
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
    });
    // sorted list of accepted charsets
    return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full charset string.
 * @private
 */ function getFullCharset(spec) {
    return spec.charset;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
}}),
"[project]/apps/chat-ui/node_modules/negotiator/lib/encoding.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = preferredEncodings;
module.exports.preferredEncodings = preferredEncodings;
/**
 * Module variables.
 * @private
 */ var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Encoding header.
 * @private
 */ function parseAcceptEncoding(accept) {
    var accepts = accept.split(',');
    var hasIdentity = false;
    var minQuality = 1;
    for(var i = 0, j = 0; i < accepts.length; i++){
        var encoding = parseEncoding(accepts[i].trim(), i);
        if (encoding) {
            accepts[j++] = encoding;
            hasIdentity = hasIdentity || specify('identity', encoding);
            minQuality = Math.min(minQuality, encoding.q || 1);
        }
    }
    if (!hasIdentity) {
        /*
     * If identity doesn't explicitly appear in the accept-encoding header,
     * it's added to the list of acceptable encoding with the lowest q
     */ accepts[j++] = {
            encoding: 'identity',
            q: minQuality,
            i: i
        };
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse an encoding from the Accept-Encoding header.
 * @private
 */ function parseEncoding(str, i) {
    var match = simpleEncodingRegExp.exec(str);
    if (!match) return null;
    var encoding = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(';');
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split('=');
            if (p[0] === 'q') {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        encoding: encoding,
        q: q,
        i: i
    };
}
/**
 * Get the priority of an encoding.
 * @private
 */ function getEncodingPriority(encoding, accepted, index) {
    var priority = {
        encoding: encoding,
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(encoding, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the encoding.
 * @private
 */ function specify(encoding, spec, index) {
    var s = 0;
    if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
        s |= 1;
    } else if (spec.encoding !== '*') {
        return null;
    }
    return {
        encoding: encoding,
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
;
/**
 * Get the preferred encodings from an Accept-Encoding header.
 * @public
 */ function preferredEncodings(accept, provided, preferred) {
    var accepts = parseAcceptEncoding(accept || '');
    var comparator = preferred ? function comparator(a, b) {
        if (a.q !== b.q) {
            return b.q - a.q // higher quality first
            ;
        }
        var aPreferred = preferred.indexOf(a.encoding);
        var bPreferred = preferred.indexOf(b.encoding);
        if (aPreferred === -1 && bPreferred === -1) {
            // consider the original specifity/order
            return b.s - a.s || a.o - b.o || a.i - b.i;
        }
        if (aPreferred !== -1 && bPreferred !== -1) {
            return aPreferred - bPreferred // consider the preferred order
            ;
        }
        return aPreferred === -1 ? 1 : -1 // preferred first
        ;
    } : compareSpecs;
    if (!provided) {
        // sorted list of all encodings
        return accepts.filter(isQuality).sort(comparator).map(getFullEncoding);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
    });
    // sorted list of accepted encodings
    return priorities.filter(isQuality).sort(comparator).map(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i;
}
/**
 * Get full encoding string.
 * @private
 */ function getFullEncoding(spec) {
    return spec.encoding;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
}}),
"[project]/apps/chat-ui/node_modules/negotiator/lib/language.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = preferredLanguages;
module.exports.preferredLanguages = preferredLanguages;
/**
 * Module variables.
 * @private
 */ var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Language header.
 * @private
 */ function parseAcceptLanguage(accept) {
    var accepts = accept.split(',');
    for(var i = 0, j = 0; i < accepts.length; i++){
        var language = parseLanguage(accepts[i].trim(), i);
        if (language) {
            accepts[j++] = language;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a language from the Accept-Language header.
 * @private
 */ function parseLanguage(str, i) {
    var match = simpleLanguageRegExp.exec(str);
    if (!match) return null;
    var prefix = match[1];
    var suffix = match[2];
    var full = prefix;
    if (suffix) full += "-" + suffix;
    var q = 1;
    if (match[3]) {
        var params = match[3].split(';');
        for(var j = 0; j < params.length; j++){
            var p = params[j].split('=');
            if (p[0] === 'q') q = parseFloat(p[1]);
        }
    }
    return {
        prefix: prefix,
        suffix: suffix,
        q: q,
        i: i,
        full: full
    };
}
/**
 * Get the priority of a language.
 * @private
 */ function getLanguagePriority(language, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(language, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the language.
 * @private
 */ function specify(language, spec, index) {
    var p = parseLanguage(language);
    if (!p) return null;
    var s = 0;
    if (spec.full.toLowerCase() === p.full.toLowerCase()) {
        s |= 4;
    } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
    } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
    } else if (spec.full !== '*') {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
;
/**
 * Get the preferred languages from an Accept-Language header.
 * @public
 */ function preferredLanguages(accept, provided) {
    // RFC 2616 sec 14.4: no header = *
    var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');
    if (!provided) {
        // sorted list of all languages
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
    });
    // sorted list of accepted languages
    return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full language string.
 * @private
 */ function getFullLanguage(spec) {
    return spec.full;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
}}),
"[project]/apps/chat-ui/node_modules/negotiator/lib/mediaType.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = preferredMediaTypes;
module.exports.preferredMediaTypes = preferredMediaTypes;
/**
 * Module variables.
 * @private
 */ var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept header.
 * @private
 */ function parseAccept(accept) {
    var accepts = splitMediaTypes(accept);
    for(var i = 0, j = 0; i < accepts.length; i++){
        var mediaType = parseMediaType(accepts[i].trim(), i);
        if (mediaType) {
            accepts[j++] = mediaType;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a media type from the Accept header.
 * @private
 */ function parseMediaType(str, i) {
    var match = simpleMediaTypeRegExp.exec(str);
    if (!match) return null;
    var params = Object.create(null);
    var q = 1;
    var subtype = match[2];
    var type = match[1];
    if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);
        for(var j = 0; j < kvps.length; j++){
            var pair = kvps[j];
            var key = pair[0].toLowerCase();
            var val = pair[1];
            // get the value, unwrapping quotes
            var value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val;
            if (key === 'q') {
                q = parseFloat(value);
                break;
            }
            // store parameter
            params[key] = value;
        }
    }
    return {
        type: type,
        subtype: subtype,
        params: params,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a media type.
 * @private
 */ function getMediaTypePriority(type, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(type, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the media type.
 * @private
 */ function specify(type, spec, index) {
    var p = parseMediaType(type);
    var s = 0;
    if (!p) {
        return null;
    }
    if (spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
    } else if (spec.type != '*') {
        return null;
    }
    if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
    } else if (spec.subtype != '*') {
        return null;
    }
    var keys = Object.keys(spec.params);
    if (keys.length > 0) {
        if (keys.every(function(k) {
            return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
        })) {
            s |= 1;
        } else {
            return null;
        }
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred media types from an Accept header.
 * @public
 */ function preferredMediaTypes(accept, provided) {
    // RFC 2616 sec 14.2: no header = */*
    var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');
    if (!provided) {
        // sorted list of all types
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
    });
    // sorted list of accepted types
    return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full type string.
 * @private
 */ function getFullType(spec) {
    return spec.type + '/' + spec.subtype;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
/**
 * Count the number of quotes in a string.
 * @private
 */ function quoteCount(string) {
    var count = 0;
    var index = 0;
    while((index = string.indexOf('"', index)) !== -1){
        count++;
        index++;
    }
    return count;
}
/**
 * Split a key value pair.
 * @private
 */ function splitKeyValuePair(str) {
    var index = str.indexOf('=');
    var key;
    var val;
    if (index === -1) {
        key = str;
    } else {
        key = str.slice(0, index);
        val = str.slice(index + 1);
    }
    return [
        key,
        val
    ];
}
/**
 * Split an Accept header into media types.
 * @private
 */ function splitMediaTypes(accept) {
    var accepts = accept.split(',');
    for(var i = 1, j = 0; i < accepts.length; i++){
        if (quoteCount(accepts[j]) % 2 == 0) {
            accepts[++j] = accepts[i];
        } else {
            accepts[j] += ',' + accepts[i];
        }
    }
    // trim accepts
    accepts.length = j + 1;
    return accepts;
}
/**
 * Split a string of parameters.
 * @private
 */ function splitParameters(str) {
    var parameters = str.split(';');
    for(var i = 1, j = 0; i < parameters.length; i++){
        if (quoteCount(parameters[j]) % 2 == 0) {
            parameters[++j] = parameters[i];
        } else {
            parameters[j] += ';' + parameters[i];
        }
    }
    // trim parameters
    parameters.length = j + 1;
    for(var i = 0; i < parameters.length; i++){
        parameters[i] = parameters[i].trim();
    }
    return parameters;
}
}}),
"[project]/apps/chat-ui/node_modules/negotiator/index.js [middleware-edge] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
var preferredCharsets = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/negotiator/lib/charset.js [middleware-edge] (ecmascript)");
var preferredEncodings = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/negotiator/lib/encoding.js [middleware-edge] (ecmascript)");
var preferredLanguages = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/negotiator/lib/language.js [middleware-edge] (ecmascript)");
var preferredMediaTypes = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/negotiator/lib/mediaType.js [middleware-edge] (ecmascript)");
/**
 * Module exports.
 * @public
 */ module.exports = Negotiator;
module.exports.Negotiator = Negotiator;
/**
 * Create a Negotiator instance from a request.
 * @param {object} request
 * @public
 */ function Negotiator(request) {
    if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
    }
    this.request = request;
}
Negotiator.prototype.charset = function charset(available) {
    var set = this.charsets(available);
    return set && set[0];
};
Negotiator.prototype.charsets = function charsets(available) {
    return preferredCharsets(this.request.headers['accept-charset'], available);
};
Negotiator.prototype.encoding = function encoding(available, opts) {
    var set = this.encodings(available, opts);
    return set && set[0];
};
Negotiator.prototype.encodings = function encodings(available, options) {
    var opts = options || {};
    return preferredEncodings(this.request.headers['accept-encoding'], available, opts.preferred);
};
Negotiator.prototype.language = function language(available) {
    var set = this.languages(available);
    return set && set[0];
};
Negotiator.prototype.languages = function languages(available) {
    return preferredLanguages(this.request.headers['accept-language'], available);
};
Negotiator.prototype.mediaType = function mediaType(available) {
    var set = this.mediaTypes(available);
    return set && set[0];
};
Negotiator.prototype.mediaTypes = function mediaTypes(available) {
    return preferredMediaTypes(this.request.headers.accept, available);
};
// Backwards compatibility
Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
}}),
}]);

//# sourceMappingURL=_76cb491b._.js.map