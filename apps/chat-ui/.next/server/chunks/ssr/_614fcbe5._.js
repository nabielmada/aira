module.exports = {

"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/apps/chat-ui/node_modules/@formatjs/fast-memoize/lib/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//
// Main
//
__turbopack_context__.s({
    "memoize": (()=>memoize),
    "strategies": (()=>strategies)
});
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function() {
    return JSON.stringify(arguments);
};
//
// Cache
//
var ObjectWithoutPrototypeCache = function() {
    function ObjectWithoutPrototypeCache() {
        this.cache = Object.create(null);
    }
    ObjectWithoutPrototypeCache.prototype.get = function(key) {
        return this.cache[key];
    };
    ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
        this.cache[key] = value;
    };
    return ObjectWithoutPrototypeCache;
}();
var cacheDefault = {
    create: function create() {
        return new ObjectWithoutPrototypeCache();
    }
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
};
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorKind": (()=>ErrorKind)
});
var ErrorKind;
(function(ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */ ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */ ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */ ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */ ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */ ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */ ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */ ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */ ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */ ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */ ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */ ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */ ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */ ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */ ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */ ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */ ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */ ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SKELETON_TYPE": (()=>SKELETON_TYPE),
    "TYPE": (()=>TYPE),
    "createLiteralElement": (()=>createLiteralElement),
    "createNumberElement": (()=>createNumberElement),
    "isArgumentElement": (()=>isArgumentElement),
    "isDateElement": (()=>isDateElement),
    "isDateTimeSkeleton": (()=>isDateTimeSkeleton),
    "isLiteralElement": (()=>isLiteralElement),
    "isNumberElement": (()=>isNumberElement),
    "isNumberSkeleton": (()=>isNumberSkeleton),
    "isPluralElement": (()=>isPluralElement),
    "isPoundElement": (()=>isPoundElement),
    "isSelectElement": (()=>isSelectElement),
    "isTagElement": (()=>isTagElement),
    "isTimeElement": (()=>isTimeElement)
});
var TYPE;
(function(TYPE) {
    /**
     * Raw text
     */ TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */ TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */ TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */ TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */ TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */ TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */ TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */ TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */ TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function(SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style
    };
}
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// @generated from regex-gen.ts
__turbopack_context__.s({
    "SPACE_SEPARATOR_REGEX": (()=>SPACE_SEPARATOR_REGEX),
    "WHITE_SPACE_REGEX": (()=>WHITE_SPACE_REGEX)
});
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */ __turbopack_context__.s({
    "parseDateTimeSkeleton": (()=>parseDateTimeSkeleton)
});
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function(match) {
        var len = match.length;
        switch(match[0]){
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = [
                    'numeric',
                    '2-digit',
                    'short',
                    'long',
                    'narrow'
                ][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = [
                    'short',
                    'long',
                    'narrow',
                    'short'
                ][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = [
                    'short',
                    'long',
                    'narrow',
                    'short'
                ][len - 4];
                break;
            // Period
            case 'a':
                result.hour12 = true;
                break;
            case 'b':
            case 'B':
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            // Second
            case 's':
                result.second = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z':
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z':
            case 'O':
            case 'v':
            case 'V':
            case 'X':
            case 'x':
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// @generated from regex-gen.ts
__turbopack_context__.s({
    "WHITE_SPACE_REGEX": (()=>WHITE_SPACE_REGEX)
});
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseNumberSkeleton": (()=>parseNumberSkeleton),
    "parseNumberSkeletonFromString": (()=>parseNumberSkeletonFromString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js [app-ssr] (ecmascript)");
;
;
function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton.split(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHITE_SPACE_REGEX"]).filter(function(x) {
        return x.length > 0;
    });
    var tokens = [];
    for(var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++){
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for(var _a = 0, options_1 = options; _a < options_1.length; _a++){
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({
            stem: stem,
            options: options
        });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    } else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        } else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        } else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        } else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch(str){
        case 'sign-auto':
            return {
                signDisplay: 'auto'
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting'
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always'
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting'
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero'
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting'
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never'
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering'
        };
        stem = stem.slice(2);
    } else if (stem[0] === 'E') {
        result = {
            notation: 'scientific'
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        } else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
function parseNumberSkeleton(tokens) {
    var result = {};
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        switch(token.stem){
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
                    notation: 'scientific'
                }), token.options.reduce(function(all, opt) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, all), parseNotationOptions(opt));
                }, {}));
                continue;
            case 'engineering':
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
                    notation: 'engineering'
                }), token.options.reduce(function(all, opt) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, all), parseNotationOptions(opt));
                }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            case 'rounding-mode-floor':
                result.roundingMode = 'floor';
                continue;
            case 'rounding-mode-ceiling':
                result.roundingMode = 'ceil';
                continue;
            case 'rounding-mode-down':
                result.roundingMode = 'trunc';
                continue;
            case 'rounding-mode-up':
                result.roundingMode = 'expand';
                continue;
            case 'rounding-mode-half-even':
                result.roundingMode = 'halfEven';
                continue;
            case 'rounding-mode-half-down':
                result.roundingMode = 'halfTrunc';
                continue;
            case 'rounding-mode-half-up':
                result.roundingMode = 'halfExpand';
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    } else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    } else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                } else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                } else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                } else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
                    trailingZeroDisplay: 'stripIfInteger'
                });
            } else if (opt) {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-ssr] (ecmascript)");
;
;
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// @generated from time-data-gen.ts
// prettier-ignore  
__turbopack_context__.s({
    "timeData": (()=>timeData)
});
var timeData = {
    "001": [
        "H",
        "h"
    ],
    "419": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AS": [
        "h",
        "H"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "AX": [
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BI": [
        "H",
        "h"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "BO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "BQ": [
        "H"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BT": [
        "h",
        "H"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BY": [
        "H",
        "h"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CL": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CP": [
        "H"
    ],
    "CR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CU": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "CW": [
        "H",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CZ": [
        "H"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "DK": [
        "H"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EC": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "FI": [
        "H"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FO": [
        "H",
        "h"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GH": [
        "h",
        "H"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GL": [
        "H",
        "h"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GT": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HN": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "HU": [
        "H",
        "h"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ID": [
        "H"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IN": [
        "h",
        "H"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "IS": [
        "H"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JP": [
        "H",
        "K",
        "h"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LS": [
        "h",
        "H"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MG": [
        "H",
        "h"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ML": [
        "H"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MT": [
        "H",
        "h"
    ],
    "MU": [
        "H",
        "h"
    ],
    "MV": [
        "H",
        "h"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MX": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NE": [
        "H"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NI": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "NO": [
        "H",
        "h"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "PL": [
        "H",
        "h"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "PW": [
        "h",
        "H"
    ],
    "PY": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "RU": [
        "H"
    ],
    "RW": [
        "H",
        "h"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SE": [
        "H"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "SO": [
        "h",
        "H"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "SV": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TH": [
        "H",
        "h"
    ],
    "TJ": [
        "H",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TM": [
        "H",
        "h"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UY": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VN": [
        "H",
        "h"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "WS": [
        "h",
        "H"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZW": [
        "H",
        "h"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-HK": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-IL": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "en-MY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ]
};
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBestPattern": (()=>getBestPattern)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js [app-ssr] (ecmascript)");
;
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for(var patternPos = 0; patternPos < skeleton.length; patternPos++){
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while(patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar){
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while(dayPeriodLen-- > 0){
                skeletonCopy += dayPeriodChar;
            }
            while(hourLen-- > 0){
                skeletonCopy = hourChar + skeletonCopy;
            }
        } else if (patternChar === 'J') {
            skeletonCopy += 'H';
        } else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */ function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined && // @ts-ignore hourCycle(s) is not identified yet
    locale.hourCycles && // @ts-ignore
    locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch(hourCycle){
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeData"][regionTag || ''] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeData"][languageTag || ''] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeData"]["".concat(languageTag, "-001")] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeData"]['001'];
    return hourCycles[0];
}
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Parser": (()=>Parser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$date$2d$time$2d$pattern$2d$generator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js [app-ssr] (ecmascript)");
var _a;
;
;
;
;
;
;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPACE_SEPARATOR_REGEX"].source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPACE_SEPARATOR_REGEX"].source, "*$"));
function createLocation(start, end) {
    return {
        start: start,
        end: end
    };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger ? Number.isSafeInteger : function(n) {
    return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 0x1fffffffffffff;
};
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */ REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
} catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith ? function startsWith(s, search, position) {
    return s.startsWith(search, position);
} : function startsWith(s, search, position) {
    return s.slice(position, position + search.length) === search;
};
var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint : function fromCodePoint() {
    var codePoints = [];
    for(var _i = 0; _i < arguments.length; _i++){
        codePoints[_i] = arguments[_i];
    }
    var elements = '';
    var length = codePoints.length;
    var i = 0;
    var code;
    while(length > i){
        code = codePoints[i++];
        if (code > 0x10ffff) throw RangeError(code + ' is not a valid code point');
        elements += code < 0x10000 ? String.fromCharCode(code) : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00);
    }
    return elements;
};
var fromEntries = // native
hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
    var obj = {};
    for(var _i = 0, entries_1 = entries; _i < entries_1.length; _i++){
        var _a = entries_1[_i], k = _a[0], v = _a[1];
        obj[k] = v;
    }
    return obj;
};
var codePointAt = hasNativeCodePointAt ? function codePointAt(s, index) {
    return s.codePointAt(index);
} : function codePointAt(s, index) {
    var size = s.length;
    if (index < 0 || index >= size) {
        return undefined;
    }
    var first = s.charCodeAt(index);
    var second;
    return first < 0xd800 || first > 0xdbff || index + 1 === size || (second = s.charCodeAt(index + 1)) < 0xdc00 || second > 0xdfff ? first : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
};
var trimStart = hasTrimStart ? function trimStart(s) {
    return s.trimStart();
} : function trimStart(s) {
    return s.replace(SPACE_SEPARATOR_START_REGEX, '');
};
var trimEnd = hasTrimEnd ? function trimEnd(s) {
    return s.trimEnd();
} : function trimEnd(s) {
    return s.replace(SPACE_SEPARATOR_END_REGEX, '');
};
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
} else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while(true){
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = function() {
    function Parser(message, options) {
        if (options === void 0) {
            options = {};
        }
        this.message = message;
        this.position = {
            offset: 0,
            line: 1,
            column: 1
        };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function() {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function(nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while(!this.isEOF()){
            var char = this.char();
            if (char === 123 /* `{` */ ) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            } else if (char === 125 /* `}` */  && nestingLevel > 0) {
                break;
            } else if (char === 35 /* `#` */  && (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].pound,
                    location: createLocation(position, this.clonePosition())
                });
            } else if (char === 60 /* `<` */  && !this.ignoreTag && this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                } else {
                    return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            } else if (char === 60 /* `<` */  && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            } else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return {
            val: elements,
            err: null
        };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */ Parser.prototype.parseTag = function(nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition())
                },
                err: null
            };
        } else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition())
                    },
                    err: null
                };
            } else {
                return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        } else {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */ Parser.prototype.parseTagName = function() {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while(!this.isEOF() && _isPotentialElementNameChar(this.char())){
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function(nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while(true){
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].literal,
                value: value,
                location: location
            },
            err: null
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function() {
        if (!this.isEOF() && this.char() === 60 /* `<` */  && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
        !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */ Parser.prototype.tryParseQuote = function(parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */ ) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch(this.peek()){
            case 39 /* `'` */ :
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [
            this.char()
        ]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while(!this.isEOF()){
            var ch = this.char();
            if (ch === 39 /* `'` */ ) {
                if (this.peek() === 39 /* `'` */ ) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                } else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            } else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function(nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */  || ch === 123 /* `{` */  || ch === 35 /* `#` */  && (parentArgType === 'plural' || parentArgType === 'selectordinal') || ch === 125 /* `}` */  && nestingLevel > 0) {
            return null;
        } else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function(nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */ ) {
            this.bump();
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch(this.char()){
            // Simple argument: `{name}`
            case 125 /* `}` */ :
                {
                    this.bump(); // `}`
                    return {
                        val: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].argument,
                            // value does not include the opening and closing braces.
                            value: value,
                            location: createLocation(openingBracePosition, this.clonePosition())
                        },
                        err: null
                    };
                }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */ :
                {
                    this.bump(); // `,`
                    this.bumpSpace();
                    if (this.isEOF()) {
                        return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                    }
                    return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
                }
            default:
                return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */ Parser.prototype.parseIdentifierIfPossible = function() {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return {
            value: value,
            location: location
        };
    };
    Parser.prototype.parseArgumentOptions = function(nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch(argType){
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time':
                {
                    // Parse this range:
                    // {name, number, style}
                    //              ^-------^
                    this.bumpSpace();
                    var styleAndLocation = null;
                    if (this.bumpIf(',')) {
                        this.bumpSpace();
                        var styleStartPosition = this.clonePosition();
                        var result = this.parseSimpleArgStyleIfPossible();
                        if (result.err) {
                            return result;
                        }
                        var style = trimEnd(result.val);
                        if (style.length === 0) {
                            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                        }
                        var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                        styleAndLocation = {
                            style: style,
                            styleLocation: styleLocation
                        };
                    }
                    var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                    if (argCloseResult.err) {
                        return argCloseResult;
                    }
                    var location_1 = createLocation(openingBracePosition, this.clonePosition());
                    // Extract style or skeleton
                    if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                        // Skeleton starts with `::`.
                        var skeleton = trimStart(styleAndLocation.style.slice(2));
                        if (argType === 'number') {
                            var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                            if (result.err) {
                                return result;
                            }
                            return {
                                val: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].number,
                                    value: value,
                                    location: location_1,
                                    style: result.val
                                },
                                err: null
                            };
                        } else {
                            if (skeleton.length === 0) {
                                return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_DATE_TIME_SKELETON, location_1);
                            }
                            var dateTimePattern = skeleton;
                            // Get "best match" pattern only if locale is passed, if not, let it
                            // pass as-is where `parseDateTimeSkeleton()` will throw an error
                            // for unsupported patterns.
                            if (this.locale) {
                                dateTimePattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$date$2d$time$2d$pattern$2d$generator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBestPattern"])(skeleton, this.locale);
                            }
                            var style = {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SKELETON_TYPE"].dateTime,
                                pattern: dateTimePattern,
                                location: styleAndLocation.styleLocation,
                                parsedOptions: this.shouldParseSkeletons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateTimeSkeleton"])(dateTimePattern) : {}
                            };
                            var type = argType === 'date' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].date : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].time;
                            return {
                                val: {
                                    type: type,
                                    value: value,
                                    location: location_1,
                                    style: style
                                },
                                err: null
                            };
                        }
                    }
                    // Regular style or no style.
                    return {
                        val: {
                            type: argType === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].number : argType === 'date' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].date : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].time,
                            value: value,
                            location: location_1,
                            style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null
                        },
                        err: null
                    };
                }
            case 'plural':
            case 'selectordinal':
            case 'select':
                {
                    // Parse this range:
                    // {name, plural, options}
                    //              ^---------^
                    var typeEndPosition_1 = this.clonePosition();
                    this.bumpSpace();
                    if (!this.bumpIf(',')) {
                        return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, typeEndPosition_1)));
                    }
                    this.bumpSpace();
                    // Parse offset:
                    // {name, plural, offset:1, options}
                    //                ^-----^
                    //
                    // or the first option:
                    //
                    // {name, plural, one {...} other {...}}
                    //                ^--^
                    var identifierAndLocation = this.parseIdentifierIfPossible();
                    var pluralOffset = 0;
                    if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                        if (!this.bumpIf(':')) {
                            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                        }
                        this.bumpSpace();
                        var result = this.tryParseDecimalInteger(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                        if (result.err) {
                            return result;
                        }
                        // Parse another identifier for option parsing
                        this.bumpSpace();
                        identifierAndLocation = this.parseIdentifierIfPossible();
                        pluralOffset = result.val;
                    }
                    var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                    if (optionsResult.err) {
                        return optionsResult;
                    }
                    var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                    if (argCloseResult.err) {
                        return argCloseResult;
                    }
                    var location_2 = createLocation(openingBracePosition, this.clonePosition());
                    if (argType === 'select') {
                        return {
                            val: {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].select,
                                value: value,
                                options: fromEntries(optionsResult.val),
                                location: location_2
                            },
                            err: null
                        };
                    } else {
                        return {
                            val: {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"].plural,
                                value: value,
                                options: fromEntries(optionsResult.val),
                                offset: pluralOffset,
                                pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                                location: location_2
                            },
                            err: null
                        };
                    }
                }
            default:
                return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function(openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */ ) {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return {
            val: true,
            err: null
        };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */ Parser.prototype.parseSimpleArgStyleIfPossible = function() {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while(!this.isEOF()){
            var ch = this.char();
            switch(ch){
                case 39 /* `'` */ :
                    {
                        // Treat apostrophe as quoting but include it in the style part.
                        // Find the end of the quoted literal text.
                        this.bump();
                        var apostrophePosition = this.clonePosition();
                        if (!this.bumpUntil("'")) {
                            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                        }
                        this.bump();
                        break;
                    }
                case 123 /* `{` */ :
                    {
                        nestedBraces += 1;
                        this.bump();
                        break;
                    }
                case 125 /* `}` */ :
                    {
                        if (nestedBraces > 0) {
                            nestedBraces -= 1;
                        } else {
                            return {
                                val: this.message.slice(startPosition.offset, this.offset()),
                                err: null
                            };
                        }
                        break;
                    }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function(skeleton, location) {
        var tokens = [];
        try {
            tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNumberSkeletonFromString"])(skeleton);
        } catch (e) {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SKELETON_TYPE"].number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNumberSkeleton"])(tokens) : {}
            },
            err: null
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */ Parser.prototype.tryParsePluralOrSelectOptions = function(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while(true){
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                } else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].DUPLICATE_SELECT_ARGUMENT_SELECTOR : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition())
                }
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            _a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location;
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_SELECT_ARGUMENT_SELECTOR : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"].MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return {
            val: options,
            err: null
        };
    };
    Parser.prototype.tryParseDecimalInteger = function(expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {} else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while(!this.isEOF()){
            var ch = this.char();
            if (ch >= 48 /* `0` */  && ch <= 57 /* `9` */ ) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            } else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return {
            val: decimal,
            err: null
        };
    };
    Parser.prototype.offset = function() {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function() {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function() {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */ Parser.prototype.char = function() {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function(kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location
            }
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */ Parser.prototype.bump = function() {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */ ) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        } else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */ Parser.prototype.bumpIf = function(prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for(var i = 0; i < prefix.length; i++){
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */ Parser.prototype.bumpUntil = function(pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        } else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */ Parser.prototype.bumpTo = function(targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while(true){
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */ Parser.prototype.bumpSpace = function() {
        while(!this.isEOF() && _isWhiteSpace(this.char())){
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */ Parser.prototype.peek = function() {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}();
;
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */ function _isAlpha(codepoint) {
    return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */ 
}
/** See `parseTag` function docs. */ function _isPotentialElementNameChar(c) {
    return c === 45 /* '-' */  || c === 46 /* '.' */  || c >= 48 && c <= 57 || c === 95 /* '_' */  || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 0xb7 || c >= 0xc0 && c <= 0xd6 || c >= 0xd8 && c <= 0xf6 || c >= 0xf8 && c <= 0x37d || c >= 0x37f && c <= 0x1fff || c >= 0x200c && c <= 0x200d || c >= 0x203f && c <= 0x2040 || c >= 0x2070 && c <= 0x218f || c >= 0x2c00 && c <= 0x2fef || c >= 0x3001 && c <= 0xd7ff || c >= 0xf900 && c <= 0xfdcf || c >= 0xfdf0 && c <= 0xfffd || c >= 0x10000 && c <= 0xeffff;
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */ function _isWhiteSpace(c) {
    return c >= 0x0009 && c <= 0x000d || c === 0x0020 || c === 0x0085 || c >= 0x200e && c <= 0x200f || c === 0x2028 || c === 0x2029;
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */ function _isPatternSyntax(c) {
    return c >= 0x0021 && c <= 0x0023 || c === 0x0024 || c >= 0x0025 && c <= 0x0027 || c === 0x0028 || c === 0x0029 || c === 0x002a || c === 0x002b || c === 0x002c || c === 0x002d || c >= 0x002e && c <= 0x002f || c >= 0x003a && c <= 0x003b || c >= 0x003c && c <= 0x003e || c >= 0x003f && c <= 0x0040 || c === 0x005b || c === 0x005c || c === 0x005d || c === 0x005e || c === 0x0060 || c === 0x007b || c === 0x007c || c === 0x007d || c === 0x007e || c === 0x00a1 || c >= 0x00a2 && c <= 0x00a5 || c === 0x00a6 || c === 0x00a7 || c === 0x00a9 || c === 0x00ab || c === 0x00ac || c === 0x00ae || c === 0x00b0 || c === 0x00b1 || c === 0x00b6 || c === 0x00bb || c === 0x00bf || c === 0x00d7 || c === 0x00f7 || c >= 0x2010 && c <= 0x2015 || c >= 0x2016 && c <= 0x2017 || c === 0x2018 || c === 0x2019 || c === 0x201a || c >= 0x201b && c <= 0x201c || c === 0x201d || c === 0x201e || c === 0x201f || c >= 0x2020 && c <= 0x2027 || c >= 0x2030 && c <= 0x2038 || c === 0x2039 || c === 0x203a || c >= 0x203b && c <= 0x203e || c >= 0x2041 && c <= 0x2043 || c === 0x2044 || c === 0x2045 || c === 0x2046 || c >= 0x2047 && c <= 0x2051 || c === 0x2052 || c === 0x2053 || c >= 0x2055 && c <= 0x205e || c >= 0x2190 && c <= 0x2194 || c >= 0x2195 && c <= 0x2199 || c >= 0x219a && c <= 0x219b || c >= 0x219c && c <= 0x219f || c === 0x21a0 || c >= 0x21a1 && c <= 0x21a2 || c === 0x21a3 || c >= 0x21a4 && c <= 0x21a5 || c === 0x21a6 || c >= 0x21a7 && c <= 0x21ad || c === 0x21ae || c >= 0x21af && c <= 0x21cd || c >= 0x21ce && c <= 0x21cf || c >= 0x21d0 && c <= 0x21d1 || c === 0x21d2 || c === 0x21d3 || c === 0x21d4 || c >= 0x21d5 && c <= 0x21f3 || c >= 0x21f4 && c <= 0x22ff || c >= 0x2300 && c <= 0x2307 || c === 0x2308 || c === 0x2309 || c === 0x230a || c === 0x230b || c >= 0x230c && c <= 0x231f || c >= 0x2320 && c <= 0x2321 || c >= 0x2322 && c <= 0x2328 || c === 0x2329 || c === 0x232a || c >= 0x232b && c <= 0x237b || c === 0x237c || c >= 0x237d && c <= 0x239a || c >= 0x239b && c <= 0x23b3 || c >= 0x23b4 && c <= 0x23db || c >= 0x23dc && c <= 0x23e1 || c >= 0x23e2 && c <= 0x2426 || c >= 0x2427 && c <= 0x243f || c >= 0x2440 && c <= 0x244a || c >= 0x244b && c <= 0x245f || c >= 0x2500 && c <= 0x25b6 || c === 0x25b7 || c >= 0x25b8 && c <= 0x25c0 || c === 0x25c1 || c >= 0x25c2 && c <= 0x25f7 || c >= 0x25f8 && c <= 0x25ff || c >= 0x2600 && c <= 0x266e || c === 0x266f || c >= 0x2670 && c <= 0x2767 || c === 0x2768 || c === 0x2769 || c === 0x276a || c === 0x276b || c === 0x276c || c === 0x276d || c === 0x276e || c === 0x276f || c === 0x2770 || c === 0x2771 || c === 0x2772 || c === 0x2773 || c === 0x2774 || c === 0x2775 || c >= 0x2794 && c <= 0x27bf || c >= 0x27c0 && c <= 0x27c4 || c === 0x27c5 || c === 0x27c6 || c >= 0x27c7 && c <= 0x27e5 || c === 0x27e6 || c === 0x27e7 || c === 0x27e8 || c === 0x27e9 || c === 0x27ea || c === 0x27eb || c === 0x27ec || c === 0x27ed || c === 0x27ee || c === 0x27ef || c >= 0x27f0 && c <= 0x27ff || c >= 0x2800 && c <= 0x28ff || c >= 0x2900 && c <= 0x2982 || c === 0x2983 || c === 0x2984 || c === 0x2985 || c === 0x2986 || c === 0x2987 || c === 0x2988 || c === 0x2989 || c === 0x298a || c === 0x298b || c === 0x298c || c === 0x298d || c === 0x298e || c === 0x298f || c === 0x2990 || c === 0x2991 || c === 0x2992 || c === 0x2993 || c === 0x2994 || c === 0x2995 || c === 0x2996 || c === 0x2997 || c === 0x2998 || c >= 0x2999 && c <= 0x29d7 || c === 0x29d8 || c === 0x29d9 || c === 0x29da || c === 0x29db || c >= 0x29dc && c <= 0x29fb || c === 0x29fc || c === 0x29fd || c >= 0x29fe && c <= 0x2aff || c >= 0x2b00 && c <= 0x2b2f || c >= 0x2b30 && c <= 0x2b44 || c >= 0x2b45 && c <= 0x2b46 || c >= 0x2b47 && c <= 0x2b4c || c >= 0x2b4d && c <= 0x2b73 || c >= 0x2b74 && c <= 0x2b75 || c >= 0x2b76 && c <= 0x2b95 || c === 0x2b96 || c >= 0x2b97 && c <= 0x2bff || c >= 0x2e00 && c <= 0x2e01 || c === 0x2e02 || c === 0x2e03 || c === 0x2e04 || c === 0x2e05 || c >= 0x2e06 && c <= 0x2e08 || c === 0x2e09 || c === 0x2e0a || c === 0x2e0b || c === 0x2e0c || c === 0x2e0d || c >= 0x2e0e && c <= 0x2e16 || c === 0x2e17 || c >= 0x2e18 && c <= 0x2e19 || c === 0x2e1a || c === 0x2e1b || c === 0x2e1c || c === 0x2e1d || c >= 0x2e1e && c <= 0x2e1f || c === 0x2e20 || c === 0x2e21 || c === 0x2e22 || c === 0x2e23 || c === 0x2e24 || c === 0x2e25 || c === 0x2e26 || c === 0x2e27 || c === 0x2e28 || c === 0x2e29 || c >= 0x2e2a && c <= 0x2e2e || c === 0x2e2f || c >= 0x2e30 && c <= 0x2e39 || c >= 0x2e3a && c <= 0x2e3b || c >= 0x2e3c && c <= 0x2e3f || c === 0x2e40 || c === 0x2e41 || c === 0x2e42 || c >= 0x2e43 && c <= 0x2e4f || c >= 0x2e50 && c <= 0x2e51 || c === 0x2e52 || c >= 0x2e53 && c <= 0x2e7f || c >= 0x3001 && c <= 0x3003 || c === 0x3008 || c === 0x3009 || c === 0x300a || c === 0x300b || c === 0x300c || c === 0x300d || c === 0x300e || c === 0x300f || c === 0x3010 || c === 0x3011 || c >= 0x3012 && c <= 0x3013 || c === 0x3014 || c === 0x3015 || c === 0x3016 || c === 0x3017 || c === 0x3018 || c === 0x3019 || c === 0x301a || c === 0x301b || c === 0x301c || c === 0x301d || c >= 0x301e && c <= 0x301f || c === 0x3020 || c === 0x3030 || c === 0xfd3e || c === 0xfd3f || c >= 0xfe45 && c <= 0xfe46;
}
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/manipulator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hoistSelectors": (()=>hoistSelectors),
    "isStructurallySame": (()=>isStructurallySame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
;
;
function cloneDeep(obj) {
    if (Array.isArray(obj)) {
        // @ts-expect-error meh
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([], obj.map(cloneDeep), true);
    }
    if (obj !== null && typeof obj === 'object') {
        // @ts-expect-error meh
        return Object.keys(obj).reduce(function(cloned, k) {
            // @ts-expect-error meh
            cloned[k] = cloneDeep(obj[k]);
            return cloned;
        }, {});
    }
    return obj;
}
function hoistPluralOrSelectElement(ast, el, positionToInject) {
    // pull this out of the ast and move it to the top
    var cloned = cloneDeep(el);
    var options = cloned.options;
    cloned.options = Object.keys(options).reduce(function(all, k) {
        var newValue = hoistSelectors((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([], ast.slice(0, positionToInject), true), options[k].value, true), ast.slice(positionToInject + 1), true));
        all[k] = {
            value: newValue
        };
        return all;
    }, {});
    return cloned;
}
function isPluralOrSelectElement(el) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el);
}
function findPluralOrSelectElement(ast) {
    return !!ast.find(function(el) {
        if (isPluralOrSelectElement(el)) {
            return true;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            return findPluralOrSelectElement(el.children);
        }
        return false;
    });
}
function hoistSelectors(ast) {
    for(var i = 0; i < ast.length; i++){
        var el = ast[i];
        if (isPluralOrSelectElement(el)) {
            return [
                hoistPluralOrSelectElement(ast, el, i)
            ];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el) && findPluralOrSelectElement([
            el
        ])) {
            throw new Error('Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option');
        }
    }
    return ast;
}
/**
 * Collect all variables in an AST to Record<string, TYPE>
 * @param ast AST to collect variables from
 * @param vars Record of variable name to variable type
 */ function collectVariables(ast, vars) {
    if (vars === void 0) {
        vars = new Map();
    }
    ast.forEach(function(el) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArgumentElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTimeElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberElement"])(el)) {
            if (el.value in vars && vars.get(el.value) !== el.type) {
                throw new Error("Variable ".concat(el.value, " has conflicting types"));
            }
            vars.set(el.value, el.type);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el)) {
            vars.set(el.value, el.type);
            Object.keys(el.options).forEach(function(k) {
                collectVariables(el.options[k].value, vars);
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            vars.set(el.value, el.type);
            collectVariables(el.children, vars);
        }
    });
}
function isStructurallySame(a, b) {
    var aVars = new Map();
    var bVars = new Map();
    collectVariables(a, aVars);
    collectVariables(b, bVars);
    if (aVars.size !== bVars.size) {
        return {
            success: false,
            error: new Error("Different number of variables: [".concat(Array.from(aVars.keys()).join(', '), "] vs [").concat(Array.from(bVars.keys()).join(', '), "]"))
        };
    }
    return Array.from(aVars.entries()).reduce(function(result, _a) {
        var key = _a[0], type = _a[1];
        if (!result.success) {
            return result;
        }
        var bType = bVars.get(key);
        if (bType == null) {
            return {
                success: false,
                error: new Error("Missing variable ".concat(key, " in message"))
            };
        }
        if (bType !== type) {
            return {
                success: false,
                error: new Error("Variable ".concat(key, " has conflicting types: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"][type], " vs ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE"][bType]))
            };
        }
        return result;
    }, {
        success: true
    });
}
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_Parser": (()=>_Parser),
    "parse": (()=>parse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$manipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/manipulator.js [app-ssr] (ecmascript)");
;
;
;
;
function pruneLocation(els) {
    els.forEach(function(el) {
        delete el.location;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el)) {
            for(var k in el.options){
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberSkeleton"])(el.style)) {
            delete el.style.location;
        } else if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTimeElement"])(el)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style)) {
            delete el.style.location;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) {
        opts = {};
    }
    opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        shouldParseSkeletons: true,
        requiresOtherClause: true
    }, opts);
    var result = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](message, opts).parse();
    if (result.err) {
        var error = SyntaxError(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorKind"][result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}
;
var _Parser = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"];
;
}}),
"[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$manipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/manipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorCode": (()=>ErrorCode),
    "FormatError": (()=>FormatError),
    "InvalidValueError": (()=>InvalidValueError),
    "InvalidValueTypeError": (()=>InvalidValueTypeError),
    "MissingValueError": (()=>MissingValueError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
var ErrorCode;
(function(ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function() {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error);
;
var InvalidValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError);
;
var InvalidValueTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError);
;
var MissingValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError);
;
}}),
"[project]/apps/chat-ui/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PART_TYPE": (()=>PART_TYPE),
    "formatToParts": (()=>formatToParts),
    "isFormatXMLElementFn": (()=>isFormatXMLElementFn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/intl-messageformat/lib/src/error.js [app-ssr] (ecmascript)");
;
;
var PART_TYPE;
(function(PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function(all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
            all.push(part);
        } else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, // For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value
            }
        ];
    }
    var result = [];
    for(var _i = 0, els_1 = els; _i < els_1.length; _i++){
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPoundElement"])(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue)
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingValueError"](varName, originalMessage);
        }
        var value = values[varName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArgumentElement"])(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.date[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTimeElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.time[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.number[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            if (style && style.scale) {
                value = value * (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueTypeError"](value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function(p) {
                return p.value;
            }));
            if (!Array.isArray(chunks)) {
                chunks = [
                    chunks
                ];
            }
            result.push.apply(result, chunks.map(function(c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c
                };
            }));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].MISSING_INTL_API, originalMessage);
                }
                var rule = formatters.getPluralRules(locales, {
                    type: el.pluralType
                }).select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}
}}),
"[project]/apps/chat-ui/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_context__.s({
    "IntlMessageFormat": (()=>IntlMessageFormat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/fast-memoize/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/intl-messageformat/lib/src/formatters.js [app-ssr] (ecmascript)");
;
;
;
;
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k) {
        all[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, c1[k]), c2[k] || {});
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function(all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function() {
            return {
                get: function(key) {
                    return store[key];
                },
                set: function(key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) {
        cache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
    }
    return {
        getNumberFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getDateTimeFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getPluralRules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        })
    };
}
var IntlMessageFormat = function() {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        if (locales === void 0) {
            locales = IntlMessageFormat.defaultLocale;
        }
        var _this = this;
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
        this.format = function(values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function(all, part) {
                if (!all.length || part.type !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PART_TYPE"].literal || typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                } else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function(values) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatToParts"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function() {
            var _a;
            return {
                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
            };
        };
        this.getAst = function() {
            return _this.ast;
        };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            var _a = opts || {}, formatters = _a.formatters, parseOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
                "formatters"
            ]);
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, parseOpts), {
                locale: this.resolvedLocale
            }));
        } else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function() {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function(locales) {
        if (typeof Intl.Locale === 'undefined') {
            return;
        }
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"];
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: 'currency'
            },
            percent: {
                style: 'percent'
            }
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric'
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    };
    return IntlMessageFormat;
}();
;
}}),
"[project]/apps/chat-ui/node_modules/use-intl/dist/esm/development/initializeConfig-CRD6euuK.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "I": (()=>IntlError),
    "a": (()=>IntlErrorCode),
    "b": (()=>createIntlFormatters),
    "c": (()=>createFormatter),
    "d": (()=>createCache),
    "e": (()=>createBaseTranslator),
    "f": (()=>defaultGetMessageFallback),
    "g": (()=>defaultOnError),
    "i": (()=>initializeConfig),
    "r": (()=>resolveNamespace)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/intl-messageformat/lib/src/core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@formatjs/fast-memoize/lib/index.js [app-ssr] (ecmascript)");
;
;
;
class IntlError extends Error {
    constructor(code, originalMessage){
        let message = code;
        if (originalMessage) {
            message += ': ' + originalMessage;
        }
        super(message);
        this.code = code;
        if (originalMessage) {
            this.originalMessage = originalMessage;
        }
    }
}
var IntlErrorCode = /*#__PURE__*/ function(IntlErrorCode) {
    IntlErrorCode["MISSING_MESSAGE"] = "MISSING_MESSAGE";
    IntlErrorCode["MISSING_FORMAT"] = "MISSING_FORMAT";
    IntlErrorCode["ENVIRONMENT_FALLBACK"] = "ENVIRONMENT_FALLBACK";
    IntlErrorCode["INSUFFICIENT_PATH"] = "INSUFFICIENT_PATH";
    IntlErrorCode["INVALID_MESSAGE"] = "INVALID_MESSAGE";
    IntlErrorCode["INVALID_KEY"] = "INVALID_KEY";
    IntlErrorCode["FORMATTING_ERROR"] = "FORMATTING_ERROR";
    return IntlErrorCode;
}(IntlErrorCode || {});
/**
 * `intl-messageformat` uses separate keys for `date` and `time`, but there's
 * only one native API: `Intl.DateTimeFormat`. Additionally you might want to
 * include both a time and a date in a value, therefore the separation doesn't
 * seem so useful. We offer a single `dateTime` namespace instead, but we have
 * to convert the format before `intl-messageformat` can be used.
 */ function convertFormatsToIntlMessageFormat(globalFormats, inlineFormats, timeZone) {
    const mfDateDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.date;
    const mfTimeDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.time;
    const dateTimeFormats = {
        ...globalFormats?.dateTime,
        ...inlineFormats?.dateTime
    };
    const allFormats = {
        date: {
            ...mfDateDefaults,
            ...dateTimeFormats
        },
        time: {
            ...mfTimeDefaults,
            ...dateTimeFormats
        },
        number: {
            ...globalFormats?.number,
            ...inlineFormats?.number
        }
    };
    if (timeZone) {
        // The only way to set a time zone with `intl-messageformat` is to merge it into the formats
        // https://github.com/formatjs/formatjs/blob/8256c5271505cf2606e48e3c97ecdd16ede4f1b5/packages/intl/src/message.ts#L15
        [
            'date',
            'time'
        ].forEach((property)=>{
            const formats = allFormats[property];
            for (const [key, value] of Object.entries(formats)){
                formats[key] = {
                    timeZone,
                    ...value
                };
            }
        });
    }
    return allFormats;
}
function joinPath(...parts) {
    return parts.filter(Boolean).join('.');
}
/**
 * Contains defaults that are used for all entry points into the core.
 * See also `InitializedIntlConfiguration`.
 */ function defaultGetMessageFallback(props) {
    return joinPath(props.namespace, props.key);
}
function defaultOnError(error) {
    console.error(error);
}
function createCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function createMemoCache(store) {
    return {
        create () {
            return {
                get (key) {
                    return store[key];
                },
                set (key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function memoFn(fn, cache) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(fn, {
        cache: createMemoCache(cache),
        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
    });
}
function memoConstructor(ConstructorFn, cache) {
    return memoFn((...args)=>new ConstructorFn(...args), cache);
}
function createIntlFormatters(cache) {
    const getDateTimeFormat = memoConstructor(Intl.DateTimeFormat, cache.dateTime);
    const getNumberFormat = memoConstructor(Intl.NumberFormat, cache.number);
    const getPluralRules = memoConstructor(Intl.PluralRules, cache.pluralRules);
    const getRelativeTimeFormat = memoConstructor(Intl.RelativeTimeFormat, cache.relativeTime);
    const getListFormat = memoConstructor(Intl.ListFormat, cache.list);
    const getDisplayNames = memoConstructor(Intl.DisplayNames, cache.displayNames);
    return {
        getDateTimeFormat,
        getNumberFormat,
        getPluralRules,
        getRelativeTimeFormat,
        getListFormat,
        getDisplayNames
    };
}
// Placed here for improved tree shaking. Somehow when this is placed in
// `formatters.tsx`, then it can't be shaken off from `next-intl`.
function createMessageFormatter(cache, intlFormatters) {
    const getMessageFormat = memoFn((...args)=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"](args[0], args[1], args[2], {
            formatters: intlFormatters,
            ...args[3]
        }), cache.message);
    return getMessageFormat;
}
function resolvePath(locale, messages, key, namespace) {
    const fullKey = joinPath(namespace, key);
    if (!messages) {
        throw new Error(`No messages available at \`${namespace}\`.`);
    }
    let message = messages;
    key.split('.').forEach((part)=>{
        const next = message[part];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (part == null || next == null) {
            throw new Error(`Could not resolve \`${fullKey}\` in messages for locale \`${locale}\`.`);
        }
        message = next;
    });
    return message;
}
function prepareTranslationValues(values) {
    // Workaround for https://github.com/formatjs/formatjs/issues/1467
    const transformedValues = {};
    Object.keys(values).forEach((key)=>{
        let index = 0;
        const value = values[key];
        let transformed;
        if (typeof value === 'function') {
            transformed = (chunks)=>{
                const result = value(chunks);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(result) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(result, {
                    key: key + index++
                }) : result;
            };
        } else {
            transformed = value;
        }
        transformedValues[key] = transformed;
    });
    return transformedValues;
}
function getMessagesOrError(locale, messages, namespace, onError = defaultOnError) {
    try {
        if (!messages) {
            throw new Error(`No messages were configured.`);
        }
        const retrievedMessages = namespace ? resolvePath(locale, messages, namespace) : messages;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!retrievedMessages) {
            throw new Error(`No messages for namespace \`${namespace}\` found.`);
        }
        return retrievedMessages;
    } catch (error) {
        const intlError = new IntlError(IntlErrorCode.MISSING_MESSAGE, error.message);
        onError(intlError);
        return intlError;
    }
}
function getPlainMessage(candidate, values) {
    {
        // Keep fast path in development
        if (values) return undefined;
        // Despite potentially no values being available, there can still be
        // placeholders in the message if the user has forgotten to provide
        // values. In this case we compile the message to receive an error.
        const unescapedMessage = candidate.replace(/'([{}])/gi, '$1');
        const hasPlaceholders = /<|{/.test(unescapedMessage);
        if (!hasPlaceholders) {
            return unescapedMessage;
        }
    }
}
function createBaseTranslator(config) {
    const messagesOrError = getMessagesOrError(config.locale, config.messages, config.namespace, config.onError);
    return createBaseTranslatorImpl({
        ...config,
        messagesOrError
    });
}
function createBaseTranslatorImpl({ cache, formats: globalFormats, formatters, getMessageFallback = defaultGetMessageFallback, locale, messagesOrError, namespace, onError, timeZone }) {
    const hasMessagesError = messagesOrError instanceof IntlError;
    function getFallbackFromErrorAndNotify(key, code, message) {
        const error = new IntlError(code, message);
        onError(error);
        return getMessageFallback({
            error,
            key,
            namespace
        });
    }
    function translateBaseFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Provide custom formats for numbers, dates and times. */ formats) {
        if (hasMessagesError) {
            // We have already warned about this during render
            return getMessageFallback({
                error: messagesOrError,
                key,
                namespace
            });
        }
        const messages = messagesOrError;
        let message;
        try {
            message = resolvePath(locale, messages, key, namespace);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.MISSING_MESSAGE, error.message);
        }
        if (typeof message === 'object') {
            let code, errorMessage;
            if (Array.isArray(message)) {
                code = IntlErrorCode.INVALID_MESSAGE;
                {
                    errorMessage = `Message at \`${joinPath(namespace, key)}\` resolved to an array, but only strings are supported. See https://next-intl.dev/docs/usage/messages#arrays-of-messages`;
                }
            } else {
                code = IntlErrorCode.INSUFFICIENT_PATH;
                {
                    errorMessage = `Message at \`${joinPath(namespace, key)}\` resolved to an object, but only strings are supported. Use a \`.\` to retrieve nested messages. See https://next-intl.dev/docs/usage/messages#structuring-messages`;
                }
            }
            return getFallbackFromErrorAndNotify(key, code, errorMessage);
        }
        let messageFormat;
        // Hot path that avoids creating an `IntlMessageFormat` instance
        const plainMessage = getPlainMessage(message, values);
        if (plainMessage) return plainMessage;
        // Lazy init the message formatter for better tree
        // shaking in case message formatting is not used.
        if (!formatters.getMessageFormat) {
            formatters.getMessageFormat = createMessageFormatter(cache, formatters);
        }
        try {
            messageFormat = formatters.getMessageFormat(message, locale, convertFormatsToIntlMessageFormat(globalFormats, formats, timeZone), {
                formatters: {
                    ...formatters,
                    getDateTimeFormat (locales, options) {
                        // Workaround for https://github.com/formatjs/formatjs/issues/4279
                        return formatters.getDateTimeFormat(locales, {
                            timeZone,
                            ...options
                        });
                    }
                }
            });
        } catch (error) {
            const thrownError = error;
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.INVALID_MESSAGE, thrownError.message + ('originalMessage' in thrownError ? ` (${thrownError.originalMessage})` : ''));
        }
        try {
            const formattedMessage = messageFormat.format(// @ts-expect-error `intl-messageformat` expects a different format
            // for rich text elements since a recent minor update. This
            // needs to be evaluated in detail, possibly also in regards
            // to be able to format to parts.
            values ? prepareTranslationValues(values) : values);
            if (formattedMessage == null) {
                throw new Error(`Unable to format \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'}`);
            }
            // Limit the function signature to return strings or React elements
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(formattedMessage) || // Arrays of React elements
            Array.isArray(formattedMessage) || typeof formattedMessage === 'string' ? formattedMessage : String(formattedMessage);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.FORMATTING_ERROR, error.message);
        }
    }
    function translateFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Provide custom formats for numbers, dates and times. */ formats) {
        const result = translateBaseFn(key, values, formats);
        if (typeof result !== 'string') {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.INVALID_MESSAGE, `The message \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'} didn't resolve to a string. If you want to format rich text, use \`t.rich\` instead.`);
        }
        return result;
    }
    translateFn.rich = translateBaseFn;
    // Augment `translateBaseFn` to return plain strings
    translateFn.markup = (key, values, formats)=>{
        const result = translateBaseFn(key, // @ts-expect-error -- `MarkupTranslationValues` is practically a sub type
        // of `RichTranslationValues` but TypeScript isn't smart enough here.
        values, formats);
        if (typeof result !== 'string') {
            const error = new IntlError(IntlErrorCode.FORMATTING_ERROR, "`t.markup` only accepts functions for formatting that receive and return strings.\n\nE.g. t.markup('markup', {b: (chunks) => `<b>${chunks}</b>`})");
            onError(error);
            return getMessageFallback({
                error,
                key,
                namespace
            });
        }
        return result;
    };
    translateFn.raw = (key)=>{
        if (hasMessagesError) {
            // We have already warned about this during render
            return getMessageFallback({
                error: messagesOrError,
                key,
                namespace
            });
        }
        const messages = messagesOrError;
        try {
            return resolvePath(locale, messages, key, namespace);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.MISSING_MESSAGE, error.message);
        }
    };
    translateFn.has = (key)=>{
        if (hasMessagesError) {
            return false;
        }
        try {
            resolvePath(locale, messagesOrError, key, namespace);
            return true;
        } catch  {
            return false;
        }
    };
    return translateFn;
}
/**
 * For the strictly typed messages to work we have to wrap the namespace into
 * a mandatory prefix. See https://stackoverflow.com/a/71529575/343045
 */ function resolveNamespace(namespace, namespacePrefix) {
    return namespace === namespacePrefix ? undefined : namespace.slice((namespacePrefix + '.').length);
}
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * (365 / 12); // Approximation
const QUARTER = MONTH * 3;
const YEAR = DAY * 365;
const UNIT_SECONDS = {
    second: SECOND,
    seconds: SECOND,
    minute: MINUTE,
    minutes: MINUTE,
    hour: HOUR,
    hours: HOUR,
    day: DAY,
    days: DAY,
    week: WEEK,
    weeks: WEEK,
    month: MONTH,
    months: MONTH,
    quarter: QUARTER,
    quarters: QUARTER,
    year: YEAR,
    years: YEAR
};
function resolveRelativeTimeUnit(seconds) {
    const absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
        return 'second';
    } else if (absValue < HOUR) {
        return 'minute';
    } else if (absValue < DAY) {
        return 'hour';
    } else if (absValue < WEEK) {
        return 'day';
    } else if (absValue < MONTH) {
        return 'week';
    } else if (absValue < YEAR) {
        return 'month';
    }
    return 'year';
}
function calculateRelativeTimeValue(seconds, unit) {
    // We have to round the resulting values, as `Intl.RelativeTimeFormat`
    // will include fractions like '2.1 hours ago'.
    return Math.round(seconds / UNIT_SECONDS[unit]);
}
function createFormatter(props) {
    const { _cache: cache = createCache(), _formatters: formatters = createIntlFormatters(cache), formats, locale, onError = defaultOnError, timeZone: globalTimeZone } = props;
    function applyTimeZone(options) {
        if (!options?.timeZone) {
            if (globalTimeZone) {
                options = {
                    ...options,
                    timeZone: globalTimeZone
                };
            } else {
                onError(new IntlError(IntlErrorCode.ENVIRONMENT_FALLBACK, `The \`timeZone\` parameter wasn't provided and there is no global default configured. Consider adding a global default to avoid markup mismatches caused by environment differences. Learn more: https://next-intl.dev/docs/configuration#time-zone`));
            }
        }
        return options;
    }
    function resolveFormatOrOptions(typeFormats, formatOrOptions, overrides) {
        let options;
        if (typeof formatOrOptions === 'string') {
            const formatName = formatOrOptions;
            options = typeFormats?.[formatName];
            if (!options) {
                const error = new IntlError(IntlErrorCode.MISSING_FORMAT, `Format \`${formatName}\` is not available.`);
                onError(error);
                throw error;
            }
        } else {
            options = formatOrOptions;
        }
        if (overrides) {
            options = {
                ...options,
                ...overrides
            };
        }
        return options;
    }
    function getFormattedValue(formatOrOptions, overrides, typeFormats, formatter, getFallback) {
        let options;
        try {
            options = resolveFormatOrOptions(typeFormats, formatOrOptions, overrides);
        } catch  {
            return getFallback();
        }
        try {
            return formatter(options);
        } catch (error) {
            onError(new IntlError(IntlErrorCode.FORMATTING_ERROR, error.message));
            return getFallback();
        }
    }
    function dateTime(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).format(value);
        }, ()=>String(value));
    }
    function dateTimeRange(start, end, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).formatRange(start, end);
        }, ()=>[
                dateTime(start),
                dateTime(end)
            ].join(' – '));
    }
    function number(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.number, (options)=>formatters.getNumberFormat(locale, options).format(value), ()=>String(value));
    }
    function getGlobalNow() {
        // Only read when necessary to avoid triggering a `dynamicIO` error
        // unnecessarily (`now` is only needed for `format.relativeTime`)
        if (props.now) {
            return props.now;
        } else {
            onError(new IntlError(IntlErrorCode.ENVIRONMENT_FALLBACK, `The \`now\` parameter wasn't provided to \`relativeTime\` and there is no global default configured, therefore the current time will be used as a fallback. See https://next-intl.dev/docs/usage/dates-times#relative-times-usenow`));
            return new Date();
        }
    }
    function relativeTime(date, nowOrOptions) {
        try {
            let nowDate, unit;
            const opts = {};
            if (nowOrOptions instanceof Date || typeof nowOrOptions === 'number') {
                nowDate = new Date(nowOrOptions);
            } else if (nowOrOptions) {
                if (nowOrOptions.now != null) {
                    nowDate = new Date(nowOrOptions.now);
                } else {
                    nowDate = getGlobalNow();
                }
                unit = nowOrOptions.unit;
                opts.style = nowOrOptions.style;
                // @ts-expect-error -- Types are slightly outdated
                opts.numberingSystem = nowOrOptions.numberingSystem;
            }
            if (!nowDate) {
                nowDate = getGlobalNow();
            }
            const dateDate = new Date(date);
            const seconds = (dateDate.getTime() - nowDate.getTime()) / 1000;
            if (!unit) {
                unit = resolveRelativeTimeUnit(seconds);
            }
            // `numeric: 'auto'` can theoretically produce output like "yesterday",
            // but it only works with integers. E.g. -1 day will produce "yesterday",
            // but -1.1 days will produce "-1.1 days". Rounding before formatting is
            // not desired, as the given dates might cross a threshold were the
            // output isn't correct anymore. Example: 2024-01-08T23:00:00.000Z and
            // 2024-01-08T01:00:00.000Z would produce "yesterday", which is not the
            // case. By using `always` we can ensure correct output. The only exception
            // is the formatting of times <1 second as "now".
            opts.numeric = unit === 'second' ? 'auto' : 'always';
            const value = calculateRelativeTimeValue(seconds, unit);
            return formatters.getRelativeTimeFormat(locale, opts).format(value, unit);
        } catch (error) {
            onError(new IntlError(IntlErrorCode.FORMATTING_ERROR, error.message));
            return String(date);
        }
    }
    function list(value, formatOrOptions, overrides) {
        const serializedValue = [];
        const richValues = new Map();
        // `formatToParts` only accepts strings, therefore we have to temporarily
        // replace React elements with a placeholder ID that can be used to retrieve
        // the original value afterwards.
        let index = 0;
        for (const item of value){
            let serializedItem;
            if (typeof item === 'object') {
                serializedItem = String(index);
                richValues.set(serializedItem, item);
            } else {
                serializedItem = String(item);
            }
            serializedValue.push(serializedItem);
            index++;
        }
        return getFormattedValue(formatOrOptions, overrides, formats?.list, // @ts-expect-error -- `richValues.size` is used to determine the return type, but TypeScript can't infer the meaning of this correctly
        (options)=>{
            const result = formatters.getListFormat(locale, options).formatToParts(serializedValue).map((part)=>part.type === 'literal' ? part.value : richValues.get(part.value) || part.value);
            if (richValues.size > 0) {
                return result;
            } else {
                return result.join('');
            }
        }, ()=>String(value));
    }
    return {
        dateTime,
        number,
        relativeTime,
        list,
        dateTimeRange
    };
}
function validateMessagesSegment(messages, invalidKeyLabels, parentPath) {
    Object.entries(messages).forEach(([key, messageOrMessages])=>{
        if (key.includes('.')) {
            let keyLabel = key;
            if (parentPath) keyLabel += ` (at ${parentPath})`;
            invalidKeyLabels.push(keyLabel);
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (messageOrMessages != null && typeof messageOrMessages === 'object') {
            validateMessagesSegment(messageOrMessages, invalidKeyLabels, joinPath(parentPath, key));
        }
    });
}
function validateMessages(messages, onError) {
    const invalidKeyLabels = [];
    validateMessagesSegment(messages, invalidKeyLabels);
    if (invalidKeyLabels.length > 0) {
        onError(new IntlError(IntlErrorCode.INVALID_KEY, `Namespace keys can not contain the character "." as this is used to express nesting. Please remove it or replace it with another character.

Invalid ${invalidKeyLabels.length === 1 ? 'key' : 'keys'}: ${invalidKeyLabels.join(', ')}

If you're migrating from a flat structure, you can convert your messages as follows:

import {set} from "lodash";

const input = {
  "one.one": "1.1",
  "one.two": "1.2",
  "two.one.one": "2.1.1"
};

const output = Object.entries(input).reduce(
  (acc, [key, value]) => set(acc, key, value),
  {}
);

// Output:
//
// {
//   "one": {
//     "one": "1.1",
//     "two": "1.2"
//   },
//   "two": {
//     "one": {
//       "one": "2.1.1"
//     }
//   }
// }
`));
    }
}
/**
 * Enhances the incoming props with defaults.
 */ function initializeConfig({ formats, getMessageFallback, messages, onError, ...rest }) {
    const finalOnError = onError || defaultOnError;
    const finalGetMessageFallback = getMessageFallback || defaultGetMessageFallback;
    {
        if (messages) {
            validateMessages(messages, finalOnError);
        }
    }
    return {
        ...rest,
        formats: formats || undefined,
        messages: messages || undefined,
        onError: finalOnError,
        getMessageFallback: finalGetMessageFallback
    };
}
;
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}}),
"[project]/apps/chat-ui/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IntlProvider": (()=>IntlProvider),
    "useFormatter": (()=>useFormatter),
    "useLocale": (()=>useLocale),
    "useMessages": (()=>useMessages),
    "useNow": (()=>useNow),
    "useTimeZone": (()=>useTimeZone),
    "useTranslations": (()=>useTranslations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/use-intl/dist/esm/development/initializeConfig-CRD6euuK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
const IntlContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function IntlProvider({ children, formats, getMessageFallback, locale, messages, now, onError, timeZone }) {
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(IntlContext);
    // The formatter cache is released when the locale changes. For
    // long-running apps with a persistent `IntlProvider` at the root,
    // this can reduce the memory footprint (e.g. in React Native).
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return prevContext?.cache || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])();
    }, [
        locale,
        prevContext?.cache
    ]);
    const formatters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>prevContext?.formatters || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(cache), [
        cache,
        prevContext?.formatters
    ]);
    // Memoizing this value helps to avoid triggering a re-render of all
    // context consumers in case the configuration didn't change. However,
    // if some of the non-primitive values change, a re-render will still
    // be triggered. Note that there's no need to put `memo` on `IntlProvider`
    // itself, because the `children` typically change on every render.
    // There's some burden on the consumer side if it's important to reduce
    // re-renders, put that's how React works.
    // See: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#context-updates-and-render-optimizations
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])({
                locale,
                // (required by provider)
                formats: formats === undefined ? prevContext?.formats : formats,
                getMessageFallback: getMessageFallback || prevContext?.getMessageFallback,
                messages: messages === undefined ? prevContext?.messages : messages,
                now: now || prevContext?.now,
                onError: onError || prevContext?.onError,
                timeZone: timeZone || prevContext?.timeZone
            }),
            formatters,
            cache
        }), [
        cache,
        formats,
        formatters,
        getMessageFallback,
        locale,
        messages,
        now,
        onError,
        prevContext,
        timeZone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IntlContext.Provider, {
        value: value,
        children: children
    });
}
function useIntlContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(IntlContext);
    if (!context) {
        throw new Error('No intl context found. Have you configured the provider? See https://next-intl.dev/docs/usage/configuration#server-client-components');
    }
    return context;
}
let hasWarnedForMissingTimezone = false;
const isServer = typeof window === 'undefined';
function useTranslationsImpl(allMessagesPrefixed, namespacePrefixed, namespacePrefix) {
    const { cache, formats: globalFormats, formatters, getMessageFallback, locale, onError, timeZone } = useIntlContext();
    // The `namespacePrefix` is part of the type system.
    // See the comment in the hook invocation.
    const allMessages = allMessagesPrefixed[namespacePrefix];
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(namespacePrefixed, namespacePrefix);
    if (!timeZone && !hasWarnedForMissingTimezone && isServer) {
        // eslint-disable-next-line react-compiler/react-compiler
        hasWarnedForMissingTimezone = true;
        onError(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].ENVIRONMENT_FALLBACK, `There is no \`timeZone\` configured, this can lead to markup mismatches caused by environment differences. Consider adding a global default: https://next-intl.dev/docs/configuration#time-zone`));
    }
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
            cache,
            formatters,
            getMessageFallback,
            messages: allMessages,
            namespace,
            onError,
            formats: globalFormats,
            locale,
            timeZone
        }), [
        cache,
        formatters,
        getMessageFallback,
        allMessages,
        namespace,
        onError,
        globalFormats,
        locale,
        timeZone
    ]);
    return translate;
}
/**
 * Translates messages from the given namespace by using the ICU syntax.
 * See https://formatjs.io/docs/core-concepts/icu-syntax.
 *
 * If no namespace is provided, all available messages are returned.
 * The namespace can also indicate nesting by using a dot
 * (e.g. `namespace.Component`).
 */ function useTranslations(namespace) {
    const context = useIntlContext();
    const messages = context.messages;
    // We have to wrap the actual hook so the type inference for the optional
    // namespace works correctly. See https://stackoverflow.com/a/71529575/343045
    // The prefix ("!") is arbitrary.
    // @ts-expect-error Use the explicit annotation instead
    return useTranslationsImpl({
        '!': messages
    }, // @ts-expect-error
    namespace ? `!.${namespace}` : '!', '!');
}
function useLocale() {
    return useIntlContext().locale;
}
function getNow() {
    return new Date();
}
/**
 * @see https://next-intl.dev/docs/usage/dates-times#relative-times-usenow
 */ function useNow(options) {
    const updateInterval = options?.updateInterval;
    const { now: globalNow } = useIntlContext();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(globalNow || getNow());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!updateInterval) return;
        const intervalId = setInterval(()=>{
            setNow(getNow());
        }, updateInterval);
        return ()=>{
            clearInterval(intervalId);
        };
    }, [
        globalNow,
        updateInterval
    ]);
    return updateInterval == null && globalNow ? globalNow : now;
}
function useTimeZone() {
    return useIntlContext().timeZone;
}
function useMessages() {
    const context = useIntlContext();
    if (!context.messages) {
        throw new Error('No messages found. Have you configured them correctly? See https://next-intl.dev/docs/configuration#messages');
    }
    return context.messages;
}
function useFormatter() {
    const { formats, formatters, locale, now: globalNow, onError, timeZone } = useIntlContext();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])({
            formats,
            locale,
            now: globalNow,
            onError,
            timeZone,
            _formatters: formatters
        }), [
        formats,
        formatters,
        globalNow,
        locale,
        onError,
        timeZone
    ]);
}
;
}}),
"[project]/apps/chat-ui/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NextIntlClientProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function NextIntlClientProvider({ locale, ...rest }) {
    if (!locale) {
        throw new Error("Couldn't infer the `locale` prop in `NextIntlClientProvider`, please provide it explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlProvider"], {
        locale: locale,
        ...rest
    });
}
;
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/apps/chat-ui/node_modules/posthog-js/dist/module.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "COPY_AUTOCAPTURE_EVENT": (()=>f),
    "Compression": (()=>_),
    "PostHog": (()=>aa),
    "SurveyEventName": (()=>Po),
    "SurveyEventProperties": (()=>Ro),
    "SurveyPosition": (()=>$o),
    "SurveyQuestionBranchingType": (()=>Eo),
    "SurveyQuestionType": (()=>xo),
    "SurveySchedule": (()=>Io),
    "SurveyType": (()=>ko),
    "SurveyWidgetType": (()=>So),
    "default": (()=>ua),
    "knownUnsafeEditableEvent": (()=>p),
    "posthog": (()=>ua),
    "severityLevels": (()=>g)
});
var t = "undefined" != typeof window ? window : void 0, i = "undefined" != typeof globalThis ? globalThis : t, e = Array.prototype, r = e.forEach, s = e.indexOf, n = null == i ? void 0 : i.navigator, o = null == i ? void 0 : i.document, a = null == i ? void 0 : i.location, l = null == i ? void 0 : i.fetch, u = null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest ? i.XMLHttpRequest : void 0, h = null == i ? void 0 : i.AbortController, d = null == n ? void 0 : n.userAgent, v = null != t ? t : {}, c = {
    DEBUG: !1,
    LIB_VERSION: "1.250.2"
}, f = "$copy_autocapture", p = [
    "$snapshot",
    "$pageview",
    "$pageleave",
    "$set",
    "survey dismissed",
    "survey sent",
    "survey shown",
    "$identify",
    "$groupidentify",
    "$create_alias",
    "$$client_ingestion_warning",
    "$web_experiment_applied",
    "$feature_enrollment_update",
    "$feature_flag_called"
], _ = function(t) {
    return t.GZipJS = "gzip-js", t.Base64 = "base64", t;
}({}), g = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
function m(t, i) {
    return -1 !== t.indexOf(i);
}
var b = function(t) {
    return t.trim();
}, y = function(t) {
    return t.replace(/^\$/, "");
};
var w = Array.isArray, S = Object.prototype, $ = S.hasOwnProperty, k = S.toString, x = w || function(t) {
    return "[object Array]" === k.call(t);
}, E = (t)=>"function" == typeof t, I = (t)=>t === Object(t) && !x(t), P = (t)=>{
    if (I(t)) {
        for(var i in t)if ($.call(t, i)) return !1;
        return !0;
    }
    return !1;
}, R = (t)=>void 0 === t, T = (t)=>"[object String]" == k.call(t), M = (t)=>T(t) && 0 === t.trim().length, C = (t)=>null === t, O = (t)=>R(t) || C(t), F = (t)=>"[object Number]" == k.call(t), A = (t)=>"[object Boolean]" === k.call(t), D = (t)=>t instanceof FormData, L = (t)=>m(p, t), N = (i)=>{
    var e = {
        t: function(e) {
            if (t && (c.DEBUG || v.POSTHOG_DEBUG) && !R(t.console) && t.console) {
                for(var r = ("__rrweb_original__" in t.console[e]) ? t.console[e].__rrweb_original__ : t.console[e], s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++)n[o - 1] = arguments[o];
                r(i, ...n);
            }
        },
        info: function() {
            for(var t = arguments.length, i = new Array(t), r = 0; r < t; r++)i[r] = arguments[r];
            e.t("log", ...i);
        },
        warn: function() {
            for(var t = arguments.length, i = new Array(t), r = 0; r < t; r++)i[r] = arguments[r];
            e.t("warn", ...i);
        },
        error: function() {
            for(var t = arguments.length, i = new Array(t), r = 0; r < t; r++)i[r] = arguments[r];
            e.t("error", ...i);
        },
        critical: function() {
            for(var t = arguments.length, e = new Array(t), r = 0; r < t; r++)e[r] = arguments[r];
            console.error(i, ...e);
        },
        uninitializedWarning: (t)=>{
            e.error("You must initialize PostHog before calling " + t);
        },
        createLogger: (t)=>N(i + " " + t)
    };
    return e;
}, j = N("[PostHog.js]"), z = j.createLogger, U = z("[ExternalScriptsLoader]"), q = (t, i, e)=>{
    if (t.config.disable_external_dependency_loading) return U.warn(i + " was requested but loading of external scripts is disabled."), e("Loading of external scripts is disabled");
    var r = null == o ? void 0 : o.querySelectorAll("script");
    if (r) {
        for(var s = 0; s < r.length; s++)if (r[s].src === i) return e();
    }
    var n = ()=>{
        if (!o) return e("document not found");
        var r = o.createElement("script");
        if (r.type = "text/javascript", r.crossOrigin = "anonymous", r.src = i, r.onload = (t)=>e(void 0, t), r.onerror = (t)=>e(t), t.config.prepare_external_dependency_script && (r = t.config.prepare_external_dependency_script(r)), !r) return e("prepare_external_dependency_script returned null");
        var s, n = o.querySelectorAll("body > script");
        n.length > 0 ? null == (s = n[0].parentNode) || s.insertBefore(r, n[0]) : o.body.appendChild(r);
    };
    null != o && o.body ? n() : null == o || o.addEventListener("DOMContentLoaded", n);
};
function B() {
    return B = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), B.apply(null, arguments);
}
function H(t, i) {
    if (null == t) return {};
    var e = {};
    for(var r in t)if (({}).hasOwnProperty.call(t, r)) {
        if (-1 !== i.indexOf(r)) continue;
        e[r] = t[r];
    }
    return e;
}
v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (t, i, e)=>{
    var r = "/static/" + i + ".js?v=" + t.version;
    if ("remote-config" === i && (r = "/array/" + t.config.token + "/config.js"), "toolbar" === i) {
        var s = 3e5;
        r = r + "&t=" + Math.floor(Date.now() / s) * s;
    }
    var n = t.requestRouter.endpointFor("assets", r);
    q(t, n, e);
}, v.__PosthogExtensions__.loadSiteApp = (t, i, e)=>{
    var r = t.requestRouter.endpointFor("api", i);
    q(t, r, e);
};
var W = {};
function G(t, i, e) {
    if (x(t)) {
        if (r && t.forEach === r) t.forEach(i, e);
        else if ("length" in t && t.length === +t.length) {
            for(var s = 0, n = t.length; s < n; s++)if (s in t && i.call(e, t[s], s) === W) return;
        }
    }
}
function J(t, i, e) {
    if (!O(t)) {
        if (x(t)) return G(t, i, e);
        if (D(t)) {
            for (var r of t.entries())if (i.call(e, r[1], r[0]) === W) return;
        } else for(var s in t)if ($.call(t, s) && i.call(e, t[s], s) === W) return;
    }
}
var V = function(t) {
    for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)e[r - 1] = arguments[r];
    return G(e, function(i) {
        for(var e in i)void 0 !== i[e] && (t[e] = i[e]);
    }), t;
}, K = function(t) {
    for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)e[r - 1] = arguments[r];
    return G(e, function(i) {
        G(i, function(i) {
            t.push(i);
        });
    }), t;
};
function Y(t) {
    for(var i = Object.keys(t), e = i.length, r = new Array(e); e--;)r[e] = [
        i[e],
        t[i[e]]
    ];
    return r;
}
var X = function(t) {
    try {
        return t();
    } catch (t) {
        return;
    }
}, Q = function(t) {
    return function() {
        try {
            for(var i = arguments.length, e = new Array(i), r = 0; r < i; r++)e[r] = arguments[r];
            return t.apply(this, e);
        } catch (t) {
            j.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), j.critical(t);
        }
    };
}, Z = function(t) {
    var i = {};
    return J(t, function(t, e) {
        (T(t) && t.length > 0 || F(t)) && (i[e] = t);
    }), i;
};
function tt(t, i) {
    return e = t, r = (t)=>T(t) && !C(i) ? t.slice(0, i) : t, s = new Set, function t(i, e) {
        return i !== Object(i) ? r ? r(i, e) : i : s.has(i) ? void 0 : (s.add(i), x(i) ? (n = [], G(i, (i)=>{
            n.push(t(i));
        })) : (n = {}, J(i, (i, e)=>{
            s.has(i) || (n[e] = t(i, e));
        })), n);
        "TURBOPACK unreachable";
        var n;
    }(e);
    "TURBOPACK unreachable";
    var e, r, s;
}
var it = [
    "herokuapp.com",
    "vercel.app",
    "netlify.app"
];
function et(t) {
    var i = null == t ? void 0 : t.hostname;
    if (!T(i)) return !1;
    var e = i.split(".").slice(-2).join(".");
    for (var r of it)if (e === r) return !1;
    return !0;
}
function rt(t, i) {
    for(var e = 0; e < t.length; e++)if (i(t[e])) return t[e];
}
function st(t, i, e, r) {
    var { capture: s = !1, passive: n = !0 } = null != r ? r : {};
    null == t || t.addEventListener(i, e, {
        capture: s,
        passive: n
    });
}
var nt = "$people_distinct_id", ot = "__alias", at = "__timers", lt = "$autocapture_disabled_server_side", ut = "$heatmaps_enabled_server_side", ht = "$exception_capture_enabled_server_side", dt = "$error_tracking_suppression_rules", vt = "$web_vitals_enabled_server_side", ct = "$dead_clicks_enabled_server_side", ft = "$web_vitals_allowed_metrics", pt = "$session_recording_enabled_server_side", _t = "$console_log_recording_enabled_server_side", gt = "$session_recording_network_payload_capture", mt = "$session_recording_masking", bt = "$session_recording_canvas_recording", yt = "$replay_sample_rate", wt = "$replay_minimum_duration", St = "$replay_script_config", $t = "$sesid", kt = "$session_is_sampled", xt = "$session_recording_url_trigger_activated_session", Et = "$session_recording_event_trigger_activated_session", It = "$enabled_feature_flags", Pt = "$early_access_features", Rt = "$feature_flag_details", Tt = "$stored_person_properties", Mt = "$stored_group_properties", Ct = "$surveys", Ot = "$surveys_activated", Ft = "$flag_call_reported", At = "$user_state", Dt = "$client_session_props", Lt = "$capture_rate_limit", Nt = "$initial_campaign_params", jt = "$initial_referrer_info", zt = "$initial_person_info", Ut = "$epp", qt = "__POSTHOG_TOOLBAR__", Bt = "$posthog_cookieless", Ht = [
    nt,
    ot,
    "__cmpns",
    at,
    pt,
    ut,
    $t,
    It,
    dt,
    At,
    Pt,
    Rt,
    Mt,
    Tt,
    Ct,
    Ft,
    Dt,
    Lt,
    Nt,
    jt,
    Ut,
    zt
];
function Wt(t) {
    return t instanceof Element && (t.id === qt || !(null == t.closest || !t.closest(".toolbar-global-fade-container")));
}
function Gt(t) {
    return !!t && 1 === t.nodeType;
}
function Jt(t, i) {
    return !!t && !!t.tagName && t.tagName.toLowerCase() === i.toLowerCase();
}
function Vt(t) {
    return !!t && 3 === t.nodeType;
}
function Kt(t) {
    return !!t && 11 === t.nodeType;
}
function Yt(t) {
    return t ? b(t).split(/\s+/) : [];
}
function Xt(i) {
    var e = null == t ? void 0 : t.location.href;
    return !!(e && i && i.some((t)=>e.match(t)));
}
function Qt(t) {
    var i = "";
    switch(typeof t.className){
        case "string":
            i = t.className;
            break;
        case "object":
            i = (t.className && "baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
            break;
        default:
            i = "";
    }
    return Yt(i);
}
function Zt(t) {
    return O(t) ? null : b(t).split(/(\s+)/).filter((t)=>ci(t)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function ti(t) {
    var i = "";
    return ni(t) && !oi(t) && t.childNodes && t.childNodes.length && J(t.childNodes, function(t) {
        var e;
        Vt(t) && t.textContent && (i += null !== (e = Zt(t.textContent)) && void 0 !== e ? e : "");
    }), b(i);
}
function ii(t) {
    return R(t.target) ? t.srcElement || null : null != (i = t.target) && i.shadowRoot ? t.composedPath()[0] || null : t.target || null;
    "TURBOPACK unreachable";
    var i;
}
var ei = [
    "a",
    "button",
    "form",
    "input",
    "select",
    "textarea",
    "label"
];
function ri(t) {
    var i = t.parentNode;
    return !(!i || !Gt(i)) && i;
}
function si(i, e, r, s, n) {
    var o, a, l;
    if (void 0 === r && (r = void 0), !t || !i || Jt(i, "html") || !Gt(i)) return !1;
    if (null != (o = r) && o.url_allowlist && !Xt(r.url_allowlist)) return !1;
    if (null != (a = r) && a.url_ignorelist && Xt(r.url_ignorelist)) return !1;
    if (null != (l = r) && l.dom_event_allowlist) {
        var u = r.dom_event_allowlist;
        if (u && !u.some((t)=>e.type === t)) return !1;
    }
    for(var h = !1, d = [
        i
    ], v = !0, c = i; c.parentNode && !Jt(c, "body");)if (Kt(c.parentNode)) d.push(c.parentNode.host), c = c.parentNode.host;
    else {
        if (!(v = ri(c))) break;
        if (s || ei.indexOf(v.tagName.toLowerCase()) > -1) h = !0;
        else {
            var f = t.getComputedStyle(v);
            f && "pointer" === f.getPropertyValue("cursor") && (h = !0);
        }
        d.push(v), c = v;
    }
    if (!function(t, i) {
        var e = null == i ? void 0 : i.element_allowlist;
        if (R(e)) return !0;
        var r, s = function(t) {
            if (e.some((i)=>t.tagName.toLowerCase() === i)) return {
                v: !0
            };
        };
        for (var n of t)if (r = s(n)) return r.v;
        return !1;
    }(d, r)) return !1;
    if (!function(t, i) {
        var e = null == i ? void 0 : i.css_selector_allowlist;
        if (R(e)) return !0;
        var r, s = function(t) {
            if (e.some((i)=>t.matches(i))) return {
                v: !0
            };
        };
        for (var n of t)if (r = s(n)) return r.v;
        return !1;
    }(d, r)) return !1;
    var p = t.getComputedStyle(i);
    if (p && "pointer" === p.getPropertyValue("cursor") && "click" === e.type) return !0;
    var _ = i.tagName.toLowerCase();
    switch(_){
        case "html":
            return !1;
        case "form":
            return (n || [
                "submit"
            ]).indexOf(e.type) >= 0;
        case "input":
        case "select":
        case "textarea":
            return (n || [
                "change",
                "click"
            ]).indexOf(e.type) >= 0;
        default:
            return h ? (n || [
                "click"
            ]).indexOf(e.type) >= 0 : (n || [
                "click"
            ]).indexOf(e.type) >= 0 && (ei.indexOf(_) > -1 || "true" === i.getAttribute("contenteditable"));
    }
}
function ni(t) {
    for(var i = t; i.parentNode && !Jt(i, "body"); i = i.parentNode){
        var e = Qt(i);
        if (m(e, "ph-sensitive") || m(e, "ph-no-capture")) return !1;
    }
    if (m(Qt(t), "ph-include")) return !0;
    var r = t.type || "";
    if (T(r)) switch(r.toLowerCase()){
        case "hidden":
        case "password":
            return !1;
    }
    var s = t.name || t.id || "";
    if (T(s)) {
        if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(s.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
    }
    return !0;
}
function oi(t) {
    return !!(Jt(t, "input") && ![
        "button",
        "checkbox",
        "submit",
        "reset"
    ].includes(t.type) || Jt(t, "select") || Jt(t, "textarea") || "true" === t.getAttribute("contenteditable"));
}
var ai = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", li = new RegExp("^(?:" + ai + ")$"), ui = new RegExp(ai), hi = "\\d{3}-?\\d{2}-?\\d{4}", di = new RegExp("^(" + hi + ")$"), vi = new RegExp("(" + hi + ")");
function ci(t, i) {
    if (void 0 === i && (i = !0), O(t)) return !1;
    if (T(t)) {
        if (t = b(t), (i ? li : ui).test((t || "").replace(/[- ]/g, ""))) return !1;
        if ((i ? di : vi).test(t)) return !1;
    }
    return !0;
}
function fi(t) {
    var i = ti(t);
    return ci(i = (i + " " + pi(t)).trim()) ? i : "";
}
function pi(t) {
    var i = "";
    return t && t.childNodes && t.childNodes.length && J(t.childNodes, function(t) {
        var e;
        if (t && "span" === (null == (e = t.tagName) ? void 0 : e.toLowerCase())) try {
            var r = ti(t);
            i = (i + " " + r).trim(), t.childNodes && t.childNodes.length && (i = (i + " " + pi(t)).trim());
        } catch (t) {
            j.error("[AutoCapture]", t);
        }
    }), i;
}
function _i(t) {
    return function(t) {
        var i = t.map((t)=>{
            var i, e, r = "";
            if (t.tag_name && (r += t.tag_name), t.attr_class) for (var s of (t.attr_class.sort(), t.attr_class))r += "." + s.replace(/"/g, "");
            var n = B({}, t.text ? {
                text: t.text
            } : {}, {
                "nth-child": null !== (i = t.nth_child) && void 0 !== i ? i : 0,
                "nth-of-type": null !== (e = t.nth_of_type) && void 0 !== e ? e : 0
            }, t.href ? {
                href: t.href
            } : {}, t.attr_id ? {
                attr_id: t.attr_id
            } : {}, t.attributes), o = {};
            return Y(n).sort((t, i)=>{
                var [e] = t, [r] = i;
                return e.localeCompare(r);
            }).forEach((t)=>{
                var [i, e] = t;
                return o[gi(i.toString())] = gi(e.toString());
            }), r += ":", r += Y(o).map((t)=>{
                var [i, e] = t;
                return i + '="' + e + '"';
            }).join("");
        });
        return i.join(";");
    }(function(t) {
        return t.map((t)=>{
            var i, e, r = {
                text: null == (i = t.$el_text) ? void 0 : i.slice(0, 400),
                tag_name: t.tag_name,
                href: null == (e = t.attr__href) ? void 0 : e.slice(0, 2048),
                attr_class: mi(t),
                attr_id: t.attr__id,
                nth_child: t.nth_child,
                nth_of_type: t.nth_of_type,
                attributes: {}
            };
            return Y(t).filter((t)=>{
                var [i] = t;
                return 0 === i.indexOf("attr__");
            }).forEach((t)=>{
                var [i, e] = t;
                return r.attributes[i] = e;
            }), r;
        });
    }(t));
}
function gi(t) {
    return t.replace(/"|\\"/g, '\\"');
}
function mi(t) {
    var i = t.attr__class;
    return i ? x(i) ? i : Yt(i) : void 0;
}
class bi {
    constructor(){
        this.clicks = [];
    }
    isRageClick(t, i, e) {
        var r = this.clicks[this.clicks.length - 1];
        if (r && Math.abs(t - r.x) + Math.abs(i - r.y) < 30 && e - r.timestamp < 1e3) {
            if (this.clicks.push({
                x: t,
                y: i,
                timestamp: e
            }), 3 === this.clicks.length) return !0;
        } else this.clicks = [
            {
                x: t,
                y: i,
                timestamp: e
            }
        ];
        return !1;
    }
}
var yi = [
    "localhost",
    "127.0.0.1"
], wi = (t)=>{
    var i = null == o ? void 0 : o.createElement("a");
    return R(i) ? null : (i.href = t, i);
}, Si = function(t, i) {
    var e, r;
    void 0 === i && (i = "&");
    var s = [];
    return J(t, function(t, i) {
        R(t) || R(i) || "undefined" === i || (e = encodeURIComponent(((t)=>t instanceof File)(t) ? t.name : t.toString()), r = encodeURIComponent(i), s[s.length] = r + "=" + e);
    }), s.join(i);
}, $i = function(t, i) {
    for(var e, r = ((t.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), s = 0; s < r.length; s++){
        var n = r[s].split("=");
        if (n[0] === i) {
            e = n;
            break;
        }
    }
    if (!x(e) || e.length < 2) return "";
    var o = e[1];
    try {
        o = decodeURIComponent(o);
    } catch (t) {
        j.error("Skipping decoding for malformed query param: " + o);
    }
    return o.replace(/\+/g, " ");
}, ki = function(t, i, e) {
    if (!t || !i || !i.length) return t;
    for(var r = t.split("#"), s = r[0] || "", n = r[1], o = s.split("?"), a = o[1], l = o[0], u = (a || "").split("&"), h = [], d = 0; d < u.length; d++){
        var v = u[d].split("=");
        x(v) && (i.includes(v[0]) ? h.push(v[0] + "=" + e) : h.push(u[d]));
    }
    var c = l;
    return null != a && (c += "?" + h.join("&")), null != n && (c += "#" + n), c;
}, xi = function(t, i) {
    var e = t.match(new RegExp(i + "=([^&]*)"));
    return e ? e[1] : null;
}, Ei = z("[AutoCapture]");
function Ii(t, i) {
    return i.length > t ? i.slice(0, t) + "..." : i;
}
function Pi(t) {
    if (t.previousElementSibling) return t.previousElementSibling;
    var i = t;
    do {
        i = i.previousSibling;
    }while (i && !Gt(i))
    return i;
}
function Ri(t, i, e, r) {
    var s = t.tagName.toLowerCase(), n = {
        tag_name: s
    };
    ei.indexOf(s) > -1 && !e && ("a" === s.toLowerCase() || "button" === s.toLowerCase() ? n.$el_text = Ii(1024, fi(t)) : n.$el_text = Ii(1024, ti(t)));
    var o = Qt(t);
    o.length > 0 && (n.classes = o.filter(function(t) {
        return "" !== t;
    })), J(t.attributes, function(e) {
        var s;
        if ((!oi(t) || -1 !== [
            "name",
            "id",
            "class",
            "aria-label"
        ].indexOf(e.name)) && (null == r || !r.includes(e.name)) && !i && ci(e.value) && (s = e.name, !T(s) || "_ngcontent" !== s.substring(0, 10) && "_nghost" !== s.substring(0, 7))) {
            var o = e.value;
            "class" === e.name && (o = Yt(o).join(" ")), n["attr__" + e.name] = Ii(1024, o);
        }
    });
    for(var a = 1, l = 1, u = t; u = Pi(u);)a++, u.tagName === t.tagName && l++;
    return n.nth_child = a, n.nth_of_type = l, n;
}
function Ti(i, e) {
    for(var r, s, { e: n, maskAllElementAttributes: o, maskAllText: a, elementAttributeIgnoreList: l, elementsChainAsString: u } = e, h = [
        i
    ], d = i; d.parentNode && !Jt(d, "body");)Kt(d.parentNode) ? (h.push(d.parentNode.host), d = d.parentNode.host) : (h.push(d.parentNode), d = d.parentNode);
    var v, c = [], f = {}, p = !1, _ = !1;
    if (J(h, (t)=>{
        var i = ni(t);
        "a" === t.tagName.toLowerCase() && (p = t.getAttribute("href"), p = i && p && ci(p) && p), m(Qt(t), "ph-no-capture") && (_ = !0), c.push(Ri(t, o, a, l));
        var e = function(t) {
            if (!ni(t)) return {};
            var i = {};
            return J(t.attributes, function(t) {
                if (t.name && 0 === t.name.indexOf("data-ph-capture-attribute")) {
                    var e = t.name.replace("data-ph-capture-attribute-", ""), r = t.value;
                    e && r && ci(r) && (i[e] = r);
                }
            }), i;
        }(t);
        V(f, e);
    }), _) return {
        props: {},
        explicitNoCapture: _
    };
    if (a || ("a" === i.tagName.toLowerCase() || "button" === i.tagName.toLowerCase() ? c[0].$el_text = fi(i) : c[0].$el_text = ti(i)), p) {
        var g, b;
        c[0].attr__href = p;
        var y = null == (g = wi(p)) ? void 0 : g.host, w = null == t || null == (b = t.location) ? void 0 : b.host;
        y && w && y !== w && (v = p);
    }
    return {
        props: V({
            $event_type: n.type,
            $ce_version: 1
        }, u ? {} : {
            $elements: c
        }, {
            $elements_chain: _i(c)
        }, null != (r = c[0]) && r.$el_text ? {
            $el_text: null == (s = c[0]) ? void 0 : s.$el_text
        } : {}, v && "click" === n.type ? {
            $external_click_url: v
        } : {}, f)
    };
}
class Mi {
    constructor(t){
        this.i = !1, this.o = null, this.rageclicks = new bi, this.h = !1, this.instance = t, this.m = null;
    }
    get S() {
        var t, i, e = I(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
        return e.url_allowlist = null == (t = e.url_allowlist) ? void 0 : t.map((t)=>new RegExp(t)), e.url_ignorelist = null == (i = e.url_ignorelist) ? void 0 : i.map((t)=>new RegExp(t)), e;
    }
    $() {
        if (this.isBrowserSupported()) {
            if (t && o) {
                var i = (i)=>{
                    i = i || (null == t ? void 0 : t.event);
                    try {
                        this.k(i);
                    } catch (t) {
                        Ei.error("Failed to capture event", t);
                    }
                };
                if (st(o, "submit", i, {
                    capture: !0
                }), st(o, "change", i, {
                    capture: !0
                }), st(o, "click", i, {
                    capture: !0
                }), this.S.capture_copied_text) {
                    var e = (i)=>{
                        i = i || (null == t ? void 0 : t.event), this.k(i, f);
                    };
                    st(o, "copy", e, {
                        capture: !0
                    }), st(o, "cut", e, {
                        capture: !0
                    });
                }
            }
        } else Ei.info("Disabling Automatic Event Collection because this browser is not supported");
    }
    startIfEnabled() {
        this.isEnabled && !this.i && (this.$(), this.i = !0);
    }
    onRemoteConfig(t) {
        t.elementsChainAsString && (this.h = t.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
            [lt]: !!t.autocapture_opt_out
        }), this.o = !!t.autocapture_opt_out, this.startIfEnabled();
    }
    setElementSelectors(t) {
        this.m = t;
    }
    getElementSelectors(t) {
        var i, e = [];
        return null == (i = this.m) || i.forEach((i)=>{
            var r = null == o ? void 0 : o.querySelectorAll(i);
            null == r || r.forEach((r)=>{
                t === r && e.push(i);
            });
        }), e;
    }
    get isEnabled() {
        var t, i, e = null == (t = this.instance.persistence) ? void 0 : t.props[lt], r = this.o;
        if (C(r) && !A(e) && !this.instance.config.advanced_disable_decide) return !1;
        var s = null !== (i = this.o) && void 0 !== i ? i : !!e;
        return !!this.instance.config.autocapture && !s;
    }
    k(i, e) {
        if (void 0 === e && (e = "$autocapture"), this.isEnabled) {
            var r, s = ii(i);
            if (Vt(s) && (s = s.parentNode || null), "$autocapture" === e && "click" === i.type && i instanceof MouseEvent) this.instance.config.rageclick && null != (r = this.rageclicks) && r.isRageClick(i.clientX, i.clientY, (new Date).getTime()) && this.k(i, "$rageclick");
            var n = e === f;
            if (s && si(s, i, this.S, n, n ? [
                "copy",
                "cut"
            ] : void 0)) {
                var { props: o, explicitNoCapture: a } = Ti(s, {
                    e: i,
                    maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                    maskAllText: this.instance.config.mask_all_text,
                    elementAttributeIgnoreList: this.S.element_attribute_ignorelist,
                    elementsChainAsString: this.h
                });
                if (a) return !1;
                var l = this.getElementSelectors(s);
                if (l && l.length > 0 && (o.$element_selectors = l), e === f) {
                    var u, h = Zt(null == t || null == (u = t.getSelection()) ? void 0 : u.toString()), d = i.type || "clipboard";
                    if (!h) return !1;
                    o.$selected_content = h, o.$copy_type = d;
                }
                return this.instance.capture(e, o), !0;
            }
        }
    }
    isBrowserSupported() {
        return E(null == o ? void 0 : o.querySelectorAll);
    }
}
Math.trunc || (Math.trunc = function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
}), Number.isInteger || (Number.isInteger = function(t) {
    return F(t) && isFinite(t) && Math.floor(t) === t;
});
var Ci = "0123456789abcdef";
class Oi {
    constructor(t){
        if (this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
    }
    static fromFieldsV7(t, i, e, r) {
        if (!Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(e) || !Number.isInteger(r) || t < 0 || i < 0 || e < 0 || r < 0 || t > 0xffffffffffff || i > 4095 || e > 1073741823 || r > 4294967295) throw new RangeError("invalid field value");
        var s = new Uint8Array(16);
        return s[0] = t / Math.pow(2, 40), s[1] = t / Math.pow(2, 32), s[2] = t / Math.pow(2, 24), s[3] = t / Math.pow(2, 16), s[4] = t / Math.pow(2, 8), s[5] = t, s[6] = 112 | i >>> 8, s[7] = i, s[8] = 128 | e >>> 24, s[9] = e >>> 16, s[10] = e >>> 8, s[11] = e, s[12] = r >>> 24, s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new Oi(s);
    }
    toString() {
        for(var t = "", i = 0; i < this.bytes.length; i++)t = t + Ci.charAt(this.bytes[i] >>> 4) + Ci.charAt(15 & this.bytes[i]), 3 !== i && 5 !== i && 7 !== i && 9 !== i || (t += "-");
        if (36 !== t.length) throw new Error("Invalid UUIDv7 was generated");
        return t;
    }
    clone() {
        return new Oi(this.bytes.slice(0));
    }
    equals(t) {
        return 0 === this.compareTo(t);
    }
    compareTo(t) {
        for(var i = 0; i < 16; i++){
            var e = this.bytes[i] - t.bytes[i];
            if (0 !== e) return Math.sign(e);
        }
        return 0;
    }
}
class Fi {
    constructor(){
        this.I = 0, this.P = 0, this.R = new Li;
    }
    generate() {
        var t = this.generateOrAbort();
        if (R(t)) {
            this.I = 0;
            var i = this.generateOrAbort();
            if (R(i)) throw new Error("Could not generate UUID after timestamp reset");
            return i;
        }
        return t;
    }
    generateOrAbort() {
        var t = Date.now();
        if (t > this.I) this.I = t, this.T();
        else {
            if (!(t + 1e4 > this.I)) return;
            this.P++, this.P > 4398046511103 && (this.I++, this.T());
        }
        return Oi.fromFieldsV7(this.I, Math.trunc(this.P / Math.pow(2, 30)), this.P & Math.pow(2, 30) - 1, this.R.nextUint32());
    }
    T() {
        this.P = 1024 * this.R.nextUint32() + (1023 & this.R.nextUint32());
    }
}
var Ai, Di = (t)=>{
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for(var i = 0; i < t.length; i++)t[i] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return t;
};
t && !R(t.crypto) && crypto.getRandomValues && (Di = (t)=>crypto.getRandomValues(t));
class Li {
    constructor(){
        this.M = new Uint32Array(8), this.C = 1 / 0;
    }
    nextUint32() {
        return this.C >= this.M.length && (Di(this.M), this.C = 0), this.M[this.C++];
    }
}
var Ni = ()=>ji().toString(), ji = ()=>(Ai || (Ai = new Fi)).generate(), zi = "";
var Ui = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function qi(t, i) {
    if (i) {
        var e = function(t, i) {
            if (void 0 === i && (i = o), zi) return zi;
            if (!i) return "";
            if ([
                "localhost",
                "127.0.0.1"
            ].includes(t)) return "";
            for(var e = t.split("."), r = Math.min(e.length, 8), s = "dmn_chk_" + Ni(); !zi && r--;){
                var n = e.slice(r).join("."), a = s + "=1;domain=." + n + ";path=/";
                i.cookie = a + ";max-age=3", i.cookie.includes(s) && (i.cookie = a + ";max-age=0", zi = n);
            }
            return zi;
        }(t);
        if (!e) {
            var r = ((t)=>{
                var i = t.match(Ui);
                return i ? i[0] : "";
            })(t);
            r !== e && j.info("Warning: cookie subdomain discovery mismatch", r, e), e = r;
        }
        return e ? "; domain=." + e : "";
    }
    return "";
}
var Bi = {
    O: ()=>!!o,
    F: function(t) {
        j.error("cookieStore error: " + t);
    },
    A: function(t) {
        if (o) {
            try {
                for(var i = t + "=", e = o.cookie.split(";").filter((t)=>t.length), r = 0; r < e.length; r++){
                    for(var s = e[r]; " " == s.charAt(0);)s = s.substring(1, s.length);
                    if (0 === s.indexOf(i)) return decodeURIComponent(s.substring(i.length, s.length));
                }
            } catch (t) {}
            return null;
        }
    },
    D: function(t) {
        var i;
        try {
            i = JSON.parse(Bi.A(t)) || {};
        } catch (t) {}
        return i;
    },
    L: function(t, i, e, r, s) {
        if (o) try {
            var n = "", a = "", l = qi(o.location.hostname, r);
            if (e) {
                var u = new Date;
                u.setTime(u.getTime() + 24 * e * 60 * 60 * 1e3), n = "; expires=" + u.toUTCString();
            }
            s && (a = "; secure");
            var h = t + "=" + encodeURIComponent(JSON.stringify(i)) + n + "; SameSite=Lax; path=/" + l + a;
            return h.length > 3686.4 && j.warn("cookieStore warning: large cookie, len=" + h.length), o.cookie = h, h;
        } catch (t) {
            return;
        }
    },
    N: function(t, i) {
        try {
            Bi.L(t, "", -1, i);
        } catch (t) {
            return;
        }
    }
}, Hi = null, Wi = {
    O: function() {
        if (!C(Hi)) return Hi;
        var i = !0;
        if (R(t)) i = !1;
        else try {
            var e = "__mplssupport__";
            Wi.L(e, "xyz"), '"xyz"' !== Wi.A(e) && (i = !1), Wi.N(e);
        } catch (t) {
            i = !1;
        }
        return i || j.error("localStorage unsupported; falling back to cookie store"), Hi = i, i;
    },
    F: function(t) {
        j.error("localStorage error: " + t);
    },
    A: function(i) {
        try {
            return null == t ? void 0 : t.localStorage.getItem(i);
        } catch (t) {
            Wi.F(t);
        }
        return null;
    },
    D: function(t) {
        try {
            return JSON.parse(Wi.A(t)) || {};
        } catch (t) {}
        return null;
    },
    L: function(i, e) {
        try {
            null == t || t.localStorage.setItem(i, JSON.stringify(e));
        } catch (t) {
            Wi.F(t);
        }
    },
    N: function(i) {
        try {
            null == t || t.localStorage.removeItem(i);
        } catch (t) {
            Wi.F(t);
        }
    }
}, Gi = [
    "distinct_id",
    $t,
    kt,
    Ut,
    zt
], Ji = B({}, Wi, {
    D: function(t) {
        try {
            var i = {};
            try {
                i = Bi.D(t) || {};
            } catch (t) {}
            var e = V(i, JSON.parse(Wi.A(t) || "{}"));
            return Wi.L(t, e), e;
        } catch (t) {}
        return null;
    },
    L: function(t, i, e, r, s, n) {
        try {
            Wi.L(t, i, void 0, void 0, n);
            var o = {};
            Gi.forEach((t)=>{
                i[t] && (o[t] = i[t]);
            }), Object.keys(o).length && Bi.L(t, o, e, r, s, n);
        } catch (t) {
            Wi.F(t);
        }
    },
    N: function(i, e) {
        try {
            null == t || t.localStorage.removeItem(i), Bi.N(i, e);
        } catch (t) {
            Wi.F(t);
        }
    }
}), Vi = {}, Ki = {
    O: function() {
        return !0;
    },
    F: function(t) {
        j.error("memoryStorage error: " + t);
    },
    A: function(t) {
        return Vi[t] || null;
    },
    D: function(t) {
        return Vi[t] || null;
    },
    L: function(t, i) {
        Vi[t] = i;
    },
    N: function(t) {
        delete Vi[t];
    }
}, Yi = null, Xi = {
    O: function() {
        if (!C(Yi)) return Yi;
        if (Yi = !0, R(t)) Yi = !1;
        else try {
            var i = "__support__";
            Xi.L(i, "xyz"), '"xyz"' !== Xi.A(i) && (Yi = !1), Xi.N(i);
        } catch (t) {
            Yi = !1;
        }
        return Yi;
    },
    F: function(t) {
        j.error("sessionStorage error: ", t);
    },
    A: function(i) {
        try {
            return null == t ? void 0 : t.sessionStorage.getItem(i);
        } catch (t) {
            Xi.F(t);
        }
        return null;
    },
    D: function(t) {
        try {
            return JSON.parse(Xi.A(t)) || null;
        } catch (t) {}
        return null;
    },
    L: function(i, e) {
        try {
            null == t || t.sessionStorage.setItem(i, JSON.stringify(e));
        } catch (t) {
            Xi.F(t);
        }
    },
    N: function(i) {
        try {
            null == t || t.sessionStorage.removeItem(i);
        } catch (t) {
            Xi.F(t);
        }
    }
}, Qi = function(t) {
    return t[t.PENDING = -1] = "PENDING", t[t.DENIED = 0] = "DENIED", t[t.GRANTED = 1] = "GRANTED", t;
}({});
class Zi {
    constructor(t){
        this._instance = t;
    }
    get S() {
        return this._instance.config;
    }
    get consent() {
        return this.j() ? Qi.DENIED : this.U;
    }
    isOptedOut() {
        return this.consent === Qi.DENIED || this.consent === Qi.PENDING && this.S.opt_out_capturing_by_default;
    }
    isOptedIn() {
        return !this.isOptedOut();
    }
    optInOut(t) {
        this.q.L(this.B, t ? 1 : 0, this.S.cookie_expiration, this.S.cross_subdomain_cookie, this.S.secure_cookie);
    }
    reset() {
        this.q.N(this.B, this.S.cross_subdomain_cookie);
    }
    get B() {
        var { token: t, opt_out_capturing_cookie_prefix: i } = this._instance.config;
        return (i || "__ph_opt_in_out_") + t;
    }
    get U() {
        var t = this.q.A(this.B);
        return "1" === t ? Qi.GRANTED : "0" === t ? Qi.DENIED : Qi.PENDING;
    }
    get q() {
        if (!this.H) {
            var t = this.S.opt_out_capturing_persistence_type;
            this.H = "localStorage" === t ? Wi : Bi;
            var i = "localStorage" === t ? Bi : Wi;
            i.A(this.B) && (this.H.A(this.B) || this.optInOut("1" === i.A(this.B)), i.N(this.B, this.S.cross_subdomain_cookie));
        }
        return this.H;
    }
    j() {
        return !!this.S.respect_dnt && !!rt([
            null == n ? void 0 : n.doNotTrack,
            null == n ? void 0 : n.msDoNotTrack,
            v.doNotTrack
        ], (t)=>m([
                !0,
                1,
                "1",
                "yes"
            ], t));
    }
}
var te = z("[Dead Clicks]"), ie = ()=>!0, ee = (t)=>{
    var i, e = !(null == (i = t.instance.persistence) || !i.get_property(ct)), r = t.instance.config.capture_dead_clicks;
    return A(r) ? r : e;
};
class re {
    get lazyLoadedDeadClicksAutocapture() {
        return this.W;
    }
    constructor(t, i, e){
        this.instance = t, this.isEnabled = i, this.onCapture = e, this.startIfEnabled();
    }
    onRemoteConfig(t) {
        this.instance.persistence && this.instance.persistence.register({
            [ct]: null == t ? void 0 : t.captureDeadClicks
        }), this.startIfEnabled();
    }
    startIfEnabled() {
        this.isEnabled(this) && this.G(()=>{
            this.J();
        });
    }
    G(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.initDeadClicksAutocapture && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this.instance, "dead-clicks-autocapture", (i)=>{
            i ? te.error("failed to load script", i) : t();
        });
    }
    J() {
        var t;
        if (o) {
            if (!this.W && null != (t = v.__PosthogExtensions__) && t.initDeadClicksAutocapture) {
                var i = I(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                i.__onCapture = this.onCapture, this.W = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, i), this.W.start(o), te.info("starting...");
            }
        } else te.error("`document` not found. Cannot start.");
    }
    stop() {
        this.W && (this.W.stop(), this.W = void 0, te.info("stopping..."));
    }
}
function se(t, i, e, r, s) {
    return i > e && (j.warn("min cannot be greater than max."), i = e), F(t) ? t > e ? (r && j.warn(r + " cannot be  greater than max: " + e + ". Using max value instead."), e) : t < i ? (r && j.warn(r + " cannot be less than min: " + i + ". Using min value instead."), i) : t : (r && j.warn(r + " must be a number. using max or fallback. max: " + e + ", fallback: " + s), se(s || e, i, e, r));
}
class ne {
    constructor(t){
        this.V = {}, this.K = ()=>{
            Object.keys(this.V).forEach((t)=>{
                var i = this.Y(t) + this.X;
                i >= this.Z ? delete this.V[t] : this.tt(t, i);
            });
        }, this.Y = (t)=>this.V[String(t)], this.tt = (t, i)=>{
            this.V[String(t)] = i;
        }, this.consumeRateLimit = (t)=>{
            var i, e = null !== (i = this.Y(t)) && void 0 !== i ? i : this.Z;
            if (0 === (e = Math.max(e - 1, 0))) return !0;
            this.tt(t, e);
            var r, s = 0 === e;
            s && (null == (r = this.it) || r.call(this, t));
            return s;
        }, this.et = t, this.it = this.et.it, this.Z = se(this.et.bucketSize, 0, 100, "rate limiter bucket size"), this.X = se(this.et.refillRate, 0, this.Z, "rate limiter refill rate"), this.rt = se(this.et.refillInterval, 0, 864e5, "rate limiter refill interval"), setInterval(()=>{
            this.K();
        }, this.rt);
    }
}
var oe = z("[ExceptionAutocapture]");
class ae {
    constructor(i){
        var e, r, s;
        this.st = ()=>{
            var i;
            if (t && this.isEnabled && null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions) {
                var e = v.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r = v.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, s = v.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                try {
                    !this.nt && this.S.capture_unhandled_errors && (this.nt = e(this.captureException.bind(this))), !this.ot && this.S.capture_unhandled_rejections && (this.ot = r(this.captureException.bind(this))), !this.lt && this.S.capture_console_errors && (this.lt = s(this.captureException.bind(this)));
                } catch (t) {
                    oe.error("failed to start", t), this.ut();
                }
            }
        }, this._instance = i, this.ht = !(null == (e = this._instance.persistence) || !e.props[ht]), this.S = this.dt(), this.vt = new ne({
            refillRate: null !== (r = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) && void 0 !== r ? r : 1,
            bucketSize: null !== (s = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize) && void 0 !== s ? s : 10,
            refillInterval: 1e4
        }), this.startIfEnabled();
    }
    dt() {
        var t = this._instance.config.capture_exceptions, i = {
            capture_unhandled_errors: !1,
            capture_unhandled_rejections: !1,
            capture_console_errors: !1
        };
        return I(t) ? i = B({}, i, t) : (R(t) ? this.ht : t) && (i = B({}, i, {
            capture_unhandled_errors: !0,
            capture_unhandled_rejections: !0
        })), i;
    }
    get isEnabled() {
        return this.S.capture_console_errors || this.S.capture_unhandled_errors || this.S.capture_unhandled_rejections;
    }
    startIfEnabled() {
        this.isEnabled && (oe.info("enabled"), this.G(this.st));
    }
    G(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "exception-autocapture", (i)=>{
            if (i) return oe.error("failed to load script", i);
            t();
        });
    }
    ut() {
        var t, i, e;
        null == (t = this.nt) || t.call(this), this.nt = void 0, null == (i = this.ot) || i.call(this), this.ot = void 0, null == (e = this.lt) || e.call(this), this.lt = void 0;
    }
    onRemoteConfig(t) {
        var i = t.autocaptureExceptions;
        this.ht = !!i || !1, this.S = this.dt(), this._instance.persistence && this._instance.persistence.register({
            [ht]: this.ht
        }), this.startIfEnabled();
    }
    captureException(t) {
        var i, e = this._instance.requestRouter.endpointFor("ui");
        t.$exception_personURL = e + "/project/" + this._instance.config.token + "/person/" + this._instance.get_distinct_id();
        var r = null !== (i = t.$exception_list[0].type) && void 0 !== i ? i : "Exception";
        this.vt.consumeRateLimit(r) ? oe.info("Skipping exception capture because of client rate limiting.", {
            exception: t.$exception_list[0].type
        }) : this._instance.exceptions.sendExceptionEvent(t);
    }
}
function le(t) {
    return !R(Event) && ue(t, Event);
}
function ue(t, i) {
    try {
        return t instanceof i;
    } catch (t) {
        return !1;
    }
}
function he(t) {
    switch(Object.prototype.toString.call(t)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
            return !0;
        default:
            return ue(t, Error);
    }
}
function de(t, i) {
    return Object.prototype.toString.call(t) === "[object " + i + "]";
}
function ve(t) {
    return de(t, "DOMError");
}
var ce = /\(error: (.*)\)/, fe = 50, pe = "?";
function _e(t, i, e, r) {
    var s = {
        platform: "web:javascript",
        filename: t,
        function: "<anonymous>" === i ? pe : i,
        in_app: !0
    };
    return R(e) || (s.lineno = e), R(r) || (s.colno = r), s;
}
var ge = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, me = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, be = /\((\S*)(?::(\d+))(?::(\d+))\)/, ye = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, we = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Se = function() {
    for(var t = arguments.length, i = new Array(t), e = 0; e < t; e++)i[e] = arguments[e];
    var r = i.sort((t, i)=>t[0] - i[0]).map((t)=>t[1]);
    return function(t, i) {
        void 0 === i && (i = 0);
        for(var e = [], s = t.split("\n"), n = i; n < s.length; n++){
            var o = s[n];
            if (!(o.length > 1024)) {
                var a = ce.test(o) ? o.replace(ce, "$1") : o;
                if (!a.match(/\S*Error: /)) {
                    for (var l of r){
                        var u = l(a);
                        if (u) {
                            e.push(u);
                            break;
                        }
                    }
                    if (e.length >= fe) break;
                }
            }
        }
        return function(t) {
            if (!t.length) return [];
            var i = Array.from(t);
            return i.reverse(), i.slice(0, fe).map((t)=>B({}, t, {
                    filename: t.filename || $e(i).filename,
                    function: t.function || pe
                }));
        }(e);
    };
}(...[
    [
        30,
        (t)=>{
            var i = ge.exec(t);
            if (i) {
                var [, e, r, s] = i;
                return _e(e, pe, +r, +s);
            }
            var n = me.exec(t);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    var o = be.exec(n[2]);
                    o && (n[2] = o[1], n[3] = o[2], n[4] = o[3]);
                }
                var [a, l] = Ie(n[1] || pe, n[2]);
                return _e(l, a, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
            }
        }
    ],
    [
        50,
        (t)=>{
            var i = ye.exec(t);
            if (i) {
                if (i[3] && i[3].indexOf(" > eval") > -1) {
                    var e = we.exec(i[3]);
                    e && (i[1] = i[1] || "eval", i[3] = e[1], i[4] = e[2], i[5] = "");
                }
                var r = i[3], s = i[1] || pe;
                return [s, r] = Ie(s, r), _e(r, s, i[4] ? +i[4] : void 0, i[5] ? +i[5] : void 0);
            }
        }
    ]
]);
function $e(t) {
    return t[t.length - 1] || {};
}
var ke, xe, Ee, Ie = (t, i)=>{
    var e = -1 !== t.indexOf("safari-extension"), r = -1 !== t.indexOf("safari-web-extension");
    return e || r ? [
        -1 !== t.indexOf("@") ? t.split("@")[0] : pe,
        e ? "safari-extension:" + i : "safari-web-extension:" + i
    ] : [
        t,
        i
    ];
};
var Pe = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
function Re(t, i) {
    void 0 === i && (i = 0);
    var e = t.stacktrace || t.stack || "", r = function(t) {
        if (t && Te.test(t.message)) return 1;
        return 0;
    }(t);
    try {
        var s = Se, n = function(t, i) {
            var e = function(t) {
                var i = globalThis._posthogChunkIds;
                if (!i) return {};
                var e = Object.keys(i);
                return Ee && e.length === xe || (xe = e.length, Ee = e.reduce((e, r)=>{
                    ke || (ke = {});
                    var s = ke[r];
                    if (s) e[s[0]] = s[1];
                    else for(var n = t(r), o = n.length - 1; o >= 0; o--){
                        var a = n[o], l = null == a ? void 0 : a.filename, u = i[r];
                        if (l && u) {
                            e[l] = u, ke[r] = [
                                l,
                                u
                            ];
                            break;
                        }
                    }
                    return e;
                }, {})), Ee;
            }(i);
            return t.forEach((t)=>{
                t.filename && (t.chunk_id = e[t.filename]);
            }), t;
        }(s(e, r), s);
        return n.slice(0, n.length - i);
    } catch (t) {}
    return [];
}
var Te = /Minified React error #\d+;/i;
function Me(t, i) {
    var e, r, s = Re(t), n = null === (e = null == i ? void 0 : i.handled) || void 0 === e || e, o = null !== (r = null == i ? void 0 : i.synthetic) && void 0 !== r && r;
    return {
        type: null != i && i.overrideExceptionType ? i.overrideExceptionType : t.name,
        value: function(t) {
            var i = t.message;
            if (i.error && "string" == typeof i.error.message) return String(i.error.message);
            return String(i);
        }(t),
        stacktrace: {
            frames: s,
            type: "raw"
        },
        mechanism: {
            handled: n,
            synthetic: o
        }
    };
}
function Ce(t, i) {
    var e = Me(t, i);
    return t.cause && he(t.cause) && t.cause !== t ? [
        e,
        ...Ce(t.cause, {
            handled: null == i ? void 0 : i.handled,
            synthetic: null == i ? void 0 : i.synthetic
        })
    ] : [
        e
    ];
}
function Oe(t, i) {
    return {
        $exception_list: Ce(t, i),
        $exception_level: "error"
    };
}
function Fe(t, i) {
    var e, r, s, n = null === (e = null == i ? void 0 : i.handled) || void 0 === e || e, o = null === (r = null == i ? void 0 : i.synthetic) || void 0 === r || r, a = {
        type: null != i && i.overrideExceptionType ? i.overrideExceptionType : null !== (s = null == i ? void 0 : i.defaultExceptionType) && void 0 !== s ? s : "Error",
        value: t || (null == i ? void 0 : i.defaultExceptionMessage),
        mechanism: {
            handled: n,
            synthetic: o
        }
    };
    if (null != i && i.syntheticException) {
        var l = Re(i.syntheticException, 1);
        l.length && (a.stacktrace = {
            frames: l,
            type: "raw"
        });
    }
    return {
        $exception_list: [
            a
        ],
        $exception_level: "error"
    };
}
function Ae(t) {
    return T(t) && !M(t) && g.indexOf(t) >= 0;
}
function De(t, i) {
    var e, r, s = null === (e = null == i ? void 0 : i.handled) || void 0 === e || e, n = null === (r = null == i ? void 0 : i.synthetic) || void 0 === r || r, o = null != i && i.overrideExceptionType ? i.overrideExceptionType : le(t) ? t.constructor.name : "Error", a = "Non-Error 'exception' captured with keys: " + function(t, i) {
        void 0 === i && (i = 40);
        var e = Object.keys(t);
        if (e.sort(), !e.length) return "[object has no keys]";
        for(var r = e.length; r > 0; r--){
            var s = e.slice(0, r).join(", ");
            if (!(s.length > i)) return r === e.length || s.length <= i ? s : s.slice(0, i) + "...";
        }
        return "";
    }(t), l = {
        type: o,
        value: a,
        mechanism: {
            handled: s,
            synthetic: n
        }
    };
    if (null != i && i.syntheticException) {
        var u = Re(null == i ? void 0 : i.syntheticException, 1);
        u.length && (l.stacktrace = {
            frames: u,
            type: "raw"
        });
    }
    return {
        $exception_list: [
            l
        ],
        $exception_level: Ae(t.level) ? t.level : "error"
    };
}
function Le(t, i) {
    var { error: e, event: r } = t, s = {
        $exception_list: []
    }, n = e || r;
    if (ve(n) || function(t) {
        return de(t, "DOMException");
    }(n)) {
        var o = n;
        if (function(t) {
            return "stack" in t;
        }(n)) s = Oe(n, i);
        else {
            var a = o.name || (ve(o) ? "DOMError" : "DOMException"), l = o.message ? a + ": " + o.message : a;
            s = Fe(l, B({}, i, {
                overrideExceptionType: ve(o) ? "DOMError" : "DOMException",
                defaultExceptionMessage: l
            }));
        }
        return "code" in o && (s.$exception_DOMException_code = "" + o.code), s;
    }
    if (function(t) {
        return de(t, "ErrorEvent");
    }(n) && n.error) return Oe(n.error, i);
    if (he(n)) return Oe(n, i);
    if (function(t) {
        return de(t, "Object");
    }(n) || le(n)) return De(n, i);
    if (R(e) && T(r)) {
        var u = "Error", h = r, d = r.match(Pe);
        return d && (u = d[1], h = d[2]), Fe(h, B({}, i, {
            overrideExceptionType: u,
            defaultExceptionMessage: h
        }));
    }
    return Fe(n, i);
}
function Ne(t, i, e) {
    try {
        if (!(i in t)) return ()=>{};
        var r = t[i], s = e(r);
        return E(s) && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
            __posthog_wrapped__: {
                enumerable: !1,
                value: !0
            }
        })), t[i] = s, ()=>{
            t[i] = r;
        };
    } catch (t) {
        return ()=>{};
    }
}
class je {
    constructor(i){
        var e;
        this._instance = i, this.ct = (null == t || null == (e = t.location) ? void 0 : e.pathname) || "";
    }
    get isEnabled() {
        return "history_change" === this._instance.config.capture_pageview;
    }
    startIfEnabled() {
        this.isEnabled && (j.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
    }
    stop() {
        this.ft && this.ft(), this.ft = void 0, j.info("History API monitoring stopped");
    }
    monitorHistoryChanges() {
        var i, e;
        if (t && t.history) {
            var r = this;
            null != (i = t.history.pushState) && i.__posthog_wrapped__ || Ne(t.history, "pushState", (t)=>function(i, e, s) {
                    t.call(this, i, e, s), r._t("pushState");
                }), null != (e = t.history.replaceState) && e.__posthog_wrapped__ || Ne(t.history, "replaceState", (t)=>function(i, e, s) {
                    t.call(this, i, e, s), r._t("replaceState");
                }), this.gt();
        }
    }
    _t(i) {
        try {
            var e, r = null == t || null == (e = t.location) ? void 0 : e.pathname;
            if (!r) return;
            r !== this.ct && this.isEnabled && this._instance.capture("$pageview", {
                navigation_type: i
            }), this.ct = r;
        } catch (t) {
            j.error("Error capturing " + i + " pageview", t);
        }
    }
    gt() {
        if (!this.ft) {
            var i = ()=>{
                this._t("popstate");
            };
            st(t, "popstate", i), this.ft = ()=>{
                t && t.removeEventListener("popstate", i);
            };
        }
    }
}
function ze(t) {
    var i, e;
    return (null == (i = JSON.stringify(t, (e = [], function(t, i) {
        if (I(i)) {
            for(; e.length > 0 && e[e.length - 1] !== this;)e.pop();
            return e.includes(i) ? "[Circular]" : (e.push(i), i);
        }
        return i;
    }))) ? void 0 : i.length) || 0;
}
function Ue(t, i) {
    if (void 0 === i && (i = 6606028.8), t.size >= i && t.data.length > 1) {
        var e = Math.floor(t.data.length / 2), r = t.data.slice(0, e), s = t.data.slice(e);
        return [
            Ue({
                size: ze(r),
                data: r,
                sessionId: t.sessionId,
                windowId: t.windowId
            }),
            Ue({
                size: ze(s),
                data: s,
                sessionId: t.sessionId,
                windowId: t.windowId
            })
        ].flatMap((t)=>t);
    }
    return [
        t
    ];
}
var qe = ((t)=>(t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(qe || {}), Be = ((t)=>(t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t[t.CustomElement = 16] = "CustomElement", t))(Be || {}), He = "[SessionRecording]", We = "redacted", Ge = {
    initiatorTypes: [
        "audio",
        "beacon",
        "body",
        "css",
        "early-hint",
        "embed",
        "fetch",
        "frame",
        "iframe",
        "icon",
        "image",
        "img",
        "input",
        "link",
        "navigation",
        "object",
        "ping",
        "script",
        "track",
        "video",
        "xmlhttprequest"
    ],
    maskRequestFn: (t)=>t,
    recordHeaders: !1,
    recordBody: !1,
    recordInitialRequests: !1,
    recordPerformance: !1,
    performanceEntryTypeToObserve: [
        "first-input",
        "navigation",
        "paint",
        "resource"
    ],
    payloadSizeLimitBytes: 1e6,
    payloadHostDenyList: [
        ".lr-ingest.io",
        ".ingest.sentry.io",
        ".clarity.ms",
        "analytics.google.com",
        "bam.nr-data.net"
    ]
}, Je = [
    "authorization",
    "x-forwarded-for",
    "authorization",
    "cookie",
    "set-cookie",
    "x-api-key",
    "x-real-ip",
    "remote-addr",
    "forwarded",
    "proxy-authorization",
    "x-csrf-token",
    "x-csrftoken",
    "x-xsrf-token"
], Ve = [
    "password",
    "secret",
    "passwd",
    "api_key",
    "apikey",
    "auth",
    "credentials",
    "mysql_pwd",
    "privatekey",
    "private_key",
    "token"
], Ke = [
    "/s/",
    "/e/",
    "/i/"
];
function Ye(t, i, e, r) {
    if (O(t)) return t;
    var s = (null == i ? void 0 : i["content-length"]) || function(t) {
        return new Blob([
            t
        ]).size;
    }(t);
    return T(s) && (s = parseInt(s)), s > e ? He + " " + r + " body too large to record (" + s + " bytes)" : t;
}
function Xe(t, i) {
    if (O(t)) return t;
    var e = t;
    return ci(e, !1) || (e = He + " " + i + " body " + We), J(Ve, (t)=>{
        var r, s;
        null != (r = e) && r.length && -1 !== (null == (s = e) ? void 0 : s.indexOf(t)) && (e = He + " " + i + " body " + We + " as might contain: " + t);
    }), e;
}
var Qe = (t, i)=>{
    var e, r, s, n = {
        payloadSizeLimitBytes: Ge.payloadSizeLimitBytes,
        performanceEntryTypeToObserve: [
            ...Ge.performanceEntryTypeToObserve
        ],
        payloadHostDenyList: [
            ...i.payloadHostDenyList || [],
            ...Ge.payloadHostDenyList
        ]
    }, o = !1 !== t.session_recording.recordHeaders && i.recordHeaders, a = !1 !== t.session_recording.recordBody && i.recordBody, l = !1 !== t.capture_performance && i.recordPerformance, u = (e = n, s = Math.min(1e6, null !== (r = e.payloadSizeLimitBytes) && void 0 !== r ? r : 1e6), (t)=>(null != t && t.requestBody && (t.requestBody = Ye(t.requestBody, t.requestHeaders, s, "Request")), null != t && t.responseBody && (t.responseBody = Ye(t.responseBody, t.responseHeaders, s, "Response")), t)), h = (i)=>{
        return u(((t, i)=>{
            var e, r = wi(t.name), s = 0 === i.indexOf("http") ? null == (e = wi(i)) ? void 0 : e.pathname : i;
            "/" === s && (s = "");
            var n = null == r ? void 0 : r.pathname.replace(s || "", "");
            if (!(r && n && Ke.some((t)=>0 === n.indexOf(t)))) return t;
        })((r = (e = i).requestHeaders, O(r) || J(Object.keys(null != r ? r : {}), (t)=>{
            Je.includes(t.toLowerCase()) && (r[t] = We);
        }), e), t.api_host));
        "TURBOPACK unreachable";
        var e, r;
    }, d = E(t.session_recording.maskNetworkRequestFn);
    return d && E(t.session_recording.maskCapturedNetworkRequestFn) && j.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), d && (t.session_recording.maskCapturedNetworkRequestFn = (i)=>{
        var e = t.session_recording.maskNetworkRequestFn({
            url: i.name
        });
        return B({}, i, {
            name: null == e ? void 0 : e.url
        });
    }), n.maskRequestFn = E(t.session_recording.maskCapturedNetworkRequestFn) ? (i)=>{
        var e, r = h(i);
        return r && null !== (e = null == t.session_recording.maskCapturedNetworkRequestFn ? void 0 : t.session_recording.maskCapturedNetworkRequestFn(r)) && void 0 !== e ? e : void 0;
    } : (t)=>(function(t) {
            if (!R(t)) return t.requestBody = Xe(t.requestBody, "Request"), t.responseBody = Xe(t.responseBody, "Response"), t;
        })(h(t)), B({}, Ge, n, {
        recordHeaders: o,
        recordBody: a,
        recordPerformance: l,
        recordInitialRequests: l
    });
};
class Ze {
    constructor(t, i){
        var e, r;
        void 0 === i && (i = {}), this.bt = {}, this.yt = (t)=>{
            if (!this.bt[t]) {
                var i, e;
                this.bt[t] = !0;
                var r = this.wt(t);
                null == (i = (e = this.et).onBlockedNode) || i.call(e, t, r);
            }
        }, this.St = (t)=>{
            var i = this.wt(t);
            if ("svg" !== (null == i ? void 0 : i.nodeName) && i instanceof Element) {
                var e = i.closest("svg");
                if (e) return [
                    this._rrweb.mirror.getId(e),
                    e
                ];
            }
            return [
                t,
                i
            ];
        }, this.wt = (t)=>this._rrweb.mirror.getNode(t), this.$t = (t)=>{
            var i, e, r, s, n, o, a, l;
            return (null !== (i = null == (e = t.removes) ? void 0 : e.length) && void 0 !== i ? i : 0) + (null !== (r = null == (s = t.attributes) ? void 0 : s.length) && void 0 !== r ? r : 0) + (null !== (n = null == (o = t.texts) ? void 0 : o.length) && void 0 !== n ? n : 0) + (null !== (a = null == (l = t.adds) ? void 0 : l.length) && void 0 !== a ? a : 0);
        }, this.throttleMutations = (t)=>{
            if (3 !== t.type || 0 !== t.data.source) return t;
            var i = t.data, e = this.$t(i);
            i.attributes && (i.attributes = i.attributes.filter((t)=>{
                var [i] = this.St(t.id);
                return !this.vt.consumeRateLimit(i) && t;
            }));
            var r = this.$t(i);
            return 0 !== r || e === r ? t : void 0;
        }, this._rrweb = t, this.et = i, this.vt = new ne({
            bucketSize: null !== (e = this.et.bucketSize) && void 0 !== e ? e : 100,
            refillRate: null !== (r = this.et.refillRate) && void 0 !== r ? r : 10,
            refillInterval: 1e3,
            it: this.yt
        });
    }
}
var tr = Uint8Array, ir = Uint16Array, er = Uint32Array, rr = new tr([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]), sr = new tr([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]), nr = new tr([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]), or = function(t, i) {
    for(var e = new ir(31), r = 0; r < 31; ++r)e[r] = i += 1 << t[r - 1];
    var s = new er(e[30]);
    for(r = 1; r < 30; ++r)for(var n = e[r]; n < e[r + 1]; ++n)s[n] = n - e[r] << 5 | r;
    return [
        e,
        s
    ];
}, ar = or(rr, 2), lr = ar[0], ur = ar[1];
lr[28] = 258, ur[258] = 28;
for(var hr = or(sr, 0)[1], dr = new ir(32768), vr = 0; vr < 32768; ++vr){
    var cr = (43690 & vr) >>> 1 | (21845 & vr) << 1;
    cr = (61680 & (cr = (52428 & cr) >>> 2 | (13107 & cr) << 2)) >>> 4 | (3855 & cr) << 4, dr[vr] = ((65280 & cr) >>> 8 | (255 & cr) << 8) >>> 1;
}
var fr = function(t, i, e) {
    for(var r = t.length, s = 0, n = new ir(i); s < r; ++s)++n[t[s] - 1];
    var o, a = new ir(i);
    for(s = 0; s < i; ++s)a[s] = a[s - 1] + n[s - 1] << 1;
    if (e) {
        o = new ir(1 << i);
        var l = 15 - i;
        for(s = 0; s < r; ++s)if (t[s]) for(var u = s << 4 | t[s], h = i - t[s], d = a[t[s] - 1]++ << h, v = d | (1 << h) - 1; d <= v; ++d)o[dr[d] >>> l] = u;
    } else for(o = new ir(r), s = 0; s < r; ++s)o[s] = dr[a[t[s] - 1]++] >>> 15 - t[s];
    return o;
}, pr = new tr(288);
for(vr = 0; vr < 144; ++vr)pr[vr] = 8;
for(vr = 144; vr < 256; ++vr)pr[vr] = 9;
for(vr = 256; vr < 280; ++vr)pr[vr] = 7;
for(vr = 280; vr < 288; ++vr)pr[vr] = 8;
var _r = new tr(32);
for(vr = 0; vr < 32; ++vr)_r[vr] = 5;
var gr = fr(pr, 9, 0), mr = fr(_r, 5, 0), br = function(t) {
    return (t / 8 >> 0) + (7 & t && 1);
}, yr = function(t, i, e) {
    (null == e || e > t.length) && (e = t.length);
    var r = new (t instanceof ir ? ir : t instanceof er ? er : tr)(e - i);
    return r.set(t.subarray(i, e)), r;
}, wr = function(t, i, e) {
    e <<= 7 & i;
    var r = i / 8 >> 0;
    t[r] |= e, t[r + 1] |= e >>> 8;
}, Sr = function(t, i, e) {
    e <<= 7 & i;
    var r = i / 8 >> 0;
    t[r] |= e, t[r + 1] |= e >>> 8, t[r + 2] |= e >>> 16;
}, $r = function(t, i) {
    for(var e = [], r = 0; r < t.length; ++r)t[r] && e.push({
        s: r,
        f: t[r]
    });
    var s = e.length, n = e.slice();
    if (!s) return [
        new tr(0),
        0
    ];
    if (1 == s) {
        var o = new tr(e[0].s + 1);
        return o[e[0].s] = 1, [
            o,
            1
        ];
    }
    e.sort(function(t, i) {
        return t.f - i.f;
    }), e.push({
        s: -1,
        f: 25001
    });
    var a = e[0], l = e[1], u = 0, h = 1, d = 2;
    for(e[0] = {
        s: -1,
        f: a.f + l.f,
        l: a,
        r: l
    }; h != s - 1;)a = e[e[u].f < e[d].f ? u++ : d++], l = e[u != h && e[u].f < e[d].f ? u++ : d++], e[h++] = {
        s: -1,
        f: a.f + l.f,
        l: a,
        r: l
    };
    var v = n[0].s;
    for(r = 1; r < s; ++r)n[r].s > v && (v = n[r].s);
    var c = new ir(v + 1), f = kr(e[h - 1], c, 0);
    if (f > i) {
        r = 0;
        var p = 0, _ = f - i, g = 1 << _;
        for(n.sort(function(t, i) {
            return c[i.s] - c[t.s] || t.f - i.f;
        }); r < s; ++r){
            var m = n[r].s;
            if (!(c[m] > i)) break;
            p += g - (1 << f - c[m]), c[m] = i;
        }
        for(p >>>= _; p > 0;){
            var b = n[r].s;
            c[b] < i ? p -= 1 << i - c[b]++ - 1 : ++r;
        }
        for(; r >= 0 && p; --r){
            var y = n[r].s;
            c[y] == i && (--c[y], ++p);
        }
        f = i;
    }
    return [
        new tr(c),
        f
    ];
}, kr = function(t, i, e) {
    return -1 == t.s ? Math.max(kr(t.l, i, e + 1), kr(t.r, i, e + 1)) : i[t.s] = e;
}, xr = function(t) {
    for(var i = t.length; i && !t[--i];);
    for(var e = new ir(++i), r = 0, s = t[0], n = 1, o = function(t) {
        e[r++] = t;
    }, a = 1; a <= i; ++a)if (t[a] == s && a != i) ++n;
    else {
        if (!s && n > 2) {
            for(; n > 138; n -= 138)o(32754);
            n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0);
        } else if (n > 3) {
            for(o(s), --n; n > 6; n -= 6)o(8304);
            n > 2 && (o(n - 3 << 5 | 8208), n = 0);
        }
        for(; n--;)o(s);
        n = 1, s = t[a];
    }
    return [
        e.subarray(0, r),
        i
    ];
}, Er = function(t, i) {
    for(var e = 0, r = 0; r < i.length; ++r)e += t[r] * i[r];
    return e;
}, Ir = function(t, i, e) {
    var r = e.length, s = br(i + 2);
    t[s] = 255 & r, t[s + 1] = r >>> 8, t[s + 2] = 255 ^ t[s], t[s + 3] = 255 ^ t[s + 1];
    for(var n = 0; n < r; ++n)t[s + n + 4] = e[n];
    return 8 * (s + 4 + r);
}, Pr = function(t, i, e, r, s, n, o, a, l, u, h) {
    wr(i, h++, e), ++s[256];
    for(var d = $r(s, 15), v = d[0], c = d[1], f = $r(n, 15), p = f[0], _ = f[1], g = xr(v), m = g[0], b = g[1], y = xr(p), w = y[0], S = y[1], $ = new ir(19), k = 0; k < m.length; ++k)$[31 & m[k]]++;
    for(k = 0; k < w.length; ++k)$[31 & w[k]]++;
    for(var x = $r($, 7), E = x[0], I = x[1], P = 19; P > 4 && !E[nr[P - 1]]; --P);
    var R, T, M, C, O = u + 5 << 3, F = Er(s, pr) + Er(n, _r) + o, A = Er(s, v) + Er(n, p) + o + 14 + 3 * P + Er($, E) + (2 * $[16] + 3 * $[17] + 7 * $[18]);
    if (O <= F && O <= A) return Ir(i, h, t.subarray(l, l + u));
    if (wr(i, h, 1 + (A < F)), h += 2, A < F) {
        R = fr(v, c, 0), T = v, M = fr(p, _, 0), C = p;
        var D = fr(E, I, 0);
        wr(i, h, b - 257), wr(i, h + 5, S - 1), wr(i, h + 10, P - 4), h += 14;
        for(k = 0; k < P; ++k)wr(i, h + 3 * k, E[nr[k]]);
        h += 3 * P;
        for(var L = [
            m,
            w
        ], N = 0; N < 2; ++N){
            var j = L[N];
            for(k = 0; k < j.length; ++k){
                var z = 31 & j[k];
                wr(i, h, D[z]), h += E[z], z > 15 && (wr(i, h, j[k] >>> 5 & 127), h += j[k] >>> 12);
            }
        }
    } else R = gr, T = pr, M = mr, C = _r;
    for(k = 0; k < a; ++k)if (r[k] > 255) {
        z = r[k] >>> 18 & 31;
        Sr(i, h, R[z + 257]), h += T[z + 257], z > 7 && (wr(i, h, r[k] >>> 23 & 31), h += rr[z]);
        var U = 31 & r[k];
        Sr(i, h, M[U]), h += C[U], U > 3 && (Sr(i, h, r[k] >>> 5 & 8191), h += sr[U]);
    } else Sr(i, h, R[r[k]]), h += T[r[k]];
    return Sr(i, h, R[256]), h + T[256];
}, Rr = new er([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]), Tr = function() {
    for(var t = new er(256), i = 0; i < 256; ++i){
        for(var e = i, r = 9; --r;)e = (1 & e && 3988292384) ^ e >>> 1;
        t[i] = e;
    }
    return t;
}(), Mr = function() {
    var t = 4294967295;
    return {
        p: function(i) {
            for(var e = t, r = 0; r < i.length; ++r)e = Tr[255 & e ^ i[r]] ^ e >>> 8;
            t = e;
        },
        d: function() {
            return 4294967295 ^ t;
        }
    };
}, Cr = function(t, i, e, r, s) {
    return function(t, i, e, r, s, n) {
        var o = t.length, a = new tr(r + o + 5 * (1 + Math.floor(o / 7e3)) + s), l = a.subarray(r, a.length - s), u = 0;
        if (!i || o < 8) for(var h = 0; h <= o; h += 65535){
            var d = h + 65535;
            d < o ? u = Ir(l, u, t.subarray(h, d)) : (l[h] = n, u = Ir(l, u, t.subarray(h, o)));
        }
        else {
            for(var v = Rr[i - 1], c = v >>> 13, f = 8191 & v, p = (1 << e) - 1, _ = new ir(32768), g = new ir(p + 1), m = Math.ceil(e / 3), b = 2 * m, y = function(i) {
                return (t[i] ^ t[i + 1] << m ^ t[i + 2] << b) & p;
            }, w = new er(25e3), S = new ir(288), $ = new ir(32), k = 0, x = 0, E = (h = 0, 0), I = 0, P = 0; h < o; ++h){
                var R = y(h), T = 32767 & h, M = g[R];
                if (_[T] = M, g[R] = T, I <= h) {
                    var C = o - h;
                    if ((k > 7e3 || E > 24576) && C > 423) {
                        u = Pr(t, l, 0, w, S, $, x, E, P, h - P, u), E = k = x = 0, P = h;
                        for(var O = 0; O < 286; ++O)S[O] = 0;
                        for(O = 0; O < 30; ++O)$[O] = 0;
                    }
                    var F = 2, A = 0, D = f, L = T - M & 32767;
                    if (C > 2 && R == y(h - L)) for(var N = Math.min(c, C) - 1, j = Math.min(32767, h), z = Math.min(258, C); L <= j && --D && T != M;){
                        if (t[h + F] == t[h + F - L]) {
                            for(var U = 0; U < z && t[h + U] == t[h + U - L]; ++U);
                            if (U > F) {
                                if (F = U, A = L, U > N) break;
                                var q = Math.min(L, U - 2), B = 0;
                                for(O = 0; O < q; ++O){
                                    var H = h - L + O + 32768 & 32767, W = H - _[H] + 32768 & 32767;
                                    W > B && (B = W, M = H);
                                }
                            }
                        }
                        L += (T = M) - (M = _[T]) + 32768 & 32767;
                    }
                    if (A) {
                        w[E++] = 268435456 | ur[F] << 18 | hr[A];
                        var G = 31 & ur[F], J = 31 & hr[A];
                        x += rr[G] + sr[J], ++S[257 + G], ++$[J], I = h + F, ++k;
                    } else w[E++] = t[h], ++S[t[h]];
                }
            }
            u = Pr(t, l, n, w, S, $, x, E, P, h - P, u);
        }
        return yr(a, 0, r + br(u) + s);
    }(t, null == i.level ? 6 : i.level, null == i.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + i.mem, e, r, !s);
}, Or = function(t, i, e) {
    for(; e; ++i)t[i] = e, e >>>= 8;
}, Fr = function(t, i) {
    var e = i.filename;
    if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = i.level < 2 ? 4 : 9 == i.level ? 2 : 0, t[9] = 3, 0 != i.mtime && Or(t, 4, Math.floor(new Date(i.mtime || Date.now()) / 1e3)), e) {
        t[3] = 8;
        for(var r = 0; r <= e.length; ++r)t[r + 10] = e.charCodeAt(r);
    }
}, Ar = function(t) {
    return 10 + (t.filename && t.filename.length + 1 || 0);
};
function Dr(t, i) {
    void 0 === i && (i = {});
    var e = Mr(), r = t.length;
    e.p(t);
    var s = Cr(t, i, Ar(i), 8), n = s.length;
    return Fr(s, i), Or(s, n - 8, e.d()), Or(s, n - 4, r), s;
}
function Lr(t, i) {
    var e = t.length;
    if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(t);
    for(var r = new tr(t.length + (t.length >>> 1)), s = 0, n = function(t) {
        r[s++] = t;
    }, o = 0; o < e; ++o){
        if (s + 5 > r.length) {
            var a = new tr(s + 8 + (e - o << 1));
            a.set(r), r = a;
        }
        var l = t.charCodeAt(o);
        l < 128 || i ? n(l) : l < 2048 ? (n(192 | l >>> 6), n(128 | 63 & l)) : l > 55295 && l < 57344 ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & t.charCodeAt(++o)) >>> 18), n(128 | l >>> 12 & 63), n(128 | l >>> 6 & 63), n(128 | 63 & l)) : (n(224 | l >>> 12), n(128 | l >>> 6 & 63), n(128 | 63 & l));
    }
    return yr(r, 0, s);
}
function Nr(t, i) {
    return function(t) {
        for(var i = 0, e = 0; e < t.length; e++)i = (i << 5) - i + t.charCodeAt(e), i |= 0;
        return Math.abs(i);
    }(t) % 100 < se(100 * i, 0, 100);
}
var jr = "disabled", zr = "sampled", Ur = "active", qr = "buffering", Br = "paused", Hr = "trigger", Wr = Hr + "_activated", Gr = Hr + "_pending", Jr = Hr + "_" + jr;
function Vr(t, i) {
    return i.some((i)=>"regex" === i.matching && new RegExp(i.url).test(t));
}
class Kr {
    constructor(t){
        this.kt = t;
    }
    triggerStatus(t) {
        var i = this.kt.map((i)=>i.triggerStatus(t));
        return i.includes(Wr) ? Wr : i.includes(Gr) ? Gr : Jr;
    }
    stop() {
        this.kt.forEach((t)=>t.stop());
    }
}
class Yr {
    constructor(t){
        this.kt = t;
    }
    triggerStatus(t) {
        var i = new Set;
        for (var e of this.kt)i.add(e.triggerStatus(t));
        switch(i.delete(Jr), i.size){
            case 0:
                return Jr;
            case 1:
                return Array.from(i)[0];
            default:
                return Gr;
        }
    }
    stop() {
        this.kt.forEach((t)=>t.stop());
    }
}
class Xr {
    triggerStatus() {
        return Gr;
    }
    stop() {}
}
class Qr {
    constructor(t){
        this.xt = [], this.Et = [], this.urlBlocked = !1, this._instance = t;
    }
    onRemoteConfig(t) {
        var i, e;
        this.xt = (null == (i = t.sessionRecording) ? void 0 : i.urlTriggers) || [], this.Et = (null == (e = t.sessionRecording) ? void 0 : e.urlBlocklist) || [];
    }
    It(t) {
        var i;
        return 0 === this.xt.length ? Jr : (null == (i = this._instance) ? void 0 : i.get_property(xt)) === t ? Wr : Gr;
    }
    triggerStatus(t) {
        var i = this.It(t), e = i === Wr ? Wr : i === Gr ? Gr : Jr;
        return this._instance.register_for_session({
            $sdk_debug_replay_url_trigger_status: e
        }), e;
    }
    checkUrlTriggerConditions(i, e, r) {
        if (void 0 !== t && t.location.href) {
            var s = t.location.href, n = this.urlBlocked, o = Vr(s, this.Et);
            n && o || (o && !n ? i() : !o && n && e(), Vr(s, this.xt) && r("url"));
        }
    }
    stop() {}
}
class Zr {
    constructor(t){
        this.linkedFlag = null, this.linkedFlagSeen = !1, this.Pt = ()=>{}, this._instance = t;
    }
    triggerStatus() {
        var t = Gr;
        return O(this.linkedFlag) && (t = Jr), this.linkedFlagSeen && (t = Wr), this._instance.register_for_session({
            $sdk_debug_replay_linked_flag_trigger_status: t
        }), t;
    }
    onRemoteConfig(t, i) {
        var e;
        if (this.linkedFlag = (null == (e = t.sessionRecording) ? void 0 : e.linkedFlag) || null, !O(this.linkedFlag) && !this.linkedFlagSeen) {
            var r = T(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag, s = T(this.linkedFlag) ? null : this.linkedFlag.variant;
            this.Pt = this._instance.onFeatureFlags((t, e)=>{
                var n = !1;
                if (I(e) && r in e) {
                    var o = e[r];
                    n = A(o) ? !0 === o : s ? o === s : !!o;
                }
                this.linkedFlagSeen = n, n && i(r, s);
            });
        }
    }
    stop() {
        this.Pt();
    }
}
class ts {
    constructor(t){
        this.Rt = [], this._instance = t;
    }
    onRemoteConfig(t) {
        var i;
        this.Rt = (null == (i = t.sessionRecording) ? void 0 : i.eventTriggers) || [];
    }
    Tt(t) {
        var i;
        return 0 === this.Rt.length ? Jr : (null == (i = this._instance) ? void 0 : i.get_property(Et)) === t ? Wr : Gr;
    }
    triggerStatus(t) {
        var i = this.Tt(t), e = i === Wr ? Wr : i === Gr ? Gr : Jr;
        return this._instance.register_for_session({
            $sdk_debug_replay_event_trigger_status: e
        }), e;
    }
    stop() {}
}
function is(t) {
    return t.isRecordingEnabled ? qr : jr;
}
function es(t) {
    if (!t.receivedDecide) return qr;
    if (!t.isRecordingEnabled) return jr;
    if (t.urlTriggerMatching.urlBlocked) return Br;
    var i = !0 === t.isSampled, e = new Kr([
        t.eventTriggerMatching,
        t.urlTriggerMatching,
        t.linkedFlagMatching
    ]).triggerStatus(t.sessionId);
    return i ? zr : e === Wr ? Ur : e === Gr ? qr : !1 === t.isSampled ? jr : Ur;
}
function rs(t) {
    if (!t.receivedDecide) return qr;
    if (!t.isRecordingEnabled) return jr;
    if (t.urlTriggerMatching.urlBlocked) return Br;
    var i = new Yr([
        t.eventTriggerMatching,
        t.urlTriggerMatching,
        t.linkedFlagMatching
    ]).triggerStatus(t.sessionId), e = i !== Jr, r = A(t.isSampled);
    return e && i === Gr ? qr : e && i === Jr || r && !t.isSampled ? jr : !0 === t.isSampled ? zr : Ur;
}
var ss = "[SessionRecording]", ns = z(ss);
function os() {
    var t;
    return null == v || null == (t = v.__PosthogExtensions__) || null == (t = t.rrweb) ? void 0 : t.record;
}
var as = 3e5, ls = [
    Be.MouseMove,
    Be.MouseInteraction,
    Be.Scroll,
    Be.ViewportResize,
    Be.Input,
    Be.TouchMove,
    Be.MediaInteraction,
    Be.Drag
], us = (t)=>({
        rrwebMethod: t,
        enqueuedAt: Date.now(),
        attempt: 1
    });
function hs(t) {
    return function(t, i) {
        for(var e = "", r = 0; r < t.length;){
            var s = t[r++];
            s < 128 || i ? e += String.fromCharCode(s) : ("TURBOPACK unreachable", undefined);
        }
        return e;
    }(Dr(Lr(JSON.stringify(t))), !0);
}
function ds(t) {
    return t.type === qe.Custom && "sessionIdle" === t.data.tag;
}
class vs {
    get sessionId() {
        return this.Mt;
    }
    get Ct() {
        return this._instance.config.session_recording.session_idle_threshold_ms || 3e5;
    }
    get started() {
        return this.Ot;
    }
    get Ft() {
        if (!this._instance.sessionManager) throw new Error(ss + " must be started with a valid sessionManager.");
        return this._instance.sessionManager;
    }
    get At() {
        var t, i;
        return this.Dt.triggerStatus(this.sessionId) === Gr ? 6e4 : null !== (t = null == (i = this._instance.config.session_recording) ? void 0 : i.full_snapshot_interval_millis) && void 0 !== t ? t : as;
    }
    get Lt() {
        var t = this._instance.get_property(kt);
        return A(t) ? t : null;
    }
    get Nt() {
        var t, i, e = null == (t = this.M) ? void 0 : t.data[(null == (i = this.M) ? void 0 : i.data.length) - 1], { sessionStartTimestamp: r } = this.Ft.checkAndGetSessionAndWindowId(!0);
        return e ? e.timestamp - r : null;
    }
    get jt() {
        var i = !!this._instance.get_property(pt), e = !this._instance.config.disable_session_recording;
        return t && i && e;
    }
    get zt() {
        var t = !!this._instance.get_property(_t), i = this._instance.config.enable_recording_console_log;
        return null != i ? i : t;
    }
    get Ut() {
        var t, i, e, r, s, n, o = this._instance.config.session_recording.captureCanvas, a = this._instance.get_property(bt), l = null !== (t = null !== (i = null == o ? void 0 : o.recordCanvas) && void 0 !== i ? i : null == a ? void 0 : a.enabled) && void 0 !== t && t, u = null !== (e = null !== (r = null == o ? void 0 : o.canvasFps) && void 0 !== r ? r : null == a ? void 0 : a.fps) && void 0 !== e ? e : 4, h = null !== (s = null !== (n = null == o ? void 0 : o.canvasQuality) && void 0 !== n ? n : null == a ? void 0 : a.quality) && void 0 !== s ? s : .4;
        if ("string" == typeof h) {
            var d = parseFloat(h);
            h = isNaN(d) ? .4 : d;
        }
        return {
            enabled: l,
            fps: se(u, 0, 12, "canvas recording fps", 4),
            quality: se(h, 0, 1, "canvas recording quality", .4)
        };
    }
    get qt() {
        var t, i, e = this._instance.get_property(gt), r = {
            recordHeaders: null == (t = this._instance.config.session_recording) ? void 0 : t.recordHeaders,
            recordBody: null == (i = this._instance.config.session_recording) ? void 0 : i.recordBody
        }, s = (null == r ? void 0 : r.recordHeaders) || (null == e ? void 0 : e.recordHeaders), n = (null == r ? void 0 : r.recordBody) || (null == e ? void 0 : e.recordBody), o = I(this._instance.config.capture_performance) ? this._instance.config.capture_performance.network_timing : this._instance.config.capture_performance, a = !!(A(o) ? o : null == e ? void 0 : e.capturePerformance);
        return s || n || a ? {
            recordHeaders: s,
            recordBody: n,
            recordPerformance: a
        } : void 0;
    }
    get Bt() {
        var t, i, e, r, s, n, o = this._instance.get_property(mt), a = {
            maskAllInputs: null == (t = this._instance.config.session_recording) ? void 0 : t.maskAllInputs,
            maskTextSelector: null == (i = this._instance.config.session_recording) ? void 0 : i.maskTextSelector,
            blockSelector: null == (e = this._instance.config.session_recording) ? void 0 : e.blockSelector
        }, l = null !== (r = null == a ? void 0 : a.maskAllInputs) && void 0 !== r ? r : null == o ? void 0 : o.maskAllInputs, u = null !== (s = null == a ? void 0 : a.maskTextSelector) && void 0 !== s ? s : null == o ? void 0 : o.maskTextSelector, h = null !== (n = null == a ? void 0 : a.blockSelector) && void 0 !== n ? n : null == o ? void 0 : o.blockSelector;
        return R(l) && R(u) && R(h) ? void 0 : {
            maskAllInputs: null == l || l,
            maskTextSelector: u,
            blockSelector: h
        };
    }
    get Ht() {
        var t = this._instance.get_property(yt);
        return F(t) ? t : null;
    }
    get Wt() {
        var t = this._instance.get_property(wt);
        return F(t) ? t : null;
    }
    get status() {
        return this.Gt ? this.Jt({
            receivedDecide: this.Gt,
            isRecordingEnabled: this.jt,
            isSampled: this.Lt,
            urlTriggerMatching: this.Vt,
            eventTriggerMatching: this.Kt,
            linkedFlagMatching: this.Yt,
            sessionId: this.sessionId
        }) : qr;
    }
    constructor(t){
        if (this.Jt = is, this.Gt = !1, this.Xt = [], this.Qt = "unknown", this.Zt = Date.now(), this.Dt = new Xr, this.ti = void 0, this.ii = void 0, this.ei = void 0, this.ri = void 0, this.si = void 0, this._forceAllowLocalhostNetworkCapture = !1, this.ni = ()=>{
            this.oi();
        }, this.ai = ()=>{
            this.li("browser offline", {});
        }, this.ui = ()=>{
            this.li("browser online", {});
        }, this.hi = ()=>{
            if (null != o && o.visibilityState) {
                var t = "window " + o.visibilityState;
                this.li(t, {});
            }
        }, this._instance = t, this.Ot = !1, this.di = "/s/", this.vi = void 0, this.Gt = !1, !this._instance.sessionManager) throw ns.error("started without valid sessionManager"), new Error(ss + " started without valid sessionManager. This is a bug.");
        if (this._instance.config.__preview_experimental_cookieless_mode) throw new Error(ss + " cannot be used with __preview_experimental_cookieless_mode.");
        this.Yt = new Zr(this._instance), this.Vt = new Qr(this._instance), this.Kt = new ts(this._instance);
        var { sessionId: i, windowId: e } = this.Ft.checkAndGetSessionAndWindowId();
        this.Mt = i, this.ci = e, this.M = this.fi(), this.Ct >= this.Ft.sessionTimeoutMs && ns.warn("session_idle_threshold_ms (" + this.Ct + ") is greater than the session timeout (" + this.Ft.sessionTimeoutMs + "). Session will never be detected as idle");
    }
    startIfEnabledOrStop(i) {
        this.jt ? (this.pi(i), st(t, "beforeunload", this.ni), st(t, "offline", this.ai), st(t, "online", this.ui), st(t, "visibilitychange", this.hi), this.gi(), this.mi(), O(this.ti) && (this.ti = this._instance.on("eventCaptured", (t)=>{
            try {
                if ("$pageview" === t.event) {
                    var i = null != t && t.properties.$current_url ? this.bi(null == t ? void 0 : t.properties.$current_url) : "";
                    if (!i) return;
                    this.li("$pageview", {
                        href: i
                    });
                }
            } catch (t) {
                ns.error("Could not add $pageview to rrweb session", t);
            }
        })), this.ii || (this.ii = this.Ft.onSessionId((t, i, e)=>{
            var r, s;
            e && (this.li("$session_id_change", {
                sessionId: t,
                windowId: i,
                changeReason: e
            }), null == (r = this._instance) || null == (r = r.persistence) || r.unregister(Et), null == (s = this._instance) || null == (s = s.persistence) || s.unregister(xt));
        }))) : this.stopRecording();
    }
    stopRecording() {
        var i, e, r, s;
        this.Ot && this.vi && (this.vi(), this.vi = void 0, this.Ot = !1, null == t || t.removeEventListener("beforeunload", this.ni), null == t || t.removeEventListener("offline", this.ai), null == t || t.removeEventListener("online", this.ui), null == t || t.removeEventListener("visibilitychange", this.hi), this.fi(), clearInterval(this.yi), null == (i = this.ti) || i.call(this), this.ti = void 0, null == (e = this.si) || e.call(this), this.si = void 0, null == (r = this.ii) || r.call(this), this.ii = void 0, null == (s = this.ri) || s.call(this), this.ri = void 0, this.Kt.stop(), this.Vt.stop(), this.Yt.stop(), ns.info("stopped"));
    }
    wi() {
        var t;
        null == (t = this._instance.persistence) || t.unregister(kt);
    }
    Si(t) {
        var i, e = this.Mt !== t, r = this.Ht;
        if (F(r)) {
            var s = this.Lt, n = e || !A(s), o = n ? Nr(t, r) : s;
            n && (o ? this.$i(zr) : ns.warn("Sample rate (" + r + ") has determined that this sessionId (" + t + ") will not be sent to the server."), this.li("samplingDecisionMade", {
                sampleRate: r,
                isSampled: o
            })), null == (i = this._instance.persistence) || i.register({
                [kt]: o
            });
        } else this.wi();
    }
    onRemoteConfig(t) {
        var i, e, r, s;
        (this.li("$remote_config_received", t), this.ki(t), null != (i = t.sessionRecording) && i.endpoint) && (this.di = null == (s = t.sessionRecording) ? void 0 : s.endpoint);
        this.gi(), "any" === (null == (e = t.sessionRecording) ? void 0 : e.triggerMatchType) ? (this.Jt = es, this.Dt = new Kr([
            this.Kt,
            this.Vt
        ])) : (this.Jt = rs, this.Dt = new Yr([
            this.Kt,
            this.Vt
        ])), this._instance.register_for_session({
            $sdk_debug_replay_remote_trigger_matching_config: null == (r = t.sessionRecording) ? void 0 : r.triggerMatchType
        }), this.Vt.onRemoteConfig(t), this.Kt.onRemoteConfig(t), this.Yt.onRemoteConfig(t, (t, i)=>{
            this.$i("linked_flag_matched", {
                flag: t,
                variant: i
            });
        }), this.Gt = !0, this.startIfEnabledOrStop();
    }
    gi() {
        F(this.Ht) && O(this.ri) && (this.ri = this.Ft.onSessionId((t)=>{
            this.Si(t);
        }));
    }
    ki(t) {
        if (this._instance.persistence) {
            var i, e = this._instance.persistence, r = ()=>{
                var i, r, s, n, o, a, l, u, h, d = null == (i = t.sessionRecording) ? void 0 : i.sampleRate, v = O(d) ? null : parseFloat(d);
                O(v) && this.wi();
                var c = null == (r = t.sessionRecording) ? void 0 : r.minimumDurationMilliseconds;
                e.register({
                    [pt]: !!t.sessionRecording,
                    [_t]: null == (s = t.sessionRecording) ? void 0 : s.consoleLogRecordingEnabled,
                    [gt]: B({
                        capturePerformance: t.capturePerformance
                    }, null == (n = t.sessionRecording) ? void 0 : n.networkPayloadCapture),
                    [mt]: null == (o = t.sessionRecording) ? void 0 : o.masking,
                    [bt]: {
                        enabled: null == (a = t.sessionRecording) ? void 0 : a.recordCanvas,
                        fps: null == (l = t.sessionRecording) ? void 0 : l.canvasFps,
                        quality: null == (u = t.sessionRecording) ? void 0 : u.canvasQuality
                    },
                    [yt]: v,
                    [wt]: R(c) ? null : c,
                    [St]: null == (h = t.sessionRecording) ? void 0 : h.scriptConfig
                });
            };
            r(), null == (i = this.ei) || i.call(this), this.ei = this.Ft.onSessionId(r);
        }
    }
    log(t, i) {
        var e;
        void 0 === i && (i = "log"), null == (e = this._instance.sessionRecording) || e.onRRwebEmit({
            type: 6,
            data: {
                plugin: "rrweb/console@1",
                payload: {
                    level: i,
                    trace: [],
                    payload: [
                        JSON.stringify(t)
                    ]
                }
            },
            timestamp: Date.now()
        });
    }
    pi(t) {
        if (!R(Object.assign) && !R(Array.from) && !(this.Ot || this._instance.config.disable_session_recording || this._instance.consent.isOptedOut())) {
            var i;
            if (this.Ot = !0, this.Ft.checkAndGetSessionAndWindowId(), os()) this.xi();
            else null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, this.Ei, (t)=>{
                if (t) return ns.error("could not load recorder", t);
                this.xi();
            });
            ns.info("starting"), this.status === Ur && this.$i(t || "recording_initialized");
        }
    }
    get Ei() {
        var t;
        return (null == (t = this._instance) || null == (t = t.persistence) || null == (t = t.get_property(St)) ? void 0 : t.script) || "recorder";
    }
    Ii(t) {
        var i;
        return 3 === t.type && -1 !== ls.indexOf(null == (i = t.data) ? void 0 : i.source);
    }
    Pi(t) {
        var i = this.Ii(t);
        i || this.Qt || t.timestamp - this.Zt > this.Ct && (this.Qt = !0, clearInterval(this.yi), this.li("sessionIdle", {
            eventTimestamp: t.timestamp,
            lastActivityTimestamp: this.Zt,
            threshold: this.Ct,
            bufferLength: this.M.data.length,
            bufferSize: this.M.size
        }), this.oi());
        var e = !1;
        if (i && (this.Zt = t.timestamp, this.Qt)) {
            var r = "unknown" === this.Qt;
            this.Qt = !1, r || (this.li("sessionNoLongerIdle", {
                reason: "user activity",
                type: t.type
            }), e = !0);
        }
        if (!this.Qt) {
            var { windowId: s, sessionId: n } = this.Ft.checkAndGetSessionAndWindowId(!i, t.timestamp), o = this.Mt !== n, a = this.ci !== s;
            this.ci = s, this.Mt = n, o || a ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : e && this.Ri();
        }
    }
    Ti(t) {
        try {
            return t.rrwebMethod(), !0;
        } catch (i) {
            return this.Xt.length < 10 ? this.Xt.push({
                enqueuedAt: t.enqueuedAt || Date.now(),
                attempt: t.attempt++,
                rrwebMethod: t.rrwebMethod
            }) : ns.warn("could not emit queued rrweb event.", i, t), !1;
        }
    }
    li(t, i) {
        return this.Ti(us(()=>os().addCustomEvent(t, i)));
    }
    Mi() {
        return this.Ti(us(()=>os().takeFullSnapshot()));
    }
    xi() {
        var t, i, e, r, s = {
            blockClass: "ph-no-capture",
            blockSelector: void 0,
            ignoreClass: "ph-ignore-input",
            maskTextClass: "ph-mask",
            maskTextSelector: void 0,
            maskTextFn: void 0,
            maskAllInputs: !0,
            maskInputOptions: {
                password: !0
            },
            maskInputFn: void 0,
            slimDOMOptions: {},
            collectFonts: !1,
            inlineStylesheet: !0,
            recordCrossOriginIframes: !1
        }, n = this._instance.config.session_recording;
        for (var [o, a] of Object.entries(n || {}))o in s && ("maskInputOptions" === o ? s.maskInputOptions = B({
            password: !0
        }, a) : s[o] = a);
        (this.Ut && this.Ut.enabled && (s.recordCanvas = !0, s.sampling = {
            canvas: this.Ut.fps
        }, s.dataURLOptions = {
            type: "image/webp",
            quality: this.Ut.quality
        }), this.Bt) && (s.maskAllInputs = null === (i = this.Bt.maskAllInputs) || void 0 === i || i, s.maskTextSelector = null !== (e = this.Bt.maskTextSelector) && void 0 !== e ? e : void 0, s.blockSelector = null !== (r = this.Bt.blockSelector) && void 0 !== r ? r : void 0);
        var l = os();
        if (l) {
            this.Ci = null !== (t = this.Ci) && void 0 !== t ? t : new Ze(l, {
                refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
                bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
                onBlockedNode: (t, i)=>{
                    var e = "Too many mutations on node '" + t + "'. Rate limiting. This could be due to SVG animations or something similar";
                    ns.info(e, {
                        node: i
                    }), this.log(ss + " " + e, "warn");
                }
            });
            var u = this.Oi();
            this.vi = l(B({
                emit: (t)=>{
                    this.onRRwebEmit(t);
                },
                plugins: u
            }, s)), this.Zt = Date.now(), this.Qt = A(this.Qt) ? this.Qt : "unknown", this.li("$session_options", {
                sessionRecordingOptions: s,
                activePlugins: u.map((t)=>null == t ? void 0 : t.name)
            }), this.li("$posthog_config", {
                config: this._instance.config
            });
        } else ns.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    }
    Ri() {
        if (this.yi && clearInterval(this.yi), !0 !== this.Qt) {
            var t = this.At;
            t && (this.yi = setInterval(()=>{
                this.Mi();
            }, t));
        }
    }
    Oi() {
        var t, i, e = [], r = null == (t = v.__PosthogExtensions__) || null == (t = t.rrwebPlugins) ? void 0 : t.getRecordConsolePlugin;
        r && this.zt && e.push(r());
        var s = null == (i = v.__PosthogExtensions__) || null == (i = i.rrwebPlugins) ? void 0 : i.getRecordNetworkPlugin;
        this.qt && E(s) && (!yi.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(s(Qe(this._instance.config, this.qt))) : ns.info("NetworkCapture not started because we are on localhost."));
        return e;
    }
    onRRwebEmit(t) {
        var i;
        if (this.Fi(), t && I(t)) {
            if (t.type === qe.Meta) {
                var e = this.bi(t.data.href);
                if (this.Ai = e, !e) return;
                t.data.href = e;
            } else this.Di();
            if (this.Vt.checkUrlTriggerConditions(()=>this.Li(), ()=>this.Ni(), (t)=>this.ji(t)), !this.Vt.urlBlocked || (r = t).type === qe.Custom && "recording paused" === r.data.tag) {
                var r;
                t.type === qe.FullSnapshot && this.Ri(), t.type === qe.FullSnapshot && this.Gt && this.Dt.triggerStatus(this.sessionId) === Gr && this.fi();
                var s = this.Ci ? this.Ci.throttleMutations(t) : t;
                if (s) {
                    var n = function(t) {
                        var i = t;
                        if (i && I(i) && 6 === i.type && I(i.data) && "rrweb/console@1" === i.data.plugin) {
                            i.data.payload.payload.length > 10 && (i.data.payload.payload = i.data.payload.payload.slice(0, 10), i.data.payload.payload.push("...[truncated]"));
                            for(var e = [], r = 0; r < i.data.payload.payload.length; r++)i.data.payload.payload[r] && i.data.payload.payload[r].length > 2e3 ? e.push(i.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : e.push(i.data.payload.payload[r]);
                            return i.data.payload.payload = e, t;
                        }
                        return t;
                    }(s);
                    if (this.Pi(n), !0 !== this.Qt || ds(n)) {
                        if (ds(n)) {
                            var o = n.data.payload;
                            if (o) {
                                var a = o.lastActivityTimestamp, l = o.threshold;
                                n.timestamp = a + l;
                            }
                        }
                        var u = null === (i = this._instance.config.session_recording.compress_events) || void 0 === i || i ? function(t) {
                            if (ze(t) < 1024) return t;
                            try {
                                if (t.type === qe.FullSnapshot) return B({}, t, {
                                    data: hs(t.data),
                                    cv: "2024-10"
                                });
                                if (t.type === qe.IncrementalSnapshot && t.data.source === Be.Mutation) return B({}, t, {
                                    cv: "2024-10",
                                    data: B({}, t.data, {
                                        texts: hs(t.data.texts),
                                        attributes: hs(t.data.attributes),
                                        removes: hs(t.data.removes),
                                        adds: hs(t.data.adds)
                                    })
                                });
                                if (t.type === qe.IncrementalSnapshot && t.data.source === Be.StyleSheetRule) return B({}, t, {
                                    cv: "2024-10",
                                    data: B({}, t.data, {
                                        adds: t.data.adds ? hs(t.data.adds) : void 0,
                                        removes: t.data.removes ? hs(t.data.removes) : void 0
                                    })
                                });
                            } catch (t) {
                                ns.error("could not compress event - will use uncompressed event", t);
                            }
                            return t;
                        }(n) : n, h = {
                            $snapshot_bytes: ze(u),
                            $snapshot_data: u,
                            $session_id: this.Mt,
                            $window_id: this.ci
                        };
                        this.status !== jr ? this.zi(h) : this.fi();
                    }
                }
            }
        }
    }
    Di() {
        if (!this._instance.config.capture_pageview && t) {
            var i = this.bi(t.location.href);
            this.Ai !== i && (this.li("$url_changed", {
                href: i
            }), this.Ai = i);
        }
    }
    Fi() {
        if (this.Xt.length) {
            var t = [
                ...this.Xt
            ];
            this.Xt = [], t.forEach((t)=>{
                Date.now() - t.enqueuedAt <= 2e3 && this.Ti(t);
            });
        }
    }
    bi(t) {
        var i = this._instance.config.session_recording;
        if (i.maskNetworkRequestFn) {
            var e, r = {
                url: t
            };
            return null == (e = r = i.maskNetworkRequestFn(r)) ? void 0 : e.url;
        }
        return t;
    }
    fi() {
        return this.M = {
            size: 0,
            data: [],
            sessionId: this.Mt,
            windowId: this.ci
        }, this.M;
    }
    oi() {
        this.Ui && (clearTimeout(this.Ui), this.Ui = void 0);
        var t = this.Wt, i = this.Nt, e = F(i) && i >= 0, r = F(t) && e && i < t;
        if (this.status === qr || this.status === Br || this.status === jr || r) return this.Ui = setTimeout(()=>{
            this.oi();
        }, 2e3), this.M;
        this.M.data.length > 0 && Ue(this.M).forEach((t)=>{
            this.qi({
                $snapshot_bytes: t.size,
                $snapshot_data: t.data,
                $session_id: t.sessionId,
                $window_id: t.windowId,
                $lib: "web",
                $lib_version: c.LIB_VERSION
            });
        });
        return this.fi();
    }
    zi(t) {
        var i, e = 2 + ((null == (i = this.M) ? void 0 : i.data.length) || 0);
        !this.Qt && (this.M.size + t.$snapshot_bytes + e > 943718.4 || this.M.sessionId !== this.Mt) && (this.M = this.oi()), this.M.size += t.$snapshot_bytes, this.M.data.push(t.$snapshot_data), this.Ui || this.Qt || (this.Ui = setTimeout(()=>{
            this.oi();
        }, 2e3));
    }
    qi(t) {
        this._instance.capture("$snapshot", t, {
            _url: this._instance.requestRouter.endpointFor("api", this.di),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
        });
    }
    ji(t) {
        var i;
        this.Dt.triggerStatus(this.sessionId) === Gr && (null == (i = this._instance) || null == (i = i.persistence) || i.register({
            ["url" === t ? xt : Et]: this.Mt
        }), this.oi(), this.$i(t + "_trigger_matched"));
    }
    Li() {
        this.Vt.urlBlocked || (this.Vt.urlBlocked = !0, clearInterval(this.yi), ns.info("recording paused due to URL blocker"), this.li("recording paused", {
            reason: "url blocker"
        }));
    }
    Ni() {
        this.Vt.urlBlocked && (this.Vt.urlBlocked = !1, this.Mi(), this.Ri(), this.li("recording resumed", {
            reason: "left blocked url"
        }), ns.info("recording resumed"));
    }
    mi() {
        0 !== this.Kt.Rt.length && O(this.si) && (this.si = this._instance.on("eventCaptured", (t)=>{
            try {
                this.Kt.Rt.includes(t.event) && this.ji("event");
            } catch (t) {
                ns.error("Could not activate event trigger", t);
            }
        }));
    }
    overrideLinkedFlag() {
        this.Yt.linkedFlagSeen = !0, this.Mi(), this.$i("linked_flag_overridden");
    }
    overrideSampling() {
        var t;
        null == (t = this._instance.persistence) || t.register({
            [kt]: !0
        }), this.Mi(), this.$i("sampling_overridden");
    }
    overrideTrigger(t) {
        this.ji(t);
    }
    $i(t, i) {
        this._instance.register_for_session({
            $session_recording_start_reason: t
        }), ns.info(t.replace("_", " "), i), m([
            "recording_initialized",
            "session_id_changed"
        ], t) || this.li(t, i);
    }
    get sdkDebugProperties() {
        var { sessionStartTimestamp: t } = this.Ft.checkAndGetSessionAndWindowId(!0);
        return {
            $recording_status: this.status,
            $sdk_debug_replay_internal_buffer_length: this.M.data.length,
            $sdk_debug_replay_internal_buffer_size: this.M.size,
            $sdk_debug_current_session_duration: this.Nt,
            $sdk_debug_session_start: t
        };
    }
}
var cs = z("[SegmentIntegration]");
function fs(t, i) {
    var e = t.config.segment;
    if (!e) return i();
    !function(t, i) {
        var e = t.config.segment;
        if (!e) return i();
        var r = (e)=>{
            var r = ()=>e.anonymousId() || Ni();
            t.config.get_device_id = r, e.id() && (t.register({
                distinct_id: e.id(),
                $device_id: r()
            }), t.persistence.set_property(At, "identified")), i();
        }, s = e.user();
        "then" in s && E(s.then) ? s.then((t)=>r(t)) : r(s);
    }(t, ()=>{
        e.register(((t)=>{
            Promise && Promise.resolve || cs.warn("This browser does not have Promise support, and can not use the segment integration");
            var i = (i, e)=>{
                if (!e) return i;
                i.event.userId || i.event.anonymousId === t.get_distinct_id() || (cs.info("No userId set, resetting PostHog"), t.reset()), i.event.userId && i.event.userId !== t.get_distinct_id() && (cs.info("UserId set, identifying with PostHog"), t.identify(i.event.userId));
                var r = t.calculateEventProperties(e, i.event.properties);
                return i.event.properties = Object.assign({}, r, i.event.properties), i;
            };
            return {
                name: "PostHog JS",
                type: "enrichment",
                version: "1.0.0",
                isLoaded: ()=>!0,
                load: ()=>Promise.resolve(),
                track: (t)=>i(t, t.event.event),
                page: (t)=>i(t, "$pageview"),
                identify: (t)=>i(t, "$identify"),
                screen: (t)=>i(t, "$screen")
            };
        })(t)).then(()=>{
            i();
        });
    });
}
var ps = "posthog-js";
function _s(t, i) {
    var { organization: e, projectId: r, prefix: s, severityAllowList: n = [
        "error"
    ] } = void 0 === i ? {} : i;
    return (i)=>{
        var o, a, l, u, h;
        if (!("*" === n || n.includes(i.level)) || !t.__loaded) return i;
        i.tags || (i.tags = {});
        var d = t.requestRouter.endpointFor("ui", "/project/" + t.config.token + "/person/" + t.get_distinct_id());
        i.tags["PostHog Person URL"] = d, t.sessionRecordingStarted() && (i.tags["PostHog Recording URL"] = t.get_session_replay_url({
            withTimestamp: !0
        }));
        var v = (null == (o = i.exception) ? void 0 : o.values) || [], c = v.map((t)=>B({}, t, {
                stacktrace: t.stacktrace ? B({}, t.stacktrace, {
                    type: "raw",
                    frames: (t.stacktrace.frames || []).map((t)=>B({}, t, {
                            platform: "web:javascript"
                        }))
                }) : void 0
            })), f = {
            $exception_message: (null == (a = v[0]) ? void 0 : a.value) || i.message,
            $exception_type: null == (l = v[0]) ? void 0 : l.type,
            $exception_personURL: d,
            $exception_level: i.level,
            $exception_list: c,
            $sentry_event_id: i.event_id,
            $sentry_exception: i.exception,
            $sentry_exception_message: (null == (u = v[0]) ? void 0 : u.value) || i.message,
            $sentry_exception_type: null == (h = v[0]) ? void 0 : h.type,
            $sentry_tags: i.tags
        };
        return e && r && (f.$sentry_url = (s || "https://sentry.io/organizations/") + e + "/issues/?project=" + r + "&query=" + i.event_id), t.exceptions.sendExceptionEvent(f), i;
    };
}
class gs {
    constructor(t, i, e, r, s){
        this.name = ps, this.setupOnce = function(n) {
            n(_s(t, {
                organization: i,
                projectId: e,
                prefix: r,
                severityAllowList: s
            }));
        };
    }
}
var ms = null != t && t.location ? xi(t.location.hash, "__posthog") || xi(location.hash, "state") : null, bs = "_postHogToolbarParams", ys = z("[Toolbar]"), ws = function(t) {
    return t[t.UNINITIALIZED = 0] = "UNINITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.LOADED = 2] = "LOADED", t;
}(ws || {});
class Ss {
    constructor(t){
        this.instance = t;
    }
    Bi(t) {
        v.ph_toolbar_state = t;
    }
    Hi() {
        var t;
        return null !== (t = v.ph_toolbar_state) && void 0 !== t ? t : ws.UNINITIALIZED;
    }
    maybeLoadToolbar(i, e, r) {
        if (void 0 === i && (i = void 0), void 0 === e && (e = void 0), void 0 === r && (r = void 0), !t || !o) return !1;
        i = null != i ? i : t.location, r = null != r ? r : t.history;
        try {
            if (!e) {
                try {
                    t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
                } catch (t) {
                    return !1;
                }
                e = null == t ? void 0 : t.localStorage;
            }
            var s, n = ms || xi(i.hash, "__posthog") || xi(i.hash, "state"), a = n ? X(()=>JSON.parse(atob(decodeURIComponent(n)))) || X(()=>JSON.parse(decodeURIComponent(n))) : null;
            return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? i.hash = a.desiredHash : r ? r.replaceState(r.state, "", i.pathname + i.search) : i.hash = "")) : ((s = JSON.parse(e.getItem(bs) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0);
        } catch (t) {
            return !1;
        }
    }
    Wi(t) {
        var i = v.ph_load_toolbar || v.ph_load_editor;
        !O(i) && E(i) ? i(t, this.instance) : ys.warn("No toolbar load function found");
    }
    loadToolbar(i) {
        var e = !(null == o || !o.getElementById(qt));
        if (!t || e) return !1;
        var r = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s = B({
            token: this.instance.config.token
        }, i, {
            apiURL: this.instance.requestRouter.endpointFor("ui")
        }, r ? {
            instrument: !1
        } : {});
        if (t.localStorage.setItem(bs, JSON.stringify(B({}, s, {
            source: void 0
        }))), this.Hi() === ws.LOADED) this.Wi(s);
        else if (this.Hi() === ws.UNINITIALIZED) {
            var n;
            this.Bi(ws.LOADING), null == (n = v.__PosthogExtensions__) || null == n.loadExternalDependency || n.loadExternalDependency(this.instance, "toolbar", (t)=>{
                if (t) return ys.error("[Toolbar] Failed to load", t), void this.Bi(ws.UNINITIALIZED);
                this.Bi(ws.LOADED), this.Wi(s);
            }), st(t, "turbolinks:load", ()=>{
                this.Bi(ws.UNINITIALIZED), this.loadToolbar(s);
            });
        }
        return !0;
    }
    Gi(t) {
        return this.loadToolbar(t);
    }
    maybeLoadEditor(t, i, e) {
        return void 0 === t && (t = void 0), void 0 === i && (i = void 0), void 0 === e && (e = void 0), this.maybeLoadToolbar(t, i, e);
    }
}
var $s = z("[TracingHeaders]");
class ks {
    constructor(t){
        this.Ji = void 0, this.Vi = void 0, this.st = ()=>{
            var t, i;
            R(this.Ji) && (null == (t = v.__PosthogExtensions__) || null == (t = t.tracingHeadersPatchFns) || t._patchXHR(this._instance.sessionManager));
            R(this.Vi) && (null == (i = v.__PosthogExtensions__) || null == (i = i.tracingHeadersPatchFns) || i._patchFetch(this._instance.sessionManager));
        }, this._instance = t;
    }
    G(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.tracingHeadersPatchFns && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "tracing-headers", (i)=>{
            if (i) return $s.error("failed to load script", i);
            t();
        });
    }
    startIfEnabledOrStop() {
        var t, i;
        this._instance.config.__add_tracing_headers ? this.G(this.st) : (null == (t = this.Ji) || t.call(this), null == (i = this.Vi) || i.call(this), this.Ji = void 0, this.Vi = void 0);
    }
}
var xs = z("[Web Vitals]"), Es = 9e5;
class Is {
    constructor(t){
        var i;
        this.Ki = !1, this.i = !1, this.M = {
            url: void 0,
            metrics: [],
            firstMetricTimestamp: void 0
        }, this.Yi = ()=>{
            clearTimeout(this.Xi), 0 !== this.M.metrics.length && (this._instance.capture("$web_vitals", this.M.metrics.reduce((t, i)=>B({}, t, {
                    ["$web_vitals_" + i.name + "_event"]: B({}, i),
                    ["$web_vitals_" + i.name + "_value"]: i.value
                }), {})), this.M = {
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            });
        }, this.Qi = (t)=>{
            var i, e = null == (i = this._instance.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0);
            if (R(e)) xs.error("Could not read session ID. Dropping metrics!");
            else {
                this.M = this.M || {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                };
                var r = this.Zi();
                if (!R(r)) if (O(null == t ? void 0 : t.name) || O(null == t ? void 0 : t.value)) xs.error("Invalid metric received", t);
                else if (this.te && t.value >= this.te) xs.error("Ignoring metric with value >= " + this.te, t);
                else this.M.url !== r && (this.Yi(), this.Xi = setTimeout(this.Yi, this.flushToCaptureTimeoutMs)), R(this.M.url) && (this.M.url = r), this.M.firstMetricTimestamp = R(this.M.firstMetricTimestamp) ? Date.now() : this.M.firstMetricTimestamp, t.attribution && t.attribution.interactionTargetElement && (t.attribution.interactionTargetElement = void 0), this.M.metrics.push(B({}, t, {
                    $current_url: r,
                    $session_id: e.sessionId,
                    $window_id: e.windowId,
                    timestamp: Date.now()
                })), this.M.metrics.length === this.allowedMetrics.length && this.Yi();
            }
        }, this.st = ()=>{
            var t, i, e, r, s = v.__PosthogExtensions__;
            R(s) || R(s.postHogWebVitalsCallbacks) || ({ onLCP: t, onCLS: i, onFCP: e, onINP: r } = s.postHogWebVitalsCallbacks), t && i && e && r ? (this.allowedMetrics.indexOf("LCP") > -1 && t(this.Qi.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && i(this.Qi.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && e(this.Qi.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && r(this.Qi.bind(this)), this.i = !0) : xs.error("web vitals callbacks not loaded - not starting");
        }, this._instance = t, this.Ki = !(null == (i = this._instance.persistence) || !i.props[vt]), this.startIfEnabled();
    }
    get allowedMetrics() {
        var t, i, e = I(this._instance.config.capture_performance) ? null == (t = this._instance.config.capture_performance) ? void 0 : t.web_vitals_allowed_metrics : void 0;
        return R(e) ? (null == (i = this._instance.persistence) ? void 0 : i.props[ft]) || [
            "CLS",
            "FCP",
            "INP",
            "LCP"
        ] : e;
    }
    get flushToCaptureTimeoutMs() {
        return (I(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
    }
    get te() {
        var t = I(this._instance.config.capture_performance) && F(this._instance.config.capture_performance.__web_vitals_max_value) ? this._instance.config.capture_performance.__web_vitals_max_value : Es;
        return 0 < t && t <= 6e4 ? Es : t;
    }
    get isEnabled() {
        var t = null == a ? void 0 : a.protocol;
        if ("http:" !== t && "https:" !== t) return xs.info("Web Vitals are disabled on non-http/https protocols"), !1;
        var i = I(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals : A(this._instance.config.capture_performance) ? this._instance.config.capture_performance : void 0;
        return A(i) ? i : this.Ki;
    }
    startIfEnabled() {
        this.isEnabled && !this.i && (xs.info("enabled, starting..."), this.G(this.st));
    }
    onRemoteConfig(t) {
        var i = I(t.capturePerformance) && !!t.capturePerformance.web_vitals, e = I(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
        this._instance.persistence && (this._instance.persistence.register({
            [vt]: i
        }), this._instance.persistence.register({
            [ft]: e
        })), this.Ki = i, this.startIfEnabled();
    }
    G(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.postHogWebVitalsCallbacks && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "web-vitals", (i)=>{
            i ? xs.error("failed to load script", i) : t();
        });
    }
    Zi() {
        var i = t ? t.location.href : void 0;
        return i || xs.error("Could not determine current URL"), i;
    }
}
var Ps = z("[Heatmaps]");
function Rs(t) {
    return I(t) && "clientX" in t && "clientY" in t && F(t.clientX) && F(t.clientY);
}
class Ts {
    constructor(t){
        var i;
        this.rageclicks = new bi, this.Ki = !1, this.i = !1, this.ie = null, this.instance = t, this.Ki = !(null == (i = this.instance.persistence) || !i.props[ut]);
    }
    get flushIntervalMilliseconds() {
        var t = 5e3;
        return I(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (t = this.instance.config.capture_heatmaps.flush_interval_milliseconds), t;
    }
    get isEnabled() {
        return R(this.instance.config.capture_heatmaps) ? R(this.instance.config.enable_heatmaps) ? this.Ki : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps;
    }
    startIfEnabled() {
        if (this.isEnabled) {
            if (this.i) return;
            Ps.info("starting..."), this.ee(), this.ie = setInterval(this.re.bind(this), this.flushIntervalMilliseconds);
        } else {
            var t, i;
            clearInterval(null !== (t = this.ie) && void 0 !== t ? t : void 0), null == (i = this.se) || i.stop(), this.getAndClearBuffer();
        }
    }
    onRemoteConfig(t) {
        var i = !!t.heatmaps;
        this.instance.persistence && this.instance.persistence.register({
            [ut]: i
        }), this.Ki = i, this.startIfEnabled();
    }
    getAndClearBuffer() {
        var t = this.M;
        return this.M = void 0, t;
    }
    ne(t) {
        this.oe(t.originalEvent, "deadclick");
    }
    ee() {
        t && o && (st(t, "beforeunload", this.re.bind(this)), st(o, "click", (i)=>this.oe(i || (null == t ? void 0 : t.event)), {
            capture: !0
        }), st(o, "mousemove", (i)=>this.ae(i || (null == t ? void 0 : t.event)), {
            capture: !0
        }), this.se = new re(this.instance, ie, this.ne.bind(this)), this.se.startIfEnabled(), this.i = !0);
    }
    le(i, e) {
        var r = this.instance.scrollManager.scrollY(), s = this.instance.scrollManager.scrollX(), n = this.instance.scrollManager.scrollElement(), o = function(i, e, r) {
            for(var s = i; s && Gt(s) && !Jt(s, "body");){
                if (s === r) return !1;
                if (m(e, null == t ? void 0 : t.getComputedStyle(s).position)) return !0;
                s = ri(s);
            }
            return !1;
        }(ii(i), [
            "fixed",
            "sticky"
        ], n);
        return {
            x: i.clientX + (o ? 0 : s),
            y: i.clientY + (o ? 0 : r),
            target_fixed: o,
            type: e
        };
    }
    oe(t, i) {
        var e;
        if (void 0 === i && (i = "click"), !Wt(t.target) && Rs(t)) {
            var r = this.le(t, i);
            null != (e = this.rageclicks) && e.isRageClick(t.clientX, t.clientY, (new Date).getTime()) && this.ue(B({}, r, {
                type: "rageclick"
            })), this.ue(r);
        }
    }
    ae(t) {
        !Wt(t.target) && Rs(t) && (clearTimeout(this.he), this.he = setTimeout(()=>{
            this.ue(this.le(t, "mousemove"));
        }, 500));
    }
    ue(i) {
        if (t) {
            var e = t.location.href;
            this.M = this.M || {}, this.M[e] || (this.M[e] = []), this.M[e].push(i);
        }
    }
    re() {
        this.M && !P(this.M) && this.instance.capture("$$heatmap", {
            $heatmap_data: this.getAndClearBuffer()
        });
    }
}
class Ms {
    constructor(t){
        this._instance = t;
    }
    doPageView(i, e) {
        var r, s = this.de(i, e);
        return this.ve = {
            pathname: null !== (r = null == t ? void 0 : t.location.pathname) && void 0 !== r ? r : "",
            pageViewId: e,
            timestamp: i
        }, this._instance.scrollManager.resetContext(), s;
    }
    doPageLeave(t) {
        var i;
        return this.de(t, null == (i = this.ve) ? void 0 : i.pageViewId);
    }
    doEvent() {
        var t;
        return {
            $pageview_id: null == (t = this.ve) ? void 0 : t.pageViewId
        };
    }
    de(t, i) {
        var e = this.ve;
        if (!e) return {
            $pageview_id: i
        };
        var r = {
            $pageview_id: i,
            $prev_pageview_id: e.pageViewId
        }, s = this._instance.scrollManager.getContext();
        if (s && !this._instance.config.disable_scroll_properties) {
            var { maxScrollHeight: n, lastScrollY: o, maxScrollY: a, maxContentHeight: l, lastContentY: u, maxContentY: h } = s;
            if (!(R(n) || R(o) || R(a) || R(l) || R(u) || R(h))) {
                n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), u = Math.ceil(u), h = Math.ceil(h);
                var d = n <= 1 ? 1 : se(o / n, 0, 1), v = n <= 1 ? 1 : se(a / n, 0, 1), c = l <= 1 ? 1 : se(u / l, 0, 1), f = l <= 1 ? 1 : se(h / l, 0, 1);
                r = V(r, {
                    $prev_pageview_last_scroll: o,
                    $prev_pageview_last_scroll_percentage: d,
                    $prev_pageview_max_scroll: a,
                    $prev_pageview_max_scroll_percentage: v,
                    $prev_pageview_last_content: u,
                    $prev_pageview_last_content_percentage: c,
                    $prev_pageview_max_content: h,
                    $prev_pageview_max_content_percentage: f
                });
            }
        }
        return e.pathname && (r.$prev_pageview_pathname = e.pathname), e.timestamp && (r.$prev_pageview_duration = (t.getTime() - e.timestamp.getTime()) / 1e3), r;
    }
}
var Cs = function(t) {
    var i, e, r, s, n = "";
    for(i = e = 0, r = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, s = 0; s < r; s++){
        var o = t.charCodeAt(s), a = null;
        o < 128 ? e++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), C(a) || (e > i && (n += t.substring(i, e)), n += a, i = e = s + 1);
    }
    return e > i && (n += t.substring(i, t.length)), n;
}, Os = !!u || !!l, Fs = "text/plain", As = (t, i)=>{
    var [e, r] = t.split("?"), s = B({}, i);
    null == r || r.split("&").forEach((t)=>{
        var [i] = t.split("=");
        delete s[i];
    });
    var n = Si(s);
    return e + "?" + (n = n ? (r ? r + "&" : "") + n : r);
}, Ds = (t, i)=>JSON.stringify(t, (t, i)=>"bigint" == typeof i ? i.toString() : i, i), Ls = (t)=>{
    var { data: i, compression: e } = t;
    if (i) {
        if (e === _.GZipJS) {
            var r = Dr(Lr(Ds(i)), {
                mtime: 0
            }), s = new Blob([
                r
            ], {
                type: Fs
            });
            return {
                contentType: Fs,
                body: s,
                estimatedSize: s.size
            };
        }
        if (e === _.Base64) {
            var n = function(t) {
                var i, e, r, s, n, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, l = 0, u = "", h = [];
                if (!t) return t;
                t = Cs(t);
                do {
                    i = (n = t.charCodeAt(a++) << 16 | t.charCodeAt(a++) << 8 | t.charCodeAt(a++)) >> 18 & 63, e = n >> 12 & 63, r = n >> 6 & 63, s = 63 & n, h[l++] = o.charAt(i) + o.charAt(e) + o.charAt(r) + o.charAt(s);
                }while (a < t.length)
                switch(u = h.join(""), t.length % 3){
                    case 1:
                        u = u.slice(0, -2) + "==";
                        break;
                    case 2:
                        u = u.slice(0, -1) + "=";
                }
                return u;
            }(Ds(i)), o = ((t)=>"data=" + encodeURIComponent("string" == typeof t ? t : Ds(t)))(n);
            return {
                contentType: "application/x-www-form-urlencoded",
                body: o,
                estimatedSize: new Blob([
                    o
                ]).size
            };
        }
        var a = Ds(i);
        return {
            contentType: "application/json",
            body: a,
            estimatedSize: new Blob([
                a
            ]).size
        };
    }
}, Ns = [];
l && Ns.push({
    transport: "fetch",
    method: (t)=>{
        var i, e, { contentType: r, body: s, estimatedSize: n } = null !== (i = Ls(t)) && void 0 !== i ? i : {}, o = new Headers;
        J(t.headers, function(t, i) {
            o.append(i, t);
        }), r && o.append("Content-Type", r);
        var a = t.url, u = null;
        if (h) {
            var d = new h;
            u = {
                signal: d.signal,
                timeout: setTimeout(()=>d.abort(), t.timeout)
            };
        }
        l(a, B({
            method: (null == t ? void 0 : t.method) || "GET",
            headers: o,
            keepalive: "POST" === t.method && (n || 0) < 52428.8,
            body: s,
            signal: null == (e = u) ? void 0 : e.signal
        }, t.fetchOptions)).then((i)=>i.text().then((e)=>{
                var r = {
                    statusCode: i.status,
                    text: e
                };
                if (200 === i.status) try {
                    r.json = JSON.parse(e);
                } catch (t) {
                    j.error(t);
                }
                null == t.callback || t.callback(r);
            })).catch((i)=>{
            j.error(i), null == t.callback || t.callback({
                statusCode: 0,
                text: i
            });
        }).finally(()=>u ? clearTimeout(u.timeout) : null);
    }
}), u && Ns.push({
    transport: "XHR",
    method: (t)=>{
        var i, e = new u;
        e.open(t.method || "GET", t.url, !0);
        var { contentType: r, body: s } = null !== (i = Ls(t)) && void 0 !== i ? i : {};
        J(t.headers, function(t, i) {
            e.setRequestHeader(i, t);
        }), r && e.setRequestHeader("Content-Type", r), t.timeout && (e.timeout = t.timeout), e.withCredentials = !0, e.onreadystatechange = ()=>{
            if (4 === e.readyState) {
                var i = {
                    statusCode: e.status,
                    text: e.responseText
                };
                if (200 === e.status) try {
                    i.json = JSON.parse(e.responseText);
                } catch (t) {}
                null == t.callback || t.callback(i);
            }
        }, e.send(s);
    }
}), null != n && n.sendBeacon && Ns.push({
    transport: "sendBeacon",
    method: (t)=>{
        var i = As(t.url, {
            beacon: "1"
        });
        try {
            var e, { contentType: r, body: s } = null !== (e = Ls(t)) && void 0 !== e ? e : {}, o = "string" == typeof s ? new Blob([
                s
            ], {
                type: r
            }) : s;
            n.sendBeacon(i, o);
        } catch (t) {}
    }
});
var js = function(t, i) {
    if (!function(t) {
        try {
            new RegExp(t);
        } catch (t) {
            return !1;
        }
        return !0;
    }(i)) return !1;
    try {
        return new RegExp(i).test(t);
    } catch (t) {
        return !1;
    }
};
function zs(t, i, e) {
    return Ds({
        distinct_id: t,
        userPropertiesToSet: i,
        userPropertiesToSetOnce: e
    });
}
var Us = {
    exact: (t, i)=>i.some((i)=>t.some((t)=>i === t)),
    is_not: (t, i)=>i.every((i)=>t.every((t)=>i !== t)),
    regex: (t, i)=>i.some((i)=>t.some((t)=>js(i, t))),
    not_regex: (t, i)=>i.every((i)=>t.every((t)=>!js(i, t))),
    icontains: (t, i)=>i.map(qs).some((i)=>t.map(qs).some((t)=>i.includes(t))),
    not_icontains: (t, i)=>i.map(qs).every((i)=>t.map(qs).every((t)=>!i.includes(t)))
}, qs = (t)=>t.toLowerCase(), Bs = z("[Error tracking]");
class Hs {
    constructor(t){
        var i, e;
        this.ce = [], this._instance = t, this.ce = null !== (i = null == (e = this._instance.persistence) ? void 0 : e.get_property(dt)) && void 0 !== i ? i : [];
    }
    onRemoteConfig(t) {
        var i, e, r = null !== (i = null == (e = t.errorTracking) ? void 0 : e.suppressionRules) && void 0 !== i ? i : [];
        this.ce = r, this._instance.persistence && this._instance.persistence.register({
            [dt]: this.ce
        });
    }
    sendExceptionEvent(t) {
        this.fe(t) ? Bs.info("Skipping exception capture because a suppression rule matched") : this._instance.capture("$exception", t, {
            _noTruncate: !0,
            _batchKey: "exceptionEvent"
        });
    }
    fe(t) {
        var i = t.$exception_list;
        if (!i || !x(i) || 0 === i.length) return !1;
        var e = i.reduce((t, i)=>{
            var { type: e, value: r } = i;
            return T(e) && e.length > 0 && t.$exception_types.push(e), T(r) && r.length > 0 && t.$exception_values.push(r), t;
        }, {
            $exception_types: [],
            $exception_values: []
        });
        return this.ce.some((t)=>{
            var i = t.values.map((t)=>{
                var i, r = Us[t.operator], s = x(t.value) ? t.value : [
                    t.value
                ], n = null !== (i = e[t.key]) && void 0 !== i ? i : [];
                return s.length > 0 && r(s, n);
            });
            return "OR" === t.type ? i.some(Boolean) : i.every(Boolean);
        });
    }
}
var Ws = "Mobile", Gs = "iOS", Js = "Android", Vs = "Tablet", Ks = Js + " " + Vs, Ys = "iPad", Xs = "Apple", Qs = Xs + " Watch", Zs = "Safari", tn = "BlackBerry", en = "Samsung", rn = en + "Browser", sn = en + " Internet", nn = "Chrome", on = nn + " OS", an = nn + " " + Gs, ln = "Internet Explorer", un = ln + " " + Ws, hn = "Opera", dn = hn + " Mini", vn = "Edge", cn = "Microsoft " + vn, fn = "Firefox", pn = fn + " " + Gs, _n = "Nintendo", gn = "PlayStation", mn = "Xbox", bn = Js + " " + Ws, yn = Ws + " " + Zs, wn = "Windows", Sn = wn + " Phone", $n = "Nokia", kn = "Ouya", xn = "Generic", En = xn + " " + Ws.toLowerCase(), In = xn + " " + Vs.toLowerCase(), Pn = "Konqueror", Rn = "(\\d+(\\.\\d+)?)", Tn = new RegExp("Version/" + Rn), Mn = new RegExp(mn, "i"), Cn = new RegExp(gn + " \\w+", "i"), On = new RegExp(_n + " \\w+", "i"), Fn = new RegExp(tn + "|PlayBook|BB10", "i"), An = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    5.1: "XP",
    5.2: "XP",
    "6.0": "Vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    6.4: "10",
    "10.0": "10"
};
var Dn = (t, i)=>i && m(i, Xs) || function(t) {
        return m(t, Zs) && !m(t, nn) && !m(t, Js);
    }(t), Ln = function(t, i) {
    return i = i || "", m(t, " OPR/") && m(t, "Mini") ? dn : m(t, " OPR/") ? hn : Fn.test(t) ? tn : m(t, "IE" + Ws) || m(t, "WPDesktop") ? un : m(t, rn) ? sn : m(t, vn) || m(t, "Edg/") ? cn : m(t, "FBIOS") ? "Facebook " + Ws : m(t, "UCWEB") || m(t, "UCBrowser") ? "UC Browser" : m(t, "CriOS") ? an : m(t, "CrMo") || m(t, nn) ? nn : m(t, Js) && m(t, Zs) ? bn : m(t, "FxiOS") ? pn : m(t.toLowerCase(), Pn.toLowerCase()) ? Pn : Dn(t, i) ? m(t, Ws) ? yn : Zs : m(t, fn) ? fn : m(t, "MSIE") || m(t, "Trident/") ? ln : m(t, "Gecko") ? fn : "";
}, Nn = {
    [un]: [
        new RegExp("rv:" + Rn)
    ],
    [cn]: [
        new RegExp(vn + "?\\/" + Rn)
    ],
    [nn]: [
        new RegExp("(" + nn + "|CrMo)\\/" + Rn)
    ],
    [an]: [
        new RegExp("CriOS\\/" + Rn)
    ],
    "UC Browser": [
        new RegExp("(UCBrowser|UCWEB)\\/" + Rn)
    ],
    [Zs]: [
        Tn
    ],
    [yn]: [
        Tn
    ],
    [hn]: [
        new RegExp("(Opera|OPR)\\/" + Rn)
    ],
    [fn]: [
        new RegExp(fn + "\\/" + Rn)
    ],
    [pn]: [
        new RegExp("FxiOS\\/" + Rn)
    ],
    [Pn]: [
        new RegExp("Konqueror[:/]?" + Rn, "i")
    ],
    [tn]: [
        new RegExp(tn + " " + Rn),
        Tn
    ],
    [bn]: [
        new RegExp("android\\s" + Rn, "i")
    ],
    [sn]: [
        new RegExp(rn + "\\/" + Rn)
    ],
    [ln]: [
        new RegExp("(rv:|MSIE )" + Rn)
    ],
    Mozilla: [
        new RegExp("rv:" + Rn)
    ]
}, jn = function(t, i) {
    var e = Ln(t, i), r = Nn[e];
    if (R(r)) return null;
    for(var s = 0; s < r.length; s++){
        var n = r[s], o = t.match(n);
        if (o) return parseFloat(o[o.length - 2]);
    }
    return null;
}, zn = [
    [
        new RegExp(mn + "; " + mn + " (.*?)[);]", "i"),
        (t)=>[
                mn,
                t && t[1] || ""
            ]
    ],
    [
        new RegExp(_n, "i"),
        [
            _n,
            ""
        ]
    ],
    [
        new RegExp(gn, "i"),
        [
            gn,
            ""
        ]
    ],
    [
        Fn,
        [
            tn,
            ""
        ]
    ],
    [
        new RegExp(wn, "i"),
        (t, i)=>{
            if (/Phone/.test(i) || /WPDesktop/.test(i)) return [
                Sn,
                ""
            ];
            if (new RegExp(Ws).test(i) && !/IEMobile\b/.test(i)) return [
                wn + " " + Ws,
                ""
            ];
            var e = /Windows NT ([0-9.]+)/i.exec(i);
            if (e && e[1]) {
                var r = e[1], s = An[r] || "";
                return /arm/i.test(i) && (s = "RT"), [
                    wn,
                    s
                ];
            }
            return [
                wn,
                ""
            ];
        }
    ],
    [
        /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
        (t)=>{
            if (t && t[3]) {
                var i = [
                    t[3],
                    t[4],
                    t[5] || "0"
                ];
                return [
                    Gs,
                    i.join(".")
                ];
            }
            return [
                Gs,
                ""
            ];
        }
    ],
    [
        /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
        (t)=>{
            var i = "";
            return t && t.length >= 3 && (i = R(t[2]) ? t[3] : t[2]), [
                "watchOS",
                i
            ];
        }
    ],
    [
        new RegExp("(" + Js + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + Js + ")", "i"),
        (t)=>{
            if (t && t[2]) {
                var i = [
                    t[2],
                    t[3],
                    t[4] || "0"
                ];
                return [
                    Js,
                    i.join(".")
                ];
            }
            return [
                Js,
                ""
            ];
        }
    ],
    [
        /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
        (t)=>{
            var i = [
                "Mac OS X",
                ""
            ];
            if (t && t[1]) {
                var e = [
                    t[1],
                    t[2],
                    t[3] || "0"
                ];
                i[1] = e.join(".");
            }
            return i;
        }
    ],
    [
        /Mac/i,
        [
            "Mac OS X",
            ""
        ]
    ],
    [
        /CrOS/,
        [
            on,
            ""
        ]
    ],
    [
        /Linux|debian/i,
        [
            "Linux",
            ""
        ]
    ]
], Un = function(t) {
    return On.test(t) ? _n : Cn.test(t) ? gn : Mn.test(t) ? mn : new RegExp(kn, "i").test(t) ? kn : new RegExp("(" + Sn + "|WPDesktop)", "i").test(t) ? Sn : /iPad/.test(t) ? Ys : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t) ? Qs : Fn.test(t) ? tn : /(kobo)\s(ereader|touch)/i.test(t) ? "Kobo" : new RegExp($n, "i").test(t) ? $n : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t) ? "Kindle Fire" : /(Android|ZTE)/i.test(t) ? !new RegExp(Ws).test(t) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t) ? /pixel[\daxl ]{1,6}/i.test(t) && !/pixel c/i.test(t) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t) || /lmy47v/i.test(t) && !/QTAQZ3/i.test(t) ? Js : Ks : Js : new RegExp("(pda|" + Ws + ")", "i").test(t) ? En : new RegExp(Vs, "i").test(t) && !new RegExp(Vs + " pc", "i").test(t) ? In : "";
}, qn = "https?://(.*)", Bn = [
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "irclid",
    "_kx"
], Hn = K([
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid"
], Bn), Wn = "<masked>";
function Gn(t, i, e) {
    if (!o) return {};
    var r = i ? K([], Bn, e || []) : [];
    return Jn(ki(o.URL, r, Wn), t);
}
function Jn(t, i) {
    var e = Hn.concat(i || []), r = {};
    return J(e, function(i) {
        var e = $i(t, i);
        r[i] = e || null;
    }), r;
}
function Vn(t) {
    var i = function(t) {
        return t ? 0 === t.search(qn + "google.([^/?]*)") ? "google" : 0 === t.search(qn + "bing.com") ? "bing" : 0 === t.search(qn + "yahoo.com") ? "yahoo" : 0 === t.search(qn + "duckduckgo.com") ? "duckduckgo" : null : null;
    }(t), e = "yahoo" != i ? "q" : "p", r = {};
    if (!C(i)) {
        r.$search_engine = i;
        var s = o ? $i(o.referrer, e) : "";
        s.length && (r.ph_keyword = s);
    }
    return r;
}
function Kn() {
    return navigator.language || navigator.userLanguage;
}
function Yn() {
    return (null == o ? void 0 : o.referrer) || "$direct";
}
function Xn(t, i) {
    var e = t ? K([], Bn, i || []) : [], r = null == a ? void 0 : a.href.substring(0, 1e3);
    return {
        r: Yn().substring(0, 1e3),
        u: r ? ki(r, e, Wn) : void 0
    };
}
function Qn(t) {
    var i, { r: e, u: r } = t, s = {
        $referrer: e,
        $referring_domain: null == e ? void 0 : "$direct" == e ? "$direct" : null == (i = wi(e)) ? void 0 : i.host
    };
    if (r) {
        s.$current_url = r;
        var n = wi(r);
        s.$host = null == n ? void 0 : n.host, s.$pathname = null == n ? void 0 : n.pathname;
        var o = Jn(r);
        V(s, o);
    }
    if (e) {
        var a = Vn(e);
        V(s, a);
    }
    return s;
}
function Zn() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (t) {
        return;
    }
}
function to() {
    try {
        return (new Date).getTimezoneOffset();
    } catch (t) {
        return;
    }
}
function io(i, e) {
    if (!d) return {};
    var r, s, n, o = i ? K([], Bn, e || []) : [], [l, u] = function(t) {
        for(var i = 0; i < zn.length; i++){
            var [e, r] = zn[i], s = e.exec(t), n = s && (E(r) ? r(s, t) : r);
            if (n) return n;
        }
        return [
            "",
            ""
        ];
    }(d);
    return V(Z({
        $os: l,
        $os_version: u,
        $browser: Ln(d, navigator.vendor),
        $device: Un(d),
        $device_type: (s = d, n = Un(s), n === Ys || n === Ks || "Kobo" === n || "Kindle Fire" === n || n === In ? Vs : n === _n || n === mn || n === gn || n === kn ? "Console" : n === Qs ? "Wearable" : n ? Ws : "Desktop"),
        $timezone: Zn(),
        $timezone_offset: to()
    }), {
        $current_url: ki(null == a ? void 0 : a.href, o, Wn),
        $host: null == a ? void 0 : a.host,
        $pathname: null == a ? void 0 : a.pathname,
        $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + "..." : d,
        $browser_version: jn(d, navigator.vendor),
        $browser_language: Kn(),
        $browser_language_prefix: (r = Kn(), "string" == typeof r ? r.split("-")[0] : void 0),
        $screen_height: null == t ? void 0 : t.screen.height,
        $screen_width: null == t ? void 0 : t.screen.width,
        $viewport_height: null == t ? void 0 : t.innerHeight,
        $viewport_width: null == t ? void 0 : t.innerWidth,
        $lib: "web",
        $lib_version: c.LIB_VERSION,
        $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
        $time: Date.now() / 1e3
    });
}
var eo = z("[FeatureFlags]"), ro = "$active_feature_flags", so = "$override_feature_flags", no = "$feature_flag_payloads", oo = "$override_feature_flag_payloads", ao = "$feature_flag_request_id", lo = (t)=>{
    var i = {};
    for (var [e, r] of Y(t || {}))r && (i[e] = r);
    return i;
}, uo = (t)=>{
    var i = t.flags;
    return i ? (t.featureFlags = Object.fromEntries(Object.keys(i).map((t)=>{
        var e;
        return [
            t,
            null !== (e = i[t].variant) && void 0 !== e ? e : i[t].enabled
        ];
    })), t.featureFlagPayloads = Object.fromEntries(Object.keys(i).filter((t)=>i[t].enabled).filter((t)=>{
        var e;
        return null == (e = i[t].metadata) ? void 0 : e.payload;
    }).map((t)=>{
        var e;
        return [
            t,
            null == (e = i[t].metadata) ? void 0 : e.payload
        ];
    }))) : eo.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), t;
}, ho = function(t) {
    return t.FeatureFlags = "feature_flags", t.Recordings = "recordings", t;
}({});
class vo {
    constructor(t){
        this.pe = !1, this._e = !1, this.ge = !1, this.me = !1, this.be = !1, this.ye = !1, this.we = !1, this._instance = t, this.featureFlagEventHandlers = [];
    }
    decide() {
        if (this._instance.config.__preview_remote_config) this.ye = !0;
        else {
            var t = !this.Se && (this._instance.config.advanced_disable_feature_flags || this._instance.config.advanced_disable_feature_flags_on_first_load);
            this.$e({
                disableFlags: t
            });
        }
    }
    get hasLoadedFlags() {
        return this._e;
    }
    getFlags() {
        return Object.keys(this.getFlagVariants());
    }
    getFlagsWithDetails() {
        var t = this._instance.get_property(Rt), i = this._instance.get_property(so), e = this._instance.get_property(oo);
        if (!e && !i) return t || {};
        var r = V({}, t || {}), s = [
            ...new Set([
                ...Object.keys(e || {}),
                ...Object.keys(i || {})
            ])
        ];
        for (var n of s){
            var o, a, l = r[n], u = null == i ? void 0 : i[n], h = R(u) ? null !== (o = null == l ? void 0 : l.enabled) && void 0 !== o && o : !!u, d = R(u) ? l.variant : "string" == typeof u ? u : void 0, v = null == e ? void 0 : e[n], c = B({}, l, {
                enabled: h,
                variant: h ? null != d ? d : null == l ? void 0 : l.variant : void 0
            });
            if (h !== (null == l ? void 0 : l.enabled) && (c.original_enabled = null == l ? void 0 : l.enabled), d !== (null == l ? void 0 : l.variant) && (c.original_variant = null == l ? void 0 : l.variant), v) c.metadata = B({}, null == l ? void 0 : l.metadata, {
                payload: v,
                original_payload: null == l || null == (a = l.metadata) ? void 0 : a.payload
            });
            r[n] = c;
        }
        return this.pe || (eo.warn(" Overriding feature flag details!", {
            flagDetails: t,
            overriddenPayloads: e,
            finalDetails: r
        }), this.pe = !0), r;
    }
    getFlagVariants() {
        var t = this._instance.get_property(It), i = this._instance.get_property(so);
        if (!i) return t || {};
        for(var e = V({}, t), r = Object.keys(i), s = 0; s < r.length; s++)e[r[s]] = i[r[s]];
        return this.pe || (eo.warn(" Overriding feature flags!", {
            enabledFlags: t,
            overriddenFlags: i,
            finalFlags: e
        }), this.pe = !0), e;
    }
    getFlagPayloads() {
        var t = this._instance.get_property(no), i = this._instance.get_property(oo);
        if (!i) return t || {};
        for(var e = V({}, t || {}), r = Object.keys(i), s = 0; s < r.length; s++)e[r[s]] = i[r[s]];
        return this.pe || (eo.warn(" Overriding feature flag payloads!", {
            flagPayloads: t,
            overriddenPayloads: i,
            finalPayloads: e
        }), this.pe = !0), e;
    }
    reloadFeatureFlags() {
        this.me || this._instance.config.advanced_disable_feature_flags || this.Se || (this.Se = setTimeout(()=>{
            this.$e();
        }, 5));
    }
    ke() {
        clearTimeout(this.Se), this.Se = void 0;
    }
    ensureFlagsLoaded() {
        this._e || this.ge || this.Se || this.reloadFeatureFlags();
    }
    setAnonymousDistinctId(t) {
        this.$anon_distinct_id = t;
    }
    setReloadingPaused(t) {
        this.me = t;
    }
    $e(t) {
        var i;
        if (this.ke(), !this._instance.config.advanced_disable_decide) if (this.ge) this.be = !0;
        else {
            var e = {
                token: this._instance.config.token,
                distinct_id: this._instance.get_distinct_id(),
                groups: this._instance.getGroups(),
                $anon_distinct_id: this.$anon_distinct_id,
                person_properties: B({}, (null == (i = this._instance.persistence) ? void 0 : i.get_initial_props()) || {}, this._instance.get_property(Tt) || {}),
                group_properties: this._instance.get_property(Mt)
            };
            (null != t && t.disableFlags || this._instance.config.advanced_disable_feature_flags) && (e.disable_flags = !0);
            var r = this._instance.config.__preview_flags_v2 && this._instance.config.__preview_remote_config, s = r ? "/flags/?v=2" : "/decide/?v=4", n = this._instance.config.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : "", o = this._instance.requestRouter.endpointFor("api", s + n);
            r && (e.timezone = Zn()), this.ge = !0, this._instance.xe({
                method: "POST",
                url: o,
                data: e,
                compression: this._instance.config.disable_compression ? void 0 : _.Base64,
                timeout: this._instance.config.feature_flag_request_timeout_ms,
                callback: (t)=>{
                    var i, r, s = !0;
                    (200 === t.statusCode && (this.be || (this.$anon_distinct_id = void 0), s = !1), this.ge = !1, this.ye) || (this.ye = !0, this._instance.Ee(null !== (r = t.json) && void 0 !== r ? r : {}));
                    if (!e.disable_flags || this.be) if (this.we = !s, t.json && null != (i = t.json.quotaLimited) && i.includes(ho.FeatureFlags)) eo.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.");
                    else {
                        var n;
                        if (!e.disable_flags) this.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, s);
                        this.be && (this.be = !1, this.$e());
                    }
                }
            });
        }
    }
    getFeatureFlag(t, i) {
        if (void 0 === i && (i = {}), this._e || this.getFlags() && this.getFlags().length > 0) {
            var e = this.getFlagVariants()[t], r = "" + e, s = this._instance.get_property(ao) || void 0, n = this._instance.get_property(Ft) || {};
            if ((i.send_event || !("send_event" in i)) && (!(t in n) || !n[t].includes(r))) {
                var o, a, l, u, h, d, v, c, f;
                x(n[t]) ? n[t].push(r) : n[t] = [
                    r
                ], null == (o = this._instance.persistence) || o.register({
                    [Ft]: n
                });
                var p = this.getFeatureFlagDetails(t), _ = {
                    $feature_flag: t,
                    $feature_flag_response: e,
                    $feature_flag_payload: this.getFeatureFlagPayload(t) || null,
                    $feature_flag_request_id: s,
                    $feature_flag_bootstrapped_response: (null == (a = this._instance.config.bootstrap) || null == (a = a.featureFlags) ? void 0 : a[t]) || null,
                    $feature_flag_bootstrapped_payload: (null == (l = this._instance.config.bootstrap) || null == (l = l.featureFlagPayloads) ? void 0 : l[t]) || null,
                    $used_bootstrap_value: !this.we
                };
                R(null == p || null == (u = p.metadata) ? void 0 : u.version) || (_.$feature_flag_version = p.metadata.version);
                var g, m = null !== (h = null == p || null == (d = p.reason) ? void 0 : d.description) && void 0 !== h ? h : null == p || null == (v = p.reason) ? void 0 : v.code;
                if (m && (_.$feature_flag_reason = m), null != p && null != (c = p.metadata) && c.id && (_.$feature_flag_id = p.metadata.id), R(null == p ? void 0 : p.original_variant) && R(null == p ? void 0 : p.original_enabled) || (_.$feature_flag_original_response = R(p.original_variant) ? p.original_enabled : p.original_variant), null != p && null != (f = p.metadata) && f.original_payload) _.$feature_flag_original_payload = null == p || null == (g = p.metadata) ? void 0 : g.original_payload;
                this._instance.capture("$feature_flag_called", _);
            }
            return e;
        }
        eo.warn('getFeatureFlag for key "' + t + "\" failed. Feature flags didn't load in time.");
    }
    getFeatureFlagDetails(t) {
        return this.getFlagsWithDetails()[t];
    }
    getFeatureFlagPayload(t) {
        return this.getFlagPayloads()[t];
    }
    getRemoteConfigPayload(t, i) {
        var e = this._instance.config.token;
        this._instance.xe({
            method: "POST",
            url: this._instance.requestRouter.endpointFor("api", "/decide/?v=4"),
            data: {
                distinct_id: this._instance.get_distinct_id(),
                token: e
            },
            compression: this._instance.config.disable_compression ? void 0 : _.Base64,
            timeout: this._instance.config.feature_flag_request_timeout_ms,
            callback: (e)=>{
                var r, s = null == (r = e.json) ? void 0 : r.featureFlagPayloads;
                i((null == s ? void 0 : s[t]) || void 0);
            }
        });
    }
    isFeatureEnabled(t, i) {
        if (void 0 === i && (i = {}), this._e || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(t, i);
        eo.warn('isFeatureEnabled for key "' + t + "\" failed. Feature flags didn't load in time.");
    }
    addFeatureFlagsHandler(t) {
        this.featureFlagEventHandlers.push(t);
    }
    removeFeatureFlagsHandler(t) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((i)=>i !== t);
    }
    receivedFeatureFlags(t, i) {
        if (this._instance.persistence) {
            this._e = !0;
            var e = this.getFlagVariants(), r = this.getFlagPayloads(), s = this.getFlagsWithDetails();
            !function(t, i, e, r, s) {
                void 0 === e && (e = {}), void 0 === r && (r = {}), void 0 === s && (s = {});
                var n = uo(t), o = n.flags, a = n.featureFlags, l = n.featureFlagPayloads;
                if (a) {
                    var u = t.requestId;
                    if (x(a)) {
                        eo.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                        var h = {};
                        if (a) for(var d = 0; d < a.length; d++)h[a[d]] = !0;
                        i && i.register({
                            [ro]: a,
                            [It]: h
                        });
                    } else {
                        var v = a, c = l, f = o;
                        t.errorsWhileComputingFlags && (v = B({}, e, v), c = B({}, r, c), f = B({}, s, f)), i && i.register(B({
                            [ro]: Object.keys(lo(v)),
                            [It]: v || {},
                            [no]: c || {},
                            [Rt]: f || {}
                        }, u ? {
                            [ao]: u
                        } : {}));
                    }
                }
            }(t, this._instance.persistence, e, r, s), this.Ie(i);
        }
    }
    override(t, i) {
        void 0 === i && (i = !1), eo.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
            flags: t,
            suppressWarning: i
        });
    }
    overrideFeatureFlags(t) {
        if (!this._instance.__loaded || !this._instance.persistence) return eo.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
        if (!1 === t) return this._instance.persistence.unregister(so), this._instance.persistence.unregister(oo), void this.Ie();
        if (t && "object" == typeof t && ("flags" in t || "payloads" in t)) {
            var i, e = t;
            if (this.pe = Boolean(null !== (i = e.suppressWarning) && void 0 !== i && i), "flags" in e) {
                if (!1 === e.flags) this._instance.persistence.unregister(so);
                else if (e.flags) if (x(e.flags)) {
                    for(var r = {}, s = 0; s < e.flags.length; s++)r[e.flags[s]] = !0;
                    this._instance.persistence.register({
                        [so]: r
                    });
                } else this._instance.persistence.register({
                    [so]: e.flags
                });
            }
            return "payloads" in e && (!1 === e.payloads ? this._instance.persistence.unregister(oo) : e.payloads && this._instance.persistence.register({
                [oo]: e.payloads
            })), void this.Ie();
        }
        this.Ie();
    }
    onFeatureFlags(t) {
        if (this.addFeatureFlagsHandler(t), this._e) {
            var { flags: i, flagVariants: e } = this.Pe();
            t(i, e);
        }
        return ()=>this.removeFeatureFlagsHandler(t);
    }
    updateEarlyAccessFeatureEnrollment(t, i) {
        var e, r = (this._instance.get_property(Pt) || []).find((i)=>i.flagKey === t), s = {
            ["$feature_enrollment/" + t]: i
        }, n = {
            $feature_flag: t,
            $feature_enrollment: i,
            $set: s
        };
        r && (n.$early_access_feature_name = r.name), this._instance.capture("$feature_enrollment_update", n), this.setPersonPropertiesForFlags(s, !1);
        var o = B({}, this.getFlagVariants(), {
            [t]: i
        });
        null == (e = this._instance.persistence) || e.register({
            [ro]: Object.keys(lo(o)),
            [It]: o
        }), this.Ie();
    }
    getEarlyAccessFeatures(t, i, e) {
        void 0 === i && (i = !1);
        var r = this._instance.get_property(Pt), s = e ? "&" + e.map((t)=>"stage=" + t).join("&") : "";
        if (r && !i) return t(r);
        this._instance.xe({
            url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this._instance.config.token + s),
            method: "GET",
            callback: (i)=>{
                var e;
                if (i.json) {
                    var r = i.json.earlyAccessFeatures;
                    return null == (e = this._instance.persistence) || e.register({
                        [Pt]: r
                    }), t(r);
                }
            }
        });
    }
    Pe() {
        var t = this.getFlags(), i = this.getFlagVariants();
        return {
            flags: t.filter((t)=>i[t]),
            flagVariants: Object.keys(i).filter((t)=>i[t]).reduce((t, e)=>(t[e] = i[e], t), {})
        };
    }
    Ie(t) {
        var { flags: i, flagVariants: e } = this.Pe();
        this.featureFlagEventHandlers.forEach((r)=>r(i, e, {
                errorsLoading: t
            }));
    }
    setPersonPropertiesForFlags(t, i) {
        void 0 === i && (i = !0);
        var e = this._instance.get_property(Tt) || {};
        this._instance.register({
            [Tt]: B({}, e, t)
        }), i && this._instance.reloadFeatureFlags();
    }
    resetPersonPropertiesForFlags() {
        this._instance.unregister(Tt);
    }
    setGroupPropertiesForFlags(t, i) {
        void 0 === i && (i = !0);
        var e = this._instance.get_property(Mt) || {};
        0 !== Object.keys(e).length && Object.keys(e).forEach((i)=>{
            e[i] = B({}, e[i], t[i]), delete t[i];
        }), this._instance.register({
            [Mt]: B({}, e, t)
        }), i && this._instance.reloadFeatureFlags();
    }
    resetGroupPropertiesForFlags(t) {
        if (t) {
            var i = this._instance.get_property(Mt) || {};
            this._instance.register({
                [Mt]: B({}, i, {
                    [t]: {}
                })
            });
        } else this._instance.unregister(Mt);
    }
}
var co = [
    "cookie",
    "localstorage",
    "localstorage+cookie",
    "sessionstorage",
    "memory"
];
class fo {
    constructor(t){
        this.S = t, this.props = {}, this.Re = !1, this.Te = ((t)=>{
            var i = "";
            return t.token && (i = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + i + "_posthog";
        })(t), this.q = this.Me(t), this.load(), t.debug && j.info("Persistence loaded", t.persistence, B({}, this.props)), this.update_config(t, t), this.save();
    }
    Me(t) {
        -1 === co.indexOf(t.persistence.toLowerCase()) && (j.critical("Unknown persistence type " + t.persistence + "; falling back to localStorage+cookie"), t.persistence = "localStorage+cookie");
        var i = t.persistence.toLowerCase();
        return "localstorage" === i && Wi.O() ? Wi : "localstorage+cookie" === i && Ji.O() ? Ji : "sessionstorage" === i && Xi.O() ? Xi : "memory" === i ? Ki : "cookie" === i ? Bi : Ji.O() ? Ji : Bi;
    }
    properties() {
        var t = {};
        return J(this.props, function(i, e) {
            if (e === It && I(i)) for(var r = Object.keys(i), n = 0; n < r.length; n++)t["$feature/" + r[n]] = i[r[n]];
            else a = e, l = !1, (C(o = Ht) ? l : s && o.indexOf === s ? -1 != o.indexOf(a) : (J(o, function(t) {
                if (l || (l = t === a)) return W;
            }), l)) || (t[e] = i);
            var o, a, l;
        }), t;
    }
    load() {
        if (!this.Ce) {
            var t = this.q.D(this.Te);
            t && (this.props = V({}, t));
        }
    }
    save() {
        this.Ce || this.q.L(this.Te, this.props, this.Oe, this.Fe, this.Ae, this.S.debug);
    }
    remove() {
        this.q.N(this.Te, !1), this.q.N(this.Te, !0);
    }
    clear() {
        this.remove(), this.props = {};
    }
    register_once(t, i, e) {
        if (I(t)) {
            R(i) && (i = "None"), this.Oe = R(e) ? this.De : e;
            var r = !1;
            if (J(t, (t, e)=>{
                this.props.hasOwnProperty(e) && this.props[e] !== i || (this.props[e] = t, r = !0);
            }), r) return this.save(), !0;
        }
        return !1;
    }
    register(t, i) {
        if (I(t)) {
            this.Oe = R(i) ? this.De : i;
            var e = !1;
            if (J(t, (i, r)=>{
                t.hasOwnProperty(r) && this.props[r] !== i && (this.props[r] = i, e = !0);
            }), e) return this.save(), !0;
        }
        return !1;
    }
    unregister(t) {
        t in this.props && (delete this.props[t], this.save());
    }
    update_campaign_params() {
        if (!this.Re) {
            var t = Gn(this.S.custom_campaign_params, this.S.mask_personal_data_properties, this.S.custom_personal_data_properties);
            P(Z(t)) || this.register(t), this.Re = !0;
        }
    }
    update_search_keyword() {
        var t;
        this.register((t = null == o ? void 0 : o.referrer) ? Vn(t) : {});
    }
    update_referrer_info() {
        var t;
        this.register_once({
            $referrer: Yn(),
            $referring_domain: null != o && o.referrer && (null == (t = wi(o.referrer)) ? void 0 : t.host) || "$direct"
        }, void 0);
    }
    set_initial_person_info() {
        this.props[Nt] || this.props[jt] || this.register_once({
            [zt]: Xn(this.S.mask_personal_data_properties, this.S.custom_personal_data_properties)
        }, void 0);
    }
    get_initial_props() {
        var t = {};
        J([
            jt,
            Nt
        ], (i)=>{
            var e = this.props[i];
            e && J(e, function(i, e) {
                t["$initial_" + y(e)] = i;
            });
        });
        var i, e, r = this.props[zt];
        if (r) {
            var s = (i = Qn(r), e = {}, J(i, function(t, i) {
                e["$initial_" + y(i)] = t;
            }), e);
            V(t, s);
        }
        return t;
    }
    safe_merge(t) {
        return J(this.props, function(i, e) {
            e in t || (t[e] = i);
        }), t;
    }
    update_config(t, i) {
        if (this.De = this.Oe = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie), t.persistence !== i.persistence) {
            var e = this.Me(t), r = this.props;
            this.clear(), this.q = e, this.props = r, this.save();
        }
    }
    set_disabled(t) {
        this.Ce = t, this.Ce ? this.remove() : this.save();
    }
    set_cross_subdomain(t) {
        t !== this.Fe && (this.Fe = t, this.remove(), this.save());
    }
    set_secure(t) {
        t !== this.Ae && (this.Ae = t, this.remove(), this.save());
    }
    set_event_timer(t, i) {
        var e = this.props[at] || {};
        e[t] = i, this.props[at] = e, this.save();
    }
    remove_event_timer(t) {
        var i = (this.props[at] || {})[t];
        return R(i) || (delete this.props[at][t], this.save()), i;
    }
    get_property(t) {
        return this.props[t];
    }
    set_property(t, i) {
        this.props[t] = i, this.save();
    }
}
class po {
    constructor(){
        this.Le = {}, this.Le = {};
    }
    on(t, i) {
        return this.Le[t] || (this.Le[t] = []), this.Le[t].push(i), ()=>{
            this.Le[t] = this.Le[t].filter((t)=>t !== i);
        };
    }
    emit(t, i) {
        for (var e of this.Le[t] || [])e(i);
        for (var r of this.Le["*"] || [])r(t, i);
    }
}
class _o {
    constructor(t){
        this.Ne = new po, this.je = (t, i)=>this.ze(t, i) && this.Ue(t, i) && this.qe(t, i), this.ze = (t, i)=>null == i || !i.event || (null == t ? void 0 : t.event) === (null == i ? void 0 : i.event), this._instance = t, this.Be = new Set, this.He = new Set;
    }
    init() {
        var t;
        if (!R(null == (t = this._instance) ? void 0 : t.We)) {
            var i;
            null == (i = this._instance) || i.We((t, i)=>{
                this.on(t, i);
            });
        }
    }
    register(t) {
        var i, e;
        if (!R(null == (i = this._instance) ? void 0 : i.We) && (t.forEach((t)=>{
            var i, e;
            null == (i = this.He) || i.add(t), null == (e = t.steps) || e.forEach((t)=>{
                var i;
                null == (i = this.Be) || i.add((null == t ? void 0 : t.event) || "");
            });
        }), null != (e = this._instance) && e.autocapture)) {
            var r, s = new Set;
            t.forEach((t)=>{
                var i;
                null == (i = t.steps) || i.forEach((t)=>{
                    null != t && t.selector && s.add(null == t ? void 0 : t.selector);
                });
            }), null == (r = this._instance) || r.autocapture.setElementSelectors(s);
        }
    }
    on(t, i) {
        var e;
        null != i && 0 != t.length && (this.Be.has(t) || this.Be.has(null == i ? void 0 : i.event)) && this.He && (null == (e = this.He) ? void 0 : e.size) > 0 && this.He.forEach((t)=>{
            this.Ge(i, t) && this.Ne.emit("actionCaptured", t.name);
        });
    }
    Je(t) {
        this.onAction("actionCaptured", (i)=>t(i));
    }
    Ge(t, i) {
        if (null == (null == i ? void 0 : i.steps)) return !1;
        for (var e of i.steps)if (this.je(t, e)) return !0;
        return !1;
    }
    onAction(t, i) {
        return this.Ne.on(t, i);
    }
    Ue(t, i) {
        if (null != i && i.url) {
            var e, r = null == t || null == (e = t.properties) ? void 0 : e.$current_url;
            if (!r || "string" != typeof r) return !1;
            if (!_o.Ve(r, null == i ? void 0 : i.url, (null == i ? void 0 : i.url_matching) || "contains")) return !1;
        }
        return !0;
    }
    static Ve(i, e, r) {
        switch(r){
            case "regex":
                return !!t && js(i, e);
            case "exact":
                return e === i;
            case "contains":
                var s = _o.Ke(e).replace(/_/g, ".").replace(/%/g, ".*");
                return js(i, s);
            default:
                return !1;
        }
    }
    static Ke(t) {
        return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    qe(t, i) {
        if ((null != i && i.href || null != i && i.tag_name || null != i && i.text) && !this.Ye(t).some((t)=>!(null != i && i.href && !_o.Ve(t.href || "", null == i ? void 0 : i.href, (null == i ? void 0 : i.href_matching) || "exact")) && (null == i || !i.tag_name || t.tag_name === (null == i ? void 0 : i.tag_name)) && !(null != i && i.text && !_o.Ve(t.text || "", null == i ? void 0 : i.text, (null == i ? void 0 : i.text_matching) || "exact") && !_o.Ve(t.$el_text || "", null == i ? void 0 : i.text, (null == i ? void 0 : i.text_matching) || "exact")))) return !1;
        if (null != i && i.selector) {
            var e, r = null == t || null == (e = t.properties) ? void 0 : e.$element_selectors;
            if (!r) return !1;
            if (!r.includes(null == i ? void 0 : i.selector)) return !1;
        }
        return !0;
    }
    Ye(t) {
        return null == (null == t ? void 0 : t.properties.$elements) ? [] : null == t ? void 0 : t.properties.$elements;
    }
}
var go = z("[Surveys]");
var mo = "seenSurvey_", bo = (t, i)=>{
    var e = "$survey_" + i + "/" + t.id;
    return t.current_iteration && t.current_iteration > 0 && (e = "$survey_" + i + "/" + t.id + "/" + t.current_iteration), e;
};
class yo {
    constructor(t){
        this._instance = t, this.Xe = new Map, this.Qe = new Map;
    }
    register(t) {
        var i;
        R(null == (i = this._instance) ? void 0 : i.We) || (this.Ze(t), this.tr(t));
    }
    tr(t) {
        var i = t.filter((t)=>{
            var i, e;
            return (null == (i = t.conditions) ? void 0 : i.actions) && (null == (e = t.conditions) || null == (e = e.actions) || null == (e = e.values) ? void 0 : e.length) > 0;
        });
        if (0 !== i.length) {
            if (null == this.ir) {
                this.ir = new _o(this._instance), this.ir.init();
                this.ir.Je((t)=>{
                    this.onAction(t);
                });
            }
            i.forEach((t)=>{
                var i, e, r, s, n;
                t.conditions && null != (i = t.conditions) && i.actions && null != (e = t.conditions) && null != (e = e.actions) && e.values && (null == (r = t.conditions) || null == (r = r.actions) || null == (r = r.values) ? void 0 : r.length) > 0 && (null == (s = this.ir) || s.register(t.conditions.actions.values), null == (n = t.conditions) || null == (n = n.actions) || null == (n = n.values) || n.forEach((i)=>{
                    if (i && i.name) {
                        var e = this.Qe.get(i.name);
                        e && e.push(t.id), this.Qe.set(i.name, e || [
                            t.id
                        ]);
                    }
                }));
            });
        }
    }
    Ze(t) {
        var i;
        if (0 !== t.filter((t)=>{
            var i, e;
            return (null == (i = t.conditions) ? void 0 : i.events) && (null == (e = t.conditions) || null == (e = e.events) || null == (e = e.values) ? void 0 : e.length) > 0;
        }).length) {
            null == (i = this._instance) || i.We((t, i)=>{
                this.onEvent(t, i);
            }), t.forEach((t)=>{
                var i;
                null == (i = t.conditions) || null == (i = i.events) || null == (i = i.values) || i.forEach((i)=>{
                    if (i && i.name) {
                        var e = this.Xe.get(i.name);
                        e && e.push(t.id), this.Xe.set(i.name, e || [
                            t.id
                        ]);
                    }
                });
            });
        }
    }
    onEvent(t, i) {
        var e, r = (null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.props[Ot]) || [];
        if ("survey shown" === t && i && r.length > 0) {
            var s;
            go.info("survey event matched, removing survey from activated surveys", {
                event: t,
                eventPayload: i,
                existingActivatedSurveys: r
            });
            var n = null == i || null == (s = i.properties) ? void 0 : s.$survey_id;
            if (n) {
                var o = r.indexOf(n);
                o >= 0 && (r.splice(o, 1), this.er(r));
            }
        } else this.Xe.has(t) && (go.info("survey event matched, updating activated surveys", {
            event: t,
            surveys: this.Xe.get(t)
        }), this.er(r.concat(this.Xe.get(t) || [])));
    }
    onAction(t) {
        var i, e = (null == (i = this._instance) || null == (i = i.persistence) ? void 0 : i.props[Ot]) || [];
        this.Qe.has(t) && this.er(e.concat(this.Qe.get(t) || []));
    }
    er(t) {
        var i;
        null == (i = this._instance) || null == (i = i.persistence) || i.register({
            [Ot]: [
                ...new Set(t)
            ]
        });
    }
    getSurveys() {
        var t, i = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[Ot];
        return i || [];
    }
    getEventToSurveys() {
        return this.Xe;
    }
    rr() {
        return this.ir;
    }
}
class wo {
    constructor(t){
        this.sr = null, this.nr = !1, this.ar = !1, this.lr = [], this._instance = t, this._surveyEventReceiver = null;
    }
    onRemoteConfig(t) {
        var i = t.surveys;
        if (O(i)) return go.warn("Decide not loaded yet. Not loading surveys.");
        var e = x(i);
        this.ur = e ? i.length > 0 : i, go.info("decide response received, hasSurveys: " + this.ur), this.ur && this.loadIfEnabled();
    }
    reset() {
        localStorage.removeItem("lastSeenSurveyDate");
        for(var t = [], i = 0; i < localStorage.length; i++){
            var e = localStorage.key(i);
            (null != e && e.startsWith(mo) || null != e && e.startsWith("inProgressSurvey_")) && t.push(e);
        }
        t.forEach((t)=>localStorage.removeItem(t));
    }
    loadIfEnabled() {
        if (!this.sr) if (this.ar) go.info("Already initializing surveys, skipping...");
        else if (this._instance.config.disable_surveys) go.info("Disabled. Not loading surveys.");
        else if (this.ur) {
            var t = null == v ? void 0 : v.__PosthogExtensions__;
            if (t) {
                this.ar = !0;
                try {
                    var i = t.generateSurveys;
                    if (i) return void this.hr(i);
                    var e = t.loadExternalDependency;
                    if (!e) return void this.dr("PostHog loadExternalDependency extension not found.");
                    e(this._instance, "surveys", (i)=>{
                        i || !t.generateSurveys ? this.dr("Could not load surveys script", i) : this.hr(t.generateSurveys);
                    });
                } catch (t) {
                    throw this.dr("Error initializing surveys", t), t;
                } finally{
                    this.ar = !1;
                }
            } else go.error("PostHog Extensions not found.");
        } else go.info("No surveys to load.");
    }
    hr(t) {
        this.sr = t(this._instance), this._surveyEventReceiver = new yo(this._instance), go.info("Surveys loaded successfully"), this.vr({
            isLoaded: !0
        });
    }
    dr(t, i) {
        go.error(t, i), this.vr({
            isLoaded: !1,
            error: t
        });
    }
    onSurveysLoaded(t) {
        return this.lr.push(t), this.sr && this.vr({
            isLoaded: !0
        }), ()=>{
            this.lr = this.lr.filter((i)=>i !== t);
        };
    }
    getSurveys(t, i) {
        if (void 0 === i && (i = !1), this._instance.config.disable_surveys) return go.info("Disabled. Not loading surveys."), t([]);
        var e = this._instance.get_property(Ct);
        if (e && !i) return t(e, {
            isLoaded: !0
        });
        if (this.nr) return t([], {
            isLoaded: !1,
            error: "Surveys are already being loaded"
        });
        try {
            this.nr = !0, this._instance.xe({
                url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this._instance.config.token),
                method: "GET",
                timeout: this._instance.config.surveys_request_timeout_ms,
                callback: (i)=>{
                    var e;
                    this.nr = !1;
                    var r = i.statusCode;
                    if (200 !== r || !i.json) {
                        var s = "Surveys API could not be loaded, status: " + r;
                        return go.error(s), t([], {
                            isLoaded: !1,
                            error: s
                        });
                    }
                    var n, o = i.json.surveys || [], a = o.filter((t)=>(function(t) {
                            return !(!t.start_date || t.end_date);
                        })(t) && (function(t) {
                            var i;
                            return !(null == (i = t.conditions) || null == (i = i.events) || null == (i = i.values) || !i.length);
                        }(t) || function(t) {
                            var i;
                            return !(null == (i = t.conditions) || null == (i = i.actions) || null == (i = i.values) || !i.length);
                        }(t)));
                    a.length > 0 && (null == (n = this._surveyEventReceiver) || n.register(a));
                    return null == (e = this._instance.persistence) || e.register({
                        [Ct]: o
                    }), t(o, {
                        isLoaded: !0
                    });
                }
            });
        } catch (t) {
            throw this.nr = !1, t;
        }
    }
    vr(t) {
        for (var i of this.lr)try {
            t.isLoaded ? this.getSurveys(i) : i([], t);
        } catch (t) {
            go.error("Error in survey callback", t);
        }
    }
    getActiveMatchingSurveys(t, i) {
        if (void 0 === i && (i = !1), !O(this.sr)) return this.sr.getActiveMatchingSurveys(t, i);
        go.warn("init was not called");
    }
    cr(t) {
        var i = null;
        return this.getSurveys((e)=>{
            var r;
            i = null !== (r = e.find((i)=>i.id === t)) && void 0 !== r ? r : null;
        }), i;
    }
    pr(t) {
        if (O(this.sr)) return {
            eligible: !1,
            reason: "SDK is not enabled or survey functionality is not yet loaded"
        };
        var i = "string" == typeof t ? this.cr(t) : t;
        return i ? this.sr.checkSurveyEligibility(i) : {
            eligible: !1,
            reason: "Survey not found"
        };
    }
    canRenderSurvey(t) {
        if (O(this.sr)) return go.warn("init was not called"), {
            visible: !1,
            disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
        };
        var i = this.pr(t);
        return {
            visible: i.eligible,
            disabledReason: i.reason
        };
    }
    canRenderSurveyAsync(t, i) {
        return O(this.sr) ? (go.warn("init was not called"), Promise.resolve({
            visible: !1,
            disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
        })) : new Promise((e)=>{
            this.getSurveys((i)=>{
                var r, s = null !== (r = i.find((i)=>i.id === t)) && void 0 !== r ? r : null;
                if (s) {
                    var n = this.pr(s);
                    e({
                        visible: n.eligible,
                        disabledReason: n.reason
                    });
                } else e({
                    visible: !1,
                    disabledReason: "Survey not found"
                });
            }, i);
        });
    }
    renderSurvey(t, i) {
        if (O(this.sr)) go.warn("init was not called");
        else {
            var e = this.cr(t), r = null == o ? void 0 : o.querySelector(i);
            e ? r ? this.sr.renderSurvey(e, r) : go.warn("Survey element not found") : go.warn("Survey not found");
        }
    }
}
var So = function(t) {
    return t.Button = "button", t.Tab = "tab", t.Selector = "selector", t;
}({}), $o = function(t) {
    return t.TopLeft = "top_left", t.TopRight = "top_right", t.TopCenter = "top_center", t.MiddleLeft = "middle_left", t.MiddleRight = "middle_right", t.MiddleCenter = "middle_center", t.Left = "left", t.Center = "center", t.Right = "right", t.NextToTrigger = "next_to_trigger", t;
}({}), ko = function(t) {
    return t.Popover = "popover", t.API = "api", t.Widget = "widget", t;
}({}), xo = function(t) {
    return t.Open = "open", t.MultipleChoice = "multiple_choice", t.SingleChoice = "single_choice", t.Rating = "rating", t.Link = "link", t;
}({}), Eo = function(t) {
    return t.NextQuestion = "next_question", t.End = "end", t.ResponseBased = "response_based", t.SpecificQuestion = "specific_question", t;
}({}), Io = function(t) {
    return t.Once = "once", t.Recurring = "recurring", t.Always = "always", t;
}({}), Po = function(t) {
    return t.SHOWN = "survey shown", t.DISMISSED = "survey dismissed", t.SENT = "survey sent", t;
}({}), Ro = function(t) {
    return t.SURVEY_ID = "$survey_id", t.SURVEY_NAME = "$survey_name", t.SURVEY_RESPONSE = "$survey_response", t.SURVEY_ITERATION = "$survey_iteration", t.SURVEY_ITERATION_START_DATE = "$survey_iteration_start_date", t.SURVEY_PARTIALLY_COMPLETED = "$survey_partially_completed", t.SURVEY_SUBMISSION_ID = "$survey_submission_id", t.SURVEY_QUESTIONS = "$survey_questions", t.SURVEY_COMPLETED = "$survey_completed", t;
}({}), To = z("[RateLimiter]");
class Mo {
    constructor(t){
        var i, e;
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (t)=>{
            var i = t.text;
            if (i && i.length) try {
                (JSON.parse(i).quota_limited || []).forEach((t)=>{
                    To.info((t || "events") + " is quota limited."), this.serverLimits[t] = (new Date).getTime() + 6e4;
                });
            } catch (t) {
                return void To.warn('could not rate limit - continuing. Error: "' + (null == t ? void 0 : t.message) + '"', {
                    text: i
                });
            }
        }, this.instance = t, this.captureEventsPerSecond = (null == (i = t.config.rate_limiting) ? void 0 : i.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null == (e = t.config.rate_limiting) ? void 0 : e.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
    }
    clientRateLimitContext(t) {
        var i, e, r;
        void 0 === t && (t = !1);
        var s = (new Date).getTime(), n = null !== (i = null == (e = this.instance.persistence) ? void 0 : e.get_property(Lt)) && void 0 !== i ? i : {
            tokens: this.captureEventsBurstLimit,
            last: s
        };
        n.tokens += (s - n.last) / 1e3 * this.captureEventsPerSecond, n.last = s, n.tokens > this.captureEventsBurstLimit && (n.tokens = this.captureEventsBurstLimit);
        var o = n.tokens < 1;
        return o || t || (n.tokens = Math.max(0, n.tokens - 1)), !o || this.lastEventRateLimited || t || this.instance.capture("$$client_ingestion_warning", {
            $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + this.captureEventsPerSecond + " events per second and " + this.captureEventsBurstLimit + " events burst limit."
        }, {
            skip_client_rate_limiting: !0
        }), this.lastEventRateLimited = o, null == (r = this.instance.persistence) || r.set_property(Lt, n), {
            isRateLimited: o,
            remainingTokens: n.tokens
        };
    }
    isServerRateLimited(t) {
        var i = this.serverLimits[t || "events"] || !1;
        return !1 !== i && (new Date).getTime() < i;
    }
}
var Co = z("[RemoteConfig]");
class Oo {
    constructor(t){
        this._instance = t;
    }
    get remoteConfig() {
        var t;
        return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.config;
    }
    _r(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.loadExternalDependency ? null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "remote-config", ()=>t(this.remoteConfig)) : (Co.error("PostHog Extensions not found. Cannot load remote config."), t());
    }
    gr(t) {
        this._instance.xe({
            method: "GET",
            url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
            callback: (i)=>{
                t(i.json);
            }
        });
    }
    load() {
        try {
            if (this.remoteConfig) return Co.info("Using preloaded remote config", this.remoteConfig), void this.Ee(this.remoteConfig);
            if (this._instance.config.advanced_disable_decide) return void Co.warn("Remote config is disabled. Falling back to local config.");
            this._r((t)=>{
                if (!t) return Co.info("No config found after loading remote JS config. Falling back to JSON."), void this.gr((t)=>{
                    this.Ee(t);
                });
                this.Ee(t);
            });
        } catch (t) {
            Co.error("Error loading remote config", t);
        }
    }
    Ee(t) {
        t ? this._instance.config.__preview_remote_config ? (this._instance.Ee(t), !1 !== t.hasFeatureFlags && this._instance.featureFlags.ensureFlagsLoaded()) : Co.info("__preview_remote_config is disabled. Logging config instead", t) : Co.error("Failed to fetch remote config from PostHog.");
    }
}
var Fo = 3e3;
class Ao {
    constructor(t, i){
        this.mr = !0, this.br = [], this.yr = se((null == i ? void 0 : i.flush_interval_ms) || Fo, 250, 5e3, "flush interval", Fo), this.wr = t;
    }
    enqueue(t) {
        this.br.push(t), this.Sr || this.$r();
    }
    unload() {
        this.kr();
        var t = this.br.length > 0 ? this.Er() : {}, i = Object.values(t);
        [
            ...i.filter((t)=>0 === t.url.indexOf("/e")),
            ...i.filter((t)=>0 !== t.url.indexOf("/e"))
        ].map((t)=>{
            this.wr(B({}, t, {
                transport: "sendBeacon"
            }));
        });
    }
    enable() {
        this.mr = !1, this.$r();
    }
    $r() {
        var t = this;
        this.mr || (this.Sr = setTimeout(()=>{
            if (this.kr(), this.br.length > 0) {
                var i = this.Er(), e = function() {
                    var e = i[r], s = (new Date).getTime();
                    e.data && x(e.data) && J(e.data, (t)=>{
                        t.offset = Math.abs(t.timestamp - s), delete t.timestamp;
                    }), t.wr(e);
                };
                for(var r in i)e();
            }
        }, this.yr));
    }
    kr() {
        clearTimeout(this.Sr), this.Sr = void 0;
    }
    Er() {
        var t = {};
        return J(this.br, (i)=>{
            var e, r = i, s = (r ? r.batchKey : null) || r.url;
            R(t[s]) && (t[s] = B({}, r, {
                data: []
            })), null == (e = t[s].data) || e.push(r.data);
        }), this.br = [], t;
    }
}
var Do = [
    "retriesPerformedSoFar"
];
class Lo {
    constructor(i){
        this.Ir = !1, this.Pr = 3e3, this.br = [], this._instance = i, this.br = [], this.Rr = !0, !R(t) && "onLine" in t.navigator && (this.Rr = t.navigator.onLine, st(t, "online", ()=>{
            this.Rr = !0, this.re();
        }), st(t, "offline", ()=>{
            this.Rr = !1;
        }));
    }
    get length() {
        return this.br.length;
    }
    retriableRequest(t) {
        var { retriesPerformedSoFar: i } = t, e = H(t, Do);
        F(i) && i > 0 && (e.url = As(e.url, {
            retry_count: i
        })), this._instance.xe(B({}, e, {
            callback: (t)=>{
                200 !== t.statusCode && (t.statusCode < 400 || t.statusCode >= 500) && (null != i ? i : 0) < 10 ? this.Tr(B({
                    retriesPerformedSoFar: i
                }, e)) : null == e.callback || e.callback(t);
            }
        }));
    }
    Tr(t) {
        var i = t.retriesPerformedSoFar || 0;
        t.retriesPerformedSoFar = i + 1;
        var e = function(t) {
            var i = 3e3 * Math.pow(2, t), e = i / 2, r = Math.min(18e5, i), s = (Math.random() - .5) * (r - e);
            return Math.ceil(r + s);
        }(i), r = Date.now() + e;
        this.br.push({
            retryAt: r,
            requestOptions: t
        });
        var s = "Enqueued failed request for retry in " + e;
        navigator.onLine || (s += " (Browser is offline)"), j.warn(s), this.Ir || (this.Ir = !0, this.Mr());
    }
    Mr() {
        this.Cr && clearTimeout(this.Cr), this.Cr = setTimeout(()=>{
            this.Rr && this.br.length > 0 && this.re(), this.Mr();
        }, this.Pr);
    }
    re() {
        var t = Date.now(), i = [], e = this.br.filter((e)=>e.retryAt < t || (i.push(e), !1));
        if (this.br = i, e.length > 0) for (var { requestOptions: r } of e)this.retriableRequest(r);
    }
    unload() {
        for (var { requestOptions: t } of (this.Cr && (clearTimeout(this.Cr), this.Cr = void 0), this.br))try {
            this._instance.xe(B({}, t, {
                transport: "sendBeacon"
            }));
        } catch (t) {
            j.error(t);
        }
        this.br = [];
    }
}
class No {
    constructor(t){
        this.Or = ()=>{
            var t, i, e, r;
            this.Fr || (this.Fr = {});
            var s = this.scrollElement(), n = this.scrollY(), o = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, a = n + ((null == s ? void 0 : s.clientHeight) || 0), l = (null == s ? void 0 : s.scrollHeight) || 0;
            this.Fr.lastScrollY = Math.ceil(n), this.Fr.maxScrollY = Math.max(n, null !== (t = this.Fr.maxScrollY) && void 0 !== t ? t : 0), this.Fr.maxScrollHeight = Math.max(o, null !== (i = this.Fr.maxScrollHeight) && void 0 !== i ? i : 0), this.Fr.lastContentY = a, this.Fr.maxContentY = Math.max(a, null !== (e = this.Fr.maxContentY) && void 0 !== e ? e : 0), this.Fr.maxContentHeight = Math.max(l, null !== (r = this.Fr.maxContentHeight) && void 0 !== r ? r : 0);
        }, this._instance = t;
    }
    getContext() {
        return this.Fr;
    }
    resetContext() {
        var t = this.Fr;
        return setTimeout(this.Or, 0), t;
    }
    startMeasuringScrollPosition() {
        st(t, "scroll", this.Or, {
            capture: !0
        }), st(t, "scrollend", this.Or, {
            capture: !0
        }), st(t, "resize", this.Or);
    }
    scrollElement() {
        if (!this._instance.config.scroll_root_selector) return null == t ? void 0 : t.document.documentElement;
        var i = x(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [
            this._instance.config.scroll_root_selector
        ];
        for (var e of i){
            var r = null == t ? void 0 : t.document.querySelector(e);
            if (r) return r;
        }
    }
    scrollY() {
        if (this._instance.config.scroll_root_selector) {
            var i = this.scrollElement();
            return i && i.scrollTop || 0;
        }
        return t && (t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop) || 0;
    }
    scrollX() {
        if (this._instance.config.scroll_root_selector) {
            var i = this.scrollElement();
            return i && i.scrollLeft || 0;
        }
        return t && (t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft) || 0;
    }
}
var jo = (t)=>Xn(null == t ? void 0 : t.config.mask_personal_data_properties, null == t ? void 0 : t.config.custom_personal_data_properties);
class zo {
    constructor(t, i, e, r){
        this.Ar = (t)=>{
            var i = this.Dr();
            if (!i || i.sessionId !== t) {
                var e = {
                    sessionId: t,
                    props: this.Lr(this._instance)
                };
                this.Nr.register({
                    [Dt]: e
                });
            }
        }, this._instance = t, this.jr = i, this.Nr = e, this.Lr = r || jo, this.jr.onSessionId(this.Ar);
    }
    Dr() {
        return this.Nr.props[Dt];
    }
    getSetOnceProps() {
        var t, i = null == (t = this.Dr()) ? void 0 : t.props;
        return i ? "r" in i ? Qn(i) : {
            $referring_domain: i.referringDomain,
            $pathname: i.initialPathName,
            utm_source: i.utm_source,
            utm_campaign: i.utm_campaign,
            utm_medium: i.utm_medium,
            utm_content: i.utm_content,
            utm_term: i.utm_term
        } : {};
    }
    getSessionProps() {
        var t = {};
        return J(Z(this.getSetOnceProps()), (i, e)=>{
            "$current_url" === e && (e = "url"), t["$session_entry_" + y(e)] = i;
        }), t;
    }
}
var Uo = z("[SessionId]");
class qo {
    constructor(t, i, e){
        var r;
        if (this.zr = [], !t.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if (t.config.__preview_experimental_cookieless_mode) throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
        this.S = t.config, this.Nr = t.persistence, this.ci = void 0, this.Mt = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.Ur = i || Ni, this.qr = e || Ni;
        var s = this.S.persistence_name || this.S.token, n = this.S.session_idle_timeout_seconds || 1800;
        if (this._sessionTimeoutMs = 1e3 * se(n, 60, 36e3, "session_idle_timeout_seconds", 1800), t.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
        }), this.Br(), this.Hr = "ph_" + s + "_window_id", this.Wr = "ph_" + s + "_primary_window_exists", this.Gr()) {
            var o = Xi.D(this.Hr), a = Xi.D(this.Wr);
            o && !a ? this.ci = o : Xi.N(this.Hr), Xi.L(this.Wr, !0);
        }
        if (null != (r = this.S.bootstrap) && r.sessionID) try {
            var l = ((t)=>{
                var i = t.replace(/-/g, "");
                if (32 !== i.length) throw new Error("Not a valid UUID");
                if ("7" !== i[12]) throw new Error("Not a UUIDv7");
                return parseInt(i.substring(0, 12), 16);
            })(this.S.bootstrap.sessionID);
            this.Jr(this.S.bootstrap.sessionID, (new Date).getTime(), l);
        } catch (t) {
            Uo.error("Invalid sessionID in bootstrap", t);
        }
        this.Vr();
    }
    get sessionTimeoutMs() {
        return this._sessionTimeoutMs;
    }
    onSessionId(t) {
        return R(this.zr) && (this.zr = []), this.zr.push(t), this.Mt && t(this.Mt, this.ci), ()=>{
            this.zr = this.zr.filter((i)=>i !== t);
        };
    }
    Gr() {
        return "memory" !== this.S.persistence && !this.Nr.Ce && Xi.O();
    }
    Kr(t) {
        t !== this.ci && (this.ci = t, this.Gr() && Xi.L(this.Hr, t));
    }
    Yr() {
        return this.ci ? this.ci : this.Gr() ? Xi.D(this.Hr) : null;
    }
    Jr(t, i, e) {
        t === this.Mt && i === this._sessionActivityTimestamp && e === this._sessionStartTimestamp || (this._sessionStartTimestamp = e, this._sessionActivityTimestamp = i, this.Mt = t, this.Nr.register({
            [$t]: [
                i,
                t,
                e
            ]
        }));
    }
    Xr() {
        if (this.Mt && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [
            this._sessionActivityTimestamp,
            this.Mt,
            this._sessionStartTimestamp
        ];
        var t = this.Nr.props[$t];
        return x(t) && 2 === t.length && t.push(t[0]), t || [
            0,
            null,
            0
        ];
    }
    resetSessionId() {
        this.Jr(null, null, null);
    }
    Vr() {
        st(t, "beforeunload", ()=>{
            this.Gr() && Xi.N(this.Wr);
        }, {
            capture: !1
        });
    }
    checkAndGetSessionAndWindowId(t, i) {
        if (void 0 === t && (t = !1), void 0 === i && (i = null), this.S.__preview_experimental_cookieless_mode) throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
        var e = i || (new Date).getTime(), [r, s, n] = this.Xr(), o = this.Yr(), a = F(n) && n > 0 && Math.abs(e - n) > 864e5, l = !1, u = !s, h = !t && Math.abs(e - r) > this.sessionTimeoutMs;
        u || h || a ? (s = this.Ur(), o = this.qr(), Uo.info("new session ID generated", {
            sessionId: s,
            windowId: o,
            changeReason: {
                noSessionId: u,
                activityTimeout: h,
                sessionPastMaximumLength: a
            }
        }), n = e, l = !0) : o || (o = this.qr(), l = !0);
        var d = 0 === r || !t || a ? e : r, v = 0 === n ? (new Date).getTime() : n;
        return this.Kr(o), this.Jr(s, d, v), t || this.Br(), l && this.zr.forEach((t)=>t(s, o, l ? {
                noSessionId: u,
                activityTimeout: h,
                sessionPastMaximumLength: a
            } : void 0)), {
            sessionId: s,
            windowId: o,
            sessionStartTimestamp: v,
            changeReason: l ? {
                noSessionId: u,
                activityTimeout: h,
                sessionPastMaximumLength: a
            } : void 0,
            lastActivityTimestamp: r
        };
    }
    Br() {
        clearTimeout(this.Qr), this.Qr = setTimeout(()=>{
            this.resetSessionId();
        }, 1.1 * this.sessionTimeoutMs);
    }
}
var Bo = [
    "$set_once",
    "$set"
], Ho = z("[SiteApps]");
class Wo {
    constructor(t){
        this._instance = t, this.Zr = [], this.apps = {};
    }
    get isEnabled() {
        return !!this._instance.config.opt_in_site_apps;
    }
    ts(t, i) {
        if (i) {
            var e = this.globalsForEvent(i);
            this.Zr.push(e), this.Zr.length > 1e3 && (this.Zr = this.Zr.slice(10));
        }
    }
    get siteAppLoaders() {
        var t;
        return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.siteApps;
    }
    init() {
        if (this.isEnabled) {
            var t = this._instance.We(this.ts.bind(this));
            this.es = ()=>{
                t(), this.Zr = [], this.es = void 0;
            };
        }
    }
    globalsForEvent(t) {
        var i, e, r, s, n, o, a;
        if (!t) throw new Error("Event payload is required");
        var l = {}, u = this._instance.get_property("$groups") || [], h = this._instance.get_property("$stored_group_properties") || {};
        for (var [d, v] of Object.entries(h))l[d] = {
            id: u[d],
            type: d,
            properties: v
        };
        var { $set_once: c, $set: f } = t;
        return {
            event: B({}, H(t, Bo), {
                properties: B({}, t.properties, f ? {
                    $set: B({}, null !== (i = null == (e = t.properties) ? void 0 : e.$set) && void 0 !== i ? i : {}, f)
                } : {}, c ? {
                    $set_once: B({}, null !== (r = null == (s = t.properties) ? void 0 : s.$set_once) && void 0 !== r ? r : {}, c)
                } : {}),
                elements_chain: null !== (n = null == (o = t.properties) ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
                distinct_id: null == (a = t.properties) ? void 0 : a.distinct_id
            }),
            person: {
                properties: this._instance.get_property("$stored_person_properties")
            },
            groups: l
        };
    }
    setupSiteApp(t) {
        var i = this.apps[t.id], e = ()=>{
            var e;
            (!i.errored && this.Zr.length && (Ho.info("Processing " + this.Zr.length + " events for site app with id " + t.id), this.Zr.forEach((t)=>null == i.processEvent ? void 0 : i.processEvent(t)), i.processedBuffer = !0), Object.values(this.apps).every((t)=>t.processedBuffer || t.errored)) && (null == (e = this.es) || e.call(this));
        }, r = !1, s = (s)=>{
            i.errored = !s, i.loaded = !0, Ho.info("Site app with id " + t.id + " " + (s ? "loaded" : "errored")), r && e();
        };
        try {
            var { processEvent: n } = t.init({
                posthog: this._instance,
                callback: (t)=>{
                    s(t);
                }
            });
            n && (i.processEvent = n), r = !0;
        } catch (i) {
            Ho.error("Error while initializing PostHog app with config id " + t.id, i), s(!1);
        }
        if (r && i.loaded) try {
            e();
        } catch (e) {
            Ho.error("Error while processing buffered events PostHog app with config id " + t.id, e), i.errored = !0;
        }
    }
    rs() {
        var t = this.siteAppLoaders || [];
        for (var i of t)this.apps[i.id] = {
            id: i.id,
            loaded: !1,
            errored: !1,
            processedBuffer: !1
        };
        for (var e of t)this.setupSiteApp(e);
    }
    ss(t) {
        if (0 !== Object.keys(this.apps).length) {
            var i = this.globalsForEvent(t);
            for (var e of Object.values(this.apps))try {
                null == e.processEvent || e.processEvent(i);
            } catch (i) {
                Ho.error("Error while processing event " + t.event + " for site app " + e.id, i);
            }
        }
    }
    onRemoteConfig(t) {
        var i, e, r, s = this;
        if (null != (i = this.siteAppLoaders) && i.length) return this.isEnabled ? (this.rs(), void this._instance.on("eventCaptured", (t)=>this.ss(t))) : void Ho.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
        if (null == (e = this.es) || e.call(this), null != (r = t.siteApps) && r.length) if (this.isEnabled) {
            var n = function(t) {
                var i;
                v["__$$ph_site_app_" + t] = s._instance, null == (i = v.__PosthogExtensions__) || null == i.loadSiteApp || i.loadSiteApp(s._instance, a, (i)=>{
                    if (i) return Ho.error("Error while initializing PostHog app with config id " + t, i);
                });
            };
            for (var { id: o, url: a } of t.siteApps)n(o);
        } else Ho.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
}
var Go = [
    "amazonbot",
    "amazonproductbot",
    "app.hypefactors.com",
    "applebot",
    "archive.org_bot",
    "awariobot",
    "backlinksextendedbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "dataforseobot",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "leikibot",
    "linkedinbot",
    "meta-externalagent",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterest",
    "prerender",
    "rogerbot",
    "screaming frog",
    "sebot-wa",
    "sitebulb",
    "slackbot",
    "slurp",
    "trendictionbot",
    "turnitin",
    "twitterbot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "zoombot",
    "bot.htm",
    "bot.php",
    "(bot;",
    "bot/",
    "crawler",
    "ahrefsbot",
    "ahrefssiteaudit",
    "semrushbot",
    "siteauditbot",
    "splitsignalbot",
    "gptbot",
    "oai-searchbot",
    "chatgpt-user",
    "perplexitybot",
    "better uptime bot",
    "sentryuptimebot",
    "uptimerobot",
    "headlesschrome",
    "cypress",
    "google-hoteladsverifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleother",
    "google-cloudvertexbot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "google-inspectiontool",
    "bytespider"
], Jo = function(t, i) {
    if (!t) return !1;
    var e = t.toLowerCase();
    return Go.concat(i || []).some((t)=>{
        var i = t.toLowerCase();
        return -1 !== e.indexOf(i);
    });
}, Vo = function(t, i) {
    if (!t) return !1;
    var e = t.userAgent;
    if (e && Jo(e, i)) return !0;
    try {
        var r = null == t ? void 0 : t.userAgentData;
        if (null != r && r.brands && r.brands.some((t)=>Jo(null == t ? void 0 : t.brand, i))) return !0;
    } catch (t) {}
    return !!t.webdriver;
}, Ko = function(t) {
    return t.US = "us", t.EU = "eu", t.CUSTOM = "custom", t;
}({}), Yo = "i.posthog.com";
class Xo {
    constructor(t){
        this.ns = {}, this.instance = t;
    }
    get apiHost() {
        var t = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === t ? "https://us.i.posthog.com" : t;
    }
    get uiHost() {
        var t, i = null == (t = this.instance.config.ui_host) ? void 0 : t.replace(/\/$/, "");
        return i || (i = this.apiHost.replace("." + Yo, ".posthog.com")), "https://app.posthog.com" === i ? "https://us.posthog.com" : i;
    }
    get region() {
        return this.ns[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.ns[this.apiHost] = Ko.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.ns[this.apiHost] = Ko.EU : this.ns[this.apiHost] = Ko.CUSTOM), this.ns[this.apiHost];
    }
    endpointFor(t, i) {
        if (void 0 === i && (i = ""), i && (i = "/" === i[0] ? i : "/" + i), "ui" === t) return this.uiHost + i;
        if (this.region === Ko.CUSTOM) return this.apiHost + i;
        var e = Yo + i;
        switch(t){
            case "assets":
                return "https://" + this.region + "-assets." + e;
            case "api":
                return "https://" + this.region + "." + e;
        }
    }
}
var Qo = {
    icontains: (i, e)=>!!t && e.href.toLowerCase().indexOf(i.toLowerCase()) > -1,
    not_icontains: (i, e)=>!!t && -1 === e.href.toLowerCase().indexOf(i.toLowerCase()),
    regex: (i, e)=>!!t && js(e.href, i),
    not_regex: (i, e)=>!!t && !js(e.href, i),
    exact: (t, i)=>i.href === t,
    is_not: (t, i)=>i.href !== t
};
class Zo {
    constructor(t){
        var i = this;
        this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
            void 0 === t && (t = !1), i.getWebExperiments((t)=>{
                Zo.os("retrieved web experiments from the server"), i.ls = new Map, t.forEach((t)=>{
                    if (t.feature_flag_key) {
                        var e;
                        if (i.ls) Zo.os("setting flag key ", t.feature_flag_key, " to web experiment ", t), null == (e = i.ls) || e.set(t.feature_flag_key, t);
                        var r = i._instance.getFeatureFlag(t.feature_flag_key);
                        T(r) && t.variants[r] && i.us(t.name, r, t.variants[r].transforms);
                    } else if (t.variants) for(var s in t.variants){
                        var n = t.variants[s];
                        Zo.hs(n) && i.us(t.name, s, n.transforms);
                    }
                });
            }, t);
        }, this._instance = t, this._instance.onFeatureFlags((t)=>{
            this.onFeatureFlags(t);
        });
    }
    onFeatureFlags(t) {
        if (this._is_bot()) Zo.os("Refusing to render web experiment since the viewer is a likely bot");
        else if (!this._instance.config.disable_web_experiments) {
            if (O(this.ls)) return this.ls = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
            Zo.os("applying feature flags", t), t.forEach((t)=>{
                var i;
                if (this.ls && null != (i = this.ls) && i.has(t)) {
                    var e, r = this._instance.getFeatureFlag(t), s = null == (e = this.ls) ? void 0 : e.get(t);
                    r && null != s && s.variants[r] && this.us(s.name, r, s.variants[r].transforms);
                }
            });
        }
    }
    previewWebExperiment() {
        var t = Zo.getWindowLocation();
        if (null != t && t.search) {
            var i = $i(null == t ? void 0 : t.search, "__experiment_id"), e = $i(null == t ? void 0 : t.search, "__experiment_variant");
            i && e && (Zo.os("previewing web experiments " + i + " && " + e), this.getWebExperiments((t)=>{
                this.ds(parseInt(i), e, t);
            }, !1, !0));
        }
    }
    loadIfEnabled() {
        this._instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
    }
    getWebExperiments(t, i, e) {
        if (this._instance.config.disable_web_experiments && !e) return t([]);
        var r = this._instance.get_property("$web_experiments");
        if (r && !i) return t(r);
        this._instance.xe({
            url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this._instance.config.token),
            method: "GET",
            callback: (i)=>{
                if (200 !== i.statusCode || !i.json) return t([]);
                var e = i.json.experiments || [];
                return t(e);
            }
        });
    }
    ds(t, i, e) {
        var r = e.filter((i)=>i.id === t);
        r && r.length > 0 && (Zo.os("Previewing web experiment [" + r[0].name + "] with variant [" + i + "]"), this.us(r[0].name, i, r[0].variants[i].transforms));
    }
    static hs(t) {
        return !O(t.conditions) && Zo.vs(t) && Zo.cs(t);
    }
    static vs(t) {
        var i;
        if (O(t.conditions) || O(null == (i = t.conditions) ? void 0 : i.url)) return !0;
        var e, r, s, n = Zo.getWindowLocation();
        return !!n && (null == (e = t.conditions) || !e.url || Qo[null !== (r = null == (s = t.conditions) ? void 0 : s.urlMatchType) && void 0 !== r ? r : "icontains"](t.conditions.url, n));
    }
    static getWindowLocation() {
        return null == t ? void 0 : t.location;
    }
    static cs(t) {
        var i;
        if (O(t.conditions) || O(null == (i = t.conditions) ? void 0 : i.utm)) return !0;
        var e = Gn();
        if (e.utm_source) {
            var r, s, n, o, a, l, u, h, d = null == (r = t.conditions) || null == (r = r.utm) || !r.utm_campaign || (null == (s = t.conditions) || null == (s = s.utm) ? void 0 : s.utm_campaign) == e.utm_campaign, v = null == (n = t.conditions) || null == (n = n.utm) || !n.utm_source || (null == (o = t.conditions) || null == (o = o.utm) ? void 0 : o.utm_source) == e.utm_source, c = null == (a = t.conditions) || null == (a = a.utm) || !a.utm_medium || (null == (l = t.conditions) || null == (l = l.utm) ? void 0 : l.utm_medium) == e.utm_medium, f = null == (u = t.conditions) || null == (u = u.utm) || !u.utm_term || (null == (h = t.conditions) || null == (h = h.utm) ? void 0 : h.utm_term) == e.utm_term;
            return d && c && f && v;
        }
        return !1;
    }
    static os(t) {
        for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)e[r - 1] = arguments[r];
        j.info("[WebExperiments] " + t, e);
    }
    us(t, i, e) {
        this._is_bot() ? Zo.os("Refusing to render web experiment since the viewer is a likely bot") : "control" !== i ? e.forEach((e)=>{
            if (e.selector) {
                var r;
                Zo.os("applying transform of variant " + i + " for experiment " + t + " ", e);
                var s = null == (r = document) ? void 0 : r.querySelectorAll(e.selector);
                null == s || s.forEach((t)=>{
                    var i = t;
                    e.html && (i.innerHTML = e.html), e.css && i.setAttribute("style", e.css);
                });
            }
        }) : Zo.os("Control variants leave the page unmodified.");
    }
    _is_bot() {
        return n && this._instance ? Vo(n, this._instance.config.custom_blocked_useragents) : void 0;
    }
}
var ta = {}, ia = ()=>{}, ea = "posthog", ra = !Os && -1 === (null == d ? void 0 : d.indexOf("MSIE")) && -1 === (null == d ? void 0 : d.indexOf("Mozilla")), sa = (i)=>{
    var e;
    return {
        api_host: "https://us.i.posthog.com",
        ui_host: null,
        token: "",
        autocapture: !0,
        rageclick: !0,
        cross_subdomain_cookie: et(null == o ? void 0 : o.location),
        persistence: "localStorage+cookie",
        persistence_name: "",
        loaded: ia,
        save_campaign_params: !0,
        custom_campaign_params: [],
        custom_blocked_useragents: [],
        save_referrer: !0,
        capture_pageview: "2025-05-24" !== i || "history_change",
        capture_pageleave: "if_capture_pageview",
        defaults: null != i ? i : "unset",
        debug: a && T(null == a ? void 0 : a.search) && -1 !== a.search.indexOf("__posthog_debug=true") || !1,
        cookie_expiration: 365,
        upgrade: !1,
        disable_session_recording: !1,
        disable_persistence: !1,
        disable_web_experiments: !0,
        disable_surveys: !1,
        disable_external_dependency_loading: !1,
        enable_recording_console_log: void 0,
        secure_cookie: "https:" === (null == t || null == (e = t.location) ? void 0 : e.protocol),
        ip: !0,
        opt_out_capturing_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_useragent_filter: !1,
        opt_out_capturing_persistence_type: "localStorage",
        opt_out_capturing_cookie_prefix: null,
        opt_in_site_apps: !1,
        property_denylist: [],
        respect_dnt: !1,
        sanitize_properties: null,
        request_headers: {},
        request_batching: !0,
        properties_string_max_length: 65535,
        session_recording: {},
        mask_all_element_attributes: !1,
        mask_all_text: !1,
        mask_personal_data_properties: !1,
        custom_personal_data_properties: [],
        advanced_disable_decide: !1,
        advanced_disable_feature_flags: !1,
        advanced_disable_feature_flags_on_first_load: !1,
        advanced_only_evaluate_survey_feature_flags: !1,
        advanced_disable_toolbar_metrics: !1,
        feature_flag_request_timeout_ms: 3e3,
        surveys_request_timeout_ms: 1e4,
        on_request_error: (t)=>{
            var i = "Bad HTTP status: " + t.statusCode + " " + t.text;
            j.error(i);
        },
        get_device_id: (t)=>t,
        capture_performance: void 0,
        name: "posthog",
        bootstrap: {},
        disable_compression: !1,
        session_idle_timeout_seconds: 1800,
        person_profiles: "identified_only",
        before_send: void 0,
        request_queue_config: {
            flush_interval_ms: Fo
        },
        error_tracking: {},
        _onCapture: ia
    };
}, na = (t)=>{
    var i = {};
    R(t.process_person) || (i.person_profiles = t.process_person), R(t.xhr_headers) || (i.request_headers = t.xhr_headers), R(t.cookie_name) || (i.persistence_name = t.cookie_name), R(t.disable_cookie) || (i.disable_persistence = t.disable_cookie), R(t.store_google) || (i.save_campaign_params = t.store_google), R(t.verbose) || (i.debug = t.verbose);
    var e = V({}, i, t);
    return x(t.property_blacklist) && (R(t.property_denylist) ? e.property_denylist = t.property_blacklist : x(t.property_denylist) ? e.property_denylist = [
        ...t.property_blacklist,
        ...t.property_denylist
    ] : j.error("Invalid value for property_denylist config: " + t.property_denylist)), e;
};
class oa {
    constructor(){
        this.__forceAllowLocalhost = !1;
    }
    get fs() {
        return this.__forceAllowLocalhost;
    }
    set fs(t) {
        j.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = t;
    }
}
class aa {
    get decideEndpointWasHit() {
        var t, i;
        return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    constructor(){
        this.webPerformance = new oa, this.ps = !1, this.version = c.LIB_VERSION, this._s = new po, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = sa(), this.SentryIntegration = gs, this.sentryIntegration = (t)=>(function(t, i) {
                var e = _s(t, i);
                return {
                    name: ps,
                    processEvent: (t)=>e(t)
                };
            })(this, t), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.gs = !1, this.bs = null, this.ys = null, this.ws = null, this.featureFlags = new vo(this), this.toolbar = new Ss(this), this.scrollManager = new No(this), this.pageViewManager = new Ms(this), this.surveys = new wo(this), this.experiments = new Zo(this), this.exceptions = new Hs(this), this.rateLimiter = new Mo(this), this.requestRouter = new Xo(this), this.consent = new Zi(this), this.people = {
            set: (t, i, e)=>{
                var r = T(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(r), null == e || e({});
            },
            set_once: (t, i, e)=>{
                var r = T(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(void 0, r), null == e || e({});
            }
        }, this.on("eventCaptured", (t)=>j.info('send "' + (null == t ? void 0 : t.event) + '"', t));
    }
    init(t, i, e) {
        if (e && e !== ea) {
            var r, s = null !== (r = ta[e]) && void 0 !== r ? r : new aa;
            return s._init(t, i, e), ta[e] = s, ta[ea][e] = s, s;
        }
        return this._init(t, i, e);
    }
    _init(i, e, r) {
        var s, n;
        if (void 0 === e && (e = {}), R(i) || M(i)) return j.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
        if (this.__loaded) return j.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
        this.__loaded = !0, this.config = {}, this.Ss = [], e.person_profiles && (this.ys = e.person_profiles), this.set_config(V({}, sa(e.defaults), na(e), {
            name: r,
            token: i
        })), this.config.on_xhr_error && j.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = e.disable_compression ? void 0 : _.GZipJS, this.persistence = new fo(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new fo(B({}, this.config, {
            persistence: "sessionStorage"
        }));
        var o = B({}, this.persistence.props), a = B({}, this.sessionPersistence.props);
        if (this.register({
            $initialization_time: (new Date).toISOString()
        }), this.$s = new Ao((t)=>this.ks(t), this.config.request_queue_config), this.xs = new Lo(this), this.__request_queue = [], this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new qo(this), this.sessionPropsManager = new zo(this, this.sessionManager, this.persistence)), new ks(this).startIfEnabledOrStop(), this.siteApps = new Wo(this), null == (s = this.siteApps) || s.init(), this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new vs(this), this.sessionRecording.startIfEnabledOrStop()), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new Mi(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new Ts(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new Is(this), this.exceptionObserver = new ae(this), this.exceptionObserver.startIfEnabled(), this.deadClicksAutocapture = new re(this, ee), this.deadClicksAutocapture.startIfEnabled(), this.historyAutocapture = new je(this), this.historyAutocapture.startIfEnabled(), c.DEBUG = c.DEBUG || this.config.debug, c.DEBUG && j.info("Starting in debug mode", {
            this: this,
            config: e,
            thisC: B({}, this.config),
            p: o,
            s: a
        }), this.Es(), void 0 !== (null == (n = e.bootstrap) ? void 0 : n.distinctID)) {
            var l, u, h = this.config.get_device_id(Ni()), d = null != (l = e.bootstrap) && l.isIdentifiedID ? h : e.bootstrap.distinctID;
            this.persistence.set_property(At, null != (u = e.bootstrap) && u.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: e.bootstrap.distinctID,
                $device_id: d
            });
        }
        if (this.Is()) {
            var v, f, p = Object.keys((null == (v = e.bootstrap) ? void 0 : v.featureFlags) || {}).filter((t)=>{
                var i;
                return !(null == (i = e.bootstrap) || null == (i = i.featureFlags) || !i[t]);
            }).reduce((t, i)=>{
                var r;
                return t[i] = (null == (r = e.bootstrap) || null == (r = r.featureFlags) ? void 0 : r[i]) || !1, t;
            }, {}), g = Object.keys((null == (f = e.bootstrap) ? void 0 : f.featureFlagPayloads) || {}).filter((t)=>p[t]).reduce((t, i)=>{
                var r, s;
                null != (r = e.bootstrap) && null != (r = r.featureFlagPayloads) && r[i] && (t[i] = null == (s = e.bootstrap) || null == (s = s.featureFlagPayloads) ? void 0 : s[i]);
                return t;
            }, {});
            this.featureFlags.receivedFeatureFlags({
                featureFlags: p,
                featureFlagPayloads: g
            });
        }
        if (this.config.__preview_experimental_cookieless_mode) this.register_once({
            distinct_id: Bt,
            $device_id: null
        }, "");
        else if (!this.get_distinct_id()) {
            var m = this.config.get_device_id(Ni());
            this.register_once({
                distinct_id: m,
                $device_id: m
            }, ""), this.persistence.set_property(At, "anonymous");
        }
        return st(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
        }), this.toolbar.maybeLoadToolbar(), e.segment ? fs(this, ()=>this.Ps()) : this.Ps(), E(this.config._onCapture) && this.config._onCapture !== ia && (j.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (t)=>this.config._onCapture(t.event, t))), this;
    }
    Ee(t) {
        var i, e, r, s, n, a, l, u;
        if (!o || !o.body) return j.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(()=>{
            this.Ee(t);
        }, 500);
        this.compression = void 0, t.supportedCompression && !this.config.disable_compression && (this.compression = m(t.supportedCompression, _.GZipJS) ? _.GZipJS : m(t.supportedCompression, _.Base64) ? _.Base64 : void 0), null != (i = t.analytics) && i.endpoint && (this.analyticsDefaultEndpoint = t.analytics.endpoint), this.set_config({
            person_profiles: this.ys ? this.ys : "identified_only"
        }), null == (e = this.siteApps) || e.onRemoteConfig(t), null == (r = this.sessionRecording) || r.onRemoteConfig(t), null == (s = this.autocapture) || s.onRemoteConfig(t), null == (n = this.heatmaps) || n.onRemoteConfig(t), this.surveys.onRemoteConfig(t), null == (a = this.webVitalsAutocapture) || a.onRemoteConfig(t), null == (l = this.exceptionObserver) || l.onRemoteConfig(t), this.exceptions.onRemoteConfig(t), null == (u = this.deadClicksAutocapture) || u.onRemoteConfig(t);
    }
    Ps() {
        try {
            this.config.loaded(this);
        } catch (t) {
            j.critical("`loaded` function failed", t);
        }
        this.Rs(), this.config.capture_pageview && setTimeout(()=>{
            this.consent.isOptedIn() && this.Ts();
        }, 1), new Oo(this).load(), this.featureFlags.decide();
    }
    Rs() {
        var t;
        this.has_opted_out_capturing() || this.config.request_batching && (null == (t = this.$s) || t.enable());
    }
    _dom_loaded() {
        this.has_opted_out_capturing() || G(this.__request_queue, (t)=>this.ks(t)), this.__request_queue = [], this.Rs();
    }
    _handle_unload() {
        var t, i;
        this.config.request_batching ? (this.Ms() && this.capture("$pageleave"), null == (t = this.$s) || t.unload(), null == (i = this.xs) || i.unload()) : this.Ms() && this.capture("$pageleave", null, {
            transport: "sendBeacon"
        });
    }
    xe(t) {
        this.__loaded && (ra ? this.__request_queue.push(t) : this.rateLimiter.isServerRateLimited(t.batchKey) || (t.transport = t.transport || this.config.api_transport, t.url = As(t.url, {
            ip: this.config.ip ? 1 : 0
        }), t.headers = B({}, this.config.request_headers), t.compression = "best-available" === t.compression ? this.compression : t.compression, t.fetchOptions = t.fetchOptions || this.config.fetch_options, ((t)=>{
            var i, e, r, s = B({}, t);
            s.timeout = s.timeout || 6e4, s.url = As(s.url, {
                _: (new Date).getTime().toString(),
                ver: c.LIB_VERSION,
                compression: s.compression
            });
            var n = null !== (i = s.transport) && void 0 !== i ? i : "fetch", o = null !== (e = null == (r = rt(Ns, (t)=>t.transport === n)) ? void 0 : r.method) && void 0 !== e ? e : Ns[0].method;
            if (!o) throw new Error("No available transport method");
            o(s);
        })(B({}, t, {
            callback: (i)=>{
                var e, r;
                (this.rateLimiter.checkForLimiting(i), i.statusCode >= 400) && (null == (e = (r = this.config).on_request_error) || e.call(r, i));
                null == t.callback || t.callback(i);
            }
        }))));
    }
    ks(t) {
        this.xs ? this.xs.retriableRequest(t) : this.xe(t);
    }
    _execute_array(t) {
        var i, e = [], r = [], s = [];
        G(t, (t)=>{
            t && (i = t[0], x(i) ? s.push(t) : E(t) ? t.call(this) : x(t) && "alias" === i ? e.push(t) : x(t) && -1 !== i.indexOf("capture") && E(this[i]) ? s.push(t) : r.push(t));
        });
        var n = function(t, i) {
            G(t, function(t) {
                if (x(t[0])) {
                    var e = i;
                    J(t, function(t) {
                        e = e[t[0]].apply(e, t.slice(1));
                    });
                } else this[t[0]].apply(this, t.slice(1));
            }, i);
        };
        n(e, this), n(r, this), n(s, this);
    }
    Is() {
        var t, i;
        return (null == (t = this.config.bootstrap) ? void 0 : t.featureFlags) && Object.keys(null == (i = this.config.bootstrap) ? void 0 : i.featureFlags).length > 0 || !1;
    }
    push(t) {
        this._execute_array([
            t
        ]);
    }
    capture(t, i, e) {
        var r;
        if (this.__loaded && this.persistence && this.sessionPersistence && this.$s) {
            if (!this.consent.isOptedOut()) if (!R(t) && T(t)) {
                if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                    var s = null != e && e.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                    if (null == s || !s.isRateLimited) {
                        null != i && i.$current_url && !T(null == i ? void 0 : i.$current_url) && (j.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == i || delete i.$current_url), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                        var n = new Date, o = (null == e ? void 0 : e.timestamp) || n, a = Ni(), l = {
                            uuid: a,
                            event: t,
                            properties: this.calculateEventProperties(t, i || {}, o, a)
                        };
                        s && (l.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens), (null == e ? void 0 : e.$set) && (l.$set = null == e ? void 0 : e.$set);
                        var u, h, d = this.Cs(null == e ? void 0 : e.$set_once);
                        if (d && (l.$set_once = d), (l = tt(l, null != e && e._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o, R(null == e ? void 0 : e.timestamp) || (l.properties.$event_time_override_provided = !0, l.properties.$event_time_override_system_time = n), t === Po.DISMISSED || t === Po.SENT) {
                            var v = null == i ? void 0 : i[Ro.SURVEY_ID], c = null == i ? void 0 : i[Ro.SURVEY_ITERATION];
                            localStorage.setItem((h = "" + mo + (u = {
                                id: v,
                                current_iteration: c
                            }).id, u.current_iteration && u.current_iteration > 0 && (h = "" + mo + u.id + "_" + u.current_iteration), h), "true"), l.$set = B({}, l.$set, {
                                [bo({
                                    id: v,
                                    current_iteration: c
                                }, t === Po.SENT ? "responded" : "dismissed")]: !0
                            });
                        }
                        var f = B({}, l.properties.$set, l.$set);
                        if (P(f) || this.setPersonPropertiesForFlags(f), !O(this.config.before_send)) {
                            var p = this.Os(l);
                            if (!p) return;
                            l = p;
                        }
                        this._s.emit("eventCaptured", l);
                        var _ = {
                            method: "POST",
                            url: null !== (r = null == e ? void 0 : e._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                            data: l,
                            compression: "best-available",
                            batchKey: null == e ? void 0 : e._batchKey
                        };
                        return !this.config.request_batching || e && (null == e || !e._batchKey) || null != e && e.send_instantly ? this.ks(_) : this.$s.enqueue(_), l;
                    }
                    j.critical("This capture call is ignored due to client rate limiting.");
                }
            } else j.error("No event name provided to posthog.capture");
        } else j.uninitializedWarning("posthog.capture");
    }
    We(t) {
        return this.on("eventCaptured", (i)=>t(i.event, i));
    }
    calculateEventProperties(t, i, e, r, s) {
        if (e = e || new Date, !this.persistence || !this.sessionPersistence) return i;
        var n = s ? void 0 : this.persistence.remove_event_timer(t), a = B({}, i);
        if (a.token = this.config.token, a.$config_defaults = this.config.defaults, this.config.__preview_experimental_cookieless_mode && (a.$cookieless_mode = !0), "$snapshot" === t) {
            var l = B({}, this.persistence.properties(), this.sessionPersistence.properties());
            return a.distinct_id = l.distinct_id, (!T(a.distinct_id) && !F(a.distinct_id) || M(a.distinct_id)) && j.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), a;
        }
        var u, h = io(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
        if (this.sessionManager) {
            var { sessionId: v, windowId: c } = this.sessionManager.checkAndGetSessionAndWindowId(s, e.getTime());
            a.$session_id = v, a.$window_id = c;
        }
        this.sessionPropsManager && V(a, this.sessionPropsManager.getSessionProps());
        try {
            var f;
            this.sessionRecording && V(a, this.sessionRecording.sdkDebugProperties), a.$sdk_debug_retry_queue_size = null == (f = this.xs) ? void 0 : f.length;
        } catch (t) {
            a.$sdk_debug_error_capturing_properties = String(t);
        }
        if (this.requestRouter.region === Ko.CUSTOM && (a.$lib_custom_api_host = this.config.api_host), u = "$pageview" !== t || s ? "$pageleave" !== t || s ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(e) : this.pageViewManager.doPageView(e, r), a = V(a, u), "$pageview" === t && o && (a.title = o.title), !R(n)) {
            var p = e.getTime() - n;
            a.$duration = parseFloat((p / 1e3).toFixed(3));
        }
        d && this.config.opt_out_useragent_filter && (a.$browser_type = this._is_bot() ? "bot" : "browser"), (a = V({}, h, this.persistence.properties(), this.sessionPersistence.properties(), a)).$is_identified = this._isIdentified(), x(this.config.property_denylist) ? J(this.config.property_denylist, function(t) {
            delete a[t];
        }) : j.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
        var _ = this.config.sanitize_properties;
        _ && (j.error("sanitize_properties is deprecated. Use before_send instead"), a = _(a, t));
        var g = this.Fs();
        return a.$process_person_profile = g, g && !s && this.As("_calculate_event_properties"), a;
    }
    Cs(t) {
        var i;
        if (!this.persistence || !this.Fs()) return t;
        if (this.ps) return t;
        var e = this.persistence.get_initial_props(), r = null == (i = this.sessionPropsManager) ? void 0 : i.getSetOnceProps(), s = V({}, e, r || {}, t || {}), n = this.config.sanitize_properties;
        return n && (j.error("sanitize_properties is deprecated. Use before_send instead"), s = n(s, "$set_once")), this.ps = !0, P(s) ? void 0 : s;
    }
    register(t, i) {
        var e;
        null == (e = this.persistence) || e.register(t, i);
    }
    register_once(t, i, e) {
        var r;
        null == (r = this.persistence) || r.register_once(t, i, e);
    }
    register_for_session(t) {
        var i;
        null == (i = this.sessionPersistence) || i.register(t);
    }
    unregister(t) {
        var i;
        null == (i = this.persistence) || i.unregister(t);
    }
    unregister_for_session(t) {
        var i;
        null == (i = this.sessionPersistence) || i.unregister(t);
    }
    Ds(t, i) {
        this.register({
            [t]: i
        });
    }
    getFeatureFlag(t, i) {
        return this.featureFlags.getFeatureFlag(t, i);
    }
    getFeatureFlagPayload(t) {
        var i = this.featureFlags.getFeatureFlagPayload(t);
        try {
            return JSON.parse(i);
        } catch (t) {
            return i;
        }
    }
    isFeatureEnabled(t, i) {
        return this.featureFlags.isFeatureEnabled(t, i);
    }
    reloadFeatureFlags() {
        this.featureFlags.reloadFeatureFlags();
    }
    updateEarlyAccessFeatureEnrollment(t, i) {
        this.featureFlags.updateEarlyAccessFeatureEnrollment(t, i);
    }
    getEarlyAccessFeatures(t, i, e) {
        return void 0 === i && (i = !1), this.featureFlags.getEarlyAccessFeatures(t, i, e);
    }
    on(t, i) {
        return this._s.on(t, i);
    }
    onFeatureFlags(t) {
        return this.featureFlags.onFeatureFlags(t);
    }
    onSurveysLoaded(t) {
        return this.surveys.onSurveysLoaded(t);
    }
    onSessionId(t) {
        var i, e;
        return null !== (i = null == (e = this.sessionManager) ? void 0 : e.onSessionId(t)) && void 0 !== i ? i : ()=>{};
    }
    getSurveys(t, i) {
        void 0 === i && (i = !1), this.surveys.getSurveys(t, i);
    }
    getActiveMatchingSurveys(t, i) {
        void 0 === i && (i = !1), this.surveys.getActiveMatchingSurveys(t, i);
    }
    renderSurvey(t, i) {
        this.surveys.renderSurvey(t, i);
    }
    canRenderSurvey(t) {
        return this.surveys.canRenderSurvey(t);
    }
    canRenderSurveyAsync(t, i) {
        return void 0 === i && (i = !1), this.surveys.canRenderSurveyAsync(t, i);
    }
    identify(t, i, e) {
        if (!this.__loaded || !this.persistence) return j.uninitializedWarning("posthog.identify");
        if (F(t) && (t = t.toString(), j.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), t) {
            if ([
                "distinct_id",
                "distinctid"
            ].includes(t.toLowerCase())) j.critical('The string "' + t + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.');
            else if (this.As("posthog.identify")) {
                var r = this.get_distinct_id();
                if (this.register({
                    $user_id: t
                }), !this.get_property("$device_id")) {
                    var s = r;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: s
                    }, "");
                }
                t !== r && t !== this.get_property(ot) && (this.unregister(ot), this.register({
                    distinct_id: t
                }));
                var n = "anonymous" === (this.persistence.get_property(At) || "anonymous");
                t !== r && n ? (this.persistence.set_property(At, "identified"), this.setPersonPropertiesForFlags(B({}, e || {}, i || {}), !1), this.capture("$identify", {
                    distinct_id: t,
                    $anon_distinct_id: r
                }, {
                    $set: i || {},
                    $set_once: e || {}
                }), this.ws = zs(t, i, e), this.featureFlags.setAnonymousDistinctId(r)) : (i || e) && this.setPersonProperties(i, e), t !== r && (this.reloadFeatureFlags(), this.unregister(Ft));
            }
        } else j.error("Unique user id has not been set in posthog.identify");
    }
    setPersonProperties(t, i) {
        if ((t || i) && this.As("posthog.setPersonProperties")) {
            var e = zs(this.get_distinct_id(), t, i);
            this.ws !== e ? (this.setPersonPropertiesForFlags(B({}, i || {}, t || {})), this.capture("$set", {
                $set: t || {},
                $set_once: i || {}
            }), this.ws = e) : j.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
        }
    }
    group(t, i, e) {
        if (t && i) {
            if (this.As("posthog.group")) {
                var r = this.getGroups();
                r[t] !== i && this.resetGroupPropertiesForFlags(t), this.register({
                    $groups: B({}, r, {
                        [t]: i
                    })
                }), e && (this.capture("$groupidentify", {
                    $group_type: t,
                    $group_key: i,
                    $group_set: e
                }), this.setGroupPropertiesForFlags({
                    [t]: e
                })), r[t] === i || e || this.reloadFeatureFlags();
            }
        } else j.error("posthog.group requires a group type and group key");
    }
    resetGroups() {
        this.register({
            $groups: {}
        }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
    setPersonPropertiesForFlags(t, i) {
        void 0 === i && (i = !0), this.featureFlags.setPersonPropertiesForFlags(t, i);
    }
    resetPersonPropertiesForFlags() {
        this.featureFlags.resetPersonPropertiesForFlags();
    }
    setGroupPropertiesForFlags(t, i) {
        void 0 === i && (i = !0), this.As("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(t, i);
    }
    resetGroupPropertiesForFlags(t) {
        this.featureFlags.resetGroupPropertiesForFlags(t);
    }
    reset(t) {
        var i, e, r, s;
        if (j.info("reset"), !this.__loaded) return j.uninitializedWarning("posthog.reset");
        var n = this.get_property("$device_id");
        if (this.consent.reset(), null == (i = this.persistence) || i.clear(), null == (e = this.sessionPersistence) || e.clear(), this.surveys.reset(), null == (r = this.persistence) || r.set_property(At, "anonymous"), null == (s = this.sessionManager) || s.resetSessionId(), this.ws = null, this.config.__preview_experimental_cookieless_mode) this.register_once({
            distinct_id: Bt,
            $device_id: null
        }, "");
        else {
            var o = this.config.get_device_id(Ni());
            this.register_once({
                distinct_id: o,
                $device_id: t ? o : n
            }, "");
        }
        this.register({
            $last_posthog_reset: (new Date).toISOString()
        }, 1);
    }
    get_distinct_id() {
        return this.get_property("distinct_id");
    }
    getGroups() {
        return this.get_property("$groups") || {};
    }
    get_session_id() {
        var t, i;
        return null !== (t = null == (i = this.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== t ? t : "";
    }
    get_session_replay_url(t) {
        if (!this.sessionManager) return "";
        var { sessionId: i, sessionStartTimestamp: e } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + i);
        if (null != t && t.withTimestamp && e) {
            var s, n = null !== (s = t.timestampLookBack) && void 0 !== s ? s : 10;
            if (!e) return r;
            r += "?t=" + Math.max(Math.floor(((new Date).getTime() - e) / 1e3) - n, 0);
        }
        return r;
    }
    alias(t, i) {
        return t === this.get_property(nt) ? (j.critical("Attempting to create alias for existing People user - aborting."), -2) : this.As("posthog.alias") ? (R(i) && (i = this.get_distinct_id()), t !== i ? (this.Ds(ot, t), this.capture("$create_alias", {
            alias: t,
            distinct_id: i
        })) : (j.warn("alias matches current distinct_id - skipping api call."), this.identify(t), -1)) : void 0;
    }
    set_config(t) {
        var i, e, r, s, n = B({}, this.config);
        I(t) && (V(this.config, na(t)), null == (i = this.persistence) || i.update_config(this.config, n), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new fo(B({}, this.config, {
            persistence: "sessionStorage"
        })), Wi.O() && "true" === Wi.A("ph_debug") && (this.config.debug = !0), this.config.debug && (c.DEBUG = !0, j.info("set_config", JSON.stringify({
            config: t,
            oldConfig: n,
            newConfig: B({}, this.config)
        }, null, 2))), null == (e = this.sessionRecording) || e.startIfEnabledOrStop(), null == (r = this.autocapture) || r.startIfEnabled(), null == (s = this.heatmaps) || s.startIfEnabled(), this.surveys.loadIfEnabled(), this.Es());
    }
    startSessionRecording(t) {
        var i = !0 === t, e = {
            sampling: i || !(null == t || !t.sampling),
            linked_flag: i || !(null == t || !t.linked_flag),
            url_trigger: i || !(null == t || !t.url_trigger),
            event_trigger: i || !(null == t || !t.event_trigger)
        };
        if (Object.values(e).some(Boolean)) {
            var r, s, n, o, a;
            if (null == (r = this.sessionManager) || r.checkAndGetSessionAndWindowId(), e.sampling) null == (s = this.sessionRecording) || s.overrideSampling();
            if (e.linked_flag) null == (n = this.sessionRecording) || n.overrideLinkedFlag();
            if (e.url_trigger) null == (o = this.sessionRecording) || o.overrideTrigger("url");
            if (e.event_trigger) null == (a = this.sessionRecording) || a.overrideTrigger("event");
        }
        this.set_config({
            disable_session_recording: !1
        });
    }
    stopSessionRecording() {
        this.set_config({
            disable_session_recording: !0
        });
    }
    sessionRecordingStarted() {
        var t;
        return !(null == (t = this.sessionRecording) || !t.started);
    }
    captureException(t, i) {
        var e = new Error("PostHog syntheticException");
        this.exceptions.sendExceptionEvent(B({}, Le(((t)=>t instanceof Error)(t) ? {
            error: t,
            event: t.message
        } : {
            event: t
        }, {
            syntheticException: e
        }), i));
    }
    loadToolbar(t) {
        return this.toolbar.loadToolbar(t);
    }
    get_property(t) {
        var i;
        return null == (i = this.persistence) ? void 0 : i.props[t];
    }
    getSessionProperty(t) {
        var i;
        return null == (i = this.sessionPersistence) ? void 0 : i.props[t];
    }
    toString() {
        var t, i = null !== (t = this.config.name) && void 0 !== t ? t : ea;
        return i !== ea && (i = ea + "." + i), i;
    }
    _isIdentified() {
        var t, i;
        return "identified" === (null == (t = this.persistence) ? void 0 : t.get_property(At)) || "identified" === (null == (i = this.sessionPersistence) ? void 0 : i.get_property(At));
    }
    Fs() {
        var t, i;
        return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && P(this.getGroups()) && (null == (t = this.persistence) || null == (t = t.props) || !t[ot]) && (null == (i = this.persistence) || null == (i = i.props) || !i[Ut]));
    }
    Ms() {
        return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && (!0 === this.config.capture_pageview || "history_change" === this.config.capture_pageview);
    }
    createPersonProfile() {
        this.Fs() || this.As("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
    As(t) {
        return "never" === this.config.person_profiles ? (j.error(t + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this.Ds(Ut, !0), !0);
    }
    Es() {
        var t, i, e, r, s = this.consent.isOptedOut(), n = this.config.opt_out_persistence_by_default, o = this.config.disable_persistence || s && !!n;
        (null == (t = this.persistence) ? void 0 : t.Ce) !== o && (null == (e = this.persistence) || e.set_disabled(o));
        (null == (i = this.sessionPersistence) ? void 0 : i.Ce) !== o && (null == (r = this.sessionPersistence) || r.set_disabled(o));
    }
    opt_in_capturing(t) {
        var i;
        (this.consent.optInOut(!0), this.Es(), R(null == t ? void 0 : t.captureEventName) || null != t && t.captureEventName) && this.capture(null !== (i = null == t ? void 0 : t.captureEventName) && void 0 !== i ? i : "$opt_in", null == t ? void 0 : t.captureProperties, {
            send_instantly: !0
        });
        this.config.capture_pageview && this.Ts();
    }
    opt_out_capturing() {
        this.consent.optInOut(!1), this.Es();
    }
    has_opted_in_capturing() {
        return this.consent.isOptedIn();
    }
    has_opted_out_capturing() {
        return this.consent.isOptedOut();
    }
    clear_opt_in_out_capturing() {
        this.consent.reset(), this.Es();
    }
    _is_bot() {
        return n ? Vo(n, this.config.custom_blocked_useragents) : void 0;
    }
    Ts() {
        o && ("visible" === o.visibilityState ? this.gs || (this.gs = !0, this.capture("$pageview", {
            title: o.title
        }, {
            send_instantly: !0
        }), this.bs && (o.removeEventListener("visibilitychange", this.bs), this.bs = null)) : this.bs || (this.bs = this.Ts.bind(this), st(o, "visibilitychange", this.bs)));
    }
    debug(i) {
        !1 === i ? (null == t || t.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
            debug: !1
        })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
            debug: !0
        }));
    }
    Os(t) {
        if (O(this.config.before_send)) return t;
        var i = x(this.config.before_send) ? this.config.before_send : [
            this.config.before_send
        ], e = t;
        for (var r of i){
            if (e = r(e), O(e)) {
                var s = "Event '" + t.event + "' was rejected in beforeSend function";
                return L(t.event) ? j.warn(s + ". This can cause unexpected behavior.") : j.info(s), null;
            }
            e.properties && !P(e.properties) || j.warn("Event '" + t.event + "' has no properties after beforeSend function, this is likely an error.");
        }
        return e;
    }
    getPageViewId() {
        var t;
        return null == (t = this.pageViewManager.ve) ? void 0 : t.pageViewId;
    }
    captureTraceFeedback(t, i) {
        this.capture("$ai_feedback", {
            $ai_trace_id: String(t),
            $ai_feedback_text: i
        });
    }
    captureTraceMetric(t, i, e) {
        this.capture("$ai_metric", {
            $ai_trace_id: String(t),
            $ai_metric_name: i,
            $ai_metric_value: String(e)
        });
    }
}
!function(t, i) {
    for(var e = 0; e < i.length; e++)t.prototype[i[e]] = Q(t.prototype[i[e]]);
}(aa, [
    "identify"
]);
var la, ua = (la = ta[ea] = new aa, function() {
    function i() {
        i.done || (i.done = !0, ra = !1, J(ta, function(t) {
            t._dom_loaded();
        }));
    }
    null != o && o.addEventListener ? "complete" === o.readyState ? i() : st(o, "DOMContentLoaded", i, {
        capture: !1
    }) : t && j.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
}(), la);
;
 //# sourceMappingURL=module.js.map
}}),
"[project]/apps/chat-ui/node_modules/posthog-js/react/dist/esm/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PostHogContext": (()=>PostHogContext),
    "PostHogErrorBoundary": (()=>PostHogErrorBoundary),
    "PostHogFeature": (()=>PostHogFeature),
    "PostHogProvider": (()=>PostHogProvider),
    "useActiveFeatureFlags": (()=>useActiveFeatureFlags),
    "useFeatureFlagEnabled": (()=>useFeatureFlagEnabled),
    "useFeatureFlagPayload": (()=>useFeatureFlagPayload),
    "useFeatureFlagVariantKey": (()=>useFeatureFlagVariantKey),
    "usePostHog": (()=>usePostHog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/posthog-js/dist/module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var PostHogContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
function isDeepEqual(obj1, obj2, visited) {
    if (visited === void 0) {
        visited = new WeakMap();
    }
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    if (visited.has(obj1) && visited.get(obj1) === obj2) {
        return true;
    }
    visited.set(obj1, obj2);
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for(var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++){
        var key = keys1_1[_i];
        if (!keys2.includes(key)) {
            return false;
        }
        if (!isDeepEqual(obj1[key], obj2[key], visited)) {
            return false;
        }
    }
    return true;
}
function PostHogProvider(_a) {
    var children = _a.children, client = _a.client, apiKey = _a.apiKey, options = _a.options;
    var previousInitializationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var posthog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (client) {
            if (apiKey) {
                console.warn('[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`.');
            }
            if (options) {
                console.warn('[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`.');
            }
            return client;
        }
        if (apiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
        }
        console.warn('[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior.');
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    }, [
        client,
        apiKey,
        JSON.stringify(options)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (client) {
            return;
        }
        var previousInitialization = previousInitializationRef.current;
        if (!previousInitialization) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].__loaded) {
                console.warn('[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues.');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init(apiKey, options);
            previousInitializationRef.current = {
                apiKey: apiKey,
                options: options !== null && options !== void 0 ? options : {}
            };
        } else {
            if (apiKey !== previousInitialization.apiKey) {
                console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop.");
            }
            if (options && !isDeepEqual(options, previousInitialization.options)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set_config(options);
            }
            previousInitializationRef.current = {
                apiKey: apiKey,
                options: options !== null && options !== void 0 ? options : {}
            };
        }
    }, [
        client,
        apiKey,
        JSON.stringify(options)
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(PostHogContext.Provider, {
        value: {
            client: posthog
        }
    }, children);
}
var usePostHog = function() {
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext).client;
    return client;
};
function useFeatureFlagEnabled(flag) {
    var client = usePostHog();
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return client.isFeatureEnabled(flag);
    }), featureEnabled = _a[0], setFeatureEnabled = _a[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return client.onFeatureFlags(function() {
            setFeatureEnabled(client.isFeatureEnabled(flag));
        });
    }, [
        client,
        flag
    ]);
    return featureEnabled;
}
function useFeatureFlagPayload(flag) {
    var client = usePostHog();
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return client.getFeatureFlagPayload(flag);
    }), featureFlagPayload = _a[0], setFeatureFlagPayload = _a[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return client.onFeatureFlags(function() {
            setFeatureFlagPayload(client.getFeatureFlagPayload(flag));
        });
    }, [
        client,
        flag
    ]);
    return featureFlagPayload;
}
function useActiveFeatureFlags() {
    var client = usePostHog();
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return client.featureFlags.getFlags();
    }), featureFlags = _a[0], setFeatureFlags = _a[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return client.onFeatureFlags(function(flags) {
            setFeatureFlags(flags);
        });
    }, [
        client
    ]);
    return featureFlags;
}
function useFeatureFlagVariantKey(flag) {
    var client = usePostHog();
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return client.getFeatureFlag(flag);
    }), featureFlagVariantKey = _a[0], setFeatureFlagVariantKey = _a[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return client.onFeatureFlags(function() {
            setFeatureFlagVariantKey(client.getFeatureFlag(flag));
        });
    }, [
        client,
        flag
    ]);
    return featureFlagVariantKey;
}
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
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
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
var isFunction = function(f) {
    return typeof f === 'function';
};
var isUndefined = function(x) {
    return x === void 0;
};
var isNull = function(x) {
    return x === null;
};
function PostHogFeature(_a) {
    var flag = _a.flag, match = _a.match, children = _a.children, fallback = _a.fallback, visibilityObserverOptions = _a.visibilityObserverOptions, trackInteraction = _a.trackInteraction, trackView = _a.trackView, props = __rest(_a, [
        "flag",
        "match",
        "children",
        "fallback",
        "visibilityObserverOptions",
        "trackInteraction",
        "trackView"
    ]);
    var payload = useFeatureFlagPayload(flag);
    var variant = useFeatureFlagVariantKey(flag);
    var shouldTrackInteraction = trackInteraction !== null && trackInteraction !== void 0 ? trackInteraction : true;
    var shouldTrackView = trackView !== null && trackView !== void 0 ? trackView : true;
    if (isUndefined(match) || variant === match) {
        var childNode = isFunction(children) ? children(payload) : children;
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTrackers, __assign({
            flag: flag,
            options: visibilityObserverOptions,
            trackInteraction: shouldTrackInteraction,
            trackView: shouldTrackView
        }, props), childNode);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, fallback);
}
function captureFeatureInteraction(_a) {
    var _b;
    var flag = _a.flag, posthog = _a.posthog, flagVariant = _a.flagVariant;
    var properties = {
        feature_flag: flag,
        $set: (_b = {}, _b["$feature_interaction/".concat(flag)] = flagVariant !== null && flagVariant !== void 0 ? flagVariant : true, _b)
    };
    if (typeof flagVariant === 'string') {
        properties.feature_flag_variant = flagVariant;
    }
    posthog.capture('$feature_interaction', properties);
}
function captureFeatureView(_a) {
    var _b;
    var flag = _a.flag, posthog = _a.posthog, flagVariant = _a.flagVariant;
    var properties = {
        feature_flag: flag,
        $set: (_b = {}, _b["$feature_view/".concat(flag)] = flagVariant !== null && flagVariant !== void 0 ? flagVariant : true, _b)
    };
    if (typeof flagVariant === 'string') {
        properties.feature_flag_variant = flagVariant;
    }
    posthog.capture('$feature_view', properties);
}
function VisibilityAndClickTracker(_a) {
    var flag = _a.flag, children = _a.children, onIntersect = _a.onIntersect, onClick = _a.onClick, trackView = _a.trackView, options = _a.options, props = __rest(_a, [
        "flag",
        "children",
        "onIntersect",
        "onClick",
        "trackView",
        "options"
    ]);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var posthog = usePostHog();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (isNull(ref.current) || !trackView) return;
        var observer = new IntersectionObserver(function(_a) {
            var entry = _a[0];
            return onIntersect(entry);
        }, __assign({
            threshold: 0.1
        }, options));
        observer.observe(ref.current);
        return function() {
            return observer.disconnect();
        };
    }, [
        flag,
        options,
        posthog,
        ref,
        trackView,
        onIntersect
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({
        ref: ref
    }, props, {
        onClick: onClick
    }), children);
}
function VisibilityAndClickTrackers(_a) {
    var flag = _a.flag, children = _a.children, trackInteraction = _a.trackInteraction, trackView = _a.trackView, options = _a.options, props = __rest(_a, [
        "flag",
        "children",
        "trackInteraction",
        "trackView",
        "options"
    ]);
    var clickTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var visibilityTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var posthog = usePostHog();
    var variant = useFeatureFlagVariantKey(flag);
    var cachedOnClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        if (!clickTrackedRef.current && trackInteraction) {
            captureFeatureInteraction({
                flag: flag,
                posthog: posthog,
                flagVariant: variant
            });
            clickTrackedRef.current = true;
        }
    }, [
        flag,
        posthog,
        trackInteraction,
        variant
    ]);
    var onIntersect = function(entry) {
        if (!visibilityTrackedRef.current && entry.isIntersecting) {
            captureFeatureView({
                flag: flag,
                posthog: posthog,
                flagVariant: variant
            });
            visibilityTrackedRef.current = true;
        }
    };
    var trackedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, function(child) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, __assign({
            flag: flag,
            onClick: cachedOnClick,
            onIntersect: onIntersect,
            trackView: trackView,
            options: options
        }, props), child);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, trackedChildren);
}
var INITIAL_STATE = {
    componentStack: null,
    error: null
};
var __POSTHOG_ERROR_MESSAGES = {
    INVALID_FALLBACK: '[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element.'
};
var PostHogErrorBoundary = function(_super) {
    __extends(PostHogErrorBoundary, _super);
    function PostHogErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = INITIAL_STATE;
        return _this;
    }
    PostHogErrorBoundary.prototype.componentDidCatch = function(error, errorInfo) {
        var componentStack = errorInfo.componentStack;
        var additionalProperties = this.props.additionalProperties;
        this.setState({
            error: error,
            componentStack: componentStack
        });
        var currentProperties;
        if (isFunction(additionalProperties)) {
            currentProperties = additionalProperties(error);
        } else if (typeof additionalProperties === 'object') {
            currentProperties = additionalProperties;
        }
        var client = this.context.client;
        client.captureException(error, currentProperties);
    };
    PostHogErrorBoundary.prototype.render = function() {
        var _a = this.props, children = _a.children, fallback = _a.fallback;
        var state = this.state;
        if (state.componentStack == null) {
            return isFunction(children) ? children() : children;
        }
        var element = isFunction(fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(fallback, {
            error: state.error,
            componentStack: state.componentStack
        }) : fallback;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
            return element;
        }
        console.warn(__POSTHOG_ERROR_MESSAGES.INVALID_FALLBACK);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null);
    };
    PostHogErrorBoundary.contextType = PostHogContext;
    return PostHogErrorBoundary;
}(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
;
}}),
"[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//#region src/standard.ts
__turbopack_context__.s({
    "createEnv": (()=>createEnv)
});
function ensureSynchronous(value, message) {
    if (value instanceof Promise) throw new Error(message);
}
function parseWithDictionary(dictionary, value) {
    const result = {};
    const issues = [];
    for(const key in dictionary){
        const propResult = dictionary[key]["~standard"].validate(value[key]);
        ensureSynchronous(propResult, `Validation must be synchronous, but ${key} returned a Promise.`);
        if (propResult.issues) {
            issues.push(...propResult.issues.map((issue)=>({
                    ...issue,
                    message: issue.message,
                    path: [
                        key,
                        ...issue.path ?? []
                    ]
                })));
            continue;
        }
        result[key] = propResult.value;
    }
    if (issues.length) return {
        issues
    };
    return {
        value: result
    };
}
//#endregion
//#region src/index.ts
/**
* Create a new environment variable schema.
*/ function createEnv(opts) {
    const runtimeEnv = opts.runtimeEnvStrict ?? opts.runtimeEnv ?? process.env;
    const emptyStringAsUndefined = opts.emptyStringAsUndefined ?? false;
    if (emptyStringAsUndefined) {
        for (const [key, value] of Object.entries(runtimeEnv))if (value === "") delete runtimeEnv[key];
    }
    const skip = !!opts.skipValidation;
    if (skip) return runtimeEnv;
    const _client = typeof opts.client === "object" ? opts.client : {};
    const _server = typeof opts.server === "object" ? opts.server : {};
    const _shared = typeof opts.shared === "object" ? opts.shared : {};
    const isServer = opts.isServer ?? (typeof window === "undefined" || "Deno" in window);
    const finalSchemaShape = isServer ? {
        ..._server,
        ..._shared,
        ..._client
    } : {
        ..._client,
        ..._shared
    };
    const parsed = opts.createFinalSchema?.(finalSchemaShape, isServer)["~standard"].validate(runtimeEnv) ?? parseWithDictionary(finalSchemaShape, runtimeEnv);
    ensureSynchronous(parsed, "Validation must be synchronous");
    const onValidationError = opts.onValidationError ?? ((issues)=>{
        console.error("❌ Invalid environment variables:", issues);
        throw new Error("Invalid environment variables");
    });
    const onInvalidAccess = opts.onInvalidAccess ?? (()=>{
        throw new Error("❌ Attempted to access a server-side environment variable on the client");
    });
    if (parsed.issues) return onValidationError(parsed.issues);
    const isServerAccess = (prop)=>{
        if (!opts.clientPrefix) return true;
        return !prop.startsWith(opts.clientPrefix) && !(prop in _shared);
    };
    const isValidServerAccess = (prop)=>{
        return isServer || !isServerAccess(prop);
    };
    const ignoreProp = (prop)=>{
        return prop === "__esModule" || prop === "$$typeof";
    };
    const extendedObj = (opts.extends ?? []).reduce((acc, curr)=>{
        return Object.assign(acc, curr);
    }, {});
    const fullObj = Object.assign(extendedObj, parsed.value);
    const env = new Proxy(fullObj, {
        get (target, prop) {
            if (typeof prop !== "string") return void 0;
            if (ignoreProp(prop)) return void 0;
            if (!isValidServerAccess(prop)) return onInvalidAccess(prop);
            return Reflect.get(target, prop);
        }
    });
    return env;
}
;
}}),
"[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)");
;
;
}}),
"[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@t3-oss/env-nextjs/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createEnv": (()=>createEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)");
;
//#region src/index.ts
const CLIENT_PREFIX = "NEXT_PUBLIC_";
/**
* Create a new environment variable schema.
*/ function createEnv(opts) {
    const client = typeof opts.client === "object" ? opts.client : {};
    const server = typeof opts.server === "object" ? opts.server : {};
    const shared = opts.shared;
    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {
        ...process.env,
        ...opts.experimental__runtimeEnv
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        ...opts,
        shared,
        client,
        server,
        clientPrefix: CLIENT_PREFIX,
        runtimeEnv
    });
}
;
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ZodParsedType": (()=>ZodParsedType),
    "getParsedType": (()=>getParsedType),
    "objectUtil": (()=>objectUtil),
    "util": (()=>util)
});
var util;
(function(util) {
    util.assertEqual = (_)=>{};
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items){
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys){
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/ZodError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ZodError": (()=>ZodError),
    "ZodIssueCode": (()=>ZodIssueCode),
    "quotelessJson": (()=>quotelessJson)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)");
;
const ZodIssueCode = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        } else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                } else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                } else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                } else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                } else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                        // if (typeof el === "string") {
                        //   curr[el] = curr[el] || { _errors: [] };
                        // } else if (typeof el === "number") {
                        //   const errorArray: any = [];
                        //   errorArray._errors = [];
                        //   curr[el] = curr[el] || errorArray;
                        // }
                        } else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues){
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            } else {
                formErrors.push(mapper(sub));
            }
        }
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/ZodError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)");
;
;
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type:
            if (issue.received === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
                message = "Required";
            } else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].jsonStringifyReplacer)}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].unrecognized_keys:
            message = `Unrecognized key(s) in object: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].joinValues(issue.keys, ", ")}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union:
            message = `Invalid input`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value:
            message = `Invalid enum value. Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_return_type:
            message = `Invalid function return type`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_date:
            message = `Invalid date`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                } else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                } else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(issue.validation);
                }
            } else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            } else {
                message = "Invalid";
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom:
            message = `Invalid input`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(issue);
    }
    return {
        message
    };
};
const __TURBOPACK__default__export__ = errorMap;
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getErrorMap": (()=>getErrorMap),
    "setErrorMap": (()=>setErrorMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript)");
;
let overrideErrorMap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/parseUtil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DIRTY": (()=>DIRTY),
    "EMPTY_PATH": (()=>EMPTY_PATH),
    "INVALID": (()=>INVALID),
    "OK": (()=>OK),
    "ParseStatus": (()=>ParseStatus),
    "addIssueToContext": (()=>addIssueToContext),
    "isAborted": (()=>isAborted),
    "isAsync": (()=>isAsync),
    "isDirty": (()=>isDirty),
    "isValid": (()=>isValid),
    "makeIssue": (()=>makeIssue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript)");
;
;
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message
        };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps){
        errorMessage = map(fullIssue, {
            data,
            defaultError: errorMessage
        }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/typeAliases.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript) <export default as defaultErrorMap>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/errorUtil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "errorUtil": (()=>errorUtil)
});
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    // biome-ignore lint:
    errorUtil.toString = (message)=>typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BRAND": (()=>BRAND),
    "NEVER": (()=>NEVER),
    "Schema": (()=>ZodType),
    "ZodAny": (()=>ZodAny),
    "ZodArray": (()=>ZodArray),
    "ZodBigInt": (()=>ZodBigInt),
    "ZodBoolean": (()=>ZodBoolean),
    "ZodBranded": (()=>ZodBranded),
    "ZodCatch": (()=>ZodCatch),
    "ZodDate": (()=>ZodDate),
    "ZodDefault": (()=>ZodDefault),
    "ZodDiscriminatedUnion": (()=>ZodDiscriminatedUnion),
    "ZodEffects": (()=>ZodEffects),
    "ZodEnum": (()=>ZodEnum),
    "ZodFirstPartyTypeKind": (()=>ZodFirstPartyTypeKind),
    "ZodFunction": (()=>ZodFunction),
    "ZodIntersection": (()=>ZodIntersection),
    "ZodLazy": (()=>ZodLazy),
    "ZodLiteral": (()=>ZodLiteral),
    "ZodMap": (()=>ZodMap),
    "ZodNaN": (()=>ZodNaN),
    "ZodNativeEnum": (()=>ZodNativeEnum),
    "ZodNever": (()=>ZodNever),
    "ZodNull": (()=>ZodNull),
    "ZodNullable": (()=>ZodNullable),
    "ZodNumber": (()=>ZodNumber),
    "ZodObject": (()=>ZodObject),
    "ZodOptional": (()=>ZodOptional),
    "ZodPipeline": (()=>ZodPipeline),
    "ZodPromise": (()=>ZodPromise),
    "ZodReadonly": (()=>ZodReadonly),
    "ZodRecord": (()=>ZodRecord),
    "ZodSchema": (()=>ZodType),
    "ZodSet": (()=>ZodSet),
    "ZodString": (()=>ZodString),
    "ZodSymbol": (()=>ZodSymbol),
    "ZodTransformer": (()=>ZodEffects),
    "ZodTuple": (()=>ZodTuple),
    "ZodType": (()=>ZodType),
    "ZodUndefined": (()=>ZodUndefined),
    "ZodUnion": (()=>ZodUnion),
    "ZodUnknown": (()=>ZodUnknown),
    "ZodVoid": (()=>ZodVoid),
    "any": (()=>anyType),
    "array": (()=>arrayType),
    "bigint": (()=>bigIntType),
    "boolean": (()=>booleanType),
    "coerce": (()=>coerce),
    "custom": (()=>custom),
    "date": (()=>dateType),
    "datetimeRegex": (()=>datetimeRegex),
    "discriminatedUnion": (()=>discriminatedUnionType),
    "effect": (()=>effectsType),
    "enum": (()=>enumType),
    "function": (()=>functionType),
    "instanceof": (()=>instanceOfType),
    "intersection": (()=>intersectionType),
    "late": (()=>late),
    "lazy": (()=>lazyType),
    "literal": (()=>literalType),
    "map": (()=>mapType),
    "nan": (()=>nanType),
    "nativeEnum": (()=>nativeEnumType),
    "never": (()=>neverType),
    "null": (()=>nullType),
    "nullable": (()=>nullableType),
    "number": (()=>numberType),
    "object": (()=>objectType),
    "oboolean": (()=>oboolean),
    "onumber": (()=>onumber),
    "optional": (()=>optionalType),
    "ostring": (()=>ostring),
    "pipeline": (()=>pipelineType),
    "preprocess": (()=>preprocessType),
    "promise": (()=>promiseType),
    "record": (()=>recordType),
    "set": (()=>setType),
    "strictObject": (()=>strictObjectType),
    "string": (()=>stringType),
    "symbol": (()=>symbolType),
    "transformer": (()=>effectsType),
    "tuple": (()=>tupleType),
    "undefined": (()=>undefinedType),
    "union": (()=>unionType),
    "unknown": (()=>unknownType),
    "void": (()=>voidType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/ZodError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript) <export default as defaultErrorMap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/errorUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/parseUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (Array.isArray(this._key)) {
                this._cachedPath.push(...this._path, ...this._key);
            } else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(result)) {
        return {
            success: true,
            data: result.value
        };
    } else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"](ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return {
                message: message ?? ctx.defaultError
            };
        }
        if (typeof ctx.data === "undefined") {
            return {
                message: message ?? required_error ?? ctx.defaultError
            };
        }
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: message ?? invalid_type_error ?? ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"](),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAsync"])(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        const ctx = {
            common: {
                issues: [],
                async: params?.async ?? false,
                contextualErrorMap: params?.errorMap
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({
                    data,
                    path: [],
                    parent: ctx
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(result) ? {
                    value: result.value
                } : {
                    issues: ctx.common.issues
                };
            } catch (err) {
                if (err?.message?.toLowerCase()?.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true
                };
            }
        }
        return this._parseAsync({
            data,
            path: [],
            parent: ctx
        }).then((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params?.errorMap,
                async: true
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAsync"])(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") {
                return {
                    message
                };
            } else if (typeof message === "function") {
                return message(val);
            } else {
                return message;
            }
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data)=>{
                    if (!data) {
                        setError();
                        return false;
                    } else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            } else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data)=>this["~validate"](data)
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt)) return false;
    try {
        const [header] = jwt.split(".");
        // Convert base64url to base64
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null) return false;
        if ("typ" in decoded && decoded?.typ !== "JWT") return false;
        if (!decoded.alg) return false;
        if (alg && decoded.alg !== alg) return false;
        return true;
    } catch  {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].string) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].string,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"]();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    } else if (tooSmall) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    }
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "email",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "emoji",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "uuid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "nanoid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cuid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cuid2",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "ulid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") {
                try {
                    new URL(input.data);
                } catch  {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "url",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "regex",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") {
                input.data = input.data.trim();
            } else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            } else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            } else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "duration",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "ip",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "jwt",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cidr",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "base64",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "base64url",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation,
            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    jwt(options) {
        return this._addCheck({
            kind: "jwt",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    cidr(options) {
        return this._addCheck({
            kind: "cidr",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    datetime(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            offset: options?.offset ?? false,
            local: options?.local ?? false,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message
        });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options?.position,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    /**
     * Equivalent to `.min(1)`
     */ nonempty(message) {
        return this.min(1, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch)=>ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch)=>ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].number) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].number,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        let ctx = undefined;
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"]();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].isInteger(ch.value));
    }
    get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                return true;
            } else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            } catch  {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"]();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
            expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].bigint,
            received: ctx.parsedType
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
    }
    gte(value, message) {
        return this.setLimit("min", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].boolean,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].date) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].date,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (Number.isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_date
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"]();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].symbol,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].null) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].null,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
            expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].never,
            received: ctx.parsedType
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].void,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].array,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: tooBig ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([
                ...ctx.data
            ].map((item, i)=>{
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, result);
            });
        }
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element)
        });
    } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    } else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(shape);
        this._cached = {
            shape,
            keys
        };
        return this._cached;
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data){
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys){
                    pairs.push({
                        key: {
                            status: "valid",
                            value: key
                        },
                        value: {
                            status: "valid",
                            value: ctx.data[key]
                        }
                    });
                }
            } else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") {} else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve().then(async ()=>{
                const syncPairs = [];
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet
                    });
                }
                return syncPairs;
            }).then((syncPairs)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, syncPairs);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message).message ?? defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(mask)){
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            } else {
                newShape[key] = fieldSchema.optional();
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            } else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while(newField instanceof ZodOptional){
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results){
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result)=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"](result.ctx.common.issues));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union,
                unionErrors
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option)=>{
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx
                    }),
                    ctx: childCtx
                };
            })).then(handleResults);
        } else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") {
                    return result;
                } else if (result.status === "dirty" && !dirty) {
                    dirty = {
                        result,
                        ctx: childCtx
                    };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"](issues));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union,
                unionErrors
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
        return [
            type.value
        ];
    } else if (type instanceof ZodEnum) {
        return type.options;
    } else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
        return [
            undefined
        ];
    } else if (type instanceof ZodNull) {
        return [
            null
        ];
    } else if (type instanceof ZodOptional) {
        return [
            undefined,
            ...getDiscriminator(type.unwrap())
        ];
    } else if (type instanceof ZodNullable) {
        return [
            null,
            ...getDiscriminator(type.unwrap())
        ];
    } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    } else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        } else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(a);
    const bType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"])(b);
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object && bType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
        const bKeys = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(b);
        const sharedKeys = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].array && bType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
        if (a.length !== b.length) {
            return {
                valid: false
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].date && bType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    } else {
        return {
            valid: false
        };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAborted"])(parsedLeft) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAborted"])(parsedRight)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_intersection_types
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDirty"])(parsedLeft) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDirty"])(parsedRight)) {
                status.dirty();
            }
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                })
            ]).then(([left, right])=>handleParsed(left, right));
        } else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }));
        }
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].array,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.data.length < this._def.items.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, results);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data){
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (ctx.common.async) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectAsync(status, pairs);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third)
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].map) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].map,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].set) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].set,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements)=>finalizeSet(elements));
        } else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].function) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].function,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        function makeArgsIssue(args, error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeIssue"])({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__["defaultErrorMap"]
                ].filter((x)=>!!x),
                issueData: {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeIssue"])({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__["defaultErrorMap"]
                ].filter((x)=>!!x),
                issueData: {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(async function(...args) {
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"]([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"]([
                        makeArgsIssue(args, parsedArgs.error)
                    ]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"]([
                        makeReturnsIssue(result, parsedReturns.error)
                    ]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_literal,
                expected: this._def.value
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].joinValues(expectedValues),
                received: ctx.parsedType,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (!this._cache) {
            this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value,
                options: expectedValues
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].string && ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].number) {
            const expectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectValues(nativeEnumValues);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].joinValues(expectedValues),
                received: ctx.parsedType,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (!this._cache) {
            this._cache = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
            const expectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].objectValues(nativeEnumValues);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value,
                options: expectedValues
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].promise && ctx.common.async === false) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].promise,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const promisified = ctx.parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                } else {
                    status.dirty();
                }
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed)=>{
                    if (status.value === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx
                    });
                    if (result.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                    if (result.status === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                    if (status.value === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                    return result;
                });
            } else {
                if (status.value === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                if (result.status === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                if (status.value === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((inner)=>{
                    if (inner.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                    if (inner.status === "dirty") status.dirty();
                    return executeRefinement(inner.value).then(()=>{
                        return {
                            status: status.value,
                            value: inner.value
                        };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(base)) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return {
                    status: status.value,
                    value: result
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((base)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(base)) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                            status: status.value,
                            value: result
                        }));
                });
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
;
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"])(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAsync"])(result)) {
            return result.then((result)=>{
                return {
                    status: "valid",
                    value: result.status === "valid" ? result.value : this._def.catchValue({
                        get error () {
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"](newCtx.common.issues);
                        },
                        input: newCtx.data
                    })
                };
            });
        } else {
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"](newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"].nan,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
                if (inResult.status === "dirty") {
                    status.dirty();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIRTY"])(inResult.value);
                } else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx
                    });
                }
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAsync"])(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p2 = typeof p === "string" ? {
        message: p
    } : p;
    return p2;
}
function custom(check, _params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        const r = check(data);
        if (r instanceof Promise) {
            return r.then((r)=>{
                if (!r) {
                    const params = cleanParams(_params, data);
                    const _fatal = params.fatal ?? fatal ?? true;
                    ctx.addIssue({
                        code: "custom",
                        ...params,
                        fatal: _fatal
                    });
                }
            });
        }
        if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({
                code: "custom",
                ...params,
                fatal: _fatal
            });
        }
        return;
    });
    return ZodAny.create();
}
;
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// requires TS 4.4+
class Class {
    constructor(..._){}
}
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
;
const NEVER = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"];
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/parseUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$typeAliases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/typeAliases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/ZodError.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/parseUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$typeAliases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/typeAliases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/ZodError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
    "getErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"]),
    "setErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorMap"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/locales/en.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["defaultErrorMap"]),
    "getErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getErrorMap"]),
    "setErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["setErrorMap"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BRAND": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"]),
    "DIRTY": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIRTY"]),
    "EMPTY_PATH": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_PATH"]),
    "INVALID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVALID"]),
    "NEVER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NEVER"]),
    "OK": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OK"]),
    "ParseStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseStatus"]),
    "Schema": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"]),
    "ZodAny": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodAny"]),
    "ZodArray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodArray"]),
    "ZodBigInt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodBigInt"]),
    "ZodBoolean": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodBoolean"]),
    "ZodBranded": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodBranded"]),
    "ZodCatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodCatch"]),
    "ZodDate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodDate"]),
    "ZodDefault": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodDefault"]),
    "ZodDiscriminatedUnion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodDiscriminatedUnion"]),
    "ZodEffects": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodEffects"]),
    "ZodEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodEnum"]),
    "ZodError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodError"]),
    "ZodFirstPartyTypeKind": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"]),
    "ZodFunction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodFunction"]),
    "ZodIntersection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIntersection"]),
    "ZodIssueCode": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodIssueCode"]),
    "ZodLazy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodLazy"]),
    "ZodLiteral": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodLiteral"]),
    "ZodMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodMap"]),
    "ZodNaN": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodNaN"]),
    "ZodNativeEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodNativeEnum"]),
    "ZodNever": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodNever"]),
    "ZodNull": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodNull"]),
    "ZodNullable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodNullable"]),
    "ZodNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodNumber"]),
    "ZodObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodObject"]),
    "ZodOptional": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodOptional"]),
    "ZodParsedType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodParsedType"]),
    "ZodPipeline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodPipeline"]),
    "ZodPromise": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodPromise"]),
    "ZodReadonly": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodReadonly"]),
    "ZodRecord": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRecord"]),
    "ZodSchema": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodSchema"]),
    "ZodSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodSet"]),
    "ZodString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodString"]),
    "ZodSymbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodSymbol"]),
    "ZodTransformer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodTransformer"]),
    "ZodTuple": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodTuple"]),
    "ZodType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodType"]),
    "ZodUndefined": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodUndefined"]),
    "ZodUnion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodUnion"]),
    "ZodUnknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodUnknown"]),
    "ZodVoid": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodVoid"]),
    "addIssueToContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addIssueToContext"]),
    "any": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["any"]),
    "array": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"]),
    "bigint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bigint"]),
    "boolean": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"]),
    "coerce": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["coerce"]),
    "custom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"]),
    "date": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["date"]),
    "datetimeRegex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["datetimeRegex"]),
    "defaultErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultErrorMap"]),
    "discriminatedUnion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["discriminatedUnion"]),
    "effect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"]),
    "enum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum"]),
    "function": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["function"]),
    "getErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMap"]),
    "getParsedType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParsedType"]),
    "instanceof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["instanceof"]),
    "intersection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["intersection"]),
    "isAborted": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAborted"]),
    "isAsync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAsync"]),
    "isDirty": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDirty"]),
    "isValid": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"]),
    "late": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["late"]),
    "lazy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"]),
    "literal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["literal"]),
    "makeIssue": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeIssue"]),
    "map": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"]),
    "nan": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nan"]),
    "nativeEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nativeEnum"]),
    "never": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["never"]),
    "null": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["null"]),
    "nullable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nullable"]),
    "number": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"]),
    "object": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]),
    "objectUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectUtil"]),
    "oboolean": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oboolean"]),
    "onumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onumber"]),
    "optional": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"]),
    "ostring": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ostring"]),
    "pipeline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipeline"]),
    "preprocess": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preprocess"]),
    "promise": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promise"]),
    "quotelessJson": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quotelessJson"]),
    "record": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"]),
    "set": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"]),
    "setErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setErrorMap"]),
    "strictObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strictObject"]),
    "string": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]),
    "symbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["symbol"]),
    "transformer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformer"]),
    "tuple": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tuple"]),
    "undefined": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["undefined"]),
    "union": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["union"]),
    "unknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unknown"]),
    "util": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"]),
    "void": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["void"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/parseUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$typeAliases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/typeAliases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/helpers/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$ZodError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/ZodError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BRAND": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BRAND"]),
    "DIRTY": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DIRTY"]),
    "EMPTY_PATH": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EMPTY_PATH"]),
    "INVALID": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["INVALID"]),
    "NEVER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NEVER"]),
    "OK": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OK"]),
    "ParseStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ParseStatus"]),
    "Schema": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Schema"]),
    "ZodAny": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodAny"]),
    "ZodArray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodArray"]),
    "ZodBigInt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodBigInt"]),
    "ZodBoolean": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodBoolean"]),
    "ZodBranded": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodBranded"]),
    "ZodCatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodCatch"]),
    "ZodDate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodDate"]),
    "ZodDefault": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodDefault"]),
    "ZodDiscriminatedUnion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodDiscriminatedUnion"]),
    "ZodEffects": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodEffects"]),
    "ZodEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodEnum"]),
    "ZodError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodError"]),
    "ZodFirstPartyTypeKind": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodFirstPartyTypeKind"]),
    "ZodFunction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodFunction"]),
    "ZodIntersection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodIntersection"]),
    "ZodIssueCode": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodIssueCode"]),
    "ZodLazy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodLazy"]),
    "ZodLiteral": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodLiteral"]),
    "ZodMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodMap"]),
    "ZodNaN": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodNaN"]),
    "ZodNativeEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodNativeEnum"]),
    "ZodNever": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodNever"]),
    "ZodNull": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodNull"]),
    "ZodNullable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodNullable"]),
    "ZodNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodNumber"]),
    "ZodObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodObject"]),
    "ZodOptional": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodOptional"]),
    "ZodParsedType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodParsedType"]),
    "ZodPipeline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodPipeline"]),
    "ZodPromise": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodPromise"]),
    "ZodReadonly": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodReadonly"]),
    "ZodRecord": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodRecord"]),
    "ZodSchema": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodSchema"]),
    "ZodSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodSet"]),
    "ZodString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodString"]),
    "ZodSymbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodSymbol"]),
    "ZodTransformer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodTransformer"]),
    "ZodTuple": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodTuple"]),
    "ZodType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodType"]),
    "ZodUndefined": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodUndefined"]),
    "ZodUnion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodUnion"]),
    "ZodUnknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodUnknown"]),
    "ZodVoid": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ZodVoid"]),
    "addIssueToContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["addIssueToContext"]),
    "any": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["any"]),
    "array": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["array"]),
    "bigint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["bigint"]),
    "boolean": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["boolean"]),
    "coerce": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["coerce"]),
    "custom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["custom"]),
    "date": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["date"]),
    "datetimeRegex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["datetimeRegex"]),
    "defaultErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["defaultErrorMap"]),
    "discriminatedUnion": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["discriminatedUnion"]),
    "effect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["effect"]),
    "enum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["enum"]),
    "function": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["function"]),
    "getErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getErrorMap"]),
    "getParsedType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getParsedType"]),
    "instanceof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["instanceof"]),
    "intersection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["intersection"]),
    "isAborted": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isAborted"]),
    "isAsync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isAsync"]),
    "isDirty": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isDirty"]),
    "isValid": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isValid"]),
    "late": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["late"]),
    "lazy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazy"]),
    "literal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["literal"]),
    "makeIssue": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["makeIssue"]),
    "map": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["map"]),
    "nan": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["nan"]),
    "nativeEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["nativeEnum"]),
    "never": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["never"]),
    "null": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["null"]),
    "nullable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["nullable"]),
    "number": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["number"]),
    "object": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["object"]),
    "objectUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["objectUtil"]),
    "oboolean": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["oboolean"]),
    "onumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["onumber"]),
    "optional": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["optional"]),
    "ostring": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ostring"]),
    "pipeline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pipeline"]),
    "preprocess": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preprocess"]),
    "promise": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["promise"]),
    "quotelessJson": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["quotelessJson"]),
    "record": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["record"]),
    "set": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["set"]),
    "setErrorMap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["setErrorMap"]),
    "strictObject": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["strictObject"]),
    "string": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["string"]),
    "symbol": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["symbol"]),
    "transformer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["transformer"]),
    "tuple": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tuple"]),
    "undefined": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["undefined"]),
    "union": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["union"]),
    "unknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unknown"]),
    "util": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["util"]),
    "void": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["void"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/index.js [app-ssr] (ecmascript) <locals>");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <export * as z>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "z": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : undefined;
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This has to be a shared module which is shared between client component error boundary and dynamic component
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.browser.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/lib/metadata/metadata-constants.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createPostponedAbortSignal: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackFallbackParamAccessed: null,
    trackSynchronousPlatformIOAccessInDev: null,
    trackSynchronousRequestDataAccessInDev: null,
    useDynamicRouteParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackFallbackParamAccessed: function() {
        return trackFallbackParamAccessed;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _metadataconstants = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/lib/metadata/metadata-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E550",
                enumerable: false,
                configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicExpression = expression;
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
                if (prerenderStore.validating === true) {
                    // We always log Request Access in dev at the point of calling the function
                    // So we mark the dynamic validation as not requiring it to be printed
                    dynamicTracking.syncDynamicLogged = true;
                }
            }
        }
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    const controller = new AbortController();
    if (workUnitStore.cacheSignal) {
        // If we have a cacheSignal it means we're in a prospective render. If the input
        // we're waiting on is coming from another cache, we do want to wait for it so that
        // we can resolve this cache entry too.
        workUnitStore.cacheSignal.inputReady().then(()=>{
            controller.abort();
        });
    } else {
        // Otherwise we're in the final render and we should already have all our caches
        // filled. We might still be waiting on some microtasks so we wait one tick before
        // giving up. When we give up, we still want to render the content of this cache
        // as deeply as we can so that we can suspend as deeply as possible in the tree
        // or not at all if we don't end up waiting for the input.
        (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
        // There are fallback route params, we should track these as dynamic
        // accesses.
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        if (workUnitStore) {
            // We're prerendering with dynamicIO or PPR or both
            if (workUnitStore.type === 'prerender') {
                // We are in a prerender with dynamicIO semantics
                // We are going to hang here and never resolve. This will cause the currently
                // rendering component to effectively be a dynamic hole
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
            } else if (workUnitStore.type === 'prerender-ppr') {
                // We're prerendering with PPR
                postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
                    value: "E608",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
                value: "E534",
                enumerable: false,
                configurable: true
            });
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
                    value: "E573",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
                value: "E590",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = typeof window === 'undefined' ? __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-ssr] (ecmascript)").unstable_rethrow;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/** @internal */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    if (workStore == null ? void 0 : workStore.isStaticGeneration) throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _getsegmentvalue = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : undefined;
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-ssr] (ecmascript)");
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_614fcbe5._.js.map