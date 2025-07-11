module.exports = {

"[project]/apps/chat-ui/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "defaultServiceName": (()=>defaultServiceName)
});
function defaultServiceName() {
    return `unknown_service:${process.argv0}`;
} //# sourceMappingURL=default-service-name.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/resources/build/esm/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "identity": (()=>identity),
    "isPromiseLike": (()=>isPromiseLike)
});
const isPromiseLike = (val)=>{
    return val !== null && typeof val === 'object' && typeof val.then === 'function';
};
function identity(_) {
    return _;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "defaultResource": (()=>defaultResource),
    "emptyResource": (()=>emptyResource),
    "resourceFromAttributes": (()=>resourceFromAttributes),
    "resourceFromDetectedResource": (()=>resourceFromDetectedResource)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/resources/build/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ResourceImpl {
    _rawAttributes;
    _asyncAttributesPending = false;
    _memoizedAttributes;
    static FromAttributeList(attributes) {
        const res = new ResourceImpl({});
        res._rawAttributes = guardedRawAttributes(attributes);
        res._asyncAttributesPending = attributes.filter(([_, val])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromiseLike"])(val)).length > 0;
        return res;
    }
    constructor(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ resource){
        const attributes = resource.attributes ?? {};
        this._rawAttributes = Object.entries(attributes).map(([k, v])=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
                // side-effect
                this._asyncAttributesPending = true;
            }
            return [
                k,
                v
            ];
        });
        this._rawAttributes = guardedRawAttributes(this._rawAttributes);
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
        if (!this.asyncAttributesPending) {
            return;
        }
        for(let i = 0; i < this._rawAttributes.length; i++){
            const [k, v] = this._rawAttributes[i];
            this._rawAttributes[i] = [
                k,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromiseLike"])(v) ? await v : v
            ];
        }
        this._asyncAttributesPending = false;
    }
    get attributes() {
        if (this.asyncAttributesPending) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('Accessing resource attributes before async attributes settled');
        }
        if (this._memoizedAttributes) {
            return this._memoizedAttributes;
        }
        const attrs = {};
        for (const [k, v] of this._rawAttributes){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug(`Unsettled resource attribute ${k} skipped`);
                continue;
            }
            if (v != null) {
                attrs[k] ??= v;
            }
        }
        // only memoize output if all attributes are settled
        if (!this._asyncAttributesPending) {
            this._memoizedAttributes = attrs;
        }
        return attrs;
    }
    getRawAttributes() {
        return this._rawAttributes;
    }
    merge(resource) {
        if (resource == null) return this;
        // Order is important
        // Spec states incoming attributes override existing attributes
        return ResourceImpl.FromAttributeList([
            ...resource.getRawAttributes(),
            ...this.getRawAttributes()
        ]);
    }
}
function resourceFromAttributes(attributes) {
    return ResourceImpl.FromAttributeList(Object.entries(attributes));
}
function resourceFromDetectedResource(detectedResource) {
    return new ResourceImpl(detectedResource);
}
function emptyResource() {
    return resourceFromAttributes({});
}
function defaultResource() {
    return resourceFromAttributes({
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_SERVICE_NAME"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServiceName"])(),
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]],
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]],
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]
    });
}
function guardedRawAttributes(attributes) {
    return attributes.map(([k, v])=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
            return [
                k,
                v.catch((err)=>{
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug('promise rejection for resource attribute: %s - %s', k, err);
                    return undefined;
                })
            ];
        }
        return [
            k,
            v
        ];
    });
} //# sourceMappingURL=ResourceImpl.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({});
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "defaultServiceName": (()=>defaultServiceName)
});
function defaultServiceName() {
    return "unknown_service:" + process.argv0;
} //# sourceMappingURL=default-service-name.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "Resource": (()=>Resource)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [app-ssr] (ecmascript)");
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
var __read = this && this.__read || function(o, n) {
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
};
;
;
;
;
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */ var Resource = function() {
    function Resource(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ attributes, asyncAttributesPromise) {
        var _this = this;
        var _a;
        this._attributes = attributes;
        this.asyncAttributesPending = asyncAttributesPromise != null;
        this._syncAttributes = (_a = this._attributes) !== null && _a !== void 0 ? _a : {};
        this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === void 0 ? void 0 : asyncAttributesPromise.then(function(asyncAttributes) {
            _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
            _this.asyncAttributesPending = false;
            return asyncAttributes;
        }, function(err) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("a resource's async attributes promise rejected: %s", err);
            _this.asyncAttributesPending = false;
            return {};
        });
    }
    /**
     * Returns an empty Resource
     */ Resource.empty = function() {
        return Resource.EMPTY;
    };
    /**
     * Returns a Resource that identifies the SDK in use.
     */ Resource.default = function() {
        var _a;
        return new Resource((_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_SERVICE_NAME"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServiceName"])(), _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_LANGUAGE"]] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_LANGUAGE"]], _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_NAME"]] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_NAME"]], _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_VERSION"]] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$sdk$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_TELEMETRY_SDK_VERSION"]], _a));
    };
    Object.defineProperty(Resource.prototype, "attributes", {
        get: function() {
            var _a;
            if (this.asyncAttributesPending) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('Accessing resource attributes before async attributes settled');
            }
            return (_a = this._attributes) !== null && _a !== void 0 ? _a : {};
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that will never be rejected. Resolves when all async attributes have finished being added to
     * this Resource's attributes. This is useful in exporters to block until resource detection
     * has finished.
     */ Resource.prototype.waitForAsyncAttributes = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.asyncAttributesPending) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this._asyncAttributesPromise
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */ Resource.prototype.merge = function(other) {
        var _this = this;
        var _a;
        if (!other) return this;
        // SpanAttributes from other resource overwrite attributes from this resource.
        var mergedSyncAttributes = __assign(__assign({}, this._syncAttributes), (_a = other._syncAttributes) !== null && _a !== void 0 ? _a : other.attributes);
        if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) {
            return new Resource(mergedSyncAttributes);
        }
        var mergedAttributesPromise = Promise.all([
            this._asyncAttributesPromise,
            other._asyncAttributesPromise
        ]).then(function(_a) {
            var _b;
            var _c = __read(_a, 2), thisAsyncAttributes = _c[0], otherAsyncAttributes = _c[1];
            return __assign(__assign(__assign(__assign({}, _this._syncAttributes), thisAsyncAttributes), (_b = other._syncAttributes) !== null && _b !== void 0 ? _b : other.attributes), otherAsyncAttributes);
        });
        return new Resource(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource.EMPTY = new Resource({});
    return Resource;
}();
;
 //# sourceMappingURL=Resource.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/BrowserDetectorSync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "browserDetectorSync": (()=>browserDetectorSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
;
;
/**
 * BrowserDetectorSync will be used to detect the resources related to browser.
 */ var BrowserDetectorSync = function() {
    function BrowserDetectorSync() {}
    BrowserDetectorSync.prototype.detect = function(config) {
        var _a;
        var _b, _c, _d;
        var isBrowser = typeof navigator !== 'undefined' && ((_c = (_b = global.process) === null || _b === void 0 ? void 0 : _b.versions) === null || _c === void 0 ? void 0 : _c.node) === undefined && // Node.js v21 adds `navigator`
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore don't have Bun types
        ((_d = global.Bun) === null || _d === void 0 ? void 0 : _d.version) === undefined; // Bun (bun.sh) defines `navigator`
        if (!isBrowser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"].empty();
        }
        var browserResource = (_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_NAME"]] = 'browser', _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION"]] = 'Web Browser', _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_VERSION"]] = navigator.userAgent, _a);
        return this._getResourceAttributes(browserResource, config);
    };
    /**
     * Validates process resource attribute map from process variables
     *
     * @param browserResource The un-sanitized resource attributes from process as key/value pairs.
     * @param config: Config
     * @returns The sanitized resource attributes.
     */ BrowserDetectorSync.prototype._getResourceAttributes = function(browserResource, _config) {
        if (browserResource[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_VERSION"]] === '') {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug('BrowserDetector failed: Unable to find required browser resources. ');
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"].empty();
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"](__assign({}, browserResource));
        }
    };
    return BrowserDetectorSync;
}();
var browserDetectorSync = new BrowserDetectorSync(); //# sourceMappingURL=BrowserDetectorSync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/BrowserDetector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "browserDetector": (()=>browserDetector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$BrowserDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/BrowserDetectorSync.js [app-ssr] (ecmascript)");
;
/**
 * BrowserDetector will be used to detect the resources related to browser.
 */ var BrowserDetector = function() {
    function BrowserDetector() {}
    BrowserDetector.prototype.detect = function(config) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$BrowserDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserDetectorSync"].detect(config));
    };
    return BrowserDetector;
}();
var browserDetector = new BrowserDetector(); //# sourceMappingURL=BrowserDetector.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetectorSync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "envDetectorSync": (()=>envDetectorSync)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __values = this && this.__values || function(o) {
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
};
var __read = this && this.__read || function(o, n) {
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
};
;
;
;
;
/**
 * EnvDetectorSync can be used to detect the presence of and create a Resource
 * from the OTEL_RESOURCE_ATTRIBUTES environment variable.
 */ var EnvDetectorSync = function() {
    function EnvDetectorSync() {
        // Type, attribute keys, and attribute values should not exceed 256 characters.
        this._MAX_LENGTH = 255;
        // OTEL_RESOURCE_ATTRIBUTES is a comma-separated list of attributes.
        this._COMMA_SEPARATOR = ',';
        // OTEL_RESOURCE_ATTRIBUTES contains key value pair separated by '='.
        this._LABEL_KEY_VALUE_SPLITTER = '=';
        this._ERROR_MESSAGE_INVALID_CHARS = 'should be a ASCII string with a length greater than 0 and not exceed ' + this._MAX_LENGTH + ' characters.';
        this._ERROR_MESSAGE_INVALID_VALUE = 'should be a ASCII string with a length not exceed ' + this._MAX_LENGTH + ' characters.';
    }
    /**
     * Returns a {@link Resource} populated with attributes from the
     * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
     * function to conform to the Detector interface.
     *
     * @param config The resource detection config
     */ EnvDetectorSync.prototype.detect = function(_config) {
        var attributes = {};
        var env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$node$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnv"])();
        var rawAttributes = env.OTEL_RESOURCE_ATTRIBUTES;
        var serviceName = env.OTEL_SERVICE_NAME;
        if (rawAttributes) {
            try {
                var parsedAttributes = this._parseResourceAttributes(rawAttributes);
                Object.assign(attributes, parsedAttributes);
            } catch (e) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("EnvDetector failed: " + e.message);
            }
        }
        if (serviceName) {
            attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_SERVICE_NAME"]] = serviceName;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"](attributes);
    };
    /**
     * Creates an attribute map from the OTEL_RESOURCE_ATTRIBUTES environment
     * variable.
     *
     * OTEL_RESOURCE_ATTRIBUTES: A comma-separated list of attributes describing
     * the source in more detail, e.g. “key1=val1,key2=val2”. Domain names and
     * paths are accepted as attribute keys. Values may be quoted or unquoted in
     * general. If a value contains whitespace, =, or " characters, it must
     * always be quoted.
     *
     * @param rawEnvAttributes The resource attributes as a comma-separated list
     * of key/value pairs.
     * @returns The sanitized resource attributes.
     */ EnvDetectorSync.prototype._parseResourceAttributes = function(rawEnvAttributes) {
        var e_1, _a;
        if (!rawEnvAttributes) return {};
        var attributes = {};
        var rawAttributes = rawEnvAttributes.split(this._COMMA_SEPARATOR, -1);
        try {
            for(var rawAttributes_1 = __values(rawAttributes), rawAttributes_1_1 = rawAttributes_1.next(); !rawAttributes_1_1.done; rawAttributes_1_1 = rawAttributes_1.next()){
                var rawAttribute = rawAttributes_1_1.value;
                var keyValuePair = rawAttribute.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
                if (keyValuePair.length !== 2) {
                    continue;
                }
                var _b = __read(keyValuePair, 2), key = _b[0], value = _b[1];
                // Leading and trailing whitespaces are trimmed.
                key = key.trim();
                value = value.trim().split(/^"|"$/).join('');
                if (!this._isValidAndNotEmpty(key)) {
                    throw new Error("Attribute key " + this._ERROR_MESSAGE_INVALID_CHARS);
                }
                if (!this._isValid(value)) {
                    throw new Error("Attribute value " + this._ERROR_MESSAGE_INVALID_VALUE);
                }
                attributes[key] = decodeURIComponent(value);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (rawAttributes_1_1 && !rawAttributes_1_1.done && (_a = rawAttributes_1.return)) _a.call(rawAttributes_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return attributes;
    };
    /**
     * Determines whether the given String is a valid printable ASCII string with
     * a length not exceed _MAX_LENGTH characters.
     *
     * @param str The String to be validated.
     * @returns Whether the String is valid.
     */ EnvDetectorSync.prototype._isValid = function(name) {
        return name.length <= this._MAX_LENGTH && this._isBaggageOctetString(name);
    };
    // https://www.w3.org/TR/baggage/#definition
    EnvDetectorSync.prototype._isBaggageOctetString = function(str) {
        for(var i = 0; i < str.length; i++){
            var ch = str.charCodeAt(i);
            if (ch < 0x21 || ch === 0x2c || ch === 0x3b || ch === 0x5c || ch > 0x7e) {
                return false;
            }
        }
        return true;
    };
    /**
     * Determines whether the given String is a valid printable ASCII string with
     * a length greater than 0 and not exceed _MAX_LENGTH characters.
     *
     * @param str The String to be validated.
     * @returns Whether the String is valid and not empty.
     */ EnvDetectorSync.prototype._isValidAndNotEmpty = function(str) {
        return str.length > 0 && this._isValid(str);
    };
    return EnvDetectorSync;
}();
var envDetectorSync = new EnvDetectorSync(); //# sourceMappingURL=EnvDetectorSync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "envDetector": (()=>envDetector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$EnvDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetectorSync.js [app-ssr] (ecmascript)");
;
/**
 * EnvDetector can be used to detect the presence of and create a Resource
 * from the OTEL_RESOURCE_ATTRIBUTES environment variable.
 */ var EnvDetector = function() {
    function EnvDetector() {}
    /**
     * Returns a {@link Resource} populated with attributes from the
     * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
     * function to conform to the Detector interface.
     *
     * @param config The resource detection config
     */ EnvDetector.prototype.detect = function(config) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$EnvDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["envDetectorSync"].detect(config));
    };
    return EnvDetector;
}();
var envDetector = new EnvDetector(); //# sourceMappingURL=EnvDetector.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "normalizeArch": (()=>normalizeArch),
    "normalizeType": (()=>normalizeType)
});
var normalizeArch = function(nodeArchString) {
    // Maps from https://nodejs.org/api/os.html#osarch to arch values in spec:
    // https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/resource/semantic_conventions/host.md
    switch(nodeArchString){
        case 'arm':
            return 'arm32';
        case 'ppc':
            return 'ppc32';
        case 'x64':
            return 'amd64';
        default:
            return nodeArchString;
    }
};
var normalizeType = function(nodePlatform) {
    // Maps from https://nodejs.org/api/os.html#osplatform to arch values in spec:
    // https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/resource/semantic_conventions/os.md
    switch(nodePlatform){
        case 'sunos':
            return 'solaris';
        case 'win32':
            return 'windows';
        default:
            return nodePlatform;
    }
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "execAsync": (()=>execAsync)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
var execAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"]); //# sourceMappingURL=execAsync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-darwin.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "getMachineId": (()=>getMachineId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
;
;
function getMachineId() {
    return __awaiter(this, void 0, void 0, function() {
        var result, idLine, parts, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execAsync"])('ioreg -rd1 -c "IOPlatformExpertDevice"')
                    ];
                case 1:
                    result = _a.sent();
                    idLine = result.stdout.split('\n').find(function(line) {
                        return line.includes('IOPlatformUUID');
                    });
                    if (!idLine) {
                        return [
                            2 /*return*/ ,
                            ''
                        ];
                    }
                    parts = idLine.split('" = "');
                    if (parts.length === 2) {
                        return [
                            2 /*return*/ ,
                            parts[1].slice(0, -1)
                        ];
                    }
                    return [
                        3 /*break*/ ,
                        3
                    ];
                case 2:
                    e_1 = _a.sent();
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("error reading machine id: " + e_1);
                    return [
                        3 /*break*/ ,
                        3
                    ];
                case 3:
                    return [
                        2 /*return*/ ,
                        ''
                    ];
            }
        });
    });
} //# sourceMappingURL=getMachineId-darwin.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-linux.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMachineId": (()=>getMachineId)
});
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
var __values = this && this.__values || function(o) {
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
};
;
;
function getMachineId() {
    return __awaiter(this, void 0, void 0, function() {
        var paths, paths_1, paths_1_1, path, result, e_1, e_2_1;
        var e_2, _a;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    paths = [
                        '/etc/machine-id',
                        '/var/lib/dbus/machine-id'
                    ];
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    paths_1 = __values(paths), paths_1_1 = paths_1.next();
                    _b.label = 2;
                case 2:
                    if (!!paths_1_1.done) return [
                        3 /*break*/ ,
                        7
                    ];
                    path = paths_1_1.value;
                    _b.label = 3;
                case 3:
                    _b.trys.push([
                        3,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4 /*yield*/ ,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(path, {
                            encoding: 'utf8'
                        })
                    ];
                case 4:
                    result = _b.sent();
                    return [
                        2 /*return*/ ,
                        result.trim()
                    ];
                case 5:
                    e_1 = _b.sent();
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("error reading machine id: " + e_1);
                    return [
                        3 /*break*/ ,
                        6
                    ];
                case 6:
                    paths_1_1 = paths_1.next();
                    return [
                        3 /*break*/ ,
                        2
                    ];
                case 7:
                    return [
                        3 /*break*/ ,
                        10
                    ];
                case 8:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3 /*break*/ ,
                        10
                    ];
                case 9:
                    try {
                        if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                    return [
                        7 /*endfinally*/ 
                    ];
                case 10:
                    return [
                        2 /*return*/ ,
                        ''
                    ];
            }
        });
    });
} //# sourceMappingURL=getMachineId-linux.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-bsd.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "getMachineId": (()=>getMachineId)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
;
;
;
function getMachineId() {
    return __awaiter(this, void 0, void 0, function() {
        var result, e_1, result, e_2;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4 /*yield*/ ,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile('/etc/hostid', {
                            encoding: 'utf8'
                        })
                    ];
                case 1:
                    result = _a.sent();
                    return [
                        2 /*return*/ ,
                        result.trim()
                    ];
                case 2:
                    e_1 = _a.sent();
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("error reading machine id: " + e_1);
                    return [
                        3 /*break*/ ,
                        3
                    ];
                case 3:
                    _a.trys.push([
                        3,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execAsync"])('kenv -q smbios.system.uuid')
                    ];
                case 4:
                    result = _a.sent();
                    return [
                        2 /*return*/ ,
                        result.stdout.trim()
                    ];
                case 5:
                    e_2 = _a.sent();
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("error reading machine id: " + e_2);
                    return [
                        3 /*break*/ ,
                        6
                    ];
                case 6:
                    return [
                        2 /*return*/ ,
                        ''
                    ];
            }
        });
    });
} //# sourceMappingURL=getMachineId-bsd.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-win.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "getMachineId": (()=>getMachineId)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/process [external] (process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
;
;
;
function getMachineId() {
    return __awaiter(this, void 0, void 0, function() {
        var args, command, result, parts, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    args = 'QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid';
                    command = '%windir%\\System32\\REG.exe';
                    if (__TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["arch"] === 'ia32' && 'PROCESSOR_ARCHITEW6432' in __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["env"]) {
                        command = '%windir%\\sysnative\\cmd.exe /c ' + command;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execAsync"])(command + " " + args)
                    ];
                case 2:
                    result = _a.sent();
                    parts = result.stdout.split('REG_SZ');
                    if (parts.length === 2) {
                        return [
                            2 /*return*/ ,
                            parts[1].trim()
                        ];
                    }
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    e_1 = _a.sent();
                    __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("error reading machine id: " + e_1);
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 4:
                    return [
                        2 /*return*/ ,
                        ''
                    ];
            }
        });
    });
} //# sourceMappingURL=getMachineId-win.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-unsupported.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "getMachineId": (()=>getMachineId)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
;
function getMachineId() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug('could not read machine-id: unsupported platform');
            return [
                2 /*return*/ ,
                ''
            ];
        });
    });
} //# sourceMappingURL=getMachineId-unsupported.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "getMachineId": (()=>getMachineId)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/process [external] (process, cjs)");
;
var getMachineId;
switch(__TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["platform"]){
    case 'darwin':
        getMachineId = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-darwin.js [app-ssr] (ecmascript)").getMachineId;
        break;
    case 'linux':
        getMachineId = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-linux.js [app-ssr] (ecmascript)").getMachineId;
        break;
    case 'freebsd':
        getMachineId = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-bsd.js [app-ssr] (ecmascript)").getMachineId;
        break;
    case 'win32':
        getMachineId = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-win.js [app-ssr] (ecmascript)").getMachineId;
        break;
    default:
        getMachineId = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-unsupported.js [app-ssr] (ecmascript)").getMachineId;
}
;
 //# sourceMappingURL=getMachineId.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetectorSync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "hostDetectorSync": (()=>hostDetectorSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/os [external] (os, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$getMachineId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * HostDetectorSync detects the resources related to the host current process is
 * running on. Currently only non-cloud-based attributes are included.
 */ var HostDetectorSync = function() {
    function HostDetectorSync() {}
    HostDetectorSync.prototype.detect = function(_config) {
        var _a;
        var attributes = (_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_HOST_NAME"]] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["hostname"])(), _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_HOST_ARCH"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeArch"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["arch"])()), _a);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"](attributes, this._getAsyncAttributes());
    };
    HostDetectorSync.prototype._getAsyncAttributes = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$getMachineId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMachineId"])().then(function(machineId) {
            var attributes = {};
            if (machineId) {
                attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_HOST_ID"]] = machineId;
            }
            return attributes;
        });
    };
    return HostDetectorSync;
}();
var hostDetectorSync = new HostDetectorSync(); //# sourceMappingURL=HostDetectorSync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "hostDetector": (()=>hostDetector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$HostDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetectorSync.js [app-ssr] (ecmascript)");
;
/**
 * HostDetector detects the resources related to the host current process is
 * running on. Currently only non-cloud-based attributes are included.
 */ var HostDetector = function() {
    function HostDetector() {}
    HostDetector.prototype.detect = function(_config) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$HostDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hostDetectorSync"].detect(_config));
    };
    return HostDetector;
}();
var hostDetector = new HostDetector(); //# sourceMappingURL=HostDetector.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetectorSync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "osDetectorSync": (()=>osDetectorSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/os [external] (os, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/utils.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * OSDetectorSync detects the resources related to the operating system (OS) on
 * which the process represented by this resource is running.
 */ var OSDetectorSync = function() {
    function OSDetectorSync() {}
    OSDetectorSync.prototype.detect = function(_config) {
        var _a;
        var attributes = (_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_OS_TYPE"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeType"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["platform"])()), _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_OS_VERSION"]] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["release"])(), _a);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"](attributes);
    };
    return OSDetectorSync;
}();
var osDetectorSync = new OSDetectorSync(); //# sourceMappingURL=OSDetectorSync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "osDetector": (()=>osDetector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$OSDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetectorSync.js [app-ssr] (ecmascript)");
;
/**
 * OSDetector detects the resources related to the operating system (OS) on
 * which the process represented by this resource is running.
 */ var OSDetector = function() {
    function OSDetector() {}
    OSDetector.prototype.detect = function(_config) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$OSDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["osDetectorSync"].detect(_config));
    };
    return OSDetector;
}();
var osDetector = new OSDetector(); //# sourceMappingURL=OSDetector.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetectorSync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "processDetectorSync": (()=>processDetectorSync)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/os [external] (os, cjs)");
var __read = this && this.__read || function(o, n) {
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
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
/**
 * ProcessDetectorSync will be used to detect the resources related current process running
 * and being instrumented from the NodeJS Process module.
 */ var ProcessDetectorSync = function() {
    function ProcessDetectorSync() {}
    ProcessDetectorSync.prototype.detect = function(_config) {
        var _a;
        var attributes = (_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_PID"]] = process.pid, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_EXECUTABLE_NAME"]] = process.title, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_EXECUTABLE_PATH"]] = process.execPath, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_COMMAND_ARGS"]] = __spreadArray(__spreadArray([
            process.argv[0]
        ], __read(process.execArgv), false), __read(process.argv.slice(1)), false), _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_VERSION"]] = process.versions.node, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_NAME"]] = 'nodejs', _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION"]] = 'Node.js', _a);
        if (process.argv.length > 1) {
            attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_COMMAND"]] = process.argv[1];
        }
        try {
            var userInfo = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["userInfo"])();
            attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_PROCESS_OWNER"]] = userInfo.username;
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug("error obtaining process owner: " + e);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"](attributes);
    };
    return ProcessDetectorSync;
}();
var processDetectorSync = new ProcessDetectorSync(); //# sourceMappingURL=ProcessDetectorSync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "processDetector": (()=>processDetector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ProcessDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetectorSync.js [app-ssr] (ecmascript)");
;
/**
 * ProcessDetector will be used to detect the resources related current process running
 * and being instrumented from the NodeJS Process module.
 */ var ProcessDetector = function() {
    function ProcessDetector() {}
    ProcessDetector.prototype.detect = function(config) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ProcessDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processDetectorSync"].detect(config));
    };
    return ProcessDetector;
}();
var processDetector = new ProcessDetector(); //# sourceMappingURL=ProcessDetector.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ServiceInstanceIdDetectorSync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "serviceInstanceIdDetectorSync": (()=>serviceInstanceIdDetectorSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
/**
 * ServiceInstanceIdDetectorSync detects the resources related to the service instance ID.
 */ var ServiceInstanceIdDetectorSync = function() {
    function ServiceInstanceIdDetectorSync() {}
    ServiceInstanceIdDetectorSync.prototype.detect = function(_config) {
        var _a;
        var attributes = (_a = {}, _a[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$resource$2f$SemanticResourceAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEMRESATTRS_SERVICE_INSTANCE_ID"]] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(), _a);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"](attributes);
    };
    return ServiceInstanceIdDetectorSync;
}();
var serviceInstanceIdDetectorSync = new ServiceInstanceIdDetectorSync(); //# sourceMappingURL=ServiceInstanceIdDetectorSync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "isPromiseLike": (()=>isPromiseLike)
});
var isPromiseLike = function(val) {
    return val !== null && typeof val === 'object' && typeof val.then === 'function';
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detect-resources.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s({
    "detectResources": (()=>detectResources),
    "detectResourcesSync": (()=>detectResourcesSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/utils.js [app-ssr] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(_)try {
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
};
;
;
;
var detectResources = function(config) {
    if (config === void 0) {
        config = {};
    }
    return __awaiter(void 0, void 0, void 0, function() {
        var resources;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        Promise.all((config.detectors || []).map(function(d) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var resource, e_1;
                                return __generator(this, function(_a) {
                                    switch(_a.label){
                                        case 0:
                                            _a.trys.push([
                                                0,
                                                2,
                                                ,
                                                3
                                            ]);
                                            return [
                                                4 /*yield*/ ,
                                                d.detect(config)
                                            ];
                                        case 1:
                                            resource = _a.sent();
                                            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug(d.constructor.name + " found resource.", resource);
                                            return [
                                                2 /*return*/ ,
                                                resource
                                            ];
                                        case 2:
                                            e_1 = _a.sent();
                                            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug(d.constructor.name + " failed: " + e_1.message);
                                            return [
                                                2 /*return*/ ,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"].empty()
                                            ];
                                        case 3:
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            });
                        }))
                    ];
                case 1:
                    resources = _a.sent();
                    // Future check if verbose logging is enabled issue #1903
                    logResources(resources);
                    return [
                        2 /*return*/ ,
                        resources.reduce(function(acc, resource) {
                            return acc.merge(resource);
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"].empty())
                    ];
            }
        });
    });
};
var detectResourcesSync = function(config) {
    var _a;
    if (config === void 0) {
        config = {};
    }
    var resources = ((_a = config.detectors) !== null && _a !== void 0 ? _a : []).map(function(d) {
        try {
            var resourceOrPromise_1 = d.detect(config);
            var resource_1;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromiseLike"])(resourceOrPromise_1)) {
                var createPromise = function() {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var resolvedResource;
                        var _a;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    return [
                                        4 /*yield*/ ,
                                        resourceOrPromise_1
                                    ];
                                case 1:
                                    resolvedResource = _b.sent();
                                    return [
                                        4 /*yield*/ ,
                                        (_a = resolvedResource.waitForAsyncAttributes) === null || _a === void 0 ? void 0 : _a.call(resolvedResource)
                                    ];
                                case 2:
                                    _b.sent();
                                    return [
                                        2 /*return*/ ,
                                        resolvedResource.attributes
                                    ];
                            }
                        });
                    });
                };
                resource_1 = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"]({}, createPromise());
            } else {
                resource_1 = resourceOrPromise_1;
            }
            if (resource_1.waitForAsyncAttributes) {
                void resource_1.waitForAsyncAttributes().then(function() {
                    return __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug(d.constructor.name + " found resource.", resource_1);
                });
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].debug(d.constructor.name + " found resource.", resource_1);
            }
            return resource_1;
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error(d.constructor.name + " failed: " + e.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"].empty();
        }
    });
    var mergedResources = resources.reduce(function(acc, resource) {
        return acc.merge(resource);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"].empty());
    if (mergedResources.waitForAsyncAttributes) {
        void mergedResources.waitForAsyncAttributes().then(function() {
            // Future check if verbose logging is enabled issue #1903
            logResources(resources);
        });
    }
    return mergedResources;
};
/**
 * Writes debug information about the detected resources to the logger defined in the resource detection config, if one is provided.
 *
 * @param resources The array of {@link Resource} that should be logged. Empty entries will be ignored.
 */ var logResources = function(resources) {
    resources.forEach(function(resource) {
        // Print only populated resources
        if (Object.keys(resource.attributes).length > 0) {
            var resourceDebugString = JSON.stringify(resource.attributes, null, 4);
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].verbose(resourceDebugString);
        }
    });
}; //# sourceMappingURL=detect-resources.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Resource": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Resource"]),
    "browserDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$BrowserDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserDetector"]),
    "browserDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$BrowserDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserDetectorSync"]),
    "defaultServiceName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultServiceName"]),
    "detectResources": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detect$2d$resources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectResources"]),
    "detectResourcesSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detect$2d$resources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectResourcesSync"]),
    "envDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$EnvDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["envDetector"]),
    "envDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$EnvDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["envDetectorSync"]),
    "hostDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$HostDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hostDetector"]),
    "hostDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$HostDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hostDetectorSync"]),
    "osDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$OSDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["osDetector"]),
    "osDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$OSDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["osDetectorSync"]),
    "processDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ProcessDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processDetector"]),
    "processDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ProcessDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processDetectorSync"]),
    "serviceInstanceIdDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ServiceInstanceIdDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serviceInstanceIdDetectorSync"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$Resource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/Resource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$platform$2f$node$2f$default$2d$service$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$BrowserDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/BrowserDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$BrowserDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/BrowserDetectorSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$EnvDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$EnvDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetectorSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$HostDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$HostDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetectorSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$OSDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$OSDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetectorSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ProcessDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ProcessDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetectorSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$ServiceInstanceIdDetectorSync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ServiceInstanceIdDetectorSync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detect$2d$resources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/detect-resources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Resource": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Resource"]),
    "browserDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["browserDetector"]),
    "browserDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["browserDetectorSync"]),
    "defaultServiceName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["defaultServiceName"]),
    "detectResources": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["detectResources"]),
    "detectResourcesSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["detectResourcesSync"]),
    "envDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["envDetector"]),
    "envDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["envDetectorSync"]),
    "hostDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hostDetector"]),
    "hostDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hostDetectorSync"]),
    "osDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["osDetector"]),
    "osDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["osDetectorSync"]),
    "processDetector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["processDetector"]),
    "processDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["processDetectorSync"]),
    "serviceInstanceIdDetectorSync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serviceInstanceIdDetectorSync"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=79789_34ace970._.js.map