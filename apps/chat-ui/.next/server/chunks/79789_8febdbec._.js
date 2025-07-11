module.exports = {

"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>": ((__turbopack_context__) => {
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
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
 */ /**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */ __turbopack_context__.s({
    "disableInstrumentations": (()=>disableInstrumentations),
    "enableInstrumentations": (()=>enableInstrumentations)
});
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
    for(var i = 0, j = instrumentations.length; i < j; i++){
        var instrumentation = instrumentations[i];
        if (tracerProvider) {
            instrumentation.setTracerProvider(tracerProvider);
        }
        if (meterProvider) {
            instrumentation.setMeterProvider(meterProvider);
        }
        if (loggerProvider && instrumentation.setLoggerProvider) {
            instrumentation.setLoggerProvider(loggerProvider);
        }
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) {
            instrumentation.enable();
        }
    }
}
function disableInstrumentations(instrumentations) {
    instrumentations.forEach(function(instrumentation) {
        return instrumentation.disable();
    });
} //# sourceMappingURL=autoLoaderUtils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "registerInstrumentations": (()=>registerInstrumentations)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js [instrumentation] (ecmascript)");
;
;
;
function registerInstrumentations(options) {
    var _a, _b;
    var tracerProvider = options.tracerProvider || __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getTracerProvider();
    var meterProvider = options.meterProvider || __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["metrics"].getMeterProvider();
    var loggerProvider = options.loggerProvider || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"].getLoggerProvider();
    var instrumentations = (_b = (_a = options.instrumentations) === null || _a === void 0 ? void 0 : _a.flat()) !== null && _b !== void 0 ? _b : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["enableInstrumentations"])(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["disableInstrumentations"])(instrumentations);
    };
} //# sourceMappingURL=autoLoader.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationAbstract": (()=>InstrumentationAbstract)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/shimmer/index.js [instrumentation] (ecmascript)");
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
 * Base abstract internal class for instrumenting node and web plugins
 */ var InstrumentationAbstract = function() {
    function InstrumentationAbstract(instrumentationName, instrumentationVersion, config) {
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        this._config = {};
        /* Api to wrap instrumented method */ this._wrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"];
        /* Api to unwrap instrumented methods */ this._unwrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unwrap"];
        /* Api to mass wrap instrumented method */ this._massWrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["massWrap"];
        /* Api to mass unwrap instrumented methods */ this._massUnwrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["massUnwrap"];
        this.setConfig(config);
        this._diag = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].createComponentLogger({
            namespace: instrumentationName
        });
        this._tracer = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getTracer(instrumentationName, instrumentationVersion);
        this._meter = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["metrics"].getMeter(instrumentationName, instrumentationVersion);
        this._logger = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"].getLogger(instrumentationName, instrumentationVersion);
        this._updateMetricInstruments();
    }
    Object.defineProperty(InstrumentationAbstract.prototype, "meter", {
        /* Returns meter */ get: function() {
            return this._meter;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */ InstrumentationAbstract.prototype.setMeterProvider = function(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
        this._updateMetricInstruments();
    };
    Object.defineProperty(InstrumentationAbstract.prototype, "logger", {
        /* Returns logger */ get: function() {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */ InstrumentationAbstract.prototype.setLoggerProvider = function(loggerProvider) {
        this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    };
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */ InstrumentationAbstract.prototype.getModuleDefinitions = function() {
        var _a;
        var initResult = (_a = this.init()) !== null && _a !== void 0 ? _a : [];
        if (!Array.isArray(initResult)) {
            return [
                initResult
            ];
        }
        return initResult;
    };
    /**
     * Sets the new metric instruments with the current Meter.
     */ InstrumentationAbstract.prototype._updateMetricInstruments = function() {
        return;
    };
    /* Returns InstrumentationConfig */ InstrumentationAbstract.prototype.getConfig = function() {
        return this._config;
    };
    /**
     * Sets InstrumentationConfig to this plugin
     * @param config
     */ InstrumentationAbstract.prototype.setConfig = function(config) {
        // copy config first level properties to ensure they are immutable.
        // nested properties are not copied, thus are mutable from the outside.
        this._config = __assign({
            enabled: true
        }, config);
    };
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */ InstrumentationAbstract.prototype.setTracerProvider = function(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    };
    Object.defineProperty(InstrumentationAbstract.prototype, "tracer", {
        /* Returns tracer */ get: function() {
            return this._tracer;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Execute span customization hook, if configured, and log any errors.
     * Any semantics of the trigger and info are defined by the specific instrumentation.
     * @param hookHandler The optional hook handler which the user has configured via instrumentation config
     * @param triggerName The name of the trigger for executing the hook for logging purposes
     * @param span The span to which the hook should be applied
     * @param info The info object to be passed to the hook, with useful data the hook may use
     */ InstrumentationAbstract.prototype._runSpanCustomizationHook = function(hookHandler, triggerName, span, info) {
        if (!hookHandler) {
            return;
        }
        try {
            hookHandler(span, info);
        } catch (e) {
            this._diag.error("Error running span customization hook due to exception in handler", {
                triggerName: triggerName
            }, e);
        }
    };
    return InstrumentationAbstract;
}();
;
 //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ModuleNameTrie.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "ModuleNameSeparator": (()=>ModuleNameSeparator),
    "ModuleNameTrie": (()=>ModuleNameTrie)
});
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
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ModuleNameSeparator = '/';
/**
 * Node in a `ModuleNameTrie`
 */ var ModuleNameTrieNode = function() {
    function ModuleNameTrieNode() {
        this.hooks = [];
        this.children = new Map();
    }
    return ModuleNameTrieNode;
}();
/**
 * Trie containing nodes that represent a part of a module name (i.e. the parts separated by forward slash)
 */ var ModuleNameTrie = function() {
    function ModuleNameTrie() {
        this._trie = new ModuleNameTrieNode();
        this._counter = 0;
    }
    /**
     * Insert a module hook into the trie
     *
     * @param {Hooked} hook Hook
     */ ModuleNameTrie.prototype.insert = function(hook) {
        var e_1, _a;
        var trieNode = this._trie;
        try {
            for(var _b = __values(hook.moduleName.split(ModuleNameSeparator)), _c = _b.next(); !_c.done; _c = _b.next()){
                var moduleNamePart = _c.value;
                var nextNode = trieNode.children.get(moduleNamePart);
                if (!nextNode) {
                    nextNode = new ModuleNameTrieNode();
                    trieNode.children.set(moduleNamePart, nextNode);
                }
                trieNode = nextNode;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        trieNode.hooks.push({
            hook: hook,
            insertedId: this._counter++
        });
    };
    /**
     * Search for matching hooks in the trie
     *
     * @param {string} moduleName Module name
     * @param {boolean} maintainInsertionOrder Whether to return the results in insertion order
     * @param {boolean} fullOnly Whether to return only full matches
     * @returns {Hooked[]} Matching hooks
     */ ModuleNameTrie.prototype.search = function(moduleName, _a) {
        var e_2, _b;
        var _c = _a === void 0 ? {} : _a, maintainInsertionOrder = _c.maintainInsertionOrder, fullOnly = _c.fullOnly;
        var trieNode = this._trie;
        var results = [];
        var foundFull = true;
        try {
            for(var _d = __values(moduleName.split(ModuleNameSeparator)), _e = _d.next(); !_e.done; _e = _d.next()){
                var moduleNamePart = _e.value;
                var nextNode = trieNode.children.get(moduleNamePart);
                if (!nextNode) {
                    foundFull = false;
                    break;
                }
                if (!fullOnly) {
                    results.push.apply(results, __spreadArray([], __read(nextNode.hooks), false));
                }
                trieNode = nextNode;
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        if (fullOnly && foundFull) {
            results.push.apply(results, __spreadArray([], __read(trieNode.hooks), false));
        }
        if (results.length === 0) {
            return [];
        }
        if (results.length === 1) {
            return [
                results[0].hook
            ];
        }
        if (maintainInsertionOrder) {
            results.sort(function(a, b) {
                return a.insertedId - b.insertedId;
            });
        }
        return results.map(function(_a) {
            var hook = _a.hook;
            return hook;
        });
    };
    return ModuleNameTrie;
}();
;
 //# sourceMappingURL=ModuleNameTrie.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "RequireInTheMiddleSingleton": (()=>RequireInTheMiddleSingleton)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ModuleNameTrie.js [instrumentation] (ecmascript)");
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
;
/**
 * Whether Mocha is running in this process
 * Inspired by https://github.com/AndreasPizsa/detect-mocha
 *
 * @type {boolean}
 */ var isMocha = [
    'afterEach',
    'after',
    'beforeEach',
    'before',
    'describe',
    'it'
].every(function(fn) {
    // @ts-expect-error TS7053: Element implicitly has an 'any' type
    return typeof global[fn] === 'function';
});
/**
 * Singleton class for `require-in-the-middle`
 * Allows instrumentation plugins to patch modules with only a single `require` patch
 * WARNING: Because this class will create its own `require-in-the-middle` (RITM) instance,
 * we should minimize the number of new instances of this class.
 * Multiple instances of `@opentelemetry/instrumentation` (e.g. multiple versions) in a single process
 * will result in multiple instances of RITM, which will have an impact
 * on the performance of instrumentation hooks being applied.
 */ var RequireInTheMiddleSingleton = function() {
    function RequireInTheMiddleSingleton() {
        this._moduleNameTrie = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameTrie"]();
        this._initialize();
    }
    RequireInTheMiddleSingleton.prototype._initialize = function() {
        var _this = this;
        new __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__["Hook"](// Intercept all `require` calls; we will filter the matching ones below
        null, {
            internals: true
        }, function(exports, name, basedir) {
            var e_1, _a;
            // For internal files on Windows, `name` will use backslash as the path separator
            var normalizedModuleName = normalizePathSeparators(name);
            var matches = _this._moduleNameTrie.search(normalizedModuleName, {
                maintainInsertionOrder: true,
                // For core modules (e.g. `fs`), do not match on sub-paths (e.g. `fs/promises').
                // This matches the behavior of `require-in-the-middle`.
                // `basedir` is always `undefined` for core modules.
                fullOnly: basedir === undefined
            });
            try {
                for(var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()){
                    var onRequire = matches_1_1.value.onRequire;
                    exports = onRequire(exports, name, basedir);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return exports;
        });
    };
    /**
     * Register a hook with `require-in-the-middle`
     *
     * @param {string} moduleName Module name
     * @param {OnRequireFn} onRequire Hook function
     * @returns {Hooked} Registered hook
     */ RequireInTheMiddleSingleton.prototype.register = function(moduleName, onRequire) {
        var hooked = {
            moduleName: moduleName,
            onRequire: onRequire
        };
        this._moduleNameTrie.insert(hooked);
        return hooked;
    };
    /**
     * Get the `RequireInTheMiddleSingleton` singleton
     *
     * @returns {RequireInTheMiddleSingleton} Singleton of `RequireInTheMiddleSingleton`
     */ RequireInTheMiddleSingleton.getInstance = function() {
        var _a;
        // Mocha runs all test suites in the same process
        // This prevents test suites from sharing a singleton
        if (isMocha) return new RequireInTheMiddleSingleton();
        return this._instance = (_a = this._instance) !== null && _a !== void 0 ? _a : new RequireInTheMiddleSingleton();
    };
    return RequireInTheMiddleSingleton;
}();
;
/**
 * Normalize the path separators to forward slash in a module name or path
 *
 * @param {string} moduleNameOrPath Module name or path
 * @returns {string} Normalized module name or path
 */ function normalizePathSeparators(moduleNameOrPath) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameSeparator"] ? moduleNameOrPath.split(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"]).join(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameSeparator"]) : moduleNameOrPath;
} //# sourceMappingURL=RequireInTheMiddleSingleton.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "isWrapped": (()=>isWrapped),
    "safeExecuteInTheMiddle": (()=>safeExecuteInTheMiddle),
    "safeExecuteInTheMiddleAsync": (()=>safeExecuteInTheMiddleAsync)
});
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
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    var error;
    var result;
    try {
        result = execute();
    } catch (e) {
        error = e;
    } finally{
        onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    return __awaiter(this, void 0, void 0, function() {
        var error, result, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        3,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        execute()
                    ];
                case 1:
                    result = _a.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    e_1 = _a.sent();
                    error = e_1;
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    onFinish(error, result);
                    if (error && !preventThrowingError) {
                        // eslint-disable-next-line no-unsafe-finally
                        throw error;
                    }
                    // eslint-disable-next-line no-unsafe-finally
                    return [
                        2 /*return*/ ,
                        result
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function isWrapped(func) {
    return typeof func === 'function' && typeof func.__original === 'function' && typeof func.__unwrap === 'function' && func.__wrapped === true;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationBase": (()=>InstrumentationBase)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$semver$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/semver/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/shimmer/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$RequireInTheMiddleSingleton$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$import$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$import$2d$in$2d$the$2d$middle$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/import-in-the-middle [external] (import-in-the-middle, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)");
var __extends = this && this.__extends || function() {
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
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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
;
;
;
;
;
;
;
;
;
/**
 * Base abstract class for instrumenting node plugins
 */ var InstrumentationBase = function(_super) {
    __extends(InstrumentationBase, _super);
    function InstrumentationBase(instrumentationName, instrumentationVersion, config) {
        var _this = _super.call(this, instrumentationName, instrumentationVersion, config) || this;
        _this._hooks = [];
        _this._requireInTheMiddleSingleton = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$RequireInTheMiddleSingleton$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["RequireInTheMiddleSingleton"].getInstance();
        _this._enabled = false;
        _this._wrap = function(moduleExports, name, wrapper) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isWrapped"])(moduleExports[name])) {
                _this._unwrap(moduleExports, name);
            }
            if (!__TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["types"].isProxy(moduleExports)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"])(moduleExports, name, wrapper);
            } else {
                var wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"])(Object.assign({}, moduleExports), name, wrapper);
                Object.defineProperty(moduleExports, name, {
                    value: wrapped
                });
                return wrapped;
            }
        };
        _this._unwrap = function(moduleExports, name) {
            if (!__TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["types"].isProxy(moduleExports)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unwrap"])(moduleExports, name);
            } else {
                return Object.defineProperty(moduleExports, name, {
                    value: moduleExports[name]
                });
            }
        };
        _this._massWrap = function(moduleExportsArray, names, wrapper) {
            if (!moduleExportsArray) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more modules to patch');
                return;
            } else if (!Array.isArray(moduleExportsArray)) {
                moduleExportsArray = [
                    moduleExportsArray
                ];
            }
            if (!(names && Array.isArray(names))) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more functions to wrap on modules');
                return;
            }
            moduleExportsArray.forEach(function(moduleExports) {
                names.forEach(function(name) {
                    _this._wrap(moduleExports, name, wrapper);
                });
            });
        };
        _this._massUnwrap = function(moduleExportsArray, names) {
            if (!moduleExportsArray) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more modules to patch');
                return;
            } else if (!Array.isArray(moduleExportsArray)) {
                moduleExportsArray = [
                    moduleExportsArray
                ];
            }
            if (!(names && Array.isArray(names))) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more functions to wrap on modules');
                return;
            }
            moduleExportsArray.forEach(function(moduleExports) {
                names.forEach(function(name) {
                    _this._unwrap(moduleExports, name);
                });
            });
        };
        var modules = _this.init();
        if (modules && !Array.isArray(modules)) {
            modules = [
                modules
            ];
        }
        _this._modules = modules || [];
        if (_this._config.enabled) {
            _this.enable();
        }
        return _this;
    }
    InstrumentationBase.prototype._warnOnPreloadedModules = function() {
        var _this = this;
        this._modules.forEach(function(module) {
            var name = module.name;
            try {
                var resolvedModule = (()=>{
                    const e = new Error("Cannot find module as expression is too dynamic");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
                if (__turbopack_context__.c[resolvedModule]) {
                    // Module is already cached, which means the instrumentation hook might not work
                    _this._diag.warn("Module " + name + " has been loaded before " + _this.instrumentationName + " so it might not work, please initialize it before requiring " + name);
                }
            } catch (_a) {
            // Module isn't available, we can simply skip
            }
        });
    };
    InstrumentationBase.prototype._extractPackageVersion = function(baseDir) {
        try {
            var json = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(baseDir, 'package.json'), {
                encoding: 'utf8'
            });
            var version = JSON.parse(json).version;
            return typeof version === 'string' ? version : undefined;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn('Failed extracting version', baseDir);
        }
        return undefined;
    };
    InstrumentationBase.prototype._onRequire = function(module, exports, name, baseDir) {
        var _this = this;
        var _a;
        if (!baseDir) {
            if (typeof module.patch === 'function') {
                module.moduleExports = exports;
                if (this._enabled) {
                    this._diag.debug('Applying instrumentation patch for nodejs core module on require hook', {
                        module: module.name
                    });
                    return module.patch(exports);
                }
            }
            return exports;
        }
        var version = this._extractPackageVersion(baseDir);
        module.moduleVersion = version;
        if (module.name === name) {
            // main module
            if (isSupported(module.supportedVersions, version, module.includePrerelease)) {
                if (typeof module.patch === 'function') {
                    module.moduleExports = exports;
                    if (this._enabled) {
                        this._diag.debug('Applying instrumentation patch for module on require hook', {
                            module: module.name,
                            version: module.moduleVersion,
                            baseDir: baseDir
                        });
                        return module.patch(exports, module.moduleVersion);
                    }
                }
            }
            return exports;
        }
        // internal file
        var files = (_a = module.files) !== null && _a !== void 0 ? _a : [];
        var normalizedName = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["normalize"])(name);
        var supportedFileInstrumentations = files.filter(function(f) {
            return f.name === normalizedName;
        }).filter(function(f) {
            return isSupported(f.supportedVersions, version, module.includePrerelease);
        });
        return supportedFileInstrumentations.reduce(function(patchedExports, file) {
            file.moduleExports = patchedExports;
            if (_this._enabled) {
                _this._diag.debug('Applying instrumentation patch for nodejs module file on require hook', {
                    module: module.name,
                    version: module.moduleVersion,
                    fileName: file.name,
                    baseDir: baseDir
                });
                // patch signature is not typed, so we cast it assuming it's correct
                return file.patch(patchedExports, module.moduleVersion);
            }
            return patchedExports;
        }, exports);
    };
    InstrumentationBase.prototype.enable = function() {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        if (this._enabled) {
            return;
        }
        this._enabled = true;
        // already hooked, just call patch again
        if (this._hooks.length > 0) {
            try {
                for(var _d = __values(this._modules), _e = _d.next(); !_e.done; _e = _d.next()){
                    var module_1 = _e.value;
                    if (typeof module_1.patch === 'function' && module_1.moduleExports) {
                        this._diag.debug('Applying instrumentation patch for nodejs module on instrumentation enabled', {
                            module: module_1.name,
                            version: module_1.moduleVersion
                        });
                        module_1.patch(module_1.moduleExports, module_1.moduleVersion);
                    }
                    try {
                        for(var _f = (e_2 = void 0, __values(module_1.files)), _g = _f.next(); !_g.done; _g = _f.next()){
                            var file = _g.value;
                            if (file.moduleExports) {
                                this._diag.debug('Applying instrumentation patch for nodejs module file on instrumentation enabled', {
                                    module: module_1.name,
                                    version: module_1.moduleVersion,
                                    fileName: file.name
                                });
                                file.patch(file.moduleExports, module_1.moduleVersion);
                            }
                        }
                    } catch (e_2_1) {
                        e_2 = {
                            error: e_2_1
                        };
                    } finally{
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        } finally{
                            if (e_2) throw e_2.error;
                        }
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return;
        }
        this._warnOnPreloadedModules();
        var _loop_1 = function(module_2) {
            var hookFn = function(exports, name, baseDir) {
                if (!baseDir && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(name)) {
                    var parsedPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["parse"])(name);
                    name = parsedPath.name;
                    baseDir = parsedPath.dir;
                }
                return _this._onRequire(module_2, exports, name, baseDir);
            };
            var onRequire = function(exports, name, baseDir) {
                return _this._onRequire(module_2, exports, name, baseDir);
            };
            // `RequireInTheMiddleSingleton` does not support absolute paths.
            // For an absolute paths, we must create a separate instance of the
            // require-in-the-middle `Hook`.
            var hook = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(module_2.name) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__["Hook"]([
                module_2.name
            ], {
                internals: true
            }, onRequire) : this_1._requireInTheMiddleSingleton.register(module_2.name, onRequire);
            this_1._hooks.push(hook);
            var esmHook = new __TURBOPACK__imported__module__$5b$externals$5d2f$import$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$import$2d$in$2d$the$2d$middle$2c$__cjs$29$__["Hook"]([
                module_2.name
            ], {
                internals: false
            }, hookFn);
            this_1._hooks.push(esmHook);
        };
        var this_1 = this;
        try {
            for(var _h = __values(this._modules), _j = _h.next(); !_j.done; _j = _h.next()){
                var module_2 = _j.value;
                _loop_1(module_2);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
    };
    InstrumentationBase.prototype.disable = function() {
        var e_4, _a, e_5, _b;
        if (!this._enabled) {
            return;
        }
        this._enabled = false;
        try {
            for(var _c = __values(this._modules), _d = _c.next(); !_d.done; _d = _c.next()){
                var module_3 = _d.value;
                if (typeof module_3.unpatch === 'function' && module_3.moduleExports) {
                    this._diag.debug('Removing instrumentation patch for nodejs module on instrumentation disabled', {
                        module: module_3.name,
                        version: module_3.moduleVersion
                    });
                    module_3.unpatch(module_3.moduleExports, module_3.moduleVersion);
                }
                try {
                    for(var _e = (e_5 = void 0, __values(module_3.files)), _f = _e.next(); !_f.done; _f = _e.next()){
                        var file = _f.value;
                        if (file.moduleExports) {
                            this._diag.debug('Removing instrumentation patch for nodejs module file on instrumentation disabled', {
                                module: module_3.name,
                                version: module_3.moduleVersion,
                                fileName: file.name
                            });
                            file.unpatch(file.moduleExports, module_3.moduleVersion);
                        }
                    }
                } catch (e_5_1) {
                    e_5 = {
                        error: e_5_1
                    };
                } finally{
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    } finally{
                        if (e_5) throw e_5.error;
                    }
                }
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
    };
    InstrumentationBase.prototype.isEnabled = function() {
        return this._enabled;
    };
    return InstrumentationBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationAbstract"]);
;
function isSupported(supportedVersions, version, includePrerelease) {
    if (typeof version === 'undefined') {
        // If we don't have the version, accept the wildcard case only
        return supportedVersions.includes('*');
    }
    return supportedVersions.some(function(supportedVersion) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$semver$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["satisfies"])(version, supportedVersion, {
            includePrerelease: includePrerelease
        });
    });
} //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleDefinition.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationNodeModuleDefinition": (()=>InstrumentationNodeModuleDefinition)
});
var InstrumentationNodeModuleDefinition = function() {
    function InstrumentationNodeModuleDefinition(name, supportedVersions, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch, files) {
        this.name = name;
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
        this.files = files || [];
    }
    return InstrumentationNodeModuleDefinition;
}();
;
 //# sourceMappingURL=instrumentationNodeModuleDefinition.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleFile.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationNodeModuleFile": (()=>InstrumentationNodeModuleFile)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
var InstrumentationNodeModuleFile = function() {
    function InstrumentationNodeModuleFile(name, supportedVersions, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch) {
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
        this.name = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["normalize"])(name);
    }
    return InstrumentationNodeModuleFile;
}();
;
 //# sourceMappingURL=instrumentationNodeModuleFile.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InstrumentationBase": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationBase"]),
    "InstrumentationNodeModuleDefinition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleDefinition$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationNodeModuleDefinition"]),
    "InstrumentationNodeModuleFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleFile$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationNodeModuleFile"]),
    "isWrapped": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isWrapped"]),
    "registerInstrumentations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoader$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerInstrumentations"]),
    "safeExecuteInTheMiddle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["safeExecuteInTheMiddle"]),
    "safeExecuteInTheMiddleAsync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["safeExecuteInTheMiddleAsync"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoader$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleDefinition$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleDefinition.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleFile$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleFile.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InstrumentationBase": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InstrumentationBase"]),
    "InstrumentationNodeModuleDefinition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InstrumentationNodeModuleDefinition"]),
    "InstrumentationNodeModuleFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InstrumentationNodeModuleFile"]),
    "isWrapped": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isWrapped"]),
    "registerInstrumentations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerInstrumentations"]),
    "safeExecuteInTheMiddle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["safeExecuteInTheMiddle"]),
    "safeExecuteInTheMiddleAsync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["safeExecuteInTheMiddleAsync"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <exports>");
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>": ((__turbopack_context__) => {
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
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
 */ /**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */ __turbopack_context__.s({
    "disableInstrumentations": (()=>disableInstrumentations),
    "enableInstrumentations": (()=>enableInstrumentations)
});
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
    for(var i = 0, j = instrumentations.length; i < j; i++){
        var instrumentation = instrumentations[i];
        if (tracerProvider) {
            instrumentation.setTracerProvider(tracerProvider);
        }
        if (meterProvider) {
            instrumentation.setMeterProvider(meterProvider);
        }
        if (loggerProvider && instrumentation.setLoggerProvider) {
            instrumentation.setLoggerProvider(loggerProvider);
        }
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) {
            instrumentation.enable();
        }
    }
}
function disableInstrumentations(instrumentations) {
    instrumentations.forEach(function(instrumentation) {
        return instrumentation.disable();
    });
} //# sourceMappingURL=autoLoaderUtils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "registerInstrumentations": (()=>registerInstrumentations)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js [instrumentation] (ecmascript)");
;
;
;
function registerInstrumentations(options) {
    var _a, _b;
    var tracerProvider = options.tracerProvider || __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getTracerProvider();
    var meterProvider = options.meterProvider || __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["metrics"].getMeterProvider();
    var loggerProvider = options.loggerProvider || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"].getLoggerProvider();
    var instrumentations = (_b = (_a = options.instrumentations) === null || _a === void 0 ? void 0 : _a.flat()) !== null && _b !== void 0 ? _b : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["enableInstrumentations"])(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoaderUtils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["disableInstrumentations"])(instrumentations);
    };
} //# sourceMappingURL=autoLoader.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationAbstract": (()=>InstrumentationAbstract)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/shimmer/index.js [instrumentation] (ecmascript)");
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
 * Base abstract internal class for instrumenting node and web plugins
 */ var InstrumentationAbstract = function() {
    function InstrumentationAbstract(instrumentationName, instrumentationVersion, config) {
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        this._config = {};
        /* Api to wrap instrumented method */ this._wrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"];
        /* Api to unwrap instrumented methods */ this._unwrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unwrap"];
        /* Api to mass wrap instrumented method */ this._massWrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["massWrap"];
        /* Api to mass unwrap instrumented methods */ this._massUnwrap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["massUnwrap"];
        this.setConfig(config);
        this._diag = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].createComponentLogger({
            namespace: instrumentationName
        });
        this._tracer = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["trace"].getTracer(instrumentationName, instrumentationVersion);
        this._meter = __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["metrics"].getMeter(instrumentationName, instrumentationVersion);
        this._logger = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"].getLogger(instrumentationName, instrumentationVersion);
        this._updateMetricInstruments();
    }
    Object.defineProperty(InstrumentationAbstract.prototype, "meter", {
        /* Returns meter */ get: function() {
            return this._meter;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */ InstrumentationAbstract.prototype.setMeterProvider = function(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
        this._updateMetricInstruments();
    };
    Object.defineProperty(InstrumentationAbstract.prototype, "logger", {
        /* Returns logger */ get: function() {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */ InstrumentationAbstract.prototype.setLoggerProvider = function(loggerProvider) {
        this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    };
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */ InstrumentationAbstract.prototype.getModuleDefinitions = function() {
        var _a;
        var initResult = (_a = this.init()) !== null && _a !== void 0 ? _a : [];
        if (!Array.isArray(initResult)) {
            return [
                initResult
            ];
        }
        return initResult;
    };
    /**
     * Sets the new metric instruments with the current Meter.
     */ InstrumentationAbstract.prototype._updateMetricInstruments = function() {
        return;
    };
    /* Returns InstrumentationConfig */ InstrumentationAbstract.prototype.getConfig = function() {
        return this._config;
    };
    /**
     * Sets InstrumentationConfig to this plugin
     * @param config
     */ InstrumentationAbstract.prototype.setConfig = function(config) {
        // copy config first level properties to ensure they are immutable.
        // nested properties are not copied, thus are mutable from the outside.
        this._config = __assign({
            enabled: true
        }, config);
    };
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */ InstrumentationAbstract.prototype.setTracerProvider = function(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    };
    Object.defineProperty(InstrumentationAbstract.prototype, "tracer", {
        /* Returns tracer */ get: function() {
            return this._tracer;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Execute span customization hook, if configured, and log any errors.
     * Any semantics of the trigger and info are defined by the specific instrumentation.
     * @param hookHandler The optional hook handler which the user has configured via instrumentation config
     * @param triggerName The name of the trigger for executing the hook for logging purposes
     * @param span The span to which the hook should be applied
     * @param info The info object to be passed to the hook, with useful data the hook may use
     */ InstrumentationAbstract.prototype._runSpanCustomizationHook = function(hookHandler, triggerName, span, info) {
        if (!hookHandler) {
            return;
        }
        try {
            hookHandler(span, info);
        } catch (e) {
            this._diag.error("Error running span customization hook due to exception in handler", {
                triggerName: triggerName
            }, e);
        }
    };
    return InstrumentationAbstract;
}();
;
 //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ModuleNameTrie.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "ModuleNameSeparator": (()=>ModuleNameSeparator),
    "ModuleNameTrie": (()=>ModuleNameTrie)
});
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
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ModuleNameSeparator = '/';
/**
 * Node in a `ModuleNameTrie`
 */ var ModuleNameTrieNode = function() {
    function ModuleNameTrieNode() {
        this.hooks = [];
        this.children = new Map();
    }
    return ModuleNameTrieNode;
}();
/**
 * Trie containing nodes that represent a part of a module name (i.e. the parts separated by forward slash)
 */ var ModuleNameTrie = function() {
    function ModuleNameTrie() {
        this._trie = new ModuleNameTrieNode();
        this._counter = 0;
    }
    /**
     * Insert a module hook into the trie
     *
     * @param {Hooked} hook Hook
     */ ModuleNameTrie.prototype.insert = function(hook) {
        var e_1, _a;
        var trieNode = this._trie;
        try {
            for(var _b = __values(hook.moduleName.split(ModuleNameSeparator)), _c = _b.next(); !_c.done; _c = _b.next()){
                var moduleNamePart = _c.value;
                var nextNode = trieNode.children.get(moduleNamePart);
                if (!nextNode) {
                    nextNode = new ModuleNameTrieNode();
                    trieNode.children.set(moduleNamePart, nextNode);
                }
                trieNode = nextNode;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        trieNode.hooks.push({
            hook: hook,
            insertedId: this._counter++
        });
    };
    /**
     * Search for matching hooks in the trie
     *
     * @param {string} moduleName Module name
     * @param {boolean} maintainInsertionOrder Whether to return the results in insertion order
     * @param {boolean} fullOnly Whether to return only full matches
     * @returns {Hooked[]} Matching hooks
     */ ModuleNameTrie.prototype.search = function(moduleName, _a) {
        var e_2, _b;
        var _c = _a === void 0 ? {} : _a, maintainInsertionOrder = _c.maintainInsertionOrder, fullOnly = _c.fullOnly;
        var trieNode = this._trie;
        var results = [];
        var foundFull = true;
        try {
            for(var _d = __values(moduleName.split(ModuleNameSeparator)), _e = _d.next(); !_e.done; _e = _d.next()){
                var moduleNamePart = _e.value;
                var nextNode = trieNode.children.get(moduleNamePart);
                if (!nextNode) {
                    foundFull = false;
                    break;
                }
                if (!fullOnly) {
                    results.push.apply(results, __spreadArray([], __read(nextNode.hooks), false));
                }
                trieNode = nextNode;
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        if (fullOnly && foundFull) {
            results.push.apply(results, __spreadArray([], __read(trieNode.hooks), false));
        }
        if (results.length === 0) {
            return [];
        }
        if (results.length === 1) {
            return [
                results[0].hook
            ];
        }
        if (maintainInsertionOrder) {
            results.sort(function(a, b) {
                return a.insertedId - b.insertedId;
            });
        }
        return results.map(function(_a) {
            var hook = _a.hook;
            return hook;
        });
    };
    return ModuleNameTrie;
}();
;
 //# sourceMappingURL=ModuleNameTrie.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "RequireInTheMiddleSingleton": (()=>RequireInTheMiddleSingleton)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ModuleNameTrie.js [instrumentation] (ecmascript)");
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
;
/**
 * Whether Mocha is running in this process
 * Inspired by https://github.com/AndreasPizsa/detect-mocha
 *
 * @type {boolean}
 */ var isMocha = [
    'afterEach',
    'after',
    'beforeEach',
    'before',
    'describe',
    'it'
].every(function(fn) {
    // @ts-expect-error TS7053: Element implicitly has an 'any' type
    return typeof global[fn] === 'function';
});
/**
 * Singleton class for `require-in-the-middle`
 * Allows instrumentation plugins to patch modules with only a single `require` patch
 * WARNING: Because this class will create its own `require-in-the-middle` (RITM) instance,
 * we should minimize the number of new instances of this class.
 * Multiple instances of `@opentelemetry/instrumentation` (e.g. multiple versions) in a single process
 * will result in multiple instances of RITM, which will have an impact
 * on the performance of instrumentation hooks being applied.
 */ var RequireInTheMiddleSingleton = function() {
    function RequireInTheMiddleSingleton() {
        this._moduleNameTrie = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameTrie"]();
        this._initialize();
    }
    RequireInTheMiddleSingleton.prototype._initialize = function() {
        var _this = this;
        new __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__["Hook"](// Intercept all `require` calls; we will filter the matching ones below
        null, {
            internals: true
        }, function(exports, name, basedir) {
            var e_1, _a;
            // For internal files on Windows, `name` will use backslash as the path separator
            var normalizedModuleName = normalizePathSeparators(name);
            var matches = _this._moduleNameTrie.search(normalizedModuleName, {
                maintainInsertionOrder: true,
                // For core modules (e.g. `fs`), do not match on sub-paths (e.g. `fs/promises').
                // This matches the behavior of `require-in-the-middle`.
                // `basedir` is always `undefined` for core modules.
                fullOnly: basedir === undefined
            });
            try {
                for(var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()){
                    var onRequire = matches_1_1.value.onRequire;
                    exports = onRequire(exports, name, basedir);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return exports;
        });
    };
    /**
     * Register a hook with `require-in-the-middle`
     *
     * @param {string} moduleName Module name
     * @param {OnRequireFn} onRequire Hook function
     * @returns {Hooked} Registered hook
     */ RequireInTheMiddleSingleton.prototype.register = function(moduleName, onRequire) {
        var hooked = {
            moduleName: moduleName,
            onRequire: onRequire
        };
        this._moduleNameTrie.insert(hooked);
        return hooked;
    };
    /**
     * Get the `RequireInTheMiddleSingleton` singleton
     *
     * @returns {RequireInTheMiddleSingleton} Singleton of `RequireInTheMiddleSingleton`
     */ RequireInTheMiddleSingleton.getInstance = function() {
        var _a;
        // Mocha runs all test suites in the same process
        // This prevents test suites from sharing a singleton
        if (isMocha) return new RequireInTheMiddleSingleton();
        return this._instance = (_a = this._instance) !== null && _a !== void 0 ? _a : new RequireInTheMiddleSingleton();
    };
    return RequireInTheMiddleSingleton;
}();
;
/**
 * Normalize the path separators to forward slash in a module name or path
 *
 * @param {string} moduleNameOrPath Module name or path
 * @returns {string} Normalized module name or path
 */ function normalizePathSeparators(moduleNameOrPath) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameSeparator"] ? moduleNameOrPath.split(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"]).join(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$ModuleNameTrie$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ModuleNameSeparator"]) : moduleNameOrPath;
} //# sourceMappingURL=RequireInTheMiddleSingleton.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "isWrapped": (()=>isWrapped),
    "safeExecuteInTheMiddle": (()=>safeExecuteInTheMiddle),
    "safeExecuteInTheMiddleAsync": (()=>safeExecuteInTheMiddleAsync)
});
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
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    var error;
    var result;
    try {
        result = execute();
    } catch (e) {
        error = e;
    } finally{
        onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    return __awaiter(this, void 0, void 0, function() {
        var error, result, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        3,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        execute()
                    ];
                case 1:
                    result = _a.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    e_1 = _a.sent();
                    error = e_1;
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    onFinish(error, result);
                    if (error && !preventThrowingError) {
                        // eslint-disable-next-line no-unsafe-finally
                        throw error;
                    }
                    // eslint-disable-next-line no-unsafe-finally
                    return [
                        2 /*return*/ ,
                        result
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function isWrapped(func) {
    return typeof func === 'function' && typeof func.__original === 'function' && typeof func.__unwrap === 'function' && func.__wrapped === true;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationBase": (()=>InstrumentationBase)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$semver$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/semver/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/shimmer/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$RequireInTheMiddleSingleton$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$import$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$import$2d$in$2d$the$2d$middle$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/import-in-the-middle [external] (import-in-the-middle, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)");
var __extends = this && this.__extends || function() {
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
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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
;
;
;
;
;
;
;
;
;
/**
 * Base abstract class for instrumenting node plugins
 */ var InstrumentationBase = function(_super) {
    __extends(InstrumentationBase, _super);
    function InstrumentationBase(instrumentationName, instrumentationVersion, config) {
        var _this = _super.call(this, instrumentationName, instrumentationVersion, config) || this;
        _this._hooks = [];
        _this._requireInTheMiddleSingleton = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$RequireInTheMiddleSingleton$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["RequireInTheMiddleSingleton"].getInstance();
        _this._enabled = false;
        _this._wrap = function(moduleExports, name, wrapper) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isWrapped"])(moduleExports[name])) {
                _this._unwrap(moduleExports, name);
            }
            if (!__TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["types"].isProxy(moduleExports)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"])(moduleExports, name, wrapper);
            } else {
                var wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrap"])(Object.assign({}, moduleExports), name, wrapper);
                Object.defineProperty(moduleExports, name, {
                    value: wrapped
                });
                return wrapped;
            }
        };
        _this._unwrap = function(moduleExports, name) {
            if (!__TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["types"].isProxy(moduleExports)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$shimmer$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unwrap"])(moduleExports, name);
            } else {
                return Object.defineProperty(moduleExports, name, {
                    value: moduleExports[name]
                });
            }
        };
        _this._massWrap = function(moduleExportsArray, names, wrapper) {
            if (!moduleExportsArray) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more modules to patch');
                return;
            } else if (!Array.isArray(moduleExportsArray)) {
                moduleExportsArray = [
                    moduleExportsArray
                ];
            }
            if (!(names && Array.isArray(names))) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more functions to wrap on modules');
                return;
            }
            moduleExportsArray.forEach(function(moduleExports) {
                names.forEach(function(name) {
                    _this._wrap(moduleExports, name, wrapper);
                });
            });
        };
        _this._massUnwrap = function(moduleExportsArray, names) {
            if (!moduleExportsArray) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more modules to patch');
                return;
            } else if (!Array.isArray(moduleExportsArray)) {
                moduleExportsArray = [
                    moduleExportsArray
                ];
            }
            if (!(names && Array.isArray(names))) {
                __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].error('must provide one or more functions to wrap on modules');
                return;
            }
            moduleExportsArray.forEach(function(moduleExports) {
                names.forEach(function(name) {
                    _this._unwrap(moduleExports, name);
                });
            });
        };
        var modules = _this.init();
        if (modules && !Array.isArray(modules)) {
            modules = [
                modules
            ];
        }
        _this._modules = modules || [];
        if (_this._config.enabled) {
            _this.enable();
        }
        return _this;
    }
    InstrumentationBase.prototype._warnOnPreloadedModules = function() {
        var _this = this;
        this._modules.forEach(function(module) {
            var name = module.name;
            try {
                var resolvedModule = (()=>{
                    const e = new Error("Cannot find module as expression is too dynamic");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
                if (__turbopack_context__.c[resolvedModule]) {
                    // Module is already cached, which means the instrumentation hook might not work
                    _this._diag.warn("Module " + name + " has been loaded before " + _this.instrumentationName + " so it might not work, please initialize it before requiring " + name);
                }
            } catch (_a) {
            // Module isn't available, we can simply skip
            }
        });
    };
    InstrumentationBase.prototype._extractPackageVersion = function(baseDir) {
        try {
            var json = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(baseDir, 'package.json'), {
                encoding: 'utf8'
            });
            var version = JSON.parse(json).version;
            return typeof version === 'string' ? version : undefined;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f40$opentelemetry$2f$api__$5b$external$5d$__$2840$opentelemetry$2f$api$2c$__cjs$29$__["diag"].warn('Failed extracting version', baseDir);
        }
        return undefined;
    };
    InstrumentationBase.prototype._onRequire = function(module, exports, name, baseDir) {
        var _this = this;
        var _a;
        if (!baseDir) {
            if (typeof module.patch === 'function') {
                module.moduleExports = exports;
                if (this._enabled) {
                    this._diag.debug('Applying instrumentation patch for nodejs core module on require hook', {
                        module: module.name
                    });
                    return module.patch(exports);
                }
            }
            return exports;
        }
        var version = this._extractPackageVersion(baseDir);
        module.moduleVersion = version;
        if (module.name === name) {
            // main module
            if (isSupported(module.supportedVersions, version, module.includePrerelease)) {
                if (typeof module.patch === 'function') {
                    module.moduleExports = exports;
                    if (this._enabled) {
                        this._diag.debug('Applying instrumentation patch for module on require hook', {
                            module: module.name,
                            version: module.moduleVersion,
                            baseDir: baseDir
                        });
                        return module.patch(exports, module.moduleVersion);
                    }
                }
            }
            return exports;
        }
        // internal file
        var files = (_a = module.files) !== null && _a !== void 0 ? _a : [];
        var normalizedName = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["normalize"])(name);
        var supportedFileInstrumentations = files.filter(function(f) {
            return f.name === normalizedName;
        }).filter(function(f) {
            return isSupported(f.supportedVersions, version, module.includePrerelease);
        });
        return supportedFileInstrumentations.reduce(function(patchedExports, file) {
            file.moduleExports = patchedExports;
            if (_this._enabled) {
                _this._diag.debug('Applying instrumentation patch for nodejs module file on require hook', {
                    module: module.name,
                    version: module.moduleVersion,
                    fileName: file.name,
                    baseDir: baseDir
                });
                // patch signature is not typed, so we cast it assuming it's correct
                return file.patch(patchedExports, module.moduleVersion);
            }
            return patchedExports;
        }, exports);
    };
    InstrumentationBase.prototype.enable = function() {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        if (this._enabled) {
            return;
        }
        this._enabled = true;
        // already hooked, just call patch again
        if (this._hooks.length > 0) {
            try {
                for(var _d = __values(this._modules), _e = _d.next(); !_e.done; _e = _d.next()){
                    var module_1 = _e.value;
                    if (typeof module_1.patch === 'function' && module_1.moduleExports) {
                        this._diag.debug('Applying instrumentation patch for nodejs module on instrumentation enabled', {
                            module: module_1.name,
                            version: module_1.moduleVersion
                        });
                        module_1.patch(module_1.moduleExports, module_1.moduleVersion);
                    }
                    try {
                        for(var _f = (e_2 = void 0, __values(module_1.files)), _g = _f.next(); !_g.done; _g = _f.next()){
                            var file = _g.value;
                            if (file.moduleExports) {
                                this._diag.debug('Applying instrumentation patch for nodejs module file on instrumentation enabled', {
                                    module: module_1.name,
                                    version: module_1.moduleVersion,
                                    fileName: file.name
                                });
                                file.patch(file.moduleExports, module_1.moduleVersion);
                            }
                        }
                    } catch (e_2_1) {
                        e_2 = {
                            error: e_2_1
                        };
                    } finally{
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        } finally{
                            if (e_2) throw e_2.error;
                        }
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return;
        }
        this._warnOnPreloadedModules();
        var _loop_1 = function(module_2) {
            var hookFn = function(exports, name, baseDir) {
                if (!baseDir && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(name)) {
                    var parsedPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["parse"])(name);
                    name = parsedPath.name;
                    baseDir = parsedPath.dir;
                }
                return _this._onRequire(module_2, exports, name, baseDir);
            };
            var onRequire = function(exports, name, baseDir) {
                return _this._onRequire(module_2, exports, name, baseDir);
            };
            // `RequireInTheMiddleSingleton` does not support absolute paths.
            // For an absolute paths, we must create a separate instance of the
            // require-in-the-middle `Hook`.
            var hook = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(module_2.name) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$require$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$require$2d$in$2d$the$2d$middle$2c$__cjs$29$__["Hook"]([
                module_2.name
            ], {
                internals: true
            }, onRequire) : this_1._requireInTheMiddleSingleton.register(module_2.name, onRequire);
            this_1._hooks.push(hook);
            var esmHook = new __TURBOPACK__imported__module__$5b$externals$5d2f$import$2d$in$2d$the$2d$middle__$5b$external$5d$__$28$import$2d$in$2d$the$2d$middle$2c$__cjs$29$__["Hook"]([
                module_2.name
            ], {
                internals: false
            }, hookFn);
            this_1._hooks.push(esmHook);
        };
        var this_1 = this;
        try {
            for(var _h = __values(this._modules), _j = _h.next(); !_j.done; _j = _h.next()){
                var module_2 = _j.value;
                _loop_1(module_2);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
    };
    InstrumentationBase.prototype.disable = function() {
        var e_4, _a, e_5, _b;
        if (!this._enabled) {
            return;
        }
        this._enabled = false;
        try {
            for(var _c = __values(this._modules), _d = _c.next(); !_d.done; _d = _c.next()){
                var module_3 = _d.value;
                if (typeof module_3.unpatch === 'function' && module_3.moduleExports) {
                    this._diag.debug('Removing instrumentation patch for nodejs module on instrumentation disabled', {
                        module: module_3.name,
                        version: module_3.moduleVersion
                    });
                    module_3.unpatch(module_3.moduleExports, module_3.moduleVersion);
                }
                try {
                    for(var _e = (e_5 = void 0, __values(module_3.files)), _f = _e.next(); !_f.done; _f = _e.next()){
                        var file = _f.value;
                        if (file.moduleExports) {
                            this._diag.debug('Removing instrumentation patch for nodejs module file on instrumentation disabled', {
                                module: module_3.name,
                                version: module_3.moduleVersion,
                                fileName: file.name
                            });
                            file.unpatch(file.moduleExports, module_3.moduleVersion);
                        }
                    }
                } catch (e_5_1) {
                    e_5 = {
                        error: e_5_1
                    };
                } finally{
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    } finally{
                        if (e_5) throw e_5.error;
                    }
                }
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
    };
    InstrumentationBase.prototype.isEnabled = function() {
        return this._enabled;
    };
    return InstrumentationBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationAbstract"]);
;
function isSupported(supportedVersions, version, includePrerelease) {
    if (typeof version === 'undefined') {
        // If we don't have the version, accept the wildcard case only
        return supportedVersions.includes('*');
    }
    return supportedVersions.some(function(supportedVersion) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$semver$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["satisfies"])(version, supportedVersion, {
            includePrerelease: includePrerelease
        });
    });
} //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleDefinition.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationNodeModuleDefinition": (()=>InstrumentationNodeModuleDefinition)
});
var InstrumentationNodeModuleDefinition = function() {
    function InstrumentationNodeModuleDefinition(name, supportedVersions, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch, files) {
        this.name = name;
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
        this.files = files || [];
    }
    return InstrumentationNodeModuleDefinition;
}();
;
 //# sourceMappingURL=instrumentationNodeModuleDefinition.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleFile.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
    "InstrumentationNodeModuleFile": (()=>InstrumentationNodeModuleFile)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
var InstrumentationNodeModuleFile = function() {
    function InstrumentationNodeModuleFile(name, supportedVersions, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch) {
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
        this.name = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["normalize"])(name);
    }
    return InstrumentationNodeModuleFile;
}();
;
 //# sourceMappingURL=instrumentationNodeModuleFile.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InstrumentationBase": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationBase"]),
    "InstrumentationNodeModuleDefinition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleDefinition$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationNodeModuleDefinition"]),
    "InstrumentationNodeModuleFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleFile$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["InstrumentationNodeModuleFile"]),
    "isWrapped": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isWrapped"]),
    "registerInstrumentations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoader$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerInstrumentations"]),
    "safeExecuteInTheMiddle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["safeExecuteInTheMiddle"]),
    "safeExecuteInTheMiddleAsync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["safeExecuteInTheMiddleAsync"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$autoLoader$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$platform$2f$node$2f$instrumentation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/node/instrumentation.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleDefinition$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleDefinition.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$instrumentationNodeModuleFile$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/instrumentationNodeModuleFile.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InstrumentationBase": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InstrumentationBase"]),
    "InstrumentationNodeModuleDefinition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InstrumentationNodeModuleDefinition"]),
    "InstrumentationNodeModuleFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InstrumentationNodeModuleFile"]),
    "isWrapped": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isWrapped"]),
    "registerInstrumentations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerInstrumentations"]),
    "safeExecuteInTheMiddle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["safeExecuteInTheMiddle"]),
    "safeExecuteInTheMiddleAsync": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__["safeExecuteInTheMiddleAsync"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=79789_8febdbec._.js.map