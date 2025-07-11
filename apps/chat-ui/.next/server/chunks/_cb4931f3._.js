module.exports = {

"[project]/node_modules/semver/internal/constants.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}}),
"[project]/node_modules/semver/internal/debug.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}}),
"[project]/node_modules/semver/internal/re.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [instrumentation] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [instrumentation] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numberic identifiers include numberic identifiers but can be longer.
// Therefore non-numberic identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}}),
"[project]/node_modules/semver/internal/parse-options.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}}),
"[project]/node_modules/semver/internal/identifiers.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}}),
"[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [instrumentation] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [instrumentation] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [instrumentation] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [instrumentation] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/node_modules/semver/internal/identifiers.js [instrumentation] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}}),
"[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}}),
"[project]/node_modules/semver/functions/valid.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}}),
"[project]/node_modules/semver/functions/clean.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}}),
"[project]/node_modules/semver/functions/inc.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}}),
"[project]/node_modules/semver/functions/diff.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are preleases
    return 'prerelease';
};
module.exports = diff;
}}),
"[project]/node_modules/semver/functions/major.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}}),
"[project]/node_modules/semver/functions/minor.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}}),
"[project]/node_modules/semver/functions/patch.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}}),
"[project]/node_modules/semver/functions/prerelease.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}}),
"[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}}),
"[project]/node_modules/semver/functions/rcompare.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}}),
"[project]/node_modules/semver/functions/compare-loose.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}}),
"[project]/node_modules/semver/functions/compare-build.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}}),
"[project]/node_modules/semver/functions/sort.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [instrumentation] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}}),
"[project]/node_modules/semver/functions/rsort.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [instrumentation] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}}),
"[project]/node_modules/semver/functions/gt.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}}),
"[project]/node_modules/semver/functions/lt.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}}),
"[project]/node_modules/semver/functions/eq.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}}),
"[project]/node_modules/semver/functions/neq.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}}),
"[project]/node_modules/semver/functions/gte.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}}),
"[project]/node_modules/semver/functions/lte.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}}),
"[project]/node_modules/semver/functions/cmp.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const eq = __turbopack_context__.r("[project]/node_modules/semver/functions/eq.js [instrumentation] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/semver/functions/neq.js [instrumentation] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [instrumentation] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [instrumentation] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [instrumentation] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [instrumentation] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}}),
"[project]/node_modules/semver/functions/coerce.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [instrumentation] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}}),
"[project]/node_modules/semver/internal/lrucache.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}}),
"[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/node_modules/semver/internal/lrucache.js [instrumentation] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [instrumentation] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [instrumentation] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [instrumentation] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [instrumentation] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [instrumentation] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}}),
"[project]/node_modules/semver/classes/comparator.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [instrumentation] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [instrumentation] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/semver/functions/cmp.js [instrumentation] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [instrumentation] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
}}),
"[project]/node_modules/semver/functions/satisfies.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}}),
"[project]/node_modules/semver/ranges/to-comparators.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}}),
"[project]/node_modules/semver/ranges/max-satisfying.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}}),
"[project]/node_modules/semver/ranges/min-satisfying.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}}),
"[project]/node_modules/semver/ranges/min-version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [instrumentation] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}}),
"[project]/node_modules/semver/ranges/valid.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}}),
"[project]/node_modules/semver/ranges/outside.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [instrumentation] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [instrumentation] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [instrumentation] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [instrumentation] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [instrumentation] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [instrumentation] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}}),
"[project]/node_modules/semver/ranges/gtr.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [instrumentation] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}}),
"[project]/node_modules/semver/ranges/ltr.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [instrumentation] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}}),
"[project]/node_modules/semver/ranges/intersects.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}}),
"[project]/node_modules/semver/ranges/simplify.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [instrumentation] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}}),
"[project]/node_modules/semver/ranges/subset.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [instrumentation] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [instrumentation] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}}),
"[project]/node_modules/semver/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [instrumentation] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [instrumentation] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/node_modules/semver/internal/identifiers.js [instrumentation] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [instrumentation] (ecmascript)");
const valid = __turbopack_context__.r("[project]/node_modules/semver/functions/valid.js [instrumentation] (ecmascript)");
const clean = __turbopack_context__.r("[project]/node_modules/semver/functions/clean.js [instrumentation] (ecmascript)");
const inc = __turbopack_context__.r("[project]/node_modules/semver/functions/inc.js [instrumentation] (ecmascript)");
const diff = __turbopack_context__.r("[project]/node_modules/semver/functions/diff.js [instrumentation] (ecmascript)");
const major = __turbopack_context__.r("[project]/node_modules/semver/functions/major.js [instrumentation] (ecmascript)");
const minor = __turbopack_context__.r("[project]/node_modules/semver/functions/minor.js [instrumentation] (ecmascript)");
const patch = __turbopack_context__.r("[project]/node_modules/semver/functions/patch.js [instrumentation] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/node_modules/semver/functions/prerelease.js [instrumentation] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [instrumentation] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/node_modules/semver/functions/rcompare.js [instrumentation] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-loose.js [instrumentation] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [instrumentation] (ecmascript)");
const sort = __turbopack_context__.r("[project]/node_modules/semver/functions/sort.js [instrumentation] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/node_modules/semver/functions/rsort.js [instrumentation] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [instrumentation] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [instrumentation] (ecmascript)");
const eq = __turbopack_context__.r("[project]/node_modules/semver/functions/eq.js [instrumentation] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/semver/functions/neq.js [instrumentation] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [instrumentation] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [instrumentation] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/semver/functions/cmp.js [instrumentation] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/node_modules/semver/functions/coerce.js [instrumentation] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [instrumentation] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [instrumentation] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [instrumentation] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/node_modules/semver/ranges/to-comparators.js [instrumentation] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/node_modules/semver/ranges/max-satisfying.js [instrumentation] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/node_modules/semver/ranges/min-satisfying.js [instrumentation] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/node_modules/semver/ranges/min-version.js [instrumentation] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/node_modules/semver/ranges/valid.js [instrumentation] (ecmascript)");
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [instrumentation] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/node_modules/semver/ranges/gtr.js [instrumentation] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/node_modules/semver/ranges/ltr.js [instrumentation] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/node_modules/semver/ranges/intersects.js [instrumentation] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/node_modules/semver/ranges/simplify.js [instrumentation] (ecmascript)");
const subset = __turbopack_context__.r("[project]/node_modules/semver/ranges/subset.js [instrumentation] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '0.57.2'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
/**
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md
 */ var AttributeNames;
(function(AttributeNames) {
    AttributeNames["HTTP_ERROR_NAME"] = "http.error_name";
    AttributeNames["HTTP_ERROR_MESSAGE"] = "http.error_message";
    AttributeNames["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.headerCapture = exports.getIncomingStableRequestMetricAttributesOnResponse = exports.getIncomingRequestMetricAttributesOnResponse = exports.getIncomingRequestAttributesOnResponse = exports.getIncomingRequestMetricAttributes = exports.getIncomingRequestAttributes = exports.getRemoteClientAddress = exports.getOutgoingRequestMetricAttributesOnResponse = exports.getOutgoingRequestAttributesOnResponse = exports.setAttributesFromHttpKind = exports.getOutgoingRequestMetricAttributes = exports.getOutgoingRequestAttributes = exports.extractHostnameAndPort = exports.isValidOptionsType = exports.getRequestInfo = exports.isCompressed = exports.setResponseContentLengthAttribute = exports.setRequestContentLengthAttribute = exports.setSpanWithError = exports.satisfiesPattern = exports.parseResponseStatus = exports.getAbsoluteUrl = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const forwardedParse = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/forwarded-parse/index.js [instrumentation] (ecmascript)");
/**
 * Get an absolute url
 */ const getAbsoluteUrl = (requestUrl, headers, fallbackProtocol = 'http:')=>{
    const reqUrlObject = requestUrl || {};
    const protocol = reqUrlObject.protocol || fallbackProtocol;
    const port = (reqUrlObject.port || '').toString();
    const path = reqUrlObject.path || '/';
    let host = reqUrlObject.host || reqUrlObject.hostname || headers.host || 'localhost';
    // if there is no port in host and there is a port
    // it should be displayed if it's not 80 and 443 (default ports)
    if (host.indexOf(':') === -1 && port && port !== '80' && port !== '443') {
        host += `:${port}`;
    }
    return `${protocol}//${host}${path}`;
};
exports.getAbsoluteUrl = getAbsoluteUrl;
/**
 * Parse status code from HTTP response. [More details](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/data-http.md#status)
 */ const parseResponseStatus = (kind, statusCode)=>{
    const upperBound = kind === api_1.SpanKind.CLIENT ? 400 : 500;
    // 1xx, 2xx, 3xx are OK on client and server
    // 4xx is OK on server
    if (statusCode && statusCode >= 100 && statusCode < upperBound) {
        return api_1.SpanStatusCode.UNSET;
    }
    // All other codes are error
    return api_1.SpanStatusCode.ERROR;
};
exports.parseResponseStatus = parseResponseStatus;
/**
 * Check whether the given obj match pattern
 * @param constant e.g URL of request
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
exports.satisfiesPattern = satisfiesPattern;
/**
 * Sets the span with the error passed in params
 * @param {Span} span the span that need to be set
 * @param {Error} error error that will be set to span
 * @param {SemconvStability} semconvStability determines which semconv version to use
 */ const setSpanWithError = (span, error, semconvStability)=>{
    const message = error.message;
    if ((semconvStability & 2 /* OLD */ ) === 2 /* OLD */ ) {
        span.setAttribute(AttributeNames_1.AttributeNames.HTTP_ERROR_NAME, error.name);
        span.setAttribute(AttributeNames_1.AttributeNames.HTTP_ERROR_MESSAGE, message);
    }
    if ((semconvStability & 1 /* STABLE */ ) === 1 /* STABLE */ ) {
        span.setAttribute(semantic_conventions_1.ATTR_ERROR_TYPE, error.name);
    }
    span.setStatus({
        code: api_1.SpanStatusCode.ERROR,
        message
    });
    span.recordException(error);
};
exports.setSpanWithError = setSpanWithError;
/**
 * Adds attributes for request content-length and content-encoding HTTP headers
 * @param { IncomingMessage } Request object whose headers will be analyzed
 * @param { Attributes } Attributes object to be modified
 */ const setRequestContentLengthAttribute = (request, attributes)=>{
    const length = getContentLength(request.headers);
    if (length === null) return;
    if ((0, exports.isCompressed)(request.headers)) {
        attributes[semantic_conventions_1.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH] = length;
    } else {
        attributes[semantic_conventions_1.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED] = length;
    }
};
exports.setRequestContentLengthAttribute = setRequestContentLengthAttribute;
/**
 * Adds attributes for response content-length and content-encoding HTTP headers
 * @param { IncomingMessage } Response object whose headers will be analyzed
 * @param { Attributes } Attributes object to be modified
 *
 * @deprecated this is for an older version of semconv. It is retained for compatibility using OTEL_SEMCONV_STABILITY_OPT_IN
 */ const setResponseContentLengthAttribute = (response, attributes)=>{
    const length = getContentLength(response.headers);
    if (length === null) return;
    if ((0, exports.isCompressed)(response.headers)) {
        attributes[semantic_conventions_1.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH] = length;
    } else {
        attributes[semantic_conventions_1.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED] = length;
    }
};
exports.setResponseContentLengthAttribute = setResponseContentLengthAttribute;
function getContentLength(headers) {
    const contentLengthHeader = headers['content-length'];
    if (contentLengthHeader === undefined) return null;
    const contentLength = parseInt(contentLengthHeader, 10);
    if (isNaN(contentLength)) return null;
    return contentLength;
}
const isCompressed = (headers)=>{
    const encoding = headers['content-encoding'];
    return !!encoding && encoding !== 'identity';
};
exports.isCompressed = isCompressed;
/**
 * Mimics Node.js conversion of URL strings to RequestOptions expected by
 * `http.request` and `https.request` APIs.
 *
 * See https://github.com/nodejs/node/blob/2505e217bba05fc581b572c685c5cf280a16c5a3/lib/internal/url.js#L1415-L1437
 *
 * @param stringUrl
 * @throws TypeError if the URL is not valid.
 */ function stringUrlToHttpOptions(stringUrl) {
    // This is heavily inspired by Node.js handling of the same situation, trying
    // to follow it as closely as possible while keeping in mind that we only
    // deal with string URLs, not URL objects.
    const { hostname, pathname, port, username, password, search, protocol, hash, href, origin, host } = new URL(stringUrl);
    const options = {
        protocol: protocol,
        hostname: hostname && hostname[0] === '[' ? hostname.slice(1, -1) : hostname,
        hash: hash,
        search: search,
        pathname: pathname,
        path: `${pathname || ''}${search || ''}`,
        href: href,
        origin: origin,
        host: host
    };
    if (port !== '') {
        options.port = Number(port);
    }
    if (username || password) {
        options.auth = `${decodeURIComponent(username)}:${decodeURIComponent(password)}`;
    }
    return options;
}
/**
 * Makes sure options is an url object
 * return an object with default value and parsed options
 * @param logger component logger
 * @param options original options for the request
 * @param [extraOptions] additional options for the request
 */ const getRequestInfo = (logger, options, extraOptions)=>{
    let pathname;
    let origin;
    let optionsParsed;
    let invalidUrl = false;
    if (typeof options === 'string') {
        try {
            const convertedOptions = stringUrlToHttpOptions(options);
            optionsParsed = convertedOptions;
            pathname = convertedOptions.pathname || '/';
        } catch (e) {
            invalidUrl = true;
            logger.verbose('Unable to parse URL provided to HTTP request, using fallback to determine path. Original error:', e);
            // for backward compatibility with how url.parse() behaved.
            optionsParsed = {
                path: options
            };
            pathname = optionsParsed.path || '/';
        }
        origin = `${optionsParsed.protocol || 'http:'}//${optionsParsed.host}`;
        if (extraOptions !== undefined) {
            Object.assign(optionsParsed, extraOptions);
        }
    } else if (options instanceof url.URL) {
        optionsParsed = {
            protocol: options.protocol,
            hostname: typeof options.hostname === 'string' && options.hostname.startsWith('[') ? options.hostname.slice(1, -1) : options.hostname,
            path: `${options.pathname || ''}${options.search || ''}`
        };
        if (options.port !== '') {
            optionsParsed.port = Number(options.port);
        }
        if (options.username || options.password) {
            optionsParsed.auth = `${options.username}:${options.password}`;
        }
        pathname = options.pathname;
        origin = options.origin;
        if (extraOptions !== undefined) {
            Object.assign(optionsParsed, extraOptions);
        }
    } else {
        optionsParsed = Object.assign({
            protocol: options.host ? 'http:' : undefined
        }, options);
        const hostname = optionsParsed.host || (optionsParsed.port != null ? `${optionsParsed.hostname}${optionsParsed.port}` : optionsParsed.hostname);
        origin = `${optionsParsed.protocol || 'http:'}//${hostname}`;
        pathname = options.pathname;
        if (!pathname && optionsParsed.path) {
            try {
                const parsedUrl = new URL(optionsParsed.path, origin);
                pathname = parsedUrl.pathname || '/';
            } catch (e) {
                pathname = '/';
            }
        }
    }
    // some packages return method in lowercase..
    // ensure upperCase for consistency
    const method = optionsParsed.method ? optionsParsed.method.toUpperCase() : 'GET';
    return {
        origin,
        pathname,
        method,
        optionsParsed,
        invalidUrl
    };
};
exports.getRequestInfo = getRequestInfo;
/**
 * Makes sure options is of type string or object
 * @param options for the request
 */ const isValidOptionsType = (options)=>{
    if (!options) {
        return false;
    }
    const type = typeof options;
    return type === 'string' || type === 'object' && !Array.isArray(options);
};
exports.isValidOptionsType = isValidOptionsType;
const extractHostnameAndPort = (requestOptions)=>{
    var _a;
    if (requestOptions.hostname && requestOptions.port) {
        return {
            hostname: requestOptions.hostname,
            port: requestOptions.port
        };
    }
    const matches = ((_a = requestOptions.host) === null || _a === void 0 ? void 0 : _a.match(/^([^:/ ]+)(:\d{1,5})?/)) || null;
    const hostname = requestOptions.hostname || (matches === null ? 'localhost' : matches[1]);
    let port = requestOptions.port;
    if (!port) {
        if (matches && matches[2]) {
            // remove the leading ":". The extracted port would be something like ":8080"
            port = matches[2].substring(1);
        } else {
            port = requestOptions.protocol === 'https:' ? '443' : '80';
        }
    }
    return {
        hostname,
        port
    };
};
exports.extractHostnameAndPort = extractHostnameAndPort;
/**
 * Returns outgoing request attributes scoped to the options passed to the request
 * @param {ParsedRequestOptions} requestOptions the same options used to make the request
 * @param {{ component: string, hostname: string, hookAttributes?: Attributes }} options used to pass data needed to create attributes
 * @param {SemconvStability} semconvStability determines which semconv version to use
 */ const getOutgoingRequestAttributes = (requestOptions, options, semconvStability)=>{
    var _a, _b;
    const hostname = options.hostname;
    const port = options.port;
    const method = (_a = requestOptions.method) !== null && _a !== void 0 ? _a : 'GET';
    const normalizedMethod = normalizeMethod(method);
    const headers = requestOptions.headers || {};
    const userAgent = headers['user-agent'];
    const urlFull = (0, exports.getAbsoluteUrl)(requestOptions, headers, `${options.component}:`);
    const oldAttributes = {
        [semantic_conventions_1.SEMATTRS_HTTP_URL]: urlFull,
        [semantic_conventions_1.SEMATTRS_HTTP_METHOD]: method,
        [semantic_conventions_1.SEMATTRS_HTTP_TARGET]: requestOptions.path || '/',
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: hostname,
        [semantic_conventions_1.SEMATTRS_HTTP_HOST]: (_b = headers.host) !== null && _b !== void 0 ? _b : `${hostname}:${port}`
    };
    const newAttributes = {
        // Required attributes
        [semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD]: normalizedMethod,
        [semantic_conventions_1.ATTR_SERVER_ADDRESS]: hostname,
        [semantic_conventions_1.ATTR_SERVER_PORT]: Number(port),
        [semantic_conventions_1.ATTR_URL_FULL]: urlFull
    };
    // conditionally required if request method required case normalization
    if (method !== normalizedMethod) {
        newAttributes[semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD_ORIGINAL] = method;
    }
    if (userAgent !== undefined) {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_USER_AGENT] = userAgent;
    }
    switch(semconvStability){
        case 1 /* STABLE */ :
            return Object.assign(newAttributes, options.hookAttributes);
        case 2 /* OLD */ :
            return Object.assign(oldAttributes, options.hookAttributes);
    }
    return Object.assign(oldAttributes, newAttributes, options.hookAttributes);
};
exports.getOutgoingRequestAttributes = getOutgoingRequestAttributes;
/**
 * Returns outgoing request Metric attributes scoped to the request data
 * @param {Attributes} spanAttributes the span attributes
 */ const getOutgoingRequestMetricAttributes = (spanAttributes)=>{
    const metricAttributes = {};
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_METHOD] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_METHOD];
    metricAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_NAME] = spanAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_NAME];
    //TODO: http.url attribute, it should substitute any parameters to avoid high cardinality.
    return metricAttributes;
};
exports.getOutgoingRequestMetricAttributes = getOutgoingRequestMetricAttributes;
/**
 * Returns attributes related to the kind of HTTP protocol used
 * @param {string} [kind] Kind of HTTP protocol used: "1.0", "1.1", "2", "SPDY" or "QUIC".
 */ const setAttributesFromHttpKind = (kind, attributes)=>{
    if (kind) {
        attributes[semantic_conventions_1.SEMATTRS_HTTP_FLAVOR] = kind;
        if (kind.toUpperCase() !== 'QUIC') {
            attributes[semantic_conventions_1.SEMATTRS_NET_TRANSPORT] = semantic_conventions_1.NETTRANSPORTVALUES_IP_TCP;
        } else {
            attributes[semantic_conventions_1.SEMATTRS_NET_TRANSPORT] = semantic_conventions_1.NETTRANSPORTVALUES_IP_UDP;
        }
    }
};
exports.setAttributesFromHttpKind = setAttributesFromHttpKind;
/**
 * Returns outgoing request attributes scoped to the response data
 * @param {IncomingMessage} response the response object
 * @param {SemconvStability} semconvStability determines which semconv version to use
 */ const getOutgoingRequestAttributesOnResponse = (response, semconvStability)=>{
    const { statusCode, statusMessage, httpVersion, socket } = response;
    const oldAttributes = {};
    const stableAttributes = {};
    if (statusCode != null) {
        stableAttributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE] = statusCode;
    }
    if (socket) {
        const { remoteAddress, remotePort } = socket;
        oldAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_IP] = remoteAddress;
        oldAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_PORT] = remotePort;
        // Recommended
        stableAttributes[semantic_conventions_1.ATTR_NETWORK_PEER_ADDRESS] = remoteAddress;
        stableAttributes[semantic_conventions_1.ATTR_NETWORK_PEER_PORT] = remotePort;
        stableAttributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION] = response.httpVersion;
    }
    (0, exports.setResponseContentLengthAttribute)(response, oldAttributes);
    if (statusCode) {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_STATUS_CODE] = statusCode;
        oldAttributes[AttributeNames_1.AttributeNames.HTTP_STATUS_TEXT] = (statusMessage || '').toUpperCase();
    }
    (0, exports.setAttributesFromHttpKind)(httpVersion, oldAttributes);
    switch(semconvStability){
        case 1 /* STABLE */ :
            return stableAttributes;
        case 2 /* OLD */ :
            return oldAttributes;
    }
    return Object.assign(oldAttributes, stableAttributes);
};
exports.getOutgoingRequestAttributesOnResponse = getOutgoingRequestAttributesOnResponse;
/**
 * Returns outgoing request Metric attributes scoped to the response data
 * @param {Attributes} spanAttributes the span attributes
 */ const getOutgoingRequestMetricAttributesOnResponse = (spanAttributes)=>{
    const metricAttributes = {};
    metricAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_PORT] = spanAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_PORT];
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_STATUS_CODE] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_STATUS_CODE];
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_FLAVOR] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_FLAVOR];
    return metricAttributes;
};
exports.getOutgoingRequestMetricAttributesOnResponse = getOutgoingRequestMetricAttributesOnResponse;
function parseHostHeader(hostHeader, proto) {
    const parts = hostHeader.split(':');
    // no semicolon implies ipv4 dotted syntax or host name without port
    // x.x.x.x
    // example.com
    if (parts.length === 1) {
        if (proto === 'http') {
            return {
                host: parts[0],
                port: '80'
            };
        }
        if (proto === 'https') {
            return {
                host: parts[0],
                port: '443'
            };
        }
        return {
            host: parts[0]
        };
    }
    // single semicolon implies ipv4 dotted syntax or host name with port
    // x.x.x.x:yyyy
    // example.com:yyyy
    if (parts.length === 2) {
        return {
            host: parts[0],
            port: parts[1]
        };
    }
    // more than 2 parts implies ipv6 syntax with multiple colons
    // [x:x:x:x:x:x:x:x]
    // [x:x:x:x:x:x:x:x]:yyyy
    if (parts[0].startsWith('[')) {
        if (parts[parts.length - 1].endsWith(']')) {
            if (proto === 'http') {
                return {
                    host: hostHeader,
                    port: '80'
                };
            }
            if (proto === 'https') {
                return {
                    host: hostHeader,
                    port: '443'
                };
            }
        } else if (parts[parts.length - 2].endsWith(']')) {
            return {
                host: parts.slice(0, -1).join(':'),
                port: parts[parts.length - 1]
            };
        }
    }
    // if nothing above matches just return the host header
    return {
        host: hostHeader
    };
}
/**
 * Get server.address and port according to http semconv 1.27
 * https://github.com/open-telemetry/semantic-conventions/blob/bf0a2c1134f206f034408b201dbec37960ed60ec/docs/http/http-spans.md#setting-serveraddress-and-serverport-attributes
 */ function getServerAddress(request, component) {
    const forwardedHeader = request.headers['forwarded'];
    if (forwardedHeader) {
        for (const entry of parseForwardedHeader(forwardedHeader)){
            if (entry.host) {
                return parseHostHeader(entry.host, entry.proto);
            }
        }
    }
    const xForwardedHost = request.headers['x-forwarded-host'];
    if (typeof xForwardedHost === 'string') {
        if (typeof request.headers['x-forwarded-proto'] === 'string') {
            return parseHostHeader(xForwardedHost, request.headers['x-forwarded-proto']);
        }
        if (Array.isArray(request.headers['x-forwarded-proto'])) {
            return parseHostHeader(xForwardedHost, request.headers['x-forwarded-proto'][0]);
        }
        return parseHostHeader(xForwardedHost);
    } else if (Array.isArray(xForwardedHost) && typeof xForwardedHost[0] === 'string' && xForwardedHost[0].length > 0) {
        if (typeof request.headers['x-forwarded-proto'] === 'string') {
            return parseHostHeader(xForwardedHost[0], request.headers['x-forwarded-proto']);
        }
        if (Array.isArray(request.headers['x-forwarded-proto'])) {
            return parseHostHeader(xForwardedHost[0], request.headers['x-forwarded-proto'][0]);
        }
        return parseHostHeader(xForwardedHost[0]);
    }
    const host = request.headers['host'];
    if (typeof host === 'string' && host.length > 0) {
        return parseHostHeader(host, component);
    }
    return null;
}
/**
 * Get server.address and port according to http semconv 1.27
 * https://github.com/open-telemetry/semantic-conventions/blob/bf0a2c1134f206f034408b201dbec37960ed60ec/docs/http/http-spans.md#setting-serveraddress-and-serverport-attributes
 */ function getRemoteClientAddress(request) {
    const forwardedHeader = request.headers['forwarded'];
    if (forwardedHeader) {
        for (const entry of parseForwardedHeader(forwardedHeader)){
            if (entry.for) {
                return entry.for;
            }
        }
    }
    const xForwardedFor = request.headers['x-forwarded-for'];
    if (typeof xForwardedFor === 'string') {
        return xForwardedFor;
    } else if (Array.isArray(xForwardedFor)) {
        return xForwardedFor[0];
    }
    const remote = request.socket.remoteAddress;
    if (remote) {
        return remote;
    }
    return null;
}
exports.getRemoteClientAddress = getRemoteClientAddress;
function getInfoFromIncomingMessage(component, request, logger) {
    var _a, _b;
    try {
        if (request.headers.host) {
            return new URL((_a = request.url) !== null && _a !== void 0 ? _a : '/', `${component}://${request.headers.host}`);
        } else {
            const unsafeParsedUrl = new URL((_b = request.url) !== null && _b !== void 0 ? _b : '/', // using localhost as a workaround to still use the URL constructor for parsing
            `${component}://localhost`);
            // since we use localhost as a workaround, ensure we hide the rest of the properties to avoid
            // our workaround leaking though.
            return {
                pathname: unsafeParsedUrl.pathname,
                search: unsafeParsedUrl.search,
                toString: function() {
                    // we cannot use the result of unsafeParsedUrl.toString as it's potentially wrong.
                    return unsafeParsedUrl.pathname + unsafeParsedUrl.search;
                }
            };
        }
    } catch (e) {
        // something is wrong, use undefined - this *should* never happen, logging
        // for troubleshooting in case it does happen.
        logger.verbose('Unable to get URL from request', e);
        return {};
    }
}
/**
 * Returns incoming request attributes scoped to the request data
 * @param {IncomingMessage} request the request object
 * @param {{ component: string, serverName?: string, hookAttributes?: Attributes }} options used to pass data needed to create attributes
 * @param {SemconvStability} semconvStability determines which semconv version to use
 */ const getIncomingRequestAttributes = (request, options, logger)=>{
    const headers = request.headers;
    const userAgent = headers['user-agent'];
    const ips = headers['x-forwarded-for'];
    const httpVersion = request.httpVersion;
    const host = headers.host;
    const hostname = (host === null || host === void 0 ? void 0 : host.replace(/^(.*)(:[0-9]{1,5})/, '$1')) || 'localhost';
    const method = request.method;
    const normalizedMethod = normalizeMethod(method);
    const serverAddress = getServerAddress(request, options.component);
    const serverName = options.serverName;
    const remoteClientAddress = getRemoteClientAddress(request);
    const newAttributes = {
        [semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD]: normalizedMethod,
        [semantic_conventions_1.ATTR_URL_SCHEME]: options.component,
        [semantic_conventions_1.ATTR_SERVER_ADDRESS]: serverAddress === null || serverAddress === void 0 ? void 0 : serverAddress.host,
        [semantic_conventions_1.ATTR_NETWORK_PEER_ADDRESS]: request.socket.remoteAddress,
        [semantic_conventions_1.ATTR_NETWORK_PEER_PORT]: request.socket.remotePort,
        [semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION]: request.httpVersion,
        [semantic_conventions_1.ATTR_USER_AGENT_ORIGINAL]: userAgent
    };
    const parsedUrl = getInfoFromIncomingMessage(options.component, request, logger);
    if ((parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.pathname) != null) {
        newAttributes[semantic_conventions_1.ATTR_URL_PATH] = parsedUrl.pathname;
    }
    if (remoteClientAddress != null) {
        newAttributes[semantic_conventions_1.ATTR_CLIENT_ADDRESS] = remoteClientAddress;
    }
    if ((serverAddress === null || serverAddress === void 0 ? void 0 : serverAddress.port) != null) {
        newAttributes[semantic_conventions_1.ATTR_SERVER_PORT] = Number(serverAddress.port);
    }
    // conditionally required if request method required case normalization
    if (method !== normalizedMethod) {
        newAttributes[semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD_ORIGINAL] = method;
    }
    const oldAttributes = {
        [semantic_conventions_1.SEMATTRS_HTTP_URL]: parsedUrl.toString(),
        [semantic_conventions_1.SEMATTRS_HTTP_HOST]: host,
        [semantic_conventions_1.SEMATTRS_NET_HOST_NAME]: hostname,
        [semantic_conventions_1.SEMATTRS_HTTP_METHOD]: method,
        [semantic_conventions_1.SEMATTRS_HTTP_SCHEME]: options.component
    };
    if (typeof ips === 'string') {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_CLIENT_IP] = ips.split(',')[0];
    }
    if (typeof serverName === 'string') {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_SERVER_NAME] = serverName;
    }
    if (parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.pathname) {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_TARGET] = (parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.pathname) + (parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.search) || '/';
    }
    if (userAgent !== undefined) {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_USER_AGENT] = userAgent;
    }
    (0, exports.setRequestContentLengthAttribute)(request, oldAttributes);
    (0, exports.setAttributesFromHttpKind)(httpVersion, oldAttributes);
    switch(options.semconvStability){
        case 1 /* STABLE */ :
            return Object.assign(newAttributes, options.hookAttributes);
        case 2 /* OLD */ :
            return Object.assign(oldAttributes, options.hookAttributes);
    }
    return Object.assign(oldAttributes, newAttributes, options.hookAttributes);
};
exports.getIncomingRequestAttributes = getIncomingRequestAttributes;
/**
 * Returns incoming request Metric attributes scoped to the request data
 * @param {Attributes} spanAttributes the span attributes
 * @param {{ component: string }} options used to pass data needed to create attributes
 */ const getIncomingRequestMetricAttributes = (spanAttributes)=>{
    const metricAttributes = {};
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_SCHEME] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_SCHEME];
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_METHOD] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_METHOD];
    metricAttributes[semantic_conventions_1.SEMATTRS_NET_HOST_NAME] = spanAttributes[semantic_conventions_1.SEMATTRS_NET_HOST_NAME];
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_FLAVOR] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_FLAVOR];
    //TODO: http.target attribute, it should substitute any parameters to avoid high cardinality.
    return metricAttributes;
};
exports.getIncomingRequestMetricAttributes = getIncomingRequestMetricAttributes;
/**
 * Returns incoming request attributes scoped to the response data
 * @param {(ServerResponse & { socket: Socket; })} response the response object
 */ const getIncomingRequestAttributesOnResponse = (request, response, semconvStability)=>{
    // take socket from the request,
    // since it may be detached from the response object in keep-alive mode
    const { socket } = request;
    const { statusCode, statusMessage } = response;
    const newAttributes = {
        [semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE]: statusCode
    };
    const rpcMetadata = (0, core_1.getRPCMetadata)(api_1.context.active());
    const oldAttributes = {};
    if (socket) {
        const { localAddress, localPort, remoteAddress, remotePort } = socket;
        oldAttributes[semantic_conventions_1.SEMATTRS_NET_HOST_IP] = localAddress;
        oldAttributes[semantic_conventions_1.SEMATTRS_NET_HOST_PORT] = localPort;
        oldAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_IP] = remoteAddress;
        oldAttributes[semantic_conventions_1.SEMATTRS_NET_PEER_PORT] = remotePort;
    }
    oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_STATUS_CODE] = statusCode;
    oldAttributes[AttributeNames_1.AttributeNames.HTTP_STATUS_TEXT] = (statusMessage || '').toUpperCase();
    if ((rpcMetadata === null || rpcMetadata === void 0 ? void 0 : rpcMetadata.type) === core_1.RPCType.HTTP && rpcMetadata.route !== undefined) {
        oldAttributes[semantic_conventions_1.SEMATTRS_HTTP_ROUTE] = rpcMetadata.route;
        newAttributes[semantic_conventions_1.ATTR_HTTP_ROUTE] = rpcMetadata.route;
    }
    switch(semconvStability){
        case 1 /* STABLE */ :
            return newAttributes;
        case 2 /* OLD */ :
            return oldAttributes;
    }
    return Object.assign(oldAttributes, newAttributes);
};
exports.getIncomingRequestAttributesOnResponse = getIncomingRequestAttributesOnResponse;
/**
 * Returns incoming request Metric attributes scoped to the request data
 * @param {Attributes} spanAttributes the span attributes
 */ const getIncomingRequestMetricAttributesOnResponse = (spanAttributes)=>{
    const metricAttributes = {};
    metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_STATUS_CODE] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_STATUS_CODE];
    metricAttributes[semantic_conventions_1.SEMATTRS_NET_HOST_PORT] = spanAttributes[semantic_conventions_1.SEMATTRS_NET_HOST_PORT];
    if (spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_ROUTE] !== undefined) {
        metricAttributes[semantic_conventions_1.SEMATTRS_HTTP_ROUTE] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_ROUTE];
    }
    return metricAttributes;
};
exports.getIncomingRequestMetricAttributesOnResponse = getIncomingRequestMetricAttributesOnResponse;
const getIncomingStableRequestMetricAttributesOnResponse = (spanAttributes)=>{
    const metricAttributes = {};
    if (spanAttributes[semantic_conventions_1.ATTR_HTTP_ROUTE] !== undefined) {
        metricAttributes[semantic_conventions_1.ATTR_HTTP_ROUTE] = spanAttributes[semantic_conventions_1.SEMATTRS_HTTP_ROUTE];
    }
    // required if and only if one was sent, same as span requirement
    if (spanAttributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE]) {
        metricAttributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE] = spanAttributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE];
    }
    return metricAttributes;
};
exports.getIncomingStableRequestMetricAttributesOnResponse = getIncomingStableRequestMetricAttributesOnResponse;
function headerCapture(type, headers) {
    const normalizedHeaders = new Map();
    for(let i = 0, len = headers.length; i < len; i++){
        const capturedHeader = headers[i].toLowerCase();
        normalizedHeaders.set(capturedHeader, capturedHeader.replace(/-/g, '_'));
    }
    return (span, getHeader)=>{
        for (const capturedHeader of normalizedHeaders.keys()){
            const value = getHeader(capturedHeader);
            if (value === undefined) {
                continue;
            }
            const normalizedHeader = normalizedHeaders.get(capturedHeader);
            const key = `http.${type}.header.${normalizedHeader}`;
            if (typeof value === 'string') {
                span.setAttribute(key, [
                    value
                ]);
            } else if (Array.isArray(value)) {
                span.setAttribute(key, value);
            } else {
                span.setAttribute(key, [
                    value
                ]);
            }
        }
    };
}
exports.headerCapture = headerCapture;
const KNOWN_METHODS = new Set([
    // methods from https://www.rfc-editor.org/rfc/rfc9110.html#name-methods
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    // PATCH from https://www.rfc-editor.org/rfc/rfc5789.html
    'PATCH'
]);
function normalizeMethod(method) {
    if (method == null) {
        return 'GET';
    }
    const upper = method.toUpperCase();
    if (KNOWN_METHODS.has(upper)) {
        return upper;
    }
    return '_OTHER';
}
function parseForwardedHeader(header) {
    try {
        return forwardedParse(header);
    } catch (_a) {
        return [];
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/http.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpInstrumentation = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [instrumentation] (ecmascript)");
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/version.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const core_2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/utils.js [instrumentation] (ecmascript)");
/**
 * `node:http` and `node:https` instrumentation for OpenTelemetry
 */ class HttpInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super('@opentelemetry/instrumentation-http', version_1.VERSION, config);
        /** keep track on spans not ended */ this._spanNotEnded = new WeakSet();
        this._semconvStability = 2 /* OLD */ ;
        this._headerCapture = this._createHeaderCapture();
        for (const entry of (0, core_2.getEnv)().OTEL_SEMCONV_STABILITY_OPT_IN){
            if (entry.toLowerCase() === 'http/dup') {
                // http/dup takes highest precedence. If it is found, there is no need to read the rest of the list
                this._semconvStability = 3 /* DUPLICATE */ ;
                break;
            } else if (entry.toLowerCase() === 'http') {
                this._semconvStability = 1 /* STABLE */ ;
            }
        }
    }
    _updateMetricInstruments() {
        this._oldHttpServerDurationHistogram = this.meter.createHistogram('http.server.duration', {
            description: 'Measures the duration of inbound HTTP requests.',
            unit: 'ms',
            valueType: api_1.ValueType.DOUBLE
        });
        this._oldHttpClientDurationHistogram = this.meter.createHistogram('http.client.duration', {
            description: 'Measures the duration of outbound HTTP requests.',
            unit: 'ms',
            valueType: api_1.ValueType.DOUBLE
        });
        this._stableHttpServerDurationHistogram = this.meter.createHistogram(semantic_conventions_1.METRIC_HTTP_SERVER_REQUEST_DURATION, {
            description: 'Duration of HTTP server requests.',
            unit: 's',
            valueType: api_1.ValueType.DOUBLE,
            advice: {
                explicitBucketBoundaries: [
                    0.005,
                    0.01,
                    0.025,
                    0.05,
                    0.075,
                    0.1,
                    0.25,
                    0.5,
                    0.75,
                    1,
                    2.5,
                    5,
                    7.5,
                    10
                ]
            }
        });
        this._stableHttpClientDurationHistogram = this.meter.createHistogram(semantic_conventions_1.METRIC_HTTP_CLIENT_REQUEST_DURATION, {
            description: 'Duration of HTTP client requests.',
            unit: 's',
            valueType: api_1.ValueType.DOUBLE,
            advice: {
                explicitBucketBoundaries: [
                    0.005,
                    0.01,
                    0.025,
                    0.05,
                    0.075,
                    0.1,
                    0.25,
                    0.5,
                    0.75,
                    1,
                    2.5,
                    5,
                    7.5,
                    10
                ]
            }
        });
    }
    _recordServerDuration(durationMs, oldAttributes, stableAttributes) {
        if ((this._semconvStability & 2 /* OLD */ ) === 2 /* OLD */ ) {
            // old histogram is counted in MS
            this._oldHttpServerDurationHistogram.record(durationMs, oldAttributes);
        }
        if ((this._semconvStability & 1 /* STABLE */ ) === 1 /* STABLE */ ) {
            // stable histogram is counted in S
            this._stableHttpServerDurationHistogram.record(durationMs / 1000, stableAttributes);
        }
    }
    _recordClientDuration(durationMs, oldAttributes, stableAttributes) {
        if ((this._semconvStability & 2 /* OLD */ ) === 2 /* OLD */ ) {
            // old histogram is counted in MS
            this._oldHttpClientDurationHistogram.record(durationMs, oldAttributes);
        }
        if ((this._semconvStability & 1 /* STABLE */ ) === 1 /* STABLE */ ) {
            // stable histogram is counted in S
            this._stableHttpClientDurationHistogram.record(durationMs / 1000, stableAttributes);
        }
    }
    setConfig(config = {}) {
        super.setConfig(config);
        this._headerCapture = this._createHeaderCapture();
    }
    init() {
        return [
            this._getHttpsInstrumentation(),
            this._getHttpInstrumentation()
        ];
    }
    _getHttpInstrumentation() {
        return new instrumentation_1.InstrumentationNodeModuleDefinition('http', [
            '*'
        ], (moduleExports)=>{
            const isESM = moduleExports[Symbol.toStringTag] === 'Module';
            if (!this.getConfig().disableOutgoingRequestInstrumentation) {
                const patchedRequest = this._wrap(moduleExports, 'request', this._getPatchOutgoingRequestFunction('http'));
                const patchedGet = this._wrap(moduleExports, 'get', this._getPatchOutgoingGetFunction(patchedRequest));
                if (isESM) {
                    // To handle `import http from 'http'`, which returns the default
                    // export, we need to set `module.default.*`.
                    moduleExports.default.request = patchedRequest;
                    moduleExports.default.get = patchedGet;
                }
            }
            if (!this.getConfig().disableIncomingRequestInstrumentation) {
                this._wrap(moduleExports.Server.prototype, 'emit', this._getPatchIncomingRequestFunction('http'));
            }
            return moduleExports;
        }, (moduleExports)=>{
            if (moduleExports === undefined) return;
            if (!this.getConfig().disableOutgoingRequestInstrumentation) {
                this._unwrap(moduleExports, 'request');
                this._unwrap(moduleExports, 'get');
            }
            if (!this.getConfig().disableIncomingRequestInstrumentation) {
                this._unwrap(moduleExports.Server.prototype, 'emit');
            }
        });
    }
    _getHttpsInstrumentation() {
        return new instrumentation_1.InstrumentationNodeModuleDefinition('https', [
            '*'
        ], (moduleExports)=>{
            const isESM = moduleExports[Symbol.toStringTag] === 'Module';
            if (!this.getConfig().disableOutgoingRequestInstrumentation) {
                const patchedRequest = this._wrap(moduleExports, 'request', this._getPatchHttpsOutgoingRequestFunction('https'));
                const patchedGet = this._wrap(moduleExports, 'get', this._getPatchHttpsOutgoingGetFunction(patchedRequest));
                if (isESM) {
                    // To handle `import https from 'https'`, which returns the default
                    // export, we need to set `module.default.*`.
                    moduleExports.default.request = patchedRequest;
                    moduleExports.default.get = patchedGet;
                }
            }
            if (!this.getConfig().disableIncomingRequestInstrumentation) {
                this._wrap(moduleExports.Server.prototype, 'emit', this._getPatchIncomingRequestFunction('https'));
            }
            return moduleExports;
        }, (moduleExports)=>{
            if (moduleExports === undefined) return;
            if (!this.getConfig().disableOutgoingRequestInstrumentation) {
                this._unwrap(moduleExports, 'request');
                this._unwrap(moduleExports, 'get');
            }
            if (!this.getConfig().disableIncomingRequestInstrumentation) {
                this._unwrap(moduleExports.Server.prototype, 'emit');
            }
        });
    }
    /**
     * Creates spans for incoming requests, restoring spans' context if applied.
     */ _getPatchIncomingRequestFunction(component) {
        return (original)=>{
            return this._incomingRequestFunction(component, original);
        };
    }
    /**
     * Creates spans for outgoing requests, sending spans' context for distributed
     * tracing.
     */ _getPatchOutgoingRequestFunction(component) {
        return (original)=>{
            return this._outgoingRequestFunction(component, original);
        };
    }
    _getPatchOutgoingGetFunction(clientRequest) {
        return (_original)=>{
            // Re-implement http.get. This needs to be done (instead of using
            // getPatchOutgoingRequestFunction to patch it) because we need to
            // set the trace context header before the returned http.ClientRequest is
            // ended. The Node.js docs state that the only differences between
            // request and get are that (1) get defaults to the HTTP GET method and
            // (2) the returned request object is ended immediately. The former is
            // already true (at least in supported Node versions up to v10), so we
            // simply follow the latter. Ref:
            // https://nodejs.org/dist/latest/docs/api/http.html#http_http_get_options_callback
            // https://github.com/googleapis/cloud-trace-nodejs/blob/master/src/instrumentations/instrumentation-http.ts#L198
            return function outgoingGetRequest(options, ...args) {
                const req = clientRequest(options, ...args);
                req.end();
                return req;
            };
        };
    }
    /** Patches HTTPS outgoing requests */ _getPatchHttpsOutgoingRequestFunction(component) {
        return (original)=>{
            const instrumentation = this;
            return function httpsOutgoingRequest(// eslint-disable-next-line node/no-unsupported-features/node-builtins
            options, ...args) {
                var _a;
                // Makes sure options will have default HTTPS parameters
                if (component === 'https' && typeof options === 'object' && ((_a = options === null || options === void 0 ? void 0 : options.constructor) === null || _a === void 0 ? void 0 : _a.name) !== 'URL') {
                    options = Object.assign({}, options);
                    instrumentation._setDefaultOptions(options);
                }
                return instrumentation._getPatchOutgoingRequestFunction(component)(original)(options, ...args);
            };
        };
    }
    _setDefaultOptions(options) {
        options.protocol = options.protocol || 'https:';
        options.port = options.port || 443;
    }
    /** Patches HTTPS outgoing get requests */ _getPatchHttpsOutgoingGetFunction(clientRequest) {
        return (original)=>{
            const instrumentation = this;
            return function httpsOutgoingRequest(// eslint-disable-next-line node/no-unsupported-features/node-builtins
            options, ...args) {
                return instrumentation._getPatchOutgoingGetFunction(clientRequest)(original)(options, ...args);
            };
        };
    }
    /**
     * Attach event listeners to a client request to end span and add span attributes.
     *
     * @param request The original request object.
     * @param span representing the current operation
     * @param startTime representing the start time of the request to calculate duration in Metric
     * @param oldMetricAttributes metric attributes for old semantic conventions
     * @param stableMetricAttributes metric attributes for new semantic conventions
     */ _traceClientRequest(request, span, startTime, oldMetricAttributes, stableMetricAttributes) {
        if (this.getConfig().requestHook) {
            this._callRequestHook(span, request);
        }
        /**
         * Determines if the request has errored or the response has ended/errored.
         */ let responseFinished = false;
        /*
         * User 'response' event listeners can be added before our listener,
         * force our listener to be the first, so response emitter is bound
         * before any user listeners are added to it.
         */ request.prependListener('response', (response)=>{
            this._diag.debug('outgoingRequest on response()');
            if (request.listenerCount('response') <= 1) {
                response.resume();
            }
            const responseAttributes = (0, utils_1.getOutgoingRequestAttributesOnResponse)(response, this._semconvStability);
            span.setAttributes(responseAttributes);
            oldMetricAttributes = Object.assign(oldMetricAttributes, (0, utils_1.getOutgoingRequestMetricAttributesOnResponse)(responseAttributes));
            if (this.getConfig().responseHook) {
                this._callResponseHook(span, response);
            }
            this._headerCapture.client.captureRequestHeaders(span, (header)=>request.getHeader(header));
            this._headerCapture.client.captureResponseHeaders(span, (header)=>response.headers[header]);
            api_1.context.bind(api_1.context.active(), response);
            const endHandler = ()=>{
                this._diag.debug('outgoingRequest on end()');
                if (responseFinished) {
                    return;
                }
                responseFinished = true;
                let status;
                if (response.aborted && !response.complete) {
                    status = {
                        code: api_1.SpanStatusCode.ERROR
                    };
                } else {
                    // behaves same for new and old semconv
                    status = {
                        code: (0, utils_1.parseResponseStatus)(api_1.SpanKind.CLIENT, response.statusCode)
                    };
                }
                span.setStatus(status);
                if (this.getConfig().applyCustomAttributesOnSpan) {
                    (0, instrumentation_1.safeExecuteInTheMiddle)(()=>this.getConfig().applyCustomAttributesOnSpan(span, request, response), ()=>{}, true);
                }
                this._closeHttpSpan(span, api_1.SpanKind.CLIENT, startTime, oldMetricAttributes, stableMetricAttributes);
            };
            response.on('end', endHandler);
            // See https://github.com/open-telemetry/opentelemetry-js/pull/3625#issuecomment-1475673533
            if (semver.lt(process.version, '16.0.0')) {
                response.on('close', endHandler);
            }
            response.on(events_1.errorMonitor, (error)=>{
                this._diag.debug('outgoingRequest on error()', error);
                if (responseFinished) {
                    return;
                }
                responseFinished = true;
                (0, utils_1.setSpanWithError)(span, error, this._semconvStability);
                span.setStatus({
                    code: api_1.SpanStatusCode.ERROR,
                    message: error.message
                });
                this._closeHttpSpan(span, api_1.SpanKind.CLIENT, startTime, oldMetricAttributes, stableMetricAttributes);
            });
        });
        request.on('close', ()=>{
            this._diag.debug('outgoingRequest on request close()');
            if (request.aborted || responseFinished) {
                return;
            }
            responseFinished = true;
            this._closeHttpSpan(span, api_1.SpanKind.CLIENT, startTime, oldMetricAttributes, stableMetricAttributes);
        });
        request.on(events_1.errorMonitor, (error)=>{
            this._diag.debug('outgoingRequest on request error()', error);
            if (responseFinished) {
                return;
            }
            responseFinished = true;
            (0, utils_1.setSpanWithError)(span, error, this._semconvStability);
            this._closeHttpSpan(span, api_1.SpanKind.CLIENT, startTime, oldMetricAttributes, stableMetricAttributes);
        });
        this._diag.debug('http.ClientRequest return request');
        return request;
    }
    _incomingRequestFunction(component, original) {
        const instrumentation = this;
        return function incomingRequest(event, ...args) {
            // Only traces request events
            if (event !== 'request') {
                return original.apply(this, [
                    event,
                    ...args
                ]);
            }
            const request = args[0];
            const response = args[1];
            const method = request.method || 'GET';
            instrumentation._diag.debug(`${component} instrumentation incomingRequest`);
            if ((0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                var _a, _b;
                return (_b = (_a = instrumentation.getConfig()).ignoreIncomingRequestHook) === null || _b === void 0 ? void 0 : _b.call(_a, request);
            }, (e)=>{
                if (e != null) {
                    instrumentation._diag.error('caught ignoreIncomingRequestHook error: ', e);
                }
            }, true)) {
                return api_1.context.with((0, core_1.suppressTracing)(api_1.context.active()), ()=>{
                    api_1.context.bind(api_1.context.active(), request);
                    api_1.context.bind(api_1.context.active(), response);
                    return original.apply(this, [
                        event,
                        ...args
                    ]);
                });
            }
            const headers = request.headers;
            const spanAttributes = (0, utils_1.getIncomingRequestAttributes)(request, {
                component: component,
                serverName: instrumentation.getConfig().serverName,
                hookAttributes: instrumentation._callStartSpanHook(request, instrumentation.getConfig().startIncomingSpanHook),
                semconvStability: instrumentation._semconvStability
            }, instrumentation._diag);
            const spanOptions = {
                kind: api_1.SpanKind.SERVER,
                attributes: spanAttributes
            };
            const startTime = (0, core_1.hrTime)();
            const oldMetricAttributes = (0, utils_1.getIncomingRequestMetricAttributes)(spanAttributes);
            // request method and url.scheme are both required span attributes
            const stableMetricAttributes = {
                [semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD]: spanAttributes[semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD],
                [semantic_conventions_1.ATTR_URL_SCHEME]: spanAttributes[semantic_conventions_1.ATTR_URL_SCHEME]
            };
            // recommended if and only if one was sent, same as span recommendation
            if (spanAttributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION]) {
                stableMetricAttributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION] = spanAttributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION];
            }
            const ctx = api_1.propagation.extract(api_1.ROOT_CONTEXT, headers);
            const span = instrumentation._startHttpSpan(method, spanOptions, ctx);
            const rpcMetadata = {
                type: core_2.RPCType.HTTP,
                span
            };
            return api_1.context.with((0, core_2.setRPCMetadata)(api_1.trace.setSpan(ctx, span), rpcMetadata), ()=>{
                api_1.context.bind(api_1.context.active(), request);
                api_1.context.bind(api_1.context.active(), response);
                if (instrumentation.getConfig().requestHook) {
                    instrumentation._callRequestHook(span, request);
                }
                if (instrumentation.getConfig().responseHook) {
                    instrumentation._callResponseHook(span, response);
                }
                instrumentation._headerCapture.server.captureRequestHeaders(span, (header)=>request.headers[header]);
                // After 'error', no further events other than 'close' should be emitted.
                let hasError = false;
                response.on('close', ()=>{
                    if (hasError) {
                        return;
                    }
                    instrumentation._onServerResponseFinish(request, response, span, oldMetricAttributes, stableMetricAttributes, startTime);
                });
                response.on(events_1.errorMonitor, (err)=>{
                    hasError = true;
                    instrumentation._onServerResponseError(span, oldMetricAttributes, stableMetricAttributes, startTime, err);
                });
                return (0, instrumentation_1.safeExecuteInTheMiddle)(()=>original.apply(this, [
                        event,
                        ...args
                    ]), (error)=>{
                    if (error) {
                        (0, utils_1.setSpanWithError)(span, error, instrumentation._semconvStability);
                        instrumentation._closeHttpSpan(span, api_1.SpanKind.SERVER, startTime, oldMetricAttributes, stableMetricAttributes);
                        throw error;
                    }
                });
            });
        };
    }
    _outgoingRequestFunction(component, original) {
        const instrumentation = this;
        return function outgoingRequest(options, ...args) {
            if (!(0, utils_1.isValidOptionsType)(options)) {
                return original.apply(this, [
                    options,
                    ...args
                ]);
            }
            const extraOptions = typeof args[0] === 'object' && (typeof options === 'string' || options instanceof url.URL) ? args.shift() : undefined;
            const { method, invalidUrl, optionsParsed } = (0, utils_1.getRequestInfo)(instrumentation._diag, options, extraOptions);
            /**
             * Node 8's https module directly call the http one so to avoid creating
             * 2 span for the same request we need to check that the protocol is correct
             * See: https://github.com/nodejs/node/blob/v8.17.0/lib/https.js#L245
             */ if (component === 'http' && semver.lt(process.version, '9.0.0') && optionsParsed.protocol === 'https:') {
                return original.apply(this, [
                    optionsParsed,
                    ...args
                ]);
            }
            if ((0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                var _a, _b;
                return (_b = (_a = instrumentation.getConfig()).ignoreOutgoingRequestHook) === null || _b === void 0 ? void 0 : _b.call(_a, optionsParsed);
            }, (e)=>{
                if (e != null) {
                    instrumentation._diag.error('caught ignoreOutgoingRequestHook error: ', e);
                }
            }, true)) {
                return original.apply(this, [
                    optionsParsed,
                    ...args
                ]);
            }
            const { hostname, port } = (0, utils_1.extractHostnameAndPort)(optionsParsed);
            const attributes = (0, utils_1.getOutgoingRequestAttributes)(optionsParsed, {
                component,
                port,
                hostname,
                hookAttributes: instrumentation._callStartSpanHook(optionsParsed, instrumentation.getConfig().startOutgoingSpanHook)
            }, instrumentation._semconvStability);
            const startTime = (0, core_1.hrTime)();
            const oldMetricAttributes = (0, utils_1.getOutgoingRequestMetricAttributes)(attributes);
            // request method, server address, and server port are both required span attributes
            const stableMetricAttributes = {
                [semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD]: attributes[semantic_conventions_1.ATTR_HTTP_REQUEST_METHOD],
                [semantic_conventions_1.ATTR_SERVER_ADDRESS]: attributes[semantic_conventions_1.ATTR_SERVER_ADDRESS],
                [semantic_conventions_1.ATTR_SERVER_PORT]: attributes[semantic_conventions_1.ATTR_SERVER_PORT]
            };
            // required if and only if one was sent, same as span requirement
            if (attributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE]) {
                stableMetricAttributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE] = attributes[semantic_conventions_1.ATTR_HTTP_RESPONSE_STATUS_CODE];
            }
            // recommended if and only if one was sent, same as span recommendation
            if (attributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION]) {
                stableMetricAttributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION] = attributes[semantic_conventions_1.ATTR_NETWORK_PROTOCOL_VERSION];
            }
            const spanOptions = {
                kind: api_1.SpanKind.CLIENT,
                attributes
            };
            const span = instrumentation._startHttpSpan(method, spanOptions);
            const parentContext = api_1.context.active();
            const requestContext = api_1.trace.setSpan(parentContext, span);
            if (!optionsParsed.headers) {
                optionsParsed.headers = {};
            } else {
                // Make a copy of the headers object to avoid mutating an object the
                // caller might have a reference to.
                optionsParsed.headers = Object.assign({}, optionsParsed.headers);
            }
            api_1.propagation.inject(requestContext, optionsParsed.headers);
            return api_1.context.with(requestContext, ()=>{
                /*
                 * The response callback is registered before ClientRequest is bound,
                 * thus it is needed to bind it before the function call.
                 */ const cb = args[args.length - 1];
                if (typeof cb === 'function') {
                    args[args.length - 1] = api_1.context.bind(parentContext, cb);
                }
                const request = (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                    if (invalidUrl) {
                        // we know that the url is invalid, there's no point in injecting context as it will fail validation.
                        // Passing in what the user provided will give the user an error that matches what they'd see without
                        // the instrumentation.
                        return original.apply(this, [
                            options,
                            ...args
                        ]);
                    } else {
                        return original.apply(this, [
                            optionsParsed,
                            ...args
                        ]);
                    }
                }, (error)=>{
                    if (error) {
                        (0, utils_1.setSpanWithError)(span, error, instrumentation._semconvStability);
                        instrumentation._closeHttpSpan(span, api_1.SpanKind.CLIENT, startTime, oldMetricAttributes, stableMetricAttributes);
                        throw error;
                    }
                });
                instrumentation._diag.debug(`${component} instrumentation outgoingRequest`);
                api_1.context.bind(parentContext, request);
                return instrumentation._traceClientRequest(request, span, startTime, oldMetricAttributes, stableMetricAttributes);
            });
        };
    }
    _onServerResponseFinish(request, response, span, oldMetricAttributes, stableMetricAttributes, startTime) {
        const attributes = (0, utils_1.getIncomingRequestAttributesOnResponse)(request, response, this._semconvStability);
        oldMetricAttributes = Object.assign(oldMetricAttributes, (0, utils_1.getIncomingRequestMetricAttributesOnResponse)(attributes));
        stableMetricAttributes = Object.assign(stableMetricAttributes, (0, utils_1.getIncomingStableRequestMetricAttributesOnResponse)(attributes));
        this._headerCapture.server.captureResponseHeaders(span, (header)=>response.getHeader(header));
        span.setAttributes(attributes).setStatus({
            code: (0, utils_1.parseResponseStatus)(api_1.SpanKind.SERVER, response.statusCode)
        });
        const route = attributes[semantic_conventions_1.SEMATTRS_HTTP_ROUTE];
        if (route) {
            span.updateName(`${request.method || 'GET'} ${route}`);
        }
        if (this.getConfig().applyCustomAttributesOnSpan) {
            (0, instrumentation_1.safeExecuteInTheMiddle)(()=>this.getConfig().applyCustomAttributesOnSpan(span, request, response), ()=>{}, true);
        }
        this._closeHttpSpan(span, api_1.SpanKind.SERVER, startTime, oldMetricAttributes, stableMetricAttributes);
    }
    _onServerResponseError(span, oldMetricAttributes, stableMetricAttributes, startTime, error) {
        (0, utils_1.setSpanWithError)(span, error, this._semconvStability);
        // TODO get error attributes for metrics
        this._closeHttpSpan(span, api_1.SpanKind.SERVER, startTime, oldMetricAttributes, stableMetricAttributes);
    }
    _startHttpSpan(name, options, ctx = api_1.context.active()) {
        /*
         * If a parent is required but not present, we use a `NoopSpan` to still
         * propagate context without recording it.
         */ const requireParent = options.kind === api_1.SpanKind.CLIENT ? this.getConfig().requireParentforOutgoingSpans : this.getConfig().requireParentforIncomingSpans;
        let span;
        const currentSpan = api_1.trace.getSpan(ctx);
        if (requireParent === true && currentSpan === undefined) {
            span = api_1.trace.wrapSpanContext(api_1.INVALID_SPAN_CONTEXT);
        } else if (requireParent === true && (currentSpan === null || currentSpan === void 0 ? void 0 : currentSpan.spanContext().isRemote)) {
            span = currentSpan;
        } else {
            span = this.tracer.startSpan(name, options, ctx);
        }
        this._spanNotEnded.add(span);
        return span;
    }
    _closeHttpSpan(span, spanKind, startTime, oldMetricAttributes, stableMetricAttributes) {
        if (!this._spanNotEnded.has(span)) {
            return;
        }
        span.end();
        this._spanNotEnded.delete(span);
        // Record metrics
        const duration = (0, core_1.hrTimeToMilliseconds)((0, core_1.hrTimeDuration)(startTime, (0, core_1.hrTime)()));
        if (spanKind === api_1.SpanKind.SERVER) {
            this._recordServerDuration(duration, oldMetricAttributes, stableMetricAttributes);
        } else if (spanKind === api_1.SpanKind.CLIENT) {
            this._recordClientDuration(duration, oldMetricAttributes, stableMetricAttributes);
        }
    }
    _callResponseHook(span, response) {
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>this.getConfig().responseHook(span, response), ()=>{}, true);
    }
    _callRequestHook(span, request) {
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>this.getConfig().requestHook(span, request), ()=>{}, true);
    }
    _callStartSpanHook(request, hookFunc) {
        if (typeof hookFunc === 'function') {
            return (0, instrumentation_1.safeExecuteInTheMiddle)(()=>hookFunc(request), ()=>{}, true);
        }
    }
    _createHeaderCapture() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const config = this.getConfig();
        return {
            client: {
                captureRequestHeaders: (0, utils_1.headerCapture)('request', (_c = (_b = (_a = config.headersToSpanAttributes) === null || _a === void 0 ? void 0 : _a.client) === null || _b === void 0 ? void 0 : _b.requestHeaders) !== null && _c !== void 0 ? _c : []),
                captureResponseHeaders: (0, utils_1.headerCapture)('response', (_f = (_e = (_d = config.headersToSpanAttributes) === null || _d === void 0 ? void 0 : _d.client) === null || _e === void 0 ? void 0 : _e.responseHeaders) !== null && _f !== void 0 ? _f : [])
            },
            server: {
                captureRequestHeaders: (0, utils_1.headerCapture)('request', (_j = (_h = (_g = config.headersToSpanAttributes) === null || _g === void 0 ? void 0 : _g.server) === null || _h === void 0 ? void 0 : _h.requestHeaders) !== null && _j !== void 0 ? _j : []),
                captureResponseHeaders: (0, utils_1.headerCapture)('response', (_m = (_l = (_k = config.headersToSpanAttributes) === null || _k === void 0 ? void 0 : _k.server) === null || _l === void 0 ? void 0 : _l.responseHeaders) !== null && _m !== void 0 ? _m : [])
            }
        };
    }
}
exports.HttpInstrumentation = HttpInstrumentation; //# sourceMappingURL=http.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpInstrumentation = void 0;
var http_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-http/build/src/http.js [instrumentation] (ecmascript)");
Object.defineProperty(exports, "HttpInstrumentation", {
    enumerable: true,
    get: function() {
        return http_1.HttpInstrumentation;
    }
}); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/shimmer/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
function isFunction(funktion) {
    return typeof funktion === 'function';
}
// Default to complaining loudly when things don't go according to plan.
var logger = console.error.bind(console);
// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty(obj, name, value) {
    var enumerable = !!obj[name] && obj.propertyIsEnumerable(name);
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: enumerable,
        writable: true,
        value: value
    });
}
// Keep initialization idempotent.
function shimmer(options) {
    if (options && options.logger) {
        if (!isFunction(options.logger)) logger("new logger isn't a function, not replacing");
        else logger = options.logger;
    }
}
function wrap(nodule, name, wrapper) {
    if (!nodule || !nodule[name]) {
        logger('no original function ' + name + ' to wrap');
        return;
    }
    if (!wrapper) {
        logger('no wrapper function');
        logger(new Error().stack);
        return;
    }
    if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
        logger('original object and wrapper must be functions');
        return;
    }
    var original = nodule[name];
    var wrapped = wrapper(original, name);
    defineProperty(wrapped, '__original', original);
    defineProperty(wrapped, '__unwrap', function() {
        if (nodule[name] === wrapped) defineProperty(nodule, name, original);
    });
    defineProperty(wrapped, '__wrapped', true);
    defineProperty(nodule, name, wrapped);
    return wrapped;
}
function massWrap(nodules, names, wrapper) {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) {
        nodules = [
            nodules
        ];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to wrap on modules');
        return;
    }
    nodules.forEach(function(nodule) {
        names.forEach(function(name) {
            wrap(nodule, name, wrapper);
        });
    });
}
function unwrap(nodule, name) {
    if (!nodule || !nodule[name]) {
        logger('no function to unwrap.');
        logger(new Error().stack);
        return;
    }
    if (!nodule[name].__unwrap) {
        logger('no original to unwrap to -- has ' + name + ' already been unwrapped?');
    } else {
        return nodule[name].__unwrap();
    }
}
function massUnwrap(nodules, names) {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    } else if (!Array.isArray(nodules)) {
        nodules = [
            nodules
        ];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to unwrap on modules');
        return;
    }
    nodules.forEach(function(nodule) {
        names.forEach(function(name) {
            unwrap(nodule, name);
        });
    });
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
module.exports = shimmer;
}}),
"[project]/apps/chat-ui/node_modules/forwarded-parse/lib/error.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * An error thrown by the parser on unexpected input.
 *
 * @constructor
 * @param {string} message The error message.
 * @param {string} input The unexpected input.
 * @public
 */ function ParseError(message, input) {
    Error.captureStackTrace(this, ParseError);
    this.name = this.constructor.name;
    this.message = message;
    this.input = input;
}
util.inherits(ParseError, Error);
module.exports = ParseError;
}}),
"[project]/apps/chat-ui/node_modules/forwarded-parse/lib/ascii.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
/**
 * Check if a character is a delimiter as defined in section 3.2.6 of RFC 7230.
 *
 *
 * @param {number} code The code of the character to check.
 * @returns {boolean} `true` if the character is a delimiter, else `false`.
 * @public
 */ function isDelimiter(code) {
    return code === 0x22 // '"'
     || code === 0x28 // '('
     || code === 0x29 // ')'
     || code === 0x2C // ','
     || code === 0x2F // '/'
     || code >= 0x3A && code <= 0x40 // ':', ';', '<', '=', '>', '?' '@'
     || code >= 0x5B && code <= 0x5D // '[', '\', ']'
     || code === 0x7B // '{'
     || code === 0x7D; // '}'
}
/**
 * Check if a character is allowed in a token as defined in section 3.2.6
 * of RFC 7230.
 *
 * @param {number} code The code of the character to check.
 * @returns {boolean} `true` if the character is allowed, else `false`.
 * @public
 */ function isTokenChar(code) {
    return code === 0x21 // '!'
     || code >= 0x23 && code <= 0x27 // '#', '$', '%', '&', '''
     || code === 0x2A // '*'
     || code === 0x2B // '+'
     || code === 0x2D // '-'
     || code === 0x2E // '.'
     || code >= 0x30 && code <= 0x39 // 0-9
     || code >= 0x41 && code <= 0x5A // A-Z
     || code >= 0x5E && code <= 0x7A // '^', '_', '`', a-z
     || code === 0x7C // '|'
     || code === 0x7E; // '~'
}
/**
 * Check if a character is a printable ASCII character.
 *
 * @param {number} code The code of the character to check.
 * @returns {boolean} `true` if `code` is in the %x20-7E range, else `false`.
 * @public
 */ function isPrint(code) {
    return code >= 0x20 && code <= 0x7E;
}
/**
 * Check if a character is an extended ASCII character.
 *
 * @param {number} code The code of the character to check.
 * @returns {boolean} `true` if `code` is in the %x80-FF range, else `false`.
 * @public
 */ function isExtended(code) {
    return code >= 0x80 && code <= 0xFF;
}
module.exports = {
    isDelimiter: isDelimiter,
    isTokenChar: isTokenChar,
    isExtended: isExtended,
    isPrint: isPrint
};
}}),
"[project]/apps/chat-ui/node_modules/forwarded-parse/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var ParseError = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/forwarded-parse/lib/error.js [instrumentation] (ecmascript)");
var ascii = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/forwarded-parse/lib/ascii.js [instrumentation] (ecmascript)");
var isDelimiter = ascii.isDelimiter;
var isTokenChar = ascii.isTokenChar;
var isExtended = ascii.isExtended;
var isPrint = ascii.isPrint;
/**
 * Unescape a string.
 *
 * @param {string} str The string to unescape.
 * @returns {string} A new unescaped string.
 * @private
 */ function decode(str) {
    return str.replace(/\\(.)/g, '$1');
}
/**
 * Build an error message when an unexpected character is found.
 *
 * @param {string} header The header field value.
 * @param {number} position The position of the unexpected character.
 * @returns {string} The error message.
 * @private
 */ function unexpectedCharacterMessage(header, position) {
    return util.format("Unexpected character '%s' at index %d", header.charAt(position), position);
}
/**
 * Parse the `Forwarded` header field value into an array of objects.
 *
 * @param {string} header The header field value.
 * @returns {Object[]}
 * @public
 */ function parse(header) {
    var mustUnescape = false;
    var isEscaping = false;
    var inQuotes = false;
    var forwarded = {};
    var output = [];
    var start = -1;
    var end = -1;
    var parameter;
    var code;
    for(var i = 0; i < header.length; i++){
        code = header.charCodeAt(i);
        if (parameter === undefined) {
            if (i !== 0 && start === -1 && (code === 0x20 /*' '*/  || code === 0x09 /*'\t'*/ )) {
                continue;
            }
            if (isTokenChar(code)) {
                if (start === -1) start = i;
            } else if (code === 0x3D /*'='*/  && start !== -1) {
                parameter = header.slice(start, i).toLowerCase();
                start = -1;
            } else {
                throw new ParseError(unexpectedCharacterMessage(header, i), header);
            }
        } else {
            if (isEscaping && (code === 0x09 || isPrint(code) || isExtended(code))) {
                isEscaping = false;
            } else if (isTokenChar(code)) {
                if (end !== -1) {
                    throw new ParseError(unexpectedCharacterMessage(header, i), header);
                }
                if (start === -1) start = i;
            } else if (isDelimiter(code) || isExtended(code)) {
                if (inQuotes) {
                    if (code === 0x22 /*'"'*/ ) {
                        inQuotes = false;
                        end = i;
                    } else if (code === 0x5C /*'\'*/ ) {
                        if (start === -1) start = i;
                        isEscaping = mustUnescape = true;
                    } else if (start === -1) {
                        start = i;
                    }
                } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3D) {
                    inQuotes = true;
                } else if ((code === 0x2C /*','*/  || code === 0x3B /*';'*/ ) && (start !== -1 || end !== -1)) {
                    if (start !== -1) {
                        if (end === -1) end = i;
                        forwarded[parameter] = mustUnescape ? decode(header.slice(start, end)) : header.slice(start, end);
                    } else {
                        forwarded[parameter] = '';
                    }
                    if (code === 0x2C) {
                        output.push(forwarded);
                        forwarded = {};
                    }
                    parameter = undefined;
                    start = end = -1;
                } else {
                    throw new ParseError(unexpectedCharacterMessage(header, i), header);
                }
            } else if (code === 0x20 || code === 0x09) {
                if (end !== -1) continue;
                if (inQuotes) {
                    if (start === -1) start = i;
                } else if (start !== -1) {
                    end = i;
                } else {
                    throw new ParseError(unexpectedCharacterMessage(header, i), header);
                }
            } else {
                throw new ParseError(unexpectedCharacterMessage(header, i), header);
            }
        }
    }
    if (parameter === undefined || inQuotes || start === -1 && end === -1 || code === 0x20 || code === 0x09) {
        throw new ParseError('Unexpected end of input', header);
    }
    if (start !== -1) {
        if (end === -1) end = i;
        forwarded[parameter] = mustUnescape ? decode(header.slice(start, end)) : header.slice(start, end);
    } else {
        forwarded[parameter] = '';
    }
    output.push(forwarded);
    return output;
}
module.exports = parse;
}}),
"[project]/apps/chat-ui/node_modules/@sentry/opentelemetry/build/cjs/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, Symbol.toStringTag, {
    value: 'Module'
});
const semanticConventions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/core/build/cjs/index.js [instrumentation] (ecmascript)");
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core$1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const sdkTraceBase = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js [instrumentation] (ecmascript)");
/** If this attribute is true, it means that the parent is a remote span. */ const SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE = 'sentry.parentIsRemote';
// These are not standardized yet, but used by the graphql instrumentation
const SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = 'sentry.graphql.operation';
/**
 * Get the parent span id from a span.
 * In OTel v1, the parent span id is accessed as `parentSpanId`
 * In OTel v2, the parent span id is accessed as `spanId` on the `parentSpanContext`
 */ function getParentSpanId(span) {
    if ('parentSpanId' in span) {
        return span.parentSpanId;
    } else if ('parentSpanContext' in span) {
        return span.parentSpanContext?.spanId;
    }
    return undefined;
}
/**
 * Check if a given span has attributes.
 * This is necessary because the base `Span` type does not have attributes,
 * so in places where we are passed a generic span, we need to check if we want to access them.
 */ function spanHasAttributes(span) {
    const castSpan = span;
    return !!castSpan.attributes && typeof castSpan.attributes === 'object';
}
/**
 * Check if a given span has a kind.
 * This is necessary because the base `Span` type does not have a kind,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */ function spanHasKind(span) {
    const castSpan = span;
    return typeof castSpan.kind === 'number';
}
/**
 * Check if a given span has a status.
 * This is necessary because the base `Span` type does not have a status,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */ function spanHasStatus(span) {
    const castSpan = span;
    return !!castSpan.status;
}
/**
 * Check if a given span has a name.
 * This is necessary because the base `Span` type does not have a name,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */ function spanHasName(span) {
    const castSpan = span;
    return !!castSpan.name;
}
/**
 * Check if a given span has a kind.
 * This is necessary because the base `Span` type does not have a kind,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */ function spanHasParentId(span) {
    const castSpan = span;
    return !!getParentSpanId(castSpan);
}
/**
 * Check if a given span has events.
 * This is necessary because the base `Span` type does not have events,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */ function spanHasEvents(span) {
    const castSpan = span;
    return Array.isArray(castSpan.events);
}
/**
 * Get sanitizied request data from an OTEL span.
 */ function getRequestSpanData(span) {
    // The base `Span` type has no `attributes`, so we need to guard here against that
    if (!spanHasAttributes(span)) {
        return {};
    }
    // eslint-disable-next-line deprecation/deprecation
    const maybeUrlAttribute = span.attributes[semanticConventions.ATTR_URL_FULL] || span.attributes[semanticConventions.SEMATTRS_HTTP_URL];
    const data = {
        url: maybeUrlAttribute,
        // eslint-disable-next-line deprecation/deprecation
        'http.method': span.attributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD] || span.attributes[semanticConventions.SEMATTRS_HTTP_METHOD]
    };
    // Default to GET if URL is set but method is not
    if (!data['http.method'] && data.url) {
        data['http.method'] = 'GET';
    }
    try {
        if (typeof maybeUrlAttribute === 'string') {
            const url = core.parseUrl(maybeUrlAttribute);
            data.url = core.getSanitizedUrlString(url);
            if (url.search) {
                data['http.query'] = url.search;
            }
            if (url.hash) {
                data['http.fragment'] = url.hash;
            }
        }
    } catch  {
    // ignore
    }
    return data;
}
// Typescript complains if we do not use `...args: any[]` for the mixin, with:
// A mixin class must have a constructor with a single rest parameter of type 'any[]'.ts(2545)
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Wrap an Client class with things we need for OpenTelemetry support.
 * Make sure that the Client class passed in is non-abstract!
 *
 * Usage:
 * const OpenTelemetryClient = getWrappedClientClass(NodeClient);
 * const client = new OpenTelemetryClient(options);
 */ function wrapClientClass(ClientClass) {
    // @ts-expect-error We just assume that this is non-abstract, if you pass in an abstract class this would make it non-abstract
    class OpenTelemetryClient extends ClientClass {
        constructor(...args){
            super(...args);
        }
        /** Get the OTEL tracer. */ get tracer() {
            if (this._tracer) {
                return this._tracer;
            }
            const name = '@sentry/opentelemetry';
            const version = core.SDK_VERSION;
            const tracer = api.trace.getTracer(name, version);
            this._tracer = tracer;
            return tracer;
        }
        /**
     * @inheritDoc
     */ async flush(timeout) {
            const provider = this.traceProvider;
            await provider?.forceFlush();
            return super.flush(timeout);
        }
    }
    return OpenTelemetryClient;
}
/* eslint-enable @typescript-eslint/no-explicit-any */ /**
 * Get the span kind from a span.
 * For whatever reason, this is not public API on the generic "Span" type,
 * so we need to check if we actually have a `SDKTraceBaseSpan` where we can fetch this from.
 * Otherwise, we fall back to `SpanKind.INTERNAL`.
 */ function getSpanKind(span) {
    if (spanHasKind(span)) {
        return span.kind;
    }
    return api.SpanKind.INTERNAL;
}
const SENTRY_TRACE_HEADER = 'sentry-trace';
const SENTRY_BAGGAGE_HEADER = 'baggage';
const SENTRY_TRACE_STATE_DSC = 'sentry.dsc';
const SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING = 'sentry.sampled_not_recording';
const SENTRY_TRACE_STATE_URL = 'sentry.url';
const SENTRY_TRACE_STATE_SAMPLE_RAND = 'sentry.sample_rand';
const SENTRY_TRACE_STATE_SAMPLE_RATE = 'sentry.sample_rate';
const SENTRY_SCOPES_CONTEXT_KEY = api.createContextKey('sentry_scopes');
const SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY = api.createContextKey('sentry_fork_isolation_scope');
const SENTRY_FORK_SET_SCOPE_CONTEXT_KEY = api.createContextKey('sentry_fork_set_scope');
const SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY = api.createContextKey('sentry_fork_set_isolation_scope');
const SCOPE_CONTEXT_FIELD = '_scopeContext';
/**
 * Try to get the current scopes from the given OTEL context.
 * This requires a Context Manager that was wrapped with getWrappedContextManager.
 */ function getScopesFromContext(context) {
    return context.getValue(SENTRY_SCOPES_CONTEXT_KEY);
}
/**
 * Set the current scopes on an OTEL context.
 * This will return a forked context with the Propagation Context set.
 */ function setScopesOnContext(context, scopes) {
    return context.setValue(SENTRY_SCOPES_CONTEXT_KEY, scopes);
}
/**
 * Set the context on the scope so we can later look it up.
 * We need this to get the context from the scope in the `trace` functions.
 */ function setContextOnScope(scope, context) {
    core.addNonEnumerableProperty(scope, SCOPE_CONTEXT_FIELD, context);
}
/**
 * Get the context related to a scope.
 */ function getContextFromScope(scope) {
    return scope[SCOPE_CONTEXT_FIELD];
}
/**
 *
 * @param otelSpan Checks whether a given OTEL Span is an http request to sentry.
 * @returns boolean
 */ function isSentryRequestSpan(span) {
    if (!spanHasAttributes(span)) {
        return false;
    }
    const { attributes } = span;
    // `ATTR_URL_FULL` is the new attribute, but we still support the old one, `ATTR_HTTP_URL`, for now.
    // eslint-disable-next-line deprecation/deprecation
    const httpUrl = attributes[semanticConventions.SEMATTRS_HTTP_URL] || attributes[semanticConventions.ATTR_URL_FULL];
    if (!httpUrl) {
        return false;
    }
    return core.isSentryRequestUrl(httpUrl.toString(), core.getClient());
}
/**
 * OpenTelemetry only knows about SAMPLED or NONE decision,
 * but for us it is important to differentiate between unset and unsampled.
 *
 * Both of these are identified as `traceFlags === TracegFlags.NONE`,
 * but we additionally look at a special trace state to differentiate between them.
 */ function getSamplingDecision(spanContext) {
    const { traceFlags, traceState } = spanContext;
    const sampledNotRecording = traceState ? traceState.get(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING) === '1' : false;
    // If trace flag is `SAMPLED`, we interpret this as sampled
    // If it is `NONE`, it could mean either it was sampled to be not recorder, or that it was not sampled at all
    // For us this is an important difference, sow e look at the SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING
    // to identify which it is
    if (traceFlags === api.TraceFlags.SAMPLED) {
        return true;
    }
    if (sampledNotRecording) {
        return false;
    }
    // Fall back to DSC as a last resort, that may also contain `sampled`...
    const dscString = traceState ? traceState.get(SENTRY_TRACE_STATE_DSC) : undefined;
    const dsc = dscString ? core.baggageHeaderToDynamicSamplingContext(dscString) : undefined;
    if (dsc?.sampled === 'true') {
        return true;
    }
    if (dsc?.sampled === 'false') {
        return false;
    }
    return undefined;
}
/**
 * Infer the op & description for a set of name, attributes and kind of a span.
 */ function inferSpanData(spanName, attributes, kind) {
    // if http.method exists, this is an http request span
    // eslint-disable-next-line deprecation/deprecation
    const httpMethod = attributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD] || attributes[semanticConventions.SEMATTRS_HTTP_METHOD];
    if (httpMethod) {
        return descriptionForHttpMethod({
            attributes,
            name: spanName,
            kind
        }, httpMethod);
    }
    // eslint-disable-next-line deprecation/deprecation
    const dbSystem = attributes[semanticConventions.SEMATTRS_DB_SYSTEM];
    const opIsCache = typeof attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] === 'string' && attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP].startsWith('cache.');
    // If db.type exists then this is a database call span
    // If the Redis DB is used as a cache, the span description should not be changed
    if (dbSystem && !opIsCache) {
        return descriptionForDbSystem({
            attributes,
            name: spanName
        });
    }
    const customSourceOrRoute = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === 'custom' ? 'custom' : 'route';
    // If rpc.service exists then this is a rpc call span.
    // eslint-disable-next-line deprecation/deprecation
    const rpcService = attributes[semanticConventions.SEMATTRS_RPC_SERVICE];
    if (rpcService) {
        return {
            ...getUserUpdatedNameAndSource(spanName, attributes, 'route'),
            op: 'rpc'
        };
    }
    // If messaging.system exists then this is a messaging system span.
    // eslint-disable-next-line deprecation/deprecation
    const messagingSystem = attributes[semanticConventions.SEMATTRS_MESSAGING_SYSTEM];
    if (messagingSystem) {
        return {
            ...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
            op: 'message'
        };
    }
    // If faas.trigger exists then this is a function as a service span.
    // eslint-disable-next-line deprecation/deprecation
    const faasTrigger = attributes[semanticConventions.SEMATTRS_FAAS_TRIGGER];
    if (faasTrigger) {
        return {
            ...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
            op: faasTrigger.toString()
        };
    }
    return {
        op: undefined,
        description: spanName,
        source: 'custom'
    };
}
/**
 * Extract better op/description from an otel span.
 *
 * Does not overwrite the span name if the source is already set to custom to ensure
 * that user-updated span names are preserved. In this case, we only adjust the op but
 * leave span description and source unchanged.
 *
 * Based on https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/7422ce2a06337f68a59b552b8c5a2ac125d6bae5/exporter/sentryexporter/sentry_exporter.go#L306
 */ function parseSpanDescription(span) {
    const attributes = spanHasAttributes(span) ? span.attributes : {};
    const name = spanHasName(span) ? span.name : '<unknown>';
    const kind = getSpanKind(span);
    return inferSpanData(name, attributes, kind);
}
function descriptionForDbSystem({ attributes, name }) {
    // if we already have a custom name, we don't overwrite it but only set the op
    const userDefinedName = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    if (typeof userDefinedName === 'string') {
        return {
            op: 'db',
            description: userDefinedName,
            source: attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || 'custom'
        };
    }
    // if we already have the source set to custom, we don't overwrite the span description but only set the op
    if (attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === 'custom') {
        return {
            op: 'db',
            description: name,
            source: 'custom'
        };
    }
    // Use DB statement (Ex "SELECT * FROM table") if possible as description.
    // eslint-disable-next-line deprecation/deprecation
    const statement = attributes[semanticConventions.SEMATTRS_DB_STATEMENT];
    const description = statement ? statement.toString() : name;
    return {
        op: 'db',
        description,
        source: 'task'
    };
}
/** Only exported for tests. */ function descriptionForHttpMethod({ name, kind, attributes }, httpMethod) {
    const opParts = [
        'http'
    ];
    switch(kind){
        case api.SpanKind.CLIENT:
            opParts.push('client');
            break;
        case api.SpanKind.SERVER:
            opParts.push('server');
            break;
    }
    // Spans for HTTP requests we have determined to be prefetch requests will have a `.prefetch` postfix in the op
    if (attributes['sentry.http.prefetch']) {
        opParts.push('prefetch');
    }
    const { urlPath, url, query, fragment, hasRoute } = getSanitizedUrl(attributes, kind);
    if (!urlPath) {
        return {
            ...getUserUpdatedNameAndSource(name, attributes),
            op: opParts.join('.')
        };
    }
    const graphqlOperationsAttribute = attributes[SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION];
    // Ex. GET /api/users
    const baseDescription = `${httpMethod} ${urlPath}`;
    // When the http span has a graphql operation, append it to the description
    // We add these in the graphqlIntegration
    const inferredDescription = graphqlOperationsAttribute ? `${baseDescription} (${getGraphqlOperationNamesFromAttribute(graphqlOperationsAttribute)})` : baseDescription;
    // If `httpPath` is a root path, then we can categorize the transaction source as route.
    const inferredSource = hasRoute || urlPath === '/' ? 'route' : 'url';
    const data = {};
    if (url) {
        data.url = url;
    }
    if (query) {
        data['http.query'] = query;
    }
    if (fragment) {
        data['http.fragment'] = fragment;
    }
    // If the span kind is neither client nor server, we use the original name
    // this infers that somebody manually started this span, in which case we don't want to overwrite the name
    const isClientOrServerKind = kind === api.SpanKind.CLIENT || kind === api.SpanKind.SERVER;
    // If the span is an auto-span (=it comes from one of our instrumentations),
    // we always want to infer the name
    // this is necessary because some of the auto-instrumentation we use uses kind=INTERNAL
    const origin = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] || 'manual';
    const isManualSpan = !`${origin}`.startsWith('auto');
    // If users (or in very rare occasions we) set the source to custom, we don't overwrite the name
    const alreadyHasCustomSource = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === 'custom';
    const customSpanName = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    const useInferredDescription = !alreadyHasCustomSource && customSpanName == null && (isClientOrServerKind || !isManualSpan);
    const { description, source } = useInferredDescription ? {
        description: inferredDescription,
        source: inferredSource
    } : getUserUpdatedNameAndSource(name, attributes);
    return {
        op: opParts.join('.'),
        description,
        source,
        data
    };
}
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
/** Exported for tests only */ function getSanitizedUrl(attributes, kind) {
    // This is the relative path of the URL, e.g. /sub
    // eslint-disable-next-line deprecation/deprecation
    const httpTarget = attributes[semanticConventions.SEMATTRS_HTTP_TARGET];
    // This is the full URL, including host & query params etc., e.g. https://example.com/sub?foo=bar
    // eslint-disable-next-line deprecation/deprecation
    const httpUrl = attributes[semanticConventions.SEMATTRS_HTTP_URL] || attributes[semanticConventions.ATTR_URL_FULL];
    // This is the normalized route name - may not always be available!
    const httpRoute = attributes[semanticConventions.ATTR_HTTP_ROUTE];
    const parsedUrl = typeof httpUrl === 'string' ? core.parseUrl(httpUrl) : undefined;
    const url = parsedUrl ? core.getSanitizedUrlString(parsedUrl) : undefined;
    const query = parsedUrl?.search || undefined;
    const fragment = parsedUrl?.hash || undefined;
    if (typeof httpRoute === 'string') {
        return {
            urlPath: httpRoute,
            url,
            query,
            fragment,
            hasRoute: true
        };
    }
    if (kind === api.SpanKind.SERVER && typeof httpTarget === 'string') {
        return {
            urlPath: core.stripUrlQueryAndFragment(httpTarget),
            url,
            query,
            fragment,
            hasRoute: false
        };
    }
    if (parsedUrl) {
        return {
            urlPath: url,
            url,
            query,
            fragment,
            hasRoute: false
        };
    }
    // fall back to target even for client spans, if no URL is present
    if (typeof httpTarget === 'string') {
        return {
            urlPath: core.stripUrlQueryAndFragment(httpTarget),
            url,
            query,
            fragment,
            hasRoute: false
        };
    }
    return {
        urlPath: undefined,
        url,
        query,
        fragment,
        hasRoute: false
    };
}
/**
 * Because Otel instrumentation sometimes mutates span names via `span.updateName`, the only way
 * to ensure that a user-set span name is preserved is to store it as a tmp attribute on the span.
 * We delete this attribute once we're done with it when preparing the event envelope.
 *
 * This temp attribute always takes precedence over the original name.
 *
 * We also need to take care of setting the correct source. Users can always update the source
 * after updating the name, so we need to respect that.
 *
 * @internal exported only for testing
 */ function getUserUpdatedNameAndSource(originalName, attributes, fallbackSource = 'custom') {
    const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || fallbackSource;
    const description = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    if (description && typeof description === 'string') {
        return {
            description,
            source
        };
    }
    return {
        description: originalName,
        source
    };
}
/**
 * Setup a DSC handler on the passed client,
 * ensuring that the transaction name is inferred from the span correctly.
 */ function enhanceDscWithOpenTelemetryRootSpanName(client) {
    client.on('createDsc', (dsc, rootSpan)=>{
        if (!rootSpan) {
            return;
        }
        // We want to overwrite the transaction on the DSC that is created by default in core
        // The reason for this is that we want to infer the span name, not use the initial one
        // Otherwise, we'll get names like "GET" instead of e.g. "GET /foo"
        // `parseSpanDescription` takes the attributes of the span into account for the name
        // This mutates the passed-in DSC
        const jsonSpan = core.spanToJSON(rootSpan);
        const attributes = jsonSpan.data;
        const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
        const { description } = spanHasName(rootSpan) ? parseSpanDescription(rootSpan) : {
            description: undefined
        };
        if (source !== 'url' && description) {
            dsc.transaction = description;
        }
        // Also ensure sampling decision is correctly inferred
        // In core, we use `spanIsSampled`, which just looks at the trace flags
        // but in OTEL, we use a slightly more complex logic to be able to differntiate between unsampled and deferred sampling
        if (core.hasSpansEnabled()) {
            const sampled = getSamplingDecision(rootSpan.spanContext());
            dsc.sampled = sampled == undefined ? undefined : String(sampled);
        }
    });
}
/**
 * Returns the currently active span.
 */ function getActiveSpan() {
    return api.trace.getActiveSpan();
}
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
/**
 * Generate a TraceState for the given data.
 */ function makeTraceState({ dsc, sampled }) {
    // We store the DSC as OTEL trace state on the span context
    const dscString = dsc ? core.dynamicSamplingContextToSentryBaggageHeader(dsc) : undefined;
    const traceStateBase = new core$1.TraceState();
    const traceStateWithDsc = dscString ? traceStateBase.set(SENTRY_TRACE_STATE_DSC, dscString) : traceStateBase;
    // We also specifically want to store if this is sampled to be not recording,
    // or unsampled (=could be either sampled or not)
    return sampled === false ? traceStateWithDsc.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, '1') : traceStateWithDsc;
}
const setupElements = new Set();
/** Get all the OpenTelemetry elements that have been set up. */ function openTelemetrySetupCheck() {
    return Array.from(setupElements);
}
/** Mark an OpenTelemetry element as setup. */ function setIsSetup(element) {
    setupElements.add(element);
}
/**
 * Injects and extracts `sentry-trace` and `baggage` headers from carriers.
 */ class SentryPropagator extends core$1.W3CBaggagePropagator {
    /** A map of URLs that have already been checked for if they match tracePropagationTargets. */ constructor(){
        super();
        setIsSetup('SentryPropagator');
        // We're caching results so we don't have to recompute regexp every time we create a request.
        this._urlMatchesTargetsMap = new core.LRUMap(100);
    }
    /**
   * @inheritDoc
   */ inject(context, carrier, setter) {
        if (core$1.isTracingSuppressed(context)) {
            DEBUG_BUILD && core.logger.log('[Tracing] Not injecting trace data for url because tracing is suppressed.');
            return;
        }
        const activeSpan = api.trace.getSpan(context);
        const url = activeSpan && getCurrentURL(activeSpan);
        const tracePropagationTargets = core.getClient()?.getOptions()?.tracePropagationTargets;
        if (!shouldPropagateTraceForUrl(url, tracePropagationTargets, this._urlMatchesTargetsMap)) {
            DEBUG_BUILD && core.logger.log('[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:', url);
            return;
        }
        const existingBaggageHeader = getExistingBaggage(carrier);
        let baggage = api.propagation.getBaggage(context) || api.propagation.createBaggage({});
        const { dynamicSamplingContext, traceId, spanId, sampled } = getInjectionData(context);
        if (existingBaggageHeader) {
            const baggageEntries = core.parseBaggageHeader(existingBaggageHeader);
            if (baggageEntries) {
                Object.entries(baggageEntries).forEach(([key, value])=>{
                    baggage = baggage.setEntry(key, {
                        value
                    });
                });
            }
        }
        if (dynamicSamplingContext) {
            baggage = Object.entries(dynamicSamplingContext).reduce((b, [dscKey, dscValue])=>{
                if (dscValue) {
                    return b.setEntry(`${core.SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`, {
                        value: dscValue
                    });
                }
                return b;
            }, baggage);
        }
        // We also want to avoid setting the default OTEL trace ID, if we get that for whatever reason
        if (traceId && traceId !== api.INVALID_TRACEID) {
            setter.set(carrier, SENTRY_TRACE_HEADER, core.generateSentryTraceHeader(traceId, spanId, sampled));
        }
        super.inject(api.propagation.setBaggage(context, baggage), carrier, setter);
    }
    /**
   * @inheritDoc
   */ extract(context, carrier, getter) {
        const maybeSentryTraceHeader = getter.get(carrier, SENTRY_TRACE_HEADER);
        const baggage = getter.get(carrier, SENTRY_BAGGAGE_HEADER);
        const sentryTrace = maybeSentryTraceHeader ? Array.isArray(maybeSentryTraceHeader) ? maybeSentryTraceHeader[0] : maybeSentryTraceHeader : undefined;
        // Add remote parent span context
        // If there is no incoming trace, this will return the context as-is
        return ensureScopesOnContext(getContextWithRemoteActiveSpan(context, {
            sentryTrace,
            baggage
        }));
    }
    /**
   * @inheritDoc
   */ fields() {
        return [
            SENTRY_TRACE_HEADER,
            SENTRY_BAGGAGE_HEADER
        ];
    }
}
const NOT_PROPAGATED_MESSAGE = '[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:';
/**
 * Check if a given URL should be propagated to or not.
 * If no url is defined, or no trace propagation targets are defined, this will always return `true`.
 * You can also optionally provide a decision map, to cache decisions and avoid repeated regex lookups.
 */ function shouldPropagateTraceForUrl(url, tracePropagationTargets, decisionMap) {
    if (typeof url !== 'string' || !tracePropagationTargets) {
        return true;
    }
    const cachedDecision = decisionMap?.get(url);
    if (cachedDecision !== undefined) {
        DEBUG_BUILD && !cachedDecision && core.logger.log(NOT_PROPAGATED_MESSAGE, url);
        return cachedDecision;
    }
    const decision = core.stringMatchesSomePattern(url, tracePropagationTargets);
    decisionMap?.set(url, decision);
    DEBUG_BUILD && !decision && core.logger.log(NOT_PROPAGATED_MESSAGE, url);
    return decision;
}
/**
 * Get propagation injection data for the given context.
 */ function getInjectionData(context) {
    const span = api.trace.getSpan(context);
    // If we have a remote span, the spanId should be considered as the parentSpanId, not spanId itself
    // Instead, we use a virtual (generated) spanId for propagation
    if (span?.spanContext().isRemote) {
        const spanContext = span.spanContext();
        const dynamicSamplingContext = core.getDynamicSamplingContextFromSpan(span);
        return {
            dynamicSamplingContext,
            traceId: spanContext.traceId,
            spanId: undefined,
            sampled: getSamplingDecision(spanContext)
        };
    }
    // If we have a local span, we just use this
    if (span) {
        const spanContext = span.spanContext();
        const dynamicSamplingContext = core.getDynamicSamplingContextFromSpan(span);
        return {
            dynamicSamplingContext,
            traceId: spanContext.traceId,
            spanId: spanContext.spanId,
            sampled: getSamplingDecision(spanContext)
        };
    }
    // Else we try to use the propagation context from the scope
    // The only scenario where this should happen is when we neither have a span, nor an incoming trace
    const scope = getScopesFromContext(context)?.scope || core.getCurrentScope();
    const client = core.getClient();
    const propagationContext = scope.getPropagationContext();
    const dynamicSamplingContext = client ? core.getDynamicSamplingContextFromScope(client, scope) : undefined;
    return {
        dynamicSamplingContext,
        traceId: propagationContext.traceId,
        spanId: propagationContext.propagationSpanId,
        sampled: propagationContext.sampled
    };
}
function getContextWithRemoteActiveSpan(ctx, { sentryTrace, baggage }) {
    const propagationContext = core.propagationContextFromHeaders(sentryTrace, baggage);
    const { traceId, parentSpanId, sampled, dsc } = propagationContext;
    // We only want to set the virtual span if we are continuing a concrete trace
    // Otherwise, we ignore the incoming trace here, e.g. if we have no trace headers
    if (!parentSpanId) {
        return ctx;
    }
    const spanContext = generateRemoteSpanContext({
        traceId,
        spanId: parentSpanId,
        sampled,
        dsc
    });
    return api.trace.setSpanContext(ctx, spanContext);
}
/**
 * Takes trace strings and propagates them as a remote active span.
 * This should be used in addition to `continueTrace` in OTEL-powered environments.
 */ function continueTraceAsRemoteSpan(ctx, options, callback) {
    const ctxWithSpanContext = ensureScopesOnContext(getContextWithRemoteActiveSpan(ctx, options));
    return api.context.with(ctxWithSpanContext, callback);
}
function ensureScopesOnContext(ctx) {
    // If there are no scopes yet on the context, ensure we have them
    const scopes = getScopesFromContext(ctx);
    const newScopes = {
        // If we have no scope here, this is most likely either the root context or a context manually derived from it
        // In this case, we want to fork the current scope, to ensure we do not pollute the root scope
        scope: scopes ? scopes.scope : core.getCurrentScope().clone(),
        isolationScope: scopes ? scopes.isolationScope : core.getIsolationScope()
    };
    return setScopesOnContext(ctx, newScopes);
}
/** Try to get the existing baggage header so we can merge this in. */ function getExistingBaggage(carrier) {
    try {
        const baggage = carrier[SENTRY_BAGGAGE_HEADER];
        return Array.isArray(baggage) ? baggage.join(',') : baggage;
    } catch  {
        return undefined;
    }
}
/**
 * It is pretty tricky to get access to the outgoing request URL of a request in the propagator.
 * As we only have access to the context of the span to be sent and the carrier (=headers),
 * but the span may be unsampled and thus have no attributes.
 *
 * So we use the following logic:
 * 1. If we have an active span, we check if it has a URL attribute.
 * 2. Else, if the active span has no URL attribute (e.g. it is unsampled), we check a special trace state (which we set in our sampler).
 */ function getCurrentURL(span) {
    const spanData = core.spanToJSON(span).data;
    // `ATTR_URL_FULL` is the new attribute, but we still support the old one, `SEMATTRS_HTTP_URL`, for now.
    // eslint-disable-next-line deprecation/deprecation
    const urlAttribute = spanData[semanticConventions.SEMATTRS_HTTP_URL] || spanData[semanticConventions.ATTR_URL_FULL];
    if (typeof urlAttribute === 'string') {
        return urlAttribute;
    }
    // Also look at the traceState, which we may set in the sampler even for unsampled spans
    const urlTraceState = span.spanContext().traceState?.get(SENTRY_TRACE_STATE_URL);
    if (urlTraceState) {
        return urlTraceState;
    }
    return undefined;
}
function generateRemoteSpanContext({ spanId, traceId, sampled, dsc }) {
    // We store the DSC as OTEL trace state on the span context
    const traceState = makeTraceState({
        dsc,
        sampled
    });
    const spanContext = {
        traceId,
        spanId,
        isRemote: true,
        traceFlags: sampled ? api.TraceFlags.SAMPLED : api.TraceFlags.NONE,
        traceState
    };
    return spanContext;
}
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
    const tracer = getTracer();
    const { name, parentSpan: customParentSpan } = options;
    // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(()=>{
        const activeCtx = getContext(options.scope, options.forceTransaction);
        const shouldSkipSpan = options.onlyIfParent && !api.trace.getSpan(activeCtx);
        const ctx = shouldSkipSpan ? core$1.suppressTracing(activeCtx) : activeCtx;
        const spanOptions = getSpanOptions(options);
        return tracer.startActiveSpan(name, spanOptions, ctx, (span)=>{
            return core.handleCallbackErrors(()=>callback(span), ()=>{
                // Only set the span status to ERROR when there wasn't any status set before, in order to avoid stomping useful span statuses
                if (core.spanToJSON(span).status === undefined) {
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR
                    });
                }
            }, ()=>span.end());
        });
    });
}
/**
 * Similar to `Sentry.startSpan`. Wraps a function with a span, but does not finish the span
 * after the function is done automatically. You'll have to call `span.end()` manually.
 *
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */ function startSpanManual(options, callback) {
    const tracer = getTracer();
    const { name, parentSpan: customParentSpan } = options;
    // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(()=>{
        const activeCtx = getContext(options.scope, options.forceTransaction);
        const shouldSkipSpan = options.onlyIfParent && !api.trace.getSpan(activeCtx);
        const ctx = shouldSkipSpan ? core$1.suppressTracing(activeCtx) : activeCtx;
        const spanOptions = getSpanOptions(options);
        return tracer.startActiveSpan(name, spanOptions, ctx, (span)=>{
            return core.handleCallbackErrors(()=>callback(span, ()=>span.end()), ()=>{
                // Only set the span status to ERROR when there wasn't any status set before, in order to avoid stomping useful span statuses
                if (core.spanToJSON(span).status === undefined) {
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR
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
    const tracer = getTracer();
    const { name, parentSpan: customParentSpan } = options;
    // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(()=>{
        const activeCtx = getContext(options.scope, options.forceTransaction);
        const shouldSkipSpan = options.onlyIfParent && !api.trace.getSpan(activeCtx);
        const ctx = shouldSkipSpan ? core$1.suppressTracing(activeCtx) : activeCtx;
        const spanOptions = getSpanOptions(options);
        const span = tracer.startSpan(name, spanOptions, ctx);
        return span;
    });
}
/**
 * Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
 * passed `null` to start an entirely new span tree.
 *
 * @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
 * spans started within the callback will be root spans.
 * @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
 * @returns the value returned from the provided callback function.
 */ function withActiveSpan(span, callback) {
    const newContextWithActiveSpan = span ? api.trace.setSpan(api.context.active(), span) : api.trace.deleteSpan(api.context.active());
    return api.context.with(newContextWithActiveSpan, ()=>callback(core.getCurrentScope()));
}
function getTracer() {
    const client = core.getClient();
    return client?.tracer || api.trace.getTracer('@sentry/opentelemetry', core.SDK_VERSION);
}
function getSpanOptions(options) {
    const { startTime, attributes, kind, op, links } = options;
    // OTEL expects timestamps in ms, not seconds
    const fixedStartTime = typeof startTime === 'number' ? ensureTimestampInMilliseconds(startTime) : startTime;
    return {
        attributes: op ? {
            [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
            ...attributes
        } : attributes,
        kind,
        links,
        startTime: fixedStartTime
    };
}
function ensureTimestampInMilliseconds(timestamp) {
    const isMs = timestamp < 9999999999;
    return isMs ? timestamp * 1000 : timestamp;
}
function getContext(scope, forceTransaction) {
    const ctx = getContextForScope(scope);
    const parentSpan = api.trace.getSpan(ctx);
    // In the case that we have no parent span, we start a new trace
    // Note that if we continue a trace, we'll always have a remote parent span here anyhow
    if (!parentSpan) {
        return ctx;
    }
    // If we don't want to force a transaction, and we have a parent span, all good, we just return as-is!
    if (!forceTransaction) {
        return ctx;
    }
    // Else, if we do have a parent span but want to force a transaction, we have to simulate a "root" context
    // Else, we need to do two things:
    // 1. Unset the parent span from the context, so we'll create a new root span
    // 2. Ensure the propagation context is correct, so we'll continue from the parent span
    const ctxWithoutSpan = api.trace.deleteSpan(ctx);
    const { spanId, traceId } = parentSpan.spanContext();
    const sampled = getSamplingDecision(parentSpan.spanContext());
    // In this case, when we are forcing a transaction, we want to treat this like continuing an incoming trace
    // so we set the traceState according to the root span
    const rootSpan = core.getRootSpan(parentSpan);
    const dsc = core.getDynamicSamplingContextFromSpan(rootSpan);
    const traceState = makeTraceState({
        dsc,
        sampled
    });
    const spanOptions = {
        traceId,
        spanId,
        isRemote: true,
        traceFlags: sampled ? api.TraceFlags.SAMPLED : api.TraceFlags.NONE,
        traceState
    };
    const ctxWithSpanContext = api.trace.setSpanContext(ctxWithoutSpan, spanOptions);
    return ctxWithSpanContext;
}
function getContextForScope(scope) {
    if (scope) {
        const ctx = getContextFromScope(scope);
        if (ctx) {
            return ctx;
        }
    }
    return api.context.active();
}
/**
 * Continue a trace from `sentry-trace` and `baggage` values.
 * These values can be obtained from incoming request headers, or in the browser from `<meta name="sentry-trace">`
 * and `<meta name="baggage">` HTML tags.
 *
 * Spans started with `startSpan`, `startSpanManual` and `startInactiveSpan`, within the callback will automatically
 * be attached to the incoming trace.
 *
 * This is a custom version of `continueTrace` that is used in OTEL-powered environments.
 * It propagates the trace as a remote span, in addition to setting it on the propagation context.
 */ function continueTrace(options, callback) {
    return continueTraceAsRemoteSpan(api.context.active(), options, callback);
}
/**
 * Get the trace context for a given scope.
 * We have a custom implemention here because we need an OTEL-specific way to get the span from a scope.
 */ function getTraceContextForScope(client, scope) {
    const ctx = getContextFromScope(scope);
    const span = ctx && api.trace.getSpan(ctx);
    const traceContext = span ? core.spanToTraceContext(span) : core.getTraceContextFromScope(scope);
    const dynamicSamplingContext = span ? core.getDynamicSamplingContextFromSpan(span) : core.getDynamicSamplingContextFromScope(client, scope);
    return [
        dynamicSamplingContext,
        traceContext
    ];
}
function getActiveSpanWrapper(parentSpan) {
    return parentSpan !== undefined ? (callback)=>{
        return withActiveSpan(parentSpan, callback);
    } : (callback)=>callback();
}
/** Suppress tracing in the given callback, ensuring no spans are generated inside of it. */ function suppressTracing(callback) {
    const ctx = core$1.suppressTracing(api.context.active());
    return api.context.with(ctx, callback);
}
/** Ensure the `trace` context is set on all events. */ function setupEventContextTrace(client) {
    client.on('preprocessEvent', (event)=>{
        const span = getActiveSpan();
        // For transaction events, this is handled separately
        // Because the active span may not be the span that is actually the transaction event
        if (!span || event.type === 'transaction') {
            return;
        }
        // If event has already set `trace` context, use that one.
        event.contexts = {
            trace: core.spanToTraceContext(span),
            ...event.contexts
        };
        const rootSpan = core.getRootSpan(span);
        event.sdkProcessingMetadata = {
            dynamicSamplingContext: core.getDynamicSamplingContextFromSpan(rootSpan),
            ...event.sdkProcessingMetadata
        };
        return event;
    });
}
/**
 * Otel-specific implementation of `getTraceData`.
 * @see `@sentry/core` version of `getTraceData` for more information
 */ function getTraceData({ span } = {}) {
    let ctx = api.context.active();
    if (span) {
        const { scope } = core.getCapturedScopesOnSpan(span);
        // fall back to current context if for whatever reason we can't find the one of the span
        ctx = scope && getContextFromScope(scope) || api.trace.setSpan(api.context.active(), span);
    }
    const { traceId, spanId, sampled, dynamicSamplingContext } = getInjectionData(ctx);
    return {
        'sentry-trace': core.generateSentryTraceHeader(traceId, spanId, sampled),
        baggage: core.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext)
    };
}
/**
 * Sets the async context strategy to use follow the OTEL context under the hood.
 * We handle forking a hub inside of our custom OTEL Context Manager (./otelContextManager.ts)
 */ function setOpenTelemetryContextAsyncContextStrategy() {
    function getScopes() {
        const ctx = api.context.active();
        const scopes = getScopesFromContext(ctx);
        if (scopes) {
            return scopes;
        }
        // fallback behavior:
        // if, for whatever reason, we can't find scopes on the context here, we have to fix this somehow
        return {
            scope: core.getDefaultCurrentScope(),
            isolationScope: core.getDefaultIsolationScope()
        };
    }
    function withScope(callback) {
        const ctx = api.context.active();
        // We depend on the otelContextManager to handle the context/hub
        // We set the `SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY` context value, which is picked up by
        // the OTEL context manager, which uses the presence of this key to determine if it should
        // fork the isolation scope, or not
        // as by default, we don't want to fork this, unless triggered explicitly by `withScope`
        return api.context.with(ctx, ()=>{
            return callback(getCurrentScope());
        });
    }
    function withSetScope(scope, callback) {
        const ctx = getContextFromScope(scope) || api.context.active();
        // We depend on the otelContextManager to handle the context/hub
        // We set the `SENTRY_FORK_SET_SCOPE_CONTEXT_KEY` context value, which is picked up by
        // the OTEL context manager, which picks up this scope as the current scope
        return api.context.with(ctx.setValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY, scope), ()=>{
            return callback(scope);
        });
    }
    function withIsolationScope(callback) {
        const ctx = api.context.active();
        // We depend on the otelContextManager to handle the context/hub
        // We set the `SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY` context value, which is picked up by
        // the OTEL context manager, which uses the presence of this key to determine if it should
        // fork the isolation scope, or not
        return api.context.with(ctx.setValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY, true), ()=>{
            return callback(getIsolationScope());
        });
    }
    function withSetIsolationScope(isolationScope, callback) {
        const ctx = api.context.active();
        // We depend on the otelContextManager to handle the context/hub
        // We set the `SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY` context value, which is picked up by
        // the OTEL context manager, which uses the presence of this key to determine if it should
        // fork the isolation scope, or not
        return api.context.with(ctx.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, isolationScope), ()=>{
            return callback(getIsolationScope());
        });
    }
    function getCurrentScope() {
        return getScopes().scope;
    }
    function getIsolationScope() {
        return getScopes().isolationScope;
    }
    core.setAsyncContextStrategy({
        withScope,
        withSetScope,
        withSetIsolationScope,
        withIsolationScope,
        getCurrentScope,
        getIsolationScope,
        startSpan,
        startSpanManual,
        startInactiveSpan,
        getActiveSpan,
        suppressTracing,
        getTraceData,
        continueTrace,
        // The types here don't fully align, because our own `Span` type is narrower
        // than the OTEL one - but this is OK for here, as we now we'll only have OTEL spans passed around
        withActiveSpan: withActiveSpan
    });
}
/**
 * Wrap an OpenTelemetry ContextManager in a way that ensures the context is kept in sync with the Sentry Scope.
 *
 * Usage:
 * import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
 * const SentryContextManager = wrapContextManagerClass(AsyncLocalStorageContextManager);
 * const contextManager = new SentryContextManager();
 */ function wrapContextManagerClass(ContextManagerClass) {
    /**
   * This is a custom ContextManager for OpenTelemetry, which extends the default AsyncLocalStorageContextManager.
   * It ensures that we create new scopes per context, so that the OTEL Context & the Sentry Scope are always in sync.
   *
   * Note that we currently only support AsyncHooks with this,
   * but since this should work for Node 14+ anyhow that should be good enough.
   */ // @ts-expect-error TS does not like this, but we know this is fine
    class SentryContextManager extends ContextManagerClass {
        constructor(...args){
            super(...args);
            setIsSetup('SentryContextManager');
        }
        /**
     * Overwrite with() of the original AsyncLocalStorageContextManager
     * to ensure we also create new scopes per context.
     */ with(context, fn, thisArg, ...args) {
            const currentScopes = getScopesFromContext(context);
            const currentScope = currentScopes?.scope || core.getCurrentScope();
            const currentIsolationScope = currentScopes?.isolationScope || core.getIsolationScope();
            const shouldForkIsolationScope = context.getValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY) === true;
            const scope = context.getValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY);
            const isolationScope = context.getValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
            const newCurrentScope = scope || currentScope.clone();
            const newIsolationScope = isolationScope || (shouldForkIsolationScope ? currentIsolationScope.clone() : currentIsolationScope);
            const scopes = {
                scope: newCurrentScope,
                isolationScope: newIsolationScope
            };
            const ctx1 = setScopesOnContext(context, scopes);
            // Remove the unneeded values again
            const ctx2 = ctx1.deleteValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
            setContextOnScope(newCurrentScope, ctx2);
            return super.with(ctx2, fn, thisArg, ...args);
        }
    }
    return SentryContextManager;
}
/**
 * This function runs through a list of OTEL Spans, and wraps them in an `SpanNode`
 * where each node holds a reference to their parent node.
 */ function groupSpansWithParents(spans) {
    const nodeMap = new Map();
    for (const span of spans){
        createOrUpdateSpanNodeAndRefs(nodeMap, span);
    }
    return Array.from(nodeMap, function([_id, spanNode]) {
        return spanNode;
    });
}
/**
 * This returns the _local_ parent ID - `parentId` on the span may point to a remote span.
 */ function getLocalParentId(span) {
    const parentIsRemote = span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE] === true;
    // If the parentId is the trace parent ID, we pretend it's undefined
    // As this means the parent exists somewhere else
    return !parentIsRemote ? getParentSpanId(span) : undefined;
}
function createOrUpdateSpanNodeAndRefs(nodeMap, span) {
    const id = span.spanContext().spanId;
    const parentId = getLocalParentId(span);
    if (!parentId) {
        createOrUpdateNode(nodeMap, {
            id,
            span,
            children: []
        });
        return;
    }
    // Else make sure to create parent node as well
    // Note that the parent may not know it's parent _yet_, this may be updated in a later pass
    const parentNode = createOrGetParentNode(nodeMap, parentId);
    const node = createOrUpdateNode(nodeMap, {
        id,
        span,
        parentNode,
        children: []
    });
    parentNode.children.push(node);
}
function createOrGetParentNode(nodeMap, id) {
    const existing = nodeMap.get(id);
    if (existing) {
        return existing;
    }
    return createOrUpdateNode(nodeMap, {
        id,
        children: []
    });
}
function createOrUpdateNode(nodeMap, spanNode) {
    const existing = nodeMap.get(spanNode.id);
    // If span is already set, nothing to do here
    if (existing?.span) {
        return existing;
    }
    // If it exists but span is not set yet, we update it
    if (existing && !existing.span) {
        existing.span = spanNode.span;
        existing.parentNode = spanNode.parentNode;
        return existing;
    }
    // Else, we create a new one...
    nodeMap.set(spanNode.id, spanNode);
    return spanNode;
}
// canonicalCodesGrpcMap maps some GRPC codes to Sentry's span statuses. See description in grpc documentation.
const canonicalGrpcErrorCodesMap = {
    '1': 'cancelled',
    '2': 'unknown_error',
    '3': 'invalid_argument',
    '4': 'deadline_exceeded',
    '5': 'not_found',
    '6': 'already_exists',
    '7': 'permission_denied',
    '8': 'resource_exhausted',
    '9': 'failed_precondition',
    '10': 'aborted',
    '11': 'out_of_range',
    '12': 'unimplemented',
    '13': 'internal_error',
    '14': 'unavailable',
    '15': 'data_loss',
    '16': 'unauthenticated'
};
const isStatusErrorMessageValid = (message)=>{
    return Object.values(canonicalGrpcErrorCodesMap).includes(message);
};
/**
 * Get a Sentry span status from an otel span.
 */ function mapStatus(span) {
    const attributes = spanHasAttributes(span) ? span.attributes : {};
    const status = spanHasStatus(span) ? span.status : undefined;
    if (status) {
        // Since span status OK is not set by default, we give it priority: https://opentelemetry.io/docs/concepts/signals/traces/#span-status
        if (status.code === api.SpanStatusCode.OK) {
            return {
                code: core.SPAN_STATUS_OK
            };
        // If the span is already marked as erroneous we return that exact status
        } else if (status.code === api.SpanStatusCode.ERROR) {
            if (typeof status.message === 'undefined') {
                const inferredStatus = inferStatusFromAttributes(attributes);
                if (inferredStatus) {
                    return inferredStatus;
                }
            }
            if (status.message && isStatusErrorMessageValid(status.message)) {
                return {
                    code: core.SPAN_STATUS_ERROR,
                    message: status.message
                };
            } else {
                return {
                    code: core.SPAN_STATUS_ERROR,
                    message: 'unknown_error'
                };
            }
        }
    }
    // If the span status is UNSET, we try to infer it from HTTP or GRPC status codes.
    const inferredStatus = inferStatusFromAttributes(attributes);
    if (inferredStatus) {
        return inferredStatus;
    }
    // We default to setting the spans status to ok.
    if (status?.code === api.SpanStatusCode.UNSET) {
        return {
            code: core.SPAN_STATUS_OK
        };
    } else {
        return {
            code: core.SPAN_STATUS_ERROR,
            message: 'unknown_error'
        };
    }
}
function inferStatusFromAttributes(attributes) {
    // If the span status is UNSET, we try to infer it from HTTP or GRPC status codes.
    // eslint-disable-next-line deprecation/deprecation
    const httpCodeAttribute = attributes[semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE] || attributes[semanticConventions.SEMATTRS_HTTP_STATUS_CODE];
    // eslint-disable-next-line deprecation/deprecation
    const grpcCodeAttribute = attributes[semanticConventions.SEMATTRS_RPC_GRPC_STATUS_CODE];
    const numberHttpCode = typeof httpCodeAttribute === 'number' ? httpCodeAttribute : typeof httpCodeAttribute === 'string' ? parseInt(httpCodeAttribute) : undefined;
    if (typeof numberHttpCode === 'number') {
        return core.getSpanStatusFromHttpCode(numberHttpCode);
    }
    if (typeof grpcCodeAttribute === 'string') {
        return {
            code: core.SPAN_STATUS_ERROR,
            message: canonicalGrpcErrorCodesMap[grpcCodeAttribute] || 'unknown_error'
        };
    }
    return undefined;
}
const MAX_SPAN_COUNT = 1000;
const DEFAULT_TIMEOUT = 300; // 5 min
/**
 * A Sentry-specific exporter that converts OpenTelemetry Spans to Sentry Spans & Transactions.
 */ class SentrySpanExporter {
    /*
   * A quick explanation on the buckets: We do bucketing of finished spans for efficiency. This span exporter is
   * accumulating spans until a root span is encountered and then it flushes all the spans that are descendants of that
   * root span. Because it is totally in the realm of possibilities that root spans are never finished, and we don't
   * want to accumulate spans indefinitely in memory, we need to periodically evacuate spans. Naively we could simply
   * store the spans in an array and each time a new span comes in we could iterate through the entire array and
   * evacuate all spans that have an end-timestamp that is older than our limit. This could get quite expensive because
   * we would have to iterate a potentially large number of spans every time we evacuate. We want to avoid these large
   * bursts of computation.
   *
   * Instead we go for a bucketing approach and put spans into buckets, based on what second
   * (modulo the time limit) the span was put into the exporter. With buckets, when we decide to evacuate, we can
   * iterate through the bucket entries instead, which have an upper bound of items, making the evacuation much more
   * efficient. Cleaning up also becomes much more efficient since it simply involves de-referencing a bucket within the
   * bucket array, and letting garbage collection take care of the rest.
   */ // Essentially a a set of span ids that are already sent. The values are expiration
    // times in this cache so we don't hold onto them indefinitely.
    constructor(options){
        this._finishedSpanBucketSize = options?.timeout || DEFAULT_TIMEOUT;
        this._finishedSpanBuckets = new Array(this._finishedSpanBucketSize).fill(undefined);
        this._lastCleanupTimestampInS = Math.floor(Date.now() / 1000);
        this._spansToBucketEntry = new WeakMap();
        this._sentSpans = new Map();
    }
    /**
   * Check if a span with the given ID has already been sent using the `_sentSpans` as a cache.
   * Purges "expired" spans from the cache upon checking.
   * @param spanId The span id to check.
   * @returns Whether the span is already sent in the past X seconds.
   */ isSpanAlreadySent(spanId) {
        const expirationTime = this._sentSpans.get(spanId);
        if (expirationTime) {
            if (Date.now() >= expirationTime) {
                this._sentSpans.delete(spanId); // Remove expired span
            } else {
                return true;
            }
        }
        return false;
    }
    /** Remove "expired" span id entries from the _sentSpans cache. */ flushSentSpanCache() {
        const currentTimestamp = Date.now();
        // Note, it is safe to delete items from the map as we go: https://stackoverflow.com/a/35943995/90297
        for (const [spanId, expirationTime] of this._sentSpans.entries()){
            if (expirationTime <= currentTimestamp) {
                this._sentSpans.delete(spanId);
            }
        }
    }
    /** Check if a node is a completed root node or a node whose parent has already been sent */ nodeIsCompletedRootNode(node) {
        return !!node.span && (!node.parentNode || this.isSpanAlreadySent(node.parentNode.id));
    }
    /** Get all completed root nodes from a list of nodes */ getCompletedRootNodes(nodes) {
        // TODO: We should be able to remove the explicit `node is SpanNodeCompleted` type guard
        //       once we stop supporting TS < 5.5
        return nodes.filter((node)=>this.nodeIsCompletedRootNode(node));
    }
    /** Export a single span. */ export(span) {
        const currentTimestampInS = Math.floor(Date.now() / 1000);
        if (this._lastCleanupTimestampInS !== currentTimestampInS) {
            let droppedSpanCount = 0;
            this._finishedSpanBuckets.forEach((bucket, i)=>{
                if (bucket && bucket.timestampInS <= currentTimestampInS - this._finishedSpanBucketSize) {
                    droppedSpanCount += bucket.spans.size;
                    this._finishedSpanBuckets[i] = undefined;
                }
            });
            if (droppedSpanCount > 0) {
                DEBUG_BUILD && core.logger.log(`SpanExporter dropped ${droppedSpanCount} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`);
            }
            this._lastCleanupTimestampInS = currentTimestampInS;
        }
        const currentBucketIndex = currentTimestampInS % this._finishedSpanBucketSize;
        const currentBucket = this._finishedSpanBuckets[currentBucketIndex] || {
            timestampInS: currentTimestampInS,
            spans: new Set()
        };
        this._finishedSpanBuckets[currentBucketIndex] = currentBucket;
        currentBucket.spans.add(span);
        this._spansToBucketEntry.set(span, currentBucket);
        // If the span doesn't have a local parent ID (it's a root span), we're gonna flush all the ended spans
        const localParentId = getLocalParentId(span);
        if (!localParentId || this.isSpanAlreadySent(localParentId)) {
            this._clearTimeout();
            // If we got a parent span, we try to send the span tree
            // Wait a tick for this, to ensure we avoid race conditions
            this._flushTimeout = setTimeout(()=>{
                this.flush();
            }, 1);
        }
    }
    /** Try to flush any pending spans immediately. */ flush() {
        this._clearTimeout();
        const finishedSpans = this._finishedSpanBuckets.flatMap((bucket)=>bucket ? Array.from(bucket.spans) : []);
        this.flushSentSpanCache();
        const sentSpans = this._maybeSend(finishedSpans);
        for (const span of finishedSpans){
            this._sentSpans.set(span.spanContext().spanId, Date.now() + DEFAULT_TIMEOUT * 1000);
        }
        const sentSpanCount = sentSpans.size;
        const remainingOpenSpanCount = finishedSpans.length - sentSpanCount;
        DEBUG_BUILD && core.logger.log(`SpanExporter exported ${sentSpanCount} spans, ${remainingOpenSpanCount} spans are waiting for their parent spans to finish`);
        for (const span of sentSpans){
            const bucketEntry = this._spansToBucketEntry.get(span);
            if (bucketEntry) {
                bucketEntry.spans.delete(span);
            }
        }
    }
    /** Clear the exporter. */ clear() {
        this._finishedSpanBuckets = this._finishedSpanBuckets.fill(undefined);
        this._clearTimeout();
    }
    /** Clear the flush timeout. */ _clearTimeout() {
        if (this._flushTimeout) {
            clearTimeout(this._flushTimeout);
            this._flushTimeout = undefined;
        }
    }
    /**
   * Send the given spans, but only if they are part of a finished transaction.
   *
   * Returns the sent spans.
   * Spans remain unsent when their parent span is not yet finished.
   * This will happen regularly, as child spans are generally finished before their parents.
   * But it _could_ also happen because, for whatever reason, a parent span was lost.
   * In this case, we'll eventually need to clean this up.
   */ _maybeSend(spans) {
        const grouped = groupSpansWithParents(spans);
        const sentSpans = new Set();
        const rootNodes = this.getCompletedRootNodes(grouped);
        for (const root of rootNodes){
            const span = root.span;
            sentSpans.add(span);
            const transactionEvent = createTransactionForOtelSpan(span);
            // We'll recursively add all the child spans to this array
            const spans = transactionEvent.spans || [];
            for (const child of root.children){
                createAndFinishSpanForOtelSpan(child, spans, sentSpans);
            }
            // spans.sort() mutates the array, but we do not use this anymore after this point
            // so we can safely mutate it here
            transactionEvent.spans = spans.length > MAX_SPAN_COUNT ? spans.sort((a, b)=>a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans;
            const measurements = core.timedEventsToMeasurements(span.events);
            if (measurements) {
                transactionEvent.measurements = measurements;
            }
            core.captureEvent(transactionEvent);
        }
        return sentSpans;
    }
}
function parseSpan(span) {
    const attributes = span.attributes;
    const origin = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
    const op = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP];
    const source = attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    return {
        origin,
        op,
        source
    };
}
/** Exported only for tests. */ function createTransactionForOtelSpan(span) {
    const { op, description, data, origin = 'manual', source } = getSpanData(span);
    const capturedSpanScopes = core.getCapturedScopesOnSpan(span);
    const sampleRate = span.attributes[core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    const attributes = {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
        ...data,
        ...removeSentryAttributes(span.attributes)
    };
    const { links } = span;
    const { traceId: trace_id, spanId: span_id } = span.spanContext();
    // If parentSpanIdFromTraceState is defined at all, we want it to take precedence
    // In that case, an empty string should be interpreted as "no parent span id",
    // even if `span.parentSpanId` is set
    // this is the case when we are starting a new trace, where we have a virtual span based on the propagationContext
    // We only want to continue the traceId in this case, but ignore the parent span
    const parent_span_id = getParentSpanId(span);
    const status = mapStatus(span);
    const traceContext = {
        parent_span_id,
        span_id,
        trace_id,
        data: attributes,
        origin,
        op,
        status: core.getStatusMessage(status),
        links: core.convertSpanLinksForEnvelope(links)
    };
    const statusCode = attributes[semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE];
    const responseContext = typeof statusCode === 'number' ? {
        response: {
            status_code: statusCode
        }
    } : undefined;
    const transactionEvent = {
        contexts: {
            trace: traceContext,
            otel: {
                resource: span.resource.attributes
            },
            ...responseContext
        },
        spans: [],
        start_timestamp: core.spanTimeInputToSeconds(span.startTime),
        timestamp: core.spanTimeInputToSeconds(span.endTime),
        transaction: description,
        type: 'transaction',
        sdkProcessingMetadata: {
            capturedSpanScope: capturedSpanScopes.scope,
            capturedSpanIsolationScope: capturedSpanScopes.isolationScope,
            sampleRate,
            dynamicSamplingContext: core.getDynamicSamplingContextFromSpan(span)
        },
        ...source && {
            transaction_info: {
                source
            }
        }
    };
    return transactionEvent;
}
function createAndFinishSpanForOtelSpan(node, spans, sentSpans) {
    const span = node.span;
    if (span) {
        sentSpans.add(span);
    }
    const shouldDrop = !span;
    // If this span should be dropped, we still want to create spans for the children of this
    if (shouldDrop) {
        node.children.forEach((child)=>{
            createAndFinishSpanForOtelSpan(child, spans, sentSpans);
        });
        return;
    }
    const span_id = span.spanContext().spanId;
    const trace_id = span.spanContext().traceId;
    const parentSpanId = getParentSpanId(span);
    const { attributes, startTime, endTime, links } = span;
    const { op, description, data, origin = 'manual' } = getSpanData(span);
    const allData = {
        [core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
        [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
        ...removeSentryAttributes(attributes),
        ...data
    };
    const status = mapStatus(span);
    const spanJSON = {
        span_id,
        trace_id,
        data: allData,
        description,
        parent_span_id: parentSpanId,
        start_timestamp: core.spanTimeInputToSeconds(startTime),
        // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
        timestamp: core.spanTimeInputToSeconds(endTime) || undefined,
        status: core.getStatusMessage(status),
        op,
        origin,
        measurements: core.timedEventsToMeasurements(span.events),
        links: core.convertSpanLinksForEnvelope(links)
    };
    spans.push(spanJSON);
    node.children.forEach((child)=>{
        createAndFinishSpanForOtelSpan(child, spans, sentSpans);
    });
}
function getSpanData(span) {
    const { op: definedOp, source: definedSource, origin } = parseSpan(span);
    const { op: inferredOp, description, source: inferredSource, data: inferredData } = parseSpanDescription(span);
    const op = definedOp || inferredOp;
    const source = definedSource || inferredSource;
    const data = {
        ...inferredData,
        ...getData(span)
    };
    return {
        op,
        description,
        source,
        origin,
        data
    };
}
/**
 * Remove custom `sentry.` attributes we do not need to send.
 * These are more carrier attributes we use inside of the SDK, we do not need to send them to the API.
 */ function removeSentryAttributes(data) {
    const cleanedData = {
        ...data
    };
    /* eslint-disable @typescript-eslint/no-dynamic-delete */ delete cleanedData[core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE];
    delete cleanedData[core.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    /* eslint-enable @typescript-eslint/no-dynamic-delete */ return cleanedData;
}
function getData(span) {
    const attributes = span.attributes;
    const data = {};
    if (span.kind !== api.SpanKind.INTERNAL) {
        data['otel.kind'] = api.SpanKind[span.kind];
    }
    // eslint-disable-next-line deprecation/deprecation
    const maybeHttpStatusCodeAttribute = attributes[semanticConventions.SEMATTRS_HTTP_STATUS_CODE];
    if (maybeHttpStatusCodeAttribute) {
        data[semanticConventions.ATTR_HTTP_RESPONSE_STATUS_CODE] = maybeHttpStatusCodeAttribute;
    }
    const requestData = getRequestSpanData(span);
    if (requestData.url) {
        data.url = requestData.url;
    }
    if (requestData['http.query']) {
        data['http.query'] = requestData['http.query'].slice(1);
    }
    if (requestData['http.fragment']) {
        data['http.fragment'] = requestData['http.fragment'].slice(1);
    }
    return data;
}
function onSpanStart(span, parentContext) {
    // This is a reliable way to get the parent span - because this is exactly how the parent is identified in the OTEL SDK
    const parentSpan = api.trace.getSpan(parentContext);
    let scopes = getScopesFromContext(parentContext);
    // We need access to the parent span in order to be able to move up the span tree for breadcrumbs
    if (parentSpan && !parentSpan.spanContext().isRemote) {
        core.addChildSpanToSpan(parentSpan, span);
    }
    // We need this in the span exporter
    if (parentSpan?.spanContext().isRemote) {
        span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE, true);
    }
    // The root context does not have scopes stored, so we check for this specifically
    // As fallback we attach the global scopes
    if (parentContext === api.ROOT_CONTEXT) {
        scopes = {
            scope: core.getDefaultCurrentScope(),
            isolationScope: core.getDefaultIsolationScope()
        };
    }
    // We need the scope at time of span creation in order to apply it to the event when the span is finished
    if (scopes) {
        core.setCapturedScopesOnSpan(span, scopes.scope, scopes.isolationScope);
    }
    core.logSpanStart(span);
    const client = core.getClient();
    client?.emit('spanStart', span);
}
function onSpanEnd(span) {
    core.logSpanEnd(span);
    const client = core.getClient();
    client?.emit('spanEnd', span);
}
/**
 * Converts OpenTelemetry Spans to Sentry Spans and sends them to Sentry via
 * the Sentry SDK.
 */ class SentrySpanProcessor {
    constructor(options){
        setIsSetup('SentrySpanProcessor');
        this._exporter = new SentrySpanExporter(options);
    }
    /**
   * @inheritDoc
   */ async forceFlush() {
        this._exporter.flush();
    }
    /**
   * @inheritDoc
   */ async shutdown() {
        this._exporter.clear();
    }
    /**
   * @inheritDoc
   */ onStart(span, parentContext) {
        onSpanStart(span, parentContext);
    }
    /** @inheritDoc */ onEnd(span) {
        onSpanEnd(span);
        this._exporter.export(span);
    }
}
/**
 * A custom OTEL sampler that uses Sentry sampling rates to make its decision
 */ class SentrySampler {
    constructor(client){
        this._client = client;
        setIsSetup('SentrySampler');
    }
    /** @inheritDoc */ shouldSample(context, traceId, spanName, spanKind, spanAttributes, _links) {
        const options = this._client.getOptions();
        const parentSpan = getValidSpan(context);
        const parentContext = parentSpan?.spanContext();
        if (!core.hasSpansEnabled(options)) {
            return wrapSamplingDecision({
                decision: undefined,
                context,
                spanAttributes
            });
        }
        // `ATTR_HTTP_REQUEST_METHOD` is the new attribute, but we still support the old one, `SEMATTRS_HTTP_METHOD`, for now.
        // eslint-disable-next-line deprecation/deprecation
        const maybeSpanHttpMethod = spanAttributes[semanticConventions.SEMATTRS_HTTP_METHOD] || spanAttributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD];
        // If we have a http.client span that has no local parent, we never want to sample it
        // but we want to leave downstream sampling decisions up to the server
        if (spanKind === api.SpanKind.CLIENT && maybeSpanHttpMethod && (!parentSpan || parentContext?.isRemote)) {
            return wrapSamplingDecision({
                decision: undefined,
                context,
                spanAttributes
            });
        }
        const parentSampled = parentSpan ? getParentSampled(parentSpan, traceId, spanName) : undefined;
        const isRootSpan = !parentSpan || parentContext?.isRemote;
        // We only sample based on parameters (like tracesSampleRate or tracesSampler) for root spans (which is done in sampleSpan).
        // Non-root-spans simply inherit the sampling decision from their parent.
        if (!isRootSpan) {
            return wrapSamplingDecision({
                decision: parentSampled ? sdkTraceBase.SamplingDecision.RECORD_AND_SAMPLED : sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes
            });
        }
        // We want to pass the inferred name & attributes to the sampler method
        const { description: inferredSpanName, data: inferredAttributes, op } = inferSpanData(spanName, spanAttributes, spanKind);
        const mergedAttributes = {
            ...inferredAttributes,
            ...spanAttributes
        };
        if (op) {
            mergedAttributes[core.SEMANTIC_ATTRIBUTE_SENTRY_OP] = op;
        }
        const mutableSamplingDecision = {
            decision: true
        };
        this._client.emit('beforeSampling', {
            spanAttributes: mergedAttributes,
            spanName: inferredSpanName,
            parentSampled: parentSampled,
            parentContext: parentContext
        }, mutableSamplingDecision);
        if (!mutableSamplingDecision.decision) {
            return wrapSamplingDecision({
                decision: undefined,
                context,
                spanAttributes
            });
        }
        const { isolationScope } = getScopesFromContext(context) ?? {};
        const dscString = parentContext?.traceState ? parentContext.traceState.get(SENTRY_TRACE_STATE_DSC) : undefined;
        const dsc = dscString ? core.baggageHeaderToDynamicSamplingContext(dscString) : undefined;
        const sampleRand = core.parseSampleRate(dsc?.sample_rand) ?? Math.random();
        const [sampled, sampleRate, localSampleRateWasApplied] = core.sampleSpan(options, {
            name: inferredSpanName,
            attributes: mergedAttributes,
            normalizedRequest: isolationScope?.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampled,
            parentSampleRate: core.parseSampleRate(dsc?.sample_rate)
        }, sampleRand);
        const method = `${maybeSpanHttpMethod}`.toUpperCase();
        if (method === 'OPTIONS' || method === 'HEAD') {
            DEBUG_BUILD && core.logger.log(`[Tracing] Not sampling span because HTTP method is '${method}' for ${spanName}`);
            return wrapSamplingDecision({
                decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes,
                sampleRand,
                downstreamTraceSampleRate: 0
            });
        }
        if (!sampled && // We check for `parentSampled === undefined` because we only want to record client reports for spans that are trace roots (ie. when there was incoming trace)
        parentSampled === undefined) {
            DEBUG_BUILD && core.logger.log('[Tracing] Discarding root span because its trace was not chosen to be sampled.');
            this._client.recordDroppedEvent('sample_rate', 'transaction');
        }
        return {
            ...wrapSamplingDecision({
                decision: sampled ? sdkTraceBase.SamplingDecision.RECORD_AND_SAMPLED : sdkTraceBase.SamplingDecision.NOT_RECORD,
                context,
                spanAttributes,
                sampleRand,
                downstreamTraceSampleRate: localSampleRateWasApplied ? sampleRate : undefined
            }),
            attributes: {
                // We set the sample rate on the span when a local sample rate was applied to better understand how traces were sampled in Sentry
                [core.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: localSampleRateWasApplied ? sampleRate : undefined
            }
        };
    }
    /** Returns the sampler name or short description with the configuration. */ toString() {
        return 'SentrySampler';
    }
}
function getParentSampled(parentSpan, traceId, spanName) {
    const parentContext = parentSpan.spanContext();
    // Only inherit sample rate if `traceId` is the same
    // Note for testing: `isSpanContextValid()` checks the format of the traceId/spanId, so we need to pass valid ones
    if (api.isSpanContextValid(parentContext) && parentContext.traceId === traceId) {
        if (parentContext.isRemote) {
            const parentSampled = getSamplingDecision(parentSpan.spanContext());
            DEBUG_BUILD && core.logger.log(`[Tracing] Inheriting remote parent's sampled decision for ${spanName}: ${parentSampled}`);
            return parentSampled;
        }
        const parentSampled = getSamplingDecision(parentContext);
        DEBUG_BUILD && core.logger.log(`[Tracing] Inheriting parent's sampled decision for ${spanName}: ${parentSampled}`);
        return parentSampled;
    }
    return undefined;
}
/**
 * Wrap a sampling decision with data that Sentry needs to work properly with it.
 * If you pass `decision: undefined`, it will be treated as `NOT_RECORDING`, but in contrast to passing `NOT_RECORDING`
 * it will not propagate this decision to downstream Sentry SDKs.
 */ function wrapSamplingDecision({ decision, context, spanAttributes, sampleRand, downstreamTraceSampleRate }) {
    let traceState = getBaseTraceState(context, spanAttributes);
    // We will override the propagated sample rate downstream when
    // - the tracesSampleRate is applied
    // - the tracesSampler is invoked
    // Since unsampled OTEL spans (NonRecordingSpans) cannot hold attributes we need to store this on the (trace)context.
    if (downstreamTraceSampleRate !== undefined) {
        traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RATE, `${downstreamTraceSampleRate}`);
    }
    if (sampleRand !== undefined) {
        traceState = traceState.set(SENTRY_TRACE_STATE_SAMPLE_RAND, `${sampleRand}`);
    }
    // If the decision is undefined, we treat it as NOT_RECORDING, but we don't propagate this decision to downstream SDKs
    // Which is done by not setting `SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING` traceState
    if (decision == undefined) {
        return {
            decision: sdkTraceBase.SamplingDecision.NOT_RECORD,
            traceState
        };
    }
    if (decision === sdkTraceBase.SamplingDecision.NOT_RECORD) {
        return {
            decision,
            traceState: traceState.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, '1')
        };
    }
    return {
        decision,
        traceState
    };
}
function getBaseTraceState(context, spanAttributes) {
    const parentSpan = api.trace.getSpan(context);
    const parentContext = parentSpan?.spanContext();
    let traceState = parentContext?.traceState || new core$1.TraceState();
    // We always keep the URL on the trace state, so we can access it in the propagator
    // `ATTR_URL_FULL` is the new attribute, but we still support the old one, `ATTR_HTTP_URL`, for now.
    // eslint-disable-next-line deprecation/deprecation
    const url = spanAttributes[semanticConventions.SEMATTRS_HTTP_URL] || spanAttributes[semanticConventions.ATTR_URL_FULL];
    if (url && typeof url === 'string') {
        traceState = traceState.set(SENTRY_TRACE_STATE_URL, url);
    }
    return traceState;
}
/**
 * If the active span is invalid, we want to ignore it as parent.
 * This aligns with how otel tracers and default samplers handle these cases.
 */ function getValidSpan(context) {
    const span = api.trace.getSpan(context);
    return span && api.isSpanContextValid(span.spanContext()) ? span : undefined;
}
exports.getClient = core.getClient;
exports.getDynamicSamplingContextFromSpan = core.getDynamicSamplingContextFromSpan;
exports.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION;
exports.SentryPropagator = SentryPropagator;
exports.SentrySampler = SentrySampler;
exports.SentrySpanProcessor = SentrySpanProcessor;
exports.continueTrace = continueTrace;
exports.enhanceDscWithOpenTelemetryRootSpanName = enhanceDscWithOpenTelemetryRootSpanName;
exports.getActiveSpan = getActiveSpan;
exports.getRequestSpanData = getRequestSpanData;
exports.getScopesFromContext = getScopesFromContext;
exports.getSpanKind = getSpanKind;
exports.getTraceContextForScope = getTraceContextForScope;
exports.isSentryRequestSpan = isSentryRequestSpan;
exports.openTelemetrySetupCheck = openTelemetrySetupCheck;
exports.setOpenTelemetryContextAsyncContextStrategy = setOpenTelemetryContextAsyncContextStrategy;
exports.setupEventContextTrace = setupEventContextTrace;
exports.shouldPropagateTraceForUrl = shouldPropagateTraceForUrl;
exports.spanHasAttributes = spanHasAttributes;
exports.spanHasEvents = spanHasEvents;
exports.spanHasKind = spanHasKind;
exports.spanHasName = spanHasName;
exports.spanHasParentId = spanHasParentId;
exports.spanHasStatus = spanHasStatus;
exports.startInactiveSpan = startInactiveSpan;
exports.startSpan = startSpan;
exports.startSpanManual = startSpanManual;
exports.suppressTracing = suppressTracing;
exports.withActiveSpan = withActiveSpan;
exports.wrapClientClass = wrapClientClass;
exports.wrapContextManagerClass = wrapContextManagerClass;
exports.wrapSamplingDecision = wrapSamplingDecision; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.10.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-undici'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/enums/SemanticAttributes.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SemanticAttributes = void 0;
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
exports.SemanticAttributes = {
    /**
     * State of the HTTP connection in the HTTP connection pool.
     */ HTTP_CONNECTION_STATE: 'http.connection.state',
    /**
    * Describes a class of error the operation ended with.
    *
    * Note: The `error.type` SHOULD be predictable and SHOULD have low cardinality.
  Instrumentations SHOULD document the list of errors they report.
  
  The cardinality of `error.type` within one instrumentation library SHOULD be low.
  Telemetry consumers that aggregate data from multiple instrumentation libraries and applications
  should be prepared for `error.type` to have high cardinality at query time when no
  additional filters are applied.
  
  If the operation has completed successfully, instrumentations SHOULD NOT set `error.type`.
  
  If a specific domain defines its own set of error identifiers (such as HTTP or gRPC status codes),
  it&#39;s RECOMMENDED to:
  
  * Use a domain-specific attribute
  * Set `error.type` to capture all errors, regardless of whether they are defined within the domain-specific set or not.
    */ ERROR_TYPE: 'error.type',
    /**
     * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-length) header. For requests using transport encoding, this should be the compressed size.
     */ HTTP_REQUEST_BODY_SIZE: 'http.request.body.size',
    /**
    * HTTP request method.
    *
    * Note: HTTP request method value SHOULD be &#34;known&#34; to the instrumentation.
  By default, this convention defines &#34;known&#34; methods as the ones listed in [RFC9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-methods)
  and the PATCH method defined in [RFC5789](https://www.rfc-editor.org/rfc/rfc5789.html).
  
  If the HTTP request method is not known to instrumentation, it MUST set the `http.request.method` attribute to `_OTHER`.
  
  If the HTTP instrumentation could end up converting valid HTTP request methods to `_OTHER`, then it MUST provide a way to override
  the list of known HTTP methods. If this override is done via environment variable, then the environment variable MUST be named
  OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS and support a comma-separated list of case-sensitive known HTTP methods
  (this list MUST be a full override of the default known method, it is not a list of known methods in addition to the defaults).
  
  HTTP method names are case-sensitive and `http.request.method` attribute value MUST match a known HTTP method name exactly.
  Instrumentations for specific web frameworks that consider HTTP methods to be case insensitive, SHOULD populate a canonical equivalent.
  Tracing instrumentations that do so, MUST also set `http.request.method_original` to the original value.
    */ HTTP_REQUEST_METHOD: 'http.request.method',
    /**
     * Original HTTP method sent by the client in the request line.
     */ HTTP_REQUEST_METHOD_ORIGINAL: 'http.request.method_original',
    /**
     * The ordinal number of request resending attempt (for any reason, including redirects).
     *
     * Note: The resend count SHOULD be updated each time an HTTP request gets resent by the client, regardless of what was the cause of the resending (e.g. redirection, authorization failure, 503 Server Unavailable, network issues, or any other).
     */ HTTP_REQUEST_RESEND_COUNT: 'http.request.resend_count',
    /**
     * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-length) header. For requests using transport encoding, this should be the compressed size.
     */ HTTP_RESPONSE_BODY_SIZE: 'http.response.body.size',
    /**
     * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
     */ HTTP_RESPONSE_STATUS_CODE: 'http.response.status_code',
    /**
    * The matched route, that is, the path template in the format used by the respective server framework.
    *
    * Note: MUST NOT be populated when this is not supported by the HTTP server framework as the route attribute should have low-cardinality and the URI path can NOT substitute it.
  SHOULD include the [application root](/docs/http/http-spans.md#http-server-definitions) if there is one.
    */ HTTP_ROUTE: 'http.route',
    /**
     * Peer address of the network connection - IP address or Unix domain socket name.
     */ NETWORK_PEER_ADDRESS: 'network.peer.address',
    /**
     * Peer port number of the network connection.
     */ NETWORK_PEER_PORT: 'network.peer.port',
    /**
     * [OSI application layer](https://osi-model.com/application-layer/) or non-OSI equivalent.
     *
     * Note: The value SHOULD be normalized to lowercase.
     */ NETWORK_PROTOCOL_NAME: 'network.protocol.name',
    /**
     * Version of the protocol specified in `network.protocol.name`.
     *
     * Note: `network.protocol.version` refers to the version of the protocol used and might be different from the protocol client&#39;s version. If the HTTP client has a version of `0.27.2`, but sends HTTP version `1.1`, this attribute should be set to `1.1`.
     */ NETWORK_PROTOCOL_VERSION: 'network.protocol.version',
    /**
     * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
     *
     * Note: When observed from the client side, and when communicating through an intermediary, `server.address` SHOULD represent the server address behind any intermediaries, for example proxies, if it&#39;s available.
     */ SERVER_ADDRESS: 'server.address',
    /**
     * Server port number.
     *
     * Note: When observed from the client side, and when communicating through an intermediary, `server.port` SHOULD represent the server port behind any intermediaries, for example proxies, if it&#39;s available.
     */ SERVER_PORT: 'server.port',
    /**
    * Absolute URL describing a network resource according to [RFC3986](https://www.rfc-editor.org/rfc/rfc3986).
    *
    * Note: For network calls, URL usually has `scheme://host[:port][path][?query][#fragment]` format, where the fragment is not transmitted over HTTP, but if it is known, it SHOULD be included nevertheless.
  `url.full` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case username and password SHOULD be redacted and attribute&#39;s value SHOULD be `https://REDACTED:REDACTED@www.example.com/`.
  `url.full` SHOULD capture the absolute URL when it is available (or can be reconstructed) and SHOULD NOT be validated or modified except for sanitizing purposes.
    */ URL_FULL: 'url.full',
    /**
     * The [URI path](https://www.rfc-editor.org/rfc/rfc3986#section-3.3) component.
     */ URL_PATH: 'url.path',
    /**
     * The [URI query](https://www.rfc-editor.org/rfc/rfc3986#section-3.4) component.
     *
     * Note: Sensitive content provided in query string SHOULD be scrubbed when instrumentations can identify it.
     */ URL_QUERY: 'url.query',
    /**
     * The [URI scheme](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) component identifying the used protocol.
     */ URL_SCHEME: 'url.scheme',
    /**
     * Value of the [HTTP User-Agent](https://www.rfc-editor.org/rfc/rfc9110.html#field.user-agent) header sent by the client.
     */ USER_AGENT_ORIGINAL: 'user_agent.original'
}; //# sourceMappingURL=SemanticAttributes.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/undici.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UndiciInstrumentation = void 0;
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
 */ const diagch = __turbopack_context__.r("[externals]/diagnostics_channel [external] (diagnostics_channel, cjs)");
const url_1 = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/version.js [instrumentation] (ecmascript)");
const SemanticAttributes_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/enums/SemanticAttributes.js [instrumentation] (ecmascript)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
// A combination of https://github.com/elastic/apm-agent-nodejs and
// https://github.com/gadget-inc/opentelemetry-instrumentations/blob/main/packages/opentelemetry-instrumentation-undici/src/index.ts
class UndiciInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
        this._recordFromReq = new WeakMap();
    }
    // No need to instrument files/modules
    init() {
        return undefined;
    }
    disable() {
        super.disable();
        this._channelSubs.forEach((sub)=>sub.unsubscribe());
        this._channelSubs.length = 0;
    }
    enable() {
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
        this.subscribeToChannel('undici:request:create', this.onRequestCreated.bind(this));
        this.subscribeToChannel('undici:client:sendHeaders', this.onRequestHeaders.bind(this));
        this.subscribeToChannel('undici:request:headers', this.onResponseHeaders.bind(this));
        this.subscribeToChannel('undici:request:trailers', this.onDone.bind(this));
        this.subscribeToChannel('undici:request:error', this.onError.bind(this));
    }
    _updateMetricInstruments() {
        this._httpClientDurationHistogram = this.meter.createHistogram('http.client.request.duration', {
            description: 'Measures the duration of outbound HTTP requests.',
            unit: 's',
            valueType: api_1.ValueType.DOUBLE,
            advice: {
                explicitBucketBoundaries: [
                    0.005,
                    0.01,
                    0.025,
                    0.05,
                    0.075,
                    0.1,
                    0.25,
                    0.5,
                    0.75,
                    1,
                    2.5,
                    5,
                    7.5,
                    10
                ]
            }
        });
    }
    subscribeToChannel(diagnosticChannel, onMessage) {
        var _a;
        // `diagnostics_channel` had a ref counting bug until v18.19.0.
        // https://github.com/nodejs/node/pull/47520
        const [major, minor] = process.version.replace('v', '').split('.').map((n)=>Number(n));
        const useNewSubscribe = major > 18 || major === 18 && minor >= 19;
        let unsubscribe;
        if (useNewSubscribe) {
            (_a = diagch.subscribe) === null || _a === void 0 ? void 0 : _a.call(diagch, diagnosticChannel, onMessage);
            unsubscribe = ()=>{
                var _a;
                return (_a = diagch.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(diagch, diagnosticChannel, onMessage);
            };
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
    // This is the 1st message we receive for each request (fired after request creation). Here we will
    // create the span and populate some atttributes, then link the span to the request for further
    // span processing
    onRequestCreated({ request }) {
        // Ignore if:
        // - instrumentation is disabled
        // - ignored by config
        // - method is 'CONNECT'
        const config = this.getConfig();
        const enabled = config.enabled !== false;
        const shouldIgnoreReq = (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            var _a;
            return !enabled || request.method === 'CONNECT' || ((_a = config.ignoreRequestHook) === null || _a === void 0 ? void 0 : _a.call(config, request));
        }, (e)=>e && this._diag.error('caught ignoreRequestHook error: ', e), true);
        if (shouldIgnoreReq) {
            return;
        }
        const startTime = (0, core_1.hrTime)();
        let requestUrl;
        try {
            requestUrl = new url_1.URL(request.path, request.origin);
        } catch (err) {
            this._diag.warn('could not determine url.full:', err);
            // Skip instrumenting this request.
            return;
        }
        const urlScheme = requestUrl.protocol.replace(':', '');
        const requestMethod = this.getRequestMethod(request.method);
        const attributes = {
            [SemanticAttributes_1.SemanticAttributes.HTTP_REQUEST_METHOD]: requestMethod,
            [SemanticAttributes_1.SemanticAttributes.HTTP_REQUEST_METHOD_ORIGINAL]: request.method,
            [SemanticAttributes_1.SemanticAttributes.URL_FULL]: requestUrl.toString(),
            [SemanticAttributes_1.SemanticAttributes.URL_PATH]: requestUrl.pathname,
            [SemanticAttributes_1.SemanticAttributes.URL_QUERY]: requestUrl.search,
            [SemanticAttributes_1.SemanticAttributes.URL_SCHEME]: urlScheme
        };
        const schemePorts = {
            https: '443',
            http: '80'
        };
        const serverAddress = requestUrl.hostname;
        const serverPort = requestUrl.port || schemePorts[urlScheme];
        attributes[SemanticAttributes_1.SemanticAttributes.SERVER_ADDRESS] = serverAddress;
        if (serverPort && !isNaN(Number(serverPort))) {
            attributes[SemanticAttributes_1.SemanticAttributes.SERVER_PORT] = Number(serverPort);
        }
        // Get user agent from headers
        let userAgent;
        if (Array.isArray(request.headers)) {
            const idx = request.headers.findIndex((h)=>h.toLowerCase() === 'user-agent');
            if (idx >= 0) {
                userAgent = request.headers[idx + 1];
            }
        } else if (typeof request.headers === 'string') {
            const headers = request.headers.split('\r\n');
            const uaHeader = headers.find((h)=>h.toLowerCase().startsWith('user-agent'));
            userAgent = uaHeader && uaHeader.substring(uaHeader.indexOf(':') + 1).trim();
        }
        if (userAgent) {
            attributes[SemanticAttributes_1.SemanticAttributes.USER_AGENT_ORIGINAL] = userAgent;
        }
        // Get attributes from the hook if present
        const hookAttributes = (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            var _a;
            return (_a = config.startSpanHook) === null || _a === void 0 ? void 0 : _a.call(config, request);
        }, (e)=>e && this._diag.error('caught startSpanHook error: ', e), true);
        if (hookAttributes) {
            Object.entries(hookAttributes).forEach(([key, val])=>{
                attributes[key] = val;
            });
        }
        // Check if parent span is required via config and:
        // - if a parent is required but not present, we use a `NoopSpan` to still
        //   propagate context without recording it.
        // - create a span otherwise
        const activeCtx = api_1.context.active();
        const currentSpan = api_1.trace.getSpan(activeCtx);
        let span;
        if (config.requireParentforSpans && (!currentSpan || !api_1.trace.isSpanContextValid(currentSpan.spanContext()))) {
            span = api_1.trace.wrapSpanContext(api_1.INVALID_SPAN_CONTEXT);
        } else {
            span = this.tracer.startSpan(requestMethod === '_OTHER' ? 'HTTP' : requestMethod, {
                kind: api_1.SpanKind.CLIENT,
                attributes: attributes
            }, activeCtx);
        }
        // Execute the request hook if defined
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            var _a;
            return (_a = config.requestHook) === null || _a === void 0 ? void 0 : _a.call(config, span, request);
        }, (e)=>e && this._diag.error('caught requestHook error: ', e), true);
        // Context propagation goes last so no hook can tamper
        // the propagation headers
        const requestContext = api_1.trace.setSpan(api_1.context.active(), span);
        const addedHeaders = {};
        api_1.propagation.inject(requestContext, addedHeaders);
        const headerEntries = Object.entries(addedHeaders);
        for(let i = 0; i < headerEntries.length; i++){
            const [k, v] = headerEntries[i];
            if (typeof request.addHeader === 'function') {
                request.addHeader(k, v);
            } else if (typeof request.headers === 'string') {
                request.headers += `${k}: ${v}\r\n`;
            } else if (Array.isArray(request.headers)) {
                // undici@6.11.0 accidentally, briefly removed `request.addHeader()`.
                request.headers.push(k, v);
            }
        }
        this._recordFromReq.set(request, {
            span,
            attributes,
            startTime
        });
    }
    // This is the 2nd message we receive for each request. It is fired when connection with
    // the remote is established and about to send the first byte. Here we do have info about the
    // remote address and port so we can populate some `network.*` attributes into the span
    onRequestHeaders({ request, socket }) {
        var _a;
        const record = this._recordFromReq.get(request);
        if (!record) {
            return;
        }
        const config = this.getConfig();
        const { span } = record;
        const { remoteAddress, remotePort } = socket;
        const spanAttributes = {
            [SemanticAttributes_1.SemanticAttributes.NETWORK_PEER_ADDRESS]: remoteAddress,
            [SemanticAttributes_1.SemanticAttributes.NETWORK_PEER_PORT]: remotePort
        };
        // After hooks have been processed (which may modify request headers)
        // we can collect the headers based on the configuration
        if ((_a = config.headersToSpanAttributes) === null || _a === void 0 ? void 0 : _a.requestHeaders) {
            const headersToAttribs = new Set(config.headersToSpanAttributes.requestHeaders.map((n)=>n.toLowerCase()));
            // headers could be in form
            // ['name: value', ...] for v5
            // ['name', 'value', ...] for v6
            const rawHeaders = Array.isArray(request.headers) ? request.headers : request.headers.split('\r\n');
            rawHeaders.forEach((h, idx)=>{
                const sepIndex = h.indexOf(':');
                const hasSeparator = sepIndex !== -1;
                const name = (hasSeparator ? h.substring(0, sepIndex) : h).toLowerCase();
                const value = hasSeparator ? h.substring(sepIndex + 1) : rawHeaders[idx + 1];
                if (headersToAttribs.has(name)) {
                    spanAttributes[`http.request.header.${name}`] = value.trim();
                }
            });
        }
        span.setAttributes(spanAttributes);
    }
    // This is the 3rd message we get for each request and it's fired when the server
    // headers are received, body may not be accessible yet.
    // From the response headers we can set the status and content length
    onResponseHeaders({ request, response }) {
        var _a, _b;
        const record = this._recordFromReq.get(request);
        if (!record) {
            return;
        }
        const { span, attributes } = record;
        const spanAttributes = {
            [SemanticAttributes_1.SemanticAttributes.HTTP_RESPONSE_STATUS_CODE]: response.statusCode
        };
        const config = this.getConfig();
        // Execute the response hook if defined
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            var _a;
            return (_a = config.responseHook) === null || _a === void 0 ? void 0 : _a.call(config, span, {
                request,
                response
            });
        }, (e)=>e && this._diag.error('caught responseHook error: ', e), true);
        const headersToAttribs = new Set();
        if ((_a = config.headersToSpanAttributes) === null || _a === void 0 ? void 0 : _a.responseHeaders) {
            (_b = config.headersToSpanAttributes) === null || _b === void 0 ? void 0 : _b.responseHeaders.forEach((name)=>headersToAttribs.add(name.toLowerCase()));
        }
        for(let idx = 0; idx < response.headers.length; idx = idx + 2){
            const name = response.headers[idx].toString().toLowerCase();
            const value = response.headers[idx + 1];
            if (headersToAttribs.has(name)) {
                spanAttributes[`http.response.header.${name}`] = value.toString();
            }
            if (name === 'content-length') {
                const contentLength = Number(value.toString());
                if (!isNaN(contentLength)) {
                    spanAttributes['http.response.header.content-length'] = contentLength;
                }
            }
        }
        span.setAttributes(spanAttributes);
        span.setStatus({
            code: response.statusCode >= 400 ? api_1.SpanStatusCode.ERROR : api_1.SpanStatusCode.UNSET
        });
        record.attributes = Object.assign(attributes, spanAttributes);
    }
    // This is the last event we receive if the request went without any errors
    onDone({ request }) {
        const record = this._recordFromReq.get(request);
        if (!record) {
            return;
        }
        const { span, attributes, startTime } = record;
        // End the span
        span.end();
        this._recordFromReq.delete(request);
        // Record metrics
        this.recordRequestDuration(attributes, startTime);
    }
    // This is the event we get when something is wrong in the request like
    // - invalid options when calling `fetch` global API or any undici method for request
    // - connectivity errors such as unreachable host
    // - requests aborted through an `AbortController.signal`
    // NOTE: server errors are considered valid responses and it's the lib consumer
    // who should deal with that.
    onError({ request, error }) {
        const record = this._recordFromReq.get(request);
        if (!record) {
            return;
        }
        const { span, attributes, startTime } = record;
        // NOTE: in `undici@6.3.0` when request aborted the error type changes from
        // a custom error (`RequestAbortedError`) to a built-in `DOMException` carrying
        // some differences:
        // - `code` is from DOMEXception (ABORT_ERR: 20)
        // - `message` changes
        // - stacktrace is smaller and contains node internal frames
        span.recordException(error);
        span.setStatus({
            code: api_1.SpanStatusCode.ERROR,
            message: error.message
        });
        span.end();
        this._recordFromReq.delete(request);
        // Record metrics (with the error)
        attributes[SemanticAttributes_1.SemanticAttributes.ERROR_TYPE] = error.message;
        this.recordRequestDuration(attributes, startTime);
    }
    recordRequestDuration(attributes, startTime) {
        // Time to record metrics
        const metricsAttributes = {};
        // Get the attribs already in span attributes
        const keysToCopy = [
            SemanticAttributes_1.SemanticAttributes.HTTP_RESPONSE_STATUS_CODE,
            SemanticAttributes_1.SemanticAttributes.HTTP_REQUEST_METHOD,
            SemanticAttributes_1.SemanticAttributes.SERVER_ADDRESS,
            SemanticAttributes_1.SemanticAttributes.SERVER_PORT,
            SemanticAttributes_1.SemanticAttributes.URL_SCHEME,
            SemanticAttributes_1.SemanticAttributes.ERROR_TYPE
        ];
        keysToCopy.forEach((key)=>{
            if (key in attributes) {
                metricsAttributes[key] = attributes[key];
            }
        });
        // Take the duration and record it
        const durationSeconds = (0, core_1.hrTimeToMilliseconds)((0, core_1.hrTimeDuration)(startTime, (0, core_1.hrTime)())) / 1000;
        this._httpClientDurationHistogram.record(durationSeconds, metricsAttributes);
    }
    getRequestMethod(original) {
        const knownMethods = {
            CONNECT: true,
            OPTIONS: true,
            HEAD: true,
            GET: true,
            POST: true,
            PUT: true,
            PATCH: true,
            DELETE: true,
            TRACE: true
        };
        if (original.toUpperCase() in knownMethods) {
            return original.toUpperCase();
        }
        return '_OTHER';
    }
}
exports.UndiciInstrumentation = UndiciInstrumentation; //# sourceMappingURL=undici.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/undici.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-undici/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.19.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-fs'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/constants.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SYNC_FUNCTIONS = exports.CALLBACK_FUNCTIONS = exports.PROMISE_FUNCTIONS = void 0;
exports.PROMISE_FUNCTIONS = [
    'access',
    'appendFile',
    'chmod',
    'chown',
    'copyFile',
    'cp',
    'lchown',
    'link',
    'lstat',
    'lutimes',
    'mkdir',
    'mkdtemp',
    'open',
    'opendir',
    'readdir',
    'readFile',
    'readlink',
    'realpath',
    'rename',
    'rm',
    'rmdir',
    'stat',
    'symlink',
    'truncate',
    'unlink',
    'utimes',
    'writeFile'
];
exports.CALLBACK_FUNCTIONS = [
    'access',
    'appendFile',
    'chmod',
    'chown',
    'copyFile',
    'cp',
    'exists',
    'lchown',
    'link',
    'lstat',
    'lutimes',
    'mkdir',
    'mkdtemp',
    'open',
    'opendir',
    'readdir',
    'readFile',
    'readlink',
    'realpath',
    'realpath.native',
    'rename',
    'rm',
    'rmdir',
    'stat',
    'symlink',
    'truncate',
    'unlink',
    'utimes',
    'writeFile'
];
exports.SYNC_FUNCTIONS = [
    'accessSync',
    'appendFileSync',
    'chmodSync',
    'chownSync',
    'copyFileSync',
    'cpSync',
    'existsSync',
    'lchownSync',
    'linkSync',
    'lstatSync',
    'lutimesSync',
    'mkdirSync',
    'mkdtempSync',
    'opendirSync',
    'openSync',
    'readdirSync',
    'readFileSync',
    'readlinkSync',
    'realpathSync',
    'realpathSync.native',
    'renameSync',
    'rmdirSync',
    'rmSync',
    'statSync',
    'symlinkSync',
    'truncateSync',
    'unlinkSync',
    'utimesSync',
    'writeFileSync'
]; //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.indexFs = exports.splitTwoLevels = void 0;
function splitTwoLevels(functionName) {
    const memberParts = functionName.split('.');
    if (memberParts.length > 1) {
        if (memberParts.length !== 2) throw Error(`Invalid member function name ${functionName}`);
        return memberParts;
    } else {
        return [
            functionName
        ];
    }
}
exports.splitTwoLevels = splitTwoLevels;
function indexFs(fs, member) {
    if (!member) throw new Error(JSON.stringify({
        member
    }));
    const splitResult = splitTwoLevels(member);
    const [functionName1, functionName2] = splitResult;
    if (functionName2) {
        return {
            objectToPatch: fs[functionName1],
            functionNameToPatch: functionName2
        };
    } else {
        return {
            objectToPatch: fs,
            functionNameToPatch: functionName1
        };
    }
}
exports.indexFs = indexFs; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FsInstrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/version.js [instrumentation] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/constants.js [instrumentation] (ecmascript)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/utils.js [instrumentation] (ecmascript)");
/**
 * This is important for 2-level functions like `realpath.native` to retain the 2nd-level
 * when patching the 1st-level.
 */ function patchedFunctionWithOriginalProperties(patchedFunction, original) {
    return Object.assign(patchedFunction, original);
}
class FsInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('fs', [
                '*'
            ], (fs)=>{
                for (const fName of constants_1.SYNC_FUNCTIONS){
                    const { objectToPatch, functionNameToPatch } = (0, utils_1.indexFs)(fs, fName);
                    if ((0, instrumentation_1.isWrapped)(objectToPatch[functionNameToPatch])) {
                        this._unwrap(objectToPatch, functionNameToPatch);
                    }
                    this._wrap(objectToPatch, functionNameToPatch, this._patchSyncFunction.bind(this, fName));
                }
                for (const fName of constants_1.CALLBACK_FUNCTIONS){
                    const { objectToPatch, functionNameToPatch } = (0, utils_1.indexFs)(fs, fName);
                    if ((0, instrumentation_1.isWrapped)(objectToPatch[functionNameToPatch])) {
                        this._unwrap(objectToPatch, functionNameToPatch);
                    }
                    if (fName === 'exists') {
                        // handling separately because of the inconsistent cb style:
                        // `exists` doesn't have error as the first argument, but the result
                        this._wrap(objectToPatch, functionNameToPatch, this._patchExistsCallbackFunction.bind(this, fName));
                        continue;
                    }
                    this._wrap(objectToPatch, functionNameToPatch, this._patchCallbackFunction.bind(this, fName));
                }
                for (const fName of constants_1.PROMISE_FUNCTIONS){
                    if ((0, instrumentation_1.isWrapped)(fs.promises[fName])) {
                        this._unwrap(fs.promises, fName);
                    }
                    this._wrap(fs.promises, fName, this._patchPromiseFunction.bind(this, fName));
                }
                return fs;
            }, (fs)=>{
                if (fs === undefined) return;
                for (const fName of constants_1.SYNC_FUNCTIONS){
                    const { objectToPatch, functionNameToPatch } = (0, utils_1.indexFs)(fs, fName);
                    if ((0, instrumentation_1.isWrapped)(objectToPatch[functionNameToPatch])) {
                        this._unwrap(objectToPatch, functionNameToPatch);
                    }
                }
                for (const fName of constants_1.CALLBACK_FUNCTIONS){
                    const { objectToPatch, functionNameToPatch } = (0, utils_1.indexFs)(fs, fName);
                    if ((0, instrumentation_1.isWrapped)(objectToPatch[functionNameToPatch])) {
                        this._unwrap(objectToPatch, functionNameToPatch);
                    }
                }
                for (const fName of constants_1.PROMISE_FUNCTIONS){
                    if ((0, instrumentation_1.isWrapped)(fs.promises[fName])) {
                        this._unwrap(fs.promises, fName);
                    }
                }
            }),
            new instrumentation_1.InstrumentationNodeModuleDefinition('fs/promises', [
                '*'
            ], (fsPromises)=>{
                for (const fName of constants_1.PROMISE_FUNCTIONS){
                    if ((0, instrumentation_1.isWrapped)(fsPromises[fName])) {
                        this._unwrap(fsPromises, fName);
                    }
                    this._wrap(fsPromises, fName, this._patchPromiseFunction.bind(this, fName));
                }
                return fsPromises;
            }, (fsPromises)=>{
                if (fsPromises === undefined) return;
                for (const fName of constants_1.PROMISE_FUNCTIONS){
                    if ((0, instrumentation_1.isWrapped)(fsPromises[fName])) {
                        this._unwrap(fsPromises, fName);
                    }
                }
            })
        ];
    }
    _patchSyncFunction(functionName, original) {
        const instrumentation = this;
        const patchedFunction = function(...args) {
            const activeContext = api.context.active();
            if (!instrumentation._shouldTrace(activeContext)) {
                return original.apply(this, args);
            }
            if (instrumentation._runCreateHook(functionName, {
                args: args
            }) === false) {
                return api.context.with((0, core_1.suppressTracing)(activeContext), original, this, ...args);
            }
            const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
            try {
                // Suppress tracing for internal fs calls
                const res = api.context.with((0, core_1.suppressTracing)(api.trace.setSpan(activeContext, span)), original, this, ...args);
                instrumentation._runEndHook(functionName, {
                    args: args,
                    span
                });
                return res;
            } catch (error) {
                span.recordException(error);
                span.setStatus({
                    message: error.message,
                    code: api.SpanStatusCode.ERROR
                });
                instrumentation._runEndHook(functionName, {
                    args: args,
                    span,
                    error
                });
                throw error;
            } finally{
                span.end();
            }
        };
        return patchedFunctionWithOriginalProperties(patchedFunction, original);
    }
    _patchCallbackFunction(functionName, original) {
        const instrumentation = this;
        const patchedFunction = function(...args) {
            const activeContext = api.context.active();
            if (!instrumentation._shouldTrace(activeContext)) {
                return original.apply(this, args);
            }
            if (instrumentation._runCreateHook(functionName, {
                args: args
            }) === false) {
                return api.context.with((0, core_1.suppressTracing)(activeContext), original, this, ...args);
            }
            const lastIdx = args.length - 1;
            const cb = args[lastIdx];
            if (typeof cb === 'function') {
                const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
                // Return to the context active during the call in the callback
                args[lastIdx] = api.context.bind(activeContext, function(error) {
                    if (error) {
                        span.recordException(error);
                        span.setStatus({
                            message: error.message,
                            code: api.SpanStatusCode.ERROR
                        });
                    }
                    instrumentation._runEndHook(functionName, {
                        args: args,
                        span,
                        error
                    });
                    span.end();
                    return cb.apply(this, arguments);
                });
                try {
                    // Suppress tracing for internal fs calls
                    return api.context.with((0, core_1.suppressTracing)(api.trace.setSpan(activeContext, span)), original, this, ...args);
                } catch (error) {
                    span.recordException(error);
                    span.setStatus({
                        message: error.message,
                        code: api.SpanStatusCode.ERROR
                    });
                    instrumentation._runEndHook(functionName, {
                        args: args,
                        span,
                        error
                    });
                    span.end();
                    throw error;
                }
            } else {
                // TODO: what to do if we are pretty sure it's going to throw
                return original.apply(this, args);
            }
        };
        return patchedFunctionWithOriginalProperties(patchedFunction, original);
    }
    _patchExistsCallbackFunction(functionName, original) {
        const instrumentation = this;
        const patchedFunction = function(...args) {
            const activeContext = api.context.active();
            if (!instrumentation._shouldTrace(activeContext)) {
                return original.apply(this, args);
            }
            if (instrumentation._runCreateHook(functionName, {
                args: args
            }) === false) {
                return api.context.with((0, core_1.suppressTracing)(activeContext), original, this, ...args);
            }
            const lastIdx = args.length - 1;
            const cb = args[lastIdx];
            if (typeof cb === 'function') {
                const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
                // Return to the context active during the call in the callback
                args[lastIdx] = api.context.bind(activeContext, function() {
                    // `exists` never calls the callback with an error
                    instrumentation._runEndHook(functionName, {
                        args: args,
                        span
                    });
                    span.end();
                    return cb.apply(this, arguments);
                });
                try {
                    // Suppress tracing for internal fs calls
                    return api.context.with((0, core_1.suppressTracing)(api.trace.setSpan(activeContext, span)), original, this, ...args);
                } catch (error) {
                    span.recordException(error);
                    span.setStatus({
                        message: error.message,
                        code: api.SpanStatusCode.ERROR
                    });
                    instrumentation._runEndHook(functionName, {
                        args: args,
                        span,
                        error
                    });
                    span.end();
                    throw error;
                }
            } else {
                return original.apply(this, args);
            }
        };
        const functionWithOriginalProperties = patchedFunctionWithOriginalProperties(patchedFunction, original);
        // `exists` has a custom promisify function because of the inconsistent signature
        // replicating that on the patched function
        const promisified = function(path) {
            return new Promise((resolve)=>functionWithOriginalProperties(path, resolve));
        };
        Object.defineProperty(promisified, 'name', {
            value: functionName
        });
        Object.defineProperty(functionWithOriginalProperties, util_1.promisify.custom, {
            value: promisified
        });
        return functionWithOriginalProperties;
    }
    _patchPromiseFunction(functionName, original) {
        const instrumentation = this;
        const patchedFunction = async function(...args) {
            const activeContext = api.context.active();
            if (!instrumentation._shouldTrace(activeContext)) {
                return original.apply(this, args);
            }
            if (instrumentation._runCreateHook(functionName, {
                args: args
            }) === false) {
                return api.context.with((0, core_1.suppressTracing)(activeContext), original, this, ...args);
            }
            const span = instrumentation.tracer.startSpan(`fs ${functionName}`);
            try {
                // Suppress tracing for internal fs calls
                const res = await api.context.with((0, core_1.suppressTracing)(api.trace.setSpan(activeContext, span)), original, this, ...args);
                instrumentation._runEndHook(functionName, {
                    args: args,
                    span
                });
                return res;
            } catch (error) {
                span.recordException(error);
                span.setStatus({
                    message: error.message,
                    code: api.SpanStatusCode.ERROR
                });
                instrumentation._runEndHook(functionName, {
                    args: args,
                    span,
                    error
                });
                throw error;
            } finally{
                span.end();
            }
        };
        return patchedFunctionWithOriginalProperties(patchedFunction, original);
    }
    _runCreateHook(...args) {
        const { createHook } = this.getConfig();
        if (typeof createHook === 'function') {
            try {
                return createHook(...args);
            } catch (e) {
                this._diag.error('caught createHook error', e);
            }
        }
        return true;
    }
    _runEndHook(...args) {
        const { endHook } = this.getConfig();
        if (typeof endHook === 'function') {
            try {
                endHook(...args);
            } catch (e) {
                this._diag.error('caught endHook error', e);
            }
        }
    }
    _shouldTrace(context) {
        if ((0, core_1.isTracingSuppressed)(context)) {
            // Performance optimization. Avoid creating additional contexts and spans
            // if we already know that the tracing is being suppressed.
            return false;
        }
        const { requireParentSpan } = this.getConfig();
        if (requireParentSpan) {
            const parentSpan = api.trace.getSpan(context);
            if (parentSpan == null) {
                return false;
            }
        }
        return true;
    }
}
exports.FsInstrumentation = FsInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-fs/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/ExpressLayerType.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpressLayerType = void 0;
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
 */ var ExpressLayerType;
(function(ExpressLayerType) {
    ExpressLayerType["ROUTER"] = "router";
    ExpressLayerType["MIDDLEWARE"] = "middleware";
    ExpressLayerType["REQUEST_HANDLER"] = "request_handler";
})(ExpressLayerType = exports.ExpressLayerType || (exports.ExpressLayerType = {})); //# sourceMappingURL=ExpressLayerType.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
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
 */ var AttributeNames;
(function(AttributeNames) {
    AttributeNames["EXPRESS_TYPE"] = "express.type";
    AttributeNames["EXPRESS_NAME"] = "express.name";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._LAYERS_STORE_PROPERTY = exports.kLayerPatched = void 0;
/**
 * This symbol is used to mark express layer as being already instrumented
 * since its possible to use a given layer multiple times (ex: middlewares)
 */ exports.kLayerPatched = Symbol('express-layer-patched');
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
 */ exports._LAYERS_STORE_PROPERTY = '__ot_middlewares'; //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLayerPath = exports.asErrorAndMessage = exports.isLayerIgnored = exports.getLayerMetadata = exports.getRouterPath = exports.storeLayerPath = void 0;
const ExpressLayerType_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/ExpressLayerType.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/internal-types.js [instrumentation] (ecmascript)");
/**
 * Store layers path in the request to be able to construct route later
 * @param request The request where
 * @param [value] the value to push into the array
 */ const storeLayerPath = (request, value)=>{
    if (Array.isArray(request[internal_types_1._LAYERS_STORE_PROPERTY]) === false) {
        Object.defineProperty(request, internal_types_1._LAYERS_STORE_PROPERTY, {
            enumerable: false,
            value: []
        });
    }
    if (value === undefined) return;
    request[internal_types_1._LAYERS_STORE_PROPERTY].push(value);
};
exports.storeLayerPath = storeLayerPath;
/**
 * Recursively search the router path from layer stack
 * @param path The path to reconstruct
 * @param layer The layer to reconstruct from
 * @returns The reconstructed path
 */ const getRouterPath = (path, layer)=>{
    var _a, _b, _c, _d;
    const stackLayer = (_b = (_a = layer.handle) === null || _a === void 0 ? void 0 : _a.stack) === null || _b === void 0 ? void 0 : _b[0];
    if ((_c = stackLayer === null || stackLayer === void 0 ? void 0 : stackLayer.route) === null || _c === void 0 ? void 0 : _c.path) {
        return `${path}${stackLayer.route.path}`;
    }
    if ((_d = stackLayer === null || stackLayer === void 0 ? void 0 : stackLayer.handle) === null || _d === void 0 ? void 0 : _d.stack) {
        return (0, exports.getRouterPath)(path, stackLayer);
    }
    return path;
};
exports.getRouterPath = getRouterPath;
/**
 * Parse express layer context to retrieve a name and attributes.
 * @param route The route of the layer
 * @param layer Express layer
 * @param [layerPath] if present, the path on which the layer has been mounted
 */ const getLayerMetadata = (route, layer, layerPath)=>{
    var _a;
    if (layer.name === 'router') {
        const maybeRouterPath = (0, exports.getRouterPath)('', layer);
        const extractedRouterPath = maybeRouterPath ? maybeRouterPath : layerPath || route || '/';
        return {
            attributes: {
                [AttributeNames_1.AttributeNames.EXPRESS_NAME]: extractedRouterPath,
                [AttributeNames_1.AttributeNames.EXPRESS_TYPE]: ExpressLayerType_1.ExpressLayerType.ROUTER
            },
            name: `router - ${extractedRouterPath}`
        };
    } else if (layer.name === 'bound dispatch') {
        return {
            attributes: {
                [AttributeNames_1.AttributeNames.EXPRESS_NAME]: (_a = route || layerPath) !== null && _a !== void 0 ? _a : 'request handler',
                [AttributeNames_1.AttributeNames.EXPRESS_TYPE]: ExpressLayerType_1.ExpressLayerType.REQUEST_HANDLER
            },
            name: `request handler${layer.path ? ` - ${route || layerPath}` : ''}`
        };
    } else {
        return {
            attributes: {
                [AttributeNames_1.AttributeNames.EXPRESS_NAME]: layer.name,
                [AttributeNames_1.AttributeNames.EXPRESS_TYPE]: ExpressLayerType_1.ExpressLayerType.MIDDLEWARE
            },
            name: `middleware - ${layer.name}`
        };
    }
};
exports.getLayerMetadata = getLayerMetadata;
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
    var _a;
    if (Array.isArray(config === null || config === void 0 ? void 0 : config.ignoreLayersType) && ((_a = config === null || config === void 0 ? void 0 : config.ignoreLayersType) === null || _a === void 0 ? void 0 : _a.includes(type))) {
        return true;
    }
    if (Array.isArray(config === null || config === void 0 ? void 0 : config.ignoreLayers) === false) return false;
    try {
        for (const pattern of config.ignoreLayers){
            if (satisfiesPattern(name, pattern)) {
                return true;
            }
        }
    } catch (e) {
    /* catch block*/ }
    return false;
};
exports.isLayerIgnored = isLayerIgnored;
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
exports.asErrorAndMessage = asErrorAndMessage;
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
exports.getLayerPath = getLayerPath;
const extractLayerPathSegment = (arg)=>{
    if (typeof arg === 'string') {
        return arg;
    }
    if (arg instanceof RegExp || typeof arg === 'number') {
        return arg.toString();
    }
    return;
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.47.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-express'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpressInstrumentation = void 0;
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const ExpressLayerType_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/ExpressLayerType.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/utils.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/version.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/internal-types.js [instrumentation] (ecmascript)");
/** Express instrumentation for OpenTelemetry */ class ExpressInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('express', [
                '>=4.0.0 <5'
            ], (moduleExports)=>{
                const routerProto = moduleExports.Router;
                // patch express.Router.route
                if ((0, instrumentation_1.isWrapped)(routerProto.route)) {
                    this._unwrap(routerProto, 'route');
                }
                this._wrap(routerProto, 'route', this._getRoutePatch());
                // patch express.Router.use
                if ((0, instrumentation_1.isWrapped)(routerProto.use)) {
                    this._unwrap(routerProto, 'use');
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this._wrap(routerProto, 'use', this._getRouterUsePatch());
                // patch express.Application.use
                if ((0, instrumentation_1.isWrapped)(moduleExports.application.use)) {
                    this._unwrap(moduleExports.application, 'use');
                }
                this._wrap(moduleExports.application, 'use', // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this._getAppUsePatch());
                return moduleExports;
            }, (moduleExports)=>{
                if (moduleExports === undefined) return;
                const routerProto = moduleExports.Router;
                this._unwrap(routerProto, 'route');
                this._unwrap(routerProto, 'use');
                this._unwrap(moduleExports.application, 'use');
            })
        ];
    }
    /**
     * Get the patch for Router.route function
     */ _getRoutePatch() {
        const instrumentation = this;
        return function(original) {
            return function route_trace(...args) {
                const route = original.apply(this, args);
                const layer = this.stack[this.stack.length - 1];
                instrumentation._applyPatch(layer, (0, utils_1.getLayerPath)(args));
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
                instrumentation._applyPatch(layer, (0, utils_1.getLayerPath)(args));
                return route;
            };
        };
    }
    /**
     * Get the patch for Application.use function
     */ _getAppUsePatch() {
        const instrumentation = this;
        return function(original) {
            return function use(...args) {
                const route = original.apply(this, args);
                const layer = this._router.stack[this._router.stack.length - 1];
                instrumentation._applyPatch(layer, (0, utils_1.getLayerPath)(args));
                return route;
            };
        };
    }
    /** Patch each express layer to create span and propagate context */ _applyPatch(layer, layerPath) {
        const instrumentation = this;
        // avoid patching multiple times the same layer
        if (layer[internal_types_1.kLayerPatched] === true) return;
        layer[internal_types_1.kLayerPatched] = true;
        this._wrap(layer, 'handle', (original)=>{
            // TODO: instrument error handlers
            if (original.length === 4) return original;
            const patched = function(req, res) {
                (0, utils_1.storeLayerPath)(req, layerPath);
                const route = req[internal_types_1._LAYERS_STORE_PROPERTY].filter((path)=>path !== '/' && path !== '/*').join('')// remove duplicate slashes to normalize route
                .replace(/\/{2,}/g, '/');
                const attributes = {
                    [semantic_conventions_1.SEMATTRS_HTTP_ROUTE]: route.length > 0 ? route : '/'
                };
                const metadata = (0, utils_1.getLayerMetadata)(route, layer, layerPath);
                const type = metadata.attributes[AttributeNames_1.AttributeNames.EXPRESS_TYPE];
                const rpcMetadata = (0, core_1.getRPCMetadata)(api_1.context.active());
                if ((rpcMetadata === null || rpcMetadata === void 0 ? void 0 : rpcMetadata.type) === core_1.RPCType.HTTP) {
                    rpcMetadata.route = route || '/';
                }
                // verify against the config if the layer should be ignored
                if ((0, utils_1.isLayerIgnored)(metadata.name, type, instrumentation.getConfig())) {
                    if (type === ExpressLayerType_1.ExpressLayerType.MIDDLEWARE) {
                        req[internal_types_1._LAYERS_STORE_PROPERTY].pop();
                    }
                    return original.apply(this, arguments);
                }
                if (api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return original.apply(this, arguments);
                }
                const spanName = instrumentation._getSpanName({
                    request: req,
                    layerType: type,
                    route
                }, metadata.name);
                const span = instrumentation.tracer.startSpan(spanName, {
                    attributes: Object.assign(attributes, metadata.attributes)
                });
                const { requestHook } = instrumentation.getConfig();
                if (requestHook) {
                    (0, instrumentation_1.safeExecuteInTheMiddle)(()=>requestHook(span, {
                            request: req,
                            layerType: type,
                            route
                        }), (e)=>{
                        if (e) {
                            api_1.diag.error('express instrumentation: request hook failed', e);
                        }
                    }, true);
                }
                let spanHasEnded = false;
                if (metadata.attributes[AttributeNames_1.AttributeNames.EXPRESS_TYPE] !== ExpressLayerType_1.ExpressLayerType.MIDDLEWARE) {
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
                        var _a;
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
                            const [error, message] = (0, utils_1.asErrorAndMessage)(maybeError);
                            span.recordException(error);
                            span.setStatus({
                                code: api_1.SpanStatusCode.ERROR,
                                message
                            });
                        }
                        if (spanHasEnded === false) {
                            spanHasEnded = true;
                            (_a = req.res) === null || _a === void 0 ? void 0 : _a.removeListener('finish', onResponseFinish);
                            span.end();
                        }
                        if (!(req.route && isError)) {
                            req[internal_types_1._LAYERS_STORE_PROPERTY].pop();
                        }
                        const callback = args[callbackIdx];
                        return callback.apply(this, arguments);
                    };
                }
                try {
                    return original.apply(this, arguments);
                } catch (anyError) {
                    const [error, message] = (0, utils_1.asErrorAndMessage)(anyError);
                    span.recordException(error);
                    span.setStatus({
                        code: api_1.SpanStatusCode.ERROR,
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
        var _a;
        const { spanNameHook } = this.getConfig();
        if (!(spanNameHook instanceof Function)) {
            return defaultName;
        }
        try {
            return (_a = spanNameHook(info, defaultName)) !== null && _a !== void 0 ? _a : defaultName;
        } catch (err) {
            api_1.diag.error('express instrumentation: error calling span name rewrite hook', err);
            return defaultName;
        }
    }
}
exports.ExpressInstrumentation = ExpressInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/ExpressLayerType.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-express/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/balanced-match/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
module.exports = balanced;
function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
    };
}
function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
}
balanced.range = range;
function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
        if (a === b) {
            return [
                ai,
                bi
            ];
        }
        begs = [];
        left = str.length;
        while(i >= 0 && !result){
            if (i == ai) {
                begs.push(i);
                ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
                result = [
                    begs.pop(),
                    bi
                ];
            } else {
                beg = begs.pop();
                if (beg < left) {
                    left = beg;
                    right = bi;
                }
                bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
            result = [
                left,
                right
            ];
        }
    }
    return result;
}
}}),
"[project]/apps/chat-ui/node_modules/brace-expansion/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var balanced = __turbopack_context__.r("[project]/node_modules/balanced-match/index.js [instrumentation] (ecmascript)");
module.exports = expandTop;
var escSlash = '\0SLASH' + Math.random() + '\0';
var escOpen = '\0OPEN' + Math.random() + '\0';
var escClose = '\0CLOSE' + Math.random() + '\0';
var escComma = '\0COMMA' + Math.random() + '\0';
var escPeriod = '\0PERIOD' + Math.random() + '\0';
function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function escapeBraces(str) {
    return str.split('\\\\').join(escSlash).split('\\{').join(escOpen).split('\\}').join(escClose).split('\\,').join(escComma).split('\\.').join(escPeriod);
}
function unescapeBraces(str) {
    return str.split(escSlash).join('\\').split(escOpen).join('{').split(escClose).join('}').split(escComma).join(',').split(escPeriod).join('.');
}
// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
    if (!str) return [
        ''
    ];
    var parts = [];
    var m = balanced('{', '}', str);
    if (!m) return str.split(',');
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');
    p[p.length - 1] += '{' + body + '}';
    var postParts = parseCommaParts(post);
    if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
}
function expandTop(str) {
    if (!str) return [];
    // I don't know why Bash 4.3 does this, but it does.
    // Anything starting with {} will have the first two bytes preserved
    // but *only* at the top level, so {},a}b will not expand to anything,
    // but a{},b}c will be expanded to [a}c,abc].
    // One could argue that this is a bug in Bash, but since the goal of
    // this module is to match Bash's rules, we escape a leading {}
    if (str.substr(0, 2) === '{}') {
        str = '\\{\\}' + str.substr(2);
    }
    return expand(escapeBraces(str), true).map(unescapeBraces);
}
function embrace(str) {
    return '{' + str + '}';
}
function isPadded(el) {
    return /^-?0\d/.test(el);
}
function lte(i, y) {
    return i <= y;
}
function gte(i, y) {
    return i >= y;
}
function expand(str, isTop) {
    var expansions = [];
    var m = balanced('{', '}', str);
    if (!m) return [
        str
    ];
    // no need to expand pre, since it is guaranteed to be free of brace-sets
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [
        ''
    ];
    if (/\$$/.test(m.pre)) {
        for(var k = 0; k < post.length; k++){
            var expansion = pre + '{' + m.body + '}' + post[k];
            expansions.push(expansion);
        }
    } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m.body.indexOf(',') >= 0;
        if (!isSequence && !isOptions) {
            // {a},b}
            if (m.post.match(/,(?!,).*\}/)) {
                str = m.pre + '{' + m.body + escClose + m.post;
                return expand(str);
            }
            return [
                str
            ];
        }
        var n;
        if (isSequence) {
            n = m.body.split(/\.\./);
        } else {
            n = parseCommaParts(m.body);
            if (n.length === 1) {
                // x{{a,b}}y ==> x{a}y x{b}y
                n = expand(n[0], false).map(embrace);
                if (n.length === 1) {
                    return post.map(function(p) {
                        return m.pre + n[0] + p;
                    });
                }
            }
        }
        // at this point, n is the parts, and we know it's not a comma set
        // with a single entry.
        var N;
        if (isSequence) {
            var x = numeric(n[0]);
            var y = numeric(n[1]);
            var width = Math.max(n[0].length, n[1].length);
            var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
            var test = lte;
            var reverse = y < x;
            if (reverse) {
                incr *= -1;
                test = gte;
            }
            var pad = n.some(isPadded);
            N = [];
            for(var i = x; test(i, y); i += incr){
                var c;
                if (isAlphaSequence) {
                    c = String.fromCharCode(i);
                    if (c === '\\') c = '';
                } else {
                    c = String(i);
                    if (pad) {
                        var need = width - c.length;
                        if (need > 0) {
                            var z = new Array(need + 1).join('0');
                            if (i < 0) c = '-' + z + c.slice(1);
                            else c = z + c;
                        }
                    }
                }
                N.push(c);
            }
        } else {
            N = [];
            for(var j = 0; j < n.length; j++){
                N.push.apply(N, expand(n[j], false));
            }
        }
        for(var j = 0; j < N.length; j++){
            for(var k = 0; k < post.length; k++){
                var expansion = pre + N[j] + post[k];
                if (!isTop || isSequence || expansion) expansions.push(expansion);
            }
        }
    }
    return expansions;
}
}}),
"[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/assert-valid-pattern.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertValidPattern = void 0;
const MAX_PATTERN_LENGTH = 1024 * 64;
const assertValidPattern = (pattern)=>{
    if (typeof pattern !== 'string') {
        throw new TypeError('invalid pattern');
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError('pattern is too long');
    }
};
exports.assertValidPattern = assertValidPattern; //# sourceMappingURL=assert-valid-pattern.js.map
}}),
"[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/brace-expressions.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
// translate the various posix character classes into unicode properties
// this works across all unicode locales
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseClass = void 0;
// { <posix class>: [<translation>, /u flag required, negated]
const posixClasses = {
    '[:alnum:]': [
        '\\p{L}\\p{Nl}\\p{Nd}',
        true
    ],
    '[:alpha:]': [
        '\\p{L}\\p{Nl}',
        true
    ],
    '[:ascii:]': [
        '\\x' + '00-\\x' + '7f',
        false
    ],
    '[:blank:]': [
        '\\p{Zs}\\t',
        true
    ],
    '[:cntrl:]': [
        '\\p{Cc}',
        true
    ],
    '[:digit:]': [
        '\\p{Nd}',
        true
    ],
    '[:graph:]': [
        '\\p{Z}\\p{C}',
        true,
        true
    ],
    '[:lower:]': [
        '\\p{Ll}',
        true
    ],
    '[:print:]': [
        '\\p{C}',
        true
    ],
    '[:punct:]': [
        '\\p{P}',
        true
    ],
    '[:space:]': [
        '\\p{Z}\\t\\r\\n\\v\\f',
        true
    ],
    '[:upper:]': [
        '\\p{Lu}',
        true
    ],
    '[:word:]': [
        '\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}',
        true
    ],
    '[:xdigit:]': [
        'A-Fa-f0-9',
        false
    ]
};
// only need to escape a few things inside of brace expressions
// escapes: [ \ ] -
const braceEscape = (s)=>s.replace(/[[\]\\-]/g, '\\$&');
// escape all regexp magic characters
const regexpEscape = (s)=>s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// everything has already been escaped, we just have to join
const rangesToString = (ranges)=>ranges.join('');
// takes a glob string at a posix brace expression, and returns
// an equivalent regular expression source, and boolean indicating
// whether the /u flag needs to be applied, and the number of chars
// consumed to parse the character class.
// This also removes out of order ranges, and returns ($.) if the
// entire class just no good.
const parseClass = (glob, position)=>{
    const pos = position;
    /* c8 ignore start */ if (glob.charAt(pos) !== '[') {
        throw new Error('not in a brace expression');
    }
    /* c8 ignore stop */ const ranges = [];
    const negs = [];
    let i = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = '';
    WHILE: while(i < glob.length){
        const c = glob.charAt(i);
        if ((c === '!' || c === '^') && i === pos + 1) {
            negate = true;
            i++;
            continue;
        }
        if (c === ']' && sawStart && !escaping) {
            endPos = i + 1;
            break;
        }
        sawStart = true;
        if (c === '\\') {
            if (!escaping) {
                escaping = true;
                i++;
                continue;
            }
        // escaped \ char, fall through and treat like normal char
        }
        if (c === '[' && !escaping) {
            // either a posix class, a collation equivalent, or just a [
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)){
                if (glob.startsWith(cls, i)) {
                    // invalid, [a-[] is fine, but not [a-[:alpha]]
                    if (rangeStart) {
                        return [
                            '$.',
                            false,
                            glob.length - pos,
                            true
                        ];
                    }
                    i += cls.length;
                    if (neg) negs.push(unip);
                    else ranges.push(unip);
                    uflag = uflag || u;
                    continue WHILE;
                }
            }
        }
        // now it's just a normal character, effectively
        escaping = false;
        if (rangeStart) {
            // throw this range away if it's not valid, but others
            // can still match.
            if (c > rangeStart) {
                ranges.push(braceEscape(rangeStart) + '-' + braceEscape(c));
            } else if (c === rangeStart) {
                ranges.push(braceEscape(c));
            }
            rangeStart = '';
            i++;
            continue;
        }
        // now might be the start of a range.
        // can be either c-d or c-] or c<more...>] or c] at this point
        if (glob.startsWith('-]', i + 1)) {
            ranges.push(braceEscape(c + '-'));
            i += 2;
            continue;
        }
        if (glob.startsWith('-', i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
        }
        // not the start of a range, just a single character
        ranges.push(braceEscape(c));
        i++;
    }
    if (endPos < i) {
        // didn't see the end of the class, not a valid class,
        // but might still be valid as a literal match.
        return [
            '',
            false,
            0,
            false
        ];
    }
    // if we got no ranges and no negates, then we have a range that
    // cannot possibly match anything, and that poisons the whole glob
    if (!ranges.length && !negs.length) {
        return [
            '$.',
            false,
            glob.length - pos,
            true
        ];
    }
    // if we got one positive range, and it's a single character, then that's
    // not actually a magic pattern, it's just that one literal character.
    // we should not treat that as "magic", we should just return the literal
    // character. [_] is a perfectly valid way to escape glob magic chars.
    if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [
            regexpEscape(r),
            false,
            endPos - pos,
            false
        ];
    }
    const sranges = '[' + (negate ? '^' : '') + rangesToString(ranges) + ']';
    const snegs = '[' + (negate ? '' : '^') + rangesToString(negs) + ']';
    const comb = ranges.length && negs.length ? '(' + sranges + '|' + snegs + ')' : ranges.length ? sranges : snegs;
    return [
        comb,
        uflag,
        endPos - pos,
        true
    ];
};
exports.parseClass = parseClass; //# sourceMappingURL=brace-expressions.js.map
}}),
"[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/unescape.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unescape = void 0;
/**
 * Un-escape a string that has been escaped with {@link escape}.
 *
 * If the {@link windowsPathsNoEscape} option is used, then square-brace
 * escapes are removed, but not backslash escapes.  For example, it will turn
 * the string `'[*]'` into `*`, but it will not turn `'\\*'` into `'*'`,
 * becuase `\` is a path separator in `windowsPathsNoEscape` mode.
 *
 * When `windowsPathsNoEscape` is not set, then both brace escapes and
 * backslash escapes are removed.
 *
 * Slashes (and backslashes in `windowsPathsNoEscape` mode) cannot be escaped
 * or unescaped.
 */ const unescape = (s, { windowsPathsNoEscape = false } = {})=>{
    return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, '$1') : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, '$1$2').replace(/\\([^\/])/g, '$1');
};
exports.unescape = unescape; //# sourceMappingURL=unescape.js.map
}}),
"[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/ast.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
// parse a single path portion
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AST = void 0;
const brace_expressions_js_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/brace-expressions.js [instrumentation] (ecmascript)");
const unescape_js_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/unescape.js [instrumentation] (ecmascript)");
const types = new Set([
    '!',
    '?',
    '+',
    '*',
    '@'
]);
const isExtglobType = (c)=>types.has(c);
// Patterns that get prepended to bind to the start of either the
// entire string, or just a single path portion, to prevent dots
// and/or traversal patterns, when needed.
// Exts don't need the ^ or / bit, because the root binds that already.
const startNoTraversal = '(?!(?:^|/)\\.\\.?(?:$|/))';
const startNoDot = '(?!\\.)';
// characters that indicate a start of pattern needs the "no dots" bit,
// because a dot *might* be matched. ( is not in the list, because in
// the case of a child extglob, it will handle the prevention itself.
const addPatternStart = new Set([
    '[',
    '.'
]);
// cases where traversal is A-OK, no dot prevention needed
const justDots = new Set([
    '..',
    '.'
]);
const reSpecials = new Set('().*{}+?[]^$\\!');
const regExpEscape = (s)=>s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// any single thing other than /
const qmark = '[^/]';
// * => any number of characters
const star = qmark + '*?';
// use + when we need to ensure that *something* matches, because the * is
// the only thing in the path portion.
const starNoEmpty = qmark + '+?';
// remove the \ chars that we added if we end up doing a nonmagic compare
// const deslash = (s: string) => s.replace(/\\(.)/g, '$1')
class AST {
    type;
    #root;
    #hasMagic;
    #uflag = false;
    #parts = [];
    #parent;
    #parentIndex;
    #negs;
    #filledNegs = false;
    #options;
    #toString;
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    #emptyExt = false;
    constructor(type, parent, options = {}){
        this.type = type;
        // extglobs are inherently magical
        if (type) this.#hasMagic = true;
        this.#parent = parent;
        this.#root = this.#parent ? this.#parent.#root : this;
        this.#options = this.#root === this ? options : this.#root.#options;
        this.#negs = this.#root === this ? [] : this.#root.#negs;
        if (type === '!' && !this.#root.#filledNegs) this.#negs.push(this);
        this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
    }
    get hasMagic() {
        /* c8 ignore start */ if (this.#hasMagic !== undefined) return this.#hasMagic;
        /* c8 ignore stop */ for (const p of this.#parts){
            if (typeof p === 'string') continue;
            if (p.type || p.hasMagic) return this.#hasMagic = true;
        }
        // note: will be undefined until we generate the regexp src and find out
        return this.#hasMagic;
    }
    // reconstructs the pattern
    toString() {
        if (this.#toString !== undefined) return this.#toString;
        if (!this.type) {
            return this.#toString = this.#parts.map((p)=>String(p)).join('');
        } else {
            return this.#toString = this.type + '(' + this.#parts.map((p)=>String(p)).join('|') + ')';
        }
    }
    #fillNegs() {
        /* c8 ignore start */ if (this !== this.#root) throw new Error('should only call on root');
        if (this.#filledNegs) return this;
        /* c8 ignore stop */ // call toString() once to fill this out
        this.toString();
        this.#filledNegs = true;
        let n;
        while(n = this.#negs.pop()){
            if (n.type !== '!') continue;
            // walk up the tree, appending everthing that comes AFTER parentIndex
            let p = n;
            let pp = p.#parent;
            while(pp){
                for(let i = p.#parentIndex + 1; !pp.type && i < pp.#parts.length; i++){
                    for (const part of n.#parts){
                        /* c8 ignore start */ if (typeof part === 'string') {
                            throw new Error('string part in extglob AST??');
                        }
                        /* c8 ignore stop */ part.copyIn(pp.#parts[i]);
                    }
                }
                p = pp;
                pp = p.#parent;
            }
        }
        return this;
    }
    push(...parts) {
        for (const p of parts){
            if (p === '') continue;
            /* c8 ignore start */ if (typeof p !== 'string' && !(p instanceof AST && p.#parent === this)) {
                throw new Error('invalid part: ' + p);
            }
            /* c8 ignore stop */ this.#parts.push(p);
        }
    }
    toJSON() {
        const ret = this.type === null ? this.#parts.slice().map((p)=>typeof p === 'string' ? p : p.toJSON()) : [
            this.type,
            ...this.#parts.map((p)=>p.toJSON())
        ];
        if (this.isStart() && !this.type) ret.unshift([]);
        if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === '!')) {
            ret.push({});
        }
        return ret;
    }
    isStart() {
        if (this.#root === this) return true;
        // if (this.type) return !!this.#parent?.isStart()
        if (!this.#parent?.isStart()) return false;
        if (this.#parentIndex === 0) return true;
        // if everything AHEAD of this is a negation, then it's still the "start"
        const p = this.#parent;
        for(let i = 0; i < this.#parentIndex; i++){
            const pp = p.#parts[i];
            if (!(pp instanceof AST && pp.type === '!')) {
                return false;
            }
        }
        return true;
    }
    isEnd() {
        if (this.#root === this) return true;
        if (this.#parent?.type === '!') return true;
        if (!this.#parent?.isEnd()) return false;
        if (!this.type) return this.#parent?.isEnd();
        // if not root, it'll always have a parent
        /* c8 ignore start */ const pl = this.#parent ? this.#parent.#parts.length : 0;
        /* c8 ignore stop */ return this.#parentIndex === pl - 1;
    }
    copyIn(part) {
        if (typeof part === 'string') this.push(part);
        else this.push(part.clone(this));
    }
    clone(parent) {
        const c = new AST(this.type, parent);
        for (const p of this.#parts){
            c.copyIn(p);
        }
        return c;
    }
    static #parseAST(str, ast, pos, opt) {
        let escaping = false;
        let inBrace = false;
        let braceStart = -1;
        let braceNeg = false;
        if (ast.type === null) {
            // outside of a extglob, append until we find a start
            let i = pos;
            let acc = '';
            while(i < str.length){
                const c = str.charAt(i++);
                // still accumulate escapes at this point, but we do ignore
                // starts that are escaped
                if (escaping || c === '\\') {
                    escaping = !escaping;
                    acc += c;
                    continue;
                }
                if (inBrace) {
                    if (i === braceStart + 1) {
                        if (c === '^' || c === '!') {
                            braceNeg = true;
                        }
                    } else if (c === ']' && !(i === braceStart + 2 && braceNeg)) {
                        inBrace = false;
                    }
                    acc += c;
                    continue;
                } else if (c === '[') {
                    inBrace = true;
                    braceStart = i;
                    braceNeg = false;
                    acc += c;
                    continue;
                }
                if (!opt.noext && isExtglobType(c) && str.charAt(i) === '(') {
                    ast.push(acc);
                    acc = '';
                    const ext = new AST(c, ast);
                    i = AST.#parseAST(str, ext, i, opt);
                    ast.push(ext);
                    continue;
                }
                acc += c;
            }
            ast.push(acc);
            return i;
        }
        // some kind of extglob, pos is at the (
        // find the next | or )
        let i = pos + 1;
        let part = new AST(null, ast);
        const parts = [];
        let acc = '';
        while(i < str.length){
            const c = str.charAt(i++);
            // still accumulate escapes at this point, but we do ignore
            // starts that are escaped
            if (escaping || c === '\\') {
                escaping = !escaping;
                acc += c;
                continue;
            }
            if (inBrace) {
                if (i === braceStart + 1) {
                    if (c === '^' || c === '!') {
                        braceNeg = true;
                    }
                } else if (c === ']' && !(i === braceStart + 2 && braceNeg)) {
                    inBrace = false;
                }
                acc += c;
                continue;
            } else if (c === '[') {
                inBrace = true;
                braceStart = i;
                braceNeg = false;
                acc += c;
                continue;
            }
            if (isExtglobType(c) && str.charAt(i) === '(') {
                part.push(acc);
                acc = '';
                const ext = new AST(c, part);
                part.push(ext);
                i = AST.#parseAST(str, ext, i, opt);
                continue;
            }
            if (c === '|') {
                part.push(acc);
                acc = '';
                parts.push(part);
                part = new AST(null, ast);
                continue;
            }
            if (c === ')') {
                if (acc === '' && ast.#parts.length === 0) {
                    ast.#emptyExt = true;
                }
                part.push(acc);
                acc = '';
                ast.push(...parts, part);
                return i;
            }
            acc += c;
        }
        // unfinished extglob
        // if we got here, it was a malformed extglob! not an extglob, but
        // maybe something else in there.
        ast.type = null;
        ast.#hasMagic = undefined;
        ast.#parts = [
            str.substring(pos - 1)
        ];
        return i;
    }
    static fromGlob(pattern, options = {}) {
        const ast = new AST(null, undefined, options);
        AST.#parseAST(pattern, ast, 0, options);
        return ast;
    }
    // returns the regular expression if there's magic, or the unescaped
    // string if not.
    toMMPattern() {
        // should only be called on root
        /* c8 ignore start */ if (this !== this.#root) return this.#root.toMMPattern();
        /* c8 ignore stop */ const glob = this.toString();
        const [re, body, hasMagic, uflag] = this.toRegExpSource();
        // if we're in nocase mode, and not nocaseMagicOnly, then we do
        // still need a regular expression if we have to case-insensitively
        // match capital/lowercase characters.
        const anyMagic = hasMagic || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
        if (!anyMagic) {
            return body;
        }
        const flags = (this.#options.nocase ? 'i' : '') + (uflag ? 'u' : '');
        return Object.assign(new RegExp(`^${re}$`, flags), {
            _src: re,
            _glob: glob
        });
    }
    get options() {
        return this.#options;
    }
    // returns the string match, the regexp source, whether there's magic
    // in the regexp (so a regular expression is required) and whether or
    // not the uflag is needed for the regular expression (for posix classes)
    // TODO: instead of injecting the start/end at this point, just return
    // the BODY of the regexp, along with the start/end portions suitable
    // for binding the start/end in either a joined full-path makeRe context
    // (where we bind to (^|/), or a standalone matchPart context (where
    // we bind to ^, and not /).  Otherwise slashes get duped!
    //
    // In part-matching mode, the start is:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: ^(?!\.\.?$)
    // - if dots allowed or not possible: ^
    // - if dots possible and not allowed: ^(?!\.)
    // end is:
    // - if not isEnd(): nothing
    // - else: $
    //
    // In full-path matching mode, we put the slash at the START of the
    // pattern, so start is:
    // - if first pattern: same as part-matching mode
    // - if not isStart(): nothing
    // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
    // - if dots allowed or not possible: /
    // - if dots possible and not allowed: /(?!\.)
    // end is:
    // - if last pattern, same as part-matching mode
    // - else nothing
    //
    // Always put the (?:$|/) on negated tails, though, because that has to be
    // there to bind the end of the negated pattern portion, and it's easier to
    // just stick it in now rather than try to inject it later in the middle of
    // the pattern.
    //
    // We can just always return the same end, and leave it up to the caller
    // to know whether it's going to be used joined or in parts.
    // And, if the start is adjusted slightly, can do the same there:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
    // - if dots allowed or not possible: (?:/|^)
    // - if dots possible and not allowed: (?:/|^)(?!\.)
    //
    // But it's better to have a simpler binding without a conditional, for
    // performance, so probably better to return both start options.
    //
    // Then the caller just ignores the end if it's not the first pattern,
    // and the start always gets applied.
    //
    // But that's always going to be $ if it's the ending pattern, or nothing,
    // so the caller can just attach $ at the end of the pattern when building.
    //
    // So the todo is:
    // - better detect what kind of start is needed
    // - return both flavors of starting pattern
    // - attach $ at the end of the pattern when creating the actual RegExp
    //
    // Ah, but wait, no, that all only applies to the root when the first pattern
    // is not an extglob. If the first pattern IS an extglob, then we need all
    // that dot prevention biz to live in the extglob portions, because eg
    // +(*|.x*) can match .xy but not .yx.
    //
    // So, return the two flavors if it's #root and the first child is not an
    // AST, otherwise leave it to the child AST to handle it, and there,
    // use the (?:^|/) style of start binding.
    //
    // Even simplified further:
    // - Since the start for a join is eg /(?!\.) and the start for a part
    // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
    // or start or whatever) and prepend ^ or / at the Regexp construction.
    toRegExpSource(allowDot) {
        const dot = allowDot ?? !!this.#options.dot;
        if (this.#root === this) this.#fillNegs();
        if (!this.type) {
            const noEmpty = this.isStart() && this.isEnd();
            const src = this.#parts.map((p)=>{
                const [re, _, hasMagic, uflag] = typeof p === 'string' ? AST.#parseGlob(p, this.#hasMagic, noEmpty) : p.toRegExpSource(allowDot);
                this.#hasMagic = this.#hasMagic || hasMagic;
                this.#uflag = this.#uflag || uflag;
                return re;
            }).join('');
            let start = '';
            if (this.isStart()) {
                if (typeof this.#parts[0] === 'string') {
                    // this is the string that will match the start of the pattern,
                    // so we need to protect against dots and such.
                    // '.' and '..' cannot match unless the pattern is that exactly,
                    // even if it starts with . or dot:true is set.
                    const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
                    if (!dotTravAllowed) {
                        const aps = addPatternStart;
                        // check if we have a possibility of matching . or ..,
                        // and prevent that.
                        const needNoTrav = // dots are allowed, and the pattern starts with [ or .
                        dot && aps.has(src.charAt(0)) || src.startsWith('\\.') && aps.has(src.charAt(2)) || src.startsWith('\\.\\.') && aps.has(src.charAt(4));
                        // no need to prevent dots if it can't match a dot, or if a
                        // sub-pattern will be preventing it anyway.
                        const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
                        start = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : '';
                    }
                }
            }
            // append the "end of path portion" pattern to negation tails
            let end = '';
            if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === '!') {
                end = '(?:$|\\/)';
            }
            const final = start + src + end;
            return [
                final,
                (0, unescape_js_1.unescape)(src),
                this.#hasMagic = !!this.#hasMagic,
                this.#uflag
            ];
        }
        // We need to calculate the body *twice* if it's a repeat pattern
        // at the start, once in nodot mode, then again in dot mode, so a
        // pattern like *(?) can match 'x.y'
        const repeated = this.type === '*' || this.type === '+';
        // some kind of extglob
        const start = this.type === '!' ? '(?:(?!(?:' : '(?:';
        let body = this.#partsToRegExp(dot);
        if (this.isStart() && this.isEnd() && !body && this.type !== '!') {
            // invalid extglob, has to at least be *something* present, if it's
            // the entire path portion.
            const s = this.toString();
            this.#parts = [
                s
            ];
            this.type = null;
            this.#hasMagic = undefined;
            return [
                s,
                (0, unescape_js_1.unescape)(this.toString()),
                false,
                false
            ];
        }
        // XXX abstract out this map method
        let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? '' : this.#partsToRegExp(true);
        if (bodyDotAllowed === body) {
            bodyDotAllowed = '';
        }
        if (bodyDotAllowed) {
            body = `(?:${body})(?:${bodyDotAllowed})*?`;
        }
        // an empty !() is exactly equivalent to a starNoEmpty
        let final = '';
        if (this.type === '!' && this.#emptyExt) {
            final = (this.isStart() && !dot ? startNoDot : '') + starNoEmpty;
        } else {
            const close = this.type === '!' ? '))' + (this.isStart() && !dot && !allowDot ? startNoDot : '') + star + ')' : this.type === '@' ? ')' : this.type === '?' ? ')?' : this.type === '+' && bodyDotAllowed ? ')' : this.type === '*' && bodyDotAllowed ? `)?` : `)${this.type}`;
            final = start + body + close;
        }
        return [
            final,
            (0, unescape_js_1.unescape)(body),
            this.#hasMagic = !!this.#hasMagic,
            this.#uflag
        ];
    }
    #partsToRegExp(dot) {
        return this.#parts.map((p)=>{
            // extglob ASTs should only contain parent ASTs
            /* c8 ignore start */ if (typeof p === 'string') {
                throw new Error('string type in extglob ast??');
            }
            /* c8 ignore stop */ // can ignore hasMagic, because extglobs are already always magic
            const [re, _, _hasMagic, uflag] = p.toRegExpSource(dot);
            this.#uflag = this.#uflag || uflag;
            return re;
        }).filter((p)=>!(this.isStart() && this.isEnd()) || !!p).join('|');
    }
    static #parseGlob(glob, hasMagic, noEmpty = false) {
        let escaping = false;
        let re = '';
        let uflag = false;
        for(let i = 0; i < glob.length; i++){
            const c = glob.charAt(i);
            if (escaping) {
                escaping = false;
                re += (reSpecials.has(c) ? '\\' : '') + c;
                continue;
            }
            if (c === '\\') {
                if (i === glob.length - 1) {
                    re += '\\\\';
                } else {
                    escaping = true;
                }
                continue;
            }
            if (c === '[') {
                const [src, needUflag, consumed, magic] = (0, brace_expressions_js_1.parseClass)(glob, i);
                if (consumed) {
                    re += src;
                    uflag = uflag || needUflag;
                    i += consumed - 1;
                    hasMagic = hasMagic || magic;
                    continue;
                }
            }
            if (c === '*') {
                if (noEmpty && glob === '*') re += starNoEmpty;
                else re += star;
                hasMagic = true;
                continue;
            }
            if (c === '?') {
                re += qmark;
                hasMagic = true;
                continue;
            }
            re += regExpEscape(c);
        }
        return [
            re,
            (0, unescape_js_1.unescape)(glob),
            !!hasMagic,
            uflag
        ];
    }
}
exports.AST = AST; //# sourceMappingURL=ast.js.map
}}),
"[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/escape.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.escape = void 0;
/**
 * Escape all magic characters in a glob pattern.
 *
 * If the {@link windowsPathsNoEscape | GlobOptions.windowsPathsNoEscape}
 * option is used, then characters are escaped by wrapping in `[]`, because
 * a magic character wrapped in a character class can only be satisfied by
 * that exact character.  In this mode, `\` is _not_ escaped, because it is
 * not interpreted as a magic character, but instead as a path separator.
 */ const escape = (s, { windowsPathsNoEscape = false } = {})=>{
    // don't need to escape +@! because we escape the parens
    // that make those magic, and escaping ! as [!] isn't valid,
    // because [!]] is a valid glob class meaning not ']'.
    return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, '[$&]') : s.replace(/[?*()[\]\\]/g, '\\$&');
};
exports.escape = escape; //# sourceMappingURL=escape.js.map
}}),
"[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unescape = exports.escape = exports.AST = exports.Minimatch = exports.match = exports.makeRe = exports.braceExpand = exports.defaults = exports.filter = exports.GLOBSTAR = exports.sep = exports.minimatch = void 0;
const brace_expansion_1 = __importDefault(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/brace-expansion/index.js [instrumentation] (ecmascript)"));
const assert_valid_pattern_js_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/assert-valid-pattern.js [instrumentation] (ecmascript)");
const ast_js_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/ast.js [instrumentation] (ecmascript)");
const escape_js_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/escape.js [instrumentation] (ecmascript)");
const unescape_js_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/unescape.js [instrumentation] (ecmascript)");
const minimatch = (p, pattern, options = {})=>{
    (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
    // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
        return false;
    }
    return new Minimatch(pattern, options).match(p);
};
exports.minimatch = minimatch;
// Optimized checking for the most common glob patterns.
const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
const starDotExtTest = (ext)=>(f)=>!f.startsWith('.') && f.endsWith(ext);
const starDotExtTestDot = (ext)=>(f)=>f.endsWith(ext);
const starDotExtTestNocase = (ext)=>{
    ext = ext.toLowerCase();
    return (f)=>!f.startsWith('.') && f.toLowerCase().endsWith(ext);
};
const starDotExtTestNocaseDot = (ext)=>{
    ext = ext.toLowerCase();
    return (f)=>f.toLowerCase().endsWith(ext);
};
const starDotStarRE = /^\*+\.\*+$/;
const starDotStarTest = (f)=>!f.startsWith('.') && f.includes('.');
const starDotStarTestDot = (f)=>f !== '.' && f !== '..' && f.includes('.');
const dotStarRE = /^\.\*+$/;
const dotStarTest = (f)=>f !== '.' && f !== '..' && f.startsWith('.');
const starRE = /^\*+$/;
const starTest = (f)=>f.length !== 0 && !f.startsWith('.');
const starTestDot = (f)=>f.length !== 0 && f !== '.' && f !== '..';
const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
const qmarksTestNocase = ([$0, ext = ''])=>{
    const noext = qmarksTestNoExt([
        $0
    ]);
    if (!ext) return noext;
    ext = ext.toLowerCase();
    return (f)=>noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestNocaseDot = ([$0, ext = ''])=>{
    const noext = qmarksTestNoExtDot([
        $0
    ]);
    if (!ext) return noext;
    ext = ext.toLowerCase();
    return (f)=>noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestDot = ([$0, ext = ''])=>{
    const noext = qmarksTestNoExtDot([
        $0
    ]);
    return !ext ? noext : (f)=>noext(f) && f.endsWith(ext);
};
const qmarksTest = ([$0, ext = ''])=>{
    const noext = qmarksTestNoExt([
        $0
    ]);
    return !ext ? noext : (f)=>noext(f) && f.endsWith(ext);
};
const qmarksTestNoExt = ([$0])=>{
    const len = $0.length;
    return (f)=>f.length === len && !f.startsWith('.');
};
const qmarksTestNoExtDot = ([$0])=>{
    const len = $0.length;
    return (f)=>f.length === len && f !== '.' && f !== '..';
};
/* c8 ignore start */ const defaultPlatform = typeof process === 'object' && process ? typeof process.env === 'object' && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : 'posix';
const path = {
    win32: {
        sep: '\\'
    },
    posix: {
        sep: '/'
    }
};
/* c8 ignore stop */ exports.sep = defaultPlatform === 'win32' ? path.win32.sep : path.posix.sep;
exports.minimatch.sep = exports.sep;
exports.GLOBSTAR = Symbol('globstar **');
exports.minimatch.GLOBSTAR = exports.GLOBSTAR;
// any single thing other than /
// don't need to escape / when using new RegExp()
const qmark = '[^/]';
// * => any number of characters
const star = qmark + '*?';
// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
const twoStarDot = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?';
// not a ^ or / followed by a dot,
// followed by anything, any number of times.
const twoStarNoDot = '(?:(?!(?:\\/|^)\\.).)*?';
const filter = (pattern, options = {})=>(p)=>(0, exports.minimatch)(p, pattern, options);
exports.filter = filter;
exports.minimatch.filter = exports.filter;
const ext = (a, b = {})=>Object.assign({}, a, b);
const defaults = (def)=>{
    if (!def || typeof def !== 'object' || !Object.keys(def).length) {
        return exports.minimatch;
    }
    const orig = exports.minimatch;
    const m = (p, pattern, options = {})=>orig(p, pattern, ext(def, options));
    return Object.assign(m, {
        Minimatch: class Minimatch extends orig.Minimatch {
            constructor(pattern, options = {}){
                super(pattern, ext(def, options));
            }
            static defaults(options) {
                return orig.defaults(ext(def, options)).Minimatch;
            }
        },
        AST: class AST extends orig.AST {
            /* c8 ignore start */ constructor(type, parent, options = {}){
                super(type, parent, ext(def, options));
            }
            /* c8 ignore stop */ static fromGlob(pattern, options = {}) {
                return orig.AST.fromGlob(pattern, ext(def, options));
            }
        },
        unescape: (s, options = {})=>orig.unescape(s, ext(def, options)),
        escape: (s, options = {})=>orig.escape(s, ext(def, options)),
        filter: (pattern, options = {})=>orig.filter(pattern, ext(def, options)),
        defaults: (options)=>orig.defaults(ext(def, options)),
        makeRe: (pattern, options = {})=>orig.makeRe(pattern, ext(def, options)),
        braceExpand: (pattern, options = {})=>orig.braceExpand(pattern, ext(def, options)),
        match: (list, pattern, options = {})=>orig.match(list, pattern, ext(def, options)),
        sep: orig.sep,
        GLOBSTAR: exports.GLOBSTAR
    });
};
exports.defaults = defaults;
exports.minimatch.defaults = exports.defaults;
// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
const braceExpand = (pattern, options = {})=>{
    (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
    // Thanks to Yeting Li <https://github.com/yetingli> for
    // improving this regexp to avoid a ReDOS vulnerability.
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        // shortcut. no need to expand.
        return [
            pattern
        ];
    }
    return (0, brace_expansion_1.default)(pattern);
};
exports.braceExpand = braceExpand;
exports.minimatch.braceExpand = exports.braceExpand;
// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
const makeRe = (pattern, options = {})=>new Minimatch(pattern, options).makeRe();
exports.makeRe = makeRe;
exports.minimatch.makeRe = exports.makeRe;
const match = (list, pattern, options = {})=>{
    const mm = new Minimatch(pattern, options);
    list = list.filter((f)=>mm.match(f));
    if (mm.options.nonull && !list.length) {
        list.push(pattern);
    }
    return list;
};
exports.match = match;
exports.minimatch.match = exports.match;
// replace stuff like \* with *
const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
const regExpEscape = (s)=>s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
class Minimatch {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    regexp;
    constructor(pattern, options = {}){
        (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
        options = options || {};
        this.options = options;
        this.pattern = pattern;
        this.platform = options.platform || defaultPlatform;
        this.isWindows = this.platform === 'win32';
        this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
            this.pattern = this.pattern.replace(/\\/g, '/');
        }
        this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot = options.windowsNoMagicRoot !== undefined ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        // make the set of regexps etc.
        this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
            return true;
        }
        for (const pattern of this.set){
            for (const part of pattern){
                if (typeof part !== 'string') return true;
            }
        }
        return false;
    }
    debug(..._) {}
    make() {
        const pattern = this.pattern;
        const options = this.options;
        // empty patterns and comments match nothing.
        if (!options.nocomment && pattern.charAt(0) === '#') {
            this.comment = true;
            return;
        }
        if (!pattern) {
            this.empty = true;
            return;
        }
        // step 1: figure out negation, etc.
        this.parseNegate();
        // step 2: expand braces
        this.globSet = [
            ...new Set(this.braceExpand())
        ];
        if (options.debug) {
            this.debug = (...args)=>console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        // step 3: now we have a set, so turn each one into a series of
        // path-portion matching patterns.
        // These will be regexps, except in the case of "**", which is
        // set to the GLOBSTAR object for globstar behavior,
        // and will not contain any / characters
        //
        // First, we preprocess to make the glob pattern sets a bit simpler
        // and deduped.  There are some perf-killing patterns that can cause
        // problems with a glob walk, but we can simplify them down a bit.
        const rawGlobParts = this.globSet.map((s)=>this.slashSplit(s));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        // glob --> regexps
        let set = this.globParts.map((s, _, __)=>{
            if (this.isWindows && this.windowsNoMagicRoot) {
                // check if it's a drive or unc path.
                const isUNC = s[0] === '' && s[1] === '' && (s[2] === '?' || !globMagic.test(s[2])) && !globMagic.test(s[3]);
                const isDrive = /^[a-z]:/i.test(s[0]);
                if (isUNC) {
                    return [
                        ...s.slice(0, 4),
                        ...s.slice(4).map((ss)=>this.parse(ss))
                    ];
                } else if (isDrive) {
                    return [
                        s[0],
                        ...s.slice(1).map((ss)=>this.parse(ss))
                    ];
                }
            }
            return s.map((ss)=>this.parse(ss));
        });
        this.debug(this.pattern, set);
        // filter out everything that didn't compile properly.
        this.set = set.filter((s)=>s.indexOf(false) === -1);
        // do not treat the ? in UNC paths as magic
        if (this.isWindows) {
            for(let i = 0; i < this.set.length; i++){
                const p = this.set[i];
                if (p[0] === '' && p[1] === '' && this.globParts[i][2] === '?' && typeof p[3] === 'string' && /^[a-z]:$/i.test(p[3])) {
                    p[2] = '?';
                }
            }
        }
        this.debug(this.pattern, this.set);
    }
    // various transforms to equivalent pattern sets that are
    // faster to process in a filesystem walk.  The goal is to
    // eliminate what we can, and push all ** patterns as far
    // to the right as possible, even if it increases the number
    // of patterns that we have to process.
    preprocess(globParts) {
        // if we're not in globstar mode, then turn all ** into *
        if (this.options.noglobstar) {
            for(let i = 0; i < globParts.length; i++){
                for(let j = 0; j < globParts[i].length; j++){
                    if (globParts[i][j] === '**') {
                        globParts[i][j] = '*';
                    }
                }
            }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            // aggressive optimization for the purpose of fs walking
            globParts = this.firstPhasePreProcess(globParts);
            globParts = this.secondPhasePreProcess(globParts);
        } else if (optimizationLevel >= 1) {
            // just basic optimizations to remove some .. parts
            globParts = this.levelOneOptimize(globParts);
        } else {
            // just collapse multiple ** portions into one
            globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
    }
    // just get rid of adjascent ** portions
    adjascentGlobstarOptimize(globParts) {
        return globParts.map((parts)=>{
            let gs = -1;
            while(-1 !== (gs = parts.indexOf('**', gs + 1))){
                let i = gs;
                while(parts[i + 1] === '**'){
                    i++;
                }
                if (i !== gs) {
                    parts.splice(gs, i - gs);
                }
            }
            return parts;
        });
    }
    // get rid of adjascent ** and resolve .. portions
    levelOneOptimize(globParts) {
        return globParts.map((parts)=>{
            parts = parts.reduce((set, part)=>{
                const prev = set[set.length - 1];
                if (part === '**' && prev === '**') {
                    return set;
                }
                if (part === '..') {
                    if (prev && prev !== '..' && prev !== '.' && prev !== '**') {
                        set.pop();
                        return set;
                    }
                }
                set.push(part);
                return set;
            }, []);
            return parts.length === 0 ? [
                ''
            ] : parts;
        });
    }
    levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
            parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/<e>/<rest> -> <pre>/<rest>
            if (!this.preserveMultipleSlashes) {
                for(let i = 1; i < parts.length - 1; i++){
                    const p = parts[i];
                    // don't squeeze out UNC patterns
                    if (i === 1 && p === '' && parts[0] === '') continue;
                    if (p === '.' || p === '') {
                        didSomething = true;
                        parts.splice(i, 1);
                        i--;
                    }
                }
                if (parts[0] === '.' && parts.length === 2 && (parts[1] === '.' || parts[1] === '')) {
                    didSomething = true;
                    parts.pop();
                }
            }
            // <pre>/<p>/../<rest> -> <pre>/<rest>
            let dd = 0;
            while(-1 !== (dd = parts.indexOf('..', dd + 1))){
                const p = parts[dd - 1];
                if (p && p !== '.' && p !== '..' && p !== '**') {
                    didSomething = true;
                    parts.splice(dd - 1, 2);
                    dd -= 2;
                }
            }
        }while (didSomething)
        return parts.length === 0 ? [
            ''
        ] : parts;
    }
    // First phase: single-pattern processing
    // <pre> is 1 or more portions
    // <rest> is 1 or more portions
    // <p> is any portion other than ., .., '', or **
    // <e> is . or ''
    //
    // **/.. is *brutal* for filesystem walking performance, because
    // it effectively resets the recursive walk each time it occurs,
    // and ** cannot be reduced out by a .. pattern part like a regexp
    // or most strings (other than .., ., and '') can be.
    //
    // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
    // <pre>/<e>/<rest> -> <pre>/<rest>
    // <pre>/<p>/../<rest> -> <pre>/<rest>
    // **/**/<rest> -> **/<rest>
    //
    // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
    // this WOULD be allowed if ** did follow symlinks, or * didn't
    firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
            for (let parts of globParts){
                let gs = -1;
                while(-1 !== (gs = parts.indexOf('**', gs + 1))){
                    let gss = gs;
                    while(parts[gss + 1] === '**'){
                        // <pre>/**/**/<rest> -> <pre>/**/<rest>
                        gss++;
                    }
                    // eg, if gs is 2 and gss is 4, that means we have 3 **
                    // parts, and can remove 2 of them.
                    if (gss > gs) {
                        parts.splice(gs + 1, gss - gs);
                    }
                    let next = parts[gs + 1];
                    const p = parts[gs + 2];
                    const p2 = parts[gs + 3];
                    if (next !== '..') continue;
                    if (!p || p === '.' || p === '..' || !p2 || p2 === '.' || p2 === '..') {
                        continue;
                    }
                    didSomething = true;
                    // edit parts in place, and push the new one
                    parts.splice(gs, 1);
                    const other = parts.slice(0);
                    other[gs] = '**';
                    globParts.push(other);
                    gs--;
                }
                // <pre>/<e>/<rest> -> <pre>/<rest>
                if (!this.preserveMultipleSlashes) {
                    for(let i = 1; i < parts.length - 1; i++){
                        const p = parts[i];
                        // don't squeeze out UNC patterns
                        if (i === 1 && p === '' && parts[0] === '') continue;
                        if (p === '.' || p === '') {
                            didSomething = true;
                            parts.splice(i, 1);
                            i--;
                        }
                    }
                    if (parts[0] === '.' && parts.length === 2 && (parts[1] === '.' || parts[1] === '')) {
                        didSomething = true;
                        parts.pop();
                    }
                }
                // <pre>/<p>/../<rest> -> <pre>/<rest>
                let dd = 0;
                while(-1 !== (dd = parts.indexOf('..', dd + 1))){
                    const p = parts[dd - 1];
                    if (p && p !== '.' && p !== '..' && p !== '**') {
                        didSomething = true;
                        const needDot = dd === 1 && parts[dd + 1] === '**';
                        const splin = needDot ? [
                            '.'
                        ] : [];
                        parts.splice(dd - 1, 2, ...splin);
                        if (parts.length === 0) parts.push('');
                        dd -= 2;
                    }
                }
            }
        }while (didSomething)
        return globParts;
    }
    // second phase: multi-pattern dedupes
    // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
    // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
    // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
    //
    // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
    // ^-- not valid because ** doens't follow symlinks
    secondPhasePreProcess(globParts) {
        for(let i = 0; i < globParts.length - 1; i++){
            for(let j = i + 1; j < globParts.length; j++){
                const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
                if (matched) {
                    globParts[i] = [];
                    globParts[j] = matched;
                    break;
                }
            }
        }
        return globParts.filter((gs)=>gs.length);
    }
    partsMatch(a, b, emptyGSMatch = false) {
        let ai = 0;
        let bi = 0;
        let result = [];
        let which = '';
        while(ai < a.length && bi < b.length){
            if (a[ai] === b[bi]) {
                result.push(which === 'b' ? b[bi] : a[ai]);
                ai++;
                bi++;
            } else if (emptyGSMatch && a[ai] === '**' && b[bi] === a[ai + 1]) {
                result.push(a[ai]);
                ai++;
            } else if (emptyGSMatch && b[bi] === '**' && a[ai] === b[bi + 1]) {
                result.push(b[bi]);
                bi++;
            } else if (a[ai] === '*' && b[bi] && (this.options.dot || !b[bi].startsWith('.')) && b[bi] !== '**') {
                if (which === 'b') return false;
                which = 'a';
                result.push(a[ai]);
                ai++;
                bi++;
            } else if (b[bi] === '*' && a[ai] && (this.options.dot || !a[ai].startsWith('.')) && a[ai] !== '**') {
                if (which === 'a') return false;
                which = 'b';
                result.push(b[bi]);
                ai++;
                bi++;
            } else {
                return false;
            }
        }
        // if we fall out of the loop, it means they two are identical
        // as long as their lengths match
        return a.length === b.length && result;
    }
    parseNegate() {
        if (this.nonegate) return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for(let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++){
            negate = !negate;
            negateOffset++;
        }
        if (negateOffset) this.pattern = pattern.slice(negateOffset);
        this.negate = negate;
    }
    // set partial to true to test if, for example,
    // "/a/b" matches the start of "/*/b/*/d"
    // Partial means, if you run out of file before you run
    // out of pattern, then that's fine, as long as all
    // the parts match.
    matchOne(file, pattern, partial = false) {
        const options = this.options;
        // UNC paths like //?/X:/... can match X:/... and vice versa
        // Drive letters in absolute drive or unc paths are always compared
        // case-insensitively.
        if (this.isWindows) {
            const fileDrive = typeof file[0] === 'string' && /^[a-z]:$/i.test(file[0]);
            const fileUNC = !fileDrive && file[0] === '' && file[1] === '' && file[2] === '?' && /^[a-z]:$/i.test(file[3]);
            const patternDrive = typeof pattern[0] === 'string' && /^[a-z]:$/i.test(pattern[0]);
            const patternUNC = !patternDrive && pattern[0] === '' && pattern[1] === '' && pattern[2] === '?' && typeof pattern[3] === 'string' && /^[a-z]:$/i.test(pattern[3]);
            const fdi = fileUNC ? 3 : fileDrive ? 0 : undefined;
            const pdi = patternUNC ? 3 : patternDrive ? 0 : undefined;
            if (typeof fdi === 'number' && typeof pdi === 'number') {
                const [fd, pd] = [
                    file[fdi],
                    pattern[pdi]
                ];
                if (fd.toLowerCase() === pd.toLowerCase()) {
                    pattern[pdi] = fd;
                    if (pdi > fdi) {
                        pattern = pattern.slice(pdi);
                    } else if (fdi > pdi) {
                        file = file.slice(fdi);
                    }
                }
            }
        }
        // resolve and reduce . and .. portions in the file as well.
        // dont' need to do the second phase, because it's only one string[]
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            file = this.levelTwoFileOptimize(file);
        }
        this.debug('matchOne', this, {
            file,
            pattern
        });
        this.debug('matchOne', file.length, pattern.length);
        for(var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++){
            this.debug('matchOne loop');
            var p = pattern[pi];
            var f = file[fi];
            this.debug(pattern, p, f);
            // should be impossible.
            // some invalid regexp stuff in the set.
            /* c8 ignore start */ if (p === false) {
                return false;
            }
            /* c8 ignore stop */ if (p === exports.GLOBSTAR) {
                this.debug('GLOBSTAR', [
                    pattern,
                    p,
                    f
                ]);
                // "**"
                // a/**/b/**/c would match the following:
                // a/b/x/y/z/c
                // a/x/y/z/b/c
                // a/b/x/b/x/c
                // a/b/c
                // To do this, take the rest of the pattern after
                // the **, and see if it would match the file remainder.
                // If so, return success.
                // If not, the ** "swallows" a segment, and try again.
                // This is recursively awful.
                //
                // a/**/b/**/c matching a/b/x/y/z/c
                // - a matches a
                // - doublestar
                //   - matchOne(b/x/y/z/c, b/**/c)
                //     - b matches b
                //     - doublestar
                //       - matchOne(x/y/z/c, c) -> no
                //       - matchOne(y/z/c, c) -> no
                //       - matchOne(z/c, c) -> no
                //       - matchOne(c, c) yes, hit
                var fr = fi;
                var pr = pi + 1;
                if (pr === pl) {
                    this.debug('** at the end');
                    // a ** at the end will just swallow the rest.
                    // We have found a match.
                    // however, it will not swallow /.x, unless
                    // options.dot is set.
                    // . and .. are *never* matched by **, for explosively
                    // exponential reasons.
                    for(; fi < fl; fi++){
                        if (file[fi] === '.' || file[fi] === '..' || !options.dot && file[fi].charAt(0) === '.') return false;
                    }
                    return true;
                }
                // ok, let's see if we can swallow whatever we can.
                while(fr < fl){
                    var swallowee = file[fr];
                    this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
                    // XXX remove this slice.  Just pass the start index.
                    if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                        this.debug('globstar found match!', fr, fl, swallowee);
                        // found a match.
                        return true;
                    } else {
                        // can't swallow "." or ".." ever.
                        // can only swallow ".foo" when explicitly asked.
                        if (swallowee === '.' || swallowee === '..' || !options.dot && swallowee.charAt(0) === '.') {
                            this.debug('dot detected!', file, fr, pattern, pr);
                            break;
                        }
                        // ** swallows a segment, and continue.
                        this.debug('globstar swallow a segment, and continue');
                        fr++;
                    }
                }
                // no match was found.
                // However, in partial mode, we can't say this is necessarily over.
                /* c8 ignore start */ if (partial) {
                    // ran out of file
                    this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
                    if (fr === fl) {
                        return true;
                    }
                }
                /* c8 ignore stop */ return false;
            }
            // something other than **
            // non-magic patterns just have to match exactly
            // patterns with magic have been turned into regexps.
            let hit;
            if (typeof p === 'string') {
                hit = f === p;
                this.debug('string match', p, f, hit);
            } else {
                hit = p.test(f);
                this.debug('pattern match', p, f, hit);
            }
            if (!hit) return false;
        }
        // Note: ending in / means that we'll get a final ""
        // at the end of the pattern.  This can only match a
        // corresponding "" at the end of the file.
        // If the file ends in /, then it can only match a
        // a pattern that ends in /, unless the pattern just
        // doesn't have any more for it. But, a/b/ should *not*
        // match "a/b/*", even though "" matches against the
        // [^/]*? pattern, except in partial mode, where it might
        // simply not be reached yet.
        // However, a/b/ should still satisfy a/*
        // now either we fell off the end of the pattern, or we're done.
        if (fi === fl && pi === pl) {
            // ran out of pattern and filename at the same time.
            // an exact hit!
            return true;
        } else if (fi === fl) {
            // ran out of file, but still had pattern left.
            // this is ok if we're doing the match as part of
            // a glob fs traversal.
            return partial;
        } else if (pi === pl) {
            // ran out of pattern, still have file left.
            // this is only acceptable if we're on the very last
            // empty segment of a file with a trailing slash.
            // a/* should match a/b/
            return fi === fl - 1 && file[fi] === '';
        /* c8 ignore start */ } else {
            // should be unreachable.
            throw new Error('wtf?');
        }
    /* c8 ignore stop */ }
    braceExpand() {
        return (0, exports.braceExpand)(this.pattern, this.options);
    }
    parse(pattern) {
        (0, assert_valid_pattern_js_1.assertValidPattern)(pattern);
        const options = this.options;
        // shortcuts
        if (pattern === '**') return exports.GLOBSTAR;
        if (pattern === '') return '';
        // far and away, the most common glob pattern parts are
        // *, *.*, and *.<ext>  Add a fast check method for those.
        let m;
        let fastTest = null;
        if (m = pattern.match(starRE)) {
            fastTest = options.dot ? starTestDot : starTest;
        } else if (m = pattern.match(starDotExtRE)) {
            fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
        } else if (m = pattern.match(qmarksRE)) {
            fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
        } else if (m = pattern.match(starDotStarRE)) {
            fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
        } else if (m = pattern.match(dotStarRE)) {
            fastTest = dotStarTest;
        }
        const re = ast_js_1.AST.fromGlob(pattern, this.options).toMMPattern();
        if (fastTest && typeof re === 'object') {
            // Avoids overriding in frozen environments
            Reflect.defineProperty(re, 'test', {
                value: fastTest
            });
        }
        return re;
    }
    makeRe() {
        if (this.regexp || this.regexp === false) return this.regexp;
        // at this point, this.set is a 2d array of partial
        // pattern strings, or "**".
        //
        // It's better to use .match().  This function shouldn't
        // be used, really, but it's pretty convenient sometimes,
        // when you just want to work with a regex.
        const set = this.set;
        if (!set.length) {
            this.regexp = false;
            return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
        const flags = new Set(options.nocase ? [
            'i'
        ] : []);
        // regexpify non-globstar patterns
        // if ** is only item, then we just do one twoStar
        // if ** is first, and there are more, prepend (\/|twoStar\/)? to next
        // if ** is last, append (\/twoStar|) to previous
        // if ** is in the middle, append (\/|\/twoStar\/) to previous
        // then filter out GLOBSTAR symbols
        let re = set.map((pattern)=>{
            const pp = pattern.map((p)=>{
                if (p instanceof RegExp) {
                    for (const f of p.flags.split(''))flags.add(f);
                }
                return typeof p === 'string' ? regExpEscape(p) : p === exports.GLOBSTAR ? exports.GLOBSTAR : p._src;
            });
            pp.forEach((p, i)=>{
                const next = pp[i + 1];
                const prev = pp[i - 1];
                if (p !== exports.GLOBSTAR || prev === exports.GLOBSTAR) {
                    return;
                }
                if (prev === undefined) {
                    if (next !== undefined && next !== exports.GLOBSTAR) {
                        pp[i + 1] = '(?:\\/|' + twoStar + '\\/)?' + next;
                    } else {
                        pp[i] = twoStar;
                    }
                } else if (next === undefined) {
                    pp[i - 1] = prev + '(?:\\/|' + twoStar + ')?';
                } else if (next !== exports.GLOBSTAR) {
                    pp[i - 1] = prev + '(?:\\/|\\/' + twoStar + '\\/)' + next;
                    pp[i + 1] = exports.GLOBSTAR;
                }
            });
            return pp.filter((p)=>p !== exports.GLOBSTAR).join('/');
        }).join('|');
        // need to wrap in parens if we had more than one thing with |,
        // otherwise only the first will be anchored to ^ and the last to $
        const [open, close] = set.length > 1 ? [
            '(?:',
            ')'
        ] : [
            '',
            ''
        ];
        // must match entire pattern
        // ending in a * or ** will make it less strict.
        re = '^' + open + re + close + '$';
        // can match anything, as long as it's not this.
        if (this.negate) re = '^(?!' + re + ').+$';
        try {
            this.regexp = new RegExp(re, [
                ...flags
            ].join(''));
        /* c8 ignore start */ } catch (ex) {
            // should be impossible
            this.regexp = false;
        }
        /* c8 ignore stop */ return this.regexp;
    }
    slashSplit(p) {
        // if p starts with // on windows, we preserve that
        // so that UNC paths aren't broken.  Otherwise, any number of
        // / characters are coalesced into one, unless
        // preserveMultipleSlashes is set to true.
        if (this.preserveMultipleSlashes) {
            return p.split('/');
        } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
            // add an extra '' for the one we lose
            return [
                '',
                ...p.split(/\/+/)
            ];
        } else {
            return p.split(/\/+/);
        }
    }
    match(f, partial = this.partial) {
        this.debug('match', f, this.pattern);
        // short-circuit in the case of busted things.
        // comments, etc.
        if (this.comment) {
            return false;
        }
        if (this.empty) {
            return f === '';
        }
        if (f === '/' && partial) {
            return true;
        }
        const options = this.options;
        // windows: need to use /, not \
        if (this.isWindows) {
            f = f.split('\\').join('/');
        }
        // treat the test path as a set of pathparts.
        const ff = this.slashSplit(f);
        this.debug(this.pattern, 'split', ff);
        // just ONE of the pattern sets in this.set needs to match
        // in order for it to be valid.  If negating, then just one
        // match means that we have failed.
        // Either way, return on the first hit.
        const set = this.set;
        this.debug(this.pattern, 'set', set);
        // Find the basename of the path by looking for the last non-empty segment
        let filename = ff[ff.length - 1];
        if (!filename) {
            for(let i = ff.length - 2; !filename && i >= 0; i--){
                filename = ff[i];
            }
        }
        for(let i = 0; i < set.length; i++){
            const pattern = set[i];
            let file = ff;
            if (options.matchBase && pattern.length === 1) {
                file = [
                    filename
                ];
            }
            const hit = this.matchOne(file, pattern, partial);
            if (hit) {
                if (options.flipNegate) {
                    return true;
                }
                return !this.negate;
            }
        }
        // didn't get any hits.  this is success if it's a negative
        // pattern, failure otherwise.
        if (options.flipNegate) {
            return false;
        }
        return this.negate;
    }
    static defaults(def) {
        return exports.minimatch.defaults(def).Minimatch;
    }
}
exports.Minimatch = Minimatch;
/* c8 ignore start */ var ast_js_2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/ast.js [instrumentation] (ecmascript)");
Object.defineProperty(exports, "AST", {
    enumerable: true,
    get: function() {
        return ast_js_2.AST;
    }
});
var escape_js_2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/escape.js [instrumentation] (ecmascript)");
Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function() {
        return escape_js_2.escape;
    }
});
var unescape_js_2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/minimatch/dist/commonjs/unescape.js [instrumentation] (ecmascript)");
Object.defineProperty(exports, "unescape", {
    enumerable: true,
    get: function() {
        return unescape_js_2.unescape;
    }
});
/* c8 ignore stop */ exports.minimatch.AST = ast_js_1.AST;
exports.minimatch.Minimatch = Minimatch;
exports.minimatch.escape = escape_js_1.escape;
exports.minimatch.unescape = unescape_js_1.unescape; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/enum.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpanNames = exports.TokenKind = exports.AllowedOperationTypes = void 0;
var AllowedOperationTypes;
(function(AllowedOperationTypes) {
    AllowedOperationTypes["QUERY"] = "query";
    AllowedOperationTypes["MUTATION"] = "mutation";
    AllowedOperationTypes["SUBSCRIPTION"] = "subscription";
})(AllowedOperationTypes = exports.AllowedOperationTypes || (exports.AllowedOperationTypes = {}));
var TokenKind;
(function(TokenKind) {
    TokenKind["SOF"] = "<SOF>";
    TokenKind["EOF"] = "<EOF>";
    TokenKind["BANG"] = "!";
    TokenKind["DOLLAR"] = "$";
    TokenKind["AMP"] = "&";
    TokenKind["PAREN_L"] = "(";
    TokenKind["PAREN_R"] = ")";
    TokenKind["SPREAD"] = "...";
    TokenKind["COLON"] = ":";
    TokenKind["EQUALS"] = "=";
    TokenKind["AT"] = "@";
    TokenKind["BRACKET_L"] = "[";
    TokenKind["BRACKET_R"] = "]";
    TokenKind["BRACE_L"] = "{";
    TokenKind["PIPE"] = "|";
    TokenKind["BRACE_R"] = "}";
    TokenKind["NAME"] = "Name";
    TokenKind["INT"] = "Int";
    TokenKind["FLOAT"] = "Float";
    TokenKind["STRING"] = "String";
    TokenKind["BLOCK_STRING"] = "BlockString";
    TokenKind["COMMENT"] = "Comment";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
var SpanNames;
(function(SpanNames) {
    SpanNames["EXECUTE"] = "graphql.execute";
    SpanNames["PARSE"] = "graphql.parse";
    SpanNames["RESOLVE"] = "graphql.resolve";
    SpanNames["VALIDATE"] = "graphql.validate";
    SpanNames["SCHEMA_VALIDATE"] = "graphql.validateSchema";
    SpanNames["SCHEMA_PARSE"] = "graphql.parseSchema";
})(SpanNames = exports.SpanNames || (exports.SpanNames = {})); //# sourceMappingURL=enum.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
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
 */ var AttributeNames;
(function(AttributeNames) {
    AttributeNames["SOURCE"] = "graphql.source";
    AttributeNames["FIELD_NAME"] = "graphql.field.name";
    AttributeNames["FIELD_PATH"] = "graphql.field.path";
    AttributeNames["FIELD_TYPE"] = "graphql.field.type";
    AttributeNames["OPERATION_TYPE"] = "graphql.operation.type";
    AttributeNames["OPERATION_NAME"] = "graphql.operation.name";
    AttributeNames["VARIABLES"] = "graphql.variables.";
    AttributeNames["ERROR_VALIDATION_NAME"] = "graphql.validation.error";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/symbols.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OTEL_GRAPHQL_DATA_SYMBOL = exports.OTEL_PATCHED_SYMBOL = void 0;
exports.OTEL_PATCHED_SYMBOL = Symbol.for('opentelemetry.patched');
exports.OTEL_GRAPHQL_DATA_SYMBOL = Symbol.for('opentelemetry.graphql_data'); //# sourceMappingURL=symbols.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OPERATION_NOT_SUPPORTED = void 0;
const symbols_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/symbols.js [instrumentation] (ecmascript)");
exports.OPERATION_NOT_SUPPORTED = 'Operation$operationName$not' + ' supported'; //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapFieldResolver = exports.wrapFields = exports.getSourceFromLocation = exports.getOperation = exports.endSpan = exports.addSpanSource = exports.addInputVariableAttributes = exports.isPromise = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const enum_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/enum.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const symbols_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/symbols.js [instrumentation] (ecmascript)");
const OPERATION_VALUES = Object.values(enum_1.AllowedOperationTypes);
// https://github.com/graphql/graphql-js/blob/main/src/jsutils/isPromise.ts
const isPromise = (value)=>{
    return typeof (value === null || value === void 0 ? void 0 : value.then) === 'function';
};
exports.isPromise = isPromise;
// https://github.com/graphql/graphql-js/blob/main/src/jsutils/isObjectLike.ts
const isObjectLike = (value)=>{
    return typeof value == 'object' && value !== null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addInputVariableAttribute(span, key, variable) {
    if (Array.isArray(variable)) {
        variable.forEach((value, idx)=>{
            addInputVariableAttribute(span, `${key}.${idx}`, value);
        });
    } else if (variable instanceof Object) {
        Object.entries(variable).forEach(([nestedKey, value])=>{
            addInputVariableAttribute(span, `${key}.${nestedKey}`, value);
        });
    } else {
        span.setAttribute(`${AttributeNames_1.AttributeNames.VARIABLES}${String(key)}`, variable);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addInputVariableAttributes(span, variableValues) {
    Object.entries(variableValues).forEach(([key, value])=>{
        addInputVariableAttribute(span, key, value);
    });
}
exports.addInputVariableAttributes = addInputVariableAttributes;
function addSpanSource(span, loc, allowValues, start, end) {
    const source = getSourceFromLocation(loc, allowValues, start, end);
    span.setAttribute(AttributeNames_1.AttributeNames.SOURCE, source);
}
exports.addSpanSource = addSpanSource;
function createFieldIfNotExists(tracer, getConfig, contextValue, info, path) {
    let field = getField(contextValue, path);
    let spanAdded = false;
    if (!field) {
        spanAdded = true;
        const parent = getParentField(contextValue, path);
        field = {
            parent,
            span: createResolverSpan(tracer, getConfig, contextValue, info, path, parent.span),
            error: null
        };
        addField(contextValue, path, field);
    }
    return {
        spanAdded,
        field
    };
}
function createResolverSpan(tracer, getConfig, contextValue, info, path, parentSpan) {
    var _a, _b;
    const attributes = {
        [AttributeNames_1.AttributeNames.FIELD_NAME]: info.fieldName,
        [AttributeNames_1.AttributeNames.FIELD_PATH]: path.join('.'),
        [AttributeNames_1.AttributeNames.FIELD_TYPE]: info.returnType.toString()
    };
    const span = tracer.startSpan(`${enum_1.SpanNames.RESOLVE} ${attributes[AttributeNames_1.AttributeNames.FIELD_PATH]}`, {
        attributes
    }, parentSpan ? api.trace.setSpan(api.context.active(), parentSpan) : undefined);
    const document = contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].source;
    const fieldNode = info.fieldNodes.find((fieldNode)=>fieldNode.kind === 'Field');
    if (fieldNode) {
        addSpanSource(span, document.loc, getConfig().allowValues, (_a = fieldNode.loc) === null || _a === void 0 ? void 0 : _a.start, (_b = fieldNode.loc) === null || _b === void 0 ? void 0 : _b.end);
    }
    return span;
}
function endSpan(span, error) {
    if (error) {
        span.recordException(error);
    }
    span.end();
}
exports.endSpan = endSpan;
function getOperation(document, operationName) {
    if (!document || !Array.isArray(document.definitions)) {
        return undefined;
    }
    if (operationName) {
        return document.definitions.filter((definition)=>{
            var _a;
            return OPERATION_VALUES.indexOf((_a = definition) === null || _a === void 0 ? void 0 : _a.operation) !== -1;
        }).find((definition)=>{
            var _a, _b;
            return operationName === ((_b = (_a = definition) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.value);
        });
    } else {
        return document.definitions.find((definition)=>{
            var _a;
            return OPERATION_VALUES.indexOf((_a = definition) === null || _a === void 0 ? void 0 : _a.operation) !== -1;
        });
    }
}
exports.getOperation = getOperation;
function addField(contextValue, path, field) {
    return contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join('.')] = field;
}
function getField(contextValue, path) {
    return contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].fields[path.join('.')];
}
function getParentField(contextValue, path) {
    for(let i = path.length - 1; i > 0; i--){
        const field = getField(contextValue, path.slice(0, i));
        if (field) {
            return field;
        }
    }
    return {
        span: contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL].span
    };
}
function pathToArray(mergeItems, path) {
    const flattened = [];
    let curr = path;
    while(curr){
        let key = curr.key;
        if (mergeItems && typeof key === 'number') {
            key = '*';
        }
        flattened.push(String(key));
        curr = curr.prev;
    }
    return flattened.reverse();
}
function repeatBreak(i) {
    return repeatChar('\n', i);
}
function repeatSpace(i) {
    return repeatChar(' ', i);
}
function repeatChar(char, to) {
    let text = '';
    for(let i = 0; i < to; i++){
        text += char;
    }
    return text;
}
const KindsToBeRemoved = [
    enum_1.TokenKind.FLOAT,
    enum_1.TokenKind.STRING,
    enum_1.TokenKind.INT,
    enum_1.TokenKind.BLOCK_STRING
];
function getSourceFromLocation(loc, allowValues = false, inputStart, inputEnd) {
    var _a, _b;
    let source = '';
    if (loc === null || loc === void 0 ? void 0 : loc.startToken) {
        const start = typeof inputStart === 'number' ? inputStart : loc.start;
        const end = typeof inputEnd === 'number' ? inputEnd : loc.end;
        let next = loc.startToken.next;
        let previousLine = 1;
        while(next){
            if (next.start < start) {
                next = next.next;
                previousLine = next === null || next === void 0 ? void 0 : next.line;
                continue;
            }
            if (next.end > end) {
                next = next.next;
                previousLine = next === null || next === void 0 ? void 0 : next.line;
                continue;
            }
            let value = next.value || next.kind;
            let space = '';
            if (!allowValues && KindsToBeRemoved.indexOf(next.kind) >= 0) {
                // value = repeatChar('*', value.length);
                value = '*';
            }
            if (next.kind === enum_1.TokenKind.STRING) {
                value = `"${value}"`;
            }
            if (next.kind === enum_1.TokenKind.EOF) {
                value = '';
            }
            if (next.line > previousLine) {
                source += repeatBreak(next.line - previousLine);
                previousLine = next.line;
                space = repeatSpace(next.column - 1);
            } else {
                if (next.line === ((_a = next.prev) === null || _a === void 0 ? void 0 : _a.line)) {
                    space = repeatSpace(next.start - (((_b = next.prev) === null || _b === void 0 ? void 0 : _b.end) || 0));
                }
            }
            source += space + value;
            if (next) {
                next = next.next;
            }
        }
    }
    return source;
}
exports.getSourceFromLocation = getSourceFromLocation;
function wrapFields(type, tracer, getConfig) {
    if (!type || typeof type.getFields !== 'function' || type[symbols_1.OTEL_PATCHED_SYMBOL]) {
        return;
    }
    const fields = type.getFields();
    type[symbols_1.OTEL_PATCHED_SYMBOL] = true;
    Object.keys(fields).forEach((key)=>{
        const field = fields[key];
        if (!field) {
            return;
        }
        if (field.resolve) {
            field.resolve = wrapFieldResolver(tracer, getConfig, field.resolve);
        }
        if (field.type) {
            let unwrappedType = field.type;
            while(unwrappedType.ofType){
                unwrappedType = unwrappedType.ofType;
            }
            wrapFields(unwrappedType, tracer, getConfig);
        }
    });
}
exports.wrapFields = wrapFields;
const handleResolveSpanError = (resolveSpan, err, shouldEndSpan)=>{
    if (!shouldEndSpan) {
        return;
    }
    resolveSpan.recordException(err);
    resolveSpan.setStatus({
        code: api.SpanStatusCode.ERROR,
        message: err.message
    });
    resolveSpan.end();
};
const handleResolveSpanSuccess = (resolveSpan, shouldEndSpan)=>{
    if (!shouldEndSpan) {
        return;
    }
    resolveSpan.end();
};
function wrapFieldResolver(tracer, getConfig, fieldResolver, isDefaultResolver = false) {
    if (wrappedFieldResolver[symbols_1.OTEL_PATCHED_SYMBOL] || typeof fieldResolver !== 'function') {
        return fieldResolver;
    }
    function wrappedFieldResolver(source, args, contextValue, info) {
        if (!fieldResolver) {
            return undefined;
        }
        const config = getConfig();
        // follows what graphql is doing to decide if this is a trivial resolver
        // for which we don't need to create a resolve span
        if (config.ignoreTrivialResolveSpans && isDefaultResolver && (isObjectLike(source) || typeof source === 'function')) {
            const property = source[info.fieldName];
            // a function execution is not trivial and should be recorder.
            // property which is not a function is just a value and we don't want a "resolve" span for it
            if (typeof property !== 'function') {
                return fieldResolver.call(this, source, args, contextValue, info);
            }
        }
        if (!contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL]) {
            return fieldResolver.call(this, source, args, contextValue, info);
        }
        const path = pathToArray(config.mergeItems, info && info.path);
        const depth = path.filter((item)=>typeof item === 'string').length;
        let field;
        let shouldEndSpan = false;
        if (config.depth >= 0 && config.depth < depth) {
            field = getParentField(contextValue, path);
        } else {
            const newField = createFieldIfNotExists(tracer, getConfig, contextValue, info, path);
            field = newField.field;
            shouldEndSpan = newField.spanAdded;
        }
        return api.context.with(api.trace.setSpan(api.context.active(), field.span), ()=>{
            try {
                const res = fieldResolver.call(this, source, args, contextValue, info);
                if ((0, exports.isPromise)(res)) {
                    return res.then((r)=>{
                        handleResolveSpanSuccess(field.span, shouldEndSpan);
                        return r;
                    }, (err)=>{
                        handleResolveSpanError(field.span, err, shouldEndSpan);
                        throw err;
                    });
                } else {
                    handleResolveSpanSuccess(field.span, shouldEndSpan);
                    return res;
                }
            } catch (err) {
                handleResolveSpanError(field.span, err, shouldEndSpan);
                throw err;
            }
        });
    }
    wrappedFieldResolver[symbols_1.OTEL_PATCHED_SYMBOL] = true;
    return wrappedFieldResolver;
}
exports.wrapFieldResolver = wrapFieldResolver; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.47.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-graphql'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLInstrumentation = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const enum_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/enum.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const symbols_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/symbols.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/internal-types.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/utils.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/version.js [instrumentation] (ecmascript)");
const DEFAULT_CONFIG = {
    mergeItems: false,
    depth: -1,
    allowValues: false,
    ignoreResolveSpans: false
};
const supportedVersions = [
    '>=14.0.0 <17'
];
class GraphQLInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    setConfig(config = {}) {
        super.setConfig(Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    init() {
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition('graphql', supportedVersions);
        module.files.push(this._addPatchingExecute());
        module.files.push(this._addPatchingParser());
        module.files.push(this._addPatchingValidate());
        return module;
    }
    _addPatchingExecute() {
        return new instrumentation_1.InstrumentationNodeModuleFile('graphql/execution/execute.js', supportedVersions, // cannot make it work with appropriate type as execute function has 2
        //types and/cannot import function but only types
        (moduleExports)=>{
            if ((0, instrumentation_1.isWrapped)(moduleExports.execute)) {
                this._unwrap(moduleExports, 'execute');
            }
            this._wrap(moduleExports, 'execute', this._patchExecute(moduleExports.defaultFieldResolver));
            return moduleExports;
        }, (moduleExports)=>{
            if (moduleExports) {
                this._unwrap(moduleExports, 'execute');
            }
        });
    }
    _addPatchingParser() {
        return new instrumentation_1.InstrumentationNodeModuleFile('graphql/language/parser.js', supportedVersions, (moduleExports)=>{
            if ((0, instrumentation_1.isWrapped)(moduleExports.parse)) {
                this._unwrap(moduleExports, 'parse');
            }
            this._wrap(moduleExports, 'parse', this._patchParse());
            return moduleExports;
        }, (moduleExports)=>{
            if (moduleExports) {
                this._unwrap(moduleExports, 'parse');
            }
        });
    }
    _addPatchingValidate() {
        return new instrumentation_1.InstrumentationNodeModuleFile('graphql/validation/validate.js', supportedVersions, (moduleExports)=>{
            if ((0, instrumentation_1.isWrapped)(moduleExports.validate)) {
                this._unwrap(moduleExports, 'validate');
            }
            this._wrap(moduleExports, 'validate', this._patchValidate());
            return moduleExports;
        }, (moduleExports)=>{
            if (moduleExports) {
                this._unwrap(moduleExports, 'validate');
            }
        });
    }
    _patchExecute(defaultFieldResolved) {
        const instrumentation = this;
        return function execute(original) {
            return function patchExecute() {
                let processedArgs;
                // case when apollo server is used for example
                if (arguments.length >= 2) {
                    const args = arguments;
                    processedArgs = instrumentation._wrapExecuteArgs(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], defaultFieldResolved);
                } else {
                    const args = arguments[0];
                    processedArgs = instrumentation._wrapExecuteArgs(args.schema, args.document, args.rootValue, args.contextValue, args.variableValues, args.operationName, args.fieldResolver, args.typeResolver, defaultFieldResolved);
                }
                const operation = (0, utils_1.getOperation)(processedArgs.document, processedArgs.operationName);
                const span = instrumentation._createExecuteSpan(operation, processedArgs);
                processedArgs.contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL] = {
                    source: processedArgs.document ? processedArgs.document || processedArgs.document[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL] : undefined,
                    span,
                    fields: {}
                };
                return api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
                    return (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                        return original.apply(this, [
                            processedArgs
                        ]);
                    }, (err, result)=>{
                        instrumentation._handleExecutionResult(span, err, result);
                    });
                });
            };
        };
    }
    _handleExecutionResult(span, err, result) {
        const config = this.getConfig();
        if (result === undefined || err) {
            (0, utils_1.endSpan)(span, err);
            return;
        }
        if ((0, utils_1.isPromise)(result)) {
            result.then((resultData)=>{
                if (typeof config.responseHook !== 'function') {
                    (0, utils_1.endSpan)(span);
                    return;
                }
                this._executeResponseHook(span, resultData);
            }, (error)=>{
                (0, utils_1.endSpan)(span, error);
            });
        } else {
            if (typeof config.responseHook !== 'function') {
                (0, utils_1.endSpan)(span);
                return;
            }
            this._executeResponseHook(span, result);
        }
    }
    _executeResponseHook(span, result) {
        const { responseHook } = this.getConfig();
        if (!responseHook) {
            return;
        }
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            responseHook(span, result);
        }, (err)=>{
            if (err) {
                this._diag.error('Error running response hook', err);
            }
            (0, utils_1.endSpan)(span, undefined);
        }, true);
    }
    _patchParse() {
        const instrumentation = this;
        return function parse(original) {
            return function patchParse(source, options) {
                return instrumentation._parse(this, original, source, options);
            };
        };
    }
    _patchValidate() {
        const instrumentation = this;
        return function validate(original) {
            return function patchValidate(schema, documentAST, rules, options, typeInfo) {
                return instrumentation._validate(this, original, schema, documentAST, rules, typeInfo, options);
            };
        };
    }
    _parse(obj, original, source, options) {
        const config = this.getConfig();
        const span = this.tracer.startSpan(enum_1.SpanNames.PARSE);
        return api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
            return (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                return original.call(obj, source, options);
            }, (err, result)=>{
                if (result) {
                    const operation = (0, utils_1.getOperation)(result);
                    if (!operation) {
                        span.updateName(enum_1.SpanNames.SCHEMA_PARSE);
                    } else if (result.loc) {
                        (0, utils_1.addSpanSource)(span, result.loc, config.allowValues);
                    }
                }
                (0, utils_1.endSpan)(span, err);
            });
        });
    }
    _validate(obj, original, schema, documentAST, rules, typeInfo, options) {
        const span = this.tracer.startSpan(enum_1.SpanNames.VALIDATE, {});
        return api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
            return (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                return original.call(obj, schema, documentAST, rules, options, typeInfo);
            }, (err, errors)=>{
                if (!documentAST.loc) {
                    span.updateName(enum_1.SpanNames.SCHEMA_VALIDATE);
                }
                if (errors && errors.length) {
                    span.recordException({
                        name: AttributeNames_1.AttributeNames.ERROR_VALIDATION_NAME,
                        message: JSON.stringify(errors)
                    });
                }
                (0, utils_1.endSpan)(span, err);
            });
        });
    }
    _createExecuteSpan(operation, processedArgs) {
        var _a;
        const config = this.getConfig();
        const span = this.tracer.startSpan(enum_1.SpanNames.EXECUTE, {});
        if (operation) {
            const { operation: operationType, name: nameNode } = operation;
            span.setAttribute(AttributeNames_1.AttributeNames.OPERATION_TYPE, operationType);
            const operationName = nameNode === null || nameNode === void 0 ? void 0 : nameNode.value;
            // https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/instrumentation/graphql/
            // > The span name MUST be of the format <graphql.operation.type> <graphql.operation.name> provided that graphql.operation.type and graphql.operation.name are available.
            // > If graphql.operation.name is not available, the span SHOULD be named <graphql.operation.type>.
            if (operationName) {
                span.setAttribute(AttributeNames_1.AttributeNames.OPERATION_NAME, operationName);
                span.updateName(`${operationType} ${operationName}`);
            } else {
                span.updateName(operationType);
            }
        } else {
            let operationName = ' ';
            if (processedArgs.operationName) {
                operationName = ` "${processedArgs.operationName}" `;
            }
            operationName = internal_types_1.OPERATION_NOT_SUPPORTED.replace('$operationName$', operationName);
            span.setAttribute(AttributeNames_1.AttributeNames.OPERATION_NAME, operationName);
        }
        if ((_a = processedArgs.document) === null || _a === void 0 ? void 0 : _a.loc) {
            (0, utils_1.addSpanSource)(span, processedArgs.document.loc, config.allowValues);
        }
        if (processedArgs.variableValues && config.allowValues) {
            (0, utils_1.addInputVariableAttributes)(span, processedArgs.variableValues);
        }
        return span;
    }
    _wrapExecuteArgs(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver, defaultFieldResolved) {
        if (!contextValue) {
            contextValue = {};
        }
        if (contextValue[symbols_1.OTEL_GRAPHQL_DATA_SYMBOL] || this.getConfig().ignoreResolveSpans) {
            return {
                schema,
                document,
                rootValue,
                contextValue,
                variableValues,
                operationName,
                fieldResolver,
                typeResolver
            };
        }
        const isUsingDefaultResolver = fieldResolver == null;
        // follows graphql implementation here:
        // https://github.com/graphql/graphql-js/blob/0b7daed9811731362c71900e12e5ea0d1ecc7f1f/src/execution/execute.ts#L494
        const fieldResolverForExecute = fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolved;
        fieldResolver = (0, utils_1.wrapFieldResolver)(this.tracer, ()=>this.getConfig(), fieldResolverForExecute, isUsingDefaultResolver);
        if (schema) {
            (0, utils_1.wrapFields)(schema.getQueryType(), this.tracer, ()=>this.getConfig());
            (0, utils_1.wrapFields)(schema.getMutationType(), this.tracer, ()=>this.getConfig());
        }
        return {
            schema,
            document,
            rootValue,
            contextValue,
            variableValues,
            operationName,
            fieldResolver,
            typeResolver
        };
    }
}
exports.GraphQLInstrumentation = GraphQLInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-graphql/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.7.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-kafkajs'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/propagator.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferTextMapGetter = void 0;
/*
same as open telemetry's `defaultTextMapGetter`,
but also handle case where header is buffer,
adding toString() to make sure string is returned
*/ exports.bufferTextMapGetter = {
    get (carrier, key) {
        var _a;
        if (!carrier) {
            return undefined;
        }
        const keys = Object.keys(carrier);
        for (const carrierKey of keys){
            if (carrierKey === key || carrierKey.toLowerCase() === key) {
                return (_a = carrier[carrierKey]) === null || _a === void 0 ? void 0 : _a.toString();
            }
        }
        return undefined;
    },
    keys (carrier) {
        return carrier ? Object.keys(carrier) : [];
    }
}; //# sourceMappingURL=propagator.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors, Aspecto
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KafkaJsInstrumentation = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/version.js [instrumentation] (ecmascript)");
const propagator_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/propagator.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
class KafkaJsInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        const unpatch = (moduleExports)=>{
            var _a, _b;
            if ((0, instrumentation_1.isWrapped)((_a = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.Kafka) === null || _a === void 0 ? void 0 : _a.prototype.producer)) {
                this._unwrap(moduleExports.Kafka.prototype, 'producer');
            }
            if ((0, instrumentation_1.isWrapped)((_b = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.Kafka) === null || _b === void 0 ? void 0 : _b.prototype.consumer)) {
                this._unwrap(moduleExports.Kafka.prototype, 'consumer');
            }
        };
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition('kafkajs', [
            '>=0.1.0 <3'
        ], (moduleExports)=>{
            var _a, _b;
            unpatch(moduleExports);
            this._wrap((_a = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.Kafka) === null || _a === void 0 ? void 0 : _a.prototype, 'producer', this._getProducerPatch());
            this._wrap((_b = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.Kafka) === null || _b === void 0 ? void 0 : _b.prototype, 'consumer', this._getConsumerPatch());
            return moduleExports;
        }, unpatch);
        return module;
    }
    _getConsumerPatch() {
        const instrumentation = this;
        return (original)=>{
            return function consumer(...args) {
                const newConsumer = original.apply(this, args);
                if ((0, instrumentation_1.isWrapped)(newConsumer.run)) {
                    instrumentation._unwrap(newConsumer, 'run');
                }
                instrumentation._wrap(newConsumer, 'run', instrumentation._getConsumerRunPatch());
                return newConsumer;
            };
        };
    }
    _getProducerPatch() {
        const instrumentation = this;
        return (original)=>{
            return function consumer(...args) {
                const newProducer = original.apply(this, args);
                if ((0, instrumentation_1.isWrapped)(newProducer.sendBatch)) {
                    instrumentation._unwrap(newProducer, 'sendBatch');
                }
                instrumentation._wrap(newProducer, 'sendBatch', instrumentation._getProducerSendBatchPatch());
                if ((0, instrumentation_1.isWrapped)(newProducer.send)) {
                    instrumentation._unwrap(newProducer, 'send');
                }
                instrumentation._wrap(newProducer, 'send', instrumentation._getProducerSendPatch());
                return newProducer;
            };
        };
    }
    _getConsumerRunPatch() {
        const instrumentation = this;
        return (original)=>{
            return function run(...args) {
                const config = args[0];
                if (config === null || config === void 0 ? void 0 : config.eachMessage) {
                    if ((0, instrumentation_1.isWrapped)(config.eachMessage)) {
                        instrumentation._unwrap(config, 'eachMessage');
                    }
                    instrumentation._wrap(config, 'eachMessage', instrumentation._getConsumerEachMessagePatch());
                }
                if (config === null || config === void 0 ? void 0 : config.eachBatch) {
                    if ((0, instrumentation_1.isWrapped)(config.eachBatch)) {
                        instrumentation._unwrap(config, 'eachBatch');
                    }
                    instrumentation._wrap(config, 'eachBatch', instrumentation._getConsumerEachBatchPatch());
                }
                return original.call(this, config);
            };
        };
    }
    _getConsumerEachMessagePatch() {
        const instrumentation = this;
        return (original)=>{
            return function eachMessage(...args) {
                const payload = args[0];
                const propagatedContext = api_1.propagation.extract(api_1.ROOT_CONTEXT, payload.message.headers, propagator_1.bufferTextMapGetter);
                const span = instrumentation._startConsumerSpan(payload.topic, payload.message, semantic_conventions_1.MESSAGINGOPERATIONVALUES_PROCESS, propagatedContext);
                const eachMessagePromise = api_1.context.with(api_1.trace.setSpan(propagatedContext, span), ()=>{
                    return original.apply(this, args);
                });
                return instrumentation._endSpansOnPromise([
                    span
                ], eachMessagePromise);
            };
        };
    }
    _getConsumerEachBatchPatch() {
        return (original)=>{
            const instrumentation = this;
            return function eachBatch(...args) {
                const payload = args[0];
                // https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/messaging.md#topic-with-multiple-consumers
                const receivingSpan = instrumentation._startConsumerSpan(payload.batch.topic, undefined, semantic_conventions_1.MESSAGINGOPERATIONVALUES_RECEIVE, api_1.ROOT_CONTEXT);
                return api_1.context.with(api_1.trace.setSpan(api_1.context.active(), receivingSpan), ()=>{
                    const spans = payload.batch.messages.map((message)=>{
                        var _a;
                        const propagatedContext = api_1.propagation.extract(api_1.ROOT_CONTEXT, message.headers, propagator_1.bufferTextMapGetter);
                        const spanContext = (_a = api_1.trace.getSpan(propagatedContext)) === null || _a === void 0 ? void 0 : _a.spanContext();
                        let origSpanLink;
                        if (spanContext) {
                            origSpanLink = {
                                context: spanContext
                            };
                        }
                        return instrumentation._startConsumerSpan(payload.batch.topic, message, semantic_conventions_1.MESSAGINGOPERATIONVALUES_PROCESS, undefined, origSpanLink);
                    });
                    const batchMessagePromise = original.apply(this, args);
                    spans.unshift(receivingSpan);
                    return instrumentation._endSpansOnPromise(spans, batchMessagePromise);
                });
            };
        };
    }
    _getProducerSendBatchPatch() {
        const instrumentation = this;
        return (original)=>{
            return function sendBatch(...args) {
                const batch = args[0];
                const messages = batch.topicMessages || [];
                const spans = messages.map((topicMessage)=>topicMessage.messages.map((message)=>instrumentation._startProducerSpan(topicMessage.topic, message))).reduce((acc, val)=>acc.concat(val), []);
                const origSendResult = original.apply(this, args);
                return instrumentation._endSpansOnPromise(spans, origSendResult);
            };
        };
    }
    _getProducerSendPatch() {
        const instrumentation = this;
        return (original)=>{
            return function send(...args) {
                const record = args[0];
                const spans = record.messages.map((message)=>{
                    return instrumentation._startProducerSpan(record.topic, message);
                });
                const origSendResult = original.apply(this, args);
                return instrumentation._endSpansOnPromise(spans, origSendResult);
            };
        };
    }
    _endSpansOnPromise(spans, sendPromise) {
        return Promise.resolve(sendPromise).catch((reason)=>{
            let errorMessage;
            if (typeof reason === 'string') errorMessage = reason;
            else if (typeof reason === 'object' && Object.prototype.hasOwnProperty.call(reason, 'message')) errorMessage = reason.message;
            spans.forEach((span)=>span.setStatus({
                    code: api_1.SpanStatusCode.ERROR,
                    message: errorMessage
                }));
            throw reason;
        }).finally(()=>{
            spans.forEach((span)=>span.end());
        });
    }
    _startConsumerSpan(topic, message, operation, context, link) {
        const span = this.tracer.startSpan(topic, {
            kind: api_1.SpanKind.CONSUMER,
            attributes: {
                [semantic_conventions_1.SEMATTRS_MESSAGING_SYSTEM]: 'kafka',
                [semantic_conventions_1.SEMATTRS_MESSAGING_DESTINATION]: topic,
                [semantic_conventions_1.SEMATTRS_MESSAGING_OPERATION]: operation
            },
            links: link ? [
                link
            ] : []
        }, context);
        const { consumerHook } = this.getConfig();
        if (consumerHook && message) {
            (0, instrumentation_1.safeExecuteInTheMiddle)(()=>consumerHook(span, {
                    topic,
                    message
                }), (e)=>{
                if (e) this._diag.error('consumerHook error', e);
            }, true);
        }
        return span;
    }
    _startProducerSpan(topic, message) {
        var _a;
        const span = this.tracer.startSpan(topic, {
            kind: api_1.SpanKind.PRODUCER,
            attributes: {
                [semantic_conventions_1.SEMATTRS_MESSAGING_SYSTEM]: 'kafka',
                [semantic_conventions_1.SEMATTRS_MESSAGING_DESTINATION]: topic
            }
        });
        message.headers = (_a = message.headers) !== null && _a !== void 0 ? _a : {};
        api_1.propagation.inject(api_1.trace.setSpan(api_1.context.active(), span), message.headers);
        const { producerHook } = this.getConfig();
        if (producerHook) {
            (0, instrumentation_1.safeExecuteInTheMiddle)(()=>producerHook(span, {
                    topic,
                    message
                }), (e)=>{
                if (e) this._diag.error('producerHook error', e);
            }, true);
        }
        return span;
    }
}
exports.KafkaJsInstrumentation = KafkaJsInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
/*
 * Copyright The OpenTelemetry Authors, Aspecto
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-kafkajs/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.44.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-lru-memoizer'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LruMemoizerInstrumentation = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/build/src/version.js [instrumentation] (ecmascript)");
class LruMemoizerInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('lru-memoizer', [
                '>=1.3 <3'
            ], (moduleExports)=>{
                // moduleExports is a function which receives an options object,
                // and returns a "memoizer" function upon invocation.
                // We want to patch this "memoizer's" internal function
                const asyncMemoizer = function() {
                    // This following function is invoked every time the user wants to get a (possible) memoized value
                    // We replace it with another function in which we bind the current context to the last argument (callback)
                    const origMemoizer = moduleExports.apply(this, arguments);
                    return function() {
                        const modifiedArguments = [
                            ...arguments
                        ];
                        // last argument is the callback
                        const origCallback = modifiedArguments.pop();
                        const callbackWithContext = typeof origCallback === 'function' ? api_1.context.bind(api_1.context.active(), origCallback) : origCallback;
                        modifiedArguments.push(callbackWithContext);
                        return origMemoizer.apply(this, modifiedArguments);
                    };
                };
                // sync function preserves context, but we still need to export it
                // as the lru-memoizer package does
                asyncMemoizer.sync = moduleExports.sync;
                return asyncMemoizer;
            }, undefined // no need to disable as this instrumentation does not create any spans
            )
        ];
    }
}
exports.LruMemoizerInstrumentation = LruMemoizerInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-lru-memoizer/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MongodbCommandType = void 0;
var MongodbCommandType;
(function(MongodbCommandType) {
    MongodbCommandType["CREATE_INDEXES"] = "createIndexes";
    MongodbCommandType["FIND_AND_MODIFY"] = "findAndModify";
    MongodbCommandType["IS_MASTER"] = "isMaster";
    MongodbCommandType["COUNT"] = "count";
    MongodbCommandType["AGGREGATE"] = "aggregate";
    MongodbCommandType["UNKNOWN"] = "unknown";
})(MongodbCommandType = exports.MongodbCommandType || (exports.MongodbCommandType = {})); //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.52.0';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-mongodb'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MongoDBInstrumentation = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/internal-types.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/version.js [instrumentation] (ecmascript)");
const DEFAULT_CONFIG = {
    requireParentSpan: true
};
/** mongodb instrumentation plugin for OpenTelemetry */ class MongoDBInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    setConfig(config = {}) {
        super.setConfig(Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    _updateMetricInstruments() {
        this._connectionsUsage = this.meter.createUpDownCounter('db.client.connections.usage', {
            description: 'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}'
        });
    }
    init() {
        const { v3PatchConnection: v3PatchConnection, v3UnpatchConnection: v3UnpatchConnection } = this._getV3ConnectionPatches();
        const { v4PatchConnect, v4UnpatchConnect } = this._getV4ConnectPatches();
        const { v4PatchConnectionCallback, v4PatchConnectionPromise, v4UnpatchConnection } = this._getV4ConnectionPatches();
        const { v4PatchConnectionPool, v4UnpatchConnectionPool } = this._getV4ConnectionPoolPatches();
        const { v4PatchSessions, v4UnpatchSessions } = this._getV4SessionsPatches();
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('mongodb', [
                '>=3.3.0 <4'
            ], undefined, undefined, [
                new instrumentation_1.InstrumentationNodeModuleFile('mongodb/lib/core/wireprotocol/index.js', [
                    '>=3.3.0 <4'
                ], v3PatchConnection, v3UnpatchConnection)
            ]),
            new instrumentation_1.InstrumentationNodeModuleDefinition('mongodb', [
                '>=4.0.0 <7'
            ], undefined, undefined, [
                new instrumentation_1.InstrumentationNodeModuleFile('mongodb/lib/cmap/connection.js', [
                    '>=4.0.0 <6.4'
                ], v4PatchConnectionCallback, v4UnpatchConnection),
                new instrumentation_1.InstrumentationNodeModuleFile('mongodb/lib/cmap/connection.js', [
                    '>=6.4.0 <7'
                ], v4PatchConnectionPromise, v4UnpatchConnection),
                new instrumentation_1.InstrumentationNodeModuleFile('mongodb/lib/cmap/connection_pool.js', [
                    '>=4.0.0 <6.4'
                ], v4PatchConnectionPool, v4UnpatchConnectionPool),
                new instrumentation_1.InstrumentationNodeModuleFile('mongodb/lib/cmap/connect.js', [
                    '>=4.0.0 <7'
                ], v4PatchConnect, v4UnpatchConnect),
                new instrumentation_1.InstrumentationNodeModuleFile('mongodb/lib/sessions.js', [
                    '>=4.0.0 <7'
                ], v4PatchSessions, v4UnpatchSessions)
            ])
        ];
    }
    _getV3ConnectionPatches() {
        return {
            v3PatchConnection: (moduleExports)=>{
                // patch insert operation
                if ((0, instrumentation_1.isWrapped)(moduleExports.insert)) {
                    this._unwrap(moduleExports, 'insert');
                }
                this._wrap(moduleExports, 'insert', this._getV3PatchOperation('insert'));
                // patch remove operation
                if ((0, instrumentation_1.isWrapped)(moduleExports.remove)) {
                    this._unwrap(moduleExports, 'remove');
                }
                this._wrap(moduleExports, 'remove', this._getV3PatchOperation('remove'));
                // patch update operation
                if ((0, instrumentation_1.isWrapped)(moduleExports.update)) {
                    this._unwrap(moduleExports, 'update');
                }
                this._wrap(moduleExports, 'update', this._getV3PatchOperation('update'));
                // patch other command
                if ((0, instrumentation_1.isWrapped)(moduleExports.command)) {
                    this._unwrap(moduleExports, 'command');
                }
                this._wrap(moduleExports, 'command', this._getV3PatchCommand());
                // patch query
                if ((0, instrumentation_1.isWrapped)(moduleExports.query)) {
                    this._unwrap(moduleExports, 'query');
                }
                this._wrap(moduleExports, 'query', this._getV3PatchFind());
                // patch get more operation on cursor
                if ((0, instrumentation_1.isWrapped)(moduleExports.getMore)) {
                    this._unwrap(moduleExports, 'getMore');
                }
                this._wrap(moduleExports, 'getMore', this._getV3PatchCursor());
                return moduleExports;
            },
            v3UnpatchConnection: (moduleExports)=>{
                if (moduleExports === undefined) return;
                this._unwrap(moduleExports, 'insert');
                this._unwrap(moduleExports, 'remove');
                this._unwrap(moduleExports, 'update');
                this._unwrap(moduleExports, 'command');
                this._unwrap(moduleExports, 'query');
                this._unwrap(moduleExports, 'getMore');
            }
        };
    }
    _getV4SessionsPatches() {
        return {
            v4PatchSessions: (moduleExports)=>{
                if ((0, instrumentation_1.isWrapped)(moduleExports.acquire)) {
                    this._unwrap(moduleExports, 'acquire');
                }
                this._wrap(moduleExports.ServerSessionPool.prototype, 'acquire', this._getV4AcquireCommand());
                if ((0, instrumentation_1.isWrapped)(moduleExports.release)) {
                    this._unwrap(moduleExports, 'release');
                }
                this._wrap(moduleExports.ServerSessionPool.prototype, 'release', this._getV4ReleaseCommand());
                return moduleExports;
            },
            v4UnpatchSessions: (moduleExports)=>{
                if (moduleExports === undefined) return;
                if ((0, instrumentation_1.isWrapped)(moduleExports.acquire)) {
                    this._unwrap(moduleExports, 'acquire');
                }
                if ((0, instrumentation_1.isWrapped)(moduleExports.release)) {
                    this._unwrap(moduleExports, 'release');
                }
            }
        };
    }
    _getV4AcquireCommand() {
        const instrumentation = this;
        return (original)=>{
            return function patchAcquire() {
                const nSessionsBeforeAcquire = this.sessions.length;
                const session = original.call(this);
                const nSessionsAfterAcquire = this.sessions.length;
                if (nSessionsBeforeAcquire === nSessionsAfterAcquire) {
                    //no session in the pool. a new session was created and used
                    instrumentation._connectionsUsage.add(1, {
                        state: 'used',
                        'pool.name': instrumentation._poolName
                    });
                } else if (nSessionsBeforeAcquire - 1 === nSessionsAfterAcquire) {
                    //a session was already in the pool. remove it from the pool and use it.
                    instrumentation._connectionsUsage.add(-1, {
                        state: 'idle',
                        'pool.name': instrumentation._poolName
                    });
                    instrumentation._connectionsUsage.add(1, {
                        state: 'used',
                        'pool.name': instrumentation._poolName
                    });
                }
                return session;
            };
        };
    }
    _getV4ReleaseCommand() {
        const instrumentation = this;
        return (original)=>{
            return function patchRelease(session) {
                const cmdPromise = original.call(this, session);
                instrumentation._connectionsUsage.add(-1, {
                    state: 'used',
                    'pool.name': instrumentation._poolName
                });
                instrumentation._connectionsUsage.add(1, {
                    state: 'idle',
                    'pool.name': instrumentation._poolName
                });
                return cmdPromise;
            };
        };
    }
    _getV4ConnectionPoolPatches() {
        return {
            v4PatchConnectionPool: (moduleExports)=>{
                const poolPrototype = moduleExports.ConnectionPool.prototype;
                if ((0, instrumentation_1.isWrapped)(poolPrototype.checkOut)) {
                    this._unwrap(poolPrototype, 'checkOut');
                }
                this._wrap(poolPrototype, 'checkOut', this._getV4ConnectionPoolCheckOut());
                return moduleExports;
            },
            v4UnpatchConnectionPool: (moduleExports)=>{
                if (moduleExports === undefined) return;
                this._unwrap(moduleExports.ConnectionPool.prototype, 'checkOut');
            }
        };
    }
    _getV4ConnectPatches() {
        return {
            v4PatchConnect: (moduleExports)=>{
                if ((0, instrumentation_1.isWrapped)(moduleExports.connect)) {
                    this._unwrap(moduleExports, 'connect');
                }
                this._wrap(moduleExports, 'connect', this._getV4ConnectCommand());
                return moduleExports;
            },
            v4UnpatchConnect: (moduleExports)=>{
                if (moduleExports === undefined) return;
                this._unwrap(moduleExports, 'connect');
            }
        };
    }
    // This patch will become unnecessary once
    // https://jira.mongodb.org/browse/NODE-5639 is done.
    _getV4ConnectionPoolCheckOut() {
        return (original)=>{
            return function patchedCheckout(callback) {
                const patchedCallback = api_1.context.bind(api_1.context.active(), callback);
                return original.call(this, patchedCallback);
            };
        };
    }
    _getV4ConnectCommand() {
        const instrumentation = this;
        return (original)=>{
            return function patchedConnect(options, callback) {
                // from v6.4 `connect` method only accepts an options param and returns a promise
                // with the connection
                if (original.length === 1) {
                    const result = original.call(this, options);
                    if (result && typeof result.then === 'function') {
                        result.then(()=>instrumentation.setPoolName(options), // this handler is set to pass the lint rules
                        ()=>undefined);
                    }
                    return result;
                }
                // Earlier versions expects a callback param and return void
                const patchedCallback = function(err, conn) {
                    if (err || !conn) {
                        callback(err, conn);
                        return;
                    }
                    instrumentation.setPoolName(options);
                    callback(err, conn);
                };
                return original.call(this, options, patchedCallback);
            };
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _getV4ConnectionPatches() {
        return {
            v4PatchConnectionCallback: (moduleExports)=>{
                // patch insert operation
                if ((0, instrumentation_1.isWrapped)(moduleExports.Connection.prototype.command)) {
                    this._unwrap(moduleExports.Connection.prototype, 'command');
                }
                this._wrap(moduleExports.Connection.prototype, 'command', this._getV4PatchCommandCallback());
                return moduleExports;
            },
            v4PatchConnectionPromise: (moduleExports)=>{
                // patch insert operation
                if ((0, instrumentation_1.isWrapped)(moduleExports.Connection.prototype.command)) {
                    this._unwrap(moduleExports.Connection.prototype, 'command');
                }
                this._wrap(moduleExports.Connection.prototype, 'command', this._getV4PatchCommandPromise());
                return moduleExports;
            },
            v4UnpatchConnection: (moduleExports)=>{
                if (moduleExports === undefined) return;
                this._unwrap(moduleExports.Connection.prototype, 'command');
            }
        };
    }
    /** Creates spans for common operations */ _getV3PatchOperation(operationName) {
        const instrumentation = this;
        return (original)=>{
            return function patchedServerCommand(server, ns, ops, options, callback) {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
                const resultHandler = typeof options === 'function' ? options : callback;
                if (skipInstrumentation || typeof resultHandler !== 'function' || typeof ops !== 'object') {
                    if (typeof options === 'function') {
                        return original.call(this, server, ns, ops, options);
                    } else {
                        return original.call(this, server, ns, ops, options, callback);
                    }
                }
                const span = instrumentation.tracer.startSpan(`mongodb.${operationName}`, {
                    kind: api_1.SpanKind.CLIENT
                });
                instrumentation._populateV3Attributes(span, ns, server, // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ops[0], operationName);
                const patchedCallback = instrumentation._patchEnd(span, resultHandler);
                // handle when options is the callback to send the correct number of args
                if (typeof options === 'function') {
                    return original.call(this, server, ns, ops, patchedCallback);
                } else {
                    return original.call(this, server, ns, ops, options, patchedCallback);
                }
            };
        };
    }
    /** Creates spans for command operation */ _getV3PatchCommand() {
        const instrumentation = this;
        return (original)=>{
            return function patchedServerCommand(server, ns, cmd, options, callback) {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
                const resultHandler = typeof options === 'function' ? options : callback;
                if (skipInstrumentation || typeof resultHandler !== 'function' || typeof cmd !== 'object') {
                    if (typeof options === 'function') {
                        return original.call(this, server, ns, cmd, options);
                    } else {
                        return original.call(this, server, ns, cmd, options, callback);
                    }
                }
                const commandType = MongoDBInstrumentation._getCommandType(cmd);
                const type = commandType === internal_types_1.MongodbCommandType.UNKNOWN ? 'command' : commandType;
                const span = instrumentation.tracer.startSpan(`mongodb.${type}`, {
                    kind: api_1.SpanKind.CLIENT
                });
                const operation = commandType === internal_types_1.MongodbCommandType.UNKNOWN ? undefined : commandType;
                instrumentation._populateV3Attributes(span, ns, server, cmd, operation);
                const patchedCallback = instrumentation._patchEnd(span, resultHandler);
                // handle when options is the callback to send the correct number of args
                if (typeof options === 'function') {
                    return original.call(this, server, ns, cmd, patchedCallback);
                } else {
                    return original.call(this, server, ns, cmd, options, patchedCallback);
                }
            };
        };
    }
    /** Creates spans for command operation */ _getV4PatchCommandCallback() {
        const instrumentation = this;
        return (original)=>{
            return function patchedV4ServerCommand(ns, cmd, options, callback) {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
                const resultHandler = callback;
                const commandType = Object.keys(cmd)[0];
                if (typeof cmd !== 'object' || cmd.ismaster || cmd.hello) {
                    return original.call(this, ns, cmd, options, callback);
                }
                let span = undefined;
                if (!skipInstrumentation) {
                    span = instrumentation.tracer.startSpan(`mongodb.${commandType}`, {
                        kind: api_1.SpanKind.CLIENT
                    });
                    instrumentation._populateV4Attributes(span, this, ns, cmd, commandType);
                }
                const patchedCallback = instrumentation._patchEnd(span, resultHandler, this.id, commandType);
                return original.call(this, ns, cmd, options, patchedCallback);
            };
        };
    }
    _getV4PatchCommandPromise() {
        const instrumentation = this;
        return (original)=>{
            return function patchedV4ServerCommand(...args) {
                const [ns, cmd] = args;
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
                const commandType = Object.keys(cmd)[0];
                const resultHandler = ()=>undefined;
                if (typeof cmd !== 'object' || cmd.ismaster || cmd.hello) {
                    return original.apply(this, args);
                }
                let span = undefined;
                if (!skipInstrumentation) {
                    span = instrumentation.tracer.startSpan(`mongodb.${commandType}`, {
                        kind: api_1.SpanKind.CLIENT
                    });
                    instrumentation._populateV4Attributes(span, this, ns, cmd, commandType);
                }
                const patchedCallback = instrumentation._patchEnd(span, resultHandler, this.id, commandType);
                const result = original.apply(this, args);
                result.then((res)=>patchedCallback(null, res), (err)=>patchedCallback(err));
                return result;
            };
        };
    }
    /** Creates spans for find operation */ _getV3PatchFind() {
        const instrumentation = this;
        return (original)=>{
            return function patchedServerCommand(server, ns, cmd, cursorState, options, callback) {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
                const resultHandler = typeof options === 'function' ? options : callback;
                if (skipInstrumentation || typeof resultHandler !== 'function' || typeof cmd !== 'object') {
                    if (typeof options === 'function') {
                        return original.call(this, server, ns, cmd, cursorState, options);
                    } else {
                        return original.call(this, server, ns, cmd, cursorState, options, callback);
                    }
                }
                const span = instrumentation.tracer.startSpan('mongodb.find', {
                    kind: api_1.SpanKind.CLIENT
                });
                instrumentation._populateV3Attributes(span, ns, server, cmd, 'find');
                const patchedCallback = instrumentation._patchEnd(span, resultHandler);
                // handle when options is the callback to send the correct number of args
                if (typeof options === 'function') {
                    return original.call(this, server, ns, cmd, cursorState, patchedCallback);
                } else {
                    return original.call(this, server, ns, cmd, cursorState, options, patchedCallback);
                }
            };
        };
    }
    /** Creates spans for find operation */ _getV3PatchCursor() {
        const instrumentation = this;
        return (original)=>{
            return function patchedServerCommand(server, ns, cursorState, batchSize, options, callback) {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const skipInstrumentation = instrumentation._checkSkipInstrumentation(currentSpan);
                const resultHandler = typeof options === 'function' ? options : callback;
                if (skipInstrumentation || typeof resultHandler !== 'function') {
                    if (typeof options === 'function') {
                        return original.call(this, server, ns, cursorState, batchSize, options);
                    } else {
                        return original.call(this, server, ns, cursorState, batchSize, options, callback);
                    }
                }
                const span = instrumentation.tracer.startSpan('mongodb.getMore', {
                    kind: api_1.SpanKind.CLIENT
                });
                instrumentation._populateV3Attributes(span, ns, server, cursorState.cmd, 'getMore');
                const patchedCallback = instrumentation._patchEnd(span, resultHandler);
                // handle when options is the callback to send the correct number of args
                if (typeof options === 'function') {
                    return original.call(this, server, ns, cursorState, batchSize, patchedCallback);
                } else {
                    return original.call(this, server, ns, cursorState, batchSize, options, patchedCallback);
                }
            };
        };
    }
    /**
     * Get the mongodb command type from the object.
     * @param command Internal mongodb command object
     */ static _getCommandType(command) {
        if (command.createIndexes !== undefined) {
            return internal_types_1.MongodbCommandType.CREATE_INDEXES;
        } else if (command.findandmodify !== undefined) {
            return internal_types_1.MongodbCommandType.FIND_AND_MODIFY;
        } else if (command.ismaster !== undefined) {
            return internal_types_1.MongodbCommandType.IS_MASTER;
        } else if (command.count !== undefined) {
            return internal_types_1.MongodbCommandType.COUNT;
        } else if (command.aggregate !== undefined) {
            return internal_types_1.MongodbCommandType.AGGREGATE;
        } else {
            return internal_types_1.MongodbCommandType.UNKNOWN;
        }
    }
    /**
     * Populate span's attributes by fetching related metadata from the context
     * @param span span to add attributes to
     * @param connectionCtx mongodb internal connection context
     * @param ns mongodb namespace
     * @param command mongodb internal representation of a command
     */ _populateV4Attributes(span, connectionCtx, ns, command, operation) {
        let host, port;
        if (connectionCtx) {
            const hostParts = typeof connectionCtx.address === 'string' ? connectionCtx.address.split(':') : '';
            if (hostParts.length === 2) {
                host = hostParts[0];
                port = hostParts[1];
            }
        }
        // capture parameters within the query as well if enhancedDatabaseReporting is enabled.
        let commandObj;
        if ((command === null || command === void 0 ? void 0 : command.documents) && command.documents[0]) {
            commandObj = command.documents[0];
        } else if (command === null || command === void 0 ? void 0 : command.cursors) {
            commandObj = command.cursors;
        } else {
            commandObj = command;
        }
        this._addAllSpanAttributes(span, ns.db, ns.collection, host, port, commandObj, operation);
    }
    /**
     * Populate span's attributes by fetching related metadata from the context
     * @param span span to add attributes to
     * @param ns mongodb namespace
     * @param topology mongodb internal representation of the network topology
     * @param command mongodb internal representation of a command
     */ _populateV3Attributes(span, ns, topology, command, operation) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // add network attributes to determine the remote server
        let host;
        let port;
        if (topology && topology.s) {
            host = (_b = (_a = topology.s.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : topology.s.host;
            port = (_e = (_d = (_c = topology.s.options) === null || _c === void 0 ? void 0 : _c.port) !== null && _d !== void 0 ? _d : topology.s.port) === null || _e === void 0 ? void 0 : _e.toString();
            if (host == null || port == null) {
                const address = (_f = topology.description) === null || _f === void 0 ? void 0 : _f.address;
                if (address) {
                    const addressSegments = address.split(':');
                    host = addressSegments[0];
                    port = addressSegments[1];
                }
            }
        }
        // The namespace is a combination of the database name and the name of the
        // collection or index, like so: [database-name].[collection-or-index-name].
        // It could be a string or an instance of MongoDBNamespace, as such we
        // always coerce to a string to extract db and collection.
        const [dbName, dbCollection] = ns.toString().split('.');
        // capture parameters within the query as well if enhancedDatabaseReporting is enabled.
        const commandObj = (_h = (_g = command === null || command === void 0 ? void 0 : command.query) !== null && _g !== void 0 ? _g : command === null || command === void 0 ? void 0 : command.q) !== null && _h !== void 0 ? _h : command;
        this._addAllSpanAttributes(span, dbName, dbCollection, host, port, commandObj, operation);
    }
    _addAllSpanAttributes(span, dbName, dbCollection, host, port, commandObj, operation) {
        // add database related attributes
        span.setAttributes({
            [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_MONGODB,
            [semantic_conventions_1.SEMATTRS_DB_NAME]: dbName,
            [semantic_conventions_1.SEMATTRS_DB_MONGODB_COLLECTION]: dbCollection,
            [semantic_conventions_1.SEMATTRS_DB_OPERATION]: operation,
            [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: `mongodb://${host}:${port}/${dbName}`
        });
        if (host && port) {
            span.setAttribute(semantic_conventions_1.SEMATTRS_NET_PEER_NAME, host);
            const portNumber = parseInt(port, 10);
            if (!isNaN(portNumber)) {
                span.setAttribute(semantic_conventions_1.SEMATTRS_NET_PEER_PORT, portNumber);
            }
        }
        if (!commandObj) return;
        const { dbStatementSerializer: configDbStatementSerializer } = this.getConfig();
        const dbStatementSerializer = typeof configDbStatementSerializer === 'function' ? configDbStatementSerializer : this._defaultDbStatementSerializer.bind(this);
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            const query = dbStatementSerializer(commandObj);
            span.setAttribute(semantic_conventions_1.SEMATTRS_DB_STATEMENT, query);
        }, (err)=>{
            if (err) {
                this._diag.error('Error running dbStatementSerializer hook', err);
            }
        }, true);
    }
    _defaultDbStatementSerializer(commandObj) {
        const { enhancedDatabaseReporting } = this.getConfig();
        const resultObj = enhancedDatabaseReporting ? commandObj : this._scrubStatement(commandObj);
        return JSON.stringify(resultObj);
    }
    _scrubStatement(value) {
        if (Array.isArray(value)) {
            return value.map((element)=>this._scrubStatement(element));
        }
        if (typeof value === 'object' && value !== null) {
            return Object.fromEntries(Object.entries(value).map(([key, element])=>[
                    key,
                    this._scrubStatement(element)
                ]));
        }
        // A value like string or number, possible contains PII, scrub it
        return '?';
    }
    /**
     * Triggers the response hook in case it is defined.
     * @param span The span to add the results to.
     * @param result The command result
     */ _handleExecutionResult(span, result) {
        const { responseHook } = this.getConfig();
        if (typeof responseHook === 'function') {
            (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                responseHook(span, {
                    data: result
                });
            }, (err)=>{
                if (err) {
                    this._diag.error('Error running response hook', err);
                }
            }, true);
        }
    }
    /**
     * Ends a created span.
     * @param span The created span to end.
     * @param resultHandler A callback function.
     * @param connectionId: The connection ID of the Command response.
     */ _patchEnd(span, resultHandler, connectionId, commandType) {
        // mongodb is using "tick" when calling a callback, this way the context
        // in final callback (resultHandler) is lost
        const activeContext = api_1.context.active();
        const instrumentation = this;
        return function patchedEnd(...args) {
            const error = args[0];
            if (span) {
                if (error instanceof Error) {
                    span === null || span === void 0 ? void 0 : span.setStatus({
                        code: api_1.SpanStatusCode.ERROR,
                        message: error.message
                    });
                } else {
                    const result = args[1];
                    instrumentation._handleExecutionResult(span, result);
                }
                span.end();
            }
            return api_1.context.with(activeContext, ()=>{
                if (commandType === 'endSessions') {
                    instrumentation._connectionsUsage.add(-1, {
                        state: 'idle',
                        'pool.name': instrumentation._poolName
                    });
                }
                return resultHandler.apply(this, args);
            });
        };
    }
    setPoolName(options) {
        var _a, _b;
        const host = (_a = options.hostAddress) === null || _a === void 0 ? void 0 : _a.host;
        const port = (_b = options.hostAddress) === null || _b === void 0 ? void 0 : _b.port;
        const database = options.dbName;
        const poolName = `mongodb://${host}:${port}/${database}`;
        this._poolName = poolName;
    }
    _checkSkipInstrumentation(currentSpan) {
        const requireParentSpan = this.getConfig().requireParentSpan;
        const hasNoParentSpan = currentSpan === undefined;
        return requireParentSpan === true && hasNoParentSpan;
    }
}
exports.MongoDBInstrumentation = MongoDBInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MongodbCommandType = void 0;
var MongodbCommandType;
(function(MongodbCommandType) {
    MongodbCommandType["CREATE_INDEXES"] = "createIndexes";
    MongodbCommandType["FIND_AND_MODIFY"] = "findAndModify";
    MongodbCommandType["IS_MASTER"] = "isMaster";
    MongodbCommandType["COUNT"] = "count";
    MongodbCommandType["UNKNOWN"] = "unknown";
})(MongodbCommandType = exports.MongodbCommandType || (exports.MongodbCommandType = {})); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongodb/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleCallbackResponse = exports.handlePromiseResponse = exports.getAttributesFromCollection = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
function getAttributesFromCollection(collection) {
    return {
        [semantic_conventions_1.SEMATTRS_DB_MONGODB_COLLECTION]: collection.name,
        [semantic_conventions_1.SEMATTRS_DB_NAME]: collection.conn.name,
        [semantic_conventions_1.SEMATTRS_DB_USER]: collection.conn.user,
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: collection.conn.host,
        [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: collection.conn.port
    };
}
exports.getAttributesFromCollection = getAttributesFromCollection;
function setErrorStatus(span, error = {}) {
    span.recordException(error);
    span.setStatus({
        code: api_1.SpanStatusCode.ERROR,
        message: `${error.message} ${error.code ? `\nMongoose Error Code: ${error.code}` : ''}`
    });
}
function applyResponseHook(span, response, responseHook, moduleVersion = undefined) {
    if (!responseHook) {
        return;
    }
    (0, instrumentation_1.safeExecuteInTheMiddle)(()=>responseHook(span, {
            moduleVersion,
            response
        }), (e)=>{
        if (e) {
            api_1.diag.error('mongoose instrumentation: responseHook error', e);
        }
    }, true);
}
function handlePromiseResponse(execResponse, span, responseHook, moduleVersion = undefined) {
    if (!(execResponse instanceof Promise)) {
        applyResponseHook(span, execResponse, responseHook, moduleVersion);
        span.end();
        return execResponse;
    }
    return execResponse.then((response)=>{
        applyResponseHook(span, response, responseHook, moduleVersion);
        return response;
    }).catch((err)=>{
        setErrorStatus(span, err);
        throw err;
    }).finally(()=>span.end());
}
exports.handlePromiseResponse = handlePromiseResponse;
function handleCallbackResponse(callback, exec, originalThis, span, args, responseHook, moduleVersion = undefined) {
    let callbackArgumentIndex = 0;
    if (args.length === 2) {
        callbackArgumentIndex = 1;
    }
    args[callbackArgumentIndex] = (err, response)=>{
        err ? setErrorStatus(span, err) : applyResponseHook(span, response, responseHook, moduleVersion);
        span.end();
        return callback(err, response);
    };
    return exec.apply(originalThis, args);
}
exports.handleCallbackResponse = handleCallbackResponse; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.46.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-mongoose'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/mongoose.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MongooseInstrumentation = exports._STORED_PARENT_SPAN = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/utils.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/version.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const contextCaptureFunctionsCommon = [
    'deleteOne',
    'deleteMany',
    'find',
    'findOne',
    'estimatedDocumentCount',
    'countDocuments',
    'distinct',
    'where',
    '$where',
    'findOneAndUpdate',
    'findOneAndDelete',
    'findOneAndReplace'
];
const contextCaptureFunctions6 = [
    'remove',
    'count',
    'findOneAndRemove',
    ...contextCaptureFunctionsCommon
];
const contextCaptureFunctions7 = [
    'count',
    'findOneAndRemove',
    ...contextCaptureFunctionsCommon
];
const contextCaptureFunctions8 = [
    ...contextCaptureFunctionsCommon
];
function getContextCaptureFunctions(moduleVersion) {
    /* istanbul ignore next */ if (!moduleVersion) {
        return contextCaptureFunctionsCommon;
    } else if (moduleVersion.startsWith('6.') || moduleVersion.startsWith('5.')) {
        return contextCaptureFunctions6;
    } else if (moduleVersion.startsWith('7.')) {
        return contextCaptureFunctions7;
    } else {
        return contextCaptureFunctions8;
    }
}
function instrumentRemove(moduleVersion) {
    return moduleVersion && (moduleVersion.startsWith('5.') || moduleVersion.startsWith('6.')) || false;
}
// when mongoose functions are called, we store the original call context
// and then set it as the parent for the spans created by Query/Aggregate exec()
// calls. this bypass the unlinked spans issue on thenables await operations.
exports._STORED_PARENT_SPAN = Symbol('stored-parent-span');
class MongooseInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition('mongoose', [
            '>=5.9.7 <9'
        ], this.patch.bind(this), this.unpatch.bind(this));
        return module;
    }
    patch(moduleExports, moduleVersion) {
        this._wrap(moduleExports.Model.prototype, 'save', this.patchOnModelMethods('save', moduleVersion));
        // mongoose applies this code on module require:
        // Model.prototype.$save = Model.prototype.save;
        // which captures the save function before it is patched.
        // so we need to apply the same logic after instrumenting the save function.
        moduleExports.Model.prototype.$save = moduleExports.Model.prototype.save;
        if (instrumentRemove(moduleVersion)) {
            this._wrap(moduleExports.Model.prototype, 'remove', this.patchOnModelMethods('remove', moduleVersion));
        }
        this._wrap(moduleExports.Query.prototype, 'exec', this.patchQueryExec(moduleVersion));
        this._wrap(moduleExports.Aggregate.prototype, 'exec', this.patchAggregateExec(moduleVersion));
        const contextCaptureFunctions = getContextCaptureFunctions(moduleVersion);
        contextCaptureFunctions.forEach((funcName)=>{
            this._wrap(moduleExports.Query.prototype, funcName, this.patchAndCaptureSpanContext(funcName));
        });
        this._wrap(moduleExports.Model, 'aggregate', this.patchModelAggregate());
        return moduleExports;
    }
    unpatch(moduleExports, moduleVersion) {
        const contextCaptureFunctions = getContextCaptureFunctions(moduleVersion);
        this._unwrap(moduleExports.Model.prototype, 'save');
        // revert the patch for $save which we applied by aliasing it to patched `save`
        moduleExports.Model.prototype.$save = moduleExports.Model.prototype.save;
        if (instrumentRemove(moduleVersion)) {
            this._unwrap(moduleExports.Model.prototype, 'remove');
        }
        this._unwrap(moduleExports.Query.prototype, 'exec');
        this._unwrap(moduleExports.Aggregate.prototype, 'exec');
        contextCaptureFunctions.forEach((funcName)=>{
            this._unwrap(moduleExports.Query.prototype, funcName);
        });
        this._unwrap(moduleExports.Model, 'aggregate');
    }
    patchAggregateExec(moduleVersion) {
        const self = this;
        return (originalAggregate)=>{
            return function exec(callback) {
                var _a;
                if (self.getConfig().requireParentSpan && api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return originalAggregate.apply(this, arguments);
                }
                const parentSpan = this[exports._STORED_PARENT_SPAN];
                const attributes = {};
                const { dbStatementSerializer } = self.getConfig();
                if (dbStatementSerializer) {
                    attributes[semantic_conventions_1.SEMATTRS_DB_STATEMENT] = dbStatementSerializer('aggregate', {
                        options: this.options,
                        aggregatePipeline: this._pipeline
                    });
                }
                const span = self._startSpan(this._model.collection, (_a = this._model) === null || _a === void 0 ? void 0 : _a.modelName, 'aggregate', attributes, parentSpan);
                return self._handleResponse(span, originalAggregate, this, arguments, callback, moduleVersion);
            };
        };
    }
    patchQueryExec(moduleVersion) {
        const self = this;
        return (originalExec)=>{
            return function exec(callback) {
                if (self.getConfig().requireParentSpan && api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return originalExec.apply(this, arguments);
                }
                const parentSpan = this[exports._STORED_PARENT_SPAN];
                const attributes = {};
                const { dbStatementSerializer } = self.getConfig();
                if (dbStatementSerializer) {
                    attributes[semantic_conventions_1.SEMATTRS_DB_STATEMENT] = dbStatementSerializer(this.op, {
                        condition: this._conditions,
                        updates: this._update,
                        options: this.options,
                        fields: this._fields
                    });
                }
                const span = self._startSpan(this.mongooseCollection, this.model.modelName, this.op, attributes, parentSpan);
                return self._handleResponse(span, originalExec, this, arguments, callback, moduleVersion);
            };
        };
    }
    patchOnModelMethods(op, moduleVersion) {
        const self = this;
        return (originalOnModelFunction)=>{
            return function method(options, callback) {
                if (self.getConfig().requireParentSpan && api_1.trace.getSpan(api_1.context.active()) === undefined) {
                    return originalOnModelFunction.apply(this, arguments);
                }
                const serializePayload = {
                    document: this
                };
                if (options && !(options instanceof Function)) {
                    serializePayload.options = options;
                }
                const attributes = {};
                const { dbStatementSerializer } = self.getConfig();
                if (dbStatementSerializer) {
                    attributes[semantic_conventions_1.SEMATTRS_DB_STATEMENT] = dbStatementSerializer(op, serializePayload);
                }
                const span = self._startSpan(this.constructor.collection, this.constructor.modelName, op, attributes);
                if (options instanceof Function) {
                    callback = options;
                    options = undefined;
                }
                return self._handleResponse(span, originalOnModelFunction, this, arguments, callback, moduleVersion);
            };
        };
    }
    // we want to capture the otel span on the object which is calling exec.
    // in the special case of aggregate, we need have no function to path
    // on the Aggregate object to capture the context on, so we patch
    // the aggregate of Model, and set the context on the Aggregate object
    patchModelAggregate() {
        const self = this;
        return (original)=>{
            return function captureSpanContext() {
                const currentSpan = api_1.trace.getSpan(api_1.context.active());
                const aggregate = self._callOriginalFunction(()=>original.apply(this, arguments));
                if (aggregate) aggregate[exports._STORED_PARENT_SPAN] = currentSpan;
                return aggregate;
            };
        };
    }
    patchAndCaptureSpanContext(funcName) {
        const self = this;
        return (original)=>{
            return function captureSpanContext() {
                this[exports._STORED_PARENT_SPAN] = api_1.trace.getSpan(api_1.context.active());
                return self._callOriginalFunction(()=>original.apply(this, arguments));
            };
        };
    }
    _startSpan(collection, modelName, operation, attributes, parentSpan) {
        return this.tracer.startSpan(`mongoose.${modelName}.${operation}`, {
            kind: api_1.SpanKind.CLIENT,
            attributes: Object.assign(Object.assign(Object.assign({}, attributes), (0, utils_1.getAttributesFromCollection)(collection)), {
                [semantic_conventions_1.SEMATTRS_DB_OPERATION]: operation,
                [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: 'mongoose'
            })
        }, parentSpan ? api_1.trace.setSpan(api_1.context.active(), parentSpan) : undefined);
    }
    _handleResponse(span, exec, originalThis, args, callback, moduleVersion = undefined) {
        const self = this;
        if (callback instanceof Function) {
            return self._callOriginalFunction(()=>(0, utils_1.handleCallbackResponse)(callback, exec, originalThis, span, args, self.getConfig().responseHook, moduleVersion));
        } else {
            const response = self._callOriginalFunction(()=>exec.apply(originalThis, args));
            return (0, utils_1.handlePromiseResponse)(response, span, self.getConfig().responseHook, moduleVersion);
        }
    }
    _callOriginalFunction(originalFunction) {
        if (this.getConfig().suppressInternalInstrumentation) {
            return api_1.context.with((0, core_1.suppressTracing)(api_1.context.active()), originalFunction);
        } else {
            return originalFunction();
        }
    }
}
exports.MongooseInstrumentation = MongooseInstrumentation; //# sourceMappingURL=mongoose.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
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
 */ __exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/mongoose.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mongoose/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
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
 */ // Mysql specific attributes not covered by semantic conventions
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["MYSQL_VALUES"] = "db.mysql.values";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPoolName = exports.arrayStringifyHelper = exports.getSpanName = exports.getDbValues = exports.getDbStatement = exports.getConnectionAttributes = void 0;
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
/**
 * Get an Attributes map from a mysql connection config object
 *
 * @param config ConnectionConfig
 */ function getConnectionAttributes(config) {
    const { host, port, database, user } = getConfig(config);
    const portNumber = parseInt(port, 10);
    if (!isNaN(portNumber)) {
        return {
            [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: host,
            [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: portNumber,
            [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: getJDBCString(host, port, database),
            [semantic_conventions_1.SEMATTRS_DB_NAME]: database,
            [semantic_conventions_1.SEMATTRS_DB_USER]: user
        };
    }
    return {
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: host,
        [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: getJDBCString(host, port, database),
        [semantic_conventions_1.SEMATTRS_DB_NAME]: database,
        [semantic_conventions_1.SEMATTRS_DB_USER]: user
    };
}
exports.getConnectionAttributes = getConnectionAttributes;
function getConfig(config) {
    const { host, port, database, user } = config && config.connectionConfig || config || {};
    return {
        host,
        port,
        database,
        user
    };
}
function getJDBCString(host, port, database) {
    let jdbcString = `jdbc:mysql://${host || 'localhost'}`;
    if (typeof port === 'number') {
        jdbcString += `:${port}`;
    }
    if (typeof database === 'string') {
        jdbcString += `/${database}`;
    }
    return jdbcString;
}
/**
 * @returns the database statement being executed.
 */ function getDbStatement(query) {
    if (typeof query === 'string') {
        return query;
    } else {
        return query.sql;
    }
}
exports.getDbStatement = getDbStatement;
function getDbValues(query, values) {
    if (typeof query === 'string') {
        return arrayStringifyHelper(values);
    } else {
        // According to https://github.com/mysqljs/mysql#performing-queries
        // The values argument will override the values in the option object.
        return arrayStringifyHelper(values || query.values);
    }
}
exports.getDbValues = getDbValues;
/**
 * The span name SHOULD be set to a low cardinality value
 * representing the statement executed on the database.
 *
 * @returns SQL statement without variable arguments or SQL verb
 */ function getSpanName(query) {
    const rawQuery = typeof query === 'object' ? query.sql : query;
    // Extract the SQL verb
    const firstSpace = rawQuery === null || rawQuery === void 0 ? void 0 : rawQuery.indexOf(' ');
    if (typeof firstSpace === 'number' && firstSpace !== -1) {
        return rawQuery === null || rawQuery === void 0 ? void 0 : rawQuery.substring(0, firstSpace);
    }
    return rawQuery;
}
exports.getSpanName = getSpanName;
function arrayStringifyHelper(arr) {
    if (arr) return `[${arr.toString()}]`;
    return '';
}
exports.arrayStringifyHelper = arrayStringifyHelper;
function getPoolName(pool) {
    const c = pool.config.connectionConfig;
    let poolName = '';
    poolName += c.host ? `host: '${c.host}', ` : '';
    poolName += c.port ? `port: ${c.port}, ` : '';
    poolName += c.database ? `database: '${c.database}', ` : '';
    poolName += c.user ? `user: '${c.user}'` : '';
    if (!c.user) {
        poolName = poolName.substring(0, poolName.length - 2); //omit last comma
    }
    return poolName.trim();
}
exports.getPoolName = getPoolName; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.45.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-mysql'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MySQLInstrumentation = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/AttributeNames.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/utils.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/version.js [instrumentation] (ecmascript)");
class MySQLInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
        this._setMetricInstruments();
    }
    setMeterProvider(meterProvider) {
        super.setMeterProvider(meterProvider);
        this._setMetricInstruments();
    }
    _setMetricInstruments() {
        this._connectionsUsage = this.meter.createUpDownCounter('db.client.connections.usage', {
            description: 'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}'
        });
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('mysql', [
                '>=2.0.0 <3'
            ], (moduleExports)=>{
                if ((0, instrumentation_1.isWrapped)(moduleExports.createConnection)) {
                    this._unwrap(moduleExports, 'createConnection');
                }
                this._wrap(moduleExports, 'createConnection', this._patchCreateConnection());
                if ((0, instrumentation_1.isWrapped)(moduleExports.createPool)) {
                    this._unwrap(moduleExports, 'createPool');
                }
                this._wrap(moduleExports, 'createPool', this._patchCreatePool());
                if ((0, instrumentation_1.isWrapped)(moduleExports.createPoolCluster)) {
                    this._unwrap(moduleExports, 'createPoolCluster');
                }
                this._wrap(moduleExports, 'createPoolCluster', this._patchCreatePoolCluster());
                return moduleExports;
            }, (moduleExports)=>{
                if (moduleExports === undefined) return;
                this._unwrap(moduleExports, 'createConnection');
                this._unwrap(moduleExports, 'createPool');
                this._unwrap(moduleExports, 'createPoolCluster');
            })
        ];
    }
    // global export function
    _patchCreateConnection() {
        return (originalCreateConnection)=>{
            const thisPlugin = this;
            return function createConnection(_connectionUri) {
                const originalResult = originalCreateConnection(...arguments);
                // This is unwrapped on next call after unpatch
                thisPlugin._wrap(originalResult, 'query', thisPlugin._patchQuery(originalResult));
                return originalResult;
            };
        };
    }
    // global export function
    _patchCreatePool() {
        return (originalCreatePool)=>{
            const thisPlugin = this;
            return function createPool(_config) {
                const pool = originalCreatePool(...arguments);
                thisPlugin._wrap(pool, 'query', thisPlugin._patchQuery(pool));
                thisPlugin._wrap(pool, 'getConnection', thisPlugin._patchGetConnection(pool));
                thisPlugin._wrap(pool, 'end', thisPlugin._patchPoolEnd(pool));
                thisPlugin._setPoolcallbacks(pool, thisPlugin, '');
                return pool;
            };
        };
    }
    _patchPoolEnd(pool) {
        return (originalPoolEnd)=>{
            const thisPlugin = this;
            return function end(callback) {
                const nAll = pool._allConnections.length;
                const nFree = pool._freeConnections.length;
                const nUsed = nAll - nFree;
                const poolName = (0, utils_1.getPoolName)(pool);
                thisPlugin._connectionsUsage.add(-nUsed, {
                    state: 'used',
                    name: poolName
                });
                thisPlugin._connectionsUsage.add(-nFree, {
                    state: 'idle',
                    name: poolName
                });
                originalPoolEnd.apply(pool, arguments);
            };
        };
    }
    // global export function
    _patchCreatePoolCluster() {
        return (originalCreatePoolCluster)=>{
            const thisPlugin = this;
            return function createPool(_config) {
                const cluster = originalCreatePoolCluster(...arguments);
                // This is unwrapped on next call after unpatch
                thisPlugin._wrap(cluster, 'getConnection', thisPlugin._patchGetConnection(cluster));
                thisPlugin._wrap(cluster, 'add', thisPlugin._patchAdd(cluster));
                return cluster;
            };
        };
    }
    _patchAdd(cluster) {
        return (originalAdd)=>{
            const thisPlugin = this;
            return function add(id, config) {
                // Unwrap if unpatch has been called
                if (!thisPlugin['_enabled']) {
                    thisPlugin._unwrap(cluster, 'add');
                    return originalAdd.apply(cluster, arguments);
                }
                originalAdd.apply(cluster, arguments);
                const nodes = cluster['_nodes'];
                if (nodes) {
                    const nodeId = typeof id === 'object' ? 'CLUSTER::' + cluster._lastId : String(id);
                    const pool = nodes[nodeId].pool;
                    thisPlugin._setPoolcallbacks(pool, thisPlugin, id);
                }
            };
        };
    }
    // method on cluster or pool
    _patchGetConnection(pool) {
        return (originalGetConnection)=>{
            const thisPlugin = this;
            return function getConnection(arg1, arg2, arg3) {
                // Unwrap if unpatch has been called
                if (!thisPlugin['_enabled']) {
                    thisPlugin._unwrap(pool, 'getConnection');
                    return originalGetConnection.apply(pool, arguments);
                }
                if (arguments.length === 1 && typeof arg1 === 'function') {
                    const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg1);
                    return originalGetConnection.call(pool, patchFn);
                }
                if (arguments.length === 2 && typeof arg2 === 'function') {
                    const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg2);
                    return originalGetConnection.call(pool, arg1, patchFn);
                }
                if (arguments.length === 3 && typeof arg3 === 'function') {
                    const patchFn = thisPlugin._getConnectionCallbackPatchFn(arg3);
                    return originalGetConnection.call(pool, arg1, arg2, patchFn);
                }
                return originalGetConnection.apply(pool, arguments);
            };
        };
    }
    _getConnectionCallbackPatchFn(cb) {
        const thisPlugin = this;
        const activeContext = api_1.context.active();
        return function(err, connection) {
            if (connection) {
                // this is the callback passed into a query
                // no need to unwrap
                if (!(0, instrumentation_1.isWrapped)(connection.query)) {
                    thisPlugin._wrap(connection, 'query', thisPlugin._patchQuery(connection));
                }
            }
            if (typeof cb === 'function') {
                api_1.context.with(activeContext, cb, this, err, connection);
            }
        };
    }
    _patchQuery(connection) {
        return (originalQuery)=>{
            const thisPlugin = this;
            return function query(query, _valuesOrCallback, _callback) {
                if (!thisPlugin['_enabled']) {
                    thisPlugin._unwrap(connection, 'query');
                    return originalQuery.apply(connection, arguments);
                }
                const span = thisPlugin.tracer.startSpan((0, utils_1.getSpanName)(query), {
                    kind: api_1.SpanKind.CLIENT,
                    attributes: Object.assign(Object.assign({}, MySQLInstrumentation.COMMON_ATTRIBUTES), (0, utils_1.getConnectionAttributes)(connection.config))
                });
                span.setAttribute(semantic_conventions_1.SEMATTRS_DB_STATEMENT, (0, utils_1.getDbStatement)(query));
                if (thisPlugin.getConfig().enhancedDatabaseReporting) {
                    let values;
                    if (Array.isArray(_valuesOrCallback)) {
                        values = _valuesOrCallback;
                    } else if (arguments[2]) {
                        values = [
                            _valuesOrCallback
                        ];
                    }
                    span.setAttribute(AttributeNames_1.AttributeNames.MYSQL_VALUES, (0, utils_1.getDbValues)(query, values));
                }
                const cbIndex = Array.from(arguments).findIndex((arg)=>typeof arg === 'function');
                const parentContext = api_1.context.active();
                if (cbIndex === -1) {
                    const streamableQuery = api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
                        return originalQuery.apply(connection, arguments);
                    });
                    api_1.context.bind(parentContext, streamableQuery);
                    return streamableQuery.on('error', (err)=>span.setStatus({
                            code: api_1.SpanStatusCode.ERROR,
                            message: err.message
                        })).on('end', ()=>{
                        span.end();
                    });
                } else {
                    thisPlugin._wrap(arguments, cbIndex, thisPlugin._patchCallbackQuery(span, parentContext));
                    return api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
                        return originalQuery.apply(connection, arguments);
                    });
                }
            };
        };
    }
    _patchCallbackQuery(span, parentContext) {
        return (originalCallback)=>{
            return function(err, results, fields) {
                if (err) {
                    span.setStatus({
                        code: api_1.SpanStatusCode.ERROR,
                        message: err.message
                    });
                }
                span.end();
                return api_1.context.with(parentContext, ()=>originalCallback(...arguments));
            };
        };
    }
    _setPoolcallbacks(pool, thisPlugin, id) {
        //TODO:: use semantic convention
        const poolName = id || (0, utils_1.getPoolName)(pool);
        pool.on('connection', (connection)=>{
            thisPlugin._connectionsUsage.add(1, {
                state: 'idle',
                name: poolName
            });
        });
        pool.on('acquire', (connection)=>{
            thisPlugin._connectionsUsage.add(-1, {
                state: 'idle',
                name: poolName
            });
            thisPlugin._connectionsUsage.add(1, {
                state: 'used',
                name: poolName
            });
        });
        pool.on('release', (connection)=>{
            thisPlugin._connectionsUsage.add(-1, {
                state: 'used',
                name: poolName
            });
            thisPlugin._connectionsUsage.add(1, {
                state: 'idle',
                name: poolName
            });
        });
    }
}
exports.MySQLInstrumentation = MySQLInstrumentation;
MySQLInstrumentation.COMMON_ATTRIBUTES = {
    [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_MYSQL
}; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/sql-common/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addSqlCommenterComment = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/sql-common/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
// NOTE: This function currently is returning false-positives
// in cases where comment characters appear in string literals
// ("SELECT '-- not a comment';" would return true, although has no comment)
function hasValidSqlComment(query) {
    const indexOpeningDashDashComment = query.indexOf('--');
    if (indexOpeningDashDashComment >= 0) {
        return true;
    }
    const indexOpeningSlashComment = query.indexOf('/*');
    if (indexOpeningSlashComment < 0) {
        return false;
    }
    const indexClosingSlashComment = query.indexOf('*/');
    return indexOpeningDashDashComment < indexClosingSlashComment;
}
// sqlcommenter specification (https://google.github.io/sqlcommenter/spec/#value-serialization)
// expects us to URL encode based on the RFC 3986 spec (https://en.wikipedia.org/wiki/Percent-encoding),
// but encodeURIComponent does not handle some characters correctly (! ' ( ) *),
// which means we need special handling for this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c)=>`%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}
function addSqlCommenterComment(span, query) {
    if (typeof query !== 'string' || query.length === 0) {
        return query;
    }
    // As per sqlcommenter spec we shall not add a comment if there already is a comment
    // in the query
    if (hasValidSqlComment(query)) {
        return query;
    }
    const propagator = new core_1.W3CTraceContextPropagator();
    const headers = {};
    propagator.inject(api_1.trace.setSpan(api_1.ROOT_CONTEXT, span), headers, api_1.defaultTextMapSetter);
    // sqlcommenter spec requires keys in the comment to be sorted lexicographically
    const sortedKeys = Object.keys(headers).sort();
    if (sortedKeys.length === 0) {
        return query;
    }
    const commentString = sortedKeys.map((key)=>{
        const encodedValue = fixedEncodeURIComponent(headers[key]);
        return `${key}='${encodedValue}'`;
    }).join(',');
    return `${query} /*${commentString}*/`;
}
exports.addSqlCommenterComment = addSqlCommenterComment; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getConnectionPrototypeToInstrument = exports.once = exports.getSpanName = exports.getDbStatement = exports.getConnectionAttributes = void 0;
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
/**
 * Get an Attributes map from a mysql connection config object
 *
 * @param config ConnectionConfig
 */ function getConnectionAttributes(config) {
    const { host, port, database, user } = getConfig(config);
    const portNumber = parseInt(port, 10);
    if (!isNaN(portNumber)) {
        return {
            [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: host,
            [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: portNumber,
            [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: getJDBCString(host, port, database),
            [semantic_conventions_1.SEMATTRS_DB_NAME]: database,
            [semantic_conventions_1.SEMATTRS_DB_USER]: user
        };
    }
    return {
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: host,
        [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: getJDBCString(host, port, database),
        [semantic_conventions_1.SEMATTRS_DB_NAME]: database,
        [semantic_conventions_1.SEMATTRS_DB_USER]: user
    };
}
exports.getConnectionAttributes = getConnectionAttributes;
function getConfig(config) {
    const { host, port, database, user } = config && config.connectionConfig || config || {};
    return {
        host,
        port,
        database,
        user
    };
}
function getJDBCString(host, port, database) {
    let jdbcString = `jdbc:mysql://${host || 'localhost'}`;
    if (typeof port === 'number') {
        jdbcString += `:${port}`;
    }
    if (typeof database === 'string') {
        jdbcString += `/${database}`;
    }
    return jdbcString;
}
/**
 * Conjures up the value for the db.statement attribute by formatting a SQL query.
 *
 * @returns the database statement being executed.
 */ function getDbStatement(query, format, values) {
    if (!format) {
        return typeof query === 'string' ? query : query.sql;
    }
    if (typeof query === 'string') {
        return values ? format(query, values) : query;
    } else {
        // According to https://github.com/mysqljs/mysql#performing-queries
        // The values argument will override the values in the option object.
        return values || query.values ? format(query.sql, values || query.values) : query.sql;
    }
}
exports.getDbStatement = getDbStatement;
/**
 * The span name SHOULD be set to a low cardinality value
 * representing the statement executed on the database.
 *
 * @returns SQL statement without variable arguments or SQL verb
 */ function getSpanName(query) {
    const rawQuery = typeof query === 'object' ? query.sql : query;
    // Extract the SQL verb
    const firstSpace = rawQuery === null || rawQuery === void 0 ? void 0 : rawQuery.indexOf(' ');
    if (typeof firstSpace === 'number' && firstSpace !== -1) {
        return rawQuery === null || rawQuery === void 0 ? void 0 : rawQuery.substring(0, firstSpace);
    }
    return rawQuery;
}
exports.getSpanName = getSpanName;
const once = (fn)=>{
    let called = false;
    return (...args)=>{
        if (called) return;
        called = true;
        return fn(...args);
    };
};
exports.once = once;
function getConnectionPrototypeToInstrument(connection) {
    const connectionPrototype = connection.prototype;
    const basePrototype = Object.getPrototypeOf(connectionPrototype);
    // mysql2@3.11.5 included a refactoring, where most code was moved out of the `Connection` class and into a shared base
    // so we need to instrument that instead, see https://github.com/sidorares/node-mysql2/pull/3081
    // This checks if the functions we're instrumenting are there on the base - we cannot use the presence of a base
    // prototype since EventEmitter is the base for mysql2@<=3.11.4
    if (typeof (basePrototype === null || basePrototype === void 0 ? void 0 : basePrototype.query) === 'function' && typeof (basePrototype === null || basePrototype === void 0 ? void 0 : basePrototype.execute) === 'function') {
        return basePrototype;
    }
    // otherwise instrument the connection directly.
    return connectionPrototype;
}
exports.getConnectionPrototypeToInstrument = getConnectionPrototypeToInstrument; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.45.2';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-mysql2'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MySQL2Instrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const sql_common_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/sql-common/build/src/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/utils.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/version.js [instrumentation] (ecmascript)");
const supportedVersions = [
    '>=1.4.2 <4'
];
class MySQL2Instrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        let format;
        function setFormatFunction(moduleExports) {
            if (!format && moduleExports.format) {
                format = moduleExports.format;
            }
        }
        const patch = (ConnectionPrototype)=>{
            if ((0, instrumentation_1.isWrapped)(ConnectionPrototype.query)) {
                this._unwrap(ConnectionPrototype, 'query');
            }
            this._wrap(ConnectionPrototype, 'query', this._patchQuery(format, false));
            if ((0, instrumentation_1.isWrapped)(ConnectionPrototype.execute)) {
                this._unwrap(ConnectionPrototype, 'execute');
            }
            this._wrap(ConnectionPrototype, 'execute', this._patchQuery(format, true));
        };
        const unpatch = (ConnectionPrototype)=>{
            this._unwrap(ConnectionPrototype, 'query');
            this._unwrap(ConnectionPrototype, 'execute');
        };
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('mysql2', supportedVersions, (moduleExports)=>{
                setFormatFunction(moduleExports);
                return moduleExports;
            }, ()=>{}, [
                new instrumentation_1.InstrumentationNodeModuleFile('mysql2/promise.js', supportedVersions, (moduleExports)=>{
                    setFormatFunction(moduleExports);
                    return moduleExports;
                }, ()=>{}),
                new instrumentation_1.InstrumentationNodeModuleFile('mysql2/lib/connection.js', supportedVersions, (moduleExports)=>{
                    const ConnectionPrototype = (0, utils_1.getConnectionPrototypeToInstrument)(moduleExports);
                    patch(ConnectionPrototype);
                    return moduleExports;
                }, (moduleExports)=>{
                    if (moduleExports === undefined) return;
                    const ConnectionPrototype = (0, utils_1.getConnectionPrototypeToInstrument)(moduleExports);
                    unpatch(ConnectionPrototype);
                })
            ])
        ];
    }
    _patchQuery(format, isPrepared) {
        return (originalQuery)=>{
            const thisPlugin = this;
            return function query(query, _valuesOrCallback, _callback) {
                let values;
                if (Array.isArray(_valuesOrCallback)) {
                    values = _valuesOrCallback;
                } else if (arguments[2]) {
                    values = [
                        _valuesOrCallback
                    ];
                }
                const span = thisPlugin.tracer.startSpan((0, utils_1.getSpanName)(query), {
                    kind: api.SpanKind.CLIENT,
                    attributes: Object.assign(Object.assign(Object.assign({}, MySQL2Instrumentation.COMMON_ATTRIBUTES), (0, utils_1.getConnectionAttributes)(this.config)), {
                        [semantic_conventions_1.SEMATTRS_DB_STATEMENT]: (0, utils_1.getDbStatement)(query, format, values)
                    })
                });
                if (!isPrepared && thisPlugin.getConfig().addSqlCommenterCommentToQueries) {
                    arguments[0] = query = typeof query === 'string' ? (0, sql_common_1.addSqlCommenterComment)(span, query) : Object.assign(query, {
                        sql: (0, sql_common_1.addSqlCommenterComment)(span, query.sql)
                    });
                }
                const endSpan = (0, utils_1.once)((err, results)=>{
                    if (err) {
                        span.setStatus({
                            code: api.SpanStatusCode.ERROR,
                            message: err.message
                        });
                    } else {
                        const { responseHook } = thisPlugin.getConfig();
                        if (typeof responseHook === 'function') {
                            (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                                responseHook(span, {
                                    queryResults: results
                                });
                            }, (err)=>{
                                if (err) {
                                    thisPlugin._diag.warn('Failed executing responseHook', err);
                                }
                            }, true);
                        }
                    }
                    span.end();
                });
                if (arguments.length === 1) {
                    if (typeof query.onResult === 'function') {
                        thisPlugin._wrap(query, 'onResult', thisPlugin._patchCallbackQuery(endSpan));
                    }
                    const streamableQuery = originalQuery.apply(this, arguments);
                    // `end` in mysql behaves similarly to `result` in mysql2.
                    streamableQuery.once('error', (err)=>{
                        endSpan(err);
                    }).once('result', (results)=>{
                        endSpan(undefined, results);
                    });
                    return streamableQuery;
                }
                if (typeof arguments[1] === 'function') {
                    thisPlugin._wrap(arguments, 1, thisPlugin._patchCallbackQuery(endSpan));
                } else if (typeof arguments[2] === 'function') {
                    thisPlugin._wrap(arguments, 2, thisPlugin._patchCallbackQuery(endSpan));
                }
                return originalQuery.apply(this, arguments);
            };
        };
    }
    _patchCallbackQuery(endSpan) {
        return (originalCallback)=>{
            return function(err, results, fields) {
                endSpan(err, results);
                return originalCallback(...arguments);
            };
        };
    }
}
exports.MySQL2Instrumentation = MySQL2Instrumentation;
MySQL2Instrumentation.COMMON_ATTRIBUTES = {
    [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_MYSQL
}; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-mysql2/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.endSpan = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const endSpan = (span, err)=>{
    if (err) {
        span.recordException(err);
        span.setStatus({
            code: api_1.SpanStatusCode.ERROR,
            message: err.message
        });
    }
    span.end();
};
exports.endSpan = endSpan; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.47.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-ioredis'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IORedisInstrumentation = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const instrumentation_2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/utils.js [instrumentation] (ecmascript)");
const redis_common_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/redis-common/build/src/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/version.js [instrumentation] (ecmascript)");
const DEFAULT_CONFIG = {
    requireParentSpan: true
};
class IORedisInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    setConfig(config = {}) {
        super.setConfig(Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('ioredis', [
                '>=2.0.0 <6'
            ], (module, moduleVersion)=>{
                const moduleExports = module[Symbol.toStringTag] === 'Module' ? module.default // ESM
                 : module; // CommonJS
                if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.sendCommand)) {
                    this._unwrap(moduleExports.prototype, 'sendCommand');
                }
                this._wrap(moduleExports.prototype, 'sendCommand', this._patchSendCommand(moduleVersion));
                if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.connect)) {
                    this._unwrap(moduleExports.prototype, 'connect');
                }
                this._wrap(moduleExports.prototype, 'connect', this._patchConnection());
                return module;
            }, (module)=>{
                if (module === undefined) return;
                const moduleExports = module[Symbol.toStringTag] === 'Module' ? module.default // ESM
                 : module; // CommonJS
                this._unwrap(moduleExports.prototype, 'sendCommand');
                this._unwrap(moduleExports.prototype, 'connect');
            })
        ];
    }
    /**
     * Patch send command internal to trace requests
     */ _patchSendCommand(moduleVersion) {
        return (original)=>{
            return this._traceSendCommand(original, moduleVersion);
        };
    }
    _patchConnection() {
        return (original)=>{
            return this._traceConnection(original);
        };
    }
    _traceSendCommand(original, moduleVersion) {
        const instrumentation = this;
        return function(cmd) {
            if (arguments.length < 1 || typeof cmd !== 'object') {
                return original.apply(this, arguments);
            }
            const config = instrumentation.getConfig();
            const dbStatementSerializer = config.dbStatementSerializer || redis_common_1.defaultDbStatementSerializer;
            const hasNoParentSpan = api_1.trace.getSpan(api_1.context.active()) === undefined;
            if (config.requireParentSpan === true && hasNoParentSpan) {
                return original.apply(this, arguments);
            }
            const span = instrumentation.tracer.startSpan(cmd.name, {
                kind: api_1.SpanKind.CLIENT,
                attributes: {
                    [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_REDIS,
                    [semantic_conventions_1.SEMATTRS_DB_STATEMENT]: dbStatementSerializer(cmd.name, cmd.args)
                }
            });
            const { requestHook } = config;
            if (requestHook) {
                (0, instrumentation_2.safeExecuteInTheMiddle)(()=>requestHook(span, {
                        moduleVersion,
                        cmdName: cmd.name,
                        cmdArgs: cmd.args
                    }), (e)=>{
                    if (e) {
                        api_1.diag.error('ioredis instrumentation: request hook failed', e);
                    }
                }, true);
            }
            const { host, port } = this.options;
            span.setAttributes({
                [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: host,
                [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: port,
                [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: `redis://${host}:${port}`
            });
            try {
                const result = original.apply(this, arguments);
                const origResolve = cmd.resolve;
                /* eslint-disable @typescript-eslint/no-explicit-any */ cmd.resolve = function(result) {
                    (0, instrumentation_2.safeExecuteInTheMiddle)(()=>{
                        var _a;
                        return (_a = config.responseHook) === null || _a === void 0 ? void 0 : _a.call(config, span, cmd.name, cmd.args, result);
                    }, (e)=>{
                        if (e) {
                            api_1.diag.error('ioredis instrumentation: response hook failed', e);
                        }
                    }, true);
                    (0, utils_1.endSpan)(span, null);
                    origResolve(result);
                };
                const origReject = cmd.reject;
                cmd.reject = function(err) {
                    (0, utils_1.endSpan)(span, err);
                    origReject(err);
                };
                return result;
            } catch (error) {
                (0, utils_1.endSpan)(span, error);
                throw error;
            }
        };
    }
    _traceConnection(original) {
        const instrumentation = this;
        return function() {
            const hasNoParentSpan = api_1.trace.getSpan(api_1.context.active()) === undefined;
            if (instrumentation.getConfig().requireParentSpan === true && hasNoParentSpan) {
                return original.apply(this, arguments);
            }
            const span = instrumentation.tracer.startSpan('connect', {
                kind: api_1.SpanKind.CLIENT,
                attributes: {
                    [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_REDIS,
                    [semantic_conventions_1.SEMATTRS_DB_STATEMENT]: 'connect'
                }
            });
            const { host, port } = this.options;
            span.setAttributes({
                [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: host,
                [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: port,
                [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: `redis://${host}:${port}`
            });
            try {
                const client = original.apply(this, arguments);
                (0, utils_1.endSpan)(span, null);
                return client;
            } catch (error) {
                (0, utils_1.endSpan)(span, error);
                throw error;
            }
        };
    }
}
exports.IORedisInstrumentation = IORedisInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-ioredis/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/redis-common/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultDbStatementSerializer = void 0;
/**
 * List of regexes and the number of arguments that should be serialized for matching commands.
 * For example, HSET should serialize which key and field it's operating on, but not its value.
 * Setting the subset to -1 will serialize all arguments.
 * Commands without a match will have their first argument serialized.
 *
 * Refer to https://redis.io/commands/ for the full list.
 */ const serializationSubsets = [
    {
        regex: /^ECHO/i,
        args: 0
    },
    {
        regex: /^(LPUSH|MSET|PFA|PUBLISH|RPUSH|SADD|SET|SPUBLISH|XADD|ZADD)/i,
        args: 1
    },
    {
        regex: /^(HSET|HMSET|LSET|LINSERT)/i,
        args: 2
    },
    {
        regex: /^(ACL|BIT|B[LRZ]|CLIENT|CLUSTER|CONFIG|COMMAND|DECR|DEL|EVAL|EX|FUNCTION|GEO|GET|HINCR|HMGET|HSCAN|INCR|L[TRLM]|MEMORY|P[EFISTU]|RPOP|S[CDIMORSU]|XACK|X[CDGILPRT]|Z[CDILMPRS])/i,
        args: -1
    }
];
/**
 * Given the redis command name and arguments, return a combination of the
 * command name + the allowed arguments according to `serializationSubsets`.
 * @param cmdName The redis command name
 * @param cmdArgs The redis command arguments
 * @returns a combination of the command name + args according to `serializationSubsets`.
 */ const defaultDbStatementSerializer = (cmdName, cmdArgs)=>{
    var _a, _b;
    if (Array.isArray(cmdArgs) && cmdArgs.length) {
        const nArgsToSerialize = (_b = (_a = serializationSubsets.find(({ regex })=>{
            return regex.test(cmdName);
        })) === null || _a === void 0 ? void 0 : _a.args) !== null && _b !== void 0 ? _b : 0;
        const argsToSerialize = nArgsToSerialize >= 0 ? cmdArgs.slice(0, nArgsToSerialize) : cmdArgs;
        if (cmdArgs.length > argsToSerialize.length) {
            argsToSerialize.push(`[${cmdArgs.length - nArgsToSerialize} other arguments]`);
        }
        return `${cmdName} ${argsToSerialize.join(' ')}`;
    }
    return cmdName;
};
exports.defaultDbStatementSerializer = defaultDbStatementSerializer; //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClientAttributes = void 0;
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
function getClientAttributes(diag, options) {
    var _a, _b;
    return {
        [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_REDIS,
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: (_a = options === null || options === void 0 ? void 0 : options.socket) === null || _a === void 0 ? void 0 : _a.host,
        [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: (_b = options === null || options === void 0 ? void 0 : options.socket) === null || _b === void 0 ? void 0 : _b.port,
        [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: removeCredentialsFromDBConnectionStringAttribute(diag, options === null || options === void 0 ? void 0 : options.url)
    };
}
exports.getClientAttributes = getClientAttributes;
/**
 * removeCredentialsFromDBConnectionStringAttribute removes basic auth from url and user_pwd from query string
 *
 * Examples:
 *   redis://user:pass@localhost:6379/mydb => redis://localhost:6379/mydb
 *   redis://localhost:6379?db=mydb&user_pwd=pass => redis://localhost:6379?db=mydb
 */ function removeCredentialsFromDBConnectionStringAttribute(diag, url) {
    if (typeof url !== 'string' || !url) {
        return;
    }
    try {
        const u = new URL(url);
        u.searchParams.delete('user_pwd');
        u.username = '';
        u.password = '';
        return u.href;
    } catch (err) {
        diag.error('failed to sanitize redis connection url', err);
    }
    return;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.46.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-redis-4'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedisInstrumentation = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/utils.js [instrumentation] (ecmascript)");
const redis_common_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/redis-common/build/src/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/version.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const OTEL_OPEN_SPANS = Symbol('opentelemetry.instrumentation.redis.open_spans');
const MULTI_COMMAND_OPTIONS = Symbol('opentelemetry.instrumentation.redis.multi_command_options');
const DEFAULT_CONFIG = {
    requireParentSpan: false
};
class RedisInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    setConfig(config = {}) {
        super.setConfig(Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    init() {
        // @node-redis/client is a new package introduced and consumed by 'redis 4.0.x'
        // on redis@4.1.0 it was changed to @redis/client.
        // we will instrument both packages
        return [
            this._getInstrumentationNodeModuleDefinition('@redis/client'),
            this._getInstrumentationNodeModuleDefinition('@node-redis/client')
        ];
    }
    _getInstrumentationNodeModuleDefinition(basePackageName) {
        const commanderModuleFile = new instrumentation_1.InstrumentationNodeModuleFile(`${basePackageName}/dist/lib/commander.js`, [
            '^1.0.0'
        ], (moduleExports, moduleVersion)=>{
            const transformCommandArguments = moduleExports.transformCommandArguments;
            if (!transformCommandArguments) {
                this._diag.error('internal instrumentation error, missing transformCommandArguments function');
                return moduleExports;
            }
            // function name and signature changed in redis 4.1.0 from 'extendWithCommands' to 'attachCommands'
            // the matching internal package names starts with 1.0.x (for redis 4.0.x)
            const functionToPatch = (moduleVersion === null || moduleVersion === void 0 ? void 0 : moduleVersion.startsWith('1.0.')) ? 'extendWithCommands' : 'attachCommands';
            // this is the function that extend a redis client with a list of commands.
            // the function patches the commandExecutor to record a span
            if ((0, instrumentation_1.isWrapped)(moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports[functionToPatch])) {
                this._unwrap(moduleExports, functionToPatch);
            }
            this._wrap(moduleExports, functionToPatch, this._getPatchExtendWithCommands(transformCommandArguments));
            return moduleExports;
        }, (moduleExports)=>{
            if ((0, instrumentation_1.isWrapped)(moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.extendWithCommands)) {
                this._unwrap(moduleExports, 'extendWithCommands');
            }
            if ((0, instrumentation_1.isWrapped)(moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.attachCommands)) {
                this._unwrap(moduleExports, 'attachCommands');
            }
        });
        const multiCommanderModule = new instrumentation_1.InstrumentationNodeModuleFile(`${basePackageName}/dist/lib/client/multi-command.js`, [
            '^1.0.0'
        ], (moduleExports)=>{
            var _a;
            const redisClientMultiCommandPrototype = (_a = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.default) === null || _a === void 0 ? void 0 : _a.prototype;
            if ((0, instrumentation_1.isWrapped)(redisClientMultiCommandPrototype === null || redisClientMultiCommandPrototype === void 0 ? void 0 : redisClientMultiCommandPrototype.exec)) {
                this._unwrap(redisClientMultiCommandPrototype, 'exec');
            }
            this._wrap(redisClientMultiCommandPrototype, 'exec', this._getPatchMultiCommandsExec());
            if ((0, instrumentation_1.isWrapped)(redisClientMultiCommandPrototype === null || redisClientMultiCommandPrototype === void 0 ? void 0 : redisClientMultiCommandPrototype.addCommand)) {
                this._unwrap(redisClientMultiCommandPrototype, 'addCommand');
            }
            this._wrap(redisClientMultiCommandPrototype, 'addCommand', this._getPatchMultiCommandsAddCommand());
            return moduleExports;
        }, (moduleExports)=>{
            var _a;
            const redisClientMultiCommandPrototype = (_a = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.default) === null || _a === void 0 ? void 0 : _a.prototype;
            if ((0, instrumentation_1.isWrapped)(redisClientMultiCommandPrototype === null || redisClientMultiCommandPrototype === void 0 ? void 0 : redisClientMultiCommandPrototype.exec)) {
                this._unwrap(redisClientMultiCommandPrototype, 'exec');
            }
            if ((0, instrumentation_1.isWrapped)(redisClientMultiCommandPrototype === null || redisClientMultiCommandPrototype === void 0 ? void 0 : redisClientMultiCommandPrototype.addCommand)) {
                this._unwrap(redisClientMultiCommandPrototype, 'addCommand');
            }
        });
        const clientIndexModule = new instrumentation_1.InstrumentationNodeModuleFile(`${basePackageName}/dist/lib/client/index.js`, [
            '^1.0.0'
        ], (moduleExports)=>{
            var _a;
            const redisClientPrototype = (_a = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.default) === null || _a === void 0 ? void 0 : _a.prototype;
            // In some @redis/client versions 'multi' is a method. In later
            // versions, as of https://github.com/redis/node-redis/pull/2324,
            // 'MULTI' is a method and 'multi' is a property defined in the
            // constructor that points to 'MULTI', and therefore it will not
            // be defined on the prototype.
            if (redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.multi) {
                if ((0, instrumentation_1.isWrapped)(redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.multi)) {
                    this._unwrap(redisClientPrototype, 'multi');
                }
                this._wrap(redisClientPrototype, 'multi', this._getPatchRedisClientMulti());
            }
            if (redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.MULTI) {
                if ((0, instrumentation_1.isWrapped)(redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.MULTI)) {
                    this._unwrap(redisClientPrototype, 'MULTI');
                }
                this._wrap(redisClientPrototype, 'MULTI', this._getPatchRedisClientMulti());
            }
            if ((0, instrumentation_1.isWrapped)(redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.sendCommand)) {
                this._unwrap(redisClientPrototype, 'sendCommand');
            }
            this._wrap(redisClientPrototype, 'sendCommand', this._getPatchRedisClientSendCommand());
            this._wrap(redisClientPrototype, 'connect', this._getPatchedClientConnect());
            return moduleExports;
        }, (moduleExports)=>{
            var _a;
            const redisClientPrototype = (_a = moduleExports === null || moduleExports === void 0 ? void 0 : moduleExports.default) === null || _a === void 0 ? void 0 : _a.prototype;
            if ((0, instrumentation_1.isWrapped)(redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.multi)) {
                this._unwrap(redisClientPrototype, 'multi');
            }
            if ((0, instrumentation_1.isWrapped)(redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.MULTI)) {
                this._unwrap(redisClientPrototype, 'MULTI');
            }
            if ((0, instrumentation_1.isWrapped)(redisClientPrototype === null || redisClientPrototype === void 0 ? void 0 : redisClientPrototype.sendCommand)) {
                this._unwrap(redisClientPrototype, 'sendCommand');
            }
        });
        return new instrumentation_1.InstrumentationNodeModuleDefinition(basePackageName, [
            '^1.0.0'
        ], (moduleExports)=>{
            return moduleExports;
        }, ()=>{}, [
            commanderModuleFile,
            multiCommanderModule,
            clientIndexModule
        ]);
    }
    // serves both for redis 4.0.x where function name is extendWithCommands
    // and redis ^4.1.0 where function name is attachCommands
    _getPatchExtendWithCommands(transformCommandArguments) {
        const plugin = this;
        return function extendWithCommandsPatchWrapper(original) {
            return function extendWithCommandsPatch(config) {
                var _a;
                if (((_a = config === null || config === void 0 ? void 0 : config.BaseClass) === null || _a === void 0 ? void 0 : _a.name) !== 'RedisClient') {
                    return original.apply(this, arguments);
                }
                const origExecutor = config.executor;
                config.executor = function(command, args) {
                    const redisCommandArguments = transformCommandArguments(command, args).args;
                    return plugin._traceClientCommand(origExecutor, this, arguments, redisCommandArguments);
                };
                return original.apply(this, arguments);
            };
        };
    }
    _getPatchMultiCommandsExec() {
        const plugin = this;
        return function execPatchWrapper(original) {
            return function execPatch() {
                const execRes = original.apply(this, arguments);
                if (typeof (execRes === null || execRes === void 0 ? void 0 : execRes.then) !== 'function') {
                    plugin._diag.error('got non promise result when patching RedisClientMultiCommand.exec');
                    return execRes;
                }
                return execRes.then((redisRes)=>{
                    const openSpans = this[OTEL_OPEN_SPANS];
                    plugin._endSpansWithRedisReplies(openSpans, redisRes);
                    return redisRes;
                }).catch((err)=>{
                    const openSpans = this[OTEL_OPEN_SPANS];
                    if (!openSpans) {
                        plugin._diag.error('cannot find open spans to end for redis multi command');
                    } else {
                        const replies = err.constructor.name === 'MultiErrorReply' ? err.replies : new Array(openSpans.length).fill(err);
                        plugin._endSpansWithRedisReplies(openSpans, replies);
                    }
                    return Promise.reject(err);
                });
            };
        };
    }
    _getPatchMultiCommandsAddCommand() {
        const plugin = this;
        return function addCommandWrapper(original) {
            return function addCommandPatch(args) {
                return plugin._traceClientCommand(original, this, arguments, args);
            };
        };
    }
    _getPatchRedisClientMulti() {
        return function multiPatchWrapper(original) {
            return function multiPatch() {
                const multiRes = original.apply(this, arguments);
                multiRes[MULTI_COMMAND_OPTIONS] = this.options;
                return multiRes;
            };
        };
    }
    _getPatchRedisClientSendCommand() {
        const plugin = this;
        return function sendCommandWrapper(original) {
            return function sendCommandPatch(args) {
                return plugin._traceClientCommand(original, this, arguments, args);
            };
        };
    }
    _getPatchedClientConnect() {
        const plugin = this;
        return function connectWrapper(original) {
            return function patchedConnect() {
                const options = this.options;
                const attributes = (0, utils_1.getClientAttributes)(plugin._diag, options);
                const span = plugin.tracer.startSpan(`${RedisInstrumentation.COMPONENT}-connect`, {
                    kind: api_1.SpanKind.CLIENT,
                    attributes
                });
                const res = api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
                    return original.apply(this);
                });
                return res.then((result)=>{
                    span.end();
                    return result;
                }).catch((error)=>{
                    span.recordException(error);
                    span.setStatus({
                        code: api_1.SpanStatusCode.ERROR,
                        message: error.message
                    });
                    span.end();
                    return Promise.reject(error);
                });
            };
        };
    }
    _traceClientCommand(origFunction, origThis, origArguments, redisCommandArguments) {
        const hasNoParentSpan = api_1.trace.getSpan(api_1.context.active()) === undefined;
        if (hasNoParentSpan && this.getConfig().requireParentSpan) {
            return origFunction.apply(origThis, origArguments);
        }
        const clientOptions = origThis.options || origThis[MULTI_COMMAND_OPTIONS];
        const commandName = redisCommandArguments[0]; // types also allows it to be a Buffer, but in practice it only string
        const commandArgs = redisCommandArguments.slice(1);
        const dbStatementSerializer = this.getConfig().dbStatementSerializer || redis_common_1.defaultDbStatementSerializer;
        const attributes = (0, utils_1.getClientAttributes)(this._diag, clientOptions);
        try {
            const dbStatement = dbStatementSerializer(commandName, commandArgs);
            if (dbStatement != null) {
                attributes[semantic_conventions_1.SEMATTRS_DB_STATEMENT] = dbStatement;
            }
        } catch (e) {
            this._diag.error('dbStatementSerializer throw an exception', e, {
                commandName
            });
        }
        const span = this.tracer.startSpan(`${RedisInstrumentation.COMPONENT}-${commandName}`, {
            kind: api_1.SpanKind.CLIENT,
            attributes
        });
        const res = api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
            return origFunction.apply(origThis, origArguments);
        });
        if (typeof (res === null || res === void 0 ? void 0 : res.then) === 'function') {
            res.then((redisRes)=>{
                this._endSpanWithResponse(span, commandName, commandArgs, redisRes, undefined);
            }, (err)=>{
                this._endSpanWithResponse(span, commandName, commandArgs, null, err);
            });
        } else {
            const redisClientMultiCommand = res;
            redisClientMultiCommand[OTEL_OPEN_SPANS] = redisClientMultiCommand[OTEL_OPEN_SPANS] || [];
            redisClientMultiCommand[OTEL_OPEN_SPANS].push({
                span,
                commandName,
                commandArgs
            });
        }
        return res;
    }
    _endSpansWithRedisReplies(openSpans, replies) {
        if (!openSpans) {
            return this._diag.error('cannot find open spans to end for redis multi command');
        }
        if (replies.length !== openSpans.length) {
            return this._diag.error('number of multi command spans does not match response from redis');
        }
        for(let i = 0; i < openSpans.length; i++){
            const { span, commandName, commandArgs } = openSpans[i];
            const currCommandRes = replies[i];
            const [res, err] = currCommandRes instanceof Error ? [
                null,
                currCommandRes
            ] : [
                currCommandRes,
                undefined
            ];
            this._endSpanWithResponse(span, commandName, commandArgs, res, err);
        }
    }
    _endSpanWithResponse(span, commandName, commandArgs, response, error) {
        const { responseHook } = this.getConfig();
        if (!error && responseHook) {
            try {
                responseHook(span, commandName, commandArgs, response);
            } catch (err) {
                this._diag.error('responseHook throw an exception', err);
            }
        }
        if (error) {
            span.recordException(error);
            span.setStatus({
                code: api_1.SpanStatusCode.ERROR,
                message: error === null || error === void 0 ? void 0 : error.message
            });
        }
        span.end();
    }
}
exports.RedisInstrumentation = RedisInstrumentation;
RedisInstrumentation.COMPONENT = 'redis'; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-redis-4/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EVENT_LISTENERS_SET = void 0;
exports.EVENT_LISTENERS_SET = Symbol('opentelemetry.instrumentation.pg.eventListenersSet'); //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
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
 */ // Postgresql specific attributes not covered by semantic conventions
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["PG_VALUES"] = "db.postgresql.values";
    AttributeNames["PG_PLAN"] = "db.postgresql.plan";
    AttributeNames["IDLE_TIMEOUT_MILLIS"] = "db.postgresql.idle.timeout.millis";
    AttributeNames["MAX_CLIENT"] = "db.postgresql.max.client";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/semconv.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.METRIC_DB_CLIENT_OPERATION_DURATION = exports.METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS = exports.METRIC_DB_CLIENT_CONNECTION_COUNT = exports.DB_CLIENT_CONNECTION_STATE_VALUE_IDLE = exports.DB_CLIENT_CONNECTION_STATE_VALUE_USED = exports.ATTR_DB_OPERATION_NAME = exports.ATTR_DB_NAMESPACE = exports.ATTR_DB_CLIENT_CONNECTION_STATE = exports.ATTR_DB_CLIENT_CONNECTION_POOL_NAME = void 0;
/**
 * The name of the connection pool; unique within the instrumented application. In case the connection pool implementation doesn't provide a name, instrumentation **SHOULD** use a combination of parameters that would make the name unique, for example, combining attributes `server.address`, `server.port`, and `db.namespace`, formatted as `server.address:server.port/db.namespace`. Instrumentations that generate connection pool name following different patterns **SHOULD** document it.
 *
 * @example myDataSource
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.ATTR_DB_CLIENT_CONNECTION_POOL_NAME = 'db.client.connection.pool.name';
/**
 * The state of a connection in the pool
 *
 * @example idle
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.ATTR_DB_CLIENT_CONNECTION_STATE = 'db.client.connection.state';
/**
 * The name of the database, fully qualified within the server address and port.
 *
 * @example customers
 * @example test.users
 *
 * @note If a database system has multiple namespace components, they **SHOULD** be concatenated (potentially using database system specific conventions) from most general to most specific namespace component, and more specific namespaces **SHOULD NOT** be captured without the more general namespaces, to ensure that "startswith" queries for the more general namespaces will be valid.
 * Semantic conventions for individual database systems **SHOULD** document what `db.namespace` means in the context of that system.
 * It is **RECOMMENDED** to capture the value as provided by the application without attempting to do any case normalization.
 * This attribute has stability level RELEASE CANDIDATE.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.ATTR_DB_NAMESPACE = 'db.namespace';
/**
 * The name of the operation or command being executed.
 *
 * @example findAndModify
 * @example HMSET
 * @example SELECT
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application without attempting to do any case normalization.
 * If the operation name is parsed from the query text, it **SHOULD** be the first operation name found in the query.
 * For batch operations, if the individual operations are known to have the same operation name then that operation name **SHOULD** be used prepended by `BATCH `, otherwise `db.operation.name` **SHOULD** be `BATCH` or some other database system specific term if more applicable.
 * This attribute has stability level RELEASE CANDIDATE.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.ATTR_DB_OPERATION_NAME = 'db.operation.name';
/**
 * Enum value "used" for attribute {@link ATTR_DB_CLIENT_CONNECTION_STATE}.
 */ exports.DB_CLIENT_CONNECTION_STATE_VALUE_USED = 'used';
/**
 * Enum value "idle" for attribute {@link ATTR_DB_CLIENT_CONNECTION_STATE}.
 */ exports.DB_CLIENT_CONNECTION_STATE_VALUE_IDLE = 'idle';
/**
 * The number of connections that are currently in state described by the `state` attribute
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.METRIC_DB_CLIENT_CONNECTION_COUNT = 'db.client.connection.count';
/**
 * The number of current pending requests for an open connection
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS = 'db.client.connection.pending_requests';
/**
 * Duration of database client operations.
 *
 * @note Batch operations **SHOULD** be recorded as a single operation.
 *
 * @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ exports.METRIC_DB_CLIENT_OPERATION_DURATION = 'db.client.operation.duration'; //# sourceMappingURL=semconv.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/enums/SpanNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpanNames = void 0;
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
 */ // Contains span names produced by instrumentation
var SpanNames;
(function(SpanNames) {
    SpanNames["QUERY_PREFIX"] = "pg.query";
    SpanNames["CONNECT"] = "pg.connect";
    SpanNames["POOL_CONNECT"] = "pg-pool.connect";
})(SpanNames = exports.SpanNames || (exports.SpanNames = {})); //# sourceMappingURL=SpanNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObjectWithTextString = exports.getErrorMessage = exports.patchClientConnectCallback = exports.patchCallbackPGPool = exports.updateCounter = exports.getPoolName = exports.patchCallback = exports.handleExecutionResult = exports.handleConfigQuery = exports.shouldSkipInstrumentation = exports.getSemanticAttributesFromPool = exports.getSemanticAttributesFromConnection = exports.getConnectionString = exports.parseNormalizedOperationName = exports.getQuerySpanName = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const semconv_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/semconv.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const SpanNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/enums/SpanNames.js [instrumentation] (ecmascript)");
/**
 * Helper function to get a low cardinality span name from whatever info we have
 * about the query.
 *
 * This is tricky, because we don't have most of the information (table name,
 * operation name, etc) the spec recommends using to build a low-cardinality
 * value w/o parsing. So, we use db.name and assume that, if the query's a named
 * prepared statement, those `name` values will be low cardinality. If we don't
 * have a named prepared statement, we try to parse an operation (despite the
 * spec's warnings).
 *
 * @params dbName The name of the db against which this query is being issued,
 *   which could be missing if no db name was given at the time that the
 *   connection was established.
 * @params queryConfig Information we have about the query being issued, typed
 *   to reflect only the validation we've actually done on the args to
 *   `client.query()`. This will be undefined if `client.query()` was called
 *   with invalid arguments.
 */ function getQuerySpanName(dbName, queryConfig) {
    // NB: when the query config is invalid, we omit the dbName too, so that
    // someone (or some tool) reading the span name doesn't misinterpret the
    // dbName as being a prepared statement or sql commit name.
    if (!queryConfig) return SpanNames_1.SpanNames.QUERY_PREFIX;
    // Either the name of a prepared statement; or an attempted parse
    // of the SQL command, normalized to uppercase; or unknown.
    const command = typeof queryConfig.name === 'string' && queryConfig.name ? queryConfig.name : parseNormalizedOperationName(queryConfig.text);
    return `${SpanNames_1.SpanNames.QUERY_PREFIX}:${command}${dbName ? ` ${dbName}` : ''}`;
}
exports.getQuerySpanName = getQuerySpanName;
function parseNormalizedOperationName(queryText) {
    const indexOfFirstSpace = queryText.indexOf(' ');
    let sqlCommand = indexOfFirstSpace === -1 ? queryText : queryText.slice(0, indexOfFirstSpace);
    sqlCommand = sqlCommand.toUpperCase();
    // Handle query text being "COMMIT;", which has an extra semicolon before the space.
    return sqlCommand.endsWith(';') ? sqlCommand.slice(0, -1) : sqlCommand;
}
exports.parseNormalizedOperationName = parseNormalizedOperationName;
function getConnectionString(params) {
    const host = params.host || 'localhost';
    const port = params.port || 5432;
    const database = params.database || '';
    return `postgresql://${host}:${port}/${database}`;
}
exports.getConnectionString = getConnectionString;
function getPort(port) {
    // Port may be NaN as parseInt() is used on the value, passing null will result in NaN being parsed.
    // https://github.com/brianc/node-postgres/blob/2a8efbee09a284be12748ed3962bc9b816965e36/packages/pg/lib/connection-parameters.js#L66
    if (Number.isInteger(port)) {
        return port;
    }
    // Unable to find the default used in pg code, so falling back to 'undefined'.
    return undefined;
}
function getSemanticAttributesFromConnection(params) {
    return {
        [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_POSTGRESQL,
        [semantic_conventions_1.SEMATTRS_DB_NAME]: params.database,
        [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: getConnectionString(params),
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: params.host,
        [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: getPort(params.port),
        [semantic_conventions_1.SEMATTRS_DB_USER]: params.user
    };
}
exports.getSemanticAttributesFromConnection = getSemanticAttributesFromConnection;
function getSemanticAttributesFromPool(params) {
    return {
        [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_POSTGRESQL,
        [semantic_conventions_1.SEMATTRS_DB_NAME]: params.database,
        [semantic_conventions_1.SEMATTRS_DB_CONNECTION_STRING]: getConnectionString(params),
        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: params.host,
        [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: getPort(params.port),
        [semantic_conventions_1.SEMATTRS_DB_USER]: params.user,
        [AttributeNames_1.AttributeNames.IDLE_TIMEOUT_MILLIS]: params.idleTimeoutMillis,
        [AttributeNames_1.AttributeNames.MAX_CLIENT]: params.maxClient
    };
}
exports.getSemanticAttributesFromPool = getSemanticAttributesFromPool;
function shouldSkipInstrumentation(instrumentationConfig) {
    return instrumentationConfig.requireParentSpan === true && api_1.trace.getSpan(api_1.context.active()) === undefined;
}
exports.shouldSkipInstrumentation = shouldSkipInstrumentation;
// Create a span from our normalized queryConfig object,
// or return a basic span if no queryConfig was given/could be created.
function handleConfigQuery(tracer, instrumentationConfig, queryConfig) {
    // Create child span.
    const { connectionParameters } = this;
    const dbName = connectionParameters.database;
    const spanName = getQuerySpanName(dbName, queryConfig);
    const span = tracer.startSpan(spanName, {
        kind: api_1.SpanKind.CLIENT,
        attributes: getSemanticAttributesFromConnection(connectionParameters)
    });
    if (!queryConfig) {
        return span;
    }
    // Set attributes
    if (queryConfig.text) {
        span.setAttribute(semantic_conventions_1.SEMATTRS_DB_STATEMENT, queryConfig.text);
    }
    if (instrumentationConfig.enhancedDatabaseReporting && Array.isArray(queryConfig.values)) {
        try {
            const convertedValues = queryConfig.values.map((value)=>{
                if (value == null) {
                    return 'null';
                } else if (value instanceof Buffer) {
                    return value.toString();
                } else if (typeof value === 'object') {
                    if (typeof value.toPostgres === 'function') {
                        return value.toPostgres();
                    }
                    return JSON.stringify(value);
                } else {
                    //string, number
                    return value.toString();
                }
            });
            span.setAttribute(AttributeNames_1.AttributeNames.PG_VALUES, convertedValues);
        } catch (e) {
            api_1.diag.error('failed to stringify ', queryConfig.values, e);
        }
    }
    // Set plan name attribute, if present
    if (typeof queryConfig.name === 'string') {
        span.setAttribute(AttributeNames_1.AttributeNames.PG_PLAN, queryConfig.name);
    }
    return span;
}
exports.handleConfigQuery = handleConfigQuery;
function handleExecutionResult(config, span, pgResult) {
    if (typeof config.responseHook === 'function') {
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
            config.responseHook(span, {
                data: pgResult
            });
        }, (err)=>{
            if (err) {
                api_1.diag.error('Error running response hook', err);
            }
        }, true);
    }
}
exports.handleExecutionResult = handleExecutionResult;
function patchCallback(instrumentationConfig, span, cb, attributes, recordDuration) {
    return function patchedCallback(err, res) {
        if (err) {
            if (Object.prototype.hasOwnProperty.call(err, 'code')) {
                attributes[semantic_conventions_1.ATTR_ERROR_TYPE] = err['code'];
            }
            span.setStatus({
                code: api_1.SpanStatusCode.ERROR,
                message: err.message
            });
        } else {
            handleExecutionResult(instrumentationConfig, span, res);
        }
        recordDuration();
        span.end();
        cb.call(this, err, res);
    };
}
exports.patchCallback = patchCallback;
function getPoolName(pool) {
    let poolName = '';
    poolName += ((pool === null || pool === void 0 ? void 0 : pool.host) ? `${pool.host}` : 'unknown_host') + ':';
    poolName += ((pool === null || pool === void 0 ? void 0 : pool.port) ? `${pool.port}` : 'unknown_port') + '/';
    poolName += (pool === null || pool === void 0 ? void 0 : pool.database) ? `${pool.database}` : 'unknown_database';
    return poolName.trim();
}
exports.getPoolName = getPoolName;
function updateCounter(poolName, pool, connectionCount, connectionPendingRequests, latestCounter) {
    const all = pool.totalCount;
    const pending = pool.waitingCount;
    const idle = pool.idleCount;
    const used = all - idle;
    connectionCount.add(used - latestCounter.used, {
        [semconv_1.ATTR_DB_CLIENT_CONNECTION_STATE]: semconv_1.DB_CLIENT_CONNECTION_STATE_VALUE_USED,
        [semconv_1.ATTR_DB_CLIENT_CONNECTION_POOL_NAME]: poolName
    });
    connectionCount.add(idle - latestCounter.idle, {
        [semconv_1.ATTR_DB_CLIENT_CONNECTION_STATE]: semconv_1.DB_CLIENT_CONNECTION_STATE_VALUE_IDLE,
        [semconv_1.ATTR_DB_CLIENT_CONNECTION_POOL_NAME]: poolName
    });
    connectionPendingRequests.add(pending - latestCounter.pending, {
        [semconv_1.ATTR_DB_CLIENT_CONNECTION_POOL_NAME]: poolName
    });
    return {
        used: used,
        idle: idle,
        pending: pending
    };
}
exports.updateCounter = updateCounter;
function patchCallbackPGPool(span, cb) {
    return function patchedCallback(err, res, done) {
        if (err) {
            span.setStatus({
                code: api_1.SpanStatusCode.ERROR,
                message: err.message
            });
        }
        span.end();
        cb.call(this, err, res, done);
    };
}
exports.patchCallbackPGPool = patchCallbackPGPool;
function patchClientConnectCallback(span, cb) {
    return function patchedClientConnectCallback(err) {
        if (err) {
            span.setStatus({
                code: api_1.SpanStatusCode.ERROR,
                message: err.message
            });
        }
        span.end();
        cb.apply(this, arguments);
    };
}
exports.patchClientConnectCallback = patchClientConnectCallback;
/**
 * Attempt to get a message string from a thrown value, while being quite
 * defensive, to recognize the fact that, in JS, any kind of value (even
 * primitives) can be thrown.
 */ function getErrorMessage(e) {
    return typeof e === 'object' && e !== null && 'message' in e ? String(e.message) : undefined;
}
exports.getErrorMessage = getErrorMessage;
function isObjectWithTextString(it) {
    var _a;
    return typeof it === 'object' && typeof ((_a = it) === null || _a === void 0 ? void 0 : _a.text) === 'string';
}
exports.isObjectWithTextString = isObjectWithTextString; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.51.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-pg'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PgInstrumentation = void 0;
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
 */ const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/internal-types.js [instrumentation] (ecmascript)");
const utils = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/utils.js [instrumentation] (ecmascript)");
const sql_common_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/sql-common/build/src/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/version.js [instrumentation] (ecmascript)");
const SpanNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/enums/SpanNames.js [instrumentation] (ecmascript)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const semconv_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/semconv.js [instrumentation] (ecmascript)");
function extractModuleExports(module) {
    return module[Symbol.toStringTag] === 'Module' ? module.default // ESM
     : module; // CommonJS
}
class PgInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
        // Pool events connect, acquire, release and remove can be called
        // multiple times without changing the values of total, idle and waiting
        // connections. The _connectionsCounter is used to keep track of latest
        // values and only update the metrics _connectionsCount and _connectionPendingRequests
        // when the value change.
        this._connectionsCounter = {
            used: 0,
            idle: 0,
            pending: 0
        };
    }
    _updateMetricInstruments() {
        this._operationDuration = this.meter.createHistogram(semconv_1.METRIC_DB_CLIENT_OPERATION_DURATION, {
            description: 'Duration of database client operations.',
            unit: 's',
            valueType: api_1.ValueType.DOUBLE,
            advice: {
                explicitBucketBoundaries: [
                    0.001,
                    0.005,
                    0.01,
                    0.05,
                    0.1,
                    0.5,
                    1,
                    5,
                    10
                ]
            }
        });
        this._connectionsCounter = {
            idle: 0,
            pending: 0,
            used: 0
        };
        this._connectionsCount = this.meter.createUpDownCounter(semconv_1.METRIC_DB_CLIENT_CONNECTION_COUNT, {
            description: 'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}'
        });
        this._connectionPendingRequests = this.meter.createUpDownCounter(semconv_1.METRIC_DB_CLIENT_CONNECTION_PENDING_REQUESTS, {
            description: 'The number of current pending requests for an open connection.',
            unit: '{connection}'
        });
    }
    init() {
        const SUPPORTED_PG_VERSIONS = [
            '>=8.0.3 <9'
        ];
        const modulePgNativeClient = new instrumentation_1.InstrumentationNodeModuleFile('pg/lib/native/client.js', SUPPORTED_PG_VERSIONS, this._patchPgClient.bind(this), this._unpatchPgClient.bind(this));
        const modulePgClient = new instrumentation_1.InstrumentationNodeModuleFile('pg/lib/client.js', SUPPORTED_PG_VERSIONS, this._patchPgClient.bind(this), this._unpatchPgClient.bind(this));
        const modulePG = new instrumentation_1.InstrumentationNodeModuleDefinition('pg', SUPPORTED_PG_VERSIONS, (module)=>{
            const moduleExports = extractModuleExports(module);
            this._patchPgClient(moduleExports.Client);
            return module;
        }, (module)=>{
            const moduleExports = extractModuleExports(module);
            this._unpatchPgClient(moduleExports.Client);
            return module;
        }, [
            modulePgClient,
            modulePgNativeClient
        ]);
        const modulePGPool = new instrumentation_1.InstrumentationNodeModuleDefinition('pg-pool', [
            '>=2.0.0 <4'
        ], (moduleExports)=>{
            if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.connect)) {
                this._unwrap(moduleExports.prototype, 'connect');
            }
            this._wrap(moduleExports.prototype, 'connect', this._getPoolConnectPatch());
            return moduleExports;
        }, (moduleExports)=>{
            if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.connect)) {
                this._unwrap(moduleExports.prototype, 'connect');
            }
        });
        return [
            modulePG,
            modulePGPool
        ];
    }
    _patchPgClient(module) {
        if (!module) {
            return;
        }
        const moduleExports = extractModuleExports(module);
        if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.query)) {
            this._unwrap(moduleExports.prototype, 'query');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.connect)) {
            this._unwrap(moduleExports.prototype, 'connect');
        }
        this._wrap(moduleExports.prototype, 'query', this._getClientQueryPatch());
        this._wrap(moduleExports.prototype, 'connect', this._getClientConnectPatch());
        return module;
    }
    _unpatchPgClient(module) {
        const moduleExports = extractModuleExports(module);
        if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.query)) {
            this._unwrap(moduleExports.prototype, 'query');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.connect)) {
            this._unwrap(moduleExports.prototype, 'connect');
        }
        return module;
    }
    _getClientConnectPatch() {
        const plugin = this;
        return (original)=>{
            return function connect(callback) {
                if (utils.shouldSkipInstrumentation(plugin.getConfig())) {
                    return original.call(this, callback);
                }
                const span = plugin.tracer.startSpan(SpanNames_1.SpanNames.CONNECT, {
                    kind: api_1.SpanKind.CLIENT,
                    attributes: utils.getSemanticAttributesFromConnection(this)
                });
                if (callback) {
                    const parentSpan = api_1.trace.getSpan(api_1.context.active());
                    callback = utils.patchClientConnectCallback(span, callback);
                    if (parentSpan) {
                        callback = api_1.context.bind(api_1.context.active(), callback);
                    }
                }
                const connectResult = api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
                    return original.call(this, callback);
                });
                return handleConnectResult(span, connectResult);
            };
        };
    }
    recordOperationDuration(attributes, startTime) {
        const metricsAttributes = {};
        const keysToCopy = [
            semantic_conventions_1.SEMATTRS_DB_SYSTEM,
            semconv_1.ATTR_DB_NAMESPACE,
            semantic_conventions_1.ATTR_ERROR_TYPE,
            semantic_conventions_1.ATTR_SERVER_PORT,
            semantic_conventions_1.ATTR_SERVER_ADDRESS,
            semconv_1.ATTR_DB_OPERATION_NAME
        ];
        keysToCopy.forEach((key)=>{
            if (key in attributes) {
                metricsAttributes[key] = attributes[key];
            }
        });
        const durationSeconds = (0, core_1.hrTimeToMilliseconds)((0, core_1.hrTimeDuration)(startTime, (0, core_1.hrTime)())) / 1000;
        this._operationDuration.record(durationSeconds, metricsAttributes);
    }
    _getClientQueryPatch() {
        const plugin = this;
        return (original)=>{
            this._diag.debug('Patching pg.Client.prototype.query');
            return function query(...args) {
                if (utils.shouldSkipInstrumentation(plugin.getConfig())) {
                    return original.apply(this, args);
                }
                const startTime = (0, core_1.hrTime)();
                // client.query(text, cb?), client.query(text, values, cb?), and
                // client.query(configObj, cb?) are all valid signatures. We construct
                // a queryConfig obj from all (valid) signatures to build the span in a
                // unified way. We verify that we at least have query text, and code
                // defensively when dealing with `queryConfig` after that (to handle all
                // the other invalid cases, like a non-array for values being provided).
                // The type casts here reflect only what we've actually validated.
                const arg0 = args[0];
                const firstArgIsString = typeof arg0 === 'string';
                const firstArgIsQueryObjectWithText = utils.isObjectWithTextString(arg0);
                // TODO: remove the `as ...` casts below when the TS version is upgraded.
                // Newer TS versions will use the result of firstArgIsQueryObjectWithText
                // to properly narrow arg0, but TS 4.3.5 does not.
                const queryConfig = firstArgIsString ? {
                    text: arg0,
                    values: Array.isArray(args[1]) ? args[1] : undefined
                } : firstArgIsQueryObjectWithText ? arg0 : undefined;
                const attributes = {
                    [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_POSTGRESQL,
                    [semconv_1.ATTR_DB_NAMESPACE]: this.database,
                    [semantic_conventions_1.ATTR_SERVER_PORT]: this.connectionParameters.port,
                    [semantic_conventions_1.ATTR_SERVER_ADDRESS]: this.connectionParameters.host
                };
                if (queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.text) {
                    attributes[semconv_1.ATTR_DB_OPERATION_NAME] = utils.parseNormalizedOperationName(queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.text);
                }
                const recordDuration = ()=>{
                    plugin.recordOperationDuration(attributes, startTime);
                };
                const instrumentationConfig = plugin.getConfig();
                const span = utils.handleConfigQuery.call(this, plugin.tracer, instrumentationConfig, queryConfig);
                // Modify query text w/ a tracing comment before invoking original for
                // tracing, but only if args[0] has one of our expected shapes.
                if (instrumentationConfig.addSqlCommenterCommentToQueries) {
                    if (firstArgIsString) {
                        args[0] = (0, sql_common_1.addSqlCommenterComment)(span, arg0);
                    } else if (firstArgIsQueryObjectWithText && !('name' in arg0)) {
                        // In the case of a query object, we need to ensure there's no name field
                        // as this indicates a prepared query, where the comment would remain the same
                        // for every invocation and contain an outdated trace context.
                        args[0] = Object.assign(Object.assign({}, arg0), {
                            text: (0, sql_common_1.addSqlCommenterComment)(span, arg0.text)
                        });
                    }
                }
                // Bind callback (if any) to parent span (if any)
                if (args.length > 0) {
                    const parentSpan = api_1.trace.getSpan(api_1.context.active());
                    if (typeof args[args.length - 1] === 'function') {
                        // Patch ParameterQuery callback
                        args[args.length - 1] = utils.patchCallback(instrumentationConfig, span, args[args.length - 1], attributes, recordDuration);
                        // If a parent span exists, bind the callback
                        if (parentSpan) {
                            args[args.length - 1] = api_1.context.bind(api_1.context.active(), args[args.length - 1]);
                        }
                    } else if (typeof (queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.callback) === 'function') {
                        // Patch ConfigQuery callback
                        let callback = utils.patchCallback(plugin.getConfig(), span, queryConfig.callback, attributes, recordDuration);
                        // If a parent span existed, bind the callback
                        if (parentSpan) {
                            callback = api_1.context.bind(api_1.context.active(), callback);
                        }
                        args[0].callback = callback;
                    }
                }
                const { requestHook } = instrumentationConfig;
                if (typeof requestHook === 'function' && queryConfig) {
                    (0, instrumentation_1.safeExecuteInTheMiddle)(()=>{
                        // pick keys to expose explicitly, so we're not leaking pg package
                        // internals that are subject to change
                        const { database, host, port, user } = this.connectionParameters;
                        const connection = {
                            database,
                            host,
                            port,
                            user
                        };
                        requestHook(span, {
                            connection,
                            query: {
                                text: queryConfig.text,
                                // nb: if `client.query` is called with illegal arguments
                                // (e.g., if `queryConfig.values` is passed explicitly, but a
                                // non-array is given), then the type casts will be wrong. But
                                // we leave it up to the queryHook to handle that, and we
                                // catch and swallow any errors it throws. The other options
                                // are all worse. E.g., we could leave `queryConfig.values`
                                // and `queryConfig.name` as `unknown`, but then the hook body
                                // would be forced to validate (or cast) them before using
                                // them, which seems incredibly cumbersome given that these
                                // casts will be correct 99.9% of the time -- and pg.query
                                // will immediately throw during development in the other .1%
                                // of cases. Alternatively, we could simply skip calling the
                                // hook when `values` or `name` don't have the expected type,
                                // but that would add unnecessary validation overhead to every
                                // hook invocation and possibly be even more confusing/unexpected.
                                values: queryConfig.values,
                                name: queryConfig.name
                            }
                        });
                    }, (err)=>{
                        if (err) {
                            plugin._diag.error('Error running query hook', err);
                        }
                    }, true);
                }
                let result;
                try {
                    result = original.apply(this, args);
                } catch (e) {
                    span.setStatus({
                        code: api_1.SpanStatusCode.ERROR,
                        message: utils.getErrorMessage(e)
                    });
                    span.end();
                    throw e;
                }
                // Bind promise to parent span and end the span
                if (result instanceof Promise) {
                    return result.then((result)=>{
                        // Return a pass-along promise which ends the span and then goes to user's orig resolvers
                        return new Promise((resolve)=>{
                            utils.handleExecutionResult(plugin.getConfig(), span, result);
                            recordDuration();
                            span.end();
                            resolve(result);
                        });
                    }).catch((error)=>{
                        return new Promise((_, reject)=>{
                            span.setStatus({
                                code: api_1.SpanStatusCode.ERROR,
                                message: error.message
                            });
                            recordDuration();
                            span.end();
                            reject(error);
                        });
                    });
                }
                // else returns void
                return result; // void
            };
        };
    }
    _setPoolConnectEventListeners(pgPool) {
        if (pgPool[internal_types_1.EVENT_LISTENERS_SET]) return;
        const poolName = utils.getPoolName(pgPool.options);
        pgPool.on('connect', ()=>{
            this._connectionsCounter = utils.updateCounter(poolName, pgPool, this._connectionsCount, this._connectionPendingRequests, this._connectionsCounter);
        });
        pgPool.on('acquire', ()=>{
            this._connectionsCounter = utils.updateCounter(poolName, pgPool, this._connectionsCount, this._connectionPendingRequests, this._connectionsCounter);
        });
        pgPool.on('remove', ()=>{
            this._connectionsCounter = utils.updateCounter(poolName, pgPool, this._connectionsCount, this._connectionPendingRequests, this._connectionsCounter);
        });
        pgPool.on('release', ()=>{
            this._connectionsCounter = utils.updateCounter(poolName, pgPool, this._connectionsCount, this._connectionPendingRequests, this._connectionsCounter);
        });
        pgPool[internal_types_1.EVENT_LISTENERS_SET] = true;
    }
    _getPoolConnectPatch() {
        const plugin = this;
        return (originalConnect)=>{
            return function connect(callback) {
                if (utils.shouldSkipInstrumentation(plugin.getConfig())) {
                    return originalConnect.call(this, callback);
                }
                // setup span
                const span = plugin.tracer.startSpan(SpanNames_1.SpanNames.POOL_CONNECT, {
                    kind: api_1.SpanKind.CLIENT,
                    attributes: utils.getSemanticAttributesFromPool(this.options)
                });
                plugin._setPoolConnectEventListeners(this);
                if (callback) {
                    const parentSpan = api_1.trace.getSpan(api_1.context.active());
                    callback = utils.patchCallbackPGPool(span, callback);
                    // If a parent span exists, bind the callback
                    if (parentSpan) {
                        callback = api_1.context.bind(api_1.context.active(), callback);
                    }
                }
                const connectResult = api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), ()=>{
                    return originalConnect.call(this, callback);
                });
                return handleConnectResult(span, connectResult);
            };
        };
    }
}
exports.PgInstrumentation = PgInstrumentation;
function handleConnectResult(span, connectResult) {
    if (!(connectResult instanceof Promise)) {
        return connectResult;
    }
    const connectResultPromise = connectResult;
    return api_1.context.bind(api_1.context.active(), connectResultPromise.then((result)=>{
        span.end();
        return result;
    }).catch((error)=>{
        span.setStatus({
            code: api_1.SpanStatusCode.ERROR,
            message: utils.getErrorMessage(error)
        });
        span.end();
        return Promise.reject(error);
    }));
} //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/types.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-pg/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@prisma/instrumentation/dist/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var index_exports = {};
__export(index_exports, {
    PrismaInstrumentation: ()=>PrismaInstrumentation,
    registerInstrumentations: ()=>import_instrumentation2.registerInstrumentations
});
module.exports = __toCommonJS(index_exports);
// src/PrismaInstrumentation.ts
var import_api2 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var import_instrumentation = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
// src/ActiveTracingHelper.ts
var import_api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
var showAllTraces = process.env.PRISMA_SHOW_ALL_TRACES === "true";
var nonSampledTraceParent = `00-10-10-00`;
function engineSpanKindToOtelSpanKind(engineSpanKind) {
    switch(engineSpanKind){
        case "client":
            return import_api.SpanKind.CLIENT;
        case "internal":
        default:
            return import_api.SpanKind.INTERNAL;
    }
}
var ActiveTracingHelper = class {
    traceMiddleware;
    tracerProvider;
    ignoreSpanTypes;
    constructor({ traceMiddleware, tracerProvider, ignoreSpanTypes }){
        this.traceMiddleware = traceMiddleware;
        this.tracerProvider = tracerProvider;
        this.ignoreSpanTypes = ignoreSpanTypes;
    }
    isEnabled() {
        return true;
    }
    getTraceParent(context) {
        const span = import_api.trace.getSpanContext(context ?? import_api.context.active());
        if (span) {
            return `00-${span.traceId}-${span.spanId}-0${span.traceFlags}`;
        }
        return nonSampledTraceParent;
    }
    dispatchEngineSpans(spans) {
        const tracer = this.tracerProvider.getTracer("prisma");
        const linkIds = /* @__PURE__ */ new Map();
        const roots = spans.filter((span)=>span.parentId === null);
        for (const root of roots){
            dispatchEngineSpan(tracer, root, spans, linkIds, this.ignoreSpanTypes);
        }
    }
    getActiveContext() {
        return import_api.context.active();
    }
    runInChildSpan(options, callback) {
        if (typeof options === "string") {
            options = {
                name: options
            };
        }
        if (options.internal && !showAllTraces) {
            return callback();
        }
        if (options.middleware && !this.traceMiddleware) {
            return callback();
        }
        const tracer = this.tracerProvider.getTracer("prisma");
        const context = options.context ?? this.getActiveContext();
        const name = `prisma:client:${options.name}`;
        if (shouldIgnoreSpan(name, this.ignoreSpanTypes)) {
            return callback();
        }
        if (options.active === false) {
            const span = tracer.startSpan(name, options, context);
            return endSpan(span, callback(span, context));
        }
        return tracer.startActiveSpan(name, options, (span)=>endSpan(span, callback(span, context)));
    }
};
function dispatchEngineSpan(tracer, engineSpan, allSpans, linkIds, ignoreSpanTypes) {
    if (shouldIgnoreSpan(engineSpan.name, ignoreSpanTypes)) return;
    const spanOptions = {
        attributes: engineSpan.attributes,
        kind: engineSpanKindToOtelSpanKind(engineSpan.kind),
        startTime: engineSpan.startTime
    };
    tracer.startActiveSpan(engineSpan.name, spanOptions, (span)=>{
        linkIds.set(engineSpan.id, span.spanContext().spanId);
        if (engineSpan.links) {
            span.addLinks(engineSpan.links.flatMap((link)=>{
                const linkedId = linkIds.get(link);
                if (!linkedId) {
                    return [];
                }
                return {
                    context: {
                        spanId: linkedId,
                        traceId: span.spanContext().traceId,
                        traceFlags: span.spanContext().traceFlags
                    }
                };
            }));
        }
        const children = allSpans.filter((s)=>s.parentId === engineSpan.id);
        for (const child of children){
            dispatchEngineSpan(tracer, child, allSpans, linkIds, ignoreSpanTypes);
        }
        span.end(engineSpan.endTime);
    });
}
function endSpan(span, result) {
    if (isPromiseLike(result)) {
        return result.then((value)=>{
            span.end();
            return value;
        }, (reason)=>{
            span.end();
            throw reason;
        });
    }
    span.end();
    return result;
}
function isPromiseLike(value) {
    return value != null && typeof value["then"] === "function";
}
function shouldIgnoreSpan(spanName, ignoreSpanTypes) {
    return ignoreSpanTypes.some((pattern)=>typeof pattern === "string" ? pattern === spanName : pattern.test(spanName));
}
// package.json
var package_default = {
    name: "@prisma/instrumentation",
    version: "6.8.2",
    description: "OpenTelemetry compliant instrumentation for Prisma Client",
    main: "dist/index.js",
    module: "dist/index.mjs",
    types: "dist/index.d.ts",
    exports: {
        ".": {
            require: {
                types: "./dist/index.d.ts",
                default: "./dist/index.js"
            },
            import: {
                types: "./dist/index.d.ts",
                default: "./dist/index.mjs"
            }
        }
    },
    license: "Apache-2.0",
    homepage: "https://www.prisma.io",
    repository: {
        type: "git",
        url: "https://github.com/prisma/prisma.git",
        directory: "packages/instrumentation"
    },
    bugs: "https://github.com/prisma/prisma/issues",
    devDependencies: {
        "@prisma/internals": "workspace:*",
        "@swc/core": "1.11.5",
        "@types/jest": "29.5.14",
        "@types/node": "18.19.76",
        "@opentelemetry/api": "1.9.0",
        jest: "29.7.0",
        "jest-junit": "16.0.0",
        typescript: "5.4.5"
    },
    dependencies: {
        "@opentelemetry/instrumentation": "^0.52.0 || ^0.53.0 || ^0.54.0 || ^0.55.0 || ^0.56.0 || ^0.57.0"
    },
    peerDependencies: {
        "@opentelemetry/api": "^1.8"
    },
    files: [
        "dist"
    ],
    keywords: [
        "prisma",
        "instrumentation",
        "opentelemetry",
        "otel"
    ],
    scripts: {
        dev: "DEV=true tsx helpers/build.ts",
        build: "tsx helpers/build.ts",
        prepublishOnly: "pnpm run build",
        test: "jest"
    },
    sideEffects: false
};
// src/constants.ts
var VERSION = package_default.version;
var majorVersion = VERSION.split(".")[0];
var GLOBAL_INSTRUMENTATION_ACCESSOR_KEY = "PRISMA_INSTRUMENTATION";
var GLOBAL_VERSIONED_INSTRUMENTATION_ACCESSOR_KEY = `V${majorVersion}_PRISMA_INSTRUMENTATION`;
var NAME = package_default.name;
var MODULE_NAME = "@prisma/client";
// src/PrismaInstrumentation.ts
var PrismaInstrumentation = class extends import_instrumentation.InstrumentationBase {
    tracerProvider;
    constructor(config = {}){
        super(NAME, VERSION, config);
    }
    setTracerProvider(tracerProvider) {
        this.tracerProvider = tracerProvider;
    }
    init() {
        const module2 = new import_instrumentation.InstrumentationNodeModuleDefinition(MODULE_NAME, [
            VERSION
        ]);
        return [
            module2
        ];
    }
    enable() {
        const config = this._config;
        const globalValue = {
            helper: new ActiveTracingHelper({
                traceMiddleware: config.middleware ?? false,
                tracerProvider: this.tracerProvider ?? import_api2.trace.getTracerProvider(),
                ignoreSpanTypes: config.ignoreSpanTypes ?? []
            })
        };
        global[GLOBAL_INSTRUMENTATION_ACCESSOR_KEY] = globalValue;
        global[GLOBAL_VERSIONED_INSTRUMENTATION_ACCESSOR_KEY] = globalValue;
    }
    disable() {
        delete global[GLOBAL_INSTRUMENTATION_ACCESSOR_KEY];
        delete global[GLOBAL_VERSIONED_INSTRUMENTATION_ACCESSOR_KEY];
    }
    isEnabled() {
        return Boolean(global[GLOBAL_VERSIONED_INSTRUMENTATION_ACCESSOR_KEY]);
    }
};
// src/index.ts
var import_instrumentation2 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    PrismaInstrumentation,
    registerInstrumentations
});
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.45.2';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-hapi'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HapiLifecycleMethodNames = exports.HapiLayerType = exports.handlerPatched = exports.HapiComponentName = void 0;
exports.HapiComponentName = '@hapi/hapi';
/**
 * This symbol is used to mark a Hapi route handler or server extension handler as
 * already patched, since its possible to use these handlers multiple times
 * i.e. when allowing multiple versions of one plugin, or when registering a plugin
 * multiple times on different servers.
 */ exports.handlerPatched = Symbol('hapi-handler-patched');
exports.HapiLayerType = {
    ROUTER: 'router',
    PLUGIN: 'plugin',
    EXT: 'server.ext'
};
exports.HapiLifecycleMethodNames = new Set([
    'onPreAuth',
    'onCredentials',
    'onPostAuth',
    'onPreHandler',
    'onPostHandler',
    'onPreResponse',
    'onRequest'
]); //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
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
 */ var AttributeNames;
(function(AttributeNames) {
    AttributeNames["HAPI_TYPE"] = "hapi.type";
    AttributeNames["PLUGIN_NAME"] = "hapi.plugin.name";
    AttributeNames["EXT_TYPE"] = "server.ext.type";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPluginFromInput = exports.getExtMetadata = exports.getRouteMetadata = exports.isPatchableExtMethod = exports.isDirectExtInput = exports.isLifecycleExtEventObj = exports.isLifecycleExtType = exports.getPluginName = void 0;
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/internal-types.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
function getPluginName(plugin) {
    if (plugin.name) {
        return plugin.name;
    } else {
        return plugin.pkg.name;
    }
}
exports.getPluginName = getPluginName;
const isLifecycleExtType = (variableToCheck)=>{
    return typeof variableToCheck === 'string' && internal_types_1.HapiLifecycleMethodNames.has(variableToCheck);
};
exports.isLifecycleExtType = isLifecycleExtType;
const isLifecycleExtEventObj = (variableToCheck)=>{
    var _a;
    const event = (_a = variableToCheck) === null || _a === void 0 ? void 0 : _a.type;
    return event !== undefined && (0, exports.isLifecycleExtType)(event);
};
exports.isLifecycleExtEventObj = isLifecycleExtEventObj;
const isDirectExtInput = (variableToCheck)=>{
    return Array.isArray(variableToCheck) && variableToCheck.length <= 3 && (0, exports.isLifecycleExtType)(variableToCheck[0]) && typeof variableToCheck[1] === 'function';
};
exports.isDirectExtInput = isDirectExtInput;
const isPatchableExtMethod = (variableToCheck)=>{
    return !Array.isArray(variableToCheck);
};
exports.isPatchableExtMethod = isPatchableExtMethod;
const getRouteMetadata = (route, pluginName)=>{
    if (pluginName) {
        return {
            attributes: {
                [semantic_conventions_1.SEMATTRS_HTTP_ROUTE]: route.path,
                [semantic_conventions_1.SEMATTRS_HTTP_METHOD]: route.method,
                [AttributeNames_1.AttributeNames.HAPI_TYPE]: internal_types_1.HapiLayerType.PLUGIN,
                [AttributeNames_1.AttributeNames.PLUGIN_NAME]: pluginName
            },
            name: `${pluginName}: route - ${route.path}`
        };
    }
    return {
        attributes: {
            [semantic_conventions_1.SEMATTRS_HTTP_ROUTE]: route.path,
            [semantic_conventions_1.SEMATTRS_HTTP_METHOD]: route.method,
            [AttributeNames_1.AttributeNames.HAPI_TYPE]: internal_types_1.HapiLayerType.ROUTER
        },
        name: `route - ${route.path}`
    };
};
exports.getRouteMetadata = getRouteMetadata;
const getExtMetadata = (extPoint, pluginName)=>{
    if (pluginName) {
        return {
            attributes: {
                [AttributeNames_1.AttributeNames.EXT_TYPE]: extPoint,
                [AttributeNames_1.AttributeNames.HAPI_TYPE]: internal_types_1.HapiLayerType.EXT,
                [AttributeNames_1.AttributeNames.PLUGIN_NAME]: pluginName
            },
            name: `${pluginName}: ext - ${extPoint}`
        };
    }
    return {
        attributes: {
            [AttributeNames_1.AttributeNames.EXT_TYPE]: extPoint,
            [AttributeNames_1.AttributeNames.HAPI_TYPE]: internal_types_1.HapiLayerType.EXT
        },
        name: `ext - ${extPoint}`
    };
};
exports.getExtMetadata = getExtMetadata;
const getPluginFromInput = (pluginObj)=>{
    if ('plugin' in pluginObj) {
        if ('plugin' in pluginObj.plugin) {
            return pluginObj.plugin.plugin;
        }
        return pluginObj.plugin;
    }
    return pluginObj;
};
exports.getPluginFromInput = getPluginFromInput; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HapiInstrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/version.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/internal-types.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/utils.js [instrumentation] (ecmascript)");
/** Hapi instrumentation for OpenTelemetry */ class HapiInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return new instrumentation_1.InstrumentationNodeModuleDefinition(internal_types_1.HapiComponentName, [
            '>=17.0.0 <22'
        ], (module)=>{
            const moduleExports = module[Symbol.toStringTag] === 'Module' ? module.default : module;
            if (!(0, instrumentation_1.isWrapped)(moduleExports.server)) {
                this._wrap(moduleExports, 'server', this._getServerPatch.bind(this));
            }
            if (!(0, instrumentation_1.isWrapped)(moduleExports.Server)) {
                this._wrap(moduleExports, 'Server', this._getServerPatch.bind(this));
            }
            return moduleExports;
        }, (module)=>{
            const moduleExports = module[Symbol.toStringTag] === 'Module' ? module.default : module;
            this._massUnwrap([
                moduleExports
            ], [
                'server',
                'Server'
            ]);
        });
    }
    /**
     * Patches the Hapi.server and Hapi.Server functions in order to instrument
     * the server.route, server.ext, and server.register functions via calls to the
     * @function _getServerRoutePatch, @function _getServerExtPatch, and
     * @function _getServerRegisterPatch functions
     * @param original - the original Hapi Server creation function
     */ _getServerPatch(original) {
        const instrumentation = this;
        const self = this;
        return function server(opts) {
            const newServer = original.apply(this, [
                opts
            ]);
            self._wrap(newServer, 'route', (originalRouter)=>{
                return instrumentation._getServerRoutePatch.bind(instrumentation)(originalRouter);
            });
            // Casting as any is necessary here due to multiple overloads on the Hapi.ext
            // function, which requires supporting a variety of different parameters
            // as extension inputs
            self._wrap(newServer, 'ext', (originalExtHandler)=>{
                return instrumentation._getServerExtPatch.bind(instrumentation)(// eslint-disable-next-line @typescript-eslint/no-explicit-any
                originalExtHandler);
            });
            // Casting as any is necessary here due to multiple overloads on the Hapi.Server.register
            // function, which requires supporting a variety of different types of Plugin inputs
            self._wrap(newServer, 'register', // eslint-disable-next-line @typescript-eslint/no-explicit-any
            instrumentation._getServerRegisterPatch.bind(instrumentation));
            return newServer;
        };
    }
    /**
     * Patches the plugin register function used by the Hapi Server. This function
     * goes through each plugin that is being registered and adds instrumentation
     * via a call to the @function _wrapRegisterHandler function.
     * @param {RegisterFunction<T>} original - the original register function which
     * registers each plugin on the server
     */ _getServerRegisterPatch(original) {
        const instrumentation = this;
        return function register(pluginInput, options) {
            if (Array.isArray(pluginInput)) {
                for (const pluginObj of pluginInput){
                    const plugin = (0, utils_1.getPluginFromInput)(pluginObj);
                    instrumentation._wrapRegisterHandler(plugin);
                }
            } else {
                const plugin = (0, utils_1.getPluginFromInput)(pluginInput);
                instrumentation._wrapRegisterHandler(plugin);
            }
            return original.apply(this, [
                pluginInput,
                options
            ]);
        };
    }
    /**
     * Patches the Server.ext function which adds extension methods to the specified
     * point along the request lifecycle. This function accepts the full range of
     * accepted input into the standard Hapi `server.ext` function. For each extension,
     * it adds instrumentation to the handler via a call to the @function _wrapExtMethods
     * function.
     * @param original - the original ext function which adds the extension method to the server
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server extension. Else, signifies that the extension was added directly
     */ _getServerExtPatch(original, pluginName) {
        const instrumentation = this;
        return function ext(...args) {
            if (Array.isArray(args[0])) {
                const eventsList = args[0];
                for(let i = 0; i < eventsList.length; i++){
                    const eventObj = eventsList[i];
                    if ((0, utils_1.isLifecycleExtType)(eventObj.type)) {
                        const lifecycleEventObj = eventObj;
                        const handler = instrumentation._wrapExtMethods(lifecycleEventObj.method, eventObj.type, pluginName);
                        lifecycleEventObj.method = handler;
                        eventsList[i] = lifecycleEventObj;
                    }
                }
                return original.apply(this, args);
            } else if ((0, utils_1.isDirectExtInput)(args)) {
                const extInput = args;
                const method = extInput[1];
                const handler = instrumentation._wrapExtMethods(method, extInput[0], pluginName);
                return original.apply(this, [
                    extInput[0],
                    handler,
                    extInput[2]
                ]);
            } else if ((0, utils_1.isLifecycleExtEventObj)(args[0])) {
                const lifecycleEventObj = args[0];
                const handler = instrumentation._wrapExtMethods(lifecycleEventObj.method, lifecycleEventObj.type, pluginName);
                lifecycleEventObj.method = handler;
                return original.call(this, lifecycleEventObj);
            }
            return original.apply(this, args);
        };
    }
    /**
     * Patches the Server.route function. This function accepts either one or an array
     * of Hapi.ServerRoute objects and adds instrumentation on each route via a call to
     * the @function _wrapRouteHandler function.
     * @param {HapiServerRouteInputMethod} original - the original route function which adds
     * the route to the server
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server route. Else, signifies that the route was added directly
     */ _getServerRoutePatch(original, pluginName) {
        const instrumentation = this;
        return function route(route) {
            if (Array.isArray(route)) {
                for(let i = 0; i < route.length; i++){
                    const newRoute = instrumentation._wrapRouteHandler.call(instrumentation, route[i], pluginName);
                    route[i] = newRoute;
                }
            } else {
                route = instrumentation._wrapRouteHandler.call(instrumentation, route, pluginName);
            }
            return original.apply(this, [
                route
            ]);
        };
    }
    /**
     * Wraps newly registered plugins to add instrumentation to the plugin's clone of
     * the original server. Specifically, wraps the server.route and server.ext functions
     * via calls to @function _getServerRoutePatch and @function _getServerExtPatch
     * @param {Hapi.Plugin<T>} plugin - the new plugin which is being instrumented
     */ _wrapRegisterHandler(plugin) {
        const instrumentation = this;
        const pluginName = (0, utils_1.getPluginName)(plugin);
        const oldRegister = plugin.register;
        const self = this;
        const newRegisterHandler = function(server, options) {
            self._wrap(server, 'route', (original)=>{
                return instrumentation._getServerRoutePatch.bind(instrumentation)(original, pluginName);
            });
            // Casting as any is necessary here due to multiple overloads on the Hapi.ext
            // function, which requires supporting a variety of different parameters
            // as extension inputs
            self._wrap(server, 'ext', (originalExtHandler)=>{
                return instrumentation._getServerExtPatch.bind(instrumentation)(// eslint-disable-next-line @typescript-eslint/no-explicit-any
                originalExtHandler, pluginName);
            });
            return oldRegister.call(this, server, options);
        };
        plugin.register = newRegisterHandler;
    }
    /**
     * Wraps request extension methods to add instrumentation to each new extension handler.
     * Patches each individual extension in order to create the
     * span and propagate context. It does not create spans when there is no parent span.
     * @param {PatchableExtMethod | PatchableExtMethod[]} method - the request extension
     * handler which is being instrumented
     * @param {Hapi.ServerRequestExtType} extPoint - the point in the Hapi request lifecycle
     * which this extension targets
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server route. Else, signifies that the route was added directly
     */ _wrapExtMethods(method, extPoint, pluginName) {
        const instrumentation = this;
        if (method instanceof Array) {
            for(let i = 0; i < method.length; i++){
                method[i] = instrumentation._wrapExtMethods(method[i], extPoint);
            }
            return method;
        } else if ((0, utils_1.isPatchableExtMethod)(method)) {
            if (method[internal_types_1.handlerPatched] === true) return method;
            method[internal_types_1.handlerPatched] = true;
            const newHandler = async function(...params) {
                if (api.trace.getSpan(api.context.active()) === undefined) {
                    return await method.apply(this, params);
                }
                const metadata = (0, utils_1.getExtMetadata)(extPoint, pluginName);
                const span = instrumentation.tracer.startSpan(metadata.name, {
                    attributes: metadata.attributes
                });
                try {
                    return await api.context.with(api.trace.setSpan(api.context.active(), span), method, undefined, ...params);
                } catch (err) {
                    span.recordException(err);
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR,
                        message: err.message
                    });
                    throw err;
                } finally{
                    span.end();
                }
            };
            return newHandler;
        }
        return method;
    }
    /**
     * Patches each individual route handler method in order to create the
     * span and propagate context. It does not create spans when there is no parent span.
     * @param {PatchableServerRoute} route - the route handler which is being instrumented
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server route. Else, signifies that the route was added directly
     */ _wrapRouteHandler(route, pluginName) {
        var _a;
        const instrumentation = this;
        if (route[internal_types_1.handlerPatched] === true) return route;
        route[internal_types_1.handlerPatched] = true;
        const wrapHandler = (oldHandler)=>{
            return async function(...params) {
                if (api.trace.getSpan(api.context.active()) === undefined) {
                    return await oldHandler.call(this, ...params);
                }
                const rpcMetadata = (0, core_1.getRPCMetadata)(api.context.active());
                if ((rpcMetadata === null || rpcMetadata === void 0 ? void 0 : rpcMetadata.type) === core_1.RPCType.HTTP) {
                    rpcMetadata.route = route.path;
                }
                const metadata = (0, utils_1.getRouteMetadata)(route, pluginName);
                const span = instrumentation.tracer.startSpan(metadata.name, {
                    attributes: metadata.attributes
                });
                try {
                    return await api.context.with(api.trace.setSpan(api.context.active(), span), ()=>oldHandler.call(this, ...params));
                } catch (err) {
                    span.recordException(err);
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR,
                        message: err.message
                    });
                    throw err;
                } finally{
                    span.end();
                }
            };
        };
        if (typeof route.handler === 'function') {
            route.handler = wrapHandler(route.handler);
        } else if (typeof route.options === 'function') {
            const oldOptions = route.options;
            route.options = function(server) {
                const options = oldOptions(server);
                if (typeof options.handler === 'function') {
                    options.handler = wrapHandler(options.handler);
                }
                return options;
            };
        } else if (typeof ((_a = route.options) === null || _a === void 0 ? void 0 : _a.handler) === 'function') {
            route.options.handler = wrapHandler(route.options.handler);
        }
        return route;
    }
}
exports.HapiInstrumentation = HapiInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-hapi/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KoaLayerType = void 0;
var KoaLayerType;
(function(KoaLayerType) {
    KoaLayerType["ROUTER"] = "router";
    KoaLayerType["MIDDLEWARE"] = "middleware";
})(KoaLayerType = exports.KoaLayerType || (exports.KoaLayerType = {})); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.47.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-koa'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttributeNames = void 0;
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
 */ var AttributeNames;
(function(AttributeNames) {
    AttributeNames["KOA_TYPE"] = "koa.type";
    AttributeNames["KOA_NAME"] = "koa.name";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isLayerIgnored = exports.getMiddlewareMetadata = void 0;
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
 */ const types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/types.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const getMiddlewareMetadata = (context, layer, isRouter, layerPath)=>{
    var _a;
    if (isRouter) {
        return {
            attributes: {
                [AttributeNames_1.AttributeNames.KOA_NAME]: layerPath === null || layerPath === void 0 ? void 0 : layerPath.toString(),
                [AttributeNames_1.AttributeNames.KOA_TYPE]: types_1.KoaLayerType.ROUTER,
                [semantic_conventions_1.SEMATTRS_HTTP_ROUTE]: layerPath === null || layerPath === void 0 ? void 0 : layerPath.toString()
            },
            name: context._matchedRouteName || `router - ${layerPath}`
        };
    } else {
        return {
            attributes: {
                [AttributeNames_1.AttributeNames.KOA_NAME]: (_a = layer.name) !== null && _a !== void 0 ? _a : 'middleware',
                [AttributeNames_1.AttributeNames.KOA_TYPE]: types_1.KoaLayerType.MIDDLEWARE
            },
            name: `middleware - ${layer.name}`
        };
    }
};
exports.getMiddlewareMetadata = getMiddlewareMetadata;
/**
 * Check whether the given request is ignored by configuration
 * @param [list] List of ignore patterns
 * @param [onException] callback for doing something when an exception has
 *     occurred
 */ const isLayerIgnored = (type, config)=>{
    var _a;
    return !!(Array.isArray(config === null || config === void 0 ? void 0 : config.ignoreLayersType) && ((_a = config === null || config === void 0 ? void 0 : config.ignoreLayersType) === null || _a === void 0 ? void 0 : _a.includes(type)));
};
exports.isLayerIgnored = isLayerIgnored; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kLayerPatched = void 0;
/**
 * This symbol is used to mark a Koa layer as being already instrumented
 * since its possible to use a given layer multiple times (ex: middlewares)
 */ exports.kLayerPatched = Symbol('koa-layer-patched'); //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KoaInstrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/types.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/version.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/utils.js [instrumentation] (ecmascript)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/internal-types.js [instrumentation] (ecmascript)");
/** Koa instrumentation for OpenTelemetry */ class KoaInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return new instrumentation_1.InstrumentationNodeModuleDefinition('koa', [
            '>=2.0.0 <3'
        ], (module)=>{
            const moduleExports = module[Symbol.toStringTag] === 'Module' ? module.default // ESM
             : module; // CommonJS
            if (moduleExports == null) {
                return moduleExports;
            }
            if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.use)) {
                this._unwrap(moduleExports.prototype, 'use');
            }
            this._wrap(moduleExports.prototype, 'use', this._getKoaUsePatch.bind(this));
            return module;
        }, (module)=>{
            const moduleExports = module[Symbol.toStringTag] === 'Module' ? module.default // ESM
             : module; // CommonJS
            if ((0, instrumentation_1.isWrapped)(moduleExports.prototype.use)) {
                this._unwrap(moduleExports.prototype, 'use');
            }
        });
    }
    /**
     * Patches the Koa.use function in order to instrument each original
     * middleware layer which is introduced
     * @param {KoaMiddleware} middleware - the original middleware function
     */ _getKoaUsePatch(original) {
        const plugin = this;
        return function use(middlewareFunction) {
            let patchedFunction;
            if (middlewareFunction.router) {
                patchedFunction = plugin._patchRouterDispatch(middlewareFunction);
            } else {
                patchedFunction = plugin._patchLayer(middlewareFunction, false);
            }
            return original.apply(this, [
                patchedFunction
            ]);
        };
    }
    /**
     * Patches the dispatch function used by @koa/router. This function
     * goes through each routed middleware and adds instrumentation via a call
     * to the @function _patchLayer function.
     * @param {KoaMiddleware} dispatchLayer - the original dispatch function which dispatches
     * routed middleware
     */ _patchRouterDispatch(dispatchLayer) {
        var _a;
        api.diag.debug('Patching @koa/router dispatch');
        const router = dispatchLayer.router;
        const routesStack = (_a = router === null || router === void 0 ? void 0 : router.stack) !== null && _a !== void 0 ? _a : [];
        for (const pathLayer of routesStack){
            const path = pathLayer.path;
            const pathStack = pathLayer.stack;
            for(let j = 0; j < pathStack.length; j++){
                const routedMiddleware = pathStack[j];
                pathStack[j] = this._patchLayer(routedMiddleware, true, path);
            }
        }
        return dispatchLayer;
    }
    /**
     * Patches each individual @param middlewareLayer function in order to create the
     * span and propagate context. It does not create spans when there is no parent span.
     * @param {KoaMiddleware} middlewareLayer - the original middleware function.
     * @param {boolean} isRouter - tracks whether the original middleware function
     * was dispatched by the router originally
     * @param {string?} layerPath - if present, provides additional data from the
     * router about the routed path which the middleware is attached to
     */ _patchLayer(middlewareLayer, isRouter, layerPath) {
        const layerType = isRouter ? types_1.KoaLayerType.ROUTER : types_1.KoaLayerType.MIDDLEWARE;
        // Skip patching layer if its ignored in the config
        if (middlewareLayer[internal_types_1.kLayerPatched] === true || (0, utils_1.isLayerIgnored)(layerType, this.getConfig())) return middlewareLayer;
        if (middlewareLayer.constructor.name === 'GeneratorFunction' || middlewareLayer.constructor.name === 'AsyncGeneratorFunction') {
            api.diag.debug('ignoring generator-based Koa middleware layer');
            return middlewareLayer;
        }
        middlewareLayer[internal_types_1.kLayerPatched] = true;
        api.diag.debug('patching Koa middleware layer');
        return async (context, next)=>{
            const parent = api.trace.getSpan(api.context.active());
            if (parent === undefined) {
                return middlewareLayer(context, next);
            }
            const metadata = (0, utils_1.getMiddlewareMetadata)(context, middlewareLayer, isRouter, layerPath);
            const span = this.tracer.startSpan(metadata.name, {
                attributes: metadata.attributes
            });
            const rpcMetadata = (0, core_1.getRPCMetadata)(api.context.active());
            if ((rpcMetadata === null || rpcMetadata === void 0 ? void 0 : rpcMetadata.type) === core_1.RPCType.HTTP && context._matchedRoute) {
                rpcMetadata.route = context._matchedRoute.toString();
            }
            const { requestHook } = this.getConfig();
            if (requestHook) {
                (0, instrumentation_1.safeExecuteInTheMiddle)(()=>requestHook(span, {
                        context,
                        middlewareLayer,
                        layerType
                    }), (e)=>{
                    if (e) {
                        api.diag.error('koa instrumentation: request hook failed', e);
                    }
                }, true);
            }
            const newContext = api.trace.setSpan(api.context.active(), span);
            return api.context.with(newContext, async ()=>{
                try {
                    return await middlewareLayer(context, next);
                } catch (err) {
                    span.recordException(err);
                    throw err;
                } finally{
                    span.end();
                }
            });
        };
    }
}
exports.KoaInstrumentation = KoaInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/types.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-koa/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectNames = exports.ConnectTypes = exports.AttributeNames = void 0;
var AttributeNames;
(function(AttributeNames) {
    AttributeNames["CONNECT_TYPE"] = "connect.type";
    AttributeNames["CONNECT_NAME"] = "connect.name";
})(AttributeNames = exports.AttributeNames || (exports.AttributeNames = {}));
var ConnectTypes;
(function(ConnectTypes) {
    ConnectTypes["MIDDLEWARE"] = "middleware";
    ConnectTypes["REQUEST_HANDLER"] = "request_handler";
})(ConnectTypes = exports.ConnectTypes || (exports.ConnectTypes = {}));
var ConnectNames;
(function(ConnectNames) {
    ConnectNames["MIDDLEWARE"] = "middleware";
    ConnectNames["REQUEST_HANDLER"] = "request handler";
})(ConnectNames = exports.ConnectNames || (exports.ConnectNames = {})); //# sourceMappingURL=AttributeNames.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.43.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-connect'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/internal-types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._LAYERS_STORE_PROPERTY = void 0;
exports._LAYERS_STORE_PROPERTY = Symbol('opentelemetry.instrumentation-connect.request-route-stack'); //# sourceMappingURL=internal-types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateRoute = exports.replaceCurrentStackRoute = exports.addNewStackLayer = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const internal_types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/internal-types.js [instrumentation] (ecmascript)");
const addNewStackLayer = (request)=>{
    if (Array.isArray(request[internal_types_1._LAYERS_STORE_PROPERTY]) === false) {
        Object.defineProperty(request, internal_types_1._LAYERS_STORE_PROPERTY, {
            enumerable: false,
            value: []
        });
    }
    request[internal_types_1._LAYERS_STORE_PROPERTY].push('/');
    const stackLength = request[internal_types_1._LAYERS_STORE_PROPERTY].length;
    return ()=>{
        if (stackLength === request[internal_types_1._LAYERS_STORE_PROPERTY].length) {
            request[internal_types_1._LAYERS_STORE_PROPERTY].pop();
        } else {
            api_1.diag.warn('Connect: Trying to pop the stack multiple time');
        }
    };
};
exports.addNewStackLayer = addNewStackLayer;
const replaceCurrentStackRoute = (request, newRoute)=>{
    if (newRoute) {
        request[internal_types_1._LAYERS_STORE_PROPERTY].splice(-1, 1, newRoute);
    }
};
exports.replaceCurrentStackRoute = replaceCurrentStackRoute;
// generate route from existing stack on request object.
// splash between stack layer will be deduped
// ["/first/", "/second", "/third/"] => /first/second/third/
const generateRoute = (request)=>{
    return request[internal_types_1._LAYERS_STORE_PROPERTY].reduce((acc, sub)=>acc.replace(/\/+$/, '') + sub);
};
exports.generateRoute = generateRoute; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectInstrumentation = exports.ANONYMOUS_NAME = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const AttributeNames_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/version.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/utils.js [instrumentation] (ecmascript)");
exports.ANONYMOUS_NAME = 'anonymous';
/** Connect instrumentation for OpenTelemetry */ class ConnectInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition('connect', [
                '>=3.0.0 <4'
            ], (moduleExports)=>{
                return this._patchConstructor(moduleExports);
            })
        ];
    }
    _patchApp(patchedApp) {
        if (!(0, instrumentation_1.isWrapped)(patchedApp.use)) {
            this._wrap(patchedApp, 'use', this._patchUse.bind(this));
        }
        if (!(0, instrumentation_1.isWrapped)(patchedApp.handle)) {
            this._wrap(patchedApp, 'handle', this._patchHandle.bind(this));
        }
    }
    _patchConstructor(original) {
        const instrumentation = this;
        return function(...args) {
            const app = original.apply(this, args);
            instrumentation._patchApp(app);
            return app;
        };
    }
    _patchNext(next, finishSpan) {
        return function nextFunction(err) {
            const result = next.apply(this, [
                err
            ]);
            finishSpan();
            return result;
        };
    }
    _startSpan(routeName, middleWare) {
        let connectType;
        let connectName;
        let connectTypeName;
        if (routeName) {
            connectType = AttributeNames_1.ConnectTypes.REQUEST_HANDLER;
            connectTypeName = AttributeNames_1.ConnectNames.REQUEST_HANDLER;
            connectName = routeName;
        } else {
            connectType = AttributeNames_1.ConnectTypes.MIDDLEWARE;
            connectTypeName = AttributeNames_1.ConnectNames.MIDDLEWARE;
            connectName = middleWare.name || exports.ANONYMOUS_NAME;
        }
        const spanName = `${connectTypeName} - ${connectName}`;
        const options = {
            attributes: {
                [semantic_conventions_1.SEMATTRS_HTTP_ROUTE]: routeName.length > 0 ? routeName : '/',
                [AttributeNames_1.AttributeNames.CONNECT_TYPE]: connectType,
                [AttributeNames_1.AttributeNames.CONNECT_NAME]: connectName
            }
        };
        return this.tracer.startSpan(spanName, options);
    }
    _patchMiddleware(routeName, middleWare) {
        const instrumentation = this;
        const isErrorMiddleware = middleWare.length === 4;
        function patchedMiddleware() {
            if (!instrumentation.isEnabled()) {
                return middleWare.apply(this, arguments);
            }
            const [reqArgIdx, resArgIdx, nextArgIdx] = isErrorMiddleware ? [
                1,
                2,
                3
            ] : [
                0,
                1,
                2
            ];
            const req = arguments[reqArgIdx];
            const res = arguments[resArgIdx];
            const next = arguments[nextArgIdx];
            (0, utils_1.replaceCurrentStackRoute)(req, routeName);
            const rpcMetadata = (0, core_1.getRPCMetadata)(api_1.context.active());
            if (routeName && (rpcMetadata === null || rpcMetadata === void 0 ? void 0 : rpcMetadata.type) === core_1.RPCType.HTTP) {
                rpcMetadata.route = (0, utils_1.generateRoute)(req);
            }
            let spanName = '';
            if (routeName) {
                spanName = `request handler - ${routeName}`;
            } else {
                spanName = `middleware - ${middleWare.name || exports.ANONYMOUS_NAME}`;
            }
            const span = instrumentation._startSpan(routeName, middleWare);
            instrumentation._diag.debug('start span', spanName);
            let spanFinished = false;
            function finishSpan() {
                if (!spanFinished) {
                    spanFinished = true;
                    instrumentation._diag.debug(`finishing span ${span.name}`);
                    span.end();
                } else {
                    instrumentation._diag.debug(`span ${span.name} - already finished`);
                }
                res.removeListener('close', finishSpan);
            }
            res.addListener('close', finishSpan);
            arguments[nextArgIdx] = instrumentation._patchNext(next, finishSpan);
            return middleWare.apply(this, arguments);
        }
        Object.defineProperty(patchedMiddleware, 'length', {
            value: middleWare.length,
            writable: false,
            configurable: true
        });
        return patchedMiddleware;
    }
    _patchUse(original) {
        const instrumentation = this;
        return function(...args) {
            const middleWare = args[args.length - 1];
            const routeName = args[args.length - 2] || '';
            args[args.length - 1] = instrumentation._patchMiddleware(routeName, middleWare);
            return original.apply(this, args);
        };
    }
    _patchHandle(original) {
        const instrumentation = this;
        return function() {
            const [reqIdx, outIdx] = [
                0,
                2
            ];
            const req = arguments[reqIdx];
            const out = arguments[outIdx];
            const completeStack = (0, utils_1.addNewStackLayer)(req);
            if (typeof out === 'function') {
                arguments[outIdx] = instrumentation._patchOut(out, completeStack);
            }
            return original.apply(this, arguments);
        };
    }
    _patchOut(out, completeStack) {
        return function nextFunction(...args) {
            completeStack();
            return Reflect.apply(out, this, args);
        };
    }
}
exports.ConnectInstrumentation = ConnectInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/enums/AttributeNames.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-connect/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.44.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-knex'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/constants.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SUPPORTED_VERSIONS = exports.MODULE_NAME = void 0;
exports.MODULE_NAME = 'knex';
exports.SUPPORTED_VERSIONS = [
    // use "lib/execution" for runner.js, "lib" for client.js as basepath, latest tested 0.95.6
    '>=0.22.0 <4',
    // use "lib" as basepath
    '>=0.10.0 <0.18.0',
    '>=0.19.0 <0.22.0',
    // use "src" as basepath
    '>=0.18.0 <0.19.0'
]; //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractTableName = exports.limitLength = exports.getName = exports.mapSystem = exports.otelExceptionFromKnexError = exports.getFormatter = void 0;
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const getFormatter = (runner)=>{
    if (runner) {
        if (runner.client) {
            if (runner.client._formatQuery) {
                return runner.client._formatQuery.bind(runner.client);
            } else if (runner.client.SqlString) {
                return runner.client.SqlString.format.bind(runner.client.SqlString);
            }
        }
        if (runner.builder) {
            return runner.builder.toString.bind(runner.builder);
        }
    }
    return ()=>'<noop formatter>';
};
exports.getFormatter = getFormatter;
function otelExceptionFromKnexError(err, message) {
    if (!(err && err instanceof Error)) {
        return err;
    }
    return {
        message,
        code: err.code,
        stack: err.stack,
        name: err.name
    };
}
exports.otelExceptionFromKnexError = otelExceptionFromKnexError;
const systemMap = new Map([
    [
        'sqlite3',
        semantic_conventions_1.DBSYSTEMVALUES_SQLITE
    ],
    [
        'pg',
        semantic_conventions_1.DBSYSTEMVALUES_POSTGRESQL
    ]
]);
const mapSystem = (knexSystem)=>{
    return systemMap.get(knexSystem) || knexSystem;
};
exports.mapSystem = mapSystem;
const getName = (db, operation, table)=>{
    if (operation) {
        if (table) {
            return `${operation} ${db}.${table}`;
        }
        return `${operation} ${db}`;
    }
    return db;
};
exports.getName = getName;
const limitLength = (str, maxLength)=>{
    if (typeof str === 'string' && typeof maxLength === 'number' && 0 < maxLength && maxLength < str.length) {
        return str.substring(0, maxLength) + '..';
    }
    return str;
};
exports.limitLength = limitLength;
const extractTableName = (builder)=>{
    var _a;
    const table = (_a = builder === null || builder === void 0 ? void 0 : builder._single) === null || _a === void 0 ? void 0 : _a.table;
    if (typeof table === 'object') {
        return (0, exports.extractTableName)(table);
    }
    return table;
};
exports.extractTableName = extractTableName; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KnexInstrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/version.js [instrumentation] (ecmascript)");
const constants = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/constants.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const utils = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/utils.js [instrumentation] (ecmascript)");
const contextSymbol = Symbol('opentelemetry.instrumentation-knex.context');
const DEFAULT_CONFIG = {
    maxQueryLength: 1022,
    requireParentSpan: false
};
class KnexInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    setConfig(config = {}) {
        super.setConfig(Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
    }
    init() {
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition(constants.MODULE_NAME, constants.SUPPORTED_VERSIONS);
        module.files.push(this.getClientNodeModuleFileInstrumentation('src'), this.getClientNodeModuleFileInstrumentation('lib'), this.getRunnerNodeModuleFileInstrumentation('src'), this.getRunnerNodeModuleFileInstrumentation('lib'), this.getRunnerNodeModuleFileInstrumentation('lib/execution'));
        return module;
    }
    getRunnerNodeModuleFileInstrumentation(basePath) {
        return new instrumentation_1.InstrumentationNodeModuleFile(`knex/${basePath}/runner.js`, constants.SUPPORTED_VERSIONS, (Runner, moduleVersion)=>{
            this.ensureWrapped(Runner.prototype, 'query', this.createQueryWrapper(moduleVersion));
            return Runner;
        }, (Runner, moduleVersion)=>{
            this._unwrap(Runner.prototype, 'query');
            return Runner;
        });
    }
    getClientNodeModuleFileInstrumentation(basePath) {
        return new instrumentation_1.InstrumentationNodeModuleFile(`knex/${basePath}/client.js`, constants.SUPPORTED_VERSIONS, (Client)=>{
            this.ensureWrapped(Client.prototype, 'queryBuilder', this.storeContext.bind(this));
            this.ensureWrapped(Client.prototype, 'schemaBuilder', this.storeContext.bind(this));
            this.ensureWrapped(Client.prototype, 'raw', this.storeContext.bind(this));
            return Client;
        }, (Client)=>{
            this._unwrap(Client.prototype, 'queryBuilder');
            this._unwrap(Client.prototype, 'schemaBuilder');
            this._unwrap(Client.prototype, 'raw');
            return Client;
        });
    }
    createQueryWrapper(moduleVersion) {
        const instrumentation = this;
        return function wrapQuery(original) {
            return function wrapped_logging_method(query) {
                var _a, _b, _c, _d, _e, _f;
                const config = this.client.config;
                const table = utils.extractTableName(this.builder);
                // `method` actually refers to the knex API method - Not exactly "operation"
                // in the spec sense, but matches most of the time.
                const operation = query === null || query === void 0 ? void 0 : query.method;
                const name = ((_a = config === null || config === void 0 ? void 0 : config.connection) === null || _a === void 0 ? void 0 : _a.filename) || ((_b = config === null || config === void 0 ? void 0 : config.connection) === null || _b === void 0 ? void 0 : _b.database);
                const { maxQueryLength } = instrumentation.getConfig();
                const attributes = {
                    'knex.version': moduleVersion,
                    [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: utils.mapSystem(config.client),
                    [semantic_conventions_1.SEMATTRS_DB_SQL_TABLE]: table,
                    [semantic_conventions_1.SEMATTRS_DB_OPERATION]: operation,
                    [semantic_conventions_1.SEMATTRS_DB_USER]: (_c = config === null || config === void 0 ? void 0 : config.connection) === null || _c === void 0 ? void 0 : _c.user,
                    [semantic_conventions_1.SEMATTRS_DB_NAME]: name,
                    [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: (_d = config === null || config === void 0 ? void 0 : config.connection) === null || _d === void 0 ? void 0 : _d.host,
                    [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: (_e = config === null || config === void 0 ? void 0 : config.connection) === null || _e === void 0 ? void 0 : _e.port,
                    [semantic_conventions_1.SEMATTRS_NET_TRANSPORT]: ((_f = config === null || config === void 0 ? void 0 : config.connection) === null || _f === void 0 ? void 0 : _f.filename) === ':memory:' ? 'inproc' : undefined
                };
                if (maxQueryLength) {
                    // filters both undefined and 0
                    attributes[semantic_conventions_1.SEMATTRS_DB_STATEMENT] = utils.limitLength(query === null || query === void 0 ? void 0 : query.sql, maxQueryLength);
                }
                const parentContext = this.builder[contextSymbol] || api.context.active();
                const parentSpan = api.trace.getSpan(parentContext);
                const hasActiveParent = parentSpan && api.trace.isSpanContextValid(parentSpan.spanContext());
                if (instrumentation._config.requireParentSpan && !hasActiveParent) {
                    return original.bind(this)(...arguments);
                }
                const span = instrumentation.tracer.startSpan(utils.getName(name, operation, table), {
                    kind: api.SpanKind.CLIENT,
                    attributes
                }, parentContext);
                const spanContext = api.trace.setSpan(api.context.active(), span);
                return api.context.with(spanContext, original, this, ...arguments).then((result)=>{
                    span.end();
                    return result;
                }).catch((err)=>{
                    // knex adds full query with all the binding values to the message,
                    // we want to undo that without changing the original error
                    const formatter = utils.getFormatter(this);
                    const fullQuery = formatter(query.sql, query.bindings || []);
                    const message = err.message.replace(fullQuery + ' - ', '');
                    const exc = utils.otelExceptionFromKnexError(err, message);
                    span.recordException(exc);
                    span.setStatus({
                        code: api.SpanStatusCode.ERROR,
                        message
                    });
                    span.end();
                    throw err;
                });
            };
        };
    }
    storeContext(original) {
        return function wrapped_logging_method() {
            const builder = original.apply(this, arguments);
            // Builder is a custom promise type and when awaited it fails to propagate context.
            // We store the parent context at the moment of initiating the builder
            // otherwise we'd have nothing to attach the span as a child for in `query`.
            Object.defineProperty(builder, contextSymbol, {
                value: api.context.active()
            });
            return builder;
        };
    }
    ensureWrapped(obj, methodName, wrapper) {
        if ((0, instrumentation_1.isWrapped)(obj[methodName])) {
            this._unwrap(obj, methodName);
        }
        this._wrap(obj, methodName, wrapper);
    }
}
exports.KnexInstrumentation = KnexInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-knex/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.once = exports.getSpanName = void 0;
/**
 * The span name SHOULD be set to a low cardinality value
 * representing the statement executed on the database.
 *
 * @returns Operation executed on Tedious Connection. Does not map to SQL statement in any way.
 */ function getSpanName(operation, db, sql, bulkLoadTable) {
    if (operation === 'execBulkLoad' && bulkLoadTable && db) {
        return `${operation} ${bulkLoadTable} ${db}`;
    }
    if (operation === 'callProcedure') {
        // `sql` refers to procedure name with `callProcedure`
        if (db) {
            return `${operation} ${sql} ${db}`;
        }
        return `${operation} ${sql}`;
    }
    // do not use `sql` in general case because of high-cardinality
    if (db) {
        return `${operation} ${db}`;
    }
    return `${operation}`;
}
exports.getSpanName = getSpanName;
const once = (fn)=>{
    let called = false;
    return (...args)=>{
        if (called) return;
        called = true;
        return fn(...args);
    };
};
exports.once = once; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.18.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-tedious'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TediousInstrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/utils.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/version.js [instrumentation] (ecmascript)");
const CURRENT_DATABASE = Symbol('opentelemetry.instrumentation-tedious.current-database');
const PATCHED_METHODS = [
    'callProcedure',
    'execSql',
    'execSqlBatch',
    'execBulkLoad',
    'prepare',
    'execute'
];
function setDatabase(databaseName) {
    Object.defineProperty(this, CURRENT_DATABASE, {
        value: databaseName,
        writable: true
    });
}
class TediousInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition(TediousInstrumentation.COMPONENT, [
                '>=1.11.0 <20'
            ], (moduleExports)=>{
                const ConnectionPrototype = moduleExports.Connection.prototype;
                for (const method of PATCHED_METHODS){
                    if ((0, instrumentation_1.isWrapped)(ConnectionPrototype[method])) {
                        this._unwrap(ConnectionPrototype, method);
                    }
                    this._wrap(ConnectionPrototype, method, this._patchQuery(method));
                }
                if ((0, instrumentation_1.isWrapped)(ConnectionPrototype.connect)) {
                    this._unwrap(ConnectionPrototype, 'connect');
                }
                this._wrap(ConnectionPrototype, 'connect', this._patchConnect);
                return moduleExports;
            }, (moduleExports)=>{
                if (moduleExports === undefined) return;
                const ConnectionPrototype = moduleExports.Connection.prototype;
                for (const method of PATCHED_METHODS){
                    this._unwrap(ConnectionPrototype, method);
                }
                this._unwrap(ConnectionPrototype, 'connect');
            })
        ];
    }
    _patchConnect(original) {
        return function patchedConnect() {
            var _a, _b;
            setDatabase.call(this, (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.database);
            // remove the listener first in case it's already added
            this.removeListener('databaseChange', setDatabase);
            this.on('databaseChange', setDatabase);
            this.once('end', ()=>{
                this.removeListener('databaseChange', setDatabase);
            });
            return original.apply(this, arguments);
        };
    }
    _patchQuery(operation) {
        return (originalMethod)=>{
            const thisPlugin = this;
            function patchedMethod(request) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (!(request instanceof events_1.EventEmitter)) {
                    thisPlugin._diag.warn(`Unexpected invocation of patched ${operation} method. Span not recorded`);
                    return originalMethod.apply(this, arguments);
                }
                let procCount = 0;
                let statementCount = 0;
                const incrementStatementCount = ()=>statementCount++;
                const incrementProcCount = ()=>procCount++;
                const databaseName = this[CURRENT_DATABASE];
                const sql = ((request)=>{
                    var _a, _b;
                    // Required for <11.0.9
                    if (request.sqlTextOrProcedure === 'sp_prepare' && ((_b = (_a = request.parametersByName) === null || _a === void 0 ? void 0 : _a.stmt) === null || _b === void 0 ? void 0 : _b.value)) {
                        return request.parametersByName.stmt.value;
                    }
                    return request.sqlTextOrProcedure;
                })(request);
                const span = thisPlugin.tracer.startSpan((0, utils_1.getSpanName)(operation, databaseName, sql, request.table), {
                    kind: api.SpanKind.CLIENT,
                    attributes: {
                        [semantic_conventions_1.SEMATTRS_DB_SYSTEM]: semantic_conventions_1.DBSYSTEMVALUES_MSSQL,
                        [semantic_conventions_1.SEMATTRS_DB_NAME]: databaseName,
                        [semantic_conventions_1.SEMATTRS_NET_PEER_PORT]: (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.port,
                        [semantic_conventions_1.SEMATTRS_NET_PEER_NAME]: (_c = this.config) === null || _c === void 0 ? void 0 : _c.server,
                        // >=4 uses `authentication` object, older versions just userName and password pair
                        [semantic_conventions_1.SEMATTRS_DB_USER]: (_e = (_d = this.config) === null || _d === void 0 ? void 0 : _d.userName) !== null && _e !== void 0 ? _e : (_h = (_g = (_f = this.config) === null || _f === void 0 ? void 0 : _f.authentication) === null || _g === void 0 ? void 0 : _g.options) === null || _h === void 0 ? void 0 : _h.userName,
                        [semantic_conventions_1.SEMATTRS_DB_STATEMENT]: sql,
                        [semantic_conventions_1.SEMATTRS_DB_SQL_TABLE]: request.table
                    }
                });
                const endSpan = (0, utils_1.once)((err)=>{
                    request.removeListener('done', incrementStatementCount);
                    request.removeListener('doneInProc', incrementStatementCount);
                    request.removeListener('doneProc', incrementProcCount);
                    request.removeListener('error', endSpan);
                    this.removeListener('end', endSpan);
                    span.setAttribute('tedious.procedure_count', procCount);
                    span.setAttribute('tedious.statement_count', statementCount);
                    if (err) {
                        span.setStatus({
                            code: api.SpanStatusCode.ERROR,
                            message: err.message
                        });
                    }
                    span.end();
                });
                request.on('done', incrementStatementCount);
                request.on('doneInProc', incrementStatementCount);
                request.on('doneProc', incrementProcCount);
                request.once('error', endSpan);
                this.on('end', endSpan);
                if (typeof request.callback === 'function') {
                    thisPlugin._wrap(request, 'callback', thisPlugin._patchCallbackQuery(endSpan));
                } else {
                    thisPlugin._diag.error('Expected request.callback to be a function');
                }
                return api.context.with(api.trace.setSpan(api.context.active(), span), originalMethod, this, ...arguments);
            }
            Object.defineProperty(patchedMethod, 'length', {
                value: originalMethod.length,
                writable: false
            });
            return patchedMethod;
        };
    }
    _patchCallbackQuery(endSpan) {
        return (originalCallback)=>{
            return function(err, rowCount, rows) {
                endSpan(err);
                return originalCallback.apply(this, arguments);
            };
        };
    }
}
exports.TediousInstrumentation = TediousInstrumentation;
TediousInstrumentation.COMPONENT = 'tedious'; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-tedious/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.43.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-generic-pool'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenericPoolInstrumentation = void 0;
const api = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/build/src/version.js [instrumentation] (ecmascript)");
const MODULE_NAME = 'generic-pool';
class GenericPoolInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
        // only used for v2 - v2.3)
        this._isDisabled = false;
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition(MODULE_NAME, [
                '>=3.0.0 <4'
            ], (moduleExports)=>{
                const Pool = moduleExports.Pool;
                if ((0, instrumentation_1.isWrapped)(Pool.prototype.acquire)) {
                    this._unwrap(Pool.prototype, 'acquire');
                }
                this._wrap(Pool.prototype, 'acquire', this._acquirePatcher.bind(this));
                return moduleExports;
            }, (moduleExports)=>{
                const Pool = moduleExports.Pool;
                this._unwrap(Pool.prototype, 'acquire');
                return moduleExports;
            }),
            new instrumentation_1.InstrumentationNodeModuleDefinition(MODULE_NAME, [
                '>=2.4.0 <3'
            ], (moduleExports)=>{
                const Pool = moduleExports.Pool;
                if ((0, instrumentation_1.isWrapped)(Pool.prototype.acquire)) {
                    this._unwrap(Pool.prototype, 'acquire');
                }
                this._wrap(Pool.prototype, 'acquire', this._acquireWithCallbacksPatcher.bind(this));
                return moduleExports;
            }, (moduleExports)=>{
                const Pool = moduleExports.Pool;
                this._unwrap(Pool.prototype, 'acquire');
                return moduleExports;
            }),
            new instrumentation_1.InstrumentationNodeModuleDefinition(MODULE_NAME, [
                '>=2.0.0 <2.4'
            ], (moduleExports)=>{
                this._isDisabled = false;
                if ((0, instrumentation_1.isWrapped)(moduleExports.Pool)) {
                    this._unwrap(moduleExports, 'Pool');
                }
                this._wrap(moduleExports, 'Pool', this._poolWrapper.bind(this));
                return moduleExports;
            }, (moduleExports)=>{
                // since the object is created on the fly every time, we need to use
                // a boolean switch here to disable the instrumentation
                this._isDisabled = true;
                return moduleExports;
            })
        ];
    }
    _acquirePatcher(original) {
        const instrumentation = this;
        return function wrapped_acquire(...args) {
            const parent = api.context.active();
            const span = instrumentation.tracer.startSpan('generic-pool.acquire', {}, parent);
            return api.context.with(api.trace.setSpan(parent, span), ()=>{
                return original.call(this, ...args).then((value)=>{
                    span.end();
                    return value;
                }, (err)=>{
                    span.recordException(err);
                    span.end();
                    throw err;
                });
            });
        };
    }
    _poolWrapper(original) {
        const instrumentation = this;
        return function wrapped_pool() {
            const pool = original.apply(this, arguments);
            instrumentation._wrap(pool, 'acquire', instrumentation._acquireWithCallbacksPatcher.bind(instrumentation));
            return pool;
        };
    }
    _acquireWithCallbacksPatcher(original) {
        const instrumentation = this;
        return function wrapped_acquire(cb, priority) {
            // only used for v2 - v2.3
            if (instrumentation._isDisabled) {
                return original.call(this, cb, priority);
            }
            const parent = api.context.active();
            const span = instrumentation.tracer.startSpan('generic-pool.acquire', {}, parent);
            return api.context.with(api.trace.setSpan(parent, span), ()=>{
                original.call(this, (err, client)=>{
                    span.end();
                    // Not checking whether cb is a function because
                    // the original code doesn't do that either.
                    if (cb) {
                        return cb(err, client);
                    }
                }, priority);
            });
        };
    }
}
exports.GenericPoolInstrumentation = GenericPoolInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-generic-pool/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.16.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-dataloader'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/instrumentation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataloaderInstrumentation = void 0;
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/version.js [instrumentation] (ecmascript)");
const MODULE_NAME = 'dataloader';
class DataloaderInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    }
    init() {
        return [
            new instrumentation_1.InstrumentationNodeModuleDefinition(MODULE_NAME, [
                '>=2.0.0 <3'
            ], (dataloader)=>{
                this._patchLoad(dataloader.prototype);
                this._patchLoadMany(dataloader.prototype);
                return this._getPatchedConstructor(dataloader);
            }, (dataloader)=>{
                if ((0, instrumentation_1.isWrapped)(dataloader.prototype.load)) {
                    this._unwrap(dataloader.prototype, 'load');
                }
                if ((0, instrumentation_1.isWrapped)(dataloader.prototype.loadMany)) {
                    this._unwrap(dataloader.prototype, 'loadMany');
                }
            })
        ];
    }
    shouldCreateSpans() {
        const config = this.getConfig();
        const hasParentSpan = api_1.trace.getSpan(api_1.context.active()) !== undefined;
        return hasParentSpan || !config.requireParentSpan;
    }
    getSpanName(dataloader, operation) {
        const dataloaderName = dataloader.name;
        if (dataloaderName === undefined || dataloaderName === null) {
            return `${MODULE_NAME}.${operation}`;
        }
        return `${MODULE_NAME}.${operation} ${dataloaderName}`;
    }
    _getPatchedConstructor(constructor) {
        const prototype = constructor.prototype;
        const instrumentation = this;
        function PatchedDataloader(...args) {
            const inst = new constructor(...args);
            if (!instrumentation.isEnabled()) {
                return inst;
            }
            if ((0, instrumentation_1.isWrapped)(inst._batchLoadFn)) {
                instrumentation._unwrap(inst, '_batchLoadFn');
            }
            instrumentation._wrap(inst, '_batchLoadFn', (original)=>{
                return function patchedBatchLoadFn(...args) {
                    var _a;
                    if (!instrumentation.isEnabled() || !instrumentation.shouldCreateSpans()) {
                        return original.call(this, ...args);
                    }
                    const parent = api_1.context.active();
                    const span = instrumentation.tracer.startSpan(instrumentation.getSpanName(inst, 'batch'), {
                        links: (_a = this._batch) === null || _a === void 0 ? void 0 : _a.spanLinks
                    }, parent);
                    return api_1.context.with(api_1.trace.setSpan(parent, span), ()=>{
                        return original.apply(this, args).then((value)=>{
                            span.end();
                            return value;
                        }).catch((err)=>{
                            span.recordException(err);
                            span.setStatus({
                                code: api_1.SpanStatusCode.ERROR,
                                message: err.message
                            });
                            span.end();
                            throw err;
                        });
                    });
                };
            });
            return inst;
        }
        PatchedDataloader.prototype = prototype;
        return PatchedDataloader;
    }
    _patchLoad(proto) {
        if ((0, instrumentation_1.isWrapped)(proto.load)) {
            this._unwrap(proto, 'load');
        }
        this._wrap(proto, 'load', this._getPatchedLoad.bind(this));
    }
    _getPatchedLoad(original) {
        const instrumentation = this;
        return function patchedLoad(...args) {
            if (!instrumentation.shouldCreateSpans()) {
                return original.call(this, ...args);
            }
            const parent = api_1.context.active();
            const span = instrumentation.tracer.startSpan(instrumentation.getSpanName(this, 'load'), {
                kind: api_1.SpanKind.CLIENT
            }, parent);
            return api_1.context.with(api_1.trace.setSpan(parent, span), ()=>{
                const result = original.call(this, ...args).then((value)=>{
                    span.end();
                    return value;
                }).catch((err)=>{
                    span.recordException(err);
                    span.setStatus({
                        code: api_1.SpanStatusCode.ERROR,
                        message: err.message
                    });
                    span.end();
                    throw err;
                });
                const loader = this;
                if (loader._batch) {
                    if (!loader._batch.spanLinks) {
                        loader._batch.spanLinks = [];
                    }
                    loader._batch.spanLinks.push({
                        context: span.spanContext()
                    });
                }
                return result;
            });
        };
    }
    _patchLoadMany(proto) {
        if ((0, instrumentation_1.isWrapped)(proto.loadMany)) {
            this._unwrap(proto, 'loadMany');
        }
        this._wrap(proto, 'loadMany', this._getPatchedLoadMany.bind(this));
    }
    _getPatchedLoadMany(original) {
        const instrumentation = this;
        return function patchedLoadMany(...args) {
            if (!instrumentation.shouldCreateSpans()) {
                return original.call(this, ...args);
            }
            const parent = api_1.context.active();
            const span = instrumentation.tracer.startSpan(instrumentation.getSpanName(this, 'loadMany'), {
                kind: api_1.SpanKind.CLIENT
            }, parent);
            return api_1.context.with(api_1.trace.setSpan(parent, span), ()=>{
                // .loadMany never rejects, as errors from internal .load
                // calls are caught by dataloader lib
                return original.call(this, ...args).then((value)=>{
                    span.end();
                    return value;
                });
            });
        };
    }
}
exports.DataloaderInstrumentation = DataloaderInstrumentation; //# sourceMappingURL=instrumentation.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/types.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-dataloader/build/src/instrumentation.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/types.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_CONFIG = exports.EndOperation = void 0;
var EndOperation;
(function(EndOperation) {
    EndOperation["AutoAck"] = "auto ack";
    EndOperation["Ack"] = "ack";
    EndOperation["AckAll"] = "ackAll";
    EndOperation["Reject"] = "reject";
    EndOperation["Nack"] = "nack";
    EndOperation["NackAll"] = "nackAll";
    EndOperation["ChannelClosed"] = "channel closed";
    EndOperation["ChannelError"] = "channel error";
    EndOperation["InstrumentationTimeout"] = "instrumentation timeout";
})(EndOperation = exports.EndOperation || (exports.EndOperation = {}));
exports.DEFAULT_CONFIG = {
    consumeTimeoutMs: 1000 * 60,
    useLinksForConsume: false
}; //# sourceMappingURL=types.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/utils.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isConfirmChannelTracing = exports.unmarkConfirmChannelTracing = exports.markConfirmChannelTracing = exports.getConnectionAttributesFromUrl = exports.getConnectionAttributesFromServer = exports.normalizeExchange = exports.CONNECTION_ATTRIBUTES = exports.CHANNEL_CONSUME_TIMEOUT_TIMER = exports.CHANNEL_SPANS_NOT_ENDED = exports.MESSAGE_STORED_SPAN = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
exports.MESSAGE_STORED_SPAN = Symbol('opentelemetry.amqplib.message.stored-span');
exports.CHANNEL_SPANS_NOT_ENDED = Symbol('opentelemetry.amqplib.channel.spans-not-ended');
exports.CHANNEL_CONSUME_TIMEOUT_TIMER = Symbol('opentelemetry.amqplib.channel.consumer-timeout-timer');
exports.CONNECTION_ATTRIBUTES = Symbol('opentelemetry.amqplib.connection.attributes');
const IS_CONFIRM_CHANNEL_CONTEXT_KEY = (0, api_1.createContextKey)('opentelemetry.amqplib.channel.is-confirm-channel');
const normalizeExchange = (exchangeName)=>exchangeName !== '' ? exchangeName : '<default>';
exports.normalizeExchange = normalizeExchange;
const censorPassword = (url)=>{
    return url.replace(/:[^:@/]*@/, ':***@');
};
const getPort = (portFromUrl, resolvedProtocol)=>{
    // we are using the resolved protocol which is upper case
    // this code mimic the behavior of the amqplib which is used to set connection params
    return portFromUrl || (resolvedProtocol === 'AMQP' ? 5672 : 5671);
};
const getProtocol = (protocolFromUrl)=>{
    const resolvedProtocol = protocolFromUrl || 'amqp';
    // the substring removed the ':' part of the protocol ('amqp:' -> 'amqp')
    const noEndingColon = resolvedProtocol.endsWith(':') ? resolvedProtocol.substring(0, resolvedProtocol.length - 1) : resolvedProtocol;
    // upper cases to match spec
    return noEndingColon.toUpperCase();
};
const getHostname = (hostnameFromUrl)=>{
    // if user supplies empty hostname, it gets forwarded to 'net' package which default it to localhost.
    // https://nodejs.org/docs/latest-v12.x/api/net.html#net_socket_connect_options_connectlistener
    return hostnameFromUrl || 'localhost';
};
const extractConnectionAttributeOrLog = (url, attributeKey, attributeValue, nameForLog)=>{
    if (attributeValue) {
        return {
            [attributeKey]: attributeValue
        };
    } else {
        api_1.diag.error(`amqplib instrumentation: could not extract connection attribute ${nameForLog} from user supplied url`, {
            url
        });
        return {};
    }
};
const getConnectionAttributesFromServer = (conn)=>{
    var _a, _b;
    const product = (_b = (_a = conn.serverProperties.product) === null || _a === void 0 ? void 0 : _a.toLowerCase) === null || _b === void 0 ? void 0 : _b.call(_a);
    if (product) {
        return {
            [semantic_conventions_1.SEMATTRS_MESSAGING_SYSTEM]: product
        };
    } else {
        return {};
    }
};
exports.getConnectionAttributesFromServer = getConnectionAttributesFromServer;
const getConnectionAttributesFromUrl = (url)=>{
    const attributes = {
        [semantic_conventions_1.SEMATTRS_MESSAGING_PROTOCOL_VERSION]: '0.9.1'
    };
    url = url || 'amqp://localhost';
    if (typeof url === 'object') {
        const connectOptions = url;
        const protocol = getProtocol(connectOptions === null || connectOptions === void 0 ? void 0 : connectOptions.protocol);
        Object.assign(attributes, Object.assign({}, extractConnectionAttributeOrLog(url, semantic_conventions_1.SEMATTRS_MESSAGING_PROTOCOL, protocol, 'protocol')));
        const hostname = getHostname(connectOptions === null || connectOptions === void 0 ? void 0 : connectOptions.hostname);
        Object.assign(attributes, Object.assign({}, extractConnectionAttributeOrLog(url, semantic_conventions_1.SEMATTRS_NET_PEER_NAME, hostname, 'hostname')));
        const port = getPort(connectOptions.port, protocol);
        Object.assign(attributes, Object.assign({}, extractConnectionAttributeOrLog(url, semantic_conventions_1.SEMATTRS_NET_PEER_PORT, port, 'port')));
    } else {
        const censoredUrl = censorPassword(url);
        attributes[semantic_conventions_1.SEMATTRS_MESSAGING_URL] = censoredUrl;
        try {
            const urlParts = new URL(censoredUrl);
            const protocol = getProtocol(urlParts.protocol);
            Object.assign(attributes, Object.assign({}, extractConnectionAttributeOrLog(censoredUrl, semantic_conventions_1.SEMATTRS_MESSAGING_PROTOCOL, protocol, 'protocol')));
            const hostname = getHostname(urlParts.hostname);
            Object.assign(attributes, Object.assign({}, extractConnectionAttributeOrLog(censoredUrl, semantic_conventions_1.SEMATTRS_NET_PEER_NAME, hostname, 'hostname')));
            const port = getPort(urlParts.port ? parseInt(urlParts.port) : undefined, protocol);
            Object.assign(attributes, Object.assign({}, extractConnectionAttributeOrLog(censoredUrl, semantic_conventions_1.SEMATTRS_NET_PEER_PORT, port, 'port')));
        } catch (err) {
            api_1.diag.error('amqplib instrumentation: error while extracting connection details from connection url', {
                censoredUrl,
                err
            });
        }
    }
    return attributes;
};
exports.getConnectionAttributesFromUrl = getConnectionAttributesFromUrl;
const markConfirmChannelTracing = (context)=>{
    return context.setValue(IS_CONFIRM_CHANNEL_CONTEXT_KEY, true);
};
exports.markConfirmChannelTracing = markConfirmChannelTracing;
const unmarkConfirmChannelTracing = (context)=>{
    return context.deleteValue(IS_CONFIRM_CHANNEL_CONTEXT_KEY);
};
exports.unmarkConfirmChannelTracing = unmarkConfirmChannelTracing;
const isConfirmChannelTracing = (context)=>{
    return context.getValue(IS_CONFIRM_CHANNEL_CONTEXT_KEY) === true;
};
exports.isConfirmChannelTracing = isConfirmChannelTracing; //# sourceMappingURL=utils.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/version.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PACKAGE_NAME = exports.PACKAGE_VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.PACKAGE_VERSION = '0.46.1';
exports.PACKAGE_NAME = '@opentelemetry/instrumentation-amqplib'; //# sourceMappingURL=version.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/amqplib.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AmqplibInstrumentation = void 0;
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
 */ const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const core_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/core/build/esm/index.js [instrumentation] (ecmascript)");
const instrumentation_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/instrumentation/build/esm/index.js [instrumentation] (ecmascript)");
const semantic_conventions_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js [instrumentation] (ecmascript)");
const types_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/types.js [instrumentation] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/utils.js [instrumentation] (ecmascript)");
/** @knipignore */ const version_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/version.js [instrumentation] (ecmascript)");
const supportedVersions = [
    '>=0.5.5 <1'
];
class AmqplibInstrumentation extends instrumentation_1.InstrumentationBase {
    constructor(config = {}){
        super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, Object.assign(Object.assign({}, types_1.DEFAULT_CONFIG), config));
    }
    setConfig(config = {}) {
        super.setConfig(Object.assign(Object.assign({}, types_1.DEFAULT_CONFIG), config));
    }
    init() {
        const channelModelModuleFile = new instrumentation_1.InstrumentationNodeModuleFile('amqplib/lib/channel_model.js', supportedVersions, this.patchChannelModel.bind(this), this.unpatchChannelModel.bind(this));
        const callbackModelModuleFile = new instrumentation_1.InstrumentationNodeModuleFile('amqplib/lib/callback_model.js', supportedVersions, this.patchChannelModel.bind(this), this.unpatchChannelModel.bind(this));
        const connectModuleFile = new instrumentation_1.InstrumentationNodeModuleFile('amqplib/lib/connect.js', supportedVersions, this.patchConnect.bind(this), this.unpatchConnect.bind(this));
        const module = new instrumentation_1.InstrumentationNodeModuleDefinition('amqplib', supportedVersions, undefined, undefined, [
            channelModelModuleFile,
            connectModuleFile,
            callbackModelModuleFile
        ]);
        return module;
    }
    patchConnect(moduleExports) {
        moduleExports = this.unpatchConnect(moduleExports);
        if (!(0, instrumentation_1.isWrapped)(moduleExports.connect)) {
            this._wrap(moduleExports, 'connect', this.getConnectPatch.bind(this));
        }
        return moduleExports;
    }
    unpatchConnect(moduleExports) {
        if ((0, instrumentation_1.isWrapped)(moduleExports.connect)) {
            this._unwrap(moduleExports, 'connect');
        }
        return moduleExports;
    }
    patchChannelModel(moduleExports, moduleVersion) {
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.publish)) {
            this._wrap(moduleExports.Channel.prototype, 'publish', this.getPublishPatch.bind(this, moduleVersion));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.consume)) {
            this._wrap(moduleExports.Channel.prototype, 'consume', this.getConsumePatch.bind(this, moduleVersion));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.ack)) {
            this._wrap(moduleExports.Channel.prototype, 'ack', this.getAckPatch.bind(this, false, types_1.EndOperation.Ack));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.nack)) {
            this._wrap(moduleExports.Channel.prototype, 'nack', this.getAckPatch.bind(this, true, types_1.EndOperation.Nack));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.reject)) {
            this._wrap(moduleExports.Channel.prototype, 'reject', this.getAckPatch.bind(this, true, types_1.EndOperation.Reject));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.ackAll)) {
            this._wrap(moduleExports.Channel.prototype, 'ackAll', this.getAckAllPatch.bind(this, false, types_1.EndOperation.AckAll));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.nackAll)) {
            this._wrap(moduleExports.Channel.prototype, 'nackAll', this.getAckAllPatch.bind(this, true, types_1.EndOperation.NackAll));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.emit)) {
            this._wrap(moduleExports.Channel.prototype, 'emit', this.getChannelEmitPatch.bind(this));
        }
        if (!(0, instrumentation_1.isWrapped)(moduleExports.ConfirmChannel.prototype.publish)) {
            this._wrap(moduleExports.ConfirmChannel.prototype, 'publish', this.getConfirmedPublishPatch.bind(this, moduleVersion));
        }
        return moduleExports;
    }
    unpatchChannelModel(moduleExports) {
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.publish)) {
            this._unwrap(moduleExports.Channel.prototype, 'publish');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.consume)) {
            this._unwrap(moduleExports.Channel.prototype, 'consume');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.ack)) {
            this._unwrap(moduleExports.Channel.prototype, 'ack');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.nack)) {
            this._unwrap(moduleExports.Channel.prototype, 'nack');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.reject)) {
            this._unwrap(moduleExports.Channel.prototype, 'reject');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.ackAll)) {
            this._unwrap(moduleExports.Channel.prototype, 'ackAll');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.nackAll)) {
            this._unwrap(moduleExports.Channel.prototype, 'nackAll');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.Channel.prototype.emit)) {
            this._unwrap(moduleExports.Channel.prototype, 'emit');
        }
        if ((0, instrumentation_1.isWrapped)(moduleExports.ConfirmChannel.prototype.publish)) {
            this._unwrap(moduleExports.ConfirmChannel.prototype, 'publish');
        }
        return moduleExports;
    }
    getConnectPatch(original) {
        return function patchedConnect(url, socketOptions, openCallback) {
            return original.call(this, url, socketOptions, function(err, conn) {
                if (err == null) {
                    const urlAttributes = (0, utils_1.getConnectionAttributesFromUrl)(url);
                    // the type of conn in @types/amqplib is amqp.Connection, but in practice the library send the
                    // `serverProperties` on the `conn` and not in a property `connection`.
                    // I don't have capacity to debug it currently but it should probably be fixed in @types or
                    // in the package itself
                    // currently setting as any to calm typescript
                    const serverAttributes = (0, utils_1.getConnectionAttributesFromServer)(conn);
                    conn[utils_1.CONNECTION_ATTRIBUTES] = Object.assign(Object.assign({}, urlAttributes), serverAttributes);
                }
                openCallback.apply(this, arguments);
            });
        };
    }
    getChannelEmitPatch(original) {
        const self = this;
        return function emit(eventName) {
            if (eventName === 'close') {
                self.endAllSpansOnChannel(this, true, types_1.EndOperation.ChannelClosed, undefined);
                const activeTimer = this[utils_1.CHANNEL_CONSUME_TIMEOUT_TIMER];
                if (activeTimer) {
                    clearInterval(activeTimer);
                }
                this[utils_1.CHANNEL_CONSUME_TIMEOUT_TIMER] = undefined;
            } else if (eventName === 'error') {
                self.endAllSpansOnChannel(this, true, types_1.EndOperation.ChannelError, undefined);
            }
            return original.apply(this, arguments);
        };
    }
    getAckAllPatch(isRejected, endOperation, original) {
        const self = this;
        return function ackAll(requeueOrEmpty) {
            self.endAllSpansOnChannel(this, isRejected, endOperation, requeueOrEmpty);
            return original.apply(this, arguments);
        };
    }
    getAckPatch(isRejected, endOperation, original) {
        const self = this;
        return function ack(message, allUpToOrRequeue, requeue) {
            var _a;
            const channel = this;
            // we use this patch in reject function as well, but it has different signature
            const requeueResolved = endOperation === types_1.EndOperation.Reject ? allUpToOrRequeue : requeue;
            const spansNotEnded = (_a = channel[utils_1.CHANNEL_SPANS_NOT_ENDED]) !== null && _a !== void 0 ? _a : [];
            const msgIndex = spansNotEnded.findIndex((msgDetails)=>msgDetails.msg === message);
            if (msgIndex < 0) {
                // should not happen in happy flow
                // but possible if user is calling the api function ack twice with same message
                self.endConsumerSpan(message, isRejected, endOperation, requeueResolved);
            } else if (endOperation !== types_1.EndOperation.Reject && allUpToOrRequeue) {
                for(let i = 0; i <= msgIndex; i++){
                    self.endConsumerSpan(spansNotEnded[i].msg, isRejected, endOperation, requeueResolved);
                }
                spansNotEnded.splice(0, msgIndex + 1);
            } else {
                self.endConsumerSpan(message, isRejected, endOperation, requeueResolved);
                spansNotEnded.splice(msgIndex, 1);
            }
            return original.apply(this, arguments);
        };
    }
    getConsumePatch(moduleVersion, original) {
        const self = this;
        return function consume(queue, onMessage, options) {
            const channel = this;
            if (!Object.prototype.hasOwnProperty.call(channel, utils_1.CHANNEL_SPANS_NOT_ENDED)) {
                const { consumeTimeoutMs } = self.getConfig();
                if (consumeTimeoutMs) {
                    const timer = setInterval(()=>{
                        self.checkConsumeTimeoutOnChannel(channel);
                    }, consumeTimeoutMs);
                    timer.unref();
                    channel[utils_1.CHANNEL_CONSUME_TIMEOUT_TIMER] = timer;
                }
                channel[utils_1.CHANNEL_SPANS_NOT_ENDED] = [];
            }
            const patchedOnMessage = function(msg) {
                var _a, _b, _c, _d, _e;
                // msg is expected to be null for signaling consumer cancel notification
                // https://www.rabbitmq.com/consumer-cancel.html
                // in this case, we do not start a span, as this is not a real message.
                if (!msg) {
                    return onMessage.call(this, msg);
                }
                const headers = (_a = msg.properties.headers) !== null && _a !== void 0 ? _a : {};
                let parentContext = api_1.propagation.extract(api_1.ROOT_CONTEXT, headers);
                const exchange = (_b = msg.fields) === null || _b === void 0 ? void 0 : _b.exchange;
                let links;
                if (self._config.useLinksForConsume) {
                    const parentSpanContext = parentContext ? (_c = api_1.trace.getSpan(parentContext)) === null || _c === void 0 ? void 0 : _c.spanContext() : undefined;
                    parentContext = undefined;
                    if (parentSpanContext) {
                        links = [
                            {
                                context: parentSpanContext
                            }
                        ];
                    }
                }
                const span = self.tracer.startSpan(`${queue} process`, {
                    kind: api_1.SpanKind.CONSUMER,
                    attributes: Object.assign(Object.assign({}, (_d = channel === null || channel === void 0 ? void 0 : channel.connection) === null || _d === void 0 ? void 0 : _d[utils_1.CONNECTION_ATTRIBUTES]), {
                        [semantic_conventions_1.SEMATTRS_MESSAGING_DESTINATION]: exchange,
                        [semantic_conventions_1.SEMATTRS_MESSAGING_DESTINATION_KIND]: semantic_conventions_1.MESSAGINGDESTINATIONKINDVALUES_TOPIC,
                        [semantic_conventions_1.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY]: (_e = msg.fields) === null || _e === void 0 ? void 0 : _e.routingKey,
                        [semantic_conventions_1.SEMATTRS_MESSAGING_OPERATION]: semantic_conventions_1.MESSAGINGOPERATIONVALUES_PROCESS,
                        [semantic_conventions_1.SEMATTRS_MESSAGING_MESSAGE_ID]: msg === null || msg === void 0 ? void 0 : msg.properties.messageId,
                        [semantic_conventions_1.SEMATTRS_MESSAGING_CONVERSATION_ID]: msg === null || msg === void 0 ? void 0 : msg.properties.correlationId
                    }),
                    links
                }, parentContext);
                const { consumeHook } = self.getConfig();
                if (consumeHook) {
                    (0, instrumentation_1.safeExecuteInTheMiddle)(()=>consumeHook(span, {
                            moduleVersion,
                            msg
                        }), (e)=>{
                        if (e) {
                            api_1.diag.error('amqplib instrumentation: consumerHook error', e);
                        }
                    }, true);
                }
                if (!(options === null || options === void 0 ? void 0 : options.noAck)) {
                    // store the message on the channel so we can close the span on ackAll etc
                    channel[utils_1.CHANNEL_SPANS_NOT_ENDED].push({
                        msg,
                        timeOfConsume: (0, core_1.hrTime)()
                    });
                    // store the span on the message, so we can end it when user call 'ack' on it
                    msg[utils_1.MESSAGE_STORED_SPAN] = span;
                }
                const setContext = parentContext ? parentContext : api_1.ROOT_CONTEXT;
                api_1.context.with(api_1.trace.setSpan(setContext, span), ()=>{
                    onMessage.call(this, msg);
                });
                if (options === null || options === void 0 ? void 0 : options.noAck) {
                    self.callConsumeEndHook(span, msg, false, types_1.EndOperation.AutoAck);
                    span.end();
                }
            };
            arguments[1] = patchedOnMessage;
            return original.apply(this, arguments);
        };
    }
    getConfirmedPublishPatch(moduleVersion, original) {
        const self = this;
        return function confirmedPublish(exchange, routingKey, content, options, callback) {
            const channel = this;
            const { span, modifiedOptions } = self.createPublishSpan(self, exchange, routingKey, channel, options);
            const { publishHook } = self.getConfig();
            if (publishHook) {
                (0, instrumentation_1.safeExecuteInTheMiddle)(()=>publishHook(span, {
                        moduleVersion,
                        exchange,
                        routingKey,
                        content,
                        options: modifiedOptions,
                        isConfirmChannel: true
                    }), (e)=>{
                    if (e) {
                        api_1.diag.error('amqplib instrumentation: publishHook error', e);
                    }
                }, true);
            }
            const patchedOnConfirm = function(err, ok) {
                try {
                    callback === null || callback === void 0 ? void 0 : callback.call(this, err, ok);
                } finally{
                    const { publishConfirmHook } = self.getConfig();
                    if (publishConfirmHook) {
                        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>publishConfirmHook(span, {
                                moduleVersion,
                                exchange,
                                routingKey,
                                content,
                                options,
                                isConfirmChannel: true,
                                confirmError: err
                            }), (e)=>{
                            if (e) {
                                api_1.diag.error('amqplib instrumentation: publishConfirmHook error', e);
                            }
                        }, true);
                    }
                    if (err) {
                        span.setStatus({
                            code: api_1.SpanStatusCode.ERROR,
                            message: "message confirmation has been nack'ed"
                        });
                    }
                    span.end();
                }
            };
            // calling confirm channel publish function is storing the message in queue and registering the callback for broker confirm.
            // span ends in the patched callback.
            const markedContext = (0, utils_1.markConfirmChannelTracing)(api_1.context.active());
            const argumentsCopy = [
                ...arguments
            ];
            argumentsCopy[3] = modifiedOptions;
            argumentsCopy[4] = api_1.context.bind((0, utils_1.unmarkConfirmChannelTracing)(api_1.trace.setSpan(markedContext, span)), patchedOnConfirm);
            return api_1.context.with(markedContext, original.bind(this, ...argumentsCopy));
        };
    }
    getPublishPatch(moduleVersion, original) {
        const self = this;
        return function publish(exchange, routingKey, content, options) {
            if ((0, utils_1.isConfirmChannelTracing)(api_1.context.active())) {
                // work already done
                return original.apply(this, arguments);
            } else {
                const channel = this;
                const { span, modifiedOptions } = self.createPublishSpan(self, exchange, routingKey, channel, options);
                const { publishHook } = self.getConfig();
                if (publishHook) {
                    (0, instrumentation_1.safeExecuteInTheMiddle)(()=>publishHook(span, {
                            moduleVersion,
                            exchange,
                            routingKey,
                            content,
                            options: modifiedOptions,
                            isConfirmChannel: false
                        }), (e)=>{
                        if (e) {
                            api_1.diag.error('amqplib instrumentation: publishHook error', e);
                        }
                    }, true);
                }
                // calling normal channel publish function is only storing the message in queue.
                // it does not send it and waits for an ack, so the span duration is expected to be very short.
                const argumentsCopy = [
                    ...arguments
                ];
                argumentsCopy[3] = modifiedOptions;
                const originalRes = original.apply(this, argumentsCopy);
                span.end();
                return originalRes;
            }
        };
    }
    createPublishSpan(self, exchange, routingKey, channel, options) {
        var _a;
        const normalizedExchange = (0, utils_1.normalizeExchange)(exchange);
        const span = self.tracer.startSpan(`publish ${normalizedExchange}`, {
            kind: api_1.SpanKind.PRODUCER,
            attributes: Object.assign(Object.assign({}, channel.connection[utils_1.CONNECTION_ATTRIBUTES]), {
                [semantic_conventions_1.SEMATTRS_MESSAGING_DESTINATION]: exchange,
                [semantic_conventions_1.SEMATTRS_MESSAGING_DESTINATION_KIND]: semantic_conventions_1.MESSAGINGDESTINATIONKINDVALUES_TOPIC,
                [semantic_conventions_1.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY]: routingKey,
                [semantic_conventions_1.SEMATTRS_MESSAGING_MESSAGE_ID]: options === null || options === void 0 ? void 0 : options.messageId,
                [semantic_conventions_1.SEMATTRS_MESSAGING_CONVERSATION_ID]: options === null || options === void 0 ? void 0 : options.correlationId
            })
        });
        const modifiedOptions = options !== null && options !== void 0 ? options : {};
        modifiedOptions.headers = (_a = modifiedOptions.headers) !== null && _a !== void 0 ? _a : {};
        api_1.propagation.inject(api_1.trace.setSpan(api_1.context.active(), span), modifiedOptions.headers);
        return {
            span,
            modifiedOptions
        };
    }
    endConsumerSpan(message, isRejected, operation, requeue) {
        const storedSpan = message[utils_1.MESSAGE_STORED_SPAN];
        if (!storedSpan) return;
        if (isRejected !== false) {
            storedSpan.setStatus({
                code: api_1.SpanStatusCode.ERROR,
                message: operation !== types_1.EndOperation.ChannelClosed && operation !== types_1.EndOperation.ChannelError ? `${operation} called on message${requeue === true ? ' with requeue' : requeue === false ? ' without requeue' : ''}` : operation
            });
        }
        this.callConsumeEndHook(storedSpan, message, isRejected, operation);
        storedSpan.end();
        message[utils_1.MESSAGE_STORED_SPAN] = undefined;
    }
    endAllSpansOnChannel(channel, isRejected, operation, requeue) {
        var _a;
        const spansNotEnded = (_a = channel[utils_1.CHANNEL_SPANS_NOT_ENDED]) !== null && _a !== void 0 ? _a : [];
        spansNotEnded.forEach((msgDetails)=>{
            this.endConsumerSpan(msgDetails.msg, isRejected, operation, requeue);
        });
        channel[utils_1.CHANNEL_SPANS_NOT_ENDED] = [];
    }
    callConsumeEndHook(span, msg, rejected, endOperation) {
        const { consumeEndHook } = this.getConfig();
        if (!consumeEndHook) return;
        (0, instrumentation_1.safeExecuteInTheMiddle)(()=>consumeEndHook(span, {
                msg,
                rejected,
                endOperation
            }), (e)=>{
            if (e) {
                api_1.diag.error('amqplib instrumentation: consumerEndHook error', e);
            }
        }, true);
    }
    checkConsumeTimeoutOnChannel(channel) {
        var _a;
        const currentTime = (0, core_1.hrTime)();
        const spansNotEnded = (_a = channel[utils_1.CHANNEL_SPANS_NOT_ENDED]) !== null && _a !== void 0 ? _a : [];
        let i;
        const { consumeTimeoutMs } = this.getConfig();
        for(i = 0; i < spansNotEnded.length; i++){
            const currMessage = spansNotEnded[i];
            const timeFromConsume = (0, core_1.hrTimeDuration)(currMessage.timeOfConsume, currentTime);
            if ((0, core_1.hrTimeToMilliseconds)(timeFromConsume) < consumeTimeoutMs) {
                break;
            }
            this.endConsumerSpan(currMessage.msg, null, types_1.EndOperation.InstrumentationTimeout, true);
        }
        spansNotEnded.splice(0, i);
    }
}
exports.AmqplibInstrumentation = AmqplibInstrumentation; //# sourceMappingURL=amqplib.js.map
}}),
"[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
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
 */ __exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/amqplib.js [instrumentation] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/@opentelemetry/instrumentation-amqplib/build/src/types.js [instrumentation] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AbstractAsyncHooksContextManager.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractAsyncHooksContextManager = void 0;
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const ADD_LISTENER_METHODS = [
    'addListener',
    'on',
    'once',
    'prependListener',
    'prependOnceListener'
];
class AbstractAsyncHooksContextManager {
    constructor(){
        this._kOtListeners = Symbol('OtListeners');
        this._wrapped = false;
    }
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */ bind(context, target) {
        if (target instanceof events_1.EventEmitter) {
            return this._bindEventEmitter(context, target);
        }
        if (typeof target === 'function') {
            return this._bindFunction(context, target);
        }
        return target;
    }
    _bindFunction(context, target) {
        const manager = this;
        const contextWrapper = function(...args) {
            return manager.with(context, ()=>target.apply(this, args));
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length
        });
        /**
         * It isn't possible to tell Typescript that contextWrapper is the same as T
         * so we forced to cast as any here.
         */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return contextWrapper;
    }
    /**
     * By default, EventEmitter call their callback with their context, which we do
     * not want, instead we will bind a specific context to all callbacks that
     * go through it.
     * @param context the context we want to bind
     * @param ee EventEmitter an instance of EventEmitter to patch
     */ _bindEventEmitter(context, ee) {
        const map = this._getPatchMap(ee);
        if (map !== undefined) return ee;
        this._createPatchMap(ee);
        // patch methods that add a listener to propagate context
        ADD_LISTENER_METHODS.forEach((methodName)=>{
            if (ee[methodName] === undefined) return;
            ee[methodName] = this._patchAddListener(ee, ee[methodName], context);
        });
        // patch methods that remove a listener
        if (typeof ee.removeListener === 'function') {
            ee.removeListener = this._patchRemoveListener(ee, ee.removeListener);
        }
        if (typeof ee.off === 'function') {
            ee.off = this._patchRemoveListener(ee, ee.off);
        }
        // patch method that remove all listeners
        if (typeof ee.removeAllListeners === 'function') {
            ee.removeAllListeners = this._patchRemoveAllListeners(ee, ee.removeAllListeners);
        }
        return ee;
    }
    /**
     * Patch methods that remove a given listener so that we match the "patched"
     * version of that listener (the one that propagate context).
     * @param ee EventEmitter instance
     * @param original reference to the patched method
     */ _patchRemoveListener(ee, original) {
        const contextManager = this;
        return function(event, listener) {
            var _a;
            const events = (_a = contextManager._getPatchMap(ee)) === null || _a === void 0 ? void 0 : _a[event];
            if (events === undefined) {
                return original.call(this, event, listener);
            }
            const patchedListener = events.get(listener);
            return original.call(this, event, patchedListener || listener);
        };
    }
    /**
     * Patch methods that remove all listeners so we remove our
     * internal references for a given event.
     * @param ee EventEmitter instance
     * @param original reference to the patched method
     */ _patchRemoveAllListeners(ee, original) {
        const contextManager = this;
        return function(event) {
            const map = contextManager._getPatchMap(ee);
            if (map !== undefined) {
                if (arguments.length === 0) {
                    contextManager._createPatchMap(ee);
                } else if (map[event] !== undefined) {
                    delete map[event];
                }
            }
            return original.apply(this, arguments);
        };
    }
    /**
     * Patch methods on an event emitter instance that can add listeners so we
     * can force them to propagate a given context.
     * @param ee EventEmitter instance
     * @param original reference to the patched method
     * @param [context] context to propagate when calling listeners
     */ _patchAddListener(ee, original, context) {
        const contextManager = this;
        return function(event, listener) {
            /**
             * This check is required to prevent double-wrapping the listener.
             * The implementation for ee.once wraps the listener and calls ee.on.
             * Without this check, we would wrap that wrapped listener.
             * This causes an issue because ee.removeListener depends on the onceWrapper
             * to properly remove the listener. If we wrap their wrapper, we break
             * that detection.
             */ if (contextManager._wrapped) {
                return original.call(this, event, listener);
            }
            let map = contextManager._getPatchMap(ee);
            if (map === undefined) {
                map = contextManager._createPatchMap(ee);
            }
            let listeners = map[event];
            if (listeners === undefined) {
                listeners = new WeakMap();
                map[event] = listeners;
            }
            const patchedListener = contextManager.bind(context, listener);
            // store a weak reference of the user listener to ours
            listeners.set(listener, patchedListener);
            /**
             * See comment at the start of this function for the explanation of this property.
             */ contextManager._wrapped = true;
            try {
                return original.call(this, event, patchedListener);
            } finally{
                contextManager._wrapped = false;
            }
        };
    }
    _createPatchMap(ee) {
        const map = Object.create(null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ee[this._kOtListeners] = map;
        return map;
    }
    _getPatchMap(ee) {
        return ee[this._kOtListeners];
    }
}
exports.AbstractAsyncHooksContextManager = AbstractAsyncHooksContextManager; //# sourceMappingURL=AbstractAsyncHooksContextManager.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncHooksContextManager.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncHooksContextManager = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const asyncHooks = __turbopack_context__.r("[externals]/async_hooks [external] (async_hooks, cjs)");
const AbstractAsyncHooksContextManager_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AbstractAsyncHooksContextManager.js [instrumentation] (ecmascript)");
class AsyncHooksContextManager extends AbstractAsyncHooksContextManager_1.AbstractAsyncHooksContextManager {
    constructor(){
        super();
        this._contexts = new Map();
        this._stack = [];
        this._asyncHook = asyncHooks.createHook({
            init: this._init.bind(this),
            before: this._before.bind(this),
            after: this._after.bind(this),
            destroy: this._destroy.bind(this),
            promiseResolve: this._destroy.bind(this)
        });
    }
    active() {
        var _a;
        return (_a = this._stack[this._stack.length - 1]) !== null && _a !== void 0 ? _a : api_1.ROOT_CONTEXT;
    }
    with(context, fn, thisArg, ...args) {
        this._enterContext(context);
        try {
            return fn.call(thisArg, ...args);
        } finally{
            this._exitContext();
        }
    }
    enable() {
        this._asyncHook.enable();
        return this;
    }
    disable() {
        this._asyncHook.disable();
        this._contexts.clear();
        this._stack = [];
        return this;
    }
    /**
     * Init hook will be called when userland create a async context, setting the
     * context as the current one if it exist.
     * @param uid id of the async context
     * @param type the resource type
     */ _init(uid, type) {
        // ignore TIMERWRAP as they combine timers with same timeout which can lead to
        // false context propagation. TIMERWRAP has been removed in node 11
        // every timer has it's own `Timeout` resource anyway which is used to propagate
        // context.
        if (type === 'TIMERWRAP') return;
        const context = this._stack[this._stack.length - 1];
        if (context !== undefined) {
            this._contexts.set(uid, context);
        }
    }
    /**
     * Destroy hook will be called when a given context is no longer used so we can
     * remove its attached context.
     * @param uid uid of the async context
     */ _destroy(uid) {
        this._contexts.delete(uid);
    }
    /**
     * Before hook is called just before executing a async context.
     * @param uid uid of the async context
     */ _before(uid) {
        const context = this._contexts.get(uid);
        if (context !== undefined) {
            this._enterContext(context);
        }
    }
    /**
     * After hook is called just after completing the execution of a async context.
     */ _after() {
        this._exitContext();
    }
    /**
     * Set the given context as active
     */ _enterContext(context) {
        this._stack.push(context);
    }
    /**
     * Remove the context at the root of the stack
     */ _exitContext() {
        this._stack.pop();
    }
}
exports.AsyncHooksContextManager = AsyncHooksContextManager; //# sourceMappingURL=AsyncHooksContextManager.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncLocalStorageContextManager = void 0;
const api_1 = __turbopack_context__.r("[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)");
const async_hooks_1 = __turbopack_context__.r("[externals]/async_hooks [external] (async_hooks, cjs)");
const AbstractAsyncHooksContextManager_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AbstractAsyncHooksContextManager.js [instrumentation] (ecmascript)");
class AsyncLocalStorageContextManager extends AbstractAsyncHooksContextManager_1.AbstractAsyncHooksContextManager {
    constructor(){
        super();
        this._asyncLocalStorage = new async_hooks_1.AsyncLocalStorage();
    }
    active() {
        var _a;
        return (_a = this._asyncLocalStorage.getStore()) !== null && _a !== void 0 ? _a : api_1.ROOT_CONTEXT;
    }
    with(context, fn, thisArg, ...args) {
        const cb = thisArg == null ? fn : fn.bind(thisArg);
        return this._asyncLocalStorage.run(context, cb, ...args);
    }
    enable() {
        return this;
    }
    disable() {
        this._asyncLocalStorage.disable();
        return this;
    }
}
exports.AsyncLocalStorageContextManager = AsyncLocalStorageContextManager; //# sourceMappingURL=AsyncLocalStorageContextManager.js.map
}}),
"[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncLocalStorageContextManager = exports.AsyncHooksContextManager = void 0;
var AsyncHooksContextManager_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncHooksContextManager.js [instrumentation] (ecmascript)");
Object.defineProperty(exports, "AsyncHooksContextManager", {
    enumerable: true,
    get: function() {
        return AsyncHooksContextManager_1.AsyncHooksContextManager;
    }
});
var AsyncLocalStorageContextManager_1 = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/node/node_modules/@opentelemetry/context-async-hooks/build/src/AsyncLocalStorageContextManager.js [instrumentation] (ecmascript)");
Object.defineProperty(exports, "AsyncLocalStorageContextManager", {
    enumerable: true,
    get: function() {
        return AsyncLocalStorageContextManager_1.AsyncLocalStorageContextManager;
    }
}); //# sourceMappingURL=index.js.map
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/homedir.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
// adapted from https://github.com/sindresorhus/os-homedir/blob/11e089f4754db38bb535e5a8416320c4446e8cfd/index.js
module.exports = os.homedir || function homedir() {
    var home = process.env.HOME;
    var user = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return home || (user ? '/Users/' + user : null);
    }
    "TURBOPACK unreachable";
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/caller.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = function() {
    // see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    var origPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack) {
        return stack;
    };
    var stack = new Error().stack;
    Error.prepareStackTrace = origPrepareStackTrace;
    return stack[2].getFileName();
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/node-modules-paths.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var parse = path.parse || __turbopack_context__.r("[project]/node_modules/path-parse/index.js [instrumentation] (ecmascript)"); // eslint-disable-line global-require
var getNodeModulesDirs = function getNodeModulesDirs(absoluteStart, modules) {
    var prefix = '/';
    if (/^([A-Za-z]:)/.test(absoluteStart)) {
        prefix = '';
    } else if (/^\\\\/.test(absoluteStart)) {
        prefix = '\\\\';
    }
    var paths = [
        absoluteStart
    ];
    var parsed = parse(absoluteStart);
    while(parsed.dir !== paths[paths.length - 1]){
        paths.push(parsed.dir);
        parsed = parse(parsed.dir);
    }
    return paths.reduce(function(dirs, aPath) {
        return dirs.concat(modules.map(function(moduleDir) {
            return path.resolve(prefix, aPath, moduleDir);
        }));
    }, []);
};
module.exports = function nodeModulesPaths(start, opts, request) {
    var modules = opts && opts.moduleDirectory ? [].concat(opts.moduleDirectory) : [
        'node_modules'
    ];
    if (opts && typeof opts.paths === 'function') {
        return opts.paths(request, start, function() {
            return getNodeModulesDirs(start, modules);
        }, opts);
    }
    var dirs = getNodeModulesDirs(start, modules);
    return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/normalize-options.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = function(x, opts) {
    /**
     * This file is purposefully a passthrough. It's expected that third-party
     * environments will override it at runtime in order to inject special logic
     * into `resolve` (by manipulating the options). One such example is the PnP
     * code path in Yarn.
     */ return opts || {};
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/async.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var getHomedir = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/homedir.js [instrumentation] (ecmascript)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var caller = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/caller.js [instrumentation] (ecmascript)");
var nodeModulesPaths = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/node-modules-paths.js [instrumentation] (ecmascript)");
var normalizeOptions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/normalize-options.js [instrumentation] (ecmascript)");
var isCore = __turbopack_context__.r("[project]/node_modules/is-core-module/index.js [instrumentation] (ecmascript)");
var realpathFS = process.platform !== 'win32' && fs.realpath && typeof fs.realpath.native === 'function' ? fs.realpath.native : fs.realpath;
var homedir = getHomedir();
var defaultPaths = function() {
    return [
        path.join(homedir, '.node_modules'),
        path.join(homedir, '.node_libraries')
    ];
};
var defaultIsFile = function isFile(file, cb) {
    fs.stat(file, function(err, stat) {
        if (!err) {
            return cb(null, stat.isFile() || stat.isFIFO());
        }
        if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
        return cb(err);
    });
};
var defaultIsDir = function isDirectory(dir, cb) {
    fs.stat(dir, function(err, stat) {
        if (!err) {
            return cb(null, stat.isDirectory());
        }
        if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
        return cb(err);
    });
};
var defaultRealpath = function realpath(x, cb) {
    realpathFS(x, function(realpathErr, realPath) {
        if (realpathErr && realpathErr.code !== 'ENOENT') cb(realpathErr);
        else cb(null, realpathErr ? x : realPath);
    });
};
var maybeRealpath = function maybeRealpath(realpath, x, opts, cb) {
    if (opts && opts.preserveSymlinks === false) {
        realpath(x, cb);
    } else {
        cb(null, x);
    }
};
var defaultReadPackage = function defaultReadPackage(readFile, pkgfile, cb) {
    readFile(pkgfile, function(readFileErr, body) {
        if (readFileErr) cb(readFileErr);
        else {
            try {
                var pkg = JSON.parse(body);
                cb(null, pkg);
            } catch (jsonErr) {
                cb(null);
            }
        }
    });
};
var getPackageCandidates = function getPackageCandidates(x, start, opts) {
    var dirs = nodeModulesPaths(start, opts, x);
    for(var i = 0; i < dirs.length; i++){
        dirs[i] = path.join(dirs[i], x);
    }
    return dirs;
};
module.exports = function resolve(x, options, callback) {
    var cb = callback;
    var opts = options;
    if (typeof options === 'function') {
        cb = opts;
        opts = {};
    }
    if (typeof x !== 'string') {
        var err = new TypeError('Path must be a string.');
        return process.nextTick(function() {
            cb(err);
        });
    }
    opts = normalizeOptions(x, opts);
    var isFile = opts.isFile || defaultIsFile;
    var isDirectory = opts.isDirectory || defaultIsDir;
    var readFile = opts.readFile || fs.readFile;
    var realpath = opts.realpath || defaultRealpath;
    var readPackage = opts.readPackage || defaultReadPackage;
    if (opts.readFile && opts.readPackage) {
        var conflictErr = new TypeError('`readFile` and `readPackage` are mutually exclusive.');
        return process.nextTick(function() {
            cb(conflictErr);
        });
    }
    var packageIterator = opts.packageIterator;
    var extensions = opts.extensions || [
        '.js'
    ];
    var includeCoreModules = opts.includeCoreModules !== false;
    var basedir = opts.basedir || path.dirname(caller());
    var parent = opts.filename || basedir;
    opts.paths = opts.paths || defaultPaths();
    // ensure that `basedir` is an absolute path at this point, resolving against the process' current working directory
    var absoluteStart = path.resolve(basedir);
    maybeRealpath(realpath, absoluteStart, opts, function(err, realStart) {
        if (err) cb(err);
        else init(realStart);
    });
    var res;
    function init(basedir) {
        if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
            res = path.resolve(basedir, x);
            if (x === '.' || x === '..' || x.slice(-1) === '/') res += '/';
            if (/\/$/.test(x) && res === basedir) {
                loadAsDirectory(res, opts.package, onfile);
            } else loadAsFile(res, opts.package, onfile);
        } else if (includeCoreModules && isCore(x)) {
            return cb(null, x);
        } else loadNodeModules(x, basedir, function(err, n, pkg) {
            if (err) cb(err);
            else if (n) {
                return maybeRealpath(realpath, n, opts, function(err, realN) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, realN, pkg);
                    }
                });
            } else {
                var moduleError = new Error("Cannot find module '" + x + "' from '" + parent + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }
    function onfile(err, m, pkg) {
        if (err) cb(err);
        else if (m) cb(null, m, pkg);
        else loadAsDirectory(res, function(err, d, pkg) {
            if (err) cb(err);
            else if (d) {
                maybeRealpath(realpath, d, opts, function(err, realD) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, realD, pkg);
                    }
                });
            } else {
                var moduleError = new Error("Cannot find module '" + x + "' from '" + parent + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }
    function loadAsFile(x, thePackage, callback) {
        var loadAsFilePackage = thePackage;
        var cb = callback;
        if (typeof loadAsFilePackage === 'function') {
            cb = loadAsFilePackage;
            loadAsFilePackage = undefined;
        }
        var exts = [
            ''
        ].concat(extensions);
        load(exts, x, loadAsFilePackage);
        function load(exts, x, loadPackage) {
            if (exts.length === 0) return cb(null, undefined, loadPackage);
            var file = x + exts[0];
            var pkg = loadPackage;
            if (pkg) onpkg(null, pkg);
            else loadpkg(path.dirname(file), onpkg);
            function onpkg(err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err);
                if (dir && pkg && opts.pathFilter) {
                    var rfile = path.relative(dir, file);
                    var rel = rfile.slice(0, rfile.length - exts[0].length);
                    var r = opts.pathFilter(pkg, x, rel);
                    if (r) return load([
                        ''
                    ].concat(extensions.slice()), path.resolve(dir, r), pkg);
                }
                isFile(file, onex);
            }
            function onex(err, ex) {
                if (err) return cb(err);
                if (ex) return cb(null, file, pkg);
                load(exts.slice(1), x, pkg);
            }
        }
    }
    function loadpkg(dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && /^\w:[/\\]*$/.test(dir)) {
            "TURBOPACK unreachable";
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return cb(null);
        maybeRealpath(realpath, dir, opts, function(unwrapErr, pkgdir) {
            if (unwrapErr) return loadpkg(path.dirname(dir), cb);
            var pkgfile = path.join(pkgdir, 'package.json');
            isFile(pkgfile, function(err, ex) {
                // on err, ex is false
                if (!ex) return loadpkg(path.dirname(dir), cb);
                readPackage(readFile, pkgfile, function(err, pkgParam) {
                    if (err) cb(err);
                    var pkg = pkgParam;
                    if (pkg && opts.packageFilter) {
                        pkg = opts.packageFilter(pkg, pkgfile);
                    }
                    cb(null, pkg, dir);
                });
            });
        });
    }
    function loadAsDirectory(x, loadAsDirectoryPackage, callback) {
        var cb = callback;
        var fpkg = loadAsDirectoryPackage;
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }
        maybeRealpath(realpath, x, opts, function(unwrapErr, pkgdir) {
            if (unwrapErr) return cb(unwrapErr);
            var pkgfile = path.join(pkgdir, 'package.json');
            isFile(pkgfile, function(err, ex) {
                if (err) return cb(err);
                if (!ex) return loadAsFile(path.join(x, 'index'), fpkg, cb);
                readPackage(readFile, pkgfile, function(err, pkgParam) {
                    if (err) return cb(err);
                    var pkg = pkgParam;
                    if (pkg && opts.packageFilter) {
                        pkg = opts.packageFilter(pkg, pkgfile);
                    }
                    if (pkg && pkg.main) {
                        if (typeof pkg.main !== 'string') {
                            var mainError = new TypeError('package “' + pkg.name + '” `main` must be a string');
                            mainError.code = 'INVALID_PACKAGE_MAIN';
                            return cb(mainError);
                        }
                        if (pkg.main === '.' || pkg.main === './') {
                            pkg.main = 'index';
                        }
                        loadAsFile(path.resolve(x, pkg.main), pkg, function(err, m, pkg) {
                            if (err) return cb(err);
                            if (m) return cb(null, m, pkg);
                            if (!pkg) return loadAsFile(path.join(x, 'index'), pkg, cb);
                            var dir = path.resolve(x, pkg.main);
                            loadAsDirectory(dir, pkg, function(err, n, pkg) {
                                if (err) return cb(err);
                                if (n) return cb(null, n, pkg);
                                loadAsFile(path.join(x, 'index'), pkg, cb);
                            });
                        });
                        return;
                    }
                    loadAsFile(path.join(x, '/index'), pkg, cb);
                });
            });
        });
    }
    function processDirs(cb, dirs) {
        if (dirs.length === 0) return cb(null, undefined);
        var dir = dirs[0];
        isDirectory(path.dirname(dir), isdir);
        function isdir(err, isdir) {
            if (err) return cb(err);
            if (!isdir) return processDirs(cb, dirs.slice(1));
            loadAsFile(dir, opts.package, onfile);
        }
        function onfile(err, m, pkg) {
            if (err) return cb(err);
            if (m) return cb(null, m, pkg);
            loadAsDirectory(dir, opts.package, ondir);
        }
        function ondir(err, n, pkg) {
            if (err) return cb(err);
            if (n) return cb(null, n, pkg);
            processDirs(cb, dirs.slice(1));
        }
    }
    function loadNodeModules(x, start, cb) {
        var thunk = function() {
            return getPackageCandidates(x, start, opts);
        };
        processDirs(cb, packageIterator ? packageIterator(x, start, thunk, opts) : thunk());
    }
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/core.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"assert\":true,\"node:assert\":[\">= 14.18 && < 15\",\">= 16\"],\"assert/strict\":\">= 15\",\"node:assert/strict\":\">= 16\",\"async_hooks\":\">= 8\",\"node:async_hooks\":[\">= 14.18 && < 15\",\">= 16\"],\"buffer_ieee754\":\">= 0.5 && < 0.9.7\",\"buffer\":true,\"node:buffer\":[\">= 14.18 && < 15\",\">= 16\"],\"child_process\":true,\"node:child_process\":[\">= 14.18 && < 15\",\">= 16\"],\"cluster\":\">= 0.5\",\"node:cluster\":[\">= 14.18 && < 15\",\">= 16\"],\"console\":true,\"node:console\":[\">= 14.18 && < 15\",\">= 16\"],\"constants\":true,\"node:constants\":[\">= 14.18 && < 15\",\">= 16\"],\"crypto\":true,\"node:crypto\":[\">= 14.18 && < 15\",\">= 16\"],\"_debug_agent\":\">= 1 && < 8\",\"_debugger\":\"< 8\",\"dgram\":true,\"node:dgram\":[\">= 14.18 && < 15\",\">= 16\"],\"diagnostics_channel\":[\">= 14.17 && < 15\",\">= 15.1\"],\"node:diagnostics_channel\":[\">= 14.18 && < 15\",\">= 16\"],\"dns\":true,\"node:dns\":[\">= 14.18 && < 15\",\">= 16\"],\"dns/promises\":\">= 15\",\"node:dns/promises\":\">= 16\",\"domain\":\">= 0.7.12\",\"node:domain\":[\">= 14.18 && < 15\",\">= 16\"],\"events\":true,\"node:events\":[\">= 14.18 && < 15\",\">= 16\"],\"freelist\":\"< 6\",\"fs\":true,\"node:fs\":[\">= 14.18 && < 15\",\">= 16\"],\"fs/promises\":[\">= 10 && < 10.1\",\">= 14\"],\"node:fs/promises\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_agent\":\">= 0.11.1\",\"node:_http_agent\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_client\":\">= 0.11.1\",\"node:_http_client\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_common\":\">= 0.11.1\",\"node:_http_common\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_incoming\":\">= 0.11.1\",\"node:_http_incoming\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_outgoing\":\">= 0.11.1\",\"node:_http_outgoing\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_server\":\">= 0.11.1\",\"node:_http_server\":[\">= 14.18 && < 15\",\">= 16\"],\"http\":true,\"node:http\":[\">= 14.18 && < 15\",\">= 16\"],\"http2\":\">= 8.8\",\"node:http2\":[\">= 14.18 && < 15\",\">= 16\"],\"https\":true,\"node:https\":[\">= 14.18 && < 15\",\">= 16\"],\"inspector\":\">= 8\",\"node:inspector\":[\">= 14.18 && < 15\",\">= 16\"],\"inspector/promises\":[\">= 19\"],\"node:inspector/promises\":[\">= 19\"],\"_linklist\":\"< 8\",\"module\":true,\"node:module\":[\">= 14.18 && < 15\",\">= 16\"],\"net\":true,\"node:net\":[\">= 14.18 && < 15\",\">= 16\"],\"node-inspect/lib/_inspect\":\">= 7.6 && < 12\",\"node-inspect/lib/internal/inspect_client\":\">= 7.6 && < 12\",\"node-inspect/lib/internal/inspect_repl\":\">= 7.6 && < 12\",\"os\":true,\"node:os\":[\">= 14.18 && < 15\",\">= 16\"],\"path\":true,\"node:path\":[\">= 14.18 && < 15\",\">= 16\"],\"path/posix\":\">= 15.3\",\"node:path/posix\":\">= 16\",\"path/win32\":\">= 15.3\",\"node:path/win32\":\">= 16\",\"perf_hooks\":\">= 8.5\",\"node:perf_hooks\":[\">= 14.18 && < 15\",\">= 16\"],\"process\":\">= 1\",\"node:process\":[\">= 14.18 && < 15\",\">= 16\"],\"punycode\":\">= 0.5\",\"node:punycode\":[\">= 14.18 && < 15\",\">= 16\"],\"querystring\":true,\"node:querystring\":[\">= 14.18 && < 15\",\">= 16\"],\"readline\":true,\"node:readline\":[\">= 14.18 && < 15\",\">= 16\"],\"readline/promises\":\">= 17\",\"node:readline/promises\":\">= 17\",\"repl\":true,\"node:repl\":[\">= 14.18 && < 15\",\">= 16\"],\"smalloc\":\">= 0.11.5 && < 3\",\"_stream_duplex\":\">= 0.9.4\",\"node:_stream_duplex\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_transform\":\">= 0.9.4\",\"node:_stream_transform\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_wrap\":\">= 1.4.1\",\"node:_stream_wrap\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_passthrough\":\">= 0.9.4\",\"node:_stream_passthrough\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_readable\":\">= 0.9.4\",\"node:_stream_readable\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_writable\":\">= 0.9.4\",\"node:_stream_writable\":[\">= 14.18 && < 15\",\">= 16\"],\"stream\":true,\"node:stream\":[\">= 14.18 && < 15\",\">= 16\"],\"stream/consumers\":\">= 16.7\",\"node:stream/consumers\":\">= 16.7\",\"stream/promises\":\">= 15\",\"node:stream/promises\":\">= 16\",\"stream/web\":\">= 16.5\",\"node:stream/web\":\">= 16.5\",\"string_decoder\":true,\"node:string_decoder\":[\">= 14.18 && < 15\",\">= 16\"],\"sys\":[\">= 0.4 && < 0.7\",\">= 0.8\"],\"node:sys\":[\">= 14.18 && < 15\",\">= 16\"],\"test/reporters\":\">= 19.9 && < 20.2\",\"node:test/reporters\":[\">= 18.17 && < 19\",\">= 19.9\",\">= 20\"],\"node:test\":[\">= 16.17 && < 17\",\">= 18\"],\"timers\":true,\"node:timers\":[\">= 14.18 && < 15\",\">= 16\"],\"timers/promises\":\">= 15\",\"node:timers/promises\":\">= 16\",\"_tls_common\":\">= 0.11.13\",\"node:_tls_common\":[\">= 14.18 && < 15\",\">= 16\"],\"_tls_legacy\":\">= 0.11.3 && < 10\",\"_tls_wrap\":\">= 0.11.3\",\"node:_tls_wrap\":[\">= 14.18 && < 15\",\">= 16\"],\"tls\":true,\"node:tls\":[\">= 14.18 && < 15\",\">= 16\"],\"trace_events\":\">= 10\",\"node:trace_events\":[\">= 14.18 && < 15\",\">= 16\"],\"tty\":true,\"node:tty\":[\">= 14.18 && < 15\",\">= 16\"],\"url\":true,\"node:url\":[\">= 14.18 && < 15\",\">= 16\"],\"util\":true,\"node:util\":[\">= 14.18 && < 15\",\">= 16\"],\"util/types\":\">= 15.3\",\"node:util/types\":\">= 16\",\"v8/tools/arguments\":\">= 10 && < 12\",\"v8/tools/codemap\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/consarray\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/csvparser\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/logreader\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/profile_view\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/splaytree\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8\":\">= 1\",\"node:v8\":[\">= 14.18 && < 15\",\">= 16\"],\"vm\":true,\"node:vm\":[\">= 14.18 && < 15\",\">= 16\"],\"wasi\":[\">= 13.4 && < 13.5\",\">= 18.17 && < 19\",\">= 20\"],\"node:wasi\":[\">= 18.17 && < 19\",\">= 20\"],\"worker_threads\":\">= 11.7\",\"node:worker_threads\":[\">= 14.18 && < 15\",\">= 16\"],\"zlib\":\">= 0.5\",\"node:zlib\":[\">= 14.18 && < 15\",\">= 16\"]}"));}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/core.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var isCoreModule = __turbopack_context__.r("[project]/node_modules/is-core-module/index.js [instrumentation] (ecmascript)");
var data = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/core.json (json)");
var core = {};
for(var mod in data){
    if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = isCoreModule(mod);
    }
}
module.exports = core;
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/is-core.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var isCoreModule = __turbopack_context__.r("[project]/node_modules/is-core-module/index.js [instrumentation] (ecmascript)");
module.exports = function isCore(x) {
    return isCoreModule(x);
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/lib/sync.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var isCore = __turbopack_context__.r("[project]/node_modules/is-core-module/index.js [instrumentation] (ecmascript)");
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var getHomedir = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/homedir.js [instrumentation] (ecmascript)");
var caller = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/caller.js [instrumentation] (ecmascript)");
var nodeModulesPaths = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/node-modules-paths.js [instrumentation] (ecmascript)");
var normalizeOptions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/normalize-options.js [instrumentation] (ecmascript)");
var realpathFS = process.platform !== 'win32' && fs.realpathSync && typeof fs.realpathSync.native === 'function' ? fs.realpathSync.native : fs.realpathSync;
var homedir = getHomedir();
var defaultPaths = function() {
    return [
        path.join(homedir, '.node_modules'),
        path.join(homedir, '.node_libraries')
    ];
};
var defaultIsFile = function isFile(file) {
    try {
        var stat = fs.statSync(file, {
            throwIfNoEntry: false
        });
    } catch (e) {
        if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false;
        throw e;
    }
    return !!stat && (stat.isFile() || stat.isFIFO());
};
var defaultIsDir = function isDirectory(dir) {
    try {
        var stat = fs.statSync(dir, {
            throwIfNoEntry: false
        });
    } catch (e) {
        if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false;
        throw e;
    }
    return !!stat && stat.isDirectory();
};
var defaultRealpathSync = function realpathSync(x) {
    try {
        return realpathFS(x);
    } catch (realpathErr) {
        if (realpathErr.code !== 'ENOENT') {
            throw realpathErr;
        }
    }
    return x;
};
var maybeRealpathSync = function maybeRealpathSync(realpathSync, x, opts) {
    if (opts && opts.preserveSymlinks === false) {
        return realpathSync(x);
    }
    return x;
};
var defaultReadPackageSync = function defaultReadPackageSync(readFileSync, pkgfile) {
    var body = readFileSync(pkgfile);
    try {
        var pkg = JSON.parse(body);
        return pkg;
    } catch (jsonErr) {}
};
var getPackageCandidates = function getPackageCandidates(x, start, opts) {
    var dirs = nodeModulesPaths(start, opts, x);
    for(var i = 0; i < dirs.length; i++){
        dirs[i] = path.join(dirs[i], x);
    }
    return dirs;
};
module.exports = function resolveSync(x, options) {
    if (typeof x !== 'string') {
        throw new TypeError('Path must be a string.');
    }
    var opts = normalizeOptions(x, options);
    var isFile = opts.isFile || defaultIsFile;
    var readFileSync = opts.readFileSync || fs.readFileSync;
    var isDirectory = opts.isDirectory || defaultIsDir;
    var realpathSync = opts.realpathSync || defaultRealpathSync;
    var readPackageSync = opts.readPackageSync || defaultReadPackageSync;
    if (opts.readFileSync && opts.readPackageSync) {
        throw new TypeError('`readFileSync` and `readPackageSync` are mutually exclusive.');
    }
    var packageIterator = opts.packageIterator;
    var extensions = opts.extensions || [
        '.js'
    ];
    var includeCoreModules = opts.includeCoreModules !== false;
    var basedir = opts.basedir || path.dirname(caller());
    var parent = opts.filename || basedir;
    opts.paths = opts.paths || defaultPaths();
    // ensure that `basedir` is an absolute path at this point, resolving against the process' current working directory
    var absoluteStart = maybeRealpathSync(realpathSync, path.resolve(basedir), opts);
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
        var res = path.resolve(absoluteStart, x);
        if (x === '.' || x === '..' || x.slice(-1) === '/') res += '/';
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return maybeRealpathSync(realpathSync, m, opts);
    } else if (includeCoreModules && isCore(x)) {
        return x;
    } else {
        var n = loadNodeModulesSync(x, absoluteStart);
        if (n) return maybeRealpathSync(realpathSync, n, opts);
    }
    var err = new Error("Cannot find module '" + x + "' from '" + parent + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
    function loadAsFileSync(x) {
        var pkg = loadpkg(path.dirname(x));
        if (pkg && pkg.dir && pkg.pkg && opts.pathFilter) {
            var rfile = path.relative(pkg.dir, x);
            var r = opts.pathFilter(pkg.pkg, x, rfile);
            if (r) {
                x = path.resolve(pkg.dir, r); // eslint-disable-line no-param-reassign
            }
        }
        if (isFile(x)) {
            return x;
        }
        for(var i = 0; i < extensions.length; i++){
            var file = x + extensions[i];
            if (isFile(file)) {
                return file;
            }
        }
    }
    function loadpkg(dir) {
        if (dir === '' || dir === '/') return;
        if (process.platform === 'win32' && /^\w:[/\\]*$/.test(dir)) {
            "TURBOPACK unreachable";
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return;
        var pkgfile = path.join(maybeRealpathSync(realpathSync, dir, opts), 'package.json');
        if (!isFile(pkgfile)) {
            return loadpkg(path.dirname(dir));
        }
        var pkg = readPackageSync(readFileSync, pkgfile);
        if (pkg && opts.packageFilter) {
            // v2 will pass pkgfile
            pkg = opts.packageFilter(pkg, /*pkgfile,*/ dir); // eslint-disable-line spaced-comment
        }
        return {
            pkg: pkg,
            dir: dir
        };
    }
    function loadAsDirectorySync(x) {
        var pkgfile = path.join(maybeRealpathSync(realpathSync, x, opts), '/package.json');
        if (isFile(pkgfile)) {
            try {
                var pkg = readPackageSync(readFileSync, pkgfile);
            } catch (e) {}
            if (pkg && opts.packageFilter) {
                // v2 will pass pkgfile
                pkg = opts.packageFilter(pkg, /*pkgfile,*/ x); // eslint-disable-line spaced-comment
            }
            if (pkg && pkg.main) {
                if (typeof pkg.main !== 'string') {
                    var mainError = new TypeError('package “' + pkg.name + '” `main` must be a string');
                    mainError.code = 'INVALID_PACKAGE_MAIN';
                    throw mainError;
                }
                if (pkg.main === '.' || pkg.main === './') {
                    pkg.main = 'index';
                }
                try {
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                    var n = loadAsDirectorySync(path.resolve(x, pkg.main));
                    if (n) return n;
                } catch (e) {}
            }
        }
        return loadAsFileSync(path.join(x, '/index'));
    }
    function loadNodeModulesSync(x, start) {
        var thunk = function() {
            return getPackageCandidates(x, start, opts);
        };
        var dirs = packageIterator ? packageIterator(x, start, thunk, opts) : thunk();
        for(var i = 0; i < dirs.length; i++){
            var dir = dirs[i];
            if (isDirectory(path.dirname(dir))) {
                var m = loadAsFileSync(dir);
                if (m) return m;
                var n = loadAsDirectorySync(dir);
                if (n) return n;
            }
        }
    }
};
}}),
"[project]/apps/chat-ui/node_modules/resolve/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var async = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/async.js [instrumentation] (ecmascript)");
async.core = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/core.js [instrumentation] (ecmascript)");
async.isCore = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/is-core.js [instrumentation] (ecmascript)");
async.sync = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/resolve/lib/sync.js [instrumentation] (ecmascript)");
module.exports = async;
}}),
"[project]/node_modules/path-parse/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var isWindows = process.platform === 'win32';
// Regex to split a windows path into into [dir, root, basename, name, ext]
var splitWindowsRe = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/;
var win32 = {};
function win32SplitPath(filename) {
    return splitWindowsRe.exec(filename).slice(1);
}
win32.parse = function(pathString) {
    if (typeof pathString !== 'string') {
        throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
    }
    var allParts = win32SplitPath(pathString);
    if (!allParts || allParts.length !== 5) {
        throw new TypeError("Invalid path '" + pathString + "'");
    }
    return {
        root: allParts[1],
        dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),
        base: allParts[2],
        ext: allParts[4],
        name: allParts[3]
    };
};
// Split a filename into [dir, root, basename, name, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/;
var posix = {};
function posixSplitPath(filename) {
    return splitPathRe.exec(filename).slice(1);
}
posix.parse = function(pathString) {
    if (typeof pathString !== 'string') {
        throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
    }
    var allParts = posixSplitPath(pathString);
    if (!allParts || allParts.length !== 5) {
        throw new TypeError("Invalid path '" + pathString + "'");
    }
    return {
        root: allParts[1],
        dir: allParts[0].slice(0, -1),
        base: allParts[2],
        ext: allParts[4],
        name: allParts[3]
    };
};
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else /* posix */ module.exports = posix.parse;
module.exports.posix = posix.parse;
module.exports.win32 = win32.parse;
}}),
"[project]/node_modules/is-core-module/core.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"assert\":true,\"node:assert\":[\">= 14.18 && < 15\",\">= 16\"],\"assert/strict\":\">= 15\",\"node:assert/strict\":\">= 16\",\"async_hooks\":\">= 8\",\"node:async_hooks\":[\">= 14.18 && < 15\",\">= 16\"],\"buffer_ieee754\":\">= 0.5 && < 0.9.7\",\"buffer\":true,\"node:buffer\":[\">= 14.18 && < 15\",\">= 16\"],\"child_process\":true,\"node:child_process\":[\">= 14.18 && < 15\",\">= 16\"],\"cluster\":\">= 0.5\",\"node:cluster\":[\">= 14.18 && < 15\",\">= 16\"],\"console\":true,\"node:console\":[\">= 14.18 && < 15\",\">= 16\"],\"constants\":true,\"node:constants\":[\">= 14.18 && < 15\",\">= 16\"],\"crypto\":true,\"node:crypto\":[\">= 14.18 && < 15\",\">= 16\"],\"_debug_agent\":\">= 1 && < 8\",\"_debugger\":\"< 8\",\"dgram\":true,\"node:dgram\":[\">= 14.18 && < 15\",\">= 16\"],\"diagnostics_channel\":[\">= 14.17 && < 15\",\">= 15.1\"],\"node:diagnostics_channel\":[\">= 14.18 && < 15\",\">= 16\"],\"dns\":true,\"node:dns\":[\">= 14.18 && < 15\",\">= 16\"],\"dns/promises\":\">= 15\",\"node:dns/promises\":\">= 16\",\"domain\":\">= 0.7.12\",\"node:domain\":[\">= 14.18 && < 15\",\">= 16\"],\"events\":true,\"node:events\":[\">= 14.18 && < 15\",\">= 16\"],\"freelist\":\"< 6\",\"fs\":true,\"node:fs\":[\">= 14.18 && < 15\",\">= 16\"],\"fs/promises\":[\">= 10 && < 10.1\",\">= 14\"],\"node:fs/promises\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_agent\":\">= 0.11.1\",\"node:_http_agent\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_client\":\">= 0.11.1\",\"node:_http_client\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_common\":\">= 0.11.1\",\"node:_http_common\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_incoming\":\">= 0.11.1\",\"node:_http_incoming\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_outgoing\":\">= 0.11.1\",\"node:_http_outgoing\":[\">= 14.18 && < 15\",\">= 16\"],\"_http_server\":\">= 0.11.1\",\"node:_http_server\":[\">= 14.18 && < 15\",\">= 16\"],\"http\":true,\"node:http\":[\">= 14.18 && < 15\",\">= 16\"],\"http2\":\">= 8.8\",\"node:http2\":[\">= 14.18 && < 15\",\">= 16\"],\"https\":true,\"node:https\":[\">= 14.18 && < 15\",\">= 16\"],\"inspector\":\">= 8\",\"node:inspector\":[\">= 14.18 && < 15\",\">= 16\"],\"inspector/promises\":[\">= 19\"],\"node:inspector/promises\":[\">= 19\"],\"_linklist\":\"< 8\",\"module\":true,\"node:module\":[\">= 14.18 && < 15\",\">= 16\"],\"net\":true,\"node:net\":[\">= 14.18 && < 15\",\">= 16\"],\"node-inspect/lib/_inspect\":\">= 7.6 && < 12\",\"node-inspect/lib/internal/inspect_client\":\">= 7.6 && < 12\",\"node-inspect/lib/internal/inspect_repl\":\">= 7.6 && < 12\",\"os\":true,\"node:os\":[\">= 14.18 && < 15\",\">= 16\"],\"path\":true,\"node:path\":[\">= 14.18 && < 15\",\">= 16\"],\"path/posix\":\">= 15.3\",\"node:path/posix\":\">= 16\",\"path/win32\":\">= 15.3\",\"node:path/win32\":\">= 16\",\"perf_hooks\":\">= 8.5\",\"node:perf_hooks\":[\">= 14.18 && < 15\",\">= 16\"],\"process\":\">= 1\",\"node:process\":[\">= 14.18 && < 15\",\">= 16\"],\"punycode\":\">= 0.5\",\"node:punycode\":[\">= 14.18 && < 15\",\">= 16\"],\"querystring\":true,\"node:querystring\":[\">= 14.18 && < 15\",\">= 16\"],\"readline\":true,\"node:readline\":[\">= 14.18 && < 15\",\">= 16\"],\"readline/promises\":\">= 17\",\"node:readline/promises\":\">= 17\",\"repl\":true,\"node:repl\":[\">= 14.18 && < 15\",\">= 16\"],\"node:sea\":[\">= 20.12 && < 21\",\">= 21.7\"],\"smalloc\":\">= 0.11.5 && < 3\",\"node:sqlite\":[\">= 22.13 && < 23\",\">= 23.4\"],\"_stream_duplex\":\">= 0.9.4\",\"node:_stream_duplex\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_transform\":\">= 0.9.4\",\"node:_stream_transform\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_wrap\":\">= 1.4.1\",\"node:_stream_wrap\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_passthrough\":\">= 0.9.4\",\"node:_stream_passthrough\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_readable\":\">= 0.9.4\",\"node:_stream_readable\":[\">= 14.18 && < 15\",\">= 16\"],\"_stream_writable\":\">= 0.9.4\",\"node:_stream_writable\":[\">= 14.18 && < 15\",\">= 16\"],\"stream\":true,\"node:stream\":[\">= 14.18 && < 15\",\">= 16\"],\"stream/consumers\":\">= 16.7\",\"node:stream/consumers\":\">= 16.7\",\"stream/promises\":\">= 15\",\"node:stream/promises\":\">= 16\",\"stream/web\":\">= 16.5\",\"node:stream/web\":\">= 16.5\",\"string_decoder\":true,\"node:string_decoder\":[\">= 14.18 && < 15\",\">= 16\"],\"sys\":[\">= 0.4 && < 0.7\",\">= 0.8\"],\"node:sys\":[\">= 14.18 && < 15\",\">= 16\"],\"test/reporters\":\">= 19.9 && < 20.2\",\"node:test/reporters\":[\">= 18.17 && < 19\",\">= 19.9\",\">= 20\"],\"test/mock_loader\":\">= 22.3 && < 22.7\",\"node:test/mock_loader\":\">= 22.3 && < 22.7\",\"node:test\":[\">= 16.17 && < 17\",\">= 18\"],\"timers\":true,\"node:timers\":[\">= 14.18 && < 15\",\">= 16\"],\"timers/promises\":\">= 15\",\"node:timers/promises\":\">= 16\",\"_tls_common\":\">= 0.11.13\",\"node:_tls_common\":[\">= 14.18 && < 15\",\">= 16\"],\"_tls_legacy\":\">= 0.11.3 && < 10\",\"_tls_wrap\":\">= 0.11.3\",\"node:_tls_wrap\":[\">= 14.18 && < 15\",\">= 16\"],\"tls\":true,\"node:tls\":[\">= 14.18 && < 15\",\">= 16\"],\"trace_events\":\">= 10\",\"node:trace_events\":[\">= 14.18 && < 15\",\">= 16\"],\"tty\":true,\"node:tty\":[\">= 14.18 && < 15\",\">= 16\"],\"url\":true,\"node:url\":[\">= 14.18 && < 15\",\">= 16\"],\"util\":true,\"node:util\":[\">= 14.18 && < 15\",\">= 16\"],\"util/types\":\">= 15.3\",\"node:util/types\":\">= 16\",\"v8/tools/arguments\":\">= 10 && < 12\",\"v8/tools/codemap\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/consarray\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/csvparser\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/logreader\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/profile_view\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8/tools/splaytree\":[\">= 4.4 && < 5\",\">= 5.2 && < 12\"],\"v8\":\">= 1\",\"node:v8\":[\">= 14.18 && < 15\",\">= 16\"],\"vm\":true,\"node:vm\":[\">= 14.18 && < 15\",\">= 16\"],\"wasi\":[\">= 13.4 && < 13.5\",\">= 18.17 && < 19\",\">= 20\"],\"node:wasi\":[\">= 18.17 && < 19\",\">= 20\"],\"worker_threads\":\">= 11.7\",\"node:worker_threads\":[\">= 14.18 && < 15\",\">= 16\"],\"zlib\":\">= 0.5\",\"node:zlib\":[\">= 14.18 && < 15\",\">= 16\"]}"));}}),
"[project]/node_modules/is-core-module/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var hasOwn = __turbopack_context__.r("[project]/node_modules/hasown/index.js [instrumentation] (ecmascript)");
function specifierIncluded(current, specifier) {
    var nodeParts = current.split('.');
    var parts = specifier.split(' ');
    var op = parts.length > 1 ? parts[0] : '=';
    var versionParts = (parts.length > 1 ? parts[1] : parts[0]).split('.');
    for(var i = 0; i < 3; ++i){
        var cur = parseInt(nodeParts[i] || 0, 10);
        var ver = parseInt(versionParts[i] || 0, 10);
        if (cur === ver) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        }
        if (op === '<') {
            return cur < ver;
        }
        if (op === '>=') {
            return cur >= ver;
        }
        return false;
    }
    return op === '>=';
}
function matchesRange(current, range) {
    var specifiers = range.split(/ ?&& ?/);
    if (specifiers.length === 0) {
        return false;
    }
    for(var i = 0; i < specifiers.length; ++i){
        if (!specifierIncluded(current, specifiers[i])) {
            return false;
        }
    }
    return true;
}
function versionIncluded(nodeVersion, specifierValue) {
    if (typeof specifierValue === 'boolean') {
        return specifierValue;
    }
    var current = typeof nodeVersion === 'undefined' ? process.versions && process.versions.node : nodeVersion;
    if (typeof current !== 'string') {
        throw new TypeError(typeof nodeVersion === 'undefined' ? 'Unable to determine current node version' : 'If provided, a valid node version is required');
    }
    if (specifierValue && typeof specifierValue === 'object') {
        for(var i = 0; i < specifierValue.length; ++i){
            if (matchesRange(current, specifierValue[i])) {
                return true;
            }
        }
        return false;
    }
    return matchesRange(current, specifierValue);
}
var data = __turbopack_context__.r("[project]/node_modules/is-core-module/core.json (json)");
module.exports = function isCore(x, nodeVersion) {
    return hasOwn(data, x) && versionIncluded(nodeVersion, data[x]);
};
}}),
"[project]/node_modules/function-bind/implementation.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}}),
"[project]/node_modules/function-bind/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var implementation = __turbopack_context__.r("[project]/node_modules/function-bind/implementation.js [instrumentation] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}}),
"[project]/node_modules/hasown/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/node_modules/function-bind/index.js [instrumentation] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/chalk/source/templates.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi;
const ESCAPES = new Map([
    [
        'n',
        '\n'
    ],
    [
        'r',
        '\r'
    ],
    [
        't',
        '\t'
    ],
    [
        'b',
        '\b'
    ],
    [
        'f',
        '\f'
    ],
    [
        'v',
        '\v'
    ],
    [
        '0',
        '\0'
    ],
    [
        '\\',
        '\\'
    ],
    [
        'e',
        '\u001B'
    ],
    [
        'a',
        '\u0007'
    ]
]);
function unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    }
    return ESCAPES.get(c) || c;
}
function parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks){
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
            results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
            results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character)=>escape ? unescape(escape) : character));
        } else {
            throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
    }
    return results;
}
function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while((matches = STYLE_REGEX.exec(style)) !== null){
        const name = matches[1];
        if (matches[2]) {
            const args = parseArguments(name, matches[2]);
            results.push([
                name
            ].concat(args));
        } else {
            results.push([
                name
            ]);
        }
    }
    return results;
}
function buildStyle(chalk, styles) {
    const enabled = {};
    for (const layer of styles){
        for (const style of layer.styles){
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
    }
    let current = chalk;
    for (const [styleName, styles] of Object.entries(enabled)){
        if (!Array.isArray(styles)) {
            continue;
        }
        if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
    }
    return current;
}
module.exports = (chalk, temporary)=>{
    const styles = [];
    const chunks = [];
    let chunk = [];
    // eslint-disable-next-line max-params
    temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character)=>{
        if (escapeCharacter) {
            chunk.push(unescape(escapeCharacter));
        } else if (style) {
            const string = chunk.join('');
            chunk = [];
            chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
            styles.push({
                inverse,
                styles: parseStyle(style)
            });
        } else if (close) {
            if (styles.length === 0) {
                throw new Error('Found extraneous } in Chalk template literal');
            }
            chunks.push(buildStyle(chalk, styles)(chunk.join('')));
            chunk = [];
            styles.pop();
        } else {
            chunk.push(character);
        }
    });
    chunks.push(chunk.join(''));
    if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
        throw new Error(errMsg);
    }
    return chunks.join('');
};
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/chalk/source/util.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const stringReplaceAll = (string, substring, replacer)=>{
    let index = string.indexOf(substring);
    if (index === -1) {
        return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = '';
    do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
    }while (index !== -1)
    returnValue += string.substr(endIndex);
    return returnValue;
};
const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index)=>{
    let endIndex = 0;
    let returnValue = '';
    do {
        const gotCR = string[index - 1] === '\r';
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
        endIndex = index + 1;
        index = string.indexOf('\n', endIndex);
    }while (index !== -1)
    returnValue += string.substr(endIndex);
    return returnValue;
};
module.exports = {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
};
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/chalk/source/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const ansiStyles = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/ansi-styles/index.js [instrumentation] (ecmascript)");
const { stdout: stdoutColor, stderr: stderrColor } = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/supports-color/index.js [instrumentation] (ecmascript)");
const { stringReplaceAll, stringEncaseCRLFWithFirstIndex } = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/chalk/source/util.js [instrumentation] (ecmascript)");
// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
    'ansi',
    'ansi',
    'ansi256',
    'ansi16m'
];
const styles = Object.create(null);
const applyOptions = (object, options = {})=>{
    if (options.level > 3 || options.level < 0) {
        throw new Error('The `level` option should be an integer from 0 to 3');
    }
    // Detect level if not set manually
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
};
class ChalkClass {
    constructor(options){
        return chalkFactory(options);
    }
}
const chalkFactory = (options)=>{
    const chalk = {};
    applyOptions(chalk, options);
    chalk.template = (...arguments_)=>chalkTag(chalk.template, ...arguments_);
    Object.setPrototypeOf(chalk, Chalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.constructor = ()=>{
        throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
    };
    chalk.template.Instance = ChalkClass;
    return chalk.template;
};
function Chalk(options) {
    return chalkFactory(options);
}
for (const [styleName, style] of Object.entries(ansiStyles)){
    styles[styleName] = {
        get () {
            const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
            Object.defineProperty(this, styleName, {
                value: builder
            });
            return builder;
        }
    };
}
styles.visible = {
    get () {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, 'visible', {
            value: builder
        });
        return builder;
    }
};
const usedModels = [
    'rgb',
    'hex',
    'keyword',
    'hsl',
    'hsv',
    'hwb',
    'ansi',
    'ansi256'
];
for (const model of usedModels){
    styles[model] = {
        get () {
            const { level } = this;
            return function(...arguments_) {
                const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
                return createBuilder(this, styler, this._isEmpty);
            };
        }
    };
}
for (const model of usedModels){
    const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
        get () {
            const { level } = this;
            return function(...arguments_) {
                const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
                return createBuilder(this, styler, this._isEmpty);
            };
        }
    };
}
const proto = Object.defineProperties(()=>{}, {
    ...styles,
    level: {
        enumerable: true,
        get () {
            return this._generator.level;
        },
        set (level) {
            this._generator.level = level;
        }
    }
});
const createStyler = (open, close, parent)=>{
    let openAll;
    let closeAll;
    if (parent === undefined) {
        openAll = open;
        closeAll = close;
    } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
    }
    return {
        open,
        close,
        openAll,
        closeAll,
        parent
    };
};
const createBuilder = (self, _styler, _isEmpty)=>{
    const builder = (...arguments_)=>{
        // Single argument is hot path, implicit coercion is faster than anything
        // eslint-disable-next-line no-implicit-coercion
        return applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    // `__proto__` is used because we must return a function, but there is
    // no way to create a function with a different prototype
    builder.__proto__ = proto; // eslint-disable-line no-proto
    builder._generator = self;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
};
const applyStyle = (self, string)=>{
    if (self.level <= 0 || !string) {
        return self._isEmpty ? '' : string;
    }
    let styler = self._styler;
    if (styler === undefined) {
        return string;
    }
    const { openAll, closeAll } = styler;
    if (string.indexOf('\u001B') !== -1) {
        while(styler !== undefined){
            // Replace any instances already present with a re-opening code
            // otherwise only the part of the string until said closing code
            // will be colored, and the rest will simply be 'plain'.
            string = stringReplaceAll(string, styler.close, styler.open);
            styler = styler.parent;
        }
    }
    // We can move both next actions out of loop, because remaining actions in loop won't have
    // any/visible effect on parts we add here. Close the styling before a linebreak and reopen
    // after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
};
let template;
const chalkTag = (chalk, ...strings)=>{
    const [firstString] = strings;
    if (!Array.isArray(firstString)) {
        // If chalk() was called by itself or with a string,
        // return the string itself as a string.
        return strings.join(' ');
    }
    const arguments_ = strings.slice(1);
    const parts = [
        firstString.raw[0]
    ];
    for(let i = 1; i < firstString.length; i++){
        parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    }
    if (template === undefined) {
        template = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/chalk/source/templates.js [instrumentation] (ecmascript)");
    }
    return template(chalk, parts.join(''));
};
Object.defineProperties(Chalk.prototype, styles);
const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({
    level: stderrColor ? stderrColor.level : 0
}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;
// For TypeScript
chalk.Level = {
    None: 0,
    Basic: 1,
    Ansi256: 2,
    TrueColor: 3,
    0: 'None',
    1: 'Basic',
    2: 'Ansi256',
    3: 'TrueColor'
};
module.exports = chalk;
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-name/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/conversions.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/* MIT license */ /* eslint-disable no-mixed-operators */ const cssKeywords = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-name/index.js [instrumentation] (ecmascript)");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)){
    reverseKeywords[cssKeywords[key]] = key;
}
const convert = {
    rgb: {
        channels: 3,
        labels: 'rgb'
    },
    hsl: {
        channels: 3,
        labels: 'hsl'
    },
    hsv: {
        channels: 3,
        labels: 'hsv'
    },
    hwb: {
        channels: 3,
        labels: 'hwb'
    },
    cmyk: {
        channels: 4,
        labels: 'cmyk'
    },
    xyz: {
        channels: 3,
        labels: 'xyz'
    },
    lab: {
        channels: 3,
        labels: 'lab'
    },
    lch: {
        channels: 3,
        labels: 'lch'
    },
    hex: {
        channels: 1,
        labels: [
            'hex'
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            'keyword'
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            'ansi16'
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            'ansi256'
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            'h',
            'c',
            'g'
        ]
    },
    apple: {
        channels: 3,
        labels: [
            'r16',
            'g16',
            'b16'
        ]
    },
    gray: {
        channels: 1,
        labels: [
            'gray'
        ]
    }
};
module.exports = convert;
// Hide .channels and .labels properties
for (const model of Object.keys(convert)){
    if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model);
    }
    if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
        value: labels
    });
}
convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
        h = 0;
    } else if (r === max) {
        h = (g - b) / delta;
    } else if (g === max) {
        h = 2 + (b - r) / delta;
    } else if (b === max) {
        h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
        h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = delta / (max + min);
    } else {
        s = delta / (2 - max - min);
    }
    return [
        h,
        s * 100,
        l * 100
    ];
};
convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
            h = bdif - gdif;
        } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
        return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)){
        const value = cssKeywords[keyword];
        // Compute comparative distance
        const distance = comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
};
convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) {
        t2 = l * (1 + s);
    } else {
        t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
            t3++;
        }
        if (t3 > 1) {
            t3--;
        }
        if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
            val = t2;
        } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
            val = t1;
        }
        rgb[i] = val * 255;
    }
    return rgb;
};
convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    // Wh + bl cant be > 1
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) {
        f = 1 - f;
    }
    const n = wh + f * (v - wh); // Linear interpolation
    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
        h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) {
        return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
        ansi += 60;
    }
    return ansi;
};
convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
        if (r < 8) {
            return 16;
        }
        if (r > 248) {
            return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
convert.ansi16.rgb = function(args) {
    let color = args % 10;
    // Handle greyscale
    if (color === 0 || color === 7) {
        if (args > 50) {
            color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
convert.ansi256.rgb = function(args) {
    // Handle greyscale
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
        return [
            0,
            0,
            0
        ];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
        colorString = colorString.split('').map((char)=>{
            return char + char;
        }).join('');
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
        grayscale = min / (1 - chroma);
    } else {
        grayscale = 0;
    }
    if (chroma <= 0) {
        hue = 0;
    } else if (max === r) {
        hue = (g - b) / chroma % 6;
    } else if (max === g) {
        hue = 2 + (b - r) / chroma;
    } else {
        hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
    }
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) {
        f = (v - c) / (1 - c);
    }
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) {
        return [
            g * 255,
            g * 255,
            g * 255
        ];
    }
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */ mg = (1.0 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) {
        f = c / v;
    }
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
    }
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
        g = (v - c) / (1 - c);
    }
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
convert.gray.hsv = convert.gray.hsl;
convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/route.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const conversions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/conversions.js [instrumentation] (ecmascript)");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function buildGraph() {
    const graph = {};
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys(conversions);
    for(let len = models.length, i = 0; i < len; i++){
        graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
        };
    }
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
            continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
};
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const conversions = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/conversions.js [instrumentation] (ecmascript)");
const route = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/route.js [instrumentation] (ecmascript)");
const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        return fn(args);
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
function wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        const result = fn(args);
        // We're assuming the result is an array here.
        // see notice in conversions.js; don't use box types
        // in conversion functions.
        if (typeof result === 'object') {
            for(let len = result.length, i = 0; i < len; i++){
                result[i] = Math.round(result[i]);
            }
        }
        return result;
    };
    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
models.forEach((fromModel)=>{
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
        value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
        value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
    });
});
module.exports = convert;
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/ansi-styles/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const wrapAnsi16 = (fn, offset)=>(...args)=>{
        const code = fn(...args);
        return `\u001B[${code + offset}m`;
    };
const wrapAnsi256 = (fn, offset)=>(...args)=>{
        const code = fn(...args);
        return `\u001B[${38 + offset};5;${code}m`;
    };
const wrapAnsi16m = (fn, offset)=>(...args)=>{
        const rgb = fn(...args);
        return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
const ansi2ansi = (n)=>n;
const rgb2rgb = (r, g, b)=>[
        r,
        g,
        b
    ];
const setLazyProperty = (object, property, get)=>{
    Object.defineProperty(object, property, {
        get: ()=>{
            const value = get();
            Object.defineProperty(object, property, {
                value,
                enumerable: true,
                configurable: true
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
};
/** @type {typeof import('color-convert')} */ let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground)=>{
    if (colorConvert === undefined) {
        colorConvert = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/color-convert/index.js [instrumentation] (ecmascript)");
    }
    const offset = isBackground ? 10 : 0;
    const styles = {};
    for (const [sourceSpace, suite] of Object.entries(colorConvert)){
        const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
        if (sourceSpace === targetSpace) {
            styles[name] = wrap(identity, offset);
        } else if (typeof suite === 'object') {
            styles[name] = wrap(suite[targetSpace], offset);
        }
    }
    return styles;
};
function assembleStyles() {
    const codes = new Map();
    const styles = {
        modifier: {
            reset: [
                0,
                0
            ],
            // 21 isn't widely supported and 22 does the same thing
            bold: [
                1,
                22
            ],
            dim: [
                2,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            inverse: [
                7,
                27
            ],
            hidden: [
                8,
                28
            ],
            strikethrough: [
                9,
                29
            ]
        },
        color: {
            black: [
                30,
                39
            ],
            red: [
                31,
                39
            ],
            green: [
                32,
                39
            ],
            yellow: [
                33,
                39
            ],
            blue: [
                34,
                39
            ],
            magenta: [
                35,
                39
            ],
            cyan: [
                36,
                39
            ],
            white: [
                37,
                39
            ],
            // Bright color
            blackBright: [
                90,
                39
            ],
            redBright: [
                91,
                39
            ],
            greenBright: [
                92,
                39
            ],
            yellowBright: [
                93,
                39
            ],
            blueBright: [
                94,
                39
            ],
            magentaBright: [
                95,
                39
            ],
            cyanBright: [
                96,
                39
            ],
            whiteBright: [
                97,
                39
            ]
        },
        bgColor: {
            bgBlack: [
                40,
                49
            ],
            bgRed: [
                41,
                49
            ],
            bgGreen: [
                42,
                49
            ],
            bgYellow: [
                43,
                49
            ],
            bgBlue: [
                44,
                49
            ],
            bgMagenta: [
                45,
                49
            ],
            bgCyan: [
                46,
                49
            ],
            bgWhite: [
                47,
                49
            ],
            // Bright color
            bgBlackBright: [
                100,
                49
            ],
            bgRedBright: [
                101,
                49
            ],
            bgGreenBright: [
                102,
                49
            ],
            bgYellowBright: [
                103,
                49
            ],
            bgBlueBright: [
                104,
                49
            ],
            bgMagentaBright: [
                105,
                49
            ],
            bgCyanBright: [
                106,
                49
            ],
            bgWhiteBright: [
                107,
                49
            ]
        }
    };
    // Alias bright black as gray (and grey)
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)){
        for (const [styleName, style] of Object.entries(group)){
            styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false
    });
    styles.color.close = '\u001B[39m';
    styles.bgColor.close = '\u001B[49m';
    setLazyProperty(styles.color, 'ansi', ()=>makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
    setLazyProperty(styles.color, 'ansi256', ()=>makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
    setLazyProperty(styles.color, 'ansi16m', ()=>makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
    setLazyProperty(styles.bgColor, 'ansi', ()=>makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
    setLazyProperty(styles.bgColor, 'ansi256', ()=>makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
    setLazyProperty(styles.bgColor, 'ansi16m', ()=>makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));
    return styles;
}
// Make the export immutable
Object.defineProperty(module, 'exports', {
    enumerable: true,
    get: assembleStyles
});
}}),
"[project]/node_modules/has-flag/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}}),
"[project]/apps/chat-ui/node_modules/@sentry/nextjs/node_modules/supports-color/index.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/node_modules/has-flag/index.js [instrumentation] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}}),
"[project]/apps/chat-ui/node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js [instrumentation] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [instrumentation] (ecmascript)": (function(__turbopack_context__) {

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
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/modern-browserslist-target.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ "use strict";
const MODERN_BROWSERSLIST_TARGET = [
    'chrome 64',
    'edge 79',
    'firefox 67',
    'opera 51',
    'safari 12'
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/dist/shared/lib/constants.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_BUILD_MANIFEST: null,
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_AMP: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_MIDDLEWARE_MANIFEST: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    DYNAMIC_CSS_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    PAGES_MANIFEST: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null,
    WEBPACK_STATS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return DEV_CLIENT_MIDDLEWARE_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DYNAMIC_CSS_MANIFEST: function() {
        return DYNAMIC_CSS_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    },
    WEBPACK_STATS: function() {
        return WEBPACK_STATS;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [instrumentation] (ecmascript)");
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/modern-browserslist-target.js [instrumentation] (ecmascript)"));
const COMPILER_NAMES = {
    client: 'client',
    server: 'server',
    edgeServer: 'edge-server'
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = '/_not-found';
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = 'phase-export';
const PHASE_PRODUCTION_BUILD = 'phase-production-build';
const PHASE_PRODUCTION_SERVER = 'phase-production-server';
const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
const PHASE_TEST = 'phase-test';
const PHASE_INFO = 'phase-info';
const PAGES_MANIFEST = 'pages-manifest.json';
const WEBPACK_STATS = 'webpack-stats.json';
const APP_PATHS_MANIFEST = 'app-paths-manifest.json';
const APP_PATH_ROUTES_MANIFEST = 'app-path-routes-manifest.json';
const BUILD_MANIFEST = 'build-manifest.json';
const APP_BUILD_MANIFEST = 'app-build-manifest.json';
const FUNCTIONS_CONFIG_MANIFEST = 'functions-config-manifest.json';
const SUBRESOURCE_INTEGRITY_MANIFEST = 'subresource-integrity-manifest';
const NEXT_FONT_MANIFEST = 'next-font-manifest';
const EXPORT_MARKER = 'export-marker.json';
const EXPORT_DETAIL = 'export-detail.json';
const PRERENDER_MANIFEST = 'prerender-manifest.json';
const ROUTES_MANIFEST = 'routes-manifest.json';
const IMAGES_MANIFEST = 'images-manifest.json';
const SERVER_FILES_MANIFEST = 'required-server-files.json';
const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
const TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST = '_clientMiddlewareManifest.json';
const DEV_CLIENT_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
const SERVER_DIRECTORY = 'server';
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts'
];
const BUILD_ID_FILE = 'BUILD_ID';
const BLOCKED_PAGES = [
    '/_document',
    '/_app',
    '/_error'
];
const CLIENT_PUBLIC_FILES_PATH = 'public';
const CLIENT_STATIC_FILES_PATH = 'static';
const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__';
const BARREL_OPTIMIZATION_PREFIX = '__barrel_optimize__';
const CLIENT_REFERENCE_MANIFEST = 'client-reference-manifest';
const SERVER_REFERENCE_MANIFEST = 'server-reference-manifest';
const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = 'interception-route-rewrite-manifest';
const DYNAMIC_CSS_MANIFEST = 'dynamic-css-manifest';
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = 'app-pages-internals';
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = 'polyfills';
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = 'webpack-runtime';
const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack';
const STATIC_PROPS_ID = '__N_SSG';
const SERVER_PROPS_ID = '__N_SSP';
const DEFAULT_SERIF_FONT = {
    name: 'Times New Roman',
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: 'Arial',
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    '/500'
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: 'client',
    server: 'server'
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    'clearImmediate',
    'setImmediate',
    'BroadcastChannel',
    'ByteLengthQueuingStrategy',
    'CompressionStream',
    'CountQueuingStrategy',
    'DecompressionStream',
    'DomException',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamDefaultController',
    'TransformStreamDefaultController',
    'WritableStreamDefaultController'
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map
}}),
"[project]/apps/chat-ui/node_modules/next/constants.js [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/apps/chat-ui/node_modules/next/dist/shared/lib/constants.js [instrumentation] (ecmascript)");
}}),

};

//# sourceMappingURL=_cb4931f3._.js.map