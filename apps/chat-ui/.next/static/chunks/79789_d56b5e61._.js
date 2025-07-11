(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/chat-ui/node_modules/@sentry/react/build/esm/sdk.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "init": (()=>init)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/**
 * Inits the React SDK
 */ function init(options) {
    const opts = {
        ...options
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applySdkMetadata"])(opts, 'react');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setContext"])('react', {
        version: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"])(opts);
}
;
 //# sourceMappingURL=sdk.js.map
}}),
"[project]/apps/chat-ui/node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parse": (()=>parse)
});
var UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */ function parse(stackString) {
    var lines = stackString.split('\n');
    return lines.reduce(function(stack, line) {
        var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);
        if (parseResult) {
            stack.push(parseResult);
        }
        return stack;
    }, []);
}
var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function parseChrome(line) {
    var parts = chromeRe.exec(line);
    if (!parts) {
        return null;
    }
    var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
    var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
    var submatch = chromeEvalRe.exec(parts[2]);
    if (isEval && submatch != null) {
        // throw out eval line/column and use top-most line/column number
        parts[2] = submatch[1]; // url
        parts[3] = submatch[2]; // line
        parts[4] = submatch[3]; // column
    }
    return {
        file: !isNative ? parts[2] : null,
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: isNative ? [
            parts[2]
        ] : [],
        lineNumber: parts[3] ? +parts[3] : null,
        column: parts[4] ? +parts[4] : null
    };
}
var winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseWinjs(line) {
    var parts = winjsRe.exec(line);
    if (!parts) {
        return null;
    }
    return {
        file: parts[2],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
    };
}
var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGecko(line) {
    var parts = geckoRe.exec(line);
    if (!parts) {
        return null;
    }
    var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
    var submatch = geckoEvalRe.exec(parts[3]);
    if (isEval && submatch != null) {
        // throw out eval line/column and use top-most line number
        parts[3] = submatch[1];
        parts[4] = submatch[2];
        parts[5] = null; // no column when eval
    }
    return {
        file: parts[3],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: parts[2] ? parts[2].split(',') : [],
        lineNumber: parts[4] ? +parts[4] : null,
        column: parts[5] ? +parts[5] : null
    };
}
var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function parseJSC(line) {
    var parts = javaScriptCoreRe.exec(line);
    if (!parts) {
        return null;
    }
    return {
        file: parts[3],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[4],
        column: parts[5] ? +parts[5] : null
    };
}
var nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseNode(line) {
    var parts = nodeRe.exec(line);
    if (!parts) {
        return null;
    }
    return {
        file: parts[2],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
    };
}
;
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/devErrorSymbolicationEventProcessor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "devErrorSymbolicationEventProcessor": (()=>devErrorSymbolicationEventProcessor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$stacktrace$2d$parser$2f$dist$2f$stack$2d$trace$2d$parser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [app-client] (ecmascript)");
;
;
;
const globalWithInjectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
/**
 * Event processor that will symbolicate errors by using the webpack/nextjs dev server that is used to show stack traces
 * in the dev overlay.
 */ async function devErrorSymbolicationEventProcessor(event, hint) {
    // Filter out spans for requests resolving source maps for stack frames in dev mode
    if (event.type === 'transaction') {
        event.spans = event.spans?.filter((span)=>{
            const httpUrlAttribute = span.data?.['http.url'];
            if (typeof httpUrlAttribute === 'string') {
                return !httpUrlAttribute.includes('__nextjs_original-stack-frame'); // could also be __nextjs_original-stack-frames (plural)
            }
            return true;
        });
    }
    // Due to changes across Next.js versions, there are a million things that can go wrong here so we just try-catch the
    // entire event processor. Symbolicated stack traces are just a nice to have.
    try {
        if (hint.originalException && hint.originalException instanceof Error && hint.originalException.stack) {
            const frames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$stacktrace$2d$parser$2f$dist$2f$stack$2d$trace$2d$parser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(hint.originalException.stack);
            const nextjsVersion = globalWithInjectedValues.next?.version || '0.0.0';
            const parsedNextjsVersion = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSemver"])(nextjsVersion) : ("TURBOPACK unreachable", undefined);
            let resolvedFrames;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (parsedNextjsVersion.major > 15 || parsedNextjsVersion.major === 15 && parsedNextjsVersion.minor >= 2) {
                const r = await resolveStackFrames(frames);
                if (r === null) {
                    return event;
                }
                resolvedFrames = r;
            } else {
                resolvedFrames = await Promise.all(frames.map((frame)=>resolveStackFrame(frame, hint.originalException)));
            }
            if (event.exception?.values?.[0]?.stacktrace?.frames) {
                event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames.map((frame, i, frames)=>{
                    const resolvedFrame = resolvedFrames[frames.length - 1 - i];
                    if (!resolvedFrame?.originalStackFrame || !resolvedFrame.originalCodeFrame) {
                        return {
                            ...frame,
                            platform: frame.filename?.startsWith('node:internal') ? 'nodejs' : undefined,
                            in_app: false
                        };
                    }
                    const { contextLine, preContextLines, postContextLines } = parseOriginalCodeFrame(resolvedFrame.originalCodeFrame);
                    return {
                        ...frame,
                        pre_context: preContextLines,
                        context_line: contextLine,
                        post_context: postContextLines,
                        function: resolvedFrame.originalStackFrame.methodName,
                        filename: resolvedFrame.originalStackFrame.file || undefined,
                        lineno: resolvedFrame.originalStackFrame.lineNumber || undefined,
                        colno: resolvedFrame.originalStackFrame.column || undefined
                    };
                });
            }
        }
    } catch (e) {
        return event;
    }
    return event;
}
async function resolveStackFrame(frame, error) {
    try {
        if (!(frame.file?.startsWith('webpack-internal:') || frame.file?.startsWith('file:'))) {
            return null;
        }
        const params = new URLSearchParams();
        params.append('isServer', String(false)); // doesn't matter since it is overwritten by isAppDirectory
        params.append('isEdgeServer', String(false)); // doesn't matter since it is overwritten by isAppDirectory
        params.append('isAppDirectory', String(true)); // will force server to do more thorough checking
        params.append('errorMessage', error.toString());
        Object.keys(frame).forEach((key)=>{
            params.append(key, (frame[key] ?? '').toString());
        });
        let basePath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env._sentryBasePath ?? globalWithInjectedValues._sentryBasePath ?? '';
        // Prefix the basepath with a slash if it doesn't have one
        if (basePath !== '' && !basePath.match(/^\//)) {
            basePath = `/${basePath}`;
        }
        const controller = new AbortController();
        const timer = setTimeout(()=>controller.abort(), 3000);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suppressTracing"])(()=>fetch(`${// eslint-disable-next-line no-restricted-globals
            typeof window === 'undefined' ? 'http://localhost:3000' : '' // TODO: handle the case where users define a different port
            }${basePath}/__nextjs_original-stack-frame?${params.toString()}`, {
                signal: controller.signal
            }).finally(()=>{
                clearTimeout(timer);
            }));
        if (!res.ok || res.status === 204) {
            return null;
        }
        const body = await res.json();
        return {
            originalCodeFrame: body.originalCodeFrame,
            originalStackFrame: body.originalStackFrame
        };
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Failed to symbolicate event with Next.js dev server', e);
        return null;
    }
}
async function resolveStackFrames(frames) {
    try {
        const postBody = {
            frames: frames.filter((frame)=>{
                return !!frame.file;
            }).map((frame)=>{
                // https://github.com/vercel/next.js/blob/df0573a478baa8b55478a7963c473dddd59a5e40/packages/next/src/client/components/react-dev-overlay/server/middleware-turbopack.ts#L129
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                frame.file = frame.file.replace(/^rsc:\/\/React\/[^/]+\//, '').replace(/\?\d+$/, '');
                return {
                    file: frame.file,
                    methodName: frame.methodName ?? '<unknown>',
                    arguments: [],
                    lineNumber: frame.lineNumber ?? 0,
                    column: frame.column ?? 0
                };
            }),
            isServer: false,
            isEdgeServer: false,
            isAppDirectory: true
        };
        let basePath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env._sentryBasePath ?? globalWithInjectedValues._sentryBasePath ?? '';
        // Prefix the basepath with a slash if it doesn't have one
        if (basePath !== '' && !basePath.match(/^\//)) {
            basePath = `/${basePath}`;
        }
        const controller = new AbortController();
        const timer = setTimeout(()=>controller.abort(), 3000);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suppressTracing"])(()=>fetch(`${// eslint-disable-next-line no-restricted-globals
            typeof window === 'undefined' ? 'http://localhost:3000' : '' // TODO: handle the case where users define a different port
            }${basePath}/__nextjs_original-stack-frames`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal,
                body: JSON.stringify(postBody)
            }).finally(()=>{
                clearTimeout(timer);
            }));
        if (!res.ok || res.status === 204) {
            return null;
        }
        const body = await res.json();
        return body.map((frame)=>{
            return {
                originalCodeFrame: frame.value.originalCodeFrame,
                originalStackFrame: frame.value.originalStackFrame
            };
        });
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Failed to symbolicate event with Next.js dev server', e);
        return null;
    }
}
function parseOriginalCodeFrame(codeFrame) {
    const preProcessedLines = codeFrame// Remove ASCII control characters that are used for syntax highlighting
    .replace(// eslint-disable-next-line no-control-regex
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '').split('\n')// Remove line that is supposed to indicate where the error happened
    .filter((line)=>!line.match(/^\s*\|/))// Find the error line
    .map((line)=>({
            line,
            isErrorLine: !!line.match(/^>/)
        }))// Remove the leading part that is just for prettier output
    .map((lineObj)=>({
            ...lineObj,
            line: lineObj.line.replace(/^.*\|/, '')
        }));
    const preContextLines = [];
    let contextLine = undefined;
    const postContextLines = [];
    let reachedContextLine = false;
    for (const preProcessedLine of preProcessedLines){
        if (preProcessedLine.isErrorLine) {
            contextLine = preProcessedLine.line;
            reachedContextLine = true;
        } else if (reachedContextLine) {
            postContextLines.push(preProcessedLine.line);
        } else {
            preContextLines.push(preProcessedLine.line);
        }
    }
    return {
        contextLine,
        preContextLines,
        postContextLines
    };
}
;
 //# sourceMappingURL=devErrorSymbolicationEventProcessor.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/getVercelEnv.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Returns an environment setting value determined by Vercel's `VERCEL_ENV` environment variable.
 *
 * @param isClient Flag to indicate whether to use the `NEXT_PUBLIC_` prefixed version of the environment variable.
 */ __turbopack_context__.s({
    "getVercelEnv": (()=>getVercelEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getVercelEnv(isClient) {
    const vercelEnvVar = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VERCEL_ENV : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_ENV;
    return vercelEnvVar ? `vercel-${vercelEnvVar}` : undefined;
}
;
 //# sourceMappingURL=getVercelEnv.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/nextNavigationErrorUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNotFoundNavigationError": (()=>isNotFoundNavigationError),
    "isRedirectNavigationError": (()=>isRedirectNavigationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
;
/**
 * Determines whether input is a Next.js not-found error.
 * https://beta.nextjs.org/docs/api-reference/notfound#notfound
 */ function isNotFoundNavigationError(subject) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(subject) && [
        'NEXT_NOT_FOUND',
        'NEXT_HTTP_ERROR_FALLBACK;404'
    ].includes(subject.digest);
}
/**
 * Determines whether input is a Next.js redirect error.
 * https://beta.nextjs.org/docs/api-reference/redirect#redirect
 */ function isRedirectNavigationError(subject) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(subject) && typeof subject.digest === 'string' && subject.digest.startsWith('NEXT_REDIRECT;') // a redirect digest looks like "NEXT_REDIRECT;[redirect path]"
    ;
}
;
 //# sourceMappingURL=nextNavigationErrorUtils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "INCOMPLETE_APP_ROUTER_INSTRUMENTATION_TRANSACTION_NAME": (()=>INCOMPLETE_APP_ROUTER_INSTRUMENTATION_TRANSACTION_NAME),
    "appRouterInstrumentNavigation": (()=>appRouterInstrumentNavigation),
    "appRouterInstrumentPageLoad": (()=>appRouterInstrumentPageLoad),
    "captureRouterTransitionStart": (()=>captureRouterTransitionStart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/tracing/browserTracingIntegration.js [app-client] (ecmascript)");
;
;
const INCOMPLETE_APP_ROUTER_INSTRUMENTATION_TRANSACTION_NAME = 'incomplete-app-router-transaction';
/**
 * This mutable keeps track of what router navigation instrumentation mechanism we are using.
 *
 * The default one is 'router-patch' which is a way of instrumenting that worked up until Next.js 15.3.0 was released.
 * For this method we took the global router instance and simply monkey patched all the router methods like push(), replace(), and so on.
 * This worked because Next.js itself called the router methods for things like the <Link /> component.
 * Vercel decided that it is not good to call these public API methods from within the framework so they switched to an internal system that completely bypasses our monkey patching. This happened in 15.3.0.
 *
 * We raised with Vercel that this breaks our SDK so together with them we came up with an API for `instrumentation-client.ts` called `onRouterTransitionStart` that is called whenever a navigation is kicked off.
 *
 * Now we have the problem of version compatibility.
 * For older Next.js versions we cannot use the new hook so we need to always patch the router.
 * For newer Next.js versions we cannot know whether the user actually registered our handler for the `onRouterTransitionStart` hook, so we need to wait until it was called at least once before switching the instrumentation mechanism.
 * The problem is, that the user may still have registered a hook and then call a patched router method.
 * First, the monkey patched router method will be called, starting a navigation span, then the hook will also called.
 * We need to handle this case and not create two separate navigation spans but instead update the current navigation span and then switch to the new instrumentation mode.
 * This is all denoted by this `navigationRoutingMode` variable.
 */ let navigationRoutingMode = 'router-patch';
const currentRouterPatchingNavigationSpanRef = {
    current: undefined
};
/** Instruments the Next.js app router for pageloads. */ function appRouterInstrumentPageLoad(client) {
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startBrowserTracingPageLoadSpan"])(client, {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.pathname,
        // pageload should always start at timeOrigin (and needs to be in s, not ms)
        startTime: origin ? origin / 1000 : undefined,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'pageload',
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.pageload.nextjs.app_router_instrumentation',
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url'
        }
    });
}
// Yes, yes, I know we shouldn't depend on these internals. But that's where we are at. We write the ugly code, so you don't have to.
const GLOBAL_OBJ_WITH_NEXT_ROUTER = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
/*
 * The routing instrumentation needs to handle a few cases:
 * - Router operations:
 *  - router.push() (either explicitly called or implicitly through <Link /> tags)
 *  - router.replace() (either explicitly called or implicitly through <Link replace /> tags)
 *  - router.back()
 *  - router.forward()
 * - Browser operations:
 *  - native Browser-back / popstate event (implicitly called by router.back())
 *  - native Browser-forward / popstate event (implicitly called by router.forward())
 */ /** Instruments the Next.js app router for navigation. */ function appRouterInstrumentNavigation(client) {
    routerTransitionHandler = (href, navigationType)=>{
        const pathname = new URL(href, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.href).pathname;
        if (navigationRoutingMode === 'router-patch') {
            navigationRoutingMode = 'transition-start-hook';
        }
        const currentNavigationSpan = currentRouterPatchingNavigationSpanRef.current;
        if (currentNavigationSpan) {
            currentNavigationSpan.updateName(pathname);
            currentNavigationSpan.setAttributes({
                'navigation.type': `router.${navigationType}`
            });
            currentRouterPatchingNavigationSpanRef.current = undefined;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startBrowserTracingNavigationSpan"])(client, {
                name: pathname,
                attributes: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'navigation',
                    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.navigation.nextjs.app_router_instrumentation',
                    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url',
                    'navigation.type': `router.${navigationType}`
                }
            });
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener('popstate', ()=>{
        if (currentRouterPatchingNavigationSpanRef.current?.isRecording()) {
            currentRouterPatchingNavigationSpanRef.current.updateName(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.pathname);
            currentRouterPatchingNavigationSpanRef.current.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"], 'url');
        } else {
            currentRouterPatchingNavigationSpanRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startBrowserTracingNavigationSpan"])(client, {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.pathname,
                attributes: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.navigation.nextjs.app_router_instrumentation',
                    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url',
                    'navigation.type': 'browser.popstate'
                }
            });
        }
    });
    let routerPatched = false;
    let triesToFindRouter = 0;
    const MAX_TRIES_TO_FIND_ROUTER = 500;
    const ROUTER_AVAILABILITY_CHECK_INTERVAL_MS = 20;
    const checkForRouterAvailabilityInterval = setInterval(()=>{
        triesToFindRouter++;
        const router = GLOBAL_OBJ_WITH_NEXT_ROUTER?.next?.router ?? GLOBAL_OBJ_WITH_NEXT_ROUTER?.nd?.router;
        if (routerPatched || triesToFindRouter > MAX_TRIES_TO_FIND_ROUTER) {
            clearInterval(checkForRouterAvailabilityInterval);
        } else if (router) {
            clearInterval(checkForRouterAvailabilityInterval);
            routerPatched = true;
            patchRouter(client, router, currentRouterPatchingNavigationSpanRef);
            // If the router at any point gets overridden - patch again
            [
                'nd',
                'next'
            ].forEach((globalValueName)=>{
                const globalValue = GLOBAL_OBJ_WITH_NEXT_ROUTER[globalValueName];
                if (globalValue) {
                    GLOBAL_OBJ_WITH_NEXT_ROUTER[globalValueName] = new Proxy(globalValue, {
                        set (target, p, newValue) {
                            if (p === 'router' && typeof newValue === 'object' && newValue !== null) {
                                patchRouter(client, newValue, currentRouterPatchingNavigationSpanRef);
                            }
                            // @ts-expect-error we cannot possibly type this
                            target[p] = newValue;
                            return true;
                        }
                    });
                }
            });
        }
    }, ROUTER_AVAILABILITY_CHECK_INTERVAL_MS);
}
function transactionNameifyRouterArgument(target) {
    try {
        // We provide an arbitrary base because we only care about the pathname and it makes URL parsing more resilient.
        return new URL(target, 'http://example.com/').pathname;
    } catch  {
        return '/';
    }
}
const patchedRouters = new WeakSet();
function patchRouter(client, router, currentNavigationSpanRef) {
    if (patchedRouters.has(router)) {
        return;
    }
    patchedRouters.add(router);
    [
        'back',
        'forward',
        'push',
        'replace'
    ].forEach((routerFunctionName)=>{
        if (router?.[routerFunctionName]) {
            // @ts-expect-error Weird type error related to not knowing how to associate return values with the individual functions - we can just ignore
            router[routerFunctionName] = new Proxy(router[routerFunctionName], {
                apply (target, thisArg, argArray) {
                    if (navigationRoutingMode !== 'router-patch') {
                        return target.apply(thisArg, argArray);
                    }
                    let transactionName = INCOMPLETE_APP_ROUTER_INSTRUMENTATION_TRANSACTION_NAME;
                    const transactionAttributes = {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'navigation',
                        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.navigation.nextjs.app_router_instrumentation',
                        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url'
                    };
                    if (routerFunctionName === 'push') {
                        transactionName = transactionNameifyRouterArgument(argArray[0]);
                        transactionAttributes['navigation.type'] = 'router.push';
                    } else if (routerFunctionName === 'replace') {
                        transactionName = transactionNameifyRouterArgument(argArray[0]);
                        transactionAttributes['navigation.type'] = 'router.replace';
                    } else if (routerFunctionName === 'back') {
                        transactionAttributes['navigation.type'] = 'router.back';
                    } else if (routerFunctionName === 'forward') {
                        transactionAttributes['navigation.type'] = 'router.forward';
                    }
                    currentNavigationSpanRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startBrowserTracingNavigationSpan"])(client, {
                        name: transactionName,
                        attributes: transactionAttributes
                    });
                    return target.apply(thisArg, argArray);
                }
            });
        }
    });
}
let routerTransitionHandler = undefined;
/**
 * A handler for Next.js' `onRouterTransitionStart` hook in `instrumentation-client.ts` to record navigation spans in Sentry.
 */ function captureRouterTransitionStart(href, navigationType) {
    if (routerTransitionHandler) {
        routerTransitionHandler(href, navigationType);
    }
}
;
 //# sourceMappingURL=appRouterRoutingInstrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/pagesRouterRoutingInstrumentation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pagesRouterInstrumentNavigation": (()=>pagesRouterInstrumentNavigation),
    "pagesRouterInstrumentPageLoad": (()=>pagesRouterInstrumentPageLoad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/baggage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/tracing/browserTracingIntegration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [app-client] (ecmascript)");
;
;
;
;
// next/router v10 is CJS
//
// For ESM/CJS interoperability 'reasons', depending on how this file is loaded, Router might be on the default export
const Router = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].events ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default;
const globalObject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"];
/**
 * Describes data located in the __NEXT_DATA__ script tag. This tag is present on every page of a Next.js app.
 */ /**
 * Every Next.js page (static and dynamic ones) comes with a script tag with the id "__NEXT_DATA__". This script tag
 * contains a JSON object with data that was either generated at build time for static pages (`getStaticProps`), or at
 * runtime with data fetchers like `getServerSideProps.`.
 *
 * We can use this information to:
 * - Always get the parameterized route we're in when loading a page.
 * - Send trace information (trace-id, baggage) from the server to the client.
 *
 * This function extracts this information.
 */ function extractNextDataTagInformation() {
    let nextData;
    // Let's be on the safe side and actually check first if there is really a __NEXT_DATA__ script tag on the page.
    // Theoretically this should always be the case though.
    const nextDataTag = globalObject.document.getElementById('__NEXT_DATA__');
    if (nextDataTag?.innerHTML) {
        try {
            nextData = JSON.parse(nextDataTag.innerHTML);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Could not extract __NEXT_DATA__');
        }
    }
    if (!nextData) {
        return {};
    }
    const nextDataTagInfo = {};
    const { page, query, props } = nextData;
    // `nextData.page` always contains the parameterized route - except for when an error occurs in a data fetching
    // function, then it is "/_error", but that isn't a problem since users know which route threw by looking at the
    // parent transaction
    // TODO: Actually this is a problem (even though it is not that big), because the DSC and the transaction payload will contain
    // a different transaction name. Maybe we can fix this. Idea: Also send transaction name via pageProps when available.
    nextDataTagInfo.route = page;
    nextDataTagInfo.params = query;
    if (props?.pageProps) {
        nextDataTagInfo.sentryTrace = props.pageProps._sentryTraceData;
        nextDataTagInfo.baggage = props.pageProps._sentryBaggage;
    }
    return nextDataTagInfo;
}
/**
 * Instruments the Next.js pages router for pageloads.
 * Only supported for client side routing. Works for Next >= 10.
 *
 * Leverages the SingletonRouter from the `next/router` to
 * generate pageload/navigation transactions and parameterize
 * transaction names.
 */ function pagesRouterInstrumentPageLoad(client) {
    const { route, params, sentryTrace, baggage } = extractNextDataTagInformation();
    const parsedBaggage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBaggageHeader"])(baggage);
    let name = route || globalObject.location.pathname;
    // /_error is the fallback page for all errors. If there is a transaction name for /_error, use that instead
    if (parsedBaggage?.['sentry-transaction'] && name === '/_error') {
        name = parsedBaggage['sentry-transaction'];
        // Strip any HTTP method from the span name
        name = name.replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, '');
    }
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startBrowserTracingPageLoadSpan"])(client, {
        name,
        // pageload should always start at timeOrigin (and needs to be in s, not ms)
        startTime: origin ? origin / 1000 : undefined,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'pageload',
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.pageload.nextjs.pages_router_instrumentation',
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: route ? 'route' : 'url',
            ...params && client.getOptions().sendDefaultPii && {
                ...params
            }
        }
    }, {
        sentryTrace,
        baggage
    });
}
/**
 * Instruments the Next.js pages router for navigation.
 * Only supported for client side routing. Works for Next >= 10.
 *
 * Leverages the SingletonRouter from the `next/router` to
 * generate pageload/navigation transactions and parameterize
 * transaction names.
 */ function pagesRouterInstrumentNavigation(client) {
    Router.events.on('routeChangeStart', (navigationTarget)=>{
        const strippedNavigationTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripUrlQueryAndFragment"])(navigationTarget);
        const matchedRoute = getNextRouteFromPathname(strippedNavigationTarget);
        let newLocation;
        let spanSource;
        if (matchedRoute) {
            newLocation = matchedRoute;
            spanSource = 'route';
        } else {
            newLocation = strippedNavigationTarget;
            spanSource = 'url';
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startBrowserTracingNavigationSpan"])(client, {
            name: newLocation,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'navigation',
                [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.navigation.nextjs.pages_router_instrumentation',
                [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: spanSource
            }
        });
    });
}
function getNextRouteFromPathname(pathname) {
    const pageRoutes = globalObject.__BUILD_MANIFEST?.sortedPages;
    // Page route should in 99.999% of the cases be defined by now but just to be sure we make a check here
    if (!pageRoutes) {
        return;
    }
    return pageRoutes.find((route)=>{
        const routeRegExp = convertNextRouteToRegExp(route);
        return pathname.match(routeRegExp);
    });
}
/**
 * Converts a Next.js style route to a regular expression that matches on pathnames (no query params or URL fragments).
 *
 * In general this involves replacing any instances of square brackets in a route with a wildcard:
 * e.g. "/users/[id]/info" becomes /\/users\/([^/]+?)\/info/
 *
 * Some additional edgecases need to be considered:
 * - All routes have an optional slash at the end, meaning users can navigate to "/users/[id]/info" or
 *   "/users/[id]/info/" - both will be resolved to "/users/[id]/info".
 * - Non-optional "catchall"s at the end of a route must be considered when matching (e.g. "/users/[...params]").
 * - Optional "catchall"s at the end of a route must be considered when matching (e.g. "/users/[[...params]]").
 *
 * @param route A Next.js style route as it is found in `global.__BUILD_MANIFEST.sortedPages`
 */ function convertNextRouteToRegExp(route) {
    // We can assume a route is at least "/".
    const routeParts = route.split('/');
    let optionalCatchallWildcardRegex = '';
    if (routeParts[routeParts.length - 1]?.match(/^\[\[\.\.\..+\]\]$/)) {
        // If last route part has pattern "[[...xyz]]" we pop the latest route part to get rid of the required trailing
        // slash that would come before it if we didn't pop it.
        routeParts.pop();
        optionalCatchallWildcardRegex = '(?:/(.+?))?';
    }
    const rejoinedRouteParts = routeParts.map((routePart)=>routePart.replace(/^\[\.\.\..+\]$/, '(.+?)') // Replace catch all wildcard with regex wildcard
        .replace(/^\[.*\]$/, '([^/]+?)')).join('/');
    // eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor -- routeParts are from the build manifest, so no raw user input
    return new RegExp(`^${rejoinedRouteParts}${optionalCatchallWildcardRegex}(?:/)?$`);
}
;
 //# sourceMappingURL=pagesRouterRoutingInstrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/nextRoutingInstrumentation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nextRouterInstrumentNavigation": (()=>nextRouterInstrumentNavigation),
    "nextRouterInstrumentPageLoad": (()=>nextRouterInstrumentPageLoad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$pagesRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/pagesRouterRoutingInstrumentation.js [app-client] (ecmascript)");
;
;
;
/**
 * Instruments the Next.js Client Router for page loads.
 */ function nextRouterInstrumentPageLoad(client) {
    const isAppRouter = !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.getElementById('__NEXT_DATA__');
    if (isAppRouter) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appRouterInstrumentPageLoad"])(client);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$pagesRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pagesRouterInstrumentPageLoad"])(client);
    }
}
/**
 * Instruments the Next.js Client Router for navigation.
 */ function nextRouterInstrumentNavigation(client) {
    const isAppRouter = !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.getElementById('__NEXT_DATA__');
    if (isAppRouter) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appRouterInstrumentNavigation"])(client);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$pagesRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pagesRouterInstrumentNavigation"])(client);
    }
}
;
 //# sourceMappingURL=nextRoutingInstrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/browserTracingIntegration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browserTracingIntegration": (()=>browserTracingIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/tracing/browserTracingIntegration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$nextRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/nextRoutingInstrumentation.js [app-client] (ecmascript)");
;
;
/**
 * A custom browser tracing integration for Next.js.
 */ function browserTracingIntegration(options = {}) {
    const browserTracingIntegrationInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserTracingIntegration"])({
        ...options,
        instrumentNavigation: false,
        instrumentPageLoad: false,
        onRequestSpanStart (...args) {
            const [span, { headers }] = args;
            // Next.js prefetch requests have a `next-router-prefetch` header
            if (headers?.get('next-router-prefetch')) {
                span?.setAttribute('http.request.prefetch', true);
            }
            return options.onRequestSpanStart?.(...args);
        }
    });
    const { instrumentPageLoad = true, instrumentNavigation = true } = options;
    return {
        ...browserTracingIntegrationInstance,
        afterAllSetup (client) {
            // We need to run the navigation span instrumentation before the `afterAllSetup` hook on the normal browser
            // tracing integration because we need to ensure the order of execution is as follows:
            // Instrumentation to start span on RSC fetch request runs -> Instrumentation to put tracing headers from active span on fetch runs
            // If it were the other way around, the RSC fetch request would not receive the tracing headers from the navigation transaction.
            if (instrumentNavigation) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$nextRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRouterInstrumentNavigation"])(client);
            }
            browserTracingIntegrationInstance.afterAllSetup(client);
            if (instrumentPageLoad) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$nextRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRouterInstrumentPageLoad"])(client);
            }
        }
    };
}
;
 //# sourceMappingURL=browserTracingIntegration.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/clientNormalizationIntegration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nextjsClientStackFrameNormalizationIntegration": (()=>nextjsClientStackFrameNormalizationIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$rewriteframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/integrations/rewriteframes.js [app-client] (ecmascript)");
;
;
const nextjsClientStackFrameNormalizationIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(({ assetPrefix, basePath, rewriteFramesAssetPrefixPath, experimentalThirdPartyOriginStackFrames })=>{
    const rewriteFramesInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$rewriteframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rewriteFramesIntegration"])({
        // Turn `<origin>/<path>/_next/static/...` into `app:///_next/static/...`
        iteratee: (frame)=>{
            if (experimentalThirdPartyOriginStackFrames) {
                // Not sure why but access to global WINDOW from @sentry/Browser causes hideous ci errors
                // eslint-disable-next-line no-restricted-globals
                const windowOrigin = typeof window !== 'undefined' && window.location ? window.location.origin : '';
                // A filename starting with the local origin and not ending with JS is most likely JS in HTML which we do not want to rewrite
                if (frame.filename?.startsWith(windowOrigin) && !frame.filename.endsWith('.js')) {
                    return frame;
                }
                if (assetPrefix) {
                    // If the user defined an asset prefix, we need to strip it so that we can match it with uploaded sourcemaps.
                    // assetPrefix always takes priority over basePath.
                    if (frame.filename?.startsWith(assetPrefix)) {
                        frame.filename = frame.filename.replace(assetPrefix, 'app://');
                    }
                } else if (basePath) {
                    // If the user defined a base path, we need to strip it to match with uploaded sourcemaps.
                    // We should only do this for same-origin filenames though, so that third party assets are not rewritten.
                    try {
                        const { origin: frameOrigin } = new URL(frame.filename);
                        if (frameOrigin === windowOrigin) {
                            frame.filename = frame.filename?.replace(frameOrigin, 'app://').replace(basePath, '');
                        }
                    } catch (err) {
                    // Filename wasn't a properly formed URL, so there's nothing we can do
                    }
                }
            } else {
                try {
                    const { origin } = new URL(frame.filename);
                    frame.filename = frame.filename?.replace(origin, 'app://').replace(rewriteFramesAssetPrefixPath, '');
                } catch (err) {
                // Filename wasn't a properly formed URL, so there's nothing we can do
                }
            }
            // We need to URI-decode the filename because Next.js has wildcard routes like "/users/[id].js" which show up as "/users/%5id%5.js" in Error stacktraces.
            // The corresponding sources that Next.js generates have proper brackets so we also need proper brackets in the frame so that source map resolving works.
            if (experimentalThirdPartyOriginStackFrames) {
                if (frame.filename?.includes('/_next')) {
                    frame.filename = decodeURI(frame.filename);
                }
                if (frame.filename?.match(/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/)) {
                    // We don't care about these frames. It's Next.js internal code.
                    frame.in_app = false;
                }
            } else {
                if (frame.filename?.startsWith('app:///_next')) {
                    frame.filename = decodeURI(frame.filename);
                }
                if (frame.filename?.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/)) {
                    // We don't care about these frames. It's Next.js internal code.
                    frame.in_app = false;
                }
            }
            return frame;
        }
    });
    return {
        ...rewriteFramesInstance,
        name: 'NextjsClientStackFrameNormalization'
    };
});
;
 //# sourceMappingURL=clientNormalizationIntegration.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/tunnelRoute.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyTunnelRouteOption": (()=>applyTunnelRouteOption)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [app-client] (ecmascript)");
;
;
const globalWithInjectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
/**
 * Applies the `tunnel` option to the Next.js SDK options based on `withSentryConfig`'s `tunnelRoute` option.
 */ function applyTunnelRouteOption(options) {
    const tunnelRouteOption = ("TURBOPACK compile-time value", "/monitoring") || globalWithInjectedValues._sentryRewritesTunnelPath;
    if (tunnelRouteOption && options.dsn) {
        const dsnComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnFromString"])(options.dsn);
        if (!dsnComponents) {
            return;
        }
        const sentrySaasDsnMatch = dsnComponents.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
        if (sentrySaasDsnMatch) {
            const orgId = sentrySaasDsnMatch[1];
            const regionCode = sentrySaasDsnMatch[2];
            let tunnelPath = `${tunnelRouteOption}?o=${orgId}&p=${dsnComponents.projectId}`;
            if (regionCode) {
                tunnelPath += `&r=${regionCode}`;
            }
            options.tunnel = tunnelPath;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info(`Tunneling events to "${tunnelPath}"`);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.');
        }
    }
}
;
 //# sourceMappingURL=tunnelRoute.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "init": (()=>init),
    "withSentryConfig": (()=>withSentryConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$react$2f$build$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/react/build/esm/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/browser/build/npm/esm/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$devErrorSymbolicationEventProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/devErrorSymbolicationEventProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$getVercelEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/getVercelEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextNavigationErrorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/common/nextNavigationErrorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/browserTracingIntegration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$clientNormalizationIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/clientNormalizationIntegration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$tunnelRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@sentry/nextjs/build/esm/client/tunnelRoute.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
let clientIsInitialized = false;
const globalWithInjectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
// Treeshakable guard to remove all code related to tracing
/** Inits the Sentry NextJS SDK on the browser with the React SDK. */ function init(options) {
    if (clientIsInitialized) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            // eslint-disable-next-line no-console
            console.warn('[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.');
        });
    }
    clientIsInitialized = true;
    const opts = {
        environment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$getVercelEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVercelEnv"])(true) || ("TURBOPACK compile-time value", "development"),
        defaultIntegrations: getDefaultIntegrations(options),
        release: ("TURBOPACK compile-time value", "add3876db9ba07da5ec00c6dddcec9995260eb62") || globalWithInjectedValues._sentryRelease,
        ...options
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$tunnelRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTunnelRouteOption"])(opts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applySdkMetadata"])(opts, 'nextjs', [
        'nextjs',
        'react'
    ]);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$react$2f$build$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"])(opts);
    const filterTransactions = (event)=>event.type === 'transaction' && event.transaction === '/404' ? null : event;
    filterTransactions.id = 'NextClient404Filter';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEventProcessor"])(filterTransactions);
    const filterIncompleteNavigationTransactions = (event)=>event.type === 'transaction' && event.transaction === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCOMPLETE_APP_ROUTER_INSTRUMENTATION_TRANSACTION_NAME"] ? null : event;
    filterIncompleteNavigationTransactions.id = 'IncompleteTransactionFilter';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEventProcessor"])(filterIncompleteNavigationTransactions);
    const filterNextRedirectError = (event, hint)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextNavigationErrorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRedirectNavigationError"])(hint?.originalException) || event.exception?.values?.[0]?.value === 'NEXT_REDIRECT' ? null : event;
    filterNextRedirectError.id = 'NextRedirectErrorFilter';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEventProcessor"])(filterNextRedirectError);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEventProcessor"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$devErrorSymbolicationEventProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devErrorSymbolicationEventProcessor"]);
    }
    try {
        // @ts-expect-error `process.turbopack` is a magic string that will be replaced by Next.js
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalScope"])().setTag('turbopack', true);
        }
    } catch (e) {
    // Noop
    // The statement above can throw because process is not defined on the client
    }
    return client;
}
function getDefaultIntegrations(options) {
    const customDefaultIntegrations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultIntegrations"])(options);
    // This evaluates to true unless __SENTRY_TRACING__ is text-replaced with "false",
    // in which case everything inside will get tree-shaken away
    if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
        customDefaultIntegrations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$browserTracingIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserTracingIntegration"])());
    }
    // These values are injected at build time, based on the output directory specified in the build config. Though a default
    // is set there, we set it here as well, just in case something has gone wrong with the injection.
    const rewriteFramesAssetPrefixPath = ("TURBOPACK compile-time value", "") || globalWithInjectedValues._sentryRewriteFramesAssetPrefixPath || '';
    const assetPrefix = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env._sentryAssetPrefix || globalWithInjectedValues._sentryAssetPrefix;
    const basePath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env._sentryBasePath || globalWithInjectedValues._sentryBasePath;
    const experimentalThirdPartyOriginStackFrames = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env._experimentalThirdPartyOriginStackFrames === 'true' || globalWithInjectedValues._experimentalThirdPartyOriginStackFrames === 'true';
    customDefaultIntegrations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$clientNormalizationIntegration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextjsClientStackFrameNormalizationIntegration"])({
        assetPrefix,
        basePath,
        rewriteFramesAssetPrefixPath,
        experimentalThirdPartyOriginStackFrames
    }));
    return customDefaultIntegrations;
}
/**
 * Just a passthrough in case this is imported from the client.
 */ function withSentryConfig(exportedUserNextConfig) {
    return exportedUserNextConfig;
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}}),
"[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}}),
"[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
exports._ = _class_private_field_loose_base;
}}),
"[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
exports._ = _class_private_field_loose_key;
}}),
"[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
function _tagged_template_literal_loose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports._ = _tagged_template_literal_loose;
}}),
"[project]/apps/chat-ui/node_modules/@spotlightjs/spotlight/dist/overlay.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$spotlightjs$2f$overlay$2f$dist$2f$sentry$2d$spotlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@spotlightjs/overlay/dist/sentry-spotlight.js [app-client] (ecmascript)");
;
}}),
"[project]/apps/chat-ui/node_modules/@spotlightjs/spotlight/dist/overlay.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$spotlightjs$2f$overlay$2f$dist$2f$sentry$2d$spotlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@spotlightjs/overlay/dist/sentry-spotlight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$chat$2d$ui$2f$node_modules$2f40$spotlightjs$2f$spotlight$2f$dist$2f$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/chat-ui/node_modules/@spotlightjs/spotlight/dist/overlay.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=79789_d56b5e61._.js.map