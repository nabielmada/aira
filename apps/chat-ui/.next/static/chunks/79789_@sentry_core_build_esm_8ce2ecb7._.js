(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** Internal global with common properties and Sentry extensions  */ /** Get's the global object for the current JavaScript runtime */ __turbopack_context__.s({
    "GLOBAL_OBJ": (()=>GLOBAL_OBJ)
});
const GLOBAL_OBJ = globalThis;
;
 //# sourceMappingURL=worldwide.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This is a magic string replaced by rollup
__turbopack_context__.s({
    "SDK_VERSION": (()=>SDK_VERSION)
});
const SDK_VERSION = "9.28.1";
;
 //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applySdkMetadata": (()=>applySdkMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/version.js [app-client] (ecmascript)");
;
/**
 * A builder for the SDK metadata in the options for the SDK initialization.
 *
 * Note: This function is identical to `buildMetadata` in Remix and NextJS and SvelteKit.
 * We don't extract it for bundle size reasons.
 * @see https://github.com/getsentry/sentry-javascript/pull/7404
 * @see https://github.com/getsentry/sentry-javascript/pull/4196
 *
 * If you make changes to this function consider updating the others as well.
 *
 * @param options SDK options object that gets mutated
 * @param names list of package names
 */ function applySdkMetadata(options, name, names = [
    name
], source = 'npm') {
    const metadata = options._metadata || {};
    if (!metadata.sdk) {
        metadata.sdk = {
            name: `sentry.javascript.${name}`,
            packages: names.map((name)=>({
                    name: `${source}:@sentry/${name}`,
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]
                })),
            version: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]
        };
    }
    options._metadata = metadata;
}
;
 //# sourceMappingURL=sdkMetadata.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getGlobalSingleton": (()=>getGlobalSingleton),
    "getMainCarrier": (()=>getMainCarrier),
    "getSentryCarrier": (()=>getSentryCarrier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
/**
 * An object that contains globally accessible properties and maintains a scope stack.
 * @hidden
 */ /**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/ function getMainCarrier() {
    // This ensures a Sentry carrier exists
    getSentryCarrier(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
}
/** Will either get the existing sentry carrier, or create a new one. */ function getSentryCarrier(carrier) {
    const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    // For now: First SDK that sets the .version property wins
    __SENTRY__.version = __SENTRY__.version || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"];
    // Intentionally populating and returning the version of "this" SDK instance
    // rather than what's set in .version so that "this" SDK always gets its carrier
    return __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] = __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] || {};
}
/**
 * Returns a global singleton contained in the global `__SENTRY__[]` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */ function getGlobalSingleton(name, creator, obj = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]) {
    const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
    const carrier = __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] = __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] || {};
    // Note: We do not want to set `carrier.version` here, as this may be called before any `init` is called, e.g. for the default scopes
    return carrier[name] || (carrier[name] = creator());
}
;
 //# sourceMappingURL=carrier.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ __turbopack_context__.s({
    "DEBUG_BUILD": (()=>DEBUG_BUILD)
});
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
;
 //# sourceMappingURL=debug-build.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// eslint-disable-next-line @typescript-eslint/unbound-method
__turbopack_context__.s({
    "isDOMError": (()=>isDOMError),
    "isDOMException": (()=>isDOMException),
    "isElement": (()=>isElement),
    "isError": (()=>isError),
    "isErrorEvent": (()=>isErrorEvent),
    "isEvent": (()=>isEvent),
    "isInstanceOf": (()=>isInstanceOf),
    "isParameterizedString": (()=>isParameterizedString),
    "isPlainObject": (()=>isPlainObject),
    "isPrimitive": (()=>isPrimitive),
    "isRegExp": (()=>isRegExp),
    "isRequest": (()=>isRequest),
    "isString": (()=>isString),
    "isSyntheticEvent": (()=>isSyntheticEvent),
    "isThenable": (()=>isThenable),
    "isVueViewModel": (()=>isVueViewModel)
});
const objectToString = Object.prototype.toString;
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isError(wat) {
    switch(objectToString.call(wat)){
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
        case '[object WebAssembly.Exception]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */ function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isErrorEvent(wat) {
    return isBuiltin(wat, 'ErrorEvent');
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isDOMError(wat) {
    return isBuiltin(wat, 'DOMError');
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isDOMException(wat) {
    return isBuiltin(wat, 'DOMException');
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isString(wat) {
    return isBuiltin(wat, 'String');
}
/**
 * Checks whether given string is parameterized
 * {@link isParameterizedString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isParameterizedString(wat) {
    return typeof wat === 'object' && wat !== null && '__sentry_template_string__' in wat && '__sentry_template_values__' in wat;
}
/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isPrimitive(wat) {
    return wat === null || isParameterizedString(wat) || typeof wat !== 'object' && typeof wat !== 'function';
}
/**
 * Checks whether given value's type is an object literal, or a class instance.
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isPlainObject(wat) {
    return isBuiltin(wat, 'Object');
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isRegExp(wat) {
    return isBuiltin(wat, 'RegExp');
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */ function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat?.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */ function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    } catch (_e) {
        return false;
    }
}
/**
 * Checks whether given value's type is a Vue ViewModel.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isVueViewModel(wat) {
    // Not using Object.prototype.toString because in Vue 3 it would read the instance's Symbol(Symbol.toStringTag) property.
    return !!(typeof wat === 'object' && wat !== null && (wat.__isVue || wat._isVue));
}
/**
 * Checks whether the given parameter is a Standard Web API Request instance.
 *
 * Returns false if Request is not available in the current runtime.
 */ function isRequest(request) {
    return typeof Request !== 'undefined' && isInstanceOf(request, Request);
}
;
 //# sourceMappingURL=is.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getComponentName": (()=>getComponentName),
    "getLocationHref": (()=>getLocationHref),
    "htmlTreeAsString": (()=>htmlTreeAsString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
const DEFAULT_MAX_STRING_LENGTH = 80;
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */ function htmlTreeAsString(elem, options = {}) {
    if (!elem) {
        return '<unknown>';
    }
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        let currentElem = elem;
        const MAX_TRAVERSE_HEIGHT = 5;
        const out = [];
        let height = 0;
        let len = 0;
        const separator = ' > ';
        const sepLength = separator.length;
        let nextStr;
        const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
        const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
        while(currentElem && height++ < MAX_TRAVERSE_HEIGHT){
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds maxStringLength
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    } catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */ function _htmlElementAsString(el, keyAttrs) {
    const elem = el;
    const out = [];
    if (!elem?.tagName) {
        return '';
    }
    // @ts-expect-error WINDOW has HTMLElement
    if (WINDOW.HTMLElement) {
        // If using the component name annotation plugin, this value may be available on the DOM node
        if (elem instanceof HTMLElement && elem.dataset) {
            if (elem.dataset['sentryComponent']) {
                return elem.dataset['sentryComponent'];
            }
            if (elem.dataset['sentryElement']) {
                return elem.dataset['sentryElement'];
            }
        }
    }
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    const keyAttrPairs = keyAttrs?.length ? keyAttrs.filter((keyAttr)=>elem.getAttribute(keyAttr)).map((keyAttr)=>[
            keyAttr,
            elem.getAttribute(keyAttr)
        ]) : null;
    if (keyAttrPairs?.length) {
        keyAttrPairs.forEach((keyAttrPair)=>{
            out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
        });
    } else {
        if (elem.id) {
            out.push(`#${elem.id}`);
        }
        const className = elem.className;
        if (className && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(className)) {
            const classes = className.split(/\s+/);
            for (const c of classes){
                out.push(`.${c}`);
            }
        }
    }
    const allowedAttrs = [
        'aria-label',
        'type',
        'name',
        'title',
        'alt'
    ];
    for (const k of allowedAttrs){
        const attr = elem.getAttribute(k);
        if (attr) {
            out.push(`[${k}="${attr}"]`);
        }
    }
    return out.join('');
}
/**
 * A safe form of location.href
 */ function getLocationHref() {
    try {
        return WINDOW.document.location.href;
    } catch (oO) {
        return '';
    }
}
/**
 * Given a DOM element, traverses up the tree until it finds the first ancestor node
 * that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
 * precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
 *
 * @returns a string representation of the component for the provided DOM element, or `null` if not found
 */ function getComponentName(elem) {
    // @ts-expect-error WINDOW has HTMLElement
    if (!WINDOW.HTMLElement) {
        return null;
    }
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    for(let i = 0; i < MAX_TRAVERSE_HEIGHT; i++){
        if (!currentElem) {
            return null;
        }
        if (currentElem instanceof HTMLElement) {
            if (currentElem.dataset['sentryComponent']) {
                return currentElem.dataset['sentryComponent'];
            }
            if (currentElem.dataset['sentryElement']) {
                return currentElem.dataset['sentryElement'];
            }
        }
        currentElem = currentElem.parentNode;
    }
    return null;
}
;
 //# sourceMappingURL=browser.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CONSOLE_LEVELS": (()=>CONSOLE_LEVELS),
    "consoleSandbox": (()=>consoleSandbox),
    "logger": (()=>logger),
    "originalConsoleMethods": (()=>originalConsoleMethods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
;
/** Prefix for logging strings */ const PREFIX = 'Sentry Logger ';
const CONSOLE_LEVELS = [
    'debug',
    'info',
    'warn',
    'error',
    'log',
    'assert',
    'trace'
];
/** This may be mutated by the console instrumentation. */ const originalConsoleMethods = {};
/** A Sentry Logger instance. */ /**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */ function consoleSandbox(callback) {
    if (!('console' in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"])) {
        return callback();
    }
    const console = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console;
    const wrappedFuncs = {};
    const wrappedLevels = Object.keys(originalConsoleMethods);
    // Restore all wrapped console methods
    wrappedLevels.forEach((level)=>{
        const originalConsoleMethod = originalConsoleMethods[level];
        wrappedFuncs[level] = console[level];
        console[level] = originalConsoleMethod;
    });
    try {
        return callback();
    } finally{
        // Revert restoration to wrapped state
        wrappedLevels.forEach((level)=>{
            console[level] = wrappedFuncs[level];
        });
    }
}
function makeLogger() {
    let enabled = false;
    const logger = {
        enable: ()=>{
            enabled = true;
        },
        disable: ()=>{
            enabled = false;
        },
        isEnabled: ()=>enabled
    };
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
        CONSOLE_LEVELS.forEach((name)=>{
            logger[name] = (...args)=>{
                if (enabled) {
                    consoleSandbox(()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console[name](`${PREFIX}[${name}]:`, ...args);
                    });
                }
            };
        });
    } else {
        CONSOLE_LEVELS.forEach((name)=>{
            logger[name] = ()=>undefined;
        });
    }
    return logger;
}
/**
 * This is a logger singleton which either logs things or no-ops if logging is not enabled.
 * The logger is a singleton on the carrier, to ensure that a consistent logger is used throughout the SDK.
 */ const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])('logger', makeLogger);
;
 //# sourceMappingURL=logger.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isMatchingPattern": (()=>isMatchingPattern),
    "safeJoin": (()=>safeJoin),
    "snipLine": (()=>snipLine),
    "stringMatchesSomePattern": (()=>stringMatchesSomePattern),
    "truncate": (()=>truncate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
;
/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */ function truncate(str, max = 0) {
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : `${str.slice(0, max)}...`;
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */ function snipLine(line, colno) {
    let newLine = line;
    const lineLength = newLine.length;
    if (lineLength <= 150) {
        return newLine;
    }
    if (colno > lineLength) {
        // eslint-disable-next-line no-param-reassign
        colno = lineLength;
    }
    let start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    let end = Math.min(start + 140, lineLength);
    if (end > lineLength - 5) {
        end = lineLength;
    }
    if (end === lineLength) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = `'{snip} ${newLine}`;
    }
    if (end < lineLength) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */ function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    const output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < input.length; i++){
        const value = input[i];
        try {
            // This is a hack to fix a Vue3-specific bug that causes an infinite loop of
            // console warnings. This happens when a Vue template is rendered with
            // an undeclared variable, which we try to stringify, ultimately causing
            // Vue to issue another warning which repeats indefinitely.
            // see: https://github.com/getsentry/sentry-javascript/pull/8981
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVueViewModel"])(value)) {
                output.push('[VueViewModel]');
            } else {
                output.push(String(value));
            }
        } catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the given value matches a regex or string
 *
 * @param value The string to test
 * @param pattern Either a regex or a string against which `value` will be matched
 * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
 * `pattern` if it contains `pattern`. Only applies to string-type patterns.
 */ function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(value)) {
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"])(pattern)) {
        return pattern.test(value);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(pattern)) {
        return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }
    return false;
}
/**
 * Test the given string against an array of strings and regexes. By default, string matching is done on a
 * substring-inclusion basis rather than a strict equality basis
 *
 * @param testString The string to test
 * @param patterns The patterns against which to test the string
 * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
 * count. If false, `testString` will match a string pattern if it contains that pattern.
 * @returns
 */ function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
    return patterns.some((pattern)=>isMatchingPattern(testString, pattern, requireExactStringMatch));
}
;
 //# sourceMappingURL=string.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addNonEnumerableProperty": (()=>addNonEnumerableProperty),
    "convertToPlainObject": (()=>convertToPlainObject),
    "dropUndefinedKeys": (()=>dropUndefinedKeys),
    "extractExceptionKeysForMessage": (()=>extractExceptionKeysForMessage),
    "fill": (()=>fill),
    "getOriginalFunction": (()=>getOriginalFunction),
    "markFunctionWrapped": (()=>markFunctionWrapped),
    "objectify": (()=>objectify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * If the method on the passed object is not a function, the wrapper will not be applied.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */ function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    // explicitly casting to unknown because we don't know the type of the method initially at all
    const original = source[name];
    if (typeof original !== 'function') {
        return;
    }
    const wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        markFunctionWrapped(wrapped, original);
    }
    try {
        source[name] = wrapped;
    } catch  {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Failed to replace method "${name}" in object`, source);
    }
}
/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */ function addNonEnumerableProperty(obj, name, value) {
    try {
        Object.defineProperty(obj, name, {
            // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
            value: value,
            writable: true,
            configurable: true
        });
    } catch (o_O) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Failed to add non-enumerable property "${name}" to object`, obj);
    }
}
/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */ function markFunctionWrapped(wrapped, original) {
    try {
        const proto = original.prototype || {};
        wrapped.prototype = original.prototype = proto;
        addNonEnumerableProperty(wrapped, '__sentry_original__', original);
    } catch (o_O) {} // eslint-disable-line no-empty
}
/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function getOriginalFunction(func) {
    return func.__sentry_original__;
}
/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
 *  an Error.
 */ function convertToPlainObject(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(value)) {
        return {
            message: value.message,
            name: value.name,
            stack: value.stack,
            ...getOwnProperties(value)
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvent"])(value)) {
        const newObj = {
            type: value.type,
            target: serializeEventTarget(value.target),
            currentTarget: serializeEventTarget(value.currentTarget),
            ...getOwnProperties(value)
        };
        if (typeof CustomEvent !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOf"])(value, CustomEvent)) {
            newObj.detail = value.detail;
        }
        return newObj;
    } else {
        return value;
    }
}
/** Creates a string representation of the target of an `Event` object */ function serializeEventTarget(target) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
        return '<unknown>';
    }
}
/** Filters out all but an object's own properties */ function getOwnProperties(obj) {
    if (typeof obj === 'object' && obj !== null) {
        const extractedProps = {};
        for(const property in obj){
            if (Object.prototype.hasOwnProperty.call(obj, property)) {
                extractedProps[property] = obj[property];
            }
        }
        return extractedProps;
    } else {
        return {};
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */ function extractExceptionKeysForMessage(exception, maxLength = 40) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    const firstKey = keys[0];
    if (!firstKey) {
        return '[object has no keys]';
    }
    if (firstKey.length >= maxLength) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(firstKey, maxLength);
    }
    for(let includedKeys = keys.length; includedKeys > 0; includedKeys--){
        const serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 *
 * @deprecated This function is no longer used by the SDK and will be removed in a future major version.
 */ function dropUndefinedKeys(inputValue) {
    // This map keeps track of what already visited nodes map to.
    // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
    // references as the input object.
    const memoizationMap = new Map();
    // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
    return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
    // Early return for primitive values
    if (inputValue === null || typeof inputValue !== 'object') {
        return inputValue;
    }
    // Check memo map first for all object types
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
        return memoVal;
    }
    // handle arrays
    if (Array.isArray(inputValue)) {
        const returnValue = [];
        // Store mapping to handle circular references
        memoizationMap.set(inputValue, returnValue);
        inputValue.forEach((value)=>{
            returnValue.push(_dropUndefinedKeys(value, memoizationMap));
        });
        return returnValue;
    }
    if (isPojo(inputValue)) {
        const returnValue = {};
        // Store mapping to handle circular references
        memoizationMap.set(inputValue, returnValue);
        const keys = Object.keys(inputValue);
        keys.forEach((key)=>{
            const val = inputValue[key];
            if (val !== undefined) {
                returnValue[key] = _dropUndefinedKeys(val, memoizationMap);
            }
        });
        return returnValue;
    }
    // For other object types, return as is
    return inputValue;
}
function isPojo(input) {
    // Plain objects have Object as constructor or no constructor
    const constructor = input.constructor;
    return constructor === Object || constructor === undefined;
}
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */ function objectify(wat) {
    let objectified;
    switch(true){
        // this will catch both undefined and null
        case wat == undefined:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === 'symbol' || typeof wat === 'bigint':
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(wat):
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}
;
 //# sourceMappingURL=object.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addContextToFrame": (()=>addContextToFrame),
    "addExceptionMechanism": (()=>addExceptionMechanism),
    "addExceptionTypeValue": (()=>addExceptionTypeValue),
    "checkOrSetAlreadyCaught": (()=>checkOrSetAlreadyCaught),
    "getEventDescription": (()=>getEventDescription),
    "parseSemver": (()=>parseSemver),
    "uuid4": (()=>uuid4)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
;
function getCrypto() {
    const gbl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    return gbl.crypto || gbl.msCrypto;
}
/**
 * UUID4 generator
 * @param crypto Object that provides the crypto API.
 * @returns string Generated UUID4.
 */ function uuid4(crypto = getCrypto()) {
    let getRandomByte = ()=>Math.random() * 16;
    try {
        if (crypto?.randomUUID) {
            return crypto.randomUUID().replace(/-/g, '');
        }
        if (crypto?.getRandomValues) {
            getRandomByte = ()=>{
                // crypto.getRandomValues might return undefined instead of the typed array
                // in old Chromium versions (e.g. 23.0.1235.0 (151422))
                // However, `typedArray` is still filled in-place.
                // @see https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#typedarray
                const typedArray = new Uint8Array(1);
                crypto.getRandomValues(typedArray);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return typedArray[0];
            };
        }
    } catch (_) {
    // some runtimes can crash invoking crypto
    // https://github.com/getsentry/sentry-javascript/issues/8935
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
    return ([
        1e7
    ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c)=>// eslint-disable-next-line no-bitwise
        (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
}
function getFirstException(event) {
    return event.exception?.values?.[0];
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */ function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
        return message;
    }
    const firstException = getFirstException(event);
    if (firstException) {
        if (firstException.type && firstException.value) {
            return `${firstException.type}: ${firstException.value}`;
        }
        return firstException.type || firstException.value || eventId || '<unknown>';
    }
    return eventId || '<unknown>';
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */ function addExceptionTypeValue(event, value, type) {
    const exception = event.exception = event.exception || {};
    const values = exception.values = exception.values || [];
    const firstException = values[0] = values[0] || {};
    if (!firstException.value) {
        firstException.value = value || '';
    }
    if (!firstException.type) {
        firstException.type = type || 'Error';
    }
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */ function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
        return;
    }
    const defaultMechanism = {
        type: 'generic',
        handled: true
    };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = {
        ...defaultMechanism,
        ...currentMechanism,
        ...newMechanism
    };
    if (newMechanism && 'data' in newMechanism) {
        const mergedData = {
            ...currentMechanism?.data,
            ...newMechanism.data
        };
        firstException.mechanism.data = mergedData;
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Represents Semantic Versioning object
 */ function _parseInt(input) {
    return parseInt(input || '', 10);
}
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */ function parseSemver(input) {
    const match = input.match(SEMVER_REGEXP) || [];
    const major = _parseInt(match[1]);
    const minor = _parseInt(match[2]);
    const patch = _parseInt(match[3]);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4]
    };
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */ function addContextToFrame(lines, frame, linesOfContext = 5) {
    // When there is no line number in the frame, attaching context is nonsensical and will even break grouping
    if (frame.lineno === undefined) {
        return;
    }
    const maxLines = lines.length;
    const sourceLine = Math.max(Math.min(maxLines - 1, frame.lineno - 1), 0);
    frame.pre_context = lines.slice(Math.max(0, sourceLine - linesOfContext), sourceLine).map((line)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snipLine"])(line, 0));
    // We guard here to ensure this is not larger than the existing number of lines
    const lineIndex = Math.min(maxLines - 1, sourceLine);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    frame.context_line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snipLine"])(lines[lineIndex], frame.colno || 0);
    frame.post_context = lines.slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext).map((line)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snipLine"])(line, 0));
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */ function checkOrSetAlreadyCaught(exception) {
    if (isAlreadyCaptured(exception)) {
        return true;
    }
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(exception, '__sentry_captured__', true);
    } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}
function isAlreadyCaptured(exception) {
    try {
        return exception.__sentry_captured__;
    } catch  {} // eslint-disable-line no-empty
}
;
 //# sourceMappingURL=misc.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browserPerformanceTimeOrigin": (()=>browserPerformanceTimeOrigin),
    "dateTimestampInSeconds": (()=>dateTimestampInSeconds),
    "timestampInSeconds": (()=>timestampInSeconds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
const ONE_SECOND_IN_MS = 1000;
/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */ /**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */ function dateTimestampInSeconds() {
    return Date.now() / ONE_SECOND_IN_MS;
}
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */ function createUnixTimestampInSecondsFunc() {
    const { performance } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    if (!performance?.now) {
        return dateTimestampInSeconds;
    }
    // Some browser and environments don't have a timeOrigin, so we fallback to
    // using Date.now() to compute the starting time.
    const approxStartingTimeOrigin = Date.now() - performance.now();
    const timeOrigin = performance.timeOrigin == undefined ? approxStartingTimeOrigin : performance.timeOrigin;
    // performance.now() is a monotonic clock, which means it starts at 0 when the process begins. To get the current
    // wall clock time (actual UNIX timestamp), we need to add the starting time origin and the current time elapsed.
    //
    // TODO: This does not account for the case where the monotonic clock that powers performance.now() drifts from the
    // wall clock time, which causes the returned timestamp to be inaccurate. We should investigate how to detect and
    // correct for this.
    // See: https://github.com/getsentry/sentry-javascript/issues/2590
    // See: https://github.com/mdn/content/issues/4713
    // See: https://dev.to/noamr/when-a-millisecond-is-not-a-millisecond-3h6
    return ()=>{
        return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
    };
}
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */ const timestampInSeconds = createUnixTimestampInSecondsFunc();
/**
 * Cached result of getBrowserTimeOrigin.
 */ let cachedTimeOrigin;
/**
 * Gets the time origin and the mode used to determine it.
 */ function getBrowserTimeOrigin() {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    const { performance } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    if (!performance?.now) {
        return [
            undefined,
            'none'
        ];
    }
    const threshold = 3600 * 1000;
    const performanceNow = performance.now();
    const dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
    const timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    const navigationStart = performance.timing?.navigationStart;
    const hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    const navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            return [
                performance.timeOrigin,
                'timeOrigin'
            ];
        } else {
            return [
                navigationStart,
                'navigationStart'
            ];
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    return [
        dateNow,
        'dateNow'
    ];
}
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */ function browserPerformanceTimeOrigin() {
    if (!cachedTimeOrigin) {
        cachedTimeOrigin = getBrowserTimeOrigin();
    }
    return cachedTimeOrigin[0];
}
;
 //# sourceMappingURL=time.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/session.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "closeSession": (()=>closeSession),
    "makeSession": (()=>makeSession),
    "updateSession": (()=>updateSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
;
;
/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */ function makeSession(context) {
    // Both timestamp and started are in seconds since the UNIX epoch.
    const startingTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const session = {
        sid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])(),
        init: true,
        timestamp: startingTime,
        started: startingTime,
        duration: 0,
        status: 'ok',
        errors: 0,
        ignoreDuration: false,
        toJSON: ()=>sessionToJSON(session)
    };
    if (context) {
        updateSession(session, context);
    }
    return session;
}
/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see Client.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */ // eslint-disable-next-line complexity
function updateSession(session, context = {}) {
    if (context.user) {
        if (!session.ipAddress && context.user.ip_address) {
            session.ipAddress = context.user.ip_address;
        }
        if (!session.did && !context.did) {
            session.did = context.user.id || context.user.email || context.user.username;
        }
    }
    session.timestamp = context.timestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    if (context.abnormal_mechanism) {
        session.abnormal_mechanism = context.abnormal_mechanism;
    }
    if (context.ignoreDuration) {
        session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
        // Good enough uuid validation. — Kamil
        session.sid = context.sid.length === 32 ? context.sid : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
    }
    if (context.init !== undefined) {
        session.init = context.init;
    }
    if (!session.did && context.did) {
        session.did = `${context.did}`;
    }
    if (typeof context.started === 'number') {
        session.started = context.started;
    }
    if (session.ignoreDuration) {
        session.duration = undefined;
    } else if (typeof context.duration === 'number') {
        session.duration = context.duration;
    } else {
        const duration = session.timestamp - session.started;
        session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
        session.release = context.release;
    }
    if (context.environment) {
        session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
        session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
        session.userAgent = context.userAgent;
    }
    if (typeof context.errors === 'number') {
        session.errors = context.errors;
    }
    if (context.status) {
        session.status = context.status;
    }
}
/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */ function closeSession(session, status) {
    let context = {};
    if (status) {
        context = {
            status
        };
    } else if (session.status === 'ok') {
        context = {
            status: 'exited'
        };
    }
    updateSession(session, context);
}
/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */ function sessionToJSON(session) {
    return {
        sid: `${session.sid}`,
        init: session.init,
        // Make sure that sec is converted to ms for date constructor
        started: new Date(session.started * 1000).toISOString(),
        timestamp: new Date(session.timestamp * 1000).toISOString(),
        status: session.status,
        errors: session.errors,
        did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
        duration: session.duration,
        abnormal_mechanism: session.abnormal_mechanism,
        attrs: {
            release: session.release,
            environment: session.environment,
            ip_address: session.ipAddress,
            user_agent: session.userAgent
        }
    };
}
;
 //# sourceMappingURL=session.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Shallow merge two objects.
 * Does not mutate the passed in objects.
 * Undefined/empty values in the merge object will overwrite existing values.
 *
 * By default, this merges 2 levels deep.
 */ __turbopack_context__.s({
    "merge": (()=>merge)
});
function merge(initialObj, mergeObj, levels = 2) {
    // If the merge value is not an object, or we have no merge levels left,
    // we just set the value to the merge value
    if (!mergeObj || typeof mergeObj !== 'object' || levels <= 0) {
        return mergeObj;
    }
    // If the merge object is an empty object, and the initial object is not undefined, we return the initial object
    if (initialObj && Object.keys(mergeObj).length === 0) {
        return initialObj;
    }
    // Clone object
    const output = {
        ...initialObj
    };
    // Merge values into output, resursively
    for(const key in mergeObj){
        if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
            output[key] = merge(output[key], mergeObj[key], levels - 1);
        }
    }
    return output;
}
;
 //# sourceMappingURL=merge.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_getSpanForScope": (()=>_getSpanForScope),
    "_setSpanForScope": (()=>_setSpanForScope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
;
const SCOPE_SPAN_FIELD = '_sentrySpan';
/**
 * Set the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */ function _setSpanForScope(scope, span) {
    if (span) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(scope, SCOPE_SPAN_FIELD, span);
    } else {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete scope[SCOPE_SPAN_FIELD];
    }
}
/**
 * Get the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */ function _getSpanForScope(scope) {
    return scope[SCOPE_SPAN_FIELD];
}
;
 //# sourceMappingURL=spanOnScope.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateSpanId": (()=>generateSpanId),
    "generateTraceId": (()=>generateTraceId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
;
/**
 * Generate a random, valid trace ID.
 */ function generateTraceId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
}
/**
 * Generate a random, valid span ID.
 */ function generateSpanId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])().substring(16);
}
;
 //# sourceMappingURL=propagationContext.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Scope": (()=>Scope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
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
 * Default value for maximum number of breadcrumbs added to an event.
 */ const DEFAULT_MAX_BREADCRUMBS = 100;
/**
 * A context to be used for capturing an event.
 * This can either be a Scope, or a partial ScopeContext,
 * or a callback that receives the current scope and returns a new scope to use.
 */ /**
 * Holds additional event information.
 */ class Scope {
    /** Flag if notifying is happening. */ /** Callback for client to receive scope changes. */ /** Callback list that will be called during event processing. */ /** Array of breadcrumbs. */ /** User */ /** Tags */ /** Extra */ /** Contexts */ /** Attachments */ /** Propagation Context for distributed tracing */ /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */ /** Fingerprint */ /** Severity */ /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */ /** Session */ /** The client on this scope */ /** Contains the last event id of a captured event.  */ // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
    constructor(){
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._attachments = [];
        this._user = {};
        this._tags = {};
        this._extra = {};
        this._contexts = {};
        this._sdkProcessingMetadata = {};
        this._propagationContext = {
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: Math.random()
        };
    }
    /**
   * Clone all data from this scope into a new scope.
   */ clone() {
        const newScope = new Scope();
        newScope._breadcrumbs = [
            ...this._breadcrumbs
        ];
        newScope._tags = {
            ...this._tags
        };
        newScope._extra = {
            ...this._extra
        };
        newScope._contexts = {
            ...this._contexts
        };
        if (this._contexts.flags) {
            // We need to copy the `values` array so insertions on a cloned scope
            // won't affect the original array.
            newScope._contexts.flags = {
                values: [
                    ...this._contexts.flags.values
                ]
            };
        }
        newScope._user = this._user;
        newScope._level = this._level;
        newScope._session = this._session;
        newScope._transactionName = this._transactionName;
        newScope._fingerprint = this._fingerprint;
        newScope._eventProcessors = [
            ...this._eventProcessors
        ];
        newScope._attachments = [
            ...this._attachments
        ];
        newScope._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        };
        newScope._propagationContext = {
            ...this._propagationContext
        };
        newScope._client = this._client;
        newScope._lastEventId = this._lastEventId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(newScope, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(this));
        return newScope;
    }
    /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */ setClient(client) {
        this._client = client;
    }
    /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */ setLastEventId(lastEventId) {
        this._lastEventId = lastEventId;
    }
    /**
   * Get the client assigned to this scope.
   */ getClient() {
        return this._client;
    }
    /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */ lastEventId() {
        return this._lastEventId;
    }
    /**
   * @inheritDoc
   */ addScopeListener(callback) {
        this._scopeListeners.push(callback);
    }
    /**
   * Add an event processor that will be called before an event is sent.
   */ addEventProcessor(callback) {
        this._eventProcessors.push(callback);
        return this;
    }
    /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */ setUser(user) {
        // If null is passed we want to unset everything, but still define keys,
        // so that later down in the pipeline any existing values are cleared.
        this._user = user || {
            email: undefined,
            id: undefined,
            ip_address: undefined,
            username: undefined
        };
        if (this._session) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSession"])(this._session, {
                user
            });
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Get the user from this scope.
   */ getUser() {
        return this._user;
    }
    /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */ setTags(tags) {
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set a single tag that will be sent as tags data with the event.
   */ setTag(key, value) {
        this._tags = {
            ...this._tags,
            [key]: value
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */ setExtras(extras) {
        this._extra = {
            ...this._extra,
            ...extras
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */ setExtra(key, extra) {
        this._extra = {
            ...this._extra,
            [key]: extra
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */ setFingerprint(fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets the level on the scope for future events.
   */ setLevel(level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */ setTransactionName(name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */ setContext(key, context) {
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        } else {
            this._contexts[key] = context;
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set the session for the scope.
   */ setSession(session) {
        if (!session) {
            delete this._session;
        } else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Get the session from the scope.
   */ getSession() {
        return this._session;
    }
    /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */ update(captureContext) {
        if (!captureContext) {
            return this;
        }
        const scopeToMerge = typeof captureContext === 'function' ? captureContext(this) : captureContext;
        const scopeInstance = scopeToMerge instanceof Scope ? scopeToMerge.getScopeData() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(scopeToMerge) ? captureContext : undefined;
        const { tags, extra, user, contexts, level, fingerprint = [], propagationContext } = scopeInstance || {};
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._extra = {
            ...this._extra,
            ...extra
        };
        this._contexts = {
            ...this._contexts,
            ...contexts
        };
        if (user && Object.keys(user).length) {
            this._user = user;
        }
        if (level) {
            this._level = level;
        }
        if (fingerprint.length) {
            this._fingerprint = fingerprint;
        }
        if (propagationContext) {
            this._propagationContext = propagationContext;
        }
        return this;
    }
    /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */ clear() {
        // client is not cleared here on purpose!
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._session = undefined;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(this, undefined);
        this._attachments = [];
        this.setPropagationContext({
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: Math.random()
        });
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */ addBreadcrumb(breadcrumb, maxBreadcrumbs) {
        const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        const mergedBreadcrumb = {
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampInSeconds"])(),
            ...breadcrumb,
            // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
            message: breadcrumb.message ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(breadcrumb.message, 2048) : breadcrumb.message
        };
        this._breadcrumbs.push(mergedBreadcrumb);
        if (this._breadcrumbs.length > maxCrumbs) {
            this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
            this._client?.recordDroppedEvent('buffer_overflow', 'log_item');
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Get the last breadcrumb of the scope.
   */ getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    /**
   * Clear all breadcrumbs from the scope.
   */ clearBreadcrumbs() {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Add an attachment to the scope.
   */ addAttachment(attachment) {
        this._attachments.push(attachment);
        return this;
    }
    /**
   * Clear all attachments from the scope.
   */ clearAttachments() {
        this._attachments = [];
        return this;
    }
    /**
   * Get the data of this scope, which should be applied to an event during processing.
   */ getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(this)
        };
    }
    /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */ setSDKProcessingMetadata(newData) {
        this._sdkProcessingMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(this._sdkProcessingMetadata, newData, 2);
        return this;
    }
    /**
   * Add propagation context to the scope, used for distributed tracing
   */ setPropagationContext(context) {
        this._propagationContext = context;
        return this;
    }
    /**
   * Get propagation context from the scope, used for distributed tracing
   */ getPropagationContext() {
        return this._propagationContext;
    }
    /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */ captureException(exception, hint) {
        const eventId = hint?.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        if (!this._client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('No client configured on scope - will not capture exception!');
            return eventId;
        }
        const syntheticException = new Error('Sentry syntheticException');
        this._client.captureException(exception, {
            originalException: exception,
            syntheticException,
            ...hint,
            event_id: eventId
        }, this);
        return eventId;
    }
    /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */ captureMessage(message, level, hint) {
        const eventId = hint?.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        if (!this._client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('No client configured on scope - will not capture message!');
            return eventId;
        }
        const syntheticException = new Error(message);
        this._client.captureMessage(message, level, {
            originalException: message,
            syntheticException,
            ...hint,
            event_id: eventId
        }, this);
        return eventId;
    }
    /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */ captureEvent(event, hint) {
        const eventId = hint?.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        if (!this._client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('No client configured on scope - will not capture event!');
            return eventId;
        }
        this._client.captureEvent(event, {
            ...hint,
            event_id: eventId
        }, this);
        return eventId;
    }
    /**
   * This will be called on every set call.
   */ _notifyScopeListeners() {
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach((callback)=>{
                callback(this);
            });
            this._notifyingListeners = false;
        }
    }
}
;
 //# sourceMappingURL=scope.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/defaultScopes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDefaultCurrentScope": (()=>getDefaultCurrentScope),
    "getDefaultIsolationScope": (()=>getDefaultIsolationScope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
;
;
/** Get the default current scope. */ function getDefaultCurrentScope() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])('defaultCurrentScope', ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]());
}
/** Get the default isolation scope. */ function getDefaultIsolationScope() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])('defaultIsolationScope', ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]());
}
;
 //# sourceMappingURL=defaultScopes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AsyncContextStack": (()=>AsyncContextStack),
    "getStackAsyncContextStrategy": (()=>getStackAsyncContextStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$defaultScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/defaultScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
;
;
;
;
/**
 * This is an object that holds a stack of scopes.
 */ class AsyncContextStack {
    constructor(scope, isolationScope){
        let assignedScope;
        if (!scope) {
            assignedScope = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]();
        } else {
            assignedScope = scope;
        }
        let assignedIsolationScope;
        if (!isolationScope) {
            assignedIsolationScope = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]();
        } else {
            assignedIsolationScope = isolationScope;
        }
        // scope stack for domains or the process
        this._stack = [
            {
                scope: assignedScope
            }
        ];
        this._isolationScope = assignedIsolationScope;
    }
    /**
   * Fork a scope for the stack.
   */ withScope(callback) {
        const scope = this._pushScope();
        let maybePromiseResult;
        try {
            maybePromiseResult = callback(scope);
        } catch (e) {
            this._popScope();
            throw e;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(maybePromiseResult)) {
            // @ts-expect-error - isThenable returns the wrong type
            return maybePromiseResult.then((res)=>{
                this._popScope();
                return res;
            }, (e)=>{
                this._popScope();
                throw e;
            });
        }
        this._popScope();
        return maybePromiseResult;
    }
    /**
   * Get the client of the stack.
   */ getClient() {
        return this.getStackTop().client;
    }
    /**
   * Returns the scope of the top stack.
   */ getScope() {
        return this.getStackTop().scope;
    }
    /**
   * Get the isolation scope for the stack.
   */ getIsolationScope() {
        return this._isolationScope;
    }
    /**
   * Returns the topmost scope layer in the order domain > local > process.
   */ getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    /**
   * Push a scope to the stack.
   */ _pushScope() {
        // We want to clone the content of prev scope
        const scope = this.getScope().clone();
        this._stack.push({
            client: this.getClient(),
            scope
        });
        return scope;
    }
    /**
   * Pop a scope from the stack.
   */ _popScope() {
        if (this._stack.length <= 1) return false;
        return !!this._stack.pop();
    }
}
/**
 * Get the global async context stack.
 * This will be removed during the v8 cycle and is only here to make migration easier.
 */ function getAsyncContextStack() {
    const registry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const sentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(registry);
    return sentry.stack = sentry.stack || new AsyncContextStack((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$defaultScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultCurrentScope"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$defaultScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultIsolationScope"])());
}
function withScope(callback) {
    return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope, callback) {
    const stack = getAsyncContextStack();
    return stack.withScope(()=>{
        stack.getStackTop().scope = scope;
        return callback(scope);
    });
}
function withIsolationScope(callback) {
    return getAsyncContextStack().withScope(()=>{
        return callback(getAsyncContextStack().getIsolationScope());
    });
}
/**
 * Get the stack-based async context strategy.
 */ function getStackAsyncContextStrategy() {
    return {
        withIsolationScope,
        withScope,
        withSetScope,
        withSetIsolationScope: (_isolationScope, callback)=>{
            return withIsolationScope(callback);
        },
        getCurrentScope: ()=>getAsyncContextStack().getScope(),
        getIsolationScope: ()=>getAsyncContextStack().getIsolationScope()
    };
}
;
 //# sourceMappingURL=stackStrategy.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAsyncContextStrategy": (()=>getAsyncContextStrategy),
    "setAsyncContextStrategy": (()=>setAsyncContextStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$stackStrategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js [app-client] (ecmascript)");
;
;
/**
 * @private Private API with no semver guarantees!
 *
 * Sets the global async context strategy
 */ function setAsyncContextStrategy(strategy) {
    // Get main carrier (global for every environment)
    const registry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const sentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(registry);
    sentry.acs = strategy;
}
/**
 * Get the current async context strategy.
 * If none has been setup, the default will be used.
 */ function getAsyncContextStrategy(carrier) {
    const sentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(carrier);
    if (sentry.acs) {
        return sentry.acs;
    }
    // Otherwise, use the default one (stack)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$stackStrategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackAsyncContextStrategy"])();
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getClient": (()=>getClient),
    "getCurrentScope": (()=>getCurrentScope),
    "getGlobalScope": (()=>getGlobalScope),
    "getIsolationScope": (()=>getIsolationScope),
    "getTraceContextFromScope": (()=>getTraceContextFromScope),
    "withIsolationScope": (()=>withIsolationScope),
    "withScope": (()=>withScope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Get the currently active scope.
 */ function getCurrentScope() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    return acs.getCurrentScope();
}
/**
 * Get the currently active isolation scope.
 * The isolation scope is active for the current execution context.
 */ function getIsolationScope() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    return acs.getIsolationScope();
}
/**
 * Get the global scope.
 * This scope is applied to _all_ events.
 */ function getGlobalScope() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])('globalScope', ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]());
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 */ /**
 * Either creates a new active scope, or sets the given scope as active scope in the given callback.
 */ function withScope(...rest) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    // If a scope is defined, we want to make this the active scope instead of the default one
    if (rest.length === 2) {
        const [scope, callback] = rest;
        if (!scope) {
            return acs.withScope(callback);
        }
        return acs.withSetScope(scope, callback);
    }
    return acs.withScope(rest[0]);
}
/**
 * Attempts to fork the current isolation scope and the current scope based on the current async context strategy. If no
 * async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
 * case, for example, in the browser).
 *
 * Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.
 *
 * This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
 * applications directly because it comes with pitfalls. Use at your own risk!
 */ /**
 * Either creates a new active isolation scope, or sets the given isolation scope as active scope in the given callback.
 */ function withIsolationScope(...rest) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    // If a scope is defined, we want to make this the active scope instead of the default one
    if (rest.length === 2) {
        const [isolationScope, callback] = rest;
        if (!isolationScope) {
            return acs.withIsolationScope(callback);
        }
        return acs.withSetIsolationScope(isolationScope, callback);
    }
    return acs.withIsolationScope(rest[0]);
}
/**
 * Get the currently active client.
 */ function getClient() {
    return getCurrentScope().getClient();
}
/**
 * Get a trace context for the given scope.
 */ function getTraceContextFromScope(scope) {
    const propagationContext = scope.getPropagationContext();
    const { traceId, parentSpanId, propagationSpanId } = propagationContext;
    const traceContext = {
        trace_id: traceId,
        span_id: propagationSpanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])()
    };
    if (parentSpanId) {
        traceContext.parent_span_id = parentSpanId;
    }
    return traceContext;
}
;
 //# sourceMappingURL=currentScopes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_ENVIRONMENT": (()=>DEFAULT_ENVIRONMENT)
});
const DEFAULT_ENVIRONMENT = 'production';
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SyncPromise": (()=>SyncPromise),
    "rejectedSyncPromise": (()=>rejectedSyncPromise),
    "resolvedSyncPromise": (()=>resolvedSyncPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
;
/* eslint-disable @typescript-eslint/no-explicit-any */ /** SyncPromise internal states */ var States;
(function(States) {
    /** Pending */ const PENDING = 0;
    States[States["PENDING"] = PENDING] = "PENDING";
    /** Resolved / OK */ const RESOLVED = 1;
    States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
    /** Rejected / Error */ const REJECTED = 2;
    States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
// Overloads so we can call resolvedSyncPromise without arguments and generic argument
/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */ function resolvedSyncPromise(value) {
    return new SyncPromise((resolve)=>{
        resolve(value);
    });
}
/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */ function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject)=>{
        reject(reason);
    });
}
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */ class SyncPromise {
    constructor(executor){
        this._state = States.PENDING;
        this._handlers = [];
        this._runExecutor(executor);
    }
    /** @inheritdoc */ then(onfulfilled, onrejected) {
        return new SyncPromise((resolve, reject)=>{
            this._handlers.push([
                false,
                (result)=>{
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                    } else {
                        try {
                            resolve(onfulfilled(result));
                        } catch (e) {
                            reject(e);
                        }
                    }
                },
                (reason)=>{
                    if (!onrejected) {
                        reject(reason);
                    } else {
                        try {
                            resolve(onrejected(reason));
                        } catch (e) {
                            reject(e);
                        }
                    }
                }
            ]);
            this._executeHandlers();
        });
    }
    /** @inheritdoc */ catch(onrejected) {
        return this.then((val)=>val, onrejected);
    }
    /** @inheritdoc */ finally(onfinally) {
        return new SyncPromise((resolve, reject)=>{
            let val;
            let isRejected;
            return this.then((value)=>{
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, (reason)=>{
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(()=>{
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    }
    /** Excute the resolve/reject handlers. */ _executeHandlers() {
        if (this._state === States.PENDING) {
            return;
        }
        const cachedHandlers = this._handlers.slice();
        this._handlers = [];
        cachedHandlers.forEach((handler)=>{
            if (handler[0]) {
                return;
            }
            if (this._state === States.RESOLVED) {
                handler[1](this._value);
            }
            if (this._state === States.REJECTED) {
                handler[2](this._value);
            }
            handler[0] = true;
        });
    }
    /** Run the executor for the SyncPromise. */ _runExecutor(executor) {
        const setResult = (state, value)=>{
            if (this._state !== States.PENDING) {
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(value)) {
                void value.then(resolve, reject);
                return;
            }
            this._state = state;
            this._value = value;
            this._executeHandlers();
        };
        const resolve = (value)=>{
            setResult(States.RESOLVED, value);
        };
        const reject = (reason)=>{
            setResult(States.REJECTED, reason);
        };
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
}
;
 //# sourceMappingURL=syncpromise.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/eventProcessors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "notifyEventProcessors": (()=>notifyEventProcessors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Process an array of event processors, returning the processed event (or `null` if the event was dropped).
 */ function notifyEventProcessors(processors, event, hint, index = 0) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncPromise"]((resolve, reject)=>{
        const processor = processors[index];
        if (event === null || typeof processor !== 'function') {
            resolve(event);
        } else {
            const result = processor({
                ...event
            }, hint);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && processor.id && result === null && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Event processor "${processor.id}" dropped event`);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                void result.then((final)=>notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
            } else {
                void notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
            }
        }
    });
}
;
 //# sourceMappingURL=eventProcessors.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDebugImagesForResources": (()=>getDebugImagesForResources),
    "getFilenameToDebugIdMap": (()=>getFilenameToDebugIdMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
let parsedStackResults;
let lastKeysCount;
let cachedFilenameDebugIds;
/**
 * Returns a map of filenames to debug identifiers.
 */ function getFilenameToDebugIdMap(stackParser) {
    const debugIdMap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]._sentryDebugIds;
    if (!debugIdMap) {
        return {};
    }
    const debugIdKeys = Object.keys(debugIdMap);
    // If the count of registered globals hasn't changed since the last call, we
    // can just return the cached result.
    if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) {
        return cachedFilenameDebugIds;
    }
    lastKeysCount = debugIdKeys.length;
    // Build a map of filename -> debug_id.
    cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey)=>{
        if (!parsedStackResults) {
            parsedStackResults = {};
        }
        const result = parsedStackResults[stackKey];
        if (result) {
            acc[result[0]] = result[1];
        } else {
            const parsedStack = stackParser(stackKey);
            for(let i = parsedStack.length - 1; i >= 0; i--){
                const stackFrame = parsedStack[i];
                const filename = stackFrame?.filename;
                const debugId = debugIdMap[stackKey];
                if (filename && debugId) {
                    acc[filename] = debugId;
                    parsedStackResults[stackKey] = [
                        filename,
                        debugId
                    ];
                    break;
                }
            }
        }
        return acc;
    }, {});
    return cachedFilenameDebugIds;
}
/**
 * Returns a list of debug images for the given resources.
 */ function getDebugImagesForResources(stackParser, resource_paths) {
    const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
    if (!filenameDebugIdMap) {
        return [];
    }
    const images = [];
    for (const path of resource_paths){
        if (path && filenameDebugIdMap[path]) {
            images.push({
                type: 'sourcemap',
                code_file: path,
                debug_id: filenameDebugIdMap[path]
            });
        }
    }
    return images;
}
;
 //# sourceMappingURL=debug-ids.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UNKNOWN_FUNCTION": (()=>UNKNOWN_FUNCTION),
    "createStackParser": (()=>createStackParser),
    "getFramesFromEvent": (()=>getFramesFromEvent),
    "getFunctionName": (()=>getFunctionName),
    "stackParserFromStackParserOptions": (()=>stackParserFromStackParserOptions),
    "stripSentryFramesAndReverse": (()=>stripSentryFramesAndReverse)
});
const STACKTRACE_FRAME_LIMIT = 50;
const UNKNOWN_FUNCTION = '?';
// Used to sanitize webpack (error: *) wrapped stack errors
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;
/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */ function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a, b)=>a[0] - b[0]).map((p)=>p[1]);
    return (stack, skipFirstLines = 0, framesToPop = 0)=>{
        const frames = [];
        const lines = stack.split('\n');
        for(let i = skipFirstLines; i < lines.length; i++){
            const line = lines[i];
            // Ignore lines over 1kb as they are unlikely to be stack frames.
            // Many of the regular expressions use backtracking which results in run time that increases exponentially with
            // input size. Huge strings can result in hangs/Denial of Service:
            // https://github.com/getsentry/sentry-javascript/issues/2286
            if (line.length > 1024) {
                continue;
            }
            // https://github.com/getsentry/sentry-javascript/issues/5459
            // Remove webpack (error: *) wrappers
            const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, '$1') : line;
            // https://github.com/getsentry/sentry-javascript/issues/7813
            // Skip Error: lines
            if (cleanedLine.match(/\S*Error: /)) {
                continue;
            }
            for (const parser of sortedParsers){
                const frame = parser(cleanedLine);
                if (frame) {
                    frames.push(frame);
                    break;
                }
            }
            if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
                break;
            }
        }
        return stripSentryFramesAndReverse(frames.slice(framesToPop));
    };
}
/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */ function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
        return createStackParser(...stackParser);
    }
    return stackParser;
}
/**
 * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
 * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
 * function that caused the crash is the last frame in the array.
 * @hidden
 */ function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
        return [];
    }
    const localStack = Array.from(stack);
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (/sentryWrapped/.test(getLastStackFrame(localStack).function || '')) {
        localStack.pop();
    }
    // Reversing in the middle of the procedure allows us to just pop the values off the stack
    localStack.reverse();
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || '')) {
        localStack.pop();
        // When using synthetic events, we will have a 2 levels deep stack, as `new Error('Sentry syntheticException')`
        // is produced within the scope itself, making it:
        //
        //   Sentry.captureException()
        //   scope.captureException()
        //
        // instead of just the top `Sentry` call itself.
        // This forces us to possibly strip an additional frame in the exact same was as above.
        if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || '')) {
            localStack.pop();
        }
    }
    return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame)=>({
            ...frame,
            filename: frame.filename || getLastStackFrame(localStack).filename,
            function: frame.function || UNKNOWN_FUNCTION
        }));
}
function getLastStackFrame(arr) {
    return arr[arr.length - 1] || {};
}
const defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */ function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
/**
 * Get's stack frames from an event without needing to check for undefined properties.
 */ function getFramesFromEvent(event) {
    const exception = event.exception;
    if (exception) {
        const frames = [];
        try {
            // @ts-expect-error Object could be undefined
            exception.values.forEach((value)=>{
                // @ts-expect-error Value could be undefined
                if (value.stacktrace.frames) {
                    // @ts-expect-error Value could be undefined
                    frames.push(...value.stacktrace.frames);
                }
            });
            return frames;
        } catch (_oO) {
            return undefined;
        }
    }
    return undefined;
}
;
 //# sourceMappingURL=stacktrace.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/normalize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalize": (()=>normalize),
    "normalizeToSize": (()=>normalizeToSize),
    "normalizeUrlToBase": (()=>normalizeUrlToBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
;
;
;
/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normalized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input, depth = 100, maxProperties = +Infinity) {
    try {
        // since we're at the outermost level, we don't provide a key
        return visit('', input, depth, maxProperties);
    } catch (err) {
        return {
            ERROR: `**non-serializable** (${err})`
        };
    }
}
/** JSDoc */ function normalizeToSize(// eslint-disable-next-line @typescript-eslint/no-explicit-any
object, // Default Node.js REPL depth
depth = 3, // 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize = 100 * 1024) {
    const normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
}
/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */ function visit(key, value, depth = +Infinity, maxProperties = +Infinity, memo = memoBuilder()) {
    const [memoize, unmemoize] = memo;
    // Get the simple cases out of the way first
    if (value == null || // this matches null and undefined -> eqeq not eqeqeq
    [
        'boolean',
        'string'
    ].includes(typeof value) || typeof value === 'number' && Number.isFinite(value)) {
        return value;
    }
    const stringified = stringifyValue(key, value);
    // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
    // Everything else will have already been serialized, so if we don't see that pattern, we're done.
    if (!stringified.startsWith('[object ')) {
        return stringified;
    }
    // From here on, we can assert that `value` is either an object or an array.
    // Do not normalize objects that we know have already been normalized. As a general rule, the
    // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
    // have already been normalized.
    if (value['__sentry_skip_normalization__']) {
        return value;
    }
    // We can set `__sentry_override_normalization_depth__` on an object to ensure that from there
    // We keep a certain amount of depth.
    // This should be used sparingly, e.g. we use it for the redux integration to ensure we get a certain amount of state.
    const remainingDepth = typeof value['__sentry_override_normalization_depth__'] === 'number' ? value['__sentry_override_normalization_depth__'] : depth;
    // We're also done if we've reached the max depth
    if (remainingDepth === 0) {
        // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
        return stringified.replace('object ', '');
    }
    // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
    if (memoize(value)) {
        return '[Circular ~]';
    }
    // If the value has a `toJSON` method, we call it to extract more information
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
        try {
            const jsonValue = valueWithToJSON.toJSON();
            // We need to normalize the return value of `.toJSON()` in case it has circular references
            return visit('', jsonValue, remainingDepth - 1, maxProperties, memo);
        } catch (err) {
        // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
        }
    }
    // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
    // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
    // property/entry, and keep track of the number of items we add to it.
    const normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
    // properties are non-enumerable and otherwise would get missed.
    const visitable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToPlainObject"])(value);
    for(const visitKey in visitable){
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
            continue;
        }
        if (numAdded >= maxProperties) {
            normalized[visitKey] = '[MaxProperties ~]';
            break;
        }
        // Recursively visit all the child nodes
        const visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
        numAdded++;
    }
    // Once we've visited all the branches, remove the parent from memo storage
    unmemoize(value);
    // Return accumulated values
    return normalized;
}
/* eslint-disable complexity */ /**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */ function stringifyValue(key, // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
// our internal use, it'll do
value) {
    try {
        if (key === 'domain' && value && typeof value === 'object' && value._events) {
            return '[Domain]';
        }
        if (key === 'domainEmitter') {
            return '[DomainEmitter]';
        }
        // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
        // which won't throw if they are not present.
        if (typeof global !== 'undefined' && value === global) {
            return '[Global]';
        }
        // eslint-disable-next-line no-restricted-globals
        if (typeof window !== 'undefined' && value === window) {
            return '[Window]';
        }
        // eslint-disable-next-line no-restricted-globals
        if (typeof document !== 'undefined' && value === document) {
            return '[Document]';
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVueViewModel"])(value)) {
            return '[VueViewModel]';
        }
        // React's SyntheticEvent thingy
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSyntheticEvent"])(value)) {
            return '[SyntheticEvent]';
        }
        if (typeof value === 'number' && !Number.isFinite(value)) {
            return `[${value}]`;
        }
        if (typeof value === 'function') {
            return `[Function: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(value)}]`;
        }
        if (typeof value === 'symbol') {
            return `[${String(value)}]`;
        }
        // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
        if (typeof value === 'bigint') {
            return `[BigInt: ${String(value)}]`;
        }
        // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
        // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
        // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
        // we can make sure that only plain objects come out that way.
        const objName = getConstructorName(value);
        // Handle HTML Elements
        if (/^HTML(\w*)Element$/.test(objName)) {
            return `[HTMLElement: ${objName}]`;
        }
        return `[object ${objName}]`;
    } catch (err) {
        return `**non-serializable** (${err})`;
    }
}
/* eslint-enable complexity */ function getConstructorName(value) {
    const prototype = Object.getPrototypeOf(value);
    return prototype?.constructor ? prototype.constructor.name : 'null prototype';
}
/** Calculates bytes size of input string */ function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/**
 * Normalizes URLs in exceptions and stacktraces to a base path so Sentry can fingerprint
 * across platforms and working directory.
 *
 * @param url The URL to be normalized.
 * @param basePath The application base path.
 * @returns The normalized URL.
 */ function normalizeUrlToBase(url, basePath) {
    const escapedBase = basePath// Backslash to forward
    .replace(/\\/g, '/')// Escape RegExp special characters
    .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    let newUrl = url;
    try {
        newUrl = decodeURI(url);
    } catch (_Oo) {
    // Sometime this breaks
    }
    return newUrl.replace(/\\/g, '/').replace(/webpack:\/?/g, '') // Remove intermediate base path
    // eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor
    .replace(new RegExp(`(file://)?/*${escapedBase}/*`, 'ig'), 'app:///');
}
/**
 * Helper to decycle json objects
 */ function memoBuilder() {
    const inner = new WeakSet();
    function memoize(obj) {
        if (inner.has(obj)) {
            return true;
        }
        inner.add(obj);
        return false;
    }
    function unmemoize(obj) {
        inner.delete(obj);
    }
    return [
        memoize,
        unmemoize
    ];
}
;
 //# sourceMappingURL=normalize.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Use this attribute to represent the source of a span.
 * Should be one of: custom, url, route, view, component, task, unknown
 *
 */ __turbopack_context__.s({
    "SEMANTIC_ATTRIBUTE_CACHE_HIT": (()=>SEMANTIC_ATTRIBUTE_CACHE_HIT),
    "SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE": (()=>SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE),
    "SEMANTIC_ATTRIBUTE_CACHE_KEY": (()=>SEMANTIC_ATTRIBUTE_CACHE_KEY),
    "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME": (()=>SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME),
    "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD": (()=>SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD),
    "SEMANTIC_ATTRIBUTE_PROFILE_ID": (()=>SEMANTIC_ATTRIBUTE_PROFILE_ID),
    "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME": (()=>SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME),
    "SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON": (()=>SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON),
    "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT": (()=>SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT),
    "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE": (()=>SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE),
    "SEMANTIC_ATTRIBUTE_SENTRY_OP": (()=>SEMANTIC_ATTRIBUTE_SENTRY_OP),
    "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN": (()=>SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN),
    "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE": (()=>SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE),
    "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE": (()=>SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE),
    "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE": (()=>SEMANTIC_ATTRIBUTE_SENTRY_SOURCE),
    "SEMANTIC_ATTRIBUTE_URL_FULL": (()=>SEMANTIC_ATTRIBUTE_URL_FULL),
    "SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE": (()=>SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE)
});
const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = 'sentry.source';
/**
 * Attributes that holds the sample rate that was locally applied to a span.
 * If this attribute is not defined, it means that the span inherited a sampling decision.
 *
 * NOTE: Is only defined on root spans.
 */ const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = 'sentry.sample_rate';
/**
 * Attribute holding the sample rate of the previous trace.
 * This is used to sample consistently across subsequent traces in the browser SDK.
 *
 * Note: Only defined on root spans, if opted into consistent sampling
 */ const SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = 'sentry.previous_trace_sample_rate';
/**
 * Use this attribute to represent the operation of a span.
 */ const SEMANTIC_ATTRIBUTE_SENTRY_OP = 'sentry.op';
/**
 * Use this attribute to represent the origin of a span.
 */ const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = 'sentry.origin';
/** The reason why an idle span finished. */ const SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';
/** The unit of a measurement, which may be stored as a TimedEvent. */ const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = 'sentry.measurement_unit';
/** The value of a measurement, which may be stored as a TimedEvent. */ const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = 'sentry.measurement_value';
/**
 * A custom span name set by users guaranteed to be taken over any automatically
 * inferred name. This attribute is removed before the span is sent.
 *
 * @internal only meant for internal SDK usage
 * @hidden
 */ const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = 'sentry.custom_span_name';
/**
 * The id of the profile that this span occurred in.
 */ const SEMANTIC_ATTRIBUTE_PROFILE_ID = 'sentry.profile_id';
const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = 'sentry.exclusive_time';
const SEMANTIC_ATTRIBUTE_CACHE_HIT = 'cache.hit';
const SEMANTIC_ATTRIBUTE_CACHE_KEY = 'cache.key';
const SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = 'cache.item_size';
/** TODO: Remove these once we update to latest semantic conventions */ const SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = 'http.request.method';
const SEMANTIC_ATTRIBUTE_URL_FULL = 'url.full';
/**
 * A span link attribute to mark the link as a special span link.
 *
 * Known values:
 * - `previous_trace`: The span links to the frontend root span of the previous trace.
 * - `next_trace`: The span links to the frontend root span of the next trace. (Not set by the SDK)
 *
 * Other values may be set as appropriate.
 * @see https://develop.sentry.dev/sdk/telemetry/traces/span-links/#link-types
 */ const SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE = 'sentry.link.type';
;
 //# sourceMappingURL=semanticAttributes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasSpansEnabled": (()=>hasSpansEnabled),
    "hasTracingEnabled": (()=>hasTracingEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
;
// Treeshakable guard to remove all code related to tracing
/**
 * Determines if span recording is currently enabled.
 *
 * Spans are recorded when at least one of `tracesSampleRate` and `tracesSampler`
 * is defined in the SDK config. This function does not make any assumption about
 * sampling decisions, it only checks if the SDK is configured to record spans.
 *
 * Important: This function only determines if span recording is enabled. Trace
 * continuation and propagation is separately controlled and not covered by this function.
 * If this function returns `false`, traces can still be propagated (which is what
 * we refer to by "Tracing without Performance")
 * @see https://develop.sentry.dev/sdk/telemetry/traces/tracing-without-performance/
 *
 * @param maybeOptions An SDK options object to be passed to this function.
 * If this option is not provided, the function will use the current client's options.
 */ function hasSpansEnabled(maybeOptions) {
    if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
        return false;
    }
    const options = maybeOptions || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])()?.getOptions();
    return !!options && // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
    (options.tracesSampleRate != null || !!options.tracesSampler);
}
/**
 * @see JSDoc of `hasSpansEnabled`
 * @deprecated Use `hasSpansEnabled` instead, which is a more accurately named version of this function.
 * This function will be removed in the next major version of the SDK.
 */ // TODO(v10): Remove this export
const hasTracingEnabled = hasSpansEnabled;
;
 //# sourceMappingURL=hasSpansEnabled.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SPAN_STATUS_ERROR": (()=>SPAN_STATUS_ERROR),
    "SPAN_STATUS_OK": (()=>SPAN_STATUS_OK),
    "SPAN_STATUS_UNSET": (()=>SPAN_STATUS_UNSET),
    "getSpanStatusFromHttpCode": (()=>getSpanStatusFromHttpCode),
    "setHttpStatus": (()=>setHttpStatus)
});
const SPAN_STATUS_UNSET = 0;
const SPAN_STATUS_OK = 1;
const SPAN_STATUS_ERROR = 2;
/**
 * Converts a HTTP status code into a sentry status with a message.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */ // https://develop.sentry.dev/sdk/event-payloads/span/
function getSpanStatusFromHttpCode(httpStatus) {
    if (httpStatus < 400 && httpStatus >= 100) {
        return {
            code: SPAN_STATUS_OK
        };
    }
    if (httpStatus >= 400 && httpStatus < 500) {
        switch(httpStatus){
            case 401:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'unauthenticated'
                };
            case 403:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'permission_denied'
                };
            case 404:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'not_found'
                };
            case 409:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'already_exists'
                };
            case 413:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'failed_precondition'
                };
            case 429:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'resource_exhausted'
                };
            case 499:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'cancelled'
                };
            default:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'invalid_argument'
                };
        }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
        switch(httpStatus){
            case 501:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'unimplemented'
                };
            case 503:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'unavailable'
                };
            case 504:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'deadline_exceeded'
                };
            default:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: 'internal_error'
                };
        }
    }
    return {
        code: SPAN_STATUS_ERROR,
        message: 'unknown_error'
    };
}
/**
 * Sets the Http status attributes on the current span based on the http code.
 * Additionally, the span's status is updated, depending on the http code.
 */ function setHttpStatus(span, httpStatus) {
    span.setAttribute('http.response.status_code', httpStatus);
    const spanStatus = getSpanStatusFromHttpCode(httpStatus);
    if (spanStatus.message !== 'unknown_error') {
        span.setStatus(spanStatus);
    }
}
;
 //# sourceMappingURL=spanstatus.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCapturedScopesOnSpan": (()=>getCapturedScopesOnSpan),
    "setCapturedScopesOnSpan": (()=>setCapturedScopesOnSpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
;
const SCOPE_ON_START_SPAN_FIELD = '_sentryScope';
const ISOLATION_SCOPE_ON_START_SPAN_FIELD = '_sentryIsolationScope';
/** Store the scope & isolation scope for a span, which can the be used when it is finished. */ function setCapturedScopesOnSpan(span, scope, isolationScope) {
    if (span) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, isolationScope);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, SCOPE_ON_START_SPAN_FIELD, scope);
    }
}
/**
 * Grabs the scope and isolation scope off a span that were active when the span was started.
 */ function getCapturedScopesOnSpan(span) {
    return {
        scope: span[SCOPE_ON_START_SPAN_FIELD],
        isolationScope: span[ISOLATION_SCOPE_ON_START_SPAN_FIELD]
    };
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Parse a sample rate from a given value.
 * This will either return a boolean or number sample rate, if the sample rate is valid (between 0 and 1).
 * If a string is passed, we try to convert it to a number.
 *
 * Any invalid sample rate will return `undefined`.
 */ __turbopack_context__.s({
    "parseSampleRate": (()=>parseSampleRate)
});
function parseSampleRate(sampleRate) {
    if (typeof sampleRate === 'boolean') {
        return Number(sampleRate);
    }
    const rate = typeof sampleRate === 'string' ? parseFloat(sampleRate) : sampleRate;
    if (typeof rate !== 'number' || isNaN(rate) || rate < 0 || rate > 1) {
        return undefined;
    }
    return rate;
}
;
 //# sourceMappingURL=parseSampleRate.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/baggage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MAX_BAGGAGE_STRING_LENGTH": (()=>MAX_BAGGAGE_STRING_LENGTH),
    "SENTRY_BAGGAGE_KEY_PREFIX": (()=>SENTRY_BAGGAGE_KEY_PREFIX),
    "SENTRY_BAGGAGE_KEY_PREFIX_REGEX": (()=>SENTRY_BAGGAGE_KEY_PREFIX_REGEX),
    "baggageHeaderToDynamicSamplingContext": (()=>baggageHeaderToDynamicSamplingContext),
    "dynamicSamplingContextToSentryBaggageHeader": (()=>dynamicSamplingContextToSentryBaggageHeader),
    "objectToBaggageHeader": (()=>objectToBaggageHeader),
    "parseBaggageHeader": (()=>parseBaggageHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
;
const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';
const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */ const MAX_BAGGAGE_STRING_LENGTH = 8192;
/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */ function baggageHeaderToDynamicSamplingContext(// Very liberal definition of what any incoming header might look like
baggageHeader) {
    const baggageObject = parseBaggageHeader(baggageHeader);
    if (!baggageObject) {
        return undefined;
    }
    // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
    const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value])=>{
        if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
            const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
            acc[nonPrefixedKey] = value;
        }
        return acc;
    }, {});
    // Only return a dynamic sampling context object if there are keys in it.
    // A keyless object means there were no sentry values on the header, which means that there is no DSC.
    if (Object.keys(dynamicSamplingContext).length > 0) {
        return dynamicSamplingContext;
    } else {
        return undefined;
    }
}
/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */ function dynamicSamplingContextToSentryBaggageHeader(// this also takes undefined for convenience and bundle size in other places
dynamicSamplingContext) {
    if (!dynamicSamplingContext) {
        return undefined;
    }
    // Prefix all DSC keys with "sentry-" and put them into a new object
    const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce((acc, [dscKey, dscValue])=>{
        if (dscValue) {
            acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
        }
        return acc;
    }, {});
    return objectToBaggageHeader(sentryPrefixedDSC);
}
/**
 * Take a baggage header and parse it into an object.
 */ function parseBaggageHeader(baggageHeader) {
    if (!baggageHeader || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(baggageHeader) && !Array.isArray(baggageHeader)) {
        return undefined;
    }
    if (Array.isArray(baggageHeader)) {
        // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
        return baggageHeader.reduce((acc, curr)=>{
            const currBaggageObject = baggageHeaderToObject(curr);
            Object.entries(currBaggageObject).forEach(([key, value])=>{
                acc[key] = value;
            });
            return acc;
        }, {});
    }
    return baggageHeaderToObject(baggageHeader);
}
/**
 * Will parse a baggage header, which is a simple key-value map, into a flat object.
 *
 * @param baggageHeader The baggage header to parse.
 * @returns a flat object containing all the key-value pairs from `baggageHeader`.
 */ function baggageHeaderToObject(baggageHeader) {
    return baggageHeader.split(',').map((baggageEntry)=>baggageEntry.split('=').map((keyOrValue)=>{
            try {
                return decodeURIComponent(keyOrValue.trim());
            } catch  {
                // We ignore errors here, e.g. if the value cannot be URL decoded.
                // This will then be skipped in the next step
                return;
            }
        })).reduce((acc, [key, value])=>{
        if (key && value) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */ function objectToBaggageHeader(object) {
    if (Object.keys(object).length === 0) {
        // An empty baggage header is not spec compliant: We return undefined.
        return undefined;
    }
    return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex)=>{
        const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
        const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
        if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`);
            return baggageHeader;
        } else {
            return newBaggageHeader;
        }
    }, '');
}
;
 //# sourceMappingURL=baggage.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/tracing.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TRACEPARENT_REGEXP": (()=>TRACEPARENT_REGEXP),
    "extractTraceparentData": (()=>extractTraceparentData),
    "generateSentryTraceHeader": (()=>generateSentryTraceHeader),
    "propagationContextFromHeaders": (()=>propagationContextFromHeaders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/baggage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
;
;
;
// eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor -- RegExp is used for readability here
const TRACEPARENT_REGEXP = new RegExp('^[ \\t]*' + // whitespace
'([0-9a-f]{32})?' + // trace_id
'-?([0-9a-f]{16})?' + // span_id
'-?([01])?' + // sampled
'[ \\t]*$');
/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */ function extractTraceparentData(traceparent) {
    if (!traceparent) {
        return undefined;
    }
    const matches = traceparent.match(TRACEPARENT_REGEXP);
    if (!matches) {
        return undefined;
    }
    let parentSampled;
    if (matches[3] === '1') {
        parentSampled = true;
    } else if (matches[3] === '0') {
        parentSampled = false;
    }
    return {
        traceId: matches[1],
        parentSampled,
        parentSpanId: matches[2]
    };
}
/**
 * Create a propagation context from incoming headers or
 * creates a minimal new one if the headers are undefined.
 */ function propagationContextFromHeaders(sentryTrace, baggage) {
    const traceparentData = extractTraceparentData(sentryTrace);
    const dynamicSamplingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baggageHeaderToDynamicSamplingContext"])(baggage);
    if (!traceparentData?.traceId) {
        return {
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: Math.random()
        };
    }
    const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);
    // The sample_rand on the DSC needs to be generated based on traceparent + baggage.
    if (dynamicSamplingContext) {
        dynamicSamplingContext.sample_rand = sampleRand.toString();
    }
    const { traceId, parentSpanId, parentSampled } = traceparentData;
    return {
        traceId,
        parentSpanId,
        sampled: parentSampled,
        dsc: dynamicSamplingContext || {},
        sampleRand
    };
}
/**
 * Create sentry-trace header from span context values.
 */ function generateSentryTraceHeader(traceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(), spanId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])(), sampled) {
    let sampledString = '';
    if (sampled !== undefined) {
        sampledString = sampled ? '-1' : '-0';
    }
    return `${traceId}-${spanId}${sampledString}`;
}
/**
 * Given any combination of an incoming trace, generate a sample rand based on its defined semantics.
 *
 * Read more: https://develop.sentry.dev/sdk/telemetry/traces/#propagated-random-value
 */ function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
    // When there is an incoming sample rand use it.
    const parsedSampleRand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(dsc?.sample_rand);
    if (parsedSampleRand !== undefined) {
        return parsedSampleRand;
    }
    // Otherwise, if there is an incoming sampling decision + sample rate, generate a sample rand that would lead to the same sampling decision.
    const parsedSampleRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(dsc?.sample_rate);
    if (parsedSampleRate && traceparentData?.parentSampled !== undefined) {
        return traceparentData.parentSampled ? Math.random() * parsedSampleRate : parsedSampleRate + Math.random() * (1 - parsedSampleRate);
    } else {
        // If nothing applies, return a random sample rand.
        return Math.random();
    }
}
;
 //# sourceMappingURL=tracing.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TRACE_FLAG_NONE": (()=>TRACE_FLAG_NONE),
    "TRACE_FLAG_SAMPLED": (()=>TRACE_FLAG_SAMPLED),
    "addChildSpanToSpan": (()=>addChildSpanToSpan),
    "convertSpanLinksForEnvelope": (()=>convertSpanLinksForEnvelope),
    "getActiveSpan": (()=>getActiveSpan),
    "getRootSpan": (()=>getRootSpan),
    "getSpanDescendants": (()=>getSpanDescendants),
    "getStatusMessage": (()=>getStatusMessage),
    "removeChildSpanFromSpan": (()=>removeChildSpanFromSpan),
    "showSpanDropWarning": (()=>showSpanDropWarning),
    "spanIsSampled": (()=>spanIsSampled),
    "spanTimeInputToSeconds": (()=>spanTimeInputToSeconds),
    "spanToJSON": (()=>spanToJSON),
    "spanToTraceContext": (()=>spanToTraceContext),
    "spanToTraceHeader": (()=>spanToTraceHeader),
    "spanToTransactionTraceContext": (()=>spanToTransactionTraceContext),
    "updateSpanName": (()=>updateSpanName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/tracing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
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
;
// These are aligned with OpenTelemetry trace flags
const TRACE_FLAG_NONE = 0x0;
const TRACE_FLAG_SAMPLED = 0x1;
let hasShownSpanDropWarning = false;
/**
 * Convert a span to a trace context, which can be sent as the `trace` context in an event.
 * By default, this will only include trace_id, span_id & parent_span_id.
 * If `includeAllData` is true, it will also include data, op, status & origin.
 */ function spanToTransactionTraceContext(span) {
    const { spanId: span_id, traceId: trace_id } = span.spanContext();
    const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);
    return {
        parent_span_id,
        span_id,
        trace_id,
        data,
        op,
        status,
        origin,
        links
    };
}
/**
 * Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
 */ function spanToTraceContext(span) {
    const { spanId, traceId: trace_id, isRemote } = span.spanContext();
    // If the span is remote, we use a random/virtual span as span_id to the trace context,
    // and the remote span as parent_span_id
    const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(span).scope;
    const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])() : spanId;
    return {
        parent_span_id,
        span_id,
        trace_id
    };
}
/**
 * Convert a Span to a Sentry trace header.
 */ function spanToTraceHeader(span) {
    const { traceId, spanId } = span.spanContext();
    const sampled = spanIsSampled(span);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSentryTraceHeader"])(traceId, spanId, sampled);
}
/**
 *  Converts the span links array to a flattened version to be sent within an envelope.
 *
 *  If the links array is empty, it returns `undefined` so the empty value can be dropped before it's sent.
 */ function convertSpanLinksForEnvelope(links) {
    if (links && links.length > 0) {
        return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes })=>({
                span_id: spanId,
                trace_id: traceId,
                sampled: traceFlags === TRACE_FLAG_SAMPLED,
                attributes,
                ...restContext
            }));
    } else {
        return undefined;
    }
}
/**
 * Convert a span time input into a timestamp in seconds.
 */ function spanTimeInputToSeconds(input) {
    if (typeof input === 'number') {
        return ensureTimestampInSeconds(input);
    }
    if (Array.isArray(input)) {
        // See {@link HrTime} for the array-based time format
        return input[0] + input[1] / 1e9;
    }
    if (input instanceof Date) {
        return ensureTimestampInSeconds(input.getTime());
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
}
/**
 * Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
 */ function ensureTimestampInSeconds(timestamp) {
    const isMs = timestamp > 9999999999;
    return isMs ? timestamp / 1000 : timestamp;
}
/**
 * Convert a span to a JSON representation.
 */ // Note: Because of this, we currently have a circular type dependency (which we opted out of in package.json).
// This is not avoidable as we need `spanToJSON` in `spanUtils.ts`, which in turn is needed by `span.ts` for backwards compatibility.
// And `spanToJSON` needs the Span class from `span.ts` to check here.
function spanToJSON(span) {
    if (spanIsSentrySpan(span)) {
        return span.getSpanJSON();
    }
    const { spanId: span_id, traceId: trace_id } = span.spanContext();
    // Handle a span from @opentelemetry/sdk-base-trace's `Span` class
    if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
        const { attributes, startTime, name, endTime, status, links } = span;
        // In preparation for the next major of OpenTelemetry, we want to support
        // looking up the parent span id according to the new API
        // In OTel v1, the parent span id is accessed as `parentSpanId`
        // In OTel v2, the parent span id is accessed as `spanId` on the `parentSpanContext`
        const parentSpanId = 'parentSpanId' in span ? span.parentSpanId : 'parentSpanContext' in span ? span.parentSpanContext?.spanId : undefined;
        return {
            span_id,
            trace_id,
            data: attributes,
            description: name,
            parent_span_id: parentSpanId,
            start_timestamp: spanTimeInputToSeconds(startTime),
            // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
            timestamp: spanTimeInputToSeconds(endTime) || undefined,
            status: getStatusMessage(status),
            op: attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]],
            origin: attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]],
            links: convertSpanLinksForEnvelope(links)
        };
    }
    // Finally, at least we have `spanContext()`....
    // This should not actually happen in reality, but we need to handle it for type safety.
    return {
        span_id,
        trace_id,
        start_timestamp: 0,
        data: {}
    };
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
    const castSpan = span;
    return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
/** Exported only for tests. */ /**
 * Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
 * :( So instead we approximate this by checking if it has the `getSpanJSON` method.
 */ function spanIsSentrySpan(span) {
    return typeof span.getSpanJSON === 'function';
}
/**
 * Returns true if a span is sampled.
 * In most cases, you should just use `span.isRecording()` instead.
 * However, this has a slightly different semantic, as it also returns false if the span is finished.
 * So in the case where this distinction is important, use this method.
 */ function spanIsSampled(span) {
    // We align our trace flags with the ones OpenTelemetry use
    // So we also check for sampled the same way they do.
    const { traceFlags } = span.spanContext();
    return traceFlags === TRACE_FLAG_SAMPLED;
}
/** Get the status message to use for a JSON representation of a span. */ function getStatusMessage(status) {
    if (!status || status.code === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_UNSET"]) {
        return undefined;
    }
    if (status.code === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_OK"]) {
        return 'ok';
    }
    return status.message || 'unknown_error';
}
const CHILD_SPANS_FIELD = '_sentryChildSpans';
const ROOT_SPAN_FIELD = '_sentryRootSpan';
/**
 * Adds an opaque child span reference to a span.
 */ function addChildSpanToSpan(span, childSpan) {
    // We store the root span reference on the child span
    // We need this for `getRootSpan()` to work
    const rootSpan = span[ROOT_SPAN_FIELD] || span;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(childSpan, ROOT_SPAN_FIELD, rootSpan);
    // We store a list of child spans on the parent span
    // We need this for `getSpanDescendants()` to work
    if (span[CHILD_SPANS_FIELD]) {
        span[CHILD_SPANS_FIELD].add(childSpan);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, CHILD_SPANS_FIELD, new Set([
            childSpan
        ]));
    }
}
/** This is only used internally by Idle Spans. */ function removeChildSpanFromSpan(span, childSpan) {
    if (span[CHILD_SPANS_FIELD]) {
        span[CHILD_SPANS_FIELD].delete(childSpan);
    }
}
/**
 * Returns an array of the given span and all of its descendants.
 */ function getSpanDescendants(span) {
    const resultSet = new Set();
    function addSpanChildren(span) {
        // This exit condition is required to not infinitely loop in case of a circular dependency.
        if (resultSet.has(span)) {
            return;
        // We want to ignore unsampled spans (e.g. non recording spans)
        } else if (spanIsSampled(span)) {
            resultSet.add(span);
            const childSpans = span[CHILD_SPANS_FIELD] ? Array.from(span[CHILD_SPANS_FIELD]) : [];
            for (const childSpan of childSpans){
                addSpanChildren(childSpan);
            }
        }
    }
    addSpanChildren(span);
    return Array.from(resultSet);
}
/**
 * Returns the root span of a given span.
 */ function getRootSpan(span) {
    return span[ROOT_SPAN_FIELD] || span;
}
/**
 * Returns the currently active span.
 */ function getActiveSpan() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    if (acs.getActiveSpan) {
        return acs.getActiveSpan();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])());
}
/**
 * Logs a warning once if `beforeSendSpan` is used to drop spans.
 */ function showSpanDropWarning() {
    if (!hasShownSpanDropWarning) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            // eslint-disable-next-line no-console
            console.warn('[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.');
        });
        hasShownSpanDropWarning = true;
    }
}
/**
 * Updates the name of the given span and ensures that the span name is not
 * overwritten by the Sentry SDK.
 *
 * Use this function instead of `span.updateName()` if you want to make sure that
 * your name is kept. For some spans, for example root `http.server` spans the
 * Sentry SDK would otherwise overwrite the span name with a high-quality name
 * it infers when the span ends.
 *
 * Use this function in server code or when your span is started on the server
 * and on the client (browser). If you only update a span name on the client,
 * you can also use `span.updateName()` the SDK does not overwrite the name.
 *
 * @param span - The span to update the name of.
 * @param name - The name to set on the span.
 */ function updateSpanName(span, name) {
    span.updateName(name);
    span.setAttributes({
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'custom',
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME"]]: name
    });
}
;
 //# sourceMappingURL=spanUtils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dsnFromString": (()=>dsnFromString),
    "dsnToString": (()=>dsnToString),
    "extractOrgIdFromDsnHost": (()=>extractOrgIdFromDsnHost),
    "makeDsn": (()=>makeDsn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
/** Regular expression used to extract org ID from a DSN host. */ const ORG_ID_REGEX = /^o(\d+)\./;
/** Regular expression used to parse a Dsn. */ const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
    return protocol === 'http' || protocol === 'https';
}
/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */ function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` + `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`;
}
/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
 */ function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);
    if (!match) {
        // This should be logged to the console
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            // eslint-disable-next-line no-console
            console.error(`Invalid Sentry Dsn: ${str}`);
        });
        return undefined;
    }
    const [protocol, publicKey, pass = '', host = '', port = '', lastPath = ''] = match.slice(1);
    let path = '';
    let projectId = lastPath;
    const split = projectId.split('/');
    if (split.length > 1) {
        path = split.slice(0, -1).join('/');
        projectId = split.pop();
    }
    if (projectId) {
        const projectMatch = projectId.match(/^\d+/);
        if (projectMatch) {
            projectId = projectMatch[0];
        }
    }
    return dsnFromComponents({
        host,
        pass,
        path,
        projectId,
        port,
        protocol: protocol,
        publicKey
    });
}
function dsnFromComponents(components) {
    return {
        protocol: components.protocol,
        publicKey: components.publicKey || '',
        pass: components.pass || '',
        host: components.host,
        port: components.port || '',
        path: components.path || '',
        projectId: components.projectId
    };
}
function validateDsn(dsn) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
        return true;
    }
    const { port, projectId, protocol } = dsn;
    const requiredComponents = [
        'protocol',
        'publicKey',
        'host',
        'projectId'
    ];
    const hasMissingRequiredComponent = requiredComponents.find((component)=>{
        if (!dsn[component]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Invalid Sentry Dsn: ${component} missing`);
            return true;
        }
        return false;
    });
    if (hasMissingRequiredComponent) {
        return false;
    }
    if (!projectId.match(/^\d+$/)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
        return false;
    }
    if (!isValidProtocol(protocol)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
        return false;
    }
    if (port && isNaN(parseInt(port, 10))) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Invalid Sentry Dsn: Invalid port ${port}`);
        return false;
    }
    return true;
}
/**
 * Extract the org ID from a DSN host.
 *
 * @param host The host from a DSN
 * @returns The org ID if found, undefined otherwise
 */ function extractOrgIdFromDsnHost(host) {
    const match = host.match(ORG_ID_REGEX);
    return match?.[1];
}
/**
 * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
 * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
 */ function makeDsn(from) {
    const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
    if (!components || !validateDsn(components)) {
        return undefined;
    }
    return components;
}
;
 //# sourceMappingURL=dsn.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "freezeDscOnSpan": (()=>freezeDscOnSpan),
    "getDynamicSamplingContextFromClient": (()=>getDynamicSamplingContextFromClient),
    "getDynamicSamplingContextFromScope": (()=>getDynamicSamplingContextFromScope),
    "getDynamicSamplingContextFromSpan": (()=>getDynamicSamplingContextFromSpan),
    "spanToBaggageHeader": (()=>spanToBaggageHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/baggage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)");
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
 * If you change this value, also update the terser plugin config to
 * avoid minification of the object property!
 */ const FROZEN_DSC_FIELD = '_frozenDsc';
/**
 * Freeze the given DSC on the given span.
 */ function freezeDscOnSpan(span, dsc) {
    const spanWithMaybeDsc = span;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
/**
 * Creates a dynamic sampling context from a client.
 *
 * Dispatches the `createDsc` lifecycle hook as a side effect.
 */ function getDynamicSamplingContextFromClient(trace_id, client) {
    const options = client.getOptions();
    const { publicKey: public_key, host } = client.getDsn() || {};
    let org_id;
    if (options.orgId) {
        org_id = String(options.orgId);
    } else if (host) {
        org_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractOrgIdFromDsnHost"])(host);
    }
    // Instead of conditionally adding non-undefined values, we add them and then remove them if needed
    // otherwise, the order of baggage entries changes, which "breaks" a bunch of tests etc.
    const dsc = {
        environment: options.environment || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ENVIRONMENT"],
        release: options.release,
        public_key,
        trace_id,
        org_id
    };
    client.emit('createDsc', dsc);
    return dsc;
}
/**
 * Get the dynamic sampling context for the currently active scopes.
 */ function getDynamicSamplingContextFromScope(client, scope) {
    const propagationContext = scope.getPropagationContext();
    return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
/**
 * Creates a dynamic sampling context from a span (and client and scope)
 *
 * @param span the span from which a few values like the root span name and sample rate are extracted.
 *
 * @returns a dynamic sampling context
 */ function getDynamicSamplingContextFromSpan(span) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        return {};
    }
    const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    const rootSpanJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(rootSpan);
    const rootSpanAttributes = rootSpanJson.data;
    const traceState = rootSpan.spanContext().traceState;
    // The span sample rate that was locally applied to the root span should also always be applied to the DSC, even if the DSC is frozen.
    // This is so that the downstream traces/services can use parentSampleRate in their `tracesSampler` to make consistent sampling decisions across the entire trace.
    const rootSpanSampleRate = traceState?.get('sentry.sample_rate') ?? rootSpanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE"]] ?? rootSpanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE"]];
    function applyLocalSampleRateToDsc(dsc) {
        if (typeof rootSpanSampleRate === 'number' || typeof rootSpanSampleRate === 'string') {
            dsc.sample_rate = `${rootSpanSampleRate}`;
        }
        return dsc;
    }
    // For core implementation, we freeze the DSC onto the span as a non-enumerable property
    const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
    if (frozenDsc) {
        return applyLocalSampleRateToDsc(frozenDsc);
    }
    // For OpenTelemetry, we freeze the DSC on the trace state
    const traceStateDsc = traceState?.get('sentry.dsc');
    // If the span has a DSC, we want it to take precedence
    const dscOnTraceState = traceStateDsc && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baggageHeaderToDynamicSamplingContext"])(traceStateDsc);
    if (dscOnTraceState) {
        return applyLocalSampleRateToDsc(dscOnTraceState);
    }
    // Else, we generate it from the span
    const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
    // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
    const source = rootSpanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]];
    // after JSON conversion, txn.name becomes jsonSpan.description
    const name = rootSpanJson.description;
    if (source !== 'url' && name) {
        dsc.transaction = name;
    }
    // How can we even land here with hasSpansEnabled() returning false?
    // Otel creates a Non-recording span in Tracing Without Performance mode when handling incoming requests
    // So we end up with an active span that is not sampled (neither positively nor negatively)
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])()) {
        dsc.sampled = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsSampled"])(rootSpan));
        dsc.sample_rand = // In OTEL we store the sample rand on the trace state because we cannot access scopes for NonRecordingSpans
        // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
        traceState?.get('sentry.sample_rand') ?? // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(rootSpan).scope?.getPropagationContext().sampleRand.toString();
    }
    applyLocalSampleRateToDsc(dsc);
    client.emit('createDsc', dsc, rootSpan);
    return dsc;
}
/**
 * Convert a Span to a baggage header.
 */ function spanToBaggageHeader(span) {
    const dsc = getDynamicSamplingContextFromSpan(span);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicSamplingContextToSentryBaggageHeader"])(dsc);
}
;
 //# sourceMappingURL=dynamicSamplingContext.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyScopeDataToEvent": (()=>applyScopeDataToEvent),
    "mergeAndOverwriteScopeData": (()=>mergeAndOverwriteScopeData),
    "mergeScopeData": (()=>mergeScopeData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
;
;
;
/**
 * Applies data from the scope to the event and runs all event processors on it.
 */ function applyScopeDataToEvent(event, data) {
    const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
    // Apply general data
    applyDataToEvent(event, data);
    // We want to set the trace context for normal events only if there isn't already
    // a trace context on the event. There is a product feature in place where we link
    // errors with transaction and it relies on that.
    if (span) {
        applySpanToEvent(event, span);
    }
    applyFingerprintToEvent(event, fingerprint);
    applyBreadcrumbsToEvent(event, breadcrumbs);
    applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
/** Merge data of two scopes together. */ function mergeScopeData(data, mergeData) {
    const { extra, tags, user, contexts, level, sdkProcessingMetadata, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = mergeData;
    mergeAndOverwriteScopeData(data, 'extra', extra);
    mergeAndOverwriteScopeData(data, 'tags', tags);
    mergeAndOverwriteScopeData(data, 'user', user);
    mergeAndOverwriteScopeData(data, 'contexts', contexts);
    data.sdkProcessingMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
    if (level) {
        data.level = level;
    }
    if (transactionName) {
        data.transactionName = transactionName;
    }
    if (span) {
        data.span = span;
    }
    if (breadcrumbs.length) {
        data.breadcrumbs = [
            ...data.breadcrumbs,
            ...breadcrumbs
        ];
    }
    if (fingerprint.length) {
        data.fingerprint = [
            ...data.fingerprint,
            ...fingerprint
        ];
    }
    if (eventProcessors.length) {
        data.eventProcessors = [
            ...data.eventProcessors,
            ...eventProcessors
        ];
    }
    if (attachments.length) {
        data.attachments = [
            ...data.attachments,
            ...attachments
        ];
    }
    data.propagationContext = {
        ...data.propagationContext,
        ...propagationContext
    };
}
/**
 * Merges certain scope data. Undefined values will overwrite any existing values.
 * Exported only for tests.
 */ function mergeAndOverwriteScopeData(data, prop, mergeVal) {
    data[prop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(data[prop], mergeVal, 1);
}
function applyDataToEvent(event, data) {
    const { extra, tags, user, contexts, level, transactionName } = data;
    if (Object.keys(extra).length) {
        event.extra = {
            ...extra,
            ...event.extra
        };
    }
    if (Object.keys(tags).length) {
        event.tags = {
            ...tags,
            ...event.tags
        };
    }
    if (Object.keys(user).length) {
        event.user = {
            ...user,
            ...event.user
        };
    }
    if (Object.keys(contexts).length) {
        event.contexts = {
            ...contexts,
            ...event.contexts
        };
    }
    if (level) {
        event.level = level;
    }
    // transaction events get their `transaction` from the root span name
    if (transactionName && event.type !== 'transaction') {
        event.transaction = transactionName;
    }
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
    const mergedBreadcrumbs = [
        ...event.breadcrumbs || [],
        ...breadcrumbs
    ];
    event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : undefined;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
    event.sdkProcessingMetadata = {
        ...event.sdkProcessingMetadata,
        ...sdkProcessingMetadata
    };
}
function applySpanToEvent(event, span) {
    event.contexts = {
        trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToTraceContext"])(span),
        ...event.contexts
    };
    event.sdkProcessingMetadata = {
        dynamicSamplingContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span),
        ...event.sdkProcessingMetadata
    };
    const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    const transactionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(rootSpan).description;
    if (transactionName && !event.transaction && event.type === 'transaction') {
        event.transaction = transactionName;
    }
}
/**
 * Applies fingerprint from the scope to the event if there's one,
 * uses message if there's one instead or get rid of empty fingerprint
 */ function applyFingerprintToEvent(event, fingerprint) {
    // Make sure it's an array first and we actually have something in place
    event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [
        event.fingerprint
    ] : [];
    // If we have something on the scope, then merge it with event
    if (fingerprint) {
        event.fingerprint = event.fingerprint.concat(fingerprint);
    }
    // If we have no data at all, remove empty array default
    if (!event.fingerprint.length) {
        delete event.fingerprint;
    }
}
;
 //# sourceMappingURL=applyScopeDataToEvent.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/prepareEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyClientOptions": (()=>applyClientOptions),
    "applyDebugIds": (()=>applyDebugIds),
    "applyDebugMeta": (()=>applyDebugMeta),
    "parseEventHintOrCaptureContext": (()=>parseEventHintOrCaptureContext),
    "prepareEvent": (()=>prepareEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$eventProcessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/eventProcessors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$debug$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js [app-client] (ecmascript)");
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
 * This type makes sure that we get either a CaptureContext, OR an EventHint.
 * It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
 * { user: { id: '123' }, mechanism: { handled: false } }
 */ /**
 * Adds common information to events.
 *
 * The information includes release and environment from `options`,
 * breadcrumbs and context (extra, tags and user) from the scope.
 *
 * Information that is already present in the event is never overwritten. For
 * nested objects, such as the context, keys are merged.
 *
 * @param event The original event.
 * @param hint May contain additional information about the original exception.
 * @param scope A scope containing event metadata.
 * @returns A new event with more information.
 * @hidden
 */ function prepareEvent(options, event, hint, scope, client, isolationScope) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = options;
    const prepared = {
        ...event,
        event_id: event.event_id || hint.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])(),
        timestamp: event.timestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampInSeconds"])()
    };
    const integrations = hint.integrations || options.integrations.map((i)=>i.name);
    applyClientOptions(prepared, options);
    applyIntegrationsMetadata(prepared, integrations);
    if (client) {
        client.emit('applyFrameMetadata', event);
    }
    // Only put debug IDs onto frames for error events.
    if (event.type === undefined) {
        applyDebugIds(prepared, options.stackParser);
    }
    // If we have scope given to us, use it as the base for further modifications.
    // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
    const finalScope = getFinalScope(scope, hint.captureContext);
    if (hint.mechanism) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(prepared, hint.mechanism);
    }
    const clientEventProcessors = client ? client.getEventProcessors() : [];
    // This should be the last thing called, since we want that
    // {@link Scope.addEventProcessor} gets the finished prepared event.
    // Merge scope data together
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalScope"])().getScopeData();
    if (isolationScope) {
        const isolationData = isolationScope.getScopeData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeData"])(data, isolationData);
    }
    if (finalScope) {
        const finalScopeData = finalScope.getScopeData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeData"])(data, finalScopeData);
    }
    const attachments = [
        ...hint.attachments || [],
        ...data.attachments
    ];
    if (attachments.length) {
        hint.attachments = attachments;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyScopeDataToEvent"])(prepared, data);
    const eventProcessors = [
        ...clientEventProcessors,
        // Run scope event processors _after_ all other processors
        ...data.eventProcessors
    ];
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$eventProcessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyEventProcessors"])(eventProcessors, prepared, hint);
    return result.then((evt)=>{
        if (evt) {
            // We apply the debug_meta field only after all event processors have ran, so that if any event processors modified
            // file names (e.g.the RewriteFrames integration) the filename -> debug ID relationship isn't destroyed.
            // This should not cause any PII issues, since we're only moving data that is already on the event and not adding
            // any new data
            applyDebugMeta(evt);
        }
        if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
            return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
        }
        return evt;
    });
}
/**
 * Enhances event using the client configuration.
 * It takes care of all "static" values like environment, release and `dist`,
 * as well as truncating overly long values.
 *
 * Only exported for tests.
 *
 * @param event event instance to be enhanced
 */ function applyClientOptions(event, options) {
    const { environment, release, dist, maxValueLength = 250 } = options;
    // empty strings do not make sense for environment, release, and dist
    // so we handle them the same as if they were not provided
    event.environment = event.environment || environment || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ENVIRONMENT"];
    if (!event.release && release) {
        event.release = release;
    }
    if (!event.dist && dist) {
        event.dist = dist;
    }
    const request = event.request;
    if (request?.url) {
        request.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(request.url, maxValueLength);
    }
}
/**
 * Puts debug IDs into the stack frames of an error event.
 */ function applyDebugIds(event, stackParser) {
    // Build a map of filename -> debug_id
    const filenameDebugIdMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$debug$2d$ids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilenameToDebugIdMap"])(stackParser);
    event.exception?.values?.forEach((exception)=>{
        exception.stacktrace?.frames?.forEach((frame)=>{
            if (frame.filename) {
                frame.debug_id = filenameDebugIdMap[frame.filename];
            }
        });
    });
}
/**
 * Moves debug IDs from the stack frames of an error event into the debug_meta field.
 */ function applyDebugMeta(event) {
    // Extract debug IDs and filenames from the stack frames on the event.
    const filenameDebugIdMap = {};
    event.exception?.values?.forEach((exception)=>{
        exception.stacktrace?.frames?.forEach((frame)=>{
            if (frame.debug_id) {
                if (frame.abs_path) {
                    filenameDebugIdMap[frame.abs_path] = frame.debug_id;
                } else if (frame.filename) {
                    filenameDebugIdMap[frame.filename] = frame.debug_id;
                }
                delete frame.debug_id;
            }
        });
    });
    if (Object.keys(filenameDebugIdMap).length === 0) {
        return;
    }
    // Fill debug_meta information
    event.debug_meta = event.debug_meta || {};
    event.debug_meta.images = event.debug_meta.images || [];
    const images = event.debug_meta.images;
    Object.entries(filenameDebugIdMap).forEach(([filename, debug_id])=>{
        images.push({
            type: 'sourcemap',
            code_file: filename,
            debug_id
        });
    });
}
/**
 * This function adds all used integrations to the SDK info in the event.
 * @param event The event that will be filled with all integrations.
 */ function applyIntegrationsMetadata(event, integrationNames) {
    if (integrationNames.length > 0) {
        event.sdk = event.sdk || {};
        event.sdk.integrations = [
            ...event.sdk.integrations || [],
            ...integrationNames
        ];
    }
}
/**
 * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
 * Normalized keys:
 * - `breadcrumbs.data`
 * - `user`
 * - `contexts`
 * - `extra`
 * @param event Event
 * @returns Normalized event
 */ function normalizeEvent(event, depth, maxBreadth) {
    if (!event) {
        return null;
    }
    const normalized = {
        ...event,
        ...event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map((b)=>({
                    ...b,
                    ...b.data && {
                        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(b.data, depth, maxBreadth)
                    }
                }))
        },
        ...event.user && {
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(event.user, depth, maxBreadth)
        },
        ...event.contexts && {
            contexts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(event.contexts, depth, maxBreadth)
        },
        ...event.extra && {
            extra: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(event.extra, depth, maxBreadth)
        }
    };
    // event.contexts.trace stores information about a Transaction. Similarly,
    // event.spans[] stores information about child Spans. Given that a
    // Transaction is conceptually a Span, normalization should apply to both
    // Transactions and Spans consistently.
    // For now the decision is to skip normalization of Transactions and Spans,
    // so this block overwrites the normalized event to add back the original
    // Transaction information prior to normalization.
    if (event.contexts?.trace && normalized.contexts) {
        normalized.contexts.trace = event.contexts.trace;
        // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
        if (event.contexts.trace.data) {
            normalized.contexts.trace.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(event.contexts.trace.data, depth, maxBreadth);
        }
    }
    // event.spans[].data may contain circular/dangerous data so we need to normalize it
    if (event.spans) {
        normalized.spans = event.spans.map((span)=>{
            return {
                ...span,
                ...span.data && {
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(span.data, depth, maxBreadth)
                }
            };
        });
    }
    // event.contexts.flags (FeatureFlagContext) stores context for our feature
    // flag integrations. It has a greater nesting depth than our other typed
    // Contexts, so we re-normalize with a fixed depth of 3 here. We do not want
    // to skip this in case of conflicting, user-provided context.
    if (event.contexts?.flags && normalized.contexts) {
        normalized.contexts.flags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(event.contexts.flags, 3, maxBreadth);
    }
    return normalized;
}
function getFinalScope(scope, captureContext) {
    if (!captureContext) {
        return scope;
    }
    const finalScope = scope ? scope.clone() : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]();
    finalScope.update(captureContext);
    return finalScope;
}
/**
 * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
 * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
 */ function parseEventHintOrCaptureContext(hint) {
    if (!hint) {
        return undefined;
    }
    // If you pass a Scope or `() => Scope` as CaptureContext, we just return this as captureContext
    if (hintIsScopeOrFunction(hint)) {
        return {
            captureContext: hint
        };
    }
    if (hintIsScopeContext(hint)) {
        return {
            captureContext: hint
        };
    }
    return hint;
}
function hintIsScopeOrFunction(hint) {
    return hint instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"] || typeof hint === 'function';
}
const captureContextKeys = [
    'user',
    'level',
    'extra',
    'contexts',
    'tags',
    'fingerprint',
    'propagationContext'
];
function hintIsScopeContext(hint) {
    return Object.keys(hint).some((key)=>captureContextKeys.includes(key));
}
;
 //# sourceMappingURL=prepareEvent.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addEventProcessor": (()=>addEventProcessor),
    "captureCheckIn": (()=>captureCheckIn),
    "captureEvent": (()=>captureEvent),
    "captureException": (()=>captureException),
    "captureMessage": (()=>captureMessage),
    "captureSession": (()=>captureSession),
    "close": (()=>close),
    "endSession": (()=>endSession),
    "flush": (()=>flush),
    "isEnabled": (()=>isEnabled),
    "isInitialized": (()=>isInitialized),
    "lastEventId": (()=>lastEventId),
    "setContext": (()=>setContext),
    "setExtra": (()=>setExtra),
    "setExtras": (()=>setExtras),
    "setTag": (()=>setTag),
    "setTags": (()=>setTags),
    "setUser": (()=>setUser),
    "startSession": (()=>startSession),
    "withMonitor": (()=>withMonitor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$prepareEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/prepareEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
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
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception The exception to capture.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured Sentry event.
 */ function captureException(exception, hint) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().captureException(exception, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$prepareEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventHintOrCaptureContext"])(hint));
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param captureContext Define the level of the message or pass in additional data to attach to the message.
 * @returns the id of the captured message.
 */ function captureMessage(message, captureContext) {
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    const level = typeof captureContext === 'string' ? captureContext : undefined;
    const context = typeof captureContext !== 'string' ? {
        captureContext
    } : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().captureMessage(message, level, context);
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured event.
 */ function captureEvent(event, hint) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().captureEvent(event, hint);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */ function setContext(name, context) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setContext(name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */ function setExtras(extras) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setExtras(extras);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */ function setExtra(key, extra) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setExtra(key, extra);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */ function setTags(tags) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setTags(tags);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */ function setTag(key, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setTag(key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */ function setUser(user) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setUser(user);
}
/**
 * The last error event id of the isolation scope.
 *
 * Warning: This function really returns the last recorded error event id on the current
 * isolation scope. If you call this function after handling a certain error and another error
 * is captured in between, the last one is returned instead of the one you might expect.
 * Also, ids of events that were never sent to Sentry (for example because
 * they were dropped in `beforeSend`) could be returned.
 *
 * @returns The last event id of the isolation scope.
 */ function lastEventId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().lastEventId();
}
/**
 * Create a cron monitor check in and send it to Sentry.
 *
 * @param checkIn An object that describes a check in.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */ function captureCheckIn(checkIn, upsertMonitorConfig) {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Cannot capture check-in. No client defined.');
    } else if (!client.captureCheckIn) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Cannot capture check-in. Client does not support sending check-ins.');
    } else {
        return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
}
/**
 * Wraps a callback with a cron monitor check in. The check in will be sent to Sentry when the callback finishes.
 *
 * @param monitorSlug The distinct slug of the monitor.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */ function withMonitor(monitorSlug, callback, upsertMonitorConfig) {
    const checkInId = captureCheckIn({
        monitorSlug,
        status: 'in_progress'
    }, upsertMonitorConfig);
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    function finishCheckIn(status) {
        captureCheckIn({
            monitorSlug,
            status,
            checkInId,
            duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() - now
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withIsolationScope"])(()=>{
        let maybePromiseResult;
        try {
            maybePromiseResult = callback();
        } catch (e) {
            finishCheckIn('error');
            throw e;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(maybePromiseResult)) {
            Promise.resolve(maybePromiseResult).then(()=>{
                finishCheckIn('ok');
            }, (e)=>{
                finishCheckIn('error');
                throw e;
            });
        } else {
            finishCheckIn('ok');
        }
        return maybePromiseResult;
    });
}
/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */ async function flush(timeout) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (client) {
        return client.flush(timeout);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Cannot flush events. No client defined.');
    return Promise.resolve(false);
}
/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */ async function close(timeout) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (client) {
        return client.close(timeout);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Cannot flush events and disable SDK. No client defined.');
    return Promise.resolve(false);
}
/**
 * Returns true if Sentry has been properly initialized.
 */ function isInitialized() {
    return !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
}
/** If the SDK is initialized & enabled. */ function isEnabled() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    return client?.getOptions().enabled !== false && !!client?.getTransport();
}
/**
 * Add an event processor.
 * This will be added to the current isolation scope, ensuring any event that is processed in the current execution
 * context will have the processor applied.
 */ function addEventProcessor(callback) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().addEventProcessor(callback);
}
/**
 * Start a session on the current isolation scope.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns the new active session
 */ function startSession(context) {
    const isolationScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])();
    const currentScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    // Will fetch userAgent if called from browser sdk
    const { userAgent } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].navigator || {};
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeSession"])({
        user: currentScope.getUser() || isolationScope.getUser(),
        ...userAgent && {
            userAgent
        },
        ...context
    });
    // End existing session if there's one
    const currentSession = isolationScope.getSession();
    if (currentSession?.status === 'ok') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSession"])(currentSession, {
            status: 'exited'
        });
    }
    endSession();
    // Afterwards we set the new session on the scope
    isolationScope.setSession(session);
    return session;
}
/**
 * End the session on the current isolation scope.
 */ function endSession() {
    const isolationScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])();
    const currentScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const session = currentScope.getSession() || isolationScope.getSession();
    if (session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeSession"])(session);
    }
    _sendSessionUpdate();
    // the session is over; take it off of the scope
    isolationScope.setSession();
}
/**
 * Sends the current Session on the scope
 */ function _sendSessionUpdate() {
    const isolationScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    const session = isolationScope.getSession();
    if (session && client) {
        client.captureSession(session);
    }
}
/**
 * Sends the current session on the scope to Sentry
 *
 * @param end If set the session will be marked as exited and removed from the scope.
 *            Defaults to `false`.
 */ function captureSession(end = false) {
    // both send the update and pull the session from the scope
    if (end) {
        endSession();
        return;
    }
    // only send the update
    _sendSessionUpdate();
}
;
 //# sourceMappingURL=exports.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addIntegration": (()=>addIntegration),
    "afterSetupIntegrations": (()=>afterSetupIntegrations),
    "defineIntegration": (()=>defineIntegration),
    "getIntegrationsToSetup": (()=>getIntegrationsToSetup),
    "installedIntegrations": (()=>installedIntegrations),
    "setupIntegration": (()=>setupIntegration),
    "setupIntegrations": (()=>setupIntegrations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
;
const installedIntegrations = [];
/** Map of integrations assigned to a client */ /**
 * Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
 * preserve the order of integrations in the array.
 *
 * @private
 */ function filterDuplicates(integrations) {
    const integrationsByName = {};
    integrations.forEach((currentInstance)=>{
        const { name } = currentInstance;
        const existingInstance = integrationsByName[name];
        // We want integrations later in the array to overwrite earlier ones of the same type, except that we never want a
        // default instance to overwrite an existing user instance
        if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
            return;
        }
        integrationsByName[name] = currentInstance;
    });
    return Object.values(integrationsByName);
}
/** Gets integrations to install */ function getIntegrationsToSetup(options) {
    const defaultIntegrations = options.defaultIntegrations || [];
    const userIntegrations = options.integrations;
    // We flag default instances, so that later we can tell them apart from any user-created instances of the same class
    defaultIntegrations.forEach((integration)=>{
        integration.isDefaultInstance = true;
    });
    let integrations;
    if (Array.isArray(userIntegrations)) {
        integrations = [
            ...defaultIntegrations,
            ...userIntegrations
        ];
    } else if (typeof userIntegrations === 'function') {
        const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
        integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [
            resolvedUserIntegrations
        ];
    } else {
        integrations = defaultIntegrations;
    }
    return filterDuplicates(integrations);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */ function setupIntegrations(client, integrations) {
    const integrationIndex = {};
    integrations.forEach((integration)=>{
        // guard against empty provided integrations
        if (integration) {
            setupIntegration(client, integration, integrationIndex);
        }
    });
    return integrationIndex;
}
/**
 * Execute the `afterAllSetup` hooks of the given integrations.
 */ function afterSetupIntegrations(client, integrations) {
    for (const integration of integrations){
        // guard against empty provided integrations
        if (integration?.afterAllSetup) {
            integration.afterAllSetup(client);
        }
    }
}
/** Setup a single integration.  */ function setupIntegration(client, integration, integrationIndex) {
    if (integrationIndex[integration.name]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Integration skipped because it was already installed: ${integration.name}`);
        return;
    }
    integrationIndex[integration.name] = integration;
    // `setupOnce` is only called the first time
    if (installedIntegrations.indexOf(integration.name) === -1 && typeof integration.setupOnce === 'function') {
        integration.setupOnce();
        installedIntegrations.push(integration.name);
    }
    // `setup` is run for each client
    if (integration.setup && typeof integration.setup === 'function') {
        integration.setup(client);
    }
    if (typeof integration.preprocessEvent === 'function') {
        const callback = integration.preprocessEvent.bind(integration);
        client.on('preprocessEvent', (event, hint)=>callback(event, hint, client));
    }
    if (typeof integration.processEvent === 'function') {
        const callback = integration.processEvent.bind(integration);
        const processor = Object.assign((event, hint)=>callback(event, hint, client), {
            id: integration.name
        });
        client.addEventProcessor(processor);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Integration installed: ${integration.name}`);
}
/** Add an integration to the current scope's client. */ function addIntegration(integration) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Cannot add integration "${integration.name}" because no SDK Client is available.`);
        return;
    }
    client.addIntegration(integration);
}
/**
 * Define an integration function that can be used to create an integration instance.
 * Note that this by design hides the implementation details of the integration, as they are considered internal.
 */ function defineIntegration(fn) {
    return fn;
}
;
 //# sourceMappingURL=integration.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/eventUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Get a list of possible event messages from a Sentry event.
 */ __turbopack_context__.s({
    "getPossibleEventMessages": (()=>getPossibleEventMessages)
});
function getPossibleEventMessages(event) {
    const possibleMessages = [];
    if (event.message) {
        possibleMessages.push(event.message);
    }
    try {
        // @ts-expect-error Try catching to save bundle size
        const lastException = event.exception.values[event.exception.values.length - 1];
        if (lastException?.value) {
            possibleMessages.push(lastException.value);
            if (lastException.type) {
                possibleMessages.push(`${lastException.type}: ${lastException.value}`);
            }
        }
    } catch (e) {
    // ignore errors here
    }
    return possibleMessages;
}
;
 //# sourceMappingURL=eventUtils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integrations/eventFilters.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventFiltersIntegration": (()=>eventFiltersIntegration),
    "inboundFiltersIntegration": (()=>inboundFiltersIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$eventUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/eventUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
;
;
;
;
;
;
// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
const DEFAULT_IGNORE_ERRORS = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    'can\'t redefine non-configurable property "solana"',
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/
];
/** Options for the EventFilters integration */ const INTEGRATION_NAME = 'EventFilters';
/**
 * An integration that filters out events (errors and transactions) based on:
 *
 * - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
 * - (Errors) A list of error messages or urls/filenames passed in via
 *   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
 *   - The same options passed to the integration directly via @param options
 * - (Transactions/Spans) A list of root span (transaction) names passed in via
 *   - Top level Sentry.init option (`ignoreTransactions`)
 *   - The same option passed to the integration directly via @param options
 *
 * Events filtered by this integration will not be sent to Sentry.
 */ const eventFiltersIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])((options = {})=>{
    let mergedOptions;
    return {
        name: INTEGRATION_NAME,
        setup (client) {
            const clientOptions = client.getOptions();
            mergedOptions = _mergeOptions(options, clientOptions);
        },
        processEvent (event, _hint, client) {
            if (!mergedOptions) {
                const clientOptions = client.getOptions();
                mergedOptions = _mergeOptions(options, clientOptions);
            }
            return _shouldDropEvent(event, mergedOptions) ? null : event;
        }
    };
});
/**
 * An integration that filters out events (errors and transactions) based on:
 *
 * - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
 * - (Errors) A list of error messages or urls/filenames passed in via
 *   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
 *   - The same options passed to the integration directly via @param options
 * - (Transactions/Spans) A list of root span (transaction) names passed in via
 *   - Top level Sentry.init option (`ignoreTransactions`)
 *   - The same option passed to the integration directly via @param options
 *
 * Events filtered by this integration will not be sent to Sentry.
 *
 * @deprecated this integration was renamed and will be removed in a future major version.
 * Use `eventFiltersIntegration` instead.
 */ const inboundFiltersIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])((options = {})=>{
    return {
        ...eventFiltersIntegration(options),
        name: 'InboundFilters'
    };
});
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
        allowUrls: [
            ...internalOptions.allowUrls || [],
            ...clientOptions.allowUrls || []
        ],
        denyUrls: [
            ...internalOptions.denyUrls || [],
            ...clientOptions.denyUrls || []
        ],
        ignoreErrors: [
            ...internalOptions.ignoreErrors || [],
            ...clientOptions.ignoreErrors || [],
            ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
        ],
        ignoreTransactions: [
            ...internalOptions.ignoreTransactions || [],
            ...clientOptions.ignoreTransactions || []
        ]
    };
}
function _shouldDropEvent(event, options) {
    if (!event.type) {
        // Filter errors
        if (_isIgnoredError(event, options.ignoreErrors)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)}`);
            return true;
        }
        if (_isUselessError(event)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)}`);
            return true;
        }
        if (_isDeniedUrl(event, options.denyUrls)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
            return true;
        }
        if (!_isAllowedUrl(event, options.allowUrls)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
            return true;
        }
    } else if (event.type === 'transaction') {
        // Filter transactions
        if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)}`);
            return true;
        }
    }
    return false;
}
function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors?.length) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$eventUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPossibleEventMessages"])(event).some((message)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
    if (!ignoreTransactions?.length) {
        return false;
    }
    const name = event.transaction;
    return name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(name, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
    if (!denyUrls?.length) {
        return false;
    }
    const url = _getEventFilterUrl(event);
    return !url ? false : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
    if (!allowUrls?.length) {
        return true;
    }
    const url = _getEventFilterUrl(event);
    return !url ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(url, allowUrls);
}
function _getLastValidUrl(frames = []) {
    for(let i = frames.length - 1; i >= 0; i--){
        const frame = frames[i];
        if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
            return frame.filename || null;
        }
    }
    return null;
}
function _getEventFilterUrl(event) {
    try {
        // If there are linked exceptions or exception aggregates we only want to match against the top frame of the "root" (the main exception)
        // The root always comes last in linked exceptions
        const rootException = [
            ...event.exception?.values ?? []
        ].reverse().find((value)=>value.mechanism?.parent_id === undefined && value.stacktrace?.frames?.length);
        const frames = rootException?.stacktrace?.frames;
        return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Cannot extract url for event ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)}`);
        return null;
    }
}
function _isUselessError(event) {
    // We only want to consider events for dropping that actually have recorded exception values.
    if (!event.exception?.values?.length) {
        return false;
    }
    return(// No top-level message
    !event.message && // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some((value)=>value.stacktrace || value.type && value.type !== 'Error' || value.value));
}
;
 //# sourceMappingURL=eventFilters.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integrations/functiontostring.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "functionToStringIntegration": (()=>functionToStringIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
;
;
;
let originalFunctionToString;
const INTEGRATION_NAME = 'FunctionToString';
const SETUP_CLIENTS = new WeakMap();
const _functionToStringIntegration = ()=>{
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            originalFunctionToString = Function.prototype.toString;
            // intrinsics (like Function.prototype) might be immutable in some environments
            // e.g. Node with --frozen-intrinsics, XS (an embedded JavaScript engine) or SES (a JavaScript proposal)
            try {
                Function.prototype.toString = function(...args) {
                    const originalFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginalFunction"])(this);
                    const context = SETUP_CLIENTS.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])()) && originalFunction !== undefined ? originalFunction : this;
                    return originalFunctionToString.apply(context, args);
                };
            } catch  {
            // ignore errors here, just don't patch this
            }
        },
        setup (client) {
            SETUP_CLIENTS.set(client, true);
        }
    };
};
/**
 * Patch toString calls to return proper name for wrapped functions.
 *
 * ```js
 * Sentry.init({
 *   integrations: [
 *     functionToStringIntegration(),
 *   ],
 * });
 * ```
 */ const functionToStringIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_functionToStringIntegration);
;
 //# sourceMappingURL=functiontostring.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integrations/dedupe.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_shouldDropEvent": (()=>_shouldDropEvent),
    "dedupeIntegration": (()=>dedupeIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
;
;
;
;
const INTEGRATION_NAME = 'Dedupe';
const _dedupeIntegration = ()=>{
    let previousEvent;
    return {
        name: INTEGRATION_NAME,
        processEvent (currentEvent) {
            // We want to ignore any non-error type events, e.g. transactions or replays
            // These should never be deduped, and also not be compared against as _previousEvent.
            if (currentEvent.type) {
                return currentEvent;
            }
            // Juuust in case something goes wrong
            try {
                if (_shouldDropEvent(currentEvent, previousEvent)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Event dropped due to being a duplicate of previously captured event.');
                    return null;
                }
            } catch (_oO) {} // eslint-disable-line no-empty
            return previousEvent = currentEvent;
        }
    };
};
/**
 * Deduplication filter.
 */ const dedupeIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_dedupeIntegration);
/** only exported for tests. */ function _shouldDropEvent(currentEvent, previousEvent) {
    if (!previousEvent) {
        return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
        return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
        return true;
    }
    return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
    const currentMessage = currentEvent.message;
    const previousMessage = previousEvent.message;
    // If neither event has a message property, they were both exceptions, so bail out
    if (!currentMessage && !previousMessage) {
        return false;
    }
    // If only one event has a stacktrace, but not the other one, they are not the same
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
        return false;
    }
    if (currentMessage !== previousMessage) {
        return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
    }
    return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
    const previousException = _getExceptionFromEvent(previousEvent);
    const currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
        return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
        return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
    }
    return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFramesFromEvent"])(currentEvent);
    let previousFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFramesFromEvent"])(previousEvent);
    // If neither event has a stacktrace, they are assumed to be the same
    if (!currentFrames && !previousFrames) {
        return true;
    }
    // If only one event has a stacktrace, but not the other one, they are not the same
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
        return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    // If number of frames differ, they are not the same
    if (previousFrames.length !== currentFrames.length) {
        return false;
    }
    // Otherwise, compare the two
    for(let i = 0; i < previousFrames.length; i++){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const frameA = previousFrames[i];
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const frameB = currentFrames[i];
        if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
            return false;
        }
    }
    return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    // If neither event has a fingerprint, they are assumed to be the same
    if (!currentFingerprint && !previousFingerprint) {
        return true;
    }
    // If only one event has a fingerprint, but not the other one, they are not the same
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
        return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    // Otherwise, compare the two
    try {
        return !!(currentFingerprint.join('') === previousFingerprint.join(''));
    } catch (_oO) {
        return false;
    }
}
function _getExceptionFromEvent(event) {
    return event.exception?.values && event.exception.values[0];
}
;
 //# sourceMappingURL=dedupe.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/sdk.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initAndBind": (()=>initAndBind),
    "setCurrentClient": (()=>setCurrentClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
;
/** A class object that can instantiate Client objects. */ /**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */ function initAndBind(clientClass, options) {
    if (options.debug === true) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].enable();
        } else {
            // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
                // eslint-disable-next-line no-console
                console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
            });
        }
    }
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    scope.update(options.initialScope);
    const client = new clientClass(options);
    setCurrentClient(client);
    client.init();
    return client;
}
/**
 * Make the given client the current client.
 */ function setCurrentClient(client) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().setClient(client);
}
;
 //# sourceMappingURL=sdk.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnvelopeEndpointWithUrlEncodedAuth": (()=>getEnvelopeEndpointWithUrlEncodedAuth),
    "getReportDialogEndpoint": (()=>getReportDialogEndpoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
;
const SENTRY_API_VERSION = '7';
/** Returns the prefix to construct Sentry ingestion API endpoints. */ function getBaseApiEndpoint(dsn) {
    const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
    const port = dsn.port ? `:${dsn.port}` : '';
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
}
/** Returns the ingest API endpoint for target. */ function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
/** Returns a URL-encoded string with auth config suitable for a query string. */ function _encodedAuth(dsn, sdkInfo) {
    const params = {
        sentry_version: SENTRY_API_VERSION
    };
    if (dsn.publicKey) {
        // We send only the minimum set of required information. See
        // https://github.com/getsentry/sentry-javascript/issues/2572.
        params.sentry_key = dsn.publicKey;
    }
    if (sdkInfo) {
        params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
    }
    return new URLSearchParams(params).toString();
}
/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */ function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
/** Returns the url to the report dialog endpoint. */ function getReportDialogEndpoint(dsnLike, dialogOptions) {
    const dsn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDsn"])(dsnLike);
    if (!dsn) {
        return '';
    }
    const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
    let encodedOptions = `dsn=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn)}`;
    for(const key in dialogOptions){
        if (key === 'dsn') {
            continue;
        }
        if (key === 'onClose') {
            continue;
        }
        if (key === 'user') {
            const user = dialogOptions.user;
            if (!user) {
                continue;
            }
            if (user.name) {
                encodedOptions += `&name=${encodeURIComponent(user.name)}`;
            }
            if (user.email) {
                encodedOptions += `&email=${encodeURIComponent(user.email)}`;
            }
        } else {
            encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
        }
    }
    return `${endpoint}?${encodedOptions}`;
}
;
 //# sourceMappingURL=api.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addItemToEnvelope": (()=>addItemToEnvelope),
    "createAttachmentEnvelopeItem": (()=>createAttachmentEnvelopeItem),
    "createEnvelope": (()=>createEnvelope),
    "createEventEnvelopeHeaders": (()=>createEventEnvelopeHeaders),
    "createSpanEnvelopeItem": (()=>createSpanEnvelopeItem),
    "envelopeContainsItemType": (()=>envelopeContainsItemType),
    "envelopeItemTypeToDataCategory": (()=>envelopeItemTypeToDataCategory),
    "forEachEnvelopeItem": (()=>forEachEnvelopeItem),
    "getSdkMetadataForEnvelopeHeader": (()=>getSdkMetadataForEnvelopeHeader),
    "parseEnvelope": (()=>parseEnvelope),
    "serializeEnvelope": (()=>serializeEnvelope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */ function createEnvelope(headers, items = []) {
    return [
        headers,
        items
    ];
}
/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */ function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [
        headers,
        [
            ...items,
            newItem
        ]
    ];
}
/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 *
 * If the callback returns true, the rest of the items will be skipped.
 */ function forEachEnvelopeItem(envelope, callback) {
    const envelopeItems = envelope[1];
    for (const envelopeItem of envelopeItems){
        const envelopeItemType = envelopeItem[0].type;
        const result = callback(envelopeItem, envelopeItemType);
        if (result) {
            return true;
        }
    }
    return false;
}
/**
 * Returns true if the envelope contains any of the given envelope item types
 */ function envelopeContainsItemType(envelope, types) {
    return forEachEnvelopeItem(envelope, (_, type)=>types.includes(type));
}
/**
 * Encode a string to UTF8 array.
 */ function encodeUTF8(input) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]);
    return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
/**
 * Decode a UTF8 array to string.
 */ function decodeUTF8(input) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]);
    return carrier.decodePolyfill ? carrier.decodePolyfill(input) : new TextDecoder().decode(input);
}
/**
 * Serializes an envelope.
 */ function serializeEnvelope(envelope) {
    const [envHeaders, items] = envelope;
    // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
    let parts = JSON.stringify(envHeaders);
    function append(next) {
        if (typeof parts === 'string') {
            parts = typeof next === 'string' ? parts + next : [
                encodeUTF8(parts),
                next
            ];
        } else {
            parts.push(typeof next === 'string' ? encodeUTF8(next) : next);
        }
    }
    for (const item of items){
        const [itemHeaders, payload] = item;
        append(`\n${JSON.stringify(itemHeaders)}\n`);
        if (typeof payload === 'string' || payload instanceof Uint8Array) {
            append(payload);
        } else {
            let stringifiedPayload;
            try {
                stringifiedPayload = JSON.stringify(payload);
            } catch (e) {
                // In case, despite all our efforts to keep `payload` circular-dependency-free, `JSON.stringify()` still
                // fails, we try again after normalizing it again with infinite normalization depth. This of course has a
                // performance impact but in this case a performance hit is better than throwing.
                stringifiedPayload = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(payload));
            }
            append(stringifiedPayload);
        }
    }
    return typeof parts === 'string' ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf)=>acc + buf.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers){
        merged.set(buffer, offset);
        offset += buffer.length;
    }
    return merged;
}
/**
 * Parses an envelope
 */ function parseEnvelope(env) {
    let buffer = typeof env === 'string' ? encodeUTF8(env) : env;
    function readBinary(length) {
        const bin = buffer.subarray(0, length);
        // Replace the buffer with the remaining data excluding trailing newline
        buffer = buffer.subarray(length + 1);
        return bin;
    }
    function readJson() {
        let i = buffer.indexOf(0xa);
        // If we couldn't find a newline, we must have found the end of the buffer
        if (i < 0) {
            i = buffer.length;
        }
        return JSON.parse(decodeUTF8(readBinary(i)));
    }
    const envelopeHeader = readJson();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = [];
    while(buffer.length){
        const itemHeader = readJson();
        const binaryLength = typeof itemHeader.length === 'number' ? itemHeader.length : undefined;
        items.push([
            itemHeader,
            binaryLength ? readBinary(binaryLength) : readJson()
        ]);
    }
    return [
        envelopeHeader,
        items
    ];
}
/**
 * Creates envelope item for a single span
 */ function createSpanEnvelopeItem(spanJson) {
    const spanHeaders = {
        type: 'span'
    };
    return [
        spanHeaders,
        spanJson
    ];
}
/**
 * Creates attachment envelope items
 */ function createAttachmentEnvelopeItem(attachment) {
    const buffer = typeof attachment.data === 'string' ? encodeUTF8(attachment.data) : attachment.data;
    return [
        {
            type: 'attachment',
            length: buffer.length,
            filename: attachment.filename,
            content_type: attachment.contentType,
            attachment_type: attachment.attachmentType
        },
        buffer
    ];
}
const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: 'session',
    sessions: 'session',
    attachment: 'attachment',
    transaction: 'transaction',
    event: 'error',
    client_report: 'internal',
    user_report: 'default',
    profile: 'profile',
    profile_chunk: 'profile',
    replay_event: 'replay',
    replay_recording: 'replay',
    check_in: 'monitor',
    feedback: 'feedback',
    span: 'span',
    raw_security: 'security',
    log: 'log_item'
};
/**
 * Maps the type of an envelope item to a data category.
 */ function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}
/** Extracts the minimal SDK info from the metadata or an events */ function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent?.sdk) {
        return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return {
        name,
        version
    };
}
/**
 * Creates event envelope headers, based on event, sdk info and tunnel
 * Note: This function was extracted from the core package to make it available in Replay
 */ function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
    return {
        event_id: event.event_id,
        sent_at: new Date().toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && dsn && {
            dsn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn)
        },
        ...dynamicSamplingContext && {
            trace: dynamicSamplingContext
        }
    };
}
;
 //# sourceMappingURL=envelope.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/envelope.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createEventEnvelope": (()=>createEventEnvelope),
    "createSessionEnvelope": (()=>createSessionEnvelope),
    "createSpanEnvelope": (()=>createSpanEnvelope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/ function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [
        ...event.sdk.integrations || [],
        ...sdkInfo.integrations || []
    ];
    event.sdk.packages = [
        ...event.sdk.packages || [],
        ...sdkInfo.packages || []
    ];
    return event;
}
/** Creates an envelope from a Session */ function createSessionEnvelope(session, dsn, metadata, tunnel) {
    const sdkInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkMetadataForEnvelopeHeader"])(metadata);
    const envelopeHeaders = {
        sent_at: new Date().toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && dsn && {
            dsn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn)
        }
    };
    const envelopeItem = 'aggregates' in session ? [
        {
            type: 'sessions'
        },
        session
    ] : [
        {
            type: 'session'
        },
        session.toJSON()
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(envelopeHeaders, [
        envelopeItem
    ]);
}
/**
 * Create an Envelope from an event.
 */ function createEventEnvelope(event, dsn, metadata, tunnel) {
    const sdkInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkMetadataForEnvelopeHeader"])(metadata);
    /*
    Note: Due to TS, event.type may be `replay_event`, theoretically.
    In practice, we never call `createEventEnvelope` with `replay_event` type,
    and we'd have to adjust a looot of types to make this work properly.
    We want to avoid casting this around, as that could lead to bugs (e.g. when we add another type)
    So the safe choice is to really guard against the replay_event type here.
  */ const eventType = event.type && event.type !== 'replay_event' ? event.type : 'event';
    enhanceEventWithSdkInfo(event, metadata?.sdk);
    const envelopeHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventEnvelopeHeaders"])(event, sdkInfo, tunnel, dsn);
    // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
    // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
    // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
    // of this `delete`, lest we miss putting it back in the next time the property is in use.)
    delete event.sdkProcessingMetadata;
    const eventItem = [
        {
            type: eventType
        },
        event
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(envelopeHeaders, [
        eventItem
    ]);
}
/**
 * Create envelope from Span item.
 *
 * Takes an optional client and runs spans through `beforeSendSpan` if available.
 */ function createSpanEnvelope(spans, client) {
    function dscHasRequiredProps(dsc) {
        return !!dsc.trace_id && !!dsc.public_key;
    }
    // For the moment we'll obtain the DSC from the first span in the array
    // This might need to be changed if we permit sending multiple spans from
    // different segments in one envelope
    const dsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(spans[0]);
    const dsn = client?.getDsn();
    const tunnel = client?.getOptions().tunnel;
    const headers = {
        sent_at: new Date().toISOString(),
        ...dscHasRequiredProps(dsc) && {
            trace: dsc
        },
        ...!!tunnel && dsn && {
            dsn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn)
        }
    };
    const beforeSendSpan = client?.getOptions().beforeSendSpan;
    const convertToSpanJSON = beforeSendSpan ? (span)=>{
        const spanJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
        const processedSpan = beforeSendSpan(spanJson);
        if (!processedSpan) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showSpanDropWarning"])();
            return spanJson;
        }
        return processedSpan;
    } : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"];
    const items = [];
    for (const span of spans){
        const spanJson = convertToSpanJSON(span);
        if (spanJson) {
            items.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpanEnvelopeItem"])(spanJson));
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(headers, items);
}
;
 //# sourceMappingURL=envelope.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/transactionEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertSpanJsonToTransactionEvent": (()=>convertSpanJsonToTransactionEvent),
    "convertTransactionEventToSpanJson": (()=>convertTransactionEventToSpanJson)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
;
/**
 * Converts a transaction event to a span JSON object.
 */ function convertTransactionEventToSpanJson(event) {
    const { trace_id, parent_span_id, span_id, status, origin, data, op } = event.contexts?.trace ?? {};
    return {
        data: data ?? {},
        description: event.transaction,
        op,
        parent_span_id,
        span_id: span_id ?? '',
        start_timestamp: event.start_timestamp ?? 0,
        status,
        timestamp: event.timestamp,
        trace_id: trace_id ?? '',
        origin,
        profile_id: data?.[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_PROFILE_ID"]],
        exclusive_time: data?.[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]],
        measurements: event.measurements,
        is_segment: true
    };
}
/**
 * Converts a span JSON object to a transaction event.
 */ function convertSpanJsonToTransactionEvent(span) {
    return {
        type: 'transaction',
        timestamp: span.timestamp,
        start_timestamp: span.start_timestamp,
        transaction: span.description,
        contexts: {
            trace: {
                trace_id: span.trace_id,
                span_id: span.span_id,
                parent_span_id: span.parent_span_id,
                op: span.op,
                status: span.status,
                origin: span.origin,
                data: {
                    ...span.data,
                    ...span.profile_id && {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_PROFILE_ID"]]: span.profile_id
                    },
                    ...span.exclusive_time && {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: span.exclusive_time
                    }
                }
            }
        },
        measurements: span.measurements
    };
}
;
 //# sourceMappingURL=transactionEvent.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/clientreport.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createClientReportEnvelope": (()=>createClientReportEnvelope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
;
;
/**
 * Creates client report envelope
 * @param discarded_events An array of discard events
 * @param dsn A DSN that can be set on the header. Optional.
 */ function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    const clientReportItem = [
        {
            type: 'client_report'
        },
        {
            timestamp: timestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampInSeconds"])(),
            discarded_events
        }
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(dsn ? {
        dsn
    } : {}, [
        clientReportItem
    ]);
}
;
 //# sourceMappingURL=clientreport.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/client.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseClient": (()=>BaseClient),
    "Client": (()=>Client),
    "_getTraceInfoFromScope": (()=>_getTraceInfoFromScope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/envelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$eventUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/eventUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$prepareEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/prepareEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$transactionEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/transactionEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$clientreport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/clientreport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)");
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
/* eslint-disable max-lines */ const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
const MISSING_RELEASE_FOR_SESSION_ERROR = 'Discarded session because of missing or non-string release';
const INTERNAL_ERROR_SYMBOL = Symbol.for('SentryInternalError');
const DO_NOT_SEND_EVENT_SYMBOL = Symbol.for('SentryDoNotSendEventError');
function _makeInternalError(message) {
    return {
        message,
        [INTERNAL_ERROR_SYMBOL]: true
    };
}
function _makeDoNotSendEventError(message) {
    return {
        message,
        [DO_NOT_SEND_EVENT_SYMBOL]: true
    };
}
function _isInternalError(error) {
    return !!error && typeof error === 'object' && INTERNAL_ERROR_SYMBOL in error;
}
function _isDoNotSendEventError(error) {
    return !!error && typeof error === 'object' && DO_NOT_SEND_EVENT_SYMBOL in error;
}
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link Client._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends Client<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */ class Client {
    /** Options passed to the SDK. */ /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */ /** Array of set up integrations. */ /** Number of calls being processed */ /** Holds flushable  */ // eslint-disable-next-line @typescript-eslint/ban-types
    /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */ constructor(options){
        this._options = options;
        this._integrations = {};
        this._numProcessing = 0;
        this._outcomes = {};
        this._hooks = {};
        this._eventProcessors = [];
        if (options.dsn) {
            this._dsn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDsn"])(options.dsn);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('No DSN provided, client will not send events.');
        }
        if (this._dsn) {
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnvelopeEndpointWithUrlEncodedAuth"])(this._dsn, options.tunnel, options._metadata ? options._metadata.sdk : undefined);
            this._transport = options.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...options.transportOptions,
                url
            });
        }
    }
    /**
   * Captures an exception event and sends it to Sentry.
   *
   * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
   */ captureException(exception, hint, scope) {
        const eventId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        // ensure we haven't captured this very object before
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOrSetAlreadyCaught"])(exception)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(ALREADY_SEEN_ERROR);
            return eventId;
        }
        const hintWithEventId = {
            event_id: eventId,
            ...hint
        };
        this._process(this.eventFromException(exception, hintWithEventId).then((event)=>this._captureEvent(event, hintWithEventId, scope)));
        return hintWithEventId.event_id;
    }
    /**
   * Captures a message event and sends it to Sentry.
   *
   * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
   */ captureMessage(message, level, hint, currentScope) {
        const hintWithEventId = {
            event_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])(),
            ...hint
        };
        const eventMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParameterizedString"])(message) ? message : String(message);
        const promisedEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(message) ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
        this._process(promisedEvent.then((event)=>this._captureEvent(event, hintWithEventId, currentScope)));
        return hintWithEventId.event_id;
    }
    /**
   * Captures a manually created event and sends it to Sentry.
   *
   * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
   */ captureEvent(event, hint, currentScope) {
        const eventId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        // ensure we haven't captured this very object before
        if (hint?.originalException && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkOrSetAlreadyCaught"])(hint.originalException)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(ALREADY_SEEN_ERROR);
            return eventId;
        }
        const hintWithEventId = {
            event_id: eventId,
            ...hint
        };
        const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
        const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
        const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
        this._process(this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope));
        return hintWithEventId.event_id;
    }
    /**
   * Captures a session.
   */ captureSession(session) {
        this.sendSession(session);
        // After sending, we set init false to indicate it's not the first occurrence
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSession"])(session, {
            init: false
        });
    }
    /**
   * Create a cron monitor check in and send it to Sentry. This method is not available on all clients.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   * @param scope An optional scope containing event metadata.
   * @returns A string representing the id of the check in.
   */ /**
   * Get the current Dsn.
   */ getDsn() {
        return this._dsn;
    }
    /**
   * Get the current options.
   */ getOptions() {
        return this._options;
    }
    /**
   * Get the SDK metadata.
   * @see SdkMetadata
   */ getSdkMetadata() {
        return this._options._metadata;
    }
    /**
   * Returns the transport that is used by the client.
   * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
   */ getTransport() {
        return this._transport;
    }
    /**
   * Wait for all events to be sent or the timeout to expire, whichever comes first.
   *
   * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
   *   cause the client to wait until all events are sent before resolving the promise.
   * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
   * still events in the queue when the timeout is reached.
   */ flush(timeout) {
        const transport = this._transport;
        if (transport) {
            this.emit('flush');
            return this._isClientDoneProcessing(timeout).then((clientFinished)=>{
                return transport.flush(timeout).then((transportFlushed)=>clientFinished && transportFlushed);
            });
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])(true);
        }
    }
    /**
   * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
   *
   * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
   *   the client to wait until all events are sent before disabling itself.
   * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
   * it doesn't.
   */ close(timeout) {
        return this.flush(timeout).then((result)=>{
            this.getOptions().enabled = false;
            this.emit('close');
            return result;
        });
    }
    /**
   * Get all installed event processors.
   */ getEventProcessors() {
        return this._eventProcessors;
    }
    /**
   * Adds an event processor that applies to any event processed by this client.
   */ addEventProcessor(eventProcessor) {
        this._eventProcessors.push(eventProcessor);
    }
    /**
   * Initialize this client.
   * Call this after the client was set on a scope.
   */ init() {
        if (this._isEnabled() || // Force integrations to be setup even if no DSN was set when we have
        // Spotlight enabled. This is particularly important for browser as we
        // don't support the `spotlight` option there and rely on the users
        // adding the `spotlightBrowserIntegration()` to their integrations which
        // wouldn't get initialized with the check below when there's no DSN set.
        this._options.integrations.some(({ name })=>name.startsWith('Spotlight'))) {
            this._setupIntegrations();
        }
    }
    /**
   * Gets an installed integration by its name.
   *
   * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
   */ getIntegrationByName(integrationName) {
        return this._integrations[integrationName];
    }
    /**
   * Add an integration to the client.
   * This can be used to e.g. lazy load integrations.
   * In most cases, this should not be necessary,
   * and you're better off just passing the integrations via `integrations: []` at initialization time.
   * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
   */ addIntegration(integration) {
        const isAlreadyInstalled = this._integrations[integration.name];
        // This hook takes care of only installing if not already installed
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupIntegration"])(this, integration, this._integrations);
        // Here we need to check manually to make sure to not run this multiple times
        if (!isAlreadyInstalled) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["afterSetupIntegrations"])(this, [
                integration
            ]);
        }
    }
    /**
   * Send a fully prepared event to Sentry.
   */ sendEvent(event, hint = {}) {
        this.emit('beforeSendEvent', event, hint);
        let env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventEnvelope"])(event, this._dsn, this._options._metadata, this._options.tunnel);
        for (const attachment of hint.attachments || []){
            env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItemToEnvelope"])(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAttachmentEnvelopeItem"])(attachment));
        }
        const promise = this.sendEnvelope(env);
        if (promise) {
            promise.then((sendResponse)=>this.emit('afterSendEvent', event, sendResponse), null);
        }
    }
    /**
   * Send a session or session aggregrates to Sentry.
   */ sendSession(session) {
        // Backfill release and environment on session
        const { release: clientReleaseOption, environment: clientEnvironmentOption = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ENVIRONMENT"] } = this._options;
        if ('aggregates' in session) {
            const sessionAttrs = session.attrs || {};
            if (!sessionAttrs.release && !clientReleaseOption) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(MISSING_RELEASE_FOR_SESSION_ERROR);
                return;
            }
            sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
            sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
            session.attrs = sessionAttrs;
        } else {
            if (!session.release && !clientReleaseOption) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(MISSING_RELEASE_FOR_SESSION_ERROR);
                return;
            }
            session.release = session.release || clientReleaseOption;
            session.environment = session.environment || clientEnvironmentOption;
        }
        this.emit('beforeSendSession', session);
        const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSessionEnvelope"])(session, this._dsn, this._options._metadata, this._options.tunnel);
        // sendEnvelope should not throw
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendEnvelope(env);
    }
    /**
   * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
   */ recordDroppedEvent(reason, category, count = 1) {
        if (this._options.sendClientReports) {
            // We want to track each category (error, transaction, session, replay_event) separately
            // but still keep the distinction between different type of outcomes.
            // We could use nested maps, but it's much easier to read and type this way.
            // A correct type for map-based implementation if we want to go that route
            // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
            // With typescript 4.1 we could even use template literal types
            const key = `${reason}:${category}`;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ''}`);
            this._outcomes[key] = (this._outcomes[key] || 0) + count;
        }
    }
    /* eslint-disable @typescript-eslint/unified-signatures */ /**
   * Register a callback for whenever a span is started.
   * Receives the span as argument.
   * @returns {() => void} A function that, when executed, removes the registered callback.
   */ /**
   * Register a hook on this client.
   */ on(hook, callback) {
        const hooks = this._hooks[hook] = this._hooks[hook] || [];
        // @ts-expect-error We assume the types are correct
        hooks.push(callback);
        // This function returns a callback execution handler that, when invoked,
        // deregisters a callback. This is crucial for managing instances where callbacks
        // need to be unregistered to prevent self-referencing in callback closures,
        // ensuring proper garbage collection.
        return ()=>{
            // @ts-expect-error We assume the types are correct
            const cbIndex = hooks.indexOf(callback);
            if (cbIndex > -1) {
                hooks.splice(cbIndex, 1);
            }
        };
    }
    /** Fire a hook whenever a span starts. */ /**
   * Emit a hook that was previously registered via `on()`.
   */ emit(hook, ...rest) {
        const callbacks = this._hooks[hook];
        if (callbacks) {
            callbacks.forEach((callback)=>callback(...rest));
        }
    }
    /**
   * Send an envelope to Sentry.
   */ sendEnvelope(envelope) {
        this.emit('beforeEnvelope', envelope);
        if (this._isEnabled() && this._transport) {
            return this._transport.send(envelope).then(null, (reason)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Error while sending envelope:', reason);
                return reason;
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Transport disabled');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])({});
    }
    /* eslint-enable @typescript-eslint/unified-signatures */ /** Setup integrations for this client. */ _setupIntegrations() {
        const { integrations } = this._options;
        this._integrations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupIntegrations"])(this, integrations);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["afterSetupIntegrations"])(this, integrations);
    }
    /** Updates existing session based on the provided event */ _updateSessionFromEvent(session, event) {
        let crashed = event.level === 'fatal';
        let errored = false;
        const exceptions = event.exception?.values;
        if (exceptions) {
            errored = true;
            for (const ex of exceptions){
                const mechanism = ex.mechanism;
                if (mechanism?.handled === false) {
                    crashed = true;
                    break;
                }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        const sessionNonTerminal = session.status === 'ok';
        const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
        if (shouldUpdateAndSend) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSession"])(session, {
                ...crashed && {
                    status: 'crashed'
                },
                errors: session.errors || Number(errored || crashed)
            });
            this.captureSession(session);
        }
    }
    /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */ _isClientDoneProcessing(timeout) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncPromise"]((resolve)=>{
            let ticked = 0;
            const tick = 1;
            const interval = setInterval(()=>{
                if (this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                } else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    }
    /** Determines whether this SDK is enabled and a transport is present. */ _isEnabled() {
        return this.getOptions().enabled !== false && this._transport !== undefined;
    }
    /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A new event with more information.
   */ _prepareEvent(event, hint, currentScope, isolationScope) {
        const options = this.getOptions();
        const integrations = Object.keys(this._integrations);
        if (!hint.integrations && integrations?.length) {
            hint.integrations = integrations;
        }
        this.emit('preprocessEvent', event, hint);
        if (!event.type) {
            isolationScope.setLastEventId(event.event_id || hint.event_id);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$prepareEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareEvent"])(options, event, hint, currentScope, this, isolationScope).then((evt)=>{
            if (evt === null) {
                return evt;
            }
            this.emit('postprocessEvent', evt, hint);
            evt.contexts = {
                trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraceContextFromScope"])(currentScope),
                ...evt.contexts
            };
            const dynamicSamplingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromScope"])(this, currentScope);
            evt.sdkProcessingMetadata = {
                dynamicSamplingContext,
                ...evt.sdkProcessingMetadata
            };
            return evt;
        });
    }
    /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */ _captureEvent(event, hint = {}, currentScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])(), isolationScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])()) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && isErrorEvent(event)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Captured error event \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$eventUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPossibleEventMessages"])(event)[0] || '<unknown>'}\``);
        }
        return this._processEvent(event, hint, currentScope, isolationScope).then((finalEvent)=>{
            return finalEvent.event_id;
        }, (reason)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
                if (_isDoNotSendEventError(reason)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(reason.message);
                } else if (_isInternalError(reason)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(reason.message);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(reason);
                }
            }
            return undefined;
        });
    }
    /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */ _processEvent(event, hint, currentScope, isolationScope) {
        const options = this.getOptions();
        const { sampleRate } = options;
        const isTransaction = isTransactionEvent(event);
        const isError = isErrorEvent(event);
        const eventType = event.type || 'error';
        const beforeSendLabel = `before send for type \`${eventType}\``;
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        const parsedSampleRate = typeof sampleRate === 'undefined' ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(sampleRate);
        if (isError && typeof parsedSampleRate === 'number' && Math.random() > parsedSampleRate) {
            this.recordDroppedEvent('sample_rate', 'error');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rejectedSyncPromise"])(_makeDoNotSendEventError(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`));
        }
        const dataCategory = eventType === 'replay_event' ? 'replay' : eventType;
        return this._prepareEvent(event, hint, currentScope, isolationScope).then((prepared)=>{
            if (prepared === null) {
                this.recordDroppedEvent('event_processor', dataCategory);
                throw _makeDoNotSendEventError('An event processor returned `null`, will not send event.');
            }
            const isInternalException = hint.data && hint.data.__sentry__ === true;
            if (isInternalException) {
                return prepared;
            }
            const result = processBeforeSend(this, options, prepared, hint);
            return _validateBeforeSendResult(result, beforeSendLabel);
        }).then((processedEvent)=>{
            if (processedEvent === null) {
                this.recordDroppedEvent('before_send', dataCategory);
                if (isTransaction) {
                    const spans = event.spans || [];
                    // the transaction itself counts as one span, plus all the child spans that are added
                    const spanCount = 1 + spans.length;
                    this.recordDroppedEvent('before_send', 'span', spanCount);
                }
                throw _makeDoNotSendEventError(`${beforeSendLabel} returned \`null\`, will not send event.`);
            }
            const session = currentScope.getSession() || isolationScope.getSession();
            if (isError && session) {
                this._updateSessionFromEvent(session, processedEvent);
            }
            if (isTransaction) {
                const spanCountBefore = processedEvent.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
                const spanCountAfter = processedEvent.spans ? processedEvent.spans.length : 0;
                const droppedSpanCount = spanCountBefore - spanCountAfter;
                if (droppedSpanCount > 0) {
                    this.recordDroppedEvent('before_send', 'span', droppedSpanCount);
                }
            }
            // None of the Sentry built event processor will update transaction name,
            // so if the transaction name has been changed by an event processor, we know
            // it has to come from custom event processor added by a user
            const transactionInfo = processedEvent.transaction_info;
            if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
                const source = 'custom';
                processedEvent.transaction_info = {
                    ...transactionInfo,
                    source
                };
            }
            this.sendEvent(processedEvent, hint);
            return processedEvent;
        }).then(null, (reason)=>{
            if (_isDoNotSendEventError(reason) || _isInternalError(reason)) {
                throw reason;
            }
            this.captureException(reason, {
                data: {
                    __sentry__: true
                },
                originalException: reason
            });
            throw _makeInternalError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`);
        });
    }
    /**
   * Occupies the client with processing and event
   */ _process(promise) {
        this._numProcessing++;
        void promise.then((value)=>{
            this._numProcessing--;
            return value;
        }, (reason)=>{
            this._numProcessing--;
            return reason;
        });
    }
    /**
   * Clears outcomes on this client and returns them.
   */ _clearOutcomes() {
        const outcomes = this._outcomes;
        this._outcomes = {};
        return Object.entries(outcomes).map(([key, quantity])=>{
            const [reason, category] = key.split(':');
            return {
                reason,
                category,
                quantity
            };
        });
    }
    /**
   * Sends client reports as an envelope.
   */ _flushOutcomes() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('Flushing outcomes...');
        const outcomes = this._clearOutcomes();
        if (outcomes.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('No outcomes to send');
            return;
        }
        // This is really the only place where we want to check for a DSN and only send outcomes then
        if (!this._dsn) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('No dsn provided, will not send outcomes');
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('Sending outcomes:', outcomes);
        const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$clientreport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClientReportEnvelope"])(outcomes, this._options.tunnel && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(this._dsn));
        // sendEnvelope should not throw
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendEnvelope(envelope);
    }
}
/**
 * @deprecated Use `Client` instead. This alias may be removed in a future major version.
 */ // TODO(v10): Remove
/**
 * @deprecated Use `Client` instead. This alias may be removed in a future major version.
 */ // TODO(v10): Remove
const BaseClient = Client;
/**
 * Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
 */ function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
    const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(beforeSendResult)) {
        return beforeSendResult.then((event)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(event) && event !== null) {
                throw _makeInternalError(invalidValueError);
            }
            return event;
        }, (e)=>{
            throw _makeInternalError(`${beforeSendLabel} rejected with ${e}`);
        });
    } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(beforeSendResult) && beforeSendResult !== null) {
        throw _makeInternalError(invalidValueError);
    }
    return beforeSendResult;
}
/**
 * Process the matching `beforeSendXXX` callback.
 */ function processBeforeSend(client, options, event, hint) {
    const { beforeSend, beforeSendTransaction, beforeSendSpan } = options;
    let processedEvent = event;
    if (isErrorEvent(processedEvent) && beforeSend) {
        return beforeSend(processedEvent, hint);
    }
    if (isTransactionEvent(processedEvent)) {
        if (beforeSendSpan) {
            // process root span
            const processedRootSpanJson = beforeSendSpan((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$transactionEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTransactionEventToSpanJson"])(processedEvent));
            if (!processedRootSpanJson) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showSpanDropWarning"])();
            } else {
                // update event with processed root span values
                processedEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(event, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$transactionEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertSpanJsonToTransactionEvent"])(processedRootSpanJson));
            }
            // process child spans
            if (processedEvent.spans) {
                const processedSpans = [];
                for (const span of processedEvent.spans){
                    const processedSpan = beforeSendSpan(span);
                    if (!processedSpan) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showSpanDropWarning"])();
                        processedSpans.push(span);
                    } else {
                        processedSpans.push(processedSpan);
                    }
                }
                processedEvent.spans = processedSpans;
            }
        }
        if (beforeSendTransaction) {
            if (processedEvent.spans) {
                // We store the # of spans before processing in SDK metadata,
                // so we can compare it afterwards to determine how many spans were dropped
                const spanCountBefore = processedEvent.spans.length;
                processedEvent.sdkProcessingMetadata = {
                    ...event.sdkProcessingMetadata,
                    spanCountBeforeProcessing: spanCountBefore
                };
            }
            return beforeSendTransaction(processedEvent, hint);
        }
    }
    return processedEvent;
}
function isErrorEvent(event) {
    return event.type === undefined;
}
function isTransactionEvent(event) {
    return event.type === 'transaction';
}
/** Extract trace information from scope */ function _getTraceInfoFromScope(client, scope) {
    if (!scope) {
        return [
            undefined,
            undefined
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])(scope, ()=>{
        const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        const traceContext = span ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToTraceContext"])(span) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraceContextFromScope"])(scope);
        const dynamicSamplingContext = span ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromScope"])(client, scope);
        return [
            dynamicSamplingContext,
            traceContext
        ];
    });
}
;
 //# sourceMappingURL=client.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/env.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These flags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */ /**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */ __turbopack_context__.s({
    "getSDKSource": (()=>getSDKSource),
    "isBrowserBundle": (()=>isBrowserBundle)
});
function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}
/**
 * Get source of SDK.
 */ function getSDKSource() {
    // This comment is used to identify this line in the CDN bundle build step and replace this with "return 'cdn';"
    /* __SENTRY_SDK_SOURCE__ */ return 'npm';
}
;
 //# sourceMappingURL=env.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/logs/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Maps a log severity level to a log severity number.
 *
 * @see LogSeverityLevel
 */ __turbopack_context__.s({
    "SEVERITY_TEXT_TO_SEVERITY_NUMBER": (()=>SEVERITY_TEXT_TO_SEVERITY_NUMBER)
});
const SEVERITY_TEXT_TO_SEVERITY_NUMBER = {
    trace: 1,
    debug: 5,
    info: 9,
    warn: 13,
    error: 17,
    fatal: 21
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/logs/envelope.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createLogContainerEnvelopeItem": (()=>createLogContainerEnvelopeItem),
    "createLogEnvelope": (()=>createLogEnvelope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-client] (ecmascript)");
;
;
/**
 * Creates a log container envelope item for a list of logs.
 *
 * @param items - The logs to include in the envelope.
 * @returns The created log container envelope item.
 */ function createLogContainerEnvelopeItem(items) {
    return [
        {
            type: 'log',
            item_count: items.length,
            content_type: 'application/vnd.sentry.items.log+json'
        },
        {
            items
        }
    ];
}
/**
 * Creates an envelope for a list of logs.
 *
 * Logs from multiple traces can be included in the same envelope.
 *
 * @param logs - The logs to include in the envelope.
 * @param metadata - The metadata to include in the envelope.
 * @param tunnel - The tunnel to include in the envelope.
 * @param dsn - The DSN to include in the envelope.
 * @returns The created envelope.
 */ function createLogEnvelope(logs, metadata, tunnel, dsn) {
    const headers = {};
    if (metadata?.sdk) {
        headers.sdk = {
            name: metadata.sdk.name,
            version: metadata.sdk.version
        };
    }
    if (!!tunnel && !!dsn) {
        headers.dsn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(headers, [
        createLogContainerEnvelopeItem(logs)
    ]);
}
;
 //# sourceMappingURL=envelope.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/logs/exports.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_INTERNAL_captureLog": (()=>_INTERNAL_captureLog),
    "_INTERNAL_captureSerializedLog": (()=>_INTERNAL_captureSerializedLog),
    "_INTERNAL_flushLogsBuffer": (()=>_INTERNAL_flushLogsBuffer),
    "_INTERNAL_getLogBuffer": (()=>_INTERNAL_getLogBuffer),
    "logAttributeToSerializedLogAttribute": (()=>logAttributeToSerializedLogAttribute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/logs/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/logs/envelope.js [app-client] (ecmascript)");
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
const MAX_LOG_BUFFER_SIZE = 100;
// The reference to the Client <> LogBuffer map is stored to ensure it's always the same
__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]._sentryClientToLogBufferMap = new WeakMap();
/**
 * Converts a log attribute to a serialized log attribute.
 *
 * @param key - The key of the log attribute.
 * @param value - The value of the log attribute.
 * @returns The serialized log attribute.
 */ function logAttributeToSerializedLogAttribute(value) {
    switch(typeof value){
        case 'number':
            if (Number.isInteger(value)) {
                return {
                    value,
                    type: 'integer'
                };
            }
            return {
                value,
                type: 'double'
            };
        case 'boolean':
            return {
                value,
                type: 'boolean'
            };
        case 'string':
            return {
                value,
                type: 'string'
            };
        default:
            {
                let stringValue = '';
                try {
                    stringValue = JSON.stringify(value) ?? '';
                } catch  {
                // Do nothing
                }
                return {
                    value: stringValue,
                    type: 'string'
                };
            }
    }
}
/**
 * Sets a log attribute if the value exists and the attribute key is not already present.
 *
 * @param logAttributes - The log attributes object to modify.
 * @param key - The attribute key to set.
 * @param value - The value to set (only sets if truthy and key not present).
 * @param setEvenIfPresent - Whether to set the attribute if it is present. Defaults to true.
 */ function setLogAttribute(logAttributes, key, value, setEvenIfPresent = true) {
    if (value && (!logAttributes[key] || setEvenIfPresent)) {
        logAttributes[key] = value;
    }
}
/**
 * Captures a serialized log event and adds it to the log buffer for the given client.
 *
 * @param client - A client. Uses the current client if not provided.
 * @param serializedLog - The serialized log event to capture.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */ function _INTERNAL_captureSerializedLog(client, serializedLog) {
    const logBuffer = _INTERNAL_getLogBuffer(client);
    if (logBuffer === undefined) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]._sentryClientToLogBufferMap?.set(client, [
            serializedLog
        ]);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]._sentryClientToLogBufferMap?.set(client, [
            ...logBuffer,
            serializedLog
        ]);
        if (logBuffer.length >= MAX_LOG_BUFFER_SIZE) {
            _INTERNAL_flushLogsBuffer(client, logBuffer);
        }
    }
}
/**
 * Captures a log event and sends it to Sentry.
 *
 * @param log - The log event to capture.
 * @param scope - A scope. Uses the current scope if not provided.
 * @param client - A client. Uses the current client if not provided.
 * @param captureSerializedLog - A function to capture the serialized log.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */ function _INTERNAL_captureLog(beforeLog, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(), currentScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])(), captureSerializedLog = _INTERNAL_captureSerializedLog) {
    if (!client) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('No client available to capture log.');
        return;
    }
    const { _experiments, release, environment } = client.getOptions();
    const { enableLogs = false, beforeSendLog } = _experiments ?? {};
    if (!enableLogs) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('logging option not enabled, log will not be captured.');
        return;
    }
    const [, traceContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTraceInfoFromScope"])(client, currentScope);
    const processedLogAttributes = {
        ...beforeLog.attributes
    };
    const { user } = getMergedScopeData(currentScope);
    // Only attach user to log attributes if sendDefaultPii is enabled
    if (client.getOptions().sendDefaultPii) {
        const { id, email, username } = user;
        setLogAttribute(processedLogAttributes, 'user.id', id, false);
        setLogAttribute(processedLogAttributes, 'user.email', email, false);
        setLogAttribute(processedLogAttributes, 'user.name', username, false);
    }
    setLogAttribute(processedLogAttributes, 'sentry.release', release);
    setLogAttribute(processedLogAttributes, 'sentry.environment', environment);
    const { name, version } = client.getSdkMetadata()?.sdk ?? {};
    setLogAttribute(processedLogAttributes, 'sentry.sdk.name', name);
    setLogAttribute(processedLogAttributes, 'sentry.sdk.version', version);
    const beforeLogMessage = beforeLog.message;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParameterizedString"])(beforeLogMessage)) {
        const { __sentry_template_string__, __sentry_template_values__ = [] } = beforeLogMessage;
        processedLogAttributes['sentry.message.template'] = __sentry_template_string__;
        __sentry_template_values__.forEach((param, index)=>{
            processedLogAttributes[`sentry.message.parameter.${index}`] = param;
        });
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(currentScope);
    // Add the parent span ID to the log attributes for trace context
    setLogAttribute(processedLogAttributes, 'sentry.trace.parent_span_id', span?.spanContext().spanId);
    const processedLog = {
        ...beforeLog,
        attributes: processedLogAttributes
    };
    client.emit('beforeCaptureLog', processedLog);
    const log = beforeSendLog ? beforeSendLog(processedLog) : processedLog;
    if (!log) {
        client.recordDroppedEvent('before_send', 'log_item', 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('beforeSendLog returned null, log will not be captured.');
        return;
    }
    const { level, message, attributes = {}, severityNumber } = log;
    const serializedLog = {
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])(),
        level,
        body: message,
        trace_id: traceContext?.trace_id,
        severity_number: severityNumber ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_TEXT_TO_SEVERITY_NUMBER"][level],
        attributes: Object.keys(attributes).reduce((acc, key)=>{
            acc[key] = logAttributeToSerializedLogAttribute(attributes[key]);
            return acc;
        }, {})
    };
    captureSerializedLog(client, serializedLog);
    client.emit('afterCaptureLog', log);
}
/**
 * Flushes the logs buffer to Sentry.
 *
 * @param client - A client.
 * @param maybeLogBuffer - A log buffer. Uses the log buffer for the given client if not provided.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */ function _INTERNAL_flushLogsBuffer(client, maybeLogBuffer) {
    const logBuffer = maybeLogBuffer ?? _INTERNAL_getLogBuffer(client) ?? [];
    if (logBuffer.length === 0) {
        return;
    }
    const clientOptions = client.getOptions();
    const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLogEnvelope"])(logBuffer, clientOptions._metadata, clientOptions.tunnel, client.getDsn());
    // Clear the log buffer after envelopes have been constructed.
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]._sentryClientToLogBufferMap?.set(client, []);
    client.emit('flushLogs');
    // sendEnvelope should not throw
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    client.sendEnvelope(envelope);
}
/**
 * Returns the log buffer for a given client.
 *
 * Exported for testing purposes.
 *
 * @param client - The client to get the log buffer for.
 * @returns The log buffer for the given client.
 */ function _INTERNAL_getLogBuffer(client) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]._sentryClientToLogBufferMap?.get(client);
}
/**
 * Get the scope data for the current scope after merging with the
 * global scope and isolation scope.
 *
 * @param currentScope - The current scope.
 * @returns The scope data.
 */ function getMergedScopeData(currentScope) {
    const scopeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalScope"])().getScopeData();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeData"])(scopeData, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().getScopeData());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$applyScopeDataToEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScopeData"])(scopeData, currentScope.getScopeData());
    return scopeData;
}
;
 //# sourceMappingURL=exports.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/ipAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// By default, we want to infer the IP address, unless this is explicitly set to `null`
// We do this after all other processing is done
// If `ip_address` is explicitly set to `null` or a value, we leave it as is
/**
 * @internal
 */ __turbopack_context__.s({
    "addAutoIpAddressToSession": (()=>addAutoIpAddressToSession),
    "addAutoIpAddressToUser": (()=>addAutoIpAddressToUser)
});
function addAutoIpAddressToUser(objWithMaybeUser) {
    if (objWithMaybeUser.user?.ip_address === undefined) {
        objWithMaybeUser.user = {
            ...objWithMaybeUser.user,
            ip_address: '{{auto}}'
        };
    }
}
/**
 * @internal
 */ function addAutoIpAddressToSession(session) {
    if ('aggregates' in session) {
        if (session.attrs?.['ip_address'] === undefined) {
            session.attrs = {
                ...session.attrs,
                ip_address: '{{auto}}'
            };
        }
    } else {
        if (session.ipAddress === undefined) {
            session.ipAddress = '{{auto}}';
        }
    }
}
;
 //# sourceMappingURL=ipAddress.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addHandler": (()=>addHandler),
    "maybeInstrument": (()=>maybeInstrument),
    "resetInstrumentationHandlers": (()=>resetInstrumentationHandlers),
    "triggerHandlers": (()=>triggerHandlers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
;
;
;
// We keep the handlers globally
const handlers = {};
const instrumented = {};
/** Add a handler function. */ function addHandler(type, handler) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(handler);
}
/**
 * Reset all instrumentation handlers.
 * This can be used by tests to ensure we have a clean slate of instrumentation handlers.
 */ function resetInstrumentationHandlers() {
    Object.keys(handlers).forEach((key)=>{
        handlers[key] = undefined;
    });
}
/** Maybe run an instrumentation function, unless it was already called. */ function maybeInstrument(type, instrumentFn) {
    if (!instrumented[type]) {
        instrumented[type] = true;
        try {
            instrumentFn();
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Error while instrumenting ${type}`, e);
        }
    }
}
/** Trigger handlers for a given instrumentation type. */ function triggerHandlers(type, data) {
    const typeHandlers = type && handlers[type];
    if (!typeHandlers) {
        return;
    }
    for (const handler of typeHandlers){
        try {
            handler(data);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(handler)}\nError:`, e);
        }
    }
}
;
 //# sourceMappingURL=handlers.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/console.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addConsoleInstrumentationHandler": (()=>addConsoleInstrumentationHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Add an instrumentation handler for when a console.xxx method is called.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addConsoleInstrumentationHandler(handler) {
    const type = 'console';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentConsole);
}
function instrumentConsole() {
    if (!('console' in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"])) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSOLE_LEVELS"].forEach(function(level) {
        if (!(level in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console, level, function(originalConsoleMethod) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originalConsoleMethods"][level] = originalConsoleMethod;
            return function(...args) {
                const handlerData = {
                    args,
                    level
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('console', handlerData);
                const log = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originalConsoleMethods"][level];
                log?.apply(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console, args);
            };
        });
    });
}
;
 //# sourceMappingURL=console.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/supports.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNativeFunction": (()=>isNativeFunction),
    "supportsDOMError": (()=>supportsDOMError),
    "supportsDOMException": (()=>supportsDOMException),
    "supportsErrorEvent": (()=>supportsErrorEvent),
    "supportsFetch": (()=>supportsFetch),
    "supportsHistory": (()=>supportsHistory),
    "supportsNativeFetch": (()=>supportsNativeFetch),
    "supportsReferrerPolicy": (()=>supportsReferrerPolicy),
    "supportsReportingObserver": (()=>supportsReportingObserver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
;
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */ function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */ function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-expect-error It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */ function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */ function supportsHistory() {
    return 'history' in WINDOW && !!WINDOW.history;
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 * @deprecated This is no longer used and will be removed in a future major version.
 */ const supportsFetch = _isFetchSupported;
function _isFetchSupported() {
    if (!('fetch' in WINDOW)) {
        return false;
    }
    try {
        new Headers();
        new Request('http://www.example.com');
        new Response();
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * isNative checks if the given function is a native implementation
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFunction(func) {
    return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */ function supportsNativeFetch() {
    if (typeof EdgeRuntime === 'string') {
        return true;
    }
    if (!_isFetchSupported()) {
        return false;
    }
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFunction(WINDOW.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    let result = false;
    const doc = WINDOW.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === 'function') {
        try {
            const sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow?.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFunction(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */ function supportsReportingObserver() {
    return 'ReportingObserver' in WINDOW;
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 * @deprecated This is no longer used and will be removed in a future major version.
 */ function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
    // (see https://caniuse.com/#feat=referrer-policy),
    // it doesn't. And it throws an exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!_isFetchSupported()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin'
        });
        return true;
    } catch (e) {
        return false;
    }
}
;
 //# sourceMappingURL=supports.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addFetchEndInstrumentationHandler": (()=>addFetchEndInstrumentationHandler),
    "addFetchInstrumentationHandler": (()=>addFetchInstrumentationHandler),
    "parseFetchArgs": (()=>parseFetchArgs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/supports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Add an instrumentation handler for when a fetch request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
    const type = 'fetch';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, ()=>instrumentFetch(undefined, skipNativeFetchCheck));
}
/**
 * Add an instrumentation handler for long-lived fetch requests, like consuming server-sent events (SSE) via fetch.
 * The handler will resolve the request body and emit the actual `endTimestamp`, so that the
 * span can be updated accordingly.
 *
 * Only used internally
 * @hidden
 */ function addFetchEndInstrumentationHandler(handler) {
    const type = 'fetch-body-resolved';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, ()=>instrumentFetch(streamHandler));
}
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
    if (skipNativeFetchCheck && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsNativeFetch"])()) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"], 'fetch', function(originalFetch) {
        return function(...args) {
            // We capture the error right here and not in the Promise error callback because Safari (and probably other
            // browsers too) will wipe the stack trace up to this point, only leaving us with this file which is useless.
            // NOTE: If you are a Sentry user, and you are seeing this stack frame,
            //       it means the error, that was caused by your fetch call did not
            //       have a stack trace, so the SDK backfilled the stack trace so
            //       you can see which fetch call failed.
            const virtualError = new Error();
            const { method, url } = parseFetchArgs(args);
            const handlerData = {
                args,
                fetchData: {
                    method,
                    url
                },
                startTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000,
                // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
                virtualError,
                headers: getHeadersFromFetchArgs(args)
            };
            // if there is no callback, fetch is instrumented directly
            if (!onFetchResolved) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('fetch', {
                    ...handlerData
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"], args).then(async (response)=>{
                if (onFetchResolved) {
                    onFetchResolved(response);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('fetch', {
                        ...handlerData,
                        endTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000,
                        response
                    });
                }
                return response;
            }, (error)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('fetch', {
                    ...handlerData,
                    endTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000,
                    error
                });
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error) && error.stack === undefined) {
                    // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                    //       it means the error, that was caused by your fetch call did not
                    //       have a stack trace, so the SDK backfilled the stack trace so
                    //       you can see which fetch call failed.
                    error.stack = virtualError.stack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(error, 'framesToPop', 1);
                }
                // We enhance the not-so-helpful "Failed to fetch" error messages with the host
                // Possible messages we handle here:
                // * "Failed to fetch" (chromium)
                // * "Load failed" (webkit)
                // * "NetworkError when attempting to fetch resource." (firefox)
                if (error instanceof TypeError && (error.message === 'Failed to fetch' || error.message === 'Load failed' || error.message === 'NetworkError when attempting to fetch resource.')) {
                    try {
                        const url = new URL(handlerData.fetchData.url);
                        error.message = `${error.message} (${url.host})`;
                    } catch  {
                    // ignore it if errors happen here
                    }
                }
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
async function resolveResponse(res, onFinishedResolving) {
    if (res?.body) {
        const body = res.body;
        const responseReader = body.getReader();
        // Define a maximum duration after which we just cancel
        const maxFetchDurationTimeout = setTimeout(()=>{
            body.cancel().then(null, ()=>{
            // noop
            });
        }, 90 * 1000);
        let readingActive = true;
        while(readingActive){
            let chunkTimeout;
            try {
                // abort reading if read op takes more than 5s
                chunkTimeout = setTimeout(()=>{
                    body.cancel().then(null, ()=>{
                    // noop on error
                    });
                }, 5000);
                // This .read() call will reject/throw when we abort due to timeouts through `body.cancel()`
                const { done } = await responseReader.read();
                clearTimeout(chunkTimeout);
                if (done) {
                    onFinishedResolving();
                    readingActive = false;
                }
            } catch (error) {
                readingActive = false;
            } finally{
                clearTimeout(chunkTimeout);
            }
        }
        clearTimeout(maxFetchDurationTimeout);
        responseReader.releaseLock();
        body.cancel().then(null, ()=>{
        // noop on error
        });
    }
}
function streamHandler(response) {
    // clone response for awaiting stream
    let clonedResponseForResolving;
    try {
        clonedResponseForResolving = response.clone();
    } catch  {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    resolveResponse(clonedResponseForResolving, ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('fetch-body-resolved', {
            endTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000,
            response
        });
    });
}
function hasProp(obj, prop) {
    return !!obj && typeof obj === 'object' && !!obj[prop];
}
function getUrlFromResource(resource) {
    if (typeof resource === 'string') {
        return resource;
    }
    if (!resource) {
        return '';
    }
    if (hasProp(resource, 'url')) {
        return resource.url;
    }
    if (resource.toString) {
        return resource.toString();
    }
    return '';
}
/**
 * Parses the fetch arguments to find the used Http method and the url of the request.
 * Exported for tests only.
 */ function parseFetchArgs(fetchArgs) {
    if (fetchArgs.length === 0) {
        return {
            method: 'GET',
            url: ''
        };
    }
    if (fetchArgs.length === 2) {
        const [url, options] = fetchArgs;
        return {
            url: getUrlFromResource(url),
            method: hasProp(options, 'method') ? String(options.method).toUpperCase() : 'GET'
        };
    }
    const arg = fetchArgs[0];
    return {
        url: getUrlFromResource(arg),
        method: hasProp(arg, 'method') ? String(arg.method).toUpperCase() : 'GET'
    };
}
function getHeadersFromFetchArgs(fetchArgs) {
    const [requestArgument, optionsArgument] = fetchArgs;
    try {
        if (typeof optionsArgument === 'object' && optionsArgument !== null && 'headers' in optionsArgument && optionsArgument.headers) {
            return new Headers(optionsArgument.headers);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRequest"])(requestArgument)) {
            return new Headers(requestArgument.headers);
        }
    } catch  {
    // noop
    }
    return;
}
;
 //# sourceMappingURL=fetch.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/severity.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */ __turbopack_context__.s({
    "severityLevelFromString": (()=>severityLevelFromString)
});
function severityLevelFromString(level) {
    return level === 'warn' ? 'warning' : [
        'fatal',
        'error',
        'warning',
        'log',
        'info',
        'debug'
    ].includes(level) ? level : 'log';
}
;
 //# sourceMappingURL=severity.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/breadcrumbs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addBreadcrumb": (()=>addBreadcrumb)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
;
;
;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */ const DEFAULT_BREADCRUMBS = 100;
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 */ function addBreadcrumb(breadcrumb, hint) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    const isolationScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])();
    if (!client) return;
    const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();
    if (maxBreadcrumbs <= 0) return;
    const timestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampInSeconds"])();
    const mergedBreadcrumb = {
        timestamp,
        ...breadcrumb
    };
    const finalBreadcrumb = beforeBreadcrumb ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
    if (finalBreadcrumb === null) return;
    if (client.emit) {
        client.emit('beforeAddBreadcrumb', finalBreadcrumb, hint);
    }
    isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}
;
 //# sourceMappingURL=breadcrumbs.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/breadcrumb-log-level.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Determine a breadcrumb's log level (only `warning` or `error`) based on an HTTP status code.
 */ __turbopack_context__.s({
    "getBreadcrumbLogLevelFromHttpStatusCode": (()=>getBreadcrumbLogLevelFromHttpStatusCode)
});
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
    // NOTE: undefined defaults to 'info' in Sentry
    if (statusCode === undefined) {
        return undefined;
    } else if (statusCode >= 400 && statusCode < 500) {
        return 'warning';
    } else if (statusCode >= 500) {
        return 'error';
    } else {
        return undefined;
    }
}
;
 //# sourceMappingURL=breadcrumb-log-level.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getHttpSpanDetailsFromUrlObject": (()=>getHttpSpanDetailsFromUrlObject),
    "getSanitizedUrlString": (()=>getSanitizedUrlString),
    "getSanitizedUrlStringFromUrlObject": (()=>getSanitizedUrlStringFromUrlObject),
    "isURLObjectRelative": (()=>isURLObjectRelative),
    "parseStringToURLObject": (()=>parseStringToURLObject),
    "parseUrl": (()=>parseUrl),
    "stripUrlQueryAndFragment": (()=>stripUrlQueryAndFragment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
;
// Curious about `thismessage:/`? See: https://www.rfc-editor.org/rfc/rfc2557.html
//  > When the methods above do not yield an absolute URI, a base URL
//  > of "thismessage:/" MUST be employed. This base URL has been
//  > defined for the sole purpose of resolving relative references
//  > within a multipart/related structure when no other base URI is
//  > specified.
//
// We need to provide a base URL to `parseStringToURLObject` because the fetch API gives us a
// relative URL sometimes.
//
// This is the only case where we need to provide a base URL to `parseStringToURLObject`
// because the relative URL is not valid on its own.
const DEFAULT_BASE_URL = 'thismessage:/';
/**
 * Checks if the URL object is relative
 *
 * @param url - The URL object to check
 * @returns True if the URL object is relative, false otherwise
 */ function isURLObjectRelative(url) {
    return 'isRelative' in url;
}
/**
 * Parses string to a URL object
 *
 * @param url - The URL to parse
 * @returns The parsed URL object or undefined if the URL is invalid
 */ function parseStringToURLObject(url, urlBase) {
    const isRelative = url.indexOf('://') <= 0 && url.indexOf('//') !== 0;
    const base = urlBase ?? (isRelative ? DEFAULT_BASE_URL : undefined);
    try {
        // Use `canParse` to short-circuit the URL constructor if it's not a valid URL
        // This is faster than trying to construct the URL and catching the error
        // Node 20+, Chrome 120+, Firefox 115+, Safari 17+
        if ('canParse' in URL && !URL.canParse(url, base)) {
            return undefined;
        }
        const fullUrlObject = new URL(url, base);
        if (isRelative) {
            // Because we used a fake base URL, we need to return a relative URL object.
            // We cannot return anything about the origin, host, etc. because it will refer to the fake base URL.
            return {
                isRelative,
                pathname: fullUrlObject.pathname,
                search: fullUrlObject.search,
                hash: fullUrlObject.hash
            };
        }
        return fullUrlObject;
    } catch  {
    // empty body
    }
    return undefined;
}
/**
 * Takes a URL object and returns a sanitized string which is safe to use as span name
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */ function getSanitizedUrlStringFromUrlObject(url) {
    if (isURLObjectRelative(url)) {
        return url.pathname;
    }
    const newUrl = new URL(url);
    newUrl.search = '';
    newUrl.hash = '';
    if ([
        '80',
        '443'
    ].includes(newUrl.port)) {
        newUrl.port = '';
    }
    if (newUrl.password) {
        newUrl.password = '%filtered%';
    }
    if (newUrl.username) {
        newUrl.username = '%filtered%';
    }
    return newUrl.toString();
}
function getHttpSpanNameFromUrlObject(urlObject, kind, request, routeName) {
    const method = request?.method?.toUpperCase() ?? 'GET';
    const route = routeName ? routeName : urlObject ? kind === 'client' ? getSanitizedUrlStringFromUrlObject(urlObject) : urlObject.pathname : '/';
    return `${method} ${route}`;
}
/**
 * Takes a parsed URL object and returns a set of attributes for the span
 * that represents the HTTP request for that url. This is used for both server
 * and client http spans.
 *
 * Follows https://opentelemetry.io/docs/specs/semconv/http/.
 *
 * @param urlObject - see {@link parseStringToURLObject}
 * @param kind - The type of HTTP operation (server or client)
 * @param spanOrigin - The origin of the span
 * @param request - The request object, see {@link PartialRequest}
 * @param routeName - The name of the route, must be low cardinality
 * @returns The span name and attributes for the HTTP operation
 */ function getHttpSpanDetailsFromUrlObject(urlObject, kind, spanOrigin, request, routeName) {
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: spanOrigin,
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url'
    };
    if (routeName) {
        // This is based on https://opentelemetry.io/docs/specs/semconv/http/http-spans/#name
        attributes[kind === 'server' ? 'http.route' : 'url.template'] = routeName;
        attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]] = 'route';
    }
    if (request?.method) {
        attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD"]] = request.method.toUpperCase();
    }
    if (urlObject) {
        if (urlObject.search) {
            attributes['url.query'] = urlObject.search;
        }
        if (urlObject.hash) {
            attributes['url.fragment'] = urlObject.hash;
        }
        if (urlObject.pathname) {
            attributes['url.path'] = urlObject.pathname;
            if (urlObject.pathname === '/') {
                attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]] = 'route';
            }
        }
        if (!isURLObjectRelative(urlObject)) {
            attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_URL_FULL"]] = urlObject.href;
            if (urlObject.port) {
                attributes['url.port'] = urlObject.port;
            }
            if (urlObject.protocol) {
                attributes['url.scheme'] = urlObject.protocol;
            }
            if (urlObject.hostname) {
                attributes[kind === 'server' ? 'server.address' : 'url.domain'] = urlObject.hostname;
            }
        }
    }
    return [
        getHttpSpanNameFromUrlObject(urlObject, kind, request, routeName),
        attributes
    ];
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */ function parseUrl(url) {
    if (!url) {
        return {};
    }
    const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    const query = match[6] || '';
    const fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        search: query,
        hash: fragment,
        relative: match[5] + query + fragment
    };
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */ function stripUrlQueryAndFragment(urlPath) {
    return urlPath.split(/[?#]/, 1)[0];
}
/**
 * Takes a URL object and returns a sanitized string which is safe to use as span name
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */ function getSanitizedUrlString(url) {
    const { protocol, host, path } = url;
    const filteredHost = host?.replace(/^.*@/, '[filtered]:[filtered]@').replace(/(:80)$/, '').replace(/(:443)$/, '') || '';
    return `${protocol ? `${protocol}://` : ''}${filteredHost}${path}`;
}
;
 //# sourceMappingURL=url.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addGlobalErrorInstrumentationHandler": (()=>addGlobalErrorInstrumentationHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js [app-client] (ecmascript)");
;
;
let _oldOnErrorHandler = null;
/**
 * Add an instrumentation handler for when an error is captured by the global error handler.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addGlobalErrorInstrumentationHandler(handler) {
    const type = 'error';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentError);
}
function instrumentError() {
    _oldOnErrorHandler = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].onerror;
    // Note: The reason we are doing window.onerror instead of window.addEventListener('error')
    // is that we are using this handler in the Loader Script, to handle buffered errors consistently
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].onerror = function(msg, url, line, column, error) {
        const handlerData = {
            column,
            error,
            line,
            msg,
            url
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('error', handlerData);
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].onerror.__SENTRY_INSTRUMENTED__ = true;
}
;
 //# sourceMappingURL=globalError.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addGlobalUnhandledRejectionInstrumentationHandler": (()=>addGlobalUnhandledRejectionInstrumentationHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js [app-client] (ecmascript)");
;
;
let _oldOnUnhandledRejectionHandler = null;
/**
 * Add an instrumentation handler for when an unhandled promise rejection is captured.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
    const type = 'unhandledrejection';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].onunhandledrejection;
    // Note: The reason we are doing window.onunhandledrejection instead of window.addEventListener('unhandledrejection')
    // is that we are using this handler in the Loader Script, to handle buffered rejections consistently
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].onunhandledrejection = function(e) {
        const handlerData = e;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('unhandledrejection', handlerData);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
;
 //# sourceMappingURL=globalUnhandledRejection.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/aggregate-errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyAggregateErrorsToEvent": (()=>applyAggregateErrorsToEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
;
/**
 * Creates exceptions inside `event.exception.values` for errors that are nested on properties based on the `key` parameter.
 */ function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, key, limit, event, hint) {
    if (!event.exception?.values || !hint || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOf"])(hint.originalException, Error)) {
        return;
    }
    // Generally speaking the last item in `event.exception.values` is the exception originating from the original Error
    const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : undefined;
    // We only create exception grouping if there is an exception in the event.
    if (originalException) {
        event.exception.values = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, hint.originalException, key, event.exception.values, originalException, 0);
    }
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
    if (prevExceptions.length >= limit + 1) {
        return prevExceptions;
    }
    let newExceptions = [
        ...prevExceptions
    ];
    // Recursively call this function in order to walk down a chain of errors
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOf"])(error[key], Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser, error[key]);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error[key], key, [
            newException,
            ...newExceptions
        ], newException, newExceptionId);
    }
    // This will create exception grouping for AggregateErrors
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
    if (Array.isArray(error.errors)) {
        error.errors.forEach((childError, i)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOf"])(childError, Error)) {
                applyExceptionGroupFieldsForParentException(exception, exceptionId);
                const newException = exceptionFromErrorImplementation(parser, childError);
                const newExceptionId = newExceptions.length;
                applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
                newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, childError, key, [
                    newException,
                    ...newExceptions
                ], newException, newExceptionId);
            }
        });
    }
    return newExceptions;
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
    // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
    exception.mechanism = exception.mechanism || {
        type: 'generic',
        handled: true
    };
    exception.mechanism = {
        ...exception.mechanism,
        ...exception.type === 'AggregateError' && {
            is_exception_group: true
        },
        exception_id: exceptionId
    };
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
    // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
    exception.mechanism = exception.mechanism || {
        type: 'generic',
        handled: true
    };
    exception.mechanism = {
        ...exception.mechanism,
        type: 'chained',
        source,
        exception_id: exceptionId,
        parent_id: parentId
    };
}
;
 //# sourceMappingURL=aggregate-errors.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/promisebuffer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SENTRY_BUFFER_FULL_ERROR": (()=>SENTRY_BUFFER_FULL_ERROR),
    "makePromiseBuffer": (()=>makePromiseBuffer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)");
;
const SENTRY_BUFFER_FULL_ERROR = Symbol.for('SentryBufferFullError');
/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */ function makePromiseBuffer(limit) {
    const buffer = [];
    function isReady() {
        return limit === undefined || buffer.length < limit;
    }
    /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */ function remove(task) {
        return buffer.splice(buffer.indexOf(task), 1)[0] || Promise.resolve(undefined);
    }
    /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */ function add(taskProducer) {
        if (!isReady()) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rejectedSyncPromise"])(SENTRY_BUFFER_FULL_ERROR);
        }
        // start the task and add its promise to the queue
        const task = taskProducer();
        if (buffer.indexOf(task) === -1) {
            buffer.push(task);
        }
        void task.then(()=>remove(task))// Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
        // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
        // have promises, so TS has to polyfill when down-compiling.)
        .then(null, ()=>remove(task).then(null, ()=>{
            // We have to add another catch here because `remove()` starts a new promise chain.
            }));
        return task;
    }
    /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */ function drain(timeout) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncPromise"]((resolve, reject)=>{
            let counter = buffer.length;
            if (!counter) {
                return resolve(true);
            }
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            const capturedSetTimeout = setTimeout(()=>{
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            buffer.forEach((item)=>{
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])(item).then(()=>{
                    if (!--counter) {
                        clearTimeout(capturedSetTimeout);
                        resolve(true);
                    }
                }, reject);
            });
        });
    }
    return {
        $: buffer,
        add,
        drain
    };
}
;
 //# sourceMappingURL=promisebuffer.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/ratelimit.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend
__turbopack_context__.s({
    "DEFAULT_RETRY_AFTER": (()=>DEFAULT_RETRY_AFTER),
    "disabledUntil": (()=>disabledUntil),
    "isRateLimited": (()=>isRateLimited),
    "parseRetryAfterHeader": (()=>parseRetryAfterHeader),
    "updateRateLimits": (()=>updateRateLimits)
});
const DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */ function parseRetryAfterHeader(header, now = Date.now()) {
    const headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    const headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return DEFAULT_RETRY_AFTER;
}
/**
 * Gets the time that the given category is disabled until for rate limiting.
 * In case no category-specific limit is set but a general rate limit across all categories is active,
 * that time is returned.
 *
 * @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
 */ function disabledUntil(limits, dataCategory) {
    return limits[dataCategory] || limits.all || 0;
}
/**
 * Checks if a category is rate limited
 */ function isRateLimited(limits, dataCategory, now = Date.now()) {
    return disabledUntil(limits, dataCategory) > now;
}
/**
 * Update ratelimits from incoming headers.
 *
 * @return the updated RateLimits object.
 */ function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
    const updatedRateLimits = {
        ...limits
    };
    // "The name is case-insensitive."
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
    const rateLimitHeader = headers?.['x-sentry-rate-limits'];
    const retryAfterHeader = headers?.['retry-after'];
    if (rateLimitHeader) {
        /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>: <namespaces>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     *     <namespaces> Semicolon-separated list of metric namespace identifiers. Defines which namespace(s) will be affected.
     *         Only present if rate limit applies to the metric_bucket data category.
     */ for (const limit of rateLimitHeader.trim().split(',')){
            const [retryAfter, categories, , , namespaces] = limit.split(':', 5);
            const headerDelay = parseInt(retryAfter, 10);
            const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
            if (!categories) {
                updatedRateLimits.all = now + delay;
            } else {
                for (const category of categories.split(';')){
                    if (category === 'metric_bucket') {
                        // namespaces will be present when category === 'metric_bucket'
                        if (!namespaces || namespaces.split(';').includes('custom')) {
                            updatedRateLimits[category] = now + delay;
                        }
                    } else {
                        updatedRateLimits[category] = now + delay;
                    }
                }
            }
        }
    } else if (retryAfterHeader) {
        updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    } else if (statusCode === 429) {
        updatedRateLimits.all = now + 60 * 1000;
    }
    return updatedRateLimits;
}
;
 //# sourceMappingURL=ratelimit.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/transports/base.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_TRANSPORT_BUFFER_SIZE": (()=>DEFAULT_TRANSPORT_BUFFER_SIZE),
    "createTransport": (()=>createTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$promisebuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/promisebuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$ratelimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/ratelimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */ function createTransport(options, makeRequest, buffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$promisebuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makePromiseBuffer"])(options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE)) {
    let rateLimits = {};
    const flush = (timeout)=>buffer.drain(timeout);
    function send(envelope) {
        const filteredEnvelopeItems = [];
        // Drop rate limited items from envelope
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEachEnvelopeItem"])(envelope, (item, type)=>{
            const dataCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envelopeItemTypeToDataCategory"])(type);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$ratelimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRateLimited"])(rateLimits, dataCategory)) {
                options.recordDroppedEvent('ratelimit_backoff', dataCategory);
            } else {
                filteredEnvelopeItems.push(item);
            }
        });
        // Skip sending if envelope is empty after filtering out rate limited events
        if (filteredEnvelopeItems.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])({});
        }
        const filteredEnvelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(envelope[0], filteredEnvelopeItems);
        // Creates client report for each item in an envelope
        const recordEnvelopeLoss = (reason)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEachEnvelopeItem"])(filteredEnvelope, (item, type)=>{
                options.recordDroppedEvent(reason, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["envelopeItemTypeToDataCategory"])(type));
            });
        };
        const requestTask = ()=>makeRequest({
                body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeEnvelope"])(filteredEnvelope)
            }).then((response)=>{
                // We don't want to throw on NOK responses, but we want to at least log them
                if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
                }
                rateLimits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$ratelimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateRateLimits"])(rateLimits, response);
                return response;
            }, (error)=>{
                recordEnvelopeLoss('network_error');
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Encountered error running transport request:', error);
                throw error;
            });
        return buffer.add(requestTask).then((result)=>result, (error)=>{
            if (error === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$promisebuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_BUFFER_FULL_ERROR"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Skipped sending event because buffer is full.');
                recordEnvelopeLoss('queue_overflow');
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])({});
            } else {
                throw error;
            }
        });
    }
    return {
        send,
        flush
    };
}
;
 //# sourceMappingURL=base.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/handleCallbackErrors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleCallbackErrors": (()=>handleCallbackErrors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
;
/**
 * Wrap a callback function with error handling.
 * If an error is thrown, it will be passed to the `onError` callback and re-thrown.
 *
 * If the return value of the function is a promise, it will be handled with `maybeHandlePromiseRejection`.
 *
 * If an `onFinally` callback is provided, this will be called when the callback has finished
 * - so if it returns a promise, once the promise resolved/rejected,
 * else once the callback has finished executing.
 * The `onFinally` callback will _always_ be called, no matter if an error was thrown or not.
 */ function handleCallbackErrors(fn, onError, // eslint-disable-next-line @typescript-eslint/no-empty-function
onFinally = ()=>{}) {
    let maybePromiseResult;
    try {
        maybePromiseResult = fn();
    } catch (e) {
        onError(e);
        onFinally();
        throw e;
    }
    return maybeHandlePromiseRejection(maybePromiseResult, onError, onFinally);
}
/**
 * Maybe handle a promise rejection.
 * This expects to be given a value that _may_ be a promise, or any other value.
 * If it is a promise, and it rejects, it will call the `onError` callback.
 * Other than this, it will generally return the given value as-is.
 */ function maybeHandlePromiseRejection(value, onError, onFinally) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(value)) {
        // @ts-expect-error - the isThenable check returns the "wrong" type here
        return value.then((res)=>{
            onFinally();
            return res;
        }, (e)=>{
            onError(e);
            onFinally();
            throw e;
        });
    }
    onFinally();
    return value;
}
;
 //# sourceMappingURL=handleCallbackErrors.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/logSpans.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logSpanEnd": (()=>logSpanEnd),
    "logSpanStart": (()=>logSpanStart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
;
/**
 * Print a log message for a started span.
 */ function logSpanStart(span) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) return;
    const { description = '< unknown name >', op = '< unknown op >', parent_span_id: parentSpanId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
    const { spanId } = span.spanContext();
    const sampled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsSampled"])(span);
    const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    const isRootSpan = rootSpan === span;
    const header = `[Tracing] Starting ${sampled ? 'sampled' : 'unsampled'} ${isRootSpan ? 'root ' : ''}span`;
    const infoParts = [
        `op: ${op}`,
        `name: ${description}`,
        `ID: ${spanId}`
    ];
    if (parentSpanId) {
        infoParts.push(`parent ID: ${parentSpanId}`);
    }
    if (!isRootSpan) {
        const { op, description } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(rootSpan);
        infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
        if (op) {
            infoParts.push(`root op: ${op}`);
        }
        if (description) {
            infoParts.push(`root description: ${description}`);
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`${header}
  ${infoParts.join('\n  ')}`);
}
/**
 * Print a log message for an ended span.
 */ function logSpanEnd(span) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) return;
    const { description = '< unknown name >', op = '< unknown op >' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
    const { spanId } = span.spanContext();
    const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    const isRootSpan = rootSpan === span;
    const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? 'root ' : ''}span "${description}" with ID ${spanId}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(msg);
}
;
 //# sourceMappingURL=logSpans.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sampling.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sampleSpan": (()=>sampleSpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Makes a sampling decision for the given options.
 *
 * Called every time a root span is created. Only root spans which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 */ function sampleSpan(options, samplingContext, sampleRand) {
    // nothing to do if span recording is not enabled
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])(options)) {
        return [
            false
        ];
    }
    let localSampleRateWasApplied = undefined;
    // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
    // work; prefer the hook if so
    let sampleRate;
    if (typeof options.tracesSampler === 'function') {
        sampleRate = options.tracesSampler({
            ...samplingContext,
            inheritOrSampleWith: (fallbackSampleRate)=>{
                // If we have an incoming parent sample rate, we'll just use that one.
                // The sampling decision will be inherited because of the sample_rand that was generated when the trace reached the incoming boundaries of the SDK.
                if (typeof samplingContext.parentSampleRate === 'number') {
                    return samplingContext.parentSampleRate;
                }
                // Fallback if parent sample rate is not on the incoming trace (e.g. if there is no baggage)
                // This is to provide backwards compatibility if there are incoming traces from older SDKs that don't send a parent sample rate or a sample rand. In these cases we just want to force either a sampling decision on the downstream traces via the sample rate.
                if (typeof samplingContext.parentSampled === 'boolean') {
                    return Number(samplingContext.parentSampled);
                }
                return fallbackSampleRate;
            }
        });
        localSampleRateWasApplied = true;
    } else if (samplingContext.parentSampled !== undefined) {
        sampleRate = samplingContext.parentSampled;
    } else if (typeof options.tracesSampleRate !== 'undefined') {
        sampleRate = options.tracesSampleRate;
        localSampleRateWasApplied = true;
    }
    // Since this is coming from the user (or from a function provided by the user), who knows what we might get.
    // (The only valid values are booleans or numbers between 0 and 1.)
    const parsedSampleRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(sampleRate);
    if (parsedSampleRate === undefined) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(sampleRate)} of type ${JSON.stringify(typeof sampleRate)}.`);
        return [
            false
        ];
    }
    // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
    if (!parsedSampleRate) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === 'function' ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`);
        return [
            false,
            parsedSampleRate,
            localSampleRateWasApplied
        ];
    }
    // We always compare the sample rand for the current execution context against the chosen sample rate.
    // Read more: https://develop.sentry.dev/sdk/telemetry/traces/#propagated-random-value
    const shouldSample = sampleRand < parsedSampleRate;
    // if we're not going to keep it, we're done
    if (!shouldSample) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
    }
    return [
        shouldSample,
        parsedSampleRate,
        localSampleRateWasApplied
    ];
}
;
 //# sourceMappingURL=sampling.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SentryNonRecordingSpan": (()=>SentryNonRecordingSpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
;
;
/**
 * A Sentry Span that is non-recording, meaning it will not be sent to Sentry.
 */ class SentryNonRecordingSpan {
    constructor(spanContext = {}){
        this._traceId = spanContext.traceId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])();
        this._spanId = spanContext.spanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])();
    }
    /** @inheritdoc */ spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACE_FLAG_NONE"]
        };
    }
    /** @inheritdoc */ // eslint-disable-next-line @typescript-eslint/no-empty-function
    end(_timestamp) {}
    /** @inheritdoc */ setAttribute(_key, _value) {
        return this;
    }
    /** @inheritdoc */ setAttributes(_values) {
        return this;
    }
    /** @inheritdoc */ setStatus(_status) {
        return this;
    }
    /** @inheritdoc */ updateName(_name) {
        return this;
    }
    /** @inheritdoc */ isRecording() {
        return false;
    }
    /** @inheritdoc */ addEvent(_name, _attributesOrStartTime, _startTime) {
        return this;
    }
    /** @inheritDoc */ addLink(_link) {
        return this;
    }
    /** @inheritDoc */ addLinks(_links) {
        return this;
    }
    /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */ recordException(_exception, _time) {
    // noop
    }
}
;
 //# sourceMappingURL=sentryNonRecordingSpan.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/measurement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setMeasurement": (()=>setMeasurement),
    "timedEventsToMeasurements": (()=>timedEventsToMeasurements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Adds a measurement to the active transaction on the current global scope. You can optionally pass in a different span
 * as the 4th parameter.
 */ function setMeasurement(name, value, unit, activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])()) {
    const rootSpan = activeSpan && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan);
    if (rootSpan) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Measurement] Setting measurement on root span: ${name} = ${value} ${unit}`);
        rootSpan.addEvent(name, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: value,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: unit
        });
    }
}
/**
 * Convert timed events to measurements.
 */ function timedEventsToMeasurements(events) {
    if (!events || events.length === 0) {
        return undefined;
    }
    const measurements = {};
    events.forEach((event)=>{
        const attributes = event.attributes || {};
        const unit = attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]];
        const value = attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]];
        if (typeof unit === 'string' && typeof value === 'number') {
            measurements[event.name] = {
                value,
                unit
            };
        }
    });
    return measurements;
}
;
 //# sourceMappingURL=measurement.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sentrySpan.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SentrySpan": (()=>SentrySpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/envelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$logSpans$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/logSpans.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/measurement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)");
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
;
const MAX_SPAN_COUNT = 1000;
/**
 * Span contains all data about a span
 */ class SentrySpan {
    /** Epoch timestamp in seconds when the span started. */ /** Epoch timestamp in seconds when the span ended. */ /** Internal keeper of the status */ /** The timed events added to this span. */ /** if true, treat span as a standalone span (not part of a transaction) */ /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */ constructor(spanContext = {}){
        this._traceId = spanContext.traceId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])();
        this._spanId = spanContext.spanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])();
        this._startTime = spanContext.startTimestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
        this._links = spanContext.links;
        this._attributes = {};
        this.setAttributes({
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'manual',
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: spanContext.op,
            ...spanContext.attributes
        });
        this._name = spanContext.name;
        if (spanContext.parentSpanId) {
            this._parentSpanId = spanContext.parentSpanId;
        }
        // We want to include booleans as well here
        if ('sampled' in spanContext) {
            this._sampled = spanContext.sampled;
        }
        if (spanContext.endTimestamp) {
            this._endTime = spanContext.endTimestamp;
        }
        this._events = [];
        this._isStandaloneSpan = spanContext.isStandalone;
        // If the span is already ended, ensure we finalize the span immediately
        if (this._endTime) {
            this._onSpanEnded();
        }
    }
    /** @inheritDoc */ addLink(link) {
        if (this._links) {
            this._links.push(link);
        } else {
            this._links = [
                link
            ];
        }
        return this;
    }
    /** @inheritDoc */ addLinks(links) {
        if (this._links) {
            this._links.push(...links);
        } else {
            this._links = links;
        }
        return this;
    }
    /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */ recordException(_exception, _time) {
    // noop
    }
    /** @inheritdoc */ spanContext() {
        const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
        return {
            spanId,
            traceId,
            traceFlags: sampled ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACE_FLAG_SAMPLED"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACE_FLAG_NONE"]
        };
    }
    /** @inheritdoc */ setAttribute(key, value) {
        if (value === undefined) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._attributes[key];
        } else {
            this._attributes[key] = value;
        }
        return this;
    }
    /** @inheritdoc */ setAttributes(attributes) {
        Object.keys(attributes).forEach((key)=>this.setAttribute(key, attributes[key]));
        return this;
    }
    /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */ updateStartTime(timeInput) {
        this._startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanTimeInputToSeconds"])(timeInput);
    }
    /**
   * @inheritDoc
   */ setStatus(value) {
        this._status = value;
        return this;
    }
    /**
   * @inheritDoc
   */ updateName(name) {
        this._name = name;
        this.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"], 'custom');
        return this;
    }
    /** @inheritdoc */ end(endTimestamp) {
        // If already ended, skip
        if (this._endTime) {
            return;
        }
        this._endTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanTimeInputToSeconds"])(endTimestamp);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$logSpans$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logSpanEnd"])(this);
        this._onSpanEnded();
    }
    /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */ getSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusMessage"])(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]],
            profile_id: this._attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_PROFILE_ID"]],
            exclusive_time: this._attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]],
            measurements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timedEventsToMeasurements"])(this._events),
            is_segment: this._isStandaloneSpan && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(this) === this || undefined,
            segment_id: this._isStandaloneSpan ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(this).spanContext().spanId : undefined,
            links: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertSpanLinksForEnvelope"])(this._links)
        };
    }
    /** @inheritdoc */ isRecording() {
        return !this._endTime && !!this._sampled;
    }
    /**
   * @inheritdoc
   */ addEvent(name, attributesOrStartTime, startTime) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Adding an event to span:', name);
        const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
        const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
        const event = {
            name,
            time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanTimeInputToSeconds"])(time),
            attributes
        };
        this._events.push(event);
        return this;
    }
    /**
   * This method should generally not be used,
   * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
   * USE THIS WITH CAUTION!
   * @internal
   * @hidden
   * @experimental
   */ isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    /** Emit `spanEnd` when the span is ended. */ _onSpanEnded() {
        const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
        if (client) {
            client.emit('spanEnd', this);
        }
        // A segment span is basically the root span of a local span tree.
        // So for now, this is either what we previously refer to as the root span,
        // or a standalone span.
        const isSegmentSpan = this._isStandaloneSpan || this === (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(this);
        if (!isSegmentSpan) {
            return;
        }
        // if this is a standalone span, we send it immediately
        if (this._isStandaloneSpan) {
            if (this._sampled) {
                sendSpanEnvelope((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpanEnvelope"])([
                    this
                ], client));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.');
                if (client) {
                    client.recordDroppedEvent('sample_rate', 'span');
                }
            }
            return;
        }
        const transactionEvent = this._convertSpanToTransaction();
        if (transactionEvent) {
            const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(this).scope || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
            scope.captureEvent(transactionEvent);
        }
    }
    /**
   * Finish the transaction & prepare the event to send to Sentry.
   */ _convertSpanToTransaction() {
        // We can only convert finished spans
        if (!isFullFinishedSpan((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(this))) {
            return undefined;
        }
        if (!this._name) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
            this._name = '<unlabeled transaction>';
        }
        const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(this);
        const normalizedRequest = capturedSpanScope?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (this._sampled !== true) {
            return undefined;
        }
        // The transaction span itself as well as any potential standalone spans should be filtered out
        const finishedSpans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpanDescendants"])(this).filter((span)=>span !== this && !isStandaloneSpan(span));
        const spans = finishedSpans.map((span)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span)).filter(isFullFinishedSpan);
        const source = this._attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]];
        // remove internal root span attributes we don't need to send.
        /* eslint-disable @typescript-eslint/no-dynamic-delete */ delete this._attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME"]];
        spans.forEach((span)=>{
            delete span.data[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME"]];
        });
        // eslint-enabled-next-line @typescript-eslint/no-dynamic-delete
        const transaction = {
            contexts: {
                trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToTransactionTraceContext"])(this)
            },
            spans: // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
            // we do not use spans anymore after this point
            spans.length > MAX_SPAN_COUNT ? spans.sort((a, b)=>a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: 'transaction',
            sdkProcessingMetadata: {
                capturedSpanScope,
                capturedSpanIsolationScope,
                dynamicSamplingContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(this)
            },
            request: normalizedRequest,
            ...source && {
                transaction_info: {
                    source
                }
            }
        };
        const measurements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timedEventsToMeasurements"])(this._events);
        const hasMeasurements = measurements && Object.keys(measurements).length;
        if (hasMeasurements) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Measurements] Adding measurements to transaction event', JSON.stringify(measurements, undefined, 2));
            transaction.measurements = measurements;
        }
        return transaction;
    }
}
function isSpanTimeInput(value) {
    return value && typeof value === 'number' || value instanceof Date || Array.isArray(value);
}
// We want to filter out any incomplete SpanJSON objects
function isFullFinishedSpan(input) {
    return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
/** `SentrySpan`s can be sent as a standalone span rather than belonging to a transaction */ function isStandaloneSpan(span) {
    return span instanceof SentrySpan && span.isStandaloneSpan();
}
/**
 * Sends a `SpanEnvelope`.
 *
 * Note: If the envelope's spans are dropped, e.g. via `beforeSendSpan`,
 * the envelope will not be sent either.
 */ function sendSpanEnvelope(envelope) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        return;
    }
    const spanItems = envelope[1];
    if (!spanItems || spanItems.length === 0) {
        client.recordDroppedEvent('before_send', 'span');
        return;
    }
    // sendEnvelope should not throw
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    client.sendEnvelope(envelope);
}
;
 //# sourceMappingURL=sentrySpan.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "continueTrace": (()=>continueTrace),
    "startInactiveSpan": (()=>startInactiveSpan),
    "startNewTrace": (()=>startNewTrace),
    "startSpan": (()=>startSpan),
    "startSpanManual": (()=>startSpanManual),
    "suppressTracing": (()=>suppressTracing),
    "withActiveSpan": (()=>withActiveSpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$handleCallbackErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/handleCallbackErrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/tracing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$logSpans$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/logSpans.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sampling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentrySpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sentrySpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
/* eslint-disable max-lines */ const SUPPRESS_TRACING_KEY = '__SENTRY_SUPPRESS_TRACING__';
/**
 * Wraps a function with a transaction/span and finishes the span after the function is done.
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * If you want to create a span that is not set as active, use {@link startInactiveSpan}.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */ function startSpan(options, callback) {
    const acs = getAcs();
    if (acs.startSpan) {
        return acs.startSpan(options, callback);
    }
    const spanArguments = parseSentrySpanArguments(options);
    const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
    // We still need to fork a potentially passed scope, as we set the active span on it
    // and we need to ensure that it is cleaned up properly once the span ends.
    const customForkedScope = customScope?.clone();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])(customForkedScope, ()=>{
        // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
        const wrapper = getActiveSpanWrapper(customParentSpan);
        return wrapper(()=>{
            const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
            const parentSpan = getParentSpan(scope);
            const shouldSkipSpan = options.onlyIfParent && !parentSpan;
            const activeSpan = shouldSkipSpan ? new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]() : createChildOrRootSpan({
                parentSpan,
                spanArguments,
                forceTransaction,
                scope
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(scope, activeSpan);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$handleCallbackErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleCallbackErrors"])(()=>callback(activeSpan), ()=>{
                // Only update the span status if it hasn't been changed yet, and the span is not yet finished
                const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(activeSpan);
                if (activeSpan.isRecording() && (!status || status === 'ok')) {
                    activeSpan.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
                        message: 'internal_error'
                    });
                }
            }, ()=>{
                activeSpan.end();
            });
        });
    });
}
/**
 * Similar to `Sentry.startSpan`. Wraps a function with a transaction/span, but does not finish the span
 * after the function is done automatically. Use `span.end()` to end the span.
 *
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */ function startSpanManual(options, callback) {
    const acs = getAcs();
    if (acs.startSpanManual) {
        return acs.startSpanManual(options, callback);
    }
    const spanArguments = parseSentrySpanArguments(options);
    const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
    const customForkedScope = customScope?.clone();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])(customForkedScope, ()=>{
        // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
        const wrapper = getActiveSpanWrapper(customParentSpan);
        return wrapper(()=>{
            const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
            const parentSpan = getParentSpan(scope);
            const shouldSkipSpan = options.onlyIfParent && !parentSpan;
            const activeSpan = shouldSkipSpan ? new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]() : createChildOrRootSpan({
                parentSpan,
                spanArguments,
                forceTransaction,
                scope
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(scope, activeSpan);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$handleCallbackErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleCallbackErrors"])(// We pass the `finish` function to the callback, so the user can finish the span manually
            // this is mainly here for historic purposes because previously, we instructed users to call
            // `finish` instead of `span.end()` to also clean up the scope. Nowadays, calling `span.end()`
            // or `finish` has the same effect and we simply leave it here to avoid breaking user code.
            ()=>callback(activeSpan, ()=>activeSpan.end()), ()=>{
                // Only update the span status if it hasn't been changed yet, and the span is not yet finished
                const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(activeSpan);
                if (activeSpan.isRecording() && (!status || status === 'ok')) {
                    activeSpan.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
                        message: 'internal_error'
                    });
                }
            });
        });
    });
}
/**
 * Creates a span. This span is not set as active, so will not get automatic instrumentation spans
 * as children or be able to be accessed via `Sentry.getActiveSpan()`.
 *
 * If you want to create a span that is set as active, use {@link startSpan}.
 *
 * This function will always return a span,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */ function startInactiveSpan(options) {
    const acs = getAcs();
    if (acs.startInactiveSpan) {
        return acs.startInactiveSpan(options);
    }
    const spanArguments = parseSentrySpanArguments(options);
    const { forceTransaction, parentSpan: customParentSpan } = options;
    // If `options.scope` is defined, we use this as as a wrapper,
    // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
    const wrapper = options.scope ? (callback)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])(options.scope, callback) : customParentSpan !== undefined ? (callback)=>withActiveSpan(customParentSpan, callback) : (callback)=>callback();
    return wrapper(()=>{
        const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
        const parentSpan = getParentSpan(scope);
        const shouldSkipSpan = options.onlyIfParent && !parentSpan;
        if (shouldSkipSpan) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]();
        }
        return createChildOrRootSpan({
            parentSpan,
            spanArguments,
            forceTransaction,
            scope
        });
    });
}
/**
 * Continue a trace from `sentry-trace` and `baggage` values.
 * These values can be obtained from incoming request headers, or in the browser from `<meta name="sentry-trace">`
 * and `<meta name="baggage">` HTML tags.
 *
 * Spans started with `startSpan`, `startSpanManual` and `startInactiveSpan`, within the callback will automatically
 * be attached to the incoming trace.
 */ const continueTrace = (options, callback)=>{
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    if (acs.continueTrace) {
        return acs.continueTrace(options, callback);
    }
    const { sentryTrace, baggage } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
        const propagationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propagationContextFromHeaders"])(sentryTrace, baggage);
        scope.setPropagationContext(propagationContext);
        return callback();
    });
};
/**
 * Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
 * passed `null` to start an entirely new span tree.
 *
 * @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
 * spans started within the callback will not be attached to a parent span.
 * @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
 * @returns the value returned from the provided callback function.
 */ function withActiveSpan(span, callback) {
    const acs = getAcs();
    if (acs.withActiveSpan) {
        return acs.withActiveSpan(span, callback);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(scope, span || undefined);
        return callback(scope);
    });
}
/** Suppress tracing in the given callback, ensuring no spans are generated inside of it. */ function suppressTracing(callback) {
    const acs = getAcs();
    if (acs.suppressTracing) {
        return acs.suppressTracing(callback);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
        scope.setSDKProcessingMetadata({
            [SUPPRESS_TRACING_KEY]: true
        });
        return callback();
    });
}
/**
 * Starts a new trace for the duration of the provided callback. Spans started within the
 * callback will be part of the new trace instead of a potentially previously started trace.
 *
 * Important: Only use this function if you want to override the default trace lifetime and
 * propagation mechanism of the SDK for the duration and scope of the provided callback.
 * The newly created trace will also be the root of a new distributed trace, for example if
 * you make http requests within the callback.
 * This function might be useful if the operation you want to instrument should not be part
 * of a potentially ongoing trace.
 *
 * Default behavior:
 * - Server-side: A new trace is started for each incoming request.
 * - Browser: A new trace is started for each page our route. Navigating to a new route
 *            or page will automatically create a new trace.
 */ function startNewTrace(callback) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
        scope.setPropagationContext({
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: Math.random()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info(`Starting a new trace with id ${scope.getPropagationContext().traceId}`);
        return withActiveSpan(null, callback);
    });
}
function createChildOrRootSpan({ parentSpan, spanArguments, forceTransaction, scope }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])()) {
        const span = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]();
        // If this is a root span, we ensure to freeze a DSC
        // So we can have at least partial data here
        if (forceTransaction || !parentSpan) {
            const dsc = {
                sampled: 'false',
                sample_rate: '0',
                transaction: spanArguments.name,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span)
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeDscOnSpan"])(span, dsc);
        }
        return span;
    }
    const isolationScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])();
    let span;
    if (parentSpan && !forceTransaction) {
        span = _startChildSpan(parentSpan, scope, spanArguments);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addChildSpanToSpan"])(parentSpan, span);
    } else if (parentSpan) {
        // If we forced a transaction but have a parent span, make sure to continue from the parent span, not the scope
        const dsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(parentSpan);
        const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
        const parentSampled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsSampled"])(parentSpan);
        span = _startRootSpan({
            traceId,
            parentSpanId,
            ...spanArguments
        }, scope, parentSampled);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeDscOnSpan"])(span, dsc);
    } else {
        const { traceId, dsc, parentSpanId, sampled: parentSampled } = {
            ...isolationScope.getPropagationContext(),
            ...scope.getPropagationContext()
        };
        span = _startRootSpan({
            traceId,
            parentSpanId,
            ...spanArguments
        }, scope, parentSampled);
        if (dsc) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeDscOnSpan"])(span, dsc);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$logSpans$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logSpanStart"])(span);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCapturedScopesOnSpan"])(span, scope, isolationScope);
    return span;
}
/**
 * This converts StartSpanOptions to SentrySpanArguments.
 * For the most part (for now) we accept the same options,
 * but some of them need to be transformed.
 */ function parseSentrySpanArguments(options) {
    const exp = options.experimental || {};
    const initialCtx = {
        isStandalone: exp.standalone,
        ...options
    };
    if (options.startTime) {
        const ctx = {
            ...initialCtx
        };
        ctx.startTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanTimeInputToSeconds"])(options.startTime);
        delete ctx.startTime;
        return ctx;
    }
    return initialCtx;
}
function getAcs() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
}
function _startRootSpan(spanArguments, scope, parentSampled) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    const options = client?.getOptions() || {};
    const { name = '' } = spanArguments;
    const mutableSpanSamplingData = {
        spanAttributes: {
            ...spanArguments.attributes
        },
        spanName: name,
        parentSampled
    };
    // we don't care about the decision for the moment; this is just a placeholder
    client?.emit('beforeSampling', mutableSpanSamplingData, {
        decision: false
    });
    // If hook consumers override the parentSampled flag, we will use that value instead of the actual one
    const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
    const finalAttributes = mutableSpanSamplingData.spanAttributes;
    const currentPropagationContext = scope.getPropagationContext();
    const [sampled, sampleRate, localSampleRateWasApplied] = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? [
        false
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleSpan"])(options, {
        name,
        parentSampled: finalParentSampled,
        attributes: finalAttributes,
        parentSampleRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(currentPropagationContext.dsc?.sample_rate)
    }, currentPropagationContext.sampleRand);
    const rootSpan = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentrySpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentrySpan"]({
        ...spanArguments,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'custom',
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE"]]: sampleRate !== undefined && localSampleRateWasApplied ? sampleRate : undefined,
            ...finalAttributes
        },
        sampled
    });
    if (!sampled && client) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Discarding root span because its trace was not chosen to be sampled.');
        client.recordDroppedEvent('sample_rate', 'transaction');
    }
    if (client) {
        client.emit('spanStart', rootSpan);
    }
    return rootSpan;
}
/**
 * Creates a new `Span` while setting the current `Span.id` as `parentSpanId`.
 * This inherits the sampling decision from the parent span.
 */ function _startChildSpan(parentSpan, scope, spanArguments) {
    const { spanId, traceId } = parentSpan.spanContext();
    const sampled = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? false : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsSampled"])(parentSpan);
    const childSpan = sampled ? new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentrySpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentrySpan"]({
        ...spanArguments,
        parentSpanId: spanId,
        traceId,
        sampled
    }) : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]({
        traceId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addChildSpanToSpan"])(parentSpan, childSpan);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (client) {
        client.emit('spanStart', childSpan);
        // If it has an endTimestamp, it's already ended
        if (spanArguments.endTimestamp) {
            client.emit('spanEnd', childSpan);
        }
    }
    return childSpan;
}
function getParentSpan(scope) {
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(scope);
    if (!span) {
        return undefined;
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    const options = client ? client.getOptions() : {};
    if (options.parentSpanIsAlwaysRootSpan) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    }
    return span;
}
function getActiveSpanWrapper(parentSpan) {
    return parentSpan !== undefined ? (callback)=>{
        return withActiveSpan(parentSpan, callback);
    } : (callback)=>callback();
}
;
 //# sourceMappingURL=trace.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/idleSpan.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TRACING_DEFAULTS": (()=>TRACING_DEFAULTS),
    "startIdleSpan": (()=>startIdleSpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
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
;
const TRACING_DEFAULTS = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000
};
const FINISH_REASON_HEARTBEAT_FAILED = 'heartbeatFailed';
const FINISH_REASON_IDLE_TIMEOUT = 'idleTimeout';
const FINISH_REASON_FINAL_TIMEOUT = 'finalTimeout';
const FINISH_REASON_EXTERNAL_FINISH = 'externalFinish';
/**
 * An idle span is a span that automatically finishes. It does this by tracking child spans as activities.
 * An idle span is always the active span.
 */ function startIdleSpan(startSpanOptions, options = {}) {
    // Activities store a list of active spans
    const activities = new Map();
    // We should not use heartbeat if we finished a span
    let _finished = false;
    // Timer that tracks idleTimeout
    let _idleTimeoutID;
    // The reason why the span was finished
    let _finishReason = FINISH_REASON_EXTERNAL_FINISH;
    let _autoFinishAllowed = !options.disableAutoFinish;
    const _cleanupHooks = [];
    const { idleTimeout = TRACING_DEFAULTS.idleTimeout, finalTimeout = TRACING_DEFAULTS.finalTimeout, childSpanTimeout = TRACING_DEFAULTS.childSpanTimeout, beforeSpanEnd } = options;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])()) {
        const span = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]();
        const dsc = {
            sample_rate: '0',
            sampled: 'false',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span)
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeDscOnSpan"])(span, dsc);
        return span;
    }
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const previousActiveSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const span = _startIdleSpan(startSpanOptions);
    // We patch span.end to ensure we can run some things before the span is ended
    // eslint-disable-next-line @typescript-eslint/unbound-method
    span.end = new Proxy(span.end, {
        apply (target, thisArg, args) {
            if (beforeSpanEnd) {
                beforeSpanEnd(span);
            }
            // If the span is non-recording, nothing more to do here...
            // This is the case if tracing is enabled but this specific span was not sampled
            if (thisArg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]) {
                return;
            }
            // Just ensuring that this keeps working, even if we ever have more arguments here
            const [definedEndTimestamp, ...rest] = args;
            const timestamp = definedEndTimestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
            const spanEndTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanTimeInputToSeconds"])(timestamp);
            // Ensure we end with the last span timestamp, if possible
            const spans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpanDescendants"])(span).filter((child)=>child !== span);
            // If we have no spans, we just end, nothing else to do here
            if (!spans.length) {
                onIdleSpanEnded(spanEndTimestamp);
                return Reflect.apply(target, thisArg, [
                    spanEndTimestamp,
                    ...rest
                ]);
            }
            const childEndTimestamps = spans.map((span)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span).timestamp).filter((timestamp)=>!!timestamp);
            const latestSpanEndTimestamp = childEndTimestamps.length ? Math.max(...childEndTimestamps) : undefined;
            // In reality this should always exist here, but type-wise it may be undefined...
            const spanStartTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span).start_timestamp;
            // The final endTimestamp should:
            // * Never be before the span start timestamp
            // * Be the latestSpanEndTimestamp, if there is one, and it is smaller than the passed span end timestamp
            // * Otherwise be the passed end timestamp
            // Final timestamp can never be after finalTimeout
            const endTimestamp = Math.min(spanStartTimestamp ? spanStartTimestamp + finalTimeout / 1000 : Infinity, Math.max(spanStartTimestamp || -Infinity, Math.min(spanEndTimestamp, latestSpanEndTimestamp || Infinity)));
            onIdleSpanEnded(endTimestamp);
            return Reflect.apply(target, thisArg, [
                endTimestamp,
                ...rest
            ]);
        }
    });
    /**
   * Cancels the existing idle timeout, if there is one.
   */ function _cancelIdleTimeout() {
        if (_idleTimeoutID) {
            clearTimeout(_idleTimeoutID);
            _idleTimeoutID = undefined;
        }
    }
    /**
   * Restarts idle timeout, if there is no running idle timeout it will start one.
   */ function _restartIdleTimeout(endTimestamp) {
        _cancelIdleTimeout();
        _idleTimeoutID = setTimeout(()=>{
            if (!_finished && activities.size === 0 && _autoFinishAllowed) {
                _finishReason = FINISH_REASON_IDLE_TIMEOUT;
                span.end(endTimestamp);
            }
        }, idleTimeout);
    }
    /**
   * Restarts child span timeout, if there is none running it will start one.
   */ function _restartChildSpanTimeout(endTimestamp) {
        _idleTimeoutID = setTimeout(()=>{
            if (!_finished && _autoFinishAllowed) {
                _finishReason = FINISH_REASON_HEARTBEAT_FAILED;
                span.end(endTimestamp);
            }
        }, childSpanTimeout);
    }
    /**
   * Start tracking a specific activity.
   * @param spanId The span id that represents the activity
   */ function _pushActivity(spanId) {
        _cancelIdleTimeout();
        activities.set(spanId, true);
        const endTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
        // We need to add the timeout here to have the real endtimestamp of the idle span
        // Remember timestampInSeconds is in seconds, timeout is in ms
        _restartChildSpanTimeout(endTimestamp + childSpanTimeout / 1000);
    }
    /**
   * Remove an activity from usage
   * @param spanId The span id that represents the activity
   */ function _popActivity(spanId) {
        if (activities.has(spanId)) {
            activities.delete(spanId);
        }
        if (activities.size === 0) {
            const endTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
            // We need to add the timeout here to have the real endtimestamp of the idle span
            // Remember timestampInSeconds is in seconds, timeout is in ms
            _restartIdleTimeout(endTimestamp + idleTimeout / 1000);
        }
    }
    function onIdleSpanEnded(endTimestamp) {
        _finished = true;
        activities.clear();
        _cleanupHooks.forEach((cleanup)=>cleanup());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(scope, previousActiveSpan);
        const spanJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
        const { start_timestamp: startTimestamp } = spanJSON;
        // This should never happen, but to make TS happy...
        if (!startTimestamp) {
            return;
        }
        const attributes = spanJSON.data;
        if (!attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON"]]) {
            span.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON"], _finishReason);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Tracing] Idle span "${spanJSON.op}" finished`);
        const childSpans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpanDescendants"])(span).filter((child)=>child !== span);
        let discardedSpans = 0;
        childSpans.forEach((childSpan)=>{
            // We cancel all pending spans with status "cancelled" to indicate the idle span was finished early
            if (childSpan.isRecording()) {
                childSpan.setStatus({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
                    message: 'cancelled'
                });
                childSpan.end(endTimestamp);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Cancelling span since span ended early', JSON.stringify(childSpan, undefined, 2));
            }
            const childSpanJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(childSpan);
            const { timestamp: childEndTimestamp = 0, start_timestamp: childStartTimestamp = 0 } = childSpanJSON;
            const spanStartedBeforeIdleSpanEnd = childStartTimestamp <= endTimestamp;
            // Add a delta with idle timeout so that we prevent false positives
            const timeoutWithMarginOfError = (finalTimeout + idleTimeout) / 1000;
            const spanEndedBeforeFinalTimeout = childEndTimestamp - childStartTimestamp <= timeoutWithMarginOfError;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
                const stringifiedSpan = JSON.stringify(childSpan, undefined, 2);
                if (!spanStartedBeforeIdleSpanEnd) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Discarding span since it happened after idle span was finished', stringifiedSpan);
                } else if (!spanEndedBeforeFinalTimeout) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Discarding span since it finished after idle span final timeout', stringifiedSpan);
                }
            }
            if (!spanEndedBeforeFinalTimeout || !spanStartedBeforeIdleSpanEnd) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeChildSpanFromSpan"])(span, childSpan);
                discardedSpans++;
            }
        });
        if (discardedSpans > 0) {
            span.setAttribute('sentry.idle_span_discarded_spans', discardedSpans);
        }
    }
    _cleanupHooks.push(client.on('spanStart', (startedSpan)=>{
        // If we already finished the idle span,
        // or if this is the idle span itself being started,
        // or if the started span has already been closed,
        // we don't care about it for activity
        if (_finished || startedSpan === span || !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(startedSpan).timestamp) {
            return;
        }
        const allSpans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpanDescendants"])(span);
        // If the span that was just started is a child of the idle span, we should track it
        if (allSpans.includes(startedSpan)) {
            _pushActivity(startedSpan.spanContext().spanId);
        }
    }));
    _cleanupHooks.push(client.on('spanEnd', (endedSpan)=>{
        if (_finished) {
            return;
        }
        _popActivity(endedSpan.spanContext().spanId);
    }));
    _cleanupHooks.push(client.on('idleSpanEnableAutoFinish', (spanToAllowAutoFinish)=>{
        if (spanToAllowAutoFinish === span) {
            _autoFinishAllowed = true;
            _restartIdleTimeout();
            if (activities.size) {
                _restartChildSpanTimeout();
            }
        }
    }));
    // We only start the initial idle timeout if we are not delaying the auto finish
    if (!options.disableAutoFinish) {
        _restartIdleTimeout();
    }
    setTimeout(()=>{
        if (!_finished) {
            span.setStatus({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
                message: 'deadline_exceeded'
            });
            _finishReason = FINISH_REASON_FINAL_TIMEOUT;
            span.end();
        }
    }, finalTimeout);
    return span;
}
function _startIdleSpan(options) {
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])(options);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])(), span);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log('[Tracing] Started span is an idle span');
    return span;
}
;
 //# sourceMappingURL=idleSpan.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "registerSpanErrorInstrumentation": (()=>registerSpanErrorInstrumentation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalUnhandledRejection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
;
;
;
;
;
;
let errorsInstrumented = false;
/**
 * Ensure that global errors automatically set the active span status.
 */ function registerSpanErrorInstrumentation() {
    if (errorsInstrumented) {
        return;
    }
    errorsInstrumented = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addGlobalErrorInstrumentationHandler"])(errorCallback);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalUnhandledRejection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addGlobalUnhandledRejectionInstrumentationHandler"])(errorCallback);
}
/**
 * If an error or unhandled promise occurs, we mark the active root span as failed
 */ function errorCallback() {
    const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const rootSpan = activeSpan && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan);
    if (rootSpan) {
        const message = 'internal_error';
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Tracing] Root span: ${message} -> Global error occurred`);
        rootSpan.setStatus({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
            message
        });
    }
}
// The function name will be lost when bundling but we need to be able to identify this listener later to maintain the
// node.js default exit behaviour
errorCallback.tag = 'sentry_tracingErrorCallback';
;
 //# sourceMappingURL=errors.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/traceData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTraceData": (()=>getTraceData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/tracing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/baggage.js [app-client] (ecmascript)");
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
;
/**
 * Extracts trace propagation data from the current span or from the client's scope (via transaction or propagation
 * context) and serializes it to `sentry-trace` and `baggage` values to strings. These values can be used to propagate
 * a trace via our tracing Http headers or Html `<meta>` tags.
 *
 * This function also applies some validation to the generated sentry-trace and baggage values to ensure that
 * only valid strings are returned.
 *
 * @returns an object with the tracing data values. The object keys are the name of the tracing key to be used as header
 * or meta tag name.
 */ function getTraceData(options = {}) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEnabled"])() || !client) {
        return {};
    }
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    if (acs.getTraceData) {
        return acs.getTraceData(options);
    }
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const span = options.span || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const sentryTrace = span ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToTraceHeader"])(span) : scopeToTraceHeader(scope);
    const dsc = span ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromScope"])(client, scope);
    const baggage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicSamplingContextToSentryBaggageHeader"])(dsc);
    const isValidSentryTraceHeader = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACEPARENT_REGEXP"].test(sentryTrace);
    if (!isValidSentryTraceHeader) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Invalid sentry-trace data. Cannot generate trace data');
        return {};
    }
    return {
        'sentry-trace': sentryTrace,
        baggage
    };
}
/**
 * Get a sentry-trace header value for the given scope.
 */ function scopeToTraceHeader(scope) {
    const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSentryTraceHeader"])(traceId, propagationSpanId, sampled);
}
;
 //# sourceMappingURL=traceData.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/fetch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "_addTracingHeadersToFetchRequest": (()=>_addTracingHeadersToFetchRequest),
    "instrumentFetchRequest": (()=>instrumentFetchRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/baggage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$traceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/traceData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-client] (ecmascript)");
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
;
;
;
;
/**
 * Create and track fetch request spans for usage in combination with `addFetchInstrumentationHandler`.
 *
 * @returns Span if a span was created, otherwise void.
 */ function instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeaders, spans, spanOrigin = 'auto.http.browser') {
    if (!handlerData.fetchData) {
        return undefined;
    }
    const { method, url } = handlerData.fetchData;
    const shouldCreateSpanResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])() && shouldCreateSpan(url);
    if (handlerData.endTimestamp && shouldCreateSpanResult) {
        const spanId = handlerData.fetchData.__span;
        if (!spanId) return;
        const span = spans[spanId];
        if (span) {
            endSpan(span, handlerData);
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[spanId];
        }
        return undefined;
    }
    const hasParent = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const span = shouldCreateSpanResult && hasParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])(getSpanStartOptions(url, method, spanOrigin)) : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]();
    handlerData.fetchData.__span = span.spanContext().spanId;
    spans[span.spanContext().spanId] = span;
    if (shouldAttachHeaders(handlerData.fetchData.url)) {
        const request = handlerData.args[0];
        const options = handlerData.args[1] || {};
        const headers = _addTracingHeadersToFetchRequest(request, options, // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
        // we do not want to use the span as base for the trace headers,
        // which means that the headers will be generated from the scope and the sampling decision is deferred
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])() && hasParent ? span : undefined);
        if (headers) {
            // Ensure this is actually set, if no options have been passed previously
            handlerData.args[1] = options;
            options.headers = headers;
        }
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (client) {
        const fetchHint = {
            input: handlerData.args,
            response: handlerData.response,
            startTimestamp: handlerData.startTimestamp,
            endTimestamp: handlerData.endTimestamp
        };
        client.emit('beforeOutgoingRequestSpan', span, fetchHint);
    }
    return span;
}
/**
 * Adds sentry-trace and baggage headers to the various forms of fetch headers.
 * exported only for testing purposes
 *
 * When we determine if we should add a baggage header, there are 3 cases:
 * 1. No previous baggage header -> add baggage
 * 2. Previous baggage header has no sentry baggage values -> add our baggage
 * 3. Previous baggage header has sentry baggage values -> do nothing (might have been added manually by users)
 */ // eslint-disable-next-line complexity -- yup it's this complicated :(
function _addTracingHeadersToFetchRequest(request, fetchOptionsObj, span) {
    const traceHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$traceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraceData"])({
        span
    });
    const sentryTrace = traceHeaders['sentry-trace'];
    const baggage = traceHeaders.baggage;
    // Nothing to do, when we return undefined here, the original headers will be used
    if (!sentryTrace) {
        return undefined;
    }
    const originalHeaders = fetchOptionsObj.headers || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRequest"])(request) ? request.headers : undefined);
    if (!originalHeaders) {
        return {
            ...traceHeaders
        };
    } else if (isHeaders(originalHeaders)) {
        const newHeaders = new Headers(originalHeaders);
        // We don't want to override manually added sentry headers
        if (!newHeaders.get('sentry-trace')) {
            newHeaders.set('sentry-trace', sentryTrace);
        }
        if (baggage) {
            const prevBaggageHeader = newHeaders.get('baggage');
            if (!prevBaggageHeader) {
                newHeaders.set('baggage', baggage);
            } else if (!baggageHeaderHasSentryBaggageValues(prevBaggageHeader)) {
                newHeaders.set('baggage', `${prevBaggageHeader},${baggage}`);
            }
        }
        return newHeaders;
    } else if (Array.isArray(originalHeaders)) {
        const newHeaders = [
            ...originalHeaders
        ];
        if (!originalHeaders.find((header)=>header[0] === 'sentry-trace')) {
            newHeaders.push([
                'sentry-trace',
                sentryTrace
            ]);
        }
        const prevBaggageHeaderWithSentryValues = originalHeaders.find((header)=>header[0] === 'baggage' && baggageHeaderHasSentryBaggageValues(header[1]));
        if (baggage && !prevBaggageHeaderWithSentryValues) {
            // If there are multiple entries with the same key, the browser will merge the values into a single request header.
            // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
            newHeaders.push([
                'baggage',
                baggage
            ]);
        }
        return newHeaders;
    } else {
        const existingSentryTraceHeader = 'sentry-trace' in originalHeaders ? originalHeaders['sentry-trace'] : undefined;
        const existingBaggageHeader = 'baggage' in originalHeaders ? originalHeaders.baggage : undefined;
        const newBaggageHeaders = existingBaggageHeader ? Array.isArray(existingBaggageHeader) ? [
            ...existingBaggageHeader
        ] : [
            existingBaggageHeader
        ] : [];
        const prevBaggageHeaderWithSentryValues = existingBaggageHeader && (Array.isArray(existingBaggageHeader) ? existingBaggageHeader.find((headerItem)=>baggageHeaderHasSentryBaggageValues(headerItem)) : baggageHeaderHasSentryBaggageValues(existingBaggageHeader));
        if (baggage && !prevBaggageHeaderWithSentryValues) {
            newBaggageHeaders.push(baggage);
        }
        return {
            ...originalHeaders,
            'sentry-trace': existingSentryTraceHeader ?? sentryTrace,
            baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(',') : undefined
        };
    }
}
function endSpan(span, handlerData) {
    if (handlerData.response) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHttpStatus"])(span, handlerData.response.status);
        const contentLength = handlerData.response?.headers && handlerData.response.headers.get('content-length');
        if (contentLength) {
            const contentLengthNum = parseInt(contentLength);
            if (contentLengthNum > 0) {
                span.setAttribute('http.response_content_length', contentLengthNum);
            }
        }
    } else if (handlerData.error) {
        span.setStatus({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
            message: 'internal_error'
        });
    }
    span.end();
}
function baggageHeaderHasSentryBaggageValues(baggageHeader) {
    return baggageHeader.split(',').some((baggageEntry)=>baggageEntry.trim().startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_BAGGAGE_KEY_PREFIX"]));
}
function isHeaders(headers) {
    return typeof Headers !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOf"])(headers, Headers);
}
function getSpanStartOptions(url, method, spanOrigin) {
    const parsedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStringToURLObject"])(url);
    return {
        name: parsedUrl ? `${method} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSanitizedUrlStringFromUrlObject"])(parsedUrl)}` : method,
        attributes: getFetchSpanAttributes(url, parsedUrl, method, spanOrigin)
    };
}
function getFetchSpanAttributes(url, parsedUrl, method, spanOrigin) {
    const attributes = {
        url,
        type: 'fetch',
        'http.method': method,
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: spanOrigin,
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'http.client'
    };
    if (parsedUrl) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isURLObjectRelative"])(parsedUrl)) {
            attributes['http.url'] = parsedUrl.href;
            attributes['server.address'] = parsedUrl.host;
        }
        if (parsedUrl.search) {
            attributes['http.query'] = parsedUrl.search;
        }
        if (parsedUrl.hash) {
            attributes['http.fragment'] = parsedUrl.hash;
        }
    }
    return attributes;
}
;
 //# sourceMappingURL=fetch.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://github.com/calvinmetcalf/rollup-plugin-node-builtins/blob/63ab8aacd013767445ca299e468d9a60a95328d7/src/es6/path.js
//
// Copyright Joyent, Inc.and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/** JSDoc */ __turbopack_context__.s({
    "basename": (()=>basename),
    "dirname": (()=>dirname),
    "isAbsolute": (()=>isAbsolute),
    "join": (()=>join),
    "normalizePath": (()=>normalizePath),
    "relative": (()=>relative),
    "resolve": (()=>resolve)
});
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    let up = 0;
    for(let i = parts.length - 1; i >= 0; i--){
        const last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        } else if (last === '..') {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        for(; up--; up){
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
const splitPathRe = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
/** JSDoc */ function splitPath(filename) {
    // Truncate files names greater than 1024 characters to avoid regex dos
    // https://github.com/getsentry/sentry-javascript/pull/8737#discussion_r1285719172
    const truncated = filename.length > 1024 ? `<truncated>${filename.slice(-1024)}` : filename;
    const parts = splitPathRe.exec(truncated);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */ function resolve(...args) {
    let resolvedPath = '';
    let resolvedAbsolute = false;
    for(let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--){
        const path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter((p)=>!!p), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */ function trim(arr) {
    let start = 0;
    for(; start < arr.length; start++){
        if (arr[start] !== '') {
            break;
        }
    }
    let end = arr.length - 1;
    for(; end >= 0; end--){
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */ function relative(from, to) {
    /* eslint-disable no-param-reassign */ from = resolve(from).slice(1);
    to = resolve(to).slice(1);
    /* eslint-enable no-param-reassign */ const fromParts = trim(from.split('/'));
    const toParts = trim(to.split('/'));
    const length = Math.min(fromParts.length, toParts.length);
    let samePartsLength = length;
    for(let i = 0; i < length; i++){
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    let outputParts = [];
    for(let i = samePartsLength; i < fromParts.length; i++){
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
// path.normalize(path)
// posix version
/** JSDoc */ function normalizePath(path) {
    const isPathAbsolute = isAbsolute(path);
    const trailingSlash = path.slice(-1) === '/';
    // Normalize the path
    let normalizedPath = normalizeArray(path.split('/').filter((p)=>!!p), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
// posix version
/** JSDoc */ function isAbsolute(path) {
    return path.charAt(0) === '/';
}
// posix version
/** JSDoc */ function join(...args) {
    return normalizePath(args.join('/'));
}
/** JSDoc */ function dirname(path) {
    const result = splitPath(path);
    const root = result[0] || '';
    let dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.slice(0, dir.length - 1);
    }
    return root + dir;
}
/** JSDoc */ function basename(path, ext) {
    let f = splitPath(path)[2] || '';
    if (ext && f.slice(ext.length * -1) === ext) {
        f = f.slice(0, f.length - ext.length);
    }
    return f;
}
;
 //# sourceMappingURL=path.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integrations/rewriteframes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateIteratee": (()=>generateIteratee),
    "rewriteFramesIntegration": (()=>rewriteFramesIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
;
const INTEGRATION_NAME = 'RewriteFrames';
/**
 * Rewrite event frames paths.
 */ const rewriteFramesIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])((options = {})=>{
    const root = options.root;
    const prefix = options.prefix || 'app:///';
    const isBrowser = 'window' in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"] && !!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].window;
    const iteratee = options.iteratee || generateIteratee({
        isBrowser,
        root,
        prefix
    });
    /** Process an exception event. */ function _processExceptionsEvent(event) {
        try {
            return {
                ...event,
                exception: {
                    ...event.exception,
                    // The check for this is performed inside `process` call itself, safe to skip here
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    values: event.exception.values.map((value)=>({
                            ...value,
                            ...value.stacktrace && {
                                stacktrace: _processStacktrace(value.stacktrace)
                            }
                        }))
                }
            };
        } catch (_oO) {
            return event;
        }
    }
    /** Process a stack trace. */ function _processStacktrace(stacktrace) {
        return {
            ...stacktrace,
            frames: stacktrace?.frames && stacktrace.frames.map((f)=>iteratee(f))
        };
    }
    return {
        name: INTEGRATION_NAME,
        processEvent (originalEvent) {
            let processedEvent = originalEvent;
            if (originalEvent.exception && Array.isArray(originalEvent.exception.values)) {
                processedEvent = _processExceptionsEvent(processedEvent);
            }
            return processedEvent;
        }
    };
});
/**
 * Exported only for tests.
 */ function generateIteratee({ isBrowser, root, prefix }) {
    return (frame)=>{
        if (!frame.filename) {
            return frame;
        }
        // Determine if this is a Windows frame by checking for a Windows-style prefix such as `C:\`
        const isWindowsFrame = /^[a-zA-Z]:\\/.test(frame.filename) || frame.filename.includes('\\') && !frame.filename.includes('/');
        // Check if the frame filename begins with `/`
        const startsWithSlash = /^\//.test(frame.filename);
        if (isBrowser) {
            if (root) {
                const oldFilename = frame.filename;
                if (oldFilename.indexOf(root) === 0) {
                    frame.filename = oldFilename.replace(root, prefix);
                }
            }
        } else {
            if (isWindowsFrame || startsWithSlash) {
                const filename = isWindowsFrame ? frame.filename.replace(/^[a-zA-Z]:/, '') // remove Windows-style prefix
                .replace(/\\/g, '/') // replace all `\\` instances with `/`
                 : frame.filename;
                const base = root ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relative"])(root, filename) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(filename);
                frame.filename = `${prefix}${base}`;
            }
        }
        return frame;
    };
}
;
 //# sourceMappingURL=rewriteframes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/isSentryRequestUrl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Checks whether given url points to Sentry server
 *
 * @param url url to verify
 */ __turbopack_context__.s({
    "isSentryRequestUrl": (()=>isSentryRequestUrl)
});
function isSentryRequestUrl(url, client) {
    const dsn = client?.getDsn();
    const tunnel = client?.getOptions().tunnel;
    return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}
function checkTunnel(url, tunnel) {
    if (!tunnel) {
        return false;
    }
    return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}
function checkDsn(url, dsn) {
    return dsn ? url.includes(dsn.host) : false;
}
function removeTrailingSlash(str) {
    return str[str.length - 1] === '/' ? str.slice(0, -1) : str;
}
;
 //# sourceMappingURL=isSentryRequestUrl.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/node.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNodeEnv": (()=>isNodeEnv),
    "loadModule": (()=>loadModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/env.js [app-client] (ecmascript)");
;
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */ /**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */ function isNodeEnv() {
    // explicitly check for browser bundles as those can be optimized statically
    // by terser/rollup.
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserBundle"])() && Object.prototype.toString.call(typeof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : 0) === '[object process]';
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @param existingModule module to use for requiring
 * @returns possibly required module
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadModule(moduleName, existingModule = module) {
    let mod;
    try {
        mod = dynamicRequire(existingModule, moduleName);
    } catch (e) {
    // no-empty
    }
    if (!mod) {
        try {
            const { cwd } = dynamicRequire(existingModule, 'process');
            mod = dynamicRequire(existingModule, `${cwd()}/node_modules/${moduleName}`);
        } catch (e) {
        // no-empty
        }
    }
    return mod;
}
;
 //# sourceMappingURL=node.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/isBrowser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isBrowser": (()=>isBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
;
;
/**
 * Returns true if we are in the browser.
 */ function isBrowser() {
    // eslint-disable-next-line no-restricted-globals
    return typeof window !== 'undefined' && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeEnv"])() || isElectronNodeRenderer());
}
// Electron renderers with nodeIntegration enabled are detected as Node.js so we specifically test for them
function isElectronNodeRenderer() {
    const process = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].process;
    return process?.type === 'renderer';
}
;
 //# sourceMappingURL=isBrowser.js.map
}}),
}]);

//# sourceMappingURL=79789_%40sentry_core_build_esm_8ce2ecb7._.js.map