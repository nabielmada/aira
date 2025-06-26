module.exports = {

"[project]/src/utils/AppConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppConfig": (()=>AppConfig),
    "ClerkLocalizations": (()=>ClerkLocalizations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$localizations$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/localizations/dist/index.mjs [app-ssr] (ecmascript)");
;
const localePrefix = 'as-needed';
const AppConfig = {
    name: 'Nextjs Starter',
    locales: [
        'en',
        'fr'
    ],
    defaultLocale: 'en',
    localePrefix
};
const supportedLocales = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$localizations$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"],
    fr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$localizations$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frFR"]
};
const ClerkLocalizations = {
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$localizations$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"],
    supportedLocales
};
}}),
"[project]/src/libs/i18nRouting.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "routing": (()=>routing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/AppConfig.ts [app-ssr] (ecmascript)");
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppConfig"].locales,
    localePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppConfig"].localePrefix,
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$AppConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppConfig"].defaultLocale
});
}}),
"[project]/src/libs/i18nNavigation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePathname": (()=>usePathname)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nRouting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/i18nRouting.ts [app-ssr] (ecmascript)");
;
;
const { usePathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nRouting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"]);
}}),
"[project]/src/components/LocaleSwitcher.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LocaleSwitcher": (()=>LocaleSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/i18nNavigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nRouting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/i18nRouting.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const LocaleSwitcher = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const handleChange = (event)=>{
        router.push(`/${event.target.value}${pathname}`);
        router.refresh(); // Ensure the page takes the new locale into account related to the issue #395
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        defaultValue: locale,
        onChange: handleChange,
        className: "border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3",
        "aria-label": "lang-switcher",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$i18nRouting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"].locales.map((elt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: elt,
                children: elt.toUpperCase()
            }, elt, false, {
                fileName: "[project]/src/components/LocaleSwitcher.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/LocaleSwitcher.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=src_43e82e8f._.js.map