(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/error.ts
__turbopack_context__.s({
    "ClerkAPIResponseError": (()=>ClerkAPIResponseError),
    "ClerkRuntimeError": (()=>ClerkRuntimeError),
    "ClerkWebAuthnError": (()=>ClerkWebAuthnError),
    "EmailLinkError": (()=>EmailLinkError),
    "EmailLinkErrorCode": (()=>EmailLinkErrorCode),
    "EmailLinkErrorCodeStatus": (()=>EmailLinkErrorCodeStatus),
    "buildErrorThrower": (()=>buildErrorThrower),
    "errorToJSON": (()=>errorToJSON),
    "is4xxError": (()=>is4xxError),
    "isCaptchaError": (()=>isCaptchaError),
    "isClerkAPIResponseError": (()=>isClerkAPIResponseError),
    "isClerkRuntimeError": (()=>isClerkRuntimeError),
    "isEmailLinkError": (()=>isEmailLinkError),
    "isKnownError": (()=>isKnownError),
    "isMetamaskError": (()=>isMetamaskError),
    "isNetworkError": (()=>isNetworkError),
    "isPasswordPwnedError": (()=>isPasswordPwnedError),
    "isReverificationCancelledError": (()=>isReverificationCancelledError),
    "isUnauthorizedError": (()=>isUnauthorizedError),
    "isUserLockedError": (()=>isUserLockedError),
    "parseError": (()=>parseError),
    "parseErrors": (()=>parseErrors)
});
function isUnauthorizedError(e) {
    const status = e?.status;
    const code = e?.errors?.[0]?.code;
    return code === "authentication_invalid" && status === 401;
}
function isCaptchaError(e) {
    return [
        "captcha_invalid",
        "captcha_not_enabled",
        "captcha_missing_token"
    ].includes(e.errors[0].code);
}
function is4xxError(e) {
    const status = e?.status;
    return !!status && status >= 400 && status < 500;
}
function isNetworkError(e) {
    const message = (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "");
    return message.includes("networkerror");
}
function isKnownError(error) {
    return isClerkAPIResponseError(error) || isMetamaskError(error) || isClerkRuntimeError(error);
}
function isClerkAPIResponseError(err) {
    return "clerkError" in err;
}
function isClerkRuntimeError(err) {
    return "clerkRuntimeError" in err;
}
function isReverificationCancelledError(err) {
    return isClerkRuntimeError(err) && err.code === "reverification_cancelled";
}
function isMetamaskError(err) {
    return "code" in err && [
        4001,
        32602,
        32603
    ].includes(err.code) && "message" in err;
}
function isUserLockedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "user_locked";
}
function isPasswordPwnedError(err) {
    return isClerkAPIResponseError(err) && err.errors?.[0]?.code === "form_password_pwned";
}
function parseErrors(data = []) {
    return data.length > 0 ? data.map(parseError) : [];
}
function parseError(error) {
    return {
        code: error.code,
        message: error.message,
        longMessage: error.long_message,
        meta: {
            paramName: error?.meta?.param_name,
            sessionId: error?.meta?.session_id,
            emailAddresses: error?.meta?.email_addresses,
            identifiers: error?.meta?.identifiers,
            zxcvbn: error?.meta?.zxcvbn
        }
    };
}
function errorToJSON(error) {
    return {
        code: error?.code || "",
        message: error?.message || "",
        long_message: error?.longMessage,
        meta: {
            param_name: error?.meta?.paramName,
            session_id: error?.meta?.sessionId,
            email_addresses: error?.meta?.emailAddresses,
            identifiers: error?.meta?.identifiers,
            zxcvbn: error?.meta?.zxcvbn
        }
    };
}
var ClerkAPIResponseError = class _ClerkAPIResponseError extends Error {
    constructor(message, { data, status, clerkTraceId, retryAfter }){
        super(message);
        this.toString = ()=>{
            let message = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map((e)=>JSON.stringify(e))}`;
            if (this.clerkTraceId) {
                message += `
Clerk Trace ID: ${this.clerkTraceId}`;
            }
            return message;
        };
        Object.setPrototypeOf(this, _ClerkAPIResponseError.prototype);
        this.status = status;
        this.message = message;
        this.clerkTraceId = clerkTraceId;
        this.retryAfter = retryAfter;
        this.clerkError = true;
        this.errors = parseErrors(data);
    }
};
var ClerkRuntimeError = class _ClerkRuntimeError extends Error {
    constructor(message, { code }){
        const prefix = "\u{1F512} Clerk:";
        const regex = new RegExp(prefix.replace(" ", "\\s*"), "i");
        const sanitized = message.replace(regex, "");
        const _message = `${prefix} ${sanitized.trim()}

(code="${code}")
`;
        super(_message);
        /**
     * Returns a string representation of the error.
     *
     * @returns {string} A formatted string with the error name and message.
     */ this.toString = ()=>{
            return `[${this.name}]
Message:${this.message}`;
        };
        Object.setPrototypeOf(this, _ClerkRuntimeError.prototype);
        this.code = code;
        this.message = _message;
        this.clerkRuntimeError = true;
        this.name = "ClerkRuntimeError";
    }
};
var EmailLinkError = class _EmailLinkError extends Error {
    constructor(code){
        super(code);
        this.code = code;
        this.name = "EmailLinkError";
        Object.setPrototypeOf(this, _EmailLinkError.prototype);
    }
};
function isEmailLinkError(err) {
    return err.name === "EmailLinkError";
}
var EmailLinkErrorCode = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
var EmailLinkErrorCodeStatus = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
var DefaultMessages = Object.freeze({
    InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
    InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
    MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
});
function buildErrorThrower({ packageName, customMessages }) {
    let pkg = packageName;
    const messages = {
        ...DefaultMessages,
        ...customMessages
    };
    function buildMessage(rawMessage, replacements) {
        if (!replacements) {
            return `${pkg}: ${rawMessage}`;
        }
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches){
            const replacement = (replacements[match[1]] || "").toString();
            msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
    }
    return {
        setPackageName ({ packageName: packageName2 }) {
            if (typeof packageName2 === "string") {
                pkg = packageName2;
            }
            return this;
        },
        setMessages ({ customMessages: customMessages2 }) {
            Object.assign(messages, customMessages2 || {});
            return this;
        },
        throwInvalidPublishableKeyError (params) {
            throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl (params) {
            throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError () {
            throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError () {
            throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError (params) {
            throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw (message) {
            throw new Error(buildMessage(message));
        }
    };
}
var ClerkWebAuthnError = class extends ClerkRuntimeError {
    constructor(message, { code }){
        super(message, {
            code
        });
        this.code = code;
    }
};
;
 //# sourceMappingURL=chunk-NT4JRXL3.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__export": (()=>__export),
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet),
    "__reExport": (()=>__reExport)
});
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __reExport = (target, mod, secondTarget)=>(__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
;
 //# sourceMappingURL=chunk-7ELT755Q.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=error.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3CN5LOSN.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/authorization.ts
__turbopack_context__.s({
    "createCheckAuthorization": (()=>createCheckAuthorization),
    "resolveAuthState": (()=>resolveAuthState),
    "splitByScope": (()=>splitByScope),
    "validateReverificationConfig": (()=>validateReverificationConfig)
});
var TYPES_TO_OBJECTS = {
    strict_mfa: {
        afterMinutes: 10,
        level: "multi_factor"
    },
    strict: {
        afterMinutes: 10,
        level: "second_factor"
    },
    moderate: {
        afterMinutes: 60,
        level: "second_factor"
    },
    lax: {
        afterMinutes: 1440,
        level: "second_factor"
    }
};
var ALLOWED_LEVELS = /* @__PURE__ */ new Set([
    "first_factor",
    "second_factor",
    "multi_factor"
]);
var ALLOWED_TYPES = /* @__PURE__ */ new Set([
    "strict_mfa",
    "strict",
    "moderate",
    "lax"
]);
var isValidMaxAge = (maxAge)=>typeof maxAge === "number" && maxAge > 0;
var isValidLevel = (level)=>ALLOWED_LEVELS.has(level);
var isValidVerificationType = (type)=>ALLOWED_TYPES.has(type);
var prefixWithOrg = (value)=>value.replace(/^(org:)*/, "org:");
var checkOrgAuthorization = (params, options)=>{
    const { orgId, orgRole, orgPermissions } = options;
    if (!params.role && !params.permission) {
        return null;
    }
    if (!orgId || !orgRole || !orgPermissions) {
        return null;
    }
    if (params.permission) {
        return orgPermissions.includes(prefixWithOrg(params.permission));
    }
    if (params.role) {
        return prefixWithOrg(orgRole) === prefixWithOrg(params.role);
    }
    return null;
};
var checkForFeatureOrPlan = (claim, featureOrPlan)=>{
    const { org: orgFeatures, user: userFeatures } = splitByScope(claim);
    const [scope, _id] = featureOrPlan.split(":");
    const id = _id || scope;
    if (scope === "org") {
        return orgFeatures.includes(id);
    } else if (scope === "user") {
        return userFeatures.includes(id);
    } else {
        return [
            ...orgFeatures,
            ...userFeatures
        ].includes(id);
    }
};
var checkBillingAuthorization = (params, options)=>{
    const { features, plans } = options;
    if (params.feature && features) {
        return checkForFeatureOrPlan(features, params.feature);
    }
    if (params.plan && plans) {
        return checkForFeatureOrPlan(plans, params.plan);
    }
    return null;
};
var splitByScope = (fea)=>{
    const features = fea ? fea.split(",").map((f)=>f.trim()) : [];
    return {
        org: features.filter((f)=>f.split(":")[0].includes("o")).map((f)=>f.split(":")[1]),
        user: features.filter((f)=>f.split(":")[0].includes("u")).map((f)=>f.split(":")[1])
    };
};
var validateReverificationConfig = (config)=>{
    if (!config) {
        return false;
    }
    const convertConfigToObject = (config2)=>{
        if (typeof config2 === "string") {
            return TYPES_TO_OBJECTS[config2];
        }
        return config2;
    };
    const isValidStringValue = typeof config === "string" && isValidVerificationType(config);
    const isValidObjectValue = typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes);
    if (isValidStringValue || isValidObjectValue) {
        return convertConfigToObject.bind(null, config);
    }
    return false;
};
var checkReverificationAuthorization = (params, { factorVerificationAge })=>{
    if (!params.reverification || !factorVerificationAge) {
        return null;
    }
    const isValidReverification = validateReverificationConfig(params.reverification);
    if (!isValidReverification) {
        return null;
    }
    const { level, afterMinutes } = isValidReverification();
    const [factor1Age, factor2Age] = factorVerificationAge;
    const isValidFactor1 = factor1Age !== -1 ? afterMinutes > factor1Age : null;
    const isValidFactor2 = factor2Age !== -1 ? afterMinutes > factor2Age : null;
    switch(level){
        case "first_factor":
            return isValidFactor1;
        case "second_factor":
            return factor2Age !== -1 ? isValidFactor2 : isValidFactor1;
        case "multi_factor":
            return factor2Age === -1 ? isValidFactor1 : isValidFactor1 && isValidFactor2;
    }
};
var createCheckAuthorization = (options)=>{
    return (params)=>{
        if (!options.userId) {
            return false;
        }
        const billingAuthorization = checkBillingAuthorization(params, options);
        const orgAuthorization = checkOrgAuthorization(params, options);
        const reverificationAuthorization = checkReverificationAuthorization(params, options);
        if ([
            billingAuthorization || orgAuthorization,
            reverificationAuthorization
        ].some((a)=>a === null)) {
            return [
                billingAuthorization || orgAuthorization,
                reverificationAuthorization
            ].some((a)=>a === true);
        }
        return [
            billingAuthorization || orgAuthorization,
            reverificationAuthorization
        ].every((a)=>a === true);
    };
};
var resolveAuthState = ({ authObject: { sessionId, sessionStatus, userId, actor, orgId, orgRole, orgSlug, signOut, getToken, has, sessionClaims }, options: { treatPendingAsSignedOut = true } })=>{
    if (sessionId === void 0 && userId === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            sessionId,
            sessionClaims: void 0,
            userId,
            actor: void 0,
            orgId: void 0,
            orgRole: void 0,
            orgSlug: void 0,
            has: void 0,
            signOut,
            getToken
        };
    }
    if (sessionId === null && userId === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            sessionId,
            userId,
            sessionClaims: null,
            actor: null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: ()=>false,
            signOut,
            getToken
        };
    }
    if (treatPendingAsSignedOut && sessionStatus === "pending") {
        return {
            isLoaded: true,
            isSignedIn: false,
            sessionId: null,
            userId: null,
            sessionClaims: null,
            actor: null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has: ()=>false,
            signOut,
            getToken
        };
    }
    if (!!sessionId && !!sessionClaims && !!userId && !!orgId && !!orgRole) {
        return {
            isLoaded: true,
            isSignedIn: true,
            sessionId,
            sessionClaims,
            userId,
            actor: actor || null,
            orgId,
            orgRole,
            orgSlug: orgSlug || null,
            has,
            signOut,
            getToken
        };
    }
    if (!!sessionId && !!sessionClaims && !!userId && !orgId) {
        return {
            isLoaded: true,
            isSignedIn: true,
            sessionId,
            sessionClaims,
            userId,
            actor: actor || null,
            orgId: null,
            orgRole: null,
            orgSlug: null,
            has,
            signOut,
            getToken
        };
    }
};
;
 //# sourceMappingURL=chunk-3CN5LOSN.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3CN5LOSN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=authorization.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3CN5LOSN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/underscore.ts
__turbopack_context__.s({
    "camelToSnake": (()=>camelToSnake),
    "deepCamelToSnake": (()=>deepCamelToSnake),
    "deepSnakeToCamel": (()=>deepSnakeToCamel),
    "getNonUndefinedValues": (()=>getNonUndefinedValues),
    "isIPV4Address": (()=>isIPV4Address),
    "isTruthy": (()=>isTruthy),
    "snakeToCamel": (()=>snakeToCamel),
    "titleize": (()=>titleize),
    "toSentence": (()=>toSentence)
});
var toSentence = (items)=>{
    if (items.length == 0) {
        return "";
    }
    if (items.length == 1) {
        return items[0];
    }
    let sentence = items.slice(0, -1).join(", ");
    sentence += `, or ${items.slice(-1)}`;
    return sentence;
};
var IP_V4_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIPV4Address(str) {
    return IP_V4_ADDRESS_REGEX.test(str || "");
}
function titleize(str) {
    const s = str || "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function snakeToCamel(str) {
    return str ? str.replace(/([-_][a-z])/g, (match)=>match.toUpperCase().replace(/-|_/, "")) : "";
}
function camelToSnake(str) {
    return str ? str.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`) : "";
}
var createDeepObjectTransformer = (transform)=>{
    const deepTransform = (obj)=>{
        if (!obj) {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((el)=>{
                if (typeof el === "object" || Array.isArray(el)) {
                    return deepTransform(el);
                }
                return el;
            });
        }
        const copy = {
            ...obj
        };
        const keys = Object.keys(copy);
        for (const oldName of keys){
            const newName = transform(oldName.toString());
            if (newName !== oldName) {
                copy[newName] = copy[oldName];
                delete copy[oldName];
            }
            if (typeof copy[newName] === "object") {
                copy[newName] = deepTransform(copy[newName]);
            }
        }
        return copy;
    };
    return deepTransform;
};
var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
function isTruthy(value) {
    if (typeof value === `boolean`) {
        return value;
    }
    if (value === void 0 || value === null) {
        return false;
    }
    if (typeof value === `string`) {
        if (value.toLowerCase() === `true`) {
            return true;
        }
        if (value.toLowerCase() === `false`) {
            return false;
        }
    }
    const number = parseInt(value, 10);
    if (isNaN(number)) {
        return false;
    }
    if (number > 0) {
        return true;
    }
    return false;
}
function getNonUndefinedValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=chunk-GGFRMWFO.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/isomorphicAtob.ts
__turbopack_context__.s({
    "isomorphicAtob": (()=>isomorphicAtob)
});
var isomorphicAtob = (data)=>{
    if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
    } else if (typeof global !== "undefined" && global.Buffer) {
        return new global.Buffer(data, "base64").toString();
    }
    return data;
};
;
 //# sourceMappingURL=chunk-TETGTEI2.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/isomorphicBtoa.ts
__turbopack_context__.s({
    "isomorphicBtoa": (()=>isomorphicBtoa)
});
var isomorphicBtoa = (data)=>{
    if (typeof btoa !== "undefined" && typeof btoa === "function") {
        return btoa(data);
    } else if (typeof global !== "undefined" && global.Buffer) {
        return new global.Buffer(data).toString("base64");
    }
    return data;
};
;
 //# sourceMappingURL=chunk-KOH7GTJO.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/constants.ts
__turbopack_context__.s({
    "CURRENT_DEV_INSTANCE_SUFFIXES": (()=>CURRENT_DEV_INSTANCE_SUFFIXES),
    "DEV_OR_STAGING_SUFFIXES": (()=>DEV_OR_STAGING_SUFFIXES),
    "LEGACY_DEV_INSTANCE_SUFFIXES": (()=>LEGACY_DEV_INSTANCE_SUFFIXES),
    "LOCAL_API_URL": (()=>LOCAL_API_URL),
    "LOCAL_ENV_SUFFIXES": (()=>LOCAL_ENV_SUFFIXES),
    "PROD_API_URL": (()=>PROD_API_URL),
    "STAGING_API_URL": (()=>STAGING_API_URL),
    "STAGING_ENV_SUFFIXES": (()=>STAGING_ENV_SUFFIXES),
    "iconImageUrl": (()=>iconImageUrl)
});
var LEGACY_DEV_INSTANCE_SUFFIXES = [
    ".lcl.dev",
    ".lclstage.dev",
    ".lclclerk.com"
];
var CURRENT_DEV_INSTANCE_SUFFIXES = [
    ".accounts.dev",
    ".accountsstage.dev",
    ".accounts.lclclerk.com"
];
var DEV_OR_STAGING_SUFFIXES = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev"
];
var LOCAL_ENV_SUFFIXES = [
    ".lcl.dev",
    "lclstage.dev",
    ".lclclerk.com",
    ".accounts.lclclerk.com"
];
var STAGING_ENV_SUFFIXES = [
    ".accountsstage.dev"
];
var LOCAL_API_URL = "https://api.lclclerk.com";
var STAGING_API_URL = "https://api.clerkstage.dev";
var PROD_API_URL = "https://api.clerk.com";
function iconImageUrl(id, format = "svg") {
    return `https://img.clerk.com/static/${id}.${format}`;
}
;
 //# sourceMappingURL=chunk-I6MTSTOF.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildPublishableKey": (()=>buildPublishableKey),
    "createDevOrStagingUrlCache": (()=>createDevOrStagingUrlCache),
    "getCookieSuffix": (()=>getCookieSuffix),
    "getSuffixedCookieName": (()=>getSuffixedCookieName),
    "isDevelopmentFromPublishableKey": (()=>isDevelopmentFromPublishableKey),
    "isDevelopmentFromSecretKey": (()=>isDevelopmentFromSecretKey),
    "isProductionFromPublishableKey": (()=>isProductionFromPublishableKey),
    "isProductionFromSecretKey": (()=>isProductionFromSecretKey),
    "isPublishableKey": (()=>isPublishableKey),
    "parsePublishableKey": (()=>parsePublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
;
;
;
// src/keys.ts
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
var PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
function buildPublishableKey(frontendApi) {
    const isDevKey = PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((s)=>frontendApi.endsWith(s));
    const keyPrefix = isDevKey ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX;
    return `${keyPrefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(`${frontendApi}$`)}`;
}
function parsePublishableKey(key, options = {}) {
    key = key || "";
    if (!key || !isPublishableKey(key)) {
        if (options.fatal && !key) {
            throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
        }
        if (options.fatal && !isPublishableKey(key)) {
            throw new Error("Publishable key not valid.");
        }
        return null;
    }
    const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
    let frontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2]);
    frontendApi = frontendApi.slice(0, -1);
    if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
    } else if (instanceType !== "development" && options.domain && options.isSatellite) {
        frontendApi = `clerk.${options.domain}`;
    }
    return {
        instanceType,
        frontendApi
    };
}
function isPublishableKey(key = "") {
    try {
        const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
        const hasValidFrontendApiPostfix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2] || "").endsWith("$");
        return hasValidPrefix && hasValidFrontendApiPostfix;
    } catch  {
        return false;
    }
}
function createDevOrStagingUrlCache() {
    const devOrStagingUrlCache = /* @__PURE__ */ new Map();
    return {
        isDevOrStagingUrl: (url)=>{
            if (!url) {
                return false;
            }
            const hostname = typeof url === "string" ? url : url.hostname;
            let res = devOrStagingUrlCache.get(hostname);
            if (res === void 0) {
                res = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEV_OR_STAGING_SUFFIXES"].some((s)=>hostname.endsWith(s));
                devOrStagingUrlCache.set(hostname, res);
            }
            return res;
        }
    };
}
function isDevelopmentFromPublishableKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
}
function isProductionFromPublishableKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
}
function isDevelopmentFromSecretKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
function isProductionFromSecretKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
}
async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
    const data = new TextEncoder().encode(publishableKey);
    const digest = await subtle.digest("sha-1", data);
    const stringDigest = String.fromCharCode(...new Uint8Array(digest));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
var getSuffixedCookieName = (cookieName, cookieSuffix)=>{
    return `${cookieName}_${cookieSuffix}`;
};
;
 //# sourceMappingURL=chunk-QU372XZW.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TelemetryCollector": (()=>TelemetryCollector),
    "eventComponentMounted": (()=>eventComponentMounted),
    "eventFrameworkMetadata": (()=>eventFrameworkMetadata),
    "eventMethodCalled": (()=>eventMethodCalled),
    "eventPrebuiltComponentMounted": (()=>eventPrebuiltComponentMounted),
    "eventPrebuiltComponentOpened": (()=>eventPrebuiltComponentOpened)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
// src/telemetry/throttler.ts
var DEFAULT_CACHE_TTL_MS = 864e5;
var _storageKey, _cacheTtl, _TelemetryEventThrottler_instances, generateKey_fn, cache_get, isValidBrowser_get;
var TelemetryEventThrottler = class {
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _TelemetryEventThrottler_instances);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _storageKey, "clerk_telemetry_throttler");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _cacheTtl, DEFAULT_CACHE_TTL_MS);
    }
    isEventThrottled(payload) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, isValidBrowser_get)) {
            return false;
        }
        const now = Date.now();
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryEventThrottler_instances, generateKey_fn).call(this, payload);
        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get)?.[key];
        if (!entry) {
            const updatedCache = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get),
                [key]: now
            };
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey), JSON.stringify(updatedCache));
        }
        const shouldInvalidate = entry && now - entry > (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _cacheTtl);
        if (shouldInvalidate) {
            const updatedCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get);
            delete updatedCache[key];
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey), JSON.stringify(updatedCache));
        }
        return !!entry;
    }
};
_storageKey = new WeakMap();
_cacheTtl = new WeakMap();
_TelemetryEventThrottler_instances = new WeakSet();
/**
 * Generates a consistent unique key for telemetry events by sorting payload properties.
 * This ensures that payloads with identical content in different orders produce the same key.
 */ generateKey_fn = function(event) {
    const { sk: _sk, pk: _pk, payload, ...rest } = event;
    const sanitizedEvent = {
        ...payload,
        ...rest
    };
    return JSON.stringify(Object.keys({
        ...payload,
        ...rest
    }).sort().map((key)=>sanitizedEvent[key]));
};
cache_get = function() {
    const cacheString = localStorage.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey));
    if (!cacheString) {
        return {};
    }
    return JSON.parse(cacheString);
};
isValidBrowser_get = function() {
    if (typeof window === "undefined") {
        return false;
    }
    const storage = window.localStorage;
    if (!storage) {
        return false;
    }
    try {
        const testKey = "test";
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch (err) {
        const isQuotaExceededError = err instanceof DOMException && // Check error names for different browsers
        (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED");
        if (isQuotaExceededError && storage.length > 0) {
            storage.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey));
        }
        return false;
    }
};
// src/telemetry/collector.ts
var DEFAULT_CONFIG = {
    samplingRate: 1,
    maxBufferSize: 5,
    // Production endpoint: https://clerk-telemetry.com
    // Staging endpoint: https://staging.clerk-telemetry.com
    // Local: http://localhost:8787
    endpoint: "https://clerk-telemetry.com"
};
var _config, _eventThrottler, _metadata, _buffer, _pendingFlush, _TelemetryCollector_instances, shouldRecord_fn, shouldBeSampled_fn, scheduleFlush_fn, flush_fn, logEvent_fn, getSDKMetadata_fn, preparePayload_fn;
var TelemetryCollector = class {
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _TelemetryCollector_instances);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _config);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _eventThrottler);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _metadata, {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _buffer, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _pendingFlush);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _config, {
            maxBufferSize: options.maxBufferSize ?? DEFAULT_CONFIG.maxBufferSize,
            samplingRate: options.samplingRate ?? DEFAULT_CONFIG.samplingRate,
            disabled: options.disabled ?? false,
            debug: options.debug ?? false,
            endpoint: DEFAULT_CONFIG.endpoint
        });
        if (!options.clerkVersion && typeof window === "undefined") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion = "";
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion = options.clerkVersion ?? "";
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdk = options.sdk;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdkVersion = options.sdkVersion;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey = options.publishableKey ?? "";
        const parsedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(options.publishableKey);
        if (parsedKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType = parsedKey.instanceType;
        }
        if (options.secretKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey = options.secretKey.substring(0, 16);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _eventThrottler, new TelemetryEventThrottler());
    }
    get isEnabled() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType !== "development") {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).disabled || typeof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_TELEMETRY_DISABLED)) {
            return false;
        }
        if (typeof window !== "undefined" && !!window?.navigator?.webdriver) {
            return false;
        }
        return true;
    }
    get isDebug() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).debug || typeof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_TELEMETRY_DEBUG);
    }
    record(event) {
        const preparedPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, preparePayload_fn).call(this, event.event, event.payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, logEvent_fn).call(this, preparedPayload.event, preparedPayload);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, shouldRecord_fn).call(this, preparedPayload, event.eventSamplingRate)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer).push(preparedPayload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, scheduleFlush_fn).call(this);
    }
};
_config = new WeakMap();
_eventThrottler = new WeakMap();
_metadata = new WeakMap();
_buffer = new WeakMap();
_pendingFlush = new WeakMap();
_TelemetryCollector_instances = new WeakSet();
shouldRecord_fn = function(preparedPayload, eventSamplingRate) {
    return this.isEnabled && !this.isDebug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, shouldBeSampled_fn).call(this, preparedPayload, eventSamplingRate);
};
shouldBeSampled_fn = function(preparedPayload, eventSamplingRate) {
    const randomSeed = Math.random();
    const toBeSampled = randomSeed <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).samplingRate && (typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate);
    if (!toBeSampled) {
        return false;
    }
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventThrottler).isEventThrottled(preparedPayload);
};
scheduleFlush_fn = function() {
    if (typeof window === "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
    }
    const isBufferFull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer).length >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).maxBufferSize;
    if (isBufferFull) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _pendingFlush)) {
            const cancel = typeof cancelIdleCallback !== "undefined" ? cancelIdleCallback : clearTimeout;
            cancel((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _pendingFlush));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _pendingFlush)) {
        return;
    }
    if ("requestIdleCallback" in window) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _pendingFlush, requestIdleCallback(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        }));
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _pendingFlush, setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        }, 0));
    }
};
flush_fn = function() {
    fetch(new URL("/v1/event", (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).endpoint), {
        method: "POST",
        // TODO: We send an array here with that idea that we can eventually send multiple events.
        body: JSON.stringify({
            events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer)
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(()=>void 0).then(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _buffer, []);
    }).catch(()=>void 0);
};
/**
 * If running in debug mode, log the event and its payload to the console.
 */ logEvent_fn = function(event, payload) {
    if (!this.isDebug) {
        return;
    }
    if (typeof console.groupCollapsed !== "undefined") {
        console.groupCollapsed("[clerk/telemetry]", event);
        console.log(payload);
        console.groupEnd();
    } else {
        console.log("[clerk/telemetry]", event, payload);
    }
};
/**
 * If in browser, attempt to lazily grab the SDK metadata from the Clerk singleton, otherwise fallback to the initially passed in values.
 *
 * This is necessary because the sdkMetadata can be set by the host SDK after the TelemetryCollector is instantiated.
 */ getSDKMetadata_fn = function() {
    let sdkMetadata = {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdk,
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdkVersion
    };
    if (typeof window !== "undefined" && window.Clerk) {
        sdkMetadata = {
            ...sdkMetadata,
            ...window.Clerk.constructor.sdkMetadata
        };
    }
    return sdkMetadata;
};
/**
 * Append relevant metadata from the Clerk singleton to the event payload.
 */ preparePayload_fn = function(event, payload) {
    const sdkMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, getSDKMetadata_fn).call(this);
    return {
        event,
        cv: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion ?? "",
        it: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType ?? "",
        sdk: sdkMetadata.name,
        sdkv: sdkMetadata.version,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey ? {
            pk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey
        } : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey ? {
            sk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey
        } : {},
        payload
    };
};
// src/telemetry/events/component-mounted.ts
var EVENT_COMPONENT_MOUNTED = "COMPONENT_MOUNTED";
var EVENT_COMPONENT_OPENED = "COMPONENT_OPENED";
var EVENT_SAMPLING_RATE = 0.1;
function createPrebuiltComponentEvent(event) {
    return function(component, props, additionalPayload) {
        return {
            event,
            eventSamplingRate: EVENT_SAMPLING_RATE,
            payload: {
                component,
                appearanceProp: Boolean(props?.appearance),
                baseTheme: Boolean(props?.appearance?.baseTheme),
                elements: Boolean(props?.appearance?.elements),
                variables: Boolean(props?.appearance?.variables),
                ...additionalPayload
            }
        };
    };
}
function eventPrebuiltComponentMounted(component, props, additionalPayload) {
    return createPrebuiltComponentEvent(EVENT_COMPONENT_MOUNTED)(component, props, additionalPayload);
}
function eventPrebuiltComponentOpened(component, props, additionalPayload) {
    return createPrebuiltComponentEvent(EVENT_COMPONENT_OPENED)(component, props, additionalPayload);
}
function eventComponentMounted(component, props = {}) {
    return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: {
            component,
            ...props
        }
    };
}
// src/telemetry/events/method-called.ts
var EVENT_METHOD_CALLED = "METHOD_CALLED";
function eventMethodCalled(method, payload) {
    return {
        event: EVENT_METHOD_CALLED,
        payload: {
            method,
            ...payload
        }
    };
}
// src/telemetry/events/framework-metadata.ts
var EVENT_FRAMEWORK_METADATA = "FRAMEWORK_METADATA";
var EVENT_SAMPLING_RATE2 = 0.1;
function eventFrameworkMetadata(payload) {
    return {
        event: EVENT_FRAMEWORK_METADATA,
        eventSamplingRate: EVENT_SAMPLING_RATE2,
        payload
    };
}
;
 //# sourceMappingURL=chunk-WIS7IYDJ.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
 //# sourceMappingURL=telemetry.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IBXKDGSZ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/organization.ts
__turbopack_context__.s({
    "getCurrentOrganizationMembership": (()=>getCurrentOrganizationMembership)
});
function getCurrentOrganizationMembership(organizationMemberships, organizationId) {
    return organizationMemberships.find((organizationMembership)=>organizationMembership.organization.id === organizationId);
}
;
 //# sourceMappingURL=chunk-IBXKDGSZ.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/noop.ts
__turbopack_context__.s({
    "noop": (()=>noop)
});
var noop = (..._args)=>{};
;
 //# sourceMappingURL=chunk-7FNX7RWY.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7QJ2QTJL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDeferredPromise": (()=>createDeferredPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-client] (ecmascript)");
;
// src/utils/createDeferredPromise.ts
var createDeferredPromise = ()=>{
    let resolve = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    let reject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve,
        reject
    };
};
;
 //# sourceMappingURL=chunk-7QJ2QTJL.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-43A5F2IE.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/authorization-errors.ts
__turbopack_context__.s({
    "isReverificationHint": (()=>isReverificationHint),
    "reverificationError": (()=>reverificationError),
    "reverificationErrorResponse": (()=>reverificationErrorResponse)
});
var REVERIFICATION_REASON = "reverification-error";
var reverificationError = (missingConfig)=>({
        clerk_error: {
            type: "forbidden",
            reason: REVERIFICATION_REASON,
            metadata: {
                reverification: missingConfig
            }
        }
    });
var reverificationErrorResponse = (...args)=>new Response(JSON.stringify(reverificationError(...args)), {
        status: 403
    });
var isReverificationHint = (result)=>{
    return result && typeof result === "object" && "clerk_error" in result && result.clerk_error?.type === "forbidden" && result.clerk_error?.reason === REVERIFICATION_REASON;
};
;
 //# sourceMappingURL=chunk-43A5F2IE.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}}),
"[project]/apps/chat-ui/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ERROR_REVALIDATE_EVENT": (()=>ERROR_REVALIDATE_EVENT),
    "FOCUS_EVENT": (()=>FOCUS_EVENT),
    "MUTATE_EVENT": (()=>MUTATE_EVENT),
    "RECONNECT_EVENT": (()=>RECONNECT_EVENT)
});
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
;
}}),
"[project]/apps/chat-ui/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dequal": (()=>dequal)
});
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
    var ctor, len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>noop),
    "B": (()=>isPromiseLike),
    "I": (()=>IS_REACT_LEGACY),
    "O": (()=>OBJECT),
    "S": (()=>SWRConfigContext),
    "U": (()=>UNDEFINED),
    "a": (()=>isFunction),
    "b": (()=>SWRGlobalState),
    "c": (()=>cache),
    "d": (()=>defaultConfig),
    "e": (()=>isUndefined),
    "f": (()=>mergeConfigs),
    "g": (()=>SWRConfig),
    "h": (()=>initCache),
    "i": (()=>isWindowDefined),
    "j": (()=>mutate),
    "k": (()=>compare),
    "l": (()=>stableHash),
    "m": (()=>mergeObjects),
    "n": (()=>internalMutate),
    "o": (()=>getTimestamp),
    "p": (()=>preset),
    "q": (()=>defaultConfigOptions),
    "r": (()=>IS_SERVER),
    "s": (()=>serialize),
    "t": (()=>rAF),
    "u": (()=>useIsomorphicLayoutEffect),
    "v": (()=>slowConnection),
    "w": (()=>isDocumentDefined),
    "x": (()=>isLegacyDeno),
    "y": (()=>hasRequestAnimationFrame),
    "z": (()=>createCacheHelper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const isLegacyDeno = isWindowDefined && 'Deno' in window;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        // Getter
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        // Setter
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                // Before writing to the store, we keep the value in the initial cache
                // if it's not there yet.
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        ()=>{
            if (!isUndefined(key)) {
                // If the cache was updated on the client, we return the stored initial value.
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            // If we haven't done any client-side updates, we return the current value.
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;
/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */ let online = true;
const isOnline = ()=>online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
] : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    // focus revalidate
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    // revalidate on reconnected
    const onOnline = ()=>{
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};
const IS_REACT_LEGACY = !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId;
const IS_SERVER = !isWindowDefined || isLegacyDeno;
// Polyfill requestAnimationFrame
const rAF = (f)=>hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
// Global timestamp.
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;
async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    // When passing as a boolean, it's explicitly used to disable/enable
    // revalidation.
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    // If the second argument is a key filter, return the mutation results for all
    // filtered keys.
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (!/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    "TURBOPACK unreachable";
    async function mutateByKey(_k) {
        // Serialize key
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const startRevalidate = ()=>{
            const revalidators = EVENT_REVALIDATORS[key];
            const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
            if (revalidate) {
                // Invalidate the key by deleting the concurrent request markers so new
                // requests will not be deduped.
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MUTATE_EVENT"]).then(()=>get().data);
                }
            }
            return get().data;
        };
        // If there is no new data provided, revalidate the key with current state.
        if (args.length < 3) {
            // Revalidate and broadcast state.
            return startRevalidate();
        }
        let data = _data;
        let error;
        // Update global timestamps.
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        // `displayedData` is the current value on screen. It could be the optimistic value
        // that is going to be overridden by a `committedData`, or get reverted back.
        // `committedData` is the validated value that comes from a fetch or mutation.
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        // Do optimistic data update.
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            // When we set optimistic data, backup the current committedData data in `_c`.
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
                data = data(committedData);
            } catch (err) {
                // If it throws an error synchronously, we shouldn't update the cache.
                error = err;
            }
        }
        // `data` is a promise/thenable, resolve the final data first.
        if (data && isPromiseLike(data)) {
            // This means that the mutation is async, we need to check timestamps to
            // avoid race conditions.
            data = await data.catch((err)=>{
                error = err;
            });
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (error) throw error;
                return data;
            } else if (error && hasOptimisticData && rollbackOnError(error)) {
                // Rollback. Always populate the cache in this case but without
                // transforming the data.
                populateCache = true;
                // Reset data to be the latest committed data, and clear the `_c` value.
                set({
                    data: committedData,
                    _c: UNDEFINED
                });
            }
        }
        // If we should write back the cache after request.
        if (populateCache) {
            if (!error) {
                // Transform the result into data.
                if (isFunction(populateCache)) {
                    const populateCachedData = populateCache(data, committedData);
                    set({
                        data: populateCachedData,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                } else {
                    // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
                    set({
                        data,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                }
            }
        }
        // Reset the timestamp to mark the mutation has ended.
        MUTATION[key][1] = getTimestamp();
        // Update existing SWR Hooks' internal states:
        Promise.resolve(startRevalidate()).then(()=>{
            // The mutation and revalidation are ended, we can clear it since the data is
            // not an optimistic value anymore.
            set({
                _c: UNDEFINED
            });
        });
        // Throw error or return data
        if (error) {
            if (throwOnError) throw error;
            return;
        }
        return data;
    }
}
const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that is bound to
    // the cache.
    // The provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        const EVENT_REVALIDATORS = Object.create(null);
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = Object.create(null);
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                // Update the state if it's new, or if the provider has been extended.
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    mutate,
                    setter,
                    subscribe
                ]);
                if (!IS_SERVER) {
                    // When listening to the native events for auto revalidations,
                    // we intentionally put a delay (setTimeout) here to make sure they are
                    // fired after immediate JavaScript executions, which can be
                    // React's state updates.
                    // This avoids some unnecessary revalidations such as
                    // https://github.com/vercel/swr/issues/1680.
                    const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUS_EVENT"])));
                    const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECONNECT_EVENT"])));
                    unmount = ()=>{
                        releaseFocus && releaseFocus();
                        releaseReconnect && releaseReconnect();
                        // When un-mounting, we need to remove the cache provider from the state
                        // storage too because it's a side-effect. Otherwise, when re-mounting we
                        // will not re-register those event listeners.
                        SWRGlobalState.delete(provider);
                    };
                }
            }
        };
        initProvider();
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};
// error retry
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    // Exponential backoff
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"];
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, preset);
const mergeConfigs = (a, b)=>{
    // Need to create a new object to avoid mutating the original here.
    const v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};
const SWRConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SWRConfig.useMemo[config]": ()=>isFunctionalConfig ? value(parentConfig) : value
    }["SWRConfig.useMemo[config]"], [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    // Extend parent context values and middleware.
    const extendedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SWRConfig.useMemo[extendedConfig]": ()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config)
    }["SWRConfig.useMemo[extendedConfig]"], [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    // Should not use the inherited provider.
    const provider = config && config.provider;
    // initialize the cache only on first access.
    const cacheContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect({
        "SWRConfig.useIsomorphicLayoutEffect": ()=>{
            if (cacheContext) {
                cacheContext[2] && cacheContext[2]();
                return cacheContext[3];
            }
        }
    }["SWRConfig.useIsomorphicLayoutEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};
;
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export O as OBJECT>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OBJECT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export g as SWRConfig>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export d as defaultConfig>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/constants.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "INFINITE_PREFIX": (()=>INFINITE_PREFIX)
});
const INFINITE_PREFIX = '$inf$';
;
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalize": (()=>normalize),
    "preload": (()=>preload),
    "subscribeCallback": (()=>subscribeCallback),
    "useSWRConfig": (()=>useSWRConfig),
    "withArgs": (()=>withArgs),
    "withMiddleware": (()=>withMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// @ts-expect-error
const enableDevtools = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"] && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
};
const normalize = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};
const useSWRConfig = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"]));
};
const preload = (key_, fetcher)=>{
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(key_);
    const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]);
    // Prevent preload to be called multiple times before used.
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        // fetcher might be a sync function, so this should not be an async function
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(key_);
            const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]);
            if (key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"])) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };
const BUILT_IN_MIDDLEWARE = use.concat(middleware);
// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        // Get the default and inherited configuration.
        const fallbackConfig = useSWRConfig();
        // Normalize arguments.
        const [key, fn, _config] = normalize(args);
        // Merge configurations.
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(fallbackConfig, _config);
        // Apply middleware
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};
// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};
// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};
setupDevTools();
;
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export b as SWRGlobalState>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SWRGlobalState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export s as serialize>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export z as createCacheHelper>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCacheHelper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export e as isUndefined>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isUndefined": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export U as UNDEFINED>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UNDEFINED": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export B as isPromiseLike>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPromiseLike": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export o as getTimestamp>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTimestamp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export a as isFunction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isFunction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript) <export * as revalidateEvents>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "revalidateEvents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export n as internalMutate>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "internalMutate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export u as useIsomorphicLayoutEffect>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsomorphicLayoutEffect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export r as IS_SERVER>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IS_SERVER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export t as rAF>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rAF": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export I as IS_REACT_LEGACY>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IS_REACT_LEGACY": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export m as mergeObjects>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mergeObjects": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SWRConfig": (()=>SWRConfig),
    "default": (()=>useSWR),
    "unstable_serialize": (()=>unstable_serialize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export O as OBJECT>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export g as SWRConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export d as defaultConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export b as SWRGlobalState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export s as serialize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export z as createCacheHelper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export e as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export U as UNDEFINED>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export B as isPromiseLike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export o as getTimestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export a as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/events.mjs [app-client] (ecmascript) <export * as revalidateEvents>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export n as internalMutate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export u as useIsomorphicLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export r as IS_SERVER>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export t as rAF>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export I as IS_REACT_LEGACY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export m as mergeObjects>");
;
;
;
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const unstable_serialize = (key)=>serialize(key)[0];
/// <reference types="react/experimental" />
const use = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((thenable)=>{
    switch(thenable.status){
        case 'pending':
            throw thenable;
        case 'fulfilled':
            return thenable.value;
        case 'rejected':
            throw thenable.reason;
        default:
            thenable.status = 'pending';
            thenable.then((v)=>{
                thenable.status = 'fulfilled';
                thenable.value = v;
            }, (e)=>{
                thenable.status = 'rejected';
                thenable.reason = e;
            });
            throw thenable;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__["SWRGlobalState"].get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__["serialize"])(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Refs to keep the key and config.
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(key);
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache, key);
    const stateDependencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({}).current;
    // Resolve the fallback data from either the inline option, or the global provider.
    // If it's a promise, we simply let React suspend and resolve it for us.
    const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(fallbackData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(config.fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"] : config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSWRHandler.useMemo[getSnapshot]": ()=>{
            const shouldStartRequest = ({
                "useSWRHandler.useMemo[getSnapshot].shouldStartRequest": ()=>{
                    if (!key) return false;
                    if (!fetcher) return false;
                    // If `revalidateOnMount` is set, we take the value directly.
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
                    // If it's paused, we skip revalidation.
                    if (getConfig().isPaused()) return false;
                    if (suspense) return false;
                    return revalidateIfStale !== false;
                }
            })["useSWRHandler.useMemo[getSnapshot].shouldStartRequest"]();
            // Get the cache and merge it with expected states.
            const getSelectedCache = {
                "useSWRHandler.useMemo[getSnapshot].getSelectedCache": (state)=>{
                    // We only select the needed fields from the state.
                    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__mergeObjects$3e$__["mergeObjects"])(state);
                    delete snapshot._k;
                    if (!shouldStartRequest) {
                        return snapshot;
                    }
                    return {
                        isValidating: true,
                        isLoading: true,
                        ...snapshot
                    };
                }
            }["useSWRHandler.useMemo[getSnapshot].getSelectedCache"];
            const cachedData = getCache();
            const initialData = getInitialCache();
            const clientSnapshot = getSelectedCache(cachedData);
            const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
            // To make sure that we are returning the same object reference to avoid
            // unnecessary re-renders, we keep the previous snapshot and use deep
            // comparison to check if we need to return a new one.
            let memorizedSnapshot = clientSnapshot;
            return [
                {
                    "useSWRHandler.useMemo[getSnapshot]": ()=>{
                        const newSnapshot = getSelectedCache(getCache());
                        const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                        if (compareResult) {
                            // Mentally, we should always return the `memorizedSnapshot` here
                            // as there's no change between the new and old snapshots.
                            // However, since the `isEqual` function only compares selected fields,
                            // the values of the unselected fields might be changed. That's
                            // simply because we didn't track them.
                            // To support the case in https://github.com/vercel/swr/pull/2576,
                            // we need to update these fields in the `memorizedSnapshot` too
                            // with direct mutations to ensure the snapshot is always up-to-date
                            // even for the unselected fields, but only trigger re-renders when
                            // the selected fields are changed.
                            memorizedSnapshot.data = newSnapshot.data;
                            memorizedSnapshot.isLoading = newSnapshot.isLoading;
                            memorizedSnapshot.isValidating = newSnapshot.isValidating;
                            memorizedSnapshot.error = newSnapshot.error;
                            return memorizedSnapshot;
                        } else {
                            memorizedSnapshot = newSnapshot;
                            return newSnapshot;
                        }
                    }
                }["useSWRHandler.useMemo[getSnapshot]"],
                {
                    "useSWRHandler.useMemo[getSnapshot]": ()=>serverSnapshot
                }["useSWRHandler.useMemo[getSnapshot]"]
            ];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useSWRHandler.useMemo[getSnapshot]"], [
        cache,
        key
    ]);
    // Get the current state that SWR should return.
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useSyncExternalStore[cached]": (callback)=>subscribeCache(key, {
                "useSWRHandler.useSyncExternalStore[cached]": (current, prev)=>{
                    if (!isEqual(prev, current)) callback();
                }
            }["useSWRHandler.useSyncExternalStore[cached]"])
    }["useSWRHandler.useSyncExternalStore[cached]"], [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? fallback && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__isPromiseLike$3e$__["isPromiseLike"])(fallback) ? use(fallback) : fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(data);
    const returnedData = keepPreviousData ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || revalidateIfStale;
    })();
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useCallback[revalidate]": async (revalidateOpts)=>{
            const currentFetcher = fetcherRef.current;
            if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                return false;
            }
            let newData;
            let startAt;
            let loading = true;
            const opts = revalidateOpts || {};
            // If there is no ongoing concurrent request, or `dedupe` is not set, a
            // new request should be initiated.
            const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
            /*
         For React 17
         Do unmount check for calls:
         If key has changed during the revalidation, or the component has been
         unmounted, old dispatch and old event callbacks should not take any
         effect

        For React 18
        only check if key has changed
        https://github.com/reactwg/react-18/discussions/82
      */ const callbackSafeguard = {
                "useSWRHandler.useCallback[revalidate].callbackSafeguard": ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"]) {
                        return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
                    }
                    return key === keyRef.current;
                }
            }["useSWRHandler.useCallback[revalidate].callbackSafeguard"];
            // The final state object when the request finishes.
            const finalState = {
                isValidating: false,
                isLoading: false
            };
            const finishRequestAndUpdateState = {
                "useSWRHandler.useCallback[revalidate].finishRequestAndUpdateState": ()=>{
                    setCache(finalState);
                }
            }["useSWRHandler.useCallback[revalidate].finishRequestAndUpdateState"];
            const cleanupState = {
                "useSWRHandler.useCallback[revalidate].cleanupState": ()=>{
                    // Check if it's still the same request before deleting it.
                    const requestInfo = FETCH[key];
                    if (requestInfo && requestInfo[1] === startAt) {
                        delete FETCH[key];
                    }
                }
            }["useSWRHandler.useCallback[revalidate].cleanupState"];
            // Start fetching. Change the `isValidating` state, update the cache.
            const initialState = {
                isValidating: true
            };
            // It is in the `isLoading` state, if and only if there is no cached data.
            // This bypasses fallback data and laggy data.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
                initialState.isLoading = true;
            }
            try {
                if (shouldStartNewRequest) {
                    setCache(initialState);
                    // If no cache is being rendered currently (it shows a blank page),
                    // we trigger the loading slow event.
                    if (config.loadingTimeout && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(getCache().data)) {
                        setTimeout({
                            "useSWRHandler.useCallback[revalidate]": ()=>{
                                if (loading && callbackSafeguard()) {
                                    getConfig().onLoadingSlow(key, config);
                                }
                            }
                        }["useSWRHandler.useCallback[revalidate]"], config.loadingTimeout);
                    }
                    // Start the request and save the timestamp.
                    // Key must be truthy if entering here.
                    FETCH[key] = [
                        currentFetcher(fnArg),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getTimestamp$3e$__["getTimestamp"])()
                    ];
                }
                // Wait until the ongoing request is done. Deduplication is also
                // considered here.
                ;
                [newData, startAt] = FETCH[key];
                newData = await newData;
                if (shouldStartNewRequest) {
                    // If the request isn't interrupted, clean it up after the
                    // deduplication interval.
                    setTimeout(cleanupState, config.dedupingInterval);
                }
                // If there're other ongoing request(s), started after the current one,
                // we need to ignore the current one to avoid possible race conditions:
                //   req1------------------>res1        (current one)
                //        req2---------------->res2
                // the request that fired later will always be kept.
                // The timestamp maybe be `undefined` or a number
                if (!FETCH[key] || FETCH[key][1] !== startAt) {
                    if (shouldStartNewRequest) {
                        if (callbackSafeguard()) {
                            getConfig().onDiscarded(key);
                        }
                    }
                    return false;
                }
                // Clear error.
                finalState.error = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"];
                // If there're other mutations(s), that overlapped with the current revalidation:
                // case 1:
                //   req------------------>res
                //       mutate------>end
                // case 2:
                //         req------------>res
                //   mutate------>end
                // case 3:
                //   req------------------>res
                //       mutate-------...---------->
                // we have to ignore the revalidation result (res) because it's no longer fresh.
                // meanwhile, a new revalidation should be triggered when the mutation ends.
                const mutationInfo = MUTATION[key];
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(mutationInfo) && // case 1
                (startAt <= mutationInfo[0] || // case 2
                startAt <= mutationInfo[1] || // case 3
                mutationInfo[1] === 0)) {
                    finishRequestAndUpdateState();
                    if (shouldStartNewRequest) {
                        if (callbackSafeguard()) {
                            getConfig().onDiscarded(key);
                        }
                    }
                    return false;
                }
                // Deep compare with the latest state to avoid extra re-renders.
                // For local state, compare and assign.
                const cacheData = getCache().data;
                // Since the compare fn could be custom fn
                // cacheData might be different from newData even when compare fn returns True
                finalState.data = compare(cacheData, newData) ? cacheData : newData;
                // Trigger the successful callback if it's the original request.
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onSuccess(newData, key, config);
                    }
                }
            } catch (err) {
                cleanupState();
                const currentConfig = getConfig();
                const { shouldRetryOnError } = currentConfig;
                // Not paused, we continue handling the error. Otherwise, discard it.
                if (!currentConfig.isPaused()) {
                    // Get a new error, don't use deep comparison for errors.
                    finalState.error = err;
                    // Error event and retry logic. Only for the actual request, not
                    // deduped ones.
                    if (shouldStartNewRequest && callbackSafeguard()) {
                        currentConfig.onError(err, key, currentConfig);
                        if (shouldRetryOnError === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(shouldRetryOnError) && shouldRetryOnError(err)) {
                            if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                                // If it's inactive, stop. It will auto-revalidate when
                                // refocusing or reconnecting.
                                // When retrying, deduplication is always enabled.
                                currentConfig.onErrorRetry(err, key, currentConfig, {
                                    "useSWRHandler.useCallback[revalidate]": (_opts)=>{
                                        const revalidators = EVENT_REVALIDATORS[key];
                                        if (revalidators && revalidators[0]) {
                                            revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT, _opts);
                                        }
                                    }
                                }["useSWRHandler.useCallback[revalidate]"], {
                                    retryCount: (opts.retryCount || 0) + 1,
                                    dedupe: true
                                });
                            }
                        }
                    }
                }
            }
            // Mark loading as stopped.
            loading = false;
            // Update the current hook's state.
            finishRequestAndUpdateState();
            return true;
        }
    }["useSWRHandler.useCallback[revalidate]"], // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key,
        cache
    ]);
    // Similar to the global mutate but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    const boundMutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSWRHandler.useCallback[boundMutate]": (...args)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__internalMutate$3e$__["internalMutate"])(cache, keyRef.current, ...args);
        }
    }["useSWRHandler.useCallback[boundMutate]"], []);
    // The logic for updating refs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
        "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
            fetcherRef.current = fetcher;
            configRef.current = config;
            // Handle laggy data updates. If there's cached data of the current key,
            // it'll be the correct reference.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedData)) {
                laggyDataRef.current = cachedData;
            }
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"]);
    // After mounted or key changed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
        "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
            if (!key) return;
            const softRevalidate = revalidate.bind(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"], WITH_DEDUPE);
            let nextFocusRevalidatedAt = 0;
            if (getConfig().revalidateOnFocus) {
                const initNow = Date.now();
                nextFocusRevalidatedAt = initNow + getConfig().focusThrottleInterval;
            }
            // Expose revalidators to global event listeners. So we can trigger
            // revalidation from the outside.
            const onRevalidate = {
                "useSWRHandler.useIsomorphicLayoutEffect.onRevalidate": (type, opts = {})=>{
                    if (type == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].FOCUS_EVENT) {
                        const now = Date.now();
                        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                            softRevalidate();
                        }
                    } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].RECONNECT_EVENT) {
                        if (getConfig().revalidateOnReconnect && isActive()) {
                            softRevalidate();
                        }
                    } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].MUTATE_EVENT) {
                        return revalidate();
                    } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__revalidateEvents$3e$__["revalidateEvents"].ERROR_REVALIDATE_EVENT) {
                        return revalidate(opts);
                    }
                    return;
                }
            }["useSWRHandler.useIsomorphicLayoutEffect.onRevalidate"];
            const unsubEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribeCallback"])(key, EVENT_REVALIDATORS, onRevalidate);
            // Mark the component as mounted and update corresponding refs.
            unmountedRef.current = false;
            keyRef.current = key;
            initialMountedRef.current = true;
            // Keep the original key in the cache.
            setCache({
                _k: fnArg
            });
            // Trigger a revalidation
            if (shouldDoInitialRevalidation) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__["IS_SERVER"]) {
                    // Revalidate immediately.
                    softRevalidate();
                } else {
                    // Delay the revalidate if we have data to return so we won't block
                    // rendering.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__rAF$3e$__["rAF"])(softRevalidate);
                }
            }
            return ({
                "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
                    // Mark it as unmounted.
                    unmountedRef.current = true;
                    unsubEvents();
                }
            })["useSWRHandler.useIsomorphicLayoutEffect"];
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"], [
        key
    ]);
    // Polling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
        "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
            let timer;
            function next() {
                // Use the passed interval
                // ...or invoke the function with the updated data to get the interval
                const interval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
                // We only start the next interval if `refreshInterval` is not 0, and:
                // - `force` is true, which is the start of polling
                // - or `timer` is not 0, which means the effect wasn't canceled
                if (interval && timer !== -1) {
                    timer = setTimeout(execute, interval);
                }
            }
            function execute() {
                // Check if it's OK to execute:
                // Only revalidate when the page is visible, online, and not errored.
                if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                    revalidate(WITH_DEDUPE).then(next);
                } else {
                    // Schedule the next interval to check again.
                    next();
                }
            }
            next();
            return ({
                "useSWRHandler.useIsomorphicLayoutEffect": ()=>{
                    if (timer) {
                        clearTimeout(timer);
                        timer = -1;
                    }
                }
            })["useSWRHandler.useIsomorphicLayoutEffect"];
        }
    }["useSWRHandler.useIsomorphicLayoutEffect"], [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    // Display debug info in React DevTools.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data) && key) {
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any fallback data. This causes hydration errors. See:
        // https://github.com/vercel/swr/issues/1832
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__IS_REACT_LEGACY$3e$__["IS_REACT_LEGACY"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__IS_SERVER$3e$__["IS_SERVER"]) {
            throw new Error('Fallback data is required when using Suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(req)) {
            const promise = boundMutate(req);
            use(promise);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(error)) {
            const promise = revalidate(WITH_DEDUPE);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(returnedData)) {
                promise.status = 'fulfilled';
                promise.value = true;
            }
            use(promise);
        } else {
            throw error;
        }
    }
    const swrResponse = {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
    return swrResponse;
};
const SWRConfig = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__OBJECT$3e$__["OBJECT"].defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__SWRConfig$3e$__["SWRConfig"], 'defaultValue', {
    value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__defaultConfig$3e$__["defaultConfig"]
});
/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */ const useSWR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withArgs"])(useSWRHandler);
;
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export j as mutate>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mutate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SWRConfig"]),
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]),
    "mutate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__mutate$3e$__["mutate"]),
    "preload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["preload"]),
    "unstable_serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unstable_serialize"]),
    "useSWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSWRConfig"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__mutate$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export j as mutate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SWRConfig"]),
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"]),
    "mutate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mutate"]),
    "preload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preload"]),
    "unstable_serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unstable_serialize"]),
    "useSWRConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["useSWRConfig"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <exports>");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export c as cache>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cache": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/swr/dist/infinite/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useSWRInfinite),
    "infinite": (()=>infinite),
    "unstable_serialize": (()=>unstable_serialize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export b as SWRGlobalState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__cache$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export c as cache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/constants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export z as createCacheHelper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export e as isUndefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export u as useIsomorphicLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export U as UNDEFINED>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export s as serialize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs [app-client] (ecmascript) <export a as isFunction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
;
;
;
;
;
// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
const getFirstPageKey = (getKey)=>{
    return serialize(getKey ? getKey(0, null) : null)[0];
};
const unstable_serialize = (getKey)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"] + getFirstPageKey(getKey);
};
// We have to several type castings here because `useSWRInfinite` is a special
// hook where `key` and return type are not like the normal `useSWR` types.
const EMPTY_PROMISE = Promise.resolve();
const infinite = (useSWRNext)=>(getKey, fn, config)=>{
        const didMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
        const { cache: cache$1, initialSize = 1, revalidateAll = false, persistSize = false, revalidateFirstPage = true, revalidateOnMount = false, parallel = false } = config;
        const [, , , PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__SWRGlobalState$3e$__["SWRGlobalState"].get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__cache$3e$__["cache"]);
        // The serialized key of the first page. This key will be used to store
        // metadata of this SWR infinite hook.
        let infiniteKey;
        try {
            infiniteKey = getFirstPageKey(getKey);
            if (infiniteKey) infiniteKey = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$constants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFINITE_PREFIX"] + infiniteKey;
        } catch (err) {
        // Not ready yet.
        }
        const [get, set, subscribeCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache$1, infiniteKey);
        const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "infinite.useCallback[getSnapshot]": ()=>{
                const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(get()._l) ? initialSize : get()._l;
                return size;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }
        }["infinite.useCallback[getSnapshot]"], [
            cache$1,
            infiniteKey,
            initialSize
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "infinite.useSyncExternalStore.useCallback": (callback)=>{
                if (infiniteKey) return subscribeCache(infiniteKey, {
                    "infinite.useSyncExternalStore.useCallback": ()=>{
                        callback();
                    }
                }["infinite.useSyncExternalStore.useCallback"]);
                return ({
                    "infinite.useSyncExternalStore.useCallback": ()=>{}
                })["infinite.useSyncExternalStore.useCallback"];
            }
        }["infinite.useSyncExternalStore.useCallback"], [
            cache$1,
            infiniteKey
        ]), getSnapshot, getSnapshot);
        const resolvePageSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "infinite.useCallback[resolvePageSize]": ()=>{
                const cachedPageSize = get()._l;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cachedPageSize) ? initialSize : cachedPageSize;
            // `cache` isn't allowed to change during the lifecycle
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }
        }["infinite.useCallback[resolvePageSize]"], [
            infiniteKey,
            initialSize
        ]);
        // keep the last page size to restore it with the persistSize option
        const lastPageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(resolvePageSize());
        // When the page key changes, we reset the page size if it's not persisted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useIsomorphicLayoutEffect$3e$__["useIsomorphicLayoutEffect"])({
            "infinite.useIsomorphicLayoutEffect": ()=>{
                if (!didMountRef.current) {
                    didMountRef.current = true;
                    return;
                }
                if (infiniteKey) {
                    // If the key has been changed, we keep the current page size if persistSize is enabled
                    // Otherwise, we reset the page size to cached pageSize
                    set({
                        _l: persistSize ? lastPageSizeRef.current : resolvePageSize()
                    });
                }
            // `initialSize` isn't allowed to change during the lifecycle
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }
        }["infinite.useIsomorphicLayoutEffect"], [
            infiniteKey,
            cache$1
        ]);
        // Needs to check didMountRef during mounting, not in the fetcher
        const shouldRevalidateOnMount = revalidateOnMount && !didMountRef.current;
        // Actual SWR hook to load all pages in one fetcher.
        const swr = useSWRNext(infiniteKey, {
            "infinite.useSWRNext[swr]": async (key)=>{
                // get the revalidate context
                const forceRevalidateAll = get()._i;
                const shouldRevalidatePage = get()._r;
                set({
                    _r: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"]
                });
                // return an array of page data
                const data = [];
                const pageSize = resolvePageSize();
                const [getCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache$1, key);
                const cacheData = getCache().data;
                const revalidators = [];
                let previousPageData = null;
                for(let i = 0; i < pageSize; ++i){
                    const [pageKey, pageArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__["serialize"])(getKey(i, parallel ? null : previousPageData));
                    if (!pageKey) {
                        break;
                    }
                    const [getSWRCache, setSWRCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache$1, pageKey);
                    // Get the cached page data.
                    let pageData = getSWRCache().data;
                    // should fetch (or revalidate) if:
                    // - `revalidateAll` is enabled
                    // - `mutate()` called
                    // - the cache is missing
                    // - it's the first page and it's not the initial render
                    // - `revalidateOnMount` is enabled and it's on mount
                    // - cache for that page has changed
                    const shouldFetchPage = revalidateAll || forceRevalidateAll || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(pageData) || revalidateFirstPage && !i && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cacheData) || shouldRevalidateOnMount || cacheData && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(cacheData[i]) && !config.compare(cacheData[i], pageData);
                    if (fn && (typeof shouldRevalidatePage === 'function' ? shouldRevalidatePage(pageData, pageArg) : shouldFetchPage)) {
                        const revalidate = {
                            "infinite.useSWRNext[swr].revalidate": async ()=>{
                                const hasPreloadedRequest = pageKey in PRELOAD;
                                if (!hasPreloadedRequest) {
                                    pageData = await fn(pageArg);
                                } else {
                                    const req = PRELOAD[pageKey];
                                    // delete the preload cache key before resolving it
                                    // in case there's an error
                                    delete PRELOAD[pageKey];
                                    // get the page data from the preload cache
                                    pageData = await req;
                                }
                                setSWRCache({
                                    data: pageData,
                                    _k: pageArg
                                });
                                data[i] = pageData;
                            }
                        }["infinite.useSWRNext[swr].revalidate"];
                        if (parallel) {
                            revalidators.push(revalidate);
                        } else {
                            await revalidate();
                        }
                    } else {
                        data[i] = pageData;
                    }
                    if (!parallel) {
                        previousPageData = pageData;
                    }
                }
                // flush all revalidateions in parallel
                if (parallel) {
                    await Promise.all(revalidators.map({
                        "infinite.useSWRNext[swr]": (r)=>r()
                    }["infinite.useSWRNext[swr]"]));
                }
                // once we executed the data fetching based on the context, clear the context
                set({
                    _i: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"]
                });
                // return the data
                return data;
            }
        }["infinite.useSWRNext[swr]"], config);
        const mutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "infinite.useCallback[mutate]": function(data, opts) {
                // When passing as a boolean, it's explicitly used to disable/enable
                // revalidation.
                const options = typeof opts === 'boolean' ? {
                    revalidate: opts
                } : opts || {};
                // Default to true.
                const shouldRevalidate = options.revalidate !== false;
                // It is possible that the key is still falsy.
                if (!infiniteKey) return EMPTY_PROMISE;
                if (shouldRevalidate) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(data)) {
                        // We only revalidate the pages that are changed
                        set({
                            _i: false,
                            _r: options.revalidate
                        });
                    } else {
                        // Calling `mutate()`, we revalidate all pages
                        set({
                            _i: true,
                            _r: options.revalidate
                        });
                    }
                }
                return arguments.length ? swr.mutate(data, {
                    ...options,
                    revalidate: shouldRevalidate
                }) : swr.mutate();
            }
        }["infinite.useCallback[mutate]"], // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            infiniteKey,
            cache$1
        ]);
        // Extend the SWR API
        const setSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "infinite.useCallback[setSize]": (arg)=>{
                // It is possible that the key is still falsy.
                if (!infiniteKey) return EMPTY_PROMISE;
                const [, changeSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache$1, infiniteKey);
                let size;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__isFunction$3e$__["isFunction"])(arg)) {
                    size = arg(resolvePageSize());
                } else if (typeof arg == 'number') {
                    size = arg;
                }
                if (typeof size != 'number') return EMPTY_PROMISE;
                changeSize({
                    _l: size
                });
                lastPageSizeRef.current = size;
                // Calculate the page data after the size change.
                const data = [];
                const [getInfiniteCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache$1, infiniteKey);
                let previousPageData = null;
                for(let i = 0; i < size; ++i){
                    const [pageKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__serialize$3e$__["serialize"])(getKey(i, previousPageData));
                    const [getCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__createCacheHelper$3e$__["createCacheHelper"])(cache$1, pageKey);
                    // Get the cached page data.
                    const pageData = pageKey ? getCache().data : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__UNDEFINED$3e$__["UNDEFINED"];
                    // Call `mutate` with infinte cache data if we can't get it from the page cache.
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$config$2d$context$2d$client$2d$v7VOFo66$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__isUndefined$3e$__["isUndefined"])(pageData)) {
                        return mutate(getInfiniteCache().data);
                    }
                    data.push(pageData);
                    previousPageData = pageData;
                }
                return mutate(data);
            }
        }["infinite.useCallback[setSize]"], // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            infiniteKey,
            cache$1,
            mutate,
            resolvePageSize
        ]);
        // Use getter functions to avoid unnecessary re-renders caused by triggering
        // all the getters of the returned swr object.
        return {
            size: resolvePageSize(),
            setSize,
            mutate,
            get data () {
                return swr.data;
            },
            get error () {
                return swr.error;
            },
            get isValidating () {
                return swr.isValidating;
            },
            get isLoading () {
                return swr.isLoading;
            }
        };
    };
const useSWRInfinite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withMiddleware"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], infinite);
;
}}),
"[project]/apps/chat-ui/node_modules/dequal/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dequal": (()=>dequal)
});
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkInstanceContext": (()=>ClerkInstanceContext),
    "ClientContext": (()=>ClientContext),
    "OptionsContext": (()=>OptionsContext),
    "OrganizationProvider": (()=>OrganizationProvider),
    "SessionContext": (()=>SessionContext),
    "UserContext": (()=>UserContext),
    "assertContextExists": (()=>assertContextExists),
    "createContextAndHook": (()=>createContextAndHook),
    "isDeeplyEqual": (()=>isDeeplyEqual),
    "useAssertWrappedByClerkProvider": (()=>useAssertWrappedByClerkProvider),
    "useClerk": (()=>useClerk),
    "useClerkInstanceContext": (()=>useClerkInstanceContext),
    "useClientContext": (()=>useClientContext),
    "useDeepEqualMemo": (()=>useDeepEqualMemo),
    "useOptionsContext": (()=>useOptionsContext),
    "useOrganization": (()=>useOrganization),
    "useOrganizationContext": (()=>useOrganizationContext),
    "useOrganizationList": (()=>useOrganizationList),
    "useReverification": (()=>useReverification),
    "useSafeLayoutEffect": (()=>useSafeLayoutEffect),
    "useSession": (()=>useSession),
    "useSessionContext": (()=>useSessionContext),
    "useSessionList": (()=>useSessionList),
    "useUser": (()=>useUser),
    "useUserContext": (()=>useUserContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IBXKDGSZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IBXKDGSZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7QJ2QTJL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7QJ2QTJL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$43A5F2IE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-43A5F2IE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3CN5LOSN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
// src/react/hooks/createContextAndHook.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/swr/dist/infinite/index.mjs [app-client] (ecmascript)");
// src/react/hooks/useDeepEqualMemo.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/dequal/dist/index.mjs [app-client] (ecmascript)");
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
function assertContextExists(contextVal, msgOrCtx) {
    if (!contextVal) {
        throw typeof msgOrCtx === "string" ? new Error(msgOrCtx) : new Error(`${msgOrCtx.displayName} not found`);
    }
}
var createContextAndHook = (displayName, options)=>{
    const { assertCtxFn = assertContextExists } = options || {};
    const Ctx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
    Ctx.displayName = displayName;
    const useCtx = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        assertCtxFn(ctx, `${displayName} not found`);
        return ctx.value;
    };
    const useCtxWithoutGuarantee = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        return ctx ? ctx.value : {};
    };
    return [
        Ctx,
        useCtx,
        useCtxWithoutGuarantee
    ];
};
;
// src/react/clerk-swr.ts
var clerk_swr_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__export"])(clerk_swr_exports, {
    useSWR: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    useSWRInfinite: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__reExport"])(clerk_swr_exports, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__);
;
;
;
// src/react/contexts.tsx
var [ClerkInstanceContext, useClerkInstanceContext] = createContextAndHook("ClerkInstanceContext");
var [UserContext, useUserContext] = createContextAndHook("UserContext");
var [ClientContext, useClientContext] = createContextAndHook("ClientContext");
var [SessionContext, useSessionContext] = createContextAndHook("SessionContext");
var OptionsContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
function useOptionsContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(OptionsContext);
    if (context === void 0) {
        throw new Error("useOptions must be used within an OptionsContext");
    }
    return context;
}
var [OrganizationContextInternal, useOrganizationContext] = createContextAndHook("OrganizationContext");
var OrganizationProvider = ({ children, organization, swrConfig })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(clerk_swr_exports.SWRConfig, {
        value: swrConfig
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationContextInternal.Provider, {
        value: {
            value: {
                organization
            }
        }
    }, children));
};
function useAssertWrappedByClerkProvider(displayNameOrFn) {
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ClerkInstanceContext);
    if (!ctx) {
        if (typeof displayNameOrFn === "function") {
            displayNameOrFn();
            return;
        }
        throw new Error(`${displayNameOrFn} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim());
    }
}
;
function getDifferentKeys(obj1, obj2) {
    const keysSet = new Set(Object.keys(obj2));
    const differentKeysObject = {};
    for (const key1 of Object.keys(obj1)){
        if (!keysSet.has(key1)) {
            differentKeysObject[key1] = obj1[key1];
        }
    }
    return differentKeysObject;
}
var useWithSafeValues = (params, defaultValues)=>{
    const shouldUseDefaults = typeof params === "boolean" && params;
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.initialPage : params?.initialPage ?? defaultValues.initialPage);
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.pageSize : params?.pageSize ?? defaultValues.pageSize);
    const newObj = {};
    for (const key of Object.keys(defaultValues)){
        newObj[key] = shouldUseDefaults ? defaultValues[key] : params?.[key] ?? defaultValues[key];
    }
    return {
        ...newObj,
        initialPage: initialPageRef.current,
        pageSize: pageSizeRef.current
    };
};
var cachingSWROptions = {
    dedupingInterval: 1e3 * 60,
    focusThrottleInterval: 1e3 * 60 * 2
};
var usePagesOrInfinite = (params, fetcher, config, cacheKeys)=>{
    const [paginatedPage, setPaginatedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(params.initialPage ?? 1);
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(params.initialPage ?? 1);
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(params.pageSize ?? 10);
    const enabled = config.enabled ?? true;
    const triggerInfinite = config.infinite ?? false;
    const keepPreviousData = config.keepPreviousData ?? false;
    const pagesCacheKey = {
        ...cacheKeys,
        ...params,
        initialPage: paginatedPage,
        pageSize: pageSizeRef.current
    };
    const { data: swrData, isValidating: swrIsValidating, isLoading: swrIsLoading, error: swrError, mutate: swrMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(!triggerInfinite && !!fetcher && enabled ? pagesCacheKey : null, (cacheKeyParams)=>{
        const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
        return fetcher?.(requestParams);
    }, {
        keepPreviousData,
        ...cachingSWROptions
    });
    const { data: swrInfiniteData, isLoading: swrInfiniteIsLoading, isValidating: swrInfiniteIsValidating, error: swrInfiniteError, size, setSize, mutate: swrInfiniteMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((pageIndex)=>{
        if (!triggerInfinite || !enabled) {
            return null;
        }
        return {
            ...params,
            ...cacheKeys,
            initialPage: initialPageRef.current + pageIndex,
            pageSize: pageSizeRef.current
        };
    }, (cacheKeyParams)=>{
        const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
        return fetcher?.(requestParams);
    }, cachingSWROptions);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagesOrInfinite.useMemo[page]": ()=>{
            if (triggerInfinite) {
                return size;
            }
            return paginatedPage;
        }
    }["usePagesOrInfinite.useMemo[page]"], [
        triggerInfinite,
        size,
        paginatedPage
    ]);
    const fetchPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePagesOrInfinite.useCallback[fetchPage]": (numberOrgFn)=>{
            if (triggerInfinite) {
                void setSize(numberOrgFn);
                return;
            }
            return setPaginatedPage(numberOrgFn);
        }
    }["usePagesOrInfinite.useCallback[fetchPage]"], [
        setSize
    ]);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagesOrInfinite.useMemo[data]": ()=>{
            if (triggerInfinite) {
                return swrInfiniteData?.map({
                    "usePagesOrInfinite.useMemo[data]": (a)=>a?.data
                }["usePagesOrInfinite.useMemo[data]"]).flat() ?? [];
            }
            return swrData?.data ?? [];
        }
    }["usePagesOrInfinite.useMemo[data]"], [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagesOrInfinite.useMemo[count]": ()=>{
            if (triggerInfinite) {
                return swrInfiniteData?.[swrInfiniteData?.length - 1]?.total_count || 0;
            }
            return swrData?.total_count ?? 0;
        }
    }["usePagesOrInfinite.useMemo[count]"], [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const isLoading = triggerInfinite ? swrInfiniteIsLoading : swrIsLoading;
    const isFetching = triggerInfinite ? swrInfiniteIsValidating : swrIsValidating;
    const error = (triggerInfinite ? swrInfiniteError : swrError) ?? null;
    const isError = !!error;
    const fetchNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePagesOrInfinite.useCallback[fetchNext]": ()=>{
            fetchPage({
                "usePagesOrInfinite.useCallback[fetchNext]": (n)=>Math.max(0, n + 1)
            }["usePagesOrInfinite.useCallback[fetchNext]"]);
        }
    }["usePagesOrInfinite.useCallback[fetchNext]"], [
        fetchPage
    ]);
    const fetchPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePagesOrInfinite.useCallback[fetchPrevious]": ()=>{
            fetchPage({
                "usePagesOrInfinite.useCallback[fetchPrevious]": (n)=>Math.max(0, n - 1)
            }["usePagesOrInfinite.useCallback[fetchPrevious]"]);
        }
    }["usePagesOrInfinite.useCallback[fetchPrevious]"], [
        fetchPage
    ]);
    const offsetCount = (initialPageRef.current - 1) * pageSizeRef.current;
    const pageCount = Math.ceil((count - offsetCount) / pageSizeRef.current);
    const hasNextPage = count - offsetCount * pageSizeRef.current > page * pageSizeRef.current;
    const hasPreviousPage = (page - 1) * pageSizeRef.current > offsetCount * pageSizeRef.current;
    const setData = triggerInfinite ? (value)=>swrInfiniteMutate(value, {
            revalidate: false
        }) : (value)=>swrMutate(value, {
            revalidate: false
        });
    const revalidate = triggerInfinite ? ()=>swrInfiniteMutate() : ()=>swrMutate();
    return {
        data,
        count,
        error,
        isLoading,
        isFetching,
        isError,
        page,
        pageCount,
        fetchPage,
        fetchNext,
        fetchPrevious,
        hasNextPage,
        hasPreviousPage,
        // Let the hook return type define this type
        revalidate,
        // Let the hook return type define this type
        setData
    };
};
// src/react/hooks/useOrganization.tsx
var undefinedPaginatedResource = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
function useOrganization(params) {
    const { domains: domainListParams, membershipRequests: membershipRequestsListParams, memberships: membersListParams, invitations: invitationsListParams, subscriptions: subscriptionsListParams } = params || {};
    useAssertWrappedByClerkProvider("useOrganization");
    const { organization } = useOrganizationContext();
    const session = useSessionContext();
    const domainSafeValues = useWithSafeValues(domainListParams, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false,
        enrollmentMode: void 0
    });
    const membershipRequestSafeValues = useWithSafeValues(membershipRequestsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const membersSafeValues = useWithSafeValues(membersListParams, {
        initialPage: 1,
        pageSize: 10,
        role: void 0,
        keepPreviousData: false,
        infinite: false,
        query: void 0
    });
    const invitationsSafeValues = useWithSafeValues(invitationsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: [
            "pending"
        ],
        keepPreviousData: false,
        infinite: false
    });
    const subscriptionsSafeValues = useWithSafeValues(subscriptionsListParams, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    clerk.telemetry?.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganization"));
    const domainParams = typeof domainListParams === "undefined" ? void 0 : {
        initialPage: domainSafeValues.initialPage,
        pageSize: domainSafeValues.pageSize,
        enrollmentMode: domainSafeValues.enrollmentMode
    };
    const membershipRequestParams = typeof membershipRequestsListParams === "undefined" ? void 0 : {
        initialPage: membershipRequestSafeValues.initialPage,
        pageSize: membershipRequestSafeValues.pageSize,
        status: membershipRequestSafeValues.status
    };
    const membersParams = typeof membersListParams === "undefined" ? void 0 : {
        initialPage: membersSafeValues.initialPage,
        pageSize: membersSafeValues.pageSize,
        role: membersSafeValues.role,
        query: membersSafeValues.query
    };
    const invitationsParams = typeof invitationsListParams === "undefined" ? void 0 : {
        initialPage: invitationsSafeValues.initialPage,
        pageSize: invitationsSafeValues.pageSize,
        status: invitationsSafeValues.status
    };
    const subscriptionsParams = typeof subscriptionsListParams === "undefined" ? void 0 : {
        initialPage: subscriptionsSafeValues.initialPage,
        pageSize: subscriptionsSafeValues.pageSize,
        orgId: organization?.id
    };
    const domains = usePagesOrInfinite({
        ...domainParams
    }, organization?.getDomains, {
        keepPreviousData: domainSafeValues.keepPreviousData,
        infinite: domainSafeValues.infinite,
        enabled: !!domainParams
    }, {
        type: "domains",
        organizationId: organization?.id
    });
    const membershipRequests = usePagesOrInfinite({
        ...membershipRequestParams
    }, organization?.getMembershipRequests, {
        keepPreviousData: membershipRequestSafeValues.keepPreviousData,
        infinite: membershipRequestSafeValues.infinite,
        enabled: !!membershipRequestParams
    }, {
        type: "membershipRequests",
        organizationId: organization?.id
    });
    const memberships = usePagesOrInfinite(membersParams || {}, organization?.getMemberships, {
        keepPreviousData: membersSafeValues.keepPreviousData,
        infinite: membersSafeValues.infinite,
        enabled: !!membersParams
    }, {
        type: "members",
        organizationId: organization?.id
    });
    const invitations = usePagesOrInfinite({
        ...invitationsParams
    }, organization?.getInvitations, {
        keepPreviousData: invitationsSafeValues.keepPreviousData,
        infinite: invitationsSafeValues.infinite,
        enabled: !!invitationsParams
    }, {
        type: "invitations",
        organizationId: organization?.id
    });
    const subscriptions = usePagesOrInfinite({
        ...subscriptionsParams
    }, organization?.getSubscriptions, {
        keepPreviousData: subscriptionsSafeValues.keepPreviousData,
        infinite: subscriptionsSafeValues.infinite,
        enabled: !!subscriptionsParams
    }, {
        type: "subscriptions",
        organizationId: organization?.id
    });
    if (organization === void 0) {
        return {
            isLoaded: false,
            organization: void 0,
            membership: void 0,
            domains: undefinedPaginatedResource,
            membershipRequests: undefinedPaginatedResource,
            memberships: undefinedPaginatedResource,
            invitations: undefinedPaginatedResource,
            subscriptions: undefinedPaginatedResource
        };
    }
    if (organization === null) {
        return {
            isLoaded: true,
            organization: null,
            membership: null,
            domains: null,
            membershipRequests: null,
            memberships: null,
            invitations: null,
            subscriptions: null
        };
    }
    if (!clerk.loaded && organization) {
        return {
            isLoaded: true,
            organization,
            membership: void 0,
            domains: undefinedPaginatedResource,
            membershipRequests: undefinedPaginatedResource,
            memberships: undefinedPaginatedResource,
            invitations: undefinedPaginatedResource,
            subscriptions: undefinedPaginatedResource
        };
    }
    return {
        isLoaded: clerk.loaded,
        organization,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        membership: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IBXKDGSZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentOrganizationMembership"])(session.user.organizationMemberships, organization.id),
        // your membership in the current org
        domains,
        membershipRequests,
        memberships,
        invitations,
        subscriptions
    };
}
// src/react/hooks/useOrganizationList.tsx
var undefinedPaginatedResource2 = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
function useOrganizationList(params) {
    const { userMemberships, userInvitations, userSuggestions } = params || {};
    useAssertWrappedByClerkProvider("useOrganizationList");
    const userMembershipsSafeValues = useWithSafeValues(userMemberships, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false
    });
    const userInvitationsSafeValues = useWithSafeValues(userInvitations, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const userSuggestionsSafeValues = useWithSafeValues(userSuggestions, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    clerk.telemetry?.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganizationList"));
    const userMembershipsParams = typeof userMemberships === "undefined" ? void 0 : {
        initialPage: userMembershipsSafeValues.initialPage,
        pageSize: userMembershipsSafeValues.pageSize
    };
    const userInvitationsParams = typeof userInvitations === "undefined" ? void 0 : {
        initialPage: userInvitationsSafeValues.initialPage,
        pageSize: userInvitationsSafeValues.pageSize,
        status: userInvitationsSafeValues.status
    };
    const userSuggestionsParams = typeof userSuggestions === "undefined" ? void 0 : {
        initialPage: userSuggestionsSafeValues.initialPage,
        pageSize: userSuggestionsSafeValues.pageSize,
        status: userSuggestionsSafeValues.status
    };
    const isClerkLoaded = !!(clerk.loaded && user);
    const memberships = usePagesOrInfinite(userMembershipsParams || {}, user?.getOrganizationMemberships, {
        keepPreviousData: userMembershipsSafeValues.keepPreviousData,
        infinite: userMembershipsSafeValues.infinite,
        enabled: !!userMembershipsParams
    }, {
        type: "userMemberships",
        userId: user?.id
    });
    const invitations = usePagesOrInfinite({
        ...userInvitationsParams
    }, user?.getOrganizationInvitations, {
        keepPreviousData: userInvitationsSafeValues.keepPreviousData,
        infinite: userInvitationsSafeValues.infinite,
        enabled: !!userInvitationsParams
    }, {
        type: "userInvitations",
        userId: user?.id
    });
    const suggestions = usePagesOrInfinite({
        ...userSuggestionsParams
    }, user?.getOrganizationSuggestions, {
        keepPreviousData: userSuggestionsSafeValues.keepPreviousData,
        infinite: userSuggestionsSafeValues.infinite,
        enabled: !!userSuggestionsParams
    }, {
        type: "userSuggestions",
        userId: user?.id
    });
    if (!isClerkLoaded) {
        return {
            isLoaded: false,
            createOrganization: void 0,
            setActive: void 0,
            userMemberships: undefinedPaginatedResource2,
            userInvitations: undefinedPaginatedResource2,
            userSuggestions: undefinedPaginatedResource2
        };
    }
    return {
        isLoaded: isClerkLoaded,
        setActive: clerk.setActive,
        createOrganization: clerk.createOrganization,
        userMemberships: memberships,
        userInvitations: invitations,
        userSuggestions: suggestions
    };
}
;
var useSafeLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
// src/react/hooks/useClerk.ts
var useClerk = ()=>{
    useAssertWrappedByClerkProvider("useClerk");
    return useClerkInstanceContext();
};
// src/react/hooks/useSession.ts
var useSession = (options = {})=>{
    useAssertWrappedByClerkProvider("useSession");
    const session = useSessionContext();
    const clerk = useClerk();
    if (session === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            session: void 0
        };
    }
    const pendingAsSignedOut = session?.status === "pending" && (options.treatPendingAsSignedOut ?? clerk.__internal_getOption("treatPendingAsSignedOut"));
    const isSignedOut = session === null || pendingAsSignedOut;
    if (isSignedOut) {
        return {
            isLoaded: true,
            isSignedIn: false,
            session: null
        };
    }
    return {
        isLoaded: true,
        isSignedIn: true,
        session
    };
};
// src/react/hooks/useSessionList.ts
var useSessionList = ()=>{
    useAssertWrappedByClerkProvider("useSessionList");
    const isomorphicClerk = useClerkInstanceContext();
    const client = useClientContext();
    if (!client) {
        return {
            isLoaded: false,
            sessions: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        sessions: client.sessions,
        setActive: isomorphicClerk.setActive
    };
};
// src/react/hooks/useUser.ts
function useUser() {
    useAssertWrappedByClerkProvider("useUser");
    const user = useUserContext();
    if (user === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            user: void 0
        };
    }
    if (user === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            user: null
        };
    }
    return {
        isLoaded: true,
        isSignedIn: true,
        user
    };
}
;
;
var useDeepEqualMemoize = (value)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(value);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(value, ref.current)) {
        ref.current = value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useDeepEqualMemoize.useMemo": ()=>ref.current
    }["useDeepEqualMemoize.useMemo"], [
        ref.current
    ]);
};
var useDeepEqualMemo = (factory, dependencyArray)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo(factory, useDeepEqualMemoize(dependencyArray));
};
var isDeeplyEqual = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"];
;
var CLERK_API_REVERIFICATION_ERROR_CODE = "session_reverification_required";
async function resolveResult(result) {
    try {
        const r = await result;
        if (r instanceof Response) {
            return r.json();
        }
        return r;
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isClerkAPIResponseError"])(e) && e.errors.find(({ code })=>code === CLERK_API_REVERIFICATION_ERROR_CODE)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$43A5F2IE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverificationError"])();
        }
        throw e;
    }
}
function createReverificationHandler(params) {
    function assertReverification(fetcher) {
        return async (...args)=>{
            let result = await resolveResult(fetcher(...args));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$43A5F2IE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReverificationHint"])(result)) {
                const resolvers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7QJ2QTJL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDeferredPromise"])();
                const isValidMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateReverificationConfig"])(result.clerk_error.metadata?.reverification);
                const level = isValidMetadata ? isValidMetadata().level : void 0;
                const cancel = ()=>{
                    resolvers.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkRuntimeError"]("User cancelled attempted verification", {
                        code: "reverification_cancelled"
                    }));
                };
                const complete = ()=>{
                    resolvers.resolve(true);
                };
                if (params.onNeedsReverification === void 0) {
                    params.openUIComponent?.({
                        level,
                        afterVerification: complete,
                        afterVerificationCancelled: cancel
                    });
                } else {
                    params.telemetry?.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("UserVerificationCustomUI"));
                    params.onNeedsReverification({
                        cancel,
                        complete,
                        level
                    });
                }
                await resolvers.promise;
                result = await resolveResult(fetcher(...args));
            }
            return result;
        };
    }
    return assertReverification;
}
var useReverification = (fetcher, options)=>{
    const { __internal_openReverification, telemetry } = useClerk();
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    const handleReverification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useReverification.useMemo2[handleReverification]": ()=>{
            const handler = createReverificationHandler({
                openUIComponent: __internal_openReverification,
                telemetry,
                ...optionsRef.current
            })(fetcherRef.current);
            return handler;
        }
    }["useReverification.useMemo2[handleReverification]"], [
        __internal_openReverification,
        fetcherRef.current,
        optionsRef.current
    ]);
    useSafeLayoutEffect({
        "useReverification.useSafeLayoutEffect": ()=>{
            fetcherRef.current = fetcher;
            optionsRef.current = options;
        }
    }["useReverification.useSafeLayoutEffect"]);
    return handleReverification;
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/runtimeEnvironment.ts
__turbopack_context__.s({
    "isDevelopmentEnvironment": (()=>isDevelopmentEnvironment),
    "isProductionEnvironment": (()=>isProductionEnvironment),
    "isTestEnvironment": (()=>isTestEnvironment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var isDevelopmentEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "development";
    } catch  {}
    return false;
};
var isTestEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "test";
    } catch  {}
    return false;
};
var isProductionEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "production";
    } catch  {}
    return false;
};
;
 //# sourceMappingURL=chunk-7HPDNZ3R.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deprecated": (()=>deprecated),
    "deprecatedObjectProperty": (()=>deprecatedObjectProperty),
    "deprecatedProperty": (()=>deprecatedProperty)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
;
// src/deprecated.ts
var displayedWarnings = /* @__PURE__ */ new Set();
var deprecated = (fnName, warning, key)=>{
    const hideWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestEnvironment"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProductionEnvironment"])();
    const messageId = key ?? fnName;
    if (displayedWarnings.has(messageId) || hideWarning) {
        return;
    }
    displayedWarnings.add(messageId);
    console.warn(`Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`);
};
var deprecatedProperty = (cls, propName, warning, isStatic = false)=>{
    const target = isStatic ? cls : cls.prototype;
    let value = target[propName];
    Object.defineProperty(target, propName, {
        get () {
            deprecated(propName, warning, `${cls.name}:${propName}`);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
var deprecatedObjectProperty = (obj, propName, warning, key)=>{
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
        get () {
            deprecated(propName, warning, key);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
;
 //# sourceMappingURL=chunk-UEY4AZIP.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
;
 //# sourceMappingURL=deprecated.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/errors/errorThrower.ts
__turbopack_context__.s({
    "AuthContext": (()=>AuthContext),
    "AuthenticateWithRedirectCallback": (()=>AuthenticateWithRedirectCallback),
    "ClerkDegraded": (()=>ClerkDegraded),
    "ClerkFailed": (()=>ClerkFailed),
    "ClerkLoaded": (()=>ClerkLoaded),
    "ClerkLoading": (()=>ClerkLoading),
    "IsomorphicClerkContext": (()=>IsomorphicClerkContext),
    "MultisessionAppSupport": (()=>MultisessionAppSupport),
    "Protect": (()=>Protect),
    "RedirectToCreateOrganization": (()=>RedirectToCreateOrganization),
    "RedirectToOrganizationProfile": (()=>RedirectToOrganizationProfile),
    "RedirectToSignIn": (()=>RedirectToSignIn),
    "RedirectToSignUp": (()=>RedirectToSignUp),
    "RedirectToUserProfile": (()=>RedirectToUserProfile),
    "SignedIn": (()=>SignedIn),
    "SignedOut": (()=>SignedOut),
    "customLinkWrongProps": (()=>customLinkWrongProps),
    "customMenuItemsIgnoredComponent": (()=>customMenuItemsIgnoredComponent),
    "customPageWrongProps": (()=>customPageWrongProps),
    "customPagesIgnoredComponent": (()=>customPagesIgnoredComponent),
    "errorThrower": (()=>errorThrower),
    "incompatibleRoutingWithPathProvidedError": (()=>incompatibleRoutingWithPathProvidedError),
    "multipleChildrenInButtonComponent": (()=>multipleChildrenInButtonComponent),
    "multipleClerkProvidersError": (()=>multipleClerkProvidersError),
    "noPathProvidedError": (()=>noPathProvidedError),
    "organizationProfileLinkRenderedError": (()=>organizationProfileLinkRenderedError),
    "organizationProfilePageRenderedError": (()=>organizationProfilePageRenderedError),
    "setErrorThrowerOptions": (()=>setErrorThrowerOptions),
    "unsupportedNonBrowserDomainOrProxyUrlFunction": (()=>unsupportedNonBrowserDomainOrProxyUrlFunction),
    "useAuth": (()=>useAuth),
    "useDerivedAuth": (()=>useDerivedAuth),
    "useEmailLink": (()=>useEmailLink),
    "useSignIn": (()=>useSignIn),
    "useSignUp": (()=>useSignUp),
    "userButtonIgnoredComponent": (()=>userButtonIgnoredComponent),
    "userButtonMenuActionRenderedError": (()=>userButtonMenuActionRenderedError),
    "userButtonMenuItemLinkWrongProps": (()=>userButtonMenuItemLinkWrongProps),
    "userButtonMenuItemsActionWrongsProps": (()=>userButtonMenuItemsActionWrongsProps),
    "userButtonMenuItemsRenderedError": (()=>userButtonMenuItemsRenderedError),
    "userButtonMenuLinkRenderedError": (()=>userButtonMenuLinkRenderedError),
    "userProfileLinkRenderedError": (()=>userProfileLinkRenderedError),
    "userProfilePageRenderedError": (()=>userProfilePageRenderedError),
    "withClerk": (()=>withClerk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
// src/hooks/useAuth.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3CN5LOSN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/contexts/AuthContext.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
// src/components/controlComponents.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-client] (ecmascript)");
;
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/clerk-react"
});
function setErrorThrowerOptions(options) {
    errorThrower.setMessages(options).setPackageName(options);
}
;
;
;
;
var [AuthContext, useAuthContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextAndHook"])("AuthContext");
;
var IsomorphicClerkContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkInstanceContext"];
var useIsomorphicClerkContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerkInstanceContext"];
// src/errors/messages.ts
var multipleClerkProvidersError = "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
var multipleChildrenInButtonComponent = (name)=>`You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
var invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support";
var unsupportedNonBrowserDomainOrProxyUrlFunction = "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.";
var userProfilePageRenderedError = "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
var userProfileLinkRenderedError = "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
var organizationProfilePageRenderedError = "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
var organizationProfileLinkRenderedError = "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
var customPagesIgnoredComponent = (componentName)=>`<${componentName} /> can only accept <${componentName}.Page /> and <${componentName}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`;
var customPageWrongProps = (componentName)=>`Missing props. <${componentName}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`;
var customLinkWrongProps = (componentName)=>`Missing props. <${componentName}.Link /> component requires the following props: url, label and labelIcon.`;
var noPathProvidedError = (componentName)=>`The <${componentName}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${componentName} path={'/my-path'} />`;
var incompatibleRoutingWithPathProvidedError = (componentName)=>`The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${componentName}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`;
var userButtonIgnoredComponent = `<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`;
var customMenuItemsIgnoredComponent = "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.";
var userButtonMenuItemsRenderedError = "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.";
var userButtonMenuActionRenderedError = "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.";
var userButtonMenuLinkRenderedError = "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.";
var userButtonMenuItemLinkWrongProps = "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.";
var userButtonMenuItemsActionWrongsProps = "Missing props. <UserButton.Action /> component requires the following props: label.";
;
var useAssertWrappedByClerkProvider = (source)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAssertWrappedByClerkProvider"])({
        "useAssertWrappedByClerkProvider.useSharedAssertWrappedByClerkProvider": ()=>{
            errorThrower.throwMissingClerkProviderError({
                source
            });
        }
    }["useAssertWrappedByClerkProvider.useSharedAssertWrappedByClerkProvider"]);
};
// src/hooks/utils.ts
var clerkLoaded = (isomorphicClerk)=>{
    return new Promise((resolve)=>{
        const handler = (status)=>{
            if ([
                "ready",
                "degraded"
            ].includes(status)) {
                resolve();
                isomorphicClerk.off("status", handler);
            }
        };
        isomorphicClerk.on("status", handler, {
            notify: true
        });
    });
};
var createGetToken = (isomorphicClerk)=>{
    return async (options)=>{
        await clerkLoaded(isomorphicClerk);
        if (!isomorphicClerk.session) {
            return null;
        }
        return isomorphicClerk.session.getToken(options);
    };
};
var createSignOut = (isomorphicClerk)=>{
    return async (...args)=>{
        await clerkLoaded(isomorphicClerk);
        return isomorphicClerk.signOut(...args);
    };
};
// src/hooks/useAuth.ts
var useAuth = (initialAuthStateOrOptions = {})=>{
    var _a, _b;
    useAssertWrappedByClerkProvider("useAuth");
    const { treatPendingAsSignedOut, ...rest } = initialAuthStateOrOptions != null ? initialAuthStateOrOptions : {};
    const initialAuthState = rest;
    const authContextFromHook = useAuthContext();
    let authContext = authContextFromHook;
    if (authContext.sessionId === void 0 && authContext.userId === void 0) {
        authContext = initialAuthState != null ? initialAuthState : {};
    }
    const isomorphicClerk = useIsomorphicClerkContext();
    const getToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(createGetToken(isomorphicClerk), [
        isomorphicClerk
    ]);
    const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(createSignOut(isomorphicClerk), [
        isomorphicClerk
    ]);
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useAuth", {
        treatPendingAsSignedOut
    }));
    return useDerivedAuth({
        ...authContext,
        getToken,
        signOut
    }, {
        treatPendingAsSignedOut: treatPendingAsSignedOut != null ? treatPendingAsSignedOut : (_b = isomorphicClerk.__internal_getOption) == null ? void 0 : _b.call(isomorphicClerk, "treatPendingAsSignedOut")
    });
};
function useDerivedAuth(authObject, { treatPendingAsSignedOut = true } = {}) {
    const { userId, orgId, orgRole, has, signOut, getToken, orgPermissions, factorVerificationAge, sessionClaims } = authObject != null ? authObject : {};
    const derivedHas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDerivedAuth.useCallback[derivedHas]": (params)=>{
            if (has) {
                return has(params);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCheckAuthorization"])({
                userId,
                orgId,
                orgRole,
                orgPermissions,
                factorVerificationAge,
                features: (sessionClaims == null ? void 0 : sessionClaims.fea) || "",
                plans: (sessionClaims == null ? void 0 : sessionClaims.pla) || ""
            })(params);
        }
    }["useDerivedAuth.useCallback[derivedHas]"], [
        has,
        userId,
        orgId,
        orgRole,
        orgPermissions,
        factorVerificationAge
    ]);
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthState"])({
        authObject: {
            ...authObject,
            getToken,
            signOut,
            has: derivedHas
        },
        options: {
            treatPendingAsSignedOut
        }
    });
    if (!payload) {
        return errorThrower.throw(invalidStateError);
    }
    return payload;
}
;
function useEmailLink(resource) {
    const { startEmailLinkFlow, cancelEmailLinkFlow } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useEmailLink.useMemo": ()=>resource.createEmailLinkFlow()
    }["useEmailLink.useMemo"], [
        resource
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useEmailLink.useEffect": ()=>{
            return cancelEmailLinkFlow;
        }
    }["useEmailLink.useEffect"], []);
    return {
        startEmailLinkFlow,
        cancelEmailLinkFlow
    };
}
;
;
var useSignIn = ()=>{
    var _a;
    useAssertWrappedByClerkProvider("useSignIn");
    const isomorphicClerk = useIsomorphicClerkContext();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientContext"])();
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useSignIn"));
    if (!client) {
        return {
            isLoaded: false,
            signIn: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        signIn: client.signIn,
        setActive: isomorphicClerk.setActive
    };
};
;
;
var useSignUp = ()=>{
    var _a;
    useAssertWrappedByClerkProvider("useSignUp");
    const isomorphicClerk = useIsomorphicClerkContext();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientContext"])();
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useSignUp"));
    if (!client) {
        return {
            isLoaded: false,
            signUp: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        signUp: client.signUp,
        setActive: isomorphicClerk.setActive
    };
};
;
;
;
;
;
var withClerk = (Component, displayNameOrOptions)=>{
    const passedDisplayedName = typeof displayNameOrOptions === "string" ? displayNameOrOptions : displayNameOrOptions == null ? void 0 : displayNameOrOptions.component;
    const displayName = passedDisplayedName || Component.displayName || Component.name || "Component";
    Component.displayName = displayName;
    const options = typeof displayNameOrOptions === "string" ? void 0 : displayNameOrOptions;
    const HOC = (props)=>{
        useAssertWrappedByClerkProvider(displayName || "withClerk");
        const clerk = useIsomorphicClerkContext();
        if (!clerk.loaded && !(options == null ? void 0 : options.renderWhileLoading)) {
            return null;
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
            ...props,
            component: displayName,
            clerk
        });
    };
    HOC.displayName = `withClerk(${displayName})`;
    return HOC;
};
// src/components/controlComponents.tsx
var SignedIn = ({ children, treatPendingAsSignedOut })=>{
    useAssertWrappedByClerkProvider("SignedIn");
    const { userId } = useAuth({
        treatPendingAsSignedOut
    });
    if (userId) {
        return children;
    }
    return null;
};
var SignedOut = ({ children, treatPendingAsSignedOut })=>{
    useAssertWrappedByClerkProvider("SignedOut");
    const { userId } = useAuth({
        treatPendingAsSignedOut
    });
    if (userId === null) {
        return children;
    }
    return null;
};
var ClerkLoaded = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkLoaded");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (!isomorphicClerk.loaded) {
        return null;
    }
    return children;
};
var ClerkLoading = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkLoading");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.status !== "loading") {
        return null;
    }
    return children;
};
var ClerkFailed = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkFailed");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.status !== "error") {
        return null;
    }
    return children;
};
var ClerkDegraded = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkDegraded");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.status !== "degraded") {
        return null;
    }
    return children;
};
var Protect = ({ children, fallback, treatPendingAsSignedOut, ...restAuthorizedParams })=>{
    useAssertWrappedByClerkProvider("Protect");
    const { isLoaded, has, userId } = useAuth({
        treatPendingAsSignedOut
    });
    if (!isLoaded) {
        return null;
    }
    const unauthorized = fallback != null ? fallback : null;
    const authorized = children;
    if (!userId) {
        return unauthorized;
    }
    if (typeof restAuthorizedParams.condition === "function") {
        if (restAuthorizedParams.condition(has)) {
            return authorized;
        }
        return unauthorized;
    }
    if (restAuthorizedParams.role || restAuthorizedParams.permission || restAuthorizedParams.feature || restAuthorizedParams.plan) {
        if (has(restAuthorizedParams)) {
            return authorized;
        }
        return unauthorized;
    }
    return authorized;
};
var RedirectToSignIn = withClerk(({ clerk, ...props })=>{
    const { client, session } = clerk;
    const hasSignedInSessions = client.signedInSessions ? client.signedInSessions.length > 0 : // Compat for clerk-js<5.54.0 (which was released with the `signedInSessions` property)
    client.activeSessions && client.activeSessions.length > 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToSignIn.useEffect": ()=>{
            if (session === null && hasSignedInSessions) {
                void clerk.redirectToAfterSignOut();
            } else {
                void clerk.redirectToSignIn(props);
            }
        }
    }["RedirectToSignIn.useEffect"], []);
    return null;
}, "RedirectToSignIn");
var RedirectToSignUp = withClerk(({ clerk, ...props })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToSignUp.useEffect": ()=>{
            void clerk.redirectToSignUp(props);
        }
    }["RedirectToSignUp.useEffect"], []);
    return null;
}, "RedirectToSignUp");
var RedirectToUserProfile = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToUserProfile.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToUserProfile", "Use the `redirectToUserProfile()` method instead.");
            void clerk.redirectToUserProfile();
        }
    }["RedirectToUserProfile.useEffect"], []);
    return null;
}, "RedirectToUserProfile");
var RedirectToOrganizationProfile = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToOrganizationProfile.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToOrganizationProfile", "Use the `redirectToOrganizationProfile()` method instead.");
            void clerk.redirectToOrganizationProfile();
        }
    }["RedirectToOrganizationProfile.useEffect"], []);
    return null;
}, "RedirectToOrganizationProfile");
var RedirectToCreateOrganization = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToCreateOrganization.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToCreateOrganization", "Use the `redirectToCreateOrganization()` method instead.");
            void clerk.redirectToCreateOrganization();
        }
    }["RedirectToCreateOrganization.useEffect"], []);
    return null;
}, "RedirectToCreateOrganization");
var AuthenticateWithRedirectCallback = withClerk(({ clerk, ...handleRedirectCallbackParams })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AuthenticateWithRedirectCallback.useEffect": ()=>{
            void clerk.handleRedirectCallback(handleRedirectCallbackParams);
        }
    }["AuthenticateWithRedirectCallback.useEffect"], []);
    return null;
}, "AuthenticateWithRedirectCallback");
var MultisessionAppSupport = ({ children })=>{
    useAssertWrappedByClerkProvider("MultisessionAppSupport");
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionContext"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        key: session ? session.id : "no-users"
    }, children);
};
;
 //# sourceMappingURL=chunk-T2VIWQBM.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet)
});
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
;
 //# sourceMappingURL=chunk-OANWQR3B.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-Q5RDXBYA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/versionSelector.ts
__turbopack_context__.s({
    "getMajorVersion": (()=>getMajorVersion),
    "versionSelector": (()=>versionSelector)
});
var versionSelector = (clerkJSVersion, packageVersion = "5.68.0")=>{
    if (clerkJSVersion) {
        return clerkJSVersion;
    }
    const prereleaseTag = getPrereleaseTag(packageVersion);
    if (prereleaseTag) {
        if (prereleaseTag === "snapshot") {
            return "5.68.0";
        }
        return prereleaseTag;
    }
    return getMajorVersion(packageVersion);
};
var getPrereleaseTag = (packageVersion)=>packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)?.[1];
var getMajorVersion = (packageVersion)=>packageVersion.trim().replace(/^v/, "").split(".")[0];
;
 //# sourceMappingURL=chunk-Q5RDXBYA.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/proxy.ts
__turbopack_context__.s({
    "isHttpOrHttps": (()=>isHttpOrHttps),
    "isProxyUrlRelative": (()=>isProxyUrlRelative),
    "isValidProxyUrl": (()=>isValidProxyUrl),
    "proxyUrlToAbsoluteURL": (()=>proxyUrlToAbsoluteURL)
});
function isValidProxyUrl(key) {
    if (!key) {
        return true;
    }
    return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
function isHttpOrHttps(key) {
    return /^http(s)?:\/\//.test(key || "");
}
function isProxyUrlRelative(key) {
    return key.startsWith("/");
}
function proxyUrlToAbsoluteURL(url) {
    if (!url) {
        return "";
    }
    return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
}
;
 //# sourceMappingURL=chunk-6NDGN2IU.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/instance.ts
__turbopack_context__.s({
    "isStaging": (()=>isStaging)
});
function isStaging(frontendApi) {
    return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
}
;
 //# sourceMappingURL=chunk-3TMSNP4L.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addClerkPrefix": (()=>addClerkPrefix),
    "cleanDoubleSlashes": (()=>cleanDoubleSlashes),
    "getClerkJsMajorVersionOrTag": (()=>getClerkJsMajorVersionOrTag),
    "getScriptUrl": (()=>getScriptUrl),
    "hasLeadingSlash": (()=>hasLeadingSlash),
    "hasTrailingSlash": (()=>hasTrailingSlash),
    "isAbsoluteUrl": (()=>isAbsoluteUrl),
    "isCurrentDevAccountPortalOrigin": (()=>isCurrentDevAccountPortalOrigin),
    "isLegacyDevAccountPortalOrigin": (()=>isLegacyDevAccountPortalOrigin),
    "isNonEmptyURL": (()=>isNonEmptyURL),
    "joinURL": (()=>joinURL),
    "parseSearchParams": (()=>parseSearchParams),
    "stripScheme": (()=>stripScheme),
    "withLeadingSlash": (()=>withLeadingSlash),
    "withTrailingSlash": (()=>withTrailingSlash),
    "withoutLeadingSlash": (()=>withoutLeadingSlash),
    "withoutTrailingSlash": (()=>withoutTrailingSlash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
;
;
// src/url.ts
function parseSearchParams(queryString = "") {
    if (queryString.startsWith("?")) {
        queryString = queryString.slice(1);
    }
    return new URLSearchParams(queryString);
}
function stripScheme(url = "") {
    return (url || "").replace(/^.+:\/\//, "");
}
function addClerkPrefix(str) {
    if (!str) {
        return "";
    }
    let regex;
    if (str.match(/^(clerk\.)+\w*$/)) {
        regex = /(clerk\.)*(?=clerk\.)/;
    } else if (str.match(/\.clerk.accounts/)) {
        return str;
    } else {
        regex = /^(clerk\.)*/gi;
    }
    const stripped = str.replace(regex, "");
    return `clerk.${stripped}`;
}
var getClerkJsMajorVersionOrTag = (frontendApi, version)=>{
    if (!version && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStaging"])(frontendApi)) {
        return "canary";
    }
    if (!version) {
        return "latest";
    }
    return version.split(".")[0] || "latest";
};
var getScriptUrl = (frontendApi, { clerkJSVersion })=>{
    const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
    const major = getClerkJsMajorVersionOrTag(frontendApi, clerkJSVersion);
    return `https://${noSchemeFrontendApi}/npm/@clerk/clerk-js@${clerkJSVersion || major}/dist/clerk.browser.js`;
};
function isLegacyDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
function isCurrentDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_DEV_INSTANCE_SUFFIXES"].some((currentDevSuffix)=>{
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
    });
}
var TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return input.endsWith("/");
    }
    return TRAILING_SLASH_RE.test(input);
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return input.endsWith("/") ? input : input + "/";
    }
    if (hasTrailingSlash(input, true)) {
        return input || "/";
    }
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
        if (!path) {
            return fragment;
        }
    }
    const [s0, ...s] = path.split("?");
    return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    }
    if (!hasTrailingSlash(input, true)) {
        return input || "/";
    }
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
    }
    const [s0, ...s] = path.split("?");
    return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
    return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
    return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
    return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
    return input.split("://").map((string_)=>string_.replace(/\/{2,}/g, "/")).join("://");
}
function isNonEmptyURL(url) {
    return url && url !== "/";
}
var JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
    let url = base || "";
    for (const segment of input.filter((url2)=>isNonEmptyURL(url2))){
        if (url) {
            const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
            url = withTrailingSlash(url) + _segment;
        } else {
            url = segment;
        }
    }
    return url;
}
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
var isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
;
 //# sourceMappingURL=chunk-IFTVZ2LQ.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-N2V3PKFE.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/retry.ts
__turbopack_context__.s({
    "retry": (()=>retry)
});
var defaultOptions = {
    initialDelay: 125,
    maxDelayBetweenRetries: 0,
    factor: 2,
    shouldRetry: (_, iteration)=>iteration < 5,
    retryImmediately: false,
    jitter: true
};
var RETRY_IMMEDIATELY_DELAY = 100;
var sleep = async (ms)=>new Promise((s)=>setTimeout(s, ms));
var applyJitter = (delay, jitter)=>{
    return jitter ? delay * (1 + Math.random()) : delay;
};
var createExponentialDelayAsyncFn = (opts)=>{
    let timesCalled = 0;
    const calculateDelayInMs = ()=>{
        const constant = opts.initialDelay;
        const base = opts.factor;
        let delay = constant * Math.pow(base, timesCalled);
        delay = applyJitter(delay, opts.jitter);
        return Math.min(opts.maxDelayBetweenRetries || delay, delay);
    };
    return async ()=>{
        await sleep(calculateDelayInMs());
        timesCalled++;
    };
};
var retry = async (callback, options = {})=>{
    let iterations = 0;
    const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter } = {
        ...defaultOptions,
        ...options
    };
    const delay = createExponentialDelayAsyncFn({
        initialDelay,
        maxDelayBetweenRetries,
        factor,
        jitter
    });
    while(true){
        try {
            return await callback();
        } catch (e) {
            iterations++;
            if (!shouldRetry(e, iterations)) {
                throw e;
            }
            if (retryImmediately && iterations === 1) {
                await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
            } else {
                await delay();
            }
        }
    }
};
;
 //# sourceMappingURL=chunk-N2V3PKFE.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-E3R3SJ7O.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "loadScript": (()=>loadScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$N2V3PKFE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-N2V3PKFE.mjs [app-client] (ecmascript)");
;
// src/loadScript.ts
var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
var NO_SRC_ERROR = "loadScript cannot be called without a src";
async function loadScript(src = "", opts) {
    const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
    const load = ()=>{
        return new Promise((resolve, reject)=>{
            if (!src) {
                reject(new Error(NO_SRC_ERROR));
            }
            if (!document || !document.body) {
                reject(NO_DOCUMENT_ERROR);
            }
            const script = document.createElement("script");
            if (crossOrigin) script.setAttribute("crossorigin", crossOrigin);
            script.async = async || false;
            script.defer = defer || false;
            script.addEventListener("load", ()=>{
                script.remove();
                resolve(script);
            });
            script.addEventListener("error", ()=>{
                script.remove();
                reject();
            });
            script.src = src;
            script.nonce = nonce;
            beforeLoad?.(script);
            document.body.appendChild(script);
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$N2V3PKFE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retry"])(load, {
        shouldRetry: (_, iterations)=>iterations <= 5
    });
}
;
 //# sourceMappingURL=chunk-E3R3SJ7O.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-XY5YYTBS.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildClerkJsScriptAttributes": (()=>buildClerkJsScriptAttributes),
    "clerkJsScriptUrl": (()=>clerkJsScriptUrl),
    "loadClerkJsScript": (()=>loadClerkJsScript),
    "setClerkJsLoadingErrorPackageName": (()=>setClerkJsLoadingErrorPackageName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$Q5RDXBYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-Q5RDXBYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3R3SJ7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-E3R3SJ7O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
// src/loadClerkJsScript.ts
var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
var { isDevOrStagingUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDevOrStagingUrlCache"])();
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/shared"
});
function setClerkJsLoadingErrorPackageName(packageName) {
    errorThrower.setPackageName({
        packageName
    });
}
var loadClerkJsScript = async (opts)=>{
    const existingScript = document.querySelector("script[data-clerk-js-script]");
    if (existingScript) {
        return new Promise((resolve, reject)=>{
            existingScript.addEventListener("load", ()=>{
                resolve(existingScript);
            });
            existingScript.addEventListener("error", ()=>{
                reject(FAILED_TO_LOAD_ERROR);
            });
        });
    }
    if (!opts?.publishableKey) {
        errorThrower.throwMissingPublishableKeyError();
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3R3SJ7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadScript"])(clerkJsScriptUrl(opts), {
        async: true,
        crossOrigin: "anonymous",
        nonce: opts.nonce,
        beforeLoad: applyClerkJsScriptAttributes(opts)
    }).catch(()=>{
        throw new Error(FAILED_TO_LOAD_ERROR);
    });
};
var clerkJsScriptUrl = (opts)=>{
    const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
    if (clerkJSUrl) {
        return clerkJSUrl;
    }
    let scriptHost = "";
    if (!!proxyUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProxyUrl"])(proxyUrl)) {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxyUrlToAbsoluteURL"])(proxyUrl).replace(/http(s)?:\/\//, "");
    } else if (domain && !isDevOrStagingUrl((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)?.frontendApi || "")) {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClerkPrefix"])(domain);
    } else {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)?.frontendApi || "";
    }
    const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$Q5RDXBYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["versionSelector"])(clerkJSVersion);
    return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
};
var buildClerkJsScriptAttributes = (options)=>{
    const obj = {};
    if (options.publishableKey) {
        obj["data-clerk-publishable-key"] = options.publishableKey;
    }
    if (options.proxyUrl) {
        obj["data-clerk-proxy-url"] = options.proxyUrl;
    }
    if (options.domain) {
        obj["data-clerk-domain"] = options.domain;
    }
    if (options.nonce) {
        obj.nonce = options.nonce;
    }
    return obj;
};
var applyClerkJsScriptAttributes = (options)=>(script)=>{
        const attributes = buildClerkJsScriptAttributes(options);
        for(const attribute in attributes){
            script.setAttribute(attribute, attributes[attribute]);
        }
    };
;
 //# sourceMappingURL=chunk-XY5YYTBS.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-XY5YYTBS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$Q5RDXBYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-Q5RDXBYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3R3SJ7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-E3R3SJ7O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$N2V3PKFE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-N2V3PKFE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
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
 //# sourceMappingURL=loadClerkJsScript.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-XY5YYTBS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$Q5RDXBYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-Q5RDXBYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$E3R3SJ7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-E3R3SJ7O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$N2V3PKFE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-N2V3PKFE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ARQUL5DC.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "allSettled": (()=>allSettled),
    "fastDeepMergeAndKeep": (()=>fastDeepMergeAndKeep),
    "fastDeepMergeAndReplace": (()=>fastDeepMergeAndReplace),
    "logErrorInDevMode": (()=>logErrorInDevMode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
;
// src/utils/allSettled.ts
function allSettled(iterable) {
    const promises = Array.from(iterable).map((p)=>p.then((value)=>({
                status: "fulfilled",
                value
            }), (reason)=>({
                status: "rejected",
                reason
            })));
    return Promise.all(promises);
}
// src/utils/logErrorInDevMode.ts
var logErrorInDevMode = (message)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])()) {
        console.error(`Clerk: ${message}`);
    }
};
// src/utils/fastDeepMerge.ts
var fastDeepMergeAndReplace = (source, target)=>{
    if (!source || !target) {
        return;
    }
    for(const key in source){
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
            if (target[key] === void 0) {
                target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            }
            fastDeepMergeAndReplace(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
};
var fastDeepMergeAndKeep = (source, target)=>{
    if (!source || !target) {
        return;
    }
    for(const key in source){
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
            if (target[key] === void 0) {
                target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            }
            fastDeepMergeAndKeep(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key) && target[key] === void 0) {
            target[key] = source[key];
        }
    }
};
;
 //# sourceMappingURL=chunk-ARQUL5DC.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/handleValueOrFn.ts
__turbopack_context__.s({
    "handleValueOrFn": (()=>handleValueOrFn)
});
function handleValueOrFn(value, url, defaultValue) {
    if (typeof value === "function") {
        return value(url);
    }
    if (typeof value !== "undefined") {
        return value;
    }
    if (typeof defaultValue !== "undefined") {
        return defaultValue;
    }
    return void 0;
}
;
 //# sourceMappingURL=chunk-O32JQBM6.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ARQUL5DC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7QJ2QTJL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7QJ2QTJL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ARQUL5DC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7QJ2QTJL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7QJ2QTJL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/object.ts
__turbopack_context__.s({
    "applyFunctionToObj": (()=>applyFunctionToObj),
    "filterProps": (()=>filterProps),
    "removeUndefined": (()=>removeUndefined),
    "without": (()=>without)
});
var without = (obj, ...props)=>{
    const copy = {
        ...obj
    };
    for (const prop of props){
        delete copy[prop];
    }
    return copy;
};
var removeUndefined = (obj)=>{
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0 && value !== null) {
            acc[key] = value;
        }
        return acc;
    }, {});
};
var applyFunctionToObj = (obj, fn)=>{
    const result = {};
    for(const key in obj){
        result[key] = fn(obj[key], key);
    }
    return result;
};
var filterProps = (obj, filter)=>{
    const result = {};
    for(const key in obj){
        if (obj[key] && filter(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
};
;
 //# sourceMappingURL=chunk-CFXQSUF6.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=object.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
 //# sourceMappingURL=keys.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ZIXJBK4O.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/deriveState.ts
__turbopack_context__.s({
    "deriveState": (()=>deriveState)
});
var deriveState = (clerkOperational, state, initialState)=>{
    if (!clerkOperational && initialState) {
        return deriveFromSsrInitialState(initialState);
    }
    return deriveFromClientSideState(state);
};
var deriveFromSsrInitialState = (initialState)=>{
    const userId = initialState.userId;
    const user = initialState.user;
    const sessionId = initialState.sessionId;
    const sessionStatus = initialState.sessionStatus;
    const sessionClaims = initialState.sessionClaims;
    const session = initialState.session;
    const organization = initialState.organization;
    const orgId = initialState.orgId;
    const orgRole = initialState.orgRole;
    const orgPermissions = initialState.orgPermissions;
    const orgSlug = initialState.orgSlug;
    const actor = initialState.actor;
    const factorVerificationAge = initialState.factorVerificationAge;
    return {
        userId,
        user,
        sessionId,
        session,
        sessionStatus,
        sessionClaims,
        organization,
        orgId,
        orgRole,
        orgPermissions,
        orgSlug,
        actor,
        factorVerificationAge
    };
};
var deriveFromClientSideState = (state)=>{
    const userId = state.user ? state.user.id : state.user;
    const user = state.user;
    const sessionId = state.session ? state.session.id : state.session;
    const session = state.session;
    const sessionStatus = state.session?.status;
    const sessionClaims = state.session ? state.session.lastActiveToken?.jwt?.claims : null;
    const factorVerificationAge = state.session ? state.session.factorVerificationAge : null;
    const actor = session?.actor;
    const organization = state.organization;
    const orgId = state.organization ? state.organization.id : state.organization;
    const orgSlug = organization?.slug;
    const membership = organization ? user?.organizationMemberships?.find((om)=>om.organization.id === orgId) : organization;
    const orgPermissions = membership ? membership.permissions : membership;
    const orgRole = membership ? membership.role : membership;
    return {
        userId,
        user,
        sessionId,
        session,
        sessionStatus,
        sessionClaims,
        organization,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        actor,
        factorVerificationAge
    };
};
;
 //# sourceMappingURL=chunk-ZIXJBK4O.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ZIXJBK4O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ZIXJBK4O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=deriveState.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ZIXJBK4O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ZIXJBK4O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/browser.ts
__turbopack_context__.s({
    "inBrowser": (()=>inBrowser),
    "isBrowserOnline": (()=>isBrowserOnline),
    "isValidBrowser": (()=>isValidBrowser),
    "isValidBrowserOnline": (()=>isValidBrowserOnline),
    "userAgentIsRobot": (()=>userAgentIsRobot)
});
function inBrowser() {
    return typeof window !== "undefined";
}
var botAgents = [
    "bot",
    "spider",
    "crawl",
    "APIs-Google",
    "AdsBot",
    "Googlebot",
    "mediapartners",
    "Google Favicon",
    "FeedFetcher",
    "Google-Read-Aloud",
    "DuplexWeb-Google",
    "googleweblight",
    "bing",
    "yandex",
    "baidu",
    "duckduck",
    "yahoo",
    "ecosia",
    "ia_archiver",
    "facebook",
    "instagram",
    "pinterest",
    "reddit",
    "slack",
    "twitter",
    "whatsapp",
    "youtube",
    "semrush"
];
var botAgentRegex = new RegExp(botAgents.join("|"), "i");
function userAgentIsRobot(userAgent) {
    return !userAgent ? false : botAgentRegex.test(userAgent);
}
function isValidBrowser() {
    const navigator = inBrowser() ? window?.navigator : null;
    if (!navigator) {
        return false;
    }
    return !userAgentIsRobot(navigator?.userAgent) && !navigator?.webdriver;
}
function isBrowserOnline() {
    const navigator = inBrowser() ? window?.navigator : null;
    if (!navigator) {
        return false;
    }
    const isNavigatorOnline = navigator?.onLine;
    const isExperimentalConnectionOnline = navigator?.connection?.rtt !== 0 && navigator?.connection?.downlink !== 0;
    return isExperimentalConnectionOnline && isNavigatorOnline;
}
function isValidBrowserOnline() {
    return isBrowserOnline() && isValidBrowser();
}
;
 //# sourceMappingURL=chunk-JKSAJ6AV.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=browser.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GVKBGR5N.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/eventBus.ts
__turbopack_context__.s({
    "createEventBus": (()=>createEventBus)
});
var _on = (eventToHandlersMap, latestPayloadMap, event, handler, opts)=>{
    const { notify } = opts || {};
    let handlers = eventToHandlersMap.get(event);
    if (!handlers) {
        handlers = [];
        eventToHandlersMap.set(event, handlers);
    }
    handlers.push(handler);
    if (notify && latestPayloadMap.has(event)) {
        handler(latestPayloadMap.get(event));
    }
};
var _dispatch = (eventToHandlersMap, event, payload)=>(eventToHandlersMap.get(event) || []).map((h)=>h(payload));
var _off = (eventToHandlersMap, event, handler)=>{
    const handlers = eventToHandlersMap.get(event);
    if (handlers) {
        if (handler) {
            handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        } else {
            eventToHandlersMap.set(event, []);
        }
    }
};
var createEventBus = ()=>{
    const eventToHandlersMap = /* @__PURE__ */ new Map();
    const latestPayloadMap = /* @__PURE__ */ new Map();
    const eventToPredispatchHandlersMap = /* @__PURE__ */ new Map();
    const emit = (event, payload)=>{
        latestPayloadMap.set(event, payload);
        _dispatch(eventToPredispatchHandlersMap, event, payload);
        _dispatch(eventToHandlersMap, event, payload);
    };
    return {
        // Subscribe to an event
        on: (...args)=>_on(eventToHandlersMap, latestPayloadMap, ...args),
        // Subscribe to an event with priority
        // Registered handlers with `prioritizedOn` will be called before handlers registered with `on`
        prioritizedOn: (...args)=>_on(eventToPredispatchHandlersMap, latestPayloadMap, ...args),
        // Dispatch an event
        emit,
        // Unsubscribe from an event
        off: (...args)=>_off(eventToHandlersMap, ...args),
        // Unsubscribe from an event with priority
        // Unsubscribes handlers only registered with `prioritizedOn`
        prioritizedOff: (...args)=>_off(eventToPredispatchHandlersMap, ...args),
        // Internal utilities
        internal: {
            retrieveListeners: (event)=>eventToHandlersMap.get(event) || []
        }
    };
};
;
 //# sourceMappingURL=chunk-GVKBGR5N.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/clerkEventBus.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clerkEvents": (()=>clerkEvents),
    "createClerkEventBus": (()=>createClerkEventBus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GVKBGR5N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GVKBGR5N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
// src/clerkEventBus.ts
var clerkEvents = {
    Status: "status"
};
var createClerkEventBus = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GVKBGR5N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventBus"])();
};
;
 //# sourceMappingURL=clerkEventBus.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider),
    "CreateOrganization": (()=>CreateOrganization),
    "GoogleOneTap": (()=>GoogleOneTap),
    "OrganizationList": (()=>OrganizationList),
    "OrganizationProfile": (()=>OrganizationProfile),
    "OrganizationSwitcher": (()=>OrganizationSwitcher),
    "PricingTable": (()=>PricingTable),
    "SignIn": (()=>SignIn),
    "SignInButton": (()=>SignInButton),
    "SignInWithMetamaskButton": (()=>SignInWithMetamaskButton),
    "SignOutButton": (()=>SignOutButton),
    "SignUp": (()=>SignUp),
    "SignUpButton": (()=>SignUpButton),
    "UserButton": (()=>UserButton),
    "UserProfile": (()=>UserProfile),
    "Waitlist": (()=>Waitlist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-XY5YYTBS.mjs [app-client] (ecmascript)");
// src/components/uiComponents.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ARQUL5DC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
// src/components/ClerkHostRenderer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
// src/contexts/ClerkProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
// src/contexts/ClerkContextProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ZIXJBK4O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-ZIXJBK4O.mjs [app-client] (ecmascript)");
// src/isomorphicClerk.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/clerkEventBus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-client] (ecmascript)");
;
;
// src/polyfills.ts
if (typeof window !== "undefined" && !window.global) {
    window.global = typeof global === "undefined" ? window : global;
}
;
;
;
;
var assertSingleChild = (children)=>(name)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.only(children);
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multipleChildrenInButtonComponent"])(name));
        }
    };
var normalizeWithDefaultValue = (children, defaultText)=>{
    if (!children) {
        children = defaultText;
    }
    if (typeof children === "string") {
        children = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", null, children);
    }
    return children;
};
var safeExecute = (cb)=>(...args)=>{
        if (cb && typeof cb === "function") {
            return cb(...args);
        }
    };
// src/utils/isConstructor.ts
function isConstructor(f) {
    return typeof f === "function";
}
;
var counts = /* @__PURE__ */ new Map();
function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useMaxAllowedInstancesGuard.useEffect": ()=>{
            const count = counts.get(name) || 0;
            if (count == maxCount) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(error);
            }
            counts.set(name, count + 1);
            return ({
                "useMaxAllowedInstancesGuard.useEffect": ()=>{
                    counts.set(name, (counts.get(name) || 1) - 1);
                }
            })["useMaxAllowedInstancesGuard.useEffect"];
        }
    }["useMaxAllowedInstancesGuard.useEffect"], []);
}
function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
    const Hoc = (props)=>{
        useMaxAllowedInstancesGuard(name, error);
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(WrappedComponent, {
            ...props
        });
    };
    Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
    return Hoc;
}
;
;
var useCustomElementPortal = (elements)=>{
    const initialState = Array(elements.length).fill(null);
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    return elements.map((el, index)=>({
            id: el.id,
            mount: (node)=>setNodes((prevState)=>prevState.map((n, i)=>i === index ? node : n)),
            unmount: ()=>setNodes((prevState)=>prevState.map((n, i)=>i === index ? null : n)),
            portal: ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, nodes[index] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(el.component, nodes[index]) : null)
        }));
};
;
;
;
var isThatComponent = (v, component)=>{
    return !!v && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(v) && (v == null ? void 0 : v.type) === component;
};
// src/utils/useCustomPages.tsx
var useUserProfileCustomPages = (children, options)=>{
    const reorderItemsLabels = [
        "account",
        "security"
    ];
    return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: UserProfileLink,
        PageComponent: UserProfilePage,
        MenuItemsComponent: MenuItems,
        componentName: "UserProfile"
    }, options);
};
var useOrganizationProfileCustomPages = (children, options)=>{
    const reorderItemsLabels = [
        "general",
        "members"
    ];
    return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: OrganizationProfileLink,
        PageComponent: OrganizationProfilePage,
        componentName: "OrganizationProfile"
    }, options);
};
var useSanitizedChildren = (children)=>{
    const sanitizedChildren = [];
    const excludedComponents = [
        OrganizationProfileLink,
        OrganizationProfilePage,
        MenuItems,
        UserProfilePage,
        UserProfileLink
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!excludedComponents.some((component)=>isThatComponent(child, component))) {
            sanitizedChildren.push(child);
        }
    });
    return sanitizedChildren;
};
var useCustomPages = (params, options)=>{
    const { children, LinkComponent, PageComponent, MenuItemsComponent, reorderItemsLabels, componentName } = params;
    const { allowForAnyChildren = false } = options || {};
    const validChildren = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!isThatComponent(child, PageComponent) && !isThatComponent(child, LinkComponent) && !isThatComponent(child, MenuItemsComponent)) {
            if (child && !allowForAnyChildren) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customPagesIgnoredComponent"])(componentName));
            }
            return;
        }
        const { props } = child;
        const { children: children2, label, url, labelIcon } = props;
        if (isThatComponent(child, PageComponent)) {
            if (isReorderItem(props, reorderItemsLabels)) {
                validChildren.push({
                    label
                });
            } else if (isCustomPage(props)) {
                validChildren.push({
                    label,
                    labelIcon,
                    children: children2,
                    url
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customPageWrongProps"])(componentName));
                return;
            }
        }
        if (isThatComponent(child, LinkComponent)) {
            if (isExternalLink(props)) {
                validChildren.push({
                    label,
                    labelIcon,
                    url
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customLinkWrongProps"])(componentName));
                return;
            }
        }
    });
    const customPageContents = [];
    const customPageLabelIcons = [];
    const customLinkLabelIcons = [];
    validChildren.forEach((cp, index)=>{
        if (isCustomPage(cp)) {
            customPageContents.push({
                component: cp.children,
                id: index
            });
            customPageLabelIcons.push({
                component: cp.labelIcon,
                id: index
            });
            return;
        }
        if (isExternalLink(cp)) {
            customLinkLabelIcons.push({
                component: cp.labelIcon,
                id: index
            });
        }
    });
    const customPageContentsPortals = useCustomElementPortal(customPageContents);
    const customPageLabelIconsPortals = useCustomElementPortal(customPageLabelIcons);
    const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
    const customPages = [];
    const customPagesPortals = [];
    validChildren.forEach((cp, index)=>{
        if (isReorderItem(cp, reorderItemsLabels)) {
            customPages.push({
                label: cp.label
            });
            return;
        }
        if (isCustomPage(cp)) {
            const { portal: contentPortal, mount, unmount } = customPageContentsPortals.find((p)=>p.id === index);
            const { portal: labelPortal, mount: mountIcon, unmount: unmountIcon } = customPageLabelIconsPortals.find((p)=>p.id === index);
            customPages.push({
                label: cp.label,
                url: cp.url,
                mount,
                unmount,
                mountIcon,
                unmountIcon
            });
            customPagesPortals.push(contentPortal);
            customPagesPortals.push(labelPortal);
            return;
        }
        if (isExternalLink(cp)) {
            const { portal: labelPortal, mount: mountIcon, unmount: unmountIcon } = customLinkLabelIconsPortals.find((p)=>p.id === index);
            customPages.push({
                label: cp.label,
                url: cp.url,
                mountIcon,
                unmountIcon
            });
            customPagesPortals.push(labelPortal);
            return;
        }
    });
    return {
        customPages,
        customPagesPortals
    };
};
var isReorderItem = (childProps, validItems)=>{
    const { children, label, url, labelIcon } = childProps;
    return !children && !url && !labelIcon && validItems.some((v)=>v === label);
};
var isCustomPage = (childProps)=>{
    const { children, label, url, labelIcon } = childProps;
    return !!children && !!url && !!labelIcon && !!label;
};
var isExternalLink = (childProps)=>{
    const { children, label, url, labelIcon } = childProps;
    return !children && !!url && !!labelIcon && !!label;
};
;
;
var useUserButtonCustomMenuItems = (children)=>{
    const reorderItemsLabels = [
        "manageAccount",
        "signOut"
    ];
    return useCustomMenuItems({
        children,
        reorderItemsLabels,
        MenuItemsComponent: MenuItems,
        MenuActionComponent: MenuAction,
        MenuLinkComponent: MenuLink,
        UserProfileLinkComponent: UserProfileLink,
        UserProfilePageComponent: UserProfilePage
    });
};
var useCustomMenuItems = ({ children, MenuItemsComponent, MenuActionComponent, MenuLinkComponent, UserProfileLinkComponent, UserProfilePageComponent, reorderItemsLabels })=>{
    const validChildren = [];
    const customMenuItems = [];
    const customMenuItemsPortals = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!isThatComponent(child, MenuItemsComponent) && !isThatComponent(child, UserProfileLinkComponent) && !isThatComponent(child, UserProfilePageComponent)) {
            if (child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonIgnoredComponent"]);
            }
            return;
        }
        if (isThatComponent(child, UserProfileLinkComponent) || isThatComponent(child, UserProfilePageComponent)) {
            return;
        }
        const { props } = child;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(props.children, (child2)=>{
            if (!isThatComponent(child2, MenuActionComponent) && !isThatComponent(child2, MenuLinkComponent)) {
                if (child2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customMenuItemsIgnoredComponent"]);
                }
                return;
            }
            const { props: props2 } = child2;
            const { label, labelIcon, href, onClick, open } = props2;
            if (isThatComponent(child2, MenuActionComponent)) {
                if (isReorderItem2(props2, reorderItemsLabels)) {
                    validChildren.push({
                        label
                    });
                } else if (isCustomMenuItem(props2)) {
                    const baseItem = {
                        label,
                        labelIcon
                    };
                    if (onClick !== void 0) {
                        validChildren.push({
                            ...baseItem,
                            onClick
                        });
                    } else if (open !== void 0) {
                        validChildren.push({
                            ...baseItem,
                            open: open.startsWith("/") ? open : `/${open}`
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])("Custom menu item must have either onClick or open property");
                        return;
                    }
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemsActionWrongsProps"]);
                    return;
                }
            }
            if (isThatComponent(child2, MenuLinkComponent)) {
                if (isExternalLink2(props2)) {
                    validChildren.push({
                        label,
                        labelIcon,
                        href
                    });
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemLinkWrongProps"]);
                    return;
                }
            }
        });
    });
    const customMenuItemLabelIcons = [];
    const customLinkLabelIcons = [];
    validChildren.forEach((mi, index)=>{
        if (isCustomMenuItem(mi)) {
            customMenuItemLabelIcons.push({
                component: mi.labelIcon,
                id: index
            });
        }
        if (isExternalLink2(mi)) {
            customLinkLabelIcons.push({
                component: mi.labelIcon,
                id: index
            });
        }
    });
    const customMenuItemLabelIconsPortals = useCustomElementPortal(customMenuItemLabelIcons);
    const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
    validChildren.forEach((mi, index)=>{
        if (isReorderItem2(mi, reorderItemsLabels)) {
            customMenuItems.push({
                label: mi.label
            });
        }
        if (isCustomMenuItem(mi)) {
            const { portal: iconPortal, mount: mountIcon, unmount: unmountIcon } = customMenuItemLabelIconsPortals.find((p)=>p.id === index);
            const menuItem = {
                label: mi.label,
                mountIcon,
                unmountIcon
            };
            if ("onClick" in mi) {
                menuItem.onClick = mi.onClick;
            } else if ("open" in mi) {
                menuItem.open = mi.open;
            }
            customMenuItems.push(menuItem);
            customMenuItemsPortals.push(iconPortal);
        }
        if (isExternalLink2(mi)) {
            const { portal: iconPortal, mount: mountIcon, unmount: unmountIcon } = customLinkLabelIconsPortals.find((p)=>p.id === index);
            customMenuItems.push({
                label: mi.label,
                href: mi.href,
                mountIcon,
                unmountIcon
            });
            customMenuItemsPortals.push(iconPortal);
        }
    });
    return {
        customMenuItems,
        customMenuItemsPortals
    };
};
var isReorderItem2 = (childProps, validItems)=>{
    const { children, label, onClick, labelIcon } = childProps;
    return !children && !onClick && !labelIcon && validItems.some((v)=>v === label);
};
var isCustomMenuItem = (childProps)=>{
    const { label, labelIcon, onClick, open } = childProps;
    return !!labelIcon && !!label && (typeof onClick === "function" || typeof open === "string");
};
var isExternalLink2 = (childProps)=>{
    const { label, href, labelIcon } = childProps;
    return !!href && !!labelIcon && !!label;
};
;
function waitForElementChildren(options) {
    const { root = document == null ? void 0 : document.body, selector, timeout = 0 } = options;
    return new Promise((resolve, reject)=>{
        if (!root) {
            reject(new Error("No root element provided"));
            return;
        }
        let elementToWatch = root;
        if (selector) {
            elementToWatch = root == null ? void 0 : root.querySelector(selector);
        }
        const isElementAlreadyPresent = (elementToWatch == null ? void 0 : elementToWatch.childElementCount) && elementToWatch.childElementCount > 0;
        if (isElementAlreadyPresent) {
            resolve();
            return;
        }
        const observer = new MutationObserver((mutationsList)=>{
            for (const mutation of mutationsList){
                if (mutation.type === "childList") {
                    if (!elementToWatch && selector) {
                        elementToWatch = root == null ? void 0 : root.querySelector(selector);
                    }
                    if ((elementToWatch == null ? void 0 : elementToWatch.childElementCount) && elementToWatch.childElementCount > 0) {
                        observer.disconnect();
                        resolve();
                        return;
                    }
                }
            }
        });
        observer.observe(root, {
            childList: true,
            subtree: true
        });
        if (timeout > 0) {
            setTimeout(()=>{
                observer.disconnect();
                reject(new Error(`Timeout waiting for element children`));
            }, timeout);
        }
    });
}
function useWaitForComponentMount(component) {
    const watcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("rendering");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWaitForComponentMount.useEffect": ()=>{
            if (!component) {
                throw new Error("Clerk: no component name provided, unable to detect mount.");
            }
            if (typeof window !== "undefined" && !watcherRef.current) {
                watcherRef.current = waitForElementChildren({
                    selector: `[data-clerk-component="${component}"]`
                }).then({
                    "useWaitForComponentMount.useEffect": ()=>{
                        setStatus("rendered");
                    }
                }["useWaitForComponentMount.useEffect"]).catch({
                    "useWaitForComponentMount.useEffect": ()=>{
                        setStatus("error");
                    }
                }["useWaitForComponentMount.useEffect"]);
            }
        }
    }["useWaitForComponentMount.useEffect"], [
        component
    ]);
    return status;
}
;
;
;
var isMountProps = (props)=>{
    return "mount" in props;
};
var isOpenProps = (props)=>{
    return "open" in props;
};
var stripMenuItemIconHandlers = (menuItems)=>{
    return menuItems == null ? void 0 : menuItems.map(({ mountIcon, unmountIcon, ...rest })=>rest);
};
var ClerkHostRenderer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PureComponent {
    constructor(){
        super(...arguments);
        this.rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
    }
    componentDidUpdate(_prevProps) {
        var _a, _b, _c, _d;
        if (!isMountProps(_prevProps) || !isMountProps(this.props)) {
            return;
        }
        const prevProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["without"])(_prevProps.props, "customPages", "customMenuItems", "children");
        const newProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["without"])(this.props.props, "customPages", "customMenuItems", "children");
        const customPagesChanged = ((_a = prevProps.customPages) == null ? void 0 : _a.length) !== ((_b = newProps.customPages) == null ? void 0 : _b.length);
        const customMenuItemsChanged = ((_c = prevProps.customMenuItems) == null ? void 0 : _c.length) !== ((_d = newProps.customMenuItems) == null ? void 0 : _d.length);
        const prevMenuItemsWithoutHandlers = stripMenuItemIconHandlers(_prevProps.props.customMenuItems);
        const newMenuItemsWithoutHandlers = stripMenuItemIconHandlers(this.props.props.customMenuItems);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeeplyEqual"])(prevProps, newProps) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeeplyEqual"])(prevMenuItemsWithoutHandlers, newMenuItemsWithoutHandlers) || customPagesChanged || customMenuItemsChanged) {
            if (this.rootRef.current) {
                this.props.updateProps({
                    node: this.rootRef.current,
                    props: this.props.props
                });
            }
        }
    }
    componentDidMount() {
        if (this.rootRef.current) {
            if (isMountProps(this.props)) {
                this.props.mount(this.rootRef.current, this.props.props);
            }
            if (isOpenProps(this.props)) {
                this.props.open(this.props.props);
            }
        }
    }
    componentWillUnmount() {
        if (this.rootRef.current) {
            if (isMountProps(this.props)) {
                this.props.unmount(this.rootRef.current);
            }
            if (isOpenProps(this.props)) {
                this.props.close();
            }
        }
    }
    render() {
        const { hideRootHtmlElement = false } = this.props;
        const rootAttributes = {
            ref: this.rootRef,
            ...this.props.rootProps,
            ...this.props.component && {
                "data-clerk-component": this.props.component
            }
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, !hideRootHtmlElement && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ...rootAttributes
        }), this.props.children);
    }
};
// src/components/uiComponents.tsx
var CustomPortalsRenderer = (props)=>{
    var _a, _b;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, (_a = props == null ? void 0 : props.customPagesPortals) == null ? void 0 : _a.map((portal, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(portal, {
            key: index
        })), (_b = props == null ? void 0 : props.customMenuItemsPortals) == null ? void 0 : _b.map((portal, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(portal, {
            key: index
        })));
};
var SignIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountSignIn,
        unmount: clerk.unmountSignIn,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "SignIn",
    renderWhileLoading: true
});
var SignUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountSignUp,
        unmount: clerk.unmountSignUp,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "SignUp",
    renderWhileLoading: true
});
function UserProfilePage({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userProfilePageRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function UserProfileLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userProfileLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
var _UserProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountUserProfile,
        unmount: clerk.unmountUserProfile,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            customPages
        },
        rootProps: rendererRootProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    })));
}, {
    component: "UserProfile",
    renderWhileLoading: true
});
var UserProfile = Object.assign(_UserProfile, {
    Page: UserProfilePage,
    Link: UserProfileLink
});
var UserButtonContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    mount: ()=>{},
    unmount: ()=>{},
    updateProps: ()=>{}
});
var _UserButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children, {
        allowForAnyChildren: !!props.__experimental_asProvider
    });
    const userProfileProps = Object.assign(props.userProfileProps || {}, {
        customPages
    });
    const { customMenuItems, customMenuItemsPortals } = useUserButtonCustomMenuItems(props.children);
    const sanitizedChildren = useSanitizedChildren(props.children);
    const passableProps = {
        mount: clerk.mountUserButton,
        unmount: clerk.unmountUserButton,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            userProfileProps,
            customMenuItems
        }
    };
    const portalProps = {
        customPagesPortals,
        customMenuItemsPortals
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserButtonContext.Provider, {
        value: passableProps
    }, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        ...passableProps,
        hideRootHtmlElement: !!props.__experimental_asProvider,
        rootProps: rendererRootProps
    }, props.__experimental_asProvider ? sanitizedChildren : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        ...portalProps
    })));
}, {
    component: "UserButton",
    renderWhileLoading: true
});
function MenuItems({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemsRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function MenuAction({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuActionRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function MenuLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function UserButtonOutlet(outletProps) {
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserButtonContext);
    const portalProps = {
        ...providerProps,
        props: {
            ...providerProps.props,
            ...outletProps
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...portalProps
    });
}
var UserButton = Object.assign(_UserButton, {
    UserProfilePage,
    UserProfileLink,
    MenuItems,
    Action: MenuAction,
    Link: MenuLink,
    __experimental_Outlet: UserButtonOutlet
});
function OrganizationProfilePage({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["organizationProfilePageRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function OrganizationProfileLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["organizationProfileLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
var _OrganizationProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountOrganizationProfile,
        unmount: clerk.unmountOrganizationProfile,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            customPages
        },
        rootProps: rendererRootProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    })));
}, {
    component: "OrganizationProfile",
    renderWhileLoading: true
});
var OrganizationProfile = Object.assign(_OrganizationProfile, {
    Page: OrganizationProfilePage,
    Link: OrganizationProfileLink
});
var CreateOrganization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountCreateOrganization,
        unmount: clerk.unmountCreateOrganization,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "CreateOrganization",
    renderWhileLoading: true
});
var OrganizationSwitcherContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    mount: ()=>{},
    unmount: ()=>{},
    updateProps: ()=>{}
});
var _OrganizationSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children, {
        allowForAnyChildren: !!props.__experimental_asProvider
    });
    const organizationProfileProps = Object.assign(props.organizationProfileProps || {}, {
        customPages
    });
    const sanitizedChildren = useSanitizedChildren(props.children);
    const passableProps = {
        mount: clerk.mountOrganizationSwitcher,
        unmount: clerk.unmountOrganizationSwitcher,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            organizationProfileProps
        },
        rootProps: rendererRootProps,
        component
    };
    clerk.__experimental_prefetchOrganizationSwitcher();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationSwitcherContext.Provider, {
        value: passableProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...passableProps,
        hideRootHtmlElement: !!props.__experimental_asProvider
    }, props.__experimental_asProvider ? sanitizedChildren : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    }))));
}, {
    component: "OrganizationSwitcher",
    renderWhileLoading: true
});
function OrganizationSwitcherOutlet(outletProps) {
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OrganizationSwitcherContext);
    const portalProps = {
        ...providerProps,
        props: {
            ...providerProps.props,
            ...outletProps
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...portalProps
    });
}
var OrganizationSwitcher = Object.assign(_OrganizationSwitcher, {
    OrganizationProfilePage,
    OrganizationProfileLink,
    __experimental_Outlet: OrganizationSwitcherOutlet
});
var OrganizationList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountOrganizationList,
        unmount: clerk.unmountOrganizationList,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "OrganizationList",
    renderWhileLoading: true
});
var GoogleOneTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        open: clerk.openGoogleOneTap,
        close: clerk.closeGoogleOneTap,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "GoogleOneTap",
    renderWhileLoading: true
});
var Waitlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountWaitlist,
        unmount: clerk.unmountWaitlist,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "Waitlist",
    renderWhileLoading: true
});
var PricingTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountPricingTable,
        unmount: clerk.unmountPricingTable,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "PricingTable",
    renderWhileLoading: true
});
;
var SignInButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { signUpFallbackRedirectUrl, forceRedirectUrl, fallbackRedirectUrl, signUpForceRedirectUrl, mode, initialValues, withSignUp, oauthFlow, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in");
    const child = assertSingleChild(children)("SignInButton");
    const clickHandler = ()=>{
        const opts = {
            forceRedirectUrl,
            fallbackRedirectUrl,
            signUpFallbackRedirectUrl,
            signUpForceRedirectUrl,
            initialValues,
            withSignUp,
            oauthFlow
        };
        if (mode === "modal") {
            return clerk.openSignIn({
                ...opts,
                appearance: props.appearance
            });
        }
        return clerk.redirectToSignIn({
            ...opts,
            signInFallbackRedirectUrl: fallbackRedirectUrl,
            signInForceRedirectUrl: forceRedirectUrl
        });
    };
    const wrappedChildClickHandler = async (e)=>{
        if (child && typeof child === "object" && "props" in child) {
            await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignInButton",
    renderWhileLoading: true
});
;
var SignUpButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { fallbackRedirectUrl, forceRedirectUrl, signInFallbackRedirectUrl, signInForceRedirectUrl, mode, unsafeMetadata, initialValues, oauthFlow, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign up");
    const child = assertSingleChild(children)("SignUpButton");
    const clickHandler = ()=>{
        const opts = {
            fallbackRedirectUrl,
            forceRedirectUrl,
            signInFallbackRedirectUrl,
            signInForceRedirectUrl,
            unsafeMetadata,
            initialValues,
            oauthFlow
        };
        if (mode === "modal") {
            return clerk.openSignUp({
                ...opts,
                appearance: props.appearance
            });
        }
        return clerk.redirectToSignUp({
            ...opts,
            signUpFallbackRedirectUrl: fallbackRedirectUrl,
            signUpForceRedirectUrl: forceRedirectUrl
        });
    };
    const wrappedChildClickHandler = async (e)=>{
        if (child && typeof child === "object" && "props" in child) {
            await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignUpButton",
    renderWhileLoading: true
});
;
var SignOutButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { redirectUrl = "/", signOutOptions, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign out");
    const child = assertSingleChild(children)("SignOutButton");
    const clickHandler = ()=>clerk.signOut({
            redirectUrl,
            ...signOutOptions
        });
    const wrappedChildClickHandler = async (e)=>{
        await safeExecute(child.props.onClick)(e);
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignOutButton",
    renderWhileLoading: true
});
;
var SignInWithMetamaskButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { redirectUrl, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in with Metamask");
    const child = assertSingleChild(children)("SignInWithMetamaskButton");
    const clickHandler = async ()=>{
        async function authenticate() {
            await clerk.authenticateWithMetamask({
                redirectUrl: redirectUrl || void 0
            });
        }
        void authenticate();
    };
    const wrappedChildClickHandler = async (e)=>{
        await safeExecute(child.props.onClick)(e);
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignInWithMetamask",
    renderWhileLoading: true
});
;
;
;
;
;
;
;
;
;
if (typeof globalThis.__BUILD_DISABLE_RHC__ === "undefined") {
    globalThis.__BUILD_DISABLE_RHC__ = false;
}
var SDK_METADATA = {
    name: "@clerk/clerk-react",
    version: "5.31.9",
    environment: ("TURBOPACK compile-time value", "development")
};
var _status, _domain, _proxyUrl, _publishableKey, _eventBus, _instance, _IsomorphicClerk_instances, waitForClerkJS_fn;
var _IsomorphicClerk = class _IsomorphicClerk {
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _IsomorphicClerk_instances);
        this.clerkjs = null;
        this.preopenOneTap = null;
        this.preopenUserVerification = null;
        this.preopenSignIn = null;
        this.preopenCheckout = null;
        this.preopenPlanDetails = null;
        this.preopenSignUp = null;
        this.preopenUserProfile = null;
        this.preopenOrganizationProfile = null;
        this.preopenCreateOrganization = null;
        this.preOpenWaitlist = null;
        this.premountSignInNodes = /* @__PURE__ */ new Map();
        this.premountSignUpNodes = /* @__PURE__ */ new Map();
        this.premountUserProfileNodes = /* @__PURE__ */ new Map();
        this.premountUserButtonNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationProfileNodes = /* @__PURE__ */ new Map();
        this.premountCreateOrganizationNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationSwitcherNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationListNodes = /* @__PURE__ */ new Map();
        this.premountMethodCalls = /* @__PURE__ */ new Map();
        this.premountWaitlistNodes = /* @__PURE__ */ new Map();
        this.premountPricingTableNodes = /* @__PURE__ */ new Map();
        this.premountOAuthConsentNodes = /* @__PURE__ */ new Map();
        // A separate Map of `addListener` method calls to handle multiple listeners.
        this.premountAddListenerCalls = /* @__PURE__ */ new Map();
        this.loadedListeners = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _status, "loading");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _domain);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _proxyUrl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _publishableKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _eventBus, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClerkEventBus"])());
        this.buildSignInUrl = (opts)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignInUrl(opts)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildSignInUrl", callback);
            }
        };
        this.buildSignUpUrl = (opts)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignUpUrl(opts)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildSignUpUrl", callback);
            }
        };
        this.buildAfterSignInUrl = (...args)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignInUrl(...args)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignInUrl", callback);
            }
        };
        this.buildAfterSignUpUrl = (...args)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignUpUrl(...args)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignUpUrl", callback);
            }
        };
        this.buildAfterSignOutUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignOutUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignOutUrl", callback);
            }
        };
        this.buildNewSubscriptionRedirectUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildNewSubscriptionRedirectUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl", callback);
            }
        };
        this.buildAfterMultiSessionSingleSignOutUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterMultiSessionSingleSignOutUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", callback);
            }
        };
        this.buildUserProfileUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildUserProfileUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildUserProfileUrl", callback);
            }
        };
        this.buildCreateOrganizationUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildCreateOrganizationUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildCreateOrganizationUrl", callback);
            }
        };
        this.buildOrganizationProfileUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildOrganizationProfileUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildOrganizationProfileUrl", callback);
            }
        };
        this.buildWaitlistUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildWaitlistUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildWaitlistUrl", callback);
            }
        };
        this.buildUrlWithAuth = (to)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildUrlWithAuth(to)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildUrlWithAuth", callback);
            }
        };
        this.handleUnauthenticated = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.handleUnauthenticated();
            };
            if (this.clerkjs && this.loaded) {
                void callback();
            } else {
                this.premountMethodCalls.set("handleUnauthenticated", callback);
            }
        };
        this.on = (...args)=>{
            var _a;
            if ((_a = this.clerkjs) == null ? void 0 : _a.on) {
                return this.clerkjs.on(...args);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).on(...args);
            }
        };
        this.off = (...args)=>{
            var _a;
            if ((_a = this.clerkjs) == null ? void 0 : _a.off) {
                return this.clerkjs.off(...args);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).off(...args);
            }
        };
        /**
     * @deprecated Please use `addStatusListener`. This api will be removed in the next major.
     */ this.addOnLoaded = (cb)=>{
            this.loadedListeners.push(cb);
            if (this.loaded) {
                this.emitLoaded();
            }
        };
        /**
     * @deprecated Please use `__internal_setStatus`. This api will be removed in the next major.
     */ this.emitLoaded = ()=>{
            this.loadedListeners.forEach((cb)=>cb());
            this.loadedListeners = [];
        };
        this.beforeLoad = (clerkjs)=>{
            if (!clerkjs) {
                throw new Error("Failed to hydrate latest Clerk JS");
            }
        };
        this.hydrateClerkJS = (clerkjs)=>{
            var _a;
            if (!clerkjs) {
                throw new Error("Failed to hydrate latest Clerk JS");
            }
            this.clerkjs = clerkjs;
            this.premountMethodCalls.forEach((cb)=>cb());
            this.premountAddListenerCalls.forEach((listenerHandlers, listener)=>{
                listenerHandlers.nativeUnsubscribe = clerkjs.addListener(listener);
            });
            (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).internal.retrieveListeners("status")) == null ? void 0 : _a.forEach((listener)=>{
                this.on("status", listener, {
                    notify: true
                });
            });
            if (this.preopenSignIn !== null) {
                clerkjs.openSignIn(this.preopenSignIn);
            }
            if (this.preopenCheckout !== null) {
                clerkjs.__internal_openCheckout(this.preopenCheckout);
            }
            if (this.preopenPlanDetails !== null) {
                clerkjs.__internal_openPlanDetails(this.preopenPlanDetails);
            }
            if (this.preopenSignUp !== null) {
                clerkjs.openSignUp(this.preopenSignUp);
            }
            if (this.preopenUserProfile !== null) {
                clerkjs.openUserProfile(this.preopenUserProfile);
            }
            if (this.preopenUserVerification !== null) {
                clerkjs.__internal_openReverification(this.preopenUserVerification);
            }
            if (this.preopenOneTap !== null) {
                clerkjs.openGoogleOneTap(this.preopenOneTap);
            }
            if (this.preopenOrganizationProfile !== null) {
                clerkjs.openOrganizationProfile(this.preopenOrganizationProfile);
            }
            if (this.preopenCreateOrganization !== null) {
                clerkjs.openCreateOrganization(this.preopenCreateOrganization);
            }
            if (this.preOpenWaitlist !== null) {
                clerkjs.openWaitlist(this.preOpenWaitlist);
            }
            this.premountSignInNodes.forEach((props, node)=>{
                clerkjs.mountSignIn(node, props);
            });
            this.premountSignUpNodes.forEach((props, node)=>{
                clerkjs.mountSignUp(node, props);
            });
            this.premountUserProfileNodes.forEach((props, node)=>{
                clerkjs.mountUserProfile(node, props);
            });
            this.premountUserButtonNodes.forEach((props, node)=>{
                clerkjs.mountUserButton(node, props);
            });
            this.premountOrganizationListNodes.forEach((props, node)=>{
                clerkjs.mountOrganizationList(node, props);
            });
            this.premountWaitlistNodes.forEach((props, node)=>{
                clerkjs.mountWaitlist(node, props);
            });
            this.premountPricingTableNodes.forEach((props, node)=>{
                clerkjs.mountPricingTable(node, props);
            });
            this.premountOAuthConsentNodes.forEach((props, node)=>{
                clerkjs.__internal_mountOAuthConsent(node, props);
            });
            if (typeof this.clerkjs.status === "undefined") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).emit(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, "ready");
            }
            this.emitLoaded();
            return this.clerkjs;
        };
        this.__unstable__updateProps = async (props)=>{
            const clerkjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
            if (clerkjs && "__unstable__updateProps" in clerkjs) {
                return clerkjs.__unstable__updateProps(props);
            }
        };
        this.__experimental_navigateToTask = async (params)=>{
            if (this.clerkjs) {
                return this.clerkjs.__experimental_navigateToTask(params);
            } else {
                return Promise.reject();
            }
        };
        /**
     * `setActive` can be used to set the active session and/or organization.
     */ this.setActive = (params)=>{
            if (this.clerkjs) {
                return this.clerkjs.setActive(params);
            } else {
                return Promise.reject();
            }
        };
        this.openSignIn = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openSignIn(props);
            } else {
                this.preopenSignIn = props;
            }
        };
        this.closeSignIn = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeSignIn();
            } else {
                this.preopenSignIn = null;
            }
        };
        this.__internal_openCheckout = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_openCheckout(props);
            } else {
                this.preopenCheckout = props;
            }
        };
        this.__internal_closeCheckout = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_closeCheckout();
            } else {
                this.preopenCheckout = null;
            }
        };
        this.__internal_openPlanDetails = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_openPlanDetails(props);
            } else {
                this.preopenPlanDetails = props;
            }
        };
        this.__internal_closePlanDetails = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_closePlanDetails();
            } else {
                this.preopenPlanDetails = null;
            }
        };
        this.__internal_openReverification = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_openReverification(props);
            } else {
                this.preopenUserVerification = props;
            }
        };
        this.__internal_closeReverification = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_closeReverification();
            } else {
                this.preopenUserVerification = null;
            }
        };
        this.openGoogleOneTap = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openGoogleOneTap(props);
            } else {
                this.preopenOneTap = props;
            }
        };
        this.closeGoogleOneTap = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeGoogleOneTap();
            } else {
                this.preopenOneTap = null;
            }
        };
        this.openUserProfile = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openUserProfile(props);
            } else {
                this.preopenUserProfile = props;
            }
        };
        this.closeUserProfile = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeUserProfile();
            } else {
                this.preopenUserProfile = null;
            }
        };
        this.openOrganizationProfile = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openOrganizationProfile(props);
            } else {
                this.preopenOrganizationProfile = props;
            }
        };
        this.closeOrganizationProfile = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeOrganizationProfile();
            } else {
                this.preopenOrganizationProfile = null;
            }
        };
        this.openCreateOrganization = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openCreateOrganization(props);
            } else {
                this.preopenCreateOrganization = props;
            }
        };
        this.closeCreateOrganization = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeCreateOrganization();
            } else {
                this.preopenCreateOrganization = null;
            }
        };
        this.openWaitlist = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openWaitlist(props);
            } else {
                this.preOpenWaitlist = props;
            }
        };
        this.closeWaitlist = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeWaitlist();
            } else {
                this.preOpenWaitlist = null;
            }
        };
        this.openSignUp = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openSignUp(props);
            } else {
                this.preopenSignUp = props;
            }
        };
        this.closeSignUp = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeSignUp();
            } else {
                this.preopenSignUp = null;
            }
        };
        this.mountSignIn = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountSignIn(node, props);
            } else {
                this.premountSignInNodes.set(node, props);
            }
        };
        this.unmountSignIn = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountSignIn(node);
            } else {
                this.premountSignInNodes.delete(node);
            }
        };
        this.mountSignUp = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountSignUp(node, props);
            } else {
                this.premountSignUpNodes.set(node, props);
            }
        };
        this.unmountSignUp = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountSignUp(node);
            } else {
                this.premountSignUpNodes.delete(node);
            }
        };
        this.mountUserProfile = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountUserProfile(node, props);
            } else {
                this.premountUserProfileNodes.set(node, props);
            }
        };
        this.unmountUserProfile = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountUserProfile(node);
            } else {
                this.premountUserProfileNodes.delete(node);
            }
        };
        this.mountOrganizationProfile = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountOrganizationProfile(node, props);
            } else {
                this.premountOrganizationProfileNodes.set(node, props);
            }
        };
        this.unmountOrganizationProfile = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountOrganizationProfile(node);
            } else {
                this.premountOrganizationProfileNodes.delete(node);
            }
        };
        this.mountCreateOrganization = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountCreateOrganization(node, props);
            } else {
                this.premountCreateOrganizationNodes.set(node, props);
            }
        };
        this.unmountCreateOrganization = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountCreateOrganization(node);
            } else {
                this.premountCreateOrganizationNodes.delete(node);
            }
        };
        this.mountOrganizationSwitcher = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountOrganizationSwitcher(node, props);
            } else {
                this.premountOrganizationSwitcherNodes.set(node, props);
            }
        };
        this.unmountOrganizationSwitcher = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountOrganizationSwitcher(node);
            } else {
                this.premountOrganizationSwitcherNodes.delete(node);
            }
        };
        this.__experimental_prefetchOrganizationSwitcher = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.__experimental_prefetchOrganizationSwitcher();
            };
            if (this.clerkjs && this.loaded) {
                void callback();
            } else {
                this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher", callback);
            }
        };
        this.mountOrganizationList = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountOrganizationList(node, props);
            } else {
                this.premountOrganizationListNodes.set(node, props);
            }
        };
        this.unmountOrganizationList = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountOrganizationList(node);
            } else {
                this.premountOrganizationListNodes.delete(node);
            }
        };
        this.mountUserButton = (node, userButtonProps)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountUserButton(node, userButtonProps);
            } else {
                this.premountUserButtonNodes.set(node, userButtonProps);
            }
        };
        this.unmountUserButton = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountUserButton(node);
            } else {
                this.premountUserButtonNodes.delete(node);
            }
        };
        this.mountWaitlist = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountWaitlist(node, props);
            } else {
                this.premountWaitlistNodes.set(node, props);
            }
        };
        this.unmountWaitlist = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountWaitlist(node);
            } else {
                this.premountWaitlistNodes.delete(node);
            }
        };
        this.mountPricingTable = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountPricingTable(node, props);
            } else {
                this.premountPricingTableNodes.set(node, props);
            }
        };
        this.unmountPricingTable = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountPricingTable(node);
            } else {
                this.premountPricingTableNodes.delete(node);
            }
        };
        this.__internal_mountOAuthConsent = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_mountOAuthConsent(node, props);
            } else {
                this.premountOAuthConsentNodes.set(node, props);
            }
        };
        this.__internal_unmountOAuthConsent = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_unmountOAuthConsent(node);
            } else {
                this.premountOAuthConsentNodes.delete(node);
            }
        };
        this.addListener = (listener)=>{
            if (this.clerkjs) {
                return this.clerkjs.addListener(listener);
            } else {
                const unsubscribe = ()=>{
                    var _a;
                    const listenerHandlers = this.premountAddListenerCalls.get(listener);
                    if (listenerHandlers) {
                        (_a = listenerHandlers.nativeUnsubscribe) == null ? void 0 : _a.call(listenerHandlers);
                        this.premountAddListenerCalls.delete(listener);
                    }
                };
                this.premountAddListenerCalls.set(listener, {
                    unsubscribe,
                    nativeUnsubscribe: void 0
                });
                return unsubscribe;
            }
        };
        this.navigate = (to)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.navigate(to);
            };
            if (this.clerkjs && this.loaded) {
                void callback();
            } else {
                this.premountMethodCalls.set("navigate", callback);
            }
        };
        this.redirectWithAuth = async (...args)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectWithAuth(...args);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectWithAuth", callback);
                return;
            }
        };
        this.redirectToSignIn = async (opts)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignIn(opts);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToSignIn", callback);
                return;
            }
        };
        this.redirectToSignUp = async (opts)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignUp(opts);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToSignUp", callback);
                return;
            }
        };
        this.redirectToUserProfile = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToUserProfile();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToUserProfile", callback);
                return;
            }
        };
        this.redirectToAfterSignUp = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignUp();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignUp", callback);
            }
        };
        this.redirectToAfterSignIn = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignIn();
            };
            if (this.clerkjs && this.loaded) {
                callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignIn", callback);
            }
        };
        this.redirectToAfterSignOut = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignOut();
            };
            if (this.clerkjs && this.loaded) {
                callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignOut", callback);
            }
        };
        this.redirectToOrganizationProfile = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToOrganizationProfile();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToOrganizationProfile", callback);
                return;
            }
        };
        this.redirectToCreateOrganization = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToCreateOrganization();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToCreateOrganization", callback);
                return;
            }
        };
        this.redirectToWaitlist = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToWaitlist();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToWaitlist", callback);
                return;
            }
        };
        this.handleRedirectCallback = async (params)=>{
            var _a;
            const callback = ()=>{
                var _a2;
                return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleRedirectCallback(params);
            };
            if (this.clerkjs && this.loaded) {
                void ((_a = callback()) == null ? void 0 : _a.catch(()=>{}));
            } else {
                this.premountMethodCalls.set("handleRedirectCallback", callback);
            }
        };
        this.handleGoogleOneTapCallback = async (signInOrUp, params)=>{
            var _a;
            const callback = ()=>{
                var _a2;
                return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleGoogleOneTapCallback(signInOrUp, params);
            };
            if (this.clerkjs && this.loaded) {
                void ((_a = callback()) == null ? void 0 : _a.catch(()=>{}));
            } else {
                this.premountMethodCalls.set("handleGoogleOneTapCallback", callback);
            }
        };
        this.handleEmailLinkVerification = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.handleEmailLinkVerification(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("handleEmailLinkVerification", callback);
            }
        };
        this.authenticateWithMetamask = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithMetamask(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithMetamask", callback);
            }
        };
        this.authenticateWithCoinbaseWallet = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithCoinbaseWallet(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithCoinbaseWallet", callback);
            }
        };
        this.authenticateWithOKXWallet = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithOKXWallet(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithOKXWallet", callback);
            }
        };
        this.authenticateWithWeb3 = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithWeb3(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithWeb3", callback);
            }
        };
        this.authenticateWithGoogleOneTap = async (params)=>{
            const clerkjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
            return clerkjs.authenticateWithGoogleOneTap(params);
        };
        this.createOrganization = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.createOrganization(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("createOrganization", callback);
            }
        };
        this.getOrganization = async (organizationId)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.getOrganization(organizationId);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("getOrganization", callback);
            }
        };
        this.joinWaitlist = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.joinWaitlist(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("joinWaitlist", callback);
            }
        };
        this.signOut = async (...args)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.signOut(...args);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("signOut", callback);
            }
        };
        const { Clerk = null, publishableKey } = options || {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _publishableKey, publishableKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _proxyUrl, options == null ? void 0 : options.proxyUrl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _domain, options == null ? void 0 : options.domain);
        this.options = options;
        this.Clerk = Clerk;
        this.mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inBrowser"])() ? "browser" : "server";
        if (!this.options.sdkMetadata) {
            this.options.sdkMetadata = SDK_METADATA;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).emit(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, "loading");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).prioritizedOn(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, (status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _status, status));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey)) {
            void this.loadClerkJS();
        }
    }
    get publishableKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey);
    }
    get loaded() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.loaded) || false;
    }
    get status() {
        var _a;
        if (!this.clerkjs) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _status);
        }
        return ((_a = this.clerkjs) == null ? void 0 : _a.status) || /**
     * Support older clerk-js versions.
     * If clerk-js is available but `.status` is missing it we need to fallback to `.loaded`.
     * Since "degraded" an "error" did not exist before,
     * map "loaded" to "ready" and "not loaded" to "loading".
     */ (this.clerkjs.loaded ? "ready" : "loading");
    }
    static getOrCreateInstance(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inBrowser"])() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance) || options.Clerk && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance).Clerk !== options.Clerk || // Allow hot swapping PKs on the client
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance).publishableKey !== options.publishableKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _instance, new _IsomorphicClerk(options));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance);
    }
    static clearInstance() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _instance, null);
    }
    get domain() {
        if (typeof window !== "undefined" && window.location) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleValueOrFn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain), new URL(window.location.href), "");
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain) === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain) || "";
    }
    get proxyUrl() {
        if (typeof window !== "undefined" && window.location) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleValueOrFn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl), new URL(window.location.href), "");
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl) === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl) || "";
    }
    /**
   * Accesses private options from the `Clerk` instance and defaults to
   * `IsomorphicClerk` options when in SSR context.
   *  @internal
   */ __internal_getOption(key) {
        var _a, _b;
        return ((_a = this.clerkjs) == null ? void 0 : _a.__internal_getOption) ? (_b = this.clerkjs) == null ? void 0 : _b.__internal_getOption(key) : this.options[key];
    }
    get sdkMetadata() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.sdkMetadata) || this.options.sdkMetadata || void 0;
    }
    get instanceType() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.instanceType;
    }
    get frontendApi() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.frontendApi) || "";
    }
    get isStandardBrowser() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.isStandardBrowser) || this.options.standardBrowser || false;
    }
    get isSatellite() {
        if (typeof window !== "undefined" && window.location) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleValueOrFn"])(this.options.isSatellite, new URL(window.location.href), false);
        }
        if (typeof this.options.isSatellite === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return false;
    }
    async loadClerkJS() {
        var _a;
        if (this.mode !== "browser" || this.loaded) {
            return;
        }
        if (typeof window !== "undefined") {
            window.__clerk_publishable_key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey);
            window.__clerk_proxy_url = this.proxyUrl;
            window.__clerk_domain = this.domain;
        }
        try {
            if (this.Clerk) {
                let c;
                if (isConstructor(this.Clerk)) {
                    c = new this.Clerk((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey), {
                        proxyUrl: this.proxyUrl,
                        domain: this.domain
                    });
                    this.beforeLoad(c);
                    await c.load(this.options);
                } else {
                    c = this.Clerk;
                    if (!c.loaded) {
                        this.beforeLoad(c);
                        await c.load(this.options);
                    }
                }
                global.Clerk = c;
            } else if (!__BUILD_DISABLE_RHC__) {
                if (!global.Clerk) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadClerkJsScript"])({
                        ...this.options,
                        publishableKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey),
                        proxyUrl: this.proxyUrl,
                        domain: this.domain,
                        nonce: this.options.nonce
                    });
                }
                if (!global.Clerk) {
                    throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
                }
                this.beforeLoad(global.Clerk);
                await global.Clerk.load(this.options);
            }
            if ((_a = global.Clerk) == null ? void 0 : _a.loaded) {
                return this.hydrateClerkJS(global.Clerk);
            }
            return;
        } catch (err) {
            const error = err;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).emit(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, "error");
            console.error(error.stack || error.message || error);
            return;
        }
    }
    get version() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.version;
    }
    get client() {
        if (this.clerkjs) {
            return this.clerkjs.client;
        } else {
            return void 0;
        }
    }
    get session() {
        if (this.clerkjs) {
            return this.clerkjs.session;
        } else {
            return void 0;
        }
    }
    get user() {
        if (this.clerkjs) {
            return this.clerkjs.user;
        } else {
            return void 0;
        }
    }
    get organization() {
        if (this.clerkjs) {
            return this.clerkjs.organization;
        } else {
            return void 0;
        }
    }
    get telemetry() {
        if (this.clerkjs) {
            return this.clerkjs.telemetry;
        } else {
            return void 0;
        }
    }
    get __unstable__environment() {
        if (this.clerkjs) {
            return this.clerkjs.__unstable__environment;
        } else {
            return void 0;
        }
    }
    get isSignedIn() {
        if (this.clerkjs) {
            return this.clerkjs.isSignedIn;
        } else {
            return false;
        }
    }
    get billing() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.billing;
    }
    __unstable__setEnvironment(...args) {
        if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs) {
            this.clerkjs.__unstable__setEnvironment(args);
        } else {
            return void 0;
        }
    }
};
_status = new WeakMap();
_domain = new WeakMap();
_proxyUrl = new WeakMap();
_publishableKey = new WeakMap();
_eventBus = new WeakMap();
_instance = new WeakMap();
_IsomorphicClerk_instances = new WeakSet();
waitForClerkJS_fn = function() {
    return new Promise((resolve)=>{
        this.addOnLoaded(()=>resolve(this.clerkjs));
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(_IsomorphicClerk, _instance);
var IsomorphicClerk = _IsomorphicClerk;
// src/contexts/ClerkContextProvider.tsx
function ClerkContextProvider(props) {
    const { isomorphicClerkOptions, initialState, children } = props;
    const { isomorphicClerk: clerk, clerkStatus } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
        organization: clerk.organization
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ClerkContextProvider.useEffect": ()=>{
            return clerk.addListener({
                "ClerkContextProvider.useEffect": (e)=>setState({
                        ...e
                    })
            }["ClerkContextProvider.useEffect"]);
        }
    }["ClerkContextProvider.useEffect"], []);
    const derivedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ZIXJBK4O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveState"])(clerk.loaded, state, initialState);
    const clerkCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[clerkCtx]": ()=>({
                value: clerk
            })
    }["ClerkContextProvider.useMemo[clerkCtx]"], [
        // Only update the clerk reference on status change
        clerkStatus
    ]);
    const clientCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[clientCtx]": ()=>({
                value: state.client
            })
    }["ClerkContextProvider.useMemo[clientCtx]"], [
        state.client
    ]);
    const { sessionId, sessionStatus, sessionClaims, session, userId, user, orgId, actor, organization, orgRole, orgSlug, orgPermissions, factorVerificationAge } = derivedState;
    const authCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[authCtx]": ()=>{
            const value = {
                sessionId,
                sessionStatus,
                sessionClaims,
                userId,
                actor,
                orgId,
                orgRole,
                orgSlug,
                orgPermissions,
                factorVerificationAge
            };
            return {
                value
            };
        }
    }["ClerkContextProvider.useMemo[authCtx]"], [
        sessionId,
        sessionStatus,
        userId,
        actor,
        orgId,
        orgRole,
        orgSlug,
        factorVerificationAge,
        sessionClaims == null ? void 0 : sessionClaims.__raw
    ]);
    const sessionCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[sessionCtx]": ()=>({
                value: session
            })
    }["ClerkContextProvider.useMemo[sessionCtx]"], [
        sessionId,
        session
    ]);
    const userCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[userCtx]": ()=>({
                value: user
            })
    }["ClerkContextProvider.useMemo[userCtx]"], [
        userId,
        user
    ]);
    const organizationCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[organizationCtx]": ()=>{
            const value = {
                organization
            };
            return {
                value
            };
        }
    }["ClerkContextProvider.useMemo[organizationCtx]"], [
        orgId,
        organization
    ]);
    return(// @ts-expect-error value passed is of type IsomorphicClerk where the context expects LoadedClerk
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IsomorphicClerkContext"].Provider, {
        value: clerkCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientContext"].Provider, {
        value: clientCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionContext"].Provider, {
        value: sessionCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationProvider"], {
        ...organizationCtx.value
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthContext"].Provider, {
        value: authCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserContext"].Provider, {
        value: userCtx
    }, children)))))));
}
var useLoadedIsomorphicClerk = (options)=>{
    const isomorphicClerkRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(IsomorphicClerk.getOrCreateInstance(options));
    const [clerkStatus, setClerkStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(isomorphicClerkRef.current.status);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            void isomorphicClerkRef.current.__unstable__updateProps({
                appearance: options.appearance
            });
        }
    }["useLoadedIsomorphicClerk.useEffect"], [
        options.appearance
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            void isomorphicClerkRef.current.__unstable__updateProps({
                options
            });
        }
    }["useLoadedIsomorphicClerk.useEffect"], [
        options.localization
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            isomorphicClerkRef.current.on("status", setClerkStatus);
            return ({
                "useLoadedIsomorphicClerk.useEffect": ()=>{
                    if (isomorphicClerkRef.current) {
                        isomorphicClerkRef.current.off("status", setClerkStatus);
                    }
                    IsomorphicClerk.clearInstance();
                }
            })["useLoadedIsomorphicClerk.useEffect"];
        }
    }["useLoadedIsomorphicClerk.useEffect"], []);
    return {
        isomorphicClerk: isomorphicClerkRef.current,
        clerkStatus
    };
};
// src/contexts/ClerkProvider.tsx
function ClerkProviderBase(props) {
    const { initialState, children, __internal_bypassMissingPublishableKey, ...restIsomorphicClerkOptions } = props;
    const { publishableKey = "", Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;
    if (!userInitialisedClerk && !__internal_bypassMissingPublishableKey) {
        if (!publishableKey) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        } else if (publishableKey && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPublishableKey"])(publishableKey)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwInvalidPublishableKeyError({
                key: publishableKey
            });
        }
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkContextProvider, {
        initialState,
        isomorphicClerkOptions: restIsomorphicClerkOptions
    }, children);
}
var ClerkProvider = withMaxAllowedInstancesGuard(ClerkProviderBase, "ClerkProvider", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multipleClerkProvidersError"]);
ClerkProvider.displayName = "ClerkProvider";
// src/index.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorThrowerOptions"])({
    packageName: "@clerk/clerk-react"
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setClerkJsLoadingErrorPackageName"])("@clerk/clerk-react");
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/clerkEventBus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useRoutingProps": (()=>useRoutingProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
// src/internal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
;
;
// src/hooks/useRoutingProps.ts
function useRoutingProps(componentName, props, routingOptions) {
    const path = props.path || (routingOptions == null ? void 0 : routingOptions.path);
    const routing = props.routing || (routingOptions == null ? void 0 : routingOptions.routing) || "path";
    if (routing === "path") {
        if (!path) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noPathProvidedError"])(componentName));
        }
        return {
            ...routingOptions,
            ...props,
            routing: "path"
        };
    }
    if (props.path) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["incompatibleRoutingWithPathProvidedError"])(componentName));
    }
    return {
        ...routingOptions,
        ...props,
        path: void 0
    };
}
;
;
 //# sourceMappingURL=internal.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/next/dist/client/compat/router.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouter", {
    enumerable: true,
    get: function() {
        return useRouter;
    }
});
const _react = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
function useRouter() {
    return (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/compat/router.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/compat/router.js [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PromisifiedAuthProvider": (()=>PromisifiedAuthProvider),
    "usePromisifiedAuth": (()=>usePromisifiedAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/compat/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const PromisifiedAuthContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
function PromisifiedAuthProvider({ authPromise, children }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PromisifiedAuthContext.Provider, {
        value: authPromise
    }, children);
}
function usePromisifiedAuth(options = {}) {
    const isPagesRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const valueFromContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(PromisifiedAuthContext);
    let resolvedData = valueFromContext;
    if (valueFromContext && "then" in valueFromContext) {
        resolvedData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(valueFromContext);
    }
    if (typeof window === "undefined") {
        if (isPagesRouter) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])(options);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDerivedAuth"])({
            ...resolvedData,
            ...options
        });
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])({
            ...resolvedData,
            ...options
        });
    }
}
;
 //# sourceMappingURL=PromisifiedAuthProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/logger.ts
__turbopack_context__.s({
    "logger": (()=>logger)
});
var loggedMessages = /* @__PURE__ */ new Set();
var logger = {
    /**
   * A custom logger that ensures messages are logged only once.
   * Reduces noise and duplicated messages when logs are in a hot codepath.
   */ warnOnce: (msg)=>{
        if (loggedMessages.has(msg)) {
            return;
        }
        loggedMessages.add(msg);
        console.warn(msg);
    },
    logOnce: (msg)=>{
        if (loggedMessages.has(msg)) {
            return;
        }
        console.log(msg);
        loggedMessages.add(msg);
    }
};
;
 //# sourceMappingURL=chunk-CYDR2ZSA.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/logger.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=logger.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/logger.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/logger.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/package.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"name\":\"next\",\"version\":\"15.3.3\",\"description\":\"The React Framework\",\"main\":\"./dist/server/next.js\",\"license\":\"MIT\",\"repository\":\"vercel/next.js\",\"bugs\":\"https://github.com/vercel/next.js/issues\",\"homepage\":\"https://nextjs.org\",\"types\":\"index.d.ts\",\"files\":[\"dist\",\"app.js\",\"app.d.ts\",\"babel.js\",\"babel.d.ts\",\"client.js\",\"client.d.ts\",\"compat\",\"cache.js\",\"cache.d.ts\",\"config.js\",\"config.d.ts\",\"constants.js\",\"constants.d.ts\",\"document.js\",\"document.d.ts\",\"dynamic.js\",\"dynamic.d.ts\",\"error.js\",\"error.d.ts\",\"future\",\"legacy\",\"script.js\",\"script.d.ts\",\"server.js\",\"server.d.ts\",\"head.js\",\"head.d.ts\",\"image.js\",\"image.d.ts\",\"link.js\",\"link.d.ts\",\"form.js\",\"form.d.ts\",\"router.js\",\"router.d.ts\",\"jest.js\",\"jest.d.ts\",\"amp.js\",\"amp.d.ts\",\"og.js\",\"og.d.ts\",\"types.d.ts\",\"types.js\",\"index.d.ts\",\"types/global.d.ts\",\"types/compiled.d.ts\",\"image-types/global.d.ts\",\"navigation-types/navigation.d.ts\",\"navigation-types/compat/navigation.d.ts\",\"font\",\"navigation.js\",\"navigation.d.ts\",\"headers.js\",\"headers.d.ts\",\"navigation-types\",\"web-vitals.js\",\"web-vitals.d.ts\",\"experimental/testing/server.js\",\"experimental/testing/server.d.ts\",\"experimental/testmode/playwright.js\",\"experimental/testmode/playwright.d.ts\",\"experimental/testmode/playwright/msw.js\",\"experimental/testmode/playwright/msw.d.ts\",\"experimental/testmode/proxy.js\",\"experimental/testmode/proxy.d.ts\"],\"bin\":{\"next\":\"./dist/bin/next\"},\"scripts\":{\"dev\":\"cross-env NEXT_SERVER_EVAL_SOURCE_MAPS=1 taskr\",\"release\":\"taskr release\",\"build\":\"pnpm release\",\"prepublishOnly\":\"cd ../../ && turbo run build\",\"types\":\"tsc --project tsconfig.build.json --declaration --emitDeclarationOnly --stripInternal --declarationDir dist\",\"typescript\":\"tsec --noEmit\",\"ncc-compiled\":\"taskr ncc\",\"storybook\":\"storybook dev -p 6006\",\"build-storybook\":\"storybook build\",\"test-storybook\":\"test-storybook\"},\"taskr\":{\"requires\":[\"./taskfile-webpack.js\",\"./taskfile-ncc.js\",\"./taskfile-swc.js\",\"./taskfile-watch.js\"]},\"dependencies\":{\"@next/env\":\"15.3.3\",\"@swc/counter\":\"0.1.3\",\"@swc/helpers\":\"0.5.15\",\"busboy\":\"1.6.0\",\"caniuse-lite\":\"^1.0.30001579\",\"postcss\":\"8.4.31\",\"styled-jsx\":\"5.1.6\"},\"peerDependencies\":{\"@opentelemetry/api\":\"^1.1.0\",\"@playwright/test\":\"^1.41.2\",\"babel-plugin-react-compiler\":\"*\",\"react\":\"^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0\",\"react-dom\":\"^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0\",\"sass\":\"^1.3.0\"},\"peerDependenciesMeta\":{\"babel-plugin-react-compiler\":{\"optional\":true},\"sass\":{\"optional\":true},\"@opentelemetry/api\":{\"optional\":true},\"@playwright/test\":{\"optional\":true}},\"optionalDependencies\":{\"sharp\":\"^0.34.1\",\"@next/swc-darwin-arm64\":\"15.3.3\",\"@next/swc-darwin-x64\":\"15.3.3\",\"@next/swc-linux-arm64-gnu\":\"15.3.3\",\"@next/swc-linux-arm64-musl\":\"15.3.3\",\"@next/swc-linux-x64-gnu\":\"15.3.3\",\"@next/swc-linux-x64-musl\":\"15.3.3\",\"@next/swc-win32-arm64-msvc\":\"15.3.3\",\"@next/swc-win32-x64-msvc\":\"15.3.3\"},\"devDependencies\":{\"@ampproject/toolbox-optimizer\":\"2.8.3\",\"@babel/code-frame\":\"7.22.5\",\"@babel/core\":\"7.22.5\",\"@babel/eslint-parser\":\"7.22.5\",\"@babel/generator\":\"7.22.5\",\"@babel/plugin-proposal-class-properties\":\"7.18.6\",\"@babel/plugin-proposal-export-namespace-from\":\"7.18.9\",\"@babel/plugin-proposal-numeric-separator\":\"7.18.6\",\"@babel/plugin-proposal-object-rest-spread\":\"7.20.7\",\"@babel/plugin-syntax-bigint\":\"7.8.3\",\"@babel/plugin-syntax-dynamic-import\":\"7.8.3\",\"@babel/plugin-syntax-import-attributes\":\"7.22.5\",\"@babel/plugin-syntax-jsx\":\"7.22.5\",\"@babel/plugin-transform-modules-commonjs\":\"7.22.5\",\"@babel/plugin-transform-runtime\":\"7.22.5\",\"@babel/preset-env\":\"7.22.5\",\"@babel/preset-react\":\"7.22.5\",\"@babel/preset-typescript\":\"7.22.5\",\"@babel/runtime\":\"7.22.5\",\"@babel/traverse\":\"7.22.5\",\"@babel/types\":\"7.22.5\",\"@capsizecss/metrics\":\"3.4.0\",\"@edge-runtime/cookies\":\"6.0.0\",\"@edge-runtime/ponyfill\":\"4.0.0\",\"@edge-runtime/primitives\":\"6.0.0\",\"@hapi/accept\":\"5.0.2\",\"@jest/transform\":\"29.5.0\",\"@jest/types\":\"29.5.0\",\"@mswjs/interceptors\":\"0.23.0\",\"@napi-rs/triples\":\"1.2.0\",\"@next/font\":\"15.3.3\",\"@next/polyfill-module\":\"15.3.3\",\"@next/polyfill-nomodule\":\"15.3.3\",\"@next/react-refresh-utils\":\"15.3.3\",\"@next/swc\":\"15.3.3\",\"@opentelemetry/api\":\"1.6.0\",\"@playwright/test\":\"1.41.2\",\"@storybook/addon-a11y\":\"8.6.0\",\"@storybook/addon-essentials\":\"8.6.0\",\"@storybook/addon-interactions\":\"8.6.0\",\"@storybook/addon-webpack5-compiler-swc\":\"1.0.5\",\"@storybook/blocks\":\"8.6.0\",\"@storybook/react\":\"8.6.0\",\"@storybook/react-webpack5\":\"8.6.0\",\"@storybook/test\":\"8.6.0\",\"@storybook/test-runner\":\"0.21.0\",\"@swc/core\":\"1.9.3\",\"@swc/types\":\"0.1.7\",\"@taskr/clear\":\"1.1.0\",\"@taskr/esnext\":\"1.1.0\",\"@types/amphtml-validator\":\"1.0.0\",\"@types/babel__code-frame\":\"7.0.2\",\"@types/babel__core\":\"7.1.12\",\"@types/babel__generator\":\"7.6.2\",\"@types/babel__template\":\"7.4.0\",\"@types/babel__traverse\":\"7.11.0\",\"@types/bytes\":\"3.1.1\",\"@types/ci-info\":\"2.0.0\",\"@types/compression\":\"0.0.36\",\"@types/content-disposition\":\"0.5.4\",\"@types/content-type\":\"1.1.3\",\"@types/cookie\":\"0.3.3\",\"@types/cross-spawn\":\"6.0.0\",\"@types/debug\":\"4.1.5\",\"@types/express-serve-static-core\":\"4.17.33\",\"@types/fresh\":\"0.5.0\",\"@types/glob\":\"7.1.1\",\"@types/jsonwebtoken\":\"9.0.0\",\"@types/lodash\":\"4.14.198\",\"@types/lodash.curry\":\"4.1.6\",\"@types/path-to-regexp\":\"1.7.0\",\"@types/picomatch\":\"2.3.3\",\"@types/platform\":\"1.3.4\",\"@types/react\":\"19.0.8\",\"@types/react-dom\":\"19.0.3\",\"@types/react-is\":\"18.2.4\",\"@types/semver\":\"7.3.1\",\"@types/send\":\"0.14.4\",\"@types/shell-quote\":\"1.7.1\",\"@types/tar\":\"6.1.5\",\"@types/text-table\":\"0.2.1\",\"@types/ua-parser-js\":\"0.7.36\",\"@types/webpack-sources1\":\"npm:@types/webpack-sources@0.1.5\",\"@types/ws\":\"8.2.0\",\"@typescript/vfs\":\"1.6.1\",\"@vercel/ncc\":\"0.34.0\",\"@vercel/nft\":\"0.27.1\",\"@vercel/turbopack-ecmascript-runtime\":\"*\",\"acorn\":\"8.14.0\",\"amphtml-validator\":\"1.0.38\",\"anser\":\"1.4.9\",\"arg\":\"4.1.0\",\"assert\":\"2.0.0\",\"async-retry\":\"1.2.3\",\"async-sema\":\"3.0.0\",\"axe-playwright\":\"2.0.3\",\"babel-plugin-react-compiler\":\"19.0.0-beta-e552027-20250112\",\"babel-plugin-transform-define\":\"2.0.0\",\"babel-plugin-transform-react-remove-prop-types\":\"0.4.24\",\"browserify-zlib\":\"0.2.0\",\"browserslist\":\"4.22.2\",\"buffer\":\"5.6.0\",\"bytes\":\"3.1.1\",\"ci-info\":\"watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540\",\"cli-select\":\"1.1.2\",\"client-only\":\"0.0.1\",\"commander\":\"12.1.0\",\"comment-json\":\"3.0.3\",\"compression\":\"1.7.4\",\"conf\":\"5.0.0\",\"constants-browserify\":\"1.0.0\",\"content-disposition\":\"0.5.3\",\"content-type\":\"1.0.4\",\"cookie\":\"0.4.1\",\"cross-env\":\"6.0.3\",\"cross-spawn\":\"7.0.3\",\"crypto-browserify\":\"3.12.0\",\"css.escape\":\"1.5.1\",\"cssnano-preset-default\":\"7.0.6\",\"data-uri-to-buffer\":\"3.0.1\",\"debug\":\"4.1.1\",\"devalue\":\"2.0.1\",\"domain-browser\":\"4.19.0\",\"edge-runtime\":\"4.0.1\",\"events\":\"3.3.0\",\"find-up\":\"4.1.0\",\"fresh\":\"0.5.2\",\"glob\":\"7.1.7\",\"gzip-size\":\"5.1.1\",\"http-proxy\":\"1.18.1\",\"http-proxy-agent\":\"5.0.0\",\"https-browserify\":\"1.0.0\",\"https-proxy-agent\":\"5.0.1\",\"icss-utils\":\"5.1.0\",\"ignore-loader\":\"0.1.2\",\"image-size\":\"1.2.1\",\"is-docker\":\"2.0.0\",\"is-wsl\":\"2.2.0\",\"jest-worker\":\"27.5.1\",\"json5\":\"2.2.3\",\"jsonwebtoken\":\"9.0.0\",\"loader-runner\":\"4.3.0\",\"loader-utils2\":\"npm:loader-utils@2.0.0\",\"loader-utils3\":\"npm:loader-utils@3.1.3\",\"lodash.curry\":\"4.1.1\",\"mini-css-extract-plugin\":\"2.4.4\",\"msw\":\"2.3.0\",\"nanoid\":\"3.1.32\",\"native-url\":\"0.3.4\",\"neo-async\":\"2.6.1\",\"node-html-parser\":\"5.3.3\",\"ora\":\"4.0.4\",\"os-browserify\":\"0.3.0\",\"p-limit\":\"3.1.0\",\"p-queue\":\"6.6.2\",\"path-browserify\":\"1.0.1\",\"path-to-regexp\":\"6.1.0\",\"picomatch\":\"4.0.1\",\"postcss-flexbugs-fixes\":\"5.0.2\",\"postcss-modules-extract-imports\":\"3.0.0\",\"postcss-modules-local-by-default\":\"4.2.0\",\"postcss-modules-scope\":\"3.0.0\",\"postcss-modules-values\":\"4.0.0\",\"postcss-preset-env\":\"7.4.3\",\"postcss-safe-parser\":\"6.0.0\",\"postcss-scss\":\"4.0.3\",\"postcss-value-parser\":\"4.2.0\",\"process\":\"0.11.10\",\"punycode\":\"2.1.1\",\"querystring-es3\":\"0.2.1\",\"raw-body\":\"2.4.1\",\"react-refresh\":\"0.12.0\",\"regenerator-runtime\":\"0.13.4\",\"sass-loader\":\"15.0.0\",\"schema-utils2\":\"npm:schema-utils@2.7.1\",\"schema-utils3\":\"npm:schema-utils@3.0.0\",\"semver\":\"7.3.2\",\"send\":\"0.17.1\",\"server-only\":\"0.0.1\",\"setimmediate\":\"1.0.5\",\"shell-quote\":\"1.7.3\",\"source-map\":\"0.6.1\",\"source-map-loader\":\"5.0.0\",\"source-map08\":\"npm:source-map@0.8.0-beta.0\",\"stacktrace-parser\":\"0.1.10\",\"storybook\":\"8.6.0\",\"stream-browserify\":\"3.0.0\",\"stream-http\":\"3.1.1\",\"strict-event-emitter\":\"0.5.0\",\"string-hash\":\"1.1.3\",\"string_decoder\":\"1.3.0\",\"strip-ansi\":\"6.0.0\",\"superstruct\":\"1.0.3\",\"tar\":\"6.1.15\",\"taskr\":\"1.1.0\",\"terser\":\"5.27.0\",\"terser-webpack-plugin\":\"5.3.9\",\"text-table\":\"0.2.0\",\"timers-browserify\":\"2.0.12\",\"tty-browserify\":\"0.0.1\",\"typescript\":\"5.8.2\",\"ua-parser-js\":\"1.0.35\",\"unistore\":\"3.4.1\",\"util\":\"0.12.4\",\"vm-browserify\":\"1.1.2\",\"watchpack\":\"2.4.0\",\"web-vitals\":\"4.2.1\",\"webpack\":\"5.98.0\",\"webpack-sources1\":\"npm:webpack-sources@1.4.3\",\"webpack-sources3\":\"npm:webpack-sources@3.2.3\",\"ws\":\"8.2.3\",\"zod\":\"3.22.3\",\"zod-validation-error\":\"3.4.0\"},\"keywords\":[\"react\",\"framework\",\"nextjs\",\"web\",\"server\",\"node\",\"front-end\",\"backend\",\"cli\",\"vercel\"],\"engines\":{\"node\":\"^18.18.0 || ^19.8.0 || >= 20.0.0\"}}"));}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/useSafeLayoutEffect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSafeLayoutEffect": (()=>useSafeLayoutEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const useSafeLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
;
 //# sourceMappingURL=useSafeLayoutEffect.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkNextOptionsProvider": (()=>ClerkNextOptionsProvider),
    "useClerkNextOptions": (()=>useClerkNextOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const ClerkNextOptionsCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
ClerkNextOptionsCtx.displayName = "ClerkNextOptionsCtx";
const useClerkNextOptions = ()=>{
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ClerkNextOptionsCtx);
    return ctx == null ? void 0 : ctx.value;
};
const ClerkNextOptionsProvider = (props)=>{
    const { children, options } = props;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkNextOptionsCtx.Provider, {
        value: {
            value: options
        }
    }, children);
};
;
 //# sourceMappingURL=NextOptionsContext.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/script.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/script.js [app-client] (ecmascript)");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/clerk-js-script.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkJSScript": (()=>ClerkJSScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-XY5YYTBS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
function ClerkJSScript(props) {
    const { publishableKey, clerkJSUrl, clerkJSVersion, clerkJSVariant, nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerkNextOptions"])();
    const { domain, proxyUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerk"])();
    if (!publishableKey) {
        return null;
    }
    const options = {
        domain,
        proxyUrl,
        publishableKey,
        clerkJSUrl,
        clerkJSVersion,
        clerkJSVariant,
        nonce
    };
    const scriptUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkJsScriptUrl"])(options);
    const Script = props.router === "app" ? "script" : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Script, {
        src: scriptUrl,
        "data-clerk-js-script": true,
        async: true,
        defer: props.router === "pages" ? false : void 0,
        crossOrigin: "anonymous",
        strategy: props.router === "pages" ? "beforeInteractive" : void 0,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XY5YYTBS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildClerkJsScriptAttributes"])(options)
    });
}
;
 //# sourceMappingURL=clerk-js-script.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IBYQ6PKA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiUrlFromPublishableKey": (()=>apiUrlFromPublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
;
;
// src/apiUrlFromPublishableKey.ts
var apiUrlFromPublishableKey = (publishableKey)=>{
    const frontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)?.frontendApi;
    if (frontendApi?.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((suffix)=>frontendApi?.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROD_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_ENV_SUFFIXES"].some((suffix)=>frontendApi?.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGING_ENV_SUFFIXES"].some((suffix)=>frontendApi?.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGING_API_URL"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROD_API_URL"];
};
;
 //# sourceMappingURL=chunk-IBYQ6PKA.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IBYQ6PKA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IBYQ6PKA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
 //# sourceMappingURL=apiUrlFromPublishableKey.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IBYQ6PKA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IBYQ6PKA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
;
;
;
 //# sourceMappingURL=underscore.mjs.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "API_VERSION": (()=>API_VERSION),
    "CLERK_JS_URL": (()=>CLERK_JS_URL),
    "CLERK_JS_VERSION": (()=>CLERK_JS_VERSION),
    "DOMAIN": (()=>DOMAIN),
    "ENCRYPTION_KEY": (()=>ENCRYPTION_KEY),
    "IS_SATELLITE": (()=>IS_SATELLITE),
    "KEYLESS_DISABLED": (()=>KEYLESS_DISABLED),
    "PROXY_URL": (()=>PROXY_URL),
    "PUBLISHABLE_KEY": (()=>PUBLISHABLE_KEY),
    "SDK_METADATA": (()=>SDK_METADATA),
    "SECRET_KEY": (()=>SECRET_KEY),
    "SIGN_IN_URL": (()=>SIGN_IN_URL),
    "SIGN_UP_URL": (()=>SIGN_UP_URL),
    "TELEMETRY_DEBUG": (()=>TELEMETRY_DEBUG),
    "TELEMETRY_DISABLED": (()=>TELEMETRY_DISABLED)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IBYQ6PKA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-IBYQ6PKA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
;
;
;
const CLERK_JS_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_URL || "";
const API_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_API_VERSION || "v1";
const SECRET_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_SECRET_KEY || "";
const PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "pk_test_c3VwZXItcmF5LTczLmNsZXJrLmFjY291bnRzLmRldiQ") || "";
const ENCRYPTION_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_ENCRYPTION_KEY || "";
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_API_URL || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IBYQ6PKA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrlFromPublishableKey"])(PUBLISHABLE_KEY);
const DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_IS_SATELLITE) || false;
const SIGN_IN_URL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
const SIGN_UP_URL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
const SDK_METADATA = {
    name: "@clerk/nextjs",
    version: "6.21.0",
    environment: ("TURBOPACK compile-time value", "development")
};
const TELEMETRY_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED);
const TELEMETRY_DEBUG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
const KEYLESS_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED) || false;
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNext13": (()=>isNext13),
    "isNextWithUnstableServerActions": (()=>isNextWithUnstableServerActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/package.json (json)");
;
;
const isNext13 = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version.startsWith("13.");
const isNextWithUnstableServerActions = isNext13 || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version.startsWith("14.0");
;
 //# sourceMappingURL=sdk-versions.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "canUseKeyless": (()=>canUseKeyless)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-client] (ecmascript)");
;
;
;
;
const canUseKeyless = !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"] && // Next.js will inline the value of 'development' or 'production' on the client bundle, so this is client-safe.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])() && !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYLESS_DISABLED"];
;
 //# sourceMappingURL=feature-flags.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mergeNextClerkPropsWithEnv": (()=>mergeNextClerkPropsWithEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-client] (ecmascript)");
;
;
;
const mergeNextClerkPropsWithEnv = (props)=>{
    var _a;
    return {
        ...props,
        publishableKey: props.publishableKey || ("TURBOPACK compile-time value", "pk_test_c3VwZXItcmF5LTczLmNsZXJrLmFjY291bnRzLmRldiQ") || "",
        clerkJSUrl: props.clerkJSUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_URL,
        clerkJSVersion: props.clerkJSVersion || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_VERSION,
        proxyUrl: props.proxyUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
        domain: props.domain || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_DOMAIN || "",
        isSatellite: props.isSatellite || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
        signInUrl: props.signInUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
        signUpUrl: props.signUpUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "",
        signInForceRedirectUrl: props.signInForceRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || "",
        signUpForceRedirectUrl: props.signUpForceRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL || "",
        signInFallbackRedirectUrl: props.signInFallbackRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || "",
        signUpFallbackRedirectUrl: props.signUpFallbackRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || "",
        afterSignInUrl: props.afterSignInUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
        afterSignUpUrl: props.afterSignUpUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
        newSubscriptionRedirectUrl: props.newSubscriptionRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_CHECKOUT_CONTINUE_URL || "",
        telemetry: (_a = props.telemetry) != null ? _a : {
            disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),
            debug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)
        },
        sdkMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_METADATA"]
    };
};
;
 //# sourceMappingURL=mergeNextClerkPropsWithEnv.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/usePagesRouter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePagesRouter": (()=>usePagesRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/compat/router.js [app-client] (ecmascript)");
;
;
const usePagesRouter = ()=>{
    return {
        pagesRouter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])()
    };
};
;
 //# sourceMappingURL=usePagesRouter.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/router-telemetry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouterTelemetry": (()=>RouterTelemetry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$usePagesRouter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/usePagesRouter.js [app-client] (ecmascript)");
;
;
;
;
const RouterTelemetry = ()=>{
    var _a, _b;
    const clerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerk"])();
    const { pagesRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$usePagesRouter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePagesRouter"])();
    (_b = clerk.telemetry) == null ? void 0 : _b.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventFrameworkMetadata"])({
        router: pagesRouter ? "pages" : "app",
        ...((_a = globalThis == null ? void 0 : globalThis.next) == null ? void 0 : _a.version) ? {
            nextjsVersion: globalThis.next.version
        } : {}
    }));
    return null;
};
;
 //# sourceMappingURL=router-telemetry.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const createServerReference = (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)")).createServerReference; //# sourceMappingURL=action-client-wrapper.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/data:df80df [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7feb48fd9ffad45d3a59c3061c0b5df071ea4f4e3a":"invalidateCacheAction"},"apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js",""] */ __turbopack_context__.s({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var invalidateCacheAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7feb48fd9ffad45d3a59c3061c0b5df071ea4f4e3a", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "invalidateCacheAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVyLWFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuYXN5bmMgZnVuY3Rpb24gaW52YWxpZGF0ZUNhY2hlQWN0aW9uKCkge1xuICB2b2lkIChhd2FpdCBjb29raWVzKCkpLmRlbGV0ZShgX19jbGVya19pbnZhbGlkYXRlX2NhY2hlX2Nvb2tpZV8ke0RhdGUubm93KCl9YCk7XG59XG5leHBvcnQge1xuICBpbnZhbGlkYXRlQ2FjaGVBY3Rpb25cbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRWQU1FIn0=
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/removeBasePath.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "removeBasePath": (()=>removeBasePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
function removeBasePath(to) {
    let destination = to;
    const basePath = ("TURBOPACK compile-time value", "");
    if (basePath && destination.startsWith(basePath)) {
        "TURBOPACK unreachable";
    }
    return destination;
}
;
 //# sourceMappingURL=removeBasePath.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useInternalNavFun.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useInternalNavFun": (()=>useInternalNavFun)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/removeBasePath.js [app-client] (ecmascript)");
;
;
;
;
const getClerkNavigationObject = (name)=>{
    var _a, _b, _c;
    (_a = window.__clerk_internal_navigations) != null ? _a : window.__clerk_internal_navigations = {};
    (_c = (_b = window.__clerk_internal_navigations)[name]) != null ? _c : _b[name] = {};
    return window.__clerk_internal_navigations[name];
};
const useInternalNavFun = (props)=>{
    const { windowNav, routerNav, name } = props;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    if (windowNav) {
        getClerkNavigationObject(name).fun = (to, opts)=>{
            return new Promise((res)=>{
                var _a, _b, _c;
                (_b = (_a = getClerkNavigationObject(name)).promisesBuffer) != null ? _b : _a.promisesBuffer = [];
                (_c = getClerkNavigationObject(name).promisesBuffer) == null ? void 0 : _c.push(res);
                startTransition(()=>{
                    var _a2, _b2, _c2;
                    if (((_a2 = opts == null ? void 0 : opts.__internal_metadata) == null ? void 0 : _a2.navigationType) === "internal") {
                        const state = ((_c2 = (_b2 = window.next) == null ? void 0 : _b2.version) != null ? _c2 : "") < "14.1.0" ? history.state : null;
                        windowNav(state, "", to);
                    } else {
                        routerNav((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBasePath"])(to));
                    }
                });
            });
        };
    }
    const flushPromises = ()=>{
        var _a;
        (_a = getClerkNavigationObject(name).promisesBuffer) == null ? void 0 : _a.forEach((resolve)=>resolve());
        getClerkNavigationObject(name).promisesBuffer = [];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInternalNavFun.useEffect": ()=>{
            flushPromises();
            return flushPromises;
        }
    }["useInternalNavFun.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInternalNavFun.useEffect": ()=>{
            if (!isPending) {
                flushPromises();
            }
        }
    }["useInternalNavFun.useEffect"], [
        pathname,
        isPending
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInternalNavFun.useCallback": (to, metadata)=>{
            return getClerkNavigationObject(name).fun(to, metadata);
        }
    }["useInternalNavFun.useCallback"], []);
};
;
 //# sourceMappingURL=useInternalNavFun.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitablePush.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAwaitablePush": (()=>useAwaitablePush)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useInternalNavFun.js [app-client] (ecmascript)");
"use client";
;
;
;
const useAwaitablePush = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalNavFun"])({
        windowNav: typeof window !== "undefined" ? window.history.pushState.bind(window.history) : void 0,
        routerNav: router.push.bind(router),
        name: "push"
    });
};
;
 //# sourceMappingURL=useAwaitablePush.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitableReplace.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAwaitableReplace": (()=>useAwaitableReplace)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useInternalNavFun.js [app-client] (ecmascript)");
"use client";
;
;
;
const useAwaitableReplace = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalNavFun"])({
        windowNav: typeof window !== "undefined" ? window.history.replaceState.bind(window.history) : void 0,
        routerNav: router.replace.bind(router),
        name: "replace"
    });
};
;
 //# sourceMappingURL=useAwaitableReplace.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientClerkProvider": (()=>ClientClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/logger.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/useSafeLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$clerk$2d$js$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/clerk-js-script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$router$2d$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/router-telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$data$3a$df80df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/data:df80df [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitablePush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitablePush.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitableReplace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitableReplace.js [app-client] (ecmascript)");
"use client";
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
const LazyCreateKeylessApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/keyless-creator-reader.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.KeylessCreatorOrReader));
const NextClientClerkProvider = (props)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"]) {
        const deprecationWarning = `Clerk:
Your current Next.js version (${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version}) will be deprecated in the next major release of "@clerk/nextjs". Please upgrade to next@14.1.0 or later.`;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inBrowser"])()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warnOnce(deprecationWarning);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logOnce(`
\x1B[43m----------
${deprecationWarning}
----------\x1B[0m
`);
        }
    }
    const { __unstable_invokeMiddlewareOnAuthStateChange = true, children } = props;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitablePush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAwaitablePush"])();
    const replace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitableReplace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAwaitableReplace"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const isNested = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerkNextOptions"])());
    if (isNested) {
        return props.children;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NextClientClerkProvider.useEffect": ()=>{
            var _a;
            if (!isPending) {
                (_a = window.__clerk_internal_invalidateCachePromise) == null ? void 0 : _a.call(window);
            }
        }
    }["NextClientClerkProvider.useEffect"], [
        isPending
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "NextClientClerkProvider.useSafeLayoutEffect": ()=>{
            window.__unstable__onBeforeSetActive = ({
                "NextClientClerkProvider.useSafeLayoutEffect": (intent)=>{
                    return new Promise({
                        "NextClientClerkProvider.useSafeLayoutEffect": (resolve)=>{
                            var _a;
                            window.__clerk_internal_invalidateCachePromise = resolve;
                            const nextVersion = ((_a = window == null ? void 0 : window.next) == null ? void 0 : _a.version) || "";
                            if (nextVersion.startsWith("13")) {
                                startTransition({
                                    "NextClientClerkProvider.useSafeLayoutEffect": ()=>{
                                        router.refresh();
                                    }
                                }["NextClientClerkProvider.useSafeLayoutEffect"]);
                            } else if (nextVersion.startsWith("15") && intent === "sign-out") {
                                resolve();
                            } else {
                                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$data$3a$df80df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["invalidateCacheAction"])().then({
                                    "NextClientClerkProvider.useSafeLayoutEffect": ()=>resolve()
                                }["NextClientClerkProvider.useSafeLayoutEffect"]);
                            }
                        }
                    }["NextClientClerkProvider.useSafeLayoutEffect"]);
                }
            })["NextClientClerkProvider.useSafeLayoutEffect"];
            window.__unstable__onAfterSetActive = ({
                "NextClientClerkProvider.useSafeLayoutEffect": ()=>{
                    if (__unstable_invokeMiddlewareOnAuthStateChange) {
                        return router.refresh();
                    }
                }
            })["NextClientClerkProvider.useSafeLayoutEffect"];
        }
    }["NextClientClerkProvider.useSafeLayoutEffect"], []);
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeNextClerkPropsWithEnv"])({
        ...props,
        // @ts-expect-error Error because of the stricter types of internal `push`
        routerPush: push,
        // @ts-expect-error Error because of the stricter types of internal `replace`
        routerReplace: replace
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkNextOptionsProvider"], {
        options: mergedProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkProvider"], {
        ...mergedProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$router$2d$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterTelemetry"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$clerk$2d$js$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkJSScript"], {
        router: "app"
    }), children));
};
const ClientClerkProvider = (props)=>{
    const { children, disableKeyless = false, ...rest } = props;
    const safePublishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeNextClerkPropsWithEnv"])(rest).publishableKey;
    if (safePublishableKey || !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseKeyless"] || disableKeyless) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NextClientClerkProvider, {
            ...rest
        }, children);
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(LazyCreateKeylessApplication, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NextClientClerkProvider, {
        ...rest
    }, children));
};
;
 //# sourceMappingURL=ClerkProvider.js.map
}}),
"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/client/keyless-cookie-sync.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KeylessCookieSync": (()=>KeylessCookieSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function KeylessCookieSync(props) {
    var _a;
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedLayoutSegments"])();
    const isNotFoundRoute = ((_a = segments[0]) == null ? void 0 : _a.startsWith("/_not-found")) || false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeylessCookieSync.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseKeyless"] && !isNotFoundRoute) {
                void __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then({
                    "KeylessCookieSync.useEffect": (m)=>m.syncKeylessConfigAction({
                            ...props,
                            // Preserve the current url and return back, once keys are synced in the middleware
                            returnUrl: window.location.href
                        })
                }["KeylessCookieSync.useEffect"]);
            }
        }
    }["KeylessCookieSync.useEffect"], [
        isNotFoundRoute
    ]);
    return props.children;
}
;
 //# sourceMappingURL=keyless-cookie-sync.js.map
}}),
}]);

//# sourceMappingURL=79789_dc2a73fa._.js.map