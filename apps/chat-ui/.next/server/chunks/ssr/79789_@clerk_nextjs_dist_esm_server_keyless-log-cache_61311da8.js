module.exports = {

"[project]/apps/chat-ui/node_modules/@clerk/nextjs/dist/esm/server/keyless-log-cache.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clerkDevelopmentCache": (()=>clerkDevelopmentCache),
    "createConfirmationMessage": (()=>createConfirmationMessage),
    "createKeylessModeMessage": (()=>createKeylessModeMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/utils/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-rsc] (ecmascript)");
;
;
const THROTTLE_DURATION_MS = 10 * 60 * 1e3;
function createClerkDevCache() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])()) {
        return;
    }
    if (!global.__clerk_internal_keyless_logger) {
        global.__clerk_internal_keyless_logger = {
            __cache: /* @__PURE__ */ new Map(),
            log: function({ cacheKey, msg }) {
                var _a;
                if (this.__cache.has(cacheKey) && Date.now() < (((_a = this.__cache.get(cacheKey)) == null ? void 0 : _a.expiresAt) || 0)) {
                    return;
                }
                console.log(msg);
                this.__cache.set(cacheKey, {
                    expiresAt: Date.now() + THROTTLE_DURATION_MS
                });
            },
            run: async function(callback, { cacheKey, onSuccessStale = THROTTLE_DURATION_MS, onErrorStale = THROTTLE_DURATION_MS }) {
                var _a, _b;
                if (this.__cache.has(cacheKey) && Date.now() < (((_a = this.__cache.get(cacheKey)) == null ? void 0 : _a.expiresAt) || 0)) {
                    return (_b = this.__cache.get(cacheKey)) == null ? void 0 : _b.data;
                }
                try {
                    const result = await callback();
                    this.__cache.set(cacheKey, {
                        expiresAt: Date.now() + onSuccessStale,
                        data: result
                    });
                    return result;
                } catch (e) {
                    this.__cache.set(cacheKey, {
                        expiresAt: Date.now() + onErrorStale
                    });
                    throw e;
                }
            }
        };
    }
    return globalThis.__clerk_internal_keyless_logger;
}
const createKeylessModeMessage = (keys)=>{
    return `
\x1B[35m
[Clerk]:\x1B[0m You are running in keyless mode.
You can \x1B[35mclaim your keys\x1B[0m by visiting ${keys.claimUrl}
`;
};
const createConfirmationMessage = ()=>{
    return `
\x1B[35m
[Clerk]:\x1B[0m Your application is running with your claimed keys.
You can safely remove the \x1B[35m.clerk/\x1B[0m from your project.
`;
};
const clerkDevelopmentCache = createClerkDevCache();
;
 //# sourceMappingURL=keyless-log-cache.js.map
}}),

};

//# sourceMappingURL=79789_%40clerk_nextjs_dist_esm_server_keyless-log-cache_61311da8.js.map