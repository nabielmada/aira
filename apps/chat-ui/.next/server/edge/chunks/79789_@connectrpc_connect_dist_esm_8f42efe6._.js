(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/79789_@connectrpc_connect_dist_esm_8f42efe6._.js", {

"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/any-client.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * Create any client for the given service.
 *
 * The given createMethod function is called for each method definition
 * of the service. The function it returns is added to the client object
 * as a method.
 */ __turbopack_context__.s({
    "makeAnyClient": (()=>makeAnyClient)
});
function makeAnyClient(service, createMethod) {
    const client = {};
    for (const [localName, methodInfo] of Object.entries(service.methods)){
        const method = createMethod(Object.assign(Object.assign({}, methodInfo), {
            localName,
            service
        }));
        if (method != null) {
            client[localName] = method;
        }
    }
    return client;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * Connect represents categories of errors as codes, and each code maps to a
 * specific HTTP status code. The codes and their semantics were chosen to
 * match gRPC. Only the codes below are valid — there are no user-defined
 * codes.
 *
 * See the specification at https://connectrpc.com/docs/protocol#error-codes
 * for details.
 */ __turbopack_context__.s({
    "Code": (()=>Code)
});
var Code;
(function(Code) {
    /**
     * Canceled, usually be the user
     */ Code[Code["Canceled"] = 1] = "Canceled";
    /**
     * Unknown error
     */ Code[Code["Unknown"] = 2] = "Unknown";
    /**
     * Argument invalid regardless of system state
     */ Code[Code["InvalidArgument"] = 3] = "InvalidArgument";
    /**
     * Operation expired, may or may not have completed.
     */ Code[Code["DeadlineExceeded"] = 4] = "DeadlineExceeded";
    /**
     * Entity not found.
     */ Code[Code["NotFound"] = 5] = "NotFound";
    /**
     * Entity already exists.
     */ Code[Code["AlreadyExists"] = 6] = "AlreadyExists";
    /**
     * Operation not authorized.
     */ Code[Code["PermissionDenied"] = 7] = "PermissionDenied";
    /**
     * Quota exhausted.
     */ Code[Code["ResourceExhausted"] = 8] = "ResourceExhausted";
    /**
     * Argument invalid in current system state.
     */ Code[Code["FailedPrecondition"] = 9] = "FailedPrecondition";
    /**
     * Operation aborted.
     */ Code[Code["Aborted"] = 10] = "Aborted";
    /**
     * Out of bounds, use instead of FailedPrecondition.
     */ Code[Code["OutOfRange"] = 11] = "OutOfRange";
    /**
     * Operation not implemented or disabled.
     */ Code[Code["Unimplemented"] = 12] = "Unimplemented";
    /**
     * Internal error, reserved for "serious errors".
     */ Code[Code["Internal"] = 13] = "Internal";
    /**
     * Unavailable, client should back off and retry.
     */ Code[Code["Unavailable"] = 14] = "Unavailable";
    /**
     * Unrecoverable data loss or corruption.
     */ Code[Code["DataLoss"] = 15] = "DataLoss";
    /**
     * Request isn't authenticated.
     */ Code[Code["Unauthenticated"] = 16] = "Unauthenticated";
})(Code || (Code = {}));
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/code-string.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "codeFromString": (()=>codeFromString),
    "codeToString": (()=>codeToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
function codeToString(value) {
    const name = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"][value];
    if (typeof name != "string") {
        return value.toString();
    }
    return name[0].toLowerCase() + name.substring(1).replace(/[A-Z]/g, (c)=>"_" + c.toLowerCase());
}
let stringToCode;
function codeFromString(value) {
    if (!stringToCode) {
        stringToCode = {};
        for (const value of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"])){
            if (typeof value == "string") {
                continue;
            }
            stringToCode[codeToString(value)] = value;
        }
    }
    return stringToCode[value];
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "ConnectError": (()=>ConnectError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$code$2d$string$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/code-string.js [middleware-edge] (ecmascript)");
;
;
class ConnectError extends Error {
    /**
     * Create a new ConnectError.
     * If no code is provided, code "unknown" is used.
     * Outgoing details are only relevant for the server side - a service may
     * raise an error with details, and it is up to the protocol implementation
     * to encode and send the details along with error.
     */ constructor(message, code = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unknown, metadata, outgoingDetails, cause){
        super(createMessage(message, code));
        this.name = "ConnectError";
        // see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
        Object.setPrototypeOf(this, new.target.prototype);
        this.rawMessage = message;
        this.code = code;
        this.metadata = new Headers(metadata !== null && metadata !== void 0 ? metadata : {});
        this.details = outgoingDetails !== null && outgoingDetails !== void 0 ? outgoingDetails : [];
        this.cause = cause;
    }
    /**
     * Convert any value - typically a caught error into a ConnectError,
     * following these rules:
     * - If the value is already a ConnectError, return it as is.
     * - If the value is an AbortError from the fetch API, return the message
     *   of the AbortError with code Canceled.
     * - For other Errors, return the error message with code Unknown by default.
     * - For other values, return the values String representation as a message,
     *   with the code Unknown by default.
     * The original value will be used for the "cause" property for the new
     * ConnectError.
     */ static from(reason, code = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unknown) {
        if (reason instanceof ConnectError) {
            return reason;
        }
        if (reason instanceof Error) {
            if (reason.name == "AbortError") {
                // Fetch requests can only be canceled with an AbortController.
                // We detect that condition by looking at the name of the raised
                // error object, and translate to the appropriate status code.
                return new ConnectError(reason.message, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Canceled);
            }
            return new ConnectError(reason.message, code, undefined, undefined, reason);
        }
        return new ConnectError(String(reason), code, undefined, undefined, reason);
    }
    static [Symbol.hasInstance](v) {
        if (!(v instanceof Error)) {
            return false;
        }
        if (Object.getPrototypeOf(v) === ConnectError.prototype) {
            return true;
        }
        return v.name === "ConnectError" && "code" in v && typeof v.code === "number" && "metadata" in v && "details" in v && Array.isArray(v.details) && "rawMessage" in v && typeof v.rawMessage == "string" && "cause" in v;
    }
    findDetails(typeOrRegistry) {
        const registry = "typeName" in typeOrRegistry ? {
            findMessage: (typeName)=>typeName === typeOrRegistry.typeName ? typeOrRegistry : undefined
        } : typeOrRegistry;
        const details = [];
        for (const data of this.details){
            if ("getType" in data) {
                if (registry.findMessage(data.getType().typeName)) {
                    details.push(data);
                }
                continue;
            }
            const type = registry.findMessage(data.type);
            if (type) {
                try {
                    details.push(type.fromBinary(data.value));
                } catch (_) {
                // We silently give up if we are unable to parse the detail, because
                // that appears to be the least worst behavior.
                // It is very unlikely that a user surrounds a catch body handling the
                // error with another try-catch statement, and we do not want to
                // recommend doing so.
                }
            }
        }
        return details;
    }
}
/**
 * Create an error message, prefixing the given code.
 */ function createMessage(message, code) {
    return message.length ? `[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$code$2d$string$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["codeToString"])(code)}] ${message}` : `[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$code$2d$string$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["codeToString"])(code)}]`;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/compression.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "compressedFlag": (()=>compressedFlag),
    "compressionNegotiate": (()=>compressionNegotiate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
;
const compressedFlag = 0b00000001;
function compressionNegotiate(available, requested, accepted, headerNameAcceptEncoding) {
    let request = null;
    let response = null;
    let error = undefined;
    if (requested !== null && requested !== "identity") {
        const found = available.find((c)=>c.name === requested);
        if (found) {
            request = found;
        } else {
            // To comply with https://github.com/grpc/grpc/blob/master/doc/compression.md
            // and the Connect protocol, we return code "unimplemented" and specify
            // acceptable compression(s).
            const acceptable = available.map((c)=>c.name).join(",");
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`unknown compression "${requested}": supported encodings are ${acceptable}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unimplemented, {
                [headerNameAcceptEncoding]: acceptable
            });
        }
    }
    if (accepted === null || accepted === "") {
        // Support asymmetric compression. This logic follows
        // https://github.com/grpc/grpc/blob/master/doc/compression.md and common
        // sense.
        response = request;
    } else {
        const acceptNames = accepted.split(",").map((n)=>n.trim());
        for (const name of acceptNames){
            const found = available.find((c)=>c.name === name);
            if (found) {
                response = found;
                break;
            }
        }
    }
    return {
        request,
        response,
        error
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/envelope.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "createEnvelopeReadableStream": (()=>createEnvelopeReadableStream),
    "encodeEnvelope": (()=>encodeEnvelope),
    "encodeEnvelopes": (()=>encodeEnvelopes),
    "envelopeCompress": (()=>envelopeCompress),
    "envelopeDecompress": (()=>envelopeDecompress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/compression.js [middleware-edge] (ecmascript)");
;
;
;
function createEnvelopeReadableStream(stream) {
    let reader;
    let buffer = new Uint8Array(0);
    function append(chunk) {
        const n = new Uint8Array(buffer.length + chunk.length);
        n.set(buffer);
        n.set(chunk, buffer.length);
        buffer = n;
    }
    return new ReadableStream({
        start () {
            reader = stream.getReader();
        },
        async pull (controller) {
            let header = undefined;
            for(;;){
                if (header === undefined && buffer.byteLength >= 5) {
                    let length = 0;
                    for(let i = 1; i < 5; i++){
                        length = (length << 8) + buffer[i];
                    }
                    header = {
                        flags: buffer[0],
                        length
                    };
                }
                if (header !== undefined && buffer.byteLength >= header.length + 5) {
                    break;
                }
                const result = await reader.read();
                if (result.done) {
                    break;
                }
                append(result.value);
            }
            if (header === undefined) {
                if (buffer.byteLength == 0) {
                    controller.close();
                    return;
                }
                controller.error(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("premature end of stream", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].DataLoss));
                return;
            }
            const data = buffer.subarray(5, 5 + header.length);
            buffer = buffer.subarray(5 + header.length);
            controller.enqueue({
                flags: header.flags,
                data
            });
        }
    });
}
async function envelopeCompress(envelope, compression, compressMinBytes) {
    let { flags, data } = envelope;
    if ((flags & __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"]) === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"]) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("invalid envelope, already compressed", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (compression && data.byteLength >= compressMinBytes) {
        data = await compression.compress(data);
        flags = flags | __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"];
    }
    return {
        data,
        flags
    };
}
async function envelopeDecompress(envelope, compression, readMaxBytes) {
    let { flags, data } = envelope;
    if ((flags & __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"]) === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"]) {
        if (!compression) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("received compressed envelope, but do not know how to decompress", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
        }
        data = await compression.decompress(data, readMaxBytes);
        flags = flags ^ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$compression$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compressedFlag"];
    }
    return {
        data,
        flags
    };
}
function encodeEnvelope(flags, data) {
    const bytes = new Uint8Array(data.length + 5);
    bytes.set(data, 5);
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    v.setUint8(0, flags); // first byte is flags
    v.setUint32(1, data.length); // 4 bytes message length
    return bytes;
}
function encodeEnvelopes(...envelopes) {
    const len = envelopes.reduce((previousValue, currentValue)=>previousValue + currentValue.data.length + 5, 0);
    const bytes = new Uint8Array(len);
    const v = new DataView(bytes.buffer);
    let offset = 0;
    for (const e of envelopes){
        v.setUint8(offset, e.flags); // first byte is flags
        v.setUint32(offset + 1, e.data.length); // 4 bytes message length
        bytes.set(e.data, offset + 5);
        offset += e.data.length + 5;
    }
    return bytes;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "assertReadMaxBytes": (()=>assertReadMaxBytes),
    "assertWriteMaxBytes": (()=>assertWriteMaxBytes),
    "validateReadWriteMaxBytes": (()=>validateReadWriteMaxBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
;
/**
 * At most, allow ~4GiB to be received or sent per message.
 * zlib used by Node.js caps maxOutputLength at this value. It also happens to
 * be the maximum theoretical message size supported by protobuf-es.
 */ const maxReadMaxBytes = 0xffffffff;
const maxWriteMaxBytes = maxReadMaxBytes;
/**
 * The default value for the compressMinBytes option. The CPU cost of compressing
 * very small messages usually isn't worth the small reduction in network I/O, so
 * the default value is 1 kibibyte.
 */ const defaultCompressMinBytes = 1024;
function validateReadWriteMaxBytes(readMaxBytes, writeMaxBytes, compressMinBytes) {
    writeMaxBytes !== null && writeMaxBytes !== void 0 ? writeMaxBytes : writeMaxBytes = maxWriteMaxBytes;
    readMaxBytes !== null && readMaxBytes !== void 0 ? readMaxBytes : readMaxBytes = maxReadMaxBytes;
    compressMinBytes !== null && compressMinBytes !== void 0 ? compressMinBytes : compressMinBytes = defaultCompressMinBytes;
    if (writeMaxBytes < 1 || writeMaxBytes > maxWriteMaxBytes) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`writeMaxBytes ${writeMaxBytes} must be >= 1 and <= ${maxWriteMaxBytes}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (readMaxBytes < 1 || readMaxBytes > maxReadMaxBytes) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`readMaxBytes ${readMaxBytes} must be >= 1 and <= ${maxReadMaxBytes}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    return {
        readMaxBytes,
        writeMaxBytes,
        compressMinBytes
    };
}
function assertWriteMaxBytes(writeMaxBytes, bytesWritten) {
    if (bytesWritten > writeMaxBytes) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`message size ${bytesWritten} is larger than configured writeMaxBytes ${writeMaxBytes}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
    }
}
function assertReadMaxBytes(readMaxBytes, bytesRead, totalSizeKnown = false) {
    if (bytesRead > readMaxBytes) {
        let message = `message size is larger than configured readMaxBytes ${readMaxBytes}`;
        if (totalSizeKnown) {
            message = `message size ${bytesRead} is larger than configured readMaxBytes ${readMaxBytes}`;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](message, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
    }
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/async-iterable.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "createAsyncIterable": (()=>createAsyncIterable),
    "createWritableIterable": (()=>createWritableIterable),
    "makeIterableAbortable": (()=>makeIterableAbortable),
    "pipe": (()=>pipe),
    "pipeTo": (()=>pipeTo),
    "readAllBytes": (()=>readAllBytes),
    "sinkAll": (()=>sinkAll),
    "sinkAllBytes": (()=>sinkAllBytes),
    "transformAppend": (()=>transformAppend),
    "transformCatch": (()=>transformCatch),
    "transformCatchFinally": (()=>transformCatchFinally),
    "transformCompressEnvelope": (()=>transformCompressEnvelope),
    "transformDecompressEnvelope": (()=>transformDecompressEnvelope),
    "transformJoinEnvelopes": (()=>transformJoinEnvelopes),
    "transformParseEnvelope": (()=>transformParseEnvelope),
    "transformPrepend": (()=>transformPrepend),
    "transformReadAllBytes": (()=>transformReadAllBytes),
    "transformSerializeEnvelope": (()=>transformSerializeEnvelope),
    "transformSplitEnvelope": (()=>transformSplitEnvelope),
    "untilFirst": (()=>untilFirst)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/envelope.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js [middleware-edge] (ecmascript)");
var __asyncValues = this && this.__asyncValues || function(o) {
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
};
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
var __asyncDelegator = this && this.__asyncDelegator || function(o) {
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
};
;
;
;
;
function pipeTo(source, ...rest) {
    const [transforms, sink, opt] = pickTransformsAndSink(rest);
    let iterable = source;
    let abortable;
    if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
        iterable = abortable = makeIterableAbortable(iterable);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    iterable = pipe(iterable, ...transforms, {
        propagateDownStreamError: false
    });
    return sink(iterable).catch((reason)=>{
        if (abortable) {
            return abortable.abort(reason).then(()=>Promise.reject(reason));
        }
        return Promise.reject(reason);
    });
}
// pick transforms, the sink, and options from the pipeTo() rest parameter
function pickTransformsAndSink(rest) {
    let opt;
    if (typeof rest[rest.length - 1] != "function") {
        opt = rest.pop();
    }
    const sink = rest.pop();
    return [
        rest,
        sink,
        opt
    ];
}
function sinkAll() {
    return async function(iterable) {
        var _a, e_1, _b, _c;
        const all = [];
        try {
            for(var _d = true, iterable_1 = __asyncValues(iterable), iterable_1_1; iterable_1_1 = await iterable_1.next(), _a = iterable_1_1.done, !_a; _d = true){
                _c = iterable_1_1.value;
                _d = false;
                const chunk = _c;
                all.push(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a && (_b = iterable_1.return)) await _b.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return all;
    };
}
function sinkAllBytes(readMaxBytes, lengthHint) {
    return async function(iterable) {
        return await readAllBytes(iterable, readMaxBytes, lengthHint);
    };
}
function pipe(source, ...rest) {
    return __asyncGenerator(this, arguments, function* pipe_1() {
        var _a;
        const [transforms, opt] = pickTransforms(rest);
        let abortable;
        const sourceIt = source[Symbol.asyncIterator]();
        const cachedSource = {
            [Symbol.asyncIterator] () {
                return sourceIt;
            }
        };
        let iterable = cachedSource;
        if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
            iterable = abortable = makeIterableAbortable(iterable);
        }
        for (const t of transforms){
            iterable = t(iterable);
        }
        const it = iterable[Symbol.asyncIterator]();
        try {
            for(;;){
                const r = yield __await(it.next());
                if (r.done === true) {
                    break;
                }
                if (!abortable) {
                    yield yield __await(r.value);
                    continue;
                }
                try {
                    yield yield __await(r.value);
                } catch (e) {
                    yield __await(abortable.abort(e)); // propagate downstream error to the source
                    throw e;
                }
            }
        } finally{
            if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
                // Call return on the source iterable to indicate
                // that we will no longer consume it and it should
                // cleanup any allocated resources.
                (_a = sourceIt.return) === null || _a === void 0 ? void 0 : _a.call(sourceIt).catch(()=>{
                // return returns a promise, which we don't care about.
                //
                // Uncaught promises are thrown at sometime/somewhere by the event loop,
                // this is to ensure error is caught and ignored.
                });
            }
        }
    });
}
function pickTransforms(rest) {
    let opt;
    if (typeof rest[rest.length - 1] != "function") {
        opt = rest.pop();
    }
    return [
        rest,
        opt
    ];
}
function transformCatch(catchError) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            // we deliberate avoid a for-await loop because we only want to catch upstream
            // errors, not downstream errors (yield).
            const it = iterable[Symbol.asyncIterator]();
            for(;;){
                let r;
                try {
                    r = yield __await(it.next());
                } catch (e) {
                    const caught = yield __await(catchError(e));
                    if (caught !== undefined) {
                        yield yield __await(caught);
                    }
                    break;
                }
                if (r.done === true) {
                    break;
                }
                yield yield __await(r.value);
            }
        });
    };
}
function transformCatchFinally(catchFinally) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            // we deliberate avoid a for-await loop because we only want to catch upstream
            // errors, not downstream errors (yield).
            let err;
            const it = iterable[Symbol.asyncIterator]();
            for(;;){
                let r;
                try {
                    r = yield __await(it.next());
                } catch (e) {
                    err = e;
                    break;
                }
                if (r.done === true) {
                    break;
                }
                yield yield __await(r.value);
            }
            const caught = yield __await(catchFinally(err));
            if (caught !== undefined) {
                yield yield __await(caught);
            }
        });
    };
}
function transformAppend(provide) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_2, _b, _c;
            try {
                for(var _d = true, iterable_2 = __asyncValues(iterable), iterable_2_1; iterable_2_1 = yield __await(iterable_2.next()), _a = iterable_2_1.done, !_a; _d = true){
                    _c = iterable_2_1.value;
                    _d = false;
                    const chunk = _c;
                    yield yield __await(chunk);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_2.return)) yield __await(_b.call(iterable_2));
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
            const append = yield __await(provide());
            if (append !== undefined) {
                yield yield __await(append);
            }
        });
    };
}
function transformPrepend(provide) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_3, _b, _c;
            const prepend = yield __await(provide());
            if (prepend !== undefined) {
                yield yield __await(prepend);
            }
            try {
                for(var _d = true, iterable_3 = __asyncValues(iterable), iterable_3_1; iterable_3_1 = yield __await(iterable_3.next()), _a = iterable_3_1.done, !_a; _d = true){
                    _c = iterable_3_1.value;
                    _d = false;
                    const chunk = _c;
                    yield yield __await(chunk);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_3.return)) yield __await(_b.call(iterable_3));
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
        });
    };
}
function transformReadAllBytes(readMaxBytes, lengthHint) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            yield yield __await((yield __await(readAllBytes(iterable, readMaxBytes, lengthHint))));
        });
    };
}
function transformSerializeEnvelope(serialization, endStreamFlag, endSerialization) {
    if (endStreamFlag === undefined || endSerialization === undefined) {
        return function(iterable) {
            return __asyncGenerator(this, arguments, function*() {
                var _a, e_4, _b, _c;
                try {
                    for(var _d = true, iterable_4 = __asyncValues(iterable), iterable_4_1; iterable_4_1 = yield __await(iterable_4.next()), _a = iterable_4_1.done, !_a; _d = true){
                        _c = iterable_4_1.value;
                        _d = false;
                        const chunk = _c;
                        const data = serialization.serialize(chunk);
                        yield yield __await({
                            flags: 0,
                            data
                        });
                    }
                } catch (e_4_1) {
                    e_4 = {
                        error: e_4_1
                    };
                } finally{
                    try {
                        if (!_d && !_a && (_b = iterable_4.return)) yield __await(_b.call(iterable_4));
                    } finally{
                        if (e_4) throw e_4.error;
                    }
                }
            });
        };
    }
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_5, _b, _c;
            try {
                for(var _d = true, iterable_5 = __asyncValues(iterable), iterable_5_1; iterable_5_1 = yield __await(iterable_5.next()), _a = iterable_5_1.done, !_a; _d = true){
                    _c = iterable_5_1.value;
                    _d = false;
                    const chunk = _c;
                    let data;
                    let flags = 0;
                    if (chunk.end) {
                        flags = flags | endStreamFlag;
                        data = endSerialization.serialize(chunk.value);
                    } else {
                        data = serialization.serialize(chunk.value);
                    }
                    yield yield __await({
                        flags,
                        data
                    });
                }
            } catch (e_5_1) {
                e_5 = {
                    error: e_5_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_5.return)) yield __await(_b.call(iterable_5));
                } finally{
                    if (e_5) throw e_5.error;
                }
            }
        });
    };
}
function transformParseEnvelope(serialization, endStreamFlag, endSerialization) {
    // code path always yields ParsedEnvelopedMessage<T, E>
    if (endSerialization && endStreamFlag !== undefined) {
        return function(iterable) {
            return __asyncGenerator(this, arguments, function*() {
                var _a, e_6, _b, _c;
                try {
                    for(var _d = true, iterable_6 = __asyncValues(iterable), iterable_6_1; iterable_6_1 = yield __await(iterable_6.next()), _a = iterable_6_1.done, !_a; _d = true){
                        _c = iterable_6_1.value;
                        _d = false;
                        const { flags, data } = _c;
                        if ((flags & endStreamFlag) === endStreamFlag) {
                            yield yield __await({
                                value: endSerialization.parse(data),
                                end: true
                            });
                        } else {
                            yield yield __await({
                                value: serialization.parse(data),
                                end: false
                            });
                        }
                    }
                } catch (e_6_1) {
                    e_6 = {
                        error: e_6_1
                    };
                } finally{
                    try {
                        if (!_d && !_a && (_b = iterable_6.return)) yield __await(_b.call(iterable_6));
                    } finally{
                        if (e_6) throw e_6.error;
                    }
                }
            });
        };
    }
    // code path always yields T
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_7, _b, _c;
            try {
                for(var _d = true, iterable_7 = __asyncValues(iterable), iterable_7_1; iterable_7_1 = yield __await(iterable_7.next()), _a = iterable_7_1.done, !_a; _d = true){
                    _c = iterable_7_1.value;
                    _d = false;
                    const { flags, data } = _c;
                    if (endStreamFlag !== undefined && (flags & endStreamFlag) === endStreamFlag) {
                        if (endSerialization === null) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("unexpected end flag", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
                        }
                        continue;
                    }
                    yield yield __await(serialization.parse(data));
                }
            } catch (e_7_1) {
                e_7 = {
                    error: e_7_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_7.return)) yield __await(_b.call(iterable_7));
                } finally{
                    if (e_7) throw e_7.error;
                }
            }
        });
    };
}
function transformCompressEnvelope(compression, compressMinBytes) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_8, _b, _c;
            try {
                for(var _d = true, iterable_8 = __asyncValues(iterable), iterable_8_1; iterable_8_1 = yield __await(iterable_8.next()), _a = iterable_8_1.done, !_a; _d = true){
                    _c = iterable_8_1.value;
                    _d = false;
                    const env = _c;
                    yield yield __await((yield __await((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["envelopeCompress"])(env, compression, compressMinBytes))));
                }
            } catch (e_8_1) {
                e_8 = {
                    error: e_8_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_8.return)) yield __await(_b.call(iterable_8));
                } finally{
                    if (e_8) throw e_8.error;
                }
            }
        });
    };
}
function transformDecompressEnvelope(compression, readMaxBytes) {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_9, _b, _c;
            try {
                for(var _d = true, iterable_9 = __asyncValues(iterable), iterable_9_1; iterable_9_1 = yield __await(iterable_9.next()), _a = iterable_9_1.done, !_a; _d = true){
                    _c = iterable_9_1.value;
                    _d = false;
                    const env = _c;
                    yield yield __await((yield __await((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["envelopeDecompress"])(env, compression, readMaxBytes))));
                }
            } catch (e_9_1) {
                e_9 = {
                    error: e_9_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_9.return)) yield __await(_b.call(iterable_9));
                } finally{
                    if (e_9) throw e_9.error;
                }
            }
        });
    };
}
function transformJoinEnvelopes() {
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_10, _b, _c;
            try {
                for(var _d = true, iterable_10 = __asyncValues(iterable), iterable_10_1; iterable_10_1 = yield __await(iterable_10.next()), _a = iterable_10_1.done, !_a; _d = true){
                    _c = iterable_10_1.value;
                    _d = false;
                    const { flags, data } = _c;
                    yield yield __await((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$envelope$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encodeEnvelope"])(flags, data));
                }
            } catch (e_10_1) {
                e_10 = {
                    error: e_10_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_10.return)) yield __await(_b.call(iterable_10));
                } finally{
                    if (e_10) throw e_10.error;
                }
            }
        });
    };
}
function transformSplitEnvelope(readMaxBytes) {
    // append chunk to buffer, returning updated buffer
    function append(buffer, chunk) {
        const n = new Uint8Array(buffer.byteLength + chunk.byteLength);
        n.set(buffer);
        n.set(chunk, buffer.length);
        return n;
    }
    // tuple 0: envelope, or undefined if incomplete
    // tuple 1: remainder of the buffer
    function shiftEnvelope(buffer, header) {
        if (buffer.byteLength < 5 + header.length) {
            return [
                undefined,
                buffer
            ];
        }
        return [
            {
                flags: header.flags,
                data: buffer.subarray(5, 5 + header.length)
            },
            buffer.subarray(5 + header.length)
        ];
    }
    // undefined: header is incomplete
    function peekHeader(buffer) {
        if (buffer.byteLength < 5) {
            return undefined;
        }
        const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        const length = view.getUint32(1); // 4 bytes message length
        const flags = view.getUint8(0); // first byte is flags
        return {
            length,
            flags
        };
    }
    return function(iterable) {
        return __asyncGenerator(this, arguments, function*() {
            var _a, e_11, _b, _c;
            let buffer = new Uint8Array(0);
            try {
                for(var _d = true, iterable_11 = __asyncValues(iterable), iterable_11_1; iterable_11_1 = yield __await(iterable_11.next()), _a = iterable_11_1.done, !_a; _d = true){
                    _c = iterable_11_1.value;
                    _d = false;
                    const chunk = _c;
                    buffer = append(buffer, chunk);
                    for(;;){
                        const header = peekHeader(buffer);
                        if (!header) {
                            break;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["assertReadMaxBytes"])(readMaxBytes, header.length, true);
                        let env;
                        [env, buffer] = shiftEnvelope(buffer, header);
                        if (!env) {
                            break;
                        }
                        yield yield __await(env);
                    }
                }
            } catch (e_11_1) {
                e_11 = {
                    error: e_11_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = iterable_11.return)) yield __await(_b.call(iterable_11));
                } finally{
                    if (e_11) throw e_11.error;
                }
            }
            if (buffer.byteLength > 0) {
                const header = peekHeader(buffer);
                let message = "protocol error: incomplete envelope";
                if (header) {
                    message = `protocol error: promised ${header.length} bytes in enveloped message, got ${buffer.byteLength - 5} bytes`;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](message, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
            }
        });
    };
}
async function readAllBytes(iterable, readMaxBytes, lengthHint) {
    var _a, e_12, _b, _c, _d, e_13, _e, _f;
    const [ok, hint] = parseLengthHint(lengthHint);
    if (ok) {
        if (hint > readMaxBytes) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["assertReadMaxBytes"])(readMaxBytes, hint, true);
        }
        const buffer = new Uint8Array(hint);
        let offset = 0;
        try {
            for(var _g = true, iterable_12 = __asyncValues(iterable), iterable_12_1; iterable_12_1 = await iterable_12.next(), _a = iterable_12_1.done, !_a; _g = true){
                _c = iterable_12_1.value;
                _g = false;
                const chunk = _c;
                if (offset + chunk.byteLength > hint) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`protocol error: promised ${hint} bytes, received ${offset + chunk.byteLength}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
                }
                buffer.set(chunk, offset);
                offset += chunk.byteLength;
            }
        } catch (e_12_1) {
            e_12 = {
                error: e_12_1
            };
        } finally{
            try {
                if (!_g && !_a && (_b = iterable_12.return)) await _b.call(iterable_12);
            } finally{
                if (e_12) throw e_12.error;
            }
        }
        if (offset < hint) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`protocol error: promised ${hint} bytes, received ${offset}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
        }
        return buffer;
    }
    const chunks = [];
    let count = 0;
    try {
        for(var _h = true, iterable_13 = __asyncValues(iterable), iterable_13_1; iterable_13_1 = await iterable_13.next(), _d = iterable_13_1.done, !_d; _h = true){
            _f = iterable_13_1.value;
            _h = false;
            const chunk = _f;
            count += chunk.byteLength;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["assertReadMaxBytes"])(readMaxBytes, count);
            chunks.push(chunk);
        }
    } catch (e_13_1) {
        e_13 = {
            error: e_13_1
        };
    } finally{
        try {
            if (!_h && !_d && (_e = iterable_13.return)) await _e.call(iterable_13);
        } finally{
            if (e_13) throw e_13.error;
        }
    }
    const all = new Uint8Array(count);
    let offset = 0;
    for(let chunk = chunks.shift(); chunk; chunk = chunks.shift()){
        all.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return all;
}
// parse the lengthHint argument of readAllBytes()
function parseLengthHint(lengthHint) {
    if (lengthHint === undefined || lengthHint === null) {
        return [
            false,
            0
        ];
    }
    const n = typeof lengthHint == "string" ? parseInt(lengthHint, 10) : lengthHint;
    if (!Number.isSafeInteger(n) || n < 0) {
        return [
            false,
            n
        ];
    }
    return [
        true,
        n
    ];
}
async function untilFirst(iterable) {
    const it = iterable[Symbol.asyncIterator]();
    let first = await it.next();
    return {
        [Symbol.asyncIterator] () {
            const w = {
                async next () {
                    if (first !== null) {
                        const n = first;
                        first = null;
                        return n;
                    }
                    return await it.next();
                }
            };
            if (it.throw !== undefined) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- can't handle mutated object sensibly
                w.throw = (e)=>it.throw(e);
            }
            if (it.return !== undefined) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-explicit-any -- can't handle mutated object sensibly
                w.return = (value)=>it.return(value);
            }
            return w;
        }
    };
}
function makeIterableAbortable(iterable) {
    const innerCandidate = iterable[Symbol.asyncIterator]();
    if (innerCandidate.throw === undefined) {
        throw new Error("AsyncIterable does not implement throw");
    }
    const inner = innerCandidate;
    let aborted;
    let resultPromise;
    let it = {
        next () {
            resultPromise = inner.next().finally(()=>{
                resultPromise = undefined;
            });
            return resultPromise;
        },
        throw (e) {
            return inner.throw(e);
        }
    };
    if (innerCandidate.return !== undefined) {
        it = Object.assign(Object.assign({}, it), {
            return (value) {
                return inner.return(value);
            }
        });
    }
    let used = false;
    return {
        abort (reason) {
            if (aborted) {
                return aborted.state;
            }
            const f = ()=>{
                return inner.throw(reason).then((r)=>r.done === true ? "completed" : "caught", ()=>"rethrown");
            };
            if (resultPromise) {
                aborted = {
                    reason,
                    state: resultPromise.then(f, f)
                };
                return aborted.state;
            }
            aborted = {
                reason,
                state: f()
            };
            return aborted.state;
        },
        [Symbol.asyncIterator] () {
            if (used) {
                throw new Error("AsyncIterable cannot be re-used");
            }
            used = true;
            return it;
        }
    };
}
function createWritableIterable() {
    // We start with two queues to capture the read and write attempts.
    //
    // The writes and reads each check of their counterpart is
    // already available and either interact/add themselves to the queue.
    const readQueue = [];
    const writeQueue = [];
    let err = undefined;
    let nextResolve;
    let nextReject;
    let nextPromise = new Promise((resolve, reject)=>{
        nextResolve = resolve;
        nextReject = reject;
    });
    let closed = false;
    // drain the readQueue in case of error/writer is closed by sending a
    // done result.
    function drain() {
        for (const next of readQueue.splice(0, readQueue.length)){
            next({
                done: true,
                value: undefined
            });
        }
    }
    return {
        close () {
            closed = true;
            drain();
        },
        async write (payload) {
            if (closed) {
                throw err !== null && err !== void 0 ? err : new Error("cannot write, WritableIterable already closed");
            }
            const read = readQueue.shift();
            if (read === undefined) {
                // We didn't find a pending read so we add the payload to the write queue.
                writeQueue.push(payload);
            } else {
                // We found a pending read so we respond with the payload.
                read({
                    done: false,
                    value: payload
                });
                if (readQueue.length > 0) {
                    // If there are more in the read queue we can mark the write as complete.
                    // as the error reporting is not guaranteed to be sequential and therefore cannot
                    // to linked to a specific write.
                    return;
                }
            }
            // We await the next call for as many times as there are items in the queue + 1
            //
            // If there are no items in the write queue that means write happened and we just have
            // to wait for one more call likewise if we are the nth write in the queue we
            // have to wait for n writes to complete and one more.
            const limit = writeQueue.length + 1;
            for(let i = 0; i < limit; i++){
                await nextPromise;
            }
        },
        [Symbol.asyncIterator] () {
            return {
                next () {
                    // Resolve the nextPromise to indicate
                    // pending writes that a read attempt has been made
                    // after their write.
                    //
                    // We also need to reset the promise for future writes.
                    nextResolve();
                    nextPromise = new Promise((resolve, reject)=>{
                        nextResolve = resolve;
                        nextReject = reject;
                    });
                    const write = writeQueue.shift();
                    if (write !== undefined) {
                        // We found a pending write so response with the payload.
                        return Promise.resolve({
                            done: false,
                            value: write
                        });
                    }
                    if (closed) {
                        return Promise.resolve({
                            done: true,
                            value: undefined
                        });
                    }
                    // We return a promise immediately that is either resolved/rejected
                    // as writes happen.
                    let readResolve;
                    const readPromise = new Promise((resolve)=>readResolve = resolve);
                    readQueue.push(readResolve); // eslint-disable-line @typescript-eslint/no-non-null-assertion
                    return readPromise;
                },
                throw (throwErr) {
                    err = throwErr;
                    closed = true;
                    writeQueue.splice(0, writeQueue.length);
                    nextPromise.catch(()=>{
                    // To make sure that the nextPromise is always resolved.
                    });
                    // This will reject all pending writes.
                    nextReject(err);
                    drain();
                    return Promise.resolve({
                        done: true,
                        value: undefined
                    });
                },
                return () {
                    closed = true;
                    writeQueue.splice(0, writeQueue.length);
                    // Resolve once for the write awaiting confirmation.
                    nextResolve();
                    // Reject all future writes.
                    nextPromise = Promise.reject(new Error("cannot write, consumer called return"));
                    nextPromise.catch(()=>{
                    // To make sure that the nextPromise is always resolved.
                    });
                    drain();
                    return Promise.resolve({
                        done: true,
                        value: undefined
                    });
                }
            };
        }
    };
}
function createAsyncIterable(items) {
    return __asyncGenerator(this, arguments, function* createAsyncIterable_1() {
        yield __await((yield* __asyncDelegator(__asyncValues(items))));
    });
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/promise-client.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "createBiDiStreamingFn": (()=>createBiDiStreamingFn),
    "createClient": (()=>createClient),
    "createClientStreamingFn": (()=>createClientStreamingFn),
    "createPromiseClient": (()=>createPromiseClient),
    "createServerStreamingFn": (()=>createServerStreamingFn),
    "createUnaryFn": (()=>createUnaryFn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/service-type.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$any$2d$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/any-client.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$async$2d$iterable$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/async-iterable.js [middleware-edge] (ecmascript)");
var __asyncValues = this && this.__asyncValues || function(o) {
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
};
var __await = this && this.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncDelegator = this && this.__asyncDelegator || function(o) {
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
function createClient(service, transport) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$any$2d$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["makeAnyClient"])(service, (method)=>{
        switch(method.kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary:
                return createUnaryFn(transport, service, method);
            case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].ServerStreaming:
                return createServerStreamingFn(transport, service, method);
            case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].ClientStreaming:
                return createClientStreamingFn(transport, service, method);
            case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].BiDiStreaming:
                return createBiDiStreamingFn(transport, service, method);
            default:
                return null;
        }
    });
}
function createPromiseClient(service, transport) {
    return createClient(service, transport);
}
function createUnaryFn(transport, service, method) {
    return async function(input, options) {
        var _a, _b;
        const response = await transport.unary(service, method, options === null || options === void 0 ? void 0 : options.signal, options === null || options === void 0 ? void 0 : options.timeoutMs, options === null || options === void 0 ? void 0 : options.headers, input, options === null || options === void 0 ? void 0 : options.contextValues);
        (_a = options === null || options === void 0 ? void 0 : options.onHeader) === null || _a === void 0 ? void 0 : _a.call(options, response.header);
        (_b = options === null || options === void 0 ? void 0 : options.onTrailer) === null || _b === void 0 ? void 0 : _b.call(options, response.trailer);
        return response.message;
    };
}
function createServerStreamingFn(transport, service, method) {
    return function(input, options) {
        return handleStreamResponse(transport.stream(service, method, options === null || options === void 0 ? void 0 : options.signal, options === null || options === void 0 ? void 0 : options.timeoutMs, options === null || options === void 0 ? void 0 : options.headers, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$async$2d$iterable$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createAsyncIterable"])([
            input
        ]), options === null || options === void 0 ? void 0 : options.contextValues), options);
    };
}
function createClientStreamingFn(transport, service, method) {
    return async function(request, options) {
        var _a, e_1, _b, _c;
        var _d, _e;
        const response = await transport.stream(service, method, options === null || options === void 0 ? void 0 : options.signal, options === null || options === void 0 ? void 0 : options.timeoutMs, options === null || options === void 0 ? void 0 : options.headers, request, options === null || options === void 0 ? void 0 : options.contextValues);
        (_d = options === null || options === void 0 ? void 0 : options.onHeader) === null || _d === void 0 ? void 0 : _d.call(options, response.header);
        let singleMessage;
        let count = 0;
        try {
            for(var _f = true, _g = __asyncValues(response.message), _h; _h = await _g.next(), _a = _h.done, !_a; _f = true){
                _c = _h.value;
                _f = false;
                const message = _c;
                singleMessage = message;
                count++;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_f && !_a && (_b = _g.return)) await _b.call(_g);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        if (!singleMessage) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("protocol error: missing response message", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unimplemented);
        }
        if (count > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("protocol error: received extra messages for client streaming method", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unimplemented);
        }
        (_e = options === null || options === void 0 ? void 0 : options.onTrailer) === null || _e === void 0 ? void 0 : _e.call(options, response.trailer);
        return singleMessage;
    };
}
function createBiDiStreamingFn(transport, service, method) {
    return function(request, options) {
        return handleStreamResponse(transport.stream(service, method, options === null || options === void 0 ? void 0 : options.signal, options === null || options === void 0 ? void 0 : options.timeoutMs, options === null || options === void 0 ? void 0 : options.headers, request, options === null || options === void 0 ? void 0 : options.contextValues), options);
    };
}
function handleStreamResponse(stream, options) {
    const it = (function() {
        return __asyncGenerator(this, arguments, function*() {
            var _a, _b;
            const response = yield __await(stream);
            (_a = options === null || options === void 0 ? void 0 : options.onHeader) === null || _a === void 0 ? void 0 : _a.call(options, response.header);
            yield __await((yield* __asyncDelegator(__asyncValues(response.message))));
            (_b = options === null || options === void 0 ? void 0 : options.onTrailer) === null || _b === void 0 ? void 0 : _b.call(options, response.trailer);
        });
    })()[Symbol.asyncIterator]();
    // Create a new iterable to omit throw/return.
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>it.next()
            })
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/http-headers.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "appendHeaders": (()=>appendHeaders),
    "decodeBinaryHeader": (()=>decodeBinaryHeader),
    "encodeBinaryHeader": (()=>encodeBinaryHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
;
;
function encodeBinaryHeader(value) {
    let bytes;
    if (typeof value == "object" && "getType" in value) {
        bytes = value.toBinary();
    } else if (typeof value == "string") {
        bytes = new TextEncoder().encode(value);
    } else {
        bytes = value instanceof Uint8Array ? value : new Uint8Array(value);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protoBase64"].enc(bytes).replace(/=+$/, "");
}
function decodeBinaryHeader(value, type, options) {
    try {
        const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protoBase64"].dec(value);
        if (type) {
            return type.fromBinary(bytes, options);
        }
        return bytes;
    } catch (e) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].DataLoss);
    }
}
function appendHeaders(...headers) {
    const h = new Headers();
    for (const e of headers){
        e.forEach((value, key)=>{
            h.append(key, value);
        });
    }
    return h;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/context-values.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * createContextValues creates a new ContextValues.
 */ __turbopack_context__.s({
    "createContextKey": (()=>createContextKey),
    "createContextValues": (()=>createContextValues)
});
function createContextValues() {
    return {
        get (key) {
            return key.id in this ? this[key.id] : key.defaultValue;
        },
        set (key, value) {
            this[key.id] = value;
            return this;
        },
        delete (key) {
            delete this[key.id];
            return this;
        }
    };
}
function createContextKey(defaultValue, options) {
    return {
        id: Symbol(options === null || options === void 0 ? void 0 : options.description),
        defaultValue
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/serialization.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "createBinarySerialization": (()=>createBinarySerialization),
    "createClientMethodSerializers": (()=>createClientMethodSerializers),
    "createJsonSerialization": (()=>createJsonSerialization),
    "createMethodSerializationLookup": (()=>createMethodSerializationLookup),
    "getJsonOptions": (()=>getJsonOptions),
    "limitSerialization": (()=>limitSerialization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js [middleware-edge] (ecmascript)");
;
;
;
function getJsonOptions(options) {
    var _a;
    const o = Object.assign({}, options);
    (_a = o.ignoreUnknownFields) !== null && _a !== void 0 ? _a : o.ignoreUnknownFields = true;
    return o;
}
function createMethodSerializationLookup(method, binaryOptions, jsonOptions, limitOptions) {
    const inputBinary = limitSerialization(createBinarySerialization(method.I, binaryOptions), limitOptions);
    const inputJson = limitSerialization(createJsonSerialization(method.I, jsonOptions), limitOptions);
    const outputBinary = limitSerialization(createBinarySerialization(method.O, binaryOptions), limitOptions);
    const outputJson = limitSerialization(createJsonSerialization(method.O, jsonOptions), limitOptions);
    return {
        getI (useBinaryFormat) {
            return useBinaryFormat ? inputBinary : inputJson;
        },
        getO (useBinaryFormat) {
            return useBinaryFormat ? outputBinary : outputJson;
        }
    };
}
function createClientMethodSerializers(method, useBinaryFormat, jsonOptions, binaryOptions) {
    const input = useBinaryFormat ? createBinarySerialization(method.I, binaryOptions) : createJsonSerialization(method.I, jsonOptions);
    const output = useBinaryFormat ? createBinarySerialization(method.O, binaryOptions) : createJsonSerialization(method.O, jsonOptions);
    return {
        parse: output.parse,
        serialize: input.serialize
    };
}
function limitSerialization(serialization, limitOptions) {
    return {
        serialize (data) {
            const bytes = serialization.serialize(data);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["assertWriteMaxBytes"])(limitOptions.writeMaxBytes, bytes.byteLength);
            return bytes;
        },
        parse (data) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["assertReadMaxBytes"])(limitOptions.readMaxBytes, data.byteLength, true);
            return serialization.parse(data);
        }
    };
}
function createBinarySerialization(messageType, options) {
    return {
        parse (data) {
            try {
                return messageType.fromBinary(data, options);
            } catch (e) {
                const m = e instanceof Error ? e.message : String(e);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`parse binary: ${m}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
        },
        serialize (data) {
            try {
                return data.toBinary(options);
            } catch (e) {
                const m = e instanceof Error ? e.message : String(e);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`serialize binary: ${m}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
        }
    };
}
function createJsonSerialization(messageType, options) {
    var _a, _b;
    const textEncoder = (_a = options === null || options === void 0 ? void 0 : options.textEncoder) !== null && _a !== void 0 ? _a : new TextEncoder();
    const textDecoder = (_b = options === null || options === void 0 ? void 0 : options.textDecoder) !== null && _b !== void 0 ? _b : new TextDecoder();
    const o = getJsonOptions(options);
    return {
        parse (data) {
            try {
                const json = textDecoder.decode(data);
                return messageType.fromJsonString(json, o);
            } catch (e) {
                throw __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
            }
        },
        serialize (data) {
            try {
                const json = data.toJsonString(o);
                return textEncoder.encode(json);
            } catch (e) {
                throw __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
        }
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/create-method-url.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * Create a URL for the given RPC. This simply adds the qualified
 * service name, a slash, and the method name to the path of the given
 * baseUrl.
 *
 * For example, the baseUri https://example.com and method "Say" from
 * the service example.ElizaService results in:
 * https://example.com/example.ElizaService/Say
 *
 * This format is used by the protocols Connect, gRPC and Twirp.
 *
 * Note that this function also accepts a protocol-relative baseUrl.
 * If given an empty string or "/" as a baseUrl, it returns just the
 * path.
 */ __turbopack_context__.s({
    "createMethodUrl": (()=>createMethodUrl)
});
function createMethodUrl(baseUrl, service, method) {
    const s = typeof service == "string" ? service : service.typeName;
    const m = typeof method == "string" ? method : method.name;
    return baseUrl.toString().replace(/\/?$/, `/${s}/${m}`);
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/interceptor.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * applyInterceptors takes the given UnaryFn or ServerStreamingFn, and wraps
 * it with each of the given interceptors, returning a new UnaryFn or
 * ServerStreamingFn.
 */ __turbopack_context__.s({
    "applyInterceptors": (()=>applyInterceptors)
});
function applyInterceptors(next, interceptors) {
    var _a;
    return (_a = interceptors === null || interceptors === void 0 ? void 0 : interceptors.concat().reverse().reduce(// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (n, i)=>i(n), next)) !== null && _a !== void 0 ? _a : next;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/signals.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "createDeadlineSignal": (()=>createDeadlineSignal),
    "createLinkedAbortController": (()=>createLinkedAbortController),
    "getAbortSignalReason": (()=>getAbortSignalReason)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
;
function createLinkedAbortController(...signals) {
    const controller = new AbortController();
    const sa = signals.filter((s)=>s !== undefined).concat(controller.signal);
    for (const signal of sa){
        if (signal.aborted) {
            onAbort.apply(signal);
            break;
        }
        signal.addEventListener("abort", onAbort);
    }
    function onAbort() {
        if (!controller.signal.aborted) {
            controller.abort(getAbortSignalReason(this));
        }
        for (const signal of sa){
            signal.removeEventListener("abort", onAbort);
        }
    }
    return controller;
}
function createDeadlineSignal(timeoutMs) {
    const controller = new AbortController();
    const listener = ()=>{
        controller.abort(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("the operation timed out", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].DeadlineExceeded));
    };
    let timeoutId;
    if (timeoutMs !== undefined) {
        if (timeoutMs <= 0) listener();
        else timeoutId = setTimeout(listener, timeoutMs);
    }
    return {
        signal: controller.signal,
        cleanup: ()=>clearTimeout(timeoutId)
    };
}
function getAbortSignalReason(signal) {
    if (!signal.aborted) {
        return undefined;
    }
    if (signal.reason !== undefined) {
        return signal.reason;
    }
    // AbortSignal.reason is available in Node.js v16, v18, and later,
    // and in all browsers since early 2022.
    const e = new Error("This operation was aborted");
    e.name = "AbortError";
    return e;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/normalize.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "normalize": (()=>normalize),
    "normalizeIterable": (()=>normalizeIterable)
});
;
function normalize(type, message) {
    return message instanceof type ? message : new type(message);
}
function normalizeIterable(messageType, input) {
    function transform(result) {
        if (result.done === true) {
            return result;
        }
        return {
            done: result.done,
            value: normalize(messageType, result.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const it = input[Symbol.asyncIterator]();
            const res = {
                next: ()=>it.next().then(transform)
            };
            if (it.throw !== undefined) {
                res.throw = (e)=>it.throw(e).then(transform); // eslint-disable-line @typescript-eslint/no-non-null-assertion
            }
            if (it.return !== undefined) {
                res.return = (v)=>it.return(v).then(transform); // eslint-disable-line @typescript-eslint/no-non-null-assertion
            }
            return res;
        }
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/run-call.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "runStreamingCall": (()=>runStreamingCall),
    "runUnaryCall": (()=>runUnaryCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$interceptor$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/interceptor.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/signals.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$normalize$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol/normalize.js [middleware-edge] (ecmascript)");
;
;
;
;
function runUnaryCall(opt) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$interceptor$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["applyInterceptors"])(opt.next, opt.interceptors);
    const [signal, abort, done] = setupSignal(opt);
    const req = Object.assign(Object.assign({}, opt.req), {
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$normalize$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalize"])(opt.req.method.I, opt.req.message),
        signal
    });
    return next(req).then((res)=>{
        done();
        return res;
    }, abort);
}
function runStreamingCall(opt) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$interceptor$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["applyInterceptors"])(opt.next, opt.interceptors);
    const [signal, abort, done] = setupSignal(opt);
    const req = Object.assign(Object.assign({}, opt.req), {
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$normalize$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeIterable"])(opt.req.method.I, opt.req.message),
        signal
    });
    let doneCalled = false;
    // Call return on the request iterable to indicate
    // that we will no longer consume it and it should
    // cleanup any allocated resources.
    signal.addEventListener("abort", function() {
        var _a, _b;
        const it = opt.req.message[Symbol.asyncIterator]();
        // If the signal is aborted due to an error, we want to throw
        // the error to the request iterator.
        if (!doneCalled) {
            (_a = it.throw) === null || _a === void 0 ? void 0 : _a.call(it, this.reason).catch(()=>{
            // throw returns a promise, which we don't care about.
            //
            // Uncaught promises are thrown at sometime/somewhere by the event loop,
            // this is to ensure error is caught and ignored.
            });
        }
        (_b = it.return) === null || _b === void 0 ? void 0 : _b.call(it).catch(()=>{
        // return returns a promise, which we don't care about.
        //
        // Uncaught promises are thrown at sometime/somewhere by the event loop,
        // this is to ensure error is caught and ignored.
        });
    });
    return next(req).then((res)=>{
        return Object.assign(Object.assign({}, res), {
            message: {
                [Symbol.asyncIterator] () {
                    const it = res.message[Symbol.asyncIterator]();
                    return {
                        next () {
                            return it.next().then((r)=>{
                                if (r.done == true) {
                                    doneCalled = true;
                                    done();
                                }
                                return r;
                            }, abort);
                        }
                    };
                }
            }
        });
    }, abort);
}
/**
 * Create an AbortSignal for Transport implementations. The signal is available
 * in UnaryRequest and StreamingRequest, and is triggered when the call is
 * aborted (via a timeout or explicit cancellation), errored (e.g. when reading
 * an error from the server from the wire), or finished successfully.
 *
 * Transport implementations can pass the signal to HTTP clients to ensure that
 * there are no unused connections leak.
 *
 * Returns a tuple:
 * [0]: The signal, which is also aborted if the optional deadline is reached.
 * [1]: Function to call if the Transport encountered an error.
 * [2]: Function to call if the Transport finished without an error.
 */ function setupSignal(opt) {
    const { signal, cleanup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createDeadlineSignal"])(opt.timeoutMs);
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createLinkedAbortController"])(opt.signal, signal);
    return [
        controller.signal,
        function abort(reason) {
            // We peek at the deadline signal because fetch() will throw an error on
            // abort that discards the signal reason.
            const e = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"].from(signal.aborted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(signal) : reason);
            controller.abort(e);
            cleanup();
            return Promise.reject(e);
        },
        function done() {
            cleanup();
            controller.abort();
        }
    ];
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/error-json.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "errorFromJson": (()=>errorFromJson),
    "errorFromJsonBytes": (()=>errorFromJsonBytes),
    "errorToJson": (()=>errorToJson),
    "errorToJsonBytes": (()=>errorToJsonBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$code$2d$string$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/code-string.js [middleware-edge] (ecmascript)");
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
function errorFromJson(jsonValue, metadata, fallback) {
    var _a;
    if (metadata) {
        new Headers(metadata).forEach((value, key)=>fallback.metadata.append(key, value));
    }
    if (typeof jsonValue !== "object" || jsonValue == null || Array.isArray(jsonValue)) {
        throw fallback;
    }
    let code = fallback.code;
    if ("code" in jsonValue && typeof jsonValue.code === "string") {
        code = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$code$2d$string$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["codeFromString"])(jsonValue.code)) !== null && _a !== void 0 ? _a : code;
    }
    const message = jsonValue.message;
    if (message != null && typeof message !== "string") {
        throw fallback;
    }
    const error = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](message !== null && message !== void 0 ? message : "", code, metadata);
    if ("details" in jsonValue && Array.isArray(jsonValue.details)) {
        for (const detail of jsonValue.details){
            if (detail === null || typeof detail != "object" || Array.isArray(detail) || typeof detail.type != "string" || typeof detail.value != "string") {
                throw fallback;
            }
            try {
                error.details.push({
                    type: detail.type,
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protoBase64"].dec(detail.value),
                    debug: detail.debug
                });
            } catch (e) {
                throw fallback;
            }
        }
    }
    return error;
}
function errorFromJsonBytes(bytes, metadata, fallback) {
    let jsonValue;
    try {
        jsonValue = JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) {
        throw fallback;
    }
    return errorFromJson(jsonValue, metadata, fallback);
}
function errorToJson(error, jsonWriteOptions) {
    const o = {
        code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$code$2d$string$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["codeToString"])(error.code)
    };
    if (error.rawMessage.length > 0) {
        o.message = error.rawMessage;
    }
    if (error.details.length > 0) {
        o.details = error.details.map((value)=>{
            if ("getType" in value) {
                const i = {
                    type: value.getType().typeName,
                    value: value.toBinary()
                };
                try {
                    i.debug = value.toJson(jsonWriteOptions);
                } catch (e) {
                // We deliberately ignore errors that may occur when serializing
                // a message to JSON (the message contains an Any).
                // The rationale is that we are only trying to provide optional
                // debug information.
                }
                return i;
            }
            return value;
        }).map((_a)=>{
            var { value } = _a, rest = __rest(_a, [
                "value"
            ]);
            return Object.assign(Object.assign({}, rest), {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protoBase64"].enc(value).replace(/=+$/, "")
            });
        });
    }
    return o;
}
function errorToJsonBytes(error, jsonWriteOptions) {
    const textEncoder = new TextEncoder();
    try {
        const jsonObject = errorToJson(error, jsonWriteOptions);
        const jsonString = JSON.stringify(jsonObject);
        return textEncoder.encode(jsonString);
    } catch (e) {
        const m = e instanceof Error ? e.message : String(e);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`failed to serialize Connect Error: ${m}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/end-stream.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "createEndStreamSerialization": (()=>createEndStreamSerialization),
    "endStreamFlag": (()=>endStreamFlag),
    "endStreamFromJson": (()=>endStreamFromJson),
    "endStreamToJson": (()=>endStreamToJson)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$error$2d$json$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/error-json.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$http$2d$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/http-headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
;
;
;
const endStreamFlag = 0b00000010;
function endStreamFromJson(data) {
    const parseErr = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"]("invalid end stream", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unknown);
    let jsonValue;
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        jsonValue = JSON.parse(typeof data == "string" ? data : new TextDecoder().decode(data));
    } catch (e) {
        throw parseErr;
    }
    if (typeof jsonValue != "object" || jsonValue == null || Array.isArray(jsonValue)) {
        throw parseErr;
    }
    const metadata = new Headers();
    if ("metadata" in jsonValue) {
        if (typeof jsonValue.metadata != "object" || jsonValue.metadata == null || Array.isArray(jsonValue.metadata)) {
            throw parseErr;
        }
        for (const [key, values] of Object.entries(jsonValue.metadata)){
            if (!Array.isArray(values) || values.some((value)=>typeof value != "string")) {
                throw parseErr;
            }
            for (const value of values){
                metadata.append(key, value);
            }
        }
    }
    const error = "error" in jsonValue && jsonValue.error != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$error$2d$json$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["errorFromJson"])(jsonValue.error, metadata, parseErr) : undefined;
    return {
        metadata,
        error
    };
}
function endStreamToJson(metadata, error, jsonWriteOptions) {
    const es = {};
    if (error !== undefined) {
        es.error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$error$2d$json$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["errorToJson"])(error, jsonWriteOptions);
        metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$http$2d$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["appendHeaders"])(metadata, error.metadata);
    }
    let hasMetadata = false;
    const md = {};
    metadata.forEach((value, key)=>{
        hasMetadata = true;
        md[key] = [
            value
        ];
    });
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (hasMetadata) {
        es.metadata = md;
    }
    return es;
}
function createEndStreamSerialization(options) {
    const textEncoder = new TextEncoder();
    return {
        serialize (data) {
            try {
                const jsonObject = endStreamToJson(data.metadata, data.error, options);
                const jsonString = JSON.stringify(jsonObject);
                return textEncoder.encode(jsonString);
            } catch (e) {
                const m = e instanceof Error ? e.message : String(e);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`failed to serialize EndStreamResponse: ${m}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
        },
        parse (data) {
            try {
                return endStreamFromJson(data);
            } catch (e) {
                const m = e instanceof Error ? e.message : String(e);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`failed to parse EndStreamResponse: ${m}`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
            }
        }
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/headers.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * @private Internal code, does not follow semantic versioning.
 */ __turbopack_context__.s({
    "headerContentType": (()=>headerContentType),
    "headerProtocolVersion": (()=>headerProtocolVersion),
    "headerStreamAcceptEncoding": (()=>headerStreamAcceptEncoding),
    "headerStreamEncoding": (()=>headerStreamEncoding),
    "headerTimeout": (()=>headerTimeout),
    "headerUnaryAcceptEncoding": (()=>headerUnaryAcceptEncoding),
    "headerUnaryContentLength": (()=>headerUnaryContentLength),
    "headerUnaryEncoding": (()=>headerUnaryEncoding),
    "headerUserAgent": (()=>headerUserAgent)
});
const headerContentType = "Content-Type";
const headerUnaryContentLength = "Content-Length";
const headerUnaryEncoding = "Content-Encoding";
const headerStreamEncoding = "Connect-Content-Encoding";
const headerUnaryAcceptEncoding = "Accept-Encoding";
const headerStreamAcceptEncoding = "Connect-Accept-Encoding";
const headerTimeout = "Connect-Timeout-Ms";
const headerProtocolVersion = "Connect-Protocol-Version";
const headerUserAgent = "User-Agent";
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/query-params.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * @private Internal code, does not follow semantic versioning.
 */ __turbopack_context__.s({
    "paramBase64": (()=>paramBase64),
    "paramCompression": (()=>paramCompression),
    "paramConnectVersion": (()=>paramConnectVersion),
    "paramEncoding": (()=>paramEncoding),
    "paramMessage": (()=>paramMessage)
});
const paramConnectVersion = "connect";
const paramEncoding = "encoding";
const paramCompression = "compression";
const paramBase64 = "base64";
const paramMessage = "message";
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/version.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "protocolVersion": (()=>protocolVersion),
    "requireProtocolVersionHeader": (()=>requireProtocolVersionHeader),
    "requireProtocolVersionParam": (()=>requireProtocolVersionParam)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$query$2d$params$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/query-params.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
;
;
;
const protocolVersion = "1";
function requireProtocolVersionHeader(requestHeader) {
    const v = requestHeader.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerProtocolVersion"]);
    if (v === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`missing required header: set ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerProtocolVersion"]} to "${protocolVersion}"`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
    } else if (v !== protocolVersion) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerProtocolVersion"]} must be "${protocolVersion}": got "${v}"`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
    }
}
function requireProtocolVersionParam(queryParams) {
    const v = queryParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$query$2d$params$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["paramConnectVersion"]);
    if (v === null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`missing required parameter: set ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$query$2d$params$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["paramConnectVersion"]} to "v${protocolVersion}"`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
    } else if (v !== `v${protocolVersion}`) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$query$2d$params$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["paramConnectVersion"]} must be "v${protocolVersion}": got "${v}"`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument);
    }
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/content-type.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * Regular Expression that matches any valid Connect Content-Type header value.
 *
 * @private Internal code, does not follow semantic versioning.
 */ __turbopack_context__.s({
    "contentTypeRegExp": (()=>contentTypeRegExp),
    "contentTypeStreamJson": (()=>contentTypeStreamJson),
    "contentTypeStreamProto": (()=>contentTypeStreamProto),
    "contentTypeStreamRegExp": (()=>contentTypeStreamRegExp),
    "contentTypeUnaryJson": (()=>contentTypeUnaryJson),
    "contentTypeUnaryProto": (()=>contentTypeUnaryProto),
    "contentTypeUnaryRegExp": (()=>contentTypeUnaryRegExp),
    "parseContentType": (()=>parseContentType),
    "parseEncodingQuery": (()=>parseEncodingQuery)
});
const contentTypeRegExp = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$/i;
const contentTypeUnaryRegExp = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i;
const contentTypeStreamRegExp = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$/i;
const contentTypeUnaryProto = "application/proto";
const contentTypeUnaryJson = "application/json";
const contentTypeStreamProto = "application/connect+proto";
const contentTypeStreamJson = "application/connect+json";
const encodingProto = "proto";
const encodingJson = "json";
function parseContentType(contentType) {
    const match = contentType === null || contentType === void 0 ? void 0 : contentType.match(contentTypeRegExp);
    if (!match) {
        return undefined;
    }
    const stream = !!match[1];
    const binary = !!match[3];
    return {
        stream,
        binary
    };
}
function parseEncodingQuery(encoding) {
    switch(encoding){
        case encodingProto:
            return {
                stream: false,
                binary: true
            };
        case encodingJson:
            return {
                stream: false,
                binary: false
            };
        default:
            return undefined;
    }
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/request-header.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "requestHeader": (()=>requestHeader),
    "requestHeaderWithCompression": (()=>requestHeaderWithCompression)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/service-type.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/version.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/content-type.js [middleware-edge] (ecmascript)");
;
;
;
;
function requestHeader(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent) {
    const result = new Headers(userProvidedHeaders !== null && userProvidedHeaders !== void 0 ? userProvidedHeaders : {});
    if (timeoutMs !== undefined) {
        result.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerTimeout"], `${timeoutMs}`);
    }
    result.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerContentType"], methodKind == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary ? useBinaryFormat ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["contentTypeUnaryProto"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["contentTypeUnaryJson"] : useBinaryFormat ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["contentTypeStreamProto"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["contentTypeStreamJson"]);
    result.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerProtocolVersion"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protocolVersion"]);
    if (setUserAgent) {
        result.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUserAgent"], "connect-es/1.6.1");
    }
    return result;
}
function requestHeaderWithCompression(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, acceptCompression, sendCompression, setUserAgent) {
    const result = requestHeader(methodKind, useBinaryFormat, timeoutMs, userProvidedHeaders, setUserAgent);
    if (sendCompression != null) {
        const name = methodKind == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryEncoding"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerStreamEncoding"];
        result.set(name, sendCompression.name);
    }
    if (acceptCompression.length > 0) {
        const name = methodKind == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryAcceptEncoding"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerStreamAcceptEncoding"];
        result.set(name, acceptCompression.map((c)=>c.name).join(","));
    }
    return result;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/trailer-mux.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
 * In unary RPCs, Connect transports trailing metadata as response header
 * fields, prefixed with "trailer-".
 *
 * This function demuxes headers and trailers into two separate Headers
 * objects.
 *
 * @private Internal code, does not follow semantic versioning.
 */ __turbopack_context__.s({
    "trailerDemux": (()=>trailerDemux),
    "trailerMux": (()=>trailerMux)
});
function trailerDemux(header) {
    const h = new Headers(), t = new Headers();
    header.forEach((value, key)=>{
        if (key.toLowerCase().startsWith("trailer-")) {
            t.append(key.substring(8), value);
        } else {
            h.append(key, value);
        }
    });
    return [
        h,
        t
    ];
}
function trailerMux(header, trailer) {
    const h = new Headers(header);
    trailer.forEach((value, key)=>{
        h.append(`trailer-${key}`, value);
    });
    return h;
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/get-request.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "transformConnectPostToGetRequest": (()=>transformConnectPostToGetRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/version.js [middleware-edge] (ecmascript)");
;
;
;
const contentTypePrefix = "application/";
function encodeMessageForUrl(message, useBase64) {
    if (useBase64) {
        // TODO(jchadwick-buf): Three regex replaces seems excessive.
        // Can we make protoBase64.enc more flexible?
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$base64$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protoBase64"].enc(message).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } else {
        return encodeURIComponent(new TextDecoder().decode(message));
    }
}
function transformConnectPostToGetRequest(request, message, useBase64) {
    let query = `?connect=v${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protocolVersion"]}`;
    const contentType = request.header.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerContentType"]);
    if ((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(contentTypePrefix)) === 0) {
        query += "&encoding=" + encodeURIComponent(contentType.slice(contentTypePrefix.length));
    }
    const compression = request.header.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryEncoding"]);
    if (compression !== null && compression !== "identity") {
        query += "&compression=" + encodeURIComponent(compression);
        // Force base64 for compressed payloads.
        useBase64 = true;
    }
    if (useBase64) {
        query += "&base64=1";
    }
    query += "&message=" + encodeMessageForUrl(message, useBase64);
    const url = request.url + query;
    // Omit headers that are not used for unary GET requests.
    const header = new Headers(request.header);
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerProtocolVersion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerContentType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryContentLength"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryEncoding"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryAcceptEncoding"]
    ].forEach((h)=>header.delete(h));
    return Object.assign(Object.assign({}, request), {
        init: Object.assign(Object.assign({}, request.init), {
            method: "GET"
        }),
        url,
        header
    });
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/http-status.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "codeFromHttpStatus": (()=>codeFromHttpStatus),
    "codeToHttpStatus": (()=>codeToHttpStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
;
function codeFromHttpStatus(httpStatus) {
    switch(httpStatus){
        case 400:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal;
        case 401:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unauthenticated;
        case 403:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].PermissionDenied;
        case 404:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unimplemented;
        case 429:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unavailable;
        case 502:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unavailable;
        case 503:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unavailable;
        case 504:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unavailable;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unknown;
    }
}
function codeToHttpStatus(code) {
    switch(code){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Canceled:
            return 499; // Client Closed Request
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unknown:
            return 500; // Internal Server Error
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].InvalidArgument:
            return 400; // Bad Request
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].DeadlineExceeded:
            return 504; // Gateway Timeout
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].NotFound:
            return 404; // Not Found
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].AlreadyExists:
            return 409; // Conflict
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].PermissionDenied:
            return 403; // Forbidden
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted:
            return 429; // Too Many Requests
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].FailedPrecondition:
            return 400; // Bad Request
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Aborted:
            return 409; // Conflict
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].OutOfRange:
            return 400; // Bad Request
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unimplemented:
            return 501; // Not Implemented
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal:
            return 500; // Internal Server Error
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unavailable:
            return 503; // Service Unavailable
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].DataLoss:
            return 500; // Internal Server Error
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unauthenticated:
            return 401; // Unauthorized
        default:
            return 500; // same as CodeUnknown
    }
}
}}),
"[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/validate-response.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
    "validateResponse": (()=>validateResponse),
    "validateResponseWithCompression": (()=>validateResponseWithCompression)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@bufbuild/protobuf/dist/esm/service-type.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/code.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$http$2d$status$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/http-status.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/connect-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/content-type.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@connectrpc/connect/dist/esm/protocol-connect/headers.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
function validateResponse(methodKind, useBinaryFormat, status, headers) {
    const mimeType = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerContentType"]);
    const parsedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$content$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseContentType"])(mimeType);
    if (status !== 200) {
        const errorFromStatus = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`HTTP ${status}`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$http$2d$status$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["codeFromHttpStatus"])(status), headers);
        // If parsedType is defined and it is not binary, then this is a unary JSON response
        if (methodKind == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary && parsedType && !parsedType.binary) {
            return {
                isUnaryError: true,
                unaryError: errorFromStatus
            };
        }
        throw errorFromStatus;
    }
    const allowedContentType = {
        binary: useBinaryFormat,
        stream: methodKind !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary
    };
    if ((parsedType === null || parsedType === void 0 ? void 0 : parsedType.binary) !== allowedContentType.binary || parsedType.stream !== allowedContentType.stream) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`unsupported content type ${mimeType}`, parsedType === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Unknown : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal, headers);
    }
    return {
        isUnaryError: false
    };
}
function validateResponseWithCompression(methodKind, acceptCompression, useBinaryFormat, status, headers) {
    let compression;
    const encoding = headers.get(methodKind == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MethodKind"].Unary ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerUnaryEncoding"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["headerStreamEncoding"]);
    if (encoding != null && encoding.toLowerCase() !== "identity") {
        compression = acceptCompression.find((c)=>c.name === encoding);
        if (!compression) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConnectError"](`unsupported response encoding "${encoding}"`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Code"].Internal, headers);
        }
    }
    return Object.assign({
        compression
    }, validateResponse(methodKind, useBinaryFormat, status, headers));
}
}}),
}]);

//# sourceMappingURL=79789_%40connectrpc_connect_dist_esm_8f42efe6._.js.map