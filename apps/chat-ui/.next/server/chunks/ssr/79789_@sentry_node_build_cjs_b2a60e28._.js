module.exports = {

"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/logs/capture.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_util = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
/**
 * Capture a log with the given level.
 *
 * @param level - The level of the log.
 * @param message - The message to log.
 * @param attributes - Arbitrary structured data that stores information about the log - e.g., userId: 100.
 */ function captureLog(level, ...args) {
    const [messageOrMessageTemplate, paramsOrAttributes, maybeAttributes] = args;
    if (Array.isArray(paramsOrAttributes)) {
        const attributes = {
            ...maybeAttributes
        };
        attributes['sentry.message.template'] = messageOrMessageTemplate;
        paramsOrAttributes.forEach((param, index)=>{
            attributes[`sentry.message.parameter.${index}`] = param;
        });
        const message = node_util.format(messageOrMessageTemplate, ...paramsOrAttributes);
        core._INTERNAL_captureLog({
            level,
            message,
            attributes
        });
    } else {
        core._INTERNAL_captureLog({
            level,
            message: messageOrMessageTemplate,
            attributes: paramsOrAttributes
        });
    }
}
exports.captureLog = captureLog; //# sourceMappingURL=capture.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/logs/exports.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const capture = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/logs/capture.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
/**
 * @summary Capture a log with the `trace` level. Requires `_experiments.enableLogs` to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.trace('Starting database connection', {
 *   database: 'users',
 *   connectionId: 'conn_123'
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.trace('Database connection %s established for %s',
 *   ['successful', 'users'],
 *   { connectionId: 'conn_123' }
 * );
 * ```
 */ function trace(...args) {
    capture.captureLog('trace', ...args);
}
/**
 * @summary Capture a log with the `debug` level. Requires `_experiments.enableLogs` to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.debug('Cache miss for user profile', {
 *   userId: 'user_123',
 *   cacheKey: 'profile:user_123'
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.debug('Cache %s for %s: %s',
 *   ['miss', 'user profile', 'key not found'],
 *   { userId: 'user_123' }
 * );
 * ```
 */ function debug(...args) {
    capture.captureLog('debug', ...args);
}
/**
 * @summary Capture a log with the `info` level. Requires `_experiments.enableLogs` to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.info('User profile updated', {
 *   userId: 'user_123',
 *   updatedFields: ['email', 'preferences']
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.info('User %s updated their %s',
 *   ['John Doe', 'profile settings'],
 *   { userId: 'user_123' }
 * );
 * ```
 */ function info(...args) {
    capture.captureLog('info', ...args);
}
/**
 * @summary Capture a log with the `warn` level. Requires `_experiments.enableLogs` to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.warn('Rate limit approaching', {
 *   endpoint: '/api/users',
 *   currentRate: '95/100',
 *   resetTime: '2024-03-20T10:00:00Z'
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.warn('Rate limit %s for %s: %s',
 *   ['approaching', '/api/users', '95/100 requests'],
 *   { resetTime: '2024-03-20T10:00:00Z' }
 * );
 * ```
 */ function warn(...args) {
    capture.captureLog('warn', ...args);
}
/**
 * @summary Capture a log with the `error` level. Requires `_experiments.enableLogs` to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.error('Failed to process payment', {
 *   orderId: 'order_123',
 *   errorCode: 'PAYMENT_FAILED',
 *   amount: 99.99
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.error('Payment processing failed for order %s: %s',
 *   ['order_123', 'insufficient funds'],
 *   { amount: 99.99 }
 * );
 * ```
 */ function error(...args) {
    capture.captureLog('error', ...args);
}
/**
 * @summary Capture a log with the `fatal` level. Requires `_experiments.enableLogs` to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.fatal('Database connection pool exhausted', {
 *   database: 'users',
 *   activeConnections: 100,
 *   maxConnections: 100
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.fatal('Database %s: %s connections active',
 *   ['connection pool exhausted', '100/100'],
 *   { database: 'users' }
 * );
 * ```
 */ function fatal(...args) {
    capture.captureLog('fatal', ...args);
}
exports.fmt = core.fmt;
exports.debug = debug;
exports.error = error;
exports.fatal = fatal;
exports.info = info;
exports.trace = trace;
exports.warn = warn; //# sourceMappingURL=exports.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const NODE_VERSION = core.parseSemver(process.versions.node);
const NODE_MAJOR = NODE_VERSION.major;
const NODE_MINOR = NODE_VERSION.minor;
exports.NODE_MAJOR = NODE_MAJOR;
exports.NODE_MINOR = NODE_MINOR;
exports.NODE_VERSION = NODE_VERSION; //# sourceMappingURL=nodeVersion.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
/** Exported only for tests. */ const INSTRUMENTED = {};
/**
 * Instrument an OpenTelemetry instrumentation once.
 * This will skip running instrumentation again if it was already instrumented.
 */ function generateInstrumentOnce(name, creatorOrClass, optionsCallback) {
    if (optionsCallback) {
        return _generateInstrumentOnceWithOptions(name, creatorOrClass, optionsCallback);
    }
    return _generateInstrumentOnce(name, creatorOrClass);
}
// The plain version without handling of options
// Should not be used with custom options that are mutated in the creator!
function _generateInstrumentOnce(name, creator) {
    return Object.assign((options)=>{
        const instrumented = INSTRUMENTED[name];
        if (instrumented) {
            // If options are provided, ensure we update them
            if (options) {
                instrumented.setConfig(options);
            }
            return instrumented;
        }
        const instrumentation$1 = creator(options);
        INSTRUMENTED[name] = instrumentation$1;
        instrumentation.registerInstrumentations({
            instrumentations: [
                instrumentation$1
            ]
        });
        return instrumentation$1;
    }, {
        id: name
    });
}
// This version handles options properly
function _generateInstrumentOnceWithOptions(name, instrumentationClass, optionsCallback) {
    return Object.assign((_options)=>{
        const options = optionsCallback(_options);
        const instrumented = INSTRUMENTED[name];
        if (instrumented) {
            // Ensure we update options
            instrumented.setConfig(options);
            return instrumented;
        }
        const instrumentation$1 = new instrumentationClass(options);
        INSTRUMENTED[name] = instrumentation$1;
        instrumentation.registerInstrumentations({
            instrumentations: [
                instrumentation$1
            ]
        });
        return instrumentation$1;
    }, {
        id: name
    });
}
/**
 * Ensure a given callback is called when the instrumentation is actually wrapping something.
 * This can be used to ensure some logic is only called when the instrumentation is actually active.
 *
 * This function returns a function that can be invoked with a callback.
 * This callback will either be invoked immediately
 * (e.g. if the instrumentation was already wrapped, or if _wrap could not be patched),
 * or once the instrumentation is actually wrapping something.
 *
 * Make sure to call this function right after adding the instrumentation, otherwise it may be too late!
 * The returned callback can be used any time, and also multiple times.
 */ function instrumentWhenWrapped(instrumentation) {
    let isWrapped = false;
    let callbacks = [];
    if (!hasWrap(instrumentation)) {
        isWrapped = true;
    } else {
        const originalWrap = instrumentation['_wrap'];
        instrumentation['_wrap'] = (...args)=>{
            isWrapped = true;
            callbacks.forEach((callback)=>callback());
            callbacks = [];
            return originalWrap(...args);
        };
    }
    const registerCallback = (callback)=>{
        if (isWrapped) {
            callback();
        } else {
            callbacks.push(callback);
        }
    };
    return registerCallback;
}
function hasWrap(instrumentation) {
    return typeof instrumentation['_wrap'] === 'function';
}
exports.INSTRUMENTED = INSTRUMENTED;
exports.generateInstrumentOnce = generateInstrumentOnce;
exports.instrumentWhenWrapped = instrumentWhenWrapped; //# sourceMappingURL=instrument.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
/** Adds an origin to an OTEL Span. */ function addOriginToSpan(span, origin) {
    span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, origin);
}
exports.addOriginToSpan = addOriginToSpan; //# sourceMappingURL=addOriginToSpan.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/getRequestUrl.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
/** Build a full URL from request options. */ function getRequestUrl(requestOptions) {
    const protocol = requestOptions.protocol || '';
    const hostname = requestOptions.hostname || requestOptions.host || '';
    // Don't log standard :80 (http) and :443 (https) ports to reduce the noise
    // Also don't add port if the hostname already includes a port
    const port = !requestOptions.port || requestOptions.port === 80 || requestOptions.port === 443 || /^(.*):(\d+)$/.test(hostname) ? '' : `:${requestOptions.port}`;
    const path = requestOptions.path ? requestOptions.path : '/';
    return `${protocol}//${hostname}${port}${path}`;
}
exports.getRequestUrl = getRequestUrl; //# sourceMappingURL=getRequestUrl.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
exports.DEBUG_BUILD = DEBUG_BUILD; //# sourceMappingURL=debug-build.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/baggage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
/**
 * Merge two baggage headers into one, where the existing one takes precedence.
 * The order of the existing baggage will be preserved, and new entries will be added to the end.
 */ function mergeBaggageHeaders(existing, baggage) {
    if (!existing) {
        return baggage;
    }
    const existingBaggageEntries = core.parseBaggageHeader(existing);
    const newBaggageEntries = core.parseBaggageHeader(baggage);
    if (!newBaggageEntries) {
        return existing;
    }
    // Existing entries take precedence, ensuring order remains stable for minimal changes
    const mergedBaggageEntries = {
        ...existingBaggageEntries
    };
    Object.entries(newBaggageEntries).forEach(([key, value])=>{
        if (!mergedBaggageEntries[key]) {
            mergedBaggageEntries[key] = value;
        }
    });
    return core.objectToBaggageHeader(mergedBaggageEntries);
}
exports.mergeBaggageHeaders = mergeBaggageHeaders; //# sourceMappingURL=baggage.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/http/SentryHttpInstrumentation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/index.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const core$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const baggage = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/baggage.js [app-ssr] (ecmascript)");
const getRequestUrl = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/getRequestUrl.js [app-ssr] (ecmascript)");
const INSTRUMENTATION_NAME = '@sentry/instrumentation-http';
// We only want to capture request bodies up to 1mb.
const MAX_BODY_BYTE_LENGTH = 1024 * 1024;
/**
 * This custom HTTP instrumentation is used to isolate incoming requests and annotate them with additional information.
 * It does not emit any spans.
 *
 * The reason this is isolated from the OpenTelemetry instrumentation is that users may overwrite this,
 * which would lead to Sentry not working as expected.
 *
 * Important note: Contrary to other OTEL instrumentation, this one cannot be unwrapped.
 * It only does minimal things though and does not emit any spans.
 *
 * This is heavily inspired & adapted from:
 * https://github.com/open-telemetry/opentelemetry-js/blob/f8ab5592ddea5cba0a3b33bf8d74f27872c0367f/experimental/packages/opentelemetry-instrumentation-http/src/http.ts
 */ class SentryHttpInstrumentation extends instrumentation.InstrumentationBase {
    constructor(config = {}){
        super(INSTRUMENTATION_NAME, core.VERSION, config);
        this._propagationDecisionMap = new core$1.LRUMap(100);
        this._ignoreOutgoingRequestsMap = new WeakMap();
    }
    /** @inheritdoc */ init() {
        // We register handlers when either http or https is instrumented
        // but we only want to register them once, whichever is loaded first
        let hasRegisteredHandlers = false;
        const onHttpServerRequestStart = (_data)=>{
            const data = _data;
            this._patchServerEmitOnce(data.server);
        };
        const onHttpClientResponseFinish = (_data)=>{
            const data = _data;
            this._onOutgoingRequestFinish(data.request, data.response);
        };
        const onHttpClientRequestError = (_data)=>{
            const data = _data;
            this._onOutgoingRequestFinish(data.request, undefined);
        };
        const onHttpClientRequestCreated = (_data)=>{
            const data = _data;
            this._onOutgoingRequestCreated(data.request);
        };
        const wrap = (moduleExports)=>{
            if (hasRegisteredHandlers) {
                return moduleExports;
            }
            hasRegisteredHandlers = true;
            diagnosticsChannel.subscribe('http.server.request.start', onHttpServerRequestStart);
            diagnosticsChannel.subscribe('http.client.response.finish', onHttpClientResponseFinish);
            // When an error happens, we still want to have a breadcrumb
            // In this case, `http.client.response.finish` is not triggered
            diagnosticsChannel.subscribe('http.client.request.error', onHttpClientRequestError);
            // NOTE: This channel only exist since Node 22
            // Before that, outgoing requests are not patched
            // and trace headers are not propagated, sadly.
            if (this.getConfig().propagateTraceInOutgoingRequests) {
                diagnosticsChannel.subscribe('http.client.request.created', onHttpClientRequestCreated);
            }
            return moduleExports;
        };
        const unwrap = ()=>{
            diagnosticsChannel.unsubscribe('http.server.request.start', onHttpServerRequestStart);
            diagnosticsChannel.unsubscribe('http.client.response.finish', onHttpClientResponseFinish);
            diagnosticsChannel.unsubscribe('http.client.request.error', onHttpClientRequestError);
            diagnosticsChannel.unsubscribe('http.client.request.created', onHttpClientRequestCreated);
        };
        /**
     * You may be wondering why we register these diagnostics-channel listeners
     * in such a convoluted way (as InstrumentationNodeModuleDefinition...)˝,
     * instead of simply subscribing to the events once in here.
     * The reason for this is timing semantics: These functions are called once the http or https module is loaded.
     * If we'd subscribe before that, there seem to be conflicts with the OTEL native instrumentation in some scenarios,
     * especially the "import-on-top" pattern of setting up ESM applications.
     */ return [
            new instrumentation.InstrumentationNodeModuleDefinition('http', [
                '*'
            ], wrap, unwrap),
            new instrumentation.InstrumentationNodeModuleDefinition('https', [
                '*'
            ], wrap, unwrap)
        ];
    }
    /**
   * This is triggered when an outgoing request finishes.
   * It has access to the final request and response objects.
   */ _onOutgoingRequestFinish(request, response) {
        debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, 'Handling finished outgoing request');
        const _breadcrumbs = this.getConfig().breadcrumbs;
        const breadCrumbsEnabled = typeof _breadcrumbs === 'undefined' ? true : _breadcrumbs;
        // Note: We cannot rely on the map being set by `_onOutgoingRequestCreated`, because that is not run in Node <22
        const shouldIgnore = this._ignoreOutgoingRequestsMap.get(request) ?? this._shouldIgnoreOutgoingRequest(request);
        this._ignoreOutgoingRequestsMap.set(request, shouldIgnore);
        if (breadCrumbsEnabled && !shouldIgnore) {
            addRequestBreadcrumb(request, response);
        }
    }
    /**
   * This is triggered when an outgoing request is created.
   * It has access to the request object, and can mutate it before the request is sent.
   */ _onOutgoingRequestCreated(request) {
        const shouldIgnore = this._ignoreOutgoingRequestsMap.get(request) ?? this._shouldIgnoreOutgoingRequest(request);
        this._ignoreOutgoingRequestsMap.set(request, shouldIgnore);
        if (shouldIgnore) {
            return;
        }
        // Add trace propagation headers
        const url = getRequestUrl.getRequestUrl(request);
        // Manually add the trace headers, if it applies
        // Note: We do not use `propagation.inject()` here, because our propagator relies on an active span
        // Which we do not have in this case
        const tracePropagationTargets = core$1.getClient()?.getOptions().tracePropagationTargets;
        const addedHeaders = opentelemetry.shouldPropagateTraceForUrl(url, tracePropagationTargets, this._propagationDecisionMap) ? core$1.getTraceData() : undefined;
        if (!addedHeaders) {
            return;
        }
        const { 'sentry-trace': sentryTrace, baggage: baggage$1 } = addedHeaders;
        // We do not want to overwrite existing header here, if it was already set
        if (sentryTrace && !request.getHeader('sentry-trace')) {
            try {
                request.setHeader('sentry-trace', sentryTrace);
                debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, 'Added sentry-trace header to outgoing request');
            } catch (error) {
                debugBuild.DEBUG_BUILD && core$1.logger.error(INSTRUMENTATION_NAME, 'Failed to add sentry-trace header to outgoing request:', core$1.isError(error) ? error.message : 'Unknown error');
            }
        }
        if (baggage$1) {
            // For baggage, we make sure to merge this into a possibly existing header
            const newBaggage = baggage.mergeBaggageHeaders(request.getHeader('baggage'), baggage$1);
            if (newBaggage) {
                try {
                    request.setHeader('baggage', newBaggage);
                    debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, 'Added baggage header to outgoing request');
                } catch (error) {
                    debugBuild.DEBUG_BUILD && core$1.logger.error(INSTRUMENTATION_NAME, 'Failed to add baggage header to outgoing request:', core$1.isError(error) ? error.message : 'Unknown error');
                }
            }
        }
    }
    /**
   * Patch a server.emit function to handle process isolation for incoming requests.
   * This will only patch the emit function if it was not already patched.
   */ _patchServerEmitOnce(server) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalEmit = server.emit;
        // This means it was already patched, do nothing
        if (originalEmit.__sentry_patched__) {
            return;
        }
        debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, 'Patching server.emit');
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instrumentation = this;
        const { ignoreIncomingRequestBody, maxIncomingRequestBodySize = 'medium' } = instrumentation.getConfig();
        const newEmit = new Proxy(originalEmit, {
            apply (target, thisArg, args) {
                // Only traces request events
                if (args[0] !== 'request') {
                    return target.apply(thisArg, args);
                }
                debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, 'Handling incoming request');
                const isolationScope = core$1.getIsolationScope().clone();
                const request = args[1];
                const response = args[2];
                const normalizedRequest = core$1.httpRequestToRequestData(request);
                // request.ip is non-standard but some frameworks set this
                const ipAddress = request.ip || request.socket?.remoteAddress;
                const url = request.url || '/';
                if (!ignoreIncomingRequestBody?.(url, request) && maxIncomingRequestBodySize !== 'none') {
                    patchRequestToCaptureBody(request, isolationScope, maxIncomingRequestBodySize);
                }
                // Update the isolation scope, isolate this request
                isolationScope.setSDKProcessingMetadata({
                    normalizedRequest,
                    ipAddress
                });
                // attempt to update the scope's `transactionName` based on the request URL
                // Ideally, framework instrumentations coming after the HttpInstrumentation
                // update the transactionName once we get a parameterized route.
                const httpMethod = (request.method || 'GET').toUpperCase();
                const httpTarget = core$1.stripUrlQueryAndFragment(url);
                const bestEffortTransactionName = `${httpMethod} ${httpTarget}`;
                isolationScope.setTransactionName(bestEffortTransactionName);
                if (instrumentation.getConfig().trackIncomingRequestsAsSessions !== false) {
                    recordRequestSession({
                        requestIsolationScope: isolationScope,
                        response,
                        sessionFlushingDelayMS: instrumentation.getConfig().sessionFlushingDelayMS ?? 60000
                    });
                }
                return core$1.withIsolationScope(isolationScope, ()=>{
                    // Set a new propagationSpanId for this request
                    // We rely on the fact that `withIsolationScope()` will implicitly also fork the current scope
                    // This way we can save an "unnecessary" `withScope()` invocation
                    core$1.getCurrentScope().getPropagationContext().propagationSpanId = core$1.generateSpanId();
                    // If we don't want to extract the trace from the header, we can skip this
                    if (!instrumentation.getConfig().extractIncomingTraceFromHeader) {
                        return target.apply(thisArg, args);
                    }
                    const ctx = api.propagation.extract(api.context.active(), normalizedRequest.headers);
                    return api.context.with(ctx, ()=>{
                        return target.apply(thisArg, args);
                    });
                });
            }
        });
        core$1.addNonEnumerableProperty(newEmit, '__sentry_patched__', true);
        server.emit = newEmit;
    }
    /**
   * Check if the given outgoing request should be ignored.
   */ _shouldIgnoreOutgoingRequest(request) {
        if (core.isTracingSuppressed(api.context.active())) {
            return true;
        }
        const ignoreOutgoingRequests = this.getConfig().ignoreOutgoingRequests;
        if (!ignoreOutgoingRequests) {
            return false;
        }
        const options = getRequestOptions(request);
        const url = getRequestUrl.getRequestUrl(request);
        return ignoreOutgoingRequests(url, options);
    }
}
/** Add a breadcrumb for outgoing requests. */ function addRequestBreadcrumb(request, response) {
    const data = getBreadcrumbData(request);
    const statusCode = response?.statusCode;
    const level = core$1.getBreadcrumbLogLevelFromHttpStatusCode(statusCode);
    core$1.addBreadcrumb({
        category: 'http',
        data: {
            status_code: statusCode,
            ...data
        },
        type: 'http',
        level
    }, {
        event: 'response',
        request,
        response
    });
}
function getBreadcrumbData(request) {
    try {
        // `request.host` does not contain the port, but the host header does
        const host = request.getHeader('host') || request.host;
        const url = new URL(request.path, `${request.protocol}//${host}`);
        const parsedUrl = core$1.parseUrl(url.toString());
        const data = {
            url: core$1.getSanitizedUrlString(parsedUrl),
            'http.method': request.method || 'GET'
        };
        if (parsedUrl.search) {
            data['http.query'] = parsedUrl.search;
        }
        if (parsedUrl.hash) {
            data['http.fragment'] = parsedUrl.hash;
        }
        return data;
    } catch  {
        return {};
    }
}
/**
 * This method patches the request object to capture the body.
 * Instead of actually consuming the streamed body ourselves, which has potential side effects,
 * we monkey patch `req.on('data')` to intercept the body chunks.
 * This way, we only read the body if the user also consumes the body, ensuring we do not change any behavior in unexpected ways.
 */ function patchRequestToCaptureBody(req, isolationScope, maxIncomingRequestBodySize) {
    let bodyByteLength = 0;
    const chunks = [];
    debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, 'Patching request.on');
    /**
   * We need to keep track of the original callbacks, in order to be able to remove listeners again.
   * Since `off` depends on having the exact same function reference passed in, we need to be able to map
   * original listeners to our wrapped ones.
   */ const callbackMap = new WeakMap();
    const maxBodySize = maxIncomingRequestBodySize === 'small' ? 1000 : maxIncomingRequestBodySize === 'medium' ? 10000 : MAX_BODY_BYTE_LENGTH;
    try {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        req.on = new Proxy(req.on, {
            apply: (target, thisArg, args)=>{
                const [event, listener, ...restArgs] = args;
                if (event === 'data') {
                    debugBuild.DEBUG_BUILD && core$1.logger.log(INSTRUMENTATION_NAME, `Handling request.on("data") with maximum body size of ${maxBodySize}b`);
                    const callback = new Proxy(listener, {
                        apply: (target, thisArg, args)=>{
                            try {
                                const chunk = args[0];
                                const bufferifiedChunk = Buffer.from(chunk);
                                if (bodyByteLength < maxBodySize) {
                                    chunks.push(bufferifiedChunk);
                                    bodyByteLength += bufferifiedChunk.byteLength;
                                } else if (debugBuild.DEBUG_BUILD) {
                                    core$1.logger.log(INSTRUMENTATION_NAME, `Dropping request body chunk because maximum body length of ${maxBodySize}b is exceeded.`);
                                }
                            } catch (err) {
                                debugBuild.DEBUG_BUILD && core$1.logger.error(INSTRUMENTATION_NAME, 'Encountered error while storing body chunk.');
                            }
                            return Reflect.apply(target, thisArg, args);
                        }
                    });
                    callbackMap.set(listener, callback);
                    return Reflect.apply(target, thisArg, [
                        event,
                        callback,
                        ...restArgs
                    ]);
                }
                return Reflect.apply(target, thisArg, args);
            }
        });
        // Ensure we also remove callbacks correctly
        // eslint-disable-next-line @typescript-eslint/unbound-method
        req.off = new Proxy(req.off, {
            apply: (target, thisArg, args)=>{
                const [, listener] = args;
                const callback = callbackMap.get(listener);
                if (callback) {
                    callbackMap.delete(listener);
                    const modifiedArgs = args.slice();
                    modifiedArgs[1] = callback;
                    return Reflect.apply(target, thisArg, modifiedArgs);
                }
                return Reflect.apply(target, thisArg, args);
            }
        });
        req.on('end', ()=>{
            try {
                const body = Buffer.concat(chunks).toString('utf-8');
                if (body) {
                    // Using Buffer.byteLength here, because the body may contain characters that are not 1 byte long
                    const bodyByteLength = Buffer.byteLength(body, 'utf-8');
                    const truncatedBody = bodyByteLength > maxBodySize ? `${Buffer.from(body).subarray(0, maxBodySize - 3).toString('utf-8')}...` : body;
                    isolationScope.setSDKProcessingMetadata({
                        normalizedRequest: {
                            data: truncatedBody
                        }
                    });
                }
            } catch (error) {
                if (debugBuild.DEBUG_BUILD) {
                    core$1.logger.error(INSTRUMENTATION_NAME, 'Error building captured request body', error);
                }
            }
        });
    } catch (error) {
        if (debugBuild.DEBUG_BUILD) {
            core$1.logger.error(INSTRUMENTATION_NAME, 'Error patching request to capture body', error);
        }
    }
}
function getRequestOptions(request) {
    return {
        method: request.method,
        protocol: request.protocol,
        host: request.host,
        hostname: request.host,
        path: request.path,
        headers: request.getHeaders()
    };
}
/**
 * Starts a session and tracks it in the context of a given isolation scope.
 * When the passed response is finished, the session is put into a task and is
 * aggregated with other sessions that may happen in a certain time window
 * (sessionFlushingDelayMs).
 *
 * The sessions are always aggregated by the client that is on the current scope
 * at the time of ending the response (if there is one).
 */ // Exported for unit tests
function recordRequestSession({ requestIsolationScope, response, sessionFlushingDelayMS }) {
    requestIsolationScope.setSDKProcessingMetadata({
        requestSession: {
            status: 'ok'
        }
    });
    response.once('close', ()=>{
        // We need to grab the client off the current scope instead of the isolation scope because the isolation scope doesn't hold any client out of the box.
        const client = core$1.getClient();
        const requestSession = requestIsolationScope.getScopeData().sdkProcessingMetadata.requestSession;
        if (client && requestSession) {
            debugBuild.DEBUG_BUILD && core$1.logger.debug(`Recorded request session with status: ${requestSession.status}`);
            const roundedDate = new Date();
            roundedDate.setSeconds(0, 0);
            const dateBucketKey = roundedDate.toISOString();
            const existingClientAggregate = clientToRequestSessionAggregatesMap.get(client);
            const bucket = existingClientAggregate?.[dateBucketKey] || {
                exited: 0,
                crashed: 0,
                errored: 0
            };
            bucket[({
                ok: 'exited',
                crashed: 'crashed',
                errored: 'errored'
            })[requestSession.status]]++;
            if (existingClientAggregate) {
                existingClientAggregate[dateBucketKey] = bucket;
            } else {
                debugBuild.DEBUG_BUILD && core$1.logger.debug('Opened new request session aggregate.');
                const newClientAggregate = {
                    [dateBucketKey]: bucket
                };
                clientToRequestSessionAggregatesMap.set(client, newClientAggregate);
                const flushPendingClientAggregates = ()=>{
                    clearTimeout(timeout);
                    unregisterClientFlushHook();
                    clientToRequestSessionAggregatesMap.delete(client);
                    const aggregatePayload = Object.entries(newClientAggregate).map(([timestamp, value])=>({
                            started: timestamp,
                            exited: value.exited,
                            errored: value.errored,
                            crashed: value.crashed
                        }));
                    client.sendSession({
                        aggregates: aggregatePayload
                    });
                };
                const unregisterClientFlushHook = client.on('flush', ()=>{
                    debugBuild.DEBUG_BUILD && core$1.logger.debug('Sending request session aggregate due to client flush');
                    flushPendingClientAggregates();
                });
                const timeout = setTimeout(()=>{
                    debugBuild.DEBUG_BUILD && core$1.logger.debug('Sending request session aggregate due to flushing schedule');
                    flushPendingClientAggregates();
                }, sessionFlushingDelayMS).unref();
            }
        }
    });
}
const clientToRequestSessionAggregatesMap = new Map();
exports.SentryHttpInstrumentation = SentryHttpInstrumentation;
exports.recordRequestSession = recordRequestSession; //# sourceMappingURL=SentryHttpInstrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/http/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentationHttp = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const nodeVersion = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const getRequestUrl = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/getRequestUrl.js [app-ssr] (ecmascript)");
const SentryHttpInstrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/http/SentryHttpInstrumentation.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Http';
const INSTRUMENTATION_NAME = '@opentelemetry_sentry-patched/instrumentation-http';
const instrumentSentryHttp = instrument.generateInstrumentOnce(`${INTEGRATION_NAME}.sentry`, (options)=>{
    return new SentryHttpInstrumentation.SentryHttpInstrumentation(options);
});
const instrumentOtelHttp = instrument.generateInstrumentOnce(INTEGRATION_NAME, (config)=>{
    const instrumentation = new instrumentationHttp.HttpInstrumentation(config);
    // We want to update the logger namespace so we can better identify what is happening here
    try {
        instrumentation['_diag'] = api.diag.createComponentLogger({
            namespace: INSTRUMENTATION_NAME
        });
        // @ts-expect-error We are writing a read-only property here...
        instrumentation.instrumentationName = INSTRUMENTATION_NAME;
    } catch  {
    // ignore errors here...
    }
    return instrumentation;
});
/** Exported only for tests. */ function _shouldInstrumentSpans(options, clientOptions = {}) {
    // If `spans` is passed in, it takes precedence
    // Else, we by default emit spans, unless `skipOpenTelemetrySetup` is set to `true` or spans are not enabled
    if (typeof options.spans === 'boolean') {
        return options.spans;
    }
    if (clientOptions.skipOpenTelemetrySetup) {
        return false;
    }
    // IMPORTANT: We only disable span instrumentation when spans are not enabled _and_ we are on Node 22+,
    // as otherwise the necessary diagnostics channel is not available yet
    if (!core.hasSpansEnabled(clientOptions) && nodeVersion.NODE_VERSION.major >= 22) {
        return false;
    }
    return true;
}
/**
 * The http integration instruments Node's internal http and https modules.
 * It creates breadcrumbs and spans for outgoing HTTP requests which will be attached to the currently active span.
 */ const httpIntegration = core.defineIntegration((options = {})=>{
    const dropSpansForIncomingRequestStatusCodes = options.dropSpansForIncomingRequestStatusCodes ?? [
        404
    ];
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            const instrumentSpans = _shouldInstrumentSpans(options, core.getClient()?.getOptions());
            // This is Sentry-specific instrumentation for request isolation and breadcrumbs
            instrumentSentryHttp({
                ...options,
                // If spans are not instrumented, it means the HttpInstrumentation has not been added
                // In that case, we want to handle incoming trace extraction ourselves
                extractIncomingTraceFromHeader: !instrumentSpans,
                // If spans are not instrumented, it means the HttpInstrumentation has not been added
                // In that case, we want to handle trace propagation ourselves
                propagateTraceInOutgoingRequests: !instrumentSpans
            });
            // This is the "regular" OTEL instrumentation that emits spans
            if (instrumentSpans) {
                const instrumentationConfig = getConfigWithDefaults(options);
                instrumentOtelHttp(instrumentationConfig);
            }
        },
        processEvent (event) {
            // Drop transaction if it has a status code that should be ignored
            if (event.type === 'transaction') {
                const statusCode = event.contexts?.trace?.data?.['http.response.status_code'];
                if (typeof statusCode === 'number' && dropSpansForIncomingRequestStatusCodes.some((code)=>{
                    if (typeof code === 'number') {
                        return code === statusCode;
                    }
                    const [min, max] = code;
                    return statusCode >= min && statusCode <= max;
                })) {
                    return null;
                }
            }
            return event;
        }
    };
});
/**
 * Determines if @param req is a ClientRequest, meaning the request was created within the express app
 * and it's an outgoing request.
 * Checking for properties instead of using `instanceOf` to avoid importing the request classes.
 */ function _isClientRequest(req) {
    return 'outputData' in req && 'outputSize' in req && !('client' in req) && !('statusCode' in req);
}
/**
 * Detects if an incoming request is a prefetch request.
 */ function isKnownPrefetchRequest(req) {
    // Currently only handles Next.js prefetch requests but may check other frameworks in the future.
    return req.headers['next-router-prefetch'] === '1';
}
function getConfigWithDefaults(options = {}) {
    const instrumentationConfig = {
        ...options.instrumentation?._experimentalConfig,
        disableIncomingRequestInstrumentation: options.disableIncomingRequestSpans,
        ignoreOutgoingRequestHook: (request)=>{
            const url = getRequestUrl.getRequestUrl(request);
            if (!url) {
                return false;
            }
            const _ignoreOutgoingRequests = options.ignoreOutgoingRequests;
            if (_ignoreOutgoingRequests?.(url, request)) {
                return true;
            }
            return false;
        },
        ignoreIncomingRequestHook: (request)=>{
            // request.url is the only property that holds any information about the url
            // it only consists of the URL path and query string (if any)
            const urlPath = request.url;
            const method = request.method?.toUpperCase();
            // We do not capture OPTIONS/HEAD requests as transactions
            if (method === 'OPTIONS' || method === 'HEAD') {
                return true;
            }
            const _ignoreIncomingRequests = options.ignoreIncomingRequests;
            if (urlPath && _ignoreIncomingRequests?.(urlPath, request)) {
                return true;
            }
            return false;
        },
        requireParentforOutgoingSpans: false,
        requireParentforIncomingSpans: false,
        requestHook: (span, req)=>{
            addOriginToSpan.addOriginToSpan(span, 'auto.http.otel.http');
            if (!_isClientRequest(req) && isKnownPrefetchRequest(req)) {
                span.setAttribute('sentry.http.prefetch', true);
            }
            options.instrumentation?.requestHook?.(span, req);
        },
        responseHook: (span, res)=>{
            options.instrumentation?.responseHook?.(span, res);
        },
        applyCustomAttributesOnSpan: (span, request, response)=>{
            options.instrumentation?.applyCustomAttributesOnSpan?.(span, request, response);
        }
    };
    return instrumentationConfig;
}
exports._shouldInstrumentSpans = _shouldInstrumentSpans;
exports.httpIntegration = httpIntegration;
exports.instrumentOtelHttp = instrumentOtelHttp; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/node-fetch/SentryNodeFetchInstrumentation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/index.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const core$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const diagch = __turbopack_context__.r("[externals]/diagnostics_channel [external] (diagnostics_channel, cjs)");
const nodeVersion = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)");
const baggage = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/baggage.js [app-ssr] (ecmascript)");
const SENTRY_TRACE_HEADER = 'sentry-trace';
const SENTRY_BAGGAGE_HEADER = 'baggage';
// For baggage, we make sure to merge this into a possibly existing header
const BAGGAGE_HEADER_REGEX = /baggage: (.*)\r\n/;
/**
 * This custom node-fetch instrumentation is used to instrument outgoing fetch requests.
 * It does not emit any spans.
 *
 * The reason this is isolated from the OpenTelemetry instrumentation is that users may overwrite this,
 * which would lead to Sentry not working as expected.
 *
 * This is heavily inspired & adapted from:
 * https://github.com/open-telemetry/opentelemetry-js-contrib/blob/28e209a9da36bc4e1f8c2b0db7360170ed46cb80/plugins/node/instrumentation-undici/src/undici.ts
 */ class SentryNodeFetchInstrumentation extends instrumentation.InstrumentationBase {
    // Keep ref to avoid https://github.com/nodejs/node/issues/42170 bug and for
    // unsubscribing.
    constructor(config = {}){
        super('@sentry/instrumentation-node-fetch', core.VERSION, config);
        this._channelSubs = [];
        this._propagationDecisionMap = new core$1.LRUMap(100);
        this._ignoreOutgoingRequestsMap = new WeakMap();
    }
    /** No need to instrument files/modules. */ init() {
        return undefined;
    }
    /** Disable the instrumentation. */ disable() {
        super.disable();
        this._channelSubs.forEach((sub)=>sub.unsubscribe());
        this._channelSubs = [];
    }
    /** Enable the instrumentation. */ enable() {
        // "enabled" handling is currently a bit messy with InstrumentationBase.
        // If constructed with `{enabled: false}`, this `.enable()` is still called,
        // and `this.getConfig().enabled !== this.isEnabled()`, creating confusion.
        //
        // For now, this class will setup for instrumenting if `.enable()` is
        // called, but use `this.getConfig().enabled` to determine if
        // instrumentation should be generated. This covers the more likely common
        // case of config being given a construction time, rather than later via
        // `instance.enable()`, `.disable()`, or `.setConfig()` calls.
        super.enable();
        // This method is called by the super-class constructor before ours is
        // called. So we need to ensure the property is initalized.
        this._channelSubs = this._channelSubs || [];
        // Avoid to duplicate subscriptions
        if (this._channelSubs.length > 0) {
            return;
        }
        this._subscribeToChannel('undici:request:create', this._onRequestCreated.bind(this));
        this._subscribeToChannel('undici:request:headers', this._onResponseHeaders.bind(this));
    }
    /**
   * This method is called when a request is created.
   * You can still mutate the request here before it is sent.
   */ _onRequestCreated({ request }) {
        const config = this.getConfig();
        const enabled = config.enabled !== false;
        if (!enabled) {
            return;
        }
        const shouldIgnore = this._shouldIgnoreOutgoingRequest(request);
        // We store this decisision for later so we do not need to re-evaluate it
        // Additionally, the active context is not correct in _onResponseHeaders, so we need to make sure it is evaluated here
        this._ignoreOutgoingRequestsMap.set(request, shouldIgnore);
        if (shouldIgnore) {
            return;
        }
        const url = getAbsoluteUrl(request.origin, request.path);
        // Manually add the trace headers, if it applies
        // Note: We do not use `propagation.inject()` here, because our propagator relies on an active span
        // Which we do not have in this case
        // The propagator _may_ overwrite this, but this should be fine as it is the same data
        const tracePropagationTargets = core$1.getClient()?.getOptions().tracePropagationTargets;
        const addedHeaders = opentelemetry.shouldPropagateTraceForUrl(url, tracePropagationTargets, this._propagationDecisionMap) ? core$1.getTraceData() : undefined;
        if (!addedHeaders) {
            return;
        }
        const { 'sentry-trace': sentryTrace, baggage: baggage$1 } = addedHeaders;
        // We do not want to overwrite existing headers here
        // If the core UndiciInstrumentation is registered, it will already have set the headers
        // We do not want to add any then
        if (Array.isArray(request.headers)) {
            const requestHeaders = request.headers;
            // We do not want to overwrite existing header here, if it was already set
            if (sentryTrace && !requestHeaders.includes(SENTRY_TRACE_HEADER)) {
                requestHeaders.push(SENTRY_TRACE_HEADER, sentryTrace);
            }
            // For baggage, we make sure to merge this into a possibly existing header
            const existingBaggagePos = requestHeaders.findIndex((header)=>header === SENTRY_BAGGAGE_HEADER);
            if (baggage$1 && existingBaggagePos === -1) {
                requestHeaders.push(SENTRY_BAGGAGE_HEADER, baggage$1);
            } else if (baggage$1) {
                const existingBaggage = requestHeaders[existingBaggagePos + 1];
                const merged = baggage.mergeBaggageHeaders(existingBaggage, baggage$1);
                if (merged) {
                    requestHeaders[existingBaggagePos + 1] = merged;
                }
            }
        } else {
            const requestHeaders = request.headers;
            // We do not want to overwrite existing header here, if it was already set
            if (sentryTrace && !requestHeaders.includes(`${SENTRY_TRACE_HEADER}:`)) {
                request.headers += `${SENTRY_TRACE_HEADER}: ${sentryTrace}\r\n`;
            }
            const existingBaggage = request.headers.match(BAGGAGE_HEADER_REGEX)?.[1];
            if (baggage$1 && !existingBaggage) {
                request.headers += `${SENTRY_BAGGAGE_HEADER}: ${baggage$1}\r\n`;
            } else if (baggage$1) {
                const merged = baggage.mergeBaggageHeaders(existingBaggage, baggage$1);
                if (merged) {
                    request.headers = request.headers.replace(BAGGAGE_HEADER_REGEX, `baggage: ${merged}\r\n`);
                }
            }
        }
    }
    /**
   * This method is called when a response is received.
   */ _onResponseHeaders({ request, response }) {
        const config = this.getConfig();
        const enabled = config.enabled !== false;
        if (!enabled) {
            return;
        }
        const _breadcrumbs = config.breadcrumbs;
        const breadCrumbsEnabled = typeof _breadcrumbs === 'undefined' ? true : _breadcrumbs;
        const shouldIgnore = this._ignoreOutgoingRequestsMap.get(request);
        if (breadCrumbsEnabled && !shouldIgnore) {
            addRequestBreadcrumb(request, response);
        }
    }
    /** Subscribe to a diagnostics channel. */ _subscribeToChannel(diagnosticChannel, onMessage) {
        // `diagnostics_channel` had a ref counting bug until v18.19.0.
        // https://github.com/nodejs/node/pull/47520
        const useNewSubscribe = nodeVersion.NODE_MAJOR > 18 || nodeVersion.NODE_MAJOR === 18 && nodeVersion.NODE_MINOR >= 19;
        let unsubscribe;
        if (useNewSubscribe) {
            diagch.subscribe?.(diagnosticChannel, onMessage);
            unsubscribe = ()=>diagch.unsubscribe?.(diagnosticChannel, onMessage);
        } else {
            const channel = diagch.channel(diagnosticChannel);
            channel.subscribe(onMessage);
            unsubscribe = ()=>channel.unsubscribe(onMessage);
        }
        this._channelSubs.push({
            name: diagnosticChannel,
            unsubscribe
        });
    }
    /**
   * Check if the given outgoing request should be ignored.
   */ _shouldIgnoreOutgoingRequest(request) {
        if (core.isTracingSuppressed(api.context.active())) {
            return true;
        }
        // Add trace propagation headers
        const url = getAbsoluteUrl(request.origin, request.path);
        const ignoreOutgoingRequests = this.getConfig().ignoreOutgoingRequests;
        if (typeof ignoreOutgoingRequests !== 'function' || !url) {
            return false;
        }
        return ignoreOutgoingRequests(url);
    }
}
/** Add a breadcrumb for outgoing requests. */ function addRequestBreadcrumb(request, response) {
    const data = getBreadcrumbData(request);
    const statusCode = response.statusCode;
    const level = core$1.getBreadcrumbLogLevelFromHttpStatusCode(statusCode);
    core$1.addBreadcrumb({
        category: 'http',
        data: {
            status_code: statusCode,
            ...data
        },
        type: 'http',
        level
    }, {
        event: 'response',
        request,
        response
    });
}
function getBreadcrumbData(request) {
    try {
        const url = getAbsoluteUrl(request.origin, request.path);
        const parsedUrl = core$1.parseUrl(url);
        const data = {
            url: core$1.getSanitizedUrlString(parsedUrl),
            'http.method': request.method || 'GET'
        };
        if (parsedUrl.search) {
            data['http.query'] = parsedUrl.search;
        }
        if (parsedUrl.hash) {
            data['http.fragment'] = parsedUrl.hash;
        }
        return data;
    } catch  {
        return {};
    }
}
function getAbsoluteUrl(origin, path = '/') {
    try {
        const url = new URL(path, origin);
        return url.toString();
    } catch  {
        // fallback: Construct it on our own
        const url = `${origin}`;
        if (url.endsWith('/') && path.startsWith('/')) {
            return `${url}${path.slice(1)}`;
        }
        if (!url.endsWith('/') && !path.startsWith('/')) {
            return `${url}/${path.slice(1)}`;
        }
        return `${url}${path}`;
    }
}
exports.SentryNodeFetchInstrumentation = SentryNodeFetchInstrumentation; //# sourceMappingURL=SentryNodeFetchInstrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/node-fetch/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationUndici = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const SentryNodeFetchInstrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/node-fetch/SentryNodeFetchInstrumentation.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'NodeFetch';
const instrumentOtelNodeFetch = instrument.generateInstrumentOnce(INTEGRATION_NAME, instrumentationUndici.UndiciInstrumentation, (options)=>{
    return getConfigWithDefaults(options);
});
const instrumentSentryNodeFetch = instrument.generateInstrumentOnce(`${INTEGRATION_NAME}.sentry`, SentryNodeFetchInstrumentation.SentryNodeFetchInstrumentation, (options)=>{
    return options;
});
const _nativeNodeFetchIntegration = (options = {})=>{
    return {
        name: 'NodeFetch',
        setupOnce () {
            const instrumentSpans = _shouldInstrumentSpans(options, core.getClient()?.getOptions());
            // This is the "regular" OTEL instrumentation that emits spans
            if (instrumentSpans) {
                instrumentOtelNodeFetch(options);
            }
            // This is the Sentry-specific instrumentation that creates breadcrumbs & propagates traces
            // This must be registered after the OTEL one, to ensure that the core trace propagation logic takes presedence
            // Otherwise, the sentry-trace header may be set multiple times
            instrumentSentryNodeFetch(options);
        }
    };
};
const nativeNodeFetchIntegration = core.defineIntegration(_nativeNodeFetchIntegration);
// Matching the behavior of the base instrumentation
function getAbsoluteUrl(origin, path = '/') {
    const url = `${origin}`;
    if (url.endsWith('/') && path.startsWith('/')) {
        return `${url}${path.slice(1)}`;
    }
    if (!url.endsWith('/') && !path.startsWith('/')) {
        return `${url}/${path.slice(1)}`;
    }
    return `${url}${path}`;
}
function _shouldInstrumentSpans(options, clientOptions = {}) {
    // If `spans` is passed in, it takes precedence
    // Else, we by default emit spans, unless `skipOpenTelemetrySetup` is set to `true` or spans are not enabled
    return typeof options.spans === 'boolean' ? options.spans : !clientOptions.skipOpenTelemetrySetup && core.hasSpansEnabled(clientOptions);
}
function getConfigWithDefaults(options = {}) {
    const instrumentationConfig = {
        requireParentforSpans: false,
        ignoreRequestHook: (request)=>{
            const url = getAbsoluteUrl(request.origin, request.path);
            const _ignoreOutgoingRequests = options.ignoreOutgoingRequests;
            const shouldIgnore = _ignoreOutgoingRequests && url && _ignoreOutgoingRequests(url);
            return !!shouldIgnore;
        },
        startSpanHook: ()=>{
            return {
                [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.http.otel.node_fetch'
            };
        }
    };
    return instrumentationConfig;
}
exports.nativeNodeFetchIntegration = nativeNodeFetchIntegration; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/fs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationFs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'FileSystem';
/**
 * This integration will create spans for `fs` API operations, like reading and writing files.
 *
 * **WARNING:** This integration may add significant overhead to your application. Especially in scenarios with a lot of
 * file I/O, like for example when running a framework dev server, including this integration can massively slow down
 * your application.
 *
 * @param options Configuration for this integration.
 */ const fsIntegration = core.defineIntegration((options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationFs.FsInstrumentation({
                    requireParentSpan: true,
                    endHook (functionName, { args, span, error }) {
                        span.updateName(`fs.${functionName}`);
                        span.setAttributes({
                            [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: 'file',
                            [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.file.fs'
                        });
                        if (options.recordErrorMessagesAsSpanAttributes) {
                            if (typeof args[0] === 'string' && FS_OPERATIONS_WITH_PATH_ARG.includes(functionName)) {
                                span.setAttribute('path_argument', args[0]);
                            } else if (typeof args[0] === 'string' && typeof args[1] === 'string' && FS_OPERATIONS_WITH_TARGET_PATH.includes(functionName)) {
                                span.setAttribute('target_argument', args[0]);
                                span.setAttribute('path_argument', args[1]);
                            } else if (typeof args[0] === 'string' && FS_OPERATIONS_WITH_PREFIX.includes(functionName)) {
                                span.setAttribute('prefix_argument', args[0]);
                            } else if (typeof args[0] === 'string' && typeof args[1] === 'string' && FS_OPERATIONS_WITH_EXISTING_PATH_NEW_PATH.includes(functionName)) {
                                span.setAttribute('existing_path_argument', args[0]);
                                span.setAttribute('new_path_argument', args[1]);
                            } else if (typeof args[0] === 'string' && typeof args[1] === 'string' && FS_OPERATIONS_WITH_SRC_DEST.includes(functionName)) {
                                span.setAttribute('src_argument', args[0]);
                                span.setAttribute('dest_argument', args[1]);
                            } else if (typeof args[0] === 'string' && typeof args[1] === 'string' && FS_OPERATIONS_WITH_OLD_PATH_NEW_PATH.includes(functionName)) {
                                span.setAttribute('old_path_argument', args[0]);
                                span.setAttribute('new_path_argument', args[1]);
                            }
                        }
                        if (error && options.recordErrorMessagesAsSpanAttributes) {
                            span.setAttribute('fs_error', error.message);
                        }
                    }
                }))();
        }
    };
});
const FS_OPERATIONS_WITH_OLD_PATH_NEW_PATH = [
    'rename',
    'renameSync'
];
const FS_OPERATIONS_WITH_SRC_DEST = [
    'copyFile',
    'cp',
    'copyFileSync',
    'cpSync'
];
const FS_OPERATIONS_WITH_EXISTING_PATH_NEW_PATH = [
    'link',
    'linkSync'
];
const FS_OPERATIONS_WITH_PREFIX = [
    'mkdtemp',
    'mkdtempSync'
];
const FS_OPERATIONS_WITH_TARGET_PATH = [
    'symlink',
    'symlinkSync'
];
const FS_OPERATIONS_WITH_PATH_ARG = [
    'access',
    'appendFile',
    'chmod',
    'chown',
    'exists',
    'mkdir',
    'lchown',
    'lstat',
    'lutimes',
    'open',
    'opendir',
    'readdir',
    'readFile',
    'readlink',
    'realpath',
    'realpath.native',
    'rm',
    'rmdir',
    'stat',
    'truncate',
    'unlink',
    'utimes',
    'writeFile',
    'accessSync',
    'appendFileSync',
    'chmodSync',
    'chownSync',
    'existsSync',
    'lchownSync',
    'lstatSync',
    'lutimesSync',
    'opendirSync',
    'mkdirSync',
    'openSync',
    'readdirSync',
    'readFileSync',
    'readlinkSync',
    'realpathSync',
    'realpathSync.native',
    'rmdirSync',
    'rmSync',
    'statSync',
    'truncateSync',
    'unlinkSync',
    'utimesSync',
    'writeFileSync'
];
exports.fsIntegration = fsIntegration; //# sourceMappingURL=fs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/context.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_child_process = __turbopack_context__.r("[externals]/node:child_process [external] (node:child_process, cjs)");
const node_fs = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const node_path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const node_util = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
/* eslint-disable max-lines */ const readFileAsync = node_util.promisify(node_fs.readFile);
const readDirAsync = node_util.promisify(node_fs.readdir);
// Process enhanced with methods from Node 18, 20, 22 as @types/node
// is on `14.18.0` to match minimum version requirements of the SDK
const INTEGRATION_NAME = 'Context';
const _nodeContextIntegration = (options = {})=>{
    let cachedContext;
    const _options = {
        app: true,
        os: true,
        device: true,
        culture: true,
        cloudResource: true,
        ...options
    };
    /** Add contexts to the event. Caches the context so we only look it up once. */ async function addContext(event) {
        if (cachedContext === undefined) {
            cachedContext = _getContexts();
        }
        const updatedContext = _updateContext(await cachedContext);
        // TODO(v10): conditional with `sendDefaultPii` here?
        event.contexts = {
            ...event.contexts,
            app: {
                ...updatedContext.app,
                ...event.contexts?.app
            },
            os: {
                ...updatedContext.os,
                ...event.contexts?.os
            },
            device: {
                ...updatedContext.device,
                ...event.contexts?.device
            },
            culture: {
                ...updatedContext.culture,
                ...event.contexts?.culture
            },
            cloud_resource: {
                ...updatedContext.cloud_resource,
                ...event.contexts?.cloud_resource
            }
        };
        return event;
    }
    /** Get the contexts from node. */ async function _getContexts() {
        const contexts = {};
        if (_options.os) {
            contexts.os = await getOsContext();
        }
        if (_options.app) {
            contexts.app = getAppContext();
        }
        if (_options.device) {
            contexts.device = getDeviceContext(_options.device);
        }
        if (_options.culture) {
            const culture = getCultureContext();
            if (culture) {
                contexts.culture = culture;
            }
        }
        if (_options.cloudResource) {
            contexts.cloud_resource = getCloudResourceContext();
        }
        return contexts;
    }
    return {
        name: INTEGRATION_NAME,
        processEvent (event) {
            return addContext(event);
        }
    };
};
/**
 * Capture context about the environment and the device that the client is running on, to events.
 */ const nodeContextIntegration = core.defineIntegration(_nodeContextIntegration);
/**
 * Updates the context with dynamic values that can change
 */ function _updateContext(contexts) {
    // Only update properties if they exist
    if (contexts.app?.app_memory) {
        contexts.app.app_memory = process.memoryUsage().rss;
    }
    if (contexts.app?.free_memory && typeof process.availableMemory === 'function') {
        const freeMemory = process.availableMemory?.();
        if (freeMemory != null) {
            contexts.app.free_memory = freeMemory;
        }
    }
    if (contexts.device?.free_memory) {
        contexts.device.free_memory = os.freemem();
    }
    return contexts;
}
/**
 * Returns the operating system context.
 *
 * Based on the current platform, this uses a different strategy to provide the
 * most accurate OS information. Since this might involve spawning subprocesses
 * or accessing the file system, this should only be executed lazily and cached.
 *
 *  - On macOS (Darwin), this will execute the `sw_vers` utility. The context
 *    has a `name`, `version`, `build` and `kernel_version` set.
 *  - On Linux, this will try to load a distribution release from `/etc` and set
 *    the `name`, `version` and `kernel_version` fields.
 *  - On all other platforms, only a `name` and `version` will be returned. Note
 *    that `version` might actually be the kernel version.
 */ async function getOsContext() {
    const platformId = os.platform();
    switch(platformId){
        case 'darwin':
            return getDarwinInfo();
        case 'linux':
            return getLinuxInfo();
        default:
            return {
                name: PLATFORM_NAMES[platformId] || platformId,
                version: os.release()
            };
    }
}
function getCultureContext() {
    try {
        if (typeof process.versions.icu !== 'string') {
            // Node was built without ICU support
            return;
        }
        // Check that node was built with full Intl support. Its possible it was built without support for non-English
        // locales which will make resolvedOptions inaccurate
        //
        // https://nodejs.org/api/intl.html#detecting-internationalization-support
        const january = new Date(9e8);
        const spanish = new Intl.DateTimeFormat('es', {
            month: 'long'
        });
        if (spanish.format(january) === 'enero') {
            const options = Intl.DateTimeFormat().resolvedOptions();
            return {
                locale: options.locale,
                timezone: options.timeZone
            };
        }
    } catch (err) {
    //
    }
    return;
}
/**
 * Get app context information from process
 */ function getAppContext() {
    const app_memory = process.memoryUsage().rss;
    const app_start_time = new Date(Date.now() - process.uptime() * 1000).toISOString();
    // https://nodejs.org/api/process.html#processavailablememory
    const appContext = {
        app_start_time,
        app_memory
    };
    if (typeof process.availableMemory === 'function') {
        const freeMemory = process.availableMemory?.();
        if (freeMemory != null) {
            appContext.free_memory = freeMemory;
        }
    }
    return appContext;
}
/**
 * Gets device information from os
 */ function getDeviceContext(deviceOpt) {
    const device = {};
    // Sometimes os.uptime() throws due to lacking permissions: https://github.com/getsentry/sentry-javascript/issues/8202
    let uptime;
    try {
        uptime = os.uptime();
    } catch (e) {
    // noop
    }
    // os.uptime or its return value seem to be undefined in certain environments (e.g. Azure functions).
    // Hence, we only set boot time, if we get a valid uptime value.
    // @see https://github.com/getsentry/sentry-javascript/issues/5856
    if (typeof uptime === 'number') {
        device.boot_time = new Date(Date.now() - uptime * 1000).toISOString();
    }
    device.arch = os.arch();
    if (deviceOpt === true || deviceOpt.memory) {
        device.memory_size = os.totalmem();
        device.free_memory = os.freemem();
    }
    if (deviceOpt === true || deviceOpt.cpu) {
        const cpuInfo = os.cpus();
        const firstCpu = cpuInfo?.[0];
        if (firstCpu) {
            device.processor_count = cpuInfo.length;
            device.cpu_description = firstCpu.model;
            device.processor_frequency = firstCpu.speed;
        }
    }
    return device;
}
/** Mapping of Node's platform names to actual OS names. */ const PLATFORM_NAMES = {
    aix: 'IBM AIX',
    freebsd: 'FreeBSD',
    openbsd: 'OpenBSD',
    sunos: 'SunOS',
    win32: 'Windows'
};
/** Linux version file to check for a distribution. */ /** Mapping of linux release files located in /etc to distributions. */ const LINUX_DISTROS = [
    {
        name: 'fedora-release',
        distros: [
            'Fedora'
        ]
    },
    {
        name: 'redhat-release',
        distros: [
            'Red Hat Linux',
            'Centos'
        ]
    },
    {
        name: 'redhat_version',
        distros: [
            'Red Hat Linux'
        ]
    },
    {
        name: 'SuSE-release',
        distros: [
            'SUSE Linux'
        ]
    },
    {
        name: 'lsb-release',
        distros: [
            'Ubuntu Linux',
            'Arch Linux'
        ]
    },
    {
        name: 'debian_version',
        distros: [
            'Debian'
        ]
    },
    {
        name: 'debian_release',
        distros: [
            'Debian'
        ]
    },
    {
        name: 'arch-release',
        distros: [
            'Arch Linux'
        ]
    },
    {
        name: 'gentoo-release',
        distros: [
            'Gentoo Linux'
        ]
    },
    {
        name: 'novell-release',
        distros: [
            'SUSE Linux'
        ]
    },
    {
        name: 'alpine-release',
        distros: [
            'Alpine Linux'
        ]
    }
];
/** Functions to extract the OS version from Linux release files. */ const LINUX_VERSIONS = {
    alpine: (content)=>content,
    arch: (content)=>matchFirst(/distrib_release=(.*)/, content),
    centos: (content)=>matchFirst(/release ([^ ]+)/, content),
    debian: (content)=>content,
    fedora: (content)=>matchFirst(/release (..)/, content),
    mint: (content)=>matchFirst(/distrib_release=(.*)/, content),
    red: (content)=>matchFirst(/release ([^ ]+)/, content),
    suse: (content)=>matchFirst(/VERSION = (.*)\n/, content),
    ubuntu: (content)=>matchFirst(/distrib_release=(.*)/, content)
};
/**
 * Executes a regular expression with one capture group.
 *
 * @param regex A regular expression to execute.
 * @param text Content to execute the RegEx on.
 * @returns The captured string if matched; otherwise undefined.
 */ function matchFirst(regex, text) {
    const match = regex.exec(text);
    return match ? match[1] : undefined;
}
/** Loads the macOS operating system context. */ async function getDarwinInfo() {
    // Default values that will be used in case no operating system information
    // can be loaded. The default version is computed via heuristics from the
    // kernel version, but the build ID is missing.
    const darwinInfo = {
        kernel_version: os.release(),
        name: 'Mac OS X',
        version: `10.${Number(os.release().split('.')[0]) - 4}`
    };
    try {
        // We try to load the actual macOS version by executing the `sw_vers` tool.
        // This tool should be available on every standard macOS installation. In
        // case this fails, we stick with the values computed above.
        const output = await new Promise((resolve, reject)=>{
            node_child_process.execFile('/usr/bin/sw_vers', (error, stdout)=>{
                if (error) {
                    reject(error);
                    return;
                }
                resolve(stdout);
            });
        });
        darwinInfo.name = matchFirst(/^ProductName:\s+(.*)$/m, output);
        darwinInfo.version = matchFirst(/^ProductVersion:\s+(.*)$/m, output);
        darwinInfo.build = matchFirst(/^BuildVersion:\s+(.*)$/m, output);
    } catch (e) {
    // ignore
    }
    return darwinInfo;
}
/** Returns a distribution identifier to look up version callbacks. */ function getLinuxDistroId(name) {
    return name.split(' ')[0].toLowerCase();
}
/** Loads the Linux operating system context. */ async function getLinuxInfo() {
    // By default, we cannot assume anything about the distribution or Linux
    // version. `os.release()` returns the kernel version and we assume a generic
    // "Linux" name, which will be replaced down below.
    const linuxInfo = {
        kernel_version: os.release(),
        name: 'Linux'
    };
    try {
        // We start guessing the distribution by listing files in the /etc
        // directory. This is were most Linux distributions (except Knoppix) store
        // release files with certain distribution-dependent meta data. We search
        // for exactly one known file defined in `LINUX_DISTROS` and exit if none
        // are found. In case there are more than one file, we just stick with the
        // first one.
        const etcFiles = await readDirAsync('/etc');
        const distroFile = LINUX_DISTROS.find((file)=>etcFiles.includes(file.name));
        if (!distroFile) {
            return linuxInfo;
        }
        // Once that file is known, load its contents. To make searching in those
        // files easier, we lowercase the file contents. Since these files are
        // usually quite small, this should not allocate too much memory and we only
        // hold on to it for a very short amount of time.
        const distroPath = node_path.join('/etc', distroFile.name);
        const contents = (await readFileAsync(distroPath, {
            encoding: 'utf-8'
        })).toLowerCase();
        // Some Linux distributions store their release information in the same file
        // (e.g. RHEL and Centos). In those cases, we scan the file for an
        // identifier, that basically consists of the first word of the linux
        // distribution name (e.g. "red" for Red Hat). In case there is no match, we
        // just assume the first distribution in our list.
        const { distros } = distroFile;
        linuxInfo.name = distros.find((d)=>contents.indexOf(getLinuxDistroId(d)) >= 0) || distros[0];
        // Based on the found distribution, we can now compute the actual version
        // number. This is different for every distribution, so several strategies
        // are computed in `LINUX_VERSIONS`.
        const id = getLinuxDistroId(linuxInfo.name);
        linuxInfo.version = LINUX_VERSIONS[id]?.(contents);
    } catch (e) {
    // ignore
    }
    return linuxInfo;
}
/**
 * Grabs some information about hosting provider based on best effort.
 */ function getCloudResourceContext() {
    if (process.env.VERCEL) {
        // https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#system-environment-variables
        return {
            'cloud.provider': 'vercel',
            'cloud.region': process.env.VERCEL_REGION
        };
    } else if (process.env.AWS_REGION) {
        // https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html
        return {
            'cloud.provider': 'aws',
            'cloud.region': process.env.AWS_REGION,
            'cloud.platform': process.env.AWS_EXECUTION_ENV
        };
    } else if (process.env.GCP_PROJECT) {
        // https://cloud.google.com/composer/docs/how-to/managing/environment-variables#reserved_variables
        return {
            'cloud.provider': 'gcp'
        };
    } else if (process.env.ALIYUN_REGION_ID) {
        // TODO: find where I found these environment variables - at least gc.github.com returns something
        return {
            'cloud.provider': 'alibaba_cloud',
            'cloud.region': process.env.ALIYUN_REGION_ID
        };
    } else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) {
        // https://learn.microsoft.com/en-us/azure/app-service/reference-app-settings?tabs=kudu%2Cdotnet#app-environment
        return {
            'cloud.provider': 'azure',
            'cloud.region': process.env.REGION_NAME
        };
    } else if (process.env.IBM_CLOUD_REGION) {
        // TODO: find where I found these environment variables - at least gc.github.com returns something
        return {
            'cloud.provider': 'ibm_cloud',
            'cloud.region': process.env.IBM_CLOUD_REGION
        };
    } else if (process.env.TENCENTCLOUD_REGION) {
        // https://www.tencentcloud.com/document/product/583/32748
        return {
            'cloud.provider': 'tencent_cloud',
            'cloud.region': process.env.TENCENTCLOUD_REGION,
            'cloud.account.id': process.env.TENCENTCLOUD_APPID,
            'cloud.availability_zone': process.env.TENCENTCLOUD_ZONE
        };
    } else if (process.env.NETLIFY) {
        // https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
        return {
            'cloud.provider': 'netlify'
        };
    } else if (process.env.FLY_REGION) {
        // https://fly.io/docs/reference/runtime-environment/
        return {
            'cloud.provider': 'fly.io',
            'cloud.region': process.env.FLY_REGION
        };
    } else if (process.env.DYNO) {
        // https://devcenter.heroku.com/articles/dynos#local-environment-variables
        return {
            'cloud.provider': 'heroku'
        };
    } else {
        return undefined;
    }
}
exports.getAppContext = getAppContext;
exports.getDeviceContext = getDeviceContext;
exports.nodeContextIntegration = nodeContextIntegration;
exports.readDirAsync = readDirAsync;
exports.readFileAsync = readFileAsync; //# sourceMappingURL=context.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/contextlines.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_fs = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const node_readline = __turbopack_context__.r("[externals]/node:readline [external] (node:readline, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const LRU_FILE_CONTENTS_CACHE = new core.LRUMap(10);
const LRU_FILE_CONTENTS_FS_READ_FAILED = new core.LRUMap(20);
const DEFAULT_LINES_OF_CONTEXT = 7;
const INTEGRATION_NAME = 'ContextLines';
// Determines the upper bound of lineno/colno that we will attempt to read. Large colno values are likely to be
// minified code while large lineno values are likely to be bundled code.
// Exported for testing purposes.
const MAX_CONTEXTLINES_COLNO = 1000;
const MAX_CONTEXTLINES_LINENO = 10000;
/**
 * Get or init map value
 */ function emplace(map, key, contents) {
    const value = map.get(key);
    if (value === undefined) {
        map.set(key, contents);
        return contents;
    }
    return value;
}
/**
 * Determines if context lines should be skipped for a file.
 * - .min.(mjs|cjs|js) files are and not useful since they dont point to the original source
 * - node: prefixed modules are part of the runtime and cannot be resolved to a file
 * - data: skip json, wasm and inline js https://nodejs.org/api/esm.html#data-imports
 */ function shouldSkipContextLinesForFile(path) {
    // Test the most common prefix and extension first. These are the ones we
    // are most likely to see in user applications and are the ones we can break out of first.
    if (path.startsWith('node:')) return true;
    if (path.endsWith('.min.js')) return true;
    if (path.endsWith('.min.cjs')) return true;
    if (path.endsWith('.min.mjs')) return true;
    if (path.startsWith('data:')) return true;
    return false;
}
/**
 * Determines if we should skip contextlines based off the max lineno and colno values.
 */ function shouldSkipContextLinesForFrame(frame) {
    if (frame.lineno !== undefined && frame.lineno > MAX_CONTEXTLINES_LINENO) return true;
    if (frame.colno !== undefined && frame.colno > MAX_CONTEXTLINES_COLNO) return true;
    return false;
}
/**
 * Checks if we have all the contents that we need in the cache.
 */ function rangeExistsInContentCache(file, range) {
    const contents = LRU_FILE_CONTENTS_CACHE.get(file);
    if (contents === undefined) return false;
    for(let i = range[0]; i <= range[1]; i++){
        if (contents[i] === undefined) {
            return false;
        }
    }
    return true;
}
/**
 * Creates contiguous ranges of lines to read from a file. In the case where context lines overlap,
 * the ranges are merged to create a single range.
 */ function makeLineReaderRanges(lines, linecontext) {
    if (!lines.length) {
        return [];
    }
    let i = 0;
    const line = lines[0];
    if (typeof line !== 'number') {
        return [];
    }
    let current = makeContextRange(line, linecontext);
    const out = [];
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (i === lines.length - 1) {
            out.push(current);
            break;
        }
        // If the next line falls into the current range, extend the current range to lineno + linecontext.
        const next = lines[i + 1];
        if (typeof next !== 'number') {
            break;
        }
        if (next <= current[1]) {
            current[1] = next + linecontext;
        } else {
            out.push(current);
            current = makeContextRange(next, linecontext);
        }
        i++;
    }
    return out;
}
/**
 * Extracts lines from a file and stores them in a cache.
 */ function getContextLinesFromFile(path, ranges, output) {
    return new Promise((resolve, _reject)=>{
        // It is important *not* to have any async code between createInterface and the 'line' event listener
        // as it will cause the 'line' event to
        // be emitted before the listener is attached.
        const stream = node_fs.createReadStream(path);
        const lineReaded = node_readline.createInterface({
            input: stream
        });
        // We need to explicitly destroy the stream to prevent memory leaks,
        // removing the listeners on the readline interface is not enough.
        // See: https://github.com/nodejs/node/issues/9002 and https://github.com/getsentry/sentry-javascript/issues/14892
        function destroyStreamAndResolve() {
            stream.destroy();
            resolve();
        }
        // Init at zero and increment at the start of the loop because lines are 1 indexed.
        let lineNumber = 0;
        let currentRangeIndex = 0;
        const range = ranges[currentRangeIndex];
        if (range === undefined) {
            // We should never reach this point, but if we do, we should resolve the promise to prevent it from hanging.
            destroyStreamAndResolve();
            return;
        }
        let rangeStart = range[0];
        let rangeEnd = range[1];
        // We use this inside Promise.all, so we need to resolve the promise even if there is an error
        // to prevent Promise.all from short circuiting the rest.
        function onStreamError(e) {
            // Mark file path as failed to read and prevent multiple read attempts.
            LRU_FILE_CONTENTS_FS_READ_FAILED.set(path, 1);
            debugBuild.DEBUG_BUILD && core.logger.error(`Failed to read file: ${path}. Error: ${e}`);
            lineReaded.close();
            lineReaded.removeAllListeners();
            destroyStreamAndResolve();
        }
        // We need to handle the error event to prevent the process from crashing in < Node 16
        // https://github.com/nodejs/node/pull/31603
        stream.on('error', onStreamError);
        lineReaded.on('error', onStreamError);
        lineReaded.on('close', destroyStreamAndResolve);
        lineReaded.on('line', (line)=>{
            lineNumber++;
            if (lineNumber < rangeStart) return;
            // !Warning: This mutates the cache by storing the snipped line into the cache.
            output[lineNumber] = core.snipLine(line, 0);
            if (lineNumber >= rangeEnd) {
                if (currentRangeIndex === ranges.length - 1) {
                    // We need to close the file stream and remove listeners, else the reader will continue to run our listener;
                    lineReaded.close();
                    lineReaded.removeAllListeners();
                    return;
                }
                currentRangeIndex++;
                const range = ranges[currentRangeIndex];
                if (range === undefined) {
                    // This should never happen as it means we have a bug in the context.
                    lineReaded.close();
                    lineReaded.removeAllListeners();
                    return;
                }
                rangeStart = range[0];
                rangeEnd = range[1];
            }
        });
    });
}
/**
 * Adds surrounding (context) lines of the line that an exception occurred on to the event.
 * This is done by reading the file line by line and extracting the lines. The extracted lines are stored in
 * a cache to prevent multiple reads of the same file. Failures to read a file are similarly cached to prevent multiple
 * failing reads from happening.
 */ /* eslint-disable complexity */ async function addSourceContext(event, contextLines) {
    // keep a lookup map of which files we've already enqueued to read,
    // so we don't enqueue the same file multiple times which would cause multiple i/o reads
    const filesToLines = {};
    if (contextLines > 0 && event.exception?.values) {
        for (const exception of event.exception.values){
            if (!exception.stacktrace?.frames?.length) {
                continue;
            }
            // Maps preserve insertion order, so we iterate in reverse, starting at the
            // outermost frame and closer to where the exception has occurred (poor mans priority)
            for(let i = exception.stacktrace.frames.length - 1; i >= 0; i--){
                const frame = exception.stacktrace.frames[i];
                const filename = frame?.filename;
                if (!frame || typeof filename !== 'string' || typeof frame.lineno !== 'number' || shouldSkipContextLinesForFile(filename) || shouldSkipContextLinesForFrame(frame)) {
                    continue;
                }
                const filesToLinesOutput = filesToLines[filename];
                if (!filesToLinesOutput) filesToLines[filename] = [];
                // @ts-expect-error this is defined above
                filesToLines[filename].push(frame.lineno);
            }
        }
    }
    const files = Object.keys(filesToLines);
    if (files.length == 0) {
        return event;
    }
    const readlinePromises = [];
    for (const file of files){
        // If we failed to read this before, dont try reading it again.
        if (LRU_FILE_CONTENTS_FS_READ_FAILED.get(file)) {
            continue;
        }
        const filesToLineRanges = filesToLines[file];
        if (!filesToLineRanges) {
            continue;
        }
        // Sort ranges so that they are sorted by line increasing order and match how the file is read.
        filesToLineRanges.sort((a, b)=>a - b);
        // Check if the contents are already in the cache and if we can avoid reading the file again.
        const ranges = makeLineReaderRanges(filesToLineRanges, contextLines);
        if (ranges.every((r)=>rangeExistsInContentCache(file, r))) {
            continue;
        }
        const cache = emplace(LRU_FILE_CONTENTS_CACHE, file, {});
        readlinePromises.push(getContextLinesFromFile(file, ranges, cache));
    }
    // The promise rejections are caught in order to prevent them from short circuiting Promise.all
    await Promise.all(readlinePromises).catch(()=>{
        debugBuild.DEBUG_BUILD && core.logger.log('Failed to read one or more source files and resolve context lines');
    });
    // Perform the same loop as above, but this time we can assume all files are in the cache
    // and attempt to add source context to frames.
    if (contextLines > 0 && event.exception?.values) {
        for (const exception of event.exception.values){
            if (exception.stacktrace?.frames && exception.stacktrace.frames.length > 0) {
                addSourceContextToFrames(exception.stacktrace.frames, contextLines, LRU_FILE_CONTENTS_CACHE);
            }
        }
    }
    return event;
}
/* eslint-enable complexity */ /** Adds context lines to frames */ function addSourceContextToFrames(frames, contextLines, cache) {
    for (const frame of frames){
        // Only add context if we have a filename and it hasn't already been added
        if (frame.filename && frame.context_line === undefined && typeof frame.lineno === 'number') {
            const contents = cache.get(frame.filename);
            if (contents === undefined) {
                continue;
            }
            addContextToFrame(frame.lineno, frame, contextLines, contents);
        }
    }
}
/**
 * Clears the context lines from a frame, used to reset a frame to its original state
 * if we fail to resolve all context lines for it.
 */ function clearLineContext(frame) {
    delete frame.pre_context;
    delete frame.context_line;
    delete frame.post_context;
}
/**
 * Resolves context lines before and after the given line number and appends them to the frame;
 */ function addContextToFrame(lineno, frame, contextLines, contents) {
    // When there is no line number in the frame, attaching context is nonsensical and will even break grouping.
    // We already check for lineno before calling this, but since StackFrame lineno ism optional, we check it again.
    if (frame.lineno === undefined || contents === undefined) {
        debugBuild.DEBUG_BUILD && core.logger.error('Cannot resolve context for frame with no lineno or file contents');
        return;
    }
    frame.pre_context = [];
    for(let i = makeRangeStart(lineno, contextLines); i < lineno; i++){
        // We always expect the start context as line numbers cannot be negative. If we dont find a line, then
        // something went wrong somewhere. Clear the context and return without adding any linecontext.
        const line = contents[i];
        if (line === undefined) {
            clearLineContext(frame);
            debugBuild.DEBUG_BUILD && core.logger.error(`Could not find line ${i} in file ${frame.filename}`);
            return;
        }
        frame.pre_context.push(line);
    }
    // We should always have the context line. If we dont, something went wrong, so we clear the context and return
    // without adding any linecontext.
    if (contents[lineno] === undefined) {
        clearLineContext(frame);
        debugBuild.DEBUG_BUILD && core.logger.error(`Could not find line ${lineno} in file ${frame.filename}`);
        return;
    }
    frame.context_line = contents[lineno];
    const end = makeRangeEnd(lineno, contextLines);
    frame.post_context = [];
    for(let i = lineno + 1; i <= end; i++){
        // Since we dont track when the file ends, we cant clear the context if we dont find a line as it could
        // just be that we reached the end of the file.
        const line = contents[i];
        if (line === undefined) {
            break;
        }
        frame.post_context.push(line);
    }
}
// Helper functions for generating line context ranges. They take a line number and the number of lines of context to
// include before and after the line and generate an inclusive range of indices.
// Compute inclusive end context range
function makeRangeStart(line, linecontext) {
    return Math.max(1, line - linecontext);
}
// Compute inclusive start context range
function makeRangeEnd(line, linecontext) {
    return line + linecontext;
}
// Determine start and end indices for context range (inclusive);
function makeContextRange(line, linecontext) {
    return [
        makeRangeStart(line, linecontext),
        makeRangeEnd(line, linecontext)
    ];
}
/** Exported only for tests, as a type-safe variant. */ const _contextLinesIntegration = (options = {})=>{
    const contextLines = options.frameContextLines !== undefined ? options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;
    return {
        name: INTEGRATION_NAME,
        processEvent (event) {
            return addSourceContext(event, contextLines);
        }
    };
};
/**
 * Capture the lines before and after the frame's context.
 */ const contextLinesIntegration = core.defineIntegration(_contextLinesIntegration);
exports.MAX_CONTEXTLINES_COLNO = MAX_CONTEXTLINES_COLNO;
exports.MAX_CONTEXTLINES_LINENO = MAX_CONTEXTLINES_LINENO;
exports._contextLinesIntegration = _contextLinesIntegration;
exports.addContextToFrame = addContextToFrame;
exports.contextLinesIntegration = contextLinesIntegration; //# sourceMappingURL=contextlines.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/debug.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
let cachedDebuggerEnabled;
/**
 * Was the debugger enabled when this function was first called?
 */ async function isDebuggerEnabled() {
    if (cachedDebuggerEnabled === undefined) {
        try {
            // Node can be built without inspector support
            const inspector = await __turbopack_context__.r("[externals]/node:inspector [external] (node:inspector, cjs, async loader)")(__turbopack_context__.i);
            cachedDebuggerEnabled = !!inspector.url();
        } catch (_) {
            cachedDebuggerEnabled = false;
        }
    }
    return cachedDebuggerEnabled;
}
exports.isDebuggerEnabled = isDebuggerEnabled; //# sourceMappingURL=debug.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/common.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
/**
 * The key used to store the local variables on the error object.
 */ const LOCAL_VARIABLES_KEY = '__SENTRY_ERROR_LOCAL_VARIABLES__';
/**
 * Creates a rate limiter that will call the disable callback when the rate limit is reached and the enable callback
 * when a timeout has occurred.
 * @param maxPerSecond Maximum number of calls per second
 * @param enable Callback to enable capture
 * @param disable Callback to disable capture
 * @returns A function to call to increment the rate limiter count
 */ function createRateLimiter(maxPerSecond, enable, disable) {
    let count = 0;
    let retrySeconds = 5;
    let disabledTimeout = 0;
    setInterval(()=>{
        if (disabledTimeout === 0) {
            if (count > maxPerSecond) {
                retrySeconds *= 2;
                disable(retrySeconds);
                // Cap at one day
                if (retrySeconds > 86400) {
                    retrySeconds = 86400;
                }
                disabledTimeout = retrySeconds;
            }
        } else {
            disabledTimeout -= 1;
            if (disabledTimeout === 0) {
                enable();
            }
        }
        count = 0;
    }, 1000).unref();
    return ()=>{
        count += 1;
    };
}
// Add types for the exception event data
/** Could this be an anonymous function? */ function isAnonymous(name) {
    return name !== undefined && (name.length === 0 || name === '?' || name === '<anonymous>');
}
/** Do the function names appear to match? */ function functionNamesMatch(a, b) {
    return a === b || isAnonymous(a) && isAnonymous(b);
}
exports.LOCAL_VARIABLES_KEY = LOCAL_VARIABLES_KEY;
exports.createRateLimiter = createRateLimiter;
exports.functionNamesMatch = functionNamesMatch;
exports.isAnonymous = isAnonymous; //# sourceMappingURL=common.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/local-variables-async.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_worker_threads = __turbopack_context__.r("[externals]/node:worker_threads [external] (node:worker_threads, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debug = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/debug.js [app-ssr] (ecmascript)");
const common = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/common.js [app-ssr] (ecmascript)");
// This string is a placeholder that gets overwritten with the worker code.
const base64WorkerScript = 'LyohIEBzZW50cnkvbm9kZSA5LjI4LjEgKDExMWRiNGEpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyBlfWZyb20ibm9kZTppbnNwZWN0b3IvcHJvbWlzZXMiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIHR9ZnJvbSJub2RlOndvcmtlcl90aHJlYWRzIjtjb25zdCBuPSJ1bmRlZmluZWQiPT10eXBlb2YgX19TRU5UUllfREVCVUdfX3x8X19TRU5UUllfREVCVUdfXyxvPSI5LjI4LjEiLGk9Z2xvYmFsVGhpcztjb25zdCBhPVsiZGVidWciLCJpbmZvIiwid2FybiIsImVycm9yIiwibG9nIiwiYXNzZXJ0IiwidHJhY2UiXSxzPXt9O2Z1bmN0aW9uIGMoZSl7aWYoISgiY29uc29sZSJpbiBpKSlyZXR1cm4gZSgpO2NvbnN0IHQ9aS5jb25zb2xlLG49e30sbz1PYmplY3Qua2V5cyhzKTtvLmZvckVhY2goKGU9Pntjb25zdCBvPXNbZV07bltlXT10W2VdLHRbZV09b30pKTt0cnl7cmV0dXJuIGUoKX1maW5hbGx5e28uZm9yRWFjaCgoZT0+e3RbZV09bltlXX0pKX19IWZ1bmN0aW9uKGUsdCxuPWkpe2NvbnN0IGE9bi5fX1NFTlRSWV9fPW4uX19TRU5UUllfX3x8e30scz1hW29dPWFbb118fHt9O3NbZV18fChzW2VdPXQoKSl9KCJsb2dnZXIiLChmdW5jdGlvbigpe2xldCBlPSExO2NvbnN0IHQ9e2VuYWJsZTooKT0+e2U9ITB9LGRpc2FibGU6KCk9PntlPSExfSxpc0VuYWJsZWQ6KCk9PmV9O3JldHVybiBuP2EuZm9yRWFjaCgobj0+e3Rbbl09KC4uLnQpPT57ZSYmYygoKCk9PntpLmNvbnNvbGVbbl0oYFNlbnRyeSBMb2dnZXIgWyR7bn1dOmAsLi4udCl9KSl9fSkpOmEuZm9yRWFjaCgoZT0+e3RbZV09KCk9Pnt9fSkpLHR9KSk7Y29uc3Qgcj0iX19TRU5UUllfRVJST1JfTE9DQUxfVkFSSUFCTEVTX18iO2NvbnN0IHU9dDtmdW5jdGlvbiBsKC4uLmUpe3UuZGVidWcmJmMoKCgpPT5jb25zb2xlLmxvZygiW0xvY2FsVmFyaWFibGVzIFdvcmtlcl0iLC4uLmUpKSl9YXN5bmMgZnVuY3Rpb24gZihlLHQsbixvKXtjb25zdCBpPWF3YWl0IGUucG9zdCgiUnVudGltZS5nZXRQcm9wZXJ0aWVzIix7b2JqZWN0SWQ6dCxvd25Qcm9wZXJ0aWVzOiEwfSk7b1tuXT1pLnJlc3VsdC5maWx0ZXIoKGU9PiJsZW5ndGgiIT09ZS5uYW1lJiYhaXNOYU4ocGFyc2VJbnQoZS5uYW1lLDEwKSkpKS5zb3J0KCgoZSx0KT0+cGFyc2VJbnQoZS5uYW1lLDEwKS1wYXJzZUludCh0Lm5hbWUsMTApKSkubWFwKChlPT5lLnZhbHVlPy52YWx1ZSkpfWFzeW5jIGZ1bmN0aW9uIGcoZSx0LG4sbyl7Y29uc3QgaT1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pO29bbl09aS5yZXN1bHQubWFwKChlPT5bZS5uYW1lLGUudmFsdWU/LnZhbHVlXSkpLnJlZHVjZSgoKGUsW3Qsbl0pPT4oZVt0XT1uLGUpKSx7fSl9ZnVuY3Rpb24gZChlLHQpe2UudmFsdWUmJigidmFsdWUiaW4gZS52YWx1ZT92b2lkIDA9PT1lLnZhbHVlLnZhbHVlfHxudWxsPT09ZS52YWx1ZS52YWx1ZT90W2UubmFtZV09YDwke2UudmFsdWUudmFsdWV9PmA6dFtlLm5hbWVdPWUudmFsdWUudmFsdWU6ImRlc2NyaXB0aW9uImluIGUudmFsdWUmJiJmdW5jdGlvbiIhPT1lLnZhbHVlLnR5cGU/dFtlLm5hbWVdPWA8JHtlLnZhbHVlLmRlc2NyaXB0aW9ufT5gOiJ1bmRlZmluZWQiPT09ZS52YWx1ZS50eXBlJiYodFtlLm5hbWVdPSI8dW5kZWZpbmVkPiIpKX1hc3luYyBmdW5jdGlvbiBiKGUsdCl7Y29uc3Qgbj1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pLG89e307Zm9yKGNvbnN0IHQgb2Ygbi5yZXN1bHQpaWYodC52YWx1ZT8ub2JqZWN0SWQmJiJBcnJheSI9PT10LnZhbHVlLmNsYXNzTmFtZSl7Y29uc3Qgbj10LnZhbHVlLm9iamVjdElkO2F3YWl0IGYoZSxuLHQubmFtZSxvKX1lbHNlIGlmKHQudmFsdWU/Lm9iamVjdElkJiYiT2JqZWN0Ij09PXQudmFsdWUuY2xhc3NOYW1lKXtjb25zdCBuPXQudmFsdWUub2JqZWN0SWQ7YXdhaXQgZyhlLG4sdC5uYW1lLG8pfWVsc2UgdC52YWx1ZSYmZCh0LG8pO3JldHVybiBvfWxldCBwOyhhc3luYyBmdW5jdGlvbigpe2NvbnN0IHQ9bmV3IGU7dC5jb25uZWN0VG9NYWluVGhyZWFkKCksbCgiQ29ubmVjdGVkIHRvIG1haW4gdGhyZWFkIik7bGV0IG49ITE7dC5vbigiRGVidWdnZXIucmVzdW1lZCIsKCgpPT57bj0hMX0pKSx0Lm9uKCJEZWJ1Z2dlci5wYXVzZWQiLChlPT57bj0hMCxhc3luYyBmdW5jdGlvbihlLHtyZWFzb246dCxkYXRhOntvYmplY3RJZDpufSxjYWxsRnJhbWVzOm99KXtpZigiZXhjZXB0aW9uIiE9PXQmJiJwcm9taXNlUmVqZWN0aW9uIiE9PXQpcmV0dXJuO2lmKHA/LigpLG51bGw9PW4pcmV0dXJuO2NvbnN0IGk9W107Zm9yKGxldCB0PTA7dDxvLmxlbmd0aDt0Kyspe2NvbnN0e3Njb3BlQ2hhaW46bixmdW5jdGlvbk5hbWU6YSx0aGlzOnN9PW9bdF0sYz1uLmZpbmQoKGU9PiJsb2NhbCI9PT1lLnR5cGUpKSxyPSJnbG9iYWwiIT09cy5jbGFzc05hbWUmJnMuY2xhc3NOYW1lP2Ake3MuY2xhc3NOYW1lfS4ke2F9YDphO2lmKHZvaWQgMD09PWM/Lm9iamVjdC5vYmplY3RJZClpW3RdPXtmdW5jdGlvbjpyfTtlbHNle2NvbnN0IG49YXdhaXQgYihlLGMub2JqZWN0Lm9iamVjdElkKTtpW3RdPXtmdW5jdGlvbjpyLHZhcnM6bn19fWF3YWl0IGUucG9zdCgiUnVudGltZS5jYWxsRnVuY3Rpb25PbiIse2Z1bmN0aW9uRGVjbGFyYXRpb246YGZ1bmN0aW9uKCkgeyB0aGlzLiR7cn0gPSB0aGlzLiR7cn0gfHwgJHtKU09OLnN0cmluZ2lmeShpKX07IH1gLHNpbGVudDohMCxvYmplY3RJZDpufSksYXdhaXQgZS5wb3N0KCJSdW50aW1lLnJlbGVhc2VPYmplY3QiLHtvYmplY3RJZDpufSl9KHQsZS5wYXJhbXMpLnRoZW4oKGFzeW5jKCk9PntuJiZhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpfSksKGFzeW5jIGU9PntuJiZhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpfSkpfSkpLGF3YWl0IHQucG9zdCgiRGVidWdnZXIuZW5hYmxlIik7Y29uc3Qgbz0hMSE9PXUuY2FwdHVyZUFsbEV4Y2VwdGlvbnM7aWYoYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOm8/ImFsbCI6InVuY2F1Z2h0In0pLG8pe2NvbnN0IGU9dS5tYXhFeGNlcHRpb25zUGVyU2Vjb25kfHw1MDtwPWZ1bmN0aW9uKGUsdCxuKXtsZXQgbz0wLGk9NSxhPTA7cmV0dXJuIHNldEludGVydmFsKCgoKT0+ezA9PT1hP28+ZSYmKGkqPTIsbihpKSxpPjg2NDAwJiYoaT04NjQwMCksYT1pKTooYS09MSwwPT09YSYmdCgpKSxvPTB9KSwxZTMpLnVucmVmKCksKCk9PntvKz0xfX0oZSwoYXN5bmMoKT0+e2woIlJhdGUtbGltaXQgbGlmdGVkLiIpLGF3YWl0IHQucG9zdCgiRGVidWdnZXIuc2V0UGF1c2VPbkV4Y2VwdGlvbnMiLHtzdGF0ZToiYWxsIn0pfSksKGFzeW5jIGU9PntsKGBSYXRlLWxpbWl0IGV4Y2VlZGVkLiBEaXNhYmxpbmcgY2FwdHVyaW5nIG9mIGNhdWdodCBleGNlcHRpb25zIGZvciAke2V9IHNlY29uZHMuYCksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJ1bmNhdWdodCJ9KX0pKX19KSgpLmNhdGNoKChlPT57bCgiRmFpbGVkIHRvIHN0YXJ0IGRlYnVnZ2VyIixlKX0pKSxzZXRJbnRlcnZhbCgoKCk9Pnt9KSwxZTQpOw==';
function log(...args) {
    core.logger.log('[LocalVariables]', ...args);
}
/**
 * Adds local variables to exception frames
 */ const localVariablesAsyncIntegration = core.defineIntegration((integrationOptions = {})=>{
    function addLocalVariablesToException(exception, localVariables) {
        // Filter out frames where the function name is `new Promise` since these are in the error.stack frames
        // but do not appear in the debugger call frames
        const frames = (exception.stacktrace?.frames || []).filter((frame)=>frame.function !== 'new Promise');
        for(let i = 0; i < frames.length; i++){
            // Sentry frames are in reverse order
            const frameIndex = frames.length - i - 1;
            const frameLocalVariables = localVariables[i];
            const frame = frames[frameIndex];
            if (!frame || !frameLocalVariables) {
                break;
            }
            if (// We need to have vars to add
            frameLocalVariables.vars === undefined || // We're not interested in frames that are not in_app because the vars are not relevant
            frame.in_app === false || // The function names need to match
            !common.functionNamesMatch(frame.function, frameLocalVariables.function)) {
                continue;
            }
            frame.vars = frameLocalVariables.vars;
        }
    }
    function addLocalVariablesToEvent(event, hint) {
        if (hint.originalException && typeof hint.originalException === 'object' && common.LOCAL_VARIABLES_KEY in hint.originalException && Array.isArray(hint.originalException[common.LOCAL_VARIABLES_KEY])) {
            for (const exception of event.exception?.values || []){
                addLocalVariablesToException(exception, hint.originalException[common.LOCAL_VARIABLES_KEY]);
            }
            hint.originalException[common.LOCAL_VARIABLES_KEY] = undefined;
        }
        return event;
    }
    async function startInspector() {
        // We load inspector dynamically because on some platforms Node is built without inspector support
        const inspector = await __turbopack_context__.r("[externals]/node:inspector [external] (node:inspector, cjs, async loader)")(__turbopack_context__.i);
        if (!inspector.url()) {
            inspector.open(0);
        }
    }
    function startWorker(options) {
        const worker = new node_worker_threads.Worker(new URL(`data:application/javascript;base64,${base64WorkerScript}`), {
            workerData: options,
            // We don't want any Node args to be passed to the worker
            execArgv: [],
            env: {
                ...process.env,
                NODE_OPTIONS: undefined
            }
        });
        process.on('exit', ()=>{
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            worker.terminate();
        });
        worker.once('error', (err)=>{
            log('Worker error', err);
        });
        worker.once('exit', (code)=>{
            log('Worker exit', code);
        });
        // Ensure this thread can't block app exit
        worker.unref();
    }
    return {
        name: 'LocalVariablesAsync',
        async setup (client) {
            const clientOptions = client.getOptions();
            if (!clientOptions.includeLocalVariables) {
                return;
            }
            if (await debug.isDebuggerEnabled()) {
                core.logger.warn('Local variables capture has been disabled because the debugger was already enabled');
                return;
            }
            const options = {
                ...integrationOptions,
                debug: core.logger.isEnabled()
            };
            startInspector().then(()=>{
                try {
                    startWorker(options);
                } catch (e) {
                    core.logger.error('Failed to start worker', e);
                }
            }, (e)=>{
                core.logger.error('Failed to start inspector', e);
            });
        },
        processEvent (event, hint) {
            return addLocalVariablesToEvent(event, hint);
        }
    };
});
exports.base64WorkerScript = base64WorkerScript;
exports.localVariablesAsyncIntegration = localVariablesAsyncIntegration; //# sourceMappingURL=local-variables-async.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/local-variables-sync.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const nodeVersion = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)");
const debug = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/debug.js [app-ssr] (ecmascript)");
const common = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/common.js [app-ssr] (ecmascript)");
/** Creates a unique hash from stack frames */ function hashFrames(frames) {
    if (frames === undefined) {
        return;
    }
    // Only hash the 10 most recent frames (ie. the last 10)
    return frames.slice(-10).reduce((acc, frame)=>`${acc},${frame.function},${frame.lineno},${frame.colno}`, '');
}
/**
 * We use the stack parser to create a unique hash from the exception stack trace
 * This is used to lookup vars when the exception passes through the event processor
 */ function hashFromStack(stackParser, stack) {
    if (stack === undefined) {
        return undefined;
    }
    return hashFrames(stackParser(stack, 1));
}
/** Creates a container for callbacks to be called sequentially */ function createCallbackList(complete) {
    // A collection of callbacks to be executed last to first
    let callbacks = [];
    let completedCalled = false;
    function checkedComplete(result) {
        callbacks = [];
        if (completedCalled) {
            return;
        }
        completedCalled = true;
        complete(result);
    }
    // complete should be called last
    callbacks.push(checkedComplete);
    function add(fn) {
        callbacks.push(fn);
    }
    function next(result) {
        const popped = callbacks.pop() || checkedComplete;
        try {
            popped(result);
        } catch (_) {
            // If there is an error, we still want to call the complete callback
            checkedComplete(result);
        }
    }
    return {
        add,
        next
    };
}
/**
 * Promise API is available as `Experimental` and in Node 19 only.
 *
 * Callback-based API is `Stable` since v14 and `Experimental` since v8.
 * Because of that, we are creating our own `AsyncSession` class.
 *
 * https://nodejs.org/docs/latest-v19.x/api/inspector.html#promises-api
 * https://nodejs.org/docs/latest-v14.x/api/inspector.html
 */ class AsyncSession {
    /** Throws if inspector API is not available */ constructor(_session){
        this._session = _session;
    //
    }
    static async create(orDefault) {
        if (orDefault) {
            return orDefault;
        }
        const inspector = await __turbopack_context__.r("[externals]/node:inspector [external] (node:inspector, cjs, async loader)")(__turbopack_context__.i);
        return new AsyncSession(new inspector.Session());
    }
    /** @inheritdoc */ configureAndConnect(onPause, captureAll) {
        this._session.connect();
        this._session.on('Debugger.paused', (event)=>{
            onPause(event, ()=>{
                // After the pause work is complete, resume execution or the exception context memory is leaked
                this._session.post('Debugger.resume');
            });
        });
        this._session.post('Debugger.enable');
        this._session.post('Debugger.setPauseOnExceptions', {
            state: captureAll ? 'all' : 'uncaught'
        });
    }
    setPauseOnExceptions(captureAll) {
        this._session.post('Debugger.setPauseOnExceptions', {
            state: captureAll ? 'all' : 'uncaught'
        });
    }
    /** @inheritdoc */ getLocalVariables(objectId, complete) {
        this._getProperties(objectId, (props)=>{
            const { add, next } = createCallbackList(complete);
            for (const prop of props){
                if (prop.value?.objectId && prop.value.className === 'Array') {
                    const id = prop.value.objectId;
                    add((vars)=>this._unrollArray(id, prop.name, vars, next));
                } else if (prop.value?.objectId && prop.value.className === 'Object') {
                    const id = prop.value.objectId;
                    add((vars)=>this._unrollObject(id, prop.name, vars, next));
                } else if (prop.value) {
                    add((vars)=>this._unrollOther(prop, vars, next));
                }
            }
            next({});
        });
    }
    /**
   * Gets all the PropertyDescriptors of an object
   */ _getProperties(objectId, next) {
        this._session.post('Runtime.getProperties', {
            objectId,
            ownProperties: true
        }, (err, params)=>{
            if (err) {
                next([]);
            } else {
                next(params.result);
            }
        });
    }
    /**
   * Unrolls an array property
   */ _unrollArray(objectId, name, vars, next) {
        this._getProperties(objectId, (props)=>{
            vars[name] = props.filter((v)=>v.name !== 'length' && !isNaN(parseInt(v.name, 10))).sort((a, b)=>parseInt(a.name, 10) - parseInt(b.name, 10)).map((v)=>v.value?.value);
            next(vars);
        });
    }
    /**
   * Unrolls an object property
   */ _unrollObject(objectId, name, vars, next) {
        this._getProperties(objectId, (props)=>{
            vars[name] = props.map((v)=>[
                    v.name,
                    v.value?.value
                ]).reduce((obj, [key, val])=>{
                obj[key] = val;
                return obj;
            }, {});
            next(vars);
        });
    }
    /**
   * Unrolls other properties
   */ _unrollOther(prop, vars, next) {
        if (prop.value) {
            if ('value' in prop.value) {
                if (prop.value.value === undefined || prop.value.value === null) {
                    vars[prop.name] = `<${prop.value.value}>`;
                } else {
                    vars[prop.name] = prop.value.value;
                }
            } else if ('description' in prop.value && prop.value.type !== 'function') {
                vars[prop.name] = `<${prop.value.description}>`;
            } else if (prop.value.type === 'undefined') {
                vars[prop.name] = '<undefined>';
            }
        }
        next(vars);
    }
}
const INTEGRATION_NAME = 'LocalVariables';
/**
 * Adds local variables to exception frames
 */ const _localVariablesSyncIntegration = (options = {}, sessionOverride)=>{
    const cachedFrames = new core.LRUMap(20);
    let rateLimiter;
    let shouldProcessEvent = false;
    function addLocalVariablesToException(exception) {
        const hash = hashFrames(exception.stacktrace?.frames);
        if (hash === undefined) {
            return;
        }
        // Check if we have local variables for an exception that matches the hash
        // remove is identical to get but also removes the entry from the cache
        const cachedFrame = cachedFrames.remove(hash);
        if (cachedFrame === undefined) {
            return;
        }
        // Filter out frames where the function name is `new Promise` since these are in the error.stack frames
        // but do not appear in the debugger call frames
        const frames = (exception.stacktrace?.frames || []).filter((frame)=>frame.function !== 'new Promise');
        for(let i = 0; i < frames.length; i++){
            // Sentry frames are in reverse order
            const frameIndex = frames.length - i - 1;
            const cachedFrameVariable = cachedFrame[i];
            const frameVariable = frames[frameIndex];
            // Drop out if we run out of frames to match up
            if (!frameVariable || !cachedFrameVariable) {
                break;
            }
            if (// We need to have vars to add
            cachedFrameVariable.vars === undefined || // We're not interested in frames that are not in_app because the vars are not relevant
            frameVariable.in_app === false || // The function names need to match
            !common.functionNamesMatch(frameVariable.function, cachedFrameVariable.function)) {
                continue;
            }
            frameVariable.vars = cachedFrameVariable.vars;
        }
    }
    function addLocalVariablesToEvent(event) {
        for (const exception of event.exception?.values || []){
            addLocalVariablesToException(exception);
        }
        return event;
    }
    return {
        name: INTEGRATION_NAME,
        async setupOnce () {
            const client = core.getClient();
            const clientOptions = client?.getOptions();
            if (!clientOptions?.includeLocalVariables) {
                return;
            }
            // Only setup this integration if the Node version is >= v18
            // https://github.com/getsentry/sentry-javascript/issues/7697
            const unsupportedNodeVersion = nodeVersion.NODE_MAJOR < 18;
            if (unsupportedNodeVersion) {
                core.logger.log('The `LocalVariables` integration is only supported on Node >= v18.');
                return;
            }
            if (await debug.isDebuggerEnabled()) {
                core.logger.warn('Local variables capture has been disabled because the debugger was already enabled');
                return;
            }
            AsyncSession.create(sessionOverride).then((session)=>{
                function handlePaused(stackParser, { params: { reason, data, callFrames } }, complete) {
                    if (reason !== 'exception' && reason !== 'promiseRejection') {
                        complete();
                        return;
                    }
                    rateLimiter?.();
                    // data.description contains the original error.stack
                    const exceptionHash = hashFromStack(stackParser, data.description);
                    if (exceptionHash == undefined) {
                        complete();
                        return;
                    }
                    const { add, next } = createCallbackList((frames)=>{
                        cachedFrames.set(exceptionHash, frames);
                        complete();
                    });
                    // Because we're queuing up and making all these calls synchronously, we can potentially overflow the stack
                    // For this reason we only attempt to get local variables for the first 5 frames
                    for(let i = 0; i < Math.min(callFrames.length, 5); i++){
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        const { scopeChain, functionName, this: obj } = callFrames[i];
                        const localScope = scopeChain.find((scope)=>scope.type === 'local');
                        // obj.className is undefined in ESM modules
                        const fn = obj.className === 'global' || !obj.className ? functionName : `${obj.className}.${functionName}`;
                        if (localScope?.object.objectId === undefined) {
                            add((frames)=>{
                                frames[i] = {
                                    function: fn
                                };
                                next(frames);
                            });
                        } else {
                            const id = localScope.object.objectId;
                            add((frames)=>session.getLocalVariables(id, (vars)=>{
                                    frames[i] = {
                                        function: fn,
                                        vars
                                    };
                                    next(frames);
                                }));
                        }
                    }
                    next([]);
                }
                const captureAll = options.captureAllExceptions !== false;
                session.configureAndConnect((ev, complete)=>handlePaused(clientOptions.stackParser, ev, complete), captureAll);
                if (captureAll) {
                    const max = options.maxExceptionsPerSecond || 50;
                    rateLimiter = common.createRateLimiter(max, ()=>{
                        core.logger.log('Local variables rate-limit lifted.');
                        session.setPauseOnExceptions(true);
                    }, (seconds)=>{
                        core.logger.log(`Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${seconds} seconds.`);
                        session.setPauseOnExceptions(false);
                    });
                }
                shouldProcessEvent = true;
            }, (error)=>{
                core.logger.log('The `LocalVariables` integration failed to start.', error);
            });
        },
        processEvent (event) {
            if (shouldProcessEvent) {
                return addLocalVariablesToEvent(event);
            }
            return event;
        },
        // These are entirely for testing
        _getCachedFramesCount () {
            return cachedFrames.size;
        },
        _getFirstCachedFrame () {
            return cachedFrames.values()[0];
        }
    };
};
/**
 * Adds local variables to exception frames.
 */ const localVariablesSyncIntegration = core.defineIntegration(_localVariablesSyncIntegration);
exports.createCallbackList = createCallbackList;
exports.hashFrames = hashFrames;
exports.hashFromStack = hashFromStack;
exports.localVariablesSyncIntegration = localVariablesSyncIntegration; //# sourceMappingURL=local-variables-sync.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const nodeVersion = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)");
const localVariablesAsync = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/local-variables-async.js [app-ssr] (ecmascript)");
const localVariablesSync = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/local-variables-sync.js [app-ssr] (ecmascript)");
const localVariablesIntegration = (options = {})=>{
    return nodeVersion.NODE_VERSION.major < 19 ? localVariablesSync.localVariablesSyncIntegration(options) : localVariablesAsync.localVariablesAsyncIntegration(options);
};
exports.localVariablesIntegration = localVariablesIntegration; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/commonjs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
/** Detect CommonJS. */ function isCjs() {
    try {
        return ("TURBOPACK compile-time value", "object") !== 'undefined' && typeof module.exports !== 'undefined';
    } catch  {
        return false;
    }
}
exports.isCjs = isCjs; //# sourceMappingURL=commonjs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/modules.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_fs = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const node_path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const commonjs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/commonjs.js [app-ssr] (ecmascript)");
let moduleCache;
const INTEGRATION_NAME = 'Modules';
const _modulesIntegration = ()=>{
    // This integration only works in CJS contexts
    if (!commonjs.isCjs()) {
        debugBuild.DEBUG_BUILD && core.logger.warn('modulesIntegration only works in CommonJS (CJS) environments. Remove this integration if you are using ESM.');
        return {
            name: INTEGRATION_NAME
        };
    }
    return {
        name: INTEGRATION_NAME,
        processEvent (event) {
            event.modules = {
                ...event.modules,
                ..._getModules()
            };
            return event;
        }
    };
};
/**
 * Add node modules / packages to the event.
 *
 * Only works in CommonJS (CJS) environments.
 */ const modulesIntegration = core.defineIntegration(_modulesIntegration);
/** Extract information about paths */ function getPaths() {
    try {
        return ("TURBOPACK compile-time truthy", 1) ? Object.keys(__turbopack_context__.c) : ("TURBOPACK unreachable", undefined);
    } catch (e) {
        return [];
    }
}
/** Extract information about package.json modules */ function collectModules() {
    const mainPaths = ("TURBOPACK member replacement", __turbopack_context__.t).main?.paths || [];
    const paths = getPaths();
    const infos = {};
    const seen = {};
    paths.forEach((path)=>{
        let dir = path;
        /** Traverse directories upward in the search of package.json file */ const updir = ()=>{
            const orig = dir;
            dir = node_path.dirname(orig);
            if (!dir || orig === dir || seen[orig]) {
                return undefined;
            }
            if (mainPaths.indexOf(dir) < 0) {
                return updir();
            }
            const pkgfile = node_path.join(orig, 'package.json');
            seen[orig] = true;
            if (!node_fs.existsSync(pkgfile)) {
                return updir();
            }
            try {
                const info = JSON.parse(node_fs.readFileSync(pkgfile, 'utf8'));
                infos[info.name] = info.version;
            } catch (_oO) {
            // no-empty
            }
        };
        updir();
    });
    return infos;
}
/** Fetches the list of modules and the versions loaded by the entry file for your node.js app. */ function _getModules() {
    if (!moduleCache) {
        moduleCache = collectModules();
    }
    return moduleCache;
}
exports.modulesIntegration = modulesIntegration; //# sourceMappingURL=modules.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/errorhandling.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const DEFAULT_SHUTDOWN_TIMEOUT = 2000;
/**
 * @hidden
 */ function logAndExitProcess(error) {
    core.consoleSandbox(()=>{
        // eslint-disable-next-line no-console
        console.error(error);
    });
    const client = core.getClient();
    if (client === undefined) {
        debugBuild.DEBUG_BUILD && core.logger.warn('No NodeClient was defined, we are exiting the process now.');
        global.process.exit(1);
        return;
    }
    const options = client.getOptions();
    const timeout = options?.shutdownTimeout && options.shutdownTimeout > 0 ? options.shutdownTimeout : DEFAULT_SHUTDOWN_TIMEOUT;
    client.close(timeout).then((result)=>{
        if (!result) {
            debugBuild.DEBUG_BUILD && core.logger.warn('We reached the timeout for emptying the request buffer, still exiting now!');
        }
        global.process.exit(1);
    }, (error)=>{
        debugBuild.DEBUG_BUILD && core.logger.error(error);
    });
}
exports.logAndExitProcess = logAndExitProcess; //# sourceMappingURL=errorhandling.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/onuncaughtexception.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const errorhandling = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/errorhandling.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'OnUncaughtException';
/**
 * Add a global exception handler.
 */ const onUncaughtExceptionIntegration = core.defineIntegration((options = {})=>{
    const optionsWithDefaults = {
        exitEvenIfOtherHandlersAreRegistered: false,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        setup (client) {
            global.process.on('uncaughtException', makeErrorHandler(client, optionsWithDefaults));
        }
    };
});
/** Exported only for tests */ function makeErrorHandler(client, options) {
    const timeout = 2000;
    let caughtFirstError = false;
    let caughtSecondError = false;
    let calledFatalError = false;
    let firstError;
    const clientOptions = client.getOptions();
    return Object.assign((error)=>{
        let onFatalError = errorhandling.logAndExitProcess;
        if (options.onFatalError) {
            onFatalError = options.onFatalError;
        } else if (clientOptions.onFatalError) {
            onFatalError = clientOptions.onFatalError;
        }
        // Attaching a listener to `uncaughtException` will prevent the node process from exiting. We generally do not
        // want to alter this behaviour so we check for other listeners that users may have attached themselves and adjust
        // exit behaviour of the SDK accordingly:
        // - If other listeners are attached, do not exit.
        // - If the only listener attached is ours, exit.
        const userProvidedListenersCount = global.process.listeners('uncaughtException').filter((listener)=>{
            // There are 3 listeners we ignore:
            return(// as soon as we're using domains this listener is attached by node itself
            listener.name !== 'domainUncaughtExceptionClear' && // the handler we register for tracing
            listener.tag !== 'sentry_tracingErrorCallback' && // the handler we register in this integration
            listener._errorHandler !== true);
        }).length;
        const processWouldExit = userProvidedListenersCount === 0;
        const shouldApplyFatalHandlingLogic = options.exitEvenIfOtherHandlersAreRegistered || processWouldExit;
        if (!caughtFirstError) {
            // this is the first uncaught error and the ultimate reason for shutting down
            // we want to do absolutely everything possible to ensure it gets captured
            // also we want to make sure we don't go recursion crazy if more errors happen after this one
            firstError = error;
            caughtFirstError = true;
            if (core.getClient() === client) {
                core.captureException(error, {
                    originalException: error,
                    captureContext: {
                        level: 'fatal'
                    },
                    mechanism: {
                        handled: false,
                        type: 'onuncaughtexception'
                    }
                });
            }
            if (!calledFatalError && shouldApplyFatalHandlingLogic) {
                calledFatalError = true;
                onFatalError(error);
            }
        } else {
            if (shouldApplyFatalHandlingLogic) {
                if (calledFatalError) {
                    // we hit an error *after* calling onFatalError - pretty boned at this point, just shut it down
                    debugBuild.DEBUG_BUILD && core.logger.warn('uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown');
                    errorhandling.logAndExitProcess(error);
                } else if (!caughtSecondError) {
                    // two cases for how we can hit this branch:
                    //   - capturing of first error blew up and we just caught the exception from that
                    //     - quit trying to capture, proceed with shutdown
                    //   - a second independent error happened while waiting for first error to capture
                    //     - want to avoid causing premature shutdown before first error capture finishes
                    // it's hard to immediately tell case 1 from case 2 without doing some fancy/questionable domain stuff
                    // so let's instead just delay a bit before we proceed with our action here
                    // in case 1, we just wait a bit unnecessarily but ultimately do the same thing
                    // in case 2, the delay hopefully made us wait long enough for the capture to finish
                    // two potential nonideal outcomes:
                    //   nonideal case 1: capturing fails fast, we sit around for a few seconds unnecessarily before proceeding correctly by calling onFatalError
                    //   nonideal case 2: case 2 happens, 1st error is captured but slowly, timeout completes before capture and we treat second error as the sendErr of (nonexistent) failure from trying to capture first error
                    // note that after hitting this branch, we might catch more errors where (caughtSecondError && !calledFatalError)
                    //   we ignore them - they don't matter to us, we're just waiting for the second error timeout to finish
                    caughtSecondError = true;
                    setTimeout(()=>{
                        if (!calledFatalError) {
                            // it was probably case 1, let's treat err as the sendErr and call onFatalError
                            calledFatalError = true;
                            onFatalError(firstError, error);
                        }
                    }, timeout); // capturing could take at least sendTimeout to fail, plus an arbitrary second for how long it takes to collect surrounding source etc
                }
            }
        }
    }, {
        _errorHandler: true
    });
}
exports.makeErrorHandler = makeErrorHandler;
exports.onUncaughtExceptionIntegration = onUncaughtExceptionIntegration; //# sourceMappingURL=onuncaughtexception.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/onunhandledrejection.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const errorhandling = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/errorhandling.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'OnUnhandledRejection';
const _onUnhandledRejectionIntegration = (options = {})=>{
    const opts = {
        mode: 'warn',
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        setup (client) {
            global.process.on('unhandledRejection', makeUnhandledPromiseHandler(client, opts));
        }
    };
};
/**
 * Add a global promise rejection handler.
 */ const onUnhandledRejectionIntegration = core.defineIntegration(_onUnhandledRejectionIntegration);
/**
 * Send an exception with reason
 * @param reason string
 * @param promise promise
 *
 * Exported only for tests.
 */ function makeUnhandledPromiseHandler(client, options) {
    return function sendUnhandledPromise(reason, promise) {
        if (core.getClient() !== client) {
            return;
        }
        const level = options.mode === 'strict' ? 'fatal' : 'error';
        core.captureException(reason, {
            originalException: promise,
            captureContext: {
                extra: {
                    unhandledPromiseRejection: true
                },
                level
            },
            mechanism: {
                handled: false,
                type: 'onunhandledrejection'
            }
        });
        handleRejection(reason, options.mode);
    };
}
/**
 * Handler for `mode` option
 */ function handleRejection(reason, mode) {
    // https://github.com/nodejs/node/blob/7cf6f9e964aa00772965391c23acda6d71972a9a/lib/internal/process/promises.js#L234-L240
    const rejectionWarning = 'This error originated either by ' + 'throwing inside of an async function without a catch block, ' + 'or by rejecting a promise which was not handled with .catch().' + ' The promise rejected with the reason:';
    /* eslint-disable no-console */ if (mode === 'warn') {
        core.consoleSandbox(()=>{
            console.warn(rejectionWarning);
            console.error(reason && typeof reason === 'object' && 'stack' in reason ? reason.stack : reason);
        });
    } else if (mode === 'strict') {
        core.consoleSandbox(()=>{
            console.warn(rejectionWarning);
        });
        errorhandling.logAndExitProcess(reason);
    }
/* eslint-enable no-console */ }
exports.makeUnhandledPromiseHandler = makeUnhandledPromiseHandler;
exports.onUnhandledRejectionIntegration = onUnhandledRejectionIntegration; //# sourceMappingURL=onunhandledrejection.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/anr/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_util = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const node_worker_threads = __turbopack_context__.r("[externals]/node:worker_threads [external] (node:worker_threads, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const nodeVersion = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)");
const debug = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/debug.js [app-ssr] (ecmascript)");
const { isPromise } = node_util.types;
// This string is a placeholder that gets overwritten with the worker code.
const base64WorkerScript = 'LyohIEBzZW50cnkvbm9kZSA5LjI4LjEgKDExMWRiNGEpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyB0fWZyb20ibm9kZTppbnNwZWN0b3IiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIG4scGFyZW50UG9ydCBhcyBlfWZyb20ibm9kZTp3b3JrZXJfdGhyZWFkcyI7aW1wb3J0e3Bvc2l4IGFzIHIsc2VwIGFzIG99ZnJvbSJub2RlOnBhdGgiO2ltcG9ydCphcyBzIGZyb20ibm9kZTpodHRwIjtpbXBvcnQqYXMgaSBmcm9tIm5vZGU6aHR0cHMiO2ltcG9ydHtSZWFkYWJsZSBhcyBjfWZyb20ibm9kZTpzdHJlYW0iO2ltcG9ydHtjcmVhdGVHemlwIGFzIHV9ZnJvbSJub2RlOnpsaWIiO2ltcG9ydCphcyBhIGZyb20ibm9kZTpuZXQiO2ltcG9ydCphcyBmIGZyb20ibm9kZTp0bHMiO2NvbnN0IGg9InVuZGVmaW5lZCI9PXR5cGVvZiBfX1NFTlRSWV9ERUJVR19ffHxfX1NFTlRSWV9ERUJVR19fLHA9IjkuMjguMSIsbD1nbG9iYWxUaGlzO2Z1bmN0aW9uIGQoKXtyZXR1cm4gbShsKSxsfWZ1bmN0aW9uIG0odCl7Y29uc3Qgbj10Ll9fU0VOVFJZX189dC5fX1NFTlRSWV9ffHx7fTtyZXR1cm4gbi52ZXJzaW9uPW4udmVyc2lvbnx8cCxuW3BdPW5bcF18fHt9fWZ1bmN0aW9uIGcodCxuLGU9bCl7Y29uc3Qgcj1lLl9fU0VOVFJZX189ZS5fX1NFTlRSWV9ffHx7fSxvPXJbcF09cltwXXx8e307cmV0dXJuIG9bdF18fChvW3RdPW4oKSl9Y29uc3QgeT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2Z1bmN0aW9uIGIodCxuKXtyZXR1cm4geS5jYWxsKHQpPT09YFtvYmplY3QgJHtufV1gfWZ1bmN0aW9uIF8odCl7cmV0dXJuIGIodCwiU3RyaW5nIil9ZnVuY3Rpb24gdih0KXtyZXR1cm4gYih0LCJPYmplY3QiKX1mdW5jdGlvbiB3KHQpe3JldHVybiBCb29sZWFuKHQ/LnRoZW4mJiJmdW5jdGlvbiI9PXR5cGVvZiB0LnRoZW4pfWZ1bmN0aW9uIFModCxuKXt0cnl7cmV0dXJuIHQgaW5zdGFuY2VvZiBufWNhdGNoKHQpe3JldHVybiExfX1jb25zdCAkPWwsRT04MDtmdW5jdGlvbiB4KHQsbil7Y29uc3QgZT10LHI9W107aWYoIWU/LnRhZ05hbWUpcmV0dXJuIiI7aWYoJC5IVE1MRWxlbWVudCYmZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiZlLmRhdGFzZXQpe2lmKGUuZGF0YXNldC5zZW50cnlDb21wb25lbnQpcmV0dXJuIGUuZGF0YXNldC5zZW50cnlDb21wb25lbnQ7aWYoZS5kYXRhc2V0LnNlbnRyeUVsZW1lbnQpcmV0dXJuIGUuZGF0YXNldC5zZW50cnlFbGVtZW50fXIucHVzaChlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7Y29uc3Qgbz1uPy5sZW5ndGg/bi5maWx0ZXIoKHQ9PmUuZ2V0QXR0cmlidXRlKHQpKSkubWFwKCh0PT5bdCxlLmdldEF0dHJpYnV0ZSh0KV0pKTpudWxsO2lmKG8/Lmxlbmd0aClvLmZvckVhY2goKHQ9PntyLnB1c2goYFske3RbMF19PSIke3RbMV19Il1gKX0pKTtlbHNle2UuaWQmJnIucHVzaChgIyR7ZS5pZH1gKTtjb25zdCB0PWUuY2xhc3NOYW1lO2lmKHQmJl8odCkpe2NvbnN0IG49dC5zcGxpdCgvXHMrLyk7Zm9yKGNvbnN0IHQgb2YgbilyLnB1c2goYC4ke3R9YCl9fWNvbnN0IHM9WyJhcmlhLWxhYmVsIiwidHlwZSIsIm5hbWUiLCJ0aXRsZSIsImFsdCJdO2Zvcihjb25zdCB0IG9mIHMpe2NvbnN0IG49ZS5nZXRBdHRyaWJ1dGUodCk7biYmci5wdXNoKGBbJHt0fT0iJHtufSJdYCl9cmV0dXJuIHIuam9pbigiIil9Y29uc3QgTj1bImRlYnVnIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImxvZyIsImFzc2VydCIsInRyYWNlIl0sQz17fTtmdW5jdGlvbiBUKHQpe2lmKCEoImNvbnNvbGUiaW4gbCkpcmV0dXJuIHQoKTtjb25zdCBuPWwuY29uc29sZSxlPXt9LHI9T2JqZWN0LmtleXMoQyk7ci5mb3JFYWNoKCh0PT57Y29uc3Qgcj1DW3RdO2VbdF09blt0XSxuW3RdPXJ9KSk7dHJ5e3JldHVybiB0KCl9ZmluYWxseXtyLmZvckVhY2goKHQ9PntuW3RdPWVbdF19KSl9fWNvbnN0IGs9ZygibG9nZ2VyIiwoZnVuY3Rpb24oKXtsZXQgdD0hMTtjb25zdCBuPXtlbmFibGU6KCk9Pnt0PSEwfSxkaXNhYmxlOigpPT57dD0hMX0saXNFbmFibGVkOigpPT50fTtyZXR1cm4gaD9OLmZvckVhY2goKGU9PntuW2VdPSguLi5uKT0+e3QmJlQoKCgpPT57bC5jb25zb2xlW2VdKGBTZW50cnkgTG9nZ2VyIFske2V9XTpgLC4uLm4pfSkpfX0pKTpOLmZvckVhY2goKHQ9PntuW3RdPSgpPT57fX0pKSxufSkpO2Z1bmN0aW9uIGoodCxuPTApe3JldHVybiJzdHJpbmciIT10eXBlb2YgdHx8MD09PW58fHQubGVuZ3RoPD1uP3Q6YCR7dC5zbGljZSgwLG4pfS4uLmB9ZnVuY3Rpb24gUih0KXtpZihmdW5jdGlvbih0KXtzd2l0Y2goeS5jYWxsKHQpKXtjYXNlIltvYmplY3QgRXJyb3JdIjpjYXNlIltvYmplY3QgRXhjZXB0aW9uXSI6Y2FzZSJbb2JqZWN0IERPTUV4Y2VwdGlvbl0iOmNhc2UiW29iamVjdCBXZWJBc3NlbWJseS5FeGNlcHRpb25dIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiBTKHQsRXJyb3IpfX0odCkpcmV0dXJue21lc3NhZ2U6dC5tZXNzYWdlLG5hbWU6dC5uYW1lLHN0YWNrOnQuc3RhY2ssLi4uTyh0KX07aWYobj10LCJ1bmRlZmluZWQiIT10eXBlb2YgRXZlbnQmJlMobixFdmVudCkpe2NvbnN0IG49e3R5cGU6dC50eXBlLHRhcmdldDpJKHQudGFyZ2V0KSxjdXJyZW50VGFyZ2V0OkkodC5jdXJyZW50VGFyZ2V0KSwuLi5PKHQpfTtyZXR1cm4idW5kZWZpbmVkIiE9dHlwZW9mIEN1c3RvbUV2ZW50JiZTKHQsQ3VzdG9tRXZlbnQpJiYobi5kZXRhaWw9dC5kZXRhaWwpLG59cmV0dXJuIHQ7dmFyIG59ZnVuY3Rpb24gSSh0KXt0cnl7cmV0dXJuIG49dCwidW5kZWZpbmVkIiE9dHlwZW9mIEVsZW1lbnQmJlMobixFbGVtZW50KT9mdW5jdGlvbih0LG49e30pe2lmKCF0KXJldHVybiI8dW5rbm93bj4iO3RyeXtsZXQgZT10O2NvbnN0IHI9NSxvPVtdO2xldCBzPTAsaT0wO2NvbnN0IGM9IiA+ICIsdT1jLmxlbmd0aDtsZXQgYTtjb25zdCBmPUFycmF5LmlzQXJyYXkobik/bjpuLmtleUF0dHJzLGg9IUFycmF5LmlzQXJyYXkobikmJm4ubWF4U3RyaW5nTGVuZ3RofHxFO2Zvcig7ZSYmcysrPHImJihhPXgoZSxmKSwhKCJodG1sIj09PWF8fHM+MSYmaStvLmxlbmd0aCp1K2EubGVuZ3RoPj1oKSk7KW8ucHVzaChhKSxpKz1hLmxlbmd0aCxlPWUucGFyZW50Tm9kZTtyZXR1cm4gby5yZXZlcnNlKCkuam9pbihjKX1jYXRjaCh0KXtyZXR1cm4iPHVua25vd24+In19KHQpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX1jYXRjaCh0KXtyZXR1cm4iPHVua25vd24+In12YXIgbn1mdW5jdGlvbiBPKHQpe2lmKCJvYmplY3QiPT10eXBlb2YgdCYmbnVsbCE9PXQpe2NvbnN0IG49e307Zm9yKGNvbnN0IGUgaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSYmKG5bZV09dFtlXSk7cmV0dXJuIG59cmV0dXJue319ZnVuY3Rpb24gRCh0PWZ1bmN0aW9uKCl7Y29uc3QgdD1sO3JldHVybiB0LmNyeXB0b3x8dC5tc0NyeXB0b30oKSl7bGV0IG49KCk9PjE2Kk1hdGgucmFuZG9tKCk7dHJ5e2lmKHQ/LnJhbmRvbVVVSUQpcmV0dXJuIHQucmFuZG9tVVVJRCgpLnJlcGxhY2UoLy0vZywiIik7dD8uZ2V0UmFuZG9tVmFsdWVzJiYobj0oKT0+e2NvbnN0IG49bmV3IFVpbnQ4QXJyYXkoMSk7cmV0dXJuIHQuZ2V0UmFuZG9tVmFsdWVzKG4pLG5bMF19KX1jYXRjaCh0KXt9cmV0dXJuKFsxZTddKzFlMys0ZTMrOGUzKzFlMTEpLnJlcGxhY2UoL1swMThdL2csKHQ9Pih0XigxNSZuKCkpPj50LzQpLnRvU3RyaW5nKDE2KSkpfWNvbnN0IEE9MWUzO2Z1bmN0aW9uIFAoKXtyZXR1cm4gRGF0ZS5ub3coKS9BfWNvbnN0IFU9ZnVuY3Rpb24oKXtjb25zdHtwZXJmb3JtYW5jZTp0fT1sO2lmKCF0Py5ub3cpcmV0dXJuIFA7Y29uc3Qgbj1EYXRlLm5vdygpLXQubm93KCksZT1udWxsPT10LnRpbWVPcmlnaW4/bjp0LnRpbWVPcmlnaW47cmV0dXJuKCk9PihlK3Qubm93KCkpL0F9KCk7ZnVuY3Rpb24gTSh0KXtjb25zdCBuPVUoKSxlPXtzaWQ6RCgpLGluaXQ6ITAsdGltZXN0YW1wOm4sc3RhcnRlZDpuLGR1cmF0aW9uOjAsc3RhdHVzOiJvayIsZXJyb3JzOjAsaWdub3JlRHVyYXRpb246ITEsdG9KU09OOigpPT5mdW5jdGlvbih0KXtyZXR1cm57c2lkOmAke3Quc2lkfWAsaW5pdDp0LmluaXQsc3RhcnRlZDpuZXcgRGF0ZSgxZTMqdC5zdGFydGVkKS50b0lTT1N0cmluZygpLHRpbWVzdGFtcDpuZXcgRGF0ZSgxZTMqdC50aW1lc3RhbXApLnRvSVNPU3RyaW5nKCksc3RhdHVzOnQuc3RhdHVzLGVycm9yczp0LmVycm9ycyxkaWQ6Im51bWJlciI9PXR5cGVvZiB0LmRpZHx8InN0cmluZyI9PXR5cGVvZiB0LmRpZD9gJHt0LmRpZH1gOnZvaWQgMCxkdXJhdGlvbjp0LmR1cmF0aW9uLGFibm9ybWFsX21lY2hhbmlzbTp0LmFibm9ybWFsX21lY2hhbmlzbSxhdHRyczp7cmVsZWFzZTp0LnJlbGVhc2UsZW52aXJvbm1lbnQ6dC5lbnZpcm9ubWVudCxpcF9hZGRyZXNzOnQuaXBBZGRyZXNzLHVzZXJfYWdlbnQ6dC51c2VyQWdlbnR9fX0oZSl9O3JldHVybiB0JiZMKGUsdCksZX1mdW5jdGlvbiBMKHQsbj17fSl7aWYobi51c2VyJiYoIXQuaXBBZGRyZXNzJiZuLnVzZXIuaXBfYWRkcmVzcyYmKHQuaXBBZGRyZXNzPW4udXNlci5pcF9hZGRyZXNzKSx0LmRpZHx8bi5kaWR8fCh0LmRpZD1uLnVzZXIuaWR8fG4udXNlci5lbWFpbHx8bi51c2VyLnVzZXJuYW1lKSksdC50aW1lc3RhbXA9bi50aW1lc3RhbXB8fFUoKSxuLmFibm9ybWFsX21lY2hhbmlzbSYmKHQuYWJub3JtYWxfbWVjaGFuaXNtPW4uYWJub3JtYWxfbWVjaGFuaXNtKSxuLmlnbm9yZUR1cmF0aW9uJiYodC5pZ25vcmVEdXJhdGlvbj1uLmlnbm9yZUR1cmF0aW9uKSxuLnNpZCYmKHQuc2lkPTMyPT09bi5zaWQubGVuZ3RoP24uc2lkOkQoKSksdm9pZCAwIT09bi5pbml0JiYodC5pbml0PW4uaW5pdCksIXQuZGlkJiZuLmRpZCYmKHQuZGlkPWAke24uZGlkfWApLCJudW1iZXIiPT10eXBlb2Ygbi5zdGFydGVkJiYodC5zdGFydGVkPW4uc3RhcnRlZCksdC5pZ25vcmVEdXJhdGlvbil0LmR1cmF0aW9uPXZvaWQgMDtlbHNlIGlmKCJudW1iZXIiPT10eXBlb2Ygbi5kdXJhdGlvbil0LmR1cmF0aW9uPW4uZHVyYXRpb247ZWxzZXtjb25zdCBuPXQudGltZXN0YW1wLXQuc3RhcnRlZDt0LmR1cmF0aW9uPW4+PTA/bjowfW4ucmVsZWFzZSYmKHQucmVsZWFzZT1uLnJlbGVhc2UpLG4uZW52aXJvbm1lbnQmJih0LmVudmlyb25tZW50PW4uZW52aXJvbm1lbnQpLCF0LmlwQWRkcmVzcyYmbi5pcEFkZHJlc3MmJih0LmlwQWRkcmVzcz1uLmlwQWRkcmVzcyksIXQudXNlckFnZW50JiZuLnVzZXJBZ2VudCYmKHQudXNlckFnZW50PW4udXNlckFnZW50KSwibnVtYmVyIj09dHlwZW9mIG4uZXJyb3JzJiYodC5lcnJvcnM9bi5lcnJvcnMpLG4uc3RhdHVzJiYodC5zdGF0dXM9bi5zdGF0dXMpfWZ1bmN0aW9uIEIodCxuLGU9Mil7aWYoIW58fCJvYmplY3QiIT10eXBlb2Ygbnx8ZTw9MClyZXR1cm4gbjtpZih0JiYwPT09T2JqZWN0LmtleXMobikubGVuZ3RoKXJldHVybiB0O2NvbnN0IHI9ey4uLnR9O2Zvcihjb25zdCB0IGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCkmJihyW3RdPUIoclt0XSxuW3RdLGUtMSkpO3JldHVybiByfWNvbnN0IEc9Il9zZW50cnlTcGFuIjtmdW5jdGlvbiBKKHQsbil7bj9mdW5jdGlvbih0LG4sZSl7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9Y2F0Y2goZSl7aCYmay5sb2coYEZhaWxlZCB0byBhZGQgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgIiR7bn0iIHRvIG9iamVjdGAsdCl9fSh0LEcsbik6ZGVsZXRlIHRbR119ZnVuY3Rpb24geih0KXtyZXR1cm4gdFtHXX1mdW5jdGlvbiBIKCl7cmV0dXJuIEQoKX1mdW5jdGlvbiBGKCl7cmV0dXJuIEQoKS5zdWJzdHJpbmcoMTYpfWNsYXNzIFd7Y29uc3RydWN0b3IoKXt0aGlzLnQ9ITEsdGhpcy5vPVtdLHRoaXMuaT1bXSx0aGlzLnU9W10sdGhpcy5oPVtdLHRoaXMucD17fSx0aGlzLmw9e30sdGhpcy5tPXt9LHRoaXMuXz17fSx0aGlzLnY9e30sdGhpcy5TPXt0cmFjZUlkOkgoKSxzYW1wbGVSYW5kOk1hdGgucmFuZG9tKCl9fWNsb25lKCl7Y29uc3QgdD1uZXcgVztyZXR1cm4gdC51PVsuLi50aGlzLnVdLHQubD17Li4udGhpcy5sfSx0Lm09ey4uLnRoaXMubX0sdC5fPXsuLi50aGlzLl99LHRoaXMuXy5mbGFncyYmKHQuXy5mbGFncz17dmFsdWVzOlsuLi50aGlzLl8uZmxhZ3MudmFsdWVzXX0pLHQucD10aGlzLnAsdC5OPXRoaXMuTix0LkM9dGhpcy5DLHQuVD10aGlzLlQsdC5rPXRoaXMuayx0Lmk9Wy4uLnRoaXMuaV0sdC5oPVsuLi50aGlzLmhdLHQudj17Li4udGhpcy52fSx0LlM9ey4uLnRoaXMuU30sdC5qPXRoaXMuaix0LlI9dGhpcy5SLEoodCx6KHRoaXMpKSx0fXNldENsaWVudCh0KXt0aGlzLmo9dH1zZXRMYXN0RXZlbnRJZCh0KXt0aGlzLlI9dH1nZXRDbGllbnQoKXtyZXR1cm4gdGhpcy5qfWxhc3RFdmVudElkKCl7cmV0dXJuIHRoaXMuUn1hZGRTY29wZUxpc3RlbmVyKHQpe3RoaXMuby5wdXNoKHQpfWFkZEV2ZW50UHJvY2Vzc29yKHQpe3JldHVybiB0aGlzLmkucHVzaCh0KSx0aGlzfXNldFVzZXIodCl7cmV0dXJuIHRoaXMucD10fHx7ZW1haWw6dm9pZCAwLGlkOnZvaWQgMCxpcF9hZGRyZXNzOnZvaWQgMCx1c2VybmFtZTp2b2lkIDB9LHRoaXMuQyYmTCh0aGlzLkMse3VzZXI6dH0pLHRoaXMuSSgpLHRoaXN9Z2V0VXNlcigpe3JldHVybiB0aGlzLnB9c2V0VGFncyh0KXtyZXR1cm4gdGhpcy5sPXsuLi50aGlzLmwsLi4udH0sdGhpcy5JKCksdGhpc31zZXRUYWcodCxuKXtyZXR1cm4gdGhpcy5sPXsuLi50aGlzLmwsW3RdOm59LHRoaXMuSSgpLHRoaXN9c2V0RXh0cmFzKHQpe3JldHVybiB0aGlzLm09ey4uLnRoaXMubSwuLi50fSx0aGlzLkkoKSx0aGlzfXNldEV4dHJhKHQsbil7cmV0dXJuIHRoaXMubT17Li4udGhpcy5tLFt0XTpufSx0aGlzLkkoKSx0aGlzfXNldEZpbmdlcnByaW50KHQpe3JldHVybiB0aGlzLms9dCx0aGlzLkkoKSx0aGlzfXNldExldmVsKHQpe3JldHVybiB0aGlzLk49dCx0aGlzLkkoKSx0aGlzfXNldFRyYW5zYWN0aW9uTmFtZSh0KXtyZXR1cm4gdGhpcy5UPXQsdGhpcy5JKCksdGhpc31zZXRDb250ZXh0KHQsbil7cmV0dXJuIG51bGw9PT1uP2RlbGV0ZSB0aGlzLl9bdF06dGhpcy5fW3RdPW4sdGhpcy5JKCksdGhpc31zZXRTZXNzaW9uKHQpe3JldHVybiB0P3RoaXMuQz10OmRlbGV0ZSB0aGlzLkMsdGhpcy5JKCksdGhpc31nZXRTZXNzaW9uKCl7cmV0dXJuIHRoaXMuQ311cGRhdGUodCl7aWYoIXQpcmV0dXJuIHRoaXM7Y29uc3Qgbj0iZnVuY3Rpb24iPT10eXBlb2YgdD90KHRoaXMpOnQsZT1uIGluc3RhbmNlb2YgVz9uLmdldFNjb3BlRGF0YSgpOnYobik/dDp2b2lkIDAse3RhZ3M6cixleHRyYTpvLHVzZXI6cyxjb250ZXh0czppLGxldmVsOmMsZmluZ2VycHJpbnQ6dT1bXSxwcm9wYWdhdGlvbkNvbnRleHQ6YX09ZXx8e307cmV0dXJuIHRoaXMubD17Li4udGhpcy5sLC4uLnJ9LHRoaXMubT17Li4udGhpcy5tLC4uLm99LHRoaXMuXz17Li4udGhpcy5fLC4uLml9LHMmJk9iamVjdC5rZXlzKHMpLmxlbmd0aCYmKHRoaXMucD1zKSxjJiYodGhpcy5OPWMpLHUubGVuZ3RoJiYodGhpcy5rPXUpLGEmJih0aGlzLlM9YSksdGhpc31jbGVhcigpe3JldHVybiB0aGlzLnU9W10sdGhpcy5sPXt9LHRoaXMubT17fSx0aGlzLnA9e30sdGhpcy5fPXt9LHRoaXMuTj12b2lkIDAsdGhpcy5UPXZvaWQgMCx0aGlzLms9dm9pZCAwLHRoaXMuQz12b2lkIDAsSih0aGlzLHZvaWQgMCksdGhpcy5oPVtdLHRoaXMuc2V0UHJvcGFnYXRpb25Db250ZXh0KHt0cmFjZUlkOkgoKSxzYW1wbGVSYW5kOk1hdGgucmFuZG9tKCl9KSx0aGlzLkkoKSx0aGlzfWFkZEJyZWFkY3J1bWIodCxuKXtjb25zdCBlPSJudW1iZXIiPT10eXBlb2Ygbj9uOjEwMDtpZihlPD0wKXJldHVybiB0aGlzO2NvbnN0IHI9e3RpbWVzdGFtcDpQKCksLi4udCxtZXNzYWdlOnQubWVzc2FnZT9qKHQubWVzc2FnZSwyMDQ4KTp0Lm1lc3NhZ2V9O3JldHVybiB0aGlzLnUucHVzaChyKSx0aGlzLnUubGVuZ3RoPmUmJih0aGlzLnU9dGhpcy51LnNsaWNlKC1lKSx0aGlzLmo/LnJlY29yZERyb3BwZWRFdmVudCgiYnVmZmVyX292ZXJmbG93IiwibG9nX2l0ZW0iKSksdGhpcy5JKCksdGhpc31nZXRMYXN0QnJlYWRjcnVtYigpe3JldHVybiB0aGlzLnVbdGhpcy51Lmxlbmd0aC0xXX1jbGVhckJyZWFkY3J1bWJzKCl7cmV0dXJuIHRoaXMudT1bXSx0aGlzLkkoKSx0aGlzfWFkZEF0dGFjaG1lbnQodCl7cmV0dXJuIHRoaXMuaC5wdXNoKHQpLHRoaXN9Y2xlYXJBdHRhY2htZW50cygpe3JldHVybiB0aGlzLmg9W10sdGhpc31nZXRTY29wZURhdGEoKXtyZXR1cm57YnJlYWRjcnVtYnM6dGhpcy51LGF0dGFjaG1lbnRzOnRoaXMuaCxjb250ZXh0czp0aGlzLl8sdGFnczp0aGlzLmwsZXh0cmE6dGhpcy5tLHVzZXI6dGhpcy5wLGxldmVsOnRoaXMuTixmaW5nZXJwcmludDp0aGlzLmt8fFtdLGV2ZW50UHJvY2Vzc29yczp0aGlzLmkscHJvcGFnYXRpb25Db250ZXh0OnRoaXMuUyxzZGtQcm9jZXNzaW5nTWV0YWRhdGE6dGhpcy52LHRyYW5zYWN0aW9uTmFtZTp0aGlzLlQsc3Bhbjp6KHRoaXMpfX1zZXRTREtQcm9jZXNzaW5nTWV0YWRhdGEodCl7cmV0dXJuIHRoaXMudj1CKHRoaXMudix0LDIpLHRoaXN9c2V0UHJvcGFnYXRpb25Db250ZXh0KHQpe3JldHVybiB0aGlzLlM9dCx0aGlzfWdldFByb3BhZ2F0aW9uQ29udGV4dCgpe3JldHVybiB0aGlzLlN9Y2FwdHVyZUV4Y2VwdGlvbih0LG4pe2NvbnN0IGU9bj8uZXZlbnRfaWR8fEQoKTtpZighdGhpcy5qKXJldHVybiBrLndhcm4oIk5vIGNsaWVudCBjb25maWd1cmVkIG9uIHNjb3BlIC0gd2lsbCBub3QgY2FwdHVyZSBleGNlcHRpb24hIiksZTtjb25zdCByPW5ldyBFcnJvcigiU2VudHJ5IHN5bnRoZXRpY0V4Y2VwdGlvbiIpO3JldHVybiB0aGlzLmouY2FwdHVyZUV4Y2VwdGlvbih0LHtvcmlnaW5hbEV4Y2VwdGlvbjp0LHN5bnRoZXRpY0V4Y2VwdGlvbjpyLC4uLm4sZXZlbnRfaWQ6ZX0sdGhpcyksZX1jYXB0dXJlTWVzc2FnZSh0LG4sZSl7Y29uc3Qgcj1lPy5ldmVudF9pZHx8RCgpO2lmKCF0aGlzLmopcmV0dXJuIGsud2FybigiTm8gY2xpZW50IGNvbmZpZ3VyZWQgb24gc2NvcGUgLSB3aWxsIG5vdCBjYXB0dXJlIG1lc3NhZ2UhIikscjtjb25zdCBvPW5ldyBFcnJvcih0KTtyZXR1cm4gdGhpcy5qLmNhcHR1cmVNZXNzYWdlKHQsbix7b3JpZ2luYWxFeGNlcHRpb246dCxzeW50aGV0aWNFeGNlcHRpb246bywuLi5lLGV2ZW50X2lkOnJ9LHRoaXMpLHJ9Y2FwdHVyZUV2ZW50KHQsbil7Y29uc3QgZT1uPy5ldmVudF9pZHx8RCgpO3JldHVybiB0aGlzLmo/KHRoaXMuai5jYXB0dXJlRXZlbnQodCx7Li4ubixldmVudF9pZDplfSx0aGlzKSxlKTooay53YXJuKCJObyBjbGllbnQgY29uZmlndXJlZCBvbiBzY29wZSAtIHdpbGwgbm90IGNhcHR1cmUgZXZlbnQhIiksZSl9SSgpe3RoaXMudHx8KHRoaXMudD0hMCx0aGlzLm8uZm9yRWFjaCgodD0+e3QodGhpcyl9KSksdGhpcy50PSExKX19Y2xhc3MgWXtjb25zdHJ1Y3Rvcih0LG4pe2xldCBlLHI7ZT10fHxuZXcgVyxyPW58fG5ldyBXLHRoaXMuTz1be3Njb3BlOmV9XSx0aGlzLkQ9cn13aXRoU2NvcGUodCl7Y29uc3Qgbj10aGlzLkEoKTtsZXQgZTt0cnl7ZT10KG4pfWNhdGNoKHQpe3Rocm93IHRoaXMuUCgpLHR9cmV0dXJuIHcoZSk/ZS50aGVuKCh0PT4odGhpcy5QKCksdCkpLCh0PT57dGhyb3cgdGhpcy5QKCksdH0pKToodGhpcy5QKCksZSl9Z2V0Q2xpZW50KCl7cmV0dXJuIHRoaXMuZ2V0U3RhY2tUb3AoKS5jbGllbnR9Z2V0U2NvcGUoKXtyZXR1cm4gdGhpcy5nZXRTdGFja1RvcCgpLnNjb3BlfWdldElzb2xhdGlvblNjb3BlKCl7cmV0dXJuIHRoaXMuRH1nZXRTdGFja1RvcCgpe3JldHVybiB0aGlzLk9bdGhpcy5PLmxlbmd0aC0xXX1BKCl7Y29uc3QgdD10aGlzLmdldFNjb3BlKCkuY2xvbmUoKTtyZXR1cm4gdGhpcy5PLnB1c2goe2NsaWVudDp0aGlzLmdldENsaWVudCgpLHNjb3BlOnR9KSx0fVAoKXtyZXR1cm4hKHRoaXMuTy5sZW5ndGg8PTEpJiYhIXRoaXMuTy5wb3AoKX19ZnVuY3Rpb24gSygpe2NvbnN0IHQ9bShkKCkpO3JldHVybiB0LnN0YWNrPXQuc3RhY2t8fG5ldyBZKGcoImRlZmF1bHRDdXJyZW50U2NvcGUiLCgoKT0+bmV3IFcpKSxnKCJkZWZhdWx0SXNvbGF0aW9uU2NvcGUiLCgoKT0+bmV3IFcpKSl9ZnVuY3Rpb24gVih0KXtyZXR1cm4gSygpLndpdGhTY29wZSh0KX1mdW5jdGlvbiBaKHQsbil7Y29uc3QgZT1LKCk7cmV0dXJuIGUud2l0aFNjb3BlKCgoKT0+KGUuZ2V0U3RhY2tUb3AoKS5zY29wZT10LG4odCkpKSl9ZnVuY3Rpb24gcSh0KXtyZXR1cm4gSygpLndpdGhTY29wZSgoKCk9PnQoSygpLmdldElzb2xhdGlvblNjb3BlKCkpKSl9ZnVuY3Rpb24gUSh0KXtjb25zdCBuPW0odCk7cmV0dXJuIG4uYWNzP24uYWNzOnt3aXRoSXNvbGF0aW9uU2NvcGU6cSx3aXRoU2NvcGU6Vix3aXRoU2V0U2NvcGU6Wix3aXRoU2V0SXNvbGF0aW9uU2NvcGU6KHQsbik9PnEobiksZ2V0Q3VycmVudFNjb3BlOigpPT5LKCkuZ2V0U2NvcGUoKSxnZXRJc29sYXRpb25TY29wZTooKT0+SygpLmdldElzb2xhdGlvblNjb3BlKCl9fWZ1bmN0aW9uIFgoKXtyZXR1cm4gUShkKCkpLmdldEN1cnJlbnRTY29wZSgpLmdldENsaWVudCgpfWNvbnN0IHR0PSJzZW50cnkuc291cmNlIixudD0ic2VudHJ5LnNhbXBsZV9yYXRlIixldD0ic2VudHJ5LnByZXZpb3VzX3RyYWNlX3NhbXBsZV9yYXRlIixydD0ic2VudHJ5Lm9wIixvdD0ic2VudHJ5Lm9yaWdpbiIsc3Q9MCxpdD0xLGN0PSJfc2VudHJ5U2NvcGUiLHV0PSJfc2VudHJ5SXNvbGF0aW9uU2NvcGUiO2Z1bmN0aW9uIGF0KHQpe3JldHVybntzY29wZTp0W2N0XSxpc29sYXRpb25TY29wZTp0W3V0XX19Y29uc3QgZnQ9InNlbnRyeS0iLGh0PS9ec2VudHJ5LS87ZnVuY3Rpb24gcHQodCl7Y29uc3Qgbj1mdW5jdGlvbih0KXtpZighdHx8IV8odCkmJiFBcnJheS5pc0FycmF5KHQpKXJldHVybjtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0LnJlZHVjZSgoKHQsbik9Pntjb25zdCBlPWx0KG4pO3JldHVybiBPYmplY3QuZW50cmllcyhlKS5mb3JFYWNoKCgoW24sZV0pPT57dFtuXT1lfSkpLHR9KSx7fSk7cmV0dXJuIGx0KHQpfSh0KTtpZighbilyZXR1cm47Y29uc3QgZT1PYmplY3QuZW50cmllcyhuKS5yZWR1Y2UoKCh0LFtuLGVdKT0+e2lmKG4ubWF0Y2goaHQpKXt0W24uc2xpY2UoZnQubGVuZ3RoKV09ZX1yZXR1cm4gdH0pLHt9KTtyZXR1cm4gT2JqZWN0LmtleXMoZSkubGVuZ3RoPjA/ZTp2b2lkIDB9ZnVuY3Rpb24gbHQodCl7cmV0dXJuIHQuc3BsaXQoIiwiKS5tYXAoKHQ9PnQuc3BsaXQoIj0iKS5tYXAoKHQ9Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0LnRyaW0oKSl9Y2F0Y2h7cmV0dXJufX0pKSkpLnJlZHVjZSgoKHQsW24sZV0pPT4obiYmZSYmKHRbbl09ZSksdCkpLHt9KX1jb25zdCBkdD0xO2Z1bmN0aW9uIG10KHQpe2NvbnN0e3NwYW5JZDpuLHRyYWNlSWQ6ZSxpc1JlbW90ZTpyfT10LnNwYW5Db250ZXh0KCksbz1yP246X3QodCkucGFyZW50X3NwYW5faWQscz1hdCh0KS5zY29wZTtyZXR1cm57cGFyZW50X3NwYW5faWQ6byxzcGFuX2lkOnI/cz8uZ2V0UHJvcGFnYXRpb25Db250ZXh0KCkucHJvcGFnYXRpb25TcGFuSWR8fEYoKTpuLHRyYWNlX2lkOmV9fWZ1bmN0aW9uIGd0KHQpe3JldHVybiB0JiZ0Lmxlbmd0aD4wP3QubWFwKCgoe2NvbnRleHQ6e3NwYW5JZDp0LHRyYWNlSWQ6bix0cmFjZUZsYWdzOmUsLi4ucn0sYXR0cmlidXRlczpvfSk9Pih7c3Bhbl9pZDp0LHRyYWNlX2lkOm4sc2FtcGxlZDplPT09ZHQsYXR0cmlidXRlczpvLC4uLnJ9KSkpOnZvaWQgMH1mdW5jdGlvbiB5dCh0KXtyZXR1cm4ibnVtYmVyIj09dHlwZW9mIHQ/YnQodCk6QXJyYXkuaXNBcnJheSh0KT90WzBdK3RbMV0vMWU5OnQgaW5zdGFuY2VvZiBEYXRlP2J0KHQuZ2V0VGltZSgpKTpVKCl9ZnVuY3Rpb24gYnQodCl7cmV0dXJuIHQ+OTk5OTk5OTk5OT90LzFlMzp0fWZ1bmN0aW9uIF90KHQpe2lmKGZ1bmN0aW9uKHQpe3JldHVybiJmdW5jdGlvbiI9PXR5cGVvZiB0LmdldFNwYW5KU09OfSh0KSlyZXR1cm4gdC5nZXRTcGFuSlNPTigpO2NvbnN0e3NwYW5JZDpuLHRyYWNlSWQ6ZX09dC5zcGFuQ29udGV4dCgpO2lmKGZ1bmN0aW9uKHQpe2NvbnN0IG49dDtyZXR1cm4hIShuLmF0dHJpYnV0ZXMmJm4uc3RhcnRUaW1lJiZuLm5hbWUmJm4uZW5kVGltZSYmbi5zdGF0dXMpfSh0KSl7Y29uc3R7YXR0cmlidXRlczpyLHN0YXJ0VGltZTpvLG5hbWU6cyxlbmRUaW1lOmksc3RhdHVzOmMsbGlua3M6dX09dDtyZXR1cm57c3Bhbl9pZDpuLHRyYWNlX2lkOmUsZGF0YTpyLGRlc2NyaXB0aW9uOnMscGFyZW50X3NwYW5faWQ6InBhcmVudFNwYW5JZCJpbiB0P3QucGFyZW50U3BhbklkOiJwYXJlbnRTcGFuQ29udGV4dCJpbiB0P3QucGFyZW50U3BhbkNvbnRleHQ/LnNwYW5JZDp2b2lkIDAsc3RhcnRfdGltZXN0YW1wOnl0KG8pLHRpbWVzdGFtcDp5dChpKXx8dm9pZCAwLHN0YXR1czp2dChjKSxvcDpyW3J0XSxvcmlnaW46cltvdF0sbGlua3M6Z3QodSl9fXJldHVybntzcGFuX2lkOm4sdHJhY2VfaWQ6ZSxzdGFydF90aW1lc3RhbXA6MCxkYXRhOnt9fX1mdW5jdGlvbiB2dCh0KXtpZih0JiZ0LmNvZGUhPT1zdClyZXR1cm4gdC5jb2RlPT09aXQ/Im9rIjp0Lm1lc3NhZ2V8fCJ1bmtub3duX2Vycm9yIn1jb25zdCB3dD0iX3NlbnRyeVJvb3RTcGFuIjtmdW5jdGlvbiBTdCh0KXtyZXR1cm4gdFt3dF18fHR9Y29uc3QgJHQ9NTAsRXQ9Ij8iLHh0PS9jYXB0dXJlTWVzc2FnZXxjYXB0dXJlRXhjZXB0aW9uLztmdW5jdGlvbiBOdCh0KXtyZXR1cm4gdFt0Lmxlbmd0aC0xXXx8e319Y29uc3QgQ3Q9Ijxhbm9ueW1vdXM+Ijtjb25zdCBUdD0icHJvZHVjdGlvbiIsa3Q9L15vKFxkKylcLi87ZnVuY3Rpb24ganQodCxuPSExKXtjb25zdHtob3N0OmUscGF0aDpyLHBhc3M6byxwb3J0OnMscHJvamVjdElkOmkscHJvdG9jb2w6YyxwdWJsaWNLZXk6dX09dDtyZXR1cm5gJHtjfTovLyR7dX0ke24mJm8/YDoke299YDoiIn1AJHtlfSR7cz9gOiR7c31gOiIifS8ke3I/YCR7cn0vYDpyfSR7aX1gfWNvbnN0IFJ0PSJfZnJvemVuRHNjIjtmdW5jdGlvbiBJdCh0LG4pe2NvbnN0IGU9bi5nZXRPcHRpb25zKCkse3B1YmxpY0tleTpyLGhvc3Q6b309bi5nZXREc24oKXx8e307bGV0IHM7ZS5vcmdJZD9zPVN0cmluZyhlLm9yZ0lkKTpvJiYocz1mdW5jdGlvbih0KXtjb25zdCBuPXQubWF0Y2goa3QpO3JldHVybiBuPy5bMV19KG8pKTtjb25zdCBpPXtlbnZpcm9ubWVudDplLmVudmlyb25tZW50fHxUdCxyZWxlYXNlOmUucmVsZWFzZSxwdWJsaWNfa2V5OnIsdHJhY2VfaWQ6dCxvcmdfaWQ6c307cmV0dXJuIG4uZW1pdCgiY3JlYXRlRHNjIixpKSxpfWZ1bmN0aW9uIE90KHQpe2NvbnN0IG49WCgpO2lmKCFuKXJldHVybnt9O2NvbnN0IGU9U3QodCkscj1fdChlKSxvPXIuZGF0YSxzPWUuc3BhbkNvbnRleHQoKS50cmFjZVN0YXRlLGk9cz8uZ2V0KCJzZW50cnkuc2FtcGxlX3JhdGUiKT8/b1tudF0/P29bZXRdO2Z1bmN0aW9uIGModCl7cmV0dXJuIm51bWJlciIhPXR5cGVvZiBpJiYic3RyaW5nIiE9dHlwZW9mIGl8fCh0LnNhbXBsZV9yYXRlPWAke2l9YCksdH1jb25zdCB1PWVbUnRdO2lmKHUpcmV0dXJuIGModSk7Y29uc3QgYT1zPy5nZXQoInNlbnRyeS5kc2MiKSxmPWEmJnB0KGEpO2lmKGYpcmV0dXJuIGMoZik7Y29uc3QgaD1JdCh0LnNwYW5Db250ZXh0KCkudHJhY2VJZCxuKSxwPW9bdHRdLGw9ci5kZXNjcmlwdGlvbjtyZXR1cm4idXJsIiE9PXAmJmwmJihoLnRyYW5zYWN0aW9uPWwpLGZ1bmN0aW9uKHQpe2lmKCJib29sZWFuIj09dHlwZW9mIF9fU0VOVFJZX1RSQUNJTkdfXyYmIV9fU0VOVFJZX1RSQUNJTkdfXylyZXR1cm4hMTtjb25zdCBuPXR8fFgoKT8uZ2V0T3B0aW9ucygpO3JldHVybiEoIW58fG51bGw9PW4udHJhY2VzU2FtcGxlUmF0ZSYmIW4udHJhY2VzU2FtcGxlcil9KCkmJihoLnNhbXBsZWQ9U3RyaW5nKGZ1bmN0aW9uKHQpe2NvbnN0e3RyYWNlRmxhZ3M6bn09dC5zcGFuQ29udGV4dCgpO3JldHVybiBuPT09ZHR9KGUpKSxoLnNhbXBsZV9yYW5kPXM/LmdldCgic2VudHJ5LnNhbXBsZV9yYW5kIik/P2F0KGUpLnNjb3BlPy5nZXRQcm9wYWdhdGlvbkNvbnRleHQoKS5zYW1wbGVSYW5kLnRvU3RyaW5nKCkpLGMoaCksbi5lbWl0KCJjcmVhdGVEc2MiLGgsZSksaH1mdW5jdGlvbiBEdCh0LG49MTAwLGU9MS8wKXt0cnl7cmV0dXJuIEF0KCIiLHQsbixlKX1jYXRjaCh0KXtyZXR1cm57RVJST1I6YCoqbm9uLXNlcmlhbGl6YWJsZSoqICgke3R9KWB9fX1mdW5jdGlvbiBBdCh0LG4sZT0xLzAscj0xLzAsbz1mdW5jdGlvbigpe2NvbnN0IHQ9bmV3IFdlYWtTZXQ7ZnVuY3Rpb24gbihuKXtyZXR1cm4hIXQuaGFzKG4pfHwodC5hZGQobiksITEpfWZ1bmN0aW9uIGUobil7dC5kZWxldGUobil9cmV0dXJuW24sZV19KCkpe2NvbnN0W3MsaV09bztpZihudWxsPT1ufHxbImJvb2xlYW4iLCJzdHJpbmciXS5pbmNsdWRlcyh0eXBlb2Ygbil8fCJudW1iZXIiPT10eXBlb2YgbiYmTnVtYmVyLmlzRmluaXRlKG4pKXJldHVybiBuO2NvbnN0IGM9ZnVuY3Rpb24odCxuKXt0cnl7aWYoImRvbWFpbiI9PT10JiZuJiYib2JqZWN0Ij09dHlwZW9mIG4mJm4uVSlyZXR1cm4iW0RvbWFpbl0iO2lmKCJkb21haW5FbWl0dGVyIj09PXQpcmV0dXJuIltEb21haW5FbWl0dGVyXSI7aWYoInVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWwmJm49PT1nbG9iYWwpcmV0dXJuIltHbG9iYWxdIjtpZigidW5kZWZpbmVkIiE9dHlwZW9mIHdpbmRvdyYmbj09PXdpbmRvdylyZXR1cm4iW1dpbmRvd10iO2lmKCJ1bmRlZmluZWQiIT10eXBlb2YgZG9jdW1lbnQmJm49PT1kb2N1bWVudClyZXR1cm4iW0RvY3VtZW50XSI7aWYoIm9iamVjdCI9PXR5cGVvZihlPW4pJiZudWxsIT09ZSYmKGUuX19pc1Z1ZXx8ZS5NKSlyZXR1cm4iW1Z1ZVZpZXdNb2RlbF0iO2lmKGZ1bmN0aW9uKHQpe3JldHVybiB2KHQpJiYibmF0aXZlRXZlbnQiaW4gdCYmInByZXZlbnREZWZhdWx0ImluIHQmJiJzdG9wUHJvcGFnYXRpb24iaW4gdH0obikpcmV0dXJuIltTeW50aGV0aWNFdmVudF0iO2lmKCJudW1iZXIiPT10eXBlb2YgbiYmIU51bWJlci5pc0Zpbml0ZShuKSlyZXR1cm5gWyR7bn1dYDtpZigiZnVuY3Rpb24iPT10eXBlb2YgbilyZXR1cm5gW0Z1bmN0aW9uOiAke2Z1bmN0aW9uKHQpe3RyeXtyZXR1cm4gdCYmImZ1bmN0aW9uIj09dHlwZW9mIHQmJnQubmFtZXx8Q3R9Y2F0Y2godCl7cmV0dXJuIEN0fX0obil9XWA7aWYoInN5bWJvbCI9PXR5cGVvZiBuKXJldHVybmBbJHtTdHJpbmcobil9XWA7aWYoImJpZ2ludCI9PXR5cGVvZiBuKXJldHVybmBbQmlnSW50OiAke1N0cmluZyhuKX1dYDtjb25zdCByPWZ1bmN0aW9uKHQpe2NvbnN0IG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBuPy5jb25zdHJ1Y3Rvcj9uLmNvbnN0cnVjdG9yLm5hbWU6Im51bGwgcHJvdG90eXBlIn0obik7cmV0dXJuL15IVE1MKFx3KilFbGVtZW50JC8udGVzdChyKT9gW0hUTUxFbGVtZW50OiAke3J9XWA6YFtvYmplY3QgJHtyfV1gfWNhdGNoKHQpe3JldHVybmAqKm5vbi1zZXJpYWxpemFibGUqKiAoJHt0fSlgfXZhciBlfSh0LG4pO2lmKCFjLnN0YXJ0c1dpdGgoIltvYmplY3QgIikpcmV0dXJuIGM7aWYobi5fX3NlbnRyeV9za2lwX25vcm1hbGl6YXRpb25fXylyZXR1cm4gbjtjb25zdCB1PSJudW1iZXIiPT10eXBlb2Ygbi5fX3NlbnRyeV9vdmVycmlkZV9ub3JtYWxpemF0aW9uX2RlcHRoX18/bi5fX3NlbnRyeV9vdmVycmlkZV9ub3JtYWxpemF0aW9uX2RlcHRoX186ZTtpZigwPT09dSlyZXR1cm4gYy5yZXBsYWNlKCJvYmplY3QgIiwiIik7aWYocyhuKSlyZXR1cm4iW0NpcmN1bGFyIH5dIjtjb25zdCBhPW47aWYoYSYmImZ1bmN0aW9uIj09dHlwZW9mIGEudG9KU09OKXRyeXtyZXR1cm4gQXQoIiIsYS50b0pTT04oKSx1LTEscixvKX1jYXRjaCh0KXt9Y29uc3QgZj1BcnJheS5pc0FycmF5KG4pP1tdOnt9O2xldCBoPTA7Y29uc3QgcD1SKG4pO2Zvcihjb25zdCB0IGluIHApe2lmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocCx0KSljb250aW51ZTtpZihoPj1yKXtmW3RdPSJbTWF4UHJvcGVydGllcyB+XSI7YnJlYWt9Y29uc3Qgbj1wW3RdO2ZbdF09QXQodCxuLHUtMSxyLG8pLGgrK31yZXR1cm4gaShuKSxmfWZ1bmN0aW9uIFB0KHQsbil7Y29uc3QgZT1uLnJlcGxhY2UoL1xcL2csIi8iKS5yZXBsYWNlKC9bfFxce30oKVtcXV4kKyo/Ll0vZywiXFwkJiIpO2xldCByPXQ7dHJ5e3I9ZGVjb2RlVVJJKHQpfWNhdGNoKHQpe31yZXR1cm4gci5yZXBsYWNlKC9cXC9nLCIvIikucmVwbGFjZSgvd2VicGFjazpcLz8vZywiIikucmVwbGFjZShuZXcgUmVnRXhwKGAoZmlsZTovLyk/Lyoke2V9LypgLCJpZyIpLCJhcHA6Ly8vIil9ZnVuY3Rpb24gVXQodCxuPVtdKXtyZXR1cm5bdCxuXX1mdW5jdGlvbiBNdCh0LG4pe2NvbnN0IGU9dFsxXTtmb3IoY29uc3QgdCBvZiBlKXtpZihuKHQsdFswXS50eXBlKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBMdCh0KXtjb25zdCBuPW0obCk7cmV0dXJuIG4uZW5jb2RlUG9seWZpbGw/bi5lbmNvZGVQb2x5ZmlsbCh0KToobmV3IFRleHRFbmNvZGVyKS5lbmNvZGUodCl9ZnVuY3Rpb24gQnQodCl7Y29uc3RbbixlXT10O2xldCByPUpTT04uc3RyaW5naWZ5KG4pO2Z1bmN0aW9uIG8odCl7InN0cmluZyI9PXR5cGVvZiByP3I9InN0cmluZyI9PXR5cGVvZiB0P3IrdDpbTHQociksdF06ci5wdXNoKCJzdHJpbmciPT10eXBlb2YgdD9MdCh0KTp0KX1mb3IoY29uc3QgdCBvZiBlKXtjb25zdFtuLGVdPXQ7aWYobyhgXG4ke0pTT04uc3RyaW5naWZ5KG4pfVxuYCksInN0cmluZyI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgVWludDhBcnJheSlvKGUpO2Vsc2V7bGV0IHQ7dHJ5e3Q9SlNPTi5zdHJpbmdpZnkoZSl9Y2F0Y2gobil7dD1KU09OLnN0cmluZ2lmeShEdChlKSl9byh0KX19cmV0dXJuInN0cmluZyI9PXR5cGVvZiByP3I6ZnVuY3Rpb24odCl7Y29uc3Qgbj10LnJlZHVjZSgoKHQsbik9PnQrbi5sZW5ndGgpLDApLGU9bmV3IFVpbnQ4QXJyYXkobik7bGV0IHI9MDtmb3IoY29uc3QgbiBvZiB0KWUuc2V0KG4scikscis9bi5sZW5ndGg7cmV0dXJuIGV9KHIpfWNvbnN0IEd0PXtzZXNzaW9uOiJzZXNzaW9uIixzZXNzaW9uczoic2Vzc2lvbiIsYXR0YWNobWVudDoiYXR0YWNobWVudCIsdHJhbnNhY3Rpb246InRyYW5zYWN0aW9uIixldmVudDoiZXJyb3IiLGNsaWVudF9yZXBvcnQ6ImludGVybmFsIix1c2VyX3JlcG9ydDoiZGVmYXVsdCIscHJvZmlsZToicHJvZmlsZSIscHJvZmlsZV9jaHVuazoicHJvZmlsZSIscmVwbGF5X2V2ZW50OiJyZXBsYXkiLHJlcGxheV9yZWNvcmRpbmc6InJlcGxheSIsY2hlY2tfaW46Im1vbml0b3IiLGZlZWRiYWNrOiJmZWVkYmFjayIsc3Bhbjoic3BhbiIscmF3X3NlY3VyaXR5OiJzZWN1cml0eSIsbG9nOiJsb2dfaXRlbSJ9O2Z1bmN0aW9uIEp0KHQpe2lmKCF0Py5zZGspcmV0dXJuO2NvbnN0e25hbWU6bix2ZXJzaW9uOmV9PXQuc2RrO3JldHVybntuYW1lOm4sdmVyc2lvbjplfX1mdW5jdGlvbiB6dCh0LG4sZSxyKXtjb25zdCBvPUp0KGUpLHM9dC50eXBlJiYicmVwbGF5X2V2ZW50IiE9PXQudHlwZT90LnR5cGU6ImV2ZW50IjshZnVuY3Rpb24odCxuKXtuJiYodC5zZGs9dC5zZGt8fHt9LHQuc2RrLm5hbWU9dC5zZGsubmFtZXx8bi5uYW1lLHQuc2RrLnZlcnNpb249dC5zZGsudmVyc2lvbnx8bi52ZXJzaW9uLHQuc2RrLmludGVncmF0aW9ucz1bLi4udC5zZGsuaW50ZWdyYXRpb25zfHxbXSwuLi5uLmludGVncmF0aW9uc3x8W11dLHQuc2RrLnBhY2thZ2VzPVsuLi50LnNkay5wYWNrYWdlc3x8W10sLi4ubi5wYWNrYWdlc3x8W11dKX0odCxlPy5zZGspO2NvbnN0IGk9ZnVuY3Rpb24odCxuLGUscil7Y29uc3Qgbz10LnNka1Byb2Nlc3NpbmdNZXRhZGF0YT8uZHluYW1pY1NhbXBsaW5nQ29udGV4dDtyZXR1cm57ZXZlbnRfaWQ6dC5ldmVudF9pZCxzZW50X2F0OihuZXcgRGF0ZSkudG9JU09TdHJpbmcoKSwuLi5uJiZ7c2RrOm59LC4uLiEhZSYmciYme2RzbjpqdChyKX0sLi4ubyYme3RyYWNlOm99fX0odCxvLHIsbik7ZGVsZXRlIHQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhO3JldHVybiBVdChpLFtbe3R5cGU6c30sdF1dKX1jb25zdCBIdD0iX19TRU5UUllfU1VQUFJFU1NfVFJBQ0lOR19fIjtmdW5jdGlvbiBGdCh0KXtjb25zdCBuPVEoZCgpKTtyZXR1cm4gbi5zdXBwcmVzc1RyYWNpbmc/bi5zdXBwcmVzc1RyYWNpbmcodCk6ZnVuY3Rpb24oLi4udCl7Y29uc3Qgbj1RKGQoKSk7aWYoMj09PXQubGVuZ3RoKXtjb25zdFtlLHJdPXQ7cmV0dXJuIGU/bi53aXRoU2V0U2NvcGUoZSxyKTpuLndpdGhTY29wZShyKX1yZXR1cm4gbi53aXRoU2NvcGUodFswXSl9KChuPT4obi5zZXRTREtQcm9jZXNzaW5nTWV0YWRhdGEoe1tIdF06ITB9KSx0KCkpKSl9dmFyIFd0O2Z1bmN0aW9uIFl0KHQpe3JldHVybiBuZXcgS3QoKG49PntuKHQpfSkpfSFmdW5jdGlvbih0KXt0W3QuUEVORElORz0wXT0iUEVORElORyI7dFt0LlJFU09MVkVEPTFdPSJSRVNPTFZFRCI7dFt0LlJFSkVDVEVEPTJdPSJSRUpFQ1RFRCJ9KFd0fHwoV3Q9e30pKTtjbGFzcyBLdHtjb25zdHJ1Y3Rvcih0KXt0aGlzLkw9V3QuUEVORElORyx0aGlzLkI9W10sdGhpcy5HKHQpfXRoZW4odCxuKXtyZXR1cm4gbmV3IEt0KCgoZSxyKT0+e3RoaXMuQi5wdXNoKFshMSxuPT57aWYodCl0cnl7ZSh0KG4pKX1jYXRjaCh0KXtyKHQpfWVsc2UgZShuKX0sdD0+e2lmKG4pdHJ5e2Uobih0KSl9Y2F0Y2godCl7cih0KX1lbHNlIHIodCl9XSksdGhpcy5KKCl9KSl9Y2F0Y2godCl7cmV0dXJuIHRoaXMudGhlbigodD0+dCksdCl9ZmluYWxseSh0KXtyZXR1cm4gbmV3IEt0KCgobixlKT0+e2xldCByLG87cmV0dXJuIHRoaXMudGhlbigobj0+e289ITEscj1uLHQmJnQoKX0pLChuPT57bz0hMCxyPW4sdCYmdCgpfSkpLnRoZW4oKCgpPT57bz9lKHIpOm4ocil9KSl9KSl9Sigpe2lmKHRoaXMuTD09PVd0LlBFTkRJTkcpcmV0dXJuO2NvbnN0IHQ9dGhpcy5CLnNsaWNlKCk7dGhpcy5CPVtdLHQuZm9yRWFjaCgodD0+e3RbMF18fCh0aGlzLkw9PT1XdC5SRVNPTFZFRCYmdFsxXSh0aGlzLkgpLHRoaXMuTD09PVd0LlJFSkVDVEVEJiZ0WzJdKHRoaXMuSCksdFswXT0hMCl9KSl9Ryh0KXtjb25zdCBuPSh0LG4pPT57dGhpcy5MPT09V3QuUEVORElORyYmKHcobik/bi50aGVuKGUscik6KHRoaXMuTD10LHRoaXMuSD1uLHRoaXMuSigpKSl9LGU9dD0+e24oV3QuUkVTT0xWRUQsdCl9LHI9dD0+e24oV3QuUkVKRUNURUQsdCl9O3RyeXt0KGUscil9Y2F0Y2godCl7cih0KX19fWZ1bmN0aW9uIFZ0KHQsbil7Y29uc3R7ZmluZ2VycHJpbnQ6ZSxzcGFuOnIsYnJlYWRjcnVtYnM6byxzZGtQcm9jZXNzaW5nTWV0YWRhdGE6c309bjshZnVuY3Rpb24odCxuKXtjb25zdHtleHRyYTplLHRhZ3M6cix1c2VyOm8sY29udGV4dHM6cyxsZXZlbDppLHRyYW5zYWN0aW9uTmFtZTpjfT1uO09iamVjdC5rZXlzKGUpLmxlbmd0aCYmKHQuZXh0cmE9ey4uLmUsLi4udC5leHRyYX0pO09iamVjdC5rZXlzKHIpLmxlbmd0aCYmKHQudGFncz17Li4uciwuLi50LnRhZ3N9KTtPYmplY3Qua2V5cyhvKS5sZW5ndGgmJih0LnVzZXI9ey4uLm8sLi4udC51c2VyfSk7T2JqZWN0LmtleXMocykubGVuZ3RoJiYodC5jb250ZXh0cz17Li4ucywuLi50LmNvbnRleHRzfSk7aSYmKHQubGV2ZWw9aSk7YyYmInRyYW5zYWN0aW9uIiE9PXQudHlwZSYmKHQudHJhbnNhY3Rpb249Yyl9KHQsbiksciYmZnVuY3Rpb24odCxuKXt0LmNvbnRleHRzPXt0cmFjZTptdChuKSwuLi50LmNvbnRleHRzfSx0LnNka1Byb2Nlc3NpbmdNZXRhZGF0YT17ZHluYW1pY1NhbXBsaW5nQ29udGV4dDpPdChuKSwuLi50LnNka1Byb2Nlc3NpbmdNZXRhZGF0YX07Y29uc3QgZT1TdChuKSxyPV90KGUpLmRlc2NyaXB0aW9uO3ImJiF0LnRyYW5zYWN0aW9uJiYidHJhbnNhY3Rpb24iPT09dC50eXBlJiYodC50cmFuc2FjdGlvbj1yKX0odCxyKSxmdW5jdGlvbih0LG4pe3QuZmluZ2VycHJpbnQ9dC5maW5nZXJwcmludD9BcnJheS5pc0FycmF5KHQuZmluZ2VycHJpbnQpP3QuZmluZ2VycHJpbnQ6W3QuZmluZ2VycHJpbnRdOltdLG4mJih0LmZpbmdlcnByaW50PXQuZmluZ2VycHJpbnQuY29uY2F0KG4pKTt0LmZpbmdlcnByaW50Lmxlbmd0aHx8ZGVsZXRlIHQuZmluZ2VycHJpbnR9KHQsZSksZnVuY3Rpb24odCxuKXtjb25zdCBlPVsuLi50LmJyZWFkY3J1bWJzfHxbXSwuLi5uXTt0LmJyZWFkY3J1bWJzPWUubGVuZ3RoP2U6dm9pZCAwfSh0LG8pLGZ1bmN0aW9uKHQsbil7dC5zZGtQcm9jZXNzaW5nTWV0YWRhdGE9ey4uLnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhLC4uLm59fSh0LHMpfWNvbnN0IFp0PSI3Ijtjb25zdCBxdD1TeW1ib2wuZm9yKCJTZW50cnlCdWZmZXJGdWxsRXJyb3IiKTtmdW5jdGlvbiBRdCh0KXtjb25zdCBuPVtdO2Z1bmN0aW9uIGUodCl7cmV0dXJuIG4uc3BsaWNlKG4uaW5kZXhPZih0KSwxKVswXXx8UHJvbWlzZS5yZXNvbHZlKHZvaWQgMCl9cmV0dXJueyQ6bixhZGQ6ZnVuY3Rpb24ocil7aWYoISh2b2lkIDA9PT10fHxuLmxlbmd0aDx0KSlyZXR1cm4gbz1xdCxuZXcgS3QoKCh0LG4pPT57bihvKX0pKTt2YXIgbztjb25zdCBzPXIoKTtyZXR1cm4tMT09PW4uaW5kZXhPZihzKSYmbi5wdXNoKHMpLHMudGhlbigoKCk9PmUocykpKS50aGVuKG51bGwsKCgpPT5lKHMpLnRoZW4obnVsbCwoKCk9Pnt9KSkpKSxzfSxkcmFpbjpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IEt0KCgoZSxyKT0+e2xldCBvPW4ubGVuZ3RoO2lmKCFvKXJldHVybiBlKCEwKTtjb25zdCBzPXNldFRpbWVvdXQoKCgpPT57dCYmdD4wJiZlKCExKX0pLHQpO24uZm9yRWFjaCgodD0+e1l0KHQpLnRoZW4oKCgpPT57LS1vfHwoY2xlYXJUaW1lb3V0KHMpLGUoITApKX0pLHIpfSkpfSkpfX19Y29uc3QgWHQ9NmU0O2Z1bmN0aW9uIHRuKHQse3N0YXR1c0NvZGU6bixoZWFkZXJzOmV9LHI9RGF0ZS5ub3coKSl7Y29uc3Qgbz17Li4udH0scz1lPy5bIngtc2VudHJ5LXJhdGUtbGltaXRzIl0saT1lPy5bInJldHJ5LWFmdGVyIl07aWYocylmb3IoY29uc3QgdCBvZiBzLnRyaW0oKS5zcGxpdCgiLCIpKXtjb25zdFtuLGUsLCxzXT10LnNwbGl0KCI6Iiw1KSxpPXBhcnNlSW50KG4sMTApLGM9MWUzKihpc05hTihpKT82MDppKTtpZihlKWZvcihjb25zdCB0IG9mIGUuc3BsaXQoIjsiKSkibWV0cmljX2J1Y2tldCI9PT10JiZzJiYhcy5zcGxpdCgiOyIpLmluY2x1ZGVzKCJjdXN0b20iKXx8KG9bdF09citjKTtlbHNlIG8uYWxsPXIrY31lbHNlIGk/by5hbGw9citmdW5jdGlvbih0LG49RGF0ZS5ub3coKSl7Y29uc3QgZT1wYXJzZUludChgJHt0fWAsMTApO2lmKCFpc05hTihlKSlyZXR1cm4gMWUzKmU7Y29uc3Qgcj1EYXRlLnBhcnNlKGAke3R9YCk7cmV0dXJuIGlzTmFOKHIpP1h0OnItbn0oaSxyKTo0Mjk9PT1uJiYoby5hbGw9cis2ZTQpO3JldHVybiBvfWNvbnN0IG5uPTY0O2Z1bmN0aW9uIGVuKHQsbixlPVF0KHQuYnVmZmVyU2l6ZXx8bm4pKXtsZXQgcj17fTtyZXR1cm57c2VuZDpmdW5jdGlvbih0KXtjb25zdCBvPVtdO2lmKE10KHQsKCh0LG4pPT57Y29uc3QgZT1mdW5jdGlvbih0KXtyZXR1cm4gR3RbdF19KG4pOyhmdW5jdGlvbih0LG4sZT1EYXRlLm5vdygpKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtyZXR1cm4gdFtuXXx8dC5hbGx8fDB9KHQsbik+ZX0pKHIsZSl8fG8ucHVzaCh0KX0pKSwwPT09by5sZW5ndGgpcmV0dXJuIFl0KHt9KTtjb25zdCBzPVV0KHRbMF0sbyksaT10PT57TXQocywoKHQsbik9Pnt9KSl9O3JldHVybiBlLmFkZCgoKCk9Pm4oe2JvZHk6QnQocyl9KS50aGVuKCh0PT4odm9pZCAwIT09dC5zdGF0dXNDb2RlJiYodC5zdGF0dXNDb2RlPDIwMHx8dC5zdGF0dXNDb2RlPj0zMDApJiZoJiZrLndhcm4oYFNlbnRyeSByZXNwb25kZWQgd2l0aCBzdGF0dXMgY29kZSAke3Quc3RhdHVzQ29kZX0gdG8gc2VudCBldmVudC5gKSxyPXRuKHIsdCksdCkpLCh0PT57dGhyb3cgaSgpLGgmJmsuZXJyb3IoIkVuY291bnRlcmVkIGVycm9yIHJ1bm5pbmcgdHJhbnNwb3J0IHJlcXVlc3Q6Iix0KSx0fSkpKSkudGhlbigodD0+dCksKHQ9PntpZih0PT09cXQpcmV0dXJuIGgmJmsuZXJyb3IoIlNraXBwZWQgc2VuZGluZyBldmVudCBiZWNhdXNlIGJ1ZmZlciBpcyBmdWxsLiIpLGkoKSxZdCh7fSk7dGhyb3cgdH0pKX0sZmx1c2g6dD0+ZS5kcmFpbih0KX19Y29uc3Qgcm49L14oXFMrOlxcfFwvPykoW1xzXFNdKj8pKCg/OlwuezEsMn18W14vXFxdKz98KShcLlteLi9cXF0qfCkpKD86Wy9cXF0qKSQvO2Z1bmN0aW9uIG9uKHQpe2NvbnN0IG49ZnVuY3Rpb24odCl7Y29uc3Qgbj10Lmxlbmd0aD4xMDI0P2A8dHJ1bmNhdGVkPiR7dC5zbGljZSgtMTAyNCl9YDp0LGU9cm4uZXhlYyhuKTtyZXR1cm4gZT9lLnNsaWNlKDEpOltdfSh0KSxlPW5bMF18fCIiO2xldCByPW5bMV07cmV0dXJuIGV8fHI/KHImJihyPXIuc2xpY2UoMCxyLmxlbmd0aC0xKSksZStyKToiLiJ9ZnVuY3Rpb24gc24odCxuPSExKXtyZXR1cm4hKG58fHQmJiF0LnN0YXJ0c1dpdGgoIi8iKSYmIXQubWF0Y2goL15bQS1aXTovKSYmIXQuc3RhcnRzV2l0aCgiLiIpJiYhdC5tYXRjaCgvXlthLXpBLVpdKFthLXpBLVowLTkuXC0rXSkqOlwvXC8vKSkmJnZvaWQgMCE9PXQmJiF0LmluY2x1ZGVzKCJub2RlX21vZHVsZXMvIil9Y29uc3QgY249U3ltYm9sKCJBZ2VudEJhc2VJbnRlcm5hbFN0YXRlIik7Y2xhc3MgdW4gZXh0ZW5kcyBzLkFnZW50e2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpLHRoaXNbY25dPXt9fWlzU2VjdXJlRW5kcG9pbnQodCl7aWYodCl7aWYoImJvb2xlYW4iPT10eXBlb2YgdC5zZWN1cmVFbmRwb2ludClyZXR1cm4gdC5zZWN1cmVFbmRwb2ludDtpZigic3RyaW5nIj09dHlwZW9mIHQucHJvdG9jb2wpcmV0dXJuImh0dHBzOiI9PT10LnByb3RvY29sfWNvbnN0e3N0YWNrOm59PW5ldyBFcnJvcjtyZXR1cm4ic3RyaW5nIj09dHlwZW9mIG4mJm4uc3BsaXQoIlxuIikuc29tZSgodD0+LTEhPT10LmluZGV4T2YoIihodHRwcy5qczoiKXx8LTEhPT10LmluZGV4T2YoIm5vZGU6aHR0cHM6IikpKX1jcmVhdGVTb2NrZXQodCxuLGUpe2NvbnN0IHI9ey4uLm4sc2VjdXJlRW5kcG9pbnQ6dGhpcy5pc1NlY3VyZUVuZHBvaW50KG4pfTtQcm9taXNlLnJlc29sdmUoKS50aGVuKCgoKT0+dGhpcy5jb25uZWN0KHQscikpKS50aGVuKChvPT57aWYobyBpbnN0YW5jZW9mIHMuQWdlbnQpcmV0dXJuIG8uYWRkUmVxdWVzdCh0LHIpO3RoaXNbY25dLmN1cnJlbnRTb2NrZXQ9byxzdXBlci5jcmVhdGVTb2NrZXQodCxuLGUpfSksZSl9Y3JlYXRlQ29ubmVjdGlvbigpe2NvbnN0IHQ9dGhpc1tjbl0uY3VycmVudFNvY2tldDtpZih0aGlzW2NuXS5jdXJyZW50U29ja2V0PXZvaWQgMCwhdCl0aHJvdyBuZXcgRXJyb3IoIk5vIHNvY2tldCB3YXMgcmV0dXJuZWQgaW4gdGhlIGBjb25uZWN0KClgIGZ1bmN0aW9uIik7cmV0dXJuIHR9Z2V0IGRlZmF1bHRQb3J0KCl7cmV0dXJuIHRoaXNbY25dLmRlZmF1bHRQb3J0Pz8oImh0dHBzOiI9PT10aGlzLnByb3RvY29sPzQ0Mzo4MCl9c2V0IGRlZmF1bHRQb3J0KHQpe3RoaXNbY25dJiYodGhpc1tjbl0uZGVmYXVsdFBvcnQ9dCl9Z2V0IHByb3RvY29sKCl7cmV0dXJuIHRoaXNbY25dLnByb3RvY29sPz8odGhpcy5pc1NlY3VyZUVuZHBvaW50KCk/Imh0dHBzOiI6Imh0dHA6Iil9c2V0IHByb3RvY29sKHQpe3RoaXNbY25dJiYodGhpc1tjbl0ucHJvdG9jb2w9dCl9fWZ1bmN0aW9uIGFuKC4uLnQpe2subG9nKCJbaHR0cHMtcHJveHktYWdlbnQ6cGFyc2UtcHJveHktcmVzcG9uc2VdIiwuLi50KX1mdW5jdGlvbiBmbih0KXtyZXR1cm4gbmV3IFByb21pc2UoKChuLGUpPT57bGV0IHI9MDtjb25zdCBvPVtdO2Z1bmN0aW9uIHMoKXtjb25zdCBjPXQucmVhZCgpO2M/ZnVuY3Rpb24oYyl7by5wdXNoKGMpLHIrPWMubGVuZ3RoO2NvbnN0IHU9QnVmZmVyLmNvbmNhdChvLHIpLGE9dS5pbmRleE9mKCJcclxuXHJcbiIpO2lmKC0xPT09YSlyZXR1cm4gYW4oImhhdmUgbm90IHJlY2VpdmVkIGVuZCBvZiBIVFRQIGhlYWRlcnMgeWV0Li4uIiksdm9pZCBzKCk7Y29uc3QgZj11LnN1YmFycmF5KDAsYSkudG9TdHJpbmcoImFzY2lpIikuc3BsaXQoIlxyXG4iKSxoPWYuc2hpZnQoKTtpZighaClyZXR1cm4gdC5kZXN0cm95KCksZShuZXcgRXJyb3IoIk5vIGhlYWRlciByZWNlaXZlZCBmcm9tIHByb3h5IENPTk5FQ1QgcmVzcG9uc2UiKSk7Y29uc3QgcD1oLnNwbGl0KCIgIiksbD0rKHBbMV18fDApLGQ9cC5zbGljZSgyKS5qb2luKCIgIiksbT17fTtmb3IoY29uc3QgbiBvZiBmKXtpZighbiljb250aW51ZTtjb25zdCByPW4uaW5kZXhPZigiOiIpO2lmKC0xPT09cilyZXR1cm4gdC5kZXN0cm95KCksZShuZXcgRXJyb3IoYEludmFsaWQgaGVhZGVyIGZyb20gcHJveHkgQ09OTkVDVCByZXNwb25zZTogIiR7bn0iYCkpO2NvbnN0IG89bi5zbGljZSgwLHIpLnRvTG93ZXJDYXNlKCkscz1uLnNsaWNlKHIrMSkudHJpbVN0YXJ0KCksaT1tW29dOyJzdHJpbmciPT10eXBlb2YgaT9tW29dPVtpLHNdOkFycmF5LmlzQXJyYXkoaSk/aS5wdXNoKHMpOm1bb109c31hbigiZ290IHByb3h5IHNlcnZlciByZXNwb25zZTogJW8gJW8iLGgsbSksaSgpLG4oe2Nvbm5lY3Q6e3N0YXR1c0NvZGU6bCxzdGF0dXNUZXh0OmQsaGVhZGVyczptfSxidWZmZXJlZDp1fSl9KGMpOnQub25jZSgicmVhZGFibGUiLHMpfWZ1bmN0aW9uIGkoKXt0LnJlbW92ZUxpc3RlbmVyKCJlbmQiLGMpLHQucmVtb3ZlTGlzdGVuZXIoImVycm9yIix1KSx0LnJlbW92ZUxpc3RlbmVyKCJyZWFkYWJsZSIscyl9ZnVuY3Rpb24gYygpe2koKSxhbigib25lbmQiKSxlKG5ldyBFcnJvcigiUHJveHkgY29ubmVjdGlvbiBlbmRlZCBiZWZvcmUgcmVjZWl2aW5nIENPTk5FQ1QgcmVzcG9uc2UiKSl9ZnVuY3Rpb24gdSh0KXtpKCksYW4oIm9uZXJyb3IgJW8iLHQpLGUodCl9dC5vbigiZXJyb3IiLHUpLHQub24oImVuZCIsYykscygpfSkpfWZ1bmN0aW9uIGhuKC4uLnQpe2subG9nKCJbaHR0cHMtcHJveHktYWdlbnRdIiwuLi50KX1jbGFzcyBwbiBleHRlbmRzIHVue3N0YXRpYyBfX2luaXRTdGF0aWMoKXt0aGlzLnByb3RvY29scz1bImh0dHAiLCJodHRwcyJdfWNvbnN0cnVjdG9yKHQsbil7c3VwZXIobiksdGhpcy5vcHRpb25zPXt9LHRoaXMucHJveHk9InN0cmluZyI9PXR5cGVvZiB0P25ldyBVUkwodCk6dCx0aGlzLnByb3h5SGVhZGVycz1uPy5oZWFkZXJzPz97fSxobigiQ3JlYXRpbmcgbmV3IEh0dHBzUHJveHlBZ2VudCBpbnN0YW5jZTogJW8iLHRoaXMucHJveHkuaHJlZik7Y29uc3QgZT0odGhpcy5wcm94eS5ob3N0bmFtZXx8dGhpcy5wcm94eS5ob3N0KS5yZXBsYWNlKC9eXFt8XF0kL2csIiIpLHI9dGhpcy5wcm94eS5wb3J0P3BhcnNlSW50KHRoaXMucHJveHkucG9ydCwxMCk6Imh0dHBzOiI9PT10aGlzLnByb3h5LnByb3RvY29sPzQ0Mzo4MDt0aGlzLmNvbm5lY3RPcHRzPXtBTFBOUHJvdG9jb2xzOlsiaHR0cC8xLjEiXSwuLi5uP2RuKG4sImhlYWRlcnMiKTpudWxsLGhvc3Q6ZSxwb3J0OnJ9fWFzeW5jIGNvbm5lY3QodCxuKXtjb25zdHtwcm94eTplfT10aGlzO2lmKCFuLmhvc3QpdGhyb3cgbmV3IFR5cGVFcnJvcignTm8gImhvc3QiIHByb3ZpZGVkJyk7bGV0IHI7aWYoImh0dHBzOiI9PT1lLnByb3RvY29sKXtobigiQ3JlYXRpbmcgYHRscy5Tb2NrZXRgOiAlbyIsdGhpcy5jb25uZWN0T3B0cyk7Y29uc3QgdD10aGlzLmNvbm5lY3RPcHRzLnNlcnZlcm5hbWV8fHRoaXMuY29ubmVjdE9wdHMuaG9zdDtyPWYuY29ubmVjdCh7Li4udGhpcy5jb25uZWN0T3B0cyxzZXJ2ZXJuYW1lOnQmJmEuaXNJUCh0KT92b2lkIDA6dH0pfWVsc2UgaG4oIkNyZWF0aW5nIGBuZXQuU29ja2V0YDogJW8iLHRoaXMuY29ubmVjdE9wdHMpLHI9YS5jb25uZWN0KHRoaXMuY29ubmVjdE9wdHMpO2NvbnN0IG89ImZ1bmN0aW9uIj09dHlwZW9mIHRoaXMucHJveHlIZWFkZXJzP3RoaXMucHJveHlIZWFkZXJzKCk6ey4uLnRoaXMucHJveHlIZWFkZXJzfSxzPWEuaXNJUHY2KG4uaG9zdCk/YFske24uaG9zdH1dYDpuLmhvc3Q7bGV0IGk9YENPTk5FQ1QgJHtzfToke24ucG9ydH0gSFRUUC8xLjFcclxuYDtpZihlLnVzZXJuYW1lfHxlLnBhc3N3b3JkKXtjb25zdCB0PWAke2RlY29kZVVSSUNvbXBvbmVudChlLnVzZXJuYW1lKX06JHtkZWNvZGVVUklDb21wb25lbnQoZS5wYXNzd29yZCl9YDtvWyJQcm94eS1BdXRob3JpemF0aW9uIl09YEJhc2ljICR7QnVmZmVyLmZyb20odCkudG9TdHJpbmcoImJhc2U2NCIpfWB9by5Ib3N0PWAke3N9OiR7bi5wb3J0fWAsb1siUHJveHktQ29ubmVjdGlvbiJdfHwob1siUHJveHktQ29ubmVjdGlvbiJdPXRoaXMua2VlcEFsaXZlPyJLZWVwLUFsaXZlIjoiY2xvc2UiKTtmb3IoY29uc3QgdCBvZiBPYmplY3Qua2V5cyhvKSlpKz1gJHt0fTogJHtvW3RdfVxyXG5gO2NvbnN0IGM9Zm4ocik7ci53cml0ZShgJHtpfVxyXG5gKTtjb25zdHtjb25uZWN0OnUsYnVmZmVyZWQ6aH09YXdhaXQgYztpZih0LmVtaXQoInByb3h5Q29ubmVjdCIsdSksdGhpcy5lbWl0KCJwcm94eUNvbm5lY3QiLHUsdCksMjAwPT09dS5zdGF0dXNDb2RlKXtpZih0Lm9uY2UoInNvY2tldCIsbG4pLG4uc2VjdXJlRW5kcG9pbnQpe2huKCJVcGdyYWRpbmcgc29ja2V0IGNvbm5lY3Rpb24gdG8gVExTIik7Y29uc3QgdD1uLnNlcnZlcm5hbWV8fG4uaG9zdDtyZXR1cm4gZi5jb25uZWN0KHsuLi5kbihuLCJob3N0IiwicGF0aCIsInBvcnQiKSxzb2NrZXQ6cixzZXJ2ZXJuYW1lOmEuaXNJUCh0KT92b2lkIDA6dH0pfXJldHVybiByfXIuZGVzdHJveSgpO2NvbnN0IHA9bmV3IGEuU29ja2V0KHt3cml0YWJsZTohMX0pO3JldHVybiBwLnJlYWRhYmxlPSEwLHQub25jZSgic29ja2V0IiwodD0+e2huKCJSZXBsYXlpbmcgcHJveHkgYnVmZmVyIGZvciBmYWlsZWQgcmVxdWVzdCIpLHQucHVzaChoKSx0LnB1c2gobnVsbCl9KSkscH19ZnVuY3Rpb24gbG4odCl7dC5yZXN1bWUoKX1mdW5jdGlvbiBkbih0LC4uLm4pe2NvbnN0IGU9e307bGV0IHI7Zm9yKHIgaW4gdCluLmluY2x1ZGVzKHIpfHwoZVtyXT10W3JdKTtyZXR1cm4gZX1wbi5fX2luaXRTdGF0aWMoKTtjb25zdCBtbj0zMjc2ODtmdW5jdGlvbiBnbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eW0EtWl06LywiIikucmVwbGFjZSgvXFwvZywiLyIpfWNvbnN0IHluPW47bGV0IGJuLF9uPTAsdm49e307ZnVuY3Rpb24gd24odCl7eW4uZGVidWcmJmNvbnNvbGUubG9nKGBbQU5SIFdvcmtlcl0gJHt0fWApfXZhciBTbiwkbixFbjtjb25zdCB4bj1mdW5jdGlvbih0KXtsZXQgbjt0cnl7bj1uZXcgVVJMKHQudXJsKX1jYXRjaChuKXtyZXR1cm4gVCgoKCk9Pntjb25zb2xlLndhcm4oIltAc2VudHJ5L25vZGVdOiBJbnZhbGlkIGRzbiBvciB0dW5uZWwgb3B0aW9uLCB3aWxsIG5vdCBzZW5kIGFueSBldmVudHMuIFRoZSB0dW5uZWwgb3B0aW9uIG11c3QgYmUgYSBmdWxsIFVSTCB3aGVuIHVzZWQuIil9KSksZW4odCwoKCk9PlByb21pc2UucmVzb2x2ZSh7fSkpKX1jb25zdCBlPSJodHRwczoiPT09bi5wcm90b2NvbCxyPWZ1bmN0aW9uKHQsbil7Y29uc3R7bm9fcHJveHk6ZX09cHJvY2Vzcy5lbnYscj1lPy5zcGxpdCgiLCIpLnNvbWUoKG49PnQuaG9zdC5lbmRzV2l0aChuKXx8dC5ob3N0bmFtZS5lbmRzV2l0aChuKSkpO3JldHVybiByP3ZvaWQgMDpufShuLHQucHJveHl8fChlP3Byb2Nlc3MuZW52Lmh0dHBzX3Byb3h5OnZvaWQgMCl8fHByb2Nlc3MuZW52Lmh0dHBfcHJveHkpLG89ZT9pOnMsYT12b2lkIDAhPT10LmtlZXBBbGl2ZSYmdC5rZWVwQWxpdmUsZj1yP25ldyBwbihyKTpuZXcgby5BZ2VudCh7a2VlcEFsaXZlOmEsbWF4U29ja2V0czozMCx0aW1lb3V0OjJlM30pLGg9ZnVuY3Rpb24odCxuLGUpe2NvbnN0e2hvc3RuYW1lOnIscGF0aG5hbWU6byxwb3J0OnMscHJvdG9jb2w6aSxzZWFyY2g6YX09bmV3IFVSTCh0LnVybCk7cmV0dXJuIGZ1bmN0aW9uKGYpe3JldHVybiBuZXcgUHJvbWlzZSgoKGgscCk9PntGdCgoKCk9PntsZXQgbD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGMoe3JlYWQoKXt0aGlzLnB1c2godCksdGhpcy5wdXNoKG51bGwpfX0pfShmLmJvZHkpO2NvbnN0IGQ9ey4uLnQuaGVhZGVyc307Zi5ib2R5Lmxlbmd0aD5tbiYmKGRbImNvbnRlbnQtZW5jb2RpbmciXT0iZ3ppcCIsbD1sLnBpcGUodSgpKSk7Y29uc3QgbT1uLnJlcXVlc3Qoe21ldGhvZDoiUE9TVCIsYWdlbnQ6ZSxoZWFkZXJzOmQsaG9zdG5hbWU6cixwYXRoOmAke299JHthfWAscG9ydDpzLHByb3RvY29sOmksY2E6dC5jYUNlcnRzfSwodD0+e3Qub24oImRhdGEiLCgoKT0+e30pKSx0Lm9uKCJlbmQiLCgoKT0+e30pKSx0LnNldEVuY29kaW5nKCJ1dGY4Iik7Y29uc3Qgbj10LmhlYWRlcnNbInJldHJ5LWFmdGVyIl0/P251bGwsZT10LmhlYWRlcnNbIngtc2VudHJ5LXJhdGUtbGltaXRzIl0/P251bGw7aCh7c3RhdHVzQ29kZTp0LnN0YXR1c0NvZGUsaGVhZGVyczp7InJldHJ5LWFmdGVyIjpuLCJ4LXNlbnRyeS1yYXRlLWxpbWl0cyI6QXJyYXkuaXNBcnJheShlKT9lWzBdfHxudWxsOmV9fSl9KSk7bS5vbigiZXJyb3IiLHApLGwucGlwZShtKX0pKX0pKX19KHQsdC5odHRwTW9kdWxlPz9vLGYpO3JldHVybiBlbih0LGgpfSh7dXJsOihTbj15bi5kc24sJG49eW4udHVubmVsLEVuPXluLnNka01ldGFkYXRhLnNkaywkbnx8YCR7ZnVuY3Rpb24odCl7cmV0dXJuYCR7ZnVuY3Rpb24odCl7Y29uc3Qgbj10LnByb3RvY29sP2Ake3QucHJvdG9jb2x9OmA6IiIsZT10LnBvcnQ/YDoke3QucG9ydH1gOiIiO3JldHVybmAke259Ly8ke3QuaG9zdH0ke2V9JHt0LnBhdGg/YC8ke3QucGF0aH1gOiIifS9hcGkvYH0odCl9JHt0LnByb2plY3RJZH0vZW52ZWxvcGUvYH0oU24pfT8ke2Z1bmN0aW9uKHQsbil7Y29uc3QgZT17c2VudHJ5X3ZlcnNpb246WnR9O3JldHVybiB0LnB1YmxpY0tleSYmKGUuc2VudHJ5X2tleT10LnB1YmxpY0tleSksbiYmKGUuc2VudHJ5X2NsaWVudD1gJHtuLm5hbWV9LyR7bi52ZXJzaW9ufWApLG5ldyBVUkxTZWFyY2hQYXJhbXMoZSkudG9TdHJpbmcoKX0oU24sRW4pfWApfSk7YXN5bmMgZnVuY3Rpb24gTm4oKXtpZihibil7d24oIlNlbmRpbmcgYWJub3JtYWwgc2Vzc2lvbiIpLEwoYm4se3N0YXR1czoiYWJub3JtYWwiLGFibm9ybWFsX21lY2hhbmlzbToiYW5yX2ZvcmVncm91bmQiLHJlbGVhc2U6eW4ucmVsZWFzZSxlbnZpcm9ubWVudDp5bi5lbnZpcm9ubWVudH0pO2NvbnN0IHQ9ZnVuY3Rpb24odCxuLGUscil7Y29uc3Qgbz1KdChlKTtyZXR1cm4gVXQoe3NlbnRfYXQ6KG5ldyBEYXRlKS50b0lTT1N0cmluZygpLC4uLm8mJntzZGs6b30sLi4uISFyJiZuJiZ7ZHNuOmp0KG4pfX0sWyJhZ2dyZWdhdGVzImluIHQ/W3t0eXBlOiJzZXNzaW9ucyJ9LHRdOlt7dHlwZToic2Vzc2lvbiJ9LHQudG9KU09OKCldXSl9KGJuLHluLmRzbix5bi5zZGtNZXRhZGF0YSx5bi50dW5uZWwpO3duKEpTT04uc3RyaW5naWZ5KHQpKSxhd2FpdCB4bi5zZW5kKHQpO3RyeXtlPy5wb3N0TWVzc2FnZSgic2Vzc2lvbi1lbmRlZCIpfWNhdGNoKHQpe319fWZ1bmN0aW9uIENuKHQpe2lmKCF0KXJldHVybjtjb25zdCBuPWZ1bmN0aW9uKHQpe2lmKCF0Lmxlbmd0aClyZXR1cm5bXTtjb25zdCBuPUFycmF5LmZyb20odCk7cmV0dXJuL3NlbnRyeVdyYXBwZWQvLnRlc3QoTnQobikuZnVuY3Rpb258fCIiKSYmbi5wb3AoKSxuLnJldmVyc2UoKSx4dC50ZXN0KE50KG4pLmZ1bmN0aW9ufHwiIikmJihuLnBvcCgpLHh0LnRlc3QoTnQobikuZnVuY3Rpb258fCIiKSYmbi5wb3AoKSksbi5zbGljZSgwLCR0KS5tYXAoKHQ9Pih7Li4udCxmaWxlbmFtZTp0LmZpbGVuYW1lfHxOdChuKS5maWxlbmFtZSxmdW5jdGlvbjp0LmZ1bmN0aW9ufHxFdH0pKSl9KHQpO2lmKHluLmFwcFJvb3RQYXRoKWZvcihjb25zdCB0IG9mIG4pdC5maWxlbmFtZSYmKHQuZmlsZW5hbWU9UHQodC5maWxlbmFtZSx5bi5hcHBSb290UGF0aCkpO3JldHVybiBufWFzeW5jIGZ1bmN0aW9uIFRuKHQsbil7aWYoX24+PXluLm1heEFuckV2ZW50cylyZXR1cm47X24rPTEsYXdhaXQgTm4oKSx3bigiU2VuZGluZyBldmVudCIpO2NvbnN0IGU9e2V2ZW50X2lkOkQoKSxjb250ZXh0czp5bi5jb250ZXh0cyxyZWxlYXNlOnluLnJlbGVhc2UsZW52aXJvbm1lbnQ6eW4uZW52aXJvbm1lbnQsZGlzdDp5bi5kaXN0LHBsYXRmb3JtOiJub2RlIixsZXZlbDoiZXJyb3IiLGV4Y2VwdGlvbjp7dmFsdWVzOlt7dHlwZToiQXBwbGljYXRpb25Ob3RSZXNwb25kaW5nIix2YWx1ZTpgQXBwbGljYXRpb24gTm90IFJlc3BvbmRpbmcgZm9yIGF0IGxlYXN0ICR7eW4uYW5yVGhyZXNob2xkfSBtc2Asc3RhY2t0cmFjZTp7ZnJhbWVzOkNuKHQpfSxtZWNoYW5pc206e3R5cGU6IkFOUiJ9fV19LHRhZ3M6eW4uc3RhdGljVGFnc307biYmZnVuY3Rpb24odCxuKXtpZihWdCh0LG4pLCF0LmNvbnRleHRzPy50cmFjZSl7Y29uc3R7dHJhY2VJZDplLHBhcmVudFNwYW5JZDpyLHByb3BhZ2F0aW9uU3BhbklkOm99PW4ucHJvcGFnYXRpb25Db250ZXh0O3QuY29udGV4dHM9e3RyYWNlOnt0cmFjZV9pZDplLHNwYW5faWQ6b3x8RigpLHBhcmVudF9zcGFuX2lkOnJ9LC4uLnQuY29udGV4dHN9fX0oZSxuKSxmdW5jdGlvbih0KXtpZigwPT09T2JqZWN0LmtleXModm4pLmxlbmd0aClyZXR1cm47Y29uc3Qgbj15bi5hcHBSb290UGF0aD97fTp2bjtpZih5bi5hcHBSb290UGF0aClmb3IoY29uc3RbdCxlXW9mIE9iamVjdC5lbnRyaWVzKHZuKSluW1B0KHQseW4uYXBwUm9vdFBhdGgpXT1lO2NvbnN0IGU9bmV3IE1hcDtmb3IoY29uc3QgciBvZiB0LmV4Y2VwdGlvbj8udmFsdWVzfHxbXSlmb3IoY29uc3QgdCBvZiByLnN0YWNrdHJhY2U/LmZyYW1lc3x8W10pe2NvbnN0IHI9dC5hYnNfcGF0aHx8dC5maWxlbmFtZTtyJiZuW3JdJiZlLnNldChyLG5bcl0pfWlmKGUuc2l6ZT4wKXtjb25zdCBuPVtdO2Zvcihjb25zdFt0LHJdb2YgZS5lbnRyaWVzKCkpbi5wdXNoKHt0eXBlOiJzb3VyY2VtYXAiLGNvZGVfZmlsZTp0LGRlYnVnX2lkOnJ9KTt0LmRlYnVnX21ldGE9e2ltYWdlczpufX19KGUpO2NvbnN0IHI9enQoZSx5bi5kc24seW4uc2RrTWV0YWRhdGEseW4udHVubmVsKTt3bihKU09OLnN0cmluZ2lmeShyKSksYXdhaXQgeG4uc2VuZChyKSxhd2FpdCB4bi5mbHVzaCgyZTMpLF9uPj15bi5tYXhBbnJFdmVudHMmJnNldFRpbWVvdXQoKCgpPT57cHJvY2Vzcy5leGl0KDApfSksNWUzKX1sZXQga247aWYod24oIlN0YXJ0ZWQiKSx5bi5jYXB0dXJlU3RhY2tUcmFjZSl7d24oIkNvbm5lY3RpbmcgdG8gZGVidWdnZXIiKTtjb25zdCBuPW5ldyB0O24uY29ubmVjdFRvTWFpblRocmVhZCgpLHduKCJDb25uZWN0ZWQgdG8gZGVidWdnZXIiKTtjb25zdCBlPW5ldyBNYXA7bi5vbigiRGVidWdnZXIuc2NyaXB0UGFyc2VkIiwodD0+e2Uuc2V0KHQucGFyYW1zLnNjcmlwdElkLHQucGFyYW1zLnVybCl9KSksbi5vbigiRGVidWdnZXIucGF1c2VkIiwodD0+e2lmKCJvdGhlciI9PT10LnBhcmFtcy5yZWFzb24pdHJ5e3duKCJEZWJ1Z2dlciBwYXVzZWQiKTtjb25zdCBzPVsuLi50LnBhcmFtcy5jYWxsRnJhbWVzXSxpPXluLmFwcFJvb3RQYXRoP2Z1bmN0aW9uKHQ9KHByb2Nlc3MuYXJndlsxXT9vbihwcm9jZXNzLmFyZ3ZbMV0pOnByb2Nlc3MuY3dkKCkpLG49IlxcIj09PW8pe2NvbnN0IGU9bj9nbih0KTp0O3JldHVybiB0PT57aWYoIXQpcmV0dXJuO2NvbnN0IG89bj9nbih0KTp0O2xldHtkaXI6cyxiYXNlOmksZXh0OmN9PXIucGFyc2Uobyk7Ii5qcyIhPT1jJiYiLm1qcyIhPT1jJiYiLmNqcyIhPT1jfHwoaT1pLnNsaWNlKDAsLTEqYy5sZW5ndGgpKTtjb25zdCB1PWRlY29kZVVSSUNvbXBvbmVudChpKTtzfHwocz0iLiIpO2NvbnN0IGE9cy5sYXN0SW5kZXhPZigiL25vZGVfbW9kdWxlcyIpO2lmKGE+LTEpcmV0dXJuYCR7cy5zbGljZShhKzE0KS5yZXBsYWNlKC9cLy9nLCIuIil9OiR7dX1gO2lmKHMuc3RhcnRzV2l0aChlKSl7Y29uc3QgdD1zLnNsaWNlKGUubGVuZ3RoKzEpLnJlcGxhY2UoL1wvL2csIi4iKTtyZXR1cm4gdD9gJHt0fToke3V9YDp1fXJldHVybiB1fX0oeW4uYXBwUm9vdFBhdGgpOigpPT57fSxjPXMubWFwKCh0PT5mdW5jdGlvbih0LG4sZSl7Y29uc3Qgcj1uP24ucmVwbGFjZSgvXmZpbGU6XC9cLy8sIiIpOnZvaWQgMCxvPXQubG9jYXRpb24uY29sdW1uTnVtYmVyP3QubG9jYXRpb24uY29sdW1uTnVtYmVyKzE6dm9pZCAwLHM9dC5sb2NhdGlvbi5saW5lTnVtYmVyP3QubG9jYXRpb24ubGluZU51bWJlcisxOnZvaWQgMDtyZXR1cm57ZmlsZW5hbWU6cixtb2R1bGU6ZShyKSxmdW5jdGlvbjp0LmZ1bmN0aW9uTmFtZXx8RXQsY29sbm86byxsaW5lbm86cyxpbl9hcHA6cj9zbihyKTp2b2lkIDB9fSh0LGUuZ2V0KHQubG9jYXRpb24uc2NyaXB0SWQpLGkpKSksdT1zZXRUaW1lb3V0KCgoKT0+e1RuKGMpLnRoZW4obnVsbCwoKCk9Pnt3bigiU2VuZGluZyBBTlIgZXZlbnQgZmFpbGVkLiIpfSkpfSksNWUzKTtuLnBvc3QoIlJ1bnRpbWUuZXZhbHVhdGUiLHtleHByZXNzaW9uOiJnbG9iYWwuX19TRU5UUllfR0VUX1NDT1BFU19fKCk7IixzaWxlbnQ6ITAscmV0dXJuQnlWYWx1ZTohMH0sKCh0LGUpPT57dCYmd24oYEVycm9yIGV4ZWN1dGluZyBzY3JpcHQ6ICcke3QubWVzc2FnZX0nYCksY2xlYXJUaW1lb3V0KHUpO2NvbnN0IHI9ZT8ucmVzdWx0P2UucmVzdWx0LnZhbHVlOnZvaWQgMDtuLnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpLG4ucG9zdCgiRGVidWdnZXIuZGlzYWJsZSIpLFRuKGMscikudGhlbihudWxsLCgoKT0+e3duKCJTZW5kaW5nIEFOUiBldmVudCBmYWlsZWQuIil9KSl9KSl9Y2F0Y2godCl7dGhyb3cgbi5wb3N0KCJEZWJ1Z2dlci5yZXN1bWUiKSxuLnBvc3QoIkRlYnVnZ2VyLmRpc2FibGUiKSx0fX0pKSxrbj0oKT0+e3RyeXtuLnBvc3QoIkRlYnVnZ2VyLmVuYWJsZSIsKCgpPT57bi5wb3N0KCJEZWJ1Z2dlci5wYXVzZSIpfSkpfWNhdGNoKHQpe319fWNvbnN0e3BvbGw6am59PWZ1bmN0aW9uKHQsbixlLHIpe2NvbnN0IG89dCgpO2xldCBzPSExLGk9ITA7cmV0dXJuIHNldEludGVydmFsKCgoKT0+e2NvbnN0IHQ9by5nZXRUaW1lTXMoKTshMT09PXMmJnQ+bitlJiYocz0hMCxpJiZyKCkpLHQ8bitlJiYocz0hMSl9KSwyMCkse3BvbGw6KCk9PntvLnJlc2V0KCl9LGVuYWJsZWQ6dD0+e2k9dH19fSgoZnVuY3Rpb24oKXtsZXQgdD1wcm9jZXNzLmhydGltZSgpO3JldHVybntnZXRUaW1lTXM6KCk9Pntjb25zdFtuLGVdPXByb2Nlc3MuaHJ0aW1lKHQpO3JldHVybiBNYXRoLmZsb29yKDFlMypuK2UvMWU2KX0scmVzZXQ6KCk9Pnt0PXByb2Nlc3MuaHJ0aW1lKCl9fX0pLHluLnBvbGxJbnRlcnZhbCx5bi5hbnJUaHJlc2hvbGQsKGZ1bmN0aW9uKCl7d24oIldhdGNoZG9nIHRpbWVvdXQiKSxrbj8od24oIlBhdXNpbmcgZGVidWdnZXIgdG8gY2FwdHVyZSBzdGFjayB0cmFjZSIpLGtuKCkpOih3bigiQ2FwdHVyaW5nIGV2ZW50IHdpdGhvdXQgYSBzdGFjayB0cmFjZSIpLFRuKCkudGhlbihudWxsLCgoKT0+e3duKCJTZW5kaW5nIEFOUiBldmVudCBmYWlsZWQgb24gd2F0Y2hkb2cgdGltZW91dC4iKX0pKSl9KSk7ZT8ub24oIm1lc3NhZ2UiLCh0PT57dC5zZXNzaW9uJiYoYm49TSh0LnNlc3Npb24pKSx0LmRlYnVnSW1hZ2VzJiYodm49dC5kZWJ1Z0ltYWdlcyksam4oKX0pKTs=';
const DEFAULT_INTERVAL = 50;
const DEFAULT_HANG_THRESHOLD = 5000;
function log(message, ...args) {
    core.logger.log(`[ANR] ${message}`, ...args);
}
function globalWithScopeFetchFn() {
    return core.GLOBAL_OBJ;
}
/** Fetches merged scope data */ function getScopeData() {
    const scope = core.getGlobalScope().getScopeData();
    core.mergeScopeData(scope, core.getIsolationScope().getScopeData());
    core.mergeScopeData(scope, core.getCurrentScope().getScopeData());
    // We remove attachments because they likely won't serialize well as json
    scope.attachments = [];
    // We can't serialize event processor functions
    scope.eventProcessors = [];
    return scope;
}
/**
 * Gets contexts by calling all event processors. This shouldn't be called until all integrations are setup
 */ async function getContexts(client) {
    let event = {
        message: 'ANR'
    };
    const eventHint = {};
    for (const processor of client.getEventProcessors()){
        if (event === null) break;
        event = await processor(event, eventHint);
    }
    return event?.contexts || {};
}
const INTEGRATION_NAME = 'Anr';
const _anrIntegration = (options = {})=>{
    if (nodeVersion.NODE_VERSION.major < 16 || nodeVersion.NODE_VERSION.major === 16 && nodeVersion.NODE_VERSION.minor < 17) {
        throw new Error('ANR detection requires Node 16.17.0 or later');
    }
    let worker;
    let client;
    // Hookup the scope fetch function to the global object so that it can be called from the worker thread via the
    // debugger when it pauses
    const gbl = globalWithScopeFetchFn();
    gbl.__SENTRY_GET_SCOPES__ = getScopeData;
    return {
        name: INTEGRATION_NAME,
        startWorker: ()=>{
            if (worker) {
                return;
            }
            if (client) {
                worker = _startWorker(client, options);
            }
        },
        stopWorker: ()=>{
            if (worker) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                worker.then((stop)=>{
                    stop();
                    worker = undefined;
                });
            }
        },
        async setup (initClient) {
            client = initClient;
            if (options.captureStackTrace && await debug.isDebuggerEnabled()) {
                core.logger.warn('ANR captureStackTrace has been disabled because the debugger was already enabled');
                options.captureStackTrace = false;
            }
            // setImmediate is used to ensure that all other integrations have had their setup called first.
            // This allows us to call into all integrations to fetch the full context
            setImmediate(()=>this.startWorker());
        }
    };
};
const anrIntegration = core.defineIntegration(_anrIntegration);
/**
 * Starts the ANR worker thread
 *
 * @returns A function to stop the worker
 */ async function _startWorker(client, integrationOptions) {
    const dsn = client.getDsn();
    if (!dsn) {
        return ()=>{
        //
        };
    }
    const contexts = await getContexts(client);
    // These will not be accurate if sent later from the worker thread
    delete contexts.app?.app_memory;
    delete contexts.device?.free_memory;
    const initOptions = client.getOptions();
    const sdkMetadata = client.getSdkMetadata() || {};
    if (sdkMetadata.sdk) {
        sdkMetadata.sdk.integrations = initOptions.integrations.map((i)=>i.name);
    }
    const options = {
        debug: core.logger.isEnabled(),
        dsn,
        tunnel: initOptions.tunnel,
        environment: initOptions.environment || 'production',
        release: initOptions.release,
        dist: initOptions.dist,
        sdkMetadata,
        appRootPath: integrationOptions.appRootPath,
        pollInterval: integrationOptions.pollInterval || DEFAULT_INTERVAL,
        anrThreshold: integrationOptions.anrThreshold || DEFAULT_HANG_THRESHOLD,
        captureStackTrace: !!integrationOptions.captureStackTrace,
        maxAnrEvents: integrationOptions.maxAnrEvents || 1,
        staticTags: integrationOptions.staticTags || {},
        contexts
    };
    if (options.captureStackTrace) {
        const inspector = await __turbopack_context__.r("[externals]/node:inspector [external] (node:inspector, cjs, async loader)")(__turbopack_context__.i);
        if (!inspector.url()) {
            inspector.open(0);
        }
    }
    const worker = new node_worker_threads.Worker(new URL(`data:application/javascript;base64,${base64WorkerScript}`), {
        workerData: options,
        // We don't want any Node args to be passed to the worker
        execArgv: [],
        env: {
            ...process.env,
            NODE_OPTIONS: undefined
        }
    });
    process.on('exit', ()=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        worker.terminate();
    });
    const timer = setInterval(()=>{
        try {
            const currentSession = core.getIsolationScope().getSession();
            // We need to copy the session object and remove the toJSON method so it can be sent to the worker
            // serialized without making it a SerializedSession
            const session = currentSession ? {
                ...currentSession,
                toJSON: undefined
            } : undefined;
            // message the worker to tell it the main event loop is still running
            worker.postMessage({
                session,
                debugImages: core.getFilenameToDebugIdMap(initOptions.stackParser)
            });
        } catch (_) {
        //
        }
    }, options.pollInterval);
    // Timer should not block exit
    timer.unref();
    worker.on('message', (msg)=>{
        if (msg === 'session-ended') {
            log('ANR event sent from ANR worker. Clearing session in this thread.');
            core.getIsolationScope().setSession(undefined);
        }
    });
    worker.once('error', (err)=>{
        clearInterval(timer);
        log('ANR worker error', err);
    });
    worker.once('exit', (code)=>{
        clearInterval(timer);
        log('ANR worker exit', code);
    });
    // Ensure this thread can't block app exit
    worker.unref();
    return ()=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        worker.terminate();
        clearInterval(timer);
    };
}
/**
 * Disables ANR detection for the duration of the callback
 */ function disableAnrDetectionForCallback(callback) {
    const integration = core.getClient()?.getIntegrationByName(INTEGRATION_NAME);
    if (!integration) {
        return callback();
    }
    integration.stopWorker();
    const result = callback();
    if (isPromise(result)) {
        return result.finally(()=>integration.startWorker());
    }
    integration.startWorker();
    return result;
}
exports.anrIntegration = anrIntegration;
exports.base64WorkerScript = base64WorkerScript;
exports.disableAnrDetectionForCallback = disableAnrDetectionForCallback; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/createMissingInstrumentationContext.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const commonjs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/commonjs.js [app-ssr] (ecmascript)");
const createMissingInstrumentationContext = (pkg)=>({
        package: pkg,
        'javascript.is_cjs': commonjs.isCjs()
    });
exports.createMissingInstrumentationContext = createMissingInstrumentationContext; //# sourceMappingURL=createMissingInstrumentationContext.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/ensureIsWrapped.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const commonjs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/commonjs.js [app-ssr] (ecmascript)");
const createMissingInstrumentationContext = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/createMissingInstrumentationContext.js [app-ssr] (ecmascript)");
/**
 * Checks and warns if a framework isn't wrapped by opentelemetry.
 */ function ensureIsWrapped(maybeWrappedFunction, name) {
    const clientOptions = core.getClient()?.getOptions();
    if (!clientOptions?.disableInstrumentationWarnings && !core$1.isWrapped(maybeWrappedFunction) && core.isEnabled() && core.hasSpansEnabled(clientOptions)) {
        core.consoleSandbox(()=>{
            if (commonjs.isCjs()) {
                // eslint-disable-next-line no-console
                console.warn(`[Sentry] ${name} is not instrumented. This is likely because you required/imported ${name} before calling \`Sentry.init()\`.`);
            } else {
                // eslint-disable-next-line no-console
                console.warn(`[Sentry] ${name} is not instrumented. Please make sure to initialize Sentry in a separate file that you \`--import\` when running node, see: https://docs.sentry.io/platforms/javascript/guides/${name}/install/esm/.`);
            }
        });
        core.getGlobalScope().setContext('missing_instrumentation', createMissingInstrumentationContext.createMissingInstrumentationContext(name));
    }
}
exports.ensureIsWrapped = ensureIsWrapped; //# sourceMappingURL=ensureIsWrapped.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/enums/AttributeNames.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
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
 */ exports.AttributeNames = void 0;
(function(AttributeNames) {
    const EXPRESS_TYPE = 'express.type';
    AttributeNames["EXPRESS_TYPE"] = EXPRESS_TYPE;
    const EXPRESS_NAME = 'express.name';
    AttributeNames["EXPRESS_NAME"] = EXPRESS_NAME;
})(exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/enums/ExpressLayerType.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
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
 */ exports.ExpressLayerType = void 0;
(function(ExpressLayerType) {
    const ROUTER = 'router';
    ExpressLayerType["ROUTER"] = ROUTER;
    const MIDDLEWARE = 'middleware';
    ExpressLayerType["MIDDLEWARE"] = MIDDLEWARE;
    const REQUEST_HANDLER = 'request_handler';
    ExpressLayerType["REQUEST_HANDLER"] = REQUEST_HANDLER;
})(exports.ExpressLayerType || (exports.ExpressLayerType = {})); //# sourceMappingURL=ExpressLayerType.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/internal-types.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
/**
 * This symbol is used to mark express layer as being already instrumented
 * since its possible to use a given layer multiple times (ex: middlewares)
 */ const kLayerPatched = Symbol('express-layer-patched');
/**
 * This const define where on the `request` object the Instrumentation will mount the
 * current stack of express layer.
 *
 * It is necessary because express doesn't store the different layers
 * (ie: middleware, router etc) that it called to get to the current layer.
 * Given that, the only way to know the route of a given layer is to
 * store the path of where each previous layer has been mounted.
 *
 * ex: bodyParser > auth middleware > /users router > get /:id
 *  in this case the stack would be: ["/users", "/:id"]
 *
 * ex2: bodyParser > /api router > /v1 router > /users router > get /:id
 *  stack: ["/api", "/v1", "/users", ":id"]
 *
 */ const _LAYERS_STORE_PROPERTY = '__ot_middlewares';
exports._LAYERS_STORE_PROPERTY = _LAYERS_STORE_PROPERTY;
exports.kLayerPatched = kLayerPatched; //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const AttributeNames = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/enums/AttributeNames.js [app-ssr] (ecmascript)");
const ExpressLayerType = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/enums/ExpressLayerType.js [app-ssr] (ecmascript)");
const internalTypes = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/internal-types.js [app-ssr] (ecmascript)");
/**
 * Store layers path in the request to be able to construct route later
 * @param request The request where
 * @param [value] the value to push into the array
 */ const storeLayerPath = (request, value)=>{
    if (Array.isArray(request[internalTypes._LAYERS_STORE_PROPERTY]) === false) {
        Object.defineProperty(request, internalTypes._LAYERS_STORE_PROPERTY, {
            enumerable: false,
            value: []
        });
    }
    if (value === undefined) return;
    request[internalTypes._LAYERS_STORE_PROPERTY].push(value);
};
/**
 * Recursively search the router path from layer stack
 * @param path The path to reconstruct
 * @param layer The layer to reconstruct from
 * @returns The reconstructed path
 */ const getRouterPath = (path, layer)=>{
    const stackLayer = layer.handle?.stack?.[0];
    if (stackLayer?.route?.path) {
        return `${path}${stackLayer.route.path}`;
    }
    if (stackLayer?.handle?.stack) {
        return getRouterPath(path, stackLayer);
    }
    return path;
};
/**
 * Parse express layer context to retrieve a name and attributes.
 * @param route The route of the layer
 * @param layer Express layer
 * @param [layerPath] if present, the path on which the layer has been mounted
 */ const getLayerMetadata = (route, layer, layerPath)=>{
    if (layer.name === 'router') {
        const maybeRouterPath = getRouterPath('', layer);
        const extractedRouterPath = maybeRouterPath ? maybeRouterPath : layerPath || route || '/';
        return {
            attributes: {
                [AttributeNames.AttributeNames.EXPRESS_NAME]: extractedRouterPath,
                [AttributeNames.AttributeNames.EXPRESS_TYPE]: ExpressLayerType.ExpressLayerType.ROUTER
            },
            name: `router - ${extractedRouterPath}`
        };
    } else if (layer.name === 'bound dispatch' || layer.name === 'handle') {
        return {
            attributes: {
                [AttributeNames.AttributeNames.EXPRESS_NAME]: (route || layerPath) ?? 'request handler',
                [AttributeNames.AttributeNames.EXPRESS_TYPE]: ExpressLayerType.ExpressLayerType.REQUEST_HANDLER
            },
            name: `request handler${layer.path ? ` - ${route || layerPath}` : ''}`
        };
    } else {
        return {
            attributes: {
                [AttributeNames.AttributeNames.EXPRESS_NAME]: layer.name,
                [AttributeNames.AttributeNames.EXPRESS_TYPE]: ExpressLayerType.ExpressLayerType.MIDDLEWARE
            },
            name: `middleware - ${layer.name}`
        };
    }
};
/**
 * Check whether the given obj match pattern
 * @param constant e.g URL of request
 * @param obj obj to inspect
 * @param pattern Match pattern
 */ const satisfiesPattern = (constant, pattern)=>{
    if (typeof pattern === 'string') {
        return pattern === constant;
    } else if (pattern instanceof RegExp) {
        return pattern.test(constant);
    } else if (typeof pattern === 'function') {
        return pattern(constant);
    } else {
        throw new TypeError('Pattern is in unsupported datatype');
    }
};
/**
 * Check whether the given request is ignored by configuration
 * It will not re-throw exceptions from `list` provided by the client
 * @param constant e.g URL of request
 * @param [list] List of ignore patterns
 * @param [onException] callback for doing something when an exception has
 *     occurred
 */ const isLayerIgnored = (name, type, config)=>{
    if (Array.isArray(config?.ignoreLayersType) && config?.ignoreLayersType?.includes(type)) {
        return true;
    }
    if (Array.isArray(config?.ignoreLayers) === false) return false;
    try {
        for (const pattern of config.ignoreLayers){
            if (satisfiesPattern(name, pattern)) {
                return true;
            }
        }
    } catch (e) {
    /* catch block */ }
    return false;
};
/**
 * Converts a user-provided error value into an error and error message pair
 *
 * @param error - User-provided error value
 * @returns Both an Error or string representation of the value and an error message
 */ const asErrorAndMessage = (error)=>error instanceof Error ? [
        error,
        error.message
    ] : [
        String(error),
        String(error)
    ];
/**
 * Extracts the layer path from the route arguments
 *
 * @param args - Arguments of the route
 * @returns The layer path
 */ const getLayerPath = (args)=>{
    const firstArg = args[0];
    if (Array.isArray(firstArg)) {
        return firstArg.map((arg)=>extractLayerPathSegment(arg) || '').join(',');
    }
    return extractLayerPathSegment(firstArg);
};
const extractLayerPathSegment = (arg)=>{
    if (typeof arg === 'string') {
        return arg;
    }
    if (arg instanceof RegExp || typeof arg === 'number') {
        return arg.toString();
    }
    return;
};
exports.asErrorAndMessage = asErrorAndMessage;
exports.getLayerMetadata = getLayerMetadata;
exports.getLayerPath = getLayerPath;
exports.getRouterPath = getRouterPath;
exports.isLayerIgnored = isLayerIgnored;
exports.storeLayerPath = storeLayerPath; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/instrumentation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/index.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const semanticConventions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [app-ssr] (ecmascript)");
const AttributeNames = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/enums/AttributeNames.js [app-ssr] (ecmascript)");
const ExpressLayerType = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/enums/ExpressLayerType.js [app-ssr] (ecmascript)");
const internalTypes = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/internal-types.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/utils.js [app-ssr] (ecmascript)");
const PACKAGE_VERSION = '0.1.0';
const PACKAGE_NAME = '@sentry/instrumentation-express-v5';
/** Express instrumentation for OpenTelemetry */ class ExpressInstrumentationV5 extends instrumentation.InstrumentationBase {
    constructor(config = {}){
        super(PACKAGE_NAME, PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation.InstrumentationNodeModuleDefinition('express', [
                '>=5.0.0'
            ], (moduleExports)=>this._setup(moduleExports), (moduleExports)=>this._tearDown(moduleExports))
        ];
    }
    _setup(moduleExports) {
        const routerProto = moduleExports.Router.prototype;
        // patch express.Router.route
        if (instrumentation.isWrapped(routerProto.route)) {
            this._unwrap(routerProto, 'route');
        }
        this._wrap(routerProto, 'route', this._getRoutePatch());
        // patch express.Router.use
        if (instrumentation.isWrapped(routerProto.use)) {
            this._unwrap(routerProto, 'use');
        }
        this._wrap(routerProto, 'use', this._getRouterUsePatch());
        // patch express.Application.use
        if (instrumentation.isWrapped(moduleExports.application.use)) {
            this._unwrap(moduleExports.application, 'use');
        }
        this._wrap(moduleExports.application, 'use', this._getAppUsePatch());
        return moduleExports;
    }
    _tearDown(moduleExports) {
        if (moduleExports === undefined) return;
        const routerProto = moduleExports.Router.prototype;
        this._unwrap(routerProto, 'route');
        this._unwrap(routerProto, 'use');
        this._unwrap(moduleExports.application, 'use');
    }
    /**
   * Get the patch for Router.route function
   */ _getRoutePatch() {
        const instrumentation = this;
        return function(original) {
            return function route_trace(...args) {
                const route = original.apply(this, args);
                const layer = this.stack[this.stack.length - 1];
                instrumentation._applyPatch(layer, utils.getLayerPath(args));
                return route;
            };
        };
    }
    /**
   * Get the patch for Router.use function
   */ _getRouterUsePatch() {
        const instrumentation = this;
        return function(original) {
            return function use(...args) {
                const route = original.apply(this, args);
                const layer = this.stack[this.stack.length - 1];
                instrumentation._applyPatch(layer, utils.getLayerPath(args));
                return route;
            };
        };
    }
    /**
   * Get the patch for Application.use function
   */ _getAppUsePatch() {
        const instrumentation = this;
        return function(original) {
            return function use(// In express 5.x the router is stored in `router` whereas in 4.x it's stored in `_router`
            ...args) {
                // if we access app.router in express 4.x we trigger an assertion error
                // This property existed in v3, was removed in v4 and then re-added in v5
                const router = this.router;
                const route = original.apply(this, args);
                if (router) {
                    const layer = router.stack[router.stack.length - 1];
                    instrumentation._applyPatch(layer, utils.getLayerPath(args));
                }
                return route;
            };
        };
    }
    /** Patch each express layer to create span and propagate context */ _applyPatch(layer, layerPath) {
        const instrumentation$1 = this;
        // avoid patching multiple times the same layer
        if (layer[internalTypes.kLayerPatched] === true) return;
        layer[internalTypes.kLayerPatched] = true;
        this._wrap(layer, 'handle', (original)=>{
            // TODO: instrument error handlers
            if (original.length === 4) return original;
            const patched = function(req, res) {
                utils.storeLayerPath(req, layerPath);
                const route = req[internalTypes._LAYERS_STORE_PROPERTY].filter((path)=>path !== '/' && path !== '/*').join('')// remove duplicate slashes to normalize route
                .replace(/\/{2,}/g, '/');
                const actualRoute = route.length > 0 ? route : undefined;
                const attributes = {
                    // eslint-disable-next-line deprecation/deprecation
                    [semanticConventions.SEMATTRS_HTTP_ROUTE]: actualRoute
                };
                const metadata = utils.getLayerMetadata(route, layer, layerPath);
                const type = metadata.attributes[AttributeNames.AttributeNames.EXPRESS_TYPE];
                const rpcMetadata = core.getRPCMetadata(api.context.active());
                if (rpcMetadata?.type === core.RPCType.HTTP) {
                    rpcMetadata.route = actualRoute;
                }
                // verify against the config if the layer should be ignored
                if (utils.isLayerIgnored(metadata.name, type, instrumentation$1.getConfig())) {
                    if (type === ExpressLayerType.ExpressLayerType.MIDDLEWARE) {
                        req[internalTypes._LAYERS_STORE_PROPERTY].pop();
                    }
                    return original.apply(this, arguments);
                }
                if (api.trace.getSpan(api.context.active()) === undefined) {
                    return original.apply(this, arguments);
                }
                const spanName = instrumentation$1._getSpanName({
                    request: req,
                    layerType: type,
                    route
                }, metadata.name);
                const span = instrumentation$1.tracer.startSpan(spanName, {
                    attributes: Object.assign(attributes, metadata.attributes)
                });
                const { requestHook } = instrumentation$1.getConfig();
                if (requestHook) {
                    instrumentation.safeExecuteInTheMiddle(()=>requestHook(span, {
                            request: req,
                            layerType: type,
                            route
                        }), (e)=>{
                        if (e) {
                            api.diag.error('express instrumentation: request hook failed', e);
                        }
                    }, true);
                }
                let spanHasEnded = false;
                if (metadata.attributes[AttributeNames.AttributeNames.EXPRESS_TYPE] !== ExpressLayerType.ExpressLayerType.MIDDLEWARE) {
                    span.end();
                    spanHasEnded = true;
                }
                // listener for response.on('finish')
                const onResponseFinish = ()=>{
                    if (spanHasEnded === false) {
                        spanHasEnded = true;
                        span.end();
                    }
                };
                // verify we have a callback
                const args = Array.from(arguments);
                const callbackIdx = args.findIndex((arg)=>typeof arg === 'function');
                if (callbackIdx >= 0) {
                    arguments[callbackIdx] = function() {
                        // express considers anything but an empty value, "route" or "router"
                        // passed to its callback to be an error
                        const maybeError = arguments[0];
                        const isError = ![
                            undefined,
                            null,
                            'route',
                            'router'
                        ].includes(maybeError);
                        if (!spanHasEnded && isError) {
                            const [error, message] = utils.asErrorAndMessage(maybeError);
                            span.recordException(error);
                            span.setStatus({
                                code: api.SpanStatusCode.ERROR,
                                message
                            });
                        }
                        if (spanHasEnded === false) {
                            spanHasEnded = true;
                            req.res?.removeListener('finish', onResponseFinish);
                            span.end();
                        }
                        if (!(req.route && isError)) {
                            req[internalTypes._LAYERS_STORE_PROPERTY].pop();
                        }
                        const callback = args[callbackIdx];
                        return callback.apply(this, arguments);
                    };
                }
                try {
                    return original.apply(this, arguments);
                } catch (anyError) {
                    const [error, message] = utils.asErrorAndMessage(anyError);
                    span.recordException(error);
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR,
                        message
                    });
                    throw anyError;
                } finally{
                    /**
           * At this point if the callback wasn't called, that means either the
           * layer is asynchronous (so it will call the callback later on) or that
           * the layer directly end the http response, so we'll hook into the "finish"
           * event to handle the later case.
           */ if (!spanHasEnded) {
                        res.once('finish', onResponseFinish);
                    }
                }
            };
            // `handle` isn't just a regular function in some cases. It also contains
            // some properties holding metadata and state so we need to proxy them
            // through through patched function
            // ref: https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1950
            // Also some apps/libs do their own patching before OTEL and have these properties
            // in the proptotype. So we use a `for...in` loop to get own properties and also
            // any enumerable prop in the prototype chain
            // ref: https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2271
            for(const key in original){
                Object.defineProperty(patched, key, {
                    get () {
                        return original[key];
                    },
                    set (value) {
                        original[key] = value;
                    }
                });
            }
            return patched;
        });
    }
    _getSpanName(info, defaultName) {
        const { spanNameHook } = this.getConfig();
        if (!(spanNameHook instanceof Function)) {
            return defaultName;
        }
        try {
            return spanNameHook(info, defaultName) ?? defaultName;
        } catch (err) {
            api.diag.error('express instrumentation: error calling span name rewrite hook', err);
            return defaultName;
        }
    }
}
exports.ExpressInstrumentationV5 = ExpressInstrumentationV5;
exports.PACKAGE_NAME = PACKAGE_NAME;
exports.PACKAGE_VERSION = PACKAGE_VERSION; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationExpress = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const ensureIsWrapped = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/ensureIsWrapped.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express-v5/instrumentation.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Express';
const INTEGRATION_NAME_V5 = 'Express-V5';
function requestHook(span) {
    addOriginToSpan.addOriginToSpan(span, 'auto.http.otel.express');
    const attributes = core.spanToJSON(span).data;
    // this is one of: middleware, request_handler, router
    const type = attributes['express.type'];
    if (type) {
        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, `${type}.express`);
    }
    // Also update the name, we don't need to "middleware - " prefix
    const name = attributes['express.name'];
    if (typeof name === 'string') {
        span.updateName(name);
    }
}
function spanNameHook(info, defaultName) {
    if (core.getIsolationScope() === core.getDefaultIsolationScope()) {
        debugBuild.DEBUG_BUILD && core.logger.warn('Isolation scope is still default isolation scope - skipping setting transactionName');
        return defaultName;
    }
    if (info.layerType === 'request_handler') {
        // type cast b/c Otel unfortunately types info.request as any :(
        const req = info.request;
        const method = req.method ? req.method.toUpperCase() : 'GET';
        core.getIsolationScope().setTransactionName(`${method} ${info.route}`);
    }
    return defaultName;
}
const instrumentExpress = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationExpress.ExpressInstrumentation({
        requestHook: (span)=>requestHook(span),
        spanNameHook: (info, defaultName)=>spanNameHook(info, defaultName)
    }));
const instrumentExpressV5 = instrument.generateInstrumentOnce(INTEGRATION_NAME_V5, ()=>new instrumentation.ExpressInstrumentationV5({
        requestHook: (span)=>requestHook(span),
        spanNameHook: (info, defaultName)=>spanNameHook(info, defaultName)
    }));
const _expressIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentExpress();
            instrumentExpressV5();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for [Express](https://expressjs.com/).
 *
 * If you also want to capture errors, you need to call `setupExpressErrorHandler(app)` after you set up your Express server.
 *
 * For more information, see the [express documentation](https://docs.sentry.io/platforms/javascript/guides/express/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.expressIntegration()],
 * })
 * ```
 */ const expressIntegration = core.defineIntegration(_expressIntegration);
/**
 * An Express-compatible error handler.
 */ function expressErrorHandler(options) {
    return function sentryErrorMiddleware(error, request, res, next) {
        const normalizedRequest = core.httpRequestToRequestData(request);
        // Ensure we use the express-enhanced request here, instead of the plain HTTP one
        // When an error happens, the `expressRequestHandler` middleware does not run, so we set it here too
        core.getIsolationScope().setSDKProcessingMetadata({
            normalizedRequest
        });
        const shouldHandleError = options?.shouldHandleError || defaultShouldHandleError;
        if (shouldHandleError(error)) {
            const eventId = core.captureException(error, {
                mechanism: {
                    type: 'middleware',
                    handled: false
                }
            });
            res.sentry = eventId;
        }
        next(error);
    };
}
function expressRequestHandler() {
    return function sentryRequestMiddleware(request, _res, next) {
        const normalizedRequest = core.httpRequestToRequestData(request);
        // Ensure we use the express-enhanced request here, instead of the plain HTTP one
        core.getIsolationScope().setSDKProcessingMetadata({
            normalizedRequest
        });
        next();
    };
}
/**
 * Add an Express error handler to capture errors to Sentry.
 *
 * The error handler must be before any other middleware and after all controllers.
 *
 * @param app The Express instances
 * @param options {ExpressHandlerOptions} Configuration options for the handler
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const express = require("express");
 *
 * const app = express();
 *
 * // Add your routes, etc.
 *
 * // Add this after all routes,
 * // but before any and other error-handling middlewares are defined
 * Sentry.setupExpressErrorHandler(app);
 *
 * app.listen(3000);
 * ```
 */ function setupExpressErrorHandler(app, options) {
    app.use(expressRequestHandler());
    app.use(expressErrorHandler(options));
    ensureIsWrapped.ensureIsWrapped(app.use, 'express');
}
function getStatusCodeFromResponse(error) {
    const statusCode = error.status || error.statusCode || error.status_code || error.output?.statusCode;
    return statusCode ? parseInt(statusCode, 10) : 500;
}
/** Returns true if response code is internal server error */ function defaultShouldHandleError(error) {
    const status = getStatusCodeFromResponse(error);
    return status >= 500;
}
exports.expressErrorHandler = expressErrorHandler;
exports.expressIntegration = expressIntegration;
exports.instrumentExpress = instrumentExpress;
exports.instrumentExpressV5 = instrumentExpressV5;
exports.setupExpressErrorHandler = setupExpressErrorHandler; //# sourceMappingURL=express.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/fastify-otel/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/index.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const semanticConventions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [app-ssr] (ecmascript)");
/*
Vendored in and modified from @fastify/otel version 0.8.0
https://github.com/fastify/otel/releases/tag/v0.8.0

Tried not to modify the original code too much keeping it as a JavaScript CJS module to make it easier to update when required

Modifications include:
- Removed reading of package.json to get the version and package name

MIT License

Copyright (c) 2024 Fastify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ // SENTRY VENDOR NOTE
// Instead of using the package.json file, we hard code the package name and version here.
const PACKAGE_NAME = '@fastify/otel';
const PACKAGE_VERSION = '0.8.0';
// Constants
const SUPPORTED_VERSIONS = '>=4.0.0 <6';
const FASTIFY_HOOKS = [
    'onRequest',
    'preParsing',
    'preValidation',
    'preHandler',
    'preSerialization',
    'onSend',
    'onResponse',
    'onError'
];
const ATTRIBUTE_NAMES = {
    HOOK_NAME: 'hook.name',
    FASTIFY_TYPE: 'fastify.type',
    HOOK_CALLBACK_NAME: 'hook.callback.name',
    ROOT: 'fastify.root'
};
const HOOK_TYPES = {
    ROUTE: 'route-hook',
    INSTANCE: 'hook',
    HANDLER: 'request-handler'
};
const ANONYMOUS_FUNCTION_NAME = 'anonymous';
// Symbols
const kInstrumentation = Symbol('fastify otel instance');
const kRequestSpan = Symbol('fastify otel request spans');
const kRequestContext = Symbol('fastify otel request context');
const kAddHookOriginal = Symbol('fastify otel addhook original');
const kSetNotFoundOriginal = Symbol('fastify otel setnotfound original');
const kIgnorePaths = Symbol('fastify otel ignore path');
class FastifyOtelInstrumentation extends instrumentation.InstrumentationBase {
    constructor(config){
        super(PACKAGE_NAME, PACKAGE_VERSION, config);
        this.servername = config?.servername ?? process.env.OTEL_SERVICE_NAME ?? 'fastify';
        this[kIgnorePaths] = null;
        this._logger = api.diag.createComponentLogger({
            namespace: PACKAGE_NAME
        });
        if (config?.ignorePaths != null || process.env.OTEL_FASTIFY_IGNORE_PATHS != null) {
            const ignorePaths = config?.ignorePaths ?? process.env.OTEL_FASTIFY_IGNORE_PATHS;
            if ((typeof ignorePaths !== 'string' || ignorePaths.length === 0) && typeof ignorePaths !== 'function') {
                throw new TypeError('ignorePaths must be a string or a function');
            }
            let globMatcher = null;
            this[kIgnorePaths] = (routeOptions)=>{
                if (typeof ignorePaths === 'function') {
                    return ignorePaths(routeOptions);
                } else {
                    // Using minimatch to match the path until path.matchesGlob is out of experimental
                    // path.matchesGlob uses minimatch internally
                    if (globMatcher == null) {
                        globMatcher = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/index.js [app-ssr] (ecmascript)").minimatch;
                    }
                    return globMatcher(routeOptions.url, ignorePaths);
                }
            };
        }
    }
    enable() {
        if (this._handleInitialization === undefined && this.getConfig().registerOnInitialization) {
            const FastifyInstrumentationPlugin = this.plugin();
            this._handleInitialization = (message)=>{
                message.fastify.register(FastifyInstrumentationPlugin);
            };
            diagnosticsChannel.default.subscribe('fastify.initialization', this._handleInitialization);
        }
        return super.enable();
    }
    disable() {
        if (this._handleInitialization) {
            diagnosticsChannel.default.unsubscribe('fastify.initialization', this._handleInitialization);
            this._handleInitialization = undefined;
        }
        return super.disable();
    }
    // We do not do patching in this instrumentation
    init() {
        return [];
    }
    plugin() {
        const instrumentation = this;
        FastifyInstrumentationPlugin[Symbol.for('skip-override')] = true;
        FastifyInstrumentationPlugin[Symbol.for('fastify.display-name')] = '@fastify/otel';
        FastifyInstrumentationPlugin[Symbol.for('plugin-meta')] = {
            fastify: SUPPORTED_VERSIONS,
            name: '@fastify/otel'
        };
        return FastifyInstrumentationPlugin;
        "TURBOPACK unreachable";
        function FastifyInstrumentationPlugin(instance, opts, done) {
            instance.decorate(kInstrumentation, instrumentation);
            // addHook and notfoundHandler are essentially inherited from the prototype
            // what is important is to bound it to the right instance
            instance.decorate(kAddHookOriginal, instance.addHook);
            instance.decorate(kSetNotFoundOriginal, instance.setNotFoundHandler);
            instance.decorateRequest('opentelemetry', function openetelemetry() {
                const ctx = this[kRequestContext];
                const span = this[kRequestSpan];
                return {
                    span,
                    tracer: instrumentation.tracer,
                    context: ctx,
                    inject: (carrier, setter)=>{
                        return api.propagation.inject(ctx, carrier, setter);
                    },
                    extract: (carrier, getter)=>{
                        return api.propagation.extract(ctx, carrier, getter);
                    }
                };
            });
            instance.decorateRequest(kRequestSpan, null);
            instance.decorateRequest(kRequestContext, null);
            instance.addHook('onRoute', function(routeOptions) {
                if (instrumentation[kIgnorePaths]?.(routeOptions) === true) {
                    instrumentation._logger.debug(`Ignoring route instrumentation ${routeOptions.method} ${routeOptions.url} because it matches the ignore path`);
                    return;
                }
                for (const hook of FASTIFY_HOOKS){
                    if (routeOptions[hook] != null) {
                        const handlerLike = routeOptions[hook];
                        if (typeof handlerLike === 'function') {
                            routeOptions[hook] = handlerWrapper(handlerLike, {
                                [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                                [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - route -> ${hook}`,
                                [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.ROUTE,
                                [semanticConventions.ATTR_HTTP_ROUTE]: routeOptions.url,
                                [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: handlerLike.name?.length > 0 ? handlerLike.name : ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ 
                            });
                        } else if (Array.isArray(handlerLike)) {
                            const wrappedHandlers = [];
                            for (const handler of handlerLike){
                                wrappedHandlers.push(handlerWrapper(handler, {
                                    [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                                    [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - route -> ${hook}`,
                                    [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.ROUTE,
                                    [semanticConventions.ATTR_HTTP_ROUTE]: routeOptions.url,
                                    [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME
                                }));
                            }
                            routeOptions[hook] = wrappedHandlers;
                        }
                    }
                }
                // We always want to add the onSend hook to the route to be executed last
                if (routeOptions.onSend != null) {
                    routeOptions.onSend = Array.isArray(routeOptions.onSend) ? [
                        ...routeOptions.onSend,
                        onSendHook
                    ] : [
                        routeOptions.onSend,
                        onSendHook
                    ];
                } else {
                    routeOptions.onSend = onSendHook;
                }
                // We always want to add the onError hook to the route to be executed last
                if (routeOptions.onError != null) {
                    routeOptions.onError = Array.isArray(routeOptions.onError) ? [
                        ...routeOptions.onError,
                        onErrorHook
                    ] : [
                        routeOptions.onError,
                        onErrorHook
                    ];
                } else {
                    routeOptions.onError = onErrorHook;
                }
                routeOptions.handler = handlerWrapper(routeOptions.handler, {
                    [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                    [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - route-handler`,
                    [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.HANDLER,
                    [semanticConventions.ATTR_HTTP_ROUTE]: routeOptions.url,
                    [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: routeOptions.handler.name.length > 0 ? routeOptions.handler.name : ANONYMOUS_FUNCTION_NAME
                });
            });
            instance.addHook('onRequest', function(request, _reply, hookDone) {
                if (this[kInstrumentation].isEnabled() === false) {
                    return hookDone();
                } else if (this[kInstrumentation][kIgnorePaths]?.({
                    url: request.url,
                    method: request.method
                }) === true) {
                    this[kInstrumentation]._logger.debug(`Ignoring request ${request.method} ${request.url} because it matches the ignore path`);
                    return hookDone();
                }
                let ctx = api.context.active();
                if (api.trace.getSpan(ctx) == null) {
                    ctx = api.propagation.extract(ctx, request.headers);
                }
                const rpcMetadata = core.getRPCMetadata(ctx);
                if (request.routeOptions.url != null && rpcMetadata?.type === core.RPCType.HTTP) {
                    rpcMetadata.route = request.routeOptions.url;
                }
                /** @type {import('@opentelemetry/api').Span} */ const span = this[kInstrumentation].tracer.startSpan('request', {
                    attributes: {
                        [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                        [ATTRIBUTE_NAMES.ROOT]: '@fastify/otel',
                        [semanticConventions.ATTR_HTTP_ROUTE]: request.url,
                        [semanticConventions.ATTR_HTTP_REQUEST_METHOD]: request.method
                    }
                }, ctx);
                request[kRequestContext] = api.trace.setSpan(ctx, span);
                request[kRequestSpan] = span;
                api.context.with(request[kRequestContext], ()=>{
                    hookDone();
                });
            });
            // onResponse is the last hook to be executed, only added for 404 handlers
            instance.addHook('onResponse', function(request, reply, hookDone) {
                const span = request[kRequestSpan];
                if (span != null) {
                    span.setStatus({
                        code: api.SpanStatusCode.OK,
                        message: 'OK'
                    });
                    span.setAttributes({
                        [semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE]: 404
                    });
                    span.end();
                }
                request[kRequestSpan] = null;
                hookDone();
            });
            instance.addHook = addHookPatched;
            instance.setNotFoundHandler = setNotFoundHandlerPatched;
            done();
            function onSendHook(request, reply, payload, hookDone) {
                /** @type {import('@opentelemetry/api').Span} */ const span = request[kRequestSpan];
                if (span != null) {
                    if (reply.statusCode < 500) {
                        span.setStatus({
                            code: api.SpanStatusCode.OK,
                            message: 'OK'
                        });
                    }
                    span.setAttributes({
                        [semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE]: reply.statusCode
                    });
                    span.end();
                }
                request[kRequestSpan] = null;
                hookDone(null, payload);
            }
            function onErrorHook(request, reply, error, hookDone) {
                /** @type {Span} */ const span = request[kRequestSpan];
                if (span != null) {
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR,
                        message: error.message
                    });
                    span.recordException(error);
                }
                hookDone();
            }
            function addHookPatched(name, hook) {
                const addHookOriginal = this[kAddHookOriginal];
                if (FASTIFY_HOOKS.includes(name)) {
                    return addHookOriginal.call(this, name, handlerWrapper(hook, {
                        [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                        [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - ${name}`,
                        [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
                        [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hook.name?.length > 0 ? hook.name : ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ 
                    }));
                } else {
                    return addHookOriginal.call(this, name, hook);
                }
            }
            function setNotFoundHandlerPatched(hooks, handler) {
                const setNotFoundHandlerOriginal = this[kSetNotFoundOriginal];
                if (typeof hooks === 'function') {
                    handler = handlerWrapper(hooks, {
                        [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                        [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler`,
                        [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
                        [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hooks.name?.length > 0 ? hooks.name : ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ 
                    });
                    setNotFoundHandlerOriginal.call(this, handler);
                } else {
                    if (hooks.preValidation != null) {
                        hooks.preValidation = handlerWrapper(hooks.preValidation, {
                            [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                            [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler - preValidation`,
                            [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
                            [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hooks.preValidation.name?.length > 0 ? hooks.preValidation.name : ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ 
                        });
                    }
                    if (hooks.preHandler != null) {
                        hooks.preHandler = handlerWrapper(hooks.preHandler, {
                            [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                            [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler - preHandler`,
                            [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
                            [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: hooks.preHandler.name?.length > 0 ? hooks.preHandler.name : ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ 
                        });
                    }
                    handler = handlerWrapper(handler, {
                        [semanticConventions.ATTR_SERVICE_NAME]: instance[kInstrumentation].servername,
                        [ATTRIBUTE_NAMES.HOOK_NAME]: `${this.pluginName} - not-found-handler`,
                        [ATTRIBUTE_NAMES.FASTIFY_TYPE]: HOOK_TYPES.INSTANCE,
                        [ATTRIBUTE_NAMES.HOOK_CALLBACK_NAME]: handler.name?.length > 0 ? handler.name : ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ 
                    });
                    setNotFoundHandlerOriginal.call(this, hooks, handler);
                }
            }
            function handlerWrapper(handler, spanAttributes = {}) {
                return function handlerWrapped(...args) {
                    /** @type {FastifyOtelInstrumentation} */ const instrumentation = this[kInstrumentation];
                    const [request] = args;
                    if (instrumentation.isEnabled() === false) {
                        return handler.call(this, ...args);
                    }
                    const ctx = request[kRequestContext] ?? api.context.active();
                    const span = instrumentation.tracer.startSpan(`handler - ${handler.name?.length > 0 ? handler.name : this.pluginName /* c8 ignore next */  ?? ANONYMOUS_FUNCTION_NAME /* c8 ignore next */ }`, {
                        attributes: spanAttributes
                    }, ctx);
                    return api.context.with(api.trace.setSpan(ctx, span), function() {
                        try {
                            const res = handler.call(this, ...args);
                            if (typeof res?.then === 'function') {
                                return res.then((result)=>{
                                    span.end();
                                    return result;
                                }, (error)=>{
                                    span.setStatus({
                                        code: api.SpanStatusCode.ERROR,
                                        message: error.message
                                    });
                                    span.recordException(error);
                                    span.end();
                                    return Promise.reject(error);
                                });
                            }
                            span.end();
                            return res;
                        } catch (error) {
                            span.setStatus({
                                code: api.SpanStatusCode.ERROR,
                                message: error.message
                            });
                            span.recordException(error);
                            span.end();
                            throw error;
                        }
                    }, this);
                };
            }
        }
    }
}
exports.FastifyOtelInstrumentation = FastifyOtelInstrumentation; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/enums/AttributeNames.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
// Vendored from https://github.com/open-telemetry/opentelemetry-js-contrib/blob/407f61591ba69a39a6908264379d4d98a48dbec4/plugins/node/opentelemetry-instrumentation-fastify/src/enums/AttributeNames.ts
//
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
 */ exports.AttributeNames = void 0;
(function(AttributeNames) {
    const FASTIFY_NAME = 'fastify.name';
    AttributeNames["FASTIFY_NAME"] = FASTIFY_NAME;
    const FASTIFY_TYPE = 'fastify.type';
    AttributeNames["FASTIFY_TYPE"] = FASTIFY_TYPE;
    const HOOK_NAME = 'hook.name';
    AttributeNames["HOOK_NAME"] = HOOK_NAME;
    const PLUGIN_NAME = 'plugin.name';
    AttributeNames["PLUGIN_NAME"] = PLUGIN_NAME;
})(exports.AttributeNames || (exports.AttributeNames = {}));
exports.FastifyTypes = void 0;
(function(FastifyTypes) {
    const MIDDLEWARE = 'middleware';
    FastifyTypes["MIDDLEWARE"] = MIDDLEWARE;
    const REQUEST_HANDLER = 'request_handler';
    FastifyTypes["REQUEST_HANDLER"] = REQUEST_HANDLER;
})(exports.FastifyTypes || (exports.FastifyTypes = {}));
exports.FastifyNames = void 0;
(function(FastifyNames) {
    const MIDDLEWARE = 'middleware';
    FastifyNames["MIDDLEWARE"] = MIDDLEWARE;
    const REQUEST_HANDLER = 'request handler';
    FastifyNames["REQUEST_HANDLER"] = REQUEST_HANDLER;
})(exports.FastifyNames || (exports.FastifyNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/constants.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
// Vendored from https://github.com/open-telemetry/opentelemetry-js-contrib/blob/407f61591ba69a39a6908264379d4d98a48dbec4/plugins/node/opentelemetry-instrumentation-fastify/src/constants.ts
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
 */ const spanRequestSymbol = Symbol('opentelemetry.instrumentation.fastify.request_active_span');
exports.spanRequestSymbol = spanRequestSymbol; //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const constants = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/constants.js [app-ssr] (ecmascript)");
// Vendored from: https://github.com/open-telemetry/opentelemetry-js-contrib/blob/407f61591ba69a39a6908264379d4d98a48dbec4/plugins/node/opentelemetry-instrumentation-fastify/src/utils.ts
/* eslint-disable jsdoc/require-jsdoc */ /* eslint-disable @typescript-eslint/no-dynamic-delete */ /* eslint-disable @typescript-eslint/no-unsafe-member-access */ /* eslint-disable @typescript-eslint/explicit-function-return-type */ /*
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
 * Starts Span
 * @param reply - reply function
 * @param tracer - tracer
 * @param spanName - span name
 * @param spanAttributes - span attributes
 */ function startSpan(reply, tracer, spanName, spanAttributes = {}) {
    const span = tracer.startSpan(spanName, {
        attributes: spanAttributes
    });
    const spans = reply[constants.spanRequestSymbol] || [];
    spans.push(span);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Object.defineProperty(reply, constants.spanRequestSymbol, {
        enumerable: false,
        configurable: true,
        value: spans
    });
    return span;
}
/**
 * Ends span
 * @param reply - reply function
 * @param err - error
 */ function endSpan(reply, err) {
    const spans = reply[constants.spanRequestSymbol] || [];
    // there is no active span, or it has already ended
    if (!spans.length) {
        return;
    }
    // biome-ignore lint/complexity/noForEach: <explanation>
    spans.forEach((span)=>{
        if (err) {
            span.setStatus({
                code: api.SpanStatusCode.ERROR,
                message: err.message
            });
            span.recordException(err);
        }
        span.end();
    });
    delete reply[constants.spanRequestSymbol];
}
// @TODO after approve add this to instrumentation package and replace usage
// when it will be released
/**
 * This function handles the missing case from instrumentation package when
 * execute can either return a promise or void. And using async is not an
 * option as it is producing unwanted side effects.
 * @param execute - function to be executed
 * @param onFinish - function called when function executed
 * @param preventThrowingError - prevent to throw error when execute
 * function fails
 */ function safeExecuteInTheMiddleMaybePromise(execute, onFinish, preventThrowingError) {
    let error;
    let result = undefined;
    try {
        result = execute();
        if (isPromise(result)) {
            result.then((res)=>onFinish(undefined, res), (err)=>onFinish(err));
        }
    } catch (e) {
        error = e;
    } finally{
        if (!isPromise(result)) {
            onFinish(error, result);
            if (error && true) {
                // eslint-disable-next-line no-unsafe-finally
                throw error;
            }
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
function isPromise(val) {
    return typeof val === 'object' && val && typeof Object.getOwnPropertyDescriptor(val, 'then')?.value === 'function' || false;
}
exports.endSpan = endSpan;
exports.safeExecuteInTheMiddleMaybePromise = safeExecuteInTheMiddleMaybePromise;
exports.startSpan = startSpan; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/instrumentation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/core/build/esm/index.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const semanticConventions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [app-ssr] (ecmascript)");
const core$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const AttributeNames = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/enums/AttributeNames.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/utils.js [app-ssr] (ecmascript)");
// Vendored from: https://github.com/open-telemetry/opentelemetry-js-contrib/blob/407f61591ba69a39a6908264379d4d98a48dbec4/plugins/node/opentelemetry-instrumentation-fastify/src/instrumentation.ts
/* eslint-disable @typescript-eslint/no-this-alias */ /* eslint-disable jsdoc/require-jsdoc */ /* eslint-disable @typescript-eslint/explicit-function-return-type */ /* eslint-disable @typescript-eslint/no-unsafe-member-access */ /** @knipignore */ const PACKAGE_VERSION = '0.1.0';
const PACKAGE_NAME = '@sentry/instrumentation-fastify-v3';
const ANONYMOUS_NAME = 'anonymous';
// The instrumentation creates a span for invocations of lifecycle hook handlers
// that take `(request, reply, ...[, done])` arguments. Currently this is all
// lifecycle hooks except `onRequestAbort`.
// https://fastify.dev/docs/latest/Reference/Hooks
const hooksNamesToWrap = new Set([
    'onTimeout',
    'onRequest',
    'preParsing',
    'preValidation',
    'preSerialization',
    'preHandler',
    'onSend',
    'onResponse',
    'onError'
]);
/**
 * Fastify instrumentation for OpenTelemetry
 */ class FastifyInstrumentationV3 extends instrumentation.InstrumentationBase {
    constructor(config = {}){
        super(PACKAGE_NAME, PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation.InstrumentationNodeModuleDefinition('fastify', [
                '>=3.0.0 <4'
            ], (moduleExports)=>{
                return this._patchConstructor(moduleExports);
            })
        ];
    }
    _hookOnRequest() {
        const instrumentation = this;
        return function onRequest(request, reply, done) {
            if (!instrumentation.isEnabled()) {
                return done();
            }
            instrumentation._wrap(reply, 'send', instrumentation._patchSend());
            const anyRequest = request;
            const rpcMetadata = core.getRPCMetadata(api.context.active());
            const routeName = anyRequest.routeOptions ? anyRequest.routeOptions.url // since fastify@4.10.0
             : request.routerPath;
            if (routeName && rpcMetadata?.type === core.RPCType.HTTP) {
                rpcMetadata.route = routeName;
            }
            const method = request.method || 'GET';
            core$1.getIsolationScope().setTransactionName(`${method} ${routeName}`);
            done();
        };
    }
    _wrapHandler(pluginName, hookName, original, syncFunctionWithDone) {
        const instrumentation = this;
        this._diag.debug('Patching fastify route.handler function');
        return function(...args) {
            if (!instrumentation.isEnabled()) {
                return original.apply(this, args);
            }
            const name = original.name || pluginName || ANONYMOUS_NAME;
            const spanName = `${AttributeNames.FastifyNames.MIDDLEWARE} - ${name}`;
            const reply = args[1];
            const span = utils.startSpan(reply, instrumentation.tracer, spanName, {
                [AttributeNames.AttributeNames.FASTIFY_TYPE]: AttributeNames.FastifyTypes.MIDDLEWARE,
                [AttributeNames.AttributeNames.PLUGIN_NAME]: pluginName,
                [AttributeNames.AttributeNames.HOOK_NAME]: hookName
            });
            const origDone = syncFunctionWithDone && args[args.length - 1];
            if (origDone) {
                args[args.length - 1] = function(...doneArgs) {
                    utils.endSpan(reply);
                    origDone.apply(this, doneArgs);
                };
            }
            return api.context.with(api.trace.setSpan(api.context.active(), span), ()=>{
                return utils.safeExecuteInTheMiddleMaybePromise(()=>{
                    return original.apply(this, args);
                }, (err)=>{
                    if (err instanceof Error) {
                        span.setStatus({
                            code: api.SpanStatusCode.ERROR,
                            message: err.message
                        });
                        span.recordException(err);
                    }
                    // async hooks should end the span as soon as the promise is resolved
                    if (!syncFunctionWithDone) {
                        utils.endSpan(reply);
                    }
                });
            });
        };
    }
    _wrapAddHook() {
        const instrumentation = this;
        this._diag.debug('Patching fastify server.addHook function');
        // biome-ignore lint/complexity/useArrowFunction: <explanation>
        return function(original) {
            return function wrappedAddHook(...args) {
                const name = args[0];
                const handler = args[1];
                const pluginName = this.pluginName;
                if (!hooksNamesToWrap.has(name)) {
                    return original.apply(this, args);
                }
                const syncFunctionWithDone = typeof args[args.length - 1] === 'function' && handler.constructor.name !== 'AsyncFunction';
                return original.apply(this, [
                    name,
                    instrumentation._wrapHandler(pluginName, name, handler, syncFunctionWithDone)
                ]);
            };
        };
    }
    _patchConstructor(moduleExports) {
        const instrumentation = this;
        function fastify(...args) {
            const app = moduleExports.fastify.apply(this, args);
            app.addHook('onRequest', instrumentation._hookOnRequest());
            app.addHook('preHandler', instrumentation._hookPreHandler());
            instrumentClient();
            instrumentation._wrap(app, 'addHook', instrumentation._wrapAddHook());
            return app;
        }
        if (moduleExports.errorCodes !== undefined) {
            fastify.errorCodes = moduleExports.errorCodes;
        }
        fastify.fastify = fastify;
        fastify.default = fastify;
        return fastify;
    }
    _patchSend() {
        const instrumentation$1 = this;
        this._diag.debug('Patching fastify reply.send function');
        return function patchSend(original) {
            return function send(...args) {
                const maybeError = args[0];
                if (!instrumentation$1.isEnabled()) {
                    return original.apply(this, args);
                }
                return instrumentation.safeExecuteInTheMiddle(()=>{
                    return original.apply(this, args);
                }, (err)=>{
                    if (!err && maybeError instanceof Error) {
                        // eslint-disable-next-line no-param-reassign
                        err = maybeError;
                    }
                    utils.endSpan(this, err);
                });
            };
        };
    }
    _hookPreHandler() {
        const instrumentation$1 = this;
        this._diag.debug('Patching fastify preHandler function');
        return function preHandler(request, reply, done) {
            if (!instrumentation$1.isEnabled()) {
                return done();
            }
            const anyRequest = request;
            const handler = anyRequest.routeOptions?.handler || anyRequest.context?.handler;
            const handlerName = handler?.name.startsWith('bound ') ? handler.name.substring(6) : handler?.name;
            const spanName = `${AttributeNames.FastifyNames.REQUEST_HANDLER} - ${handlerName || this.pluginName || ANONYMOUS_NAME}`;
            const spanAttributes = {
                [AttributeNames.AttributeNames.PLUGIN_NAME]: this.pluginName,
                [AttributeNames.AttributeNames.FASTIFY_TYPE]: AttributeNames.FastifyTypes.REQUEST_HANDLER,
                // eslint-disable-next-line deprecation/deprecation
                [semanticConventions.SEMATTRS_HTTP_ROUTE]: anyRequest.routeOptions ? anyRequest.routeOptions.url // since fastify@4.10.0
                 : request.routerPath
            };
            if (handlerName) {
                spanAttributes[AttributeNames.AttributeNames.FASTIFY_NAME] = handlerName;
            }
            const span = utils.startSpan(reply, instrumentation$1.tracer, spanName, spanAttributes);
            addFastifyV3SpanAttributes(span);
            const { requestHook } = instrumentation$1.getConfig();
            if (requestHook) {
                instrumentation.safeExecuteInTheMiddle(()=>requestHook(span, {
                        request
                    }), (e)=>{
                    if (e) {
                        instrumentation$1._diag.error('request hook failed', e);
                    }
                }, true);
            }
            return api.context.with(api.trace.setSpan(api.context.active(), span), ()=>{
                done();
            });
        };
    }
}
function instrumentClient() {
    const client = core$1.getClient();
    if (client) {
        client.on('spanStart', (span)=>{
            addFastifyV3SpanAttributes(span);
        });
    }
}
function addFastifyV3SpanAttributes(span) {
    const attributes = core$1.spanToJSON(span).data;
    // this is one of: middleware, request_handler
    const type = attributes['fastify.type'];
    // If this is already set, or we have no fastify span, no need to process again...
    if (attributes[core$1.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
        return;
    }
    span.setAttributes({
        [core$1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.http.otel.fastify',
        [core$1.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.fastify`
    });
    // Also update the name, we don't need to "middleware - " prefix
    const name = attributes['fastify.name'] || attributes['plugin.name'] || attributes['hook.name'];
    if (typeof name === 'string') {
        // Try removing `fastify -> ` and `@fastify/otel -> ` prefixes
        // This is a bit of a hack, and not always working for all spans
        // But it's the best we can do without a proper API
        const updatedName = name.replace(/^fastify -> /, '').replace(/^@fastify\/otel -> /, '');
        span.updateName(updatedName);
    }
}
exports.FastifyInstrumentationV3 = FastifyInstrumentationV3; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/fastify-otel/index.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/v3/instrumentation.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Fastify';
const INTEGRATION_NAME_V3 = 'Fastify-V3';
const instrumentFastifyV3 = instrument.generateInstrumentOnce(INTEGRATION_NAME_V3, ()=>new instrumentation.FastifyInstrumentationV3());
const instrumentFastify = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>{
    const fastifyOtelInstrumentationInstance = new index.FastifyOtelInstrumentation();
    const plugin = fastifyOtelInstrumentationInstance.plugin();
    // This message handler works for Fastify versions 3, 4 and 5
    diagnosticsChannel.subscribe('fastify.initialization', (message)=>{
        const fastifyInstance = message.fastify;
        fastifyInstance?.register(plugin).after((err)=>{
            if (err) {
                debugBuild.DEBUG_BUILD && core.logger.error('Failed to setup Fastify instrumentation', err);
            } else {
                instrumentClient();
                if (fastifyInstance) {
                    instrumentOnRequest(fastifyInstance);
                }
            }
        });
    });
    // Returning this as unknown not to deal with the internal types of the FastifyOtelInstrumentation
    return fastifyOtelInstrumentationInstance;
});
const _fastifyIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentFastifyV3();
            instrumentFastify();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for [Fastify](https://fastify.dev/).
 *
 * If you also want to capture errors, you need to call `setupFastifyErrorHandler(app)` after you set up your Fastify server.
 *
 * For more information, see the [fastify documentation](https://docs.sentry.io/platforms/javascript/guides/fastify/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.fastifyIntegration()],
 * })
 * ```
 */ const fastifyIntegration = core.defineIntegration(_fastifyIntegration);
/**
 * Default function to determine if an error should be sent to Sentry
 *
 * 3xx and 4xx errors are not sent by default.
 */ function defaultShouldHandleError(_error, _request, reply) {
    const statusCode = reply.statusCode;
    // 3xx and 4xx errors are not sent by default.
    return statusCode >= 500 || statusCode <= 299;
}
/**
 * Add an Fastify error handler to capture errors to Sentry.
 *
 * @param fastify The Fastify instance to which to add the error handler
 * @param options Configuration options for the handler
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const Fastify = require("fastify");
 *
 * const app = Fastify();
 *
 * Sentry.setupFastifyErrorHandler(app);
 *
 * // Add your routes, etc.
 *
 * app.listen({ port: 3000 });
 * ```
 */ function setupFastifyErrorHandler(fastify, options) {
    const shouldHandleError = options?.shouldHandleError || defaultShouldHandleError;
    const plugin = Object.assign(function(fastify, _options, done) {
        fastify.addHook('onError', async (request, reply, error)=>{
            if (shouldHandleError(error, request, reply)) {
                core.captureException(error);
            }
        });
        done();
    }, {
        [Symbol.for('skip-override')]: true,
        [Symbol.for('fastify.display-name')]: 'sentry-fastify-error-handler'
    });
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fastify.register(plugin);
}
function addFastifySpanAttributes(span) {
    const spanJSON = core.spanToJSON(span);
    const spanName = spanJSON.description;
    const attributes = spanJSON.data;
    const type = attributes['fastify.type'];
    const isHook = type === 'hook';
    const isHandler = type === spanName?.startsWith('handler -');
    // In @fastify/otel `request-handler` is separated by dash, not underscore
    const isRequestHandler = spanName === 'request' || type === 'request-handler';
    // If this is already set, or we have no fastify span, no need to process again...
    if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !isHandler && !isRequestHandler && !isHook) {
        return;
    }
    const opPrefix = isHook ? 'hook' : isHandler ? 'middleware' : isRequestHandler ? 'request-handler' : '<unknown>';
    span.setAttributes({
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.http.otel.fastify',
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${opPrefix}.fastify`
    });
    const attrName = attributes['fastify.name'] || attributes['plugin.name'] || attributes['hook.name'];
    if (typeof attrName === 'string') {
        // Try removing `fastify -> ` and `@fastify/otel -> ` prefixes
        // This is a bit of a hack, and not always working for all spans
        // But it's the best we can do without a proper API
        const updatedName = attrName.replace(/^fastify -> /, '').replace(/^@fastify\/otel -> /, '');
        span.updateName(updatedName);
    }
}
function instrumentClient() {
    const client = core.getClient();
    if (client) {
        client.on('spanStart', (span)=>{
            addFastifySpanAttributes(span);
        });
    }
}
function instrumentOnRequest(fastify) {
    fastify.addHook('onRequest', async (request, _reply)=>{
        if (request.opentelemetry) {
            const { span } = request.opentelemetry();
            if (span) {
                addFastifySpanAttributes(span);
            }
        }
        const routeName = request.routeOptions?.url;
        const method = request.method || 'GET';
        core.getIsolationScope().setTransactionName(`${method} ${routeName}`);
    });
}
exports.fastifyIntegration = fastifyIntegration;
exports.instrumentFastify = instrumentFastify;
exports.instrumentFastifyV3 = instrumentFastifyV3;
exports.setupFastifyErrorHandler = setupFastifyErrorHandler; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/graphql.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationGraphql = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Graphql';
const instrumentGraphql = instrument.generateInstrumentOnce(INTEGRATION_NAME, instrumentationGraphql.GraphQLInstrumentation, (_options)=>{
    const options = getOptionsWithDefaults(_options);
    return {
        ...options,
        responseHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.graphql.otel.graphql');
            const attributes = core.spanToJSON(span).data;
            // If operation.name is not set, we fall back to use operation.type only
            const operationType = attributes['graphql.operation.type'];
            const operationName = attributes['graphql.operation.name'];
            if (options.useOperationNameForRootSpan && operationType) {
                const rootSpan = core.getRootSpan(span);
                const rootSpanAttributes = core.spanToJSON(rootSpan).data;
                const existingOperations = rootSpanAttributes[opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION] || [];
                const newOperation = operationName ? `${operationType} ${operationName}` : `${operationType}`;
                // We keep track of each operation on the root span
                // This can either be a string, or an array of strings (if there are multiple operations)
                if (Array.isArray(existingOperations)) {
                    existingOperations.push(newOperation);
                    rootSpan.setAttribute(opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, existingOperations);
                } else if (typeof existingOperations === 'string') {
                    rootSpan.setAttribute(opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, [
                        existingOperations,
                        newOperation
                    ]);
                } else {
                    rootSpan.setAttribute(opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, newOperation);
                }
                if (!core.spanToJSON(rootSpan).data['original-description']) {
                    rootSpan.setAttribute('original-description', core.spanToJSON(rootSpan).description);
                }
                // Important for e.g. @sentry/aws-serverless because this would otherwise overwrite the name again
                rootSpan.updateName(`${core.spanToJSON(rootSpan).data['original-description']} (${getGraphqlOperationNamesFromAttribute(existingOperations)})`);
            }
        }
    };
});
const _graphqlIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            // We set defaults here, too, because otherwise we'd update the instrumentation config
            // to the config without defaults, as `generateInstrumentOnce` automatically calls `setConfig(options)`
            // when being called the second time
            instrumentGraphql(getOptionsWithDefaults(options));
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [graphql](https://www.npmjs.com/package/graphql) library.
 *
 * For more information, see the [`graphqlIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/graphql/).
 *
 * @param {GraphqlOptions} options Configuration options for the GraphQL integration.
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.graphqlIntegration()],
 * });
 */ const graphqlIntegration = core.defineIntegration(_graphqlIntegration);
function getOptionsWithDefaults(options) {
    return {
        ignoreResolveSpans: true,
        ignoreTrivialResolveSpans: true,
        useOperationNameForRootSpan: true,
        ...options
    };
}
// copy from packages/opentelemetry/utils
function getGraphqlOperationNamesFromAttribute(attr) {
    if (Array.isArray(attr)) {
        const sorted = attr.slice().sort();
        // Up to 5 items, we just add all of them
        if (sorted.length <= 5) {
            return sorted.join(', ');
        } else {
            // Else, we add the first 5 and the diff of other operations
            return `${sorted.slice(0, 5).join(', ')}, +${sorted.length - 5}`;
        }
    }
    return `${attr}`;
}
exports.graphqlIntegration = graphqlIntegration;
exports.instrumentGraphql = instrumentGraphql; //# sourceMappingURL=graphql.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/kafka.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationKafkajs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Kafka';
const instrumentKafka = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationKafkajs.KafkaJsInstrumentation({
        consumerHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.kafkajs.otel.consumer');
        },
        producerHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.kafkajs.otel.producer');
        }
    }));
const _kafkaIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentKafka();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [kafkajs](https://www.npmjs.com/package/kafkajs) library.
 *
 * For more information, see the [`kafkaIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/kafka/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.kafkaIntegration()],
 * });
 */ const kafkaIntegration = core.defineIntegration(_kafkaIntegration);
exports.instrumentKafka = instrumentKafka;
exports.kafkaIntegration = kafkaIntegration; //# sourceMappingURL=kafka.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/lrumemoizer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationLruMemoizer = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'LruMemoizer';
const instrumentLruMemoizer = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationLruMemoizer.LruMemoizerInstrumentation());
const _lruMemoizerIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentLruMemoizer();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [lru-memoizer](https://www.npmjs.com/package/lru-memoizer) library.
 *
 * For more information, see the [`lruMemoizerIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/lrumemoizer/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.lruMemoizerIntegration()],
 * });
 */ const lruMemoizerIntegration = core.defineIntegration(_lruMemoizerIntegration);
exports.instrumentLruMemoizer = instrumentLruMemoizer;
exports.lruMemoizerIntegration = lruMemoizerIntegration; //# sourceMappingURL=lrumemoizer.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mongo.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationMongodb = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Mongo';
const instrumentMongo = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationMongodb.MongoDBInstrumentation({
        dbStatementSerializer: _defaultDbStatementSerializer,
        responseHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.db.otel.mongo');
        }
    }));
/**
 * Replaces values in document with '?', hiding PII and helping grouping.
 */ function _defaultDbStatementSerializer(commandObj) {
    const resultObj = _scrubStatement(commandObj);
    return JSON.stringify(resultObj);
}
function _scrubStatement(value) {
    if (Array.isArray(value)) {
        return value.map((element)=>_scrubStatement(element));
    }
    if (isCommandObj(value)) {
        const initial = {};
        return Object.entries(value).map(([key, element])=>[
                key,
                _scrubStatement(element)
            ]).reduce((prev, current)=>{
            if (isCommandEntry(current)) {
                prev[current[0]] = current[1];
            }
            return prev;
        }, initial);
    }
    // A value like string or number, possible contains PII, scrub it
    return '?';
}
function isCommandObj(value) {
    return typeof value === 'object' && value !== null && !isBuffer(value);
}
function isBuffer(value) {
    let isBuffer = false;
    if (typeof Buffer !== 'undefined') {
        isBuffer = Buffer.isBuffer(value);
    }
    return isBuffer;
}
function isCommandEntry(value) {
    return Array.isArray(value);
}
const _mongoIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentMongo();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [mongodb](https://www.npmjs.com/package/mongodb) library.
 *
 * For more information, see the [`mongoIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mongo/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.mongoIntegration()],
 * });
 * ```
 */ const mongoIntegration = core.defineIntegration(_mongoIntegration);
exports._defaultDbStatementSerializer = _defaultDbStatementSerializer;
exports.instrumentMongo = instrumentMongo;
exports.mongoIntegration = mongoIntegration; //# sourceMappingURL=mongo.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mongoose.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationMongoose = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Mongoose';
const instrumentMongoose = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationMongoose.MongooseInstrumentation({
        responseHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.db.otel.mongoose');
        }
    }));
const _mongooseIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentMongoose();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [mongoose](https://www.npmjs.com/package/mongoose) library.
 *
 * For more information, see the [`mongooseIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mongoose/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.mongooseIntegration()],
 * });
 * ```
 */ const mongooseIntegration = core.defineIntegration(_mongooseIntegration);
exports.instrumentMongoose = instrumentMongoose;
exports.mongooseIntegration = mongooseIntegration; //# sourceMappingURL=mongoose.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mysql.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationMysql = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Mysql';
const instrumentMysql = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationMysql.MySQLInstrumentation({}));
const _mysqlIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentMysql();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [mysql](https://www.npmjs.com/package/mysql) library.
 *
 * For more information, see the [`mysqlIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mysql/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.mysqlIntegration()],
 * });
 * ```
 */ const mysqlIntegration = core.defineIntegration(_mysqlIntegration);
exports.instrumentMysql = instrumentMysql;
exports.mysqlIntegration = mysqlIntegration; //# sourceMappingURL=mysql.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mysql2.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationMysql2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Mysql2';
const instrumentMysql2 = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationMysql2.MySQL2Instrumentation({
        responseHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.db.otel.mysql2');
        }
    }));
const _mysql2Integration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentMysql2();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [mysql2](https://www.npmjs.com/package/mysql2) library.
 *
 * For more information, see the [`mysql2Integration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mysql2/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.mysqlIntegration()],
 * });
 * ```
 */ const mysql2Integration = core.defineIntegration(_mysql2Integration);
exports.instrumentMysql2 = instrumentMysql2;
exports.mysql2Integration = mysql2Integration; //# sourceMappingURL=mysql2.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/redisCache.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const SINGLE_ARG_COMMANDS = [
    'get',
    'set',
    'setex'
];
const GET_COMMANDS = [
    'get',
    'mget'
];
const SET_COMMANDS = [
    'set',
    'setex'
];
// todo: del, expire
/** Checks if a given command is in the list of redis commands.
 *  Useful because commands can come in lowercase or uppercase (depending on the library). */ function isInCommands(redisCommands, command) {
    return redisCommands.includes(command.toLowerCase());
}
/** Determine cache operation based on redis statement */ function getCacheOperation(command) {
    if (isInCommands(GET_COMMANDS, command)) {
        return 'cache.get';
    } else if (isInCommands(SET_COMMANDS, command)) {
        return 'cache.put';
    } else {
        return undefined;
    }
}
function keyHasPrefix(key, prefixes) {
    return prefixes.some((prefix)=>key.startsWith(prefix));
}
/** Safely converts a redis key to a string (comma-separated if there are multiple keys) */ function getCacheKeySafely(redisCommand, cmdArgs) {
    try {
        if (cmdArgs.length === 0) {
            return undefined;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const processArg = (arg)=>{
            if (typeof arg === 'string' || typeof arg === 'number' || Buffer.isBuffer(arg)) {
                return [
                    arg.toString()
                ];
            } else if (Array.isArray(arg)) {
                return flatten(arg.map((arg)=>processArg(arg)));
            } else {
                return [
                    '<unknown>'
                ];
            }
        };
        const firstArg = cmdArgs[0];
        if (isInCommands(SINGLE_ARG_COMMANDS, redisCommand) && firstArg != null) {
            return processArg(firstArg);
        }
        return flatten(cmdArgs.map((arg)=>processArg(arg)));
    } catch (e) {
        return undefined;
    }
}
/** Determines whether a redis operation should be considered as "cache operation" by checking if a key is prefixed.
 *  We only support certain commands (such as 'set', 'get', 'mget'). */ function shouldConsiderForCache(redisCommand, keys, prefixes) {
    if (!getCacheOperation(redisCommand)) {
        return false;
    }
    for (const key of keys){
        if (keyHasPrefix(key, prefixes)) {
            return true;
        }
    }
    return false;
}
/** Calculates size based on the cache response value */ function calculateCacheItemSize(response) {
    const getSize = (value)=>{
        try {
            if (Buffer.isBuffer(value)) return value.byteLength;
            else if (typeof value === 'string') return value.length;
            else if (typeof value === 'number') return value.toString().length;
            else if (value === null || value === undefined) return 0;
            return JSON.stringify(value).length;
        } catch (e) {
            return undefined;
        }
    };
    return Array.isArray(response) ? response.reduce((acc, curr)=>{
        const size = getSize(curr);
        return typeof size === 'number' ? acc !== undefined ? acc + size : size : acc;
    }, 0) : getSize(response);
}
function flatten(input) {
    const result = [];
    const flattenHelper = (input)=>{
        input.forEach((el)=>{
            if (Array.isArray(el)) {
                flattenHelper(el);
            } else {
                result.push(el);
            }
        });
    };
    flattenHelper(input);
    return result;
}
exports.GET_COMMANDS = GET_COMMANDS;
exports.SET_COMMANDS = SET_COMMANDS;
exports.calculateCacheItemSize = calculateCacheItemSize;
exports.getCacheKeySafely = getCacheKeySafely;
exports.getCacheOperation = getCacheOperation;
exports.isInCommands = isInCommands;
exports.shouldConsiderForCache = shouldConsiderForCache; //# sourceMappingURL=redisCache.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/redis.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationIoredis = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/index.js [app-ssr] (ecmascript)");
const instrumentationRedis4 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const redisCache = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/redisCache.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Redis';
let _redisOptions = {};
const cacheResponseHook = (span, redisCommand, cmdArgs, response)=>{
    span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.db.otel.redis');
    const safeKey = redisCache.getCacheKeySafely(redisCommand, cmdArgs);
    const cacheOperation = redisCache.getCacheOperation(redisCommand);
    if (!safeKey || !cacheOperation || !_redisOptions.cachePrefixes || !redisCache.shouldConsiderForCache(redisCommand, safeKey, _redisOptions.cachePrefixes)) {
        // not relevant for cache
        return;
    }
    // otel/ioredis seems to be using the old standard, as there was a change to those params: https://github.com/open-telemetry/opentelemetry-specification/issues/3199
    // We are using params based on the docs: https://opentelemetry.io/docs/specs/semconv/attributes-registry/network/
    const networkPeerAddress = core.spanToJSON(span).data['net.peer.name'];
    const networkPeerPort = core.spanToJSON(span).data['net.peer.port'];
    if (networkPeerPort && networkPeerAddress) {
        span.setAttributes({
            'network.peer.address': networkPeerAddress,
            'network.peer.port': networkPeerPort
        });
    }
    const cacheItemSize = redisCache.calculateCacheItemSize(response);
    if (cacheItemSize) {
        span.setAttribute(core.SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, cacheItemSize);
    }
    if (redisCache.isInCommands(redisCache.GET_COMMANDS, redisCommand) && cacheItemSize !== undefined) {
        span.setAttribute(core.SEMANTIC_ATTRIBUTE_CACHE_HIT, cacheItemSize > 0);
    }
    span.setAttributes({
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: cacheOperation,
        [core.SEMANTIC_ATTRIBUTE_CACHE_KEY]: safeKey
    });
    const spanDescription = safeKey.join(', ');
    span.updateName(core.truncate(spanDescription, 1024));
};
const instrumentIORedis = instrument.generateInstrumentOnce('IORedis', ()=>{
    return new instrumentationIoredis.IORedisInstrumentation({
        responseHook: cacheResponseHook
    });
});
const instrumentRedis4 = instrument.generateInstrumentOnce('Redis-4', ()=>{
    return new instrumentationRedis4.RedisInstrumentation({
        responseHook: cacheResponseHook
    });
});
/** To be able to preload all Redis OTel instrumentations with just one ID ("Redis"), all the instrumentations are generated in this one function  */ const instrumentRedis = Object.assign(()=>{
    instrumentIORedis();
    instrumentRedis4();
// todo: implement them gradually
// new LegacyRedisInstrumentation({}),
}, {
    id: INTEGRATION_NAME
});
const _redisIntegration = (options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            _redisOptions = options;
            instrumentRedis();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [redis](https://www.npmjs.com/package/redis) and
 * [ioredis](https://www.npmjs.com/package/ioredis) libraries.
 *
 * For more information, see the [`redisIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/redis/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.redisIntegration()],
 * });
 * ```
 */ const redisIntegration = core.defineIntegration(_redisIntegration);
exports.instrumentRedis = instrumentRedis;
exports.redisIntegration = redisIntegration; //# sourceMappingURL=redis.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/postgres.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationPg = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Postgres';
const instrumentPostgres = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationPg.PgInstrumentation({
        requireParentSpan: true,
        requestHook (span) {
            addOriginToSpan.addOriginToSpan(span, 'auto.db.otel.postgres');
        }
    }));
const _postgresIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentPostgres();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [pg](https://www.npmjs.com/package/pg) library.
 *
 * For more information, see the [`postgresIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/postgres/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.postgresIntegration()],
 * });
 * ```
 */ const postgresIntegration = core.defineIntegration(_postgresIntegration);
exports.instrumentPostgres = instrumentPostgres;
exports.postgresIntegration = postgresIntegration; //# sourceMappingURL=postgres.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/prisma.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/dist/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Prisma';
function isPrismaV6TracingHelper(helper) {
    return !!helper && typeof helper === 'object' && 'dispatchEngineSpans' in helper;
}
function getPrismaTracingHelper() {
    const prismaInstrumentationObject = globalThis.PRISMA_INSTRUMENTATION;
    const prismaTracingHelper = prismaInstrumentationObject && typeof prismaInstrumentationObject === 'object' && 'helper' in prismaInstrumentationObject ? prismaInstrumentationObject.helper : undefined;
    return prismaTracingHelper;
}
class SentryPrismaInteropInstrumentation extends instrumentation.PrismaInstrumentation {
    constructor(){
        super();
    }
    enable() {
        super.enable();
        // The PrismaIntegration (super class) defines a global variable `global["PRISMA_INSTRUMENTATION"]` when `enable()` is called. This global variable holds a "TracingHelper" which Prisma uses internally to create tracing data. It's their way of not depending on OTEL with their main package. The sucky thing is, prisma broke the interface of the tracing helper with the v6 major update. This means that if you use Prisma 5 with the v6 instrumentation (or vice versa) Prisma just blows up, because tries to call methods on the helper that no longer exist.
        // Because we actually want to use the v6 instrumentation and not blow up in Prisma 5 user's faces, what we're doing here is backfilling the v5 method (`createEngineSpan`) with a noop so that no longer crashes when it attempts to call that function.
        // We still won't fully emit all the spans, but this could potentially be implemented in the future.
        const prismaTracingHelper = getPrismaTracingHelper();
        let emittedWarning = false;
        if (isPrismaV6TracingHelper(prismaTracingHelper)) {
            prismaTracingHelper.createEngineSpan = ()=>{
                core.consoleSandbox(()=>{
                    if (!emittedWarning) {
                        emittedWarning = true;
                        // eslint-disable-next-line no-console
                        console.warn('[Sentry] The Sentry SDK supports tracing with Prisma version 5 only with limited capabilities. For full tracing capabilities pass `prismaInstrumentation` for version 5 to the Sentry `prismaIntegration`. Read more: https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/prisma/');
                    }
                });
            };
        }
    }
}
const instrumentPrisma = instrument.generateInstrumentOnce(INTEGRATION_NAME, (options)=>{
    // Use a passed instrumentation instance to support older Prisma versions
    if (options?.prismaInstrumentation) {
        return options.prismaInstrumentation;
    }
    return new SentryPrismaInteropInstrumentation();
});
/**
 * Adds Sentry tracing instrumentation for the [prisma](https://www.npmjs.com/package/prisma) library.
 * For more information, see the [`prismaIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/prisma/).
 *
 * NOTE: By default, this integration works with Prisma version 6.
 * To get performance instrumentation for other Prisma versions,
 * 1. Install the `@prisma/instrumentation` package with the desired version.
 * 1. Pass a `new PrismaInstrumentation()` instance as exported from `@prisma/instrumentation` to the `prismaInstrumentation` option of this integration:
 *
 *    ```js
 *    import { PrismaInstrumentation } from '@prisma/instrumentation'
 *
 *    Sentry.init({
 *      integrations: [
 *        prismaIntegration({
 *          // Override the default instrumentation that Sentry uses
 *          prismaInstrumentation: new PrismaInstrumentation()
 *        })
 *      ]
 *    })
 *    ```
 *
 *    The passed instrumentation instance will override the default instrumentation instance the integration would use, while the `prismaIntegration` will still ensure data compatibility for the various Prisma versions.
 * 1. Depending on your Prisma version (prior to version 6), add `previewFeatures = ["tracing"]` to the client generator block of your Prisma schema:
 *
 *    ```
 *    generator client {
 *      provider = "prisma-client-js"
 *      previewFeatures = ["tracing"]
 *    }
 *    ```
 */ const prismaIntegration = core.defineIntegration(({ prismaInstrumentation } = {})=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentPrisma({
                prismaInstrumentation
            });
        },
        setup (client) {
            // If no tracing helper exists, we skip any work here
            // this means that prisma is not being used
            if (!getPrismaTracingHelper()) {
                return;
            }
            client.on('spanStart', (span)=>{
                const spanJSON = core.spanToJSON(span);
                if (spanJSON.description?.startsWith('prisma:')) {
                    span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.db.otel.prisma');
                }
                // Make sure we use the query text as the span name, for ex. SELECT * FROM "User" WHERE "id" = $1
                if (spanJSON.description === 'prisma:engine:db_query' && spanJSON.data['db.query.text']) {
                    span.updateName(spanJSON.data['db.query.text']);
                }
                // In Prisma v5.22+, the `db.system` attribute is automatically set
                // On older versions, this is missing, so we add it here
                if (spanJSON.description === 'prisma:engine:db_query' && !spanJSON.data['db.system']) {
                    span.setAttribute('db.system', 'prisma');
                }
            });
        }
    };
});
exports.instrumentPrisma = instrumentPrisma;
exports.prismaIntegration = prismaIntegration; //# sourceMappingURL=prisma.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/hapi/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationHapi = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const ensureIsWrapped = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/ensureIsWrapped.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Hapi';
const instrumentHapi = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationHapi.HapiInstrumentation());
const _hapiIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentHapi();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for [Hapi](https://hapi.dev/).
 *
 * If you also want to capture errors, you need to call `setupHapiErrorHandler(server)` after you set up your server.
 *
 * For more information, see the [hapi documentation](https://docs.sentry.io/platforms/javascript/guides/hapi/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.hapiIntegration()],
 * })
 * ```
 */ const hapiIntegration = core.defineIntegration(_hapiIntegration);
function isErrorEvent(event) {
    return !!(event && typeof event === 'object' && 'error' in event && event.error);
}
function sendErrorToSentry(errorData) {
    core.captureException(errorData, {
        mechanism: {
            type: 'hapi',
            handled: false,
            data: {
                function: 'hapiErrorPlugin'
            }
        }
    });
}
const hapiErrorPlugin = {
    name: 'SentryHapiErrorPlugin',
    version: core.SDK_VERSION,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: async function(serverArg) {
        const server = serverArg;
        server.events.on({
            name: 'request',
            channels: [
                'error'
            ]
        }, (request, event)=>{
            if (core.getIsolationScope() !== core.getDefaultIsolationScope()) {
                const route = request.route;
                if (route.path) {
                    core.getIsolationScope().setTransactionName(`${route.method.toUpperCase()} ${route.path}`);
                }
            } else {
                debugBuild.DEBUG_BUILD && core.logger.warn('Isolation scope is still the default isolation scope - skipping setting transactionName');
            }
            if (isErrorEvent(event)) {
                sendErrorToSentry(event.error);
            }
        });
    }
};
/**
 * Add a Hapi plugin to capture errors to Sentry.
 *
 * @param server The Hapi server to attach the error handler to
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const Hapi = require('@hapi/hapi');
 *
 * const init = async () => {
 *   const server = Hapi.server();
 *
 *   // all your routes here
 *
 *   await Sentry.setupHapiErrorHandler(server);
 *
 *   await server.start();
 * };
 * ```
 */ async function setupHapiErrorHandler(server) {
    await server.register(hapiErrorPlugin);
    // Sadly, middleware spans do not go through `requestHook`, so we handle those here
    // We register this hook in this method, because if we register it in the integration `setup`,
    // it would always run even for users that are not even using hapi
    const client = core.getClient();
    if (client) {
        client.on('spanStart', (span)=>{
            addHapiSpanAttributes(span);
        });
    }
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ensureIsWrapped.ensureIsWrapped(server.register, 'hapi');
}
function addHapiSpanAttributes(span) {
    const attributes = core.spanToJSON(span).data;
    // this is one of: router, plugin, server.ext
    const type = attributes['hapi.type'];
    // If this is already set, or we have no Hapi span, no need to process again...
    if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
        return;
    }
    span.setAttributes({
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.http.otel.hapi',
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.hapi`
    });
}
exports.hapiErrorPlugin = hapiErrorPlugin;
exports.hapiIntegration = hapiIntegration;
exports.instrumentHapi = instrumentHapi;
exports.setupHapiErrorHandler = setupHapiErrorHandler; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/koa.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationKoa = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/index.js [app-ssr] (ecmascript)");
const semanticConventions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const ensureIsWrapped = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/ensureIsWrapped.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Koa';
const instrumentKoa = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationKoa.KoaInstrumentation({
        requestHook (span, info) {
            addKoaSpanAttributes(span);
            if (core.getIsolationScope() === core.getDefaultIsolationScope()) {
                debugBuild.DEBUG_BUILD && core.logger.warn('Isolation scope is default isolation scope - skipping setting transactionName');
                return;
            }
            const attributes = core.spanToJSON(span).data;
            const route = attributes[semanticConventions.ATTR_HTTP_ROUTE];
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            const method = info.context?.request?.method?.toUpperCase() || 'GET';
            if (route) {
                core.getIsolationScope().setTransactionName(`${method} ${route}`);
            }
        }
    }));
const _koaIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentKoa();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for [Koa](https://koajs.com/).
 *
 * If you also want to capture errors, you need to call `setupKoaErrorHandler(app)` after you set up your Koa server.
 *
 * For more information, see the [koa documentation](https://docs.sentry.io/platforms/javascript/guides/koa/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.koaIntegration()],
 * })
 * ```
 */ const koaIntegration = core.defineIntegration(_koaIntegration);
/**
 * Add an Koa error handler to capture errors to Sentry.
 *
 * The error handler must be before any other middleware and after all controllers.
 *
 * @param app The Express instances
 * @param options {ExpressHandlerOptions} Configuration options for the handler
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const Koa = require("koa");
 *
 * const app = new Koa();
 *
 * Sentry.setupKoaErrorHandler(app);
 *
 * // Add your routes, etc.
 *
 * app.listen(3000);
 * ```
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const setupKoaErrorHandler = (app)=>{
    app.use(async (ctx, next)=>{
        try {
            await next();
        } catch (error) {
            core.captureException(error);
            throw error;
        }
    });
    ensureIsWrapped.ensureIsWrapped(app.use, 'koa');
};
function addKoaSpanAttributes(span) {
    span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.http.otel.koa');
    const attributes = core.spanToJSON(span).data;
    // this is one of: middleware, router
    const type = attributes['koa.type'];
    if (type) {
        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, `${type}.koa`);
    }
    // Also update the name
    const name = attributes['koa.name'];
    if (typeof name === 'string') {
        // Somehow, name is sometimes `''` for middleware spans
        // See: https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2220
        span.updateName(name || '< unknown >');
    }
}
exports.instrumentKoa = instrumentKoa;
exports.koaIntegration = koaIntegration;
exports.setupKoaErrorHandler = setupKoaErrorHandler; //# sourceMappingURL=koa.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/connect.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationConnect = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const ensureIsWrapped = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/ensureIsWrapped.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Connect';
const instrumentConnect = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationConnect.ConnectInstrumentation());
const _connectIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentConnect();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for [Connect](https://github.com/senchalabs/connect/).
 *
 * If you also want to capture errors, you need to call `setupConnectErrorHandler(app)` after you initialize your connect app.
 *
 * For more information, see the [connect documentation](https://docs.sentry.io/platforms/javascript/guides/connect/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.connectIntegration()],
 * })
 * ```
 */ const connectIntegration = core.defineIntegration(_connectIntegration);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function connectErrorMiddleware(err, req, res, next) {
    core.captureException(err);
    next(err);
}
/**
 * Add a Connect middleware to capture errors to Sentry.
 *
 * @param app The Connect app to attach the error handler to
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const connect = require("connect");
 *
 * const app = connect();
 *
 * Sentry.setupConnectErrorHandler(app);
 *
 * // Add you connect routes here
 *
 * app.listen(3000);
 * ```
 */ const setupConnectErrorHandler = (app)=>{
    app.use(connectErrorMiddleware);
    // Sadly, ConnectInstrumentation has no requestHook, so we need to add the attributes here
    // We register this hook in this method, because if we register it in the integration `setup`,
    // it would always run even for users that are not even using connect
    const client = core.getClient();
    if (client) {
        client.on('spanStart', (span)=>{
            addConnectSpanAttributes(span);
        });
    }
    ensureIsWrapped.ensureIsWrapped(app.use, 'connect');
};
function addConnectSpanAttributes(span) {
    const attributes = core.spanToJSON(span).data;
    // this is one of: middleware, request_handler
    const type = attributes['connect.type'];
    // If this is already set, or we have no connect span, no need to process again...
    if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !type) {
        return;
    }
    span.setAttributes({
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.http.otel.connect',
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${type}.connect`
    });
    // Also update the name, we don't need the "middleware - " prefix
    const name = attributes['connect.name'];
    if (typeof name === 'string') {
        span.updateName(name);
    }
}
exports.connectIntegration = connectIntegration;
exports.instrumentConnect = instrumentConnect;
exports.setupConnectErrorHandler = setupConnectErrorHandler; //# sourceMappingURL=connect.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/spotlight.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const http = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Spotlight';
const _spotlightIntegration = (options = {})=>{
    const _options = {
        sidecarUrl: options.sidecarUrl || 'http://localhost:8969/stream'
    };
    return {
        name: INTEGRATION_NAME,
        setup (client) {
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            connectToSpotlight(client, _options);
        }
    };
};
/**
 * Use this integration to send errors and transactions to Spotlight.
 *
 * Learn more about spotlight at https://spotlightjs.com
 *
 * Important: This integration only works with Node 18 or newer.
 */ const spotlightIntegration = core.defineIntegration(_spotlightIntegration);
function connectToSpotlight(client, options) {
    const spotlightUrl = parseSidecarUrl(options.sidecarUrl);
    if (!spotlightUrl) {
        return;
    }
    let failedRequests = 0;
    client.on('beforeEnvelope', (envelope)=>{
        if (failedRequests > 3) {
            core.logger.warn('[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests');
            return;
        }
        const serializedEnvelope = core.serializeEnvelope(envelope);
        core.suppressTracing(()=>{
            const req = http.request({
                method: 'POST',
                path: spotlightUrl.pathname,
                hostname: spotlightUrl.hostname,
                port: spotlightUrl.port,
                headers: {
                    'Content-Type': 'application/x-sentry-envelope'
                }
            }, (res)=>{
                if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) {
                    // Reset failed requests counter on success
                    failedRequests = 0;
                }
                res.on('data', ()=>{
                // Drain socket
                });
                res.on('end', ()=>{
                // Drain socket
                });
                res.setEncoding('utf8');
            });
            req.on('error', ()=>{
                failedRequests++;
                core.logger.warn('[Spotlight] Failed to send envelope to Spotlight Sidecar');
            });
            req.write(serializedEnvelope);
            req.end();
        });
    });
}
function parseSidecarUrl(url) {
    try {
        return new URL(`${url}`);
    } catch  {
        core.logger.warn(`[Spotlight] Invalid sidecar URL: ${url}`);
        return undefined;
    }
}
exports.INTEGRATION_NAME = INTEGRATION_NAME;
exports.spotlightIntegration = spotlightIntegration; //# sourceMappingURL=spotlight.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/knex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationKnex = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Knex';
const instrumentKnex = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationKnex.KnexInstrumentation({
        requireParentSpan: true
    }));
const _knexIntegration = ()=>{
    let instrumentationWrappedCallback;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            const instrumentation = instrumentKnex();
            instrumentationWrappedCallback = instrument.instrumentWhenWrapped(instrumentation);
        },
        setup (client) {
            instrumentationWrappedCallback?.(()=>client.on('spanStart', (span)=>{
                    const { data } = core.spanToJSON(span);
                    // knex.version is always set in the span data
                    // https://github.com/open-telemetry/opentelemetry-js-contrib/blob/0309caeafc44ac9cb13a3345b790b01b76d0497d/plugins/node/opentelemetry-instrumentation-knex/src/instrumentation.ts#L138
                    if ('knex.version' in data) {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.db.otel.knex');
                    }
                }));
        }
    };
};
/**
 * Knex integration
 *
 * Capture tracing data for [Knex](https://knexjs.org/).
 *
 * @example
 * ```javascript
 * import * as Sentry from '@sentry/node';
 *
 * Sentry.init({
 *  integrations: [Sentry.knexIntegration()],
 * });
 * ```
 */ const knexIntegration = core.defineIntegration(_knexIntegration);
exports.instrumentKnex = instrumentKnex;
exports.knexIntegration = knexIntegration; //# sourceMappingURL=knex.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/tedious.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationTedious = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const TEDIUS_INSTRUMENTED_METHODS = new Set([
    'callProcedure',
    'execSql',
    'execSqlBatch',
    'execBulkLoad',
    'prepare',
    'execute'
]);
const INTEGRATION_NAME = 'Tedious';
const instrumentTedious = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationTedious.TediousInstrumentation({}));
const _tediousIntegration = ()=>{
    let instrumentationWrappedCallback;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            const instrumentation = instrumentTedious();
            instrumentationWrappedCallback = instrument.instrumentWhenWrapped(instrumentation);
        },
        setup (client) {
            instrumentationWrappedCallback?.(()=>client.on('spanStart', (span)=>{
                    const { description, data } = core.spanToJSON(span);
                    // Tedius integration always set a span name and `db.system` attribute to `mssql`.
                    if (!description || data['db.system'] !== 'mssql') {
                        return;
                    }
                    const operation = description.split(' ')[0] || '';
                    if (TEDIUS_INSTRUMENTED_METHODS.has(operation)) {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.db.otel.tedious');
                    }
                }));
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [tedious](https://www.npmjs.com/package/tedious) library.
 *
 * For more information, see the [`tediousIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/tedious/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.tediousIntegration()],
 * });
 * ```
 */ const tediousIntegration = core.defineIntegration(_tediousIntegration);
exports.instrumentTedious = instrumentTedious;
exports.tediousIntegration = tediousIntegration; //# sourceMappingURL=tedious.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/genericPool.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationGenericPool = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'GenericPool';
const instrumentGenericPool = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationGenericPool.GenericPoolInstrumentation({}));
const _genericPoolIntegration = ()=>{
    let instrumentationWrappedCallback;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            const instrumentation = instrumentGenericPool();
            instrumentationWrappedCallback = instrument.instrumentWhenWrapped(instrumentation);
        },
        setup (client) {
            instrumentationWrappedCallback?.(()=>client.on('spanStart', (span)=>{
                    const spanJSON = core.spanToJSON(span);
                    const spanDescription = spanJSON.description;
                    // typo in emitted span for version <= 0.38.0 of @opentelemetry/instrumentation-generic-pool
                    const isGenericPoolSpan = spanDescription === 'generic-pool.aquire' || spanDescription === 'generic-pool.acquire';
                    if (isGenericPoolSpan) {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.db.otel.generic_pool');
                    }
                }));
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [generic-pool](https://www.npmjs.com/package/generic-pool) library.
 *
 * For more information, see the [`genericPoolIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/genericpool/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.genericPoolIntegration()],
 * });
 * ```
 */ const genericPoolIntegration = core.defineIntegration(_genericPoolIntegration);
exports.genericPoolIntegration = genericPoolIntegration;
exports.instrumentGenericPool = instrumentGenericPool; //# sourceMappingURL=genericPool.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/dataloader.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationDataloader = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Dataloader';
const instrumentDataloader = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationDataloader.DataloaderInstrumentation({
        requireParentSpan: true
    }));
const _dataloaderIntegration = ()=>{
    let instrumentationWrappedCallback;
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            const instrumentation = instrumentDataloader();
            instrumentationWrappedCallback = instrument.instrumentWhenWrapped(instrumentation);
        },
        setup (client) {
            // This is called either immediately or when the instrumentation is wrapped
            instrumentationWrappedCallback?.(()=>{
                client.on('spanStart', (span)=>{
                    const spanJSON = core.spanToJSON(span);
                    if (spanJSON.description?.startsWith('dataloader')) {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, 'auto.db.otel.dataloader');
                    }
                    // These are all possible dataloader span descriptions
                    // Still checking for the future versions
                    // in case they add support for `clear` and `prime`
                    if (spanJSON.description === 'dataloader.load' || spanJSON.description === 'dataloader.loadMany' || spanJSON.description === 'dataloader.batch') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'cache.get');
                    // TODO: We can try adding `key` to the `data` attribute upstream.
                    // Or alternatively, we can add `requestHook` to the dataloader instrumentation.
                    }
                });
            });
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [dataloader](https://www.npmjs.com/package/dataloader) library.
 *
 * For more information, see the [`dataloaderIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/dataloader/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.dataloaderIntegration()],
 * });
 * ```
 */ const dataloaderIntegration = core.defineIntegration(_dataloaderIntegration);
exports.dataloaderIntegration = dataloaderIntegration;
exports.instrumentDataloader = instrumentDataloader; //# sourceMappingURL=dataloader.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/amqplib.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentationAmqplib = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'Amqplib';
const config = {
    consumeEndHook: (span)=>{
        addOriginToSpan.addOriginToSpan(span, 'auto.amqplib.otel.consumer');
    },
    publishHook: (span)=>{
        addOriginToSpan.addOriginToSpan(span, 'auto.amqplib.otel.publisher');
    }
};
const instrumentAmqplib = instrument.generateInstrumentOnce(INTEGRATION_NAME, ()=>new instrumentationAmqplib.AmqplibInstrumentation(config));
const _amqplibIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            instrumentAmqplib();
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [amqplib](https://www.npmjs.com/package/amqplib) library.
 *
 * For more information, see the [`amqplibIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/amqplib/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.amqplibIntegration()],
 * });
 * ```
 */ const amqplibIntegration = core.defineIntegration(_amqplibIntegration);
exports.amqplibIntegration = amqplibIntegration;
exports.instrumentAmqplib = instrumentAmqplib; //# sourceMappingURL=amqplib.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/ai_sdk_attributes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
/**
 * AI SDK Telemetry Attributes
 * Based on https://ai-sdk.dev/docs/ai-sdk-core/telemetry#collected-data
 */ // =============================================================================
// SHARED ATTRIBUTES
// =============================================================================
/**
 * `generateText` function - `ai.generateText` span
 * `streamText` function - `ai.streamText` span
 *
 * The prompt that was used when calling the function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#generatetext-function
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#streamtext-function
 */ const AI_PROMPT_ATTRIBUTE = 'ai.prompt';
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The id of the model
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */ const AI_MODEL_ID_ATTRIBUTE = 'ai.model.id';
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The provider of the model
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */ const AI_MODEL_PROVIDER_ATTRIBUTE = 'ai.model.provider';
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The functionId that was set through `telemetry.functionId`
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */ const AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE = 'ai.telemetry.functionId';
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The number of completion tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */ const AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE = 'ai.usage.completionTokens';
/**
 * Basic LLM span information
 * Multiple spans
 *
 * The number of prompt tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#basic-llm-span-information
 */ const AI_USAGE_PROMPT_TOKENS_ATTRIBUTE = 'ai.usage.promptTokens';
/**
 * Semantic Conventions for GenAI operations
 * Individual LLM call spans
 *
 * The model that was used to generate the response
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#call-llm-span-information
 */ const GEN_AI_RESPONSE_MODEL_ATTRIBUTE = 'gen_ai.response.model';
/**
 * Semantic Conventions for GenAI operations
 * Individual LLM call spans
 *
 * The number of prompt tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#call-llm-span-information
 */ const GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE = 'gen_ai.usage.input_tokens';
/**
 * Semantic Conventions for GenAI operations
 * Individual LLM call spans
 *
 * The number of completion tokens that were used
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#call-llm-span-information
 */ const GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE = 'gen_ai.usage.output_tokens';
// =============================================================================
// TOOL CALL SPANS
// =============================================================================
/**
 * Tool call spans
 * `ai.toolCall` span
 *
 * The name of the tool
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
 */ const AI_TOOL_CALL_NAME_ATTRIBUTE = 'ai.toolCall.name';
/**
 * Tool call spans
 * `ai.toolCall` span
 *
 * The id of the tool call
 * @see https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
 */ const AI_TOOL_CALL_ID_ATTRIBUTE = 'ai.toolCall.id';
exports.AI_MODEL_ID_ATTRIBUTE = AI_MODEL_ID_ATTRIBUTE;
exports.AI_MODEL_PROVIDER_ATTRIBUTE = AI_MODEL_PROVIDER_ATTRIBUTE;
exports.AI_PROMPT_ATTRIBUTE = AI_PROMPT_ATTRIBUTE;
exports.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE = AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE;
exports.AI_TOOL_CALL_ID_ATTRIBUTE = AI_TOOL_CALL_ID_ATTRIBUTE;
exports.AI_TOOL_CALL_NAME_ATTRIBUTE = AI_TOOL_CALL_NAME_ATTRIBUTE;
exports.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE = AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE;
exports.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE = AI_USAGE_PROMPT_TOKENS_ATTRIBUTE;
exports.GEN_AI_RESPONSE_MODEL_ATTRIBUTE = GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
exports.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE = GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
exports.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE = GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE; //# sourceMappingURL=ai_sdk_attributes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/constants.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const INTEGRATION_NAME = 'VercelAI';
exports.INTEGRATION_NAME = INTEGRATION_NAME; //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/instrumentation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const constants = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/constants.js [app-ssr] (ecmascript)");
// List of patched methods
// From: https://sdk.vercel.ai/docs/ai-sdk-core/telemetry#collected-data
const INSTRUMENTED_METHODS = [
    'generateText',
    'streamText',
    'generateObject',
    'streamObject',
    'embed',
    'embedMany'
];
/**
 * Determines whether to record inputs and outputs for Vercel AI telemetry based on the configuration hierarchy.
 *
 * The order of precedence is:
 * 1. The vercel ai integration options
 * 2. The experimental_telemetry options in the vercel ai method calls
 * 3. When telemetry is explicitly enabled (isEnabled: true), default to recording
 * 4. Otherwise, use the sendDefaultPii option from client options
 */ function determineRecordingSettings(integrationRecordingOptions, methodTelemetryOptions, telemetryExplicitlyEnabled, defaultRecordingEnabled) {
    const recordInputs = integrationRecordingOptions?.recordInputs !== undefined ? integrationRecordingOptions.recordInputs : methodTelemetryOptions.recordInputs !== undefined ? methodTelemetryOptions.recordInputs : telemetryExplicitlyEnabled === true ? true // When telemetry is explicitly enabled, default to recording inputs
     : defaultRecordingEnabled;
    const recordOutputs = integrationRecordingOptions?.recordOutputs !== undefined ? integrationRecordingOptions.recordOutputs : methodTelemetryOptions.recordOutputs !== undefined ? methodTelemetryOptions.recordOutputs : telemetryExplicitlyEnabled === true ? true // When telemetry is explicitly enabled, default to recording inputs
     : defaultRecordingEnabled;
    return {
        recordInputs,
        recordOutputs
    };
}
/**
 * This detects is added by the Sentry Vercel AI Integration to detect if the integration should
 * be enabled.
 *
 * It also patches the `ai` module to enable Vercel AI telemetry automatically for all methods.
 */ class SentryVercelAiInstrumentation extends instrumentation.InstrumentationBase {
    __init() {
        this._isPatched = false;
    }
    __init2() {
        this._callbacks = [];
    }
    constructor(config = {}){
        super('@sentry/instrumentation-vercel-ai', core.SDK_VERSION, config);
        SentryVercelAiInstrumentation.prototype.__init.call(this);
        SentryVercelAiInstrumentation.prototype.__init2.call(this);
    }
    /**
   * Initializes the instrumentation by defining the modules to be patched.
   */ init() {
        const module = new instrumentation.InstrumentationNodeModuleDefinition('ai', [
            '>=3.0.0 <5'
        ], this._patch.bind(this));
        return module;
    }
    /**
   * Call the provided callback when the module is patched.
   * If it has already been patched, the callback will be called immediately.
   */ callWhenPatched(callback) {
        if (this._isPatched) {
            callback();
        } else {
            this._callbacks.push(callback);
        }
    }
    /**
   * Patches module exports to enable Vercel AI telemetry.
   */ _patch(moduleExports) {
        this._isPatched = true;
        this._callbacks.forEach((callback)=>callback());
        this._callbacks = [];
        function generatePatch(originalMethod) {
            return (...args)=>{
                const existingExperimentalTelemetry = args[0].experimental_telemetry || {};
                const isEnabled = existingExperimentalTelemetry.isEnabled;
                const client = core.getCurrentScope().getClient();
                const integration = client?.getIntegrationByName(constants.INTEGRATION_NAME);
                const integrationOptions = integration?.options;
                const shouldRecordInputsAndOutputs = integration ? Boolean(client?.getOptions().sendDefaultPii) : false;
                const { recordInputs, recordOutputs } = determineRecordingSettings(integrationOptions, existingExperimentalTelemetry, isEnabled, shouldRecordInputsAndOutputs);
                args[0].experimental_telemetry = {
                    ...existingExperimentalTelemetry,
                    isEnabled: isEnabled !== undefined ? isEnabled : true,
                    recordInputs,
                    recordOutputs
                };
                // @ts-expect-error we know that the method exists
                return originalMethod.apply(this, args);
            };
        }
        // Is this an ESM module?
        // https://tc39.es/ecma262/#sec-module-namespace-objects
        if (Object.prototype.toString.call(moduleExports) === '[object Module]') {
            // In ESM we take the usual route and just replace the exports we want to instrument
            for (const method of INSTRUMENTED_METHODS){
                moduleExports[method] = generatePatch(moduleExports[method]);
            }
            return moduleExports;
        } else {
            // In CJS we can't replace the exports in the original module because they
            // don't have setters, so we create a new object with the same properties
            const patchedModuleExports = INSTRUMENTED_METHODS.reduce((acc, curr)=>{
                acc[curr] = generatePatch(moduleExports[curr]);
                return acc;
            }, {});
            return {
                ...moduleExports,
                ...patchedModuleExports
            };
        }
    }
}
exports.SentryVercelAiInstrumentation = SentryVercelAiInstrumentation;
exports.determineRecordingSettings = determineRecordingSettings; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const addOriginToSpan = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/addOriginToSpan.js [app-ssr] (ecmascript)");
const ai_sdk_attributes = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/ai_sdk_attributes.js [app-ssr] (ecmascript)");
const constants = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/constants.js [app-ssr] (ecmascript)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/instrumentation.js [app-ssr] (ecmascript)");
const instrumentVercelAi = instrument.generateInstrumentOnce(constants.INTEGRATION_NAME, ()=>new instrumentation.SentryVercelAiInstrumentation({}));
const _vercelAIIntegration = (options = {})=>{
    let instrumentation;
    return {
        name: constants.INTEGRATION_NAME,
        options,
        setupOnce () {
            instrumentation = instrumentVercelAi();
        },
        setup (client) {
            instrumentation?.callWhenPatched(()=>{
                client.on('spanStart', (span)=>{
                    const { data: attributes, description: name } = core.spanToJSON(span);
                    if (!name) {
                        return;
                    }
                    // Tool call spans
                    // https://ai-sdk.dev/docs/ai-sdk-core/telemetry#tool-call-spans
                    if (attributes[ai_sdk_attributes.AI_TOOL_CALL_NAME_ATTRIBUTE] && attributes[ai_sdk_attributes.AI_TOOL_CALL_ID_ATTRIBUTE] && name === 'ai.toolCall') {
                        addOriginToSpan.addOriginToSpan(span, 'auto.vercelai.otel');
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.execute_tool');
                        span.setAttribute('gen_ai.tool.call.id', attributes[ai_sdk_attributes.AI_TOOL_CALL_ID_ATTRIBUTE]);
                        span.setAttribute('gen_ai.tool.name', attributes[ai_sdk_attributes.AI_TOOL_CALL_NAME_ATTRIBUTE]);
                        span.updateName(`execute_tool ${attributes[ai_sdk_attributes.AI_TOOL_CALL_NAME_ATTRIBUTE]}`);
                        return;
                    }
                    // The AI and Provider must be defined for generate, stream, and embed spans.
                    // The id of the model
                    const aiModelId = attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE];
                    // the provider of the model
                    const aiModelProvider = attributes[ai_sdk_attributes.AI_MODEL_PROVIDER_ATTRIBUTE];
                    if (typeof aiModelId !== 'string' || typeof aiModelProvider !== 'string' || !aiModelId || !aiModelProvider) {
                        return;
                    }
                    addOriginToSpan.addOriginToSpan(span, 'auto.vercelai.otel');
                    const nameWthoutAi = name.replace('ai.', '');
                    span.setAttribute('ai.pipeline.name', nameWthoutAi);
                    span.updateName(nameWthoutAi);
                    // If a Telemetry name is set and it is a pipeline span, use that as the operation name
                    const functionId = attributes[ai_sdk_attributes.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
                    if (functionId && typeof functionId === 'string' && name.split('.').length - 1 === 1) {
                        span.updateName(`${nameWthoutAi} ${functionId}`);
                        span.setAttribute('ai.pipeline.name', functionId);
                    }
                    if (attributes[ai_sdk_attributes.AI_PROMPT_ATTRIBUTE]) {
                        span.setAttribute('gen_ai.prompt', attributes[ai_sdk_attributes.AI_PROMPT_ATTRIBUTE]);
                    }
                    if (attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE] && !attributes[ai_sdk_attributes.GEN_AI_RESPONSE_MODEL_ATTRIBUTE]) {
                        span.setAttribute(ai_sdk_attributes.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]);
                    }
                    span.setAttribute('ai.streaming', name.includes('stream'));
                    // Generate Spans
                    if (name === 'ai.generateText') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.pipeline.generate_text');
                        return;
                    }
                    if (name === 'ai.generateText.doGenerate') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.generate_text');
                        span.updateName(`generate_text ${attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]}`);
                        return;
                    }
                    if (name === 'ai.streamText') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.pipeline.stream_text');
                        return;
                    }
                    if (name === 'ai.streamText.doStream') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.stream_text');
                        span.updateName(`stream_text ${attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]}`);
                        return;
                    }
                    if (name === 'ai.generateObject') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.pipeline.generate_object');
                        return;
                    }
                    if (name === 'ai.generateObject.doGenerate') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.generate_object');
                        span.updateName(`generate_object ${attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]}`);
                        return;
                    }
                    if (name === 'ai.streamObject') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.pipeline.stream_object');
                        return;
                    }
                    if (name === 'ai.streamObject.doStream') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.stream_object');
                        span.updateName(`stream_object ${attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]}`);
                        return;
                    }
                    if (name === 'ai.embed') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.pipeline.embed');
                        return;
                    }
                    if (name === 'ai.embed.doEmbed') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.embed');
                        span.updateName(`embed ${attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]}`);
                        return;
                    }
                    if (name === 'ai.embedMany') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.pipeline.embed_many');
                        return;
                    }
                    if (name === 'ai.embedMany.doEmbed') {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'gen_ai.embed_many');
                        span.updateName(`embed_many ${attributes[ai_sdk_attributes.AI_MODEL_ID_ATTRIBUTE]}`);
                        return;
                    }
                    if (name.startsWith('ai.stream')) {
                        span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, 'ai.run');
                        return;
                    }
                });
                client.addEventProcessor((event)=>{
                    if (event.type === 'transaction' && event.spans?.length) {
                        for (const span of event.spans){
                            const { data: attributes, description: name } = span;
                            if (!name || span.origin !== 'auto.vercelai.otel') {
                                continue;
                            }
                            if (attributes[ai_sdk_attributes.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] != undefined) {
                                attributes[ai_sdk_attributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = attributes[ai_sdk_attributes.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE];
                                delete attributes[ai_sdk_attributes.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE];
                            }
                            if (attributes[ai_sdk_attributes.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE] != undefined) {
                                attributes[ai_sdk_attributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = attributes[ai_sdk_attributes.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE];
                                delete attributes[ai_sdk_attributes.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE];
                            }
                            if (typeof attributes[ai_sdk_attributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] === 'number' && typeof attributes[ai_sdk_attributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === 'number') {
                                attributes['gen_ai.usage.total_tokens'] = attributes[ai_sdk_attributes.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] + attributes[ai_sdk_attributes.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
                            }
                        }
                    }
                    return event;
                });
            });
        }
    };
};
/**
 * Adds Sentry tracing instrumentation for the [ai](https://www.npmjs.com/package/ai) library.
 *
 * For more information, see the [`ai` documentation](https://sdk.vercel.ai/docs/ai-sdk-core/telemetry).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.vercelAIIntegration()],
 * });
 * ```
 *
 * By default this integration adds tracing support to all `ai` function calls. If you need to disable
 * collecting spans for a specific call, you can do so by setting `experimental_telemetry.isEnabled` to
 * `false` in the first argument of the function call.
 *
 * ```javascript
 * const result = await generateText({
 *   model: openai('gpt-4-turbo'),
 *   experimental_telemetry: { isEnabled: false },
 * });
 * ```
 *
 * If you want to collect inputs and outputs for a specific call, you must specifically opt-in to each
 * function call by setting `experimental_telemetry.recordInputs` and `experimental_telemetry.recordOutputs`
 * to `true`.
 *
 * ```javascript
 * const result = await generateText({
 *  model: openai('gpt-4-turbo'),
 *  experimental_telemetry: { isEnabled: true, recordInputs: true, recordOutputs: true },
 * });
 */ const vercelAIIntegration = core.defineIntegration(_vercelAIIntegration);
exports.instrumentVercelAi = instrumentVercelAi;
exports.vercelAIIntegration = vercelAIIntegration; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/childProcess.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'ChildProcess';
/**
 * Capture breadcrumbs and events for child processes and worker threads.
 */ const childProcessIntegration = core.defineIntegration((options = {})=>{
    return {
        name: INTEGRATION_NAME,
        setup () {
            diagnosticsChannel.channel('child_process').subscribe((event)=>{
                if (event && typeof event === 'object' && 'process' in event) {
                    captureChildProcessEvents(event.process, options);
                }
            });
            diagnosticsChannel.channel('worker_threads').subscribe((event)=>{
                if (event && typeof event === 'object' && 'worker' in event) {
                    captureWorkerThreadEvents(event.worker, options);
                }
            });
        }
    };
});
function captureChildProcessEvents(child, options) {
    let hasExited = false;
    let data;
    child.on('spawn', ()=>{
        // This is Sentry getting macOS OS context
        if (child.spawnfile === '/usr/bin/sw_vers') {
            hasExited = true;
            return;
        }
        data = {
            spawnfile: child.spawnfile
        };
        if (options.includeChildProcessArgs) {
            data.spawnargs = child.spawnargs;
        }
    }).on('exit', (code)=>{
        if (!hasExited) {
            hasExited = true;
            // Only log for non-zero exit codes
            if (code !== null && code !== 0) {
                core.addBreadcrumb({
                    category: 'child_process',
                    message: `Child process exited with code '${code}'`,
                    level: code === 0 ? 'info' : 'warning',
                    data
                });
            }
        }
    }).on('error', (error)=>{
        if (!hasExited) {
            hasExited = true;
            core.addBreadcrumb({
                category: 'child_process',
                message: `Child process errored with '${error.message}'`,
                level: 'error',
                data
            });
        }
    });
}
function captureWorkerThreadEvents(worker, options) {
    let threadId;
    worker.on('online', ()=>{
        threadId = worker.threadId;
    }).on('error', (error)=>{
        if (options.captureWorkerErrors !== false) {
            core.captureException(error, {
                mechanism: {
                    type: 'instrument',
                    handled: false,
                    data: {
                        threadId: String(threadId)
                    }
                }
            });
        } else {
            core.addBreadcrumb({
                category: 'worker_thread',
                message: `Worker thread errored with '${error.message}'`,
                level: 'error',
                data: {
                    threadId
                }
            });
        }
    });
}
exports.childProcessIntegration = childProcessIntegration; //# sourceMappingURL=childProcess.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/winston.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const capture = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/logs/capture.js [app-ssr] (ecmascript)");
const DEFAULT_CAPTURED_LEVELS = [
    'trace',
    'debug',
    'info',
    'warn',
    'error',
    'fatal'
];
// See: https://github.com/winstonjs/triple-beam
const LEVEL_SYMBOL = Symbol.for('level');
const MESSAGE_SYMBOL = Symbol.for('message');
const SPLAT_SYMBOL = Symbol.for('splat');
/**
 * Options for the Sentry Winston transport.
 */ /**
 * Creates a new Sentry Winston transport that fowards logs to Sentry. Requires `_experiments.enableLogs` to be enabled.
 *
 * Supports Winston 3.x.x.
 *
 * @param TransportClass - The Winston transport class to extend.
 * @returns The extended transport class.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 *
 * @example
 * ```ts
 * const winston = require('winston');
 * const Transport = require('winston-transport');
 *
 * const SentryWinstonTransport = Sentry.createSentryWinstonTransport(Transport);
 *
 * const logger = winston.createLogger({
 *   transports: [new SentryWinstonTransport()],
 * });
 * ```
 */ function createSentryWinstonTransport(// eslint-disable-next-line @typescript-eslint/no-explicit-any
TransportClass, sentryWinstonOptions) {
    // @ts-ignore - We know this is safe because SentryWinstonTransport extends TransportClass
    class SentryWinstonTransport extends TransportClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(options){
            super(options);
            this._levels = new Set(sentryWinstonOptions?.levels ?? DEFAULT_CAPTURED_LEVELS);
        }
        /**
     * Forwards a winston log to the Sentry SDK.
     */ log(info, callback) {
            try {
                setImmediate(()=>{
                    // @ts-ignore - We know this is safe because SentryWinstonTransport extends TransportClass
                    this.emit('logged', info);
                });
                if (!isObject(info)) {
                    return;
                }
                const levelFromSymbol = info[LEVEL_SYMBOL];
                // See: https://github.com/winstonjs/winston?tab=readme-ov-file#streams-objectmode-and-info-objects
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { level, message, timestamp, ...attributes } = info;
                // Remove all symbols from the remaining attributes
                attributes[LEVEL_SYMBOL] = undefined;
                attributes[MESSAGE_SYMBOL] = undefined;
                attributes[SPLAT_SYMBOL] = undefined;
                const logSeverityLevel = WINSTON_LEVEL_TO_LOG_SEVERITY_LEVEL_MAP[levelFromSymbol] ?? 'info';
                if (this._levels.has(logSeverityLevel)) {
                    capture.captureLog(logSeverityLevel, message, {
                        ...attributes,
                        'sentry.origin': 'auto.logging.winston'
                    });
                }
            } catch  {
            // do nothing
            }
            if (callback) {
                callback();
            }
        }
    }
    return SentryWinstonTransport;
}
function isObject(anything) {
    return typeof anything === 'object' && anything != null;
}
// npm
// {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }
//
// syslog
// {
//   emerg: 0,
//   alert: 1,
//   crit: 2,
//   error: 3,
//   warning: 4,
//   notice: 5,
//   info: 6,
//   debug: 7,
// }
const WINSTON_LEVEL_TO_LOG_SEVERITY_LEVEL_MAP = {
    // npm
    silly: 'trace',
    // npm and syslog
    debug: 'debug',
    // npm
    verbose: 'debug',
    // npm
    http: 'debug',
    // npm and syslog
    info: 'info',
    // syslog
    notice: 'info',
    // npm
    warn: 'warn',
    // syslog
    warning: 'warn',
    // npm and syslog
    error: 'error',
    // syslog
    emerg: 'fatal',
    // syslog
    alert: 'fatal',
    // syslog
    crit: 'fatal'
};
exports.createSentryWinstonTransport = createSentryWinstonTransport; //# sourceMappingURL=winston.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/contextManager.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const contextAsyncHooks = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
/**
 * This is a custom ContextManager for OpenTelemetry, which extends the default AsyncLocalStorageContextManager.
 * It ensures that we create a new hub per context, so that the OTEL Context & the Sentry Scopes are always in sync.
 *
 * Note that we currently only support AsyncHooks with this,
 * but since this should work for Node 14+ anyhow that should be good enough.
 */ const SentryContextManager = opentelemetry.wrapContextManagerClass(contextAsyncHooks.AsyncLocalStorageContextManager);
exports.SentryContextManager = SentryContextManager; //# sourceMappingURL=contextManager.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/processSession.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const INTEGRATION_NAME = 'ProcessSession';
/**
 * Records a Session for the current process to track release health.
 */ const processSessionIntegration = core.defineIntegration(()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            core.startSession();
            // Emitted in the case of healthy sessions, error of `mechanism.handled: true` and unhandledrejections because
            // The 'beforeExit' event is not emitted for conditions causing explicit termination,
            // such as calling process.exit() or uncaught exceptions.
            // Ref: https://nodejs.org/api/process.html#process_event_beforeexit
            process.on('beforeExit', ()=>{
                const session = core.getIsolationScope().getSession();
                // Only call endSession, if the Session exists on Scope and SessionStatus is not a
                // Terminal Status i.e. Exited or Crashed because
                // "When a session is moved away from ok it must not be updated anymore."
                // Ref: https://develop.sentry.dev/sdk/sessions/
                if (session?.status !== 'ok') {
                    core.endSession();
                }
            });
        }
    };
});
exports.processSessionIntegration = processSessionIntegration; //# sourceMappingURL=processSession.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const index = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/http/index.js [app-ssr] (ecmascript)");
const amqplib = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/amqplib.js [app-ssr] (ecmascript)");
const connect = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/connect.js [app-ssr] (ecmascript)");
const express = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express.js [app-ssr] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/index.js [app-ssr] (ecmascript)");
const genericPool = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/genericPool.js [app-ssr] (ecmascript)");
const graphql = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/graphql.js [app-ssr] (ecmascript)");
const index$2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/hapi/index.js [app-ssr] (ecmascript)");
const kafka = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/kafka.js [app-ssr] (ecmascript)");
const koa = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/koa.js [app-ssr] (ecmascript)");
const lrumemoizer = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/lrumemoizer.js [app-ssr] (ecmascript)");
const mongo = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mongo.js [app-ssr] (ecmascript)");
const mongoose = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mongoose.js [app-ssr] (ecmascript)");
const mysql = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mysql.js [app-ssr] (ecmascript)");
const mysql2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mysql2.js [app-ssr] (ecmascript)");
const postgres = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/postgres.js [app-ssr] (ecmascript)");
const prisma = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/prisma.js [app-ssr] (ecmascript)");
const redis = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/redis.js [app-ssr] (ecmascript)");
const tedious = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/tedious.js [app-ssr] (ecmascript)");
const index$3 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/index.js [app-ssr] (ecmascript)");
/**
 * With OTEL, all performance integrations will be added, as OTEL only initializes them when the patched package is actually required.
 */ function getAutoPerformanceIntegrations() {
    return [
        express.expressIntegration(),
        index$1.fastifyIntegration(),
        graphql.graphqlIntegration(),
        mongo.mongoIntegration(),
        mongoose.mongooseIntegration(),
        mysql.mysqlIntegration(),
        mysql2.mysql2Integration(),
        redis.redisIntegration(),
        postgres.postgresIntegration(),
        prisma.prismaIntegration(),
        index$2.hapiIntegration(),
        koa.koaIntegration(),
        connect.connectIntegration(),
        tedious.tediousIntegration(),
        genericPool.genericPoolIntegration(),
        kafka.kafkaIntegration(),
        amqplib.amqplibIntegration(),
        lrumemoizer.lruMemoizerIntegration(),
        index$3.vercelAIIntegration()
    ];
}
/**
 * Get a list of methods to instrument OTEL, when preload instrumentation.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function getOpenTelemetryInstrumentationToPreload() {
    return [
        index.instrumentOtelHttp,
        express.instrumentExpress,
        express.instrumentExpressV5,
        connect.instrumentConnect,
        index$1.instrumentFastify,
        index$1.instrumentFastifyV3,
        index$2.instrumentHapi,
        kafka.instrumentKafka,
        koa.instrumentKoa,
        lrumemoizer.instrumentLruMemoizer,
        mongo.instrumentMongo,
        mongoose.instrumentMongoose,
        mysql.instrumentMysql,
        mysql2.instrumentMysql2,
        postgres.instrumentPostgres,
        index$2.instrumentHapi,
        graphql.instrumentGraphql,
        redis.instrumentRedis,
        tedious.instrumentTedious,
        genericPool.instrumentGenericPool,
        amqplib.instrumentAmqplib,
        index$3.instrumentVercelAi
    ];
}
exports.getAutoPerformanceIntegrations = getAutoPerformanceIntegrations;
exports.getOpenTelemetryInstrumentationToPreload = getOpenTelemetryInstrumentationToPreload; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/proxy/base.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const http = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
__turbopack_context__.r("[externals]/node:https [external] (node:https, cjs)");
/**
 * This code was originally forked from https://github.com/TooTallNate/proxy-agents/tree/b133295fd16f6475578b6b15bd9b4e33ecb0d0b7
 * With the following LICENSE:
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net>*
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:*
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.*
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ const INTERNAL = Symbol('AgentBaseInternalState');
class Agent extends http.Agent {
    // Set by `http.Agent` - missing from `@types/node`
    constructor(opts){
        super(opts);
        this[INTERNAL] = {};
    }
    /**
   * Determine whether this is an `http` or `https` request.
   */ isSecureEndpoint(options) {
        if (options) {
            // First check the `secureEndpoint` property explicitly, since this
            // means that a parent `Agent` is "passing through" to this instance.
            if (typeof options.secureEndpoint === 'boolean') {
                return options.secureEndpoint;
            }
            // If no explicit `secure` endpoint, check if `protocol` property is
            // set. This will usually be the case since using a full string URL
            // or `URL` instance should be the most common usage.
            if (typeof options.protocol === 'string') {
                return options.protocol === 'https:';
            }
        }
        // Finally, if no `protocol` property was set, then fall back to
        // checking the stack trace of the current call stack, and try to
        // detect the "https" module.
        const { stack } = new Error();
        if (typeof stack !== 'string') return false;
        return stack.split('\n').some((l)=>l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
    }
    createSocket(req, options, cb) {
        const connectOpts = {
            ...options,
            secureEndpoint: this.isSecureEndpoint(options)
        };
        Promise.resolve().then(()=>this.connect(req, connectOpts)).then((socket)=>{
            if (socket instanceof http.Agent) {
                // @ts-expect-error `addRequest()` isn't defined in `@types/node`
                return socket.addRequest(req, connectOpts);
            }
            this[INTERNAL].currentSocket = socket;
            // @ts-expect-error `createSocket()` isn't defined in `@types/node`
            super.createSocket(req, options, cb);
        }, cb);
    }
    createConnection() {
        const socket = this[INTERNAL].currentSocket;
        this[INTERNAL].currentSocket = undefined;
        if (!socket) {
            throw new Error('No socket was returned in the `connect()` function');
        }
        return socket;
    }
    get defaultPort() {
        return this[INTERNAL].defaultPort ?? (this.protocol === 'https:' ? 443 : 80);
    }
    set defaultPort(v) {
        if (this[INTERNAL]) {
            this[INTERNAL].defaultPort = v;
        }
    }
    get protocol() {
        return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? 'https:' : 'http:');
    }
    set protocol(v) {
        if (this[INTERNAL]) {
            this[INTERNAL].protocol = v;
        }
    }
}
exports.Agent = Agent; //# sourceMappingURL=base.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/proxy/parse-proxy-response.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
function debug(...args) {
    core.logger.log('[https-proxy-agent:parse-proxy-response]', ...args);
}
function parseProxyResponse(socket) {
    return new Promise((resolve, reject)=>{
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b) ondata(b);
            else socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('readable', read);
        }
        function onend() {
            cleanup();
            debug('onend');
            reject(new Error('Proxy connection ended before receiving CONNECT response'));
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = Buffer.concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const headerParts = buffered.subarray(0, endOfHeaders).toString('ascii').split('\r\n');
            const firstLine = headerParts.shift();
            if (!firstLine) {
                socket.destroy();
                return reject(new Error('No header received from proxy CONNECT response'));
            }
            const firstLineParts = firstLine.split(' ');
            const statusCode = +(firstLineParts[1] || 0);
            const statusText = firstLineParts.slice(2).join(' ');
            const headers = {};
            for (const header of headerParts){
                if (!header) continue;
                const firstColon = header.indexOf(':');
                if (firstColon === -1) {
                    socket.destroy();
                    return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
                }
                const key = header.slice(0, firstColon).toLowerCase();
                const value = header.slice(firstColon + 1).trimStart();
                const current = headers[key];
                if (typeof current === 'string') {
                    headers[key] = [
                        current,
                        value
                    ];
                } else if (Array.isArray(current)) {
                    current.push(value);
                } else {
                    headers[key] = value;
                }
            }
            debug('got proxy server response: %o %o', firstLine, headers);
            cleanup();
            resolve({
                connect: {
                    statusCode,
                    statusText,
                    headers
                },
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('end', onend);
        read();
    });
}
exports.parseProxyResponse = parseProxyResponse; //# sourceMappingURL=parse-proxy-response.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/proxy/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const net = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const tls = __turbopack_context__.r("[externals]/node:tls [external] (node:tls, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const base = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/proxy/base.js [app-ssr] (ecmascript)");
const parseProxyResponse = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/proxy/parse-proxy-response.js [app-ssr] (ecmascript)");
function debug(...args) {
    core.logger.log('[https-proxy-agent]', ...args);
}
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 */ class HttpsProxyAgent extends base.Agent {
    static __initStatic() {
        this.protocols = [
            'http',
            'https'
        ];
    }
    constructor(proxy, opts){
        super(opts);
        this.options = {};
        this.proxy = typeof proxy === 'string' ? new URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        debug('Creating new HttpsProxyAgent instance: %o', this.proxy.href);
        // Trim off the brackets from IPv6 addresses
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === 'https:' ? 443 : 80;
        this.connectOpts = {
            // Attempt to negotiate http/1.1 for proxy servers that support http/2
            ALPNProtocols: [
                'http/1.1'
            ],
            ...opts ? omit(opts, 'headers') : null,
            host,
            port
        };
    }
    /**
   * Called when the node-core HTTP client library is creating a
   * new HTTP request.
   */ async connect(req, opts) {
        const { proxy } = this;
        if (!opts.host) {
            throw new TypeError('No "host" provided');
        }
        // Create a socket connection to the proxy server.
        let socket;
        if (proxy.protocol === 'https:') {
            debug('Creating `tls.Socket`: %o', this.connectOpts);
            const servername = this.connectOpts.servername || this.connectOpts.host;
            socket = tls.connect({
                ...this.connectOpts,
                servername: servername && net.isIP(servername) ? undefined : servername
            });
        } else {
            debug('Creating `net.Socket`: %o', this.connectOpts);
            socket = net.connect(this.connectOpts);
        }
        const headers = typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : {
            ...this.proxyHeaders
        };
        const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r\n`;
        // Inject the `Proxy-Authorization` header if necessary.
        if (proxy.username || proxy.password) {
            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
            headers['Proxy-Authorization'] = `Basic ${Buffer.from(auth).toString('base64')}`;
        }
        headers.Host = `${host}:${opts.port}`;
        if (!headers['Proxy-Connection']) {
            headers['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
        }
        for (const name of Object.keys(headers)){
            payload += `${name}: ${headers[name]}\r\n`;
        }
        const proxyResponsePromise = parseProxyResponse.parseProxyResponse(socket);
        socket.write(`${payload}\r\n`);
        const { connect, buffered } = await proxyResponsePromise;
        req.emit('proxyConnect', connect);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore Not EventEmitter in Node types
        this.emit('proxyConnect', connect, req);
        if (connect.statusCode === 200) {
            req.once('socket', resume);
            if (opts.secureEndpoint) {
                // The proxy is connecting to a TLS server, so upgrade
                // this socket connection to a TLS connection.
                debug('Upgrading socket connection to TLS');
                const servername = opts.servername || opts.host;
                return tls.connect({
                    ...omit(opts, 'host', 'path', 'port'),
                    socket,
                    servername: net.isIP(servername) ? undefined : servername
                });
            }
            return socket;
        }
        // Some other status code that's not 200... need to re-play the HTTP
        // header "data" events onto the socket once the HTTP machinery is
        // attached so that the node core `http` can parse and handle the
        // error status code.
        // Close the original socket, and a new "fake" socket is returned
        // instead, so that the proxy doesn't get the HTTP request
        // written to it (which may contain `Authorization` headers or other
        // sensitive data).
        //
        // See: https://hackerone.com/reports/541502
        socket.destroy();
        const fakeSocket = new net.Socket({
            writable: false
        });
        fakeSocket.readable = true;
        // Need to wait for the "socket" event to re-play the "data" events.
        req.once('socket', (s)=>{
            debug('Replaying proxy buffer for failed request');
            // Replay the "buffered" Buffer onto the fake `socket`, since at
            // this point the HTTP module machinery has been hooked up for
            // the user.
            s.push(buffered);
            s.push(null);
        });
        return fakeSocket;
    }
}
HttpsProxyAgent.__initStatic();
function resume(socket) {
    socket.resume();
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj){
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}
exports.HttpsProxyAgent = HttpsProxyAgent; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/transports/http.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const http = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const https = __turbopack_context__.r("[externals]/node:https [external] (node:https, cjs)");
const node_stream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const node_zlib = __turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/proxy/index.js [app-ssr] (ecmascript)");
// Estimated maximum size for reasonable standalone event
const GZIP_THRESHOLD = 1024 * 32;
/**
 * Gets a stream from a Uint8Array or string
 * Readable.from is ideal but was added in node.js v12.3.0 and v10.17.0
 */ function streamFromBody(body) {
    return new node_stream.Readable({
        read () {
            this.push(body);
            this.push(null);
        }
    });
}
/**
 * Creates a Transport that uses native the native 'http' and 'https' modules to send events to Sentry.
 */ function makeNodeTransport(options) {
    let urlSegments;
    try {
        urlSegments = new URL(options.url);
    } catch (e) {
        core.consoleSandbox(()=>{
            // eslint-disable-next-line no-console
            console.warn('[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.');
        });
        return core.createTransport(options, ()=>Promise.resolve({}));
    }
    const isHttps = urlSegments.protocol === 'https:';
    // Proxy prioritization: http => `options.proxy` | `process.env.http_proxy`
    // Proxy prioritization: https => `options.proxy` | `process.env.https_proxy` | `process.env.http_proxy`
    const proxy = applyNoProxyOption(urlSegments, options.proxy || (isHttps ? process.env.https_proxy : undefined) || process.env.http_proxy);
    const nativeHttpModule = isHttps ? https : http;
    const keepAlive = options.keepAlive === undefined ? false : options.keepAlive;
    // TODO(v10): Evaluate if we can set keepAlive to true. This would involve testing for memory leaks in older node
    // versions(>= 8) as they had memory leaks when using it: #2555
    const agent = proxy ? new index.HttpsProxyAgent(proxy) : new nativeHttpModule.Agent({
        keepAlive,
        maxSockets: 30,
        timeout: 2000
    });
    const requestExecutor = createRequestExecutor(options, options.httpModule ?? nativeHttpModule, agent);
    return core.createTransport(options, requestExecutor);
}
/**
 * Honors the `no_proxy` env variable with the highest priority to allow for hosts exclusion.
 *
 * @param transportUrl The URL the transport intends to send events to.
 * @param proxy The client configured proxy.
 * @returns A proxy the transport should use.
 */ function applyNoProxyOption(transportUrlSegments, proxy) {
    const { no_proxy } = process.env;
    const urlIsExemptFromProxy = no_proxy?.split(',').some((exemption)=>transportUrlSegments.host.endsWith(exemption) || transportUrlSegments.hostname.endsWith(exemption));
    if (urlIsExemptFromProxy) {
        return undefined;
    } else {
        return proxy;
    }
}
/**
 * Creates a RequestExecutor to be used with `createTransport`.
 */ function createRequestExecutor(options, httpModule, agent) {
    const { hostname, pathname, port, protocol, search } = new URL(options.url);
    return function makeRequest(request) {
        return new Promise((resolve, reject)=>{
            // This ensures we do not generate any spans in OpenTelemetry for the transport
            core.suppressTracing(()=>{
                let body = streamFromBody(request.body);
                const headers = {
                    ...options.headers
                };
                if (request.body.length > GZIP_THRESHOLD) {
                    headers['content-encoding'] = 'gzip';
                    body = body.pipe(node_zlib.createGzip());
                }
                const req = httpModule.request({
                    method: 'POST',
                    agent,
                    headers,
                    hostname,
                    path: `${pathname}${search}`,
                    port,
                    protocol,
                    ca: options.caCerts
                }, (res)=>{
                    res.on('data', ()=>{
                    // Drain socket
                    });
                    res.on('end', ()=>{
                    // Drain socket
                    });
                    res.setEncoding('utf8');
                    // "Key-value pairs of header names and values. Header names are lower-cased."
                    // https://nodejs.org/api/http.html#http_message_headers
                    const retryAfterHeader = res.headers['retry-after'] ?? null;
                    const rateLimitsHeader = res.headers['x-sentry-rate-limits'] ?? null;
                    resolve({
                        statusCode: res.statusCode,
                        headers: {
                            'retry-after': retryAfterHeader,
                            'x-sentry-rate-limits': Array.isArray(rateLimitsHeader) ? rateLimitsHeader[0] || null : rateLimitsHeader
                        }
                    });
                });
                req.on('error', reject);
                body.pipe(req);
            });
        });
    };
}
exports.makeNodeTransport = makeNodeTransport; //# sourceMappingURL=http.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/envToBool.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const FALSY_ENV_VALUES = new Set([
    'false',
    'f',
    'n',
    'no',
    'off',
    '0'
]);
const TRUTHY_ENV_VALUES = new Set([
    'true',
    't',
    'y',
    'yes',
    'on',
    '1'
]);
/**
 * A helper function which casts an ENV variable value to `true` or `false` using the constants defined above.
 * In strict mode, it may return `null` if the value doesn't match any of the predefined values.
 *
 * @param value The value of the env variable
 * @param options -- Only has `strict` key for now, which requires a strict match for `true` in TRUTHY_ENV_VALUES
 * @returns true/false if the lowercase value matches the predefined values above. If not, null in strict mode,
 *          and Boolean(value) in loose mode.
 */ function envToBool(value, options) {
    const normalized = String(value).toLowerCase();
    if (FALSY_ENV_VALUES.has(normalized)) {
        return false;
    }
    if (TRUTHY_ENV_VALUES.has(normalized)) {
        return true;
    }
    return options?.strict ? null : Boolean(value);
}
exports.FALSY_ENV_VALUES = FALSY_ENV_VALUES;
exports.TRUTHY_ENV_VALUES = TRUTHY_ENV_VALUES;
exports.envToBool = envToBool; //# sourceMappingURL=envToBool.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/module.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const node_path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
/** normalizes Windows paths */ function normalizeWindowsPath(path) {
    return path.replace(/^[A-Z]:/, '') // remove Windows-style prefix
    .replace(/\\/g, '/'); // replace all `\` instances with `/`
}
/** Creates a function that gets the module name from a filename */ function createGetModuleFromFilename(basePath = process.argv[1] ? core.dirname(process.argv[1]) : process.cwd(), isWindows = node_path.sep === '\\') {
    const normalizedBase = isWindows ? normalizeWindowsPath(basePath) : basePath;
    return (filename)=>{
        if (!filename) {
            return;
        }
        const normalizedFilename = isWindows ? normalizeWindowsPath(filename) : filename;
        // eslint-disable-next-line prefer-const
        let { dir, base: file, ext } = node_path.posix.parse(normalizedFilename);
        if (ext === '.js' || ext === '.mjs' || ext === '.cjs') {
            file = file.slice(0, ext.length * -1);
        }
        // The file name might be URI-encoded which we want to decode to
        // the original file name.
        const decodedFile = decodeURIComponent(file);
        if (!dir) {
            // No dirname whatsoever
            dir = '.';
        }
        const n = dir.lastIndexOf('/node_modules');
        if (n > -1) {
            return `${dir.slice(n + 14).replace(/\//g, '.')}:${decodedFile}`;
        }
        // Let's see if it's a part of the main module
        // To be a part of main module, it has to share the same base
        if (dir.startsWith(normalizedBase)) {
            const moduleName = dir.slice(normalizedBase.length + 1).replace(/\//g, '.');
            return moduleName ? `${moduleName}:${decodedFile}` : decodedFile;
        }
        return decodedFile;
    };
}
exports.createGetModuleFromFilename = createGetModuleFromFilename; //# sourceMappingURL=module.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/api.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const module$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/module.js [app-ssr] (ecmascript)");
/**
 * Returns a release dynamically from environment variables.
 */ // eslint-disable-next-line complexity
function getSentryRelease(fallback) {
    // Always read first as Sentry takes this as precedence
    if (process.env.SENTRY_RELEASE) {
        return process.env.SENTRY_RELEASE;
    }
    // This supports the variable that sentry-webpack-plugin injects
    if (core.GLOBAL_OBJ.SENTRY_RELEASE?.id) {
        return core.GLOBAL_OBJ.SENTRY_RELEASE.id;
    }
    // This list is in approximate alpha order, separated into 3 categories:
    // 1. Git providers
    // 2. CI providers with specific environment variables (has the provider name in the variable name)
    // 3. CI providers with generic environment variables (checked for last to prevent possible false positives)
    const possibleReleaseNameOfGitProvider = // GitHub Actions - https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables
    process.env['GITHUB_SHA'] || // GitLab CI - https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
    process.env['CI_MERGE_REQUEST_SOURCE_BRANCH_SHA'] || process.env['CI_BUILD_REF'] || process.env['CI_COMMIT_SHA'] || // Bitbucket - https://support.atlassian.com/bitbucket-cloud/docs/variables-and-secrets/
    process.env['BITBUCKET_COMMIT'];
    const possibleReleaseNameOfCiProvidersWithSpecificEnvVar = // AppVeyor - https://www.appveyor.com/docs/environment-variables/
    process.env['APPVEYOR_PULL_REQUEST_HEAD_COMMIT'] || process.env['APPVEYOR_REPO_COMMIT'] || // AWS CodeBuild - https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-env-vars.html
    process.env['CODEBUILD_RESOLVED_SOURCE_VERSION'] || // AWS Amplify - https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html
    process.env['AWS_COMMIT_ID'] || // Azure Pipelines - https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml
    process.env['BUILD_SOURCEVERSION'] || // Bitrise - https://devcenter.bitrise.io/builds/available-environment-variables/
    process.env['GIT_CLONE_COMMIT_HASH'] || // Buddy CI - https://buddy.works/docs/pipelines/environment-variables#default-environment-variables
    process.env['BUDDY_EXECUTION_REVISION'] || // Builtkite - https://buildkite.com/docs/pipelines/environment-variables
    process.env['BUILDKITE_COMMIT'] || // CircleCI - https://circleci.com/docs/variables/
    process.env['CIRCLE_SHA1'] || // Cirrus CI - https://cirrus-ci.org/guide/writing-tasks/#environment-variables
    process.env['CIRRUS_CHANGE_IN_REPO'] || // Codefresh - https://codefresh.io/docs/docs/codefresh-yaml/variables/
    process.env['CF_REVISION'] || // Codemagic - https://docs.codemagic.io/yaml-basic-configuration/environment-variables/
    process.env['CM_COMMIT'] || // Cloudflare Pages - https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
    process.env['CF_PAGES_COMMIT_SHA'] || // Drone - https://docs.drone.io/pipeline/environment/reference/
    process.env['DRONE_COMMIT_SHA'] || // Flightcontrol - https://www.flightcontrol.dev/docs/guides/flightcontrol/environment-variables#built-in-environment-variables
    process.env['FC_GIT_COMMIT_SHA'] || // Heroku #1 https://devcenter.heroku.com/articles/heroku-ci
    process.env['HEROKU_TEST_RUN_COMMIT_VERSION'] || // Heroku #2 https://docs.sentry.io/product/integrations/deployment/heroku/#configure-releases
    process.env['HEROKU_SLUG_COMMIT'] || // Railway - https://docs.railway.app/reference/variables#git-variables
    process.env['RAILWAY_GIT_COMMIT_SHA'] || // Render - https://render.com/docs/environment-variables
    process.env['RENDER_GIT_COMMIT'] || // Semaphore CI - https://docs.semaphoreci.com/ci-cd-environment/environment-variables
    process.env['SEMAPHORE_GIT_SHA'] || // TravisCI - https://docs.travis-ci.com/user/environment-variables/#default-environment-variables
    process.env['TRAVIS_PULL_REQUEST_SHA'] || // Vercel - https://vercel.com/docs/v2/build-step#system-environment-variables
    process.env['VERCEL_GIT_COMMIT_SHA'] || process.env['VERCEL_GITHUB_COMMIT_SHA'] || process.env['VERCEL_GITLAB_COMMIT_SHA'] || process.env['VERCEL_BITBUCKET_COMMIT_SHA'] || // Zeit (now known as Vercel)
    process.env['ZEIT_GITHUB_COMMIT_SHA'] || process.env['ZEIT_GITLAB_COMMIT_SHA'] || process.env['ZEIT_BITBUCKET_COMMIT_SHA'];
    const possibleReleaseNameOfCiProvidersWithGenericEnvVar = // CloudBees CodeShip - https://docs.cloudbees.com/docs/cloudbees-codeship/latest/pro-builds-and-configuration/environment-variables
    process.env['CI_COMMIT_ID'] || // Coolify - https://coolify.io/docs/knowledge-base/environment-variables
    process.env['SOURCE_COMMIT'] || // Heroku #3 https://devcenter.heroku.com/changelog-items/630
    process.env['SOURCE_VERSION'] || // Jenkins - https://plugins.jenkins.io/git/#environment-variables
    process.env['GIT_COMMIT'] || // Netlify - https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    process.env['COMMIT_REF'] || // TeamCity - https://www.jetbrains.com/help/teamcity/predefined-build-parameters.html
    process.env['BUILD_VCS_NUMBER'] || // Woodpecker CI - https://woodpecker-ci.org/docs/usage/environment
    process.env['CI_COMMIT_SHA'];
    return possibleReleaseNameOfGitProvider || possibleReleaseNameOfCiProvidersWithSpecificEnvVar || possibleReleaseNameOfCiProvidersWithGenericEnvVar || fallback;
}
/** Node.js stack parser */ const defaultStackParser = core.createStackParser(core.nodeStackLineParser(module$1.createGetModuleFromFilename()));
exports.defaultStackParser = defaultStackParser;
exports.getSentryRelease = getSentryRelease; //# sourceMappingURL=api.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/client.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/instrumentation/build/esm/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const worker_threads = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS = 60000; // 60s was chosen arbitrarily
/** A client for using Sentry with Node & OpenTelemetry. */ class NodeClient extends core.ServerRuntimeClient {
    constructor(options){
        const serverName = options.includeServerName === false ? undefined : options.serverName || global.process.env.SENTRY_NAME || os.hostname();
        const clientOptions = {
            ...options,
            platform: 'node',
            runtime: {
                name: 'node',
                version: global.process.version
            },
            serverName
        };
        if (options.openTelemetryInstrumentations) {
            instrumentation.registerInstrumentations({
                instrumentations: options.openTelemetryInstrumentations
            });
        }
        core.applySdkMetadata(clientOptions, 'node');
        core.logger.log(`Initializing Sentry: process: ${process.pid}, thread: ${worker_threads.isMainThread ? 'main' : `worker-${worker_threads.threadId}`}.`);
        super(clientOptions);
        if (this.getOptions()._experiments?.enableLogs) {
            this._logOnExitFlushListener = ()=>{
                core._INTERNAL_flushLogsBuffer(this);
            };
            if (serverName) {
                this.on('beforeCaptureLog', (log)=>{
                    log.attributes = {
                        ...log.attributes,
                        'server.address': serverName
                    };
                });
            }
            process.on('beforeExit', this._logOnExitFlushListener);
        }
    }
    /** Get the OTEL tracer. */ get tracer() {
        if (this._tracer) {
            return this._tracer;
        }
        const name = '@sentry/node';
        const version = core.SDK_VERSION;
        const tracer = api.trace.getTracer(name, version);
        this._tracer = tracer;
        return tracer;
    }
    // Eslint ignore explanation: This is already documented in super.
    // eslint-disable-next-line jsdoc/require-jsdoc
    async flush(timeout) {
        const provider = this.traceProvider;
        const spanProcessor = provider?.activeSpanProcessor;
        if (spanProcessor) {
            await spanProcessor.forceFlush();
        }
        if (this.getOptions().sendClientReports) {
            this._flushOutcomes();
        }
        return super.flush(timeout);
    }
    // Eslint ignore explanation: This is already documented in super.
    // eslint-disable-next-line jsdoc/require-jsdoc
    close(timeout) {
        if (this._clientReportInterval) {
            clearInterval(this._clientReportInterval);
        }
        if (this._clientReportOnExitFlushListener) {
            process.off('beforeExit', this._clientReportOnExitFlushListener);
        }
        if (this._logOnExitFlushListener) {
            process.off('beforeExit', this._logOnExitFlushListener);
        }
        return super.close(timeout);
    }
    /**
   * Will start tracking client reports for this client.
   *
   * NOTICE: This method will create an interval that is periodically called and attach a `process.on('beforeExit')`
   * hook. To clean up these resources, call `.close()` when you no longer intend to use the client. Not doing so will
   * result in a memory leak.
   */ // The reason client reports need to be manually activated with this method instead of just enabling them in a
    // constructor, is that if users periodically and unboundedly create new clients, we will create more and more
    // intervals and beforeExit listeners, thus leaking memory. In these situations, users are required to call
    // `client.close()` in order to dispose of the acquired resources.
    // We assume that calling this method in Sentry.init() is a sensible default, because calling Sentry.init() over and
    // over again would also result in memory leaks.
    // Note: We have experimented with using `FinalizationRegisty` to clear the interval when the client is garbage
    // collected, but it did not work, because the cleanup function never got called.
    startClientReportTracking() {
        const clientOptions = this.getOptions();
        if (clientOptions.sendClientReports) {
            this._clientReportOnExitFlushListener = ()=>{
                this._flushOutcomes();
            };
            this._clientReportInterval = setInterval(()=>{
                debugBuild.DEBUG_BUILD && core.logger.log('Flushing client reports based on interval.');
                this._flushOutcomes();
            }, clientOptions.clientReportFlushInterval ?? DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS)// Unref is critical for not preventing the process from exiting because the interval is active.
            .unref();
            process.on('beforeExit', this._clientReportOnExitFlushListener);
        }
    }
    /** Custom implementation for OTEL, so we can handle scope-span linking. */ _getTraceInfoFromScope(scope) {
        if (!scope) {
            return [
                undefined,
                undefined
            ];
        }
        return opentelemetry.getTraceContextForScope(this, scope);
    }
}
exports.NodeClient = NodeClient; //# sourceMappingURL=client.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/initOtel.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const resources = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/resources/build/esm/index.js [app-ssr] (ecmascript)");
const sdkTraceBase = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [app-ssr] (ecmascript)");
const semanticConventions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const importInTheMiddle = __turbopack_context__.r("[externals]/import-in-the-middle [external] (import-in-the-middle, cjs)");
const moduleModule = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/index.js [app-ssr] (ecmascript)");
const contextManager = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/contextManager.js [app-ssr] (ecmascript)");
const commonjs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/commonjs.js [app-ssr] (ecmascript)");
var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
// About 277h - this must fit into new Array(len)!
const MAX_MAX_SPAN_WAIT_DURATION = 1000000;
/**
 * Initialize OpenTelemetry for Node.
 */ function initOpenTelemetry(client, options = {}) {
    if (client.getOptions().debug) {
        setupOpenTelemetryLogger();
    }
    const provider = setupOtel(client, options);
    client.traceProvider = provider;
}
/** Initialize the ESM loader. */ function maybeInitializeEsmLoader() {
    const [nodeMajor = 0, nodeMinor = 0] = process.versions.node.split('.').map(Number);
    // Register hook was added in v20.6.0 and v18.19.0
    if (nodeMajor >= 21 || nodeMajor === 20 && nodeMinor >= 6 || nodeMajor === 18 && nodeMinor >= 19) {
        if (!core.GLOBAL_OBJ._sentryEsmLoaderHookRegistered) {
            try {
                const { addHookMessagePort } = importInTheMiddle.createAddHookMessageChannel();
                // @ts-expect-error register is available in these versions
                moduleModule.default.register('import-in-the-middle/hook.mjs', typeof document === 'undefined' ? __turbopack_context__.r("[externals]/url [external] (url, cjs)").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('sdk/initOtel.js', document.baseURI).href, {
                    data: {
                        addHookMessagePort,
                        include: []
                    },
                    transferList: [
                        addHookMessagePort
                    ]
                });
            } catch (error) {
                core.logger.warn('Failed to register ESM hook', error);
            }
        }
    } else {
        core.consoleSandbox(()=>{
            // eslint-disable-next-line no-console
            console.warn(`[Sentry] You are using Node.js v${process.versions.node} in ESM mode ("import syntax"). The Sentry Node.js SDK is not compatible with ESM in Node.js versions before 18.19.0 or before 20.6.0. Please either build your application with CommonJS ("require() syntax"), or upgrade your Node.js version.`);
        });
    }
}
/**
 * Preload OpenTelemetry for Node.
 * This can be used to preload instrumentation early, but set up Sentry later.
 * By preloading the OTEL instrumentation wrapping still happens early enough that everything works.
 */ function preloadOpenTelemetry(options = {}) {
    const { debug } = options;
    if (debug) {
        core.logger.enable();
        setupOpenTelemetryLogger();
    }
    if (!commonjs.isCjs()) {
        maybeInitializeEsmLoader();
    }
    // These are all integrations that we need to pre-load to ensure they are set up before any other code runs
    getPreloadMethods(options.integrations).forEach((fn)=>{
        fn();
        if (debug) {
            core.logger.log(`[Sentry] Preloaded ${fn.id} instrumentation`);
        }
    });
}
function getPreloadMethods(integrationNames) {
    const instruments = index.getOpenTelemetryInstrumentationToPreload();
    if (!integrationNames) {
        return instruments;
    }
    return instruments.filter((instrumentation)=>integrationNames.includes(instrumentation.id));
}
/** Just exported for tests. */ function setupOtel(client, options = {}) {
    // Create and configure NodeTracerProvider
    const provider = new sdkTraceBase.BasicTracerProvider({
        sampler: new opentelemetry.SentrySampler(client),
        resource: new resources.Resource({
            [semanticConventions.ATTR_SERVICE_NAME]: 'node',
            // eslint-disable-next-line deprecation/deprecation
            [semanticConventions.SEMRESATTRS_SERVICE_NAMESPACE]: 'sentry',
            [semanticConventions.ATTR_SERVICE_VERSION]: core.SDK_VERSION
        }),
        forceFlushTimeoutMillis: 500,
        spanProcessors: [
            new opentelemetry.SentrySpanProcessor({
                timeout: _clampSpanProcessorTimeout(client.getOptions().maxSpanWaitDuration)
            }),
            ...options.spanProcessors || []
        ]
    });
    // Register as globals
    api.trace.setGlobalTracerProvider(provider);
    api.propagation.setGlobalPropagator(new opentelemetry.SentryPropagator());
    api.context.setGlobalContextManager(new contextManager.SentryContextManager());
    return provider;
}
/** Just exported for tests. */ function _clampSpanProcessorTimeout(maxSpanWaitDuration) {
    if (maxSpanWaitDuration == null) {
        return undefined;
    }
    // We guard for a max. value here, because we create an array with this length
    // So if this value is too large, this would fail
    if (maxSpanWaitDuration > MAX_MAX_SPAN_WAIT_DURATION) {
        debugBuild.DEBUG_BUILD && core.logger.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${MAX_MAX_SPAN_WAIT_DURATION}`);
        return MAX_MAX_SPAN_WAIT_DURATION;
    } else if (maxSpanWaitDuration <= 0 || Number.isNaN(maxSpanWaitDuration)) {
        debugBuild.DEBUG_BUILD && core.logger.warn('`maxSpanWaitDuration` must be a positive number, using default value instead.');
        return undefined;
    }
    return maxSpanWaitDuration;
}
/**
 * Setup the OTEL logger to use our own logger.
 */ function setupOpenTelemetryLogger() {
    const otelLogger = new Proxy(core.logger, {
        get (target, prop, receiver) {
            const actualProp = prop === 'verbose' ? 'debug' : prop;
            return Reflect.get(target, actualProp, receiver);
        }
    });
    // Disable diag, to ensure this works even if called multiple times
    api.diag.disable();
    api.diag.setLogger(otelLogger, api.DiagLogLevel.DEBUG);
}
exports._clampSpanProcessorTimeout = _clampSpanProcessorTimeout;
exports.initOpenTelemetry = initOpenTelemetry;
exports.maybeInitializeEsmLoader = maybeInitializeEsmLoader;
exports.preloadOpenTelemetry = preloadOpenTelemetry;
exports.setupOtel = setupOtel; //# sourceMappingURL=initOtel.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const debugBuild = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/debug-build.js [app-ssr] (ecmascript)");
const childProcess = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/childProcess.js [app-ssr] (ecmascript)");
const context = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/context.js [app-ssr] (ecmascript)");
const contextlines = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/contextlines.js [app-ssr] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/http/index.js [app-ssr] (ecmascript)");
const index$3 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/index.js [app-ssr] (ecmascript)");
const modules = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/modules.js [app-ssr] (ecmascript)");
const index$2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/node-fetch/index.js [app-ssr] (ecmascript)");
const onuncaughtexception = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/onuncaughtexception.js [app-ssr] (ecmascript)");
const onunhandledrejection = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/onunhandledrejection.js [app-ssr] (ecmascript)");
const processSession = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/processSession.js [app-ssr] (ecmascript)");
const spotlight = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/spotlight.js [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/index.js [app-ssr] (ecmascript)");
const http = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/transports/http.js [app-ssr] (ecmascript)");
const commonjs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/commonjs.js [app-ssr] (ecmascript)");
const envToBool = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/envToBool.js [app-ssr] (ecmascript)");
const api = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/api.js [app-ssr] (ecmascript)");
const client = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/client.js [app-ssr] (ecmascript)");
const initOtel = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/initOtel.js [app-ssr] (ecmascript)");
function getCjsOnlyIntegrations() {
    return commonjs.isCjs() ? [
        modules.modulesIntegration()
    ] : [];
}
/**
 * Get default integrations, excluding performance.
 */ function getDefaultIntegrationsWithoutPerformance() {
    return [
        // Common
        // TODO(v10): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
        // eslint-disable-next-line deprecation/deprecation
        core.inboundFiltersIntegration(),
        core.functionToStringIntegration(),
        core.linkedErrorsIntegration(),
        core.requestDataIntegration(),
        // Native Wrappers
        core.consoleIntegration(),
        index$1.httpIntegration(),
        index$2.nativeNodeFetchIntegration(),
        // Global Handlers
        onuncaughtexception.onUncaughtExceptionIntegration(),
        onunhandledrejection.onUnhandledRejectionIntegration(),
        // Event Info
        contextlines.contextLinesIntegration(),
        index$3.localVariablesIntegration(),
        context.nodeContextIntegration(),
        childProcess.childProcessIntegration(),
        processSession.processSessionIntegration(),
        ...getCjsOnlyIntegrations()
    ];
}
/** Get the default integrations for the Node SDK. */ function getDefaultIntegrations(options) {
    return [
        ...getDefaultIntegrationsWithoutPerformance(),
        // We only add performance integrations if tracing is enabled
        // Note that this means that without tracing enabled, e.g. `expressIntegration()` will not be added
        // This means that generally request isolation will work (because that is done by httpIntegration)
        // But `transactionName` will not be set automatically
        ...core.hasSpansEnabled(options) ? index.getAutoPerformanceIntegrations() : []
    ];
}
/**
 * Initialize Sentry for Node.
 */ function init(options = {}) {
    return _init(options, getDefaultIntegrations);
}
/**
 * Initialize Sentry for Node, without any integrations added by default.
 */ function initWithoutDefaultIntegrations(options = {}) {
    return _init(options, ()=>[]);
}
/**
 * Initialize Sentry for Node, without performance instrumentation.
 */ function _init(_options = {}, getDefaultIntegrationsImpl) {
    const options = getClientOptions(_options, getDefaultIntegrationsImpl);
    if (options.debug === true) {
        if (debugBuild.DEBUG_BUILD) {
            core.logger.enable();
        } else {
            // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
            core.consoleSandbox(()=>{
                // eslint-disable-next-line no-console
                console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
            });
        }
    }
    if (!commonjs.isCjs() && options.registerEsmLoaderHooks !== false) {
        initOtel.maybeInitializeEsmLoader();
    }
    opentelemetry.setOpenTelemetryContextAsyncContextStrategy();
    const scope = core.getCurrentScope();
    scope.update(options.initialScope);
    if (options.spotlight && !options.integrations.some(({ name })=>name === spotlight.INTEGRATION_NAME)) {
        options.integrations.push(spotlight.spotlightIntegration({
            sidecarUrl: typeof options.spotlight === 'string' ? options.spotlight : undefined
        }));
    }
    const client$1 = new client.NodeClient(options);
    // The client is on the current scope, from where it generally is inherited
    core.getCurrentScope().setClient(client$1);
    client$1.init();
    core.logger.log(`Running in ${commonjs.isCjs() ? 'CommonJS' : 'ESM'} mode.`);
    client$1.startClientReportTracking();
    updateScopeFromEnvVariables();
    // If users opt-out of this, they _have_ to set up OpenTelemetry themselves
    // There is no way to use this SDK without OpenTelemetry!
    if (!options.skipOpenTelemetrySetup) {
        initOtel.initOpenTelemetry(client$1, {
            spanProcessors: options.openTelemetrySpanProcessors
        });
        validateOpenTelemetrySetup();
    }
    opentelemetry.enhanceDscWithOpenTelemetryRootSpanName(client$1);
    opentelemetry.setupEventContextTrace(client$1);
    return client$1;
}
/**
 * Validate that your OpenTelemetry setup is correct.
 */ function validateOpenTelemetrySetup() {
    if (!debugBuild.DEBUG_BUILD) {
        return;
    }
    const setup = opentelemetry.openTelemetrySetupCheck();
    const required = [
        'SentryContextManager',
        'SentryPropagator'
    ];
    if (core.hasSpansEnabled()) {
        required.push('SentrySpanProcessor');
    }
    for (const k of required){
        if (!setup.includes(k)) {
            core.logger.error(`You have to set up the ${k}. Without this, the OpenTelemetry & Sentry integration will not work properly.`);
        }
    }
    if (!setup.includes('SentrySampler')) {
        core.logger.warn('You have to set up the SentrySampler. Without this, the OpenTelemetry & Sentry integration may still work, but sample rates set for the Sentry SDK will not be respected. If you use a custom sampler, make sure to use `wrapSamplingDecision`.');
    }
}
function getClientOptions(options, getDefaultIntegrationsImpl) {
    const release = getRelease(options.release);
    const spotlight = options.spotlight ?? envToBool.envToBool(process.env.SENTRY_SPOTLIGHT, {
        strict: true
    }) ?? process.env.SENTRY_SPOTLIGHT;
    const tracesSampleRate = getTracesSampleRate(options.tracesSampleRate);
    const mergedOptions = {
        ...options,
        dsn: options.dsn ?? process.env.SENTRY_DSN,
        environment: options.environment ?? process.env.SENTRY_ENVIRONMENT,
        sendClientReports: options.sendClientReports ?? true,
        transport: options.transport ?? http.makeNodeTransport,
        stackParser: core.stackParserFromStackParserOptions(options.stackParser || api.defaultStackParser),
        release,
        tracesSampleRate,
        spotlight,
        debug: envToBool.envToBool(options.debug ?? process.env.SENTRY_DEBUG)
    };
    const integrations = options.integrations;
    const defaultIntegrations = options.defaultIntegrations ?? getDefaultIntegrationsImpl(mergedOptions);
    return {
        ...mergedOptions,
        integrations: core.getIntegrationsToSetup({
            defaultIntegrations,
            integrations
        })
    };
}
function getRelease(release) {
    if (release !== undefined) {
        return release;
    }
    const detectedRelease = api.getSentryRelease();
    if (detectedRelease !== undefined) {
        return detectedRelease;
    }
    return undefined;
}
function getTracesSampleRate(tracesSampleRate) {
    if (tracesSampleRate !== undefined) {
        return tracesSampleRate;
    }
    const sampleRateFromEnv = process.env.SENTRY_TRACES_SAMPLE_RATE;
    if (!sampleRateFromEnv) {
        return undefined;
    }
    const parsed = parseFloat(sampleRateFromEnv);
    return isFinite(parsed) ? parsed : undefined;
}
/**
 * Update scope and propagation context based on environmental variables.
 *
 * See https://github.com/getsentry/rfcs/blob/main/text/0071-continue-trace-over-process-boundaries.md
 * for more details.
 */ function updateScopeFromEnvVariables() {
    if (envToBool.envToBool(process.env.SENTRY_USE_ENVIRONMENT) !== false) {
        const sentryTraceEnv = process.env.SENTRY_TRACE;
        const baggageEnv = process.env.SENTRY_BAGGAGE;
        const propagationContext = core.propagationContextFromHeaders(sentryTraceEnv, baggageEnv);
        core.getCurrentScope().setPropagationContext(propagationContext);
    }
}
exports.getDefaultIntegrations = getDefaultIntegrations;
exports.getDefaultIntegrationsWithoutPerformance = getDefaultIntegrationsWithoutPerformance;
exports.init = init;
exports.initWithoutDefaultIntegrations = initWithoutDefaultIntegrations;
exports.validateOpenTelemetrySetup = validateOpenTelemetrySetup; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/common.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const replacements = [
    [
        'january',
        '1'
    ],
    [
        'february',
        '2'
    ],
    [
        'march',
        '3'
    ],
    [
        'april',
        '4'
    ],
    [
        'may',
        '5'
    ],
    [
        'june',
        '6'
    ],
    [
        'july',
        '7'
    ],
    [
        'august',
        '8'
    ],
    [
        'september',
        '9'
    ],
    [
        'october',
        '10'
    ],
    [
        'november',
        '11'
    ],
    [
        'december',
        '12'
    ],
    [
        'jan',
        '1'
    ],
    [
        'feb',
        '2'
    ],
    [
        'mar',
        '3'
    ],
    [
        'apr',
        '4'
    ],
    [
        'may',
        '5'
    ],
    [
        'jun',
        '6'
    ],
    [
        'jul',
        '7'
    ],
    [
        'aug',
        '8'
    ],
    [
        'sep',
        '9'
    ],
    [
        'oct',
        '10'
    ],
    [
        'nov',
        '11'
    ],
    [
        'dec',
        '12'
    ],
    [
        'sunday',
        '0'
    ],
    [
        'monday',
        '1'
    ],
    [
        'tuesday',
        '2'
    ],
    [
        'wednesday',
        '3'
    ],
    [
        'thursday',
        '4'
    ],
    [
        'friday',
        '5'
    ],
    [
        'saturday',
        '6'
    ],
    [
        'sun',
        '0'
    ],
    [
        'mon',
        '1'
    ],
    [
        'tue',
        '2'
    ],
    [
        'wed',
        '3'
    ],
    [
        'thu',
        '4'
    ],
    [
        'fri',
        '5'
    ],
    [
        'sat',
        '6'
    ]
];
/**
 * Replaces names in cron expressions
 */ function replaceCronNames(cronExpression) {
    return replacements.reduce(// eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor
    (acc, [name, replacement])=>acc.replace(new RegExp(name, 'gi'), replacement), cronExpression);
}
exports.replaceCronNames = replaceCronNames; //# sourceMappingURL=common.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/cron.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const common = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/common.js [app-ssr] (ecmascript)");
const ERROR_TEXT = 'Automatic instrumentation of CronJob only supports crontab string';
/**
 * Instruments the `cron` library to send a check-in event to Sentry for each job execution.
 *
 * ```ts
 * import * as Sentry from '@sentry/node';
 * import { CronJob } from 'cron';
 *
 * const CronJobWithCheckIn = Sentry.cron.instrumentCron(CronJob, 'my-cron-job');
 *
 * // use the constructor
 * const job = new CronJobWithCheckIn('* * * * *', () => {
 *  console.log('You will see this message every minute');
 * });
 *
 * // or from
 * const job = CronJobWithCheckIn.from({ cronTime: '* * * * *', onTick: () => {
 *   console.log('You will see this message every minute');
 * });
 * ```
 */ function instrumentCron(lib, monitorSlug) {
    let jobScheduled = false;
    return new Proxy(lib, {
        construct (target, args) {
            const [cronTime, onTick, onComplete, start, timeZone, ...rest] = args;
            if (typeof cronTime !== 'string') {
                throw new Error(ERROR_TEXT);
            }
            if (jobScheduled) {
                throw new Error(`A job named '${monitorSlug}' has already been scheduled`);
            }
            jobScheduled = true;
            const cronString = common.replaceCronNames(cronTime);
            async function monitoredTick(context, onComplete) {
                return core.withMonitor(monitorSlug, async ()=>{
                    try {
                        await onTick(context, onComplete);
                    } catch (e) {
                        core.captureException(e);
                        throw e;
                    }
                }, {
                    schedule: {
                        type: 'crontab',
                        value: cronString
                    },
                    timezone: timeZone || undefined
                });
            }
            return new target(cronTime, monitoredTick, onComplete, start, timeZone, ...rest);
        },
        get (target, prop) {
            if (prop === 'from') {
                return (param)=>{
                    const { cronTime, onTick, timeZone } = param;
                    if (typeof cronTime !== 'string') {
                        throw new Error(ERROR_TEXT);
                    }
                    if (jobScheduled) {
                        throw new Error(`A job named '${monitorSlug}' has already been scheduled`);
                    }
                    jobScheduled = true;
                    const cronString = common.replaceCronNames(cronTime);
                    param.onTick = async (context, onComplete)=>{
                        return core.withMonitor(monitorSlug, async ()=>{
                            try {
                                await onTick(context, onComplete);
                            } catch (e) {
                                core.captureException(e);
                                throw e;
                            }
                        }, {
                            schedule: {
                                type: 'crontab',
                                value: cronString
                            },
                            timezone: timeZone || undefined
                        });
                    };
                    return target.from(param);
                };
            } else {
                return target[prop];
            }
        }
    });
}
exports.instrumentCron = instrumentCron; //# sourceMappingURL=cron.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/node-cron.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const common = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/common.js [app-ssr] (ecmascript)");
/**
 * Wraps the `node-cron` library with check-in monitoring.
 *
 * ```ts
 * import * as Sentry from "@sentry/node";
 * import * as cron from "node-cron";
 *
 * const cronWithCheckIn = Sentry.cron.instrumentNodeCron(cron);
 *
 * cronWithCheckIn.schedule(
 *   "* * * * *",
 *   () => {
 *     console.log("running a task every minute");
 *   },
 *   { name: "my-cron-job" },
 * );
 * ```
 */ function instrumentNodeCron(lib) {
    return new Proxy(lib, {
        get (target, prop) {
            if (prop === 'schedule' && target.schedule) {
                // When 'get' is called for schedule, return a proxied version of the schedule function
                return new Proxy(target.schedule, {
                    apply (target, thisArg, argArray) {
                        const [expression, callback, options] = argArray;
                        const name = options?.name;
                        const timezone = options?.timezone;
                        if (!name) {
                            throw new Error('Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.');
                        }
                        const monitoredCallback = async ()=>{
                            return core.withMonitor(name, async ()=>{
                                // We have to manually catch here and capture the exception because node-cron swallows errors
                                // https://github.com/node-cron/node-cron/issues/399
                                try {
                                    return await callback();
                                } catch (e) {
                                    core.captureException(e);
                                    throw e;
                                }
                            }, {
                                schedule: {
                                    type: 'crontab',
                                    value: common.replaceCronNames(expression)
                                },
                                timezone
                            });
                        };
                        return target.apply(thisArg, [
                            expression,
                            monitoredCallback,
                            options
                        ]);
                    }
                });
            } else {
                return target[prop];
            }
        }
    });
}
exports.instrumentNodeCron = instrumentNodeCron; //# sourceMappingURL=node-cron.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/node-schedule.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
const common = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/common.js [app-ssr] (ecmascript)");
/**
 * Instruments the `node-schedule` library to send a check-in event to Sentry for each job execution.
 *
 * ```ts
 * import * as Sentry from '@sentry/node';
 * import * as schedule from 'node-schedule';
 *
 * const scheduleWithCheckIn = Sentry.cron.instrumentNodeSchedule(schedule);
 *
 * const job = scheduleWithCheckIn.scheduleJob('my-cron-job', '* * * * *', () => {
 *  console.log('You will see this message every minute');
 * });
 * ```
 */ function instrumentNodeSchedule(lib) {
    return new Proxy(lib, {
        get (target, prop) {
            if (prop === 'scheduleJob') {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                return new Proxy(target.scheduleJob, {
                    apply (target, thisArg, argArray) {
                        const [nameOrExpression, expressionOrCallback, callback] = argArray;
                        if (typeof nameOrExpression !== 'string' || typeof expressionOrCallback !== 'string' || typeof callback !== 'function') {
                            throw new Error("Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string");
                        }
                        const monitorSlug = nameOrExpression;
                        const expression = expressionOrCallback;
                        async function monitoredCallback() {
                            return core.withMonitor(monitorSlug, async ()=>{
                                await callback?.();
                            }, {
                                schedule: {
                                    type: 'crontab',
                                    value: common.replaceCronNames(expression)
                                }
                            });
                        }
                        return target.apply(thisArg, [
                            monitorSlug,
                            expression,
                            monitoredCallback
                        ]);
                    }
                });
            }
            return target[prop];
        }
    });
}
exports.instrumentNodeSchedule = instrumentNodeSchedule; //# sourceMappingURL=node-schedule.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const cron$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/cron.js [app-ssr] (ecmascript)");
const nodeCron = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/node-cron.js [app-ssr] (ecmascript)");
const nodeSchedule = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/node-schedule.js [app-ssr] (ecmascript)");
/** Methods to instrument cron libraries for Sentry check-ins */ const cron = {
    instrumentCron: cron$1.instrumentCron,
    instrumentNodeCron: nodeCron.instrumentNodeCron,
    instrumentNodeSchedule: nodeSchedule.instrumentNodeSchedule
};
exports.cron = cron; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const exports$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/logs/exports.js [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/http/index.js [app-ssr] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/node-fetch/index.js [app-ssr] (ecmascript)");
const fs = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/fs.js [app-ssr] (ecmascript)");
const context = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/context.js [app-ssr] (ecmascript)");
const contextlines = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/contextlines.js [app-ssr] (ecmascript)");
const index$2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/local-variables/index.js [app-ssr] (ecmascript)");
const modules = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/modules.js [app-ssr] (ecmascript)");
const onuncaughtexception = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/onuncaughtexception.js [app-ssr] (ecmascript)");
const onunhandledrejection = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/onunhandledrejection.js [app-ssr] (ecmascript)");
const index$3 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/anr/index.js [app-ssr] (ecmascript)");
const express = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/express.js [app-ssr] (ecmascript)");
const index$4 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/fastify/index.js [app-ssr] (ecmascript)");
const graphql = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/graphql.js [app-ssr] (ecmascript)");
const kafka = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/kafka.js [app-ssr] (ecmascript)");
const lrumemoizer = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/lrumemoizer.js [app-ssr] (ecmascript)");
const mongo = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mongo.js [app-ssr] (ecmascript)");
const mongoose = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mongoose.js [app-ssr] (ecmascript)");
const mysql = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mysql.js [app-ssr] (ecmascript)");
const mysql2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/mysql2.js [app-ssr] (ecmascript)");
const redis = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/redis.js [app-ssr] (ecmascript)");
const postgres = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/postgres.js [app-ssr] (ecmascript)");
const prisma = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/prisma.js [app-ssr] (ecmascript)");
const index$5 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/hapi/index.js [app-ssr] (ecmascript)");
const koa = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/koa.js [app-ssr] (ecmascript)");
const connect = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/connect.js [app-ssr] (ecmascript)");
const spotlight = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/spotlight.js [app-ssr] (ecmascript)");
const knex = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/knex.js [app-ssr] (ecmascript)");
const tedious = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/tedious.js [app-ssr] (ecmascript)");
const genericPool = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/genericPool.js [app-ssr] (ecmascript)");
const dataloader = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/dataloader.js [app-ssr] (ecmascript)");
const amqplib = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/amqplib.js [app-ssr] (ecmascript)");
const index$6 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/vercelai/index.js [app-ssr] (ecmascript)");
const childProcess = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/childProcess.js [app-ssr] (ecmascript)");
const winston = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/winston.js [app-ssr] (ecmascript)");
const contextManager = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/contextManager.js [app-ssr] (ecmascript)");
const instrument = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/otel/instrument.js [app-ssr] (ecmascript)");
const index$7 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/index.js [app-ssr] (ecmascript)");
const initOtel = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/initOtel.js [app-ssr] (ecmascript)");
const index$8 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/integrations/tracing/index.js [app-ssr] (ecmascript)");
const api = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/api.js [app-ssr] (ecmascript)");
const module$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/utils/module.js [app-ssr] (ecmascript)");
const http = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/transports/http.js [app-ssr] (ecmascript)");
const client = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/sdk/client.js [app-ssr] (ecmascript)");
const index$9 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/cron/index.js [app-ssr] (ecmascript)");
const nodeVersion = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/build/cjs/nodeVersion.js [app-ssr] (ecmascript)");
const opentelemetry = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [app-ssr] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [app-ssr] (ecmascript)");
exports.logger = exports$1;
exports.httpIntegration = index.httpIntegration;
exports.nativeNodeFetchIntegration = index$1.nativeNodeFetchIntegration;
exports.fsIntegration = fs.fsIntegration;
exports.nodeContextIntegration = context.nodeContextIntegration;
exports.contextLinesIntegration = contextlines.contextLinesIntegration;
exports.localVariablesIntegration = index$2.localVariablesIntegration;
exports.modulesIntegration = modules.modulesIntegration;
exports.onUncaughtExceptionIntegration = onuncaughtexception.onUncaughtExceptionIntegration;
exports.onUnhandledRejectionIntegration = onunhandledrejection.onUnhandledRejectionIntegration;
exports.anrIntegration = index$3.anrIntegration;
exports.disableAnrDetectionForCallback = index$3.disableAnrDetectionForCallback;
exports.expressErrorHandler = express.expressErrorHandler;
exports.expressIntegration = express.expressIntegration;
exports.setupExpressErrorHandler = express.setupExpressErrorHandler;
exports.fastifyIntegration = index$4.fastifyIntegration;
exports.setupFastifyErrorHandler = index$4.setupFastifyErrorHandler;
exports.graphqlIntegration = graphql.graphqlIntegration;
exports.kafkaIntegration = kafka.kafkaIntegration;
exports.lruMemoizerIntegration = lrumemoizer.lruMemoizerIntegration;
exports.mongoIntegration = mongo.mongoIntegration;
exports.mongooseIntegration = mongoose.mongooseIntegration;
exports.mysqlIntegration = mysql.mysqlIntegration;
exports.mysql2Integration = mysql2.mysql2Integration;
exports.redisIntegration = redis.redisIntegration;
exports.postgresIntegration = postgres.postgresIntegration;
exports.prismaIntegration = prisma.prismaIntegration;
exports.hapiIntegration = index$5.hapiIntegration;
exports.setupHapiErrorHandler = index$5.setupHapiErrorHandler;
exports.koaIntegration = koa.koaIntegration;
exports.setupKoaErrorHandler = koa.setupKoaErrorHandler;
exports.connectIntegration = connect.connectIntegration;
exports.setupConnectErrorHandler = connect.setupConnectErrorHandler;
exports.spotlightIntegration = spotlight.spotlightIntegration;
exports.knexIntegration = knex.knexIntegration;
exports.tediousIntegration = tedious.tediousIntegration;
exports.genericPoolIntegration = genericPool.genericPoolIntegration;
exports.dataloaderIntegration = dataloader.dataloaderIntegration;
exports.amqplibIntegration = amqplib.amqplibIntegration;
exports.vercelAIIntegration = index$6.vercelAIIntegration;
exports.childProcessIntegration = childProcess.childProcessIntegration;
exports.createSentryWinstonTransport = winston.createSentryWinstonTransport;
exports.SentryContextManager = contextManager.SentryContextManager;
exports.generateInstrumentOnce = instrument.generateInstrumentOnce;
exports.getDefaultIntegrations = index$7.getDefaultIntegrations;
exports.getDefaultIntegrationsWithoutPerformance = index$7.getDefaultIntegrationsWithoutPerformance;
exports.init = index$7.init;
exports.initWithoutDefaultIntegrations = index$7.initWithoutDefaultIntegrations;
exports.validateOpenTelemetrySetup = index$7.validateOpenTelemetrySetup;
exports.initOpenTelemetry = initOtel.initOpenTelemetry;
exports.preloadOpenTelemetry = initOtel.preloadOpenTelemetry;
exports.getAutoPerformanceIntegrations = index$8.getAutoPerformanceIntegrations;
exports.defaultStackParser = api.defaultStackParser;
exports.getSentryRelease = api.getSentryRelease;
exports.createGetModuleFromFilename = module$1.createGetModuleFromFilename;
exports.makeNodeTransport = http.makeNodeTransport;
exports.NodeClient = client.NodeClient;
exports.cron = index$9.cron;
exports.NODE_VERSION = nodeVersion.NODE_VERSION;
exports.setNodeAsyncContextStrategy = opentelemetry.setOpenTelemetryContextAsyncContextStrategy;
exports.SDK_VERSION = core.SDK_VERSION;
exports.SEMANTIC_ATTRIBUTE_SENTRY_OP = core.SEMANTIC_ATTRIBUTE_SENTRY_OP;
exports.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
exports.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
exports.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
exports.Scope = core.Scope;
exports.addBreadcrumb = core.addBreadcrumb;
exports.addEventProcessor = core.addEventProcessor;
exports.addIntegration = core.addIntegration;
exports.captureCheckIn = core.captureCheckIn;
exports.captureConsoleIntegration = core.captureConsoleIntegration;
exports.captureEvent = core.captureEvent;
exports.captureException = core.captureException;
exports.captureFeedback = core.captureFeedback;
exports.captureMessage = core.captureMessage;
exports.captureSession = core.captureSession;
exports.close = core.close;
exports.consoleIntegration = core.consoleIntegration;
exports.consoleLoggingIntegration = core.consoleLoggingIntegration;
exports.continueTrace = core.continueTrace;
exports.createTransport = core.createTransport;
exports.dedupeIntegration = core.dedupeIntegration;
exports.endSession = core.endSession;
exports.eventFiltersIntegration = core.eventFiltersIntegration;
exports.extraErrorDataIntegration = core.extraErrorDataIntegration;
exports.flush = core.flush;
exports.functionToStringIntegration = core.functionToStringIntegration;
exports.getActiveSpan = core.getActiveSpan;
exports.getClient = core.getClient;
exports.getCurrentScope = core.getCurrentScope;
exports.getGlobalScope = core.getGlobalScope;
exports.getIsolationScope = core.getIsolationScope;
exports.getRootSpan = core.getRootSpan;
exports.getSpanDescendants = core.getSpanDescendants;
exports.getSpanStatusFromHttpCode = core.getSpanStatusFromHttpCode;
exports.getTraceData = core.getTraceData;
exports.getTraceMetaTags = core.getTraceMetaTags;
exports.inboundFiltersIntegration = core.inboundFiltersIntegration;
exports.instrumentSupabaseClient = core.instrumentSupabaseClient;
exports.isEnabled = core.isEnabled;
exports.isInitialized = core.isInitialized;
exports.lastEventId = core.lastEventId;
exports.linkedErrorsIntegration = core.linkedErrorsIntegration;
exports.parameterize = core.parameterize;
exports.profiler = core.profiler;
exports.requestDataIntegration = core.requestDataIntegration;
exports.rewriteFramesIntegration = core.rewriteFramesIntegration;
exports.setContext = core.setContext;
exports.setCurrentClient = core.setCurrentClient;
exports.setExtra = core.setExtra;
exports.setExtras = core.setExtras;
exports.setHttpStatus = core.setHttpStatus;
exports.setMeasurement = core.setMeasurement;
exports.setTag = core.setTag;
exports.setTags = core.setTags;
exports.setUser = core.setUser;
exports.spanToBaggageHeader = core.spanToBaggageHeader;
exports.spanToJSON = core.spanToJSON;
exports.spanToTraceHeader = core.spanToTraceHeader;
exports.startInactiveSpan = core.startInactiveSpan;
exports.startNewTrace = core.startNewTrace;
exports.startSession = core.startSession;
exports.startSpan = core.startSpan;
exports.startSpanManual = core.startSpanManual;
exports.supabaseIntegration = core.supabaseIntegration;
exports.suppressTracing = core.suppressTracing;
exports.trpcMiddleware = core.trpcMiddleware;
exports.updateSpanName = core.updateSpanName;
exports.withActiveSpan = core.withActiveSpan;
exports.withIsolationScope = core.withIsolationScope;
exports.withMonitor = core.withMonitor;
exports.withScope = core.withScope;
exports.wrapMcpServerWithSentry = core.wrapMcpServerWithSentry;
exports.zodErrorsIntegration = core.zodErrorsIntegration; //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=79789_%40sentry_node_build_cjs_b2a60e28._.js.map