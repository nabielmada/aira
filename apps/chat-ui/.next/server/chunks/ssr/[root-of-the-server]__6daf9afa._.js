module.exports = {

"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/app/[locale]/(auth)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript) <export setCachedRequestLocale as setRequestLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nRouting$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/i18nRouting.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/AppConfig.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function AuthLayout(props) {
    const { locale } = await props.params;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__["setRequestLocale"])(locale);
    const clerkLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClerkLocalizations"].supportedLocales[locale] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClerkLocalizations"].defaultLocale;
    let signInUrl = '/sign-in';
    let signUpUrl = '/sign-up';
    let dashboardUrl = '/dashboard';
    let afterSignOutUrl = '/';
    if (locale !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nRouting$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale) {
        signInUrl = `/${locale}${signInUrl}`;
        signUpUrl = `/${locale}${signUpUrl}`;
        dashboardUrl = `/${locale}${dashboardUrl}`;
        afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkProvider"], {
        localization: clerkLocale,
        signInUrl: signInUrl,
        signUpUrl: signUpUrl,
        signInFallbackRedirectUrl: dashboardUrl,
        signUpFallbackRedirectUrl: dashboardUrl,
        afterSignOutUrl: afterSignOutUrl,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/(auth)/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6daf9afa._.js.map