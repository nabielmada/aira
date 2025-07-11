module.exports = {

"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$http$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$node$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$undici$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$fs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$express$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$graphql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$kafkajs$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$lru$2d$memoizer$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongodb$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mongoose$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$mysql2$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$ioredis$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$redis$2d$4$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$pg$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$prisma$2f$instrumentation$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$hapi$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$koa$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$connect$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$knex$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$tedious$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$generic$2d$pool$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$dataloader$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s({
    "_globalThis": (()=>_globalThis)
});
var _globalThis = typeof globalThis === 'object' ? globalThis : global; //# sourceMappingURL=globalThis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "API_BACKWARDS_COMPATIBILITY_VERSION": (()=>API_BACKWARDS_COMPATIBILITY_VERSION),
    "GLOBAL_LOGS_API_KEY": (()=>GLOBAL_LOGS_API_KEY),
    "_global": (()=>_global),
    "makeGetter": (()=>makeGetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [app-ssr] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER": (()=>NOOP_LOGGER),
    "NoopLogger": (()=>NoopLogger)
});
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "NOOP_LOGGER_PROVIDER": (()=>NOOP_LOGGER_PROVIDER),
    "NoopLoggerProvider": (()=>NoopLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLogger": (()=>ProxyLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [app-ssr] (ecmascript)");
;
var ProxyLogger = function() {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */ ProxyLogger.prototype.emit = function(logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */ ProxyLogger.prototype._getLogger = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER"];
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}();
;
 //# sourceMappingURL=ProxyLogger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ProxyLoggerProvider": (()=>ProxyLoggerProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js [app-ssr] (ecmascript)");
;
;
var ProxyLoggerProvider = function() {
    function ProxyLoggerProvider() {}
    ProxyLoggerProvider.prototype.getLogger = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLogger"](this, name, version, options);
    };
    ProxyLoggerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Set the delegate logger provider
     */ ProxyLoggerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}();
;
 //# sourceMappingURL=ProxyLoggerProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "LogsAPI": (()=>LogsAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js [app-ssr] (ecmascript)");
;
;
;
var LogsAPI = function() {
    function LogsAPI() {
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    }
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
        this._proxyLoggerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$ProxyLoggerProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProxyLoggerProvider"]();
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "logs": (()=>logs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$opentelemetry$2f$instrumentation$2d$amqplib$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=79789_e9ad2bae._.js.map